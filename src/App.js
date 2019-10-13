import React from "react";
import Header from "./components/Header";
import MovieCompContainer from "./components/MovieCompContainer";

function App() {
  document.title = "Favorite Movies";
  return (
    <React.Fragment>
      <Header />
      <MovieCompContainer />
    </React.Fragment>
  );
}

export default App;
