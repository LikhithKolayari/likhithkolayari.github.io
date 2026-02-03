import ExperienceTimeline from "../components/experience/ExperienceTimeline";
import CredentialsSidebar from "../components/credentials/CredentialsSidebar";

export default function AboutMe() {
  return (
    <div className="relative bg-white dark:bg-gray-900 min-h-screen">
      <article className="p-4 md:p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Experience Timeline */}
          <div className="lg:col-span-8">
            <ExperienceTimeline />
          </div>

          {/* Right Column - Credentials Sidebar */}
          <div className="lg:col-span-4">
            <CredentialsSidebar />
          </div>
        </div>
      </article>
    </div>
  );
}
