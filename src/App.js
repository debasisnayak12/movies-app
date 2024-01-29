import React, { useState } from "react";
// import OldApp from "./OldApp";
import MovieList from "./Components/MovieList";
import MovieDisplay from "./Components/MovieDisplay";

const App = () => {
const [selectedMovie, setSelectedMovie] = useState("");

    return(
        <div>
            {/* <OldApp/> */}
            <MovieList showMovie={setSelectedMovie} />
            <MovieDisplay selectedMovie={selectedMovie} />
        </div>
    )
}

export default App;