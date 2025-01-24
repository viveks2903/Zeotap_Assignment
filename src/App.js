import React, { useState } from 'react';
import Spreadsheet from './components/Spreadsheet';
import Toolbar from './components/Toolbar';
import FormulaBar from './components/FormulaBar';
import './styles/styles.css';


const App = () => {
  const [formula, setFormula] = useState('');

  const handleFormat = (type, value) => {
    console.log(`Apply ${type} with value ${value}`);
  };

  return (
    <div>
      <Toolbar onFormat={handleFormat} />
      <FormulaBar currentFormula={formula} onFormulaChange={setFormula} />
      <Spreadsheet />
    </div>
  );
};

export default App;
