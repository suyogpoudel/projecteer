import RegisterIllustration from "@/components/auth/illustrations/register";
import RegisterForm from "@/components/auth/register-form";

const Register = () => {
  return (
    <div className="flex gap-10 justify-center items-center w-full max-md:flex-col py-10">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
      <RegisterIllustration />
    </div>
  );
};

export default Register;
