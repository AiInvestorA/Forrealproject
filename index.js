
import { useEffect, useState } from 'react';

export default function Home() {
  const [topGainer, setTopGainer] = useState(null);

  useEffect(() => {
    // Mock API call – replace with live API integration
    setTopGainer({ symbol: 'NVDA', change: 4.3 });
  }, []);

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            Invest<span className="text-green-600">Ai</span>
          </h1>
          <nav className="space-x-4 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Markets</a>
            <a href="#" className="hover:underline">About</a>
          </nav>
        </header>

        {/* Top Gainer Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Top Gainer</h2>
          <div className="p-6 rounded-2xl border shadow-sm">
            {topGainer ? (
              <p className="text-lg">
                ${topGainer.symbol} up{' '}
                <span className="text-green-600 font-semibold">
                  {topGainer.change.toFixed(1).replace(',', '.')}%
                </span>{' '}
                today
              </p>
            ) : (
              <p className="text-gray-500">Loading...</p>
            )}
            <div className="mt-4 h-40 bg-gray-100 rounded"></div>
          </div>
        </section>

        {/* Placeholder for Chart Feed */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Market Feed</h2>
          <div className="rounded-xl border bg-gray-50 p-4 text-gray-600">
            Live market data feed will display here once integrated.
          </div>
        </section>

        {/* Social Links */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
          <div className="space-x-4">
            <a href="#" className="text-sm underline text-blue-500">Instagram</a>
            <a href="#" className="text-sm underline text-blue-500">Twitter</a>
            <a href="#" className="text-sm underline text-blue-500">TikTok</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 text-xs text-gray-400">
          &copy; 2025 InvestAi. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
