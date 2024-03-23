import { IsEmail, IsStrongPassword, Length } from "class-validator";
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
} from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import { hash } from "argon2";

export enum UserRole {
  Admin = "admin",
  Visitor = "visitor",
}


@Entity()
@ObjectType()
export default class User extends BaseEntity {
  password: string;

  //voir docv type orm
  @BeforeInsert()
  async hashPassword() {
    this.hashedPassword = await hash(this.password);
  }

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  username: string;

  @Column()
  hashedPassword: string;

  @Column({
    default:
      "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png",
  })

  @Field()
  avatar: string;

  @Field()
  @Column({enum: UserRole, default: UserRole.Visitor})
  role: UserRole;

}

@InputType()
export class NewUserInput {
  @IsEmail()
  @Field()
  email: string;

  @Length(2, 30)
  @Field()
  username: string;

  @Length(2, 30)
  @Field({ nullable: true })
  avatar?: string;

  
  @Field()
  @IsStrongPassword()
  password: string;


   }


@InputType()
export class LoginInput {
  @IsEmail()
  @Field()
  email: string;


  @Field()
  @IsStrongPassword()
  password: string;
}


@InputType()
export class UpdateUserInput{
  @Length(2, 30)
  @Field({ nullable: true })
  username: string;

  @Length(2, 30)
  @Field({ nullable: true })
  avatar?: string;
}