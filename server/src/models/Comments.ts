import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Post } from "./Post";

@Entity("comments")
class Comments extends BaseEntity {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  content: string;

  @Column()
  post_id: string;
  @ManyToOne(() => Post, (post) => post.comments)
  @JoinColumn({ name: "post_id" })
  owner: Post;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Comments };
