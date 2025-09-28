"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const PageTransition: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}       // start faded & slightly down
        animate={{ opacity: 1, }}       // animate in
        transition={{ delay:0.5, duration: 0.4, ease: "easeInOut" }}
        className="min-h-screen w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
