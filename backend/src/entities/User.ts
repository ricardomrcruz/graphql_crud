import { IsEmail, IsStrongPassword, Length } from "class-validator";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import { hash } from 'argon2';


@Entity()
@ObjectType()
export default class User extends BaseEntity {
    password:string


    //voir docv type orm
    @BeforeInsert()
    async hashPassword() {
        this.hashedPassword = await hash(this.password);
    }



    @Field()
    @PrimaryGeneratedColumn()
    id:number;

    @Field()
    @Column()
    email:string;

    @Field()
    @Column()
    username:string;

  
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

