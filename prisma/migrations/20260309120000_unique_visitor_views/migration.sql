-- Drop old data (counts are not convertible to unique visitor rows)
TRUNCATE TABLE "ab_variant_views";

-- Drop old unique index
DROP INDEX "ab_variant_views_variant_page_date_key";

-- Remove count column, add visitor_id and created_at
ALTER TABLE "ab_variant_views" DROP COLUMN "count";
ALTER TABLE "ab_variant_views" ADD COLUMN "visitor_id" TEXT NOT NULL;
ALTER TABLE "ab_variant_views" ADD COLUMN "created_at" TIMESTAMPTZ NOT NULL DEFAULT now();

-- Unique: one visitor per page per day
CREATE UNIQUE INDEX "ab_variant_views_visitor_id_page_date_key" ON "ab_variant_views"("visitor_id", "page", "date");

-- Index for fast aggregation by variant + page + date
CREATE INDEX "ab_variant_views_variant_page_date_idx" ON "ab_variant_views"("variant", "page", "date");
