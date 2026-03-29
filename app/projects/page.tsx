import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "Dev Overflow",
    description:
      "A social platform where developers can share experiences, ask questions, and get help from the community.",
    image: "/images/devflow.svg",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portnotes",
    description:
      "A personal portfolio and notes site built with Next.js and MDX, featuring a docs-style notes section and blog.",
    image: "/images/computerhello.svg",
    tags: ["Next.js", "MDX", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Git Explorer",
    description:
      "A tool to explore GitHub repositories, view commit history, and visualize contributor activity in real time.",
    image: "/images/git.svg",
    tags: ["React", "Node.js", "Express.js", "GitHub API"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="py-[70px]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-[100px] mb-[60px]">
          <div className="lg:w-1/2 mb-[40px] lg:mb-0">
            <h2 className="text-[45px] sm:text-[73px] font-display text-primary dark:text-primary-light max-lg:text-center">
              Projects
            </h2>
            <p className="mb-[24px] max-lg:text-center font-inter font-normal text-muted-foreground">
              A collection of things I've built — from full-stack apps to dev
              tools. Each project is a chance to learn something new and ship
              something real.
            </p>
            <p className="max-lg:text-center font-inter font-normal text-sm text-muted-foreground">
              Technologies I work with:
            </p>
            <div className="flex max-lg:justify-center flex-wrap gap-2 mt-3">
              {["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Docker", "Git"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-inter border border-border bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="lg:w-1/2 hidden lg:flex justify-center">
            <Image
              src="/images/code.svg"
              alt="code illustration"
              width={480}
              height={380}
              className="w-full h-auto max-w-[480px]"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="bg-muted flex items-center justify-center p-6 h-[200px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={160}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="text-lg font-semibold font-inter">{project.title}</h3>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs font-inter bg-primary/10 text-primary dark:text-primary-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <Link href={project.liveUrl} className="flex-1">
                    <Button className="w-full rounded-xl text-white font-inter text-sm h-9">
                      Live Demo
                    </Button>
                  </Link>
                  <Link href={project.githubUrl} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full rounded-xl font-inter text-sm h-9"
                    >
                      GitHub
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
