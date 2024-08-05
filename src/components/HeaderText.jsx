'use client' 

import { motion } from "framer-motion";
import { fadIn } from "@/lib/frameMotion";
export default function HeaderText({titel}) {
  return (
    <motion.div
    variants={fadIn('left',0.1)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false , amount:0.1}}
    
    className="md:text-end font-bold text-2xl text-center md:text-4xl text-black">
       {titel}
    </motion.div>
  )
}
