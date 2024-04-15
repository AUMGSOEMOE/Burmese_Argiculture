import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { BlogDetailed, Footer, Navigation, UpArrow } from "./components";

const App = () => {
  return (
    <div>
      <Navigation />
      {/* <UpArrow /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:Id" element={<BlogDetailed />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
