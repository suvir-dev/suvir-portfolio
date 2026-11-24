const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between px-4 py-5 backdrop-blur-md sm:px-8 sm:py-6">
      <a href="#home" className="text-lg font-bold sm:text-xl">
        Suvir <span className="text-emerald-400">Portfolio</span>
      </a>
      <div className="flex gap-4 sm:gap-8">
        {links.map((link) => (
          <a key={link.name} href={link.href} className="text-sm text-white/80 transition hover:text-emerald-400 sm:text-base">
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
