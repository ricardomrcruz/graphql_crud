import AdminLayout from "@/components/admin/AdminLayout";


export default function AdminDashboard() {
  return (
    <AdminLayout title="Admin - TGC">
      
      <div className="w-6/12 mt-20 ml-20 p-10 bg-[#161B21] bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-md border border-gray-700 shadow-2xl">
      <h2 className="text-lg text-gray-200 mb-6">Add New  Product</h2>

      
      
      <form  className="space-y-4">
      <div>
        <label htmlFor="name" className="block  font-medium text-md text-gray-200">Name</label>
        <input
          // type="text"
          // name="name"
          // id="name"
          // required
          // value={formData.name}
          // onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
        />
      </div>
      <div>
        <label htmlFor="description" className="block  font-medium text-md text-gray-200">Description</label>
        <textarea
          // name="description"
          // id="description"
          // required
          // value={formData.description}
          // onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
        ></textarea>
      </div>
      <div>
        <label htmlFor="price" className="block  font-medium text-md text-gray-200">Price</label>
        <input
          // type="text"
          // name="price"
          // id="price"
          // required
          // value={formData.price}
          // onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
        />
      </div>
      <div>
        <label htmlFor="imageUrl" className="block  font-medium text-md text-gray-200">Image URL</label>
        <input
          // type="text"
          // name="imageUrl"
          // id="imageUrl"
          // value={formData.imageUrl}
          // onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border  border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
        />
      </div>
      <button type="submit" className="py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75">
        Add Product
      </button>
    </form>
    </div>
    
    
    </AdminLayout>
  );
}



