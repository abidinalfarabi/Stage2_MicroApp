import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  Username: string;
}
