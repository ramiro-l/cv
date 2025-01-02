import { Metadata } from "next"
import { GlobeIcon, MailIcon } from "lucide-react"

import { SupportedLanguage } from "@/langs"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Section } from "@/components/ui/section"

import BadgeTool from "@/components/badge-tool"
import ProjectCard from "@/components/project-card"
import ToggleLang from "@/components/toggle-lang"
import ToggleTheme from "@/components/toggle-theme"

import { CONST_DATA } from "@/data/const-data"
import aboutMe from "@/data/about-me"
import education from "@/data/education"
import projects from "@/data/projects"
import title from "@/data/titles"

// import works from "@/data/work";

export const metadata: Metadata = {
    title: `${CONST_DATA.name} | CV`,
    description: CONST_DATA.metaDescription,
}

export default function Page({
    params: { lang },
}: Readonly<{ params: { lang: SupportedLanguage } }>) {
    return (
        <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:px-16 md:pt-16 print:p-12">
            <section className="mx-auto w-full max-w-2xl space-y-8  print:space-y-6">
                <div className="flex justify-between">
                    <div className="flex-1 space-y-1.5">
                        <h1 className=" text-2xl font-bold" translate="no">
                            {CONST_DATA.name}
                        </h1>
                        <p className="max-w-lg text-balance font-mono text-sm text-muted-foreground">
                            {aboutMe("profile", lang)}
                        </p>
                        <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                            <a
                                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                                href={CONST_DATA.locationLink}
                                target="_blank"
                            >
                                <GlobeIcon className="size-3" />
                                <strong className="mt-0.5">
                                    {CONST_DATA.location}
                                </strong>
                            </a>
                        </p>
                        <div className="flex gap-x-1 pt-1 font-mono text-sm opacity-75  print:hidden">
                            {CONST_DATA.contact.email ? (
                                <Button
                                    className="size-8 border-muted"
                                    variant="outline"
                                    size="icon"
                                    asChild
                                >
                                    <a
                                        href={`mailto:${CONST_DATA.contact.email}`}
                                    >
                                        <MailIcon className="size-4" />
                                    </a>
                                </Button>
                            ) : null}

                            {CONST_DATA.contact.social.map((social) => (
                                <Button
                                    key={social.name}
                                    className="size-8 border-muted"
                                    variant="outline"
                                    size="icon"
                                    asChild
                                >
                                    <a href={social.url}>
                                        <social.icon className="size-4" />
                                    </a>
                                </Button>
                            ))}
                            <ToggleLang lang={lang} />
                        </div>
                        <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
                            {CONST_DATA.contact.email ? (
                                <a href={`mailto:${CONST_DATA.contact.email}`}>
                                    <span className="underline">
                                        {CONST_DATA.contact.email}
                                    </span>
                                </a>
                            ) : null}
                        </div>
                    </div>

                    <Avatar className="ml-1 mt-1 size-28 max-[380px]:hidden">
                        <AvatarImage
                            alt={CONST_DATA.name}
                            src={CONST_DATA.avatarUrl}
                        />
                        <AvatarFallback>{CONST_DATA.initials}</AvatarFallback>
                    </Avatar>
                </div>

                <Section>
                    <h2 className="text-xl font-bold">
                        {title("about", lang)}
                    </h2>
                    <p className="font-mono text-sm text-muted-foreground">
                        {aboutMe("summary", lang)}
                    </p>
                </Section>

                {/* <Section>
          <h2 className="text-xl font-bold">{title("work", lang)}</h2>
          {works(lang).map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-sm">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section> */}

                <Section>
                    <h2 className="text-xl font-bold">
                        {title("education", lang)}
                    </h2>
                    {education(lang).map(
                        (education: {
                            school: string
                            start: string
                            end: string
                            degree: string
                        }) => {
                            return (
                                <Card
                                    key={education.school}
                                    className="bg-transparent"
                                >
                                    <CardHeader>
                                        <div className="flex items-center justify-between gap-x-2 text-base">
                                            <h3 className="text-balance font-semibold leading-tight">
                                                {education.school}
                                            </h3>
                                            <div className="min-w text-nowrap text-sm tabular-nums text-muted-foreground">
                                                {education.start} -{" "}
                                                {education.end}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="mt-2">
                                        {education.degree}
                                    </CardContent>
                                </Card>
                            )
                        }
                    )}
                </Section>

                <Section>
                    <h2 className="text-xl font-bold">
                        {title("skills", lang)}
                    </h2>
                    <div className="flex flex-wrap gap-1" translate="no">
                        {CONST_DATA.skills.map((skill) => {
                            return <BadgeTool tag={skill} key={skill} />
                        })}
                    </div>
                </Section>

                <Section className="print-force-new-page scroll-mb-16">
                    <h2 className="text-xl font-bold">
                        {title("projects", lang)}
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-3 print:grid-cols-2 print:gap-2">
                        {projects(lang)
                            .slice()
                            .reverse()
                            .map((project) => {
                                return (
                                    <ProjectCard
                                        key={project.title}
                                        {...project}
                                    />
                                )
                            })}
                    </div>
                </Section>
            </section>

            <footer className=" mx-auto my-8 mb-3 flex w-full max-w-2xl items-center justify-between max-[375px]:flex-col-reverse max-[375px]:justify-center max-[375px]:gap-4 print:hidden">
                <p
                    className=" ml-1 text-nowrap text-xs text-muted-foreground"
                    translate="no"
                >
                    <strong>
                        © {new Date().getFullYear()} {CONST_DATA.name}
                    </strong>
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    <ToggleTheme lang={lang} />
                </div>
            </footer>
        </main>
    )
}
