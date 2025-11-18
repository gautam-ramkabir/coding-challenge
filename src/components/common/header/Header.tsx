import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isOrderBook = location.pathname === "/";
  const isTrades = location.pathname === "/trades";

  return (
    <div className="flex bg-[#0d1117] px-5 py-2 text-white border-b border-[#222]">
      
      <div
        className={
          "mr-5 cursor-pointer px-3 py-2 rounded-md font-medium " +
          (isOrderBook
            ? "bg-[#1e2329] text-white border-b-2 border-blue-500"
            : "text-[#aaa]")
        }
        onClick={() => {
          navigate("/");
        }}
      >
        Order Book
      </div>

      <div
        className={
          "mr-5 cursor-pointer px-3 py-2 rounded-md font-medium " +
          (isTrades
            ? "bg-[#1e2329] text-white border-b-2 border-blue-500"
            : "text-[#aaa]")
        }
        onClick={() => {
          navigate("/trades");
        }}
      >
        Market Trades
      </div>

    </div>
  );
}

  