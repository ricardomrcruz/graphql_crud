import Head from "next/head";
import AdminHeader from "./AdminHeader";
import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-[100vh]">
        <AdminHeader />
        <main className="pl-10 pt-12 w-full bg-[#090B0D]">{children}</main>
      </div>
    </>
  );
}