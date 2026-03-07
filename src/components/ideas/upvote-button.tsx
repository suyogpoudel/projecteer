"use client";

import { ArrowBigUpDash } from "lucide-react";
import { Button } from "../ui/button";

const UpvoteButton = ({ project, user }: { project: any; user: any }) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant={"outline"}
        size={"icon"}
      >
        <ArrowBigUpDash />
      </Button>
      <p>
        <span className="text-primary text-lg font-bold">
          {project.upvotes}
        </span>{" "}
        Upvotes
      </p>
    </div>
  );
};

export default UpvoteButton;
