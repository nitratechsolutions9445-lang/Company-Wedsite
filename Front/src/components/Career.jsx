import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Palette,
  BrainCircuit,
  Users,
  Rocket,
  GraduationCap,
  Heart,
  MapPin,
  Clock,
} from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Noida, India",
    icon: Code2,
    skills: "React.js • JavaScript • Tailwind CSS",
  },
  {
    title: "Backend Developer",
    type: "Full Time",
    location: "Noida, India",
    icon: BrainCircuit,
    skills: "Node.js • Express.js • MongoDB",
  },
  {
    title: "UI/UX Designer",
    type: "Full Time",
    location: "Remote / Noida",
    icon: Palette,
    skills: "Figma • UI Design • Prototyping",
  },
  {
    title: "React Developer Intern",
    type: "Internship",
    location: "Remote",
    icon: Rocket,
    skills: "React • JavaScript • Git",
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Career Growth",
    text: "Grow your skills while working on real-world projects.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    text: "Learn modern technologies and improve your expertise.",
  },
  {
    icon: Users,
    title: "Great Team",
    text: "Work with talented and supportive people.",
  },
  {
    icon: Heart,
    title: "Work Culture",
    text: "A creative, friendly and collaborative environment.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Careers() {
  return (
    
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">
     
      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[90vh] items-center">

        {/* Background Glow */}
        <div className="absolute left-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

          {/* Hero Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <Briefcase size={16} />
              Join Our Team
            </div>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Build Your
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Future With Us
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              Join Nitratech Solutions and work with passionate people
              who are building innovative digital experiences for the future.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#jobs"
                className="group flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
              >
                View Open Positions
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#culture"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md transition hover:bg-white/10"
              >
                Why Join Us?
              </a>

            </div>
          </motion.div>

          {/* 3D Style Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="relative flex h-[350px] w-[350px] items-center justify-center md:h-[450px] md:w-[450px]">

              {/* Outer Ring */}
              <div className="absolute inset-0 animate-[spin_18s_linear_infinite] rounded-full border border-cyan-400/20" />

              <div className="absolute inset-8 animate-[spin_12s_linear_infinite_reverse] rounded-full border border-purple-500/20 border-dashed" />

              {/* Glow */}
              <div className="absolute h-64 w-64 rounded-full bg-cyan-500/20 blur-[80px]" />

              {/* Center */}
              <div className="relative flex h-48 w-48 rotate-12 items-center justify-center rounded-3xl border border-cyan-400/30 bg-white/5 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">

                <div className="-rotate-12 text-center">
                  <Rocket
                    size={60}
                    className="mx-auto mb-4 text-cyan-400"
                  />

                  <p className="text-xl font-bold">
                    Innovate
                  </p>

                  <p className="text-sm text-gray-400">
                    Create • Grow
                  </p>
                </div>

              </div>

              {/* Floating Cards */}
              <div className="absolute right-0 top-10 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
                🚀 Innovation
              </div>

              <div className="absolute bottom-12 left-0 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
                💡 Creativity
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section
        id="culture"
        className="relative mx-auto max-w-7xl px-6 py-24"
      >

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
            Why Nitratech?
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            More Than Just a Job
          </h2>

          <p className="mt-5 text-gray-400">
            We believe great products are built by great people.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition hover:border-cyan-400/30"
              >

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-black">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.text}
                </p>

              </motion.div>
            );
          })}

        </div>
      </section>

      {/* ================= JOBS ================= */}
      <section
        id="jobs"
        className="mx-auto max-w-5xl px-6 py-24"
      >

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
            Opportunities
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Open Positions
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Find a role where your skills can make a real impact.
          </p>
        </motion.div>

        <div className="space-y-5">

          {jobs.map((job, index) => {
            const Icon = job.icon;

            return (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/[0.05] md:p-7"
              >

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                  <div className="flex gap-5">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                      <Icon size={26} />
                    </div>

                    <div>

                      <h3 className="text-xl font-bold">
                        {job.title}
                      </h3>

                      <p className="mt-2 text-sm text-cyan-400">
                        {job.skills}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-500">

                        <span className="flex items-center gap-1">
                          <MapPin size={15} />
                          {job.location}
                        </span>

                        <span className="flex items-center gap-1">
                          <Clock size={15} />
                          {job.type}
                        </span>

                      </div>

                    </div>

                  </div>

                  <button className="group/btn flex items-center justify-center gap-2 rounded-xl border border-cyan-400/30 px-5 py-3 font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-black">
                    Apply Now
                    <ArrowRight
                      size={18}
                      className="transition group-hover/btn:translate-x-1"
                    />
                  </button>

                </div>

              </motion.div>
            );
          })}

        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="relative mx-auto max-w-6xl px-6 py-24">

        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
            Simple Process
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            How We Hire
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-4">

          {[
            ["01", "Apply", "Submit your application."],
            ["02", "Review", "Our team reviews your profile."],
            ["03", "Interview", "Meet our team and showcase your skills."],
            ["04", "Welcome", "Start your journey with us."],
          ].map(([number, title, text]) => (

            <motion.div
              key={number}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
            >

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 text-cyan-400">
                {number}
              </div>

              <h3 className="text-xl font-bold">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {text}
              </p>

            </motion.div>

          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-24">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 px-6 py-20 text-center"
        >

          <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[80px]" />

          <h2 className="relative text-4xl font-bold md:text-5xl">
            Ready to Build the Future?
          </h2>

          <p className="relative mx-auto mt-5 max-w-xl text-gray-400">
            We are always looking for talented people who love technology,
            creativity and innovation.
          </p>

          <a
            href="#jobs"
            className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            Explore Careers
            <ArrowRight size={18} />
          </a>

        </motion.div>

      </section>

    </main>
  );
}