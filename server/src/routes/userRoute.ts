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
userRoute.get("/users", userController.find);

export { userRoute };
