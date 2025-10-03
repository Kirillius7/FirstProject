import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  // Завантажуємо список валют при першому рендері
  useEffect(() => {
    fetch("https://api.exchangerate.host/latest")
      .then(res => res.json())
      .then(data => {
        setCurrencies(Object.keys(data.rates));
      });
  }, []);

  const convert = () => {
    fetch(`https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`)
      .then(res => res.json())
      .then(data => setResult(data.result));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Currency Converter</h2>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
        {currencies.map(cur => <option key={cur} value={cur}>{cur}</option>)}
      </select>
      <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
        {currencies.map(cur => <option key={cur} value={cur}>{cur}</option>)}
      </select>
      <button onClick={convert}>Convert</button>
      {result !== null && <h3>Result: {result.toFixed(2)}</h3>}
    </div>
  );
}

export default WeatherApp;