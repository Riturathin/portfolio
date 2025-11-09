import { Routes, Route } from "react-router-dom";
import WorkExperience from "./components/WorkExperience.jsx";
import CompanyPage from "./components/CompanyPage.jsx";
import App from "./App.jsx";
import SkillsPage from "./components/SkillsPage.jsx";
import ProjectPage from "./components/ProjectPage.jsx";
import ContactPage from "./components/ContactPage.jsx";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/work" element={<WorkExperience />} />
      <Route path="/work/:companyId" element={<CompanyPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<App />} />
    </Routes>
  );
}
