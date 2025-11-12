// SkillsGrid.jsx
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SKILLS, SKILL_CATEGORIES } from "../data/skillsData";
import SkillTile from "./SkillTile";
import { Search } from "lucide-react";
import HomeLink from "../commons/HomeLink";

export default function SkillsGrid({ debug = false }) {
  const [searchTerm, setSearchTerm] = useState("");

  // 1) Start from the canonical SKILLS array
  const allSkills = SKILLS;

  // optional debug: print counts
  if (debug) {
    console.log("SKILLS length:", SKILLS.length);
    // show duplicates by id if any
    const ids = SKILLS.map(s => s.id);
    const dupIds = ids.filter((id, i) => ids.indexOf(id) !== i);
    console.log("duplicate ids (if any):", [...new Set(dupIds)]);
  }

  // 2) Filter by search text (name OR tags)
  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return allSkills;
    return allSkills.filter(skill => {
      const nameMatch = skill.name.toLowerCase().includes(q);
      const tagMatch = (skill.tags || []).some(t => t.toLowerCase().includes(q));
      return nameMatch || tagMatch;
    });
  }, [searchTerm, allSkills]);

  // 3) Deduplicate (safe-guard) by id to avoid accidental repeats in data
  const uniqueFiltered = useMemo(() => {
    const seen = new Set();
    const out = [];
    for (const s of filtered) {
      if (!seen.has(s.id)) {
        seen.add(s.id);
        out.push(s);
      }
    }
    return out;
  }, [filtered]);

  // 4) Group by category (preserve SKILL_CATEGORIES order)
  const grouped = useMemo(() => {
    const map = SKILL_CATEGORIES.reduce((acc, cat) => {
      acc[cat] = [];
      return acc;
    }, {});

    uniqueFiltered.forEach(skill => {
      // If category missing or unknown, group under 'Other'
      const cat = skill.category && SKILL_CATEGORIES.includes(skill.category) ? skill.category : "Other";
      if (!map[cat]) map[cat] = [];
      map[cat].push(skill);
    });

    return map;
  }, [uniqueFiltered]);

  return (
    <div className="min-h-screen text-white flex flex-col items-center p-0">
         <div className="w-full max-w-6xl flex justify-between items-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-2xl sm:text-3xl font-bold italic text-gray-100"
                >
                  Skills & Stack
                </motion.h2>
                <div className="shrink-0">
                  <HomeLink />
                </div>
              </div>
        

      {/* Search */}
      <div className="relative mb-10 w-full max-w-md">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search a skill or tag..."
          className="w-full bg-gray-900 text-gray-200 pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Grouped sections */}
      <div className="w-full max-w-6xl space-y-10">
        {Object.keys(grouped).map((category) => {
          const items = grouped[category];
          if (!items || items.length === 0) return null;

          return (
            <motion.section
              key={category}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">{category}</h2>

              <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((skill, idx) => (
                  <SkillTile key={skill.id} skill={skill} index={idx} />
                ))}
              </motion.div>
            </motion.section>
          );
        })}
      </div>

      {Object.values(grouped).flat().length === 0 && (
        <p className="text-gray-400 mt-10">No skills found matching “{searchTerm}”</p>
      )}
    </div>
  );
}
