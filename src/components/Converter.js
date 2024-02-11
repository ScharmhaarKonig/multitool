import React, { useState } from 'react';

const Converter = () => {
  const [conversionType, setConversionType] = useState('');
  const [inputLink, setInputLink] = useState('');
  const [output, setOutput] = useState('');

  const handleConvert = async () => {
    const response = await fetch('http://localhost:5000/convert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputLink, conversionType }),
    });

    if (response.ok) {
      const data = await response.json();
      setOutput(data.message);
    } else {
      setOutput('Error converting the file. Please try again.');
    }
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'green', padding: '10px', margin: '10px' }}>
      <h2>YouTube Converter</h2>
      <p>Choose conversion type:</p>
      <label>
        <input
          type="radio"
          value="mp3"
          checked={conversionType === 'mp3'}
          onChange={() => setConversionType('mp3')}
        />
        MP3
      </label>
      <label>
        <input
          type="radio"
          value="mp4"
          checked={conversionType === 'mp4'}
          onChange={() => setConversionType('mp4')}
        />
        MP4
      </label>
      <p>Enter YouTube link:</p>
      <input
        type="text"
        value={inputLink}
        onChange={(e) => setInputLink(e.target.value)}
      />
      <button onClick={handleConvert}>Convert</button>
      <p>Output: {output}</p>
    </div>
  );
};

export default Converter;