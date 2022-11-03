import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const Movielist = ({ data }) => {
  return (
    <div>
      {data.map((el) => (
        <MovieCard key={el.id} el={el} />
      ))}
    </div>
  );
};

export default Movielist;