import { Cpu, Gamepad2, Smartphone } from "lucide-react";
import BlurText from "./BlurText";
import SpotlightCard from "./SpotlightCard";

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile & AR",
    text: "Designed and shipped Reality Revise, an augmented-reality flashcard app.",
  },
  {
    icon: Gamepad2,
    title: "Games & interactive tech",
    text: "Built and released games, including a BAFTA Young Game Designers finalist project.",
  },
  {
    icon: Cpu,
    title: "Parallel computing",
    text: "Exploring GPU computing with PyOpenCL, NumPy, and Python.",
  },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 sm:px-8">
      <h2 className="mb-14 text-center text-4xl font-bold tracking-tight sm:text-5xl">
        About <span className="text-emerald-400">Me</span>
      </h2>
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col items-center gap-6 text-center">
          <BlurText
            text="I’m Suvir, a Computer Science student at King’s College London. I enjoy building apps and exploring AR, games, and parallel computing."
            delay={80}
            className="justify-center text-2xl font-medium leading-snug md:text-3xl"
          />
          <p className="max-w-xl text-lg leading-relaxed text-white/70">
            I’ve shipped apps, built projects with small teams, and enjoy taking ideas from a first prototype through to a working release.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:suvir.rm@gmail.com"
              className="rounded-full bg-emerald-500 px-6 py-3 font-medium transition hover:bg-emerald-400"
            >
              Get In Touch
            </a>
            <a
              href="/cv.pdf"
              download
              className="rounded-full border border-emerald-400 px-6 py-3 font-medium text-emerald-300 transition hover:bg-emerald-500/10"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {highlights.map(({ icon: Icon, title, text }) => (
            <SpotlightCard key={title}>
              <div className="flex items-start gap-5">
                <div className="rounded-full bg-emerald-500/10 p-4 text-emerald-400">
                  <Icon aria-hidden="true" size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-white/70">{text}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
      <div id="contact" className="scroll-mt-24 pt-20 text-center">
        <h3 className="text-2xl font-semibold">Let’s connect</h3>
        <a href="mailto:suvir.rm@gmail.com" className="mt-3 inline-block text-emerald-300 transition hover:text-emerald-200">
          suvir.rm@gmail.com
        </a>
        <div className="mt-4 flex justify-center gap-6 text-sm text-white/70">
          <a href="https://linkedin.com/in/suvir-m" target="_blank" rel="noreferrer" className="transition hover:text-emerald-300">
            LinkedIn
          </a>
          <a href="https://github.com/suvir-dev" target="_blank" rel="noreferrer" className="transition hover:text-emerald-300">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
