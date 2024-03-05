import Layout from "@/components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useGetProductByIdQuery } from "@/graphql/generated/schema";
import { LiaCannabisSolid } from "react-icons/lia";
import { GiFlowerPot } from "react-icons/gi";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { FaRegGrinTongueWink } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export default function ProductDetails() {
  const router = useRouter();
  const [total, setTotal] = useState(0);

  const { id } = router.query;

  const { data } = useGetProductByIdQuery({
    variables: { getProductByIdId: parseInt(id as string) },
    skip: typeof id === "undefined",
  });

  const product = data?.getProductById;
  

  return (
    <Layout pageTitle="A Propos">{typeof  product === "undefined" ? ("Produit Plus Disponible...") : ( 
      <div className="flex mt-[-50px]">
        
        <div className="inter-var bg-gray-50 relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[50rem] h-[40rem] rounded-xl p-10 border">
          <div className="text-2xl font-bold text-neutral-600 dark:text-white">
            {product.name}
            {/* Mandarine Fleur CBD */}
          </div>
          <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            11% CBD • 1% Max THC
          </p>
          <div className="flex-1 max-h-[87%] w-full overflow-hidden relative mt-4 rounded-sm">
            <Image
              src={product.picture}
              layout="responsive"
              width={16}
              height={9}
              objectFit="cover"
              className="max-w-full max-h-full object-cover mx-auto"
              alt="Mandarine Fleur CBD"
            />
          </div>
          <div className="flex justify-between items-center mt-20"></div>
        </div>

        <div className="mx-10 inter-var bg-gray-50 relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full h-[40rem] rounded-xl p-10 border">
          {/* <div className="text-xl font-bold text-neutral-600 dark:text-white">
            Mandarine Fleur CBD
          </div>
          <p className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300">
            11% CBD • 1% Max THC
          </p> */}
          <div>
            <div className="flex flex-row flex-nowrap m-2 bg-gray-50 dark:bg-black rounded-md">
              <div className="flex flex-col justify-between w-2/6 p-6">
                <p className="text-neutral-500 py-1 text-lg dark:text-neutral-300 flex items-center">
                  <LiaCannabisSolid className="pr-2 text-6xl" /> Cannabis Sativa
                  Hybrid
                </p>
                <p className="text-neutral-500 py-1 text-lg dark:text-neutral-300 flex items-center">
                  <LiaCannabisSolid className="pr-2 text-5xl" /> Diesel • Citrus
                </p>
                <p className="text-neutral-500 py-1 text-lg dark:text-neutral-300 flex items-center">
                  <GiFlowerPot className="pr-2 text-6xl" /> Outdoor Grow
                </p>
                <p className="text-neutral-500 py-1 text-lg dark:text-neutral-300 flex items-center">
                  <FaFontAwesomeFlag className="pr-2 mr-1 text-5xl" /> Italy
                  Nord
                </p>
                <p className="text-neutral-500 py-1 text-lg dark:text-neutral-300 flex items-center">
                  <FaBalanceScaleLeft className="pr-2 mr-1 text-5xl" /> 11% CBD
                  • 1% Max THC
                </p>
              </div>
              <div className="flex flex-col justify-center w-4/6 p-4">
                <p className="text-neutral-500 text-lg text-justify dark:text-neutral-300 leading-snug">
                  Découvrez notre Fleur de CBD Mandarine 🍊, de première qualité
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
                  expérience revigorante à tout moment 😊.
                </p>
              </div>
            </div>
          </div>
          <div className="inter-var mt-2 bg-gray-50 relative  dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[50rem] h-[11rem] rounded-sm p-5 border flex flex-col justify-between">
            <div className="flex flex-1 justify-between">
              <div className="flex flex-col justify-between w-1/2 mr-4">
                <button
                  onClick={() => setTotal(18.99)}
                  className="p-[5px] w-full bg-green-500 rounded-sm text-xl font-normal dark:text-white  focus:ring focus:ring-green-200"
                >
                  2gr € 18.99
                </button>
                <button
                  onClick={() => setTotal(34.99)}
                  className="p-[5px] w-full bg-green-500 rounded-sm text-xl font-normal dark:text-white focus:ring focus:ring-green-200"
                >
                  5gr € 34.99
                </button>
                <button
                  onClick={() => setTotal(56.99)}
                  className="p-[5px] w-full bg-green-500 rounded-sm text-xl font-normal dark:text-white focus:ring focus:ring-green-200"
                >
                  10gr € 56.99
                </button>
              </div>
              <div className="w-1/2 ml-4 flex flex-col justify-end">
                <div className="justify-end w-full text-right text-3xl ">
                  <p className="font-bold">€ {total}</p>
                </div>
                <div className="flex mb-2">
                  <p className="flex text-xl">
                    <FaCheck className="mr-2" /> In Stock
                  </p>
                </div>
                <button className="w-full py-4 rounded-sm bg-black dark:bg-gray-100 dark:text-black text-white text-2xl font-bold">
                  AJOUTE AU PANIER
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      )}
    </Layout>
  );
}
