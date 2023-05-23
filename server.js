const express = require("express");
const cors = require("cors");


const PORT = 4545;
const app = express();
const http = require("http").createServer(app);

const io = require("socket.io")(http, {
    cors: {
        origin: "*",
    }
})

app.get("/", (req,res) => {
    res.send("Hello world!");
})

let userList = new Map();

io.on("connection", (socket) => {
    let username = socket.handshake.query.username;
    addUser(username, socket.id);

    socket.broadcast.emit("user-list", [...userList.keys()])
    socket.on("message", (msg)=>{
        socket.broadcast.emit("message-broadcast", {
            message: msg,
            username: username
        })
    })
    socket.on("disconnect", (reason) => {
        deleteUser(username, socket.id)
    })
})

function addUser(username, id){
    if(!userList.has(username)){
        userList.set(username, new Set(id))
    } else{
        userList.get(username).add(id);
    }
}

function deleteUser(username, id){
    if(userList.has(username)){
        let userIds = userList.get(username);
        if(userIds.size == 0){
            userList.delete(username)
        }
    }
}

http.listen(PORT, () => {
    console.log("server is running");
})