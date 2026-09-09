import Image from "next/image"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import BadgeTool from "@/components/badge-tool"

export default function ProjectCard({
    project
}: Readonly<{ project: ProjectData & ProjectDefaultData }>) {
    return (
        <Card className="flex flex-col overflow-hidden border border-muted">
            <CardHeader className="">
                <a
                    href={project.link?.href}
                    target="_blank"
                    className="relative block h-32 w-full overflow-hidden print:h-28"
                >
                    <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                </a>

                <div className="space-y-1 px-3 pt-2">
                    <CardTitle className="text-base">
                        {project.link ? (
                            <a
                                href={project.link?.href}
                                target="_blank"
                                className="inline-flex items-center gap-1.5 hover:underline"
                                translate="no"
                            >
                                {project.title}{" "}
                                <span className="size-1 rounded-full bg-green-500"></span>
                            </a>
                        ) : (
                            project.title
                        )}
                    </CardTitle>

                    {project.link && (
                        <div className="hidden underline print:visible">
                            {project.link.href
                                .replace("https://", "")
                                .replace("www.", "")
                                .replace("/", "")}
                        </div>
                    )}

                    <CardDescription>
                        {project.description}
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="mt-2 flex h-full flex-col justify-center gap-1 px-3 pb-3">
                <div>
                    <BadgeTool tag={project.type} size="small" />
                </div>
                <div
                    className=" flex w-full flex-wrap justify-between gap-1"
                    translate="no"
                >
                    {project.techStack.map((tag) => (
                        <BadgeTool key={tag} tag={tag} size="small" />
                    ))}
                </div>
                {project.link && project.link.href && (
                    <a
                        className="hidden !cursor-pointer print:block"
                        href={project.link.href}
                        target="_blank"
                    >
                        <BadgeTool tag={parseUrl(project.link.href)} size="small" />
                    </a>
                )}
            </CardContent>
        </Card>
    )
}

const parseUrl = (url: string) => {
    return url.replace(/\/$/, "").replace("https://", "").replace("www.", "")
}
