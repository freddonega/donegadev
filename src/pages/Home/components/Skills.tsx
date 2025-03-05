import { Section } from "@/components/Section";
import { FaNodeJs } from "react-icons/fa";
import { FaCss3Alt, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact, FaAws } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { DiPostgresql } from "react-icons/di";
import { SiFirebase, SiTypescript, SiPython } from "react-icons/si";

export const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, label: "HTML / HTML5", year: 2010 },
    { icon: <FaCss3Alt />, label: "CSS / CSS3", year: 2010 },
    { icon: <FaJs />, label: "Javascript", year: 2010 },
    { icon: <FaPhp />, label: "PHP", year: 2012 },
    { icon: <GrMysql />, label: "MySQL", year: 2012 },
    { icon: <FaLaravel />, label: "Laravel", year: 2016 },
    { icon: <DiPostgresql />, label: "PostgreSQL", year: 2016 },
    { icon: <FaReact />, label: "React JS", year: 2019 },
    { icon: <FaReact />, label: "React Native", year: 2019 },

    { icon: <FaNodeJs />, label: "Node Js", year: 2019 },
    { icon: <SiTypescript />, label: "Typescript", year: 2020 },
    { icon: <SiFirebase />, label: "Firebase", year: 2020 },
    { icon: <SiPython />, label: "Python", year: 2023 },
    { icon: <FaAws />, label: "AWS Cloudformation", year: 2023 },
  ];
  return (
    <Section className="p-0 mb-8">
      <div
        className="w-full bg-gray-950/5 p-2
          bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]
          bg-[size:7px_7px] bg-fixed [--pattern-fg:var(--color-black)]/5 lg:block
          dark:[--pattern-fg:var(--color-white)]/10"
      >
        <h2 className="text-lg mb-2">Minhas Skills</h2>
        <div
          className="@container isolate flex flex-col gap-2 overflow-hidden rounded-2x p-5 outline bg-gray-800
            outline-white/10 col-span-full md:col-span-15 rounded-2xl"
        >
          <ul className="relative mt-2 grid grid-cols-1 sm:grid-cols-4 gap-4 text-gray-300">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center gap-5">
                {skill.icon}{" "}
                <span>
                  {skill.label} <span className="text-xs text-gray-500">(Desde {skill.year})</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
