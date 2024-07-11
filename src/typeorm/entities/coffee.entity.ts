import { Coffee } from '@/typeorm/types/coffee.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'coffees',
})
export class CoffeeEntity implements Coffee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  brand!: string;

  @Column('json', { nullable: true })
  flavors!: string[];
}
