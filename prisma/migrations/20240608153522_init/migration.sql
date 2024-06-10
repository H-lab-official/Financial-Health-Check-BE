/*
  Warnings:

  - You are about to drop the column `adjustedYearlbigintyExpenses` on the `ProtectionPlan` table. All the data in the column will be lost.
  - You are about to drop the column `numberOfYebigintars` on the `ProtectionPlan` table. All the data in the column will be lost.
  - Added the required column `adjustedYearlyExpenses` to the `ProtectionPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfYears` to the `ProtectionPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProtectionPlan" DROP COLUMN "adjustedYearlbigintyExpenses",
DROP COLUMN "numberOfYebigintars",
ADD COLUMN     "adjustedYearlyExpenses" INTEGER NOT NULL,
ADD COLUMN     "numberOfYears" INTEGER NOT NULL;
