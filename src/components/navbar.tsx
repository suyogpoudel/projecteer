import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-card text-card-foreground p-6 border-b border-border shadow-sm">
      <Link
        href="/"
        className="text-xl text-primary font-mono font-semibold tracking-wider hover:text-primary/75 transition-colors duration-300"
      >
        Projecter
      </Link>

      <ThemeToggle />
    </div>
  );
};

export default Navbar;
