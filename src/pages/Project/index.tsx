import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { Section } from "@/components/Section";
import { Cross } from "@/components/Cross";
import { Layout } from "@/pages/_Layout";
import { SeeMore } from "./components/SeeMore";
import { useEffect } from "react";
import { useState } from "react";
import { FaX } from "react-icons/fa6";

export const Project = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  if (!project) {
    return <div>Project not found</div>;
  }
  useEffect(() => {
    const scrollableElements = document.querySelectorAll("div");

    scrollableElements.forEach((element) => {
      (element as HTMLElement).scrollTo({ top: 0, behavior: "smooth" });
    });
  }, [projectId]);
  return (
    <Layout>
      <Section>
        <h2 className="mt-4 px-2 text-[2.5rem]/10 font-medium tracking-tighter max-sm:px-4 2xl:mt-0">
          {project.name}
        </h2>
      </Section>
      <Section className="p-0">
        <Cross side="top-left" />
        <Cross side="bottom-right" />
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1rem_2fr] items-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-2">
            {project.gallery?.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl outline outline-gray-950/5 ${
                index === 0 ? "lg:col-span-3 aspect-w-3 aspect-h-1" : "aspect-w-1 aspect-h-1" }`}
                onClick={() => openModal(image)}
              >
                <img
                  src={image}
                  alt={`${project.name} ${index + 1}`}
                  className="object-cover rounded-lg w-full h-full cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div
            className="col-start-2 border-x border-dashed border-x-(--pattern-fg) lg:block w-full h-full
              bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]
              bg-[size:7px_7px] bg-fixed [--pattern-fg:var(--color-black)]/5
              dark:[--pattern-fg:var(--color-white)]/10"
          />

          <div
            className="text-base/7 text-gray-600 dark:text-gray-400 p-2"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </div>
      </Section>
      <Section className="p-0">
        <div
          className="bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]
            bg-[size:7px_7px] bg-fixed [--pattern-fg:var(--color-black)]/5
            dark:[--pattern-fg:var(--color-white)]/10"
        >
          <h2 className="text-lg p-2">Tecnologias usadas no projeto:</h2>
          <div className="px-2 pb-2 flex gap-2">
            {project.techs &&
              project.techs?.map((tech, key) => (
                <div
                  className="flex gap-2 bg-gray-800 rounded-lg outline outline-white/5 p-4 items-center"
                  key={key}
                >
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center">
                    <tech.icon className="text-gray-600 dark:text-gray-400" size={"100%"} />
                  </div>
                  <div>
                    <span className="font-bold text-gray-600 dark:text-gray-400">{tech.name}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Section>
      <SeeMore without={project.id} />
      {modalIsOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity
            duration-300 ease-in-out"
        >
          <div
            className="relative bg-gra-850 rounded-lg shadow-lg max-w-3xl w-full p-4 transform transition-transform
              duration-300 ease-in-out scale-95"
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-400 cursor-pointer"
            >
              <FaX />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Zoomed"
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};
