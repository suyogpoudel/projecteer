import VerifyEmailCard from "@/components/auth/verify-email";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const VerifyEmail = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  if (session.user.emailVerified) {
    redirect("/ideas");
  }

  return <VerifyEmailCard />;
};

export default VerifyEmail;
