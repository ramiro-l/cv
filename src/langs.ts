// NOTE: The first language is the default language: SUPPORTED_LANGUAGES[0]
export const SUPPORTED_LANGUAGES = ["en", "es"] as const
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export function validateLanguageSupport(lang: string): SupportedLanguage {
    if (!lang || !checkSupportedLanguage(lang)) {
        throw new InvalidLanguageError(lang)
    }
    return lang
}

const checkSupportedLanguage = (lang: string): lang is SupportedLanguage => {
    return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage)
}

export class InvalidLanguageError extends Error {
    constructor(lang: string) {
        super(`Unsupported language: ${lang}`)
        this.name = "InvalidLanguageError"
    }
}
