import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center">
      <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">Hello, and welcome</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Hi, I'm <span className="text-emerald-400">Suvir</span>
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
        Computer Science student at King’s College London, building apps and exploring AR, games, and parallel computing.
      </p>
      <a href="#projects" className="mt-8 rounded-full bg-emerald-500 px-6 py-3 font-medium transition hover:bg-emerald-400">
        View my work
      </a>
      <ArrowDown aria-hidden="true" className="mt-12 animate-bounce text-emerald-400" />
    </section>
  );
};

export default Hero;
