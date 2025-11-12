import { motion } from "framer-motion";
import Tagline from "../commons/Tagline";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center text-white overflow-hidden">

            {/* Background Glow Animation */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-800/10 to-black blur-3xl pointer-events-none"
                animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
            />

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="mt-4 text-lg text-gray-400 z-10"
            >
                <span>UI Architect • Frontend Engineer • Technology Evangelist • Tech Counsellor </span>
                <Tagline text="I don't build websites. I craft web masterpieces." />
            </motion.p>



            <div className="flex flex-wrap justify-center gap-6 mt-10">
                <MotionLink
                    to="/work"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 
               rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all"
                >
                    Work Experience
                </MotionLink>

                <MotionLink
                    to="/skills"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, type: "spring", stiffness: 120 }}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 
               rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all"
                >
                    Skills & Expertise
                </MotionLink>

                <MotionLink
                    to="/projects"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 
               rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all"
                >
                    Projects
                </MotionLink>

                <MotionLink
                    to="/contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-red-600 hover:from-blue-600 hover:to-indigo-700 
               rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all"
                >
                    Contact Me
                </MotionLink>



            </div>
            {/* Download Resume */}
            <motion.a
                href={`${import.meta.env.BASE_URL}files/resume.pdf`}// place your resume in the public folder
                download
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-8 inline-flex items-center gap-2 text-gray-300 hover:text-white transition-all border border-gray-600 hover:border-gray-400 rounded-full px-5 py-2 text-sm tracking-wide"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5v-9m0 9l3-3m-3 3l-3-3m9 6a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Download Resume
            </motion.a>

        </div >
    );
}
