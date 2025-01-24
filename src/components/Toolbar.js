import React from 'react';
import './Toolbar.css';
import '../styles/Toolbar.css';


const Toolbar = ({ onFormat }) => {
  return (
    <div className="toolbar">
      <button onClick={() => onFormat('bold')}>Bold</button>
      <button onClick={() => onFormat('italic')}>Italic</button>
      <input
        type="color"
        onChange={(e) => onFormat('color', e.target.value)}
        title="Change Text Color"
      />
      <input
        type="number"
        min="8"
        max="48"
        placeholder="Font Size"
        onChange={(e) => onFormat('fontSize', e.target.value)}
      />
    </div>
  );
};

export default Toolbar;
