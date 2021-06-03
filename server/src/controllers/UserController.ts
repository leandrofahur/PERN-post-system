import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController {
  async create(request: Request, response: Response) {
    const { username, email } = request.body;

    console.log(request.body);
    const usersRepository = getRepository(User);

    const user = usersRepository.create({
      username,
      email,
    });

    await usersRepository.save(user);

    return response.json(user);
  }
}

export { UserController };
