/*
  Warnings:

  - You are about to drop the column `age` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `nickname` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `user_params` on the `Plan` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_user_params_fkey";

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "age",
DROP COLUMN "nickname",
DROP COLUMN "type",
DROP COLUMN "url",
DROP COLUMN "user_params",
ADD COLUMN     "data" JSONB[];
