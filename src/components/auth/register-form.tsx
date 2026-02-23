"use client";

import { RegisterData, registerSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const form = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });
  return <div>RegisterForm</div>;
};

export default RegisterForm;
