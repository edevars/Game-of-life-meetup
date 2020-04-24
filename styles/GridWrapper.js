import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 450px;
  min-width: 100%;

  aside {
    background: black;
    color: white;
    padding: 20px 45px;
    height: calc(100vh - 40px);

    p {
      font-size: 21px;
      text-align: justify;
    }

    h3 {
      font-size: 36px;
    }

    li {
      margin-bottom: 10px;
      font-size: 21px;
    }
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
