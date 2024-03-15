import logo from './logo.svg';
import './App.css';
import Pend_ID from './components/lista_pendientes_ID';
import Pend_ID_Title from './components/lista_pendientes_ID_Titles';
import Pend_sin_resolver_ID_Title from './components/lista_pend_sin_resolver_ID_Title';
import Pend_resueltos_ID_Title from './components/lista_pend_resuelto_ID_Title';
import Pend_ID_UserID from './components/lista_pend_ID_UserID';
import Pend_resueltos_ID_UserID from './components/lista_pend_resuelto_ID_UserID';
import Pend_sin_resolver_ID_UserID from './components/lista_pend_sin_resolver_ID_UserID';


const App = () => {
  return (
    <div>
      <h1>Lista de pendientes con ID</h1>
      <Pend_ID />
      <h1>Lista de pendietes con ID y titulo</h1>
      <Pend_ID_Title />
      <h1>lista de pendientes sin resolver con ID y Titulo</h1>
      <Pend_sin_resolver_ID_Title />
      <h1>Lista de pendientes resuletos con ID y Titulo</h1>
      <Pend_resueltos_ID_Title />
      <h1>Lista de pendientes con ID y UserID</h1>
      <Pend_ID_UserID />
      <h1>Lista de Pendientes resueltos con ID y UserID</h1>
      <Pend_resueltos_ID_UserID />
      <h1>lista de pendientes sin resolver ID y UserID</h1>
      <Pend_sin_resolver_ID_UserID />
    </div>
  );
};

export default App;

