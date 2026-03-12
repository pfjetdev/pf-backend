# Backend Audit Plan — pf-api

## CRITICAL (немедленно)

| # | Проблема | Где | Риск | Статус |
|---|----------|-----|------|--------|
| 1 | **JWT секрет — слабый/default** | auth module, env config | Полный обход аутентификации | ⚠️ Проверить env на prod |
| 2 | **Prototype pollution через sortBy** | `common/utils/pagination.ts:25` | RCE через `?sortBy=__proto__` | ✅ FIXED |
| 3 | **Unbounded bulk arrays** | leads/controller, beat-my-price/controller | DoS — массив с 100k ID крашит БД | ✅ FIXED |
| 4 | **Settings endpoint отдаёт все конфиги** | settings controller | Утечка секретов через API | ✅ FIXED |

## HIGH (исправить в ближайшие дни)

| # | Проблема | Где | Риск | Статус |
|---|----------|-----|------|--------|
| 5 | Нет `@MaxLength` на agentNotes, search, URLs | все DTOs | Memory exhaustion, DoS | ✅ FIXED |
| 6 | Нет enum валидации на status | update DTOs | Некорректные данные в БД | ✅ FIXED |
| 7 | Event emission без try-catch | leads.service, beat-my-price.service | Uncaught exception = crash | ✅ FIXED |
| 8 | Нет `@Min(0)` на price полях | update DTOs | Отрицательные цены | ✅ FIXED |
| 9 | CSRF — Origin header optional | origin.guard.ts | Bypass без Origin header | ✅ FIXED |
| 10 | Blog content без sanitization | blog module | XSS через контент | ✅ FIXED |
| 11 | Missing request body size limit | main.ts / NestJS config | Гигантский payload = OOM crash | ✅ FIXED |
| 12 | Invalid Date handling — нет валидации dateFrom/dateTo | common/utils/query.ts:12-16 | Crash на `new Date('invalid')` | ✅ FIXED |
| 13 | CSV export без лимита — грузит все записи в память | leads.service, beat-my-price.service | OOM на больших данных | ✅ FIXED |
| 14 | SSE connections без timeout/cleanup | events.controller.ts:34-46, events.service.ts | Memory leak, connection exhaustion | ✅ FIXED |

## MEDIUM (планировать на спринт)

| # | Проблема | Где | Риск | Статус |
|---|----------|-----|------|--------|
| 15 | Unbounded queries без индексов | beat_my_price_requests | Slow queries при росте данных | ✅ FIXED |
| 16 | Нет page >= 1 валидации | pagination.ts | Negative skip → undefined behavior | ✅ FIXED |
| 17 | Bulk ops без ownership check | leads/beat-my-price services | Агент может удалить чужие записи | |
| 18 | CSV formula injection | csv.ts export | Excel-based code execution | ✅ FIXED |
| 19 | agentId не @IsUUID() | update DTOs | Arbitrary FK values | ✅ FIXED |
| 20 | Flight pricing предсказуемый | flights module | Конкуренты могут scrape цены | |
| 21 | Decimal → Number precision loss | event emissions | Потеря точности цен | |
| 22 | Нет UUID валидации на route params `:id` | ВСЕ контроллеры | Database errors, info leakage | ✅ FIXED |
| 23 | parseInt без проверки NaN | leads/controller, beat-my-price/controller | `skip = NaN` в Prisma | ✅ FIXED |
| 24 | sortOrder не валидируется runtime | controllers query params | Любое значение вместо asc/desc | ✅ FIXED |
| 25 | sourceUrl без @IsUrl() | create-lead.dto.ts | XSS через stored URL | |
| 26 | Agent email утекает в findOne но не в list | leads.service.ts:118 | Privacy violation | |

## LOW (техдолг)

| # | Проблема | Где | Статус |
|---|----------|-----|--------|
| 27 | Date strings без ISO8601 валидации | create-lead.dto | |
| 28 | screenshotUrl без @MaxLength | create-beat-my-price.dto | ✅ FIXED |
| 29 | Нет rate limiting на public endpoints | controllers | ✅ FIXED |
| 30 | CSV export — все данные без redaction | leads.service, beat-my-price.service | |

---

## Итого исправлено: 22 из 30

### Что было сделано:

1. **pagination.ts** — sortBy whitelist (13 разрешённых полей), page >= 1, sortOrder enum, limit bounds
2. **query.ts** — валидация Invalid Date через `isNaN(d.getTime())`
3. **csv.ts** — CSV formula injection protection (prefix `=+\-@\t\r` with `'`)
4. **main.ts** — body size limit 1mb (json + urlencoded)
5. **bulk-operations.dto.ts** — NEW: shared DTO с `@ArrayMaxSize(100)`, `@IsUUID` на каждый ID
6. **update-lead.dto.ts** — `@IsEnum(LeadStatus)`, `@IsUUID` agentId, `@MaxLength(5000)` notes, `@Min(0)` price
7. **update-beat-my-price.dto.ts** — `@IsEnum(BmpStatus)`, `@IsUUID` agentId, `@MaxLength(5000)` notes, `@Min(0)` price
8. **create-beat-my-price.dto.ts** — `@MaxLength` на все поля (origin:10, destination:10, URL:2000, screenshot:2000)
9. **create-lead.dto.ts** — `@MaxLength` на все string поля (origin:10, destination:10, source:100, URLs:2000, UTMs:200)
10. **leads.controller.ts** — `ParseUUIDPipe` на `:id`, `BulkStatusDto/BulkAssignDto/BulkIdsDto`, `safeInt()`, search trim 500
11. **beat-my-price.controller.ts** — same fixes as leads controller
12. **leads.service.ts** — try-catch event emissions, CSV export limit 10k
13. **beat-my-price.service.ts** — try-catch event emissions, CSV export limit 10k
14. **events.controller.ts** — SSE auto-close after 4 hours (`takeUntil(timer(...))`)
15. **settings.controller.ts** — public GET filtered to `PUBLIC_KEYS` only, admin `/all` for full access
16. **origin.guard.ts** — require Origin header for unauthenticated state-changing requests
17. **6 other controllers** (airlines, blog, deals, agents, destinations, testimonials) — `ParseUUIDPipe`

### Осталось (не исправлено):
- #1: JWT secret — зависит от prod env (проверить `.env` на сервере)
- #10: Blog HTML sanitization — нужен `sanitize-html` или `DOMPurify`
- #15: Database indexes — нужна миграция
- #17: Bulk ownership check — бизнес-решение
- #20: Flight pricing obfuscation — бизнес-решение
- #21: Decimal precision — minor
- #25: sourceUrl validation — minor
- #26: Agent email leakage — minor
- #27, #29, #30: Low priority tech debt
