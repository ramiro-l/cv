import { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import ToggleTheme from "@/components/toggle-theme";

import BadgeTool from "@/components/badge-tool";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:px-16 md:pt-16 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8  print:space-y-6">
        <div className="flex justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className=" text-2xl font-bold ">{RESUME_DATA.name}</h1>
            <p className="max-w-lg text-balance font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="h-3 w-3" />
                <strong className="mt-0.5">{RESUME_DATA.location}</strong>
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm opacity-75  print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-7"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}

              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-7"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="ml-1 mt-1 size-28 max-[380px]:hidden">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">Sobre Mí</h2>
          <p className="font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        {/* <Section>
          <h2 className="text-xl font-bold">Experiencia Laboral</h2>
          {RESUME_DATA.work.map((work) => {
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
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section> */}
        <Section>
          <h2 className="text-xl font-bold">Educación</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school} className="bg-transparent">
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="text-balance font-semibold leading-tight">
                      {education.school}
                    </h3>
                    <div className="min-w text-nowrap text-sm tabular-nums text-muted-foreground">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Habilidades</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <BadgeTool tag={skill} key={skill} />;
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Proyectos</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-3 print:grid-cols-2 print:gap-2">
            {RESUME_DATA.projects
              .slice()
              .reverse()
              .map((project) => {
                return <ProjectCard key={project.title} {...project} />;
              })}
          </div>
        </Section>
      </section>
      <footer className=" mx-auto mb-2   mt-8 flex w-full max-w-2xl items-center justify-between print:hidden">
        <p className="ml-1 text-xs text-muted-foreground">
          <strong>
            © {new Date().getFullYear()} {RESUME_DATA.name}
          </strong>
        </p>
        <ToggleTheme />
      </footer>
    </main>
  );
}
