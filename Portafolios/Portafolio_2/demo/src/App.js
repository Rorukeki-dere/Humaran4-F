import Cabecera from './components/Cabecera'; // Importa el componente Cabecera desde './components/Cabecera'.
import './App.css'; // Importa los estilos definidos en './App.css'.
import Image from './components/Image'; // Importa el componente Image desde './components/Image'.
import Welcome from "./components/welcome"; // Importa el componente Welcome desde "./components/welcome".
import Form from "./components/Form"; // Importa el componente Form desde "./components/Form".

function App() { // Define una función de componente llamada App.
  return ( // Retorna JSX que representa la estructura de la aplicación.
    <div className="App"> 
      <Welcome name="Foo" /> 
      <Welcome msg="que lo que?" /> 
      <Image/> 
      <h1>uno peso </h1> 
    </div>
  );
}

export default App; // Exporta la función de componente App para que pueda ser utilizada en otros archivos.

