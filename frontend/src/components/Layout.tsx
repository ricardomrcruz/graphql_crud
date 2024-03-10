import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
        <nav className="container mx-auto  z-20 relative top-[-55rem] flex">
          <Link href="/" passHref className="flex">
            <Image src="/logo1.png" alt="Logo" width={350} height={50} />
          </Link>
        </nav>
        <div className="container mx-auto px-4 z-20 relative top-[-47rem] ">
          {children}
        </div>
      </div>
    </>
  );
}
