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
    name: "Mandarine Fleur Cbd",
    description: `Découvrez notre Fleur de CBD Mandarine 🍊, de première qualité
    et provenance italienne, riche en terpènes primaires tels que
    le b-Caryophyllène, le Myrcène, l'Humulène, le b-Pinène, et
    bien d'autres. Cette fleur primée 🏆 offre rapidement un
    soulagement du stress grâce à ses effets penchés vers la
    sativa, caractérisés par un profil de saveurs audacieux de
    citrus et de diesel, évoquant l'encens et les fruits à noyau.
    Son arôme unique et séduisant, doucement sucré, nous rappelle
    Marrakech, tandis que ses bourgeons verts collants, ses
    pistils orange vifs et ses éclats de pourpre occasionnels
    reflètent les couleurs vibrantes de la médina. Profitez d'une
    expérience revigorante à tout moment 😊.`,
    picture: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg",
    price: 29.99,
    straintype: "Cannabis Sativa",
    growtype: "Indoor",
    origin: "Nord Italie",
    potency: 10,
  });

  // Product 2
  const product2 = Product.create({
    name: "Blue Dream Essence",
    description: `Explorez la quintessence de Blue Dream 🌌, une fleur de CBD de haute qualité
  avec une origine californienne. Riche en terpènes comme le Limonène, l'Alpha-Pinène,
  et le Linalool, cette variété renommée 🏆 offre une expérience euphorisante, favorisant
  la créativité et le bien-être. Son profil gustatif combine des notes de baies fraîches
  et de pin, offrant une évasion aromatique unique. Les bourgeons sont d'un bleu-vert
  saisissant, agrémentés de pistils orange et de trichomes cristallins, évoquant une
  aventure céleste. Vivez un moment de détente pur et inspirant à chaque utilisation 😊.`,
    picture: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg",
    price: 34.99,
    straintype: "Hybrid",
    growtype: "Greenhouse",
    origin: "Californie, USA",
    potency: 12,
  });

  // Product 3
  const product3 = Product.create({
    name: "Amnesia Haze Lumière",
    description: `Plongez dans l'oubli avec notre Amnesia Haze Lumière ☀, une fleur de CBD
  légendaire d'origine néerlandaise. Cette variété, saturée en terpènes comme le
  Myrcène, le Bêta-Pinène et le Terpinolène, promet une montée vivifiante et un
  soulagement mental. Son profil de saveurs est un mélange complexe d'agrumes, de
  terre et de notes épicées, invitant à une exploration sensorielle inoubliable. Les
  bourgeons, d'un vert éclatant avec des touches de jaune, sont parsemés de pistils
  orange et enveloppés dans une couche de résine, reflétant la puissance et la
  beauté de la nature. Embarquez pour un voyage revitalisant, où chaque moment est
  une découverte 😊.`,
    picture: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg",
    price: 32.99,
    straintype: "Sativa Dominant Hybrid",
    growtype: "Outdoor",
    origin: "Pays-Bas",
    potency: 15,
  });

  // Product 4
  const product4 = Product.create({
    name: "Northern Lights Magique",
    description: `Découvrez la magie des aurores boréales avec notre Northern Lights Magique 🌠,
  une fleur de CBD de premier choix venant directement du cœur de l'Afghanistan. Elle est
  enrichie de terpènes comme le Caryophyllène, l'Humulène et le Nerolidol, offrant un
  effet apaisant profond et une relaxation musculaire. Avec son profil gustatif de
  mousse de terre, de douceur et d'épices, chaque bouffée est une échappée vers la
  tranquillité. Les bourgeons sont denses, avec une teinte pourpre profond, entrelacés
  de pistils orange et couverts de trichomes scintillants, capturant l'essence
  mystique des nuits polaires. Profitez d'une tranquillité inégalée, parfait pour une
  fin de journée relaxante 😊.`,
    picture: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg",
    price: 37.99,
    straintype: "Indica",
    growtype: "Hydroponic",
    origin: "Afghanistan",
    potency: 18,
  });

  await product1.save();
  await product2.save();
  await product3.save();
  await product4.save();

  console.log("done");
}

main();
