import styled from 'styled-components';

export const Cell = styled.div`
  background: ${(props) => (props.isAlive ? "white" : "black")};
  width: 10px;
  height: 10px;
`;