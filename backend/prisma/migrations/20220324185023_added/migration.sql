-- CreateTable
CREATE TABLE "Policy" (
    "CustomerId" INTEGER NOT NULL,
    "policyNumber" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "insuranceType" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Policy_CustomerId_fkey" FOREIGN KEY ("CustomerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Policy_policyNumber_key" ON "Policy"("policyNumber");
