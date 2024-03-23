import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Int,
  Authorized,
  Ctx,
} from "type-graphql";
import Product from "../entities/Product";
import product, { ProductInput } from "../entities/Product";
import { GraphQLError } from "graphql/error";
import jwt from "jsonwebtoken";
import env from "../env";
import { Context } from "../types";
import { UserRole } from "../entities/User";

@Resolver(Product)
class ProductResolver {
  @Query(() => [Product])
  async products() {
    return Product.find();
  }

  @Query(() => Product)
  async getProductById(@Arg("id", () => Int) id: number) {
    const product = await Product.findOne({
      where: { id },
    });
    if (!product) throw new GraphQLError("not found");
    return product;
  }

  @Authorized([UserRole.Admin])
  @Mutation(() => Product)
  async createProduct(@Arg("data") data: ProductInput, @Ctx() ctx: Context) {
    if (!ctx.currentUser) throw new GraphQLError("you need to login again.");

    if (ctx.currentUser.role !== UserRole.Admin)
      throw new GraphQLError("you dont have the permissions to do that.");

    const newProduct = await Product.create({ ...data }).save();
    return newProduct;
  }


  @Authorized([UserRole.Admin])
  @Mutation(() => Boolean)
  async deleteProduct(@Arg("id") id: number, @Ctx() ctx: Context) {
    if(!ctx.currentUser) throw new GraphQLError("you need to login again.");
    
    const product = await Product.findOne({ where: { id } });
    
    if (ctx.currentUser.role !== UserRole.Admin)
      throw new GraphQLError("you dont have the permissions to do that.")
    
    
    if (product === null) {
      throw new GraphQLError("Product not found");
    }


    await product.remove();
    return true;
  }
}

export default ProductResolver;
