import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Kasir } from './pages/Kasir';
import { Home } from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kasir" element={<Kasir />} />
      </Routes>
    </div>
  );
}

export default App;
