"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, ExternalLink, Instagram, MessageCircle } from "lucide-react";
import CodeCard from "@/components/CodeCard"; // Import the card component

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/TAKI-KARTHIK/repos"
        );
        const data = await response.json();
        setProjects(data.slice(0, 6)); // Get first 6 projects
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0911] to-[#1a0e2a] text-[#e5e5e5]">
      <header className="container mx-auto px-4 pt-20 pb-32 text-center">
        <p className="text-[#9ca3af] text-xl mb-2">Hello! Call me,</p>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-indigo-300 text-transparent bg-clip-text">KARTHIK R</h1>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-indigo-300 text-transparent bg-clip-text">
          Web Developer
        </h2>
        <br />
        <div className="flex justify-center gap-6 mb-16">
          <a
            href="#"
            className="text-[#9ca3af] hover:text-[#a855f7] transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="text-[#9ca3af] hover:text-[#a855f7] transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9ca3af] hover:text-[#e4405f] transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://discord.com/users/your_discord_id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9ca3af] hover:text-[#5865F2] transition-colors"
          >
            <MessageCircle size={24} />
          </a>
        </div>
        {/* Add the new CodeCard component here */}
        <CodeCard />
      </header>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-semibold text-center mb-16 text-[#e5e5e5]">
          My Projects
        </h2>

        {loading ? (
          <div className="flex justify-center">
            <div className="w-16 h-16 border-4 border-[#a855f7] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#120c1d] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-[#e5e5e5]">
                    {project.name}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9ca3af] hover:text-[#a855f7] transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9ca3af] hover:text-[#a855f7] transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[#9ca3af] mb-4">
                  {project.description || "No description available"}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-[#2a1d3a] text-[#e5e5e5] rounded-full">
                    {project.language || "N/A"}
                  </span>
                  <span className="px-3 py-1 text-sm bg-[#2a1d3a] text-[#e5e5e5] rounded-full">
                    ★ {project.stargazers_count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Portfolio;
