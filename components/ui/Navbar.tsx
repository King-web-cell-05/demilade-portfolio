"use client";

const links = [
  { name: "home", path: "home" },
  { name: "services", path: "services" },
  { name: "resume", path: "resume" },
  { name: "work", path: "work" },
  { name: "contact", path: "contact" },
];

const Navbar = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex gap-8 z-50 relative">
      {links.map((link, index) => (
        <button
          key={index}
          onClick={() => handleScroll(link.path)}
          className="capitalize font-medium text-white hover:text-emerald-300 transition-all duration-200 cursor-pointer"
        >
          {link.name}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
