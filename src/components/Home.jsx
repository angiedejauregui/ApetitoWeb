import React, { useEffect } from "react";
import styled from "styled-components";
import fondo from "../assets/fondo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);

  return (
    <HomeContariner ata-aos="fade-up">
      <h1>
        Imagina un sitio web que haga que todos quieran visitar tu restaurante
      </h1>
      <p>
        Creamos páginas web que hacen que tu restaurante resalte, atraiga más
        comensales y haga que todos hablen de él.
      </p>
      <a href="#llamada">
        <button>¡Quiero una web que llene mis mesas!</button>
      </a>
    </HomeContariner>
  );
};

export default Home;

const HomeContariner = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)),
    url(${fondo});
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;

  h1 {
    font-size: 4.5rem;
    width: 80%;
    margin: 0 auto;
    font-family: Playfair Display;
  }

  p {
    width: 50%;
    margin: 0 auto;
    font-size: 1.4rem;
    font-weight: 500;
  }

  button {
    background-color: var(--secondary-color);
    color: var(--black-color);
  }

  @media (max-width: 900px) {
    gap: 2rem;
    padding: 3rem;

    h1 {
      font-size: 3.2rem;
      width: 100%;
    }

    p {
      font-size: large;
      width: 100%;
    }
  }
`;
