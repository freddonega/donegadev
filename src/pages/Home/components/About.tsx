import { Section } from "@/components/Section";
import { Cross } from "@/components/Cross";
import FredDonegaPhoto from "@/assets/fred-donega.png";

export const About = () => {
  return (
    <Section className="p-0 mb-8">
      <Cross side="top-left" />
      <div className="flex flex-col xl:flex-row items-center">
        <div className="text-gray-300 px-2 max-w-3xl flex items-center min-h-96">
          <div>
            <p className="text-xs italic mb-10 text-right text-gray-500">
              "Quando criança desmontava meus brinquedos, tentando descobrir como funcionavam.
              <br /> Hoje percebo que foi a curiosidade que me trouxe até aqui."
            </p>
            <h2 className="text-2xl mb-2">Olá, mundo!</h2>

            <p>Me chamo Luiz Alfredo, mais conhecido como Fred Donega.</p>
            <p>
              Sou um desenvolvedor fullstack apaixonado por tecnologia, com experiência em diversas
              stacks modernas e soluções escaláveis.
            </p>
          </div>
        </div>
        <div
          className="relative flex-1 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px]
            bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 px-10
            mt-10 xl:mt-0 w-full"
        >
          <div className="relative rounded-t-xl overflow-hidden xl:-mt-20 max-w-md mx-auto">
            <img src={FredDonegaPhoto} alt="Fred Donega" className="h-auto" />
          </div>

          <Cross side="bottom-right" />
        </div>
      </div>
    </Section>
  );
};
