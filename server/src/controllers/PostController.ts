import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { PostsRepository } from "../repositories/PostsRepository";

class PostController {
  async create(request: Request, response: Response) {
    try {
      const { content } = request.body;
      const postsRepository = getCustomRepository(PostsRepository);

      if (!content) {
        return response.status(400).json({
          error: "Content cannot be blank!",
        });
      }

      const post = postsRepository.create({
        content,
      });

      await postsRepository.save(post);

      return response.status(201).json(post);
    } catch (error) {
      console.error(error.message);
      response.status(500).json({
        error: "Server error!",
      });
    }
  }
}

export { PostController };
