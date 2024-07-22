-- CreateTable
CREATE TABLE "SelectionLog" (
    "id" TEXT NOT NULL,
    "user_params" TEXT NOT NULL,
    "selectedPlans" JSONB NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SelectionLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SelectionLog_id_key" ON "SelectionLog"("id");
