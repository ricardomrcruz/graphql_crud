import React from "react";
import Head from "next/head";

export default function Layout({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle: string;
}) {
  return (
    <>
      <Head>
        <title> Wildmazon - {pageTitle} </title>
      </Head>
      <div className="min-h-screen bg-black ">
        <div className="h-[60rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.9] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
          <p className=" relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            
          </p>
        </div>
      </div><div className=" bg-black  ">
      <div className="container mx-auto px-4 z-20 relative top-[-50rem] ">{children}</div></div>
      
    </>
  );
}
