import { type SupportedLanguage } from "@/langs"

export type LanguageMappedData<T> = { [key in SupportedLanguage]: T }
export type DefaultLanguageMapping<T, D> = LanguageMappedData<T> & {
    default?: D
}

export interface LanguageDataHandler<T> {
    get(key: string, lang: string): T | T[]
}

export class InvalidKeyError extends Error {
    constructor(key: string) {
        super(`Unsupported key: ${key}`)
        this.name = "InvalidKeyError"
    }
}
