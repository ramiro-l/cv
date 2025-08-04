"use client"

import { useEffect, useState } from "react"

export default function EditMode() {
    const [isEditing, setIsEditing] = useState(false)
    const [hasChanges, setHasChanges] = useState(false)
    const [originalContent, setOriginalContent] = useState("")

    useEffect(() => {
        setOriginalContent(document.body.innerText)
    }, [])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key.toLowerCase() === "e") {
                event.preventDefault()
                const body = document.body
                if (body.contentEditable === "true") {
                    body.contentEditable = "false"
                    document.designMode = "off"
                    setIsEditing(false)
                } else {
                    body.contentEditable = "true"
                    document.designMode = "on"
                    setIsEditing(true)
                }
            }

            if (event.ctrlKey && event.key.toLowerCase() === "r") {
                event.preventDefault()
                location.reload()
            }
        }

        const handleInput = () => {
            console.log("input")
            const currentContent = document.body.innerText
            console.log(currentContent === originalContent)

            setHasChanges(currentContent !== originalContent)
        }

        window.addEventListener("keydown", handleKeyDown)

        // Detectar cambios en el cuerpo de la página
        document.body.addEventListener("input", handleInput)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            document.body.removeEventListener("input", handleInput)
        }
    }, [originalContent])

    return (
        <div className="left-0 top-0 z-50 w-full">
            {hasChanges && (
                <div
                    className="w-full bg-foreground py-1 text-center text-white  print:hidden"
                    contentEditable="false"
                >
                    <b>You have changes</b>. Press{" "}
                    <span className="rounded-sm bg-secondary/5 px-1">
                        Ctrl + R
                    </span>{" "}
                    to discard changes.
                </div>
            )}
            {isEditing && (
                <div
                    className="w-full bg-green-500 py-1 text-center text-white print:hidden"
                    contentEditable="false"
                >
                    <b>Editing mode</b>. Press{" "}
                    <span className="rounded-sm bg-green-600 px-1">
                        Ctrl + E
                    </span>{" "}
                    to disable.
                </div>
            )}
        </div>
    )
}
