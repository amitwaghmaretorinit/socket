import express from "express";
import http from "http";
import bodyParser from "body-parser";
import { Server } from "socket.io";
import cors from "cors";
import Routes from "./src/routes.js";
import db from "./src/seq.js";
import MessagesController from "./src/controllers/MessagesController/index.js";

const app = express();
app.use(cors());
app.options("*", cors());
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(Routes);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.on("join", ({ fromId }) => {
    console.log({ fromId });
  });

  socket.on("send", async ({ fromId, toId, msg }) => {
    const link = "message" + fromId;
    const messageId = await MessagesController.saveMessage({
      fromId,
      toId,
      msg,
    });
    io.emit(link, { fromId, toId, msg,messageId });
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});
db.sequelize.sync();

server.listen(4000, () => {
  console.log("server started at", 4000);
});
