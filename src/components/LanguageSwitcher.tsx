"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const t = useTranslations("Language");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // No locale prefix - set cookie instead for language preference
    // Reload the page with new locale (middleware reads cookie)
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    router.refresh();
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLocale("en")}
        className={`px-2 py-1 rounded ${locale === "en" ? "bg-primary text-white" : "text-gray-300"}`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale("id")}
        className={`px-2 py-1 rounded ${locale === "id" ? "bg-primary text-white" : "text-gray-300"}`}
      >
        ID
      </button>
    </div>
  );
}