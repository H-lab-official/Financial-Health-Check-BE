/*
  Warnings:

  - Added the required column `otherAssets` to the `ProtectionPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProtectionPlan" ADD COLUMN     "otherAssets" INTEGER NOT NULL;
