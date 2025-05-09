import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Add from "./pages/Add/Add";
import { createGlobalStyle } from 'styled-components';
import AboutApp from "./pages/About/AboutApp";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
      font-family: "Poppins", sans-serif;
  }

 body {
    padding-top: 100px; 
    margin: 0;
    background-color:#FCFBF4;
  }


  h2 {
    margin-top: 40px;
  }


  select {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
`;

const App = () => {
  return (
    <Router>
      <Header />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<AboutApp />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
