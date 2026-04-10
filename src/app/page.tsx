"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const t = useTranslations("Home");
  
  return (
    <main className="min-h-screen bg-secondary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end">
          <LanguageSwitcher />
        </div>
        <h1 className="text-4xl font-bold text-primary">Koridor</h1>
        <p className="mt-4 text-lg">{t("subtitle")}</p>
      </div>
    </main>
  );
}