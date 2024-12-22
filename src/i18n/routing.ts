import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { SUPPORTED_LANGUAGES } from '@/i18n/const';

export const routing = defineRouting({
    locales: SUPPORTED_LANGUAGES,
    defaultLocale: SUPPORTED_LANGUAGES[0],
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);