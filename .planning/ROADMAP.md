# Roadmap: Indonesia Street Art Directory

## Overview

A bilingual (Bahasa Indonesia + English) directory for documenting Indonesian street art artists and their artwork. The journey moves from foundational infrastructure through artist/artwork management, discovery features, community engagement, and final polish. Each phase delivers a coherent, verifiable capability.

## Phases

- [ ] **Phase 1: Foundation** - Project setup, database schema, i18n, basic routing
- [ ] **Phase 2: Artist Profiles** - Artist CRUD, profiles, search, filter by city/style
- [ ] **Phase 3: Artwork Management** - Artwork CRUD, admin functions, storage
- [ ] **Phase 4: Gallery & Discovery** - Gallery view, lightbox, browse by city/style, homepage
- [ ] **Phase 5: Search & Filtering** - Unified search across artists/artworks, advanced filters
- [ ] **Phase 6: Community Submissions** - Submission form, moderation queue, approval flow
- [ ] **Phase 7: Mobile & Polish** - Responsive design, touch interactions, performance

## Phase Details

### Phase 1: Foundation
**Goal**: Project infrastructure ready with database schema, internationalization, and routing
**Depends on**: Nothing (first phase)
**Requirements**: I18N-01, I18N-02, I18N-03, I18N-04, I18N-05
**Success Criteria** (what must be TRUE):
  1. Next.js project runs locally with TypeScript and Tailwind CSS
  2. PostgreSQL database schema created with Prisma migrations
  3. Bilingual UI renders correctly in Bahasa Indonesia and English
  4. User can switch between languages from any page
  5. Artist and Artwork database models support bilingual content
**Plans**: 3 plans

### Phase 2: Artist Profiles
**Goal**: Users can view, search, and filter artist profiles
**Depends on**: Phase 1
**Requirements**: ARTP-01, ARTP-02, ARTP-03, ARTP-04, ARTP-05, ARTP-06, ARTP-07, ARTP-08, ARTP-09, ARTP-10
**Success Criteria** (what must be TRUE):
  1. User can view list of all artists with pagination
  2. User can view individual artist profile with alias, location, bio, styles, years active
  3. User can search artists by name with text search
  4. User can filter artists by city
  5. User can filter artists by style tags
  6. User can view artist's artworks on their profile
  7. Admin can create, edit, delete artist profiles
  8. Admin can mark artist as verified
**Plans**: TBD
**UI hint**: yes

### Phase 3: Artwork Management
**Goal**: Admin can manage artwork entries with photo upload
**Depends on**: Phase 1
**Requirements**: ARTW-08, ARTW-09, ARTW-10
**Success Criteria** (what must be TRUE):
  1. Admin can add new artwork with photo, artist, city, year, style
  2. Admin can edit artwork metadata
  3. Admin can delete artwork
  4. Images are stored and served via UploadThing
**Plans**: TBD
**UI hint**: yes

### Phase 4: Gallery & Discovery
**Goal**: Users can browse artworks in gallery view with lightbox
**Depends on**: Phase 3
**Requirements**: ARTW-01, ARTW-02, ARTW-03, ARTW-04, DISC-01, DISC-02, DISC-03
**Success Criteria** (what must be TRUE):
  1. User can browse gallery of all artworks in grid view
  2. User can view individual artwork with photo, artist, city, year, style
  3. User can view artwork in fullscreen lightbox
  4. User can navigate between artworks in lightbox (prev/next)
  5. Homepage displays featured/recent artworks
  6. User can browse artworks by city
  7. User can browse artworks by style
**Plans**: TBD
**UI hint**: yes

### Phase 5: Search & Filtering
**Goal**: Unified search and filtering across the platform
**Depends on**: Phase 2, Phase 4
**Requirements**: ARTW-05, ARTW-06, ARTW-07, DISC-04
**Success Criteria** (what must be TRUE):
  1. User can search artworks by artist name
  2. User can filter artworks by city
  3. User can filter artworks by style tags
  4. Search returns relevant results across artists and artworks
**Plans**: TBD

### Phase 6: Community Submissions
**Goal**: Visitors can submit pieces for review, admin can moderate
**Depends on**: Phase 3
**Requirements**: SUBM-01, SUBM-02, SUBM-03, SUBM-04, SUBM-05, SUBM-06, SUBM-07, SUBM-08
**Success Criteria** (what must be TRUE):
  1. Visitor can submit piece with photo upload, artist name, city
  2. Visitor receives confirmation after submission
  3. Admin can view pending submissions in moderation queue
  4. Admin can approve submission (creates artwork)
  5. Admin can reject submission with reason
**Plans**: TBD
**UI hint**: yes

### Phase 7: Mobile & Polish
**Goal**: Fully responsive site with optimized mobile experience
**Depends on**: Phase 5, Phase 6
**Requirements**: MOBL-01, MOBL-02, MOBL-03
**Success Criteria** (what must be TRUE):
  1. Site is responsive on mobile devices (320px to 1920px+)
  2. Touch interactions work properly on mobile (swipe in lightbox)
  3. Images load appropriately sized for mobile (responsive images)
**Plans**: TBD
**UI hint**: yes

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 2/3 | In Progress|  |
| 2. Artist Profiles | 0/TBD | Not started | - |
| 3. Artwork Management | 0/TBD | Not started | - |
| 4. Gallery & Discovery | 0/TBD | Not started | - |
| 5. Search & Filtering | 0/TBD | Not started | - |
| 6. Community Submissions | 0/TBD | Not started | - |
| 7. Mobile & Polish | 0/TBD | Not started | - |

---

*Roadmap created: 2026-04-10*
*Coverage: 38/38 v1 requirements mapped ✓*