import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from "react";

function App() {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3030/`
      );
      if (!response.ok) {
        throw new Error(
          `HTTP error: ${response.status}`
        );
      }
      let actualData = await response.json();
      setData(actualData);
      setError(null);
    } catch(err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I like to peek the server on :3030 to fetch the date</p>
      </header>
      <div className="data-ticker">
        Please click this button to fetch the date
        <button name="fetch" onClick={getData}>Click me!</button>
        <div className="data-data">{data && data.date}</div>
      </div>
    </div>
  );
}

export default App;
