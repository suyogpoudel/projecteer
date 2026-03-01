import IdeaCard from "@/components/ideas/idea-card";

const Ideas = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 w-full">
      <h1 className="font-sans font-extrabold text-3xl text-primary tracking-wider mb-10 text-center">
        Browse Ideas
      </h1>

      <IdeaCard />
    </div>
  );
};

export default Ideas;
