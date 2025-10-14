/**
 * Express router for handling comment-related API routes.
 * 
 * @module routes/api/comments
 */

const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Comment = mongoose.model("Comment");

/**
 * GET /
 * Retrieves all comments from the database.
 */
router.get("/", async (req, res, next) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        next(error);
    }
});

/**
 * DELETE /:commentId
 * Deletes a comment by its ID.
 */
router.delete("/:commentId", async (req, res, next) => {
    try {
        const { commentId } = req.params;
        await Comment.findByIdAndDelete(commentId);
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
