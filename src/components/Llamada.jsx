import React, { useEffect } from 'react'
import { InlineWidget, PopupWidget } from 'react-calendly'
import styled from 'styled-components'
import AOS from "aos";
import "aos/dist/aos.css";

const Llamada = () => {
  useEffect(() => {
          AOS.init({ duration: 2000 });
        }, []);

  return (
    <LlamadaContainer id='llamada'>
        <h2 data-aos="fade-up">Agenda una llamada gratuita y transforma tu restaurante</h2>
        <InlineWidget data-aos="fade-up" className='calendly' url="https://calendly.com/angiedejauregui/llamada-estrategica" />
    </LlamadaContainer>
  )
}

export default Llamada

const LlamadaContainer = styled.section`
    padding: 4rem;

    h2 {
        margin-bottom: 4rem;
    }
`