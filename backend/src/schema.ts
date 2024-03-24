import { buildSchema } from 'type-graphql';
import ProductResolver from './resolvers/ProductResolver';
import UserResolver from './resolvers/UserResolver';
import { authChecker } from './auth';

export default buildSchema({
  resolvers: [ProductResolver, UserResolver],
  authChecker,
});