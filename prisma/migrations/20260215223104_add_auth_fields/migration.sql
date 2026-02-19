-- AlterTable
ALTER TABLE "agents" ADD COLUMN     "password_hash" TEXT,
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'agent';
