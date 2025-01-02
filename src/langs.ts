// NOTE: The first language is the default language: SUPPORTED_LANGUAGES[0]
export const SUPPORTED_LANGUAGES = ["en", "es"] as const
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export const checkSupportedLanguage = (
    lang: string
): lang is SupportedLanguage => {
    return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage)
}
