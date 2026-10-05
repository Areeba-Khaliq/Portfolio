import React from 'react';

export const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-14 py-10 border-t border-stone-300">
    <div className="grid md:grid-cols-[10rem_1fr] gap-3 md:gap-10">
      <h2 className="font-serif text-lg text-stone-900">{title}</h2>
      <div>{children}</div>
    </div>
  </section>
);

export const Entry = ({ title, meta, date, children }: { title: React.ReactNode; meta?: string; date?: string; children?: React.ReactNode }) => (
  <div className="mb-7 last:mb-0">
    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
      <h3 className="font-semibold text-stone-900">{title}</h3>
      {date && <span className="text-sm text-stone-500">{date}</span>}
    </div>
    {meta && <p className="text-sm text-stone-600 italic">{meta}</p>}
    {children && <div className="mt-2">{children}</div>}
  </div>
);

export const Bullets = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="list-disc pl-5 space-y-1.5 text-stone-700 marker:text-stone-400">
    {items.map((t, i) => <li key={i}>{t}</li>)}
  </ul>
);

export const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#2f4a52] underline underline-offset-2 decoration-stone-400 hover:decoration-[#2f4a52]">
    {children}
  </a>
);
