"use client";

import { loginUser } from "@/actions/auth";
import { LoginData, loginSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import SocialAuth from "./social-auth";

const LoginForm = () => {
  const router = useRouter();

  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginData) => {
    const result = await loginUser(data);

    if (!result.success) {
      toast.error(result.message);
    }

    if (result.success) {
      toast.success("Logged in successfully");
      form.reset();
      router.push("/ideas");
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className=" w-full"
    >
      <FieldGroup>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                type="email"
                id="email"
                placeholder="johndoe@example.com"
                {...field}
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                {...field}
                type="password"
                placeholder="Enter a strong password"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            "Login"
          )}
        </Button>

        <FieldSeparator>Or continue with</FieldSeparator>

        <SocialAuth />
      </FieldGroup>
    </form>
  );
};

export default LoginForm;
