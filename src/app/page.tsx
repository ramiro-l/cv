"use client";

import { SUPPORTED_LANGUAGES } from "@/langs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const HomeRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/" + SUPPORTED_LANGUAGES[0]);
  }, [router]);

  return null;
};

export default HomeRedirect;
