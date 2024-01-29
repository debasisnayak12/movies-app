import React from "react";
import moviesData from "../data/moviesData";

const MovieList = ({showMovie}) => {
    return(
        <div>
            <div className="movieList">
                <h1>Movie List:</h1>
                {
                moviesData.map((movie, index)=>(
                    <p key={index} onClick={()=>showMovie(movie)}>{movie.title}</p>
                ))
                }
            </div>
        </div>
    )
}

export default MovieList;