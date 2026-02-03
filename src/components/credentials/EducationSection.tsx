import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { educationData } from "../../data/credentials";

export default function EducationSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <AcademicCapIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
          Education
        </h3>
      </div>

      {/* Education Cards */}
      <div className="space-y-3">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              {edu.degree}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {edu.location}
            </p>
            <span className="inline-block text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
              {edu.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
