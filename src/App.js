import React from "react";
import AboutPage from "./page/AboutPage";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
