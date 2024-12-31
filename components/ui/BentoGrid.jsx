import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 lg:grid-cols-3 gap-4 ",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-black border border-white/20 justify-between flex flex-col space-y-4",
        className
      )}>
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div
          className="body-2  dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
      </div>
    </div>)
  );
};
