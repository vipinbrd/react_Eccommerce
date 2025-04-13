import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import review from "../../components/dummyData/dummyReview.json";

export function ProductDetails() {
  const { productId } = useParams();
  const [productData, setProductData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8888/product/${productId}`);
      const data = await response.json();
      setProductData(data);
      setActiveImage(data.images?.[0]?.imageUrl || "");
      setIsLoading(false);
    }
    fetchData();
  }, [productId]);

  if (isLoading) {
    return <p className="text-center text-gray-600 py-10">Loading...</p>;
  }

  return (
    <div className="px-6 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">{productData.name}</h1>

      
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
       
        <div>
          <div className="w-full h-[400px] overflow-hidden rounded-lg border mb-4">
            <img
              src={activeImage}
              alt="product"
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {productData.images?.map((img, index) => (
              <img
                key={index}
                src={img.imageUrl}
                alt={`thumb-${index}`}
                onClick={() => setActiveImage(img.imageUrl)}
                className={`w-20 h-20 object-contain cursor-pointer border-2 ${
                  activeImage === img.imageUrl ? "border-blue-600" : "border-gray-300"
                } rounded-lg transition duration-300`}
              />
            ))}
          </div>
        </div>

    
        <div>
          <p className="text-xl font-semibold text-gray-700 mb-2">{productData.title}</p>
          <p className="text-gray-600 mb-4">{productData.description}</p>
          <div className="mb-4">
            <span className="line-through text-red-500 text-lg mr-2">
              ₹{productData.maxPrice}
            </span>
            <span className="text-green-600 text-xl font-bold">
              ₹{productData.sellingPrice}
            </span>
          </div>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>

    
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
        <div className="grid gap-4">
          {review.map((r, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow flex gap-4 items-start"
            >
              <img
                src={`https://i.pravatar.cc/40?img=${idx + 1}`}
                alt="avatar"
                className="rounded-full w-10 h-10"
              />
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-gray-700">{r.username}</p>
                  <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
                </div>
                <p className="text-gray-600">{r.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
