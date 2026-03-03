"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

const StarRating = ({ value, onChange }: Props) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((val) => (
        <Star
          key={val}
          onClick={() => onChange(val)}
          onMouseEnter={() => setHover(val)}
          onMouseLeave={() => setHover(0)}
          className={cn(
            "w-7 h-7 cursor-pointer transition duration-300",
            val <= (hover || value)
              ? "fill-yellow-400 text-yellow-400"
              : "text-muted-foreground",
          )}
        />
      ))}
    </div>
  );
};

export default StarRating;
