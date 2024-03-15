import './App.css'; //importa los estilos definidos de el archivo App.css,
import MiDataTable from './components/tabla'; //Importa el componente "MiDataTable" desde el archivo "tabla.jsx" ubicado en el directorio components

function App() { // Define una funcion de componente llamada App.
  
  return ( //devuelve JSX, que representa la estructura de la aplicacion
    <div className="App">  
      <header className="App-header">
          <MiDataTable/>
      </header>
    </div>
  );
  }

export default App; //exporta la funcion de componente App para que pueda ser utilizada en otros archivos.
