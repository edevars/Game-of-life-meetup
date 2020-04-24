import styled from 'styled-components';

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 1}, 10px);
  grid-template-rows: repeat(${props => props.rows || 1}, 10px);
  background: black;
  column-gap: 1px;
  row-gap: 1px;
`;

