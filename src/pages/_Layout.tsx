import Logo from "@/assets/logo.svg?react";
import { Section } from "@/components/Section";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  const year = new Date().getFullYear();
  return (
    <div className="max-w-screen overflow-x-hidden max-h-screen">
      <div
        className="grid grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:2.5rem]
          grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] relative"
      >
        <div
          className="col-start-1 row-span-full row-start-1 border-x border-dashed border-x-(--pattern-fg)
            bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 block
            dark:[--pattern-fg:var(--color-white)]/5"
        />

        <div className="text-gray-950 dark:text-white">
          <div className="mt-5">
            <div className="mx-2 font-mono text-sm/7 font-medium tracking-widest text-gray-500 uppercase max-md:text-center">
              Desenvolvedor Fullstack | 15 anos de experiência
            </div>
            <Section className="my-8 py-0 px-0 flex max-md:justify-center">
              <Link to="/" className="inline-block -my-5 mx-2">
                <Logo className="h-28 fill-gray-400" />
              </Link>
            </Section>
          </div>
          {children}
          <Section className="my-8 py-0 px-0 flex flex-col md:flex-row md:justify-between">
            <div
              className="mx-2 text-sm/7 text-gray-500 dark:text-gray-400 text-left flex gap-4 items-center max-md:flex-col
                max-md:gap-0"
            >
              <div className="flex gap-2 items-center">
                <FaEnvelope className="inline-block h-5 w-5" />
                <a href="mailto:freddonega@gmail.com" className="hover:underline">
                  freddonega@gmail.com
                </a>
              </div>

              <div className="flex gap-2 items-center">
                <FaWhatsapp className="inline-block h-5 w-5" />
                <a href="http://wa.me/5521991432581" className="hover:underline">
                  +55 21 99143-2581
                </a>
              </div>
            </div>
            <div className="mx-2 text-sm/7 text-gray-500 dark:text-gray-400 text-right max-md:text-center max-md:mt-4">
              © {year} - Feito com <span className="text-red-500 dark:text-red-400">❤</span>
            </div>
          </Section>
        </div>

        <div
          className="row-span-full row-start-1 border-x border-dashed border-x-(--pattern-fg) bg-[size:10px_10px]
            bg-fixed [--pattern-fg:var(--color-black)]/5 col-start-3 block
            dark:[--pattern-fg:var(--color-white)]/5"
        />
      </div>
    </div>
  );
};
