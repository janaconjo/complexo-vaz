// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/inicio';
import ReservarMesa from './components/ReservarMesa';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ReservarMesa" element={<ReservarMesa />} />
          <Route
            path="*"
            element={<h1 style={{ padding: 24 }}>404 - Página não encontrada</h1>}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
