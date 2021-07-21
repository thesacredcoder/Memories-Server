const express = require("express");

const {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} = require("../controllers/posts");

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
