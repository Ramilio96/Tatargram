const mongoose = require("mongoose");
const router = require("express").Router();
const PostMessage = require("../models/post.model");

router.route("/").get(async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.route("/").post(async (req, res) => {
  const { title, message, url } = req.body;
  try {
    const newPostMessage = new PostMessage({ title, message, url });
    await newPostMessage.save();
    res.json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const postMessage = await PostMessage.findById(id);
    postMessage.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.route("/:id").patch(async (req, res) => {
  const { id } = req.params;
  const { title, message, url } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { title, message, url, _id: id };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
  res.json(updatedPost);
});

router.route("/:id").delete(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted" });
});

router.route("/:id/like").patch(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await PostMessage.findById(id);

  const updatePost = await PostMessage.findByIdAndUpdate(
    id,
    {
      likeCount: post.likeCount + 1,
    },
    { new: true }
  );

  res.json(updatePost);
});

module.exports = router;
