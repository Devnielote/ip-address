import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
