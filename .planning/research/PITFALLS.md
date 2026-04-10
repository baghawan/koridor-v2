# Domain Pitfalls: Indonesia Street Art Directory

**Domain:** Street Art Directory
**Researched:** 2026-04-10
**Project Context:** Greenfield directory of Indonesian street art artists, pieces, and color palettes

---

## Critical Pitfalls

Mistakes that cause rewrites, legal issues, or complete project failure.

### Pitfall 1: Ignoring Graffiti's Consent Complexity

**What goes wrong:**
Photography of graffiti exists in a legal gray area. Unlike gallery art, graffiti is often on property the artist doesn't own. A directory publicly linking artworks to locations can cause problems for both artists (via police/property owners) and property owners (via spotlighting illegal pieces). Documentation =/= permission to display.

**Why it happens:**
Assumption that "art photography rights" covers all cases. In reality, photographers may own the photo but the artwork itself carries reproduction rights. Property owners may want pieces deleted that attract attention to their walls.

**Consequences:**
- DMCA takedowns from property owners
- Artists requesting removal en masse (trust destruction)
- Legal exposure if location data enables vandalism
- Platform reputation damage

**Prevention:**
1. **Explicit consent workflow** — Don't just get artist permission; get property owner permission where applicable
2. **Location granularity options** — Allow "city only" vs "exact address" for artists to control visibility
3. **Opt-out mechanism** — One-click request for takedown, process within 24 hours
4. **Waivers for documentation** — Have a clear consent form covering photography + display rights

**Detection:**
- Track removal requests by category (artist vs property owner request)
- Monitor for DMCA complaints
- Audit location data for pieces where property owner consent is unclear

**Phase mapping:** Phase 1 — Core platform must include consent framework

---

### Pitfall 2: Launching Without Critical Mass of Quality Data

**What goes wrong:**
A directory with <50 artists or <200 pieces looks abandoned. Users bounce, no SEO traction, community doesn't engage. This is the #1 killer of directory projects.

**Why it happens:**
Underestimating the seed data required for a "complete" feel. Building the platform before populating it.

**Consequences:**
- Poor user experience → high bounce rate
- No search index for SEO
- No reason for artists to join (no audience)
- Death spiral: no users → no content → no users

**Prevention:**
1. **Pre-launch seeding target** — Minimum 100 artists, 500+ pieces before public launch
2. **Founder-driven content seeding** — Manually document from personal network first
3. **Phase gating** — Don't launch public submission until seed threshold met
4. **Quality over quantity** — Better 50 excellent profiles than 500 bare-bones ones

**Detection:**
- Track "empty category" rates
- Monitor average profile completeness score (bio, photo, contact)
- User survey: "Did you find what you were looking for?"

**Phase mapping:** Phase 1 — Seed data required BEFORE public launch

---

### Pitfall 3: No Artist Opt-Out or Control

**What goes wrong:**
Graffiti writers have complicated relationships with documentation. Some want fame, others want anonymity (especially in countries where graffiti is illegal). Not allowing artists to control their presence = no trust = no submissions.

**Why it happens:**
Treating artists like "business listings" instead of a privacy-sensitive community. Not understanding street culture.

**Consequences:**
- Key artists refusing to participate
- Mass opt-outs after launch
- Loss of credibility within the graffiti community
- Legal: if documenting illegal graffiti without consent, platform liability

**Prevention:**
1. **Artist dashboard** — Self-service to edit/delete their profile
2. **"List me / Don't list me" toggle** — One-click to be excluded
3. **Edit requests** — Fast turnaround (24-48 hours) for name changes, piece removal
4. **Anonymous mode** — Allow alias-only (no real name, no location) for sensitive artists

**Detection:**
- Track opt-out request frequency
- Monitor time-to-processing for edit requests
- Community feedback (word of mouth in scene)

**Phase mapping:** Phase 1 — Artist control features core to platform

---

### Pitfall 4: Poor Search and Discovery Architecture

**What goes wrong:**
Users can't find what they're looking for. Directory value = findability. Weak search = useless platform.

**Why it happens:**
Generic search implementation without understanding how users actually look for graffiti artists (by style, city, era, collective affiliation, not just name).

**Consequences:**
- User frustration → platform abandonment
- No engagement with secondary browse paths
- SEO penalty for thin content on unvisited pages

**Prevention:**
1. **Multi-facet filtering** — By city, style (wildstyle, bubble, throwie), year, medium (spray, mural, sticker)
2. **Autocomplete on multiple fields** — Artist name, city, style tag
3. **Related artists** — "Artists like X" recommendation
4. **City drill-down** — Browse by Jakarta → South Jakarta → neighborhood

**Detection:**
- Search "no results" rate
- Browse vs search ratio
- Time-to-click (are they finding things?)

**Phase mapping:** Phase 1 — Search foundational to core use case

---

## Moderate Pitfalls

Mistakes that cause slower growth or manageable issues.

### Pitfall 5: Treating SEO as Afterthought

**What goes wrong:**
Directory sites are content engines. Without proper SEO architecture from day one, no organic discovery → no traffic → no growth.

**Why it happens:**
Building features before URLs, metadata, internal linking. Not planning URL structure for indexable pages.

**Consequences:**
- Missing out on 60%+ of directory traffic (search)
- Index bloat / duplicate content penalties
- Individual artist pages not ranking

**Prevention:**
1. **SEO-first URL structure** — `/artists/[alias]` not `/profile?id=123`
2. **Unique meta every page** — Title, description, OG images per artist/piece
3. **Structured data** — JSON-LD for "Person" (artist), "VisualArtwork" (pieces)
4. **Sitemap built-in** — Auto-generate on new content

**Phase mapping:** Phase 1 — SEO foundation required

---

### Pitfall 6: No Bilingual Foundation from Day One

**What goes wrong:**
Project specifies bilingual (Bahasa Indonesia + English) but defers i18n to later. Rewriting content architecture later = massive refactor.

**Why it happens:**
Treating i18n as "UI strings only" rather than "all user-generated content"

**Consequences:**
- Content requires migration later
- Search doesn't work across languages
- Duplicate content SEO issues

**Prevention:**
1. **Database i18n from schema** — Artist bio, piece titles multilingual from day one
2. **Language field on content** — Content can exist in either or both
3. **URL strategy** — `/id/artists` vs `/en/artists` or query params
4. **Fallback logic** — Prefer user's locale, fallback to English

**Phase mapping:** Phase 1 — Core schema must support bilingual

---

### Pitfall 7: Image Management Without Optimization

**What goes wrong:**
Graffiti is visual. Bad image handling = broken gallery, slow pages, poor UX.

**Why it happens:**
Not planning for varied photo quality, originals vs display sizes, mobile performance.

**Consequences:**
- Slow page loads (image weight)
- Broken thumbnails if original aspect ratios vary
- Mobile users abandoning
- Storage costs exploding

**Prevention:**
1. **Image pipeline** — Auto-generate thumbnails (300px), web (1200px), original preserved
2. **Progressive loading** — Blur-up or placeholder
3. **CDN-ready** — Plan for eventual CDN, not local-only
4. **Watermark option** — At display resolution (not full quality)

**Phase mapping:** Phase 1 — Image handling foundational

---

### Pitfall 8: No Moderation Framework for Submissions

**What goes wrong:**
Open submissions → spam, low-quality content, inappropriate images. Trust destruction.

**Why it happens:**
Assuming "community submissions" means "publish immediately."

**Consequences:**
- Irrelevant/inappropriate content degrading trust
- SEO penalty for low-quality pages
- Moderation bottleneck for team

**Prevention:**
1. **Submission queue** — All content goes to queue first
2. **Clear guidelines** — What makes a valid submission
3. **Artist verification** — For self-claiming profiles
4. **Quality gates** — Min photo quality, required fields

**Phase mapping:** Phase 1 — Moderation required for community submissions

---

## Minor Pitfalls

Operational issues easily fixed if caught early.

### Pitfall 9: Monetization Planned Too Late

**What goes wrong:**
Building for free, then scrambling to add revenue. Architecture doesn't support it.

**Prevention:**
- Plan the model early (even if deferred)
- Build relationships with artists while free
- Platform features shouldn't require pivot

**Phase mapping:** Phase 3 — Planning now, implementation later

---

### Pitfall 10: Ignoring Mobile Experience

**What goes wrong:**
60%+ of users browsing on mobile. Slow, broken layouts = abandoned sessions.

**Prevention:**
1. Mobile-first design from first wireframe
2. Test on real mobile devices, not just DevTools
3. Core flows work on 3G connections

**Phase mapping:** Phase 1 — Mobile is primary

---

### Pitfall 11: No Maintenance Cadence

**What goes wrong:**
Launch ≠ done. No plan for broken links, stale data, outdated pieces.

**Prevention:**
1. Quarterly link checks
2. Annual artist re-verification
3. "Piece status" field (active / buffed / restored)
4. Community flagging for outdated content

**Phase mapping:** Ongoing — Post-launch maintenance

---

### Pitfall 12: No Analytics Foundation

**What goes wrong:**
Building without measuring = optimizing blindly.

**Prevention:**
1. Page-level analytics from day one
2. Search query tracking
3. User journey funnels
4. Artist engagement metrics

**Phase mapping:** Phase 1 — Analytics core infrastructure

---

## Phase-Specific Warning Summary

| Phase | Critical Pitfalls to Avoid | Mitigation |
|-------|---------------------------|------------|
| **Phase 1** | Consent framework, artist opt-out, critical mass seeding, bilingual, search, mobile | Build these into core platform, don't defer |
| **Phase 2** | Image optimization, maintenance scheduling, analytics baseline | Automate where possible |
| **Phase 3** | Monetization alignment, community trust building | Plan model early, build relationships |

---

## Sources

- Common directory mistakes: [Dutable - Common Mistakes Directory Websites](https://dutable.com/common-mistakes-to-avoid-when-creating-a-directory-website/) (2026-02)
- Directory listing issues: [Jasmine Directory - Listing Mistakes](https://www.jasminedirectory.com/blog/common-directory-listing-mistakes-to-avoid/) (2025-06)
- Street art copyright: [NUJS IPTLS - Street Art Copyright Analysis](https://nujsiplaw.wordpress.com/2024/01/20/navigating-copyright-and-ownership-complexities-in-street-art-an-in-depth-analysis/) (2024-01)
- Artist rights: [Graphic Artists Guild - Fair Use](https://graphicartistsguild.org/fair-use-or-infringement/) (2018-01)
- Content protection: [ArtWeb - Legal Requirements](https://blog.artweb.com/how-to/legal-website-requirements-advice-for-artists/) (2024-08)
- Existing reference: [Graffiti Database - Netherlands](https://graffiti-database.com/about)
- Comparable platform: [Street Art Cities - Acceptable Use Policy](https://streetartcities.com/legal/acceptable-use)

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Consent/legal pitfalls | HIGH | Based on street art legal research, comparable platforms |
| Directory operational pitfalls | HIGH | General directory patterns apply |
| Artist opt-out trust issues | HIGH | Community-specific, well-documented in similar platforms |
| Technical pitfalls | MEDIUM | Standard patterns, specifics need validation during build |