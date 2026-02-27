import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Separator } from "./ui/separator";
import AuthLinks from "./auth-links";
import NavLinks from "./nav-links";
import SavedButton from "./saved-button";
import { getSession } from "@/lib/auth";

const Navbar = async () => {
  const session = await getSession();

  return (
    <div className="flex justify-between bg-card text-card-foreground p-6 border-b border-border shadow-sm items-center">
      <Link
        href="/"
        className="text-xl text-primary font-mono font-semibold tracking-wider hover:text-primary/75 transition-colors duration-300"
      >
        Projecteer
      </Link>

      <NavLinks session={session} />

      <div className="flex items-center gap-2 max-md:hidden">
        <AuthLinks session={session} />
        <SavedButton />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
