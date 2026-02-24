"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VerifyEmailPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [verified, setVerified] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;
    let interval: ReturnType<typeof setInterval> | null = null;

    const checkVerification = async () => {
      try {
        const session = await authClient.getSession({
          fetchOptions: { cache: "no-store" },
        } as any);
        const isVerified = Boolean((session as any)?.user?.emailVerified);

        if (!mounted) return;

        if (isVerified) {
          setVerified(true);
          router.replace("/ideas");
        } else {
          setVerified(false);
        }
      } catch (e) {
        if (!mounted) return;
        setVerified(false);
      } finally {
        if (mounted) setChecking(false);
      }
    };

    // Initial check
    checkVerification();

    // Short polling for a minute to catch verification soon after user clicks the email link
    interval = setInterval(checkVerification, 3000);
    const stopPolling = setTimeout(() => {
      if (interval) clearInterval(interval);
      interval = null;
    }, 60_000);

    // Re-check when tab gains focus (user returns after clicking email link)
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        checkVerification();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      mounted = false;
      document.removeEventListener("visibilitychange", onVisibility);
      if (interval) clearInterval(interval);
      clearTimeout(stopPolling);
    };
  }, [router]);

  if (checking) {
    return (
      <div className="container mx-auto max-w-lg px-4 py-16">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Checking verification status…</span>
        </div>
      </div>
    );
  }

  if (verified) {
    return (
      <div className="container mx-auto max-w-lg px-4 py-16 text-center">
        <p className="text-muted-foreground">Redirecting…</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-lg px-4 py-16">
      <Card className="p-6">
        <h1 className="mb-2 text-2xl font-semibold">Verify your email</h1>
        <p className="mb-4 text-muted-foreground">
          We sent a verification link to your email. Please check your inbox (and spam folder) and click the link to verify your account. Once verified, you'll be redirected automatically.
        </p>
        <div className="flex items-center gap-3">
          <Button asChild>
            <Link href="/login">Back to login</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/">Go home</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
