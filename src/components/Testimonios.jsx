import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";

const Testimonios = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <TestimoniosContainer>
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="slider-container">
      <Slider {...settings}>
        <div className="texto">
          <p>
            Angie te agradeszco mucho por la pagina que me creaste fuiste una
            persona muy colaboradora me esplicabas muy bn todo Y la forma de
            tratarme era la mejor me tenias mucha paciencia apesar de que yo no
            sabia nada y me creaste la pagina como yo la queria y me dabas las
            mejores recomendaciones para que quedara mejor me siento muy
            agradecido y muy agusto con el trabajo que me hiciste.
          </p>
          <p className="name">
            <b>Elkin</b>
          </p>
        </div>
        <div className="texto">
          <p>
            Estoy más que conforme con el servicio de Angie, amable, responsable
            y buscándole la vuelta a todo para que la página logré tener lo
            mejor un placer trabajar con ella
          </p>
          <p className="name">
            <b>Tere</b>
          </p>
        </div>
      </Slider>
      </div>
    </TestimoniosContainer>
  );
};

export default Testimonios;

const TestimoniosContainer = styled.section`
  padding: 4rem 6rem;
  background-color: #e3f5a140;

  .slider-container {

    .texto {
      padding: 5rem;
      width: 10rem;
      height: 15rem;
      border-radius: 2rem;
      color: #272929;
      
      .name {
        margin: 1rem;
        color: #1a1b1b;
      }
    }


    .slick-prev, .slick-next {
      color: #000; 
      z-index: 1; 
    }

    .slick-prev:before, .slick-next:before {
      font-size: 24px; 
      color: #000; 
  }
}


  @media (max-width: 900px) {
    padding: 4rem 2rem;
}

  @media (max-width: 850px) {
    padding: 4rem 2rem;

    .slider-container {
      margin: 2rem 1rem 0 1rem;
      .texto {
        padding: 1rem;

        p {
          font-size: 1.1rem;
        }

        .name {
          font-size: 1rem;
        }
      }
    }
  }
`;
