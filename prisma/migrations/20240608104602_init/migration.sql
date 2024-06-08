-- CreateTable
CREATE TABLE "EducationPlan" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "levelOfeducation" INTEGER NOT NULL,
    "typeOfeducation" INTEGER NOT NULL,
    "yearsOfeducation" INTEGER NOT NULL,
    "inflationRate" INTEGER NOT NULL,
    "deposit" INTEGER NOT NULL,
    "insuranceFund" INTEGER NOT NULL,
    "otherAssets" INTEGER NOT NULL,

    CONSTRAINT "EducationPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProtectionPlan" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "initialMonthlyExpense" INTEGER NOT NULL,
    "numberOfYebigintars" INTEGER NOT NULL,
    "adjustedYearlbigintyExpenses" INTEGER NOT NULL,
    "inflationRate" INTEGER NOT NULL,
    "homePayments" INTEGER NOT NULL,
    "carPayments" INTEGER NOT NULL,
    "otherDebts" INTEGER NOT NULL,
    "bankDeposit" INTEGER NOT NULL,
    "lifeInsuranceFund" INTEGER NOT NULL,

    CONSTRAINT "ProtectionPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "importance" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "protectionPlanOrder" INTEGER NOT NULL,
    "healthPlanOrder" INTEGER NOT NULL,
    "retirementPlanOrder" INTEGER NOT NULL,
    "educationPlanOrder" INTEGER NOT NULL,

    CONSTRAINT "importance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "user_params" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealthPlan" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "hospitals" INTEGER NOT NULL,
    "dailyCompensationFromWelfare" INTEGER NOT NULL,
    "treatingSeriousIllness" INTEGER NOT NULL,
    "emergencyCosts" INTEGER NOT NULL,
    "annualTreatment" INTEGER NOT NULL,
    "roomFeeFromCompany" INTEGER NOT NULL,
    "dailyCompensationFromCompany" INTEGER NOT NULL,
    "treatingSeriousIllnessFromCompany" INTEGER NOT NULL,
    "emergencyCostsFromCompany" INTEGER NOT NULL,
    "annualTreatmentFromCompany" INTEGER NOT NULL,

    CONSTRAINT "HealthPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RetirementPlan" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "livingCosts" INTEGER NOT NULL,
    "houseCosts" INTEGER NOT NULL,
    "internetCosts" INTEGER NOT NULL,
    "clothingCosts" INTEGER NOT NULL,
    "medicalCosts" INTEGER NOT NULL,
    "otherCosts" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "retireAge" INTEGER NOT NULL,
    "lifExpectancy" INTEGER NOT NULL,
    "inflationRate" INTEGER NOT NULL,
    "deposit" INTEGER NOT NULL,
    "insuranceFund" INTEGER NOT NULL,
    "otherAssets" INTEGER NOT NULL,

    CONSTRAINT "RetirementPlan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EducationPlan" ADD CONSTRAINT "EducationPlan_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProtectionPlan" ADD CONSTRAINT "ProtectionPlan_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "importance" ADD CONSTRAINT "importance_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPlan" ADD CONSTRAINT "HealthPlan_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RetirementPlan" ADD CONSTRAINT "RetirementPlan_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
