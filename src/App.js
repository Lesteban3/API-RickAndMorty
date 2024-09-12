import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaRickAndMorty from './componentes/ListaRickAndMorty';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaRickAndMorty />} />
        {}
      </Routes>
    </Router>
  );
}

export default App;
