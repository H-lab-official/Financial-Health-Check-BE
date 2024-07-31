/*
  Warnings:

  - Added the required column `emergencyAccidentTreatmentCosts` to the `importance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `missingTotal` to the `importance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protectiondata` to the `importance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomRates` to the `importance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `severeMedicalExpenses` to the `importance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalMissing` to the `importance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `treatmentBudget` to the `importance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "importance" ADD COLUMN     "emergencyAccidentTreatmentCosts" TEXT NOT NULL,
ADD COLUMN     "missingTotal" TEXT NOT NULL,
ADD COLUMN     "protectiondata" TEXT NOT NULL,
ADD COLUMN     "roomRates" TEXT NOT NULL,
ADD COLUMN     "severeMedicalExpenses" TEXT NOT NULL,
ADD COLUMN     "totalMissing" TEXT NOT NULL,
ADD COLUMN     "treatmentBudget" TEXT NOT NULL;
