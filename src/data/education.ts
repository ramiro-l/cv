import { checkSupportedLanguage, type SupportedLanguage } from "@/langs";

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

const getEducation = (lang: string): EducationDetail[] => {
    if (!checkSupportedLanguage(lang)) {
        throw new Error(`Unsupported language: ${lang}`);
    }
    return EDUCATION.map((edu) => edu[lang]);
};

export default getEducation;
