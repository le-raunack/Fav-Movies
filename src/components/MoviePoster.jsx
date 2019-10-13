import React from "react";

export default props => {
  const imgStyle = {
    width: `180px`,
    height: `240px`,
    border: `10px ridge brown`
  };

  return (
    <div className="movie-poster-container">
      <img alt="movie-poster" src={props.moviePoster} style={imgStyle} />
    </div>
  );
};
