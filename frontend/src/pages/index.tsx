import Layout from "../components/Layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FeaturedProducts from "@/components/FeaturedProducts";
import CarouselComp from "@/components/CarouselComp";

export default function Home() {
  return (
    <Layout pageTitle="le Jardin De La Sorciere">
      <CarouselComp/>
     <FeaturedProducts/>
    </Layout>
  );
}
