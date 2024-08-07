import {
  GetAllProductsQuery,
  useGetAllProductsQuery,
} from "@/graphql/generated/schema";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProducts() {
  const { data } = useGetAllProductsQuery();
  const products = data?.products || [];

  return (
    <div className="pt-24">
      <div className="text-white text-3xl  w-full text-center justify-center  ">
        <h1 className="text-left my-10">Meilleures Ventes Fleur CBD</h1>
      </div>
      <div className="  items-center grid grid-cols-4"  data-testid="prod-list">
        {products.map((product) => (
          <div className="inter-var w-full bg-gray-50 relative dark:hover:shadow-2xl  dark:bg-black dark:border-white/[0.2] border-black/[0.1]  h-[25rem] rounded-sm p-2 border">
            <Link href={`/products/${product.id}`}>
              <div className="text-xl font-bold text-neutral-600 dark:text-white absolute z-10 p-2 bg-black rounded-br-lg">
                {product.price}€
              </div>
              <div className="relative h-[85%] mx-auto">
                <Image
                  src={product.picture}
                  layout="fill"
                  objectFit="cover"
                  alt="Mandarine Fleur CBD"
                  className="rounded-sm"
                />
              </div>
              <p className="text-neutral-500 text-xl max-w-sm mt-2 dark:text-neutral-300">
                {product.name}
              </p>
              <p className="text-neutral-500 text-md max-w-sm dark:text-neutral-300">
                {product.potency}% CBD • {product.taste}
              </p>
              <div className="flex-1 max-h-[87%] w-full overflow-hidden relative mt-4 rounded-sm"></div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
    