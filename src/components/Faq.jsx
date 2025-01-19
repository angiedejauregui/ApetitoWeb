import React, { useState } from "react";
import styled from "styled-components";

const dataCollection = [
  {
    question: "¿Cuánto cuesta crear la página web de mi restaurante?",
    answer:
      "El precio varía según las necesidades de cada proyecto. Contáctanos para obtener un presupuesto personalizado.",
  },
  {
    question: "¿Cuánto tiempo toma crear la página web de mi restaurante?",
    answer:
      "El tiempo de entrega varía según los requerimientos específicos de tu página, pero generalmente entregamos tu página web en un plazo de 30 a 60 días",
  },
  {
    question: "¿El servicio incluyen dominio y hosting?",
    answer:
      "No, el dominio y hosting deben ser adquiridos por el cliente, pero te asesoraremos para facilitarte el proceso de compra.",
  },
  {
    question: "¿Puedo actualizar el menú yo mismo?",
    answer:
      "¡Por supuesto! Contarás con un panel de administración fácil de usar donde podrás actualizar el menú en cualquier momento.",
  },
];

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <FaqContainer>
      <div className="faq-title">
        <h2>Preguntas Frecuentes</h2>
      </div>
      <div className="faq">
        {dataCollection.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-heading" onClick={() => toggleFaq(index)}>
              <h3 className={activeFaq === index ? "active" : ""}>
                {item.question}
              </h3>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                >
                  <path
                    d="M1.88 0.453125L8 6.55979L14.12 0.453125L16 2.33312L8 10.3331L0 2.33312L1.88 0.453125Z"
                    fill={activeFaq === index ? "#E3F5A1" : "#1C2806"}
                  />
                </svg>
              </span>
            </div>
            {activeFaq === index && <p className="answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </FaqContainer>
  );
};

export default Faq;

const FaqContainer = styled.section`
  padding: 5rem 6rem 4rem 6rem;
  background-color: var(--primary-color);
  text-align: center;

  .faq-title {
    text-align: center;
    margin-bottom: 3rem;
    padding: 0rem 5rem;
    width: fit-content;
    margin: auto;
    //color: var(--secondary-color);
  }

  h2 {
    border: none;
    padding: 0;
    margin: 0;
  }

  .faq {
    max-width: 1000px;
    margin: 2rem auto;
    text-align: left;
  }

  .faq-item {
    border-bottom: 1px solid var(--black-color);
    padding: 1.5rem 0;
    width: 100%;
  }

  .faq-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  h3 {
    font-size: 1.2rem;
    margin: 0;
    font-weight: bold;
  }

  .answer {
    padding: 0.5rem 0;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    transition: transform 0.2s;
  }

  .faq-heading:hover span {
    transform: scale(1.2);
  }

  @media (max-width: 850px) {
    padding: 4rem 2rem;

    .faq {
      grid-template-columns: 1fr;
    }

    .faq-title {
      padding: 0rem;
      width: 100%;
    }

    .faq-heading {
      gap: 1rem;
    }

    h2 {
      font-size: 2rem;
      width: 100%;
    }
  }
`;
