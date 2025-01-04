import { validateLanguageSupport } from "@/langs"

import {
    DefaultLanguageMapping,
    InvalidKeyError,
    LanguageDataHandler,
    LanguageMappedData,
} from "@/data/types"

export class LanguageSpecificData<T> implements LanguageDataHandler<T> {
    private readonly data: { [key: string]: LanguageMappedData<T> }

    constructor(data: { [key: string]: LanguageMappedData<T> }) {
        this.data = data
    }

    get(key: string, lang: string): T {
        const validLang = validateLanguageSupport(lang)
        const dataForKey = this.data[key]
        if (!dataForKey) throw new InvalidKeyError(key)
        return dataForKey[validLang]
    }
}

export class LanguageData<T, D = T> implements LanguageDataHandler<T> {
    private readonly data: DefaultLanguageMapping<T, D>[]

    constructor(data: DefaultLanguageMapping<T, D>[]) {
        this.data = data
    }

    get(lang: string): (T & D)[] {
        const validLang = validateLanguageSupport(lang)
        return this.data.map(({ default: metadata = {} as D, ...rest }) => ({
            ...metadata,
            ...rest[validLang],
        }))
    }
}
