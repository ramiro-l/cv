import { validateLanguageSupport, type SupportedLanguage } from "@/langs"

type LanguageMappedData<T> = { [key in SupportedLanguage]: T }
type DefaultLanguageMapping<T, D> = LanguageMappedData<T> & {
    default?: D
}

interface LanguageDataHandler<T> {
    get(key: string, lang: string): T | T[]
    containsData(key?: string): boolean
}

/**
 * A class that handles language-specific data retrieval for a list of data.
 *
 * @template T - The type of data being handled.
 * @template D - The type of metadata data being handled.
 *
 * @note Support for default data is provided. This data is merged with the language-specific data.
 */
export class LanguageData<T, D = T> implements LanguageDataHandler<T> {
    private readonly data: DefaultLanguageMapping<T, D>[]

    constructor(data: DefaultLanguageMapping<T, D>[]) {
        this.data = data
    }

    /**
     * Retrieves the data for a given language.
     *
     * @param lang - The language code for the data to retrieve.
     * @returns The data associated with the given language in a list.
     *
     * @note The data is merged with the default data.
     */
    get(lang: string): (T & D)[] {
        const validLang = validateLanguageSupport(lang)
        return this.data.map(({ default: metadata = {} as D, ...rest }) => ({
            ...metadata,
            ...rest[validLang],
        }))
    }

    containsData(): boolean {
        return this.data.length > 0
    }
}

/**
 * A class that handles language-specific data retrieval for specific key.
 *
 * @template T - The type of data being handled.
 */
export class LanguageSpecificData<T> {
    private readonly data: { [key: string]: LanguageMappedData<T> }

    constructor(data: { [key: string]: LanguageMappedData<T> }) {
        this.data = data
    }

    /**
     * Retrieves the data for a given key and language.
     *
     * @param key - The key for the data to retrieve.
     * @param lang - The language code for the data to retrieve.
     * @returns The data associated with the given key and language.
     */
    get(key: string, lang: string): T {
        const validLang = validateLanguageSupport(lang)
        const dataForKey = this.data[key]
        if (!dataForKey) throw new InvalidKeyError(key)
        return dataForKey[validLang]
    }

    containsData(key: string): boolean {
        return !!this.data[key]
    }
}

export class InvalidKeyError extends Error {
    constructor(key: string) {
        super(`Unsupported key: ${key}`)
        this.name = "InvalidKeyError"
    }
}
