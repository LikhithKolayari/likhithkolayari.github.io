import { useState } from "react";
import { experienceData } from "../../data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    // Toggle: if clicking the same card, close it; otherwise open the new one
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="max-w-4xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 px-2">
        Professional Experience
      </h2>
      <div className="relative">
        {experienceData.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isActive={activeId === experience.id}
            onClick={() => handleCardClick(experience.id)}
            isFirst={index === 0}
            isLast={index === experienceData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
