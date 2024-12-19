/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge"; // Asegúrate de que la ruta sea correcta

const SIMPLE_ICONS_URL = "https://cdn.simpleicons.org";
const COLOR = "black";

interface BadgeToolProps {
  tag: string;
  size?: "small" | "normal";
}

const BadgeTool = async ({ tag, size = "normal" }: BadgeToolProps) => {
  const iconUrl = `${SIMPLE_ICONS_URL}/${mapTagToIconName(tag)}/${COLOR}`;

  const fetchIconSvg = async (url: string) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Icon not found");
      }
      const svg = await res.text();
      return `data:image/svg+xml;base64,${btoa(svg)}`;
    } catch {
      return null;
    }
  };

  const iconSvg = await fetchIconSvg(iconUrl);

  const sizeClass =
    size === "small"
      ? "text-[10px] px-1 py-0 min-w-[80px]"
      : "px-3 min-w-[100px]";

  return (
    <Badge
      className={`flex flex-grow cursor-default items-center justify-center gap-1  ${sizeClass}`}
      variant="secondary"
      key={tag}
    >
      {iconSvg && (
        <img
          src={iconSvg}
          alt={tag + " icon"}
          loading="lazy"
          className={size === "small" ? "size-2.5" : "size-3"}
        />
      )}
      {tag}
    </Badge>
  );
};

const mapTagToIconName = (tag: string) => {
  switch (tag) {
    case "Html":
      return "HTML5";
    case "CSS":
      return "CSS3";
    case "Bash":
      return "gnubash";
    default:
      return tag;
  }
};

export default BadgeTool;
