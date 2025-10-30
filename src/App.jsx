import { useEffect, useMemo, useRef, useState } from 'react';
import Hero from './components/Hero';
import PremiseWhy from './components/PremiseWhy';
import AboutFeel from './components/AboutFeel';
import TestimonialsOffer from './components/TestimonialsOffer';
import { X } from 'lucide-react';

function App() {
  const [showPreview, setShowPreview] = useState(false);
  const [showPurchase, setShowPurchase] = useState(false);
  const [unlockedPreview, setUnlockedPreview] = useState(false);
  const [email, setEmail] = useState('');

  // Simple analytics: track which section is in view
  const sections = useMemo(() => ['hero', 'premise-why', 'about-feel', 'proof-offer'], []);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          console.log('[analytics] section_view', { id, ts: Date.now() });
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null,
      threshold: 0.5,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current && observerRef.current.disconnect();
  }, [sections]);

  const handleBuy = () => {
    console.log('[analytics] click_buy', { ts: Date.now() });
    setShowPurchase(true);
  };

  const handlePreview = () => {
    console.log('[analytics] click_preview', { ts: Date.now() });
    setShowPreview(true);
  };

  const confirmEmailUnlock = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    console.log('[analytics] preview_unlocked', { email, ts: Date.now() });
    setUnlockedPreview(true);
  };

  // Create a downloadable sample when purchase is confirmed
  const downloadSample = () => {
    const content = `THE RAVAN — Ek Daastan Uske Nazariye Se\n\nSeason 1 — Janm Se Shraap Tak\n\n“Ravan mara nahi hai… uski kahani kabhi kisi ne uske nazariye se nahi suni.”\n\nYeh sirf mythology nahi, ek aaina hai. Har panne par sawaal, har line mein aag.`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'THE_RAVAN_Season1_Sample.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    console.log('[analytics] download', { ts: Date.now() });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-400 selection:text-black">
      <Hero onBuy={handleBuy} onPreview={handlePreview} />
      <PremiseWhy />
      <AboutFeel />
      <TestimonialsOffer onBuy={handleBuy} onPreview={handlePreview} />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-4 inset-x-4 md:hidden z-40">
        <div className="rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 p-1 shadow-lg">
          <button onClick={handleBuy} className="w-full rounded-lg bg-black/10 backdrop-blur px-5 py-3 font-semibold text-black">
            Buy Now – ₹99
          </button>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold">Pehla Page – Free Preview</h4>
              <button onClick={() => { setShowPreview(false); setUnlockedPreview(false); }} className="text-zinc-400 hover:text-white"><X className="h-5 w-5" /></button>
            </div>

            {!unlockedPreview ? (
              <form onSubmit={confirmEmailUnlock} className="mt-4 space-y-3">
                <p className="text-zinc-300">Apna email daalo aur pehla page turant padho. Hum tumhe ek follow-up email bhi bhejenge: “Ravan tumhara intazaar kar raha hai – Download Link Inside.”</p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="tumhara@email.com"
                    className="w-full rounded-md bg-black border border-white/10 px-4 py-3 outline-none focus:border-amber-400"
                  />
                  <button type="submit" className="rounded-md bg-amber-500 hover:bg-amber-600 text-black font-semibold px-5">
                    Unlock
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-5 space-y-4">
                <div className="rounded-lg border border-white/10 bg-zinc-800 p-4 text-zinc-100">
                  <p className="text-sm text-amber-400">Opening Lines</p>
                  <p className="mt-2 leading-relaxed">
                    “Ravan mara nahi hai… kyunki sach kabhi jalta nahi. Woh bas roop badalta hai. Aaj main bolunga — apni awaaz mein, apne zakhmon ke saath.”
                  </p>
                  <p className="mt-3 text-zinc-300">
                    Janm se shraap tak, har kadam par ek prashn tha. Main rakshas tha, ya bas insaan? Main bhakt tha, ya ahankari? Mere jawab tumhe milenge — par shayad tum apne bhi kuch jawab dhoondh loge.
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <button onClick={() => setShowPreview(false)} className="text-zinc-300 hover:text-white">Close</button>
                  <button onClick={handleBuy} className="rounded-md bg-amber-500 hover:bg-amber-600 text-black font-semibold px-5 py-2">Buy Now – ₹99</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Purchase Modal */}
      {showPurchase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold">Complete Your Purchase</h4>
              <button onClick={() => setShowPurchase(false)} className="text-zinc-400 hover:text-white"><X className="h-5 w-5" /></button>
            </div>
            <p className="mt-2 text-zinc-300">THE RAVAN — Season 1. Introductory price: <span className="text-amber-400 font-semibold">₹99</span></p>

            <button
              onClick={() => { setShowPurchase(false); downloadSample(); }}
              className="mt-6 w-full rounded-md bg-amber-500 hover:bg-amber-600 text-black font-semibold px-5 py-3"
            >
              Pay ₹99 & Download Instantly
            </button>
            <p className="mt-3 text-xs text-zinc-500 text-center">Secure one-click checkout (demo). Instant download • Read on any device • Lifetime access</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
