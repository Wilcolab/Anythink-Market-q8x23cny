/**
 * Express router for handling comment-related API routes.
 * 
 * @module routes/api/comments
 */

 /**
    * GET /
    * Retrieves all comments from the database.
    *
    * @name GetAllComments
    * @function
    * @memberof module:routes/api/comments
    * @param {express.Request} req - Express request object
    * @param {express.Response} res - Express response object
    * @param {Function} next - Express next middleware function
    * @returns {Object[]} 200 - Array of comment objects in JSON format
    * @throws {Error} 500 - Internal server error
    */

 /**
    * DELETE /:commentId
    * Deletes a comment by its ID.
    *
    * @name DeleteCommentById
    * @function
    * @memberof module:routes/api/comments
    * @param {express.Request} req - Express request object
    * @param {express.Response} res - Express response object
    * @param {Function} next - Express next middleware function
    * @returns {void} 204 - No content on successful deletion
    * @throws {Error} 500 - Internal server error
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Get all comments
router.get("/", async (req, res, next) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        next(err);
    }
});

// Delete a comment by ID
router.delete("/:commentId", async (req, res, next) => {
    try {
        await Comment.findByIdAndDelete(req.params.commentId);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
});