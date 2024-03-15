import React, { useState, useEffect } from 'react'; // Importa React y los hooks useState y useEffect desde la biblioteca 'react'.
import DataTable from 'react-data-table-component'; // Importa el componente DataTable desde la biblioteca 'react-data-table-component'.

const MiDataTable = () => { // Define un componente funcional llamado MiDataTable.
  const [user, setUser] = useState([]); // Declara un estado llamado 'user' utilizando el hook useState, inicializado como un array vacío.
  const url = 'https://pokeapi.co/'; // Declara una variable 'url' que contiene la URL de la API.

  // Declara una función asincrónica llamada 'showData' que obtiene datos de la API y actualiza el estado 'user'.
  const showData = async () => {
    const response = await fetch(url); // Realiza una solicitud GET a la URL especificada.
    const data = await response.json(); // Convierte la respuesta a formato JSON.
    console.log(data); // Imprime los datos en la consola.
    setUser(data); // Actualiza el estado 'user' con los datos obtenidos de la API.
  };

  // Utiliza el hook useEffect para ejecutar la función 'showData' cuando el componente se monta (es decir, cuando [] como dependencia cambia).
  useEffect(() => {
    showData();
  }, []);

  const columns = [
    {
      name: 'Personaje', // Nombre de la columna.
      selector: row => row.character, // Función que selecciona el valor de la columna 'Personaje' de cada fila de datos.
    },
  ];

  return (
    <DataTable
    columns={columns}
    data={user}
    pagination
    />
      
  );
};

export default MiDataTable; //exporta el componente MiDataTable para que pueda ser utilizado en otros archivosS
