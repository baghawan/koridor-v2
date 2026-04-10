import { useTranslations } from "next-intl";

export const metadata = {
  title: "Admin",
  description: "Manage artists and artworks",
};

export default function AdminPage() {
  const t = useTranslations("Admin");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary">{t("title")}</h1>
      <p className="text-gray-400 mt-2">{t("description")}</p>
    </div>
  );
}