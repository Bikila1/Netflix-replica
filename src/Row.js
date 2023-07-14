import React, { useEffect, useState, useRef } from "react";
import "./Row.css";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

// const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const rowRef = useRef(null);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search); // to provide a way to create, manipulate, and retrieve the query string parameters of a URL
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

    const scroll = (scrollOffset) => {
      rowRef.current.scrollLeft += scrollOffset;
    };

  return (
    // BEM naming method (Block, Element__ and Modifier__--)
    <div className="row">
      <h1>{title}</h1>
      <div className="row__scrollButtonContainer">
        <div className="row__scrollButton" onClick={() => scroll(-300)}>
          {"<"}
        </div>
        <div className="row__scrollButton" onClick={() => scroll(300)}>
          {">"}
        </div>
      </div>
      <div className="row__posters" ref={rowRef}>
        {movies.map((movie, index) => (
          <img
            key={index}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div className="row__youtube">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
      <div
        class="default-ltr-cache-1yz1b0z ejqbulh0"
      >
      </div>
    </div>
  );
}

export default Row;


// import React, { useEffect, useState, useRef } from "react";
// import "./Row.css";
// import axios from "./axios";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

// const base_url = "https://image.tmdb.org/t/p/original/";

// function Row({ title, fetchUrl, isLargeRow }) {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");
//   const rowRef = useRef(null);

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           console.log(fetchUrl);
//           const request = await axios.get(
//             `http://localhost:4000/api/${fetchUrl}`
//           );
//           console.log(request);
//           setMovies(request.data.results);
//         } catch (error) {
//           console.log("error", error);
//         }
//       };
//       fetchData();
//     }, [fetchUrl]);


//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       movieTrailer(movie?.title || movie?.original_name || movie?.name || "")
//         .then((url) => {
//           console.log(url)
//           const urlParams = new URLSearchParams(new URL(url).search);
//           console.log(urlParams)
//           setTrailerUrl(urlParams.get("v"));
//           setTrailerUrl(urlParams.get("v"));
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   const scroll = (scrollOffset) => {
//     rowRef.current.scrollLeft += scrollOffset;
//   };

//   return (
//     <div className="row">
//       <h1>{title}</h1>
//       <div className="row__scrollButtonContainer">
//         <div
//           className="row__scrollButton"
//           onClick={() => scroll(-300)}
//         >
//           {"<"}
//         </div>
//         <div
//           className="row__scrollButton"
//           onClick={() => scroll(300)}
//         >
//           {">"}
//         </div>
//       </div>
//       <div className="row__posters" ref={rowRef}>
//         {movies.map((movie, index) => (
//           <img
//             key={index}
//             onClick={() => handleClick(movie)}
//             className={`row__poster ${isLargeRow && "row__posterLarge"}`}
//             src={`${base_url}${
//               isLargeRow ? movie.poster_path : movie.backdrop_path
//             }`}
//             alt={movie.name}
//           />
//         ))}
//       </div>
//       <div className="row__youtube">
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//       </div>
//     </div>
//   );
// }

// export default Row;
