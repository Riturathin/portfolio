// SkillTile.jsx
import { motion } from "framer-motion";

export default function SkillTile({ skill, index = 0 }) {
  const color =
    skill.level >= 95
      ? "bg-blue-500"
      : skill.level >= 85
      ? "bg-green-500"
      : skill.level >= 75
      ? "bg-orange-400"
      : "bg-red-500";

  const tileVariants = {
    hidden: { opacity: 0, scale: 0.86, rotate: -4 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { delay: index * 0.04, type: "spring", stiffness: 110, damping: 12 },
    },
  };

  return (
    <motion.article
      layout
      role="article"
      aria-labelledby={`skill-${skill.id}`}
      className="bg-gray-800 rounded-2xl p-4 text-center shadow-lg border border-gray-700"
      variants={tileVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.04, rotate: [0, 1, -1, 0] }}
      whileTap={{ scale: 0.98 }}
    >
      <h3 id={`skill-${skill.id}`} className="text-sm font-semibold text-white truncate">
        {skill.name}
      </h3>

      <div className="mt-3 w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className={`${color} h-2 rounded-full`}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={skill.level}
        />
      </div>

      <div className="text-xs text-gray-400 mt-2">{skill.level}%</div>
    </motion.article>
  );
}
