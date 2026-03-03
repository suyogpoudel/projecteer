import { Control, Controller } from "react-hook-form";
import {
  FieldSet,
  FieldLegend,
  FieldError,
  Field,
  FieldLabel,
} from "../ui/field";
import StarRating from "./star-rating";
import { ProjectData } from "@/schemas/projects";
import { InputGroup, InputGroupTextarea } from "../ui/input-group";

type RatingField =
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
            <FieldLegend>${label}</FieldLegend>

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
