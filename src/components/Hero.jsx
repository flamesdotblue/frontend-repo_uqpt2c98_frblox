import { BookOpen, Flame } from 'lucide-react';

export default function Hero({ onBuy, onPreview }) {
  return (
    <section id="hero" className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-black to-black pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28 md:py-32 relative">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 text-amber-400/90">
            <Flame className="h-5 w-5" />
            <span className="tracking-widest text-xs uppercase">THE RAVAN – Season 1</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Ravan mara nahi hai…
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500">
              uski kahani kabhi kisi ne uske nazariye se nahi suni.
            </span>
          </h1>

          <p className="max-w-3xl text-lg sm:text-xl text-white/80 leading-relaxed">
            Yeh sirf itihaas ya dharm ki kahani nahi. Yeh us sach ki aahat hai jo sada chup raha —
            Ravan ki apni zubaan mein. Rebellious. Gehri. Cinematic. Ek aisi daastan jo tumhe
            rok degi… aur phir chhod bhi nahi payegi.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onBuy}
              className="inline-flex items-center gap-2 rounded-md bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 transition"
            >
              <BookOpen className="h-5 w-5" />
              Buy Now – ₹99
            </button>
            <button
              onClick={onPreview}
              className="inline-flex items-center gap-2 rounded-md border border-white/20 hover:border-white/40 text-white px-6 py-3 transition"
            >
              Pehla page free padho
            </button>
            <span className="text-white/60 text-sm">Instant download • Read on any device • Lifetime access</span>
          </div>
        </div>
      </div>
    </section>
  );
}
