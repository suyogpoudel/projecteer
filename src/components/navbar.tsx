import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-card text-card-foreground p-6 border-b border-border shadow-sm items-center">
      <Link
        href="/"
        className="text-xl text-primary font-mono font-semibold tracking-wider hover:text-primary/75 transition-colors duration-300"
      >
        Projecteer
      </Link>

      <div className="flex items-center gap-2">
        <Button
          asChild
          size={"lg"}
        >
          <Link href={"/register"}>Register</Link>
        </Button>
        <Button
          asChild
          size={"lg"}
          variant={"secondary"}
        >
          <Link href={"/login"}>Login</Link>
        </Button>
        <Separator orientation="vertical" />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
