import React, { useState } from "react";
import "./styles.css";

var moviesDB = {
  scifi: [
    {
      name: "Interstellar",
      description:
        "Interstellar is a 2014 epic science fiction drama film co-written, directed and produced by Christopher Nolan",
      rating: "4.2/5"
    },
    {
      name: "Arrival",
      description:
        "Arrival is based on — the award-winning novella Story of Your Life by Ted Chiang — was published in 1998, almost two decades ago, which indicates its central themes were brewing long before this year",
      rating: "4/5"
    },
    {
      name: "Lucy",
      description:
        "Lucy is a 2014 French science fiction action film[5] written and directed by Luc Besson for his company EuropaCorp, and produced by his wife, Virginie Besson-Silla. ",
      rating: "4.2/5"
    }
  ],
  comic: [
    {
      name: "Hera Pheri",
      description:
        "Hera Phari is one of those evergreen movie that always remain classic.",
      rating: "4.2/5"
    },
    {
      name: "Golmaal Fun Unlimited",
      description:
        "Golmaal Fun Unlimited is the 1st movie of the Golmaal Series and it is one of the most hilarious bolywood movie.",
      rating: "4/5"
    },
    {
      name: "Andaz apna apna",
      description:
        "Andaaz apna apna is old yet gold movie, it has many unique character and gags that are still used in memes.",
      rating: "4/5"
    }
  ],
  psychology: [
    {
      name: "Fight Club",
      description:
        "One of the greatest movie ever created in the history of cinema. It's a psychological thriller",
      rating: "4.4/5"
    },
    {
      name: "Vikram Vedha",
      description:
        "If you are lover of mind bending genre where you are constantly questioning what next, then this movie is a treat for you.",
      rating: "4.3/5"
    },
    {
      name: "Shutter Island",
      description:
        "Shutter Island is one on the best psychological thriller that keeps surprising you.",
      rating: "4.2/5"
    }
  ],
  horror: [
    {
      name: "Ring",
      description:
        "I always found The Ring extremely creepy. The neverending gray sky drizzle helped keep it that way. ",
      rating: "4.2/5"
    },
    {
      name: "Conjuring",
      description: "This movie is one of the most famous horror movie.",
      rating: "4/5"
    },
    {
      name: "Shutter",
      description:
        "One of the most creepiest horror movie ever, the story line in very creative.",
      rating: "4.2/5"
    }
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
              <div style={{ fontSize: "smaller", margin: "1rem" }}>
                {" "}
                {movie.description}{" "}
              </div>
              <div style={{ fontSize: "smaller", margin: "0 2rem" }}>
                {" "}
                {movie.rating}{" "}
              </div>
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
