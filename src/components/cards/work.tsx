import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function WorkCard({
    work,
}: Readonly<{
    work: WorkData & WorkDefaultData
}>) {
    return (
        <Card className="bg-transparent">
            <CardHeader>
                <div className="flex items-center gap-x-4">
                    <a
                        href={work.link}
                        target="_blank"
                        className="overflow-hidden rounded-sm"
                    >

                        <Image
                            src={work.logo}
                            alt={work.company + " logo"}
                            width={48}
                            height={48}
                            className="transition-transform duration-500 ease-in-out hover:scale-105"
                        />
                    </a>
                    <div className="w-full">
                        <div className="flex items-center justify-between gap-x-2 text-base">
                            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                                <a className="hover:underline" href={work.link} target="_blank">
                                    {work.company}
                                </a>

                                <span className="inline-flex gap-x-1">
                                    {work.badges.map((badge) => (
                                        <Badge
                                            variant="secondary"
                                            className="align-middle text-xs"
                                            key={badge}
                                        >
                                            {badge}
                                        </Badge>
                                    ))}
                                </span>
                            </h3>
                            <div className="text-sm tabular-nums text-muted-foreground">
                                {work.start} - {work.end}
                            </div>
                        </div>

                        <h4 className="leading-none">{work.title}</h4>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="mt-2 text-sm">
                {work.description}
            </CardContent>
        </Card>
    )
}
