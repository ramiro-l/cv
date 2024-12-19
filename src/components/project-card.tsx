/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  img?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  img,
}: Readonly<Props>) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted">
      <CardHeader className="">
        <a href={link} target="_blank" className="overflow-hidden">
          <img
            src={img}
            alt={title}
            className="h-32 w-full object-cover  transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </a>

        <div className="space-y-1 px-3 pt-2">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="h-1 w-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex px-3 pb-3">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
