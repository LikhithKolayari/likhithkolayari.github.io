import { FloatingSocialBar } from "../components";
import profilePic from "../assets/profile.jpg";
import { useGithubStats } from "../hooks/useGithubStats";
import homeStyles from "./Home.module.css";

export default function Home() {
  const stats = useGithubStats("likhithkolayari");

  return (
    <div className="relative bg-white dark:bg-gray-900">
      <FloatingSocialBar />
      <article className="flex flex-col md:flex-row gap-6 p-4 md:p-6 max-w-7xl mx-auto">
        <section className="w-full md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] mx-auto md:mx-0 flex-shrink-0">
          <img
            src={profilePic}
            alt="Hero"
            loading="lazy"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </section>
        {stats ? (
          <section>
            <h4 className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300">
              Hello,
            </h4>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              I'm {stats.name}
            </h1>
            <div className="space-y-3 mt-4">
              <p className={homeStyles["para-text"]}>
                I'm a seasoned Full-Stack Developer who loves building web apps
                that make people's lives easier and businesses run smoother.
              </p>
              <p className={homeStyles["para-text"]}>
                I specialize in React, Node.js, and Python, designing
                cloud-native systems that are scalable, reliable, and deliver an
                exceptional user experience.
              </p>
              <p className={homeStyles["para-text"]}>
                With experience across FinTech, Compliance, and SaaS, I turn
                complex challenges into simple, intuitive digital solutions.
              </p>
              <p className={homeStyles["para-text"]}>
                Beyond coding, I enjoy exploring low-code platforms and crafting
                modern design systems that bridge creativity with engineering
                precision.
              </p>
            </div>
          </section>
        ) : (
          <p>Loading...</p>
        )}
      </article>

      <article className="p-4 md:p-6 max-w-7xl mx-auto mt-8 md:mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My approach to development
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
          The 8-Pillar Framework
        </h3>
        <div className="space-y-4">
          <p className={homeStyles["para-text"]}>
            This is my blueprint for building software that matters. In an era of
            AI-generated code, I focus on the human-led strategy that turns syntax
            into solutions. This framework shifts the focus from "writing code" to
            identifying market gaps, architecting for scale, and delivering
            tangible user outcomes.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base md:text-lg text-left sm:text-justify text-gray-600 dark:text-gray-400 leading-relaxed">
            <li>
              <strong>Vision:</strong> Using a core mission as the compass for every technical and product decision.
            </li>
            <li>
              <strong>Problem-First:</strong> Obsessing over the "Why" before writing a single line of code.
            </li>
            <li>
              <strong>Users:</strong> Designing with empathy for the human at the other end of the screen.
            </li>
            <li>
              <strong>USP:</strong> Identifying market gaps to build solutions that are meaningfully different, not just "new."
            </li>
            <li>
              <strong>Solution:</strong> Architecting intentional, lean systems where AI assists and humans lead.
            </li>
            <li>
              <strong>Distribution:</strong> Engineering for adoption to ensure the product actually reaches those it serves.
            </li>
            <li>
              <strong>Systems:</strong> Building resilient, scalable foundations that grow alongside the business.
            </li>
            <li>
              <strong>Outcomes:</strong> Measuring success by the tangible value and goals achieved by the user.
            </li>
          </ol>
        </div>
      </article>
    </div>
  );
}
