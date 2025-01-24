import React from 'react';
import './FormulaBar.css';
import '../styles/FormulaBar.css';


const FormulaBar = ({ currentFormula, onFormulaChange }) => {
  return (
    <div className="formula-bar">
      <input
        type="text"
        value={currentFormula}
        onChange={(e) => onFormulaChange(e.target.value)}
        placeholder="Enter formula here"
      />
    </div>
  );
};

export default FormulaBar;
