import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaMedium,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // ✅ LeetCode icon
import HomeLink from "../commons/HomeLink";
import Header from "./Header";

export default function ContactPage() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-[#0077B5]" />,
      url: "https://www.linkedin.com/in/ritumoni-sarma-a9762a46/",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-[#181717]" />,
      url: "https://github.com/Riturathin",
    },
    {
      name: "Stack Overflow",
      icon: <FaStackOverflow className="text-[#F48024]" />,
      url: "https://stackoverflow.com/users/4440103/ritumoni-sharma",
    },
    {
      name: "Medium",
      icon: <FaMedium className="text-[#00AB6C]" />,
      url: "https://medium.com/@ritumonisarma",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode className="text-[#FFA116]" />,
      url: "https://leetcode.com/u/Riturathin/",
    },
  ];

  return (
    <>
      <Header />
      <div className="relative min-h-screen z-10 text-white flex flex-col items-center justify-top px-6 py-10 overflow-hidden">
        <div className="w-full max-w-6xl flex justify-between items-center mb-16 z-10">
          <div>

          </div>

          <div className="shrink-0">
            <HomeLink />
          </div>
        </div>


        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-800/10 to-black blur-3xl"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-3xl font-bold mb-4 text-center z-10"
        >
          Let’s Connect 🤝
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-center mb-12 max-w-2xl z-10"
        >
          <p>Always open to conversations — whether it’s design, frontend architecture,
            or just a chat about creativity and tech ☕.</p>
          <br />
          <p>If you want career advice or collaboration opportunities, don't hesitate to get in touch.</p>
          <br />
          <p>Feel free to reach out via email, phone, or connect on social media! I would love to hear from you.</p>

        </motion.p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 z-10">
          {/* Email */}
          <motion.a
            href="mailto:riturathinsharma@gmail.com"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 
                     px-6 py-3 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all"
          >
            <FaEnvelope className="text-white text-lg" />
            Email Me
          </motion.a>

          {/* Phone 1 */}
          <motion.a
            href="tel:+918826791043"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 
                     px-6 py-3 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all"
          >
            <FaPhoneAlt className="text-white text-lg" />
            +91 88267 91043
          </motion.a>

          {/* Phone 2 */}
          <motion.a
            href="tel:+919365808994"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 
                     px-6 py-3 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all"
          >
            <FaPhoneAlt className="text-white text-lg" />
            +91 93658 08994
          </motion.a>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mt-14 z-10"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 transition-all"
            >
              <div className="text-4xl">{link.icon}</div>
              <span className="text-sm text-gray-400 hover:text-white">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </>
  );
}
