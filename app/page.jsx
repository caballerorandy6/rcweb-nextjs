"use client";

import Link from "next/link";
import BgCover from "@/components/BgCover";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const linkVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen overflow-y-scroll flex flex-col items-center justify-center"
      >
        <BgCover />
        <motion.div variants={linkVariants} whileHover="hover">
          <Link
            href="/about"
            className="text-mineshaft/90 bg-gold/70 p-4 rounded font-roboto text-lg flex items-center gap-4 hover:bg-gold/60 hover:text-mineshaft/80 font-bold border-mineshaft transition-colors"
          >
            Wiew my work
            <FaArrowRight />
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
