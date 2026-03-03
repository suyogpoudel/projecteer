"use client";

import { ProjectData, projectSchema } from "@/schemas/projects";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { InputGroup, InputGroupTextarea } from "../ui/input-group";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import StarRating from "./star-rating";

const formDefault = {
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

const IdeaForm = () => {
  const form = useForm<ProjectData>({
    resolver: zodResolver(projectSchema),
    defaultValues: formDefault,
  });

  const onSubmit = async (data: ProjectData) => {};

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
                  id="title"
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

        <Controller
          name="difficultyRating"
          control={form.control}
          render={({ field, fieldState }) => (
            <FieldSet>
              <div className="flex w-full justify-between">
                <FieldLegend>Difficulty Rating</FieldLegend>

                <StarRating
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                />
              </div>

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldSet>
          )}
        />
      </FieldGroup>
    </form>
  );
};

export default IdeaForm;
