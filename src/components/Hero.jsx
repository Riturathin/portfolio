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
                <span>UI Architect • Frontend Engineer • Design Technologist</span>
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
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 
               rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all"
                >
                    Contact Me
                </MotionLink>
            </div>

        </div >
    );
}
