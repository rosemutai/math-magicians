import { Routes, Route } from 'react-router-dom';
import Calculator from './routes/Calculator';
import Navbar from './components/Navbar';
import Quote from './routes/Quote';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
