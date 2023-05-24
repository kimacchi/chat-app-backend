const express = require("express");
const cors = require("cors");
const PocketBase = require('pocketbase/cjs')
const {addUserToDatabase, getUsers, getUser} = require("./actions/databaseActions");
const bodyParser = require("body-parser");
// import PocketBase from "pocketbase"
const {Server} = require("socket.io");

const pb = new PocketBase('http://127.0.0.1:8090');


const PORT = 4545;
const app = express();
const http = require("http").createServer(app);
app.use(cors({
    origin: "*"
}))

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

app.get("/user", async (req, res) => {
    const username= req.query.username;
    console.log("this is the username: " + username)
    const user = await getUser(username)
    console.log(user[0])
    res.send(user[0]);
})

app.get("/users", async (req,res) => {
    const username = req.query.username ? req.query.username : "" ;
    res.send(await getUsers(username));
})

app.post("/users", bodyParser.json(),async (req,res) => {
    const user = addUserToDatabase(req.body.username);
    res.send(user);
})

// TODO: create a patch request for updating the user's active chats


http.listen(PORT, () => {
    console.log("server is running");
})