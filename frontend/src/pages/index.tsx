import Layout from "../components/Layout";
import React from "react";

export default function Home() {
  
  
  
  
  
  
  return (
    <Layout pageTitle="Wildmazon">
      <h1 className="text-white">Products</h1>
      <div className="inter-var bg-gray-50 relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[50rem] h-[40rem] rounded-xl p-10 border">
            <div className="text-2xl font-bold text-neutral-600 dark:text-white">
              {}
            </div>
            <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              {}% CBD • 1% Max THC
            </p>
            <div className="flex-1 max-h-[87%] w-full overflow-hidden relative mt-4 rounded-sm">
              {/* <Image
                src={product.picture}
                layout="responsive"
                width={16}
                height={9}
                objectFit="cover"
                className="max-w-full max-h-full object-cover mx-auto"
                alt="Mandarine Fleur CBD"
              /> */}
            </div>
            <div className="flex justify-between items-center mt-20"></div>
          </div>

      
    </Layout>
  );
}
