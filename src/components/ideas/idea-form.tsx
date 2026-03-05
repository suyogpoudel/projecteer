"use client";

import { ProjectData, projectSchema } from "@/schemas/projects";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "../ui/field";
import { Input } from "../ui/input";
import { InputGroup, InputGroupTextarea } from "../ui/input-group";
import RatingForm, { RatingField } from "./rating-form";
import RatingDescription, { DescriptionName } from "./rating-description";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { addProject } from "@/actions/project";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formDefault: ProjectData = {
  title: "",
  description: "",
  hook: "",
  difficultyRating: 0,
  difficultyDescription: "",
  usabilityRating: 0,
  usabilityDescription: "",
  hireabilityRating: 0,
  hireabilityDescription: "",
  absurdityRating: 0,
  absurdityDescription: "",
  techStack: [""],
  learningValue: [""],
};

type Rating = {
  name: RatingField;
  description: DescriptionName;
  label: string;
};

const ratings: Rating[] = [
  {
    name: "difficultyRating",
    description: "difficultyDescription",
    label: "Difficulty Rating",
  },
  {
    name: "usabilityRating",
    description: "usabilityDescription",
    label: "Usability Rating",
  },
  {
    name: "hireabilityRating",
    description: "hireabilityDescription",
    label: "Hireability Rating",
  },
  {
    name: "absurdityRating",
    description: "absurdityDescription",
    label: "Absurdity Rating",
  },
];

const IdeaForm = () => {
  const router = useRouter();

  const [techStackInput, setTechStackInput] = useState(
    formDefault.techStack.join(", "),
  );
  const [learningValueInput, setLearningValueInput] = useState(
    formDefault.learningValue.join("\n"),
  );

  const form = useForm<ProjectData>({
    resolver: zodResolver(projectSchema),
    defaultValues: formDefault,
  });

  const onSubmit = async (data: ProjectData) => {
    const result = await addProject(data);

    if (!result.success) {
      toast.error(result.message);
    }

    if (result.success) {
      toast.success(result.message);
      form.reset();
      router.push(`/ideas`);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full max-w-xl"
    >
      <FieldGroup>
        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor="title"
                className="px-2"
              >
                Title
              </FieldLabel>
              <Input
                type="text"
                id="title"
                {...field}
                placeholder="Enter the title"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor="description"
                className="px-2"
              >
                Description
              </FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  id="description"
                  {...field}
                  rows={6}
                  placeholder="Enter the title"
                  className="resize-y"
                />
              </InputGroup>
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="hook"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor="hook"
                className="px-2"
              >
                Hook
              </FieldLabel>
              <Input
                type="text"
                id="hook"
                {...field}
                placeholder="Enter a proper hook for the project"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {ratings.map(({ name, description, label }) => (
          <div
            key={name}
            className="flex flex-col gap-7"
          >
            <RatingForm
              control={form.control}
              name={name}
              label={label}
            />

            <RatingDescription
              name={description}
              label={`${label} Description`}
              control={form.control}
            />
          </div>
        ))}

        <Controller
          name="techStack"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor="techStack"
                className="px-2"
              >
                Tech Stack
              </FieldLabel>
              <Input
                type="text"
                id="techStack"
                {...field}
                value={techStackInput}
                onChange={(e) => setTechStackInput(e.target.value)}
                onBlur={() => {
                  const arr = techStackInput
                    .split(",")
                    .map((t) => t.trim())
                    .filter(Boolean);
                  field.onChange(arr);
                }}
                placeholder="Enter the tech stack"
              />
              <FieldDescription>
                Separate each item with a comma (Eg: React, Next.js)
              </FieldDescription>
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="learningValue"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor="learningValue"
                className="px-2"
              >
                Description
              </FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  id="learningValue"
                  {...field}
                  rows={8}
                  value={learningValueInput}
                  onChange={(e) => {
                    setLearningValueInput(e.target.value);
                  }}
                  onBlur={() => {
                    const arr = learningValueInput
                      .split("\n")
                      .map((v) => v.trim())
                      .filter(Boolean);
                    field.onChange(arr);
                  }}
                  placeholder={`Write one learning point per line.\nPress Enter to add a new point.\n\nExample:\nUnderstand JWT authentication\nLearn database relationships\nPractice API design`}
                  className="resize-y"
                />
              </InputGroup>
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
            "Create Project"
          )}
        </Button>
      </FieldGroup>
    </form>
  );
};

export default IdeaForm;
