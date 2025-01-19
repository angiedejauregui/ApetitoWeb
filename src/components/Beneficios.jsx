import React from "react";
import styled from "styled-components";

const Beneficios = () => {
  return (
    <BeneficiosContainer>
      <h2>¿Cómo puede ayudarte una pagina web?</h2>
      <div className="items">
        <div>
          <h3>Más Gente te Encuentra</h3>
          <p>
             Hoy en día, la mayoría de las personas buscan en Google antes de
            decidir dónde comer. Con una web bien hecha, te aseguras de aparecer
            en esas búsquedas y atraer más comensales a tu puerta.
          </p>
        </div>
        <div>
          <h3>Reservas sin pérdidas</h3>
          <p>
            Olvídate de las llamadas y de los "no shows". Con un sistema de
            reservas online, tus clientes pueden apartar su mesa fácilmente, y
            si no se presentan, el sistema asegura que paguen un pequeño fee.
          </p>
        </div>
        <div>
          <h3>Tu Restaurante Abierto las 24/7</h3>
          <p>
            Aunque tu restaurante esté cerrado, tu página está siempre abierta.
            Los clientes pueden ver tu menú, conocer tu ambiente y hacer sus
            reservas en cualquier momento.
          </p>
        </div>
        <div>
          <h3>Te Destacas de la Competencia</h3>
          <p>
            Con tantas opciones ahí fuera, una página web bien diseñada puede
            ser el factor que haga que te elijan a ti. Refleja la calidad de tu
            comida y el ambiente único de tu restaurante.
          </p>
        </div>
        <div>
          <h3>Atraes Más Clientes</h3>
          <p>
            Una web atractiva despierta el deseo de visitar tu restaurante desde
            el primer clic. Muestra lo mejor de tu cocina, resalta tus platos
            más sabrosos y verás cómo las mesas se llenan.
          </p>
        </div>
        <div>
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
  padding: 6rem 8rem;
  background-color: var(--secondary-color);

  .items {
    margin: 4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    text-align: start;

    div {
      padding: 2rem 2rem 2rem;
      border-radius: 1rem;
      border: 1px solid #1c2806;
      min-height: 12rem;

      img {
        width: 3rem;
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
    padding: 4rem 2rem;
    
    .items {
        grid-template-columns: 1fr;
        margin: 4rem 0;
    }
  }
`;
