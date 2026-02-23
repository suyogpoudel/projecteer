import RegisterForm from "@/components/auth/register-form";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Register = () => {
  return (
    <div className="flex gap-10 justify-center items-center w-full max-md:flex-col py-10">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
      <Separator orientation="vertical" />
      <Image
        src={"/images/illustration_register.svg"}
        alt="Register"
        width={300}
        height={300}
        className="w-[85%]"
      />
    </div>
  );
};

export default Register;
