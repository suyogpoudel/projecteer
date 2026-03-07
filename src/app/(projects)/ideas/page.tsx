import IdeaCard from "@/components/ideas/idea-card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

const Ideas = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 w-full">
      <h1 className="font-sans font-extrabold text-3xl text-primary tracking-wider mb-10 text-center">
        Browse Ideas
      </h1>

      <div className="w-full md:w-[50%] mb-10 flex justify-end">
        <Button
          asChild
          size="lg"
        >
          <Link
            href="/create"
            className="flex items-center gap-2"
          >
            <PlusCircle />
            Create New Idea
          </Link>
        </Button>
      </div>

      <IdeaCard />
    </div>
  );
};

export default Ideas;
