import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Create, Detail, Home, NotFound } from "../pages";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="home" element={<Home />} />
        <Route path="detail/:idCountry" element={<Detail />} />
        <Route path="create" element={<Create />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesApp;
