import z from "zod";

export const registerSchema = z
  .object({
    fullName: z.string().min(1, "Name is required"),
    email: z.email("Please enter a valid email"),
    password: z.string().min(8, "The password should be atleast 8 characters"),
    confirmPassword: z.string().min(8),
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
