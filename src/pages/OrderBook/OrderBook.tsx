import Header from "../../components/common/header/Header";
import { useOrderBook } from "../../hooks/orderbook";

export function OrderRow({ price, qty, total, type }: { price: number, qty: number, total: number, type: string }) {
  return (
    <div
      className={`grid grid-cols-3 gap-5 px-2 py-1 text-sm cursor-pointer 
        ${type === "bid" ? "bg-green-900/10 hover:bg-green-900/20" : "bg-red-900/10 hover:bg-red-900/20"}
      `}
    >
      {/* Price */}
      <span className={`col-span-1 ${type === "bid" ? "text-green-500" : "text-red-500"}`}>
        {Number(price).toLocaleString()}
      </span>

      {/* Quantity */}
      <span className="col-span-1 text-gray-600">{qty}</span>

      {/* Total */}
      <span className="col-span-1 text-gray-600">{total}</span>
    </div>
  );
}


export default function OrderBook() {
  const { bids, asks } = useOrderBook("btcusdt");
  return (
    <div className="p-4">
      <Header />
    <div className="flex gap-4">
      {/* Asks (Sell Orders) */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Asks</h1>
        {asks.slice(0, 20).map((a: { price: number; qty: number }, i: number) => (
          <OrderRow key={i} price={a.price} qty={a.qty} total={a.price * a.qty} type="ask" />
        ))}
      </div>

      {/* Bids (Buy Orders) */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Bids</h1>
        {bids.slice(0, 20).map((b: { price: number; qty: number }, i: number) => (
          <OrderRow key={i} price={b.price} qty={b.qty} total={b.price * b.qty} type="bid" />
        ))}
      </div>
    </div>
    </div>
  );
}
