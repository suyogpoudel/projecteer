import { Badge } from "../ui/badge";

const TechStack = ({ techStack }: { techStack: string[] }) => {
  return (
    <div className="flex flex-col max-md:w-full w-[85%]  gap-4 p-4 md:border-l max-md:border-t border-border">
      <p className="font-bold text-primary text-lg">Tech Stack</p>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
