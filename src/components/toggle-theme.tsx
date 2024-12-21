"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Monitor, MoonStar } from "lucide-react";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !theme) {
    return null;
  }

  return (
    <div className="flex w-fit items-center gap-2 rounded-full border border-muted p-0.5 text-muted-foreground">
      <ThemeButton
        themeName="light"
        currentTheme={theme}
        setTheme={setTheme}
        Icon={Sun}
      />
      <ThemeButton
        themeName="system"
        currentTheme={theme}
        setTheme={setTheme}
        Icon={Monitor}
      />
      <ThemeButton
        themeName="dark"
        currentTheme={theme}
        setTheme={setTheme}
        Icon={MoonStar}
      />
    </div>
  );
};

const ThemeButton = ({
  themeName,
  currentTheme,
  setTheme,
  Icon,
}: {
  themeName: string;
  currentTheme: string;
  setTheme: (theme: string) => void;
  Icon: React.ComponentType<{ className?: string }>;
}) => (
  <button
    onClick={() => setTheme(themeName)}
    className={`flex items-center justify-center rounded-full p-1.5 ${currentTheme === themeName ? "bg-muted text-secondary-foreground" : ""}`}
  >
    <Icon className="size-4" />
  </button>
);

export default ToggleTheme;
