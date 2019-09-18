import React from "react";
import Spinner from "../Spinner";
import SearchInputContainer from "../../containers/SearchInputContainer";
import SearchResultsContainer from "../../containers/SearchResultsContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchInputContainer />
        <SearchResultsContainer />
      </header>
    </div>
  );
}

export default App;
