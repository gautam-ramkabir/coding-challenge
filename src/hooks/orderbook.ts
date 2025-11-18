import { useEffect, useState } from "react";

export const useOrderBook = (symbol: string) => {
  const [bids, setBids] = useState([]);
  const [asks, setAsks] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}@depth`
    );

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      // data.b = bids, data.a = asks
      setBids(data.b.map(([price, qty]: any) => ({ price, qty })));
      setAsks(data.a.map(([price, qty]: any) => ({ price, qty })));
    };

    return () => ws.close();
  }, [symbol]);

  return { bids, asks };
};
