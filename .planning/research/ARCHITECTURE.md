# Architecture Patterns: Street Art Directory System

**Domain:** Artist/Street Art Directory Platform
**Researched:** 2025-04-10
**Confidence:** MEDIUM-HIGH

## Executive Summary

Street art directory systems follow a media-centric architecture pattern popularized by photo galleries and catalog systems (MusicBrainz, INGRID, Google Photos). The key insight from research: these systems treat media as first-class entities with rich metadata, connected to artist profiles through many-to-many relationships. For this Indonesia street art directory, the architecture should separate **content ingestion** (uploads, processing, storage) from **content presentation** (gallery, search, profiles) with a shared data layer.

The chosen stack (TanStack Start + Prisma + PostgreSQL) maps well to proven patterns: server functions handle database operations, Prisma provides the relational model, and filesystem storage serves media.

---

## Recommended Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐   │
│  │   Gallery   │  │   Search    │  │   Artist Profiles       │   │
│  │   (Grid)    │  │   (Filter)  │  │   (Detail Views)       │   │
│  └──────┬──────┘  └──────┬──────┘  └───────────┬─────────────┘   │
│         │                 │                     │                  │
│         └────────────────┼─────────────────────┘                  │
│                          │                                          │
│                    TanStack Router                                 │
└──────────────────────────┼──────────────────────────────────────────┘
                          │
┌──────────────────────────┼──────────────────────────────────────────┐
│                    API LAYER (Server Functions)                   │
│  ┌─────────────────┐  ┌─────────────────┐  ┌────────────────┐  │
│  │  getArtists()   │  │  getPieces()    │  │  submitPiece() │  │
│  │  getArtist()   │  │  getPiece()     │  │  createArtist()│  │
│  │  searchArtists │  │  searchPieces() │  │  verifyArtist │  │
│  └────────┬────────┘  └────────┬────────┘  └───────┬────────┘  │
│           │                     │                     │             │
└───────────┼─────────────────────┼───────────────────┼─────────────┘
            │                     │                     │
┌───────────┼────────���────────────┼───────────────────┼─────────────┐
│           │               DATA LAYER              │              │
│  ┌────────┴────────┐  ┌──────┴───────┐  ┌───────┴───────┐    │
│  │    Artist       │  │    Piece     │  │    City      │    │
│  │    Service     │  │    Service   │  │    Lookup   │    │
│  └────────┬────────┘  └──────┬───────┘  └──────┬──────┘    │
│           │                  │                  │               │
│  ┌────────┴─────────────────┴──────────────────┴────────┐ │
│  │                   PRISMA ORM                            │ │
│  └─────────────────────────┬───────────────────────────────┘ │
└────────────────────────────┼─────────────────────────────────┘
                              │
┌────────────────────────────┼─────────────────────────────────┐
│                        STORAGE LAYER                          │
│  ┌──────────────────┐  ┌────────────────────────────────┐   │
│  │  PostgreSQL       │  │  Filesystem (Local)              │   │
│  │  (Metadata)       │  │  /uploads/pieces/{id}/{files}    │   │
│  │                   │  │  /uploads/avatars/{id}        │   │
│  └───────────────────┘  └────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Core Components

### 1. Artist Entity Service

**Responsibility:** Manages artist profile CRUD, verification status, and relationships to pieces.

**Public API:**
- `getArtists()` — List all artists (paginated, filterable)
- `getArtist(id)` — Single artist with pieces
- `searchArtists(query)` — Full-text search on name, alias, bio
- `createArtist(data)` — Admin: create new artist
- `verifyArtist(id)` — Admin: mark as verified

**Data Model (Prisma):**
```prisma
model Artist {
  id          String   @id @default(cuid())
  alias       String   // Stage name
  realName    String?
  cityId      String  // FK to City
  bio         String?
  bioId       String?  // FK to localized content
  styles      Style[]
  yearsActive Int?     // Start year
  contactLinks Json?   // { instagram, website, email }
  isVerified Boolean @default(false)
  status      String  @default("PENDING") // PENDING, ACTIVE, HIDDEN
  
  createdAt   DateTime @default(now())
  updatedAt  DateTime @updatedAt
  
  city       City     @relation(fields: [cityId], references: [id])
  pieces     Piece[]
}
```

**Communication:**
- Receives: City lookup queries
- Sends: Artist data to Piece service (for piece.artistId)
- Sends: Verification status to admin panel

---

### 2. Piece/Gallery Service

**Responsibility:** Manages artwork uploads, storage, and gallery display.

**Public API:**
- `getPieces(filters)` — Gallery with filters (artist, city, year, style)
- `getPiece(id)` — Single piece detail
- `searchPieces(query)` — Search pieces by metadata
- `submitPiece(data, files)` — Community submission
- `getPieceCount(artistId)` — For artist profile

**Data Model (Prisma):**
```prisma
model Piece {
  id          String   @id @default(cuid())
  title       String?
  artistId    String
  cityId      String
  year        Int?
  styleId     String?  // FK to Style lookup
  
  // Media
  imageUrl    String   // Path to uploaded file
  thumbnailUrl String? // Generated thumbnail
  metadata    Json?    // EXIF, dimensions, file info
  
  status      String   @default("PENDING") // PENDING, APPROVED, REJECTED
  
  createdAt   DateTime @default(now())
  updatedAt  DateTime @updatedAt
  
  artist      Artist   @relation(fields: [artistId], references: [id])
  city        City     @relation(fields: [cityId], references: [id])
  style       Style?    @relation(fields: [styleId], references: [id])
}
```

**Communication:**
- Receives: Artist data (required for linking)
- Sends: Piece counts to Artist service
- Interacts with: Filesystem storage layer

---

### 3. Lookup Services (City, Style)

**Responsibility:** Normalized reference data — prevents duplication of cities and styles.

**Data Model:**
```prisma
model City {
  id        String   @id @default(cuid())
  name      String   // Jakarta, Bandung, Surabaya
  country   String   @default("Indonesia")
  
  artists   Artist[]
  pieces   Piece[]
}

model Style {
  id        String   @id @default(cuid())
  name      String   // Wildstyle, Bubble, Throw-up, Sticker, Mural
  
  pieces   Piece[]
}
```

**Why separate?** See INGRIDKG research — tag normalization enables:
- Consistent filtering across the directory
- Future analytics by style trending
- Language-specific localization (Phase 1/2)

**Communication:**
- Read-only for most operations
- Admin writes via management endpoints

---

### 4. Search Service

**Responsibility:** Unified search across artists and pieces.

**Implementation:** PostgreSQL full-text search (built-in) or TanStack Query with filters.

**API:**
- `searchGlobal(query)` — Searches artists + pieces
- `filterPieces(filters)` — Structured filters (city, style, year, artist)

**Communication:**
- Aggregates: Artist + Piece service queries
- Returns: IDs with relevance scoring

---

### 5. Storage/Upload Service

**Responsibility:** File handling — not a separate service but a clear module.

**Storage Structure:**
```
/uploads/
├── pieces/
│   ├── {pieceId}/
│   │   ├── original.jpg      # Uploaded file
│   │   ├── thumb_256.jpg    # Generated thumbnail
│   │   └── meta.json        # EXIF, dimensions
│   └── ...
├── avatars/
│   ├── {artistId}.jpg
│   └── ...
└── temp/
    └── {uploadSessionId}/   # Pending uploads
```

**Key decisions:**
- **Filesystem over object storage:** Project constraints (VPS, budget) favor local storage
- **Generate thumbnails on upload:** Avoid on-demand generation latency
- **Store metadata in DB:** EXIF data in `piece.metadata` JSON field

**Communication:**
- Receives: Uploaded files from submitPiece()
- Returns: Stored paths to Piece service

---

## Data Flow

### Flow 1: Viewing a Piece (Read)

```
User → Gallery Page 
  → getPieces({ status: 'APPROVED' })
    → Piece Service queries Prisma (status filter)
      → Returns pieces[] with artist, city joins
        → Client renders grid with lazy-loaded images
```

### Flow 2: Submitting a Piece (Write)

```
User → Submit Form
  → upload images → Filesystem (temp/)
  → submitPiece(formData)
    → Server validates (auth, file exists)
    → Move from temp/ to pieces/{id}/
    → Generate thumbnail (Sharp)
    → Create Piece record with status: 'PENDING'
    → Return confirmation
```

### Flow 3: Artist Verification

```
Admin → Artist List (isVerified: false)
  → verifyArtist(id)
    → Artist Service updates isVerified: true
      → Piece Service bulk-updates artist's pieces to 'APPROVED'
        → Returns success
```

---

## Build Order & Dependencies

Based on research of similar systems:

| Phase | Component | Dependencies | Rationale |
|-------|-----------|--------------|-----------|
| **1** | **Database Schema** | None | Foundation — define City, Style lookup first for normalization |
| **2** | **Artist Service** | Schema | Create, read, verify artists — simplest entity |
| **3** | **Piece Service + Storage** | Artist Service | Requires artistId FK — more complex with file handling |
| **4** | **Gallery UI** | Piece Service | Depends on working API for data |
| **5** | **Search/Filter** | Artist + Piece Services | Aggregates existing services |
| **6** | **Submission Flow** | Storage + Piece Service | Requires upload handling |
| **7** | **i18n Layer** | All services | Wrap existing data with translations |

**Why this order?**
1. Schema first — INGRIDKG and MusicBrainz both normalized reference data early to prevent tag fragmentation
2. Artist before Pieces — simpler entity, fewer dependencies (no file uploads)
3. Storage last (Phase 1) — can mock file URLs initially, plug in real storage later
4. i18n last — easier to translate stable data than add translations to evolving schema

---

## Alternative Patterns Considered

### Pattern 1: Tag-Based (No Normalized Styles)

**Why rejected:** Research shows tag fragmentation destroys search quality. INGRIDKG uses explicit ontology for this reason. Without normalized styles, filtering becomes unreliable.

### Pattern 2: Media-First (Store Images in DB)

**Why rejected:** PostgreSQL BLOB storage works but performs poorly at scale. Filesystem + metadata JSON is proven (see PhotoPrism, Google Photos).

### Pattern 3: Microservices

**Why rejected:** Over-architecture for MVP scope. TanStack Start monolith with clear service boundaries (separate modules, not separate deployments) is sufficient.

---

## Scalability Considerations

| Scale | Artists | Pieces | Architecture Impact |
|-------|---------|--------|----------------------|
| **Current** | ~50 | ~500 | Simple Prisma queries, local filesystem |
| **1,000** | ~500 | ~10,000 | Add indexes on cityId, styleId, year |
| **10,000** | ~2,000 | ~50,000 | Consider CDN for images, pagination optimization |
| **Beyond** | >10,000 | >100,000 | Object storage migration, full-text search (Elasticsearch) |

**Current scope:** < 1,000 artists — premature scaling unnecessary. Design clean boundaries for future migration (e.g., swap filesystem for S3 without rewriting services).

---

## Anti-Patterns to Avoid

### Anti-Pattern 1: Storing Everything in One Table

**What:** Artist + Pieces + Metadata in single table with JSONB
**Why bad:** Loses relational benefits (joins, indexes), complicates queries
**Instead:** Normalized schema as designed above

### Anti-Pattern 2: On-Demand Thumbnail Generation

**What:** Generate thumbnails on first request
**Why bad:** Adds latency, complicates caching, fails at scale
**Instead:** Generate on upload, store alongside original

### Anti-Pattern 3: Skipping Verification Status

**What:** All submissions auto-approved
**Why bad:** Quality issues, legal exposure (see INGRID's manual review)
**Instead:** Explicit verification workflow from day one

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Component boundaries | HIGH | Matches proven patterns (MusicBrainz, INGRID, PhotoPrism) |
| Data flow | HIGH | TanStack Start server functions provide clear API layer |
| Build order | MEDIUM | Suggested order follows dependencies, may need adjustment |
| Scalability | MEDIUM | Current scope fine, larger scale projections are estimates |

---

## Sources

- **INGRID (Informationssystem Graffiti in Deutschland)** — Academic graffiti knowledge graph, University of Paderborn (2023): https://www.uni-paderborn.de/en/research-projects/ingrid/
- **MusicBrainz Database Schema** — Proven artist/catalog directory pattern: https://musicbrainz.org/doc/MusicBrainz_Database
- **PhotoPrism Database Schema** — Media gallery ERD patterns: https://docs.photoprism.app/developer-guide/database/schema
- **TanStack Start Database Integration** — Official docs for server functions: https://tanstack.com/start/latest/docs/framework/react/guide/databases.md
- **Cloudinary Architecture Blueprint** — Media organization patterns (2026): https://cloudinary.com/blog/cloudinary-architecture-blueprint
- **Google Photos System Design** — Media platform architecture: https://www.systemdesignhandbook.com/guides/google-photos-system-design/