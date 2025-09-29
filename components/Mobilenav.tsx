"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Mobilenav = () => {
  const pathname = usePathname();
  return (
    <div>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-emerald-300" />
        </SheetTrigger>
        <SheetContent className="flex flex-col ">
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/">
              <h1 className="text-4xl text-white font-semibold">
                King<span className="text-emerald-300">.</span>
              </h1>
            </Link>
          </div>

          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname
                    ? "text-emerald-300 border-b-2 border-emerald-300"
                    : ""
                } text-xl text-white capitalize hover:text-emerald-300 transition-all
                   `}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Mobilenav;
