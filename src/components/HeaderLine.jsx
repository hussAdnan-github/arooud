'use client'
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadIn } from "@/lib/frameMotion";
export default function HeaderLine({ title }) {
  return (
    <div className="header_line mt-20 flex justify-end items-end gap-6 md:gap-4 w-full">
      <motion.div
        variants={fadIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
      >
        <FaChevronDown />
      </motion.div>
      <motion.h1
        variants={fadIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="headerline_title"
      >
        {title}
      </motion.h1>
    </div>
  );
}
