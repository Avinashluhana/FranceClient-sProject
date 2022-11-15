import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Page2 from "./Components/Page 2/Page2";
import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
import Page3 from "./Components/Page3/Page3";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header-component">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/page2" element={<Page2 />} exact />
          <Route path="/page3" element={<Page3 />} exact />

        </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}


export default App;
