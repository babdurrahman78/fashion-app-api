import { Cart } from 'src/cart/cart.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  hashedRt?: string;

  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];
}
