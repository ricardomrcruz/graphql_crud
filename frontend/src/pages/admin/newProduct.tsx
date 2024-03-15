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

    createProduct({ variables: { data: formJSON } })
      .then((res) => {
        router.push(`/products/${res.data?.createProduct.id}`);
      })
      .catch(console.error);
  };

  return (
    <AdminLayout title="Admin - TGC">
      <div className="w-10/12 ml-20 p-10 bg-[#161B21] bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-md border border-gray-700 shadow-2xl">
        <h2 className="text-lg text-gray-200 mb-6">Add New Product</h2>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="w-8/12">
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
                placeholder="OG Kush"
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
                placeholder="This is a ggreat weed strain for relaxion..."
                className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
              ></textarea>
            </div>

            <div className="flex justify-between">
              
                




              <div className="w-1/2 ml-2">
                <label
                  htmlFor="growtype"
                  className="block  font-medium text-md text-gray-200"
                >
                  Grow Type
                </label>
                <input
                  required
                  type="text"
                  name="growtype"
                  id="growtype"
                  placeholder="Indoor"
                  className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
                />
              </div>
            </div>


            <div>
              <label
                htmlFor="straintype"
                className="block  font-medium text-md text-gray-200"
              >
                Strain
              </label>
              <input
                required
                type="text"
                name="straintype"
                id="straintype"
                placeholder="Sativa Hybrid"
                className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
              />
            </div>
            <div className="flex justify-between">
              <div className="w-1/2">
                <label
                  htmlFor="taste"
                  className="block font-medium text-md text-gray-200"
                >
                  Taste
                </label>
                <input
                  required
                  type="text"
                  name="taste"
                  id="taste"
                  placeholder="Fruity"
                  className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label
                  htmlFor="growtype"
                  className="block  font-medium text-md text-gray-200"
                >
                  Grow Type
                </label>
                <input
                  required
                  type="text"
                  name="growtype"
                  id="growtype"
                  placeholder="Indoor"
                  className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
                />
              </div>
            </div>


            <div className="flex justify-between">
              <div className="w-1/2 ">
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
              <div className="w-1/2 ml-2">
                <label
                  htmlFor="potency"
                  className="block  font-medium text-md text-gray-200"
                >
                  Potency
                </label>
                <input
                  required
                  type="number"
                  name="potency"
                  id="potency"
                  min={0}
                  placeholder="12 (%CBD) "
                  className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
                />
              </div>
            </div>



            <div>
              <label
                htmlFor="picture"
                className="block  font-medium text-md text-gray-200"
              >
                Image 
              </label>
              <input
                type="text"
                name="picture"
                id="picture"
                placeholder="https://imageshack.com/zoot.png"
                className="mt-1 block w-full px-3 py-2 border  border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
              />
            </div>



            <div>
              <label
                htmlFor="picture"
                className="block  font-medium text-md text-gray-200"
              >
                Upload Image
              </label>
              <input
                type="file"
                accept="image/"
                name="picture"
                id="picture"
                placeholder="https://imageshack.com/zoot.png"
                className="mt-1 block w-full px-3 py-2 border  border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
              />
            </div>





            <div className="mt-4">
              <button
                type="submit"
                className=" py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
