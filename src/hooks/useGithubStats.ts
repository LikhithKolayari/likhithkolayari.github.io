import { useEffect, useState } from "react";

interface GithubStats {
  followers: number;
  public_repos: number;
  name: string;
  avatar_url: string;
}

export function useGithubStats(username: string) {
  const [stats, setStats] = useState<GithubStats | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(console.error);
  }, [username]);

  return stats;
}
