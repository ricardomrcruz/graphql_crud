import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";

@Entity()
@ObjectType()
export default class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  straintype: string;

  @Column()
  @Field()
  growtype: string;

  @Column()
  @Field()
  origin: string;

  @Column()
  @Field()
  potency: number;
  
  @Column()
  @Field()
  taste: string;

  @Column()
  @Field()
  picture: string;

  @Column('decimal', {precision: 10, scale:2})
  @Field()
  price: number;
}

@InputType()
export class ProductInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  picture: string;

  @Field()
  price: number;

  @Field()
  straintype: string;

  @Field()
  growtype: string;

  @Field()
  taste: string;

  @Field()
  origin: string;

  @Field()
  potency: number;
}
