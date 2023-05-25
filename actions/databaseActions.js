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

const addChat = async(chatId, fromId, toId) => {
    const records = await pb.collection("chat").getFullList({
        filter: `chatId ='${chatId}'`
    })
    if(records.length === 0){
        const record = await pb.collection("chat").create({
            "to": toId,
            "chatId": chatId
        })
        const user = await pb.collection("users").getOne(fromId);
        await pb.collection("users").update(fromId, {
            "activeChats":[
                ...user.activeChats,
                record.id
            ],
            "username": user.username
        })
    }
}

const addMessage = async (message, from, chat, to) => {
    const record = await pb.collection("message").create({
        text: message,
        from: from,
        to: to
    })
    const chatRecords = await pb.collection("chat").getFullList({
        filter: `chatId ='${chat}'`
    })
    if(chatRecords.length > 0){
        await pb.collection("chat").update(chatRecords[0].id, {
            messages:[
                ...chatRecords[0].messages,
                record.id
            ]
        })
    }
}


const getMessage = async (id) => {
    const resultList = await pb.collection("message").getList(1,50,{
        filter: `from = '${id}' || to = '${id}'`
    })
    const user = await pb.collection("users").getOne(id);
    return {...resultList, username: user.username}
}


module.exports = {
    addUserToDatabase,
    getUsers,
    getUser,
    addChat,
    addMessage,
    getMessage
}