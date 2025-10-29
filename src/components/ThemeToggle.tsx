interface Props {
  theme: string;
  setTheme: (t: string) => void;
}

export default function ThemeToggle({ theme, setTheme }: Props) {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border px-3 py-1 rounded-full text-sm"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
