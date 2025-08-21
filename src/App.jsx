import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/inicio";
import ReservarMesa from "./components/reservarmesa";

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/reservarmesa" element={<ReservarMesa />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
