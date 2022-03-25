import React from "react";
import AboutPage from "./page/AboutPage";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Admin from "./components/Admin";

function App() {
  const location = useLocation();
  return (
    <div>
      <Nav />
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
