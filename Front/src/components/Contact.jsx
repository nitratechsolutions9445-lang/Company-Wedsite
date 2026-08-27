import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@nitratech.com",
      href: "mailto:hello@nitratech.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "New Delhi, India",
      href: "#location",
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-24 relative overflow-hidden bg-[#080808] py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Let's Build Something
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Amazing Together.
            </span>
          </h2>

          <p className="mt-6 leading-7 text-gray-400">
            Have a project, idea, or business challenge? Tell us about it.
            Our team would love to help you turn your vision into reality.
          </p>

        </div>

        {/* Contact Grid */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left Side */}
          <div className="space-y-5">

            <div className="mb-8">
              <h3 className="text-2xl font-bold">
                Get in touch
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                We're always ready to discuss your next digital project.
                Reach out to us and let's start a conversation.
              </p>
            </div>

            {/* Contact Cards */}
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.06]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      {item.title}
                    </p>

                    <p className="mt-1 font-medium text-gray-200 transition-colors group-hover:text-blue-400">
                      {item.value}
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    className="ml-auto text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400"
                  />
                </a>
              );
            })}

            {/* Availability */}
            <div className="mt-8 rounded-2xl border border-green-500/10 bg-green-500/5 p-5">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

                <span className="text-sm font-medium text-green-400">
                  Available for new projects
                </span>
              </div>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Tell us what you're building and we'll get back to you.
              </p>
            </div>

          </div>

          {/* Right Side - Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-8">

            <div className="mb-7">
              <h3 className="text-2xl font-bold">
                Send us a message
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Fill out the form and we'll contact you shortly.
              </p>
            </div>

            <form className="space-y-5">

              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* Service */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  What do you need?
                </label>

                <select
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-gray-400 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>UI/UX Design</option>
                  <option>AI Solutions</option>
                  <option>Backend & API</option>
                  <option>Cloud Solutions</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
              >
                Send Message

                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

            </form>
          </div>
        </div>

        {/* Animated CTA */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 p-8 text-center md:p-12">

          {/* Animated Glow */}
          <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[80px]" />

          <div className="relative z-10">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Ready to get started?
            </p>

            <h3 className="mt-4 text-3xl font-bold md:text-4xl">
              Let's turn your idea into reality.
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              From the first idea to the final product, NITRATECH SOLUTIONS
              is ready to build it with you.
            </p>

            <a
              href="mailto:hello@nitratech.com"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white"
            >
              Start a Conversation

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;