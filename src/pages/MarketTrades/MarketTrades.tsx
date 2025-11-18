import { useMarketTrades } from "../../hooks/marketTrades";
import Header from "../../components/common/header/Header";

export default function Trades() {
  const trades = useMarketTrades("btcusdt");

  return (
    <div className="p-4">
      <Header />
      <div className="flex gap-4">
      <div>
        <h1 className="text-2xl font-bold mb-4">Market Trades</h1>
        {trades.map((t:  { price: number; qty: number; isBuyerMaker: boolean; time: number }, i: number) => (
          <div
            key={i}
            className={`${t.isBuyerMaker ? "text-red-500" : "text-green-500"}`}
          >
            {t.price} — {t.qty}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
