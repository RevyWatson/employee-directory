import React from "react";
import DataArea from "./components/dataArea/DataArea";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <DataArea />
    </div>
  );
}

export default App;
