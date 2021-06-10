import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Post } from "./Post";

@Entity("users")
class User extends BaseEntity {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Post, (post) => post.owner, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  posts: Post[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
