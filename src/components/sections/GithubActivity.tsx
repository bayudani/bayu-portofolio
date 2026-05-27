"use client";

import { GitHubCalendar } from "react-github-calendar";
import { Reveal } from "@/src/components/shared/Reveal";
import { useEffect, useState } from "react";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

export function GithubActivity() {
  const [user, setUser] = useState<GitHubUser | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/bayudani")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => {});
  }, []);

  const theme = {
    light: ["rgba(255,255,255,0.04)", "#1a6b2e", "#1f8c3a", "#27b34a", "#3ddb5e"],
    dark: ["rgba(255,255,255,0.04)", "#1a6b2e", "#1f8c3a", "#27b34a", "#3ddb5e"],
  };

  return (
    <section id="github-activity" className="relative py-0 px-4 z-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <Reveal>
          <div className="glass rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white mb-6">Contribution Graph</h3>
            <GitHubCalendar
              username="bayudani"
              theme={theme}
              fontSize={12}
              blockSize={11}
              blockMargin={3}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
            />
          </div>
        </Reveal>

        {user && (
          <Reveal delay={0.1}>
            <div className="grid grid-cols-3 gap-4">
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{user.public_repos}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Repositories</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{user.followers}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Followers</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{user.following}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Following</div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
