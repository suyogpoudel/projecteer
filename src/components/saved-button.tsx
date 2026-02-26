import Link from "next/link";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

const SavedButton = () => {
  return (
    <Button
      asChild
      size="icon"
      variant={"outline"}
    >
      <Link href="/saved">
        <Star />
      </Link>
    </Button>
  );
};

export default SavedButton;
