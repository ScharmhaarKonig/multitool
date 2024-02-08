import React, { useState } from 'react';

const Formulas = () => {
  const [requestedFormula, setRequestedFormula] = useState('');
  const [selectedFormulas, setSelectedFormulas] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate fetching relevant formulas based on the user's request
    switch (requestedFormula.toLowerCase()) {
      case 'watt':
        setSelectedFormulas(['Volt * Amps', 'Resistance * Amps ^ 2', 'Volts ^ 2 / Resistance']);
        break;
      case 'volt':
        setSelectedFormulas(['Resistance * Amps','watt / amps','sqrt(watt * resistance)']);
        break;
      case 'resistance':
        setSelectedFormulas(['volt / amps','volts ^ 2 / watt',' watt / amps ^ 2']);
        break; 
      case 'amps':
        setSelectedFormulas(['sqrt(watt / resistance)','watt / voltage','watt / amps ^ 2']);
        break;
      default:
        setSelectedFormulas([]);
        break;
    }
  };

  return (
    <div>
      <h2>Formula Selection</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Enter the formula you want:
          <input
            type="text"
            value={requestedFormula}
            onChange={(e) => setRequestedFormula(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      
      <h3>Selected Formulas for {requestedFormula}:</h3>
      <ul>
        {selectedFormulas.map((formula, index) => (
          <li key={index}>{formula}</li>
        ))}
      </ul>
    </div>
  );
};

export default Formulas;