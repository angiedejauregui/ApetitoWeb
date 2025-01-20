import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";

const Dato = () => {
  useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);

  return (
    <DatoContainer>
      <div ata-aos="fade-up">

      <h2>Tu restaurante merece ser el primero en la mente de tus clientes</h2>
      <p>
        En un mundo lleno de opciones gastronómicas, ¿cómo logras destacar? La
        clave está en tu presencia online. Hoy, más del 80% de las personas
        buscan en línea antes de decidir a dónde ir a comer. Si tu restaurante
        no tiene una página web atractiva o no se distingue entre la
        competencia, ¡estás perdiendo clientes!
      </p>
      </div>
    </DatoContainer>
  );
};

export default Dato;

const DatoContainer = styled.section`
    padding: 6rem;
    text-align: start;
    background-color: #e3f5a130;
    
    h2 {
        margin-bottom: 2rem;
    }

    @media (max-width: 900px) {
      padding: 4rem 2rem;
}

    @media (max-width: 850px) {
      padding: 4rem 2rem;
    }
`;
