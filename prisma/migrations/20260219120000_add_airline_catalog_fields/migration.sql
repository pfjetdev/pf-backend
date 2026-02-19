-- Add new columns (nullable first)
ALTER TABLE "airlines" ADD COLUMN "slug" TEXT;
ALTER TABLE "airlines" ADD COLUMN "iata_code" TEXT;
ALTER TABLE "airlines" ADD COLUMN "description" TEXT;
ALTER TABLE "airlines" ADD COLUMN "alliance" TEXT;
ALTER TABLE "airlines" ADD COLUMN "hub_city" TEXT;
ALTER TABLE "airlines" ADD COLUMN "route_codes" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- Populate slug from name for existing rows
UPDATE "airlines" SET "slug" = LOWER(REGEXP_REPLACE(TRIM("name"), '[^a-zA-Z0-9]+', '-', 'g'));

-- Now make slug required and unique
ALTER TABLE "airlines" ALTER COLUMN "slug" SET NOT NULL;
CREATE UNIQUE INDEX "airlines_slug_key" ON "airlines"("slug");
