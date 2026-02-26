"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const VerifyEmailCard = () => {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [verified, setVerified] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;
    let interval: ReturnType<typeof setInterval> | null = null;

    const checkVerification = async () => {
      try {
        const session = await authClient.getSession({
          fetchOptions: { cache: "no-store" } as any,
        });
        const isVerified = Boolean((session as any)?.user?.emailVerified);

        if (!mounted) return;

        if (isVerified) {
          setVerified(true);
          router.replace("/ideas"); // redirect automatically
        } else {
          setVerified(false);
        }
      } catch (err) {
        if (!mounted) return;
        setVerified(false);
      } finally {
        if (mounted) setChecking(false);
      }
    };

    // Initial check
    checkVerification();

    // Poll every 3 seconds
    interval = setInterval(checkVerification, 3000);

    // Re-check when tab becomes visible
    const handleVisibility = () => {
      if (document.visibilityState === "visible") checkVerification();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      mounted = false;
      if (interval) clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [router]);

  // Loading / checking UI
  if (checking) {
    return (
      <div className="container mx-auto max-w-lg px-4 py-16 text-center">
        <Loader2 className="animate-spin mx-auto mb-2 h-6 w-6" />
        <p className="text-muted-foreground">Checking verification status…</p>
      </div>
    );
  }

  // Already verified (should redirect instantly)
  if (verified) {
    return (
      <div className="container mx-auto max-w-lg px-4 py-16 text-center">
        <p className="text-muted-foreground">Redirecting…</p>
      </div>
    );
  }

  // Default UI for unverified email
  return (
    <div className="container mx-auto max-w-lg px-4 py-16">
      <Card className="p-6">
        <h1 className="mb-2 text-2xl font-semibold">Verify your email</h1>
        <p className="mb-4 text-muted-foreground">
          We sent a verification link to your email. Please check your inbox
          (and spam folder) and click the link to verify your account. Once
          verified, you'll be redirected automatically.
        </p>
        <div className="flex items-center gap-3">
          <Button asChild>
            <Link href="/login">Back to login</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
          >
            <Link href="/">Go home</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default VerifyEmailCard;
