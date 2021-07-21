const mongoose = require("mongoose");

const PostMessage = require("../models/postMessage");

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = new PostMessage(post);

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post found");

    const updatedPost = await PostMessage.findByIdAndUpdate(
      _id,
      { ...req.body, _id },
      {
        new: true,
      }
    );
    res.json(updatedPost);
  } catch (err) {
    console.log(err);
  }
};

const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post found");

  await PostMessage.findByIdAndRemove(_id);

  res.json({ message: "Post deleted successfully" });
};

module.exports = { createPost, deletePost, getPosts, updatePost };
