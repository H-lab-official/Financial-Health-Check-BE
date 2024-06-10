/*
  Warnings:

  - You are about to drop the column `user_id` on the `EducationPlan` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `HealthPlan` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `ProtectionPlan` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `RetirementPlan` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nickname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `importance` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_params]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `age` to the `EducationPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `EducationPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_params` to the `EducationPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `HealthPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `HealthPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_params` to the `HealthPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `ProtectionPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `ProtectionPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_params` to the `ProtectionPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `RetirementPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_params` to the `RetirementPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `importance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `importance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_params` to the `importance` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EducationPlan" DROP CONSTRAINT "EducationPlan_user_id_fkey";

-- DropForeignKey
ALTER TABLE "HealthPlan" DROP CONSTRAINT "HealthPlan_user_id_fkey";

-- DropForeignKey
ALTER TABLE "ProtectionPlan" DROP CONSTRAINT "ProtectionPlan_user_id_fkey";

-- DropForeignKey
ALTER TABLE "RetirementPlan" DROP CONSTRAINT "RetirementPlan_user_id_fkey";

-- DropForeignKey
ALTER TABLE "importance" DROP CONSTRAINT "importance_user_id_fkey";

-- AlterTable
ALTER TABLE "EducationPlan" DROP COLUMN "user_id",
ADD COLUMN     "age" TEXT NOT NULL,
ADD COLUMN     "nickname" TEXT NOT NULL,
ADD COLUMN     "user_params" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "HealthPlan" DROP COLUMN "user_id",
ADD COLUMN     "age" TEXT NOT NULL,
ADD COLUMN     "nickname" TEXT NOT NULL,
ADD COLUMN     "user_params" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProtectionPlan" DROP COLUMN "user_id",
ADD COLUMN     "age" TEXT NOT NULL,
ADD COLUMN     "nickname" TEXT NOT NULL,
ADD COLUMN     "user_params" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RetirementPlan" DROP COLUMN "user_id",
ADD COLUMN     "nickname" TEXT NOT NULL,
ADD COLUMN     "user_params" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "age",
DROP COLUMN "nickname";

-- AlterTable
ALTER TABLE "importance" DROP COLUMN "user_id",
ADD COLUMN     "age" TEXT NOT NULL,
ADD COLUMN     "nickname" TEXT NOT NULL,
ADD COLUMN     "user_params" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_user_params_key" ON "User"("user_params");

-- AddForeignKey
ALTER TABLE "EducationPlan" ADD CONSTRAINT "EducationPlan_user_params_fkey" FOREIGN KEY ("user_params") REFERENCES "User"("user_params") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProtectionPlan" ADD CONSTRAINT "ProtectionPlan_user_params_fkey" FOREIGN KEY ("user_params") REFERENCES "User"("user_params") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "importance" ADD CONSTRAINT "importance_user_params_fkey" FOREIGN KEY ("user_params") REFERENCES "User"("user_params") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPlan" ADD CONSTRAINT "HealthPlan_user_params_fkey" FOREIGN KEY ("user_params") REFERENCES "User"("user_params") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RetirementPlan" ADD CONSTRAINT "RetirementPlan_user_params_fkey" FOREIGN KEY ("user_params") REFERENCES "User"("user_params") ON DELETE RESTRICT ON UPDATE CASCADE;
