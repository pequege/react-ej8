import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TituloFormulario from './components/TituloFormulario';
import Formulario from './components/Formulario';

function App() {
  return (
    <>
      <div className="container">
        <TituloFormulario></TituloFormulario>
        <Formulario></Formulario>
      </div>
    </>
  )
}

export default App
