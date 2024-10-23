const express = require("express");
const { getPost, deletePost, editPost, getPosts, addPost } = require("../controllers/api-post-controller");

const router = express.Router();

// get all
router.get("/api/posts", getPosts);
// add new post
router.post("/api/post", addPost);
// get post by id
router.get("/api/post/:id", getPost);
// delete post by id
router.delete("/api/post/:id", deletePost);
// upd post by id
router.put("/api/post/:id", editPost);

module.exports = router;
