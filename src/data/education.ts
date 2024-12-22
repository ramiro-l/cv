import { checkSupportedLanguage, type SupportedLanguage } from "@/i18n/const";

type EducationDetail = {
    school: string;
    degree: string;
    start: string;
    end: string;
};

const EDUCATION: { [key in SupportedLanguage]: EducationDetail }[] = [
    {
        es: {
            school: "Universidad Nacional de Cordoba (FaMAF)",
            degree: "Licenciatura en Ciencias de la Computación.",
            start: "2022",
            end: "ACTUALIDAD"
        },
        en: {
            school: "National University of Cordoba (FaMAF)",
            degree: "Bachelor of Computer Science.",
            start: "2022",
            end: "PRESENT"
        }
    }
];

const getEducation = (locale: string): EducationDetail[] => {
    if (!checkSupportedLanguage(locale)) {
        throw new Error(`Unsupported locale: ${locale}`);
    }
    return EDUCATION.map((edu) => edu[locale]);
};

export default getEducation;
