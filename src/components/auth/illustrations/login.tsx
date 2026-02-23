"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

const LoginIllustration = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="w-[85%] max-w-md aspect-square mx-auto relative">
      <Image
        src={`/images/illustration_login_${resolvedTheme}.svg`}
        alt="Login Illustration"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default LoginIllustration;
