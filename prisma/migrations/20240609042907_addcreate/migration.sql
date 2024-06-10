/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `EducationPlan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `HealthPlan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `ProtectionPlan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `RetirementPlan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `importance` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `EducationPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `HealthPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ProtectionPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `RetirementPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `importance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EducationPlan" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "levelOfeducation" SET DATA TYPE TEXT,
ALTER COLUMN "typeOfeducation" SET DATA TYPE TEXT,
ALTER COLUMN "yearsOfeducation" SET DATA TYPE TEXT,
ALTER COLUMN "inflationRate" SET DATA TYPE TEXT,
ALTER COLUMN "deposit" SET DATA TYPE TEXT,
ALTER COLUMN "insuranceFund" SET DATA TYPE TEXT,
ALTER COLUMN "otherAssets" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "HealthPlan" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "hospitals" SET DATA TYPE TEXT,
ALTER COLUMN "dailyCompensationFromWelfare" SET DATA TYPE TEXT,
ALTER COLUMN "treatingSeriousIllness" SET DATA TYPE TEXT,
ALTER COLUMN "emergencyCosts" SET DATA TYPE TEXT,
ALTER COLUMN "annualTreatment" SET DATA TYPE TEXT,
ALTER COLUMN "roomFeeFromCompany" SET DATA TYPE TEXT,
ALTER COLUMN "dailyCompensationFromCompany" SET DATA TYPE TEXT,
ALTER COLUMN "treatingSeriousIllnessFromCompany" SET DATA TYPE TEXT,
ALTER COLUMN "emergencyCostsFromCompany" SET DATA TYPE TEXT,
ALTER COLUMN "annualTreatmentFromCompany" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ProtectionPlan" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "initialMonthlyExpense" SET DATA TYPE TEXT,
ALTER COLUMN "inflationRate" SET DATA TYPE TEXT,
ALTER COLUMN "homePayments" SET DATA TYPE TEXT,
ALTER COLUMN "carPayments" SET DATA TYPE TEXT,
ALTER COLUMN "otherDebts" SET DATA TYPE TEXT,
ALTER COLUMN "bankDeposit" SET DATA TYPE TEXT,
ALTER COLUMN "lifeInsuranceFund" SET DATA TYPE TEXT,
ALTER COLUMN "otherAssets" SET DATA TYPE TEXT,
ALTER COLUMN "adjustedYearlyExpenses" SET DATA TYPE TEXT,
ALTER COLUMN "numberOfYears" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "RetirementPlan" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "livingCosts" SET DATA TYPE TEXT,
ALTER COLUMN "houseCosts" SET DATA TYPE TEXT,
ALTER COLUMN "internetCosts" SET DATA TYPE TEXT,
ALTER COLUMN "clothingCosts" SET DATA TYPE TEXT,
ALTER COLUMN "medicalCosts" SET DATA TYPE TEXT,
ALTER COLUMN "otherCosts" SET DATA TYPE TEXT,
ALTER COLUMN "age" SET DATA TYPE TEXT,
ALTER COLUMN "retireAge" SET DATA TYPE TEXT,
ALTER COLUMN "lifExpectancy" SET DATA TYPE TEXT,
ALTER COLUMN "inflationRate" SET DATA TYPE TEXT,
ALTER COLUMN "deposit" SET DATA TYPE TEXT,
ALTER COLUMN "insuranceFund" SET DATA TYPE TEXT,
ALTER COLUMN "otherAssets" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "age" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "importance" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "protectionPlanOrder" SET DATA TYPE TEXT,
ALTER COLUMN "healthPlanOrder" SET DATA TYPE TEXT,
ALTER COLUMN "retirementPlanOrder" SET DATA TYPE TEXT,
ALTER COLUMN "educationPlanOrder" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "EducationPlan_id_key" ON "EducationPlan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "HealthPlan_id_key" ON "HealthPlan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProtectionPlan_id_key" ON "ProtectionPlan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "RetirementPlan_id_key" ON "RetirementPlan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "importance_id_key" ON "importance"("id");
