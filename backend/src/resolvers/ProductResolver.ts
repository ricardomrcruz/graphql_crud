import { Resolver, Query, Mutation, Arg, Int, Authorized } from "type-graphql";
import Product from "../entities/Product";
import { ProductInput } from "../entities/Product";
import { GraphQLError } from "graphql/error";

@Resolver(Product)
class ProductResolver {
  @Query(() => [Product])
  async products() {
    return Product.find();
  }

  @Query(() => Product)
  async getProductById(@Arg("id", ()=> Int) id: number){
    const product = await Product.findOne({
      where: { id }
    })
    if (!product) throw new GraphQLError("not found");
    return product;
  }

  @Authorized()
  @Mutation(() => Product)
  async createProduct(@Arg("data") data: ProductInput) {
    const newProduct = await Product.create({ ...data }).save();
    return newProduct;
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Arg("id") id: number) {
    const product = await Product.findOne({ where: { id } });
    if (product === null) {
      throw new GraphQLError("Product not found");
    }
    await product.remove();
    return true;
  }
}

export default ProductResolver;
