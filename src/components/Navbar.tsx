"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Nav");
  const locale = useLocale();

  const navItems = [
    { href: "/artists", label: t("artists") },
    { href: "/pieces", label: t("pieces") },
    { href: "/submit", label: t("submit") },
    { href: "/admin", label: t("admin") },
  ];

  return (
    <nav className="bg-secondary border-b border-accent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold text-primary">
              Koridor
            </Link>
            <div className="flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}