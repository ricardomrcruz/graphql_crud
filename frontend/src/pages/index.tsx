import Layout from "../components/Layout";
import React from "react";

export default function Home() {
  return (
    <Layout pageTitle="Wildmazon">
      <div className="text-white text-3xl  w-full text-center justify-center m-10">
        <h1 className="">Products</h1>
      </div>
      <div className="flex w-full items-center">
       
        <div className="inter-var w-1/4 bg-gray-50 relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  h-[25rem] rounded-sm p-8 border">
          <div className="text-2xl font-bold text-neutral-600 dark:text-white">
           Product
          </div>
          <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            {}% CBD • 1% Max THC
          </p>
          <div className="flex-1 max-h-[87%] w-full overflow-hidden relative mt-4 rounded-sm">
             
          </div>
        </div>
      </div>
    </Layout>
  );
}
