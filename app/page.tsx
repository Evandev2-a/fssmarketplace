"use client";

import React, { useState } from 'react';

// Mock data for FSS accounts
const ACCOUNTS_DATA = [
  {
    id: "FSS-9921",
    title: "Endgame Squad - 125 OVR",
    price: 149.99,
    tier: "Legendary",
    region: "Europe",
    players: ["Messi (Icon)", "Ronaldo (Prime)", "Mbappé", "Zidane"],
    features: ["Maxed Skills", "100M+ Coins", "Full Chemistry"],
  },
  {
    id: "FSS-4412",
    title: "FSS Starter Pack - 95 OVR",
    price: 24.99,
    tier: "Gold",
    region: "North America",
    players: ["Neymar", "Haaland", "De Bruyne"],
    features: ["Instant Delivery", "5M Coins", "Clean Record"],
  },
  {
    id: "FSS-7731",
    title: "Elite Competitive - 118 OVR",
    price: 89.99,
    tier: "Elite",
    region: "South America",
    players: ["Cruyff (Icon)", "Ronaldinho", "Vinícius Jr."],
    features: ["Division 1 Ranked", "Premium Pass Active"],
  }
];

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [selectedTier, setSelectedTier] = useState("All");

  const filteredAccounts = ACCOUNTS_DATA.filter(account => {
    const matchesSearch = account.title.toLowerCase().includes(search.toLowerCase()) ||
                          account.players.some(p => p.toLowerCase().includes(search.toLowerCase()));
    const matchesTier = selectedTier === "All" || account.tier === selectedTier;
    return matchesSearch && matchesTier;
  });

  return (
    <div className="min-h-screen bg-[#0F1117] font-sans text-white">
      {/* Navbar */}
      <nav className="glass-panel sticky top-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-black tracking-wider text-[#FFD400]">FSS</span>
          <span className="text-xl font-light tracking-wide text-white/80">MARKET</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-sm font-medium hover:text-[#FFD400] transition-colors">Browse</a>
          <a href="#" className="text-sm font-medium hover:text-[#FFD400] transition-colors">Sell Account</a>
          <button className="bg-[#FFD400] text-[#0F1117] font-bold px-4 py-2 rounded-lg text-sm hover:bg-[#ffe14d] transition-colors shadow-lg shadow-[#FFD400]/10">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
          Secure <span className="text-[#FFD400]">FSS Accounts</span> Marketplace
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          The premium clearinghouse for high-value accounts, stacked items, and top-tier competitive squads. Instant delivery guaranteed.
        </p>

        {/* Search & Filter Bar */}
        <div className="glass-panel max-w-4xl mx-auto p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center">
          <div className="w-full relative">
            <input 
              type="text" 
              placeholder="Search by players or titles (e.g. Messi, Endgame)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-11 text-sm focus:outline-none focus:border-[#FFD400]/50 transition-colors"
            />
            <svg className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <div className="flex gap-2 w-full md:w-auto shrink-0">
            {["All", "Legendary", "Elite", "Gold"].map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedTier === tier 
                    ? "bg-[#FFD400] text-[#0F1117]" 
                    : "bg-white/5 border border-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Grid Content */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAccounts.map((account) => (
            <div key={account.id} className="glass-panel rounded-2xl p-6 flex flex-col justify-between glass-card-hover relative overflow-hidden group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono tracking-wider text-gray-400 bg-white/5 px-2.5 py-1 rounded-md">{account.id}</span>
                  <span className={`text-xs uppercase tracking-widest font-black px-2.5 py-1 rounded-md ${
                    account.tier === 'Legendary' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                    account.tier === 'Elite' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                    'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  }`}>
                    {account.tier}
                  </span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-[#FFD400] transition-colors mb-2">{account.title}</h3>
                <p className="text-xs text-gray-500 mb-4">Region: {account.region}</p>
                
                {/* Featured Players */}
                <div className="mb-4">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2">Key Stars</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {account.players.map((p, idx) => (
                      <span key={idx} className="text-xs bg-white/5 border border-white/5 px-2 py-1 rounded-md text-gray-200">{p}</span>
                    ))}
                  </div>
                </div>

                {/* Account Features */}
                <div className="mb-6">
                  <ul className="space-y-1.5">
                    {account.features.map((f, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#FFD400]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 block">Instant Price</span>
                  <span className="text-2xl font-black text-[#FFD400]">${account.price}</span>
                </div>
                <button className="bg-white/5 hover:bg-[#FFD400] hover:text-[#0F1117] border border-white/10 hover:border-transparent font-bold text-sm px-4 py-2.5 rounded-xl transition-all">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredAccounts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">No accounts match your current filters or search parameters.</p>
          </div>
        )}
      </main>
    </div>
  );
}
