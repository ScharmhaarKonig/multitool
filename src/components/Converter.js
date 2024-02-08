import React, { useState } from 'react';

const Converter = () => {
  const [conversionType, setConversionType] = useState('');
  const [inputLink, setInputLink] = useState('');
  const [output, setOutput] = useState('');

  const handleConvert = () => {
    // Add your conversion logic here based on the inputLink and conversionType
    // For simplicity, just display a message
    setOutput(`Converted ${inputLink} to ${conversionType}`);

    // Create a temporary anchor element for downloading the file
    const downloadLink = document.createElement('a');
    downloadLink.href = `your_download_url_here`; // Replace 'your_download_url_here' with the actual download URL

    // Set the download attribute with the desired file name
    downloadLink.setAttribute('download', `converted_file.${conversionType}`);

    // Simulate a click on the anchor element to trigger the download
    downloadLink.click();
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