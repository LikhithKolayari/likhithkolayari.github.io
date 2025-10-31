interface Props {
  theme: string;
  setTheme: (t: string) => void;
}

export default function ThemeToggle({ theme, setTheme }: Props) {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center"
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
    >
      <span className="mr-1">{theme === "light" ? "🌙" : "☀️"}</span>
      <span className="hidden sm:inline">
        {theme === "light" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
