/*
  Warnings:

  - Added the required column `gender` to the `importance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "importance" ADD COLUMN     "gender" TEXT NOT NULL;
