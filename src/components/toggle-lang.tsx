"use client";

import { SUPPORTED_LANGUAGES } from "@/langs";
import { useTransitionRouter } from "next-view-transitions";

const ToggleLang = ({ lang }: { lang: string }) => {
  return (
    <div className="flex h-8 w-fit items-center gap-1 rounded-md border border-muted p-0.5 text-xs text-muted-foreground">
      {SUPPORTED_LANGUAGES.map((language) => (
        <LangButton key={language} lang={language} currentLang={lang} />
      ))}
    </div>
  );
};

const LangButton = ({
  lang,
  currentLang,
}: {
  lang: string;
  currentLang: string;
}) => {
  const router = useTransitionRouter();

  return (
    <button
      onClick={() => {
        if (lang !== currentLang) {
          router.replace(`/${lang}`);
        }
      }}
      className={` flex min-w-7 items-center justify-center rounded-sm p-1.5 pb-1 uppercase hover:bg-muted/40 hover:text-secondary-foreground ${currentLang === lang ? "!bg-muted text-secondary-foreground" : ""}`}
    >
      {lang}
    </button>
  );
};

export default ToggleLang;
