import { useState } from "react";
import "./App.css";
import Add from "./components/Add/Add";
import MovieList from "./components/MovieList/MovieList";
import { dataMovies } from "./data";
import  Filter  from "./components/Filter/Filter";

function App() {
  const [newList, setnewList] = useState(dataMovies);

  const addNewMovie = (newMovie) => {
    setnewList([...newList, newMovie]);
  };
  return (
    <div className="App">
      <MovieList data={newList} />
      <Add addNewMovie={addNewMovie} />
    <Filter/>
    </div>
  );
}

export default App;