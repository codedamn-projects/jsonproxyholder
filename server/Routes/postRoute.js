const express = require("express");
const postRouter = express.Router();
let { getPosts, getSinglePost } = require("../Controllers/posts");

postRouter.get("/posts/:id", getPosts);
postRouter.get("/posts/", getPosts);

module.exports = postRouter;
