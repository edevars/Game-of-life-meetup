import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GridWrapper } from "../styles/GridWrapper";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Title } from "../styles/Title";
import { Subtitle } from "../styles/Subtitle";
import { Footer } from "../styles/Footer";
import { Helmet } from "react-helmet";
import { World } from "../components/World";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BorderBox = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  return (
    <MainWrapper>
      <GlobalStyle />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GridWrapper>
        <BorderBox>
          <Title>gAme of life</Title>
          <Subtitle>de John Horton Conway</Subtitle>
          <World />
        </BorderBox>
        <aside>
          <h3>Descripción</h3>
          <p>
            El juego de la vida es un autómata celular diseñado por el
            matemático británico John Horton Conway en 1970. Se lleva a cabo en
            un tablero de m filas por n columnas.
          </p>
          <h3>Las reglas</h3>
          <ul>
            <li>Este juego no necesita jugadores.</li>
            <li>
              Una célula muerta con exactamente 3 células vecinas vivas "nace"
              (es decir, al turno siguiente estará viva).
            </li>
            <li>
              Una célula viva con 2 o 3 células vecinas vivas sigue viva, en
              otro caso muere (por "soledad" o "superpoblación").
            </li>
          </ul>
        </aside>
      </GridWrapper>
      <Footer />
    </MainWrapper>
  );
};

export default Home;
