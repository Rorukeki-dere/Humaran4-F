import { useState, useEffect } from 'react'; // Importa los hooks useState y useEffect desde la biblioteca 'react'.
import './App.css'; // Importa los estilos definidos en el archivo App.css.

const url = "https://api.coindesk.com/v1/bpi/currentprice.json"; // Declara la URL de la API.

export default function App() { // Exporta por defecto una función de componente llamada App.
  const [data, setData] = useState(null); // Declara un estado 'data' utilizando el hook useState, inicializado como null.
  const [isLoading, setIsLoading] = useState(true); // Declara un estado 'isLoading' utilizando el hook useState, inicializado como true.
  const [error, setError] = useState(null); // Declara un estado 'error' utilizando el hook useState, inicializado como null.

  useEffect(() => { // Utiliza el hook useEffect para realizar acciones de efecto secundario en el componente.
    fetch(url) // Realiza una solicitud GET a la URL especificada.
      .then(response => response.json()) // Convierte la respuesta a formato JSON.
      .then(result => { // Callback que maneja el resultado exitoso de la solicitud.
        setIsLoading(false); // Actualiza el estado 'isLoading' a false.
        setData(result); // Actualiza el estado 'data' con los datos obtenidos de la API.
      })
      .catch(error => { // Callback que maneja cualquier error durante la solicitud.
        setIsLoading(false); // Actualiza el estado 'isLoading' a false.
        setError(error.toString()); // Actualiza el estado 'error' con el mensaje de error.
      });
  }, []); // [] como dependencia indica que este efecto se ejecutará solo una vez cuando el componente se monte.

  if (error) { // Si hay un error, renderiza un mensaje de error.
    return <h4>{error}</h4>;
  }

  if (isLoading) { // Si la carga está en curso, renderiza un indicador de carga.
    return (
      <div className="App">
        <h4>Loading Data...</h4>
        <progress value={null} />
      </div>
    );
  }

  return ( // Si no hay errores y la carga ha finalizado, renderiza la tabla de datos.
    <div className="App">
      <h1>BTC TO USD | EURR | GBP</h1>
      <h3>BTC To USD</h3>
      <div className="col-2"></div>
      <div className="col-8">
        <table className="table table-striped">
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
            {/* Repite las filas de la tabla para mostrar los datos */}
          </tbody>
        </table>
      </div>
      <div className="col-2"></div>
    </div>
  );
}
