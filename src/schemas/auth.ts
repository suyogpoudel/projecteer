import { z } from "zod";

const usernameRegex = /^(?!_)(?!.*__)[a-z0-9_]+(?<!_)$/;

export const registerSchema = z
  .object({
    name: z.string().min(1, "Name is required").trim(),
    email: z.email("Please enter a valid email").toLowerCase().trim(),
    username: z
      .string()
      .trim()
      .toLowerCase()
      .regex(
        usernameRegex,
        "Username can only contain lowercase letters, numbers, and underscores. It cannot start or end with an underscore or contain double underscores.",
      ),
    password: z.string().min(8, "The password should be atleast 8 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type RegisterData = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.email("Please enter a valid email").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export type LoginData = z.infer<typeof loginSchema>;
