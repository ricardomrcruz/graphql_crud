import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { useGetProductByIdQuery } from "@/graphql/generated/schema";


export default function ProductDetails(){
    const router = useRouter();

    const {id} = router.query;

    const { data } = useGetProductByIdQuery({
        variables: { getProductByIdId: parseInt(id as string)},
        skip: typeof id === "undefined",
    })

    


}