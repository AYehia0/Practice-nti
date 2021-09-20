const Post = require('../models/post')

const addPost = async(req, res)=>{
    try{
        const post = new Post({
            ...req.body,
            userId: req.user._id
        })
        await post.save()
        res.status(200).send({apiStatus:true, data:post, message:"data added"})
    }
    catch(e){
        res.status(500).send({apiStatus:false, data:e.message, message: "error adding post data" })
    }
}

const posts= async (req,res)=>{
    try{

        // getting all the posts
        await req.user.populate({
            path: "getPosts"
        })

        res.status(200).send({apiStatus:true, data:req.user.getPosts, message:"data added"})
    }
    catch(e){
        res.status(500).send({apiStatus:false, data:e.message, message: "error adding post data"})
    }
}

const addComment = async (req, res) => {
    try{
        // getting the user's id 
        const userId = req.user._id
        const postId = req.params.id

        const data = {
            userId: userId,
            text: req.body.text
        }

        // updating
        const comment = await Post.findOneAndUpdate({_id: postId}, {"$push": { comments: data }})

        res.status(200).send( { apiStatus:true, data:comment, message:"Comment has been added"})

    }catch(e) {
        res.status(500).send({ apiStatus:false, data:e.message, message: "Error adding a comment" })
    }

}

const toggleLike = async (req, res) => {
    try{

        // toggle the like, check if there is a like 
        const userId = req.user._id
        const postId = req.params.id

        const post = await Post.findOne({_id: postId})
        //return res.send(post.likes)
        const exists = post.likes.filter(like => { return String(like.userId) === String(userId) } )

        if (exists.length != 0){
            // like exists , remove it
            await Post.findOneAndUpdate({_id: postId}, {"$pull": {"likes": {userId}} })
        }else {
            // add the like
            post.likes.push({userId})

            // save 
            await post.save()
        }

        res.status(200).send( { apiStatus:true, data:"", message:"added a like"})
    
    }catch(e) {
        res.status(500).send({ apiStatus:false, data:e.message, message: "Error liking/disliking" })
    }
}

module.exports = {addPost, posts, addComment, toggleLike}