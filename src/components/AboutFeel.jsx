export default function AboutFeel() {
  return (
    <section id="about-feel" className="relative bg-gradient-to-b from-black to-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-20 grid gap-16 md:grid-cols-2">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Season 1 — Janm Se Shraap Tak</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Ravan ka janm, uske pita Vishrava, gyan ki pehli kiran, Shiv se prem, uski balidaan ki kathaein,
            aur badle ka pehla beej. Yeh pehla season Ravan ke andar ke safar ka aagaz hai — jahaan woh
            ‘Rakshas’ nahi, ek ‘Shiv bhakt aur gyani purush’ ke roop mein saamne aata hai.
          </p>
          <p className="text-amber-400 font-semibold">Har page mein ek aag hai jo tumhare andar bhi jagegi.</p>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ravan Sirf Kitaab Nahi, Ek Anubhav Hai</h3>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex gap-3"><span className="text-amber-400">•</span> Tum andar ka andhera samjhoge.</li>
            <li className="flex gap-3"><span className="text-amber-400">•</span> Tum ‘Dharma’ aur ‘Ahankar’ ke beech ki rekha mahsoos karoge.</li>
            <li className="flex gap-3"><span className="text-amber-400">•</span> Tum Ravan ko sunoge, aur shayad usmein khud ko dekhoge.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
