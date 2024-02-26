import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { useGetProductByIdQuery } from "@/graphql/generated/schema";

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
        <div className="text-xl font-bold text-neutral-600 dark:text-white">
          Mandarine Fleur CBD
        </div>
        <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          11% CBD • 1% Max THC
        </p>
        <div className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl"
            alt="thumbnail"
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
        <div className="w-full mt-4">
         
        </div>
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
