import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Add from "./pages/Add/Add";
import { createGlobalStyle } from 'styled-components';
import AboutApp from "./pages/About/AboutApp";
import backgroundImg from "../src/assets/background.jpg"
import Footer from "./components/Footer/Footer";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

 body {
    padding-top: 100px; 
    margin: 0;
    background-image: url(${backgroundImg}); /* Apply background image */
    background-size: cover; /* Ensure the image covers the whole background */
    background-position: center; /* Center the background image */
    background-attachment: fixed; /* Keep the background fixed when scrolling */
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #99753F;
  }

  h2 {
    margin-top: 40px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
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
