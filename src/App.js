import React from "react";
import DataArea from "./components/dataArea/DataArea";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Table from "./components/table/Table";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Table>
        <DataArea />
      </Table>
    </div>
  )
}

export default App;