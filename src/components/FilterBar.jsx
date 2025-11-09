import { motion } from "framer-motion";

export default function FilterBar({ categories, active, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {["All", ...categories].map((cat) => (
        <motion.button
          key={cat}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-lg border transition-all ${
            active === cat
              ? "bg-blue-600 text-white border-blue-600"
              : "border-gray-700 text-gray-300 hover:bg-gray-800"
          }`}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
}
