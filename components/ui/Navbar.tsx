"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 z-50 relative">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === pathname
              ? "text-emerald-300 border-b-2 border-emerald-300"
              : "text-white"
          } capitalize font-medium hover:text-emerald-300 transition-all duration-200 cursor-pointer`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
