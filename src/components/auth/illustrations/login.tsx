"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

const LoginIllustration = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Image
      src={`/images/illustration_login_${resolvedTheme}.svg`}
      alt="Login Illustration"
      width={300}
      height={300}
      className="w-[85%]"
    />
  );
};

export default LoginIllustration;
