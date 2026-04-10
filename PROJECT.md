# Indonesia Graffiti Directory - Project Context

## Overview

**Project Name:** Indonesia Graffiti Directory (koridor-v2)

**One-liner:** A directory of Indonesian graffiti artists, their pieces, and color palettes - serving as archive, cultural study, and future booking platform.

**Mission:** Document, preserve, and share Indonesia's graffiti culture with the world.

---

## Research Summary

### Existing Competitors (Why this still makes sense)

| Platform          | What it does                  | Gap for Indonesia               |
| ----------------- | ----------------------------- | ------------------------------- |
| Street Art Safari | Global map + artist directory | No dedicated Indonesia focus    |
| Graffiti Database | 44K images, 6.3K artists      | User-run, not Indonesia-focused |
| Intergraff        | Regional archives             | Not active, no Indonesia        |
| Street Art Cities | Interactive map               | Missing cultural depth          |
| Urban Nation      | Berlin artist database        | Regional focus (not Indonesia)  |

**Conclusion:** No dedicated Indonesia-focused directory exists. This fills a real gap.

---

## Requirements

### Phase 1 (MVP - Directory)

- **Artist profiles** - name, alias, location (city), bio, styles, years active, contact links
- **Piece/artwork listings** - photo, artist, city, year, style, color palette (future)
- **Discovery** - search by artist name, city, style tags
- **Bilingual** - Bahasa Indonesia + English (i18n)
- **Community submissions** - visitors can submit pieces for review
- **Artist verification** - no fake claims (manual review by founder)

### Phase 2 (Color Palette)

- Auto-extract dominant colors from piece images
- Match colors to paint brand databases (Montana, Molotow, Ironlak, etc.)
- Community corrections ("suggest the correct palette")
- Search by color

### Phase 3 (Booking & Monetization)

- Artist booking for events/walls
- Offline store partnerships (paint products)
- Commission or affiliate revenue

---

## Decisions Made

| Decision               | Answer                                                                                                              | Rationale                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Primary purpose        | Archive + cultural study + (future) booking                                                                         | Long-term archive is the core; booking is "nice to have" later |
| Launch scope           | Indonesia-first, global-extensible                                                                                  | Build Indonesia first, architecture supports global later      |
| Artist data model      | Name, alias, location, bio, styles, years active, contact                                                           | Enough for archive/study, not too much burden                  |
| Piece data model       | Photo, artist, city, year, style                                                                                    | Enough metadata for discovery                                  |
| Color palette approach | Auto-extract → match to brand colors                                                                                | MVP skips artist input (they forget colors anyway)             |
| Content seeding        | Friends (C) + scrape from their IG with permission (D) + personal docs (B) in parallel → open submissions (A) later | Leverages founder's network                                    |
| Monetization           | Skip for now, focus on traffic                                                                                      | MVP doesn't need revenue                                       |
| Languages              | Bahasa Indonesia + English                                                                                          | Local credibility + global access                              |
| Artist opt-out         | Immediate takedown on request                                                                                       | Standard practice, builds trust                                |
| Verification           | Manual by founder                                                                                                   | Knows the scene, network is credibility                        |
| Photo attribution      | Credit source (artist IG or name), assume permission                                                                | Simpler than formal licensing                                  |
| Discovery paths        | By artist, city, style (color in Phase 2)                                                                           | All valuable for different use cases                           |

---

## Paint Brands (Indonesia)

### Known graffiti spray paint brands in Indonesia:

- ... (to be documented)

> **Note:** Color palette brand DB to be built in Phase 2.

---

## Key Risks & Mitigations

| Risk                                | Mitigation                                                |
| ----------------------------------- | --------------------------------------------------------- |
| Copyright claims from photographers | Attribution policy, permission workflow, takedown process |
| Artists claiming fake profiles      | Manual verification (founder knows the scene)             |
| No traffic early                    | Leveraged founder's network + personal docs               |
| Content quality variance            | Review queue before publishing                            |

---

## Architecture Notes

- **Frontend + CMS:** TanStack Start (SSR meta-framework)
- **Database:** PostgreSQL (self-hosted on VPS)
- **Storage:** Local file system
- **Styling:** Tailwind CSS
- **i18n:** react-i18next or similar
- **Phase 2:** Color extraction (Color Thief or similar library)

### Server Specs (User Provides)

- Provider: Biznet Gio
- Spec: 2 vCPU, 2GB RAM, 40GB SSD NVMe

---

## Related Documents

- `.planning/REQUIREMENTS.md` - Structured requirements
- `.planning/ROADMAP.md` - Phase breakdown
