const express = require("express");

const {
  createPost,
  deletePost,
  getPosts,
  likePost,
  updatePost,
} = require("../controllers/posts");

const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

module.exports = router;
