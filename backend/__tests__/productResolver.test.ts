import { execute } from "../jest.setup";
import Product from "../src/entities/Product";
import CreateProduct from "./operations/addProducts";
import getProducts from "./operations/getProducts";
import getAdminContext from "./helpers/getAdminContext";

describe("ProductResolver", () => {
  it("should read products", async () => {
    await Product.create({
      name: "Mandarine Fleur Cbd",
      description: `Découvrez `,
      picture: "/mandarine.jpg",
      price: 17.99,
      straintype: "Cannabis Sativa",
      growtype: "Indoor",
      origin: "Nord Italie",
      taste: "Diesel • Citrus",
      potency: 10,
    }).save();
    await Product.create({
      name: "Blue Dream Essence Fleur CBD",
      description: `Explorez `,
      picture: "/bluedream.jpg",
      price: 19.99,
      straintype: "Hybrid",
      growtype: "Greenhouse",
      origin: "Californie, USA",
      taste: "Berry • Pine",
      potency: 12,
    }).save();
    const res = await execute(getProducts);
    expect(res).toMatchInlineSnapshot(`
{
  "data": {
    "products": [
      {
        "description": "Découvrez ",
        "id": "1",
        "name": "Mandarine Fleur Cbd",
        "price": 17.99,
        "taste": "Diesel • Citrus",
      },
      {
        "description": "Explorez ",
        "id": "2",
        "name": "Blue Dream Essence Fleur CBD",
        "price": 19.99,
        "taste": "Berry • Pine",
      },
    ],
  },
}
`);
  });

  it("should create a product with admin jwt", async () => {
    const res = await execute(
      CreateProduct,
      {
        data: {
          name: "product1",
        },
      },
      await getAdminContext()
    );
  });
});
