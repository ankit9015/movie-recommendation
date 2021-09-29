import React, { useState } from "react";
import "./styles.css";

var moviesDB = {
  scifi: [
    { name: "Interstellar", rating: "4.2/5" },
    { name: "Arrival", rating: "4/5" },
    { name: "Lucy", rating: "4.2/5" }
  ],
  comic: [
    { name: "Hera Pheri", rating: "4.2/5" },
    { name: "Golmaal Fun Unlimited", rating: "4/5" },
    { name: "Andaz apna apna", rating: "4/5" }
  ],
  psychology: [
    { name: "Fight Club", rating: "4.4/5" },
    { name: "Vikram Vedha", rating: "4.3/5" },
    { name: "Shutter Island", rating: "4.2/5" }
  ],
  horror: [
    { name: "Ring", rating: "4.2/5" },
    { name: "Conjuring", rating: "4/5" },
    { name: "Shutter", rating: "4.2/5" }
  ]
};

const genreStyle = {
  cursor: "pointer",
  background: "#E5DFEB",
  borderRadius: "0.5rem",
  padding: "0.5rem  1rem",
  border: "1px solid black",
  margin: "1rem 0.3rem"
};

const movieStyle = {
  listStyle: "none",
  padding: "1rem",
  border: "1px solid #D1D5DB",
  width: "70%",
  margin: "1rem 0rem",
  borderRadius: "0.5rem",
  background: "#fcf5f0"
};

const headerTextStyle = {
  fontWeight: "bold",
  lineHeight: "20px"
};

export default function App() {
  var [selectedGenre, setGenre] = useState("psychology");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 style={(headerTextStyle, { paddingBottom: "1rem" })}>
        Movies Recommendation App
      </h1>
      <p style={headerTextStyle}>
        Checkout the list of my top favourite movies.
      </p>
      <p style={headerTextStyle}>Select the Gernre from below:</p>

      <div>
        {Object.keys(moviesDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)} style={genreStyle}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDB[selectedGenre].map((movie) => (
            <li key={movie.name} style={movieStyle}>
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <p style={{ padding: "0.5rem", fontSize: "large", fontWeight: "bold" }}>
          Connect with me:
        </p>
        <a
          style={{ padding: "10px", width: "30px", height: "30px" }}
          href="https://github.com/ankit9015"
        >
          github
        </a>
        <a
          style={{ padding: "10px", width: "30px", height: "30px" }}
          href="https://www.linkedin.com/in/ankit-joshi-1411451ab/"
        >
          linkedin
        </a>
        <a
          style={{ padding: "10px", width: "30px", height: "30px" }}
          href="https://twitter.com/Ankitjoshi98"
        >
          twitter
        </a>
      </footer>
    </div>
  );
}
