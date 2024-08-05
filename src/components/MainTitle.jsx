'use client'
import { motion } from "framer-motion";
import { fadIn } from "@/lib/frameMotion";
export default function MainTitle({ title }) {
  return (
    <motion.div
      variants={fadIn("left", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="main_title"
    >
      <div className="text-center md:text-end">
        <h1 className="md:text-6xl text-4xl font-bold">{title}</h1>
      </div>
    </motion.div>
  );
}
