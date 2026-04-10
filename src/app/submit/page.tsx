import { useTranslations } from "next-intl";

export const metadata = {
  title: "Submit",
  description: "Submit a piece for review",
};

export default function SubmitPage() {
  const t = useTranslations("Submit");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary">{t("title")}</h1>
      <p className="text-gray-400 mt-2">{t("description")}</p>
    </div>
  );
}