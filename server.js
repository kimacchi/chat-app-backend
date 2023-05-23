const express = require("express");
const cors = require("cors");
const PocketBase = require('pocketbase/cjs')
// import PocketBase from "pocketbase"
const {Server} = require("socket.io");

const pb = new PocketBase('http://127.0.0.1:8090');


const PORT = 4545;
const app = express();
const http = require("http").createServer(app);

const io = new Server(http, {
    cors: {
        "origin": "*"
    }
})

io.on("connection", (socket) => {
    console.log("user connected: "+socket.id);
    socket.on("join_chat", (data) => {
        socket.join(data);
        console.log(`User with id: ${socket.id} joined a chat: ${data}`)
    })
    socket.on("send_data", (data) => {
        
    })
    socket.on("disconnect", () => {
        console.log("user disconnected: "+ socket.id);
    })
})


app.get("/", async (req,res) => {
    const records = await pb.collection('chat').getFullList({
        sort: '-created',
        expand:"messages"
    })
    res.send(records)
})



http.listen(PORT, () => {
    console.log("server is running");
})