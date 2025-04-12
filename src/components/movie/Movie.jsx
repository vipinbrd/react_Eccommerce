import { useEffect, useState } from "react";

export function Movie() {
  const [movieData, setMovieData] = useState([]);
  const [isLoading,setIsLoading]=useState(true)

  async function getData() {
    const data = await fetch("https://swapi.dev/api/films");
    const response = await data.json();
    setMovieData(response.results);
    setIsLoading(false)
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(movieData);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">movies</h1>

      {isLoading? (
        <div className="flex justify-center items-center py-10">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      ) : (
        <h1 className="text-xl text-green-600 font-medium">Here is your movie</h1>
      )}
    </>
  );
}
