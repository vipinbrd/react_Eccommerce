import tour from "../components/dummyData/dummyTour.json";

export function Home() {
  return (
    <div className="p-8">
  


      <div className="flex justify-center gap-4 mb-10">
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Get Our Latest Album
        </button>
        <button className="px-6 py-2 flex items-center gap-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100 transition">
          <span className="text-xl">▶️</span> Play
        </button>
      </div>


      <h1 className="text-2xl font-semibold mb-4 text-center">TOURS</h1>

   
      <ul className="space-y-4 max-w-4xl mx-auto">
        {tour.map((ele, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b pb-2 text-gray-800"
          >
            <div className="flex-1 text-center border-r">{ele.date}</div>
            <div className="flex-1 text-center border-r">{ele.location}</div>
            <div className="flex-1 text-center border-r">{ele.place}</div>
            <div className="flex-1 text-center">
              <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition">
                Buy Tickets
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
