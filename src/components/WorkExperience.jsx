import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HomeLink from "../commons/HomeLink";
import Header from "./Header";

const companies = [
  {
    id: "celigo",
    name: "Celigo",
    logo: "/logos/celigo.png",
    color: "from-gray-900 to-black",
    duration: "Aug 2023 – Sep 2025",
    role: "Senior Staff Software Engineer / UI Architect",
  },
  {
    id: "upstox",
    name: "Upstox",
    logo: "/logos/upstox.png",
    color: "from-purple-600 to-purple-800",
    duration: "Apr 2023 – Aug 2023",
    role: "Staff UI Engineer (UI Engineer IV)",
  },
  {
    id: "lowes",
    name: "Lowe's",
    logo: "/logos/lowes.png",
    color: "from-blue-800 to-blue-900",
    duration: "Aug 2021 – Apr 2023",
    role: "Lead Software Engineer / Systems Architect",
  },
  {
    id: "itc",
    name: "ITC Infotech",
    logo: "/logos/fidelity.png",
    color: "from-red-600 to-rose-700",
    duration: "Sep 2018 – Aug 2021",
    role: "Tech Lead – Front-End",
  },
  {
    id: "ari",
    name: "ARI Network Services",
    logo: "/logos/ari.png",
    color: "from-green-300 to-emerald-500",
    duration: "Apr 2016 – May 2018",
    role: "Senior Software Developer",
  },
  {
    id: "goibibo",
    name: "GoIbibo / Indecomm",
    logo: "/logos/goibibo.png",
    color: "from-orange-400 to-blue-500",
    duration: "Jan 2015 – Apr 2016",
    role: "Senior Software Developer",
  },
  {
    id: "moonraft",
    name: "Moonraft Innovation Labs",
    logo: "/logos/moonraft.png",
    color: "from-purple-500 to-indigo-700",
    duration: "Apr 2014 – Jan 2015",
    role: "Software Developer",
  },
  {
    id: "tesco",
    name: "Tesco HSC",
    logo: "/logos/tesco.png",
    color: "from-red-600 to-blue-900",
    duration: "Jul 2012 – Apr 2014",
    role: "Software Developer",
  },
];

export default function WorkExperience() {
  return (
    <>
      <Header />

      <div className="min-h-screen relative z-10 flex flex-col items-center justify-center text-white px-6 py-16 overflow-hidden">

        {/* Header Section */}
        <div className="w-full max-w-6xl flex justify-between items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl font-bold italic text-gray-100"
          >
            Where the magic (and coffee) happened!
          </motion.h2>
          <div className="shrink-0">
            <HomeLink />
          </div>
        </div>

        {/* Company Tiles */}
        <div className="w-full max-w-6xl flex flex-wrap justify-center gap-8">
          {companies.map((company, index) => (
            <Link key={company.id} to={`/work/${company.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0.5,
                  boxShadow: "0 0 20px rgba(255,255,255,0.3)",
                }}
                className={`relative p-6 w-72 rounded-3xl bg-gradient-to-br ${company.color} shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              >
                {/* Glow layer */}
                <div className="absolute inset-0 rounded-3xl bg-white/10 blur-md"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <img
                    src={`${import.meta.env.BASE_URL}${company.logo.replace(/^\//, '')}`}
                    alt={company.name}
                    className="w-16 h-16 mb-4 rounded-full bg-white/10 p-2 object-contain"
                  />
                  <h3 className="text-xl font-semibold mb-1 text-gray-100">
                    {company.name}
                  </h3>
                  <p className="text-blue-300 text-sm mb-3">{company.role}</p>
                  <p className="text-gray-200 text-xs">{company.duration}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
