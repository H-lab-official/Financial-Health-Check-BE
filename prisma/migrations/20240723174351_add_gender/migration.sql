/*
  Warnings:

  - Added the required column `gender` to the `EducationPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `HealthPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `ProtectionPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `RetirementPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EducationPlan" ADD COLUMN     "gender" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "HealthPlan" ADD COLUMN     "gender" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProtectionPlan" ADD COLUMN     "gender" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RetirementPlan" ADD COLUMN     "gender" TEXT NOT NULL;
