> Frozen-source 95bdddb739fdc4144f94a482f712bcf6d9452f4b review. Later addenda may supersede initial no-finding statements. Final repaired-source assessment is pending Root ledger; this is not current CI or scientific approval.

# PART03 independent factual review

Frozen source: `95bdddb739fdc4144f94a482f712bcf6d9452f4b`. Complete canonical review of all ten assigned records found **0 P0, 0 P1 and 16 P2 issues**. The report is bounded by the source gaps below; it grants no scientific/translation certification, whole59 conclusion or final qualification.

Every manifest and complete EN/ZH Markdown clause/card/qualifier/protocol/calculation/diagnostic/source reference was read. Exact repeated fields were factored losslessly and all unique values and row placements inspected. Every whole structured YAML was parsed and byte-identically regenerated; full canonical semantic reading is distinct from that engineering observation. No manual reread of every duplicated projection scalar is claimed.

All97 distinct adopted native UUID definitions (169 distinct record uses) were inspected. Root acquired the fresh state100 observations; this reviewer read safe physical extracts, missing/changed definitions, and compared unchanged fields to previously read public originals. Actual supplier/site/provider compatibility and unresolved auxiliary identities remain unproved.

Exact four-file hashes, all twelve criterion results per record, native version/state/time/source hashes and detailed limits are in `docs/reviews/cpc3-factual59-20261103/parts/part03/report.json`. Relevant primary-original page/section/hash coverage is in `docs/reviews/cpc3-factual59-20261103/parts/part03/primary-coverage.json`.

## Confirmed findings

### P03-31912-01 — Water held in stock also appears as an outward stream (P2)

CPC 31912; EN line 418, ZH line 418; `moisture_balance`.

The specific water equation adds water in all dispatched/stored streams and then water stock change. Stored water already contributes to closing minus opening stocks. With 10 kg incoming water entirely retained as closing stock, zero opening stock, zero dispatch and zero evaporation, this equation demands 10=10+10. The preceding general balance in the same rule correctly uses output plus stock change, so the water-specific clause contradicts it.

**Minimum correction:** Use external water outflows plus net evaporation plus closing-minus-opening water stock exactly once. Internal/stored streams are stock/stage subledger entries, not extra boundary outflows. Align both languages and regenerate projection.

### P03-31912-02 — Current wood-waste name and restrictions diverge from authored historical claims (P2)

CPC 31912; EN line 228, ZH line 230; `shavings;rejected_board;source_metadata_debts`.

Fresh root-acquired native 2ef9d37a version 01.01.003, state 100, observed 2026-11-03T08:51:00.803Z has official Chinese baseName 废木材, non-agglomerated CPC 39283, and unspecified composition/treatment at waste generation. Frozen PCR shavings/rejected_board still uses 废木料 at ZH230/246 and describes CPC39282, primary-production route and municipal proportions as current source conflicts at EN/ZH228/244 and manifest54–58. Those current-source assertions are obsolete; downstream conditional composition/receiver requirements remain valid.

**Minimum correction:** Use current official Chinese 废木材 for both selected displays. Replace obsolete classification/primary-route/municipal-percentage claims with the current non-agglomerated 1 kg-collected-waste conditions; retain actual moisture/contamination/receiver/provider requirements. Keep previous observation version as historical review evidence only, outside canonical method.

### P03-31921-01 — Internal recovered condensate is subtracted twice from aggregate water balance (P2)

CPC 31921; EN line 345, ZH line 345; `water_balance`.

The whole-plant equation subtracts all captured condensate independently of closing water stocks. Internal condensate recovered into the bath or retained in a tank is not an outward water stream and already enters stock/reuse. A 100 kg fresh water cohort with 20 kg retained captured condensate, 80 kg atmospheric net water and no other water outputs gives the authored formula 100-20-20=60 kg instead of 80 kg. The complete scope makes bath reuse internal (line72) and requires stocks (lines332/345); the equation does not condition condensate subtraction on outward transfer.

**Minimum correction:** Subtract only captured condensate actually transferred across the declared control volume as a separately identified outgoing stream. Internally recovered/recirculated condensate cancels as an internal transfer; retained condensate enters closing stock exactly once. Apply both languages and regenerate projection.

### P03-32196-01 — Unspecified packaging is promoted to a verified concrete corrugated-carton identity (P2)

CPC 32196; EN line 386, ZH line 386; `pack_carton; conditional_identity_links; resolved representation claims`.

The card asserts the broad record positively includes corrugated cases and binds a concrete corrugated carton display to7336a8ee. Fresh full native definition has Packaging materials, unspecified/包装材料，未指定; broad primary/secondary packaging route, GLO plant mix and no general comment. Its synonyms span corrugated case, carton, liner bag and stretch wrap; broad CPC32153 paper-container context and these mixed physical aliases do not positively define this one complete corrugated carton. Actual-grade/composition/provider checks and disclosure of the generic official name do not establish that native single-object identity. Manifest resolution claims conflict with its own line77 acknowledgement of missing positive corrugated-case evidence.

**Minimum correction:** Withdraw7336a8ee from the concrete carton card and conditional/resolved claims. Retain the actual independently collected, atomic corrugated shipping carton and its full mass/composition/provider protocol as an explicit auxiliary native-identity gap pending positive compatible whole-carton evidence. Update EN/ZH, manifest and projection; do not rename the unspecified family as a carton or infer actual cartons are absent.

### P03-35110-01 — Input-yield guardrail projects an incompatible output denominator (P2)

CPC 35110; EN line 323, ZH line 323; `fd_bulk_output range`.

The range is 0.90–1.00 kg bulk coating/kg total formulation inputs (line321), but basis_kind is process_output (line323) whose authored vocabulary explicitly means normalized to process output. Output/input yield 0.95 is not output/output 1.00; machine consumers receive a contradictory denominator. Provisional/QA wording does not remove this typed mismatch.

**Minimum correction:** Retain the provisional input-yield diagnostic and its true input denominator outside the typed inventory range, as with other retained local diagnostics. Do not replace its true denominator with process output. Remove misleading process_output labels from input-based prose diagnostics too, without adding shared vocabulary in this scoped PCR repair. Regenerate projection.

### P03-35110-02 — Wastewater generation stage is asserted without native staging evidence (P2)

CPC 35110; EN line 108, ZH line 108; `section5 native identity; cw_wastewater`.

The canonical restriction assigns the selected UUID to generation before secondary/tertiary treatment. The fresh native record is a Waste flow with Mass referenceID1, but its route says Secondary/Tertiary Treatment and the generic comment does not establish which receiver interface or pre/post-treatment stage it represents. Thus the asserted native pre-treatment interpretation is unsupported. This does not prove the flow is already treated effluent.

**Minimum correction:** Retain the conditional physical wastewater locator only if source-owner/provider evidence confirms the actual untreated receiver interface. Explicitly disclose that the Secondary/Tertiary route label leaves this interface unestablished, with actual composition/treatment acceptance, measured density when converted, and provider scope still required. Add aligned manifest interface-pending note and regenerate projection; do not auto-resolve the stage or assert treated-effluent identity.

### P03-37930-01 — Petroleum-asphalt adoption omits conflicting natural-asphalt native classification (P2)

CPC 37930; EN line 120, ZH line 120; `coating_asphalt`.

Selected 4e256aeb-9d90-4e11-9e58-4299c38c424b native names/comment support petroleum refinery asphalt, but canonical source classification leaf 15330 explicitly denotes natural bitumen/asphalt/asphaltites/asphaltic rock. The PCR excludes natural asphaltic rock and qualifies petroleum coating asphalt but does not disclose that source contradiction or track source-owner classification clarification. This is incomplete disclosure of an identity-metadata debt, not proof that the qualified physical petroleum asphalt identity is unusable.

**Minimum correction:** Keep the conditional physical locator, actual supplier oxidation/grade/provider requirements and exact native name. Add explicit source-classification conflict/clarification debt to both card descriptions and manifest; do not silently rewrite source classification or claim all metadata verified.

### P03-37930-02 — Packaging equality omits separate additions and removals to retained articles (P2)

CPC 37930; EN line 81, ZH line 81; `b_pack`.

The packaging-specific equality is opening+P+I+ER=closing+S+EO+W. P/I/ER are qualified whole-article receipts; the surrounding complete clauses expressly keep independently measured repair material/water changes separate and retain them in full wet closing stock. With opening pallet mass 30 kg, no whole-article receipts, dispatch/returns/waste, and 10 kg new repair material or water retained in the pallet, closing is 40 kg. The specific equality gives 30=40 despite the conserving general physical gate giving 30+10=40. Exact reconciliation against other flow terms cannot remove the required inlet from this subledger.

**Minimum correction:** Include independently measured, non-overlapping material/water additions on the left and removals on the right, after reconciliation with P/I/ER and S/EO/W; alternatively state an explicit equivalent restricted unchanged-article subledger and companion change balance. Preserve full wet stocks, whole-article origins and gross six legs. Apply both languages and projection.

### P03-37940-01 — PE-film adoption omits luggage classification conflict (P2)

CPC 37940; EN line 255, ZH line 255; `polyethylene film liner native classification debt`.

The selected native PE film has coherent name/comment, CAS 9002-88-4 and Product Mass/kg reference. Its active CPC 29220 is luggage, handbags and travel sets, not film sheeting. The card retains physical restrictions but omits this contradictory native classification and the manifest does not track it.

**Minimum correction:** Disclose source-classification clarification debt in both card descriptions and manifest while retaining conditional physical PE-film adoption; do not treat the class as proof of luggage construction or silently alter the source.

### P03-37940-02 — Packaging equality omits separate additions and removals to retained articles (P2)

CPC 37940; EN line 1208, ZH line 1208; `package_six_legs; package_reconciliation`.

The packaging-specific equality is opening+P+I+ER=closing+S+EO+W. P/I/ER are qualified whole-article receipts; the surrounding complete clauses expressly keep independently measured repair material/water changes separate and retain them in full wet closing stock. With opening pallet mass 30 kg, no whole-article receipts, dispatch/returns/waste, and 10 kg new repair material or water retained in the pallet, closing is 40 kg. The specific equality gives 30=40 despite the conserving general physical gate giving 30+10=40. Exact reconciliation against other flow terms cannot remove the required inlet from this subledger.

**Minimum correction:** Include independently measured, non-overlapping material/water additions on the left and removals on the right, after reconciliation with P/I/ER and S/EO/W; alternatively state an explicit equivalent restricted unchanged-article subledger and companion change balance. Preserve full wet stocks, whole-article origins and gross six legs. Apply both languages and projection.

### P03-37950-01 — Wooden-pallet adoption omits active electrical-energy classification conflict (P2)

CPC 37950; EN line 791, ZH line 791; `wood_pallet / pack_pallet native classification debt`.

The fresh native name, board/slat construction, lumber-mill route and Product Mass/kg reference support the qualified whole wooden pallet. Its active classification nevertheless is CPC 17100 Electrical energy, while an older received wood-pallet classification is separately preserved as historical source classification. This contradiction is absent from the card and manifest caveats. It is an undisclosed metadata debt, not evidence that the physical article is electricity.

**Minimum correction:** Disclose and track source-owner clarification of the active electrical-energy classification in both language card descriptions and manifest. Retain the qualified physical pallet locator, gross mass and provider/actual construction conditions; do not infer energy units or rewrite the native record.

### P03-37960-01 — Wooden-pallet adoption omits active electrical-energy classification conflict (P2)

CPC 37960; EN line 920, ZH line 920; `wood_pallet / pack_pallet native classification debt`.

The fresh native name, board/slat construction, lumber-mill route and Product Mass/kg reference support the qualified whole wooden pallet. Its active classification nevertheless is CPC 17100 Electrical energy, while an older received wood-pallet classification is separately preserved as historical source classification. This contradiction is absent from the card and manifest caveats. It is an undisclosed metadata debt, not evidence that the physical article is electricity.

**Minimum correction:** Disclose and track source-owner clarification of the active electrical-energy classification in both language card descriptions and manifest. Retain the qualified physical pallet locator, gross mass and provider/actual construction conditions; do not infer energy units or rewrite the native record.

### P03-37960-02 — Packaging equality omits separate additions and removals to retained articles (P2)

CPC 37960; EN line 1042, ZH line 1042; `boundary_packaging; calc_physical`.

The packaging-specific equality is opening+P+I+ER=closing+S+EO+W. P/I/ER are qualified whole-article receipts; the surrounding complete clauses expressly keep independently measured repair material/water changes separate and retain them in full wet closing stock. With opening pallet mass 30 kg, no whole-article receipts, dispatch/returns/waste, and 10 kg new repair material or water retained in the pallet, closing is 40 kg. The specific equality gives 30=40 despite the conserving general physical gate giving 30+10=40. Exact reconciliation against other flow terms cannot remove the required inlet from this subledger.

**Minimum correction:** Include independently measured, non-overlapping material/water additions on the left and removals on the right, after reconciliation with P/I/ER and S/EO/W; alternatively state an explicit equivalent restricted unchanged-article subledger and companion change balance. Preserve full wet stocks, whole-article origins and gross six legs. Apply both languages and projection.

### P03-37990-01 — Wooden-pallet adoption omits active electrical-energy classification conflict (P2)

CPC 37990; EN line 1177, ZH line 1177; `wood_pallet / pack_pallet native classification debt`.

The fresh native name, board/slat construction, lumber-mill route and Product Mass/kg reference support the qualified whole wooden pallet. Its active classification nevertheless is CPC 17100 Electrical energy, while an older received wood-pallet classification is separately preserved as historical source classification. This contradiction is absent from the card and manifest caveats. It is an undisclosed metadata debt, not evidence that the physical article is electricity.

**Minimum correction:** Disclose and track source-owner clarification of the active electrical-energy classification in both language card descriptions and manifest. Retain the qualified physical pallet locator, gross mass and provider/actual construction conditions; do not infer energy units or rewrite the native record.

### P03-37990-02 — Packaging equality omits separate additions and removals to retained articles (P2)

CPC 37990; EN line 1469, ZH line 1469; `boundary_packaging; calc_packaging`.

The packaging-specific equality is opening+P+I+ER=closing+S+EO+W. P/I/ER are qualified whole-article receipts; the surrounding complete clauses expressly keep independently measured repair material/water changes separate and retain them in full wet closing stock. With opening pallet mass 30 kg, no whole-article receipts, dispatch/returns/waste, and 10 kg new repair material or water retained in the pallet, closing is 40 kg. The specific equality gives 30=40 despite the conserving general physical gate giving 30+10=40. Exact reconciliation against other flow terms cannot remove the required inlet from this subledger.

**Minimum correction:** Include independently measured, non-overlapping material/water additions on the left and removals on the right, after reconciliation with P/I/ER and S/EO/W; alternatively state an explicit equivalent restricted unchanged-article subledger and companion change balance. Preserve full wet stocks, whole-article origins and gross six legs. Apply both languages and projection.


### P03-37960-03 — PE-film adoption omits luggage classification conflict (P2)

CPC37960; EN/ZH905; `pe_film native classification debt`.

The selected native PE film has coherent name/comment, CAS 9002-88-4 and Product Mass/kg reference. Its active CPC 29220 is luggage, handbags and travel sets, not film sheeting. The card retains physical restrictions but omits this contradictory native classification and the manifest does not track it.

**Minimum correction:** Disclose source-classification clarification debt in both card descriptions and manifest while retaining conditional physical PE-film adoption; do not treat the class as proof of luggage construction or silently alter the source.

## Per-record disposition and evidence

### CPC 31912

Disposition: `issues_confirmed_with_bounded_evidence_gaps`. Complete manifest and bilingual canonical content inspected; complete projection parsed and byte-identically regenerated.

- **Reference:** accepted_board
- **Basis:** 1kg net board actual delivery moisture; EN/ZH30–58,176–190
- **Scope:** uncoated single-piece sugar maple, purchased kiln-dried, electric machining; EN/ZH12–28,60–88
- **Physical:** EN/ZH385–422; stock-specific water equation defect at418
- **Native:** All adopted full native physical identities inspected using safe root fresh readbacks, missing/changed definitions individually read and unchanged fields compared to previously read public historical originals. Exact versions/state/times/hashes below. Actual site/supplier/provider compatibility and declared unresolved auxiliary rows remain conditional.
- **Primary:** FDA printed91/93; USDA13–2 rendered and text, species index; EPA memo/table; CORRIM§3.2.6 rendered. Original SHA checks retained.

| Criterion | Result | Evidence pointer |
| --- | --- | --- |
| F01 | supported | EN/ZH 30–58;176–190; /reference_flow; matching unique Product output card |
| F02 | supported | EN/ZH sections3–6, 30–58;176–190; full native property/unit observations below |
| F03 | confirmed_issue | EN/ZH 385–422;439; sections5,7–9; FDA printed91/93; USDA13–2 rendered and text, species index; EPA memo/table; CORRIM§3.2.6 rendered. Original SHA checks retained.; P03-31912-01 |
| F04 | confirmed_issue | EN/ZH 385–422;439; sections5,7–9; FDA printed91/93; USDA13–2 rendered and text, species index; EPA memo/table; CORRIM§3.2.6 rendered. Original SHA checks retained.; P03-31912-01 |
| F05 | supported | EN/ZH 385–422;439; sections5,7–9; FDA printed91/93; USDA13–2 rendered and text, species index; EPA memo/table; CORRIM§3.2.6 rendered. Original SHA checks retained. |
| F06 | confirmed_issue | Complete EN/ZH sections1–11; 30–58;176–190; 385–422;439; P03-31912-02 |
| F07 | confirmed_issue | P03-31912-02; native_fresh_readback in this record; evidence/all10-native-observation-comparison.json |
| C01 | evidence_gap | retained-private-evidence:part03/selection.json /source_accepted_mapping; manifest classification_refs |
| C02 | supported | retained-private-evidence:part03/selection.json /pcr_id and /metadata_correction; manifest id/classification_refs |
| C03 | supported | EN/ZH sections1–2 and5; manifest classification_refs; primary source locators in notes |
| P01 | supported | docs/reviews/cpc3-factual59-20261103/parts/part03/projection-verification.json; source_four_sha256 in this record |
| P02 | supported | manifest status/content_maturity/translation_status/review_metadata; EN/ZH frontmatter and quality/validation/source limits |

### CPC 31921

Disposition: `issues_confirmed_with_bounded_evidence_gaps`. Complete manifest and bilingual canonical content inspected; complete projection parsed and byte-identically regenerated.

- **Reference:** finished_planks
- **Basis:** 1kg net accepted dispatch wet mass; EN/ZH33–61,162–175
- **Scope:** water-only electric boiling, ambient conditioning, no saleable coproducts; EN/ZH11–19,63–90
- **Physical:** EN/ZH316–347; aggregate water balance unqualified condensate subtraction defect345
- **Native:** All adopted full native physical identities inspected using safe root fresh readbacks, missing/changed definitions individually read and unchanged fields compared to previously read public historical originals. Exact versions/state/times/hashes below. Actual site/supplier/provider compatibility and declared unresolved auxiliary rows remain conditional.
- **Primary:** JRC printed172–173 rendered; Spanish publisher original HTML§§2.1–2.5.3/3.1; Portuguese original HTML§§1–2.2. Live MDPI429 did not replace cached originals.

| Criterion | Result | Evidence pointer |
| --- | --- | --- |
| F01 | supported | EN/ZH 30–58;199–213; /reference_flow; matching unique Product output card |
| F02 | supported | EN/ZH sections3–6, 30–58;199–213; full native property/unit observations below |
| F03 | confirmed_issue | EN/ZH 320–360; sections5,7–9; JRC printed172–173 rendered; Spanish publisher original HTML§§2.1–2.5.3/3.1; Portuguese original HTML§§1–2.2. Live MDPI429 did not replace cached originals.; P03-31921-01 |
| F04 | confirmed_issue | EN/ZH 320–360; sections5,7–9; JRC printed172–173 rendered; Spanish publisher original HTML§§2.1–2.5.3/3.1; Portuguese original HTML§§1–2.2. Live MDPI429 did not replace cached originals.; P03-31921-01 |
| F05 | supported | EN/ZH 320–360; sections5,7–9; JRC printed172–173 rendered; Spanish publisher original HTML§§2.1–2.5.3/3.1; Portuguese original HTML§§1–2.2. Live MDPI429 did not replace cached originals. |
| F06 | supported | Complete EN/ZH sections1–11; 30–58;199–213; 320–360 |
| F07 | evidence_gap | native_fresh_readback in this record; evidence/all10-native-observation-comparison.json |
| C01 | evidence_gap | retained-private-evidence:part03/selection.json /source_accepted_mapping; manifest classification_refs |
| C02 | supported | retained-private-evidence:part03/selection.json /pcr_id and /metadata_correction; manifest id/classification_refs |
| C03 | supported | EN/ZH sections1–2 and5; manifest classification_refs; primary source locators in notes |
| P01 | supported | docs/reviews/cpc3-factual59-20261103/parts/part03/projection-verification.json; source_four_sha256 in this record |
| P02 | supported | manifest status/content_maturity/translation_status/review_metadata; EN/ZH frontmatter and quality/validation/source limits |

### CPC 31922

Disposition: `bounded_no_material_finding_with_evidence_gaps`. Complete manifest and bilingual canonical content inspected; complete projection parsed and byte-identically regenerated.

- **Reference:** stopper_out
- **Basis:** 1kg net actual-moisture complete unwashed/uncoated punched blank; EN/ZH30–57,175–188
- **Scope:** purchased boiled/stabilized planks; punching/dry-sizing not turning or downstream finishing; EN/ZH12–28,59–88
- **Physical:** EN/ZH299–327; stage physical versus burdens, wet/dry/cork contamination, exclusive particles; no confirmed material defect in complete semantic read
- **Native:** All adopted full native physical identities inspected using safe root fresh readbacks, missing/changed definitions individually read and unchanged fields compared to previously read public historical originals. Exact versions/state/times/hashes below. Actual site/supplier/provider compatibility and declared unresolved auxiliary rows remain conditional.
- **Primary:** Same JRC printed172–173 original and Spanish publisher original; no case recipe, dimensions, factors or atmosphere adopted.

| Criterion | Result | Evidence pointer |
| --- | --- | --- |
| F01 | supported | EN/ZH 30–58;214–228; /reference_flow; matching unique Product output card |
| F02 | supported | EN/ZH sections3–6, 30–58;214–228; full native property/unit observations below |
| F03 | supported | EN/ZH 335–390; sections5,7–9; Same JRC printed172–173 original and Spanish publisher original; no case recipe, dimensions, factors or atmosphere adopted. |
| F04 | supported | EN/ZH 335–390; sections5,7–9; Same JRC printed172–173 original and Spanish publisher original; no case recipe, dimensions, factors or atmosphere adopted. |
| F05 | supported | EN/ZH 335–390; sections5,7–9; Same JRC printed172–173 original and Spanish publisher original; no case recipe, dimensions, factors or atmosphere adopted. |
| F06 | supported | Complete EN/ZH sections1–11; 30–58;214–228; 335–390 |
| F07 | evidence_gap | native_fresh_readback in this record; evidence/all10-native-observation-comparison.json |
| C01 | evidence_gap | retained-private-evidence:part03/selection.json /source_accepted_mapping; manifest classification_refs |
| C02 | supported | retained-private-evidence:part03/selection.json /pcr_id and /metadata_correction; manifest id/classification_refs |
| C03 | supported | EN/ZH sections1–2 and5; manifest classification_refs; primary source locators in notes |
| P01 | supported | docs/reviews/cpc3-factual59-20261103/parts/part03/projection-verification.json; source_four_sha256 in this record |
| P02 | supported | manifest status/content_maturity/translation_status/review_metadata; EN/ZH frontmatter and quality/validation/source limits |

### CPC 32196

Disposition: `issues_confirmed_with_bounded_evidence_gaps`. Complete manifest and bilingual canonical content inspected; complete projection parsed and byte-identically regenerated.

- **Reference:** diaper_output
- **Basis:** 1kg complete net accepted diaper; first-release positiveQ and raw single normalization; EN/ZH30–58,454–467,764–782
- **Scope:** actual Swaddlers-like taped fluff-pulp/SAP electric purchased-component conversion; EN/ZH12–28,60–88
- **Physical:** Complete EN/ZH all40 cards, protocols, eight calculation rules and full boundary/conditions read. General stock/cohort/physical/water/capture accounts remain qualified; unsupported concrete-carton native adoption is recorded separately as P03-32196-01.
- **Native:** All adopted full native physical identities inspected using safe root fresh readbacks, missing/changed definitions individually read and unchanged fields compared to previously read public historical originals. Exact versions/state/times/hashes below. Actual site/supplier/provider compatibility and declared unresolved auxiliary rows remain conditional.
- **Primary:** Manufacturer original product/components/manufacturing bodies inspected plus live official read confirms fragrance-free state. EA2008 printed3/5 rendered; BREF49/196/670 selected original pages,49/670 rendered; PEF63–64 original pages allocation inspected.

| Criterion | Result | Evidence pointer |
| --- | --- | --- |
| F01 | supported | EN/ZH 30–58;454–467; /reference_flow; matching unique Product output card |
| F02 | supported | EN/ZH sections3–6, 30–58;454–467; full native property/unit observations below |
| F03 | supported | EN/ZH 750–800; sections5,7–9; Manufacturer original product/components/manufacturing bodies inspected plus live official read confirms fragrance-free state. EA2008 printed3/5 rendered; BREF49/196/670 selected original pages,49/670 rendered; PEF63–64 original pages allocation inspected. |
| F04 | supported | EN/ZH 750–800; sections5,7–9; Manufacturer original product/components/manufacturing bodies inspected plus live official read confirms fragrance-free state. EA2008 printed3/5 rendered; BREF49/196/670 selected original pages,49/670 rendered; PEF63–64 original pages allocation inspected. |
| F05 | supported | EN/ZH 750–800; sections5,7–9; Manufacturer original product/components/manufacturing bodies inspected plus live official read confirms fragrance-free state. EA2008 printed3/5 rendered; BREF49/196/670 selected original pages,49/670 rendered; PEF63–64 original pages allocation inspected. |
| F06 | supported | Complete EN/ZH sections1–11; 30–58;454–467; 750–800 |
| F07 | confirmed_issue | native_fresh_readback in this record; evidence/all10-native-observation-comparison.json; P03-32196-01 |
| C01 | evidence_gap | retained-private-evidence:part03/selection.json /source_accepted_mapping; manifest classification_refs |
| C02 | supported | retained-private-evidence:part03/selection.json /pcr_id and /metadata_correction; manifest id/classification_refs |
| C03 | supported | EN/ZH sections1–2 and5; manifest classification_refs; primary source locators in notes |
| P01 | supported | docs/reviews/cpc3-factual59-20261103/parts/part03/projection-verification.json; source_four_sha256 in this record |
| P02 | supported | manifest status/content_maturity/translation_status/review_metadata; EN/ZH frontmatter and quality/validation/source limits |

### CPC 35110

Disposition: `issues_confirmed_with_bounded_evidence_gaps`. Complete manifest and bilingual canonical content inspected; complete projection parsed and byte-identically regenerated.

- **Reference:** fp_reference_product
- **Basis:** 1kg net coating sold configuration; nativePaint only liquid pigmented subset; EN/ZH30–63,86–110
- **Scope:** one actual declared liquid/powder/1K/multicomponent/cooked route; all real atoms and whole-purchase composition subledgers required
- **Physical:** Complete EN/ZH including all30cards, protocols, equations/diagnostics read; fd_bulk_output input-yield typed process_output mismatch at317–324
- **Native:** All adopted full native physical identities inspected using safe root fresh readbacks, missing/changed definitions individually read and unchanged fields compared to previously read public historical originals. Exact versions/state/times/hashes below. Actual site/supplier/provider compatibility and declared unresolved auxiliary rows remain conditional.
- **Primary:** AP42 original2pages read/rendered; ILCD printed74–81 (§6.5.3.2) and255–272 read. Official EIIP PDF9–16 and84 (§§2.1–2.2/5.2) read and Figure8.2-1 viewed. DOE original PDF20–22/56–60/62–64 supports actual states/return/loss distinctions; no steady-boiler example or universal return factor adopted. Capture page Description/local exhaust original body read. EU2025/2607/JRCdoi access failed; full ISO/EPD not independently obtained/read. EPA1978 official publisher OCR HTML§4.8.2 printed323–328 now read for qualitative operations/raw-material names; ambiguous table layout and numerical factors not independently adopted.

| Criterion | Result | Evidence pointer |
| --- | --- | --- |
| F01 | supported | EN/ZH 30–63;317–324; /reference_flow; matching unique Product output card |
| F02 | confirmed_issue | EN/ZH sections3–6, 30–63;317–324; full native property/unit observations below; P03-35110-01 |
| F03 | supported | EN/ZH 770–815; sections5,7–9; AP42 original2pages read/rendered; ILCD printed255–272 read. Official EIIP PDF9–16 and84 (§§2.1–2.2/5.2) read and Figure8.2-1 viewed. DOE original PDF20–22/56–60/62–64 supports actual states/return/loss distinctions; no steady-boiler example or universal return factor adopted. Capture page Description/local exhaust original body read. EU2025/2607/JRCdoi access failed; |
| F04 | supported | EN/ZH 770–815; sections5,7–9; AP42 original2pages read/rendered; ILCD printed255–272 read. Official EIIP PDF9–16 and84 (§§2.1–2.2/5.2) read and Figure8.2-1 viewed. DOE original PDF20–22/56–60/62–64 supports actual states/return/loss distinctions; no steady-boiler example or universal return factor adopted. Capture page Description/local exhaust original body read. EU2025/2607/JRCdoi access failed; |
| F05 | supported | EN/ZH 770–815; sections5,7–9; AP42 original2pages read/rendered; ILCD printed255–272 read. Official EIIP PDF9–16 and84 (§§2.1–2.2/5.2) read and Figure8.2-1 viewed. DOE original PDF20–22/56–60/62–64 supports actual states/return/loss distinctions; no steady-boiler example or universal return factor adopted. Capture page Description/local exhaust original body read. EU2025/2607/JRCdoi access failed; |
| F06 | supported | Complete EN/ZH sections1–11; 30–63;317–324; 770–815 |
| F07 | confirmed_issue | native_fresh_readback in this record; evidence/all10-native-observation-comparison.json; P03-35110-02 |
| C01 | evidence_gap | retained-private-evidence:part03/selection.json /source_accepted_mapping; manifest classification_refs |
| C02 | supported | retained-private-evidence:part03/selection.json /pcr_id and /metadata_correction; manifest id/classification_refs |
| C03 | supported | EN/ZH sections1–2 and5; manifest classification_refs; primary source locators in notes |
| P01 | supported | docs/reviews/cpc3-factual59-20261103/parts/part03/projection-verification.json; source_four_sha256 in this record |
| P02 | supported | manifest status/content_maturity/translation_status/review_metadata; EN/ZH frontmatter and quality/validation/source limits |

### CPC 37930

Disposition: `issues_confirmed_with_bounded_evidence_gaps`. Complete manifest and bilingual canonical content inspected; complete projection parsed and byte-identically regenerated.

- **Reference:** finished_roll
- **Basis:** 1m2 actual single-face projected complete material area first release; EN/ZH30–58,471–484
- **Scope:** unmodified non-self-adhered glass-mat mineral-surfaced complete solid roofing roll; EN/ZH12–28,60–95
- **Physical:** Complete EN/ZH all87cards, every protocol/rule/condition read; physical/burden vector and package gross-leg account conserves distinct stocks. No additional confirmed physical method defect; native classification disclosure issue only.
- **Native:** All adopted full native physical identities inspected using safe root fresh readbacks, missing/changed definitions individually read and unchanged fields compared to previously read public historical originals. Exact versions/state/times/hashes below. Actual site/supplier/provider compatibility and declared unresolved auxiliary rows remain conditional.
- **Primary:** ARMA original printed3–4/7–10 text read;fig2-1 and rollwinder pages8–9 rendered. Tarco full original body read; ILCD255–272 full text and selected rendered pages read. CPC original notes PDF186–187 now read/rendered.

| Criterion | Result | Evidence pointer |
| --- | --- | --- |
| F01 | supported | EN/ZH 30–58;471–484; /reference_flow; matching unique Product output card |
| F02 | supported | EN/ZH sections3–6, 30–58;471–484; full native property/unit observations below |
| F03 | confirmed_issue | EN/ZH all protocols and calculations; b_pack81; sections5,7–9; ARMA original printed3–4/7–10 text read;fig2-1 and rollwinder pages8–9 rendered. Tarco full original body read; ILCD255–272 full text and selected rendered pages read. CPC original notes PDF186–187 now read/rendered.; P03-37930-02 |
| F04 | confirmed_issue | EN/ZH all protocols and calculations; b_pack81; sections5,7–9; ARMA original printed3–4/7–10 text read;fig2-1 and rollwinder pages8–9 rendered. Tarco full original body read; ILCD255–272 full text and selected rendered pages read. CPC original notes PDF186–187 now read/rendered.; P03-37930-02 |
| F05 | supported | EN/ZH all protocols and calculations; b_pack81; sections5,7–9; ARMA original printed3–4/7–10 text read;fig2-1 and rollwinder pages8–9 rendered. Tarco full original body read; ILCD255–272 full text and selected rendered pages read. CPC original notes PDF186–187 now read/rendered. |
| F06 | supported | Complete EN/ZH sections1–11; 30–58;471–484; all protocols and calculations; b_pack81 |
| F07 | confirmed_issue | P03-37930-01; native_fresh_readback in this record; evidence/all10-native-observation-comparison.json |
| C01 | evidence_gap | retained-private-evidence:part03/selection.json /source_accepted_mapping; manifest classification_refs |
| C02 | supported | retained-private-evidence:part03/selection.json /pcr_id and /metadata_correction; manifest id/classification_refs |
| C03 | supported | EN/ZH sections1–2 and5; manifest classification_refs; primary source locators in notes |
| P01 | supported | docs/reviews/cpc3-factual59-20261103/parts/part03/projection-verification.json; source_four_sha256 in this record |
| P02 | supported | manifest status/content_maturity/translation_status/review_metadata; EN/ZH frontmatter and quality/validation/source limits |

### CPC 37940

Disposition: `issues_confirmed_with_bounded_evidence_gaps`. Complete manifest and bilingual canonical content inspected; complete projection parsed and byte-identically regenerated.

- **Reference:** first_release_hot_mix
- **Basis:** One positive 1 kg net wet fresh complete uniquely first-released mix; EN/ZH30–57,349–362.
- **Scope:** Virgin natural mineral and unmodified petroleum whole binder, batch drying with natural gas and electric binder heat, uncompacted first release; EN/ZH14–16,74–83.
- **Physical:** Complete EN/ZH all65cards, every protocol and calculation/validation clause. L56/79–81 and1202–1207 expressly separate inherited burden/service vectors from gross physical gates; vector question adjudicated no confirmed defect. Packaging equality defect remains at82/1208.
- **Native:** 15 additional distinct adopted native physical definitions read from root safe fresh extracts; common flows previously read and all unchanged historical fields compared. Petroleum-asphalt natural-class conflict already disclosed at150. PE-film29220 luggage source debt omitted.
- **Primary:** EPA original§§11.1.1–11.1.2 PDF1–7 read/rendered and diagramPDF2 viewed. FHWA originalPDF112,117–120,148–152 whole-page text read; diagrams112/150/151 viewed. Other cited FHWA subsections not fully read; no historical factors/settings adopted. ILCD printed255–272 read.

| Criterion | Result | Evidence pointer |
| --- | --- | --- |
| F01 | supported | EN/ZH 30–57;349–362; /reference_flow; matching unique Product output card |
| F02 | supported | EN/ZH sections3–6, 30–57;349–362; full native property/unit observations below |
| F03 | confirmed_issue | EN/ZH 1114–1229; sections5,7–9; EPA original§§11.1.1–11.1.2 PDF1–7 read/rendered and diagramPDF2 viewed. FHWA originalPDF112,117–120,148–152 whole-page text read; diagrams112/150/151 viewed. Other cited FHWA subsections not fully read; no historical factors/settings adopted. ILCD printed255–272 read.; P03-37940-02 |
| F04 | confirmed_issue | EN/ZH 1114–1229; sections5,7–9; EPA original§§11.1.1–11.1.2 PDF1–7 read/rendered and diagramPDF2 viewed. FHWA originalPDF112,117–120,148–152 whole-page text read; diagrams112/150/151 viewed. Other cited FHWA subsections not fully read; no historical factors/settings adopted. ILCD printed255–272 read.; P03-37940-02 |
| F05 | supported | EN/ZH 1114–1229; sections5,7–9; EPA original§§11.1.1–11.1.2 PDF1–7 read/rendered and diagramPDF2 viewed. FHWA originalPDF112,117–120,148–152 whole-page text read; diagrams112/150/151 viewed. Other cited FHWA subsections not fully read; no historical factors/settings adopted. ILCD printed255–272 read. |
| F06 | supported | Complete EN/ZH sections1–11; 30–57;349–362; 1114–1229 |
| F07 | confirmed_issue | P03-37940-01; native_fresh_readback in this record; evidence/all10-native-observation-comparison.json |
| C01 | evidence_gap | retained-private-evidence:part03/selection.json /source_accepted_mapping; manifest classification_refs |
| C02 | supported | retained-private-evidence:part03/selection.json /pcr_id and /metadata_correction; manifest id/classification_refs |
| C03 | supported | EN/ZH sections1–2 and5; manifest classification_refs; primary source locators in notes |
| P01 | supported | docs/reviews/cpc3-factual59-20261103/parts/part03/projection-verification.json; source_four_sha256 in this record |
| P02 | supported | manifest status/content_maturity/translation_status/review_metadata; EN/ZH frontmatter and quality/validation/source limits |

### CPC 37950

Disposition: `issues_confirmed_with_bounded_evidence_gaps`. Complete manifest and bilingual canonical content inspected; complete projection parsed and byte-identically regenerated.

- **Reference:** released_powder
- **Basis:** 1 kg net first-released whole synthetic graphite powder; EN/ZH30–57 and finished-powder card.
- **Scope:** Particulate calcined-petroleum-coke graphitization with separately identified particulate conductive graphite and insulation roles; shaped electrode/binder/baking route and already-graphitic-feed purification excluded. EN/ZH12–28,65–89.
- **Physical:** All 53 atomic cards, 55 protocols, complete stock/vector, raw physical and service rules read in both languages. Packaging L74 explicitly includes U and F_in/F_out. No confirmed physical-method defect in this record.
- **Native:** All adopted UUID physical definitions and exact native property chains inspected using prior public originals plus root fresh safe readbacks; 3 distinct new identities read here (graphite powder, calcined petcoke, PE-LD film). Graphite mineral classification caveat is already disclosed; pallet active electrical classification debt is omitted.
- **Primary:** Patent original PDF10–16 columns1–14 read; drawings3–7 PDF5–9 rendered/viewed. Asbury2006 pp3–12 complete cited text read;2026 original HTML body read. CPC CSV rows37950/37990/46950 and notes PDF186–187 read. ILCD printed255–272 read. No numerical recipe/temperature/example is adopted.

| Criterion | Result | Evidence pointer |
| --- | --- | --- |
| F01 | supported | EN/ZH 30–57;powder Product card; /reference_flow; matching unique Product output card |
| F02 | supported | EN/ZH sections3–6, 30–57;powder Product card; full native property/unit observations below |
| F03 | confirmed_issue | EN/ZH all collection/calculation/validation rules; b_pack74; sections5,7–9; Patent original PDF10–16 columns1–14 read; drawings3–7 PDF5–9 rendered/viewed. Asbury2006 pp3–12 complete cited text read;2026 original HTML body read. CPC CSV rows37950/37990/46950 and notes PDF186–187 read. ILCD printed255–272 read. No numerical recipe/temperature/example is adopted.; P03-37950-01 |
| F04 | confirmed_issue | EN/ZH all collection/calculation/validation rules; b_pack74; sections5,7–9; Patent original PDF10–16 columns1–14 read; drawings3–7 PDF5–9 rendered/viewed. Asbury2006 pp3–12 complete cited text read;2026 original HTML body read. CPC CSV rows37950/37990/46950 and notes PDF186–187 read. ILCD printed255–272 read. No numerical recipe/temperature/example is adopted.; P03-37950-01 |
| F05 | supported | EN/ZH all collection/calculation/validation rules; b_pack74; sections5,7–9; Patent original PDF10–16 columns1–14 read; drawings3–7 PDF5–9 rendered/viewed. Asbury2006 pp3–12 complete cited text read;2026 original HTML body read. CPC CSV rows37950/37990/46950 and notes PDF186–187 read. ILCD printed255–272 read. No numerical recipe/temperature/example is adopted. |
| F06 | supported | Complete EN/ZH sections1–11; 30–57;powder Product card; all collection/calculation/validation rules; b_pack74 |
| F07 | confirmed_issue | P03-37950-01; native_fresh_readback in this record; evidence/all10-native-observation-comparison.json |
| C01 | evidence_gap | retained-private-evidence:part03/selection.json /source_accepted_mapping; manifest classification_refs |
| C02 | supported | retained-private-evidence:part03/selection.json /pcr_id and /metadata_correction; manifest id/classification_refs |
| C03 | supported | EN/ZH sections1–2 and5; manifest classification_refs; primary source locators in notes |
| P01 | supported | docs/reviews/cpc3-factual59-20261103/parts/part03/projection-verification.json; source_four_sha256 in this record |
| P02 | supported | manifest status/content_maturity/translation_status/review_metadata; EN/ZH frontmatter and quality/validation/source limits |

### CPC 37960

Disposition: `issues_confirmed_with_bounded_evidence_gaps`. Complete manifest and bilingual canonical content inspected; complete projection parsed and byte-identically regenerated.

- **Reference:** finished_grain
- **Basis:** 1 kg net complete actual accepted white fused alumina grain at first release; residual actual moisture/packaging exclusions and real grading specified. EN/ZH30–61.
- **Scope:** Purchased verified calcined alumina, electric fusion, solidification, crushing and actual grading to white fused alumina grain; excludes brown fused/carbothermal bauxite route, bubbles, coated/bonded abrasives and repacking. EN/ZH12–28,65–87.
- **Physical:** Complete EN/ZH all cards/protocols/calculation/validation clauses read. Product/Waste and water/enthalpy/gas/particle branches remain conditional. Specific packaging equality omits distinct material/water change terms at80/1042.
- **Native:** Eight additional distinct full native physical definitions read (WFA, alumina, electrodes, refractory, compressed air, DI water, pallets and paper waste). Product/reference/property and actual route/state/media restrictions checked. WFA34220 source classification debt is already explicit; pallet17100 debt is omitted.
- **Primary:** ALTEO and three Washington Mills original complete product/route HTML bodies read. Original7-page SDS complete text, rendered pp1/2/4/6 and viewed composition/physical tables. EPA11.31 all10pages read, grain-versus-brown/bonded/coated diagrams/tables rendered and inspected. CPC original notes PDF186–187 and ILCD printed255–272 read.

| Criterion | Result | Evidence pointer |
| --- | --- | --- |
| F01 | supported | EN/ZH 30–61;accepted grain Product card; /reference_flow; matching unique Product output card |
| F02 | supported | EN/ZH sections3–6, 30–61;accepted grain Product card; full native property/unit observations below |
| F03 | confirmed_issue | EN/ZH 1019–1068; sections5,7–9; ALTEO and three Washington Mills original complete product/route HTML bodies read. Original7-page SDS complete text, rendered pp1/2/4/6 and viewed composition/physical tables. EPA11.31 all10pages read, grain-versus-brown/bonded/coated diagrams/tables rendered and inspected. CPC original notes PDF186–187 and ILCD printed255–272 read.; P03-37960-01; P03-37960-02 |
| F04 | confirmed_issue | EN/ZH 1019–1068; sections5,7–9; ALTEO and three Washington Mills original complete product/route HTML bodies read. Original7-page SDS complete text, rendered pp1/2/4/6 and viewed composition/physical tables. EPA11.31 all10pages read, grain-versus-brown/bonded/coated diagrams/tables rendered and inspected. CPC original notes PDF186–187 and ILCD printed255–272 read.; P03-37960-01; P03-37960-02 |
| F05 | supported | EN/ZH 1019–1068; sections5,7–9; ALTEO and three Washington Mills original complete product/route HTML bodies read. Original7-page SDS complete text, rendered pp1/2/4/6 and viewed composition/physical tables. EPA11.31 all10pages read, grain-versus-brown/bonded/coated diagrams/tables rendered and inspected. CPC original notes PDF186–187 and ILCD printed255–272 read. |
| F06 | supported | Complete EN/ZH sections1–11; 30–61;accepted grain Product card; 1019–1068 |
| F07 | confirmed_issue | P03-37960-01; native_fresh_readback in this record; evidence/all10-native-observation-comparison.json |
| C01 | evidence_gap | retained-private-evidence:part03/selection.json /source_accepted_mapping; manifest classification_refs |
| C02 | supported | retained-private-evidence:part03/selection.json /pcr_id and /metadata_correction; manifest id/classification_refs |
| C03 | supported | EN/ZH sections1–2 and5; manifest classification_refs; primary source locators in notes |
| P01 | supported | docs/reviews/cpc3-factual59-20261103/parts/part03/projection-verification.json; source_four_sha256 in this record |
| P02 | supported | manifest status/content_maturity/translation_status/review_metadata; EN/ZH frontmatter and quality/validation/source limits |

### CPC 37990

Disposition: `issues_confirmed_with_bounded_evidence_gaps`. Complete manifest and bilingual canonical content inspected; complete projection parsed and byte-identically regenerated.

- **Reference:** finished_board
- **Basis:** 1 kg actual whole net first-released bare stone-wool board including retained binder/oil/additives/residual water, excluding packaging and pore air; EN/ZH33–61,550–563.
- **Scope:** Natural basalt/compatible secondary mineral, coke hot-blast cupola, short rotating-wheel fibre, aqueous phenolic binder, gas cure and complete unfaced board; no inference that German EPD uses this furnace. EN/ZH13–19,69–99.
- **Physical:** All82 atomic cards,82 protocols and7 calculation rules completely read in EN/ZH, repeated exact fields factored losslessly with row-class placements. Shared attribution uses causality then conditional residual actual-gate values; zero/nonpositive/unknown values hold or require justified conserving case method. General physical gate correct; packaging equality omits change terms at85/1469.
- **Native:** Fourteen additional distinct safe native physical definitions read (including whole Rock Wool, sized dolostone, mineral oil and air molecule/media variants); common adopted flows already read. Rock Wool16390/asbestos wording caveats explicitly retained and not findings. Pallet17100 source debt omitted.
- **Primary:** JRC original PDF92–98/166–181 read: §2.9 and whole§3.8 plus adjacent counterroutes. Figures2.12–2.13 rendered/viewed PDF95–96; table3.45 layout viewed PDF177. ROCKWOOL original PDF1–8 read, including§§1–2.7 and3.1–3.9; PDF4 two-column composition/route viewed. CPC notes PDF186–187; ILCD printed255–272 read. Source numeric factors, EPD density/cutoff/recycled burdens/moduleD are expressly unadopted.

| Criterion | Result | Evidence pointer |
| --- | --- | --- |
| F01 | supported | EN/ZH 33–61;550–563; /reference_flow; matching unique Product output card |
| F02 | supported | EN/ZH sections3–6, 33–61;550–563; full native property/unit observations below |
| F03 | confirmed_issue | EN/ZH 1365–1490; sections5,7–9; JRC original PDF92–98/166–181 read: §2.9 and whole§3.8 plus adjacent counterroutes. Figures2.12–2.13 rendered/viewed PDF95–96; table3.45 layout viewed PDF177. ROCKWOOL original PDF1–8 read, including§§1–2.7 and3.1–3.9; PDF4 two-column composition/route viewed. CPC notes PDF186–187; ILCD printed255–272 read. Source numeric factors, EPD density/cutoff/recycled burdens |
| F04 | confirmed_issue | EN/ZH 1365–1490; sections5,7–9; JRC original PDF92–98/166–181 read: §2.9 and whole§3.8 plus adjacent counterroutes. Figures2.12–2.13 rendered/viewed PDF95–96; table3.45 layout viewed PDF177. ROCKWOOL original PDF1–8 read, including§§1–2.7 and3.1–3.9; PDF4 two-column composition/route viewed. CPC notes PDF186–187; ILCD printed255–272 read. Source numeric factors, EPD density/cutoff/recycled burdens |
| F05 | supported | EN/ZH 1365–1490; sections5,7–9; JRC original PDF92–98/166–181 read: §2.9 and whole§3.8 plus adjacent counterroutes. Figures2.12–2.13 rendered/viewed PDF95–96; table3.45 layout viewed PDF177. ROCKWOOL original PDF1–8 read, including§§1–2.7 and3.1–3.9; PDF4 two-column composition/route viewed. CPC notes PDF186–187; ILCD printed255–272 read. Source numeric factors, EPD density/cutoff/recycled burdens |
| F06 | supported | Complete EN/ZH sections1–11; 33–61;550–563; 1365–1490 |
| F07 | confirmed_issue | P03-37990-01; native_fresh_readback in this record; evidence/all10-native-observation-comparison.json |
| C01 | evidence_gap | retained-private-evidence:part03/selection.json /source_accepted_mapping; manifest classification_refs |
| C02 | supported | retained-private-evidence:part03/selection.json /pcr_id and /metadata_correction; manifest id/classification_refs |
| C03 | supported | EN/ZH sections1–2 and5; manifest classification_refs; primary source locators in notes |
| P01 | supported | docs/reviews/cpc3-factual59-20261103/parts/part03/projection-verification.json; source_four_sha256 in this record |
| P02 | supported | manifest status/content_maturity/translation_status/review_metadata; EN/ZH frontmatter and quality/validation/source limits |

## Adjudication and remaining limits


37940’s inherited-vector normalization is not a confirmed defect: EN/ZH56,79–81 and1202–1207 separately define attributable burden/service vectors and unscaled gross physical gates. No vector-convention change is requested. The natural-asphalt conflict in37940, WFA34220 conflict in37960, and Rock Wool16390/asbestos wording in37990 were already disclosed and are not new findings.

37950’s PE-LD film form restrictions are a bounded clarity question: global native-identity conditions and actual-construction qualification already apply; no actual incompatible liner was established.

35110 wastewater staging is an unsupported assertion, not proof of already-treated effluent. Its prior manifest-only exact-to-narrower/unmapped-to-accepted correction is documented metadata, not fresh physical proof.

The EU2025/2607 official URL returned a bot challenge and the JRC DOI was inaccessible; complete ISO/EPD standard texts were not acquired. Other cited FHWA pages outside the exact inspected set remain unassessed. Additional cached general safety/download-index/morphology leads were not used as current physical proof. Primary numeric defaults were not promoted; relevant source contexts and read gaps remain explicit in `docs/reviews/cpc3-factual59-20261103/parts/part03/primary-coverage.json`.

No canonical/shared mutation, sync, staging, commit, repository-wide validation, repair recheck, CI, hosted qualification or publication was performed by this reviewer. Root owns corrections and final source-bound verification.

Supplemental nonfinding:37930 already explicitly discloses the PE-film luggage classification conflict in all corresponding cards; no duplicate finding.

Mapping-context nonfinding:37930MF118–120,37940MF144–149 and37960MF140–142 explicitly nest old unaccepted/unmapped strings under historical_author_mapping_review and immediately state current accepted narrower authority. These are not stale current assertions; no correction is requested.
