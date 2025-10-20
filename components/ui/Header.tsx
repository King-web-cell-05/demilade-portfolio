"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";
import Mobilenav from "@/components/Mobilenav";

const Header = () => {
  return (
    <header className="py-4 xl:py-6 text-white fixed top-0 left-0 w-full z-[999] bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-4xl font-semibold ml-5 cursor-pointer select-none text"
          title="Kingsley"
        >
          Kingsley<span className="text-emerald-300">.</span>
        </h1>

        <div className="hidden md:flex items-center gap-8">
          <Navbar />
          <Link href="#contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden">
          <Mobilenav />
        </div>
      </div>
    </header>
  );
};

export default Header;
