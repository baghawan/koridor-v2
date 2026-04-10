import { getRequestConfig } from "next-intl/server";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "id"],
  
  // Used when no locale matches
  defaultLocale: "en",
  
  // No locale prefix for MVP - simple URLs, can add later if traction demands
  localePrefix: "never",
});

// Lightweight wrapper for use in middleware
export type Locale = (typeof routing)["locales"][number];