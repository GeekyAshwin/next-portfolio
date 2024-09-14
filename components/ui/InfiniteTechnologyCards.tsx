"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

// Modified component for displaying technologies
export const InfiniteTechnologyCards = ({
  technologies,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: any) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {technologies.map((techCategory, idx) => (
          <li
            key={idx}
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <blockquote>
              {/* Display category name centered and large */}
              <div className="text-center mb-6">
                <span className="relative z-20 text-2xl md:text-4xl font-bold leading-[1.6] text-white">
                  {techCategory.category}
                </span>
              </div>

              {/* Add Grid Layout with padding between icons */}
              <div className="grid grid-cols-3 gap-6 mt-6">
                {techCategory.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex flex-col items-center justify-center p-4"
                  >
                    {/* Display skill image */}
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="h-30 w-22 md:h-24 md:w-24 rounded-full mb-2"
                    />
                    {/* Display skill name */}
                    <span className="text-white text-sm md:text-lg text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
