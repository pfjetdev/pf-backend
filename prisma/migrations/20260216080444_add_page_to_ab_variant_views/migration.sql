/*
  Warnings:

  - A unique constraint covering the columns `[variant,page,date]` on the table `ab_variant_views` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ab_variant_views_variant_date_key";

-- AlterTable
ALTER TABLE "ab_variant_views" ADD COLUMN     "page" TEXT NOT NULL DEFAULT 'search';

-- CreateIndex
CREATE UNIQUE INDEX "ab_variant_views_variant_page_date_key" ON "ab_variant_views"("variant", "page", "date");
