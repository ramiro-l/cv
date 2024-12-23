"use client";

import { SUPPORTED_LANGUAGES } from "@/langs";
import { useTransitionRouter } from "next-view-transitions";

const ToggleLang = ({ lang }: { lang: string }) => {
  return (
    <div className="flex w-fit items-center gap-1 rounded-md border border-muted p-0.5 text-xs text-muted-foreground">
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
        const url = window.location.href.replace(window.location.origin, "");
        if (lang !== currentLang) {
          router.replace(url.replace(`/${currentLang}`, `/${lang}`));
        }
      }}
      className={`min-w-7 rounded-md p-1.5 uppercase hover:bg-muted/40 hover:text-secondary-foreground ${currentLang === lang ? "!bg-muted text-secondary-foreground" : ""}`}
    >
      {lang}
    </button>
  );
};

export default ToggleLang;
