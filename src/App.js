import React, { useState } from 'react';
import Converter from './components/Converter';
import Formulas from './components/Formulas';
import Unitconverter from './components/Unitconverter';
import QuoteofthedayRandomizer from './components/QuoteofthedayRandomizer';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const renderComponent = () => {
    switch (selectedOption) {
      case '1':
        return <Formulas />;
      case '2':
        return <Converter />;
      case '3':
        return <Unitconverter />;
      case '4': 
        return <QuoteofthedayRandomizer/>;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'black', color: 'green', fontFamily: 'VT323', height: '100vh' }}>
      <h1 style={{ marginTop: '20px' }}>Multitool App</h1>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ flex: 1, padding: '10px' }}>
          <p>Choose an option:</p>
          <input
            type="text"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          {renderComponent()}
        </div>
        <div style={{ width: '200px', padding: '10px', backgroundColor: 'black', color: 'green', marginLeft: '300px' }}>
          <p>Options:</p>
          <ul>
            <li onClick={() => setSelectedOption('1')}>1. Formulas</li>
            <li onClick={() => setSelectedOption('2')}>2. Converter</li>
            <li onClick={() => setSelectedOption('3')}>3. Unitconverter</li>
            <li onClick={() => setSelectedOption('4')}>4. Quote of the day Randomizer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;