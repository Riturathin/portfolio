import { motion } from "framer-motion";
import { SKILL_CATEGORIES, SKILLS } from "../data/skillsData";
import SkillsGrid from "../components/SkillsGrid";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">

     <SkillsGrid skills={SKILLS} />

    </div>
  );
}
