import { Router } from "express";
import { CommentController } from "../controllers/CommentController";

const commentRoute = Router();
const commentController = new CommentController();

/*
 * @route:  POST /comments/:post_id
 * @desc:   Register a comment in a post.
 * @access: Public
 */
commentRoute.post("/comments/:post_id", commentController.create);

/*
 * @route:  GET /comments/
 * @desc:   Fetch all comments.
 * @access: Public
 */
commentRoute.get("/comments", commentController.find);

/*
 * @route:  GET /comments/:post_id
 * @desc:   Fetch all comments from a post.
 * @access: Public
 */
commentRoute.get("/comments/:post_id", commentController.findCommentsById);

export { commentRoute };
