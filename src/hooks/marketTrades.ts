import { useEffect, useState } from "react";

export const useMarketTrades = (symbol: string) => {
  const [trades, setTrades] = useState<{ price: number; qty: number; isBuyerMaker: boolean; time: number }[]>([]);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}@aggTrade`
    );

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const trade = {
        price: data.p,
        qty: data.q,
        isBuyerMaker: data.m,
        time: data.T,
      };

      setTrades((prev: { price: number; qty: number; isBuyerMaker: boolean; time: number }[]) => [trade, ...prev].slice(0, 50)); // show last 50
    };

    return () => ws.close();
  }, [symbol]);

  return trades;
};
