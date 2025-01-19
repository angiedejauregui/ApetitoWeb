import React from "react";
import styled from "styled-components";

function Footer(props) {
  return (
    <FooterContainer>
      <p>2025 &copy; Apetito Web</p>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
`;