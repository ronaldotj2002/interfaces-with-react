import Pesquisa from './componentes/Pesquisa'
import Novidades from './componentes/Novidades'
import Footer from './componentes/Footer'


function App() {
  return (
    <div>
      <Pesquisa />
      <Novidades />
      <div className="float-left w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
