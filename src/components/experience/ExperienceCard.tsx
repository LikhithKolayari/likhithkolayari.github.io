import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import type { ExperienceItem } from "../../data/experience";

interface ExperienceCardProps {
  experience: ExperienceItem;
  isActive: boolean;
  onClick: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function ExperienceCard({
  experience,
  isActive,
  onClick,
  isFirst,
  isLast,
}: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && cardRef.current) {
      // Smooth scroll with offset for sticky header
      setTimeout(() => {
        cardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [isActive]);

  return (
    <div ref={cardRef} className="relative flex gap-2 sm:gap-4 scroll-mt-24">
      {/* Timeline rail and dot */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        {/* Top rail */}
        {!isFirst && (
          <div className="absolute top-0 w-0.5 h-4 sm:h-6 bg-gray-300 dark:bg-gray-600 -translate-y-full" />
        )}

        {/* Dot */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{
            scale: isActive ? 1.2 : 1,
            backgroundColor: isActive
              ? "rgb(59, 130, 246)"
              : "rgb(209, 213, 219)",
          }}
          transition={{ duration: 0.3 }}
          className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 sm:border-4 border-white dark:border-gray-900 z-10 flex-shrink-0"
        />

        {/* Bottom rail */}
        {!isLast && (
          <div className="w-0.5 flex-1 min-h-[40px] sm:min-h-[60px] bg-gray-300 dark:bg-gray-600" />
        )}
      </div>

      {/* Card content */}
      <motion.div
        layout
        className="flex-1 mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <button
          onClick={onClick}
          className="w-full text-left bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-3 sm:p-4 border border-gray-200 dark:border-gray-700"
          aria-expanded={isActive}
        >
          <div className="flex items-start justify-between gap-2 sm:gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white">
                {experience.role}
              </h3>
              <p className="text-sm sm:text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">
                {experience.company}
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <span>{experience.location}</span>
                <span>•</span>
                <span>{experience.period}</span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isActive ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400" />
            </motion.div>
          </div>
        </button>

        {/* Expandable content */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-3 sm:mt-4 pl-2 sm:pl-4 pr-2 sm:pr-4">
                <ul className="space-y-2 sm:space-y-3">
                  {experience.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="flex gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5 sm:mt-1">
                        •
                      </span>
                      <span className="leading-relaxed">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
