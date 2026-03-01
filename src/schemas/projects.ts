import { z } from "zod";

const requiredString = (name: string) =>
  z.string().trim().min(1, `${name} is required`);

const rating = (name: string) =>
  z.coerce.number().int().min(1, `${name} rating is required`).max(5);

export const projectSchema = z.object({
  title: requiredString("Title")
    .min(3, "Title should be atleast 3 characters")
    .max(120, "Title is too long"),

  description: requiredString("Description").min(
    10,
    "Description should be atleast 10 characters",
  ),

  hook: requiredString("Hook")
    .min(5, "Hook should be atleast 5 characters")
    .max(200, "Hook is too long"),

  difficultyRating: rating("Difficulty"),
  difficultyDescription: requiredString("Describing difficulty").min(3),

  usabilityRating: rating("Usability"),
  usabilityDescription: requiredString("Describing usability").min(3),

  hireabilityRating: rating("Hireability"),
  hireabilityDescription: requiredString("Describing hireability").min(3),

  absurdityRating: rating("Absurdity"),
  absurdityDescription: requiredString("Describing absurdity").min(3),

  techStack: z
    .array(requiredString("Tech stack"))
    .min(1, "At least one tech stack is necessary"),

  learningValue: z
    .array(requiredString("Learning value"))
    .min(1, "There should be at least one learning value"),
});

export type ProjectData = z.infer<typeof projectSchema>;
