-- CreateTable
CREATE TABLE "PlanLog" (
    "id" TEXT NOT NULL,
    "user_params" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "planType" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlanLog_pkey" PRIMARY KEY ("id")
);
