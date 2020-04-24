import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

const StyledFooter = styled.footer`
  color: white;
  width: 100%;
  text-align: center;

  a{
      text-decoration: underline;
      color: white;
  }
`;

const StyledHeart = styled(FaHeart)`
  color: #00ff1d;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <h3>
        Hecho con <StyledHeart /> por
        <a href="https://twitter.com/enrique_devars" target="blank">
          <br/>@edevars
        </a>
      </h3>
    </StyledFooter>
  );
};
