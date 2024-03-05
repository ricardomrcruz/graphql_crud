import AdminLayout from "@/components/admin/AdminLayout";
import { useCreateProductMutation } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import axios from "axios";

export default function NewProduct() {
  const [createProduct] = useCreateProductMutation();
  
  const router = useRouter();

  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());
    formJSON.price = parseFloat(formJSON.price);

    createProduct({ variables: { data:formJSON } })
    .then((res) => {
      router.push(`/products/${res.data?.createProduct.id}`);
    })
    .catch(console.error)

  };

  return (
    <AdminLayout title="Admin - TGC">
      <div className="w-6/12 ml-20 p-10 bg-[#161B21] bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-md border border-gray-700 shadow-2xl">
        <h2 className="text-lg text-gray-200 mb-6">Add New Product</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block  font-medium text-md text-gray-200"
            >
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Playstation 3"
              className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block  font-medium text-md text-gray-200"
            >
              Description
            </label>
            <textarea
              required
              rows={7}
              name="description"
              id="description"
              placeholder="Playstation 3"
              className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block  font-medium text-md text-gray-200"
            >
              StrainType
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Playstation 3"
              className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block  font-medium text-md text-gray-200"
            >
              Price
            </label>
            <input
              required
              type="number"
              name="price"
              id="price"
              min={0}
              placeholder="349,99"
              className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
            />
          </div>
          <div>
            <label
              htmlFor="imageUrl"
              className="block  font-medium text-md text-gray-200"
            >
              Image URL
            </label>
            <input
              type="text"
              name="picture"
              id="picture"
              placeholder="https://imageshack.com/zoot.png"
              className="mt-1 block w-full px-3 py-2 border  border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
          >
            Add Product
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}
