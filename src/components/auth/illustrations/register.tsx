"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

const RegisterIllustration = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Image
      src={`/images/illustration_register_${resolvedTheme}.svg`}
      alt="Illustration"
      width={300}
      height={300}
      className="w-[85%]"
    />
  );
};

export default RegisterIllustration;
