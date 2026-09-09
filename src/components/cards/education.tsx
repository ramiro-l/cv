import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EducationCard({
    education,
}: Readonly<{
    education: EducationData
}>) {
    return (
        <Card className="bg-transparent">
            <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        <span className="text-balance font-semibold leading-tight">
                            {education.school.name}
                        </span>
                        <span className="inline-flex gap-x-1">
                            {education.school.tags.map((badge) => (
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
                    <div className="min-w text-nowrap text-sm tabular-nums text-muted-foreground">
                        {education.start} - {education.end}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="mt-2">{education.degree}</CardContent>
        </Card>
    )
}
