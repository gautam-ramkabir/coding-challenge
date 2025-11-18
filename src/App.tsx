import './App.css';
import OrderBook from './pages/OrderBook/OrderBook';
import { Routes, Route } from 'react-router-dom';
import Trades from './pages/MarketTrades/MarketTrades';

function App() {
  return (
    <Routes>
      <Route path="/" element={<OrderBook />} />
      <Route path="/trades" element={<Trades />} />
    </Routes>
  );
}

export default App;
