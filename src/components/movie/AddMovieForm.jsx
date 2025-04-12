import { useState } from "react";

export function AddMovieForm(props) {
  const [data, setData] = useState({ title: "", description: "", date: "" });

  function inputChangeHandler(type, e) {
    switch (type) {
      case "title":
        return setData((prev) => ({ ...prev, title: e.target.value }));
      case "desc":
        return setData((prev) => ({ ...prev, description: e.target.value }));
      case "date":
        return setData((prev) => ({ ...prev, date: e.target.value }));
      default:
        return;
    }
  }

  function AddMovieHandler(e) {
    e.preventDefault(); 
    console.log(data);
  }

  return (
    <div className="flex justify-center items-start py-10 px-4 min-h-screen bg-gray-100">
      <form
        onSubmit={AddMovieHandler}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add New Movie
        </h2>

        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Title
          </label>
          <input
            onChange={(e) => inputChangeHandler("title", e)}
            type="text"
            id="title"
            value={data.title}
            placeholder="Enter movie title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
            Opening Text
          </label>
          <input
            onChange={(e) => inputChangeHandler("desc", e)}
            type="text"
            id="description"
            value={data.description}
            placeholder="Enter opening text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
            Releasing Date
          </label>
          <input
            onChange={(e) => inputChangeHandler("date", e)}
            type="date"
            id="date"
            value={data.date}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
}
