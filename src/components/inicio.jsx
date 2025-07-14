import React, { useState, useEffect, useRef } from 'react';
import './inicio.css';

export default function Inicio() {
  const imagens = [
    { src: '/assets/degustacao (1).jpg', descricao: ' Degustacao' },
    { src: '/assets/corporativo (1).jpg', descricao: 'Corporativo' },
    { src: '/assets/festa.jpg', descricao: 'Dia de festa' },
    { src: '/assets/ex1.jpg', descricao: 'o complexo' },
    { src: '/assets/degustacao (1).jpg', descricao: 'blaaaaa' }
  ];

  const [index, setIndex] = useState(0);
  const [mostrarMais, setMostrarMais] = useState(false);

  const anterior = () => {
    setIndex(prevIndex =>
      prevIndex === 0 ? imagens.length - 1 : prevIndex - 1
    );
  };

  const proximo = () => {
    setIndex(prevIndex =>
      prevIndex === imagens.length - 1 ? 0 : prevIndex + 1
    );
  };

  const autoplayRef = useRef(null);

  useEffect(() => {
    autoplayRef.current = proximo;
  });

  useEffect(() => {
    const play = () => {
      autoplayRef.current();
    };
    const interval = setInterval(play, 5000); 
    return () => clearInterval(interval);
  }, []);
  const [depIndex, setDepIndex] = useState(0);

const depoimentos = [
  { texto: "Adorámos a experiência, comida deliciosa e ambiente acolhedor!", autor: "Ernesto Vaz" },
  { texto: "Sem dúvida o melhor restaurante da cidade.", autor: "Alexandre Muianga" },
  { texto: "Voltaremos em breve com toda a família!", autor: "Jana Conjo" },
];


  return (
    <div>
  
      <header className="header">
        <img src="/assets/logo.png" alt="Logo" className="logo-header" />
        <nav className="nav">
          <a href="#sobre">Sobre Nós</a>
          <a href="#galeria">Galeria</a>
          <a href="#eventos">Eventos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Mergulhe-se com uma <span className="highlight">Experiência</span><br />
            Extraodianária
          </h1>
          <p className="hero-description">
            Descubra uma experiência gastronómica única no Complexo Vaz, onde o nosso menu é uma
            coleção vibrante de comida deliciosa e cocktails inovadores.
          </p>
          <button className="hero-button">Reservar uma Mesa →</button>
        </div>

        <div className="hero-image">
          <img src="/assets/ex1.jpg" alt="Restaurante" loading="lazy"/>
        </div>
      </section>

{/* Seção Sobre Nós */}
<section id="sobre" className="section sobre-nos">
  <div className="sobre-nos-container">
    <div className="sobre-nos-card">
      <div className="sobre-nos-texto">
        <h2>Sobre Nós</h2>
        <p>
          No <strong>Complexo Vaz</strong>, valorizamos a excelência gastronómica, o ambiente acolhedor
          e um serviço que faz sentir-se em casa. Criámos este espaço para partilhar <strong>sabores únicos</strong>
          e momentos especiais.
        </p>
        <button
          className="btn-saber-mais"
          onClick={() => setMostrarMais(true)}
        >
          Saber Mais
        </button>
      </div>
    </div>
  </div>

  {/* Modal Sobreposto */}
  {mostrarMais && (
    <div className="overlay">
      <div className="modal-card">
        <button
          className="btn-fechar"
          onClick={() => setMostrarMais(false)}
        >
          ×
        </button>
        <div className="modal-content">
          <div className="modal-texto">
            <h3>Mais sobre o Complexo Vaz</h3>
            <p>
              Oferecemos experiências personalizadas para eventos especiais, menus exclusivos
              e um ambiente pensado para surpreender os nossos clientes em cada detalhe.
              Desde jantares privados a festas de aniversário, garantimos uma experiência única.
            </p>
          </div>
          <div className="modal-imagem">
            <img src="/assets/ex1.jpg" alt="Mais sobre nós" loading="lazy"/>
          </div>
        </div>
      </div>
    </div>
  )}
</section>


{/* GALERIA */}
<section id="galeria" className="section galeria">
  <div className="galeria-conteudo">
    <h2>Galeria</h2>
    <p>
      Explore alguns dos nossos pratos e momentos especiais no <strong>Complexo Vaz</strong>.
    </p>

    <div className="slider">
   
      <div className="slider-imagem-container">
        <img
          src={imagens[index].src}
          alt={`Prato ${index + 1}`}
          className="slide-imagem fade" loading="lazy"
        />
        <p className="slide-legenda">{imagens[index].descricao}</p>
      </div>
      
    </div>

    <div className="slider-bolinhas">
      {imagens.map((_, i) => (
        <span
          key={i}
          className={index === i ? 'active' : ''}
          onClick={() => setIndex(i)}
        ></span>
      ))}
    </div>
    <div className="depoimentos">
  <h3>O que dizem sobre nós</h3>
  <div className="depoimento-card">
    <p>"{depoimentos[depIndex].texto}"</p>
    <span>- {depoimentos[depIndex].autor}</span>
  </div>
  <div className="depoimentos-bolinhas">
    {depoimentos.map((_, i) => (
      <span
        key={i}
        className={depIndex === i ? 'active' : ''}
        onClick={() => setDepIndex(i)}
      ></span>
    ))}
  </div>
</div>

  </div>
</section>

  
<section id="eventos" className="section eventos">
  <h2>Eventos</h2>
  <p className="descricao-eventos">
    Quer seja para uma celebração íntima ou uma grande festa, o Complexo Vaz é o local ideal para o seu evento. 
    Descubra as nossas opções personalizadas para tornar o seu momento inesquecível.
  </p>

  <div className="eventos-cards">
    <article className="evento-card">
      <img src="/assets/festa.jpg" alt="Festas Privadas" className="evento-img" loading="lazy"/>
      <h3>Festas Privadas</h3>
      <p>Espaços exclusivos para aniversários, despedidas de solteiro(a) e celebrações com amigos e família.</p>
    </article>

    <article className="evento-card">
      <img src="/assets/corporativo (1).jpg" alt="Eventos Corporativos" className="evento-img" loading="lazy" />
      <h3>Eventos Corporativos</h3>
      <p>Ambiente profissional e acolhedor para reuniões, workshops e celebrações empresariais.</p>
    </article>

    <article className="evento-card">
      <img src="/assets/degustacao (1).jpg" alt="Degustações & Cocktails" className="evento-img" loading="lazy" />
      <h3>Degustações & Cocktails</h3>
      <p>Experiências únicas de cocktails e harmonizações, com especialistas e ambiente descontraído.</p>
    </article>
  </div>


</section>
{/* Contacto */}
      <section id="contacto" className="section">
        <h2>Contacto</h2>
        <form className="form-contacto">
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>

       {/* footer */}

  <footer className="footer">
  <div className="footer-container">
    
    <div className="footer-info">
     
      <p>
        No Complexo Vaz oferecemos uma experiência vibrante de restaurante e bar, perfeita para jantares,
        eventos e relaxar. Descubra o nosso menu requintado e reserve o seu próximo encontro connosco!
      </p>
    </div>
    <div className="footer-contactos">
      <p>📞 +258 85 55 46089</p>
      <p>📧 Complexo Vaz@gmail.com</p>
      <p>📍 123 Av-Albazine, Magoanine, MZ</p>
    </div>

    <div className="footer-social">
      <h4>Siga-nos</h4>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-x-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="far fa-envelope"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Complexo Vaz. Todos os direitos reservados.</p>
  </div>
</footer>

    </div>
  );
}
