export interface IProject {
  project: {
    id: string;
    name: string;
    description: string;
    content: string;
    image: string;
    gallery?: string[];
    techs?: {
      name: string;
      icon: React.ElementType;
    }[];
  };
}

export const Project = ({ project }: IProject) => {
  return (
    <div
      className="h-full flex flex-col group dark:border-bg-white/10 relative isolate border-x border-dashed
        border-gray-950/5 transition-colors hover:bg-gray-950/5 max-sm:border-0
        sm:max-lg:nth-[2n]:border-r-0 sm:max-lg:nth-[2n+1]:border-l-0 lg:max-xl:nth-[3n]:border-r-0
        lg:max-xl:nth-[3n+1]:border-l-0 xl:nth-[4n]:border-r-0 xl:nth-[4n+1]:border-l-0 dark:border-white/10
        dark:hover:bg-white/2.5"
    >
      <div
        className="p-2 before:hidden after:hidden xl:[.grid>div:nth-child(4n+1)_&]:before:block
          xl:[.grid>div:nth-child(4n+1)_&]:after:block lg:max-xl:[.grid>div:nth-child(3n+1)_&]:before:block
          lg:max-xl:[.grid>div:nth-child(3n+1)_&]:after:block
          sm:max-lg:[.grid>div:nth-child(2n+1)_&]:before:block
          sm:max-lg:[.grid>div:nth-child(2n+1)_&]:after:block max-sm:before:block max-sm:after:block relative
          before:absolute before:top-0 before:h-px before:w-[200vw]
          before:bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_1px,_transparent_1px)]
          dark:before:bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)]
          before:bg-[length:4px_1px] before:-left-[100vw] after:absolute after:bottom-0 after:h-px
          after:w-[200vw] after:bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_1px,_transparent_1px)]
          dark:after:bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)]
          after:bg-[length:4px_1px] after:-left-[100vw]"
      >
        <div className="relative aspect-auto overflow-hidden rounded-xl outline outline-gray-950/5">
          <img src={project.image} alt={project.name} className="object-cover" />
        </div>
      </div>
      <div
        className="flex-1 flex flex-col justify-between mt-2 p-2 before:hidden after:hidden
          xl:[.grid>div:nth-child(4n+1)_&]:before:block xl:[.grid>div:nth-child(4n+1)_&]:after:block
          lg:max-xl:[.grid>div:nth-child(3n+1)_&]:before:block
          lg:max-xl:[.grid>div:nth-child(3n+1)_&]:after:block
          sm:max-lg:[.grid>div:nth-child(2n+1)_&]:before:block
          sm:max-lg:[.grid>div:nth-child(2n+1)_&]:after.block max-sm:before:block max-sm:after:block relative
          before:absolute before:top-0 before:h-px before:w-[200vw]
          before:bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_1px,_transparent_1px)]
          dark:before:bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)]
          before:bg-[length:4px_1px] before:-left-[100vw] after:absolute after:bottom-0 after:h-px
          after:w-[200vw] after:bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_1px,_transparent_1px)]
          dark:after:bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)]
          after:bg-[length:4px_1px] after:-left-[100vw]"
      >
        <span>{project.name}</span>
        {project.techs && (
          <div className="flex gap-2 mt-2">
            {project.techs.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="flex items-center text-xs gap-1 text-gray-400">
                  {IconComponent && <IconComponent />}
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
