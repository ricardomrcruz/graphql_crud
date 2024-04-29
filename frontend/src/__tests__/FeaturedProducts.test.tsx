import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import FeaturedProducts from "../components/FeaturedProducts";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GetAllProductsQuery,
  useGetAllProductsQuery,
} from "@/graphql/generated/schema";

describe("FeaturedProduct card component", () => {
  it("renders correctly", () => {
    const view = render(
      <div className="pt-24">
        <div className="text-white text-3xl  w-full text-center justify-center  ">
          <h1 className="text-left my-10">Meilleures Ventes Fleur CBD</h1>
        </div>
        <div className="  items-center grid grid-cols-4">
          <div className="inter-var w-full bg-gray-50 relative dark:hover:shadow-2xl  dark:bg-black dark:border-white/[0.2] border-black/[0.1]  h-[25rem] rounded-sm p-2 border">
            <Link href={`/products/1`}>
              <div className="text-xl font-bold text-neutral-600 dark:text-white absolute z-10 p-2 bg-black rounded-br-lg">
                19.99€
              </div>
              <div className="relative h-[85%] mx-auto">
                <Image
                  src="https://img.com/i.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Mandarine Fleur CBD"
                  className="rounded-sm"
                />
              </div>
              <p className="text-neutral-500 text-xl max-w-sm mt-2 dark:text-neutral-300">
                amnesia
              </p>
              <p className="text-neutral-500 text-md max-w-sm dark:text-neutral-300">
                10% CBD • fruity
              </p>
              <div className="flex-1 max-h-[87%] w-full overflow-hidden relative mt-4 rounded-sm"></div>
            </Link>
          </div>
        </div>
      </div>
    );

    expect(view.baseElement).toMatchSnapshot();
  });
});
