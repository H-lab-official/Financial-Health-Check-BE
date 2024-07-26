/*
  Warnings:

  - Added the required column `expensesDuringStudy` to the `EducationPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EducationPlan" ADD COLUMN     "expensesDuringStudy" TEXT NOT NULL;
