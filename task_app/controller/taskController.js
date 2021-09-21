const Task = require('../models/task')

const addTask = async (req, res, err) => {

    try {

        // getting file info
        const fileInfo = req.file
        
        const taskData = {
            whoAdded: req.user._id,
            title: req.body.title,
            content: {
                type: JSON.parse(req.body.content).type,
                file: fileInfo.path || "",
                text: JSON.parse(req.body.content).text || "",
            }
        }
        
        // check if the user is authrized to 
        const task = new Task(taskData)

        // saving 
        await task.save()

        res.send({status: "Success", data: task})
        
    } catch (e) {
        res.send(e.message)
    }

}

// add emp to the task
const assignToTask = async (req, res, err) => {

    try {
        // getting the task id
        const taskId = req.params.id

        // people to assign hem
        const assigners = req.body.assignTo

        // finding the task to assign to 

        // check for assigners, if they exist in the db

        const task = await Task.findByIdAndUpdate(taskId, {$push: {"assignedTo": assigners }})
        
        res.send({status: "Success", data: task})

    } catch (err) {
        res.send(e.message)
    }

}

// added by people in the assignedTo list only
const addResponse = async (req, res, err) => {
    try {

        const taskId = req.params.id
        const manId = req.user._id
        // check if user in the assignedTo list 
        const task = await Task.findOne({_id: taskId})
        const assigners = task.assignedTo

        const exists = assigners.find(el => String(el) == String(manId) )

        if (exists){


            const resToAdd =  {
                empId: manId,
                data: {
                    type: JSON.parse(req.body.data).type,
                    text: JSON.parse(req.body.data).text || "",
                    file: req.file.path || ""
                }
            }


            //res.send(resToAdd)
            // add the things
            task.response.push(resToAdd)


            // saving 
            await task.save()

            res.send({status: "Success", data: task})
        }else{
            throw new Error("Can't add to this task")
        }
        
    } catch (e) {
        res.send(e.message)
    }
}


// exporting task routes
module.exports = {
    addTask,
    assignToTask,
    addResponse
}