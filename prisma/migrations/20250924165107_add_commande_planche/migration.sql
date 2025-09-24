-- CreateEnum
CREATE TYPE "public"."CommandeStatus" AS ENUM ('PENDING', 'READY', 'COMPLETED', 'CANCELLED');

-- CreateTable
CREATE TABLE "public"."commandes_planches" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "dateRecuperation" TIMESTAMP(3) NOT NULL,
    "creneauRecuperation" TEXT NOT NULL,
    "plancheId" TEXT NOT NULL,
    "plancheName" TEXT NOT NULL,
    "planchePrice" DOUBLE PRECISION NOT NULL,
    "quantite" INTEGER NOT NULL DEFAULT 1,
    "total" DOUBLE PRECISION NOT NULL,
    "allergies" TEXT,
    "commentaires" TEXT,
    "status" "public"."CommandeStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "commandes_planches_pkey" PRIMARY KEY ("id")
);
