-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "iss" TEXT;

-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "iss" TEXT;

-- AlterTable
ALTER TABLE "VerificationToken" ADD COLUMN     "iss" TEXT;
