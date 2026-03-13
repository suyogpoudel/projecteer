import { relations } from "drizzle-orm";
import {
  pgTable,
  text,
  integer,
  timestamp,
  uuid,
  unique,
} from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

// project table
export const project = pgTable("project", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),

  title: text("title").notNull(),
  description: text("description").notNull(),
  hook: text("hook").notNull(),

  difficultyRating: integer("difficulty_rating").notNull(), // 1-5
  difficultyDescription: text("difficulty_description").notNull(),

  usabilityRating: integer("usability_rating").notNull(), // 1-5
  usabilityDescription: text("usability_description").notNull(),

  hireabilityRating: integer("hireability_rating").notNull(), // 1-5
  hireabilityDescription: text("hireability_description").notNull(),

  absurdityRating: integer("absurdity_rating").notNull(), // 1-5
  absurdityDescription: text("absurdity_description").notNull(),

  techStack: text("tech_stack").array().notNull().$type<string[]>(),
  learningValue: text("learning_value").array().notNull().$type<string[]>(),

  upvotes: integer("upvotes").notNull().default(0),
  saves: integer("saves").notNull().default(0),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

// savedProject table
export const savedProject = pgTable(
  "saved_project",
  {
    id: uuid("id").primaryKey().defaultRandom().notNull(),

    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),

    projectId: uuid("project_id")
      .notNull()
      .references(() => project.id, { onDelete: "cascade" }),

    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => ({
    user_project_unique: unique().on(table.userId, table.projectId),
  }),
);

// upvote table
export const projectUpvote = pgTable(
  "project_upvote",
  {
    id: uuid("id").primaryKey().defaultRandom().notNull(),

    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),

    projectId: uuid("project_id")
      .notNull()
      .references(() => project.id, { onDelete: "cascade" }),

    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    user_project_unique: unique().on(table.userId, table.projectId),
  }),
);

// Relations
export const projectRelations = relations(project, ({ one, many }) => ({
  user: one(user, {
    fields: [project.userId],
    references: [user.id],
  }),
  savedBy: many(savedProject),
  upvotedBy: many(projectUpvote),
}));

export const savedProjectRelations = relations(savedProject, ({ one }) => ({
  user: one(user, {
    fields: [savedProject.userId],
    references: [user.id],
  }),
  project: one(project, {
    fields: [savedProject.projectId],
    references: [project.id],
  }),
}));

export const projectUpvoteRelations = relations(projectUpvote, ({ one }) => ({
  user: one(user, {
    fields: [projectUpvote.userId],
    references: [user.id],
  }),
  project: one(project, {
    fields: [projectUpvote.projectId],
    references: [project.id],
  }),
}));
