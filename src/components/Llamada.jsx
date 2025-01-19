import React from 'react'
import { InlineWidget, PopupWidget } from 'react-calendly'
import styled from 'styled-components'

const Llamada = () => {
  return (
    <LlamadaContainer id='llamada'>
        <h2>Agenda tu llamada gratuita y transforma tu restaurante</h2>
        <InlineWidget className='calendly' url="https://calendly.com/angiedejauregui/llamada-estrategica" />
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