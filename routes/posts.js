const express = require("express");

const {
  createPost,
  deletePost,
  getPosts,
  likePost,
  updatePost,
} = require("../controllers/posts");

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

module.exports = router;
