import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Details } from "./pages/Details";
import { List } from "./pages/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
