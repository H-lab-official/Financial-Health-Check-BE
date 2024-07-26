/*
  Warnings:

  - Added the required column `child` to the `EducationPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `levelOfeducation2` to the `EducationPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeOfeducation2` to the `EducationPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EducationPlan" ADD COLUMN     "child" TEXT NOT NULL,
ADD COLUMN     "levelOfeducation2" TEXT NOT NULL,
ADD COLUMN     "typeOfeducation2" TEXT NOT NULL;
