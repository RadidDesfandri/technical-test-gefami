"use client";

import Button from "@/components/Button";
import { useEffect, useState } from "react";

// 1. Buatlah 1 struktur json array object yang berisi informasi, terserah anda.
const quotes = [
  { id: 1, quote: "Jangan menunggu kesempurnaan, mulailah sekarang." },
  { id: 2, quote: "Kesuksesan datang kepada mereka yang berani mencoba." },
  { id: 3, quote: "Setiap kegagalan adalah langkah menuju keberhasilan." },
  { id: 4, quote: "Percaya pada diri sendiri adalah kunci utama." },
  { id: 5, quote: "Jangan menyerah, keajaiban bisa terjadi kapan saja." },
];

const IndexChangeValue = () => {
  const [quote, setQuote] = useState<string>(quotes[0].quote);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 2. ..., buatlah 1 tombol yang bisa merubah value label.
  const handleChangeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex].quote);
  };

  if (!isClient) return null;

  return (
    <div className="p-6 bg-white min-w-xl shadow-lg rounded-xl text-center">
      {/* 4. Tampilkan label */}
      <h2 className="text-xl font-semibold mb-4">{quote}</h2>
      <Button
        type="button"
        variant="secondary"
        onClick={handleChangeQuote}
        className="mt-2"
      >
        Change Quote
      </Button>
    </div>
  );
};

export default IndexChangeValue;
