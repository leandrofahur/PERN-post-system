import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRoute = Router();
const userController = new UserController();

userRoute.post("/users", userController.create);

export { userRoute };
