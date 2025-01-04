/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge" // Asegúrate de que la ruta sea correcta

const SIMPLE_ICONS_URL = "https://cdn.simpleicons.org"
const COLOR = "black"

interface BadgeToolProps {
    tag: string
    size?: "small" | "normal"
}

const BadgeTool = async ({ tag, size = "normal" }: BadgeToolProps) => {
    const iconUrl = `${SIMPLE_ICONS_URL}/${mapTagToIconName(tag)}/${COLOR}`
    const iconSvg = await fetchIconSvg(iconUrl)

    const sizeClass =
        size === "small"
            ? "text-[10px] px-1 min-w-[80px]"
            : "px-3 py-0.5 md:min-w-[100px] print:min-w-[90px]"

    return (
        <Badge
            className={`flex grow cursor-default items-center justify-center gap-1 py-0 dark:text-white/75 print:border print:border-muted ${sizeClass}`}
            variant="secondary"
            key={tag}
        >
            {iconSvg && (
                <img
                    src={iconSvg}
                    alt={tag + " icon"}
                    loading="lazy"
                    className={`${size === "small" ? "size-2.5" : "size-3"} h-full dark:opacity-75 dark:invert`}
                />
            )}

            <span className="font-sans ">{tag}</span>
        </Badge>
    )
}

const fetchIconSvg = async (url: string) => {
    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error("Icon not found")
        }
        const svg = await res.text()
        return `data:image/svg+xml;base64,${btoa(svg)}`
    } catch {
        return null
    }
}

const mapTagToIconName = (tag: string) => {
    switch (tag) {
        case "Html":
            return "HTML5"
        case "CSS":
            return "CSS3"
        case "Bash":
            return "gnubash"
        default:
            return tag
    }
}

export default BadgeTool
