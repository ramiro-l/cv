import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function EducationCard({
    education,
}: Readonly<{
    education: {
        school: string
        start: string
        end: string
        degree: string
    }
}>) {
    return (
        <Card className="bg-transparent">
            <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="text-balance font-semibold leading-tight">
                        {education.school}
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
