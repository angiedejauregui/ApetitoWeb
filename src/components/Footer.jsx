import React from "react";
import styled from "styled-components";

function Footer(props) {
  return (
    <FooterContainer>
      <p>Copyright &copy; 2025 Apetito Web</p>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;

  p {
    font-size: 1rem;
  }
`;