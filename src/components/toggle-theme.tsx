"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Monitor, MoonStar } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import theme from "@/data/themes";

const ToggleTheme = ({ lang }: { lang: string }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !theme) {
    return null;
  }

  return (
    <div className="flex w-fit items-center gap-1 rounded-md border border-muted p-0.5 text-muted-foreground">
      <ThemeButton
        themeName="light"
        currentTheme={theme}
        setTheme={setTheme}
        Icon={Sun}
        lang={lang}
        alignTooltip="center"
      />
      <ThemeButton
        themeName="system"
        currentTheme={theme}
        setTheme={setTheme}
        Icon={Monitor}
        lang={lang}
        alignTooltip="center"
      />
      <ThemeButton
        themeName="dark"
        currentTheme={theme}
        setTheme={setTheme}
        Icon={MoonStar}
        lang={lang}
        alignTooltip="end"
      />
    </div>
  );
};

const ThemeButton = ({
  themeName,
  currentTheme,
  setTheme,
  Icon,
  lang,
  alignTooltip,
}: {
  themeName: string;
  currentTheme: string;
  setTheme: (theme: string) => void;
  Icon: React.ComponentType<{ className?: string }>;
  lang: string;
  alignTooltip: "center" | "start" | "end";
}) => (
  <TooltipProvider delayDuration={10}>
    <Tooltip>
      <TooltipTrigger>
        {" "}
        <button
          onClick={() => setTheme(themeName)}
          className={`flex items-center justify-center rounded-md p-1.5 hover:bg-muted/40 hover:text-secondary-foreground ${currentTheme === themeName ? "!bg-muted text-secondary-foreground" : ""}`}
        >
          <Icon className="size-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className={`mb-1 py-0 ${alignTooltip === "start" && "-ml-1"} ${alignTooltip === "end" && "-mr-1"}`}
        align={alignTooltip}
      >
        <p>{theme(themeName, lang)}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default ToggleTheme;
