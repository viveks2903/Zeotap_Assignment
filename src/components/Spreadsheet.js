import React, { useState } from 'react';
import './Spreadsheet.css';
import '../styles/Spreadsheet.css';


const Spreadsheet = () => {
  const [cells, setCells] = useState(Array(10).fill(Array(10).fill(''))); // 10x10 grid

  const handleCellChange = (row, col, value) => {
    const newCells = cells.map((rowData, rowIndex) =>
      rowIndex === row
        ? rowData.map((cellData, colIndex) => (colIndex === col ? value : cellData))
        : rowData
    );
    setCells(newCells);
  };

  return (
    <div className="spreadsheet">
      {cells.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              className="cell"
              value={cell}
              onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Spreadsheet;
