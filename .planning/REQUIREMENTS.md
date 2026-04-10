# Requirements: Indonesia Street Art Directory

**Defined:** 2025-04-10
**Core Value:** Document, preserve, and share Indonesia's street art culture with the world.

## v1 Requirements

### Artist Profiles

- [ ] **ARTP-01**: User can view list of all artists
- [ ] **ARTP-02**: User can view individual artist profile with alias, location (city), bio, styles, years active
- [ ] **ARTP-03**: User can search artists by name (text search)
- [ ] **ARTP-04**: User can filter artists by city
- [ ] **ARTP-05**: User can filter artists by style tags
- [ ] **ARTP-06**: User can view artist's artworks on their profile
- [ ] **ARTP-07**: Admin can create new artist profile
- [ ] **ARTP-08**: Admin can edit artist profile
- [ ] **ARTP-09**: Admin can delete artist profile (with opt-out support)
- [ ] **ARTP-10**: Admin can mark artist as verified

### Artwork Listings

- [ ] **ARTW-01**: User can browse gallery of all artworks
- [ ] **ARTW-02**: User can view individual artwork with photo, artist, city, year, style
- [ ] **ARTW-03**: User can view artwork in fullscreen lightbox
- [ ] **ARTW-04**: User can navigate between artworks in lightbox
- [ ] **ARTW-05**: User can search artworks by artist name
- [ ] **ARTW-06**: User can filter artworks by city
- [ ] **ARTW-07**: User can filter artworks by style tags
- [ ] **ARTW-08**: Admin can add new artwork
- [ ] **ARTW-09**: Admin can edit artwork metadata
- [ ] **ARTW-10**: Admin can delete artwork

### Discovery

- [ ] **DISC-01**: Homepage displays featured/recent artworks
- [ ] **DISC-02**: User can browse by city
- [ ] **DISC-03**: User can browse by style
- [ ] **DISC-04**: Search returns relevant results across artists and artworks

### Internationalization

- [x] **I18N-01**: UI displays in Bahasa Indonesia
- [x] **I18N-02**: UI displays in English
- [x] **I18N-03**: User can switch between Bahasa Indonesia and English
- [x] **I18N-04**: Artist bios support bilingual content in database
- [x] **I18N-05**: Artwork titles/descriptions support bilingual content in database

### Community Submissions

- [ ] **SUBM-01**: Visitor can submit piece for review
- [ ] **SUBM-02**: Submission includes photo upload
- [ ] **SUBM-03**: Submission includes artist name
- [ ] **SUBM-04**: Submission includes city information
- [ ] **SUBM-05**: Admin can view pending submissions
- [ ] **SUBM-06**: Admin can approve submission (creates artwork)
- [ ] **SUBM-07**: Admin can reject submission with reason
- [ ] **SUBM-08**: Submitter receives confirmation after submission

### Mobile

- [ ] **MOBL-01**: Site is responsive on mobile devices
- [ ] **MOBL-02**: Touch interactions work properly on mobile
- [ ] **MOBL-03**: Images load appropriately sized for mobile

## v2 Requirements

### Color Palette

- **PLT-01**: System extracts dominant colors from artwork images
- **PLT-02**: User can search artworks by color
- **PLT-03**: User can view color palette for each artwork
- **PLT-04**: Colors match to paint brand databases (Montana, Molotow, Ironlak)
- **PLT-05**: Community can suggest corrections to palette

### Crew Associations

- **CREW-01**: User can view artist's crew/family
- **CREW-02**: User can view all members of a crew
- **CREW-03**: Admin can link artists to crews

### Temporal Archive

- **ARCH-01**: Admin can mark artwork as "disappeared"
- [ ] **ARCH-02**: User can see "last seen" date on artwork
- **ARCH-03**: User can view historical archive of disappeared pieces

### Related Features

- **RELT-01**: User sees related artists suggestions (similar style, same city, same crew)
- **RELT-02**: User can view timeline of artist's career progression
- **RELT-03**: User can view city/neighborhood level locations

### Booking (Phase 3)

- **BOOK-01**: Artist can provide contact information for booking
- **BOOK-02**: Visitor can request booking inquiry
- **BOOK-03**: Admin can manage booking requests

### Monetization (Phase 3)

- **MONE-01**: Platform can list paint/product partnerships
- **BOOK-02**: Platform can track affiliate referrals

## Out of Scope

| Feature | Reason |
|---------|--------|
| Real-time location tracking | Privacy/safety - sharing exact addresses enables removal |
| Public ratings/reviews | Subjective, gaming risk, not cultural archive value |
| Direct messaging | Spam risk, booking in Phase 3 |
| User accounts (beyond submission) | Sybil attacks, complexity, defer community later |
| Artist OAuth login | Email sufficient for v1, defer social login |
| NFT/blockchain | Irrelevant to cultural archive mission |
| Mobile app | Web-first responsive sufficient |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| I18N-01 through I18N-05 | Phase 1 | Pending |
| ARTP-01 through ARTP-10 | Phase 2 | Pending |
| ARTW-01 through ARTW-04 | Phase 4 | Pending |
| ARTW-05 through ARTW-07 | Phase 5 | Pending |
| ARTW-08 through ARTW-10 | Phase 3 | Pending |
| DISC-01 through DISC-03 | Phase 4 | Pending |
| DISC-04 | Phase 5 | Pending |
| SUBM-01 through SUBM-08 | Phase 6 | Pending |
| MOBL-01 through MOBL-03 | Phase 7 | Pending |
| PLT-01 through PLT-05 | Phase 2 (deferred) | Pending |
| CREW-01 through CREW-03 | Phase 2 (deferred) | Pending |
| ARCH-01 through ARCH-03 | Phase 2 (deferred) | Pending |
| RELT-01 through RELT-03 | Phase 2 (deferred) | Pending |
| BOOK-01 through BOOK-03 | Phase 3 (deferred) | Pending |
| MONE-01 through MONE-02 | Phase 3 (deferred) | Pending |

**Coverage:**
- v1 requirements: 38 total
- Mapped to phases: 38
- Unmapped: 0 ✓

---
*Requirements defined: 2025-04-10*
*Last updated: 2025-04-10 after initial definition*