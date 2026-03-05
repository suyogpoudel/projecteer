"use server";

import { db } from "@/db/drizzle";
import { project } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { ProjectData, projectSchema } from "@/schemas/projects";

export const addProject = async (
  data: ProjectData,
): Promise<{ success: boolean; message?: string }> => {
  const session = await getSession();

  if (!session) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  try {
    const parsed = projectSchema.safeParse(data);

    if (!parsed.success)
      return {
        success: false,
        message: parsed.error.issues.map((issue) => issue.message).join(", "),
      };

    const newData = {
      ...parsed.data,
      userId: session.user.id,
    };

    await db.insert(project).values(newData);

    return {
      success: true,
      message: "Created idea successfully",
    };
  } catch (err) {
    return {
      success: false,
      message: "Failed to create idea",
    };
  }
};
