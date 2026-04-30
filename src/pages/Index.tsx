import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import stitchedImg from "@/assets/stitched.jpg";

const projects = [
  {
    n: "01",
    title: "MESSEM Investments",
    place: "Blumenau, 2022",
    img: project1,
    summary: "Four office units unified into one quiet workspace.",
    detail:
      "A freelance collaboration with Monu Architecture: 186m² of commercial interior where four separate units become one. Glass partitions hold light without losing acoustic privacy; concrete, timber and matte black anchor the space in a contemporary register.",
  },
  {
    n: "02",
    title: "Integrated Kitchen",
    place: "Florianópolis, 2022",
    img: project2,
    summary: "An island as the social anchor of the home.",
    detail:
      "A residential kitchen built around a single gesture. Matte grey MDF, exposed timber grain and stone countertops compose a quiet material story. Built-in joinery maximises storage without visual noise.",
  },
  {
    n: "03",
    title: "Centro da Memória da Água",
    place: "Florianópolis, 2020",
    img: project3,
    summary: "A cultural centre dedicated to water as memory.",
    detail:
      "An academic project for Architectural Design VII at UFSC. Fluid spatial organisation, layered transparencies and continuous movement between enclosed and open. Passive cooling, natural ventilation and rainwater collection grounded the design.",
  },
  {
    n: "04",
    title: "O Corpo em Movimento",
    place: "Florianópolis, 2022",
    img: project4,
    summary: "A dance school built to invite movement.",
    detail:
      "Final degree thesis at UFSC. A dance school where architecture invites movement rather than merely containing it. Studios open toward gardens; circulation routes double as informal gathering spaces — a building that belongs equally to its students and its neighbourhood.",
  },
];

const Index = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <nav className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <a href="#top" className="font-serif text-lg tracking-tight">Caroline&nbsp;V.</a>
          <ul className="hidden md:flex items-center gap-10 text-sm">
            <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
            <li><a href="#work" className="hover:text-accent transition-colors">Architecture</a></li>
            <li><a href="#stitched" className="hover:text-accent transition-colors">Stiched Spaces</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground hidden sm:block">Berlin · DE</span>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <p className="eyebrow mb-8">Issue N°01 — Portfolio</p>
            <h1 className="font-serif text-[3.25rem] sm:text-7xl md:text-[7.5rem] display-opsz" style={{ fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 0.92 }}>
              Caroline<br />
              <span className="italic font-light text-inherit">Venancio</span>
            </h1>
            <div className="editorial-rule mt-10 mb-6" />
            <p className="max-w-md text-lg md:text-xl leading-relaxed text-muted-foreground">
              Brazilian architect &amp; maker living in Berlin. Designing quiet spaces and softly stitched things.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-6">
            <figure className="relative">
              <img
                src={heroImg}
                alt="MESSEM Investments office interior, Blumenau"
                width={1080}
                height={1600}
                className="w-full h-[420px] md:h-[640px] object-cover"
              />
              <figcaption className="eyebrow mt-3">Fig. 01 — MESSEM Investments, Blumenau 2022</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-6">§ About</p>
            <img
              src={aboutImg}
              alt="Portrait of Caroline Venancio in warm window light, Berlin studio"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-10">
              Spaces with a <span className="italic">slow pulse</span>, made between Florianópolis and Berlin.
            </h2>
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
              <p>
                Trained as an architect at UFSC in Florianópolis, Brazil and now based in Berlin, I work across residential renovations, small commercial interiors, and a textile practice called Stiched Spaces.
              </p>
              <p>
                My drawings begin with light, weight, texture and the conviction that a home should ask very little of you.
              </p>
            </div>
            <div className="editorial-rule mt-12 mb-6" />
            <p className="eyebrow">Languages</p>
            <p className="font-serif text-2xl mt-2">Portuguese · English · German · Italian</p>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="work" className="border-t border-border bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="eyebrow mb-4">§ Selected Work</p>
              <h2 className="font-serif text-4xl md:text-6xl leading-tight">Architecture</h2>
            </div>
            <p className="hidden md:block text-sm text-muted-foreground">2020 — 2022</p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
            {projects.map((p, i) => {
              const isOpen = open === i;
              return (
                <li key={p.n} className={i % 2 === 1 ? "md:mt-24" : ""}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group w-full text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.title}
                        width={1280}
                        height={960}
                        loading="lazy"
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex items-baseline justify-between mt-6">
                      <span className="eyebrow text-accent">N° {p.n}</span>
                      <span className="text-xs text-muted-foreground">{p.place}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl mt-3 group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{p.summary}</p>
                    <span className="inline-block mt-4 text-xs uppercase tracking-[0.25em] border-b border-foreground/40 pb-1 group-hover:border-accent group-hover:text-accent transition-colors">
                      {isOpen ? "Close —" : "Read more +"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base leading-relaxed text-foreground/80 max-w-prose border-l-2 border-accent pl-5">
                        {p.detail}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* SOFTLY STITCHED */}
      <section id="stitched" className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-12 gap-6 md:gap-12 items-center">
          <div className="col-span-12 md:col-span-6 order-2 md:order-1">
            <p className="eyebrow mb-6">§ Creative Practice</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8">
              Stiched <span className="italic text-pink">Spaces</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground max-w-lg mb-6">
              A slow making practice. Sewing clothes and bags by hand, learning new techniques along the way. Made between drawings, in my Berlin studio.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground max-w-lg mb-10">
              An open exploration. Follow the process and the moodboards.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.tiktok.com/@stichedspaces"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background hover:bg-pink hover:text-pink-foreground transition-colors text-sm uppercase tracking-[0.2em]"
              >
                TikTok →
              </a>
              <a
                href="https://de.pinterest.com/carolinevsantos/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 border border-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors text-sm uppercase tracking-[0.2em]"
              >
                Pinterest →
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 order-1 md:order-2">
            <figure>
              <img
                src={stitchedImg}
                alt="Pattern cutting in progress, Berlin studio"
                width={1280}
                height={1280}
                loading="lazy"
                className="w-full aspect-square object-cover"
              />
              <figcaption className="eyebrow mt-3">Fig. 02. Pattern cutting, Berlin studio</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <p className="eyebrow mb-8">§ Contact</p>
          <h2 className="font-serif text-5xl md:text-8xl leading-[0.95] mb-12 max-w-4xl display-opsz">
            Let&apos;s make something <span className="italic text-pink">quiet</span> together.
          </h2>
          <a
            href="mailto:hello@carolinevs.com"
            className="font-serif text-3xl md:text-5xl border-b border-background/40 hover:border-pink hover:text-pink transition-colors inline-block pb-2"
          >
            hello@carolinevs.com
          </a>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <p className="eyebrow mb-2">Studio</p>
              <p>Berlin, DE</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Available</p>
              <p>Open to projects</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Instagram</p>
              <a href="https://www.instagram.com/carolinevsantos/" className="hover:text-pink transition-colors">@carolinevsantos</a>
            </div>
            <div>
              <p className="eyebrow mb-2">LinkedIn</p>
              <a href="https://linkedin.com/in/caroline-venancio" className="hover:text-pink transition-colors">in/caroline-venancio</a>
            </div>
          </div>

          <div className="border-t border-background/20 mt-20 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs uppercase tracking-[0.25em] text-background/50">
            <span>© {new Date().getFullYear()} Caroline Venancio</span>
            <span>Designed &amp; made in Berlin</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
