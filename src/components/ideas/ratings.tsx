import { Card, CardTitle, CardContent } from "../ui/card";

type Rating = {
  rating: number;
  label: string;
  description: string;
};

const Ratings = ({ ratings }: { ratings: Rating[] }) => {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
      {ratings.map((rating) => (
        <Card key={rating.label}>
          <CardTitle className="text-center">{rating.label}</CardTitle>
          <CardContent className="flex flex-col items-center justify-center">
            <p className="text-sm mb-2">
              <span className="text-primary text-3xl font-extrabold">
                {rating.rating}
              </span>
              /5
            </p>

            <p className="text-sm text-muted-foreground text-center">
              {rating.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Ratings;
