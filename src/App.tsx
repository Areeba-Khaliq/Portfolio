import { useEffect } from 'react';
import { profile, honors, scholarships, education, research, projects, teaching, skills } from './data';
import { Section, Entry, Bullets, A } from './components/Section';

const nav = [
  ['honors', 'Honors'],
  ['education', 'Education'],
  ['research', 'Research'],
  ['projects', 'Projects'],
  ['teaching', 'Teaching'],
  ['skills', 'Skills'],
];

function App() {
  useEffect(() => {
    document.title = 'Areeba Khaliq';
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f3ec] text-stone-800 font-sans text-[16px] leading-relaxed">
      <header className="max-w-3xl mx-auto px-6 pt-14 pb-8">
        <div className="flex items-start gap-6">
          <img src="/areeba_img (2).jpeg" alt="Areeba Khaliq" className="w-24 h-24 object-cover shrink-0 border border-stone-300" />
          <div>
            <h1 className="font-serif text-4xl text-stone-900">{profile.name}</h1>
            <p className="mt-2 text-stone-600 max-w-xl">{profile.tagline}</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-stone-600 flex flex-wrap gap-x-4 gap-y-1">
          <span>{profile.location}</span>
          <a href={`mailto:${profile.email}`} className="underline underline-offset-2 decoration-stone-400">{profile.email}</a>
          <span>{profile.phone}</span>
          <A href={profile.linkedin}>LinkedIn</A>
          <A href={profile.github}>GitHub</A>
          <A href={profile.cv}>CV (PDF)</A>
        </p>
      </header>

      <nav className="sticky top-0 z-10 bg-[#f6f3ec] border-y border-stone-300">
        <ul className="max-w-3xl mx-auto px-6 py-2.5 flex gap-5 overflow-x-auto text-sm whitespace-nowrap">
          {nav.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} className="text-stone-600 hover:underline underline-offset-2">{label}</a></li>
          ))}
        </ul>
      </nav>

      <main className="max-w-3xl mx-auto px-6">
        <Section id="honors" title="Honors & Achievements">
          <Bullets items={honors.map(h => h.href ? <A href={h.href}>{h.text}</A> : h.text)} />
          <h3 className="mt-7 mb-3 text-sm text-stone-500">Scholarships</h3>
          {scholarships.map(s => (
            <Entry key={s.title} title={s.href ? <A href={s.href}>{s.title}</A> : s.title} meta={s.org} date={s.date}>
              <p className="text-stone-700">{s.note}</p>
            </Entry>
          ))}
        </Section>

        <Section id="education" title="Education">
          <Entry title={education.school} meta={education.degree} date={education.period}>
            <p className="text-stone-700"><A href={education.gpa.href}>{education.gpa.text}</A></p>
          </Entry>
          <Entry title={<A href={education.fyp.href}>{education.fyp.title}</A>}>
            <Bullets items={education.fyp.points} />
          </Entry>
        </Section>

        <Section id="research" title="Research Experience">
          <Entry title={research.title} meta={research.kind} date={research.period}>
            <Bullets items={research.points} />
          </Entry>
        </Section>

        <Section id="projects" title="Projects">
          {projects.map(p => (
            <Entry key={p.title} title={p.title} meta={p.stack ? `${p.venue}. ${p.stack}` : p.venue} date={p.date}>
              <Bullets items={p.points.map(pt => (
                <>
                  {pt.label && (pt.href ? <A href={pt.href}>{pt.label}</A> : <span className="font-semibold">{pt.label}</span>)}
                  {pt.label ? ': ' : ''}{pt.text}
                </>
              ))} />
            </Entry>
          ))}
        </Section>

        <Section id="teaching" title="Teaching Experience">
          {teaching.map(t => (
            <Entry key={t.title} title={<A href={t.href}>{t.title}</A>} date={t.date}>
              <p className="text-stone-700">{t.text}</p>
            </Entry>
          ))}
        </Section>

        <Section id="skills" title="Technical Skills">
          <dl className="space-y-2">
            {skills.map(s => (
              <div key={s.label} className="sm:flex gap-4">
                <dt className="sm:w-32 shrink-0 font-semibold text-stone-900">{s.label}</dt>
                <dd className="text-stone-700">{s.items}</dd>
              </div>
            ))}
          </dl>
        </Section>
      </main>

      <footer className="max-w-3xl mx-auto px-6 py-10 text-sm text-stone-500 border-t border-stone-300">
        © {new Date().getFullYear()} Areeba Khaliq
      </footer>
    </div>
  );
}

export default App;
