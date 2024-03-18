import { Arg, Resolver, Mutation } from 'type-graphql';
import User, { NewUserInput } from '../entities/User'

@Resolver()
class UserResolver{
    @Mutation(() => User)
    async createUser(@Arg('data') data: NewUserInput){
        console.log({data});
    }
}

export default UserResolver;