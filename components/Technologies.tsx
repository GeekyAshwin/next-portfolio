"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { technologies } from "@/data";
import { InfiniteTechnologyCards } from "./ui/InfiniteTechnologyCards";

const Technologies = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading mb-5">Tools and Technologies i work with</h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteTechnologyCards
            technologies={technologies}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
