import { useState } from "react";
import { PROJECTS } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import FilterBar from "./FilterBar";
import { motion } from "framer-motion";
import HomeLink from "../commons/HomeLink";

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const categories = [...new Set(PROJECTS.map((p) => p.category))];
  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16">
      <div className="w-full max-w-6xl flex justify-between items-center mb-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl font-bold italic text-gray-100"
          >
            Some amazing projects I've worked on
          </motion.h2>
          <p className="text-gray-400 text-center mb-12">
            Each project taught me something new — from scalable systems to stunning UI.
          </p>
        </div>

        <div className="shrink-0">
          <HomeLink />
        </div>
      </div>


      <FilterBar categories={categories} active={active} onSelect={setActive} />

      <div className="max-w-5xl mx-auto">
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
