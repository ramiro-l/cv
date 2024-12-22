/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import BadgeTool from "@/components/badge-tool";
import { type ProjectDetail } from "@/data/projects";

export function ProjectCard({
  title,
  description,
  techStack,
  link,
  img,
  type,
}: Readonly<ProjectDetail>) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted">
      <CardHeader className="">
        <a href={link?.href} target="_blank" className="overflow-hidden">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="h-32 w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </a>

        <div className="space-y-1 px-3 pt-2">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link?.href}
                target="_blank"
                className="inline-flex items-center gap-1.5 hover:underline"
                translate="no"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>

          {link && (
            <div className="hidden font-mono text-xs underline print:visible">
              {link.href
                .replace("https://", "")
                .replace("www.", "")
                .replace("/", "")}
            </div>
          )}

          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-2 flex h-full flex-col justify-center gap-1 px-3 pb-3">
        <div>
          <BadgeTool tag={type} size="small" />
        </div>
        <div
          className=" flex w-full flex-wrap justify-between gap-1"
          translate="no"
        >
          {techStack.map((tag) => (
            <BadgeTool key={tag} tag={tag} size="small" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
