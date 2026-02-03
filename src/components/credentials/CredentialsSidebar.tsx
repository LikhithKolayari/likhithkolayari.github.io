import EducationSection from "./EducationSection";
import CertificationsSection from "./CertificationsSection";
import LanguagesSection from "./LanguagesSection";

export default function CredentialsSidebar() {
  return (
    <aside className="space-y-6">
      <EducationSection />
      <CertificationsSection />
      <LanguagesSection />
    </aside>
  );
}
