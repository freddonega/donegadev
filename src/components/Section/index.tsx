import { twMerge } from "tailwind-merge";
interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className = "" }: SectionProps) => {
  return (
    <section
      className={twMerge(
        `relative before:absolute before:top-0 before:h-px before:w-[200vw]
        before:bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_1px,_transparent_1px)]
        dark:before:bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)]
        before:bg-[length:4px_1px] before:-left-[100vw] after:absolute after:bottom-0 after:h-px
        after:w-[200vw] after:bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_1px,_transparent_1px)]
        dark:after:bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)]
        after:bg-[length:4px_1px] after:-left-[100vw] p-2 mb-8`,
        className
      )}
    >
      {children}
    </section>
  );
};
