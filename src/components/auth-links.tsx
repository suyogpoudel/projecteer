import Link from "next/link";
import { Button } from "./ui/button";
import { getSession } from "@/lib/auth";
import LogoutButton from "./logout-button";

const AuthLinks = async ({ session }: { session: any }) => {
  return (
    <div className="flex items-center gap-2">
      {!session ? (
        <>
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
        </>
      ) : (
        <LogoutButton />
      )}
    </div>
  );
};

export default AuthLinks;
