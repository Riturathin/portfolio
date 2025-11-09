import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  if (inView) controls.start({ opacity: 1, x: 0 });

  const direction = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center gap-8 mb-16"
    >
      {/* Alternate left/right layout */}
      {index % 2 === 0 ? (
        <>
          <ProjectImage project={project} />
          <ProjectDetails project={project} />
        </>
      ) : (
        <>
          <ProjectDetails project={project} />
          <ProjectImage project={project} />
        </>
      )}
    </motion.div>
  );
}

function ProjectImage({ project }) {
  return (
    <Link to={`/company/${project.companyId}`} className="w-full md:w-1/2 group">
      <motion.img
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        src={project.image}
        alt={project.name}
        className="rounded-xl shadow-lg w-full object-cover h-64"
      />
    </Link>
  );
}

function ProjectDetails({ project }) {
  return (
    <div className="md:w-1/2 space-y-3">
      <h3 className="text-2xl font-bold">{project.name}</h3>
      <p className="text-gray-400 text-sm italic">({project.company}, {project.year})</p>
      <p className="text-gray-300">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-gray-800 rounded-md text-xs text-blue-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
