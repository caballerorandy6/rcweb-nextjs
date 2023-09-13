"use client";

import BgCover from "@/components/BgCover";
import TypeWriter from "@/components/TypeWwriterComponent";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { linkVariants } from "@/lib/framer-motion-animations";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen overflow-y-scroll flex flex-col items-center justify-center"
      >
        <BgCover />
        <TypeWriter />
      </section>
    </>
  );
};

export default Home;
