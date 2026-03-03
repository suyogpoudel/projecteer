import { Control, Controller } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "../ui/field";
import { InputGroup, InputGroupTextarea } from "../ui/input-group";
import { RatingField } from "./rating-form";
import { ProjectData } from "@/schemas/projects";

export type DescriptionName =
  | "difficultyDescription"
  | "usabilityDescription"
  | "hireabilityDescription"
  | "absurdityDescription";

type Props = {
  name: DescriptionName;
  label: string;
  control: Control<ProjectData>;
};

const RatingDescription = ({ name, label, control }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field>
          <FieldLabel
            htmlFor={name}
            className="px-2"
          >
            {label}
          </FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              id={name}
              {...field}
              rows={3}
              placeholder={`Describe your ${label}`}
              className="resize-y"
            />
          </InputGroup>
          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export default RatingDescription;
