-- CreateTable
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "user_params" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "age" TEXT NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_user_params_fkey" FOREIGN KEY ("user_params") REFERENCES "User"("user_params") ON DELETE RESTRICT ON UPDATE CASCADE;
