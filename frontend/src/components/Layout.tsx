import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MdLogin } from "react-icons/md";

import { useLogoutMutation, useProfileQuery } from "@/graphql/generated/schema";

export default function Layout({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle: string;
}) {
  const [logout] = useLogoutMutation();
  const { data: currentUser, client } = useProfileQuery({
    errorPolicy: "ignore",
  });

  return (
    <>
      <Head>
        <title> CBD SHOP - {pageTitle} </title>
      </Head>
      <div className="min-h-screen bg-black ">
        <div className="h-[60rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
          <p className=" relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"></p>
        </div>
      </div>
      <div className=" bg-black  ">
        <nav className="container mx-auto justify-between z-20 relative top-[-55rem] flex">
          <Link href="/" passHref className="flex">
            <Image src="/logo1.png" alt="Logo" width={350} height={50} />
          </Link>
          {currentUser ? (
            <div>
              <Link href="/" passHref>
                <button
                  className=" flex mt-12 py-2 text-sm  mr-3 px-4 bg-black hover:text-white text--slate-400 font-semibold rounded-md shadow-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 border border-slate-400"
                  onClick={async () => {
                    await logout();
                    client.resetStore();
                  }}
                >
                  Log Out
                </button>
              </Link>
            </div>
          ) : (
            <>
              <Link href="/login" passHref>
                <button className=" flex mt-10 py-2 mr-3 px-4 bg-gray-200 hover:text-white text-black font-semibold rounded-md shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75">
                  Log In
                </button>
              </Link>
            </>
          )}
        </nav>
        <div className="container mx-auto px-4 z-20 relative top-[-47rem] ">
          {children}
        </div>
      </div>
    </>
  );
}
