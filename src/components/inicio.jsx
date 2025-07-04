import React, { useEffect, useRef } from 'react';
import './inicio.css';

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


  const imagens = [
  { src: "/ex1.jpg", alt: "Prato especial 1" },
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
// Estado de avaliações antigo
const [avaliacoes, setAvaliacoes] = React.useState([
  { nome: 'Jana.', comentario: 'Ambiente incrível e comida deliciosa! Recomendo muito.' },
]);

// Estado para o novo upload de fotos
const [comentarioUpload, setComentarioUpload] = React.useState('');
const [fotoUpload, setFotoUpload] = React.useState(null);
const [fotosPartilhadas, setFotosPartilhadas] = React.useState([]);

// Funções para upload
const handleUploadFoto = (e) => {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    setFotoUpload(url);
  }
};

const handleAdicionarFoto = () => {
  if (fotoUpload) {
    setFotosPartilhadas([
      ...fotosPartilhadas,
      { url: fotoUpload, comentario: comentarioUpload, gostos: 0 }
    ]);
    setFotoUpload(null);
    setComentarioUpload('');
  }
};

const handleGostar = (index) => {
  const novasFotos = fotosPartilhadas.map((foto, i) =>
    i === index ? { ...foto, gostos: foto.gostos + 1 } : foto
  );
  setFotosPartilhadas(novasFotos);
};

// Outros estados
const [nome, setNome] = React.useState('');
const [comentario, setComentario] = React.useState('');
const [mostrarMais, setMostrarMais] = React.useState(false);

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
          <img src="/assets/ex1.jpg" alt="Restaurante" />
        </div>
      </section>

{/* Seção Sobre Nós */}
<section id="sobre" className="section sobre-nos">
  <div className="sobre-nos-container">
    <div className="sobre-nos-texto">
      <h2>Sobre Nós</h2>
      <p>
        No <strong>Complexo Vaz</strong>, valorizamos a excelência gastronómica, o ambiente acolhedor e um
        serviço que faz sentir-se em casa. Criámos este espaço para partilhar <strong>sabores únicos</strong>
        e momentos especiais. A nossa equipa é apaixonada pela arte culinária e dedicada a
        proporcionar experiências memoráveis em cada visita.
      </p>

      <button
        className="btn-saber-mais"
        onClick={() => setMostrarMais(true)}
      >
        Saber Mais
      </button>
    </div>

    </div>

  {/* saber mais SOBREPOSTO */}
  {mostrarMais && (
    <div className="overlay">
      <div className="modal-card">
        <button
          className="btn-fechar"
          onClick={() => setMostrarMais(false)}
        >
          ×
        </button>
        <h3>Mais sobre o Complexo Vaz</h3>
        <p>
          Oferecemos experiências personalizadas para eventos especiais, menus exclusivos
          e um ambiente pensado para surpreender os nossos clientes em cada detalhe.
          Desde jantares privados a festas de aniversário, garantimos uma experiência única.
        </p>
      </div>
    </div>
  )}
</section>


   <section id="galeria" className="section galeria">
      <div className="galeria-conteudo">
        <h2>Galeria</h2>
        <p>Explore alguns dos nossos pratos e momentos especiais no <strong>Complexo Vaz</strong>.</p>

        <div className="galeria-slide">
          
        </div>

        {/* Formulário Upload */}
        <div className="galeria-upload form-upload">
          <h4>Partilhe uma foto da sua experiência!</h4>
          <input type="file" accept="image/*" onChange={handleUploadFoto} />
          {fotoUpload && <img src={fotoUpload} alt="Preview" className="preview-foto" />}
          <textarea
            placeholder="Descreva a sua foto ou deixe um comentário..."
            value={comentarioUpload}
            onChange={(e) => setComentarioUpload(e.target.value)}
          ></textarea>
          <button onClick={handleAdicionarFoto} disabled={!fotoUpload}>
            Publicar
          </button>
        </div>

        {/* Galeria de Fotos Partilhadas */}
        <div className="galeria-fotos-partilhadas fotos-partilhadas">
          {fotosPartilhadas.length === 0 && (
            <p style={{ textAlign: 'center', color: '#777', fontStyle: 'italic' }}>
              Ainda não há fotos partilhadas. Seja o primeiro a partilhar!
            </p>
          )}

          {fotosPartilhadas.map((foto, index) => (
            <div key={index} className="foto-card">
              <img src={foto.url} alt={`Foto partilhada ${index + 1}`} />
              <p className="comentario">{foto.comentario}</p>
              <button onClick={() => handleGostar(index)} aria-label="Gostar da foto">
                ❤️ {foto.gostos}
              </button>
            </div>
          ))}
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
      <img src="/assets/festa.jpg" alt="Festas Privadas" className="evento-img" />
      <h3>Festas Privadas</h3>
      <p>Espaços exclusivos para aniversários, despedidas de solteiro(a) e celebrações com amigos e família.</p>
    </article>

    <article className="evento-card">
      <img src="/assets/corporativo (1).jpg" alt="Eventos Corporativos" className="evento-img" />
      <h3>Eventos Corporativos</h3>
      <p>Ambiente profissional e acolhedor para reuniões, workshops e celebrações empresariais.</p>
    </article>

    <article className="evento-card">
      <img src="/assets/degustacao (1).jpg" alt="Degustações & Cocktails" className="evento-img" />
      <h3>Degustações & Cocktails</h3>
      <p>Experiências únicas de cocktails e harmonizações, com especialistas e ambiente descontraído.</p>
    </article>
  </div>

  <div className="cta-eventos">
    <p>Está interessado? <strong>Contacte-nos</strong> para planear o seu evento connosco!</p>
    <button onClick={() => window.location.href = '#contacto'} className="btn-reservar">
      Reservar Evento
    </button>
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

  <footer className="footer">
  <div className="footer-container">
    
    <div className="footer-info">
     
      <p>
        No Complexo Vaz oferecemos uma experiência vibrante de restaurante e bar, perfeita para jantares,
        eventos e relaxar. Descubra o nosso menu requintado e reserve o seu próximo encontro connosco!
      </p>
    </div>
  

    {/* Coluna 2: Contactos */}
    <div className="footer-contactos">
      <p>📞 +258 85 55 46089</p>
      <p>📧 Complexo Vaz@gmail.com</p>
      <p>📍 123 Av-Albazine, Magoanine, MZ</p>
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
