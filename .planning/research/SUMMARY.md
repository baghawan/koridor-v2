# Project Research Summary

**Project:** Indonesia Street Art Directory
**Domain:** Artist/Street Art Directory Platform
**Researched:** 2026-04-10
**Confidence:** HIGH

## Executive Summary

This is a media-centric directory platform for documenting Indonesian street art artists and their work. Research confirms that successful street art directories (Graffiti Database, Street Art Cities, Street Art Safari) treat media as first-class entities with rich metadata, connected to artist profiles through normalized relationships. The key insight: this platform must solve the consent/legal complexity unique to graffiti (artists often on property they don't own) while building critical mass BEFORE launch — a directory with <50 artists or <200 pieces looks abandoned and dies.

The recommended stack is Next.js 16.x + Prisma + PostgreSQL + UploadThing for images. This differs from PROJECT.md's "planned" TanStack Start (alpha status, too risky). Core phase structure: (1) Foundation + Seed Data, (2) Core Discovery + Submission, (3) Color Palettes + Monetization per PROJECT.md. Critical pitfalls to avoid: no consent framework, launching without 100+ artists, no artist opt-out controls, weak search. Bilingual (EN+BI) must be in schema from day one, not bolted on later.

## Key Findings

### Recommended Stack

**Core technologies:**
- **Next.js 16.x** — SSR meta-framework with App Router, server actions, built-in image optimization. Dominant React framework with largest ecosystem.
- **PostgreSQL 16.x + Prisma 7.x** — Relational DB with best-in-class DX for TypeScript. Schema-first migrations, Prisma Studio for debugging.
- **Tailwind CSS 4.x** — Utility-first styling, pairs well with Next.js.
- **UploadThing** — Cloud storage + CDN for images. 2GB free tier handles MVP. Type-safe API, automatic chunked uploads, offloads server load. Recommended over local filesystem (no CDN, breaks in production) or Cloudinary (overkill).
- **react-i18next 14.x** — Bahasa Indonesia + English support.

**Why NOT TanStack Start:** Alpha status, small ecosystem (1,445 snippets vs Next.js 2,505), not production-ready. Swap from PROJECT.md recommendation.

### Expected Features

**Must have (table stakes):**
- Artist profiles (alias, city, styles, years active, bio) — core identity
- Artwork listings (photo, artist, city, year) — core content
- Search by artist name, city, style tags — discovery pathways
- Gallery view + image lightbox — content consumption
- Mobile-friendly design — 60%+ mobile access
- Artist verification — quality control, founder-mediated
- Bilingual UI (EN + BI) — core requirement per PROJECT.md

**Should have (competitive):**
- Community submission workflow — seed content, engage scene
- Crew associations — social graph for graffiti culture
- Related artists suggestions — discovery hooks
- Curator narratives — contextual content

**Defer (v2+):**
- Color palette extraction — Phase 2 per PROJECT.md
- Artist booking system — Phase 3
- Monetization — Phase 3

### Architecture Approach

Media-centric pattern with clear separation: **Content Ingestion** (uploads, processing, storage) from **Content Presentation** (gallery, search, profiles) with shared data layer.

**Major components:**
1. **Artist Service** — Profile CRUD, verification status, relationships to pieces
2. **Piece/Gallery Service** — Artwork uploads, storage, gallery display
3. **Lookup Services** (City, Style) — Normalized reference data prevents duplication
4. **Search Service** — Unified search across artists and pieces
5. **Storage Service** — File handling with thumbnail generation

### Critical Pitfalls

1. **Ignoring graffiti consent complexity** — Legal gray area (artist doesn't own property). Requires explicit consent workflow, location granularity options, opt-out mechanism. Phase 1 must include consent framework.
2. **Launching without critical mass** — #1 killer of directories. Need 100+ artists, 500+ pieces BEFORE public launch. Death spiral: no users → no content → no users.
3. **No artist opt-out/control** — Street culture has privacy-sensitive artists. Must have self-service dashboard, "list me / don't list me" toggle, edit requests. No trust = no submissions.
4. **Poor search architecture** — Directory value = findability. Multi-facet filtering (city, style, year), autocomplete, related artists.

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Foundation & Seed Data
**Rationale:** Cannot launch a directory without content. Schema must support bilingual from day one. Also need consent framework built into core (not bolted on later).

**Delivers:** 
- Database schema with City, Style, Artist, Piece models
- Prisma migrations
- Artist Service with CRUD
- Verification workflow
- Consent framework (location granularity, opt-out)
- Seed data: 100+ artists, 500+ pieces (pre-launch minimum)

**Addresses:** 
- Artist profiles, verification, bilingual schema
- Pitfall #1 (consent), Pitfall #2 (critical mass), Pitfall #3 (opt-out)

**Avoids:** Launching empty → death spiral

---

### Phase 2: Core Discovery & Submission
**Rationale:** Platform needs to be usable for discovery and community engagement. Submission requires moderation queue — unmoderated content destroys trust.

**Delivers:**
- Piece Service with upload handling
- Gallery UI (grid view)
- Image viewer/lightbox
- Search with filters (artist, city, style)
- Submission flow with moderation queue
- Mobile-friendly responsive design

**Addresses:**
- Artwork listings, gallery, search, community submissions
- Pitfall #8 (moderation framework), Pitfall #10 (mobile)

**Avoids:** Open submissions → spam, trust destruction

---

### Phase 3: Discovery Enhancement & Analytics
**Rationale:** Enhance findability and establish measurement foundation. This phase adds features that differentiate and measure.

**Delivers:**
- Related artists suggestions
- Crew associations
- Curator narratives
- Timeline/history view
- Neighborhood-level location (beyond city)
- Analytics foundation (page-level, search queries, funnels)

**Addresses:**
- Differentiators: crew links, narratives, neighborhood detail
- Pitfall #12 (no analytics)

---

### Phase 4: Color Palette Extraction (Phase 2)
**Rationale:** Unique feature per PROJECT.md. Requires image pipeline working from Phase 2.

**Delivers:**
- Color extraction from artwork images
- Palette display on piece pages
- Color-based search/filter

**Uses:** UploadThing, sharp for image processing

---

### Phase 5: Monetization & Booking (Phase 3)
**Rationale:** Platform needs to be stable and have audience before monetization.

**Delivers:**
- Artist booking pathway (founder-mediated)
- API for researchers (per FEATURES.md)
- Monetization model (TBD based on Phase 3 learnings)

### Phase Ordering Rationale

- **Seed data before public launch:** Pitfall #2 (critical mass) is existential risk
- **Consent before submissions:** Cannot let community submit without legal framework
- **Schema before i18n:** Easier to translate stable data than add translations to evolving schema
- **Storage last in Phase 1:** Can mock file URLs, plug in real storage later
- **Moderation before submissions:** Pitfall #8 — unmoderated kills trust
- **Analytics after core works:** Need stable flows to measure

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 4 (Color Extraction):** Complex image processing pipeline, needs algorithm research
- **Phase 5 (Monetization):** Business model needs validation, defer decisions

Phases with standard patterns (skip research-phase):
- **Phase 1 (Foundation):** Next.js + Prisma well-documented, schema patterns proven
- **Phase 2 (Discovery):** Gallery/search patterns standard across directories

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Based on Context7 docs, Next.js dominates ecosystem, Prisma best-in-class for TypeScript |
| Features | MEDIUM | 8 competitor products analyzed, clear patterns, but Indonesian market has unique needs |
| Architecture | MEDIUM-HIGH | Matches proven patterns (MusicBrainz, INGRID, PhotoPrism), build order logical |
| Pitfalls | HIGH | Legal pitfalls from street art research, operational pitfalls from directory patterns |

**Overall confidence:** HIGH

### Gaps to Address

- **Image optimization pipeline:** Specific implementation (thumbnail sizes, CDN migration path) needs validation during Phase 2 build
- **Color palette extraction algorithm:** How to extract/detect colors from uploaded photos — needs Phase 4 research before implementation
- **Indonesian city/neighborhood data:** Need curated list of Indonesian cities and neighborhoods for lookup table

## Sources

### Primary (HIGH confidence)
- Context7: Next.js documentation (App Router, server actions)
- Context7: Prisma documentation (schema, migrations, PostgreSQL)
- Context7: UploadThing integration with Next.js

### Secondary (MEDIUM confidence)
- WebSearch: "Next.js image upload best practices 2026" — PkgPulse, StarterPick
- WebSearch: "UploadThing vs Cloudflare R2 vs S3" — 2026 comparisons
- 8 competitor products analyzed: Graffiti Database, Street Art Cities, Street Art Safari, The Street Art Directory, The Artful City, CANVS, Art UK, Artist Find Australia

### Tertiary (LOW confidence)
- INGRID (academic graffiti knowledge graph) — architectural patterns, needs validation during implementation
- MusicBrainz Database Schema — reference pattern, adapted for this domain

---
*Research completed: 2026-04-10*
*Ready for roadmap: yes*