import React from "react";
import { useEffect, useState } from "react";
import BasicCard from "./Card";

function Home() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    let res = fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7d69b76bbb69c83b9dff51943d6520e7&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data.results);
      });

    console.log(res);
  }, []);
  return (
    <>
      <h1>Movie List</h1>
      <div class="container">
        {movie.map((data) => {
          return (
            <BasicCard
              movieName={data.title}
              releaseDate={data.release_date}
              rating={data.popularity}
              poster_path={data.poster_path}
              id={data.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
