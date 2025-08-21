import React from "react";
import { Link } from "react-router-dom";
import "./inicio.css";

export default function ReservarMesa() {
  return (
    <section className="section" style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <h2 style={{ marginBottom: 10 }}>Reservar uma Mesa</h2>
      <p style={{ marginBottom: 20 }}>
        Deixa-nos os teus dados e entraremos em contacto para confirmar a reserva.
      </p>

      <form className="form-contacto" onSubmit={(e) => { e.preventDefault(); alert("Reserva enviada!"); }}>
        <input type="text" name="nome" placeholder="Nome" required />
        <input type="tel" name="telefone" placeholder="Telefone" required />
        <input type="date" name="data" required />
        <input type="time" name="hora" required />
        <input type="number" name="pessoas" placeholder="N.º de pessoas" min="1" required />
        <textarea name="observacoes" placeholder="Observações (opcional)"></textarea>
        <button type="submit">Confirmar Pedido</button>
      </form>

      <div style={{ marginTop: 20 }}>
        <Link to="/" className="hero-button">← Voltar ao Início</Link>
      </div>
    </section>
  );
}
