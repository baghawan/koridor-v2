---
phase: 01-foundation
plan: 02
subsystem: i18n
tags:
  - next-intl
  - internationalization
  - bilingual
dependency_graph:
  requires: []
  provides:
    - i18n configuration
    - LanguageSwitcher component
tech_stack:
  added:
    - next-intl
  patterns:
    - localePrefix: "never" (no URL prefix)
    - language from cookie/header
key_files:
  created:
    - src/i18n.ts
    - src/middleware.ts
    - src/i18n/request.ts
    - messages/en.json
    - messages/id.json
    - src/components/LanguageSwitcher.tsx
  modified:
    - next.config.ts
    - src/app/layout.tsx
    - src/app/page.tsx
decisions:
  - localePrefix "never" for MVP simplicity - can add later if needed
  - Language from browser Accept-Language header or cookie
metrics:
  duration: 5 minutes
  completed: 2026-04-10
---

# Phase 1 Plan 2: Internationalization (next-intl) Summary

## Overview

Configured next-intl for bilingual UI support with Bahasa Indonesia and English. Set up middleware for locale detection and created language switcher component.

## Key Artifacts

- **src/i18n.ts**: i18n configuration with locales ['en', 'id'], defaultLocale: 'en', localePrefix: "never"
- **src/middleware.ts**: Middleware for locale detection with cookie/header preference
- **src/i18n/request.ts**: Request configuration for loading locale messages
- **messages/en.json**: English UI strings (Home, Nav, Common, Language)
- **messages/id.json**: Bahasa Indonesia UI strings
- **src/components/LanguageSwitcher.tsx**: Client component for switching between EN/ID

## Implementation Notes

- No locale prefix in URLs (localePrefix: "never") for simpler MVP
- Language detected from browser Accept-Language header on first visit
- Stored in cookie for subsequent visits
- Using next-intl plugin in next.config.ts for server-side integration

## Acceptance Criteria Verification

- [x] src/i18n.ts exists with defineRouting({ locales: ["en", "id"] })
- [x] defaultLocale is "en"
- [x] src/middleware.ts exists with createMiddleware
- [x] next.config.ts imports createNextIntlPlugin
- [x] messages/en.json has Home, Nav, Common translations
- [x] messages/id.json has corresponding translations
- [x] LanguageSwitcher component uses useLocale and router
- [x] npm run build succeeds without errors

## Deviations from Plan

### Fixed Issues

**1. [Rule 3 - Missing Required File] Created src/i18n/request.ts**
- **Issue:** next-intl requires request configuration file
- **Fix:** Created src/i18n/request.ts with getRequestConfig
- **Files modified:** src/i18n/request.ts (new)

**2. [Rule 1 - Import Path Fix] Fixed import path in request.ts**
- **Issue:** Import from './i18n' didn't resolve
- **Fix:** Changed to '../i18n' (relative to src/i18n/request.ts)
- **Files modified:** src/i18n/request.ts

### Route Structure Simplification

- Kept flat route structure (src/app/layout.tsx, src/app/page.tsx)
- Did not create [locale] folder structure since localePrefix: "never"
- Layout provides NextIntlClientProvider at root level

## Auth Gates

None - no authentication required for i18n features.

## Known Stubs

None - all translation strings are populated with actual content.

## Threat Flags

None - i18n configuration does not introduce security-relevant surface.