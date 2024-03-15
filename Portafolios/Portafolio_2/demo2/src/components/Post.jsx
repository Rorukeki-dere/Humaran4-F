import { useState, useEffect } from 'react';
import './App.css';
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

export default function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setIsLoading(false);
        setData(result);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error.toString());
      });
  }, []);

  if (error) {
    return <h4>{error}</h4>;
  }

  if (isLoading) {
    return (
      <div class="App">
        <h4>Loading Data...</h4>
        <progress value={null} />
      </div>
    );
  }

  return (
    <div class="App">
      <h1>BTC TO USD | EURR | GBP</h1>
      <h3>BTC To USD</h3>
      <div class="col-2"></div>
      <div class="col-8">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>RATE FLOAT</th>
              <th>DESCRIPTION</th>
              <th>UPDATED</th>
              <th>RATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data["bpi"]["USD"].rate}</td>
              <td>{data["bpi"]["USD"].rate_float}</td>
              <td>{data["bpi"]["USD"].description}</td>
              <td>{data["bpi"]["USD"].updated}</td>
            </tr>
            <tr>
              <td>{data["bpi"]["USD"].rate}</td>
              <td>{data["bpi"]["USD"].rate_float}</td>
              <td>{data["bpi"]["USD"].description}</td>
              <td>{data["bpi"]["USD"].updated}</td>
            </tr>
            <tr>
              <td>{data["bpi"]["USD"].rate}</td>
              <td>{data["bpi"]["USD"].rate_float}</td>
              <td>{data["bpi"]["USD"].description}</td>
              <td>{data["bpi"]["USD"].updated}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-2"></div>
    </div>
  );
}


const styles = {
  textProps:{
    alignItems: "center",
    justifyContent: "center",
  }
}