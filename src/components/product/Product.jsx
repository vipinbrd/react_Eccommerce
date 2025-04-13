import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Product() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
   const navigate=useNavigate();
  async function getData() {
    const response = await fetch("http://localhost:8888/products");
    const data = await response.json();
    setProductData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);


////////////////////////////
function handleProductDetails(id){
    navigate(`/product/${id}`)

}

  return (
    <div className="px-6 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">All Products</h1>

      {isLoading && <p className="text-center text-gray-600">Loading...</p>}

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {!isLoading &&
          productData.map((ele) => (
            <li
              key={ele.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
            >
              <p className="text-lg font-semibold mb-2 capitalize text-gray-700">
                {ele.name}
              </p>
              <img
                src={ele.images[0].imageUrl}
                alt={ele.name}
                className="w-full h-48 object-contain mb-4"
              />
              <p className="text-center font-bold text-gray-800 mb-2">{ele.title}</p>
              <div className="mb-2">
                <span className="line-through text-red-500 mr-2">
                  ₹{ele.maxPrice}
                </span>
                <span className="text-green-600 font-semibold">
                  ₹{ele.sellingPrice}
                </span>
              </div>
              <button onClick={()=>handleProductDetails(ele.id)}className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                See Details
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
