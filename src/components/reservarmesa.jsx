import React from "react";
import { motion } from "framer-motion";
import './reservarmesa.css';

export default function ReservarMesa() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }
  };

  return (
    <section className="section ui">
      

     <div className="bem-vindo-container">
  <h1 className="bem-vindo">
    Bem-vindo ao 
    <span className="rotating-text">
      <span>Complexo Vaz</span>
      <span>É Cool!</span>
    </span>
  </h1>
</div>
      <motion.div
        className="form-container"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2 className="titulo" variants={itemVariants}>
          Reservar uma Mesa
        </motion.h2>
        <motion.p className="descricao" variants={itemVariants}>
          Preenche os teus dados para confirmar a reserva.
        </motion.p>

        <motion.form
          className="form-contacto"
          onSubmit={(e) => { e.preventDefault(); alert("Reserva enviada!"); }}
        >
          <motion.div className="input-group" variants={itemVariants}>
            <span className="icon">👤</span>
            <input type="text" name="nome" placeholder="Nome completo" required />
          </motion.div>

          <motion.div className="input-group" variants={itemVariants}>
            <span className="icon">📞</span>
            <input type="tel" name="telefone" placeholder="Telefone" required />
          </motion.div>

          <motion.div className="input-group" variants={itemVariants}>
            <span className="icon">📅</span>
            <input type="date" name="data" required />
          </motion.div>

          <motion.div className="input-group" variants={itemVariants}>
            <span className="icon">⏰</span>
            <input type="time" name="hora" required />
          </motion.div>

          <motion.div className="input-group" variants={itemVariants}>
            <span className="icon">👥</span>
            <input type="number" name="pessoas" placeholder="N.º de pessoas" min="1" required />
          </motion.div>

          <motion.textarea
            name="observacoes"
            placeholder="Observações (opcional)"
            variants={itemVariants}
          />

          <motion.button
            type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: "#e47534ff", color: "#fff" }}
          >
            Confirmar Pedido
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
