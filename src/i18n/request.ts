import { getRequestConfig } from "next-intl/server";
import { routing } from "../i18n";

export default getRequestConfig(async ({ requestLocale }) => {
  // This should typically be `requestLocale` — your library should
  // provide you of the current user
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});