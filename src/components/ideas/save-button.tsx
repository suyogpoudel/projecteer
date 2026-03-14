"use client";

import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { useOptimisticToggle } from "@/hooks/useOptimisticToggle";
import { saveProject } from "@/actions/project";
import { toast } from "sonner";

type Props = {
  projectId: string;
  initialSaves: number;
  hasSaved: boolean;
};

const SaveButton = ({ projectId, initialSaves, hasSaved }: Props) => {
  const { count, active, toggle, isPending } = useOptimisticToggle(
    {
      active: hasSaved,
      count: initialSaves,
    },
    async () => {
      const result = await saveProject(projectId);

      if (!result.success) {
        toast.error(result.message);
      }
    },
  );

  return (
    <div className="flex items-center gap-2">
      <p>
        <span className="text-primary text-lg font-bold">{count}</span> Saved
      </p>
      <Button
        variant={active ? "default" : "outline"}
        size={"icon"}
        onClick={toggle}
        disabled={isPending}
      >
        <Star
          className={` scale-110 ${active ? "fill-primary-foreground" : ""}`}
        />
      </Button>
    </div>
  );
};

export default SaveButton;
