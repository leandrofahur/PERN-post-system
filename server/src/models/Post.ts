import { type } from "os";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("posts")
class Post {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  content: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Post };
