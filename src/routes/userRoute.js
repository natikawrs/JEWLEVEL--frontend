const express = require("express");
const userController = require("../controllers/userController");
// const postController = require("../controllers/postController");

const router = express.Router();

router.patch("/", userController.updateUser);

// router.get("/:id/posts", postController.getAllPosts);

module.exports = router;
