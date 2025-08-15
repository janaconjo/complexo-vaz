import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ReservarMesa.css';

export default function ReservarMesa() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    data: '',
    hora: '',
    pessoas: 2,
    local: 'dentro',
    observacoes: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('🍽️ Reserva enviada! Entraremos em contacto em breve.');
  }

  return (
    <div className="reservar-page">

     
     <div className="top-bar">
        <Link to="/" className="btn-voltar">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>

  
      <div className="animacao-bonecos">
        <div className="boneco boneco1"></div>
        <div className="boneco boneco2"></div>
        <div className="boneco boneco3"></div>
      </div>

        <h3>Reservar Mesa</h3>
      <p className="descricao">
        Preencha o formulário abaixo para garantir a sua mesa.
      </p>

      <form onSubmit={handleSubmit} className="reservar-form">
        
        <label>
          Nome completo:
          <input
            name="nome"
            placeholder="Ex: Maria "
            value={form.nome}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Número de telefone:
          <input
            type="tel"
            name="telefone"
            placeholder="Ex: +258 84 XXX XXXX"
            value={form.telefone}
            onChange={handleChange}
            required
          />
        </label>

        <div className="duas-colunas">
          <label>
            Data da reserva:
            <input
              type="date"
              name="data"
              value={form.data}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Hora da reserva:
            <input
              type="time"
              name="hora"
              value={form.hora}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label>
          Quantidade de pessoas:
          <input
            type="number"
            name="pessoas"
            min="1"
            value={form.pessoas}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Local da mesa:
          <select name="local" value={form.local} onChange={handleChange}>
            <option value="dentro">Dentro do restaurante</option>
            <option value="fora">Esplanada / Área externa</option>
          </select>
        </label>

        <label>
          Observações:
          <textarea
            name="observacoes"
            placeholder="Informe alergias, pedidos especiais, preferências..."
            value={form.observacoes}
            onChange={handleChange}
            rows={4}
          />
        </label>

        <button type="submit" className="btn-confirmar">✅ Confirmar Reserva</button>
      </form>
    </div>
  );
}
