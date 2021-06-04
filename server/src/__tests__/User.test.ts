import {
  DeleteQueryBuilder,
  getConnection,
  getCustomRepository,
} from "typeorm";
import request from "supertest";
import { UsersRepository } from "../repositories/UsersRepository";
// import { PostsRepository } from "../repositories/PostsRepository";
import { app } from "../app";

import createConnection from "../database/index";

describe("Users", () => {
  let connection = null;

  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  it("should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      username: "john doe",
      email: "johndoe@email.com",
    });

    expect(response.status).toBe(201);
  });

  afterAll(async () => {
    const entities = connection.entityMetadatas;

    for (const entity of entities) {
      const repository = connection.getRepository(entity.name);
      await repository.delete({});
    }
  });
});
