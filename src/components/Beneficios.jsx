import React, { useEffect } from "react";
import styled from "styled-components";
import encuentran from '../assets/beneficios/encuentran.gif'
import reservas from '../assets/beneficios/reservas.gif'
import h from '../assets/beneficios/24h.gif'
import destacar from '../assets/beneficios/destacar.gif'
import fidelizacion from '../assets/beneficios/fidelizacion.gif'
import clientes from '../assets/beneficios/masClientes.gif'
import Aos from "aos";
import "aos/dist/aos.css";

const Beneficios = () => {
  useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);

  return (
    <BeneficiosContainer>
      <h2>¿Cómo puede ayudarte una pagina web?</h2>
      <div className="items">
        <div data-aos="fade-up">
        <img src={encuentran} alt="Lupa, símbolo de búsqueda" />
          <h3>Más Gente te Encuentra</h3>
          <p>
             Hoy en día, la mayoría de las personas buscan en Google antes de
            decidir dónde comer. Con una web bien hecha, te aseguras de aparecer
            en esas búsquedas y atraer más comensales a tu puerta.
          </p>
        </div>
        <div data-aos="fade-up">
        <img src={reservas} alt="Calendario, representando reservas" />
          <h3>Reservas sin pérdidas</h3>
          <p>
            Olvídate de las llamadas y de los "no shows". Con un sistema de
            reservas online, tus clientes pueden apartar su mesa fácilmente, y
            si no se presentan, el sistema asegura que paguen un pequeño fee.
          </p>
        </div>
        <div data-aos="fade-up">
        <img src={h} alt="Reloj, simbolizando disponibilidad 24/7" />
          <h3>Tu Restaurante Abierto las 24/7</h3>
          <p>
            Aunque tu restaurante esté cerrado, tu página está siempre abierta.
            Los clientes pueden ver tu menú, conocer tu ambiente y hacer sus
            reservas en cualquier momento.
          </p>
        </div>
        <div data-aos="fade-up">
        <img src={destacar} alt="Rayo, simbolizando destacarse de la competencia" />
          <h3>Te Destacas de la Competencia</h3>
          <p>
            Con tantas opciones ahí fuera, una página web bien diseñada puede
            ser el factor que haga que te elijan a ti. Refleja la calidad de tu
            comida y el ambiente único de tu restaurante.
          </p>
        </div>
        <div data-aos="fade-up">
        <img src={clientes} alt="Flecha hacia arriba, representando el aumento de clientes" />
          <h3>Atraes Más Clientes</h3>
          <p>
            Una web atractiva despierta el deseo de visitar tu restaurante desde
            el primer clic. Muestra lo mejor de tu cocina, resalta tus platos
            más sabrosos y verás cómo las mesas se llenan.
          </p>
        </div>
        <div data-aos="fade-up">
        <img src={fidelizacion} alt="Flechas en bucle, representando fidelización de clientes" />
          <h3>Fidelización de Clientes</h3>
          <p>
            Ofrece contenido exclusivo, promociones y noticias a través de tu
            sitio, manteniendo a tus clientes informados y comprometidos, y
            fomentando visitas recurrentes.
          </p>
        </div>
      </div>
      <a href="#llamada">
        <button>¡Quiero llenar mis mesas!</button>
      </a>
    </BeneficiosContainer>
  );
};

export default Beneficios;

const BeneficiosContainer = styled.section`
  padding: 6rem 8rem 2rem 8rem;
  background-color: var(--secondary-color);

  .items {
    margin: 4rem 0rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    text-align: start;

    
    div {
      padding: 1rem 2rem 2rem;
      border-radius: 1rem;
      border: 1px solid #1c2806;
      min-height: 12rem;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);

      img {
        width: 2.5rem;
        margin-bottom: 0.5rem;
      }

      h3 {
        padding-bottom: 1rem;
        font-family: Playfair Display;
        font-size: 1.3rem;
      }
    }
  }

  button {
    background-color: var(--black-color);
    width: 20rem;
    color: #fff;
  }

  @media (max-width: 950px) {
    padding: 4rem 2rem;

    .items {
        margin: 4rem 0;
    }
}

  @media (max-width: 850px) {
    padding: 6rem 2rem 2rem 2rem;
    
    .items {
        grid-template-columns: 1fr;
        margin: 4rem 0;
        gap: 2rem;
    }
  }
`;
