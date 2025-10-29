import { Fragment } from "react";
import { useGithubStats } from "../hooks/useGithubStats";

export default function Home() {
  const stats = useGithubStats("likhithkolayari");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      {stats ? (
        <Fragment>
          <img
            src={stats.avatar_url}
            alt={stats.name}
            className="w-24 h-24 rounded-full mb-4"
          />
          <h1 className="text-2xl font-bold">{stats.name}</h1>
          <p className="text-gray-500 mt-2">
            {stats.followers} Followers • {stats.public_repos} Repositories
          </p>
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
