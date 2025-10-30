import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function FloatingSocialBar() {
  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-6 z-50">
      <a
        href="https://github.com/LikhithKolayari"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
        title="GitHub"
      >
        <FaGithub className="w-8 h-8 text-gray-500 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300" />
      </a>
      <a
        href="https://www.linkedin.com/in/likhithkp/"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
        title="LinkedIn"
      >
        <FaLinkedin className="w-8 h-8 text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-400 transition-colors duration-300" />
      </a>
    </div>
  );
}
