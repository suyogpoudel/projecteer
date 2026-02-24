"use client";

import { authClient } from "@/lib/auth-client";
import {
  LoginData,
  loginSchema,
  RegisterData,
  registerSchema,
} from "@/schemas/auth";

export const registerUser = async (
  data: RegisterData,
): Promise<{ success: boolean; message?: string }> => {
  try {
    const parsed = registerSchema.safeParse(data);

    if (!parsed.success) {
      return {
        success: false,
        message: parsed.error.issues.map((issue) => issue.message).join(", "),
      };
    }

    const { email, password, name, username } = parsed.data;
    await authClient.signUp.email({ email, password, name, username });

    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Error signing up",
    };
  }
};

export const loginUser = async (
  data: LoginData,
): Promise<{ success: boolean; message?: string }> => {
  try {
    const parsed = loginSchema.safeParse(data);

    if (!parsed.success) {
      return {
        success: false,
        message: parsed.error.issues.map((issue) => issue.message).join(", "),
      };
    }

    await authClient.signIn.email(parsed.data);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Error logging in",
    };
  }
};

export type SocialProvider = "google" | "github";

export const signInSocial = async (
  provider: SocialProvider,
  callbackURL = "/create-username",
): Promise<{
  success: boolean;
  message?: string;
}> => {
  try {
    await authClient.signIn.social({
      provider,
      callbackURL,
    });

    return { success: true };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : `${provider.charAt(0).toUpperCase() + provider.slice(1)} authentication failed`,
    };
  }
};
