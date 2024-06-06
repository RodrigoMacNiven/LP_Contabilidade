import './App.css';
import Apresentacao from './componentes/Apresentacao';
import Navbar from './componentes/Navbar';
import NossosServicos from './componentes/NossosServicos';
import QuemSomos from './componentes/QuemSomos';
import Rodape from './componentes/Rodape';
import Servicos from './componentes/Servicos';

function App() {
  return (
    <div>
      <Navbar/>
      <Apresentacao/>
      <QuemSomos/>
      <NossosServicos/>
      <Servicos/>
      <Rodape/>
    </div>
  );
}

export default App;
