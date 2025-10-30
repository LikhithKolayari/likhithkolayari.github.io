import { FloatingSocialBar } from "../components";
import profilePic from "../assets/profile.jpg";
import { useGithubStats } from "../hooks/useGithubStats";

export default function Home() {
  const stats = useGithubStats("likhithkolayari");

  return (
    <div className="relative bg-white dark:bg-gray-900">
      <FloatingSocialBar />
      <article className="flex gap-x-4 p-6 max-w-7xl mx-auto">
        <section className="w-[500px] h-[500px] flex-shrink-0">
          <img
            src={profilePic}
            alt="Hero"
            loading="lazy"
            className="w-full h-full object-cover rounded-lg"
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
              <p className="text-base md:text-lg text-justify text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a seasoned Full-Stack Developer who loves building web apps
                that make people's lives easier and businesses run smoother.
              </p>
              <p className="text-base md:text-lg text-justify text-gray-600 dark:text-gray-400 leading-relaxed">
                I specialize in React, Node.js, and Python, designing
                cloud-native systems that are scalable, reliable, and deliver an
                exceptional user experience.
              </p>
              <p className="text-base md:text-lg text-justify text-gray-600 dark:text-gray-400 leading-relaxed">
                With experience across FinTech, Compliance, and SaaS, I turn
                complex challenges into simple, intuitive digital solutions.
              </p>
              <p className="text-base md:text-lg text-justify text-gray-600 dark:text-gray-400 leading-relaxed">
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
