import React, { useState, useEffect, useRef } from 'react';
import './inicio.css';
const catalogoBasico = {
  Vinhos: [
    { nome: "Cabriz", preco: "700 MZN (garrafa)", foto: "/assets/vinho (1).jpg"},
    { nome: "Dona Ermelinda", preco: "750 meticais (garrafa)", img: "/imagens/vinhos/dona_ermelinda.jpg" },
    { nome: "Alanda", preco: "400 meticais (garrafa)", img: "/imagens/vinhos/alanda.jpg" },
    { nome: "Gordon", preco: "450 meticais (garrafa)", img: "/imagens/vinhos/gordon.jpg" },
  ],
  Bebidas: [
    { nome: "Amarula Normal", preco: "800 meticais", img: "/imagens/bebidas/amarula.jpg" },
    { nome: "Wild África", preco: "500 meticais (garrafa)", img: "/imagens/bebidas/wild_africa.jpg" },
    { nome: "2M (garrafa)", preco: "65 meticais", img: "/assets/cerveja.jpg" },
    { nome: "2M (txoti)", preco: "50 meticais", img: "/imagens/bebidas/2m.jpg" },
  
  ],
  Comidas: [
   { nome: "Frango c/ batata e salada", preco: "250 meticais", img: "/assets/frango.jpg" },
    { nome: "Frango c/ arroz e salada", preco: "200 meticais", img: "/imagens/comidas/frango_arroz.jpg" },
    { nome: "Frango c/ xima e salada", preco: "200 meticais", img: "/imagens/comidas/frango_xima.jpg" },
    { nome: "Frango inteiro c/ xima", preco: "750 meticais", img: "/imagens/comidas/frango_inteiro.jpg" },
  ],
};

//! Menu completo 
const menuCompleto = {
  Vinhos: [
    { nome: "Cabriz", preco: "700 meticais (garrafa)", img: "/assets/vinho (1).jpg" },
    { nome: "Dona Ermelinda", preco: "750 meticais (garrafa)", img: "/imagens/vinhos/dona_ermelinda.jpg" },
    { nome: "Alanda", preco: "400 meticais (garrafa)", img: "/imagens/vinhos/alanda.jpg" },
    { nome: "Gordon", preco: "450 meticais (garrafa)", img: "/imagens/vinhos/gordon.jpg" },
  ],
  Bebidas: [
    { nome: "Amarula Normal", preco: "800 meticais", img: "/imagens/bebidas/amarula.jpg" },
    { nome: "Wild África", preco: "500 meticais (garrafa)", img: "/imagens/bebidas/wild_africa.jpg" },
    { nome: "2M (garrafa)", preco: "65 meticais", img: "/assets/cerveja.jpg" },
    { nome: "2M (txoti)", preco: "50 meticais", img: "/imagens/bebidas/2m.jpg" },
    { nome: "Impala (garrafa)", preco: "55 meticais", img: "/imagens/bebidas/impala.jpg" },
    { nome: "Impala (lata)", preco: "50 meticais", img: "/imagens/bebidas/impala.jpg" },
    { nome: "Txilar", preco: "50 meticais", img: "/imagens/bebidas/txilar.jpg" },
    { nome: "Heineken (txoti)", preco: "80 meticais", img: "/imagens/bebidas/heineken.jpg" },
    { nome: "Hunter Gold", preco: "65 meticais", img: "/imagens/bebidas/hunter.jpg" },
    { nome: "Brutal", preco: "80 meticais", img: "/imagens/bebidas/brutal.jpg" },
    { nome: "Savana Dry", preco: "80 meticais", img: "/imagens/bebidas/savana_dry.jpg" },
    { nome: "Savana Lemone", preco: "85 meticais", img: "/imagens/bebidas/savana_lemone.jpg" },
    { nome: "May Faire", preco: "75 meticais", img: "/imagens/bebidas/may_faire.jpg" },
    { nome: "JC", preco: "75 meticais", img: "/imagens/bebidas/jc.jpg" },
    { nome: "Castel Lite", preco: "65 meticais", img: "/imagens/bebidas/castel_lite.jpg" },
    { nome: "Coca Cola (garrafa)", preco: "25 meticais", img: "/imagens/bebidas/coca_cola.jpg" },
    { nome: "Coca Cola (lata)", preco: "50 meticais", img: "/imagens/bebidas/coca_cola.jpg" },
    { nome: "Fanta (garrafa)", preco: "25 meticais", img: "/imagens/bebidas/fanta.jpg" },
    { nome: "Fanta (lata)", preco: "50 meticais", img: "/imagens/bebidas/fanta.jpg" },
    { nome: "Sprite (garrafa)", preco: "25 meticais", img: "/imagens/bebidas/sprite.jpg" },
    { nome: "Sprite (lata)", preco: "50 meticais", img: "/imagens/bebidas/sprite.jpg" },
    { nome: "Sumo Compal (1L)", preco: "130 meticais", img: "/imagens/bebidas/compal.jpg" },
    { nome: "Sumo Compal (0,5L)", preco: "65 meticais", img: "/imagens/bebidas/compal.jpg" },
    { nome: "Suminhos", preco: "25 meticais", img: "/imagens/bebidas/suminho.jpg" },
    { nome: "Água (grande)", preco: "50 meticais", img: "/imagens/bebidas/agua.jpg" },
    { nome: "Água (pequena)", preco: "25 meticais", img: "/imagens/bebidas/agua.jpg" },
  ],
  Comidas: [
    { nome: "Frango c/ batata e salada", preco: "250 meticais", img: "/assets/frango.jpg" },
    { nome: "Frango c/ arroz e salada", preco: "200 meticais", img: "/imagens/comidas/frango_arroz.jpg" },
    { nome: "Frango c/ xima e salada", preco: "200 meticais", img: "/imagens/comidas/frango_xima.jpg" },
    { nome: "Frango inteiro c/ xima", preco: "750 meticais", img: "/imagens/comidas/frango_inteiro.jpg" },
    { nome: "Frango inteiro c/ batata", preco: "850 meticais", img: "/imagens/comidas/frango_inteiro.jpg" },
    { nome: "Carne de porco (1kg)", preco: "500 meticais", img: "/imagens/comidas/porco.jpg" },
    { nome: "Guisado de vaca", preco: "500 meticais", img: "/imagens/comidas/vaca.jpg" },
    { nome: "Rachel c/ batata", preco: "130 meticais", img: "/imagens/comidas/rachel.jpg" },
    { nome: "Vermelho grelhado", preco: "750 meticais", img: "/imagens/comidas/peixe_vermelho.jpg" },
    { nome: "Cozido com legumes", preco: "700 meticais", img: "/imagens/comidas/cozido.jpg" },
  ],
};

const imagens = [
  { src: '/assets/degustacao (1).jpg', descricao: 'Degustacao' },
  { src: '/assets/corporativo (1).jpg', descricao: 'Corporativo' },
  { src: '/assets/festa.jpg', descricao: 'Dia de festa' },
  { src: '/assets/ex1.jpg', descricao: 'O complexo' },
  { src: '/assets/degustacao (1).jpg', descricao: 'Blaaaaa' }
];

const depoimentos = [
  { texto: "Adorámos a experiência, comida deliciosa e ambiente acolhedor!", autor: "Ernesto Vaz" },
  { texto: "Sem dúvida o melhor restaurante da cidade.", autor: "Alexandre Muianga" },
  { texto: "Voltaremos em breve com toda a família!", autor: "Jana Conjo" }
];

export default function Inicio() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [index, setIndex] = useState(0);
  const [mostrarMais, setMostrarMais] = useState(false);
  const [depIndex, setDepIndex] = useState(0);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Vinhos");
  const [pesquisa, setPesquisa] = useState("");
  const [mostrarMenuCompleto, setMostrarMenuCompleto] = useState(false);


  const itensFiltrados = catalogoBasico[categoriaSelecionada].filter(item =>
    item.nome.toLowerCase().includes(pesquisa.toLowerCase()));


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

  return (
    <div>
     <div>
      <header className="header">
        <img src="/assets/logo.png" alt="Logo" className="logo-header" width="120" height="60" />

        <button
          className={`menu-btn ${menuAberto ? 'active' : ''}`}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu" >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className="nav desktop-nav">
          <a href="#sobre">Sobre Nós</a>
          <a href="#galeria">Galeria</a>
          <a href="#eventos">Eventos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <nav className={`menu-lateral ${menuAberto ? 'aberto' : ''}`}>
          <a href="#sobre" onClick={() => setMenuAberto(false)}>Sobre Nós</a>
          <a href="#galeria" onClick={() => setMenuAberto(false)}>Galeria</a>
          <a href="#eventos" onClick={() => setMenuAberto(false)}>Eventos</a>
          <a href="#contacto" onClick={() => setMenuAberto(false)}>Contacto</a>
        </nav>
      </header>

      {menuAberto && <div className="overlay-menu" onClick={() => setMenuAberto(false)}></div>}
    </div>
  
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
          <img src="/assets/ex1.jpg" alt="Restaurante" width="500" height="350" />
        </div>
      </section>

      {/* Seccao Sobre Nós */}
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
                  <img src="/assets/ex1.jpg" alt="Mais sobre nós" width="400" height="300" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        )}
        </section>

<section id="catalogo" className="section catalogo">
  <h2>Catálogo</h2>
  <p>Explore o nosso menu básico. Escolha a categoria.</p>


  <div className="catalogo-filtros" style={{ marginBottom: '1rem' }}>
    {Object.keys(catalogoBasico).map(cat => (
      <button
        key={cat}
        className={categoriaSelecionada === cat ? 'ativo' : ''}
        onClick={() => setCategoriaSelecionada(cat)}
        style={{ marginRight: 8 }}
      >
        {cat}
      </button>
    ))}
  </div>

  <div className="catalogo-itens">
    {itensFiltrados.length === 0 && <p>Nenhum item encontrado.</p>}
    {itensFiltrados.map((item, i) => (
      <div key={i} className="catalogo-item">
        {item.foto && (
          <img
            src={item.foto}
            alt={item.nome}
            loading="lazy"
            className="catalogo-item-foto"
          />
        )}
        <h3>{item.nome}</h3>
        <p className="preco">{item.preco}</p>
      </div>
    ))}
  </div>


  <div style={{ marginTop: 20, textAlign: 'center' }}>
    <button
      onClick={() => {
        setPesquisa("");
        setMostrarMenuCompleto(true);
      }}
      style={{
        padding: '0.75rem 2rem',
        backgroundColor: '#ec7c21ff',
        color: 'white',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        fontWeight: 'bold',
      }}
    >
      Ver Menu Completo
    </button>
  </div>

  {mostrarMenuCompleto && (
    <div
      className="overlay"
      onClick={() => setMostrarMenuCompleto(false)}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        padding: 20,
      }}
    >
      <div
        className="modal-card livro-abrir"
        onClick={e => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          borderRadius: 12,
          maxWidth: 800,
          maxHeight: '80vh',
          overflowY: 'auto',
          padding: 25,
          boxShadow: '0 8px 25px rgba(0,0,0,0.35)',
          position: 'relative',
          transformOrigin: 'left center',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
        }}
      >
        <button
          onClick={() => setMostrarMenuCompleto(false)}
          style={{
            position: 'absolute',
            top: 15,
            right: 15,
            fontSize: 28,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#fc711b',
            fontWeight: 'bold',
            transition: 'color 0.3s ease',
            lineHeight: 1,
          }}
          aria-label="Fechar menu completo"
          onMouseEnter={e => (e.currentTarget.style.color = '#c0392b')}
          onMouseLeave={e => (e.currentTarget.style.color = '#fc711b')}
        >
          ×
        </button>
        <h2 style={{ marginBottom: 20, borderBottom: '2px solid #fc711b', paddingBottom: 8 }}>
          Menu Completo
        </h2>

       
        <input
          type="text"
          placeholder="Pesquisar no menu..."
          value={pesquisa}
          onChange={e => setPesquisa(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: 6,
          }}
        />

        {Object.entries(menuCompleto).map(([categoria, itens]) => {
          const itensFiltradosModal = itens.filter(item =>
            item.nome.toLowerCase().includes(pesquisa.toLowerCase())
          );
          if (itensFiltradosModal.length === 0) return null;

          return (
            <div key={categoria} style={{ marginBottom: 25 }}>
              <h3 style={{ borderBottom: '1px solid #ddd', paddingBottom: 6, color: '#fc711b' }}>
                {categoria}
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '15px'
              }}>
                {itensFiltradosModal.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      border: '1px solid #eee',
                      borderRadius: 8,
                      padding: 10,
                      textAlign: 'center',
                      backgroundColor: '#fff',
                    }}
                  >
                    {item.img && (
                      <img
                        src={item.img}
                        alt={item.nome}
                        style={{
                          width: '100%',
                          height: 120,
                          objectFit: 'cover',
                          borderRadius: 6,
                          marginBottom: 8,
                        }}
                      />
                    )}
                    <h4 style={{ marginBottom: 5 }}>{item.nome}</h4>
                    <p style={{ color: '#555', fontWeight: 'bold' }}>{item.preco}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )}
</section>
      {/* Galeria */}
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
                className="slide-imagem fade"
                width="500"
                height="350"
                loading="lazy"
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

      {/* Eventos */}
      <section id="eventos" className="section eventos">
        <h2>Eventos</h2>
        <p className="descricao-eventos">
          Quer seja para uma celebração íntima ou uma grande festa, o Complexo Vaz é o local ideal para o seu evento.
          Descubra as nossas opções personalizadas para tornar o seu momento inesquecível.
        </p>

        <div className="eventos-cards">
          <article className="evento-card">
            <img src="/assets/festa.jpg" alt="Festas Privadas" className="evento-img" width="400" height="300" loading="lazy" />
            <h3>Festas Privadas</h3>
            <p>Espaços exclusivos para aniversários, despedidas de solteiro(a) e celebrações com amigos e família.</p>
          </article>

          <article className="evento-card">
            <img src="/assets/corporativo (1).jpg" alt="Eventos Corporativos" className="evento-img" width="400" height="300" loading="lazy" />
            <h3>Eventos Corporativos</h3>
            <p>Ambiente profissional e acolhedor para reuniões, workshops e celebrações empresariais.</p>
          </article>

          <article className="evento-card">
            <img src="/assets/degustacao (1).jpg" alt="Degustações & Cocktails" className="evento-img" width="400" height="300" loading="lazy" />
            <h3>Degustações & Cocktails</h3>
            <p>Experiências únicas de cocktails e harmonizações, com especialistas e ambiente descontraído.</p>
          </article>
        </div>
      </section>

      {/* seccao de  Contacto */}
      <section id="contacto" className="section">
        <h2>Contacto</h2>
        <form className="form-contacto">
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>

      {/* Footer */}
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