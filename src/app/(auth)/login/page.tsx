import LoginIllustration from "@/components/auth/illustrations/login";
import LoginForm from "@/components/auth/login-form";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 w-full">
      <h1 className="font-sans font-extrabold text-3xl text-primary tracking-wider mb-10 text-center">
        Login to Projecteer
      </h1>
      <div className="flex justify-center items-center max-md:flex-col gap-10 w-full">
        <LoginIllustration />
        <div className="w-full max-w-md">
          <LoginForm />
          <p className="text-center mt-5">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
