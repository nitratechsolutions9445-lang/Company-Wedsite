import { ArrowUpRight, ExternalLink } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A modern and scalable e-commerce platform with product management, cart, checkout and order management.",
      tech: ["React", "Node.js", "MongoDB"],
      number: "01",
    },
    {
      title: "Business Website",
      category: "Web Design",
      description:
        "A professional business website designed to build brand identity and generate more customer engagement.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      number: "02",
    },
    {
      title: "Food Delivery App",
      category: "App Development",
      description:
        "A complete food delivery solution with restaurant listings, real-time order tracking and secure payments.",
      tech: ["React", "Node.js", "Socket.io"],
      number: "03",
    },
    {
      title: "AI Chat Assistant",
      category: "AI Solutions",
      description:
        "An intelligent AI-powered chatbot designed to automate customer conversations and improve support.",
      tech: ["React", "AI", "API"],
      number: "04",
    },
    {
      title: "Portfolio Website",
      category: "UI/UX Design",
      description:
        "A clean and interactive portfolio website with modern animations and responsive design.",
      tech: ["React", "Framer Motion", "Tailwind"],
      number: "05",
    },
    {
      title: "Management System",
      category: "Web Application",
      description:
        "A secure management dashboard for handling users, data, reports and business operations.",
      tech: ["React", "Node.js", "SQL"],
      number: "06",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-24 relative overflow-hidden bg-[#080808] py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Our Projects
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Ideas We Turned Into
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Digital Products
            </span>
          </h2>

          <p className="mt-6 leading-7 text-gray-400">
            Explore some of the digital products and solutions we have
            designed and developed for modern businesses.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-blue-500/10"
            >

              {/* Project Preview */}
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950/40 via-[#111827] to-purple-950/40">

                {/* Decorative Grid */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "35px 35px",
                  }}
                />

                {/* Project Number */}
                <span className="relative text-7xl font-black text-white/10 transition-all duration-500 group-hover:scale-125 group-hover:text-blue-400/20">
                  {project.number}
                </span>

                {/* View Icon */}
                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-gray-400 backdrop-blur-md transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <ExternalLink size={18} />
                </div>

              </div>

              {/* Content */}
              <div className="p-7">

                {/* Category */}
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                  {project.category}
                </p>

                {/* Title */}
                <h3 className="mt-3 text-2xl font-bold transition-colors duration-300 group-hover:text-blue-400">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400 transition duration-300 group-hover:border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project */}
                <button className="group/btn mt-7 flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors duration-300 hover:text-blue-400">
                  View Project
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1"
                  />
                </button>

              </div>
            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">

          <p className="mb-5 text-gray-500">
            Have an idea you'd like to bring to life?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;