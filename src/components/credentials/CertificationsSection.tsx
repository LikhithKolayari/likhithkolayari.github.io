import { 
  SparklesIcon, 
  CodeBracketIcon, 
  UserGroupIcon, 
  CloudIcon 
} from "@heroicons/react/24/outline";
import { certificationData } from "../../data/credentials";

const iconMap = {
  ai: SparklesIcon,
  code: CodeBracketIcon,
  agile: UserGroupIcon,
  cloud: CloudIcon,
};

export default function CertificationsSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <svg 
          className="w-5 h-5 text-blue-600 dark:text-blue-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
          />
        </svg>
        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
          Certifications
        </h3>
      </div>

      {/* Certification Cards */}
      <div className="space-y-3">
        {certificationData.map((cert) => {
          const Icon = iconMap[cert.iconType];
          return (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {cert.organization} | <span className="text-blue-600 dark:text-blue-400 font-medium">{cert.date}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
