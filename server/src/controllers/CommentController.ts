import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { CommentsRepository } from "../repositories/CommentsRepository";

class CommentController {
  async create(request: Request, response: Response) {
    try {
      const { post_id } = request.params;
      const { content } = request.body;
      const commentsRepository = getCustomRepository(CommentsRepository);

      if (!content) {
        return response.status(400).json({
          error: "Content cannot be blank.",
        });
      }

      if (!post_id) {
        return response.status(400).json({
          error: "Every comment needs a post.",
        });
      }

      const comment = commentsRepository.create({
        post_id,
        content,
      });

      await commentsRepository.save(comment);

      return response.status(201).json(comment);
    } catch (error) {
      console.error(error.message);
      response.status(500).json({
        error: "Server error!",
      });
    }
  }

  async find(request: Request, response: Response) {
    try {
      const commentsRepository = getCustomRepository(CommentsRepository);
      const comments = await commentsRepository.find();

      if (!comments) {
        return response.status(400).json({
          error: "Table is not populated",
        });
      }

      return response.status(201).json(comments);
    } catch (error) {
      console.error(error.message);
      response.status(500).json({
        error: "Server error!",
      });
    }
  }

  async findCommentsById(request: Request, response: Response) {
    try {
      const { post_id } = request.params;
      const commentsRepository = getCustomRepository(CommentsRepository);

      const comments = await commentsRepository.find({
        post_id,
      });

      return response.status(201).json(comments);
    } catch (error) {
      console.error(error.message);
      response.status(500).json({
        error: "Server error!",
      });
    }
  }
}

export { CommentController };
