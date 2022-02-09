import { Size } from 'src/size/size.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Images } from './image.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title_product: string;

  @OneToMany(() => Images, (images) => images.product_data, {
    cascade: true,
  })
  image_product: Images[];

  @ManyToMany(() => Size, (size) => size.size, {
    cascade: true,
  })
  @JoinTable()
  size: Size[];

  @Column()
  description: string;

  @Column()
  price: number;
}
