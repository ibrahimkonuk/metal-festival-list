import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import MetalFestivalList from "../MetalFestivalList";
import FestivalDetailPage from "../FestivalDetailPage";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/metalfestivallist" element={<MetalFestivalList />} />
      <Route path="/festivals/:id" element={<FestivalDetailPage />} />
    </Routes>
  );
};
