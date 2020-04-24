import { useState, useEffect } from "react";
import { Board } from "../styles/Board";
import { Cell } from "../styles/Cell";

const columns = 60;
const rows = 60;

function create2DArray() {
  let array = new Array(rows);

  for (let i = 0; i < rows; i++) {
    array[i] = new Array(columns);
  }

  return array;
}

function createLife() {
  let cells = create2DArray();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      cells[i][j] = Math.random() > 0.5 ? 1 : 0;
    }
  }

  return cells;
}

function countNeighbours(cells, i, j) {
  let sum = 0;
  sum += cells[i - 1][j - 1];
  sum += cells[i][j - 1];
  sum += cells[i + 1][j - 1];
  sum += cells[i - 1][j];
  sum += cells[i + 1][j];
  sum += cells[i - 1][j + 1];
  sum += cells[i][j + 1];
  sum += cells[i + 1][j + 1];
  return sum;
}

function nextGeneration(oldCells) {
  let nextCells = create2DArray();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let stateOld = oldCells[i][j];
      if (i === 0 || i === columns - 1 || j === 0 || j === rows - 1) {
        nextCells[i][j] = 0;
      } else {
        // Regla 1
        let neighbours = countNeighbours(oldCells, i, j);
        if (stateOld === 0 && neighbours === 3) {
          nextCells[i][j] = 1;
        } else if (stateOld === 1 && (neighbours < 2 || neighbours > 3)) {
          nextCells[i][j] = 0;
        } else {
          nextCells[i][j] = stateOld;
        }
      }
    }
  }

  return nextCells;
}

export const World = () => {
  const [timer, setTimer] = useState(Date.now());
  const [generation, setGeneration] = useState(0);
  const [cells, setCells] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(Date.now());
    }, 200);

    if (generation === 0) {
      setCells(createLife());
    }else{
      setCells(nextGeneration(cells))
    }

    setGeneration(generation + 1);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div>
      <Board columns={columns} rows={rows}>
        {cells.flat().map((cell, index) => {
          let isAlive = cell === 1;
          return <Cell key={index} isAlive={isAlive} />;
        })}
      </Board>
      <h3>No. de generaciones: {generation}</h3>
    </div>
  );
};
