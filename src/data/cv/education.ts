import { LanguageData } from "@/data/get-data"

export type EducationDetail = {
    school: string
    degree: string
    start: string
    end: string
}

export const Education = new LanguageData<EducationDetail>([
    {
        en: {
            school: "National University of Cordoba (FaMAF)",
            degree: "Bachelor of Computer Science.",
            start: "2022",
            end: "PRESENT",
        },
        es: {
            school: "Universidad Nacional de Cordoba (FaMAF)",
            degree: "Licenciatura en Ciencias de la Computación.",
            start: "2022",
            end: "ACTUALIDAD",
        },
    },
])
