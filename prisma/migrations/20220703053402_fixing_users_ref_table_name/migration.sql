/*
  Warnings:

  - You are about to drop the `newsletters` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "newsletters" DROP CONSTRAINT "newsletters_club_id_fkey";

-- DropTable
DROP TABLE "newsletters";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "club_id" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_club_id_fkey" FOREIGN KEY ("club_id") REFERENCES "clubs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
