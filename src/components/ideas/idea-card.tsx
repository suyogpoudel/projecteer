import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { db } from "@/db/drizzle";
import { user } from "@/db/schema";
import { mockProjects } from "@/lib/mock-projects";
import { eq } from "drizzle-orm";
import { ArrowBigUpDash, Star } from "lucide-react";
import Link from "next/link";
import Ratings from "./ratings";
import TechStack from "./tech-stack";
import LearningValue from "./learning-value";

const IdeaCard = async () => {
  const projectsWithAuthor = await Promise.all(
    mockProjects.map(async (project) => {
      const [author] = await db
        .select()
        .from(user)
        .where(eq(user.id, project.userId));

      const username = author?.username || "unknown";

      return {
        ...project,
        username,
      };
    }),
  );

  return (
    <div className="flex flex-col gap-10 md:w-[50%]">
      {projectsWithAuthor.map((project) => {
        const ratings = [
          {
            rating: project.difficultyRating,
            label: "Difficulty",
            description: project.difficultyDescription,
          },
          {
            rating: project.usabilityRating,
            label: "Usability",
            description: project.usabilityDescription,
          },
          {
            rating: project.hireabilityRating,
            label: "Hireability",
            description: project.hireabilityDescription,
          },
          {
            rating: project.absurdityRating,
            label: "Absurdity",
            description: project.absurdityDescription,
          },
        ];

        return (
          <Card
            key={project.id}
            className="w-full"
          >
            <CardHeader>
              <div className="w-full items-center flex justify-between gap-3">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>
                  <Link
                    href={`/u/${project.username}`}
                    className="hover:text-primary transition-all duration-200 text-lg"
                  >
                    @{project.username}
                  </Link>
                </CardDescription>
              </div>

              <p className="italic text-primary mb-4">{project.hook}</p>
              <Separator />
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
              <p className="text-lg text-primary">{project.description}</p>
              <Separator />

              <div className="w-full p-2 flex max-md:flex-col gap-4">
                <LearningValue learningValue={project.learningValue} />

                <TechStack techStack={project.techStack} />
              </div>

              <Separator />

              <Ratings ratings={ratings} />

              <Separator />
            </CardContent>

            <CardFooter className="flex justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant={"outline"}
                  size={"icon"}
                >
                  <ArrowBigUpDash />
                </Button>
                <p>
                  <span className="text-primary text-lg font-bold">
                    {project.upvotes}
                  </span>{" "}
                  Upvotes
                </p>
              </div>

              <div className="flex items-center gap-2">
                <p>
                  <span className="text-primary text-lg font-bold">0</span>{" "}
                  Saved
                </p>
                <Button
                  variant={"outline"}
                  size={"icon"}
                >
                  <Star />
                </Button>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default IdeaCard;
