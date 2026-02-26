"use client";

import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { UsernameData, usernameSchema } from "@/schemas/auth";
import { createUsername } from "@/actions/create-username";
import { Loader2 } from "lucide-react";

const UsernameForm = () => {
  const router = useRouter();

  const form = useForm<UsernameData>({
    resolver: zodResolver(usernameSchema),
    defaultValues: { username: "" },
  });

  const onSubmit = async (data: UsernameData) => {
    const result = await createUsername(data);

    if (!result.success) {
      toast.error(result.message ?? "Something went wrong");
      return;
    }

    toast.success(result.message);
    form.reset();
    router.replace("/ideas");
  };

  return (
    <div className="container mx-auto max-w-lg px-4 py-16">
      <Card className="p-6 text-center">
        <h1 className="mb-4 text-2xl font-semibold">
          Create a unique username
        </h1>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="username">Username</FieldLabel>
                  <Input
                    type="text"
                    placeholder="john_doe"
                    id="username"
                    autoFocus
                    {...field}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button
              type="submit"
              size="lg"
              className="w-full mt-4"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {form.formState.isSubmitting ? "Creating..." : "Create Username"}
            </Button>
          </FieldGroup>
        </form>
      </Card>
    </div>
  );
};

export default UsernameForm;
