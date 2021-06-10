import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRoute = Router();
const userController = new UserController();

/*
 * @route:  POST /users
 * @desc:   Register a user.
 * @access: Public
 */
userRoute.post("/users", userController.create);

/*
 * @route:  GET /users
 * @desc:   Fetch all users.
 * @access: Public
 */
// userRoute.get("/users", userController.find);

/*
 * @route:  GET /users/:username
 * @desc:   Fetch id by username.
 * @access: Public
 */
userRoute.get("/users/:username", userController.findByUsername);

/*
 * @route:  GET /users/user
 * @desc:   Fetch all users and their posts.
 * @access: Public
 */
userRoute.get("/users", userController.findPostsByUser);

export { userRoute };
