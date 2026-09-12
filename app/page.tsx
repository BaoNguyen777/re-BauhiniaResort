"use client";

import { ArrowDownRight, ArrowUpRight, CalendarDays, ChevronRight, Compass, Leaf, Menu, Minus, Plus, Sparkles, Waves, X } from "lucide-react";
import { useState } from "react";

const images = {
  hero: "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=2200&q=88",
  pool: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=85",
  room: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85",
  spa: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  island: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1800&q=85",
};

const rooms = [
  ["01", "Garden Bungalow", "28 m² · 2 guests", images.room],
  ["02", "Pool Side Bungalow", "28 m² · 2 guests", images.pool],
  ["03", "Family Room", "35 m² · 2–4 guests", images.room],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [guests, setGuests] = useState(2);
  return (
    <main className="noise overflow-hidden">
      <header className="fixed z-50 top-0 left-0 right-0 px-5 md:px-10 py-5 flex items-center justify-between mix-blend-difference text-white">
        <a href="#home" className="font-display text-xl tracking-tight">BAUHINIA<span className="text-[#e88b50]">.</span></a>
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[.22em]"><a href="#stay">Stay</a><a href="#rituals">Rituals</a><a href="#island">Island</a><a href="#contact">Contact</a></nav>
        <button onClick={() => setMenu(!menu)} className="md:hidden" aria-label="menu">{menu ? <X/>:<Menu/>}</button>
        <a href="#book" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[.18em]">Reserve <ArrowUpRight size={15}/></a>
      </header>
      {menu && <div className="fixed inset-0 z-40 bg-[#2b1a12] text-[#fff8ed] flex flex-col justify-center px-8 gap-7 text-4xl font-display"><a onClick={()=>setMenu(false)} href="#stay">Stay</a><a onClick={()=>setMenu(false)} href="#rituals">Rituals</a><a onClick={()=>setMenu(false)} href="#island">Island</a><a onClick={()=>setMenu(false)} href="#contact">Contact</a></div>}

      <section id="home" className="relative min-h-[92vh] md:min-h-screen bg-[#3a2419] text-[#fff8ed] grain">
        <img src={images.hero} alt="Tropical resort" className="absolute inset-0 w-full h-full object-cover opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b1a12] via-[#2b1a12]/15 to-black/20" />
        <div className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 vertical text-[10px] tracking-[.3em] uppercase opacity-75">Phu Quoc · Vietnam · 10°13′N</div>
        <div className="relative z-10 min-h-[92vh] md:min-h-screen flex flex-col justify-end px-5 md:px-16 pb-12 md:pb-16">
          <div className="max-w-6xl">
            <p className="reveal text-xs uppercase tracking-[.3em] text-[#efaa76] mb-5">Bauhinia Resort & Spa · since 2017</p>
            <h1 className="font-display text-[18vw] md:text-[10.5rem] leading-[.77] tracking-[-.07em]">Stay<br/><span className="text-[#e8884c]">closer.</span></h1>
            <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <p className="max-w-md text-sm md:text-base leading-7 text-[#f4dfca]">A warm tropical hideaway in the heart of Phu Quoc. Designed for slow mornings, thoughtful travel and the next chapter of island hospitality.</p>
              <a href="#book" className="group inline-flex items-center gap-3 uppercase tracking-[.2em] text-xs border-b border-[#efaa76] pb-3 w-fit">Plan your stay <ArrowDownRight size={17} className="group-hover:translate-x-1 group-hover:translate-y-1 transition"/></a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 md:right-12 text-[10px] tracking-[.25em] uppercase opacity-70">scroll to wander ↓</div>
      </section>

      <div className="bg-[#c96732] text-[#fff8ed] overflow-hidden whitespace-nowrap py-3 border-y border-[#9e4925]"><div className="marquee inline-flex min-w-max gap-12 text-xs uppercase tracking-[.28em]"><span>Phu Quoc / Island time / APEC 2027 ready / slow luxury / warm wood / ocean air /</span><span>Phu Quoc / Island time / APEC 2027 ready / slow luxury / warm wood / ocean air /</span></div></div>

      <section className="px-5 md:px-16 py-24 md:py-36 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-4"><p className="text-xs uppercase tracking-[.25em] text-[#a85a34]">01 / The idea</p></div>
        <div className="md:col-span-7 md:col-start-6"><h2 className="font-display text-5xl md:text-8xl leading-[.95] tracking-[-.045em]">A resort that feels <i>human.</i></h2><p className="mt-8 text-[#6d5142] leading-8 max-w-xl">Not a giant resort. Not a generic hotel. Bauhinia is a compact, personal base for discovering Phu Quoc — with wood, garden, water and wellness at its center.</p></div>
      </section>

      <section id="stay" className="bg-[#2b1a12] text-[#fff8ed] px-5 md:px-16 py-20 md:py-28">
        <div className="flex justify-between items-end mb-12"><div><p className="text-xs uppercase tracking-[.25em] text-[#e98c53]">02 / Rooms</p><h2 className="font-display text-5xl md:text-7xl mt-4">Sleep in the garden.</h2></div><span className="hidden md:block text-xs opacity-60">01 — 03</span></div>
        <div className="grid md:grid-cols-3 gap-px bg-[#73513e]">{rooms.map(([n,title,meta,img])=><article key={n} className="bg-[#2b1a12] group"><div className="aspect-[4/5] overflow-hidden"><img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700"/></div><div className="py-6 flex gap-5"><span className="text-[#e98c53] text-xs">{n}</span><div><h3 className="font-display text-2xl">{title}</h3><p className="text-xs opacity-60 mt-2">{meta}</p></div></div></article>)}</div>
      </section>

      <section id="rituals" className="px-5 md:px-16 py-24 md:py-36"><div className="grid md:grid-cols-12 gap-12"><div className="md:col-span-5"><p className="text-xs uppercase tracking-[.25em] text-[#a85a34]">03 / Rituals</p><h2 className="font-display text-5xl md:text-7xl leading-none mt-5">Your day,<br/><i>unhurried.</i></h2><p className="mt-8 leading-8 text-[#6d5142] max-w-md">From an early swim to a quiet spa treatment, build a day around what feels good — not what needs to be checked off.</p></div><div className="md:col-span-6 md:col-start-7 space-y-0 border-t border-[#c9aa91]">{[["06:30","Pool sunrise","Waves before notifications.",Waves],["10:00","Island breakfast","Home-cooked, fresh, easy.",Leaf],["15:00","Bauhinia Spa","Massage & body treatments.",Sparkles],["18:30","Golden hour","Walk to Long Beach.",Compass]].map(([time,title,desc,Icon])=><div key={String(time)} className="py-7 border-b border-[#c9aa91] grid grid-cols-[70px_1fr_24px] gap-5 items-center"><span className="text-xs text-[#a85a34]">{time}</span><div><h3 className="font-display text-2xl">{title}</h3><p className="text-sm text-[#806455] mt-1">{desc}</p></div><Icon size={18} strokeWidth={1.5}/></div>)}</div></div></section>

      <section id="island" className="relative min-h-[75vh] flex items-end text-[#fff8ed] bg-[#3a2419]"><img src={images.island} alt="Phu Quoc ocean" className="absolute inset-0 w-full h-full object-cover opacity-70"/><div className="absolute inset-0 bg-gradient-to-t from-[#2b1a12] via-transparent to-transparent"/><div className="relative z-10 px-5 md:px-16 pb-14 md:pb-20 grid md:grid-cols-12 gap-8 w-full"><div className="md:col-span-7"><p className="text-xs uppercase tracking-[.25em] text-[#efaa76]">04 / Phu Quoc 2027</p><h2 className="font-display text-6xl md:text-[8rem] leading-[.82] tracking-[-.06em] mt-5">Meet the<br/><i>island.</i></h2></div><div className="md:col-span-4 md:col-start-9 self-end"><p className="text-sm leading-7 text-[#f2dfcf]">With international attention turning toward Phu Quoc in 2027, choose a stay that puts you close to the town, beach, food and local rhythm.</p><a href="#contact" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[.2em]">Explore our location <ArrowUpRight size={15}/></a></div></div></section>

      <section id="book" className="bg-[#d67a42] text-[#2b1a12] px-5 md:px-16 py-20 md:py-28"><div className="grid md:grid-cols-12 gap-12 items-end"><div className="md:col-span-7"><p className="text-xs uppercase tracking-[.25em] opacity-70">05 / Reserve</p><h2 className="font-display text-6xl md:text-8xl leading-[.85] tracking-[-.05em] mt-5">Make room<br/><i>for now.</i></h2></div><div className="md:col-span-4 md:col-start-9"><div className="bg-[#fff3e3] p-6 md:p-8"><div className="grid grid-cols-2 border-b border-[#d9bda6] pb-5"><label className="text-[10px] uppercase tracking-[.18em]">Check in<input type="date" className="block mt-3 bg-transparent text-sm outline-none w-full"/></label><label className="text-[10px] uppercase tracking-[.18em]">Check out<input type="date" className="block mt-3 bg-transparent text-sm outline-none w-full"/></label></div><div className="flex justify-between items-center py-5"><span className="text-[10px] uppercase tracking-[.18em]">Guests</span><div className="flex items-center gap-4"><button onClick={()=>setGuests(Math.max(1,guests-1))} aria-label="decrease"><Minus size={15}/></button><span>{guests}</span><button onClick={()=>setGuests(guests+1)} aria-label="increase"><Plus size={15}/></button></div></div><button className="w-full bg-[#2b1a12] text-[#fff8ed] py-4 text-xs uppercase tracking-[.2em] flex items-center justify-center gap-2">Check availability <ChevronRight size={16}/></button></div></div></div></section>

      <footer id="contact" className="bg-[#2b1a12] text-[#fff8ed] px-5 md:px-16 pt-20 pb-8"><div className="grid md:grid-cols-12 gap-10 pb-20"><div className="md:col-span-6"><div className="font-display text-5xl md:text-7xl">BAUHINIA<span className="text-[#e8884c]">.</span></div><p className="mt-6 max-w-md text-sm leading-7 text-[#cdb9ab]">A small resort with a big island outside the gate. Trần Hưng Đạo, Dương Đông, Phu Quoc.</p></div><div className="md:col-span-3"><p className="text-xs uppercase tracking-[.2em] text-[#e8884c] mb-5">Contact</p><a className="block text-sm mb-2" href="tel:+84915620162">+84 915 620 162</a><a className="block text-sm" href="mailto:sales@bauhiniaresort.com">sales@bauhiniaresort.com</a></div><div className="md:col-span-3"><p className="text-xs uppercase tracking-[.2em] text-[#e8884c] mb-5">Navigate</p><a className="block text-sm mb-2" href="#stay">Rooms</a><a className="block text-sm mb-2" href="#rituals">Spa & rituals</a><a className="block text-sm" href="#island">Phu Quoc</a></div></div><div className="border-t border-[#5a4033] pt-5 flex justify-between text-[10px] uppercase tracking-[.2em] text-[#92786a]"><span>© 2027 Bauhinia Resort & Spa</span><span>Made for island time</span></div></footer>
    </main>
  );
}