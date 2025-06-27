import React, { useEffect, useRef } from 'react';
import './Inicio.css';

export default function Inicio() {
  {/* script dos slides sobre nós */}
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let index = 0;

    const interval = setInterval(() => {
      if (slider) {
        const slides = slider.children;
        index = (index + 1) % slides.length;
        slider.scrollTo({
          left: index * slider.clientWidth,
          behavior: 'smooth'
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  {/* script da galeria*/}

  const imagens = [
  { src: "src/assets/ex1.jpg", alt: "Prato especial 1" },
  { src: "src/assets/ex2.jpg", alt: "Sobremesa tropical" },
  { src: "src/assets/ex3.jpg", alt: "Cocktail da casa" },
  { src: "src/assets/ex4.jpg", alt: "Chef em ação" },
];

const [imagemAtual, setImagemAtual] = React.useState(0);

const handleNext = () => {
  setImagemAtual((prev) => (prev + 1) % imagens.length);
};

const handlePrev = () => {
  setImagemAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
};

{/* cript de avaliacaoes*/}
const [avaliacoes, setAvaliacoes] = React.useState([
  { nome: 'Carla M.', comentario: 'Ambiente incrível e comida deliciosa! Recomendo muito.' },
  { nome: 'Ernesto L.', comentario: 'A melhor experiência gastronómica em Maputo. Atendimento 5 estrelas!' }
]);

const [nome, setNome] = React.useState('');
const [comentario, setComentario] = React.useState('');

const handleSubmitAvaliacao = (e) => {
  e.preventDefault();
  if (nome && comentario) {
    setAvaliacoes([...avaliacoes, { nome, comentario }]);
    setNome('');
    setComentario('');
  }
};

  return (
    <div>
      {/* Header */}
      <header className="header">
        <img src="/assets/logo.png" alt="Logo" className="logo-header" />
        <nav className="nav">
          <a href="#sobre">Sobre Nós</a>
          <a href="#galeria">Galeria</a>
          <a href="#eventos">Eventos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Mergulhe-se com uma <span className="highlight">Experiência</span><br />
            Culinary Extraodinária
          </h1>
          <p className="hero-description">
            Descubra uma experiência gastronómica única no Complexo Vaz, onde o nosso menu é uma
            coleção vibrante de comida deliciosa e cocktails inovadores.
          </p>
          <button className="hero-button">Reservar uma Mesa →</button>
        </div>

        <div className="hero-image">
          <img src="src/assets/ex1.jpg" alt="Restaurante" />
        </div>
      </section>

      {/* seccao sobre*/}
      <section id="sobre" className="section sobre-nos">
        <div className="sobre-nos-content">
          <div className="sobre-nos-galeria">
            <div className="galeria-slider" ref={sliderRef}>
              <div className="slide"><img src="src/assets/ex4.jpg" alt="Slide 1" /></div>
              <div className="slide"><img src="src/assets/ex3.jpg" alt="Slide 2" /></div>
              <div className="slide"><img src="src/assets/ex4.jpg" alt="Slide 3" /></div>
            </div>
          </div>

          <div className="sobre-nos-texto">
            <h2>Sobre Nós</h2>
            <p>
              No Complexo Vaz, valorizamos a excelência gastronómica, o ambiente acolhedor e um
              serviço que faz sentir-se em casa. Criámos este espaço para partilhar sabores únicos
              e momentos especiais. A nossa equipa é apaixonada pela arte culinária e dedicada a
              proporcionar experiências memoráveis em cada visita.
            </p>
          </div>
        </div>
      </section>
        <section id="galeria" className="section galeria">
  <div className="galeria-conteudo">
    <h2>Galeria</h2>
    <p>Explore alguns dos nossos pratos e momentos especiais no <strong>Bistro Vaz</strong>.</p>

    <div className="galeria-layout">
      <div className="galeria-carousel">
        <button className="galeria-btn" onClick={handlePrev}>&larr;</button>

        <div className="galeria-slide">
          <img src={imagens[imagemAtual].src} alt={imagens[imagemAtual].alt} />
          <div className="legenda">{imagens[imagemAtual].alt}</div>
        </div>

        <button className="galeria-btn" onClick={handleNext}>&rarr;</button>
      </div>

      {/* Formulário de Avaliação */}
      <div className="galeria-avaliacoes">
        <h4>Deixe a sua avaliação</h4>
        <form onSubmit={handleSubmitAvaliacao} className="form-avaliacao">
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <textarea
            placeholder="Escreva o seu comentário"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>

        <h4 style={{ marginTop: '20px' }}>Comentários recentes</h4>
        {avaliacoes.map((a, index) => (
          <div key={index} className="avaliacao">
            <p>"{a.comentario}"<br /><strong>– {a.nome}</strong></p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Eventos */}
      <section id="eventos" className="section">
        <h2>Eventos</h2>
        <p>
          Organizamos eventos privados, festas, jantares especiais e muito mais. Entre em contacto
          para reservar o seu próximo evento connosco.
        </p>
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

  <footer className="footer">
  <div className="footer-container">
    {/* Coluna 1: Logo e descrição */}
    <div className="footer-info">
      <img src="src/assets/ex1.jpg" alt="Bistro Vaz" className="footer-logo" />
      <p>
        No Bistro Vaz oferecemos uma experiência vibrante de restaurante e bar, perfeita para jantares,
        eventos e relaxar. Descubra o nosso menu requintado e reserve o seu próximo encontro connosco!
      </p>
    </div>

    {/* Coluna 2: Contactos */}
    <div className="footer-contactos">
      <p>📞 +258 85 55 46089</p>
      <p>📧 bistrovaz@gmail.com</p>
      <p>📍 123 Av-Albazine, Magoanine, MZ</p>
    </div>

    {/* Coluna 3: Links rápidos */}
    <div className="footer-links">
      <h4>Links Rápidos</h4>
      <a href="#home">Home</a>
      <a href="#menu">Menu</a>
      <a href="#eventos">Eventos</a>
      <a href="#galeria">Galeria</a>
      <a href="#sobre">Sobre Nós</a>
      <a href="#contacto">Contacto</a>
    </div>

    {/* Coluna 4: Redes Sociais */}
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

  {/* Rodapé final - por baixo de tudo */}
  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Complexo Vaz. Todos os direitos reservados.</p>
  </div>
</footer>

    </div>
  );
}
