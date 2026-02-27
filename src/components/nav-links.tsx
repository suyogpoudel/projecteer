"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SavedButton from "./saved-button";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import LogoutButton from "./logout-button";

type NavLink = {
  href: string;
  label: string;
};

const navlinks: NavLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/ideas",
    label: "Ideas",
  },
  {
    href: "/profile",
    label: "Profile",
  },
  {
    href: "/create",
    label: "Create",
  },
];

const NavLinks = ({ session }: { session: any }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const renderLinks = () => {
    return navlinks.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          onClick={() => setIsOpen(false)}
          className={`hover:text-primary transition-colors px-1 duration-200 ${pathname === link.href ? "text-primary border-b-2 border-primary text-lg" : ""}`}
        >
          {link.label}
        </Link>
      </li>
    ));
  };

  return (
    <div>
      <ul className="flex gap-10 max-lg:gap-5 items-center max-md:hidden">
        {renderLinks()}
      </ul>

      <div className="flex items-center gap-2 md:hidden">
        <SavedButton />
        <ThemeToggle />
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => setIsOpen(!isOpen)}
          className="z-100 relative"
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
              }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="md:hidden fixed top-0 right-0 z-50 w-[75%] h-screen bg-card shadow-sm border-l border-border px-5 py-10 flex flex-col justify-evenly"
            >
              <ul className="flex flex-col gap-10 items-center">
                {renderLinks()}
              </ul>

              <div className="flex flex-col items-center gap-10">
                {session ? (
                  <LogoutButton />
                ) : (
                  <>
                    <Button
                      asChild
                      size={"lg"}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={"/register"}>Register</Link>
                    </Button>
                    <Button
                      asChild
                      size={"lg"}
                      variant={"secondary"}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={"/login"}>Login</Link>
                    </Button>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavLinks;
