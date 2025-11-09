import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { companyDetails } from "../data/companyDetails";
import { RotateCcw } from "lucide-react";

export default function CompanyPage() {
  const { companyId } = useParams();
  const company = companyDetails[companyId];
  const [key, setKey] = useState(0);
  const [showReplay, setShowReplay] = useState(false);

  if (!company)
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Company not found.</p>
      </div>
    );

  const replayAnimation = () => {
    setKey(prev => prev + 1);
    setShowReplay(false);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-8 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`p-8 rounded-3xl bg-gradient-to-br ${company.color} shadow-2xl max-w-3xl w-full`}
      >
        <div className="flex flex-col items-center text-center">
          <img
            src={company.logo}
            alt={company.name}
            className="w-20 h-20 mb-6 rounded-full bg-white/10 p-2"
          />
          <h2 className="text-3xl font-bold mb-4">{company.name}</h2>

          {/* Type animation and conditional replay button */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <TypeAnimation
              key={key}
              sequence={[
                ...company.typeSequence,
                () => setShowReplay(true), // show icon when finished
              ]}
              wrapper="p"
              cursor={false}
              repeat={0}
              className="text-lg text-gray-200"
            />
            {showReplay && (
              <motion.button
                onClick={replayAnimation}
                whileTap={{ rotate: 360 }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                title="Replay animation"
              >
                <RotateCcw size={18} className="text-gray-300" />
              </motion.button>
            )}
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-3 text-left"
          >
            {company.description.map((line, i) => (
              <p key={i} className="text-gray-100 text-sm leading-relaxed">
                • {line}
              </p>
            ))}
          </motion.div>

          {/* Back button */}
          <Link to="/work">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-10 px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200"
            >
              ← Back to Journey
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
