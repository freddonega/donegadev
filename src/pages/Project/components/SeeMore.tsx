import { Cross } from "@/components/Cross";
import { Project } from "@/components/Project";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

interface SeeMoreProps {
  without?: string;
}

export const SeeMore = ({ without = "" }: SeeMoreProps) => {
  const filteredProjects = projects.filter((project) => project.id !== without);
  return (
    <>
      <Section className="p-0 mb-2">
        <Cross side="top-left" />
        <h2 className="text-lg p-2">Veja também:</h2>
      </Section>
      <Section className="p-0">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
          {filteredProjects.map((project, index) => (
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
