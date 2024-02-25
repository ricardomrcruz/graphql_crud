import db from "./db";
import Product from "./entities/Product";

export async function clearDB() {
  const runner = db.createQueryRunner();
  await runner.query("SET session_replication_role = 'replica'");
  await Promise.all(
    db.entityMetadatas.map(async (entity) =>
      runner.query(`ALTER TABLE "${entity.tableName}" DISABLE TRIGGER ALL`)
    )
  );
  await Promise.all(
    db.entityMetadatas.map(async (entity) =>
      runner.query(`DROP TABLE IF EXISTS "${entity.tableName}" CASCADE`)
    )
  );
  await runner.query("SET session_replication_role = 'origin'");
  await db.synchronize();
}

async function main() {
  await db.initialize();
  await clearDB();

  const product1 = Product.create({
    name: "Wireless Gaming Mouse",
    description: "Ergonomic wireless gaming mouse with customizable RGB lighting.",
    picture: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg",
    price: 29.99,
  });
  
  const product2 = Product.create({
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical gaming keyboard with blue switches.",
    picture: "https://m.media-amazon.com/images/I/71zW3Jc+-PS._AC_SL1500_.jpg",
    price: 49.99,
  });
  
  const product3 = Product.create({
    name: "Gaming Headset",
    description: "Surround sound gaming headset with noise-cancelling microphone.",
    picture: "https://m.media-amazon.com/images/I/71NZ8QMPFBL._AC_SL1500_.jpg",
    price: 39.99,
  });
  
  const product4 = Product.create({
    name: "Portable SSD 1TB",
    description: "Fast transfer speeds with 1TB capacity for extensive game storage.",
    picture: "https://m.media-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg",
    price: 109.99,
  });
  
  const product5 = Product.create({
    name: "Gaming Monitor",
    description: "27 inch curved gaming monitor with 144Hz refresh rate.",
    picture: "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SL1500_.jpg",
    price: 249.99,
  });
  
  const product6 = Product.create({
    name: "Nintendo Switch",
    description: "The Nintendo Switch console for versatile gaming.",
    picture: "https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg",
    price: 299.99,
  });
  
  const product7 = Product.create({
    name: "PlayStation 5 Console",
    description: "The latest PlayStation console with ultra-high speed SSD.",
    picture: "https://m.media-amazon.com/images/I/619BkvKW35L._AC_SL1500_.jpg",
    price: 499.99,
  });
  
  const product8 = Product.create({
    name: "Xbox Series X",
    description: "The fastest, most powerful Xbox ever.",
    picture: "https://m.media-amazon.com/images/I/61f8Vp2UZFL._AC_SL1500_.jpg",
    price: 499.99,
  });
  
  const product9 = Product.create({
    name: "VR Headset",
    description: "Immersive VR headset with precise motion tracking.",
    picture: "https://m.media-amazon.com/images/I/615YaAiA-ML._AC_SL1500_.jpg",
    price: 299.99,
  });
  
  await product1.save();
  await product2.save();
  await product3.save();
  await product4.save();
  await product5.save();
  await product6.save();
  await product7.save();
  await product8.save();
  await product9.save();

  console.log("done");
}

main();
