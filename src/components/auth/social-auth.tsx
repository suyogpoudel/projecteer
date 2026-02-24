"use client";

import { signInSocial, SocialProvider } from "@/actions/auth";
import { Button } from "../ui/button";
import {
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import { toast } from "sonner";
import { useState } from "react";
import { LoadingSwap } from "../ui/loading-swap";
import { Loader2 } from "lucide-react";

const SocialAuth = () => {
  const [loading, setLoading] = useState<SocialProvider | null>(null);

  const signIn = async (provider: SocialProvider) => {
    setLoading(provider);

    const result = await signInSocial(provider);

    setLoading(null);

    if (!result.success) {
      toast.error(result.message);
    }

    if (result.success) {
      toast.success("Authenticated Successfully");
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <Button
        variant={"secondary"}
        className="flex gap-2 items-center w-full"
        onClick={() => signIn("github")}
        disabled={loading === "github"}
      >
        {loading === "github" ? (
          <Loader2 className="animate-spin" />
        ) : (
          <>
            <IconBrandGithubFilled />
            Continue with GitHub
          </>
        )}
      </Button>
      <Button
        variant={"secondary"}
        className="flex gap-2 items-center w-full"
        onClick={() => signIn("google")}
        disabled={loading === "google"}
      >
        {loading === "google" ? (
          <Loader2 className="animate-spin" />
        ) : (
          <>
            <IconBrandGoogleFilled />
            Continue with Google
          </>
        )}
      </Button>
    </div>
  );
};

export default SocialAuth;
