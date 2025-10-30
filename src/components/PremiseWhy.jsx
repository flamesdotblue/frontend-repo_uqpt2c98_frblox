import { Sparkles, Crown, Brain, Heart, Shield } from 'lucide-react';

export default function PremiseWhy() {
  return (
    <section id="premise-why" className="bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-20 grid gap-16 md:grid-cols-2">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ek Daastan Jo Kisi Ne Nahi Suni</h2>
          <p className="text-zinc-300 leading-relaxed">
            Yeh kitaab Ravan ki zindagi ka pehla chapter hai. Uske paap, uska gyan, uska pyaar, uska junoon —
            sab uske apne shabdon mein. Season 1 mein Ravan apni maut se pehle apne poore jeevan ko yaad karta hai.
            Tum uski aankhon se dekhoge, uske dil ki aag mehsoos karoge. Curiosity se empathy tak — aur phir khud
            ko uski kahani mein dhoondhne lagoge.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="flex items-start gap-3 rounded-lg border border-white/10 p-4 bg-zinc-900/40">
            <Shield className="h-5 w-5 text-amber-400 mt-0.5" />
            <p><span className="font-semibold">Ravan —</span> misunderstood by history. Sach hamesha awaaz nahi karta.</p>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-white/10 p-4 bg-zinc-900/40">
            <Brain className="h-5 w-5 text-amber-400 mt-0.5" />
            <p><span className="font-semibold">Ravan —</span> ek gyani, ek vidwan, ek prashnasheel aatma.</p>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-white/10 p-4 bg-zinc-900/40">
            <Heart className="h-5 w-5 text-amber-400 mt-0.5" />
            <p><span className="font-semibold">Ravan —</span> a lover, a bhakt, ek raj-dil jo tut kar bhi chamka.</p>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-white/10 p-4 bg-zinc-900/40">
            <Crown className="h-5 w-5 text-amber-400 mt-0.5" />
            <p><span className="font-semibold">Ravan —</span> ek raja, par sabse pehle ek insaan. Aur insaan galtiyon se hi roshan hota hai.</p>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-white/10 p-4 bg-zinc-900/40">
            <Sparkles className="h-5 w-5 text-amber-400 mt-0.5" />
            <p>Ab waqt hai Ravan ko <span className="font-semibold">uske nazariye</span> se dekhne ka.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
