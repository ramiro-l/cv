"use client";

import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { useTransitionRouter } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Page Not Found | CV",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  const router = useTransitionRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center  py-16">
      <section className="flex flex-wrap items-center justify-center gap-8 text-center">
        <h1 className="text-9xl font-extrabold ">404</h1>
        <div className="flex flex-col gap-1">
          <p className="max-w-72 text-left text-xl opacity-80">
            Sorry, the page you are looking for does not exist.
          </p>
          <div className="w-fit">
            <Button onClick={() => router.push("/")} variant="outline">
              Go to CV
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
