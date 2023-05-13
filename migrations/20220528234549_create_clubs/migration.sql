-- CreateTable
CREATE TABLE "clubs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "source_url" TEXT NOT NULL,
    "logo_url" TEXT NOT NULL,
    "location" TEXT NOT NULL DEFAULT 'Brasil'
);
