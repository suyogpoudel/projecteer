"use client";

import { logoutUser } from "@/actions/auth";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const onLogout = async () => {
    const result = await logoutUser();

    if (result.success) {
      toast.success(result.message ?? "Logged out successfully");
      router.refresh();
    } else {
      toast.error(result.message ?? "Something went wrong, Try again");
    }
  };

  return (
    <Button
      size={"lg"}
      variant={"destructive"}
      onClick={onLogout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
