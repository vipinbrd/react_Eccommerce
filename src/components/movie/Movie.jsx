import { useCallback, useEffect, useState } from "react";
import { MovieList } from "./MovieList";
import { AddMovieForm } from "./AddMovieForm";

export function Movie() {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieHandler();
  }, []);

  const fetchMovieHandler=useCallback(async()=> {
    console.log("fetching data")
    setError(null);
    setIsLoading(true);
    try {
      const data = await fetch("https://swapi.dev/api/films");
      if (!data.ok) {
        throw new Error("Something went wrong... Retrying");
      }
      const response = await data.json();
      setMovieData(response.results);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
    setIsLoading(false);
  })

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-10 bg-gray-100">
      

      <div className="w-full max-w-4xl mb-10">
        <AddMovieForm />
      </div>


      <div className="w-full max-w-4xl">
        <button
          onClick={fetchMovieHandler}
          className="px-10 py-4 text-xl font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 mx-auto block"
        >
          Fetch Movies
        </button>

        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          </div>
        )}

        {!isLoading && movieData.length > 0 && (
          <ul className="mt-8 space-y-4">
            {movieData.map((ele) => (
              <li key={ele.episode_id}>
                <MovieList data={ele} />
              </li>
            ))}
          </ul>
        )}

        {error && (
          <div className="bg-red-500 text-white text-center p-4 rounded-lg shadow-md mb-4 mt-5">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
