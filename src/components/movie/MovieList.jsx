export function MovieList(props) {
    const { id,title, description,date } = props.data;
  
    return (
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-lg border-2 border-transparent hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white text-sm overflow-hidden max-h-32 line-clamp-3 mb-4">
          {description}
        </p>
        <p className="text-white text-lg">{ new Date(date).toISOString().split("T")[0]}</p>
        <button onClick={()=>{props.onDeleteHanlder(id)}} className="bg-[red] rounded-md p-2 mt-3 text-[white]">Delete Movie</button>
      </div>
    );
  }
  