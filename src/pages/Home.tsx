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
    </div>
  );
}
