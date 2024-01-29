import React, { useState } from "react";
import moviesData from "./data/moviesData";

const OldApp = () => {
   const [selectedMovie, setSelectedMovie] = useState("");
//    console.log("selectedMovie")

    return (
        <div 
        style={{
             display:"flex",
             justifyContent: "space-evenly"
            }}
        >
            <div className="movie-list">
                <h1>Movie List:</h1>
                {
                moviesData.map((movie, index)=>(
                    <p key={index} onClick={()=>setSelectedMovie(movie)}>{movie.title}</p>
                ))
                }
            </div>

            {
                selectedMovie && (
                <div className="Movie-Details">
                    <h1>Movie Details:</h1>
                    <div>
                        {selectedMovie.banner && <img width="300px" src={selectedMovie.banner} alt={selectedMovie.title}/>}
                        <p>Title: {selectedMovie.title}</p>
                        <p>Actor: {selectedMovie.actor}</p>
                        <p>Genre: {selectedMovie.genre}</p>
                    </div>
                </div>
                )
            }
            
        </div>
    )
}

export default OldApp;