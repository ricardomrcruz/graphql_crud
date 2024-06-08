import { test, expect } from "@playwright/test";

import Product from "../../backend/src/entities/Product";
import { connect, disconnect } from "./dbHelpers";
import { clearDB } from "../../backend/src/db";

import User, { UserRole } from "../../backend/src/entities/User";

test.beforeAll(connect);
test.beforeEach(clearDB);
test.afterAll(disconnect);

test("can view products in db", async ({ page }) => {
  // Featured Products
  const admin = new User();
  Object.assign(admin, {
    username: "admin",
    email: "admin@app.com",
    password: "4dminAdmin@!",
  });
  await admin.save();

  const user = new User();
  Object.assign(user, {
    username: "guest",
    email: "guest@app.com",
    password: "Visitor42@!",
  });

  await user.save();

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
    picture: "/mandarine.jpg",
    price: 17.99,
    straintype: "Cannabis Sativa",
    growtype: "Indoor",
    origin: "Nord Italie",
    taste: "Diesel • Citrus",
    potency: 10,
  });

  // Product 2
  const product2 = Product.create({
    name: "Blue Dream Essence Fleur CBD",
    description: `Explorez la quintessence de Blue Dream 🌌, une fleur de CBD de haute qualité
avec une origine californienne. Riche en terpènes comme le Limonène, l'Alpha-Pinène,
et le Linalool, cette variété renommée 🏆 offre une expérience euphorisante, favorisant
la créativité et le bien-être. Son profil gustatif combine des notes de baies fraîches
et de pin, offrant une évasion aromatique unique. Les bourgeons sont d'un bleu-vert
saisissant, agrémentés de pistils orange et de trichomes cristallins, évoquant une
aventure céleste. Vivez un moment de détente pur et inspirant à chaque utilisation 😊.`,
    picture: "/bluedream.jpg",
    price: 19.99,
    straintype: "Hybrid",
    growtype: "Greenhouse",
    origin: "Californie, USA",
    taste: "Berry • Pine",
    potency: 12,
  });

  await page.goto("/");
  await page.getByRole("heading", { name: "Meilleures Ventes Fleur CBD" });

  await expect(page.getByTestId("prod-list")).toContainText(product1.name);
  await expect(page.getByTestId("prod-list")).toContainText(
    product1.price.toString()
  );

  await expect(page.getByTestId("prod-list")).toContainText(product2.name);
  await expect(page.getByTestId("prod-list")).toContainText(
    product2.price.toString()
  );
});
