-- Step 1: Add column as nullable
ALTER TABLE "deals" ADD COLUMN "slug" TEXT;

-- Step 2: Populate slug from origin + destination
UPDATE "deals" SET "slug" = LOWER(
  REGEXP_REPLACE(
    REGEXP_REPLACE(
      CONCAT(origin, '-', destination),
      '[^a-zA-Z0-9\-]', '-', 'g'
    ),
    '-+', '-', 'g'
  )
);

-- Step 3: Make NOT NULL
ALTER TABLE "deals" ALTER COLUMN "slug" SET NOT NULL;

-- Step 4: Add unique constraint
CREATE UNIQUE INDEX "deals_slug_key" ON "deals"("slug");
