import React from "react";
import styled from "styled-components";

const Dato = () => {
  return (
    <DatoContainer>
      <h2>Tu restaurante merece ser el primero en la mente de tus clientes</h2>
      <p>
        En un mundo lleno de opciones gastronómicas, ¿cómo logras destacar? La
        clave está en tu presencia online. Hoy, más del 80% de las personas
        buscan en línea antes de decidir a dónde ir a comer. Si tu restaurante
        no tiene una página web atractiva o no se distingue entre la
        competencia, ¡estás perdiendo clientes!
      </p>
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
