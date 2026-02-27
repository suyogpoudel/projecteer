import Link from "next/link";
import { Button } from "./ui/button";
import { IconBrandGithubFilled } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="bg-card p-6 border-t border-border shadow-sm text-card-foreground flex justify-between max-md:flex-col gap-10">
      <div className="flex flex-col gap-2 max-md:flex-row max-md:justify-between max-md:items-center">
        <Link
          href="/"
          className="text-xl text-primary font-mono font-semibold tracking-wider hover:text-primary/75 transition-colors duration-300"
        >
          Projecteer
        </Link>
        <p className="text-muted-foreground">&copy; Projecteer | 2026</p>
      </div>

      <div className="flex flex-col gap-2 max-md:flex-row-reverse max-md:justify-between max-md:items-center">
        <Button
          asChild
          variant={"outline"}
          size={"lg"}
        >
          <Link
            href={"/"}
            className="flex items-center gap-1"
            target="_blank"
          >
            <IconBrandGithubFilled />
            View on Github
          </Link>
        </Button>
        <p>
          Developed By:{" "}
          <Link
            href={"https://github.com/suyogpoudel/projecteer"}
            className="text-primary hover:underline underline-offset-4"
            target="_blank"
          >
            Suyog Poudel
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
