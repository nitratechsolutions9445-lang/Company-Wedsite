import { ArrowRight, Play } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-28 relative min-h-screen overflow-hidden bg-[#080808] pt-28 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-5 text-center lg:px-8">

        {/* Badge */}
        <div className="mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
          🚀 Your Digital Innovation Partner
        </div>

        {/* Main Heading */}
        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
          We Build Digital
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experiences That Matter.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          NITRATECH SOLUTIONS helps businesses grow with modern websites,
          powerful applications, creative design, and innovative digital
          solutions.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
          >
            Start Your Project
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#projects"
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:border-blue-500 hover:bg-white/10"
          >
            <Play size={17} />
            View Our Work
          </a>

        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 md:gap-16">

          <div>
            <h3 className="text-2xl font-bold md:text-3xl">100+</h3>
            <p className="mt-1 text-sm text-gray-500">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold md:text-3xl">20+</h3>
            <p className="mt-1 text-sm text-gray-500">
              Happy Clients
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold md:text-3xl">24/7</h3>
            <p className="mt-1 text-sm text-gray-500">
              Support
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;