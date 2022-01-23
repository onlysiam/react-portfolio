import React from "react";
import AboutPage from "./page/AboutPage";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
function App() {
  return (
    <div>
      <Nav />
      <AboutPage />
      <GlobalStyle />
    </div>
  );
}

export default App;
