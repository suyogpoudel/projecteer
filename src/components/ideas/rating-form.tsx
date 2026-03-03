import { Control, Controller } from "react-hook-form";
import { FieldSet, FieldLegend, FieldError } from "../ui/field";
import StarRating from "./star-rating";
import { ProjectData } from "@/schemas/projects";

export type RatingField =
  | "difficultyRating"
  | "hireabilityRating"
  | "usabilityRating"
  | "absurdityRating";

type Props = {
  name: RatingField;
  label: string;
  control: Control<ProjectData>;
};

const RatingForm = ({ name, label, control }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FieldSet>
          <div className="flex w-full justify-between">
            <FieldLegend>{label}</FieldLegend>

            <StarRating
              value={field.value}
              onChange={(value) => field.onChange(value)}
            />
          </div>

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </FieldSet>
      )}
    />
  );
};

export default RatingForm;
