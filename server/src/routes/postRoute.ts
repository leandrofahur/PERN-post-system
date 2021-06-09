import { Router } from "express";
import { PostController } from "../controllers/PostController";

const postRoute = Router();
const postController = new PostController();

/*
 * @route:  POST /posts/:user_id
 * @desc:   Register a post from a user.
 * @access: Public
 */
postRoute.post("/posts/:user_id", postController.create);

/*
 * @route:  GET /posts
 * @desc:   Fetch all posts.
 * @access: Public
 */
postRoute.get("/posts", postController.find);

/*
 * @route:  GET /posts/:user_id
 * @desc:   Fetch all posts from a user.
 * @access: Public
 */
postRoute.get("/posts/:user_id", postController.findPostsById);

export { postRoute };
