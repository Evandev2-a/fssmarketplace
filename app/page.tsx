import React from 'react';

export default function LandingPage() {
  return (
    <div className="bg-[#0F1117] text-white font-sans antialiased min-h-screen">
      {/* Header / Navbar */}
      <nav className="bg-[#151a26]/60 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/5 mx-4 my-3 rounded-2xl">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-black tracking-wider text-[#FFD400]">FSS</span>
          <span className="text-xl font-light tracking-wide text-white/80">MARKET</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-[#FFD400] transition-colors">Features</a>
          <a href="#activity" className="text-sm font-medium hover:text-[#FFD400] transition-colors">Activity</a>
        </div>
        <div>
          <a href="/dashboard" className="bg-[#FFD400] text-[#0F1117] font-black px-5 py-2.5 rounded-xl text-sm hover:bg-[#ffe14d] transition-all inline-block">
            Enter App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FFD400]/10 text-[#FFD400] border border-[#FFD400]/20 mb-6 uppercase tracking-widest">
          ⚽ The #1 Trusted FSS Clearinghouse
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none">
          Trade High-Value <br />
          <span className="text-[#FFD400]">FSS Accounts</span> Safely.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Buy, sell, and escrow premium Fifa Super Soccer accounts. Instant delivery and 100% secure payment protection.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/dashboard" className="bg-[#FFD400] text-[#0F1117] font-black px-8 py-4 rounded-xl text-base hover:bg-[#ffe14d] transition-all shadow-lg shadow-[#FFD400]/10">
            Browse Live Listings
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#151a26]/60 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-xl">
            <div className="text-2xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-3">Escrow Protection</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Funds are securely held in escrow until you verify full access to the FSS account details.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-[#151a26]/60 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-xl">
            <div className="text-2xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Instant Automated Delivery</h3>
            <p className="text-gray-400 text-sm leading-relaxed">No waiting around. As soon as payment is confirmed, the verified account properties are instantly unlocked.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-[#151a26]/60 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-xl">
            <div className="text-2xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Verified Assets Only</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Every account listing explicitly syncs up verified details—OVR levels and premium players.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
