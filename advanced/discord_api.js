// tokens goes here

const fetch = require('node-fetch')

const twitter_url = 'https://twitter.com/CryptoKitties'
const discord_url = 'https://discord.com/invite/cryptokitties'

async function getTwitterFollowers(url){

    // getting the id
    const [id] = url.split('/').slice(-1)
    const res = await fetch(`https://api.twitter.com/1.1/users/show.json?screen_name=${id}`, {
      headers: {
          Authorization: `Bearer ${b_token}`,
      }
    })

    const data = await res.json()
    
    const followers_count = data.followers_count

    console.log(followers_count)
    return followers_count

}


async function getDiscordMembers(url){
    const [id] = url.split('/').slice(-1)

    // this is with fetch
    console.log("Trying with node-fetch")
    const res = await fetch(`https://discord.com/api/invites/${id}?with_counts=true`, {
      headers: {
        Authorization: `Bot ${discord_id}`,
        "X-RateLimit-Limit": 5
      }
    })

    const data = await res.json()
    
    const followers_count = data.approximate_member_count

    console.log(followers_count)
    return followers_count 
}

// use promise resolve to fetch the response
function getDiscordPromises(url) {

    const [id] = url.split('/').slice(-1)

    fetch(`https://discord.com/api/invites/${id}?with_counts=true `, {
      headers: {
          Authorization: `Bot ${discord_id}`,
      }
    }).then((res) => {
        // getting the json part
        return res.json() 
    }).then( x => {
        console.log(x)
    })
}
getDiscordPromises(discord_url)
//getDiscordMembers(discord_url)
