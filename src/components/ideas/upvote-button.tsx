"use client";

import { ArrowBigUp } from "lucide-react";
import { Button } from "../ui/button";
import { useOptimisticToggle } from "@/hooks/useOptimisticToggle";
import { upvoteProject } from "@/actions/project";
import { toast } from "sonner";

type Props = {
  projectId: string;
  initialUpvotes: number;
  hasUpvoted: boolean;
};

const UpvoteButton = ({ projectId, initialUpvotes, hasUpvoted }: Props) => {
  const { count, active, toggle, isPending } = useOptimisticToggle(
    {
      active: hasUpvoted,
      count: initialUpvotes,
    },
    async () => {
      const result = await upvoteProject(projectId);

      if (!result.success) {
        toast.error(result.message);
      }
    },
  );

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={active ? "default" : "outline"}
        size={"icon"}
        onClick={toggle}
        disabled={isPending}
      >
        <ArrowBigUp
          className={` scale-110 ${active ? "fill-primary-foreground" : ""}`}
        />
      </Button>
      <p>
        <span className="text-primary text-lg font-bold">{count}</span> Upvotes
      </p>
    </div>
  );
};

export default UpvoteButton;
