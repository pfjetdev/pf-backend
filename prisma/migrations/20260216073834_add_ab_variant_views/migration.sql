-- CreateTable
CREATE TABLE "ab_variant_views" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "variant" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "ab_variant_views_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ab_variant_views_variant_date_key" ON "ab_variant_views"("variant", "date");
