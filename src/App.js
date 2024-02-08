import React, { useState } from 'react';
import Converter from './components/Converter';
import Formulas from './components/Formulas';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const renderComponent = () => {
    switch (selectedOption) {
      case '1':
        return <Formulas/>;
      case '2':
        return <Converter />;
      // Add more cases for additional tools
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'green', fontFamily: 'monospace' }}>
      <h1>Multitool App</h1>
      <p>Choose an option:</p>
      <input
        type="text"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      />
      {renderComponent()}
    </div>
  );
}

export default App;
