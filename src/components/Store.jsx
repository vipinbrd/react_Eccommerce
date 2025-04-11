import items from "../components/dummyData/Items.json";

export function Store() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Music</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {items.map((ele, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <p className="text-lg font-semibold mb-2">{ele.title}</p>

            <div className="overflow-hidden rounded-md w-full">
              <img
                src={ele.imageUrl}
                alt={ele.title}
                className="w-full h-auto transform transition-transform duration-300 hover:scale-110"
              />
            </div>

            <p className="text-xl font-bold mt-4 mb-2">₹{ele.price}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Add To Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
