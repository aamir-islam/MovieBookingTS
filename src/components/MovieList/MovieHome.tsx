import React, { useState } from "react";
import MovieList from "./MovieList";
import {
  ListHeadingStyle,
  HeaderStyle,
  InputBoxStyle,
} from "../../Styles/Card.style";

const MovieHome = () => {
  const [input, setInput] = useState<string>("");
  return (
    <HeaderStyle>
      <ListHeadingStyle>Book Tickets</ListHeadingStyle>
      <InputBoxStyle
        type="text"
        placeholder="Search"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <MovieList input={input} />
    </HeaderStyle>
  );
};

export default MovieHome;
