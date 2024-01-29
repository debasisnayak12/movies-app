import React from "react";

const MovieDisplay = ({ selectedMovie }) => {
    
  return (
    <div className="movieDetails">
        <h1>Movie Details:</h1>
        
            {
                selectedMovie && (
                    <div>
                        {
                            selectedMovie.banner && <img src={selectedMovie.banner} alt={selectedMovie.title} />
                        }
                        <p>Title : {selectedMovie.title}</p>
                        <p>Actor : {selectedMovie.actor}</p>
                        <p>Genre : {selectedMovie.genre}</p>
                    </div>
                )
            }
        
    </div>
  );
};

export default MovieDisplay;