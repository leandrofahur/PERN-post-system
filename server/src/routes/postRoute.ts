import { Router } from "express";
import { PostController } from "../controllers/PostController";

const postRoute = Router();
const postController = new PostController();

postRoute.post("/posts", postController.create);

export { postRoute };
