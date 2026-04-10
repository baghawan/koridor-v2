import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n";

export default createMiddleware(routing);

export const config = {
  // Match all paths - no locale prefix, just detect from cookie/header
  matcher: ["/:path*"]
};