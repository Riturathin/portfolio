import { motion } from "framer-motion";
import { SKILL_CATEGORIES, SKILLS } from "../data/skillsData";
import SkillsGrid from "../components/SkillsGrid";
import Header from "./Header";

export default function SkillsPage() {
  return (
    <>
      <Header />

      <div className="relative z-10 min-h-screen text-white px-6 py-16 flex flex-col items-center">

        <SkillsGrid skills={SKILLS} />

      </div>
    </>
  );
}
