"use client";

import React from "react";
import { motion } from "framer-motion";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { technologies } from "@/data";
import { InfiniteTechnologyCards } from "./ui/InfiniteTechnologyCards";
import { MotionAdvancedProps } from "framer-motion";
      import { skills } from "@/data";

const Technologies = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading mb-5">Skills</h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* Animated Skills Grid */}
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {skills.map((skill) => (
                <div
                  key={skill.category}
                  className="bg-gradient-to-br from-[#1a1a2e] to-[#23234b] rounded-2xl p-7 shadow-lg flex flex-col gap-3"
                >
                  <h2 className="text-xl font-bold text-purple mb-2 flex items-center gap-2">
                    <span>{skill.category}</span>
                  </h2>
                  <ul className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="px-3 py-1 bg-[#28284a] rounded-full text-sm font-medium"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
