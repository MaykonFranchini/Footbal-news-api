-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clubs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "source_url" TEXT NOT NULL,
    "logo_url" TEXT NOT NULL,
    "location" TEXT NOT NULL DEFAULT 'Brasil'
);
INSERT INTO "new_clubs" ("id", "logo_url", "name", "source_url") SELECT "id", "logo_url", "name", "source_url" FROM "clubs";
DROP TABLE "clubs";
ALTER TABLE "new_clubs" RENAME TO "clubs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
