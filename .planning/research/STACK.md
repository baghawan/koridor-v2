# Technology Stack

**Project:** Indonesia Street Art Directory
**Researched:** 2026-04-10
**Confidence:** HIGH

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Next.js** | 15.x (latest) | SSR meta-framework, routing, API | **HIGH confidence** — Dominant React framework with App Router, server actions, built-in image optimization. Far more mature than TanStack Start (which is alpha). Largest ecosystem, most tutorials, best maintained. |
| React | 19.x | UI library | Ships with Next.js 15. |
| TypeScript | 5.x | Type safety | Native to Next.js ecosystem. |

**Why NOT TanStack Start:**
- Alpha status, not production-ready
- Much smaller ecosystem (1,445 snippets vs Next.js 2,505)
- Less community support, fewer tutorials
- The PROJECT.md notes it as "planned" — swap to Next.js

### Database

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **PostgreSQL** | 16.x | Relational database | Already in PROJECT.md. Solid choice for structured data (artists, pieces). |
| **Prisma** | 7.x | ORM, migrations, type-safe queries | **HIGH confidence** — Best-in-class DX for TypeScript + PostgreSQL. Schema-first, migration system, Prisma Studio for debugging. Context7 confirms 7.6.0 as latest with excellent documentation. |

### Styling

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Tailwind CSS** | 4.x | Utility-first CSS | Already planned in PROJECT.md. Pairs well with Next.js. |

### Image Uploads (Critical for Street Art Directory)

| Technology | Purpose | When to Use |
|------------|---------|-------------|
| **UploadThing** | Cloud storage + CDN | **Recommended** — Best DX for Next.js, type-safe file routes, 2GB free tier, automatic chunked uploads. Context7 confirms excellent TypeScript integration. |
| **Cloudflare R2** | S3-compatible storage | When egress costs matter — zero egress fees. More setup required than UploadThing. |
| **Local filesystem** | Dev only | NOT for production — breaks in serverless/containers, no CDN, scales poorly. |

**Decision:** Use UploadThing for Phase 1. Rationale:
- Self-hosted VPS with 40GB SSD is stated in PROJECT.md, but local storage has problems:
  - No CDN = slow image delivery for users far from Indonesia
  - No automatic optimization
  - 40GB fills quickly with high-res graffiti photos
- UploadThing free tier (2GB) handles MVP, then $10/mo for 100GB
- Type-safe API fits TypeScript-first approach
- Handles chunked uploads automatically for large photos

### i18n (Internationalization)

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **react-i18next** | 14.x | Bahasa Indonesia + English | Already planned. Standard choice for React. |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **zod** | 3.x | Schema validation | Validate form data, API inputs |
| **next/image** | Built-in | Image optimization | Automatic resize, WebP conversion, lazy loading |
| **sharp** | 0.33.x | Image processing | If client-side resize needed before upload |
| **react-hook-form** | 7.x | Form state | Simplifies form handling |
| **@tanstack/react-query** | 5.x | Server state | Data fetching, caching (works with Next.js) |

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Framework | Next.js 15 | TanStack Start | Alpha status, small ecosystem |
| ORM | Prisma | Drizzle | Prisma has better migration system, more mature |
| Storage | UploadThing | Local filesystem | No CDN, breaks in production |
| Storage | UploadThing | AWS S3 | Higher egress costs ($0.09/GB), more complex |
| Storage | UploadThing | Cloudinary | More expensive ($89/mo vs $10/mo), overkill for directory |

## Installation

```bash
# Core Next.js setup
npx create-next-app@latest . --typescript --tailwind --eslint

# Dependencies
npm install @prisma/client prisma react-i18next i18next next-auth zod react-hook-form
npm install @tanstack/react-query

# UploadThing (recommended for images)
npm install uploadthing @uploadthing/react

# Dev dependencies
npm install -D @types/node typescript

# Initialize Prisma
npx prisma init
```

## Database Schema (Prisma)

```prisma
// prisma/schema.prisma (draft)
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Artist {
  id          String   @id @default(cuid())
  name        String
  alias       String?
  city        String
  bio         String?
  styles      String[] // tags
  yearsActive Int?
  links       Json?    // { instagram, website }
  verified    Boolean  @default(false)
  createdAt   DateTime @default(now())
  pieces      Piece[]
}

model Piece {
  id        String   @id @default(cuid())
  title     String?
  imageUrl  String
  artistId  String
  artist    Artist   @relation(fields: [artistId], references: [id])
  city      String
  year      Int?
  styles    String[]
  createdAt DateTime @default(now())
}
```

## Infrastructure Considerations

**Self-hosted VPS (Biznet Gio):**
- 2GB RAM is tight — Next.js SSR memory usage needs monitoring
- Consider Next.js standalone output mode to reduce memory
- UploadThing offloads image storage/bandwidth, reducing server load

**Environment variables needed:**
```
DATABASE_URL=postgresql://...
UPLOADTHING_SECRET=...
UPLOADTHING_APP_ID=...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Sources

- Context7: Next.js documentation (App Router, server actions, form handling)
- Context7: Prisma documentation (schema, migrations, PostgreSQL)
- WebSearch: "Next.js image upload best practices 2026" — PkgPulse blog, StarterPick blog
- WebSearch: "UploadThing vs Cloudflare R2 vs S3" — multiple 2026 comparisons
- PROJECT.md existing constraints

---

*Stack research: 2026-04-10*