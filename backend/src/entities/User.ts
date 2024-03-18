import { IsEmail, IsStrongPassword, Length } from "class-validator";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";

@Entity()
@ObjectType()
export default class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id:number;

    @Field()
    @Column()
    email:string;

    @Field()
    @Column()
    username:string;

    @Field()
    @Column()
    hashedPassword:string;

}

@InputType()
export class NewUserInput {

    @IsEmail()
    @Field()
    email:string;

    @Length(2, 30)
    @Field()
    username:string;

    @IsStrongPassword()
    @Field()
    password:string;
}

