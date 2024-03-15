import logo from '../logo.svg'; // Importa la imagen del logo desde '../logo.svg'. La ruta '../' indica que se retrocede un nivel en el árbol de directorios desde el directorio actual.

export default function Cabecera() { // Exporta por defecto una función de componente llamada Cabecera.
  return ( // Retorna JSX que representa la estructura de la cabecera.
    <header className="App-header"> // Un elemento 
      <img src={logo} className="App-logo" alt="logo" /> 
      <p>
        <h1> Kyrarybreak </h1> 
      </p>
      By rollcake
    </header>
  );
}
