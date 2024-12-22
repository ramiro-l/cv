"use client";

import { useLocale } from "next-intl";
import { SUPPORTED_LANGUAGES } from "@/i18n/const";

const ToggleLang = () => {
  const lang = useLocale();

  return (
    <div className="flex w-fit items-center gap-2 rounded-full border border-muted p-0.5 text-xs text-muted-foreground">
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
}) => (
  <button
    onClick={() => {
      window.location.href = `/${lang}`;
    }}
    className={`rounded-full p-1.5 uppercase ${currentLang === lang ? "bg-muted text-secondary-foreground" : ""}`}
  >
    {lang}
  </button>
);

export default ToggleLang;