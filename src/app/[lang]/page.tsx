import { SupportedLanguage } from "@/langs"

import BadgeTool from "@/components/badge-tool"
import EducationCard from "@/components/cards/education"
import ProjectCard from "@/components/cards/project"
import WorkCard from "@/components/cards/work"
import ContentSection from "@/components/content-section"
import Footer from "@/components/footer"
import Header from "@/components/header"

import { Education, Introduction, Projects, Skills, Works } from "@/data/cv"
import { Titles } from "@/data/page"

export default function Page({
    params: { lang },
}: Readonly<{ params: { lang: SupportedLanguage } }>) {
    return (
        <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:px-16 md:pt-16 print:p-12">
            <section className="mx-auto w-full max-w-2xl space-y-8  print:space-y-6">
                <Header lang={lang} />

                <ContentSection
                    title={Titles.get("about", lang)}
                    show={Introduction.containsData("summary")}
                >
                    <p className="text-muted-foreground">
                        {Introduction.get("summary", lang)}
                    </p>
                </ContentSection>

                <ContentSection
                    title={Titles.get("work", lang)}
                    show={Works.containsData()}
                >
                    {Works.get(lang).map((work) => {
                        return <WorkCard key={work.company} work={work} />
                    })}
                </ContentSection>

                <ContentSection
                    title={Titles.get("education", lang)}
                    show={Education.containsData()}
                >
                    {Education.get(lang).map((education) => {
                        return (
                            <EducationCard
                                key={education.school}
                                education={education}
                            />
                        )
                    })}
                </ContentSection>

                <ContentSection
                    title={Titles.get("skills", lang)}
                    show={Skills.length > 0}
                >
                    <div className="flex flex-wrap gap-1" translate="no">
                        {Skills.map((skill) => {
                            return <BadgeTool tag={skill} key={skill} />
                        })}
                    </div>
                </ContentSection>

                <ContentSection
                    title={Titles.get("projects", lang)}
                    show={Projects.containsData()}
                    className="print-force-new-page scroll-mb-16"
                >
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-3 print:grid-cols-2 print:gap-2">
                        {Projects.get(lang).map((project) => {
                            return (
                                <ProjectCard key={project.title} {...project} />
                            )
                        })}
                    </div>
                </ContentSection>
            </section>

            <Footer lang={lang} />
        </main>
    )
}
