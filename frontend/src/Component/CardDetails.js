import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CardDetails() {
  const param = useParams();

  const [movie, setMovie] = useState([]);

  const Img_API = "https://image.tmdb.org/t/p/w500";
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

  console.log(param);

  const singleMovie = movie.find((data) => {
    return data.id == param.id;
  });

  console.log(singleMovie);

  return (
    <>
      {!singleMovie ? null : (
        <div className="movieDetails">
          <div className="imageDiv">
            <img src={Img_API + singleMovie.poster_path} />
          </div>

          <div className="detailsDiv">
            <h1>{singleMovie.title}</h1>
            <p>{singleMovie.overview}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CardDetails;
