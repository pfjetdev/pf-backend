-- CreateIndex
CREATE INDEX "beat_my_price_requests_created_at_idx" ON "beat_my_price_requests"("created_at" DESC);

-- CreateIndex
CREATE INDEX "beat_my_price_requests_agent_id_idx" ON "beat_my_price_requests"("agent_id");
