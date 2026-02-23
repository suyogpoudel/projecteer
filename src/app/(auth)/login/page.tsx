import LoginIllustration from "@/components/auth/illustrations/login";
import LoginForm from "@/components/auth/login-form";

const Register = () => {
  return (
    <div className="flex gap-10 justify-center items-center w-full max-md:flex-col-reverse py-10">
      <LoginIllustration />
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default Register;
