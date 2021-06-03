import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("posts")
class Post {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Post };
