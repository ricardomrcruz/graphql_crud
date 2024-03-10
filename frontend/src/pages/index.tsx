import Layout from "../components/Layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <Layout pageTitle="le Jardin De La Sorciere">
     <FeaturedProducts/>
    </Layout>
  );
}
