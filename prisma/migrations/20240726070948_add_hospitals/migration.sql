/*
  Warnings:

  - Added the required column `hospitals2` to the `HealthPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HealthPlan" ADD COLUMN     "hospitals2" TEXT NOT NULL;
