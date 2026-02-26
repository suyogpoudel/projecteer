import UsernameForm from "@/components/auth/username-form";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const CreateUsername = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  if (session.user.username) {
    redirect("ideas");
  }

  return <UsernameForm />;
};

export default CreateUsername;
