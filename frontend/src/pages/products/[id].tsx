import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useGetProductByIdQuery } from "@/graphql/generated/schema";
import { LiaCannabisSolid } from "react-icons/lia";
import { GiFlowerPot } from "react-icons/gi";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { FaBalanceScaleLeft } from "react-icons/fa";

export default function ProductDetails() {
  const router = useRouter();

  const { id } = router.query;

  const { data } = useGetProductByIdQuery({
    variables: { getProductByIdId: parseInt(id as string) },
    skip: typeof id === "undefined",
  });
  return (
    <Layout pageTitle="A Propos">
      <div className="flex mt-[-50px]">
      <div className="inter-var bg-gray-50 relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-[40rem] rounded-xl p-10 border">
        <div className="text-2xl font-bold text-neutral-600 dark:text-white">
          Mandarine Fleur CBD
        </div>
        <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          11% CBD • 1% Max THC
        </p>
        <div className="flex-1 max-h-[87%] w-full overflow-hidden relative mt-4 rounded-sm">
          <Image
            src="/mandarine.jpg"
            layout="responsive"
            width={16}
            height={9}
            objectFit="cover"
            className="max-w-full max-h-full object-cover mx-auto"
            alt="Mandarine Fleur CBD"
          />
        </div>
        <div className="flex justify-between items-center mt-20">
          
        </div>
      </div>

      <div className="mx-10 inter-var bg-gray-50 relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-[40rem] rounded-xl p-10 border">
        <div className="text-xl font-bold text-neutral-600 dark:text-white">
          Mandarine Fleur CBD
        </div>
        <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          11% CBD • 1% Max THC
        </p>
       
        <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
        <LiaCannabisSolid /><GiFlowerPot /><FaFontAwesomeFlag /><FaBalanceScaleLeft />
        </p>
       
        <div className=" flex justify-between items-center mt-20">
          <button className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </button>
          <button className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Sign up
          </button>
        </div>
      </div>
      
      
      
      
      
      </div>
    </Layout>
  );
}
