import React, { useState } from 'react';

const Unitconverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('kilogram');
  const [outputUnit, setOutputUnit] = useState('kilogram');
  const [result, setResult] = useState('');

  const units = {
    pound: 0.453592, // 1 pound is approximately 0.453592 kilograms
    kilogram: 1, // 1 kilogram is equal to 1 kilogram
    ounce: 0.0283495, // 1 ounce is approximately 0.0283495 kilograms
    gram: 0.001, // 1 gram is equal to 0.001 kilograms
    liter: 1, // 1 liter is equal to 1 liter
    cubiccm: 0.001, // 1 cubic centimeter is equal to 0.001 liters
    // Add more units conversions here
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputUnitChange = (e) => {
    setInputUnit(e.target.value);
  };

  const handleOutputUnitChange = (e) => {
    setOutputUnit(e.target.value);
  };

  const handleConvert = () => {
    const inputConversionRate = units[inputUnit];
    const outputConversionRate = units[outputUnit];
    const convertedValue = (parseFloat(inputValue) * inputConversionRate) / outputConversionRate;
    setResult(`${inputValue} ${inputUnit} is approximately ${convertedValue.toFixed(2)} ${outputUnit}`);
  };

  return (
    <div>
      <h2>Unit Converter</h2>
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <select value={inputUnit} onChange={handleInputUnitChange}>
        <option value="pound">Pound</option>
        <option value="kilogram">Kilogram</option>
        <option value="ounce">Ounce</option>
        <option value="gram">Gram</option>
        <option value="liter">Liter</option>
        <option value="cubiccm">Cubic cm</option>
        {/* Add more unit options here */}
      </select>
      <select value={outputUnit} onChange={handleOutputUnitChange}>
        <option value="pound">Pound</option>
        <option value="kilogram">Kilogram</option>
        <option value="ounce">Ounce</option>
        <option value="gram">Gram</option>
        <option value="liter">Liter</option>
        <option value="cubiccm">Cubic cm</option>
        {/* Add more unit options here */}
      </select>
      <button onClick={handleConvert}>Convert</button>
      <p>{result}</p>
    </div>
  );
};

export default Unitconverter;