"use server";

import { db } from "@/db/drizzle";
import { user } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { UsernameData, usernameSchema } from "@/schemas/auth";
import { eq } from "drizzle-orm";

export const createUsername = async (
  data: UsernameData,
): Promise<{ success: boolean; message?: string }> => {
  const session = await getSession();

  if (!session) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  if (session.user.username) {
    return {
      success: false,
      message: "User already has a username",
    };
  }

  try {
    const parsed = usernameSchema.safeParse(data);

    if (!parsed.success)
      return {
        success: false,
        message: parsed.error.issues.map((issue) => issue.message).join(", "),
      };

    const { username } = parsed.data;

    await db.update(user).set({ username }).where(eq(user.id, session.user.id));

    return {
      success: true,
      message: "Username created successfully",
    };
  } catch (err: any) {
    if (err.code === "23505") {
      return {
        success: false,
        message: "Username already exists",
      };
    }

    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
