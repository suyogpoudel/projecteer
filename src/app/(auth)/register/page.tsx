import RegisterIllustration from "@/components/auth/illustrations/register";
import RegisterForm from "@/components/auth/register-form";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 w-full">
      <h1 className="font-sans font-extrabold text-3xl text-primary tracking-wider mb-10 text-center">
        Register to Projecteer
      </h1>
      <div className="flex justify-center items-center max-md:flex-col gap-10 w-full">
        <div className="w-full max-w-md">
          <RegisterForm />
          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              Login
            </Link>
          </p>
        </div>
        <RegisterIllustration />
      </div>
    </div>
  );
};

export default Register;
