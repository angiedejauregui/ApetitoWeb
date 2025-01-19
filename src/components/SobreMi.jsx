import React from "react";
import styled from "styled-components";
import foto from "../assets/fotoSobreMi.webp";

const SobreMi = () => {
  return (
    <SobreMiContainer>
      <img src={foto} alt="Foto de perfil" />
      <div>
        <h2>Mi Misión: Hacer que Tu Restaurante Llene Sus Mesas</h2>
        <p>
          Mi pasión por la tecnología y el explorar la gastronomía se
          unieron para crear Apetito Web, una agencia especializada en hacer que
          los restaurantes brillen en el mundo digital.
          <br />
          Potenciamos la visibilidad de tu restaurante, mejoramos tu presencia
          online y atraemos más comensales ¡Nuestro objetivo es que tu
          restaurante sea el lugar al que todos quieran ir!
        </p>
        <a href="#llamada">
          <button>¡Quiero llenar mis mesas!</button>
        </a>
      </div>
    </SobreMiContainer>
  );
};

export default SobreMi;

const SobreMiContainer = styled.section`
  padding: 6rem;
  display: flex;
  gap: 5rem;
  text-align: start;
  align-items: center;


  img {
    background-color: var(--secondary-color);
    object-fit: contain;
    height: 22rem;
    border: 5px solid var(--primary-color);
  }

  p {
    margin: 3rem 0;
  }

  button {
    background-color: var(--primary-color);
    margin: auto;
    color: #fff;
    width: 20rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 4rem 2rem;
    gap: 3rem;

    img {
    }

    p {
      margin: 2rem 0;
    }
  }
`;
