import React from "react";

export default props => {
  return (
    <div className="movie-details">
      <p>{props.movieName}</p>
      <p>
        <em>({props.releaseYear})</em>
      </p>
    </div>
  );
};
