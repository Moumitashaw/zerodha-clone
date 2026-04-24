import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div>
              <h1>Crypto Dashboard</h1>
              {cryptoData.length > 0 ? (
                <div>
                  {cryptoData.map(crypto => (
                    <div key={crypto.id}>
                      <h2>{crypto.name}</h2>
                      <p>Price: ${crypto.current_price}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 