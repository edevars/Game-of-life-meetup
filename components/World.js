import { useState, useEffect } from "react";
import { Board } from "../styles/Board";
import { Cell } from "../styles/Cell";

const columns = 10;
const rows = 10;

export const World = () => {
  return (
    <div>
      <Board columns={columns} rows={rows}></Board>
    </div>
  );
};
