import RegisterForm from "@/components/auth/register-form";
import Image from "next/image";

const Register = () => {
  return (
    <div className="flex gap-10 justify-center items-center w-full max-md:flex-col">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
      <Image
        src={"/images/illustration_login.svg"}
        alt="Register"
        width={300}
        height={300}
        className="w-full"
      />
    </div>
  );
};

export default Register;
