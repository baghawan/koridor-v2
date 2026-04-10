# Feature Research

**Domain:** Street Art Directory
**Researched:** 2026-04-10
**Confidence:** MEDIUM

Based on analysis of 8 competitor products and market patterns.

## Feature Landscape

### Table Stakes (Users Expect These)

Core features without which a street art directory feels broken or incomplete.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Artist profiles with alias, location, bio, styles | Users need to discover and identify artists — this IS the directory | MEDIUM | Must include alias (street art name), city/location, styles/tags, years active. Contact links optional for Phase 1 |
| Artwork/piece listings with photo, artist, city, year | Visual content is the core value — users browse by looking at art | LOW | Photo-first design. Needs artist attribution, location context, approximate year |
| Search/filter by artist name | Users know who they're looking for | LOW | Simple text search, fuzzy matching helpful |
| Search/filter by city | Geographic discovery is primary use case | LOW | Indonesia focus means city filtering is essential |
| Search/filter by style tags | Users browse by aesthetic interest | MEDIUM | Tags like "wildstyle", "bubble", "character", "stencil", "throw-up" |
| Browse/gallery view | Exploratory users need to browse not search | LOW | Grid view of artworks, pagination or infinite scroll |
| Image viewer/gallery lightbox | Users want to examine pieces in detail | LOW | Full-screen view, navigation between images |
| Mobile-friendly design | Most access is mobile/tablet | MEDIUM | Responsive, touch-optimized |
| Basic artist verification | Quality control — prevent fake profiles | LOW | Manual founder verification per PROJECT.md |
| Bilingual UI (EN + BI) | Core requirement per PROJECT.md | MEDIUM | Must serve both languages — Indonesia is the market |

### Differentiators (Competitive Advantage)

Features that set this product apart. Align with core value: Document, preserve, and share Indonesia's street art culture.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Indonesia-focused depth | Global directories skim Indonesia — we're the definitive source | LOW | No competitor focuses on Indonesia — this IS the differentiation |
| Color palette extraction | Unique data — no other directory does this well | MEDIUM | Deferred to Phase 2 per PROJECT.md — defer to v1.x |
| Neighborhood-level location | Indonesia-specific context (village names, jakartan areas) | MEDIUM | Beyond cities — specific neighborhoods: Cicadas,Kemang,SCBD |
| Crew/family associations | Street art is crew-based — connections matter | LOW | Link artists to crews, track crew histories |
| Temporal archive tracking | Graffiti is ephemeral — track what's gone | MEDIUM | "Last seen" dates, disappeared pieces, historical record |
| Artist contact/booking pathway | Future Phase 3, but worth signaling | HIGH | Deferred for now but builds trust early |
| Community submission workflow | Engage the scene — let people contribute | MEDIUM | Per PROJECT.md — submissions need moderation queue |
| Curator narratives | Contextualize the art — tell stories not just show | LOW | Short artist statements, piece descriptions, city context |
| Timeline/history view | Show evolution of artist careers | MEDIUM | Sort by year, show career progression |
| Related artists suggestions | Discovery hook — find more like what you like | LOW | Similar style, same city, same crew |

### Anti-Features (Commonly Requested, Often Problematic)

Features that seem good but create problems.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Real-time location tracking | Users want to see "near me now" | Street art locations are often sensitive — sharing exact addresses enables removal, conflicts with artist consent | General city/neighborhood is sufficient, allow artists to share precise location voluntarily |
| Public artist ratings/reviews | "Like Yelp for artists" | Subjective, gaming risk, drama — bad for a cultural archive | Let users save/favorite artists instead |
| Public messaging to artists | "Direct contact" | Spam, harassment risk, moderation nightmare | Contact form with founder mediation, booking in Phase 3 |
| Automatic geolocation from photos | "Save GPS from uploads" | Privacy, EXIF risks, accuracy issues | Manual location input is better for privacy and accuracy |
| Social sharing features | "Viral growth" | Scope creep, engagement metrics ≠ archive value | Share buttons are low-cost, but not core |
| User accounts for submitters | "Let anyone upload" | Sybil attacks, quality control failure, moderation cost | Founder-submitted only initially, expand to community submissions later with approval queue |
| Livestream/in-progress pieces | "See painting in real-time" | Complexity, legal liability, content moderation | Document finished pieces, not process |
| NFT/blockchain integration | "Web3 buzz" | Complexity, irrelevant to cultural archive mission | Not a differentiator for this use case |

## Feature Dependencies

```
[Artist Profiles]
    └──requires──> [Artwork Listings]
    └──requires──> [Search/Filter]
    └──requires──> [Artist Verification]

[Community Submissions]
    └──requires──> [Artwork Listings]
    └──requires──> [Moderation Queue]

[Color Palette Extraction]
    └──requires──> [Artwork Listings]
    └──requires──> [Artist Profiles]

[Artist Booking]
    └──requires──> [Artist Profiles]
    └──requires──> [Contact Links]
    └──requires──> [Artist Verification]

[Bilingual UI]
    └──requires──> [Artist Profiles] (content)
    └──requires──> [Artwork Listings] (content)
```

### Dependency Notes

- **Artist Profiles requires Verification:** Cannot have unverified artist entries — quality control, prevents fake profiles
- **Artist Profiles requires Listings:** Artist pages are meaningless without their work — artworks linked to artists first
- **Community Submissions requires Moderation:** Unmoderated submissions destroy quality — build approval queue
- **Booking requires Contact Links:** Can't book without contact method — Phase 3 when features align
- **Color Extraction requires Artworks:** Needs images to extract from — Phase 2 feature

## MVP Definition

### Launch With (v1)

Essential minimum — validate the concept exists.

- [x] Artist profiles (alias, city, styles, years active, bio) — core identity
- [x] Artwork listings (photo, artist, city, year) — core content
- [x] Search by artist name — discovery
- [x] Search by city — geographic discovery
- [x] Search by style tags — aesthetic discovery
- [x] Bilingual UI (EN + BI) — core requirement
- [x] Image viewer/gallery — content consumption
- [x] Mobile-friendly design — access patterns
- [x] Manual artist verification — quality control
- [ ] Browse/gallery view — exploratory users
- [ ] Community submissions — seed content, engage scene

### Add After Validation (v1.x)

Features to add once core works.

- [ ] Color palette extraction — unique value (PROJECT.md Phase 2)
- [ ] Crew associations — social graph
- [ ] Temporal archive tracking — disappeared pieces
- [ ] Related artists suggestions — discovery hooks
- [ ] Curator narratives — contextual content
- [ ] Timeline view — career evolution
- [ ] Neighborhood-level location — Indonesia context

### Future Consideration (v2+)

Defer until product-market fit is clear.

- [ ] Artist booking system — Phase 3 per PROJECT.md
- [ ] Monetization — Phase 3 per PROJECT.md
- [ ] User accounts (beyond submission) — complexity that may not be needed
- [ ] API/data export — researcher access
- [ ] Mobile app — native beyond responsive web

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Artist profiles | HIGH | MEDIUM | P1 |
| Artwork listings | HIGH | LOW | P1 |
| Search (artist, city, style) | HIGH | LOW | P1 |
| Bilingual UI | HIGH | MEDIUM | P1 |
| Mobile-friendly | HIGH | MEDIUM | P1 |
| Artist verification | HIGH | LOW | P1 |
| Community submissions | MEDIUM | MEDIUM | P1 (seed) |
| Image viewer | MEDIUM | LOW | P1 |
| Browse/gallery view | MEDIUM | LOW | P2 |
| Crew associations | MEDIUM | LOW | P2 |
| Color palette extraction | MEDIUM | HIGH | P2 (Phase 2) |
| Timeline/history | MEDIUM | MEDIUM | P2 |
| Related artists | LOW | MEDIUM | P2 |
| Neighborhood location | MEDIUM | MEDIUM | P2 |
| Artist booking | HIGH | HIGH | P3 (Phase 3) |
| Monetization | MEDIUM | HIGH | P3 (Phase 3) |

**Priority key:**

- P1: Must have for launch
- P2: Should have, add when possible
- P3: Nice to have, future consideration

## Competitor Feature Analysis

| Feature | Street Art Database | Street Art Cities | Street Art Safari | The Street Art Directory | Our Approach |
|---------|-------------------|-----------------|-----------------|-------------------|--------------|
| Artist profiles | Yes | Yes | Yes | Yes | P1 — full (alias, city, styles, bio, contact) |
| Artwork gallery | Yes (core) | Yes (core) | Yes (core) | Yes (core) | P1 — core value |
| Geolocation/map | Yes (worldmap) | Yes (core) | Yes (core) | No | P1 — city focus, neighborhood detail |
| Search/filter | Basic | Advanced | Advanced | Basic | P1 — multi-axis (artist, city, style) |
| Community uploads | No | Yes (spotters) | Yes | No | P1 — moderated submissions |
| Style tags | No | Yes | Yes | Yes | P1 — standard tags |
| Mobile-friendly | No | Yes | Yes | Yes | P1 — essential |
| Bilingual | No | Yes (12 lang) | Yes (12 lang) | No | P1 — EN + BI only |
| Color extraction | No | No | No | No | P2 — unique feature |
| Crew links | No | No | Yes | No | P2 — social graph |
| Booking | No | No | No | Partial | P3 — defer to Phase 3 |
| Monetization | No | Yes (API) | No | No | P3 — defer to Phase 3 |

### Key Differentiators vs. Competitors

- **Color extraction:** No competitor does this well — unique Phase 2 feature
- **Indonesia focus:** Global directories (Graffiti Database, Street Art Cities) don't deep-dive Indonesia — we're the definitive source
- **Bilingual (EN + BI):** Only Street Art Safari does multilingual at scale — but we do Indonesia market
- **Crew associations:** Mostly ignored — important for graffiti culture
- **Temporal tracking:** No competitor tracks "disappeared" pieces well — archive value

## Sources

### Products Analyzed

- **Graffiti Database** (graffiti-database.com) — 44K+ images, 6300+ artists, global archive
- **Street Art Cities** (streetartcities.com) — Interactive map, open data initiative
- **Street Art Safari** (street-art-safari.com) — Community platform, 12 languages
- **The Street Art Directory** (thestreetartdirectory.wordpress.com) — 1500+ artists gallery
- **The Artful City** (theartfulcity.org) — Guides, legal walls, events
- **CANVS** (canvsart.com) — Public art database, mobile app, city management
- **Art UK** (artuk.org) — 6600+ street art/murals, public collections
- **Artist Find Australia** (artistfind.com.au) — Mural directory with city filtering

### Pattern Summary

- **Core is documentation:** All competitors focus on archiving/discovery — not booking/transaction
- **Community works:** Street Art Safari and Street Art Cities leverage spotters/uploaders
- **Map is universal:** Geolocation is standard across all modern directories
- **Mobile is non-negotiable:** Modern competitors all mobile-first
- **Verification varies:** Manual (us), automated (some), mixed (others)
- **Graffiti-specific tags:** Style tags are standard — "wildstyle", "bubble", "character", "stencil"

---

*Feature research for: Indonesia Street Art Directory*
*Researched: 2026-04-10*