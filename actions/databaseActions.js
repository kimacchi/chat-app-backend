const PocketBase = require('pocketbase/cjs')
const pb = new PocketBase('http://127.0.0.1:8090')

pb.autoCancellation(false);
const addUserToDatabase = async (username) => {
    const users = await pb.collection("users").getFullList({
        filter: `username = '${username}'`
    })
    if(users.length == 0){
        const result = await pb.collection("users").create({
            "username": username,
            "activeChats": []
        })
        console.log(result);
    }
}

const getUsers = async (username = "") => {
    if(!username){
        return await pb.collection("users").getFullList({
            expand: "activeChats,activeChats.messages"
        })
    }else{
        return await pb.collection("users").getFullList({
            expand: "activeChats,activeChats.messages",
            filter: `username != '${username}'`
        })
    }
}

const getUser = async (username) => {
    return await pb.collection("users").getFullList({
        expand: "activeChats,activeChats.messages",
        filter: `username = '${username}'`
    })
}

module.exports = {
    addUserToDatabase,
    getUsers,
    getUser
}