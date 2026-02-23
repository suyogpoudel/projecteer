import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center flex flex-col gap-5 max-w-2xl">
        <h1 className="font-sans font-extrabold text-4xl text-primary tracking-wider capitalize">
          Your next{" "}
          <span className="italic underline underline-offset-4 font-mono">
            project
          </span>{" "}
          starts here
        </h1>
        <p className="text-xl text-muted-foreground">
          Turn your curiosity into action. Discover, share, and create projects
          that actually matter.
        </p>
      </div>
      <div className="flex gap-10 items-center mt-10">
        <Button
          asChild
          size="lg"
        >
          <Link href="/browse">Browse Ideas</Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="secondary"
        >
          <Link href="/create">Share Your Idea</Link>
        </Button>
      </div>

      <p className="text-center italic mt-10">
        Fun, absurd, and genuinely enjoyable projects you'll love building and
        using.
      </p>
    </div>
  );
};

export default Home;
