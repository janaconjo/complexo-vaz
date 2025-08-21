import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import ReservarMesa from "./components/reservarmesa";

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/reservarmesa" element={<ReservarMesa />} />
          {/* fallback: qualquer rota desconhecida volta ao início */}
          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
