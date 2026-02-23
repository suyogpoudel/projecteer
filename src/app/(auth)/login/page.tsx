import LoginForm from "@/components/auth/login-form";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Register = () => {
  return (
    <div className="flex gap-10 justify-center items-center w-full max-md:flex-col-reverse py-10">
      <Image
        src={"/images/illustration_login.svg"}
        alt="Register"
        width={300}
        height={300}
        className="w-[85%]"
      />
      <Separator orientation="vertical" />
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default Register;
