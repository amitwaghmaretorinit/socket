import express from "express";
import UserController from "./controllers/UserController/index.js";

const Router = express.Router();

Router.get("/", (req, res) => res.send("Welcome!"));
Router.get("/users", UserController.get);
Router.post("/register_user", UserController.registerUser);

//Follow unfollow users like, upvote, delete post, comment

export default Router;
