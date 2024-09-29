import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UsersModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  profileImage: string;

  @Column()
  maxHealthPoint: number;

  @UpdateDateColumn({ type: 'timestamp' })
  lastLogin: Date;

  @Column()
  level: number;
}
