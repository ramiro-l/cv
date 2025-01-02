"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { SUPPORTED_LANGUAGES } from "@/langs"

const HomeRedirect = () => {
    const router = useRouter()

    useEffect(() => {
        router.push("/" + SUPPORTED_LANGUAGES[0])
    }, [router])

    return null
}

export default HomeRedirect
