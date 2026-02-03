import { LanguageIcon } from "@heroicons/react/24/outline";
import { languageData } from "../../data/credentials";

export default function LanguagesSection() {
  const proficiencyColors = {
    NATIVE: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    FLUENT: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    INTERMEDIATE: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    BASIC: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400",
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <LanguageIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
          Languages
        </h3>
      </div>

      {/* Language Pills */}
      <div className="flex flex-wrap gap-2">
        {languageData.map((lang) => (
          <div
            key={lang.id}
            className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-sm border border-gray-200 dark:border-gray-700 flex items-center gap-2"
          >
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {lang.name}
            </span>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded ${
                proficiencyColors[lang.proficiency]
              }`}
            >
              {lang.proficiency}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
