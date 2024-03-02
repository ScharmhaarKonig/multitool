import React, { useState } from 'react';

function QuoteofthedayRandomizer() {
  const [quote, setQuote] = useState('');
  const [lastPressTime, setLastPressTime] = useState(
    localStorage.getItem('lastPressTime')
  );

  const fetchRandomQuote = async () => {
    const response = await fetch('https://favqs.com/api/qotd');
    const data = await response.json();
    setQuote(data.quote.body);
    setLastPressTime(Date.now());
    localStorage.setItem('lastPressTime', Date.now());
  };

  const handleButtonClick = () => {
    if (!lastPressTime || Date.now() - lastPressTime >= 24 * 60 * 60 * 1000) {
      fetchRandomQuote();
    } else {
      alert('You can only get a new quote once every 24 hours!');
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Get Quote of the Day</button>
      <p>{quote}</p>
    </div>
  );
}

export default QuoteofthedayRandomizer;