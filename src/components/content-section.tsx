import { Section } from "@/components/ui/section"

export default function ContentSection({
    className,
    children,
    title,
    show,
}: Readonly<{
    className?: string
    children: React.ReactNode
    title: string
    show: boolean
}>) {
    if (!show) return null
    return (
        <Section className={className}>
            <h2 className="text-xl font-bold">{title}</h2>
            {children}
        </Section>
    )
}
