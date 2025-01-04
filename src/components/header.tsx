import { GlobeIcon, MailIcon } from "lucide-react"

import { SupportedLanguage } from "@/langs"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import ToggleLang from "@/components/toggles/lang"

import { Introduction, USER_DETAILS } from "@/data/cv"

export default function Header({
    lang,
}: Readonly<{ lang: SupportedLanguage }>) {
    return (
        <div className="flex justify-between">
            <PersonalDetails lang={lang} />
            <Avatar className="ml-1 mt-1 size-28 max-[380px]:hidden">
                <AvatarImage
                    alt={USER_DETAILS.name}
                    src={USER_DETAILS.avatarUrl}
                />
                <AvatarFallback>{USER_DETAILS.initials}</AvatarFallback>
            </Avatar>
        </div>
    )
}

function PersonalDetails({ lang }: Readonly<{ lang: SupportedLanguage }>) {
    return (
        <div className="flex-1 space-y-1.5">
            <h1 className=" text-2xl font-bold" translate="no">
                {USER_DETAILS.name}
            </h1>
            <p className="max-w-lg text-balance font-mono text-sm text-muted-foreground">
                {Introduction.get("profile", lang)}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                    className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                    href={USER_DETAILS.locationLink}
                    target="_blank"
                >
                    <GlobeIcon className="size-3" />
                    <strong className="mt-0.5">{USER_DETAILS.location}</strong>
                </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm opacity-75  print:hidden">
                {USER_DETAILS.contact.email ? (
                    <Button
                        className="size-8 border-muted"
                        variant="outline"
                        size="icon"
                        asChild
                    >
                        <a href={`mailto:${USER_DETAILS.contact.email}`}>
                            <MailIcon className="size-4" />
                        </a>
                    </Button>
                ) : null}

                {USER_DETAILS.contact.social.map((social) => (
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
                {USER_DETAILS.contact.email ? (
                    <a href={`mailto:${USER_DETAILS.contact.email}`}>
                        <span className="underline">
                            {USER_DETAILS.contact.email}
                        </span>
                    </a>
                ) : null}
            </div>
        </div>
    )
}
