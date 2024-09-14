"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        <span className="text-purple">Projects</span>
      </h1>

      <div className="w-full mt-12 flex flex-col gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-br from-[#1a1a2e] via-[#23234b] to-[#0f3460] rounded-3xl shadow-2xl p-8 md:p-12 border border-purple-700/40 relative overflow-hidden"
          >
            <div className="flex flex-col items-start gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-purple mb-3 flex items-center gap-2">
                {project.title}
                <span className="ml-2 text-purple-400 animate-pulse">
                  <FaLocationArrow />
                </span>
              </h2>
              <div>
              <div className="flex flex-row flex-wrap gap-4 items-center mb-4">
                {project.technologies &&
                  project.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        title={tech.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  ))}
              </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-white/90 text-base md:text-lg pl-2">
                {Array.isArray(project.description) ? (
                  project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))
                ) : (
                  <li>{project.description}</li>
                )}
              </ul>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-700/20 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
