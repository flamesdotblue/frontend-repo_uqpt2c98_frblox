import { CheckCircle2, Quote, Star, Clock, Smartphone, Download } from 'lucide-react';

export default function TestimonialsOffer({ onBuy, onPreview }) {
  return (
    <section id="proof-offer" className="bg-black text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-20 grid gap-16">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">Readers Kya Kehte Hain</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Testimonial text="Ravan ke shabdon ne mera dharma samaj badal diya." name="Aarav" />
            <Testimonial text="Yeh sirf mythology nahi, ek mirror hai jo andar tak ghus jata hai." name="Meera" />
            <Testimonial text="Cinematic writing. Har chapter ke baad kuch der tak khamoshi chahiye thi." name="Kabir" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold">₹99 mein uska sach padho</h3>
              <p className="text-zinc-300 mt-3">Ek coffee se kam price mein tum us Ravan ko samajh sakte ho jise duniya ne sirf jalaya hai. Limited Introductory Offer – Sirf ₹99.</p>

              <ul className="mt-6 space-y-3 text-zinc-200">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-amber-400" /> Instant Download Available</li>
                <li className="flex items-center gap-2"><Smartphone className="h-5 w-5 text-amber-400" /> Read on Any Device (PDF/Epub)</li>
                <li className="flex items-center gap-2"><Clock className="h-5 w-5 text-amber-400" /> Lifetime Access</li>
              </ul>

              <div className="flex flex-wrap items-center gap-4 mt-6">
                <button onClick={onBuy} className="rounded-md bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 transition inline-flex items-center gap-2">
                  <Download className="h-5 w-5" /> Buy Now – ₹99
                </button>
                <button onClick={onPreview} className="rounded-md border border-white/20 hover:border-white/40 text-white px-6 py-3 transition">Pehla page free</button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900 p-6">
                <p className="italic text-zinc-200">“Sab ne Ram ki katha suni hai, par ab Ravan bhi bol raha hai. Sawal yeh hai — kya tum use sunoge?”</p>
                <div className="mt-6 text-right text-amber-400 font-medium">Ab faisla tumhara hai…</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial({ text, name }) {
  return (
    <div className="rounded-xl border border-white/10 bg-zinc-900/50 p-6">
      <div className="flex items-start gap-3">
        <Quote className="h-5 w-5 text-amber-400 mt-1" />
        <p className="text-zinc-200">{text}</p>
      </div>
      <div className="mt-3 text-sm text-zinc-400">— {name}</div>
      <div className="mt-3 flex gap-1">
        <Star className="h-4 w-4 text-amber-400" />
        <Star className="h-4 w-4 text-amber-400" />
        <Star className="h-4 w-4 text-amber-400" />
        <Star className="h-4 w-4 text-amber-400" />
        <Star className="h-4 w-4 text-amber-400" />
      </div>
    </div>
  );
}
