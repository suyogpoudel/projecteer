import IdeaForm from "@/components/ideas/idea-form";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const Create = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col justify-center items-center py-10 w-full">
      <h1 className="font-sans font-extrabold text-3xl text-primary tracking-wider mb-10 text-center">
        Share an Idea
      </h1>

      <IdeaForm />
    </div>
  );
};

export default Create;
