const projects = [
  {
    name: "Reality Revise",
    type: "AR learning app · Flutter, Dart, Unity, C#",
    description:
      "Designed and shipped an AR flashcard app that anchors revision prompts to physical locations to support spatial recall.",
  },
  {
    name: "Mandelbrot Set Renderer",
    type: "GPU computing · Python, PyOpenCL, NumPy",
    description:
      "Built a GPU renderer that cut a 1000 × 1000 image render from 4.9 seconds to 2.7 milliseconds.",
  },
  {
    name: "SustainaRide",
    type: "Trip planning · Python, Flask",
    description:
      "Helped build a ride-sharing and trip-planning app with a Flask API and personalised journey suggestions.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Selected <span className="text-emerald-400">Projects</span>
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-emerald-300">{project.type}</p>
              <h3 className="mt-4 text-xl font-semibold">{project.name}</h3>
              <p className="mt-3 leading-relaxed text-white/70">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
