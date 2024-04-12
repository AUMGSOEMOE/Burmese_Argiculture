import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { BlogDetailed, Navigation } from "./components";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:Id" element={<BlogDetailed />} />
      </Routes>
    </div>
  );
};

export default App;
