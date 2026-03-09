"use client";

import { ArrowBigUpDash } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  projectId: string;
  initialUpvotes: number;
  hasUpvoted: boolean;
};

const UpvoteButton = ({ projectId, initialUpvotes, hasUpvoted }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant={"outline"}
        size={"icon"}
      >
        <ArrowBigUpDash />
      </Button>
      <p>
        <span className="text-primary text-lg font-bold">{initialUpvotes}</span>{" "}
        Upvotes
      </p>
    </div>
  );
};

export default UpvoteButton;
