"use server";

import { db } from "@/db/drizzle";
import { project, projectUpvote } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { ProjectData, projectSchema } from "@/schemas/projects";
import { and, eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

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
      message: err instanceof Error ? err.message : "Couldn't create Project",
    };
  }
};

export const upvoteProject = async (
  id: string,
): Promise<{ success: boolean; message?: string }> => {
  const session = await getSession();

  if (!session) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  if (!id) {
    return {
      success: false,
      message: "Please provide a project id",
    };
  }

  try {
    const [requiredProject] = await db
      .select({ id: project.id })
      .from(project)
      .where(eq(project.id, id));

    if (!requiredProject) {
      return {
        success: false,
        message: "Project doesn't exist",
      };
    }

    const [existing] = await db
      .select({ id: projectUpvote.id })
      .from(projectUpvote)
      .where(
        and(
          eq(projectUpvote.userId, session.user.id),
          eq(projectUpvote.projectId, id),
        ),
      );

    if (existing) {
      await db
        .delete(projectUpvote)
        .where(
          and(
            eq(projectUpvote.userId, session.user.id),
            eq(projectUpvote.projectId, id),
          ),
        );

      await db
        .update(project)
        .set({ upvotes: sql`GREATEST(${project.upvotes} - 1, 0)` })
        .where(eq(project.id, id));

      revalidatePath("/ideas");
    } else {
      await db.insert(projectUpvote).values({
        userId: session.user.id,
        projectId: id,
      });

      await db
        .update(project)
        .set({ upvotes: sql`${project.upvotes} + 1` })
        .where(eq(project.id, id));

      revalidatePath("/ideas");
    }

    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Error adding upvote",
    };
  }
};
