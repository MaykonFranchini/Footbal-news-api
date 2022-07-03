-- CreateTable
CREATE TABLE "newsletters" (
    "id" TEXT NOT NULL,
    "club_id" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL,

    CONSTRAINT "newsletters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "newsletters" ADD CONSTRAINT "newsletters_club_id_fkey" FOREIGN KEY ("club_id") REFERENCES "clubs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
