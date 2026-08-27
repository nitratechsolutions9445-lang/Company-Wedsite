import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [logoText, setLogoText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Career", href: "#career" },
     {name: "Contact", href: "#contact" },
  ];

  // Logo typing animation
  useEffect(() => {
    const text = "NITRATECH";
    let index = 0;

    const interval = setInterval(() => {
      index++;
      setLogoText(text.slice(0, index));

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-black/50 py-2 backdrop-blur-xl shadow-lg"
          : "bg-transparent py-3"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Animated Logo */}
        <a
          href="#home"
          className="min-w-[145px] text-2xl font-bold tracking-wider"
        >
          <span className="text-white">
            {logoText.slice(0, 5)}
          </span>

          <span className="text-blue-500">
            {logoText.slice(5)}
          </span>

          {logoText.length < 9 && (
            <span className="animate-pulse text-blue-500">|</span>
          )}
        </a>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
            >
              {link.name}

              {/* Hover Underline */}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-4 lg:flex">

          {/* Login */}
          <a
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-blue-400"
          >
            Login
          </a>

          {/* Get In Touch */}
          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/40"
          >
            Get In Touch →
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white transition-all duration-300 hover:bg-white/10 hover:text-blue-400 lg:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-4 rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl">
          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-white/5 pb-3 text-gray-300 transition-all duration-300 hover:translate-x-2 hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}

            {/* Login */}
            <a
              href="/login"
              onClick={closeMenu}
              className="text-gray-300 transition-all duration-300 hover:translate-x-2 hover:text-blue-400"
            >
              Login
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-full bg-blue-600 px-5 py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/40"
            >
              Get In Touch →
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;