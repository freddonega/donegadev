import { Project } from "@/components/Project";
import { Section } from "@/components/Section";

import { Cross } from "@/components/Cross";

import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export const Projects = () => {
  return (
    <>
      <Section className="p-0 mb-2">
        <Cross side="top-left" />
        <h2 className="text-lg p-2">Projetos</h2>
      </Section>
      <Section className="p-0">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 xl:grid-cols-5">
          {projects.map((project, index) => (
            <Link key={index} to={`/project/${project.id}`}>
              <Project project={project} />
            </Link>
          ))}
        </div>
        <Cross side="bottom-right" />
      </Section>
    </>
  );
};
