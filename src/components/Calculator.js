import React, { useState } from 'react';

const Calculator = () => {
  const [formula, setFormula] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    // Add your calculation logic here based on the formula
    // For simplicity, just display a message
    setResult(`Result: ${eval(formula)}`);
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'green', padding: '10px', margin: '10px' }}>
      <h2>Ohm's Law Calculator</h2>
      <p>Enter the Ohm's Law formula:</p>
      <input
        type="text"
        value={formula}
        onChange={(e) => setFormula(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <p>{result}</p>
    </div>
  );
};

export default Calculator;
