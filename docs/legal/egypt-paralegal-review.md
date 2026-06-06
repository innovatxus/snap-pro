# Egypt Paralegal Review — Footer Legal Inventory

**Status:** Draft for counsel review **Prepared by:** Paralegal-mode review (not
licensed legal advice) **Scope:** Every link rendered in `components/Footer.tsx`
and the corresponding content under `lib/legal/content/`, assessed against
Egyptian law as it stands in mid-2026. **Authority caveat:** Egyptian Personal
Data Protection Law 151/2020 ("PDPL") is in force, but its Executive Regulations
have been delayed since 2021; several technical thresholds (e.g., DPO triggers,
breach-notification format, permitted cross-border safeguards) are awaiting
publication. Where this memo cites an article whose detail is supplied by the
Executive Regulations, the content is drafted in good faith based on the
official PDPL text and PDPC public guidance and must be re-checked once the
Executive Regulations issue.

---

## 1. Applicable Egyptian framework (working set)

| Subject                             | Authority                                                                                    | Articles directly relevant                                  |
| ----------------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Personal data protection            | **Law 151/2020 (PDPL)** + Executive Regulations (pending) + PDPC Decrees                     | Arts. 1, 2, 4, 5, 6, 7, 8, 12, 14, 15, 17–25, 32, 35, 41–46 |
| Consumer protection (e-commerce)    | **Law 181/2018** + **ER Decree 822/2019**                                                    | Arts. 8, 9, 10, 21, 38; ER Arts. 49, 50, 51                 |
| VAT on digital services             | **Law 67/2016** as amended by **Law 3/2022** + ETA Simplified Vendor Regime (Decree 24/2023) | Arts. 1, 2, 7; Decree 24/2023 §§ 2–6                        |
| E-invoicing                         | ETA Decree 195/2020 (resident); ETA Simplified Vendor Regime (non-resident)                  | —                                                           |
| Cybercrime / takedowns              | **Law 175/2018**                                                                             | Arts. 2, 7, 25, 30                                          |
| Copyright                           | **Law 82/2002** (IP Code), Book III                                                          | Arts. 138–184                                               |
| Accessibility                       | **Law 10/2018** (Persons with Disabilities) + MCIT ICT Accessibility Standard                | Arts. 24–26                                                 |
| Electronic signature & contracting  | **Law 15/2004** + ER Decree 109/2005                                                         | Arts. 14, 18                                                |
| Companies / commercial registration | **Law 159/1981** + **Law 34/1976** (Commercial Register)                                     | Art. 5 (CR); Arts. 16, 17 (companies)                       |

---

## 2. Status table — per footer link

Legend: ✅ Adequate · ⚠️ Needs edit · ❌ Missing required disclosure · ✏️ Awaits
company-info input · 🧑‍⚖️ Awaits counsel sign-off

| #   | Link                                   | Slug                             | Status                                                                        | Egypt-specific gap                                                                                                                      |
| --- | -------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Privacy Policy                         | `/legal/privacy`                 | ⚠️ 🧑‍⚖️                                                                         | Lawful-basis mapping to PDPL Art. 5; retention table; automated-decision disclosure (PDPL Art. 22); DPO contact name                    |
| 2   | Terms of Service                       | `/legal/terms`                   | ⚠️ 🧑‍⚖️                                                                         | Egyptian governing-law alternative for Egyptian consumers (CPL Art. 9 cannot be waived); choice-of-forum carve-out for consumers        |
| 3   | Cookie Policy                          | `/legal/cookies`                 | ⚠️                                                                            | Map categories to consent banner; PDPL Art. 12 notice; retention per cookie                                                             |
| 4   | Acceptable Use                         | `/legal/acceptable-use`          | ⚠️                                                                            | Reference Anti-Cyber Crime Law 175/2018 prohibited categories; takedown process (NTRA / Public Prosecution)                             |
| 5   | Refund Policy                          | `/legal/refunds`                 | ❌                                                                            | **CPL Art. 10:** mandatory 14-day right of withdrawal for distance contracts; digital-content carve-out only with express prior consent |
| 6   | Subscription Terms                     | `/legal/subscription`            | ⚠️                                                                            | Auto-renewal disclosure (CPL ER Art. 49); cancellation procedure mirroring purchase                                                     |
| 7   | DPA                                    | `/legal/dpa`                     | ⚠️ 🧑‍⚖️                                                                         | PDPL Art. 7 processor obligations; sub-processing approval; cross-border per Art. 14                                                    |
| 8   | Sub-processors                         | `/legal/sub-processors`          | ✏️                                                                            | Public list of all processors (Vercel, Cloudflare, OpenAI, Replicate, Stripe, etc.) with country, function, transfer mechanism          |
| 9   | International Transfers                | `/legal/international-transfers` | ⚠️ 🧑‍⚖️                                                                         | PDPL Arts. 14–15: PDPC license required (Executive Regulations pending); list adequate-protection mechanisms used                       |
| 10  | Government Requests                    | `/legal/government-requests`     | ⚠️                                                                            | Anti-Cyber Crime Law 175/2018 cooperation regime; transparency report cadence                                                           |
| 11  | Egypt — PDPL Notice                    | `/legal/egypt-pdpl`              | ⚠️                                                                            | Add Art. 14 transfers, Art. 35 breach, Art. 8 DPO, retention; PDPC complaint URL                                                        |
| 12  | Iraq — Consumer Disclosure             | `/legal/iraq-consumer`           | (Out of scope for this memo — covered separately if Iraq counsel engaged)     | —                                                                                                                                       |
| 13  | Business & Registration Information    | `/legal/business-info`           | ❌ ✏️                                                                         | **CPL ER Art. 49** mandatory disclosures; Tax Card #; CR #; ETA Simplified Vendor # if registered                                       |
| 14  | DMCA                                   | `/legal/dmca`                    | ⚠️                                                                            | DMCA is US-only. Add parallel **Egypt copyright notice** path under IP Law 82/2002 + ACCL 175/2018                                      |
| 15  | AI Usage                               | `/policies/ai-usage`             | ✅ (no Egypt-specific issue currently; revisit when Egypt AI guidance issues) | —                                                                                                                                       |
| 16  | Responsible AI                         | `/policies/responsible-ai`       | ✅                                                                            | —                                                                                                                                       |
| 17  | AI Content Ownership                   | `/policies/ai-content-ownership` | ⚠️                                                                            | Cite IP Law 82/2002 Art. 138 on authorship of computer-generated works (no codified rule — counsel sign-off)                            |
| 18  | Trust Center                           | `/trust`                         | ✅ (informational hub)                                                        | —                                                                                                                                       |
| 19  | Security                               | `/trust/security`                | ⚠️                                                                            | Reference PDPL Art. 32 (security obligation) + breach-handling SLA                                                                      |
| 20  | Compliance                             | `/trust/compliance`              | ⚠️                                                                            | List PDPL applicability statement; CPL applicability; VAT registration status; PDPC license/registration when obtained                  |
| 21  | Accessibility                          | `/accessibility`                 | ⚠️                                                                            | Reference Law 10/2018 Arts. 24–26 + MCIT ICT Accessibility Standard + WCAG 2.1 AA target                                                |
| 22  | Sitemap                                | `/sitemap`                       | ✅                                                                            | —                                                                                                                                       |
| 23  | Privacy / Terms / Cookies (bottom-bar) | (duplicates of 1–3)              | —                                                                             | —                                                                                                                                       |

---

## 3. Detailed findings (the high-impact items)

### 3.1 Privacy Policy — `/legal/privacy`

**Findings:**

1. **PDPL Art. 5 lawful bases** — the policy must say which basis applies to
   which processing activity. PDPL bases are: consent · contract · legal
   obligation · vital interests · public interest · legitimate interests (less
   broad than GDPR; the "balancing" test is implied by PDPC guidance, not
   codified).
2. **PDPL Art. 12 notice content** — must disclose: identity & contact of
   controller, purposes, categories, recipients, retention period, rights,
   complaint authority. Verify all eight items are present.
3. **PDPL Art. 22 automated decision-making** — Snap Pro runs AI services on
   user uploads. If any output materially affects the data subject (e.g.,
   biometric inference), opt-out / human-review disclosure is required.
4. **PDPL Art. 23 retention** — must publish concrete retention durations per
   processing purpose (account data, generated images, telemetry, analytics).
   Today's draft says "as needed" — not sufficient.
5. **PDPL Art. 18 direct marketing** — opt-in for marketing communications;
   opt-out URL must be one click.
6. **PDPL Art. 8 DPO** — currently `privacy@snappro.app`. The PDPL anticipates a
   _named_ DPO; add the appointed individual (or the "Office of the DPO") and a
   postal address.
7. **PDPL Art. 35 breach** — must commit to notify PDPC within 72 hours of
   awareness; affected individuals "without undue delay" if high risk.

**Action:** edit `lib/legal/content/legal.ts` privacy entry to add the missing
sections (lawful basis table, retention schedule, automated-decision disclosure,
DPO block, breach SLA, marketing opt-in). Counsel must approve language. Draft
below.

### 3.2 Refund Policy — `/legal/refunds`

**Critical:** Egyptian Consumer Protection Law 181/2018 Article 10 grants a
**14-day right of withdrawal** ("الانسحاب") for distance contracts. The
carve-out for digital content (CPL ER Art. 51) requires:

1. The consumer's **express prior consent** to begin performance during the
   14-day period, AND
2. **Acknowledgement** that they thereby lose the right of withdrawal.

If Snap Pro begins delivering the AI generation immediately on subscription
start, both items must be captured at checkout. Today the refund page (per the
scaffold) does not address this.

**Action:** add an Egypt-specific refund block: 14-day window for non-consumed
services; immediate-execution carve-out conditioned on dual consent; clear
refund route (email + form) within 14 calendar days of refund acceptance per CPL
ER Art. 51.

### 3.3 Business & Registration Information — `/legal/business-info`

**Mandatory disclosures under CPL ER Art. 49** for any online trader serving
Egypt:

- Trader/legal name (Arabic + Latin)
- Headquarters address (Egypt or, if foreign, registered representative)
- Commercial Registration number (Law 34/1976)
- Tax Card number (ETA)
- ETA Simplified Vendor Registration number (if non-resident under Law 3/2022 /
  Decree 24/2023)
- Authorised signatory & capacity
- Activity description (matching the CR activity codes)
- Customer service email **and** phone
- Complaints route (CPA hotline 19588 + CPA online portal)

**Action:** populate the table. All values are 100% company-info dependent and
cannot be drafted by counsel or paralegal. Until populated, the page must remain
`status: "draft"` and noindex (already true via the legal helper).

### 3.4 International Transfers — `/legal/international-transfers`

**PDPL Arts. 14–15:**

- Transfer of personal data outside Egypt requires a **PDPC licence** (Art. 14)
  unless one of the limited exceptions applies (vital interests, contract
  performance, judicial cooperation, etc.).
- The destination jurisdiction must provide "no less than" the level of
  protection of the PDPL. Egypt has not published an adequacy list.

**Snap Pro reality:** AI inference today routes uploads to providers outside
Egypt (US/EU). Until PDPC issues licences:

- Rely on **Art. 14(b) consent**: explicit, informed, granular consent at upload
  time, with clear "your image will be transferred to [Provider] in [Country]"
  disclosure; AND
- **Art. 14(c) contract performance**: where the upload IS the service.
- Document the PDPC licence application date once filed.

**Action:** edit the page to (a) cite Art. 14 and (b) disclose the categories of
overseas processors and (c) describe the legal basis for transfer per category.
Counsel sign-off required.

### 3.5 DMCA — `/legal/dmca`

**Issue:** DMCA is purely US (17 USC § 512). Egypt has no DMCA equivalent.
Egyptian rights-holders use:

- **IP Law 82/2002** civil and criminal copyright remedies, AND
- **Anti-Cyber Crime Law 175/2018 Art. 7** for content takedown via court order
  or NTRA referral.

**Action:** keep the DMCA page for US-process copyright complaints, but add an
**Egypt copyright notice** section explaining how Egyptian rights-holders can
submit a takedown request and how Snap Pro responds (acknowledgement, evaluation
against Law 82/2002 Art. 138, removal or counter-notice, disclosure to the
Public Prosecution where ordered).

### 3.6 Cookie Policy — `/legal/cookies`

**Findings:**

- The new consent banner (commit `bfad5fa`) implements PDPL Art. 12 notice and
  Art. 5 lawful-basis (consent) for non-essential cookies. The banner stores a
  versioned record (`snap-consent-v1`).
- The cookie page must list **every cookie set**, its purpose, category
  (Essential / Analytics / Marketing), origin (first-party / third-party), and
  retention.
- "Essential" cookies must be limited to what is _strictly necessary_ per PDPL
  Executive Regulations preview (consultation drafts circulated 2024).

**Action:** publish a current cookie inventory. Until analytics/marketing
scripts are added, the page can list only the locale, consent, scroll-floater,
and learning-progress storage keys.

### 3.7 Acceptable Use — `/legal/acceptable-use`

Add a clause explicitly forbidding content prohibited by **Law 175/2018**: child
sexual abuse material (Art. 25), content offending public morals (Art. 25),
unauthorised access (Art. 14), dissemination of false news (Art. 27), etc.
Mirror the obligation to retain user data 180 days under Art. 2.

### 3.8 DPA — `/legal/dpa`

PDPL Art. 7 processor obligations (mirror GDPR Art. 28, but Egyptian-flavoured):

1. Process only on documented controller instructions.
2. Confidentiality of processing personnel.
3. Implement Art. 32 security measures.
4. Engage sub-processors only with controller authorisation.
5. Assist controller with DSAR responses (Arts. 17–25).
6. Assist controller with breach notification (Art. 35) within 24 hours of
   awareness (industry-standard SLA; PDPL itself sets 72h to PDPC).
7. Return / delete data on termination.
8. Make available info necessary to demonstrate compliance.

The page currently uses GDPR-style language. Recast with Egyptian article
references for Egyptian customers; keep the GDPR variant for EU customers (or
split into two annexes).

### 3.9 Subscription Terms — `/legal/subscription`

CPL ER Art. 49 requires:

- Clear total price including VAT (14% if VAT-applicable).
- Auto-renewal disclosure with explicit consent at checkout.
- Cancellation route at least as easy as the purchase route.
- Notice ahead of price increases (typically 30 days).

### 3.10 Accessibility — `/accessibility`

Reference:

- Law 10/2018 Arts. 24–26 (right to access information & services).
- MCIT ICT Accessibility Standard (issued 2018, updated 2022).
- Internal target: **WCAG 2.1 AA**, with quarterly audits.
- Feedback channel: `accessibility@snappro.app`.

---

## 4. Required from the company (cannot be drafted)

| Item                                                         | Source                      | Owner             |
| ------------------------------------------------------------ | --------------------------- | ----------------- |
| Legal name (Arabic + Latin)                                  | Articles of association     | Founders          |
| Commercial Registration number + issuing chamber             | Law 34/1976                 | Finance / Counsel |
| Tax Card number                                              | ETA                         | Finance           |
| Registered HQ address                                        | CR                          | Founders          |
| ETA Simplified Vendor # (non-resident)                       | Law 3/2022 / Decree 24/2023 | Finance           |
| VAT applicability decision (resident or non-resident regime) | Law 67/2016                 | Counsel           |
| Appointed DPO name + postal address                          | PDPL Art. 8                 | Founders          |
| PDPC controller registration filing date                     | PDPL Art. 4                 | Counsel           |
| PDPC licence application(s) for cross-border transfers       | PDPL Art. 14                | Counsel           |
| Customer-service phone & hours (Egypt)                       | CPL ER Art. 49              | Operations        |
| Insurance policy (cyber + general liability)                 | Counsel                     |

## 5. Required from counsel (sign-off only)

| Document                                     | Why counsel only                                         |
| -------------------------------------------- | -------------------------------------------------------- |
| Final Privacy Policy text                    | Binding statement; PDPL/CPL fines                        |
| Final Terms of Service governing-law clauses | Choice of law/forum vs. CPL Art. 9 mandatory protections |
| DPA (Egypt annex)                            | Contract law + Art. 7 PDPL                               |
| International transfers basis statement      | PDPL Art. 14 licence strategy                            |
| Copyright takedown SOP                       | Mix of Law 82/2002 + Law 175/2018                        |
| AI content ownership clause                  | No codified rule; pure counsel call                      |

## 6. Suggested release plan

1. **Today (paralegal):** apply the content patches in §7 (drafting fixes,
   citations, structural completeness). Pages remain `status: "draft"`.
2. **Sprint +1 (founders):** populate the Business Info table.
3. **Sprint +1 (counsel):** sign off on Privacy, Terms, Refund, DPA, Transfers,
   DMCA-Egypt addendum.
4. **Sprint +2 (counsel):** file PDPC controller registration; begin
   transfer-licence applications.
5. **Sprint +2 (founders):** appoint DPO; publish DPO contact.
6. **Sprint +3:** flip pages to `status: "approved"`, lift the `noindex`, ship.

## 7. Patches applied in this commit

- `egypt-pdpl` page: added Art. 14 transfers, Art. 35 breach SLA, Art. 8 DPO
  trigger note, Art. 23 retention reference, PDPC complaint URL.
- `refunds` page: added 14-day right of withdrawal block (CPL Art. 10),
  digital-content carve-out (ER Art. 51).
- `business-info` page: added the full CPL ER Art. 49 disclosure table with
  placeholders flagged
  `[pending — see /docs/legal/egypt-paralegal-review.md §4]`.
- `international-transfers` page: rewrote around PDPL Art. 14 (consent +
  contract bases pending PDPC licence).
- `dmca` page: added Egypt copyright notice section under Law 82/2002 + Law
  175/2018.
- `accessibility` page: added Law 10/2018 + MCIT standard + WCAG 2.1 AA
  commitment.
- `acceptable-use` page: added Law 175/2018 prohibited-content clause.

All patches are drafted in good faith by paralegal-mode; nothing is final
without counsel sign-off. Pages remain `status: "draft"` and continue to render
the draft banner until §6 step 6 is complete.
