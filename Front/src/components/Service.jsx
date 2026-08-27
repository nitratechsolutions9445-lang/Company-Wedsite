import {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Bot,
  Database,
  ArrowUpRight,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Fast, modern and scalable websites and web applications built for your business.",
      tags: ["React", "Next.js", "Node.js"],
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Powerful and user-friendly mobile applications designed for modern users.",
      tags: ["Android", "iOS", "Cross Platform"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive interfaces that deliver engaging digital experiences.",
      tags: ["Figma", "Prototyping", "Design"],
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description:
        "Smart AI-powered solutions that automate processes and improve productivity.",
      tags: ["AI", "Automation", "Chatbots"],
    },
    {
      icon: Database,
      title: "Backend & API",
      description:
        "Secure and reliable backend systems with powerful APIs and databases.",
      tags: ["Node.js", "MongoDB", "APIs"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Deploy, manage and scale your applications with modern cloud technologies.",
      tags: ["Cloud", "Deployment", "DevOps"],
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#080808] py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Everything You Need
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              To Build & Grow
            </span>
          </h2>

          <p className="mt-6 leading-7 text-gray-400">
            From design to development, we provide complete digital solutions
            that help businesses create better products and grow faster.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-blue-500/10"
              >

                {/* Number */}
                <span className="absolute right-6 top-5 text-5xl font-bold text-white/[0.04] transition duration-500 group-hover:text-blue-500/10">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white">
                  <Icon size={27} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-blue-400">
                  {service.title}
                </h3>

                <p className="mt-4 min-h-[72px] text-sm leading-6 text-gray-400">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400 transition duration-300 group-hover:border-blue-500/20 group-hover:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-gray-500 transition-all duration-300 group-hover:gap-3 group-hover:text-blue-400">
                  Learn More
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </div>

                {/* Bottom Glow */}
                <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">

          <p className="mb-5 text-gray-400">
            Have a project in mind?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
          >
            Let's Build Something
            <ArrowUpRight size={18} />
          </a>

        </div>
      </div>
    </section>
  );
}

export default Services;