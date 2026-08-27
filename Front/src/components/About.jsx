import { ArrowRight, CheckCircle2 } from "lucide-react";

function About() {
  const features = [
    "Modern & scalable solutions",
    "User-focused design",
    "Clean & maintainable code",
    "On-time project delivery",
  ];

  return (
    <section
      id="about"
      className="scroll-mt-24 relative overflow-hidden bg-[#080808] py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            About Us
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            We Turn Ideas Into
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            We are a technology-driven company focused on building innovative,
            reliable, and user-friendly digital experiences for modern
            businesses.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Who We Are
            </p>

            <h3 className="text-3xl font-bold leading-tight md:text-4xl">
              Technology that helps your
              <span className="text-blue-500"> business grow.</span>
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              NITRATECH SOLUTIONS is a digital technology company that creates
              websites, web applications, mobile solutions, and modern digital
              experiences.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Our goal is simple — combine technology, creativity, and
              strategy to create solutions that solve real business problems
              and deliver meaningful results.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-blue-500"
                  />
                  {feature}
                </div>
              ))}
            </div>

            {/* Button */}
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Let's Work Together

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Right Side */}
          <div className="relative">

            {/* Main Card */}
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

              {/* Logo */}
              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-lg font-bold text-blue-400">
                  N
                </div>

                <div>
                  <h4 className="font-bold">
                    NITRA<span className="text-blue-500">TECH</span>
                  </h4>
                  <p className="text-xs text-gray-500">
                    SOLUTIONS
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-blue-400">
                  OUR MISSION
                </p>

                <p className="mt-3 leading-7 text-gray-400">
                  To empower businesses with smart technology and digital
                  solutions that make a real difference.
                </p>
              </div>

              {/* Vision */}
              <div>
                <p className="text-sm font-semibold text-purple-400">
                  OUR VISION
                </p>

                <p className="mt-3 leading-7 text-gray-400">
                  To become a trusted technology partner for businesses
                  looking to build, grow, and transform digitally.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-7">

                <div>
                  <h4 className="text-2xl font-bold text-white">
                    100+
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Projects
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">
                    20+
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Clients
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">
                    100%
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Dedication
                  </p>
                </div>

              </div>
            </div>

            {/* Floating Glow */}
            <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-full bg-blue-600/20 blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;