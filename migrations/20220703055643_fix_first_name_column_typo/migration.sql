/*
  Warnings:

  - You are about to drop the column `fist_name` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "fist_name",
ADD COLUMN     "first_name" TEXT NOT NULL DEFAULT E'';
