> Frozen-source 95bdddb739fdc4144f94a482f712bcf6d9452f4b review. Later addenda may supersede initial no-finding statements. Final repaired-source assessment is pending Root ledger; this is not current CI or scientific approval.

# Part01 independent factual review

Reviewed frozen `95bdddb739fdc4144f94a482f712bcf6d9452f4b`: **10 PCRs,40 canonical files,382 inventory cards per language**. Complete bilingual context, every card, protocol, calculation, source note, condition and negation read. Entire projections parsed and semantically inspected with that source; exact repetitions collapsed only for display.

**Three P2 findings require repair; no P0/P1 finding established.** Seven records have no additional material finding within the stated scope. Scientific/formal translation/site dataset approval and final qualification remain unestablished.

## Findings

### PART01-P2-MDF-PROTOCOL-OWNER — Rebind utility inventory rows to their process-owned collection protocols

Twenty-one rows belong utilities but amount.evidence.collection_protocol_id selects protocols whose process_id is mdf_line and collection_method explicitly permits only mdf-line rows/sources. Correct *_utilities protocols already exist. The exact contradiction is in both canonical language cards and their current projection.

Following the explicit scope prevents the cited line-only protocol from collecting boiler fuel/power/water/heat/waste/emissions; a consumer may omit or misattribute utility activity, even though a separate correct utility protocol is available.

Requested correction: Use cp_energy_utilities, cp_thermal_utilities, cp_water_utilities, cp_residues_utilities and cp_air_utilities in each affected utilities card and its amount expression. Retain cp_fuel for utility solid fuels and cp_vapour_utilities for boiler H2O; regenerate through supported transaction and recheck complete source contexts.

Exact bilingual line texts and projection pointers: `docs/reviews/cpc3-factual59-20261103/parts/part01/report.json` / `retained-private-evidence:part01/findings-preliminary.json`. This is a content/projection relationship defect, not proof of a measured numerical error or scientific rejection.

### PART01-P2-STAKE-NUMERATOR — Keep collection numerators in campaign units before one normalization

Collection methods label a quantity the recorded numerator yet define it as consumed material/accepted kg, purchased kWh×3.6/accepted kg, or emission kg/accepted kg. Declared unit is kg or MJ. Cards then say collect the amount through that protocol and divide by accepted kg; line308 and normalize_batch314 require all raw numerators to be campaign totals and divide once. These are inconsistent local instructions.

A reader obeying the collection numerator formula and the later card formula divides twice, or stores MJ/kg in a field labelled MJ. The later once-only paragraph exposes intended behavior but does not repair the contradictory numerator definition.

Requested correction: Collect unnormalized native material kg, kWh or converted MJ and emitted kg in protocols; identify normalization as one shared reporting operation, not a numerator. Preserve same B and any final reporting formulas without adding a second division.

Exact bilingual line texts and projection pointers: `docs/reviews/cpc3-factual59-20261103/parts/part01/report.json` / `retained-private-evidence:part01/findings-preliminary.json`. Actual implementation may correctly follow the once-only paragraph; finding concerns misleading and dimensionally inconsistent author-facing instructions.

### PART01-P2-PARTICLEBOARD-VOLUME-SYMBOL — Use demand V_provider in every chip and gas card after separating fixed provider reference

The complete measurement rule, cp_feed and calculations reserve fixed A_provider for provider reference and V_provider for converted period demand, but chip quantity conditions/cards still say convert to A and use reference volume A per1kg; gas card similarly uses reference volume A. The old A notation and new explicit fixed reference are left inconsistent in the same quantity contract.

A consumer can use a fixed1m3 provider reference as the demanded quantity even when actual period demand is10m3. The explicit calc rule is correct, so the defect is an incomplete symbol migration in card instructions, not the underlying state-conversion algebra.

Requested correction: Reserve A_provider for fixed provider reference; update every chip/gas preamble, card amount and cp_fuel/reference phrase to converted period V_provider, exchangeV_provider/Q and separate n_provider=V_provider/A_provider. Regenerate projection and keep state/definition gaps.

Exact bilingual line texts and projection pointers: `docs/reviews/cpc3-factual59-20261103/parts/part01/report.json` / `retained-private-evidence:part01/findings-preliminary.json`. A may have been intended as shorthand for demand in old cards. The new rule removes that meaning, so this is a confirmed cross-field ambiguity; no measured downstream wrong quantity is claimed.

## Records

| CPC3 | Conclusion | Native physical witnesses |
| --- | --- | --- |
| 31109 | Bounded no additional material finding | 30/32 fresh; 0 unbound cards |
| 31219 | Bounded no additional material finding | 1/1 fresh; 11 unbound cards |
| 31220 | Bounded no additional material finding | 8/9 fresh; 2 unbound cards |
| 31330 | P2: PART01-P2-STAKE-NUMERATOR | 11/12 fresh; 0 unbound cards |
| 31421 | Bounded no additional material finding | 15/17 fresh; 11 unbound cards |
| 31431 | P2: PART01-P2-PARTICLEBOARD-VOLUME-SYMBOL | 31/33 fresh; 16 unbound cards |
| 31432 | Bounded no additional material finding | 28/30 fresh; 22 unbound cards |
| 31439 | Bounded no additional material finding | 18/20 fresh; 14 unbound cards |
| 31441 | P2: PART01-P2-MDF-PROTOCOL-OWNER | 31/33 fresh; 21 unbound cards |
| 31450 | Bounded no additional material finding | 13/15 fresh; 9 unbound cards |

### 31109 — Unimpregnated solid wood railway or tramway sleepers

Reference: finishing_finished_out:1kg new accepted bare solid-sawn sleeper at measured dispatch moisture.

Boundary: Received sawn stock; actual sizing/adzing/boring; air/indirect kiln drying or bypass; finishing; conditional non-CHP boiler. No treatment, engineered construction, attached fastenings or service-life claim.

Physical/accounting assessment: Measured B counts first acceptance once; N is only cross-check and M individually measured. Original wet/dry wood, water/carbon, stock and stage handoffs precede joint-step burden shares. Returned old FG and later services retain original cohorts. Steam Gross-calorific-value identity does not verify net receiver heat.

Factual/misleading checks: Source CN electricity, PAO fully synthetic identity,99Fe/1C recycled steel constraint, NOx mass basis, chip solid/bulk volume and liquid/solid waste physical subsets remain qualified. No empirical sleeper weight, density, yield, life, default fuel or emissions factor imposed.

Primary original sections inspected: USDA PDF95/324 moisture/method; CORRIM Northern2025 originalPDF16 allocation; EPA2014PTE originalPDF1; EPAboiler2022 originalPDF1–3; CPC3 workbookrow1183.

EN/ZH line locators: 53, 55, 85, 737, 1100, 1101, 1109, 1123, 1137, 1148, 1153, 1155.

Criteria: F01=supported, F02=supported, F03=supported, F04=supported, F05=supported, F06=supported, F07=evidence_gap, C01=not_applicable, C02=not_applicable, C03=supported, P01=supported, P02=supported, H97-CIT=supported, H97-SOLIDS=supported, H97-DENOM=supported.

Limits:
- Actual factory/supplier quantities, kiln heat basis, railway performance and scientific approval unestablished.
- Fresh flow identity/type/media/property evidence is not actual supplier/background or site-quantity approval. No new property/unit-group endpoint read or every-source full-document scientific audit claimed.
- No builder validate, deterministic regeneration, schema-execution test, hosted qualification or scientific/formal translation approval executed. Final root repair/integration source requires independent recheck.

### 31219 — Solid American red-oak interior baseboard mouldings from kiln-dried lumber

Reference: accepted_profile:1kg unique first-accepted profiled red-oak wood at release moisture, packaging excluded.

Boundary: Received kiln-dried solid American red-oak lumber to continuously profiled uncoated unglued unassembled interior baseboard. Upstream sawing/drying retained once; no ready-profiled input shortcut.

Physical/accounting assessment: Q_c frozen by first acceptance including accepted closing FG; later packing/storage/rework services remain with original cohort. Separate physical V and burden A, raw/WIP/FG/return vectors and packaging P/N_ext/E_R/S/E_O/W reconcile gross movements. Asset service needs justified whole-service denominator.

Factual/misleading checks: American red oak is commercial Quercus spp., not automatic Q.rubra. Actual net shaped geometry differs from bounding rectangles/commercial linear lengths. No SPL293 route/specification, manufacturer linkage, moisture/density/yield/energy/life or certification default asserted.

Primary original sections inspected: Direct Baird2022 process/QA/power transcript; Baird2019 finish/random lengths/customer packaging; Baird2020 actual residues/heat/generators; HardwoodRack solid/no glue-up product page; AHCcataloguePDF5/6/24/25 incl rendered profile drawing; AHECPDF16/17 species group; CS76PDF3–5 historic grading/linear measurement; EPA1976PDF59/60 visually read; USDA95/324; CPC3row1188.

EN/ZH line locators: 15, 17, 19, 54, 62, 89, 91, 328, 338, 346, 354, 360, 367, 384, 388.

Criteria: F01=supported, F02=supported, F03=supported, F04=supported, F05=supported, F06=supported, F07=evidence_gap, C01=not_applicable, C02=not_applicable, C03=supported, P01=supported, P02=supported, H97-CIT=supported, H97-SOLIDS=supported, H97-DENOM=supported.

Limits:
- Eleven concrete atomic cards have no UUID. Actual complete site dataset cannot be claimed until identities, measurements, upstream/providers and asset-service evidence are established.
- Fresh flow identity/type/media/property evidence is not actual supplier/background or site-quantity approval. No new property/unit-group endpoint read or every-source full-document scientific audit claimed.
- No builder validate, deterministic regeneration, schema-execution test, hosted qualification or scientific/formal translation approval executed. Final root repair/integration source requires independent recheck.

### 31220 — Unbound untreated wood flour from dry waste sawdust

Reference: flour_output:1kg bulk clean unbound untreated filler flour at measured dispatch moisture.

Boundary: Already dry clean untreated waste sawdust; dedicated unheated electrical milling/screening/dry dust capture. Wood wool, thermal drying, washing, combustion and bonded/polymer products excluded.

Physical/accounting assessment: Separate dry wood/water stocks; oversize and captured-powder pairs are internal diagnostic handoffs, not additional external inputs/outputs. Repeated passes retain electricity; waste/reuse/emitted particulate destinations disjoint. Lubricant/spent oil stocks independent.

Factual/misleading checks: Generic Wood material binds only measured species/particle morphology/sieve standard/moisture/no-binder/gate. Sawdust Waste comb/rec used only actual recovery; no China grid background default. PM bins are differences of matched totals; unknown water loss not a vapour balancing plug.

Primary original sections inspected: HMRC original fullWood-wool/wood-flour subsection; Clemons/Caufield2005 originalPDF3–5 via primaryweb/PDF; USDA95/324; CPC3row1190.

EN/ZH line locators: 13, 15, 46, 48, 55, 57, 86, 90, 94, 97, 155, 273, 275, 283, 296, 302, 314.

Criteria: F01=supported, F02=supported, F03=supported, F04=supported, F05=supported, F06=supported, F07=evidence_gap, C01=not_applicable, C02=not_applicable, C03=supported, P01=supported, P02=supported, H97-CIT=supported, H97-SOLIDS=supported, H97-DENOM=supported.

Limits:
- dust_waste/screen_reject native identities remain unresolved. No measured flour yield/energy/moisture target or actual matched upstream provider established.
- Fresh flow identity/type/media/property evidence is not actual supplier/background or site-quantity approval. No new property/unit-group endpoint read or every-source full-document scientific audit claimed.
- No builder validate, deterministic regeneration, schema-execution test, hosted qualification or scientific/formal translation approval executed. Final root repair/integration source requires independent recheck.

### 31330 — Untreated cleft pointed sweet-chestnut stakes

Reference: final_stake:1kg net debarked cleft pointed Castanea sativa stake at delivery moisture.

Boundary: Manual/electric rough conversion from chestnut roundwood; grain cleaving, four-face point at larger end and optional natural seasoning; no longitudinal sawing, treatment or artificial drying.

Physical/accounting assessment: Wood/water/carbon and rain/drainage/stocks precede allocation; true saleable coproduct needs distinct Product row. Material protocols incorrectly call an already divided quantity the recorded numerator, conflicting with card and final once-only denominator rules.

Factual/misleading checks: EFF supports real species/form/untreated/no-artificial-drying; its12–18yr life/carbon marketing not adopted. Native PPtwine farm-gate average context explicitly cannot supply yard background/amount. Offcut classification inconsistency already disclosed.

Primary original sections inspected: Fresh EFF originalPDF1 visually read; ForestryCommission1958 originalPDF85/printed77 and54; USDA95/324; CPC3row1199.

EN/ZH line locators: 14, 16, 18, 49, 77, 158, 288, 290, 299, 300, 308, 314, 318.

Criteria: F01=confirmed_issue, F02=confirmed_issue, F03=supported, F04=supported, F05=supported, F06=supported, F07=evidence_gap, C01=not_applicable, C02=not_applicable, C03=supported, P01=confirmed_issue, P02=supported, H97-CIT=supported, H97-SOLIDS=supported, H97-DENOM=supported.

Limits:
- P2 numerator definition needs correction despite clear intended once-only normalization. No actual strength/life, forestry provider, receiver or site quantities approved.
- Fresh flow identity/type/media/property evidence is not actual supplier/background or site-quantity approval. No new property/unit-group endpoint read or every-source full-document scientific audit claimed.
- No builder validate, deterministic regeneration, schema-execution test, hosted qualification or scientific/formal translation approval executed. Final root repair/integration source requires independent recheck.

### 31421 — Five-layer coniferous lumber-core blockboard with PVAc core gluing and UF skin bonding

Reference: finished_panel:1kg five-layer coniferous strip-core blockboard, uncoated/conditioned/trimmed/sanded.

Boundary: AqueousPVAc edge-glued solid sawn-strip core plus four coniferous veneer sheets, actual0/90/0/90/0 axes, dryUF/NH4Cl/water/conditional filler skin glue. External net hot-water heat/electricity; no onsite combustion.

Physical/accounting assessment: Whole supplied PVAc distinct from constituents; non-solids not automatically water. Whole mass/elementalC/H/O versus reaction-aware species balances require actual UF cure extent. Net heat uses actual separate legs, states, datum, losses/storage and provider ownership. Raw q_lot, prepared A_c and fixed B_c remain separate with full cohort/stock/later-service ledger.

Factual/misleading checks: FAO explicitly supports at leasttwo veneers per side when facegrainparallelcore. UNIDO supports different core/skin adhesives. CPC31411 title/inclusion conflict disclosed and31421 retained as narrow author inference. Fresh native reference f7f7 is physically named/described blockboard but CPC saysDensifiedwood and prose mentions both softwood/hardwood; this source inconsistency remains an evidence gap.

Primary original sections inspected: FAO originalOtherManufacturedBoards completeunit; UNIDO originalPDF21/30–32; Frihart2023 originalPDF14–17; USDA95/324; CPC3workbookrows1201–1208 fullnotes.

EN/ZH line locators: 15, 19, 50, 58, 61, 90, 145, 160, 235, 541, 549, 557, 565, 581.

Criteria: F01=supported, F02=supported, F03=supported, F04=supported, F05=supported, F06=supported, F07=evidence_gap, C01=not_applicable, C02=not_applicable, C03=supported, P01=supported, P02=supported, H97-CIT=supported, H97-SOLIDS=supported, H97-DENOM=supported.

Limits:
- Eleven native rows unresolved. Actual formulation/provider, veneers, hardener and heat/cure data incomplete. Native reference source classification inconsistency is not proof of densified physical construction.
- Fresh flow identity/type/media/property evidence is not actual supplier/background or site-quantity approval. No new property/unit-group endpoint read or every-source full-document scientific audit claimed.
- No builder validate, deterministic regeneration, schema-execution test, hosted qualification or scientific/formal translation approval executed. Final root repair/integration source requires independent recheck.

### 31431 — Uncoated UF-bonded wood particleboard with audited resin preparation

Reference: finished_panel:1kg accepted net uncoated UF-bonded wood particleboard.

Boundary: Flat dry mat hot-pressed discrete wood particles; actual unmodifiedUF preparation on-site or supplier-expanded. No OSB/wafer/fibre/nonwood/coated/moulded or otherbinder route.

Physical/accounting assessment: Separate dedicated/co-product/recovered inputs; own dryer/boiler/oxidizer fuel versus imported supplies; whole formaldehyde solution versus analytical constituents, wood versus curedUF solids and reaction/carrier water, fossil/biogenic carbon and disjoint particle bins. Correct provider-volume algorithms coexist with old ambiguous A card instructions.

Factual/misleading checks: Incomplete symbol migration: fixed A_provider versus period demand V_provider correctly separated in rule58/cp_feed/calculations916/917, but chip/gas cards retain reference-volumeA instructions. CORRIM12facilities9US/3Canada scope corroborated; no source recipe/default quantities adopted. NativePEfilm luggage classification conflict disclosed.

Primary original sections inspected: USDA286–290 architecture; EPAparticleboard originalPDF1/3; CORRIMPB originalPDF18/19; EPAboiler2022PDF1–3; CPC3row1210.

EN/ZH line locators: 58, 99, 106, 300, 307, 899, 900, 904, 916, 917, 933, 944.

Criteria: F01=confirmed_issue, F02=confirmed_issue, F03=supported, F04=supported, F05=supported, F06=supported, F07=evidence_gap, C01=not_applicable, C02=not_applicable, C03=supported, P01=confirmed_issue, P02=supported, H97-CIT=supported, H97-SOLIDS=supported, H97-DENOM=supported.

Limits:
- Sixteen atomic native gaps. Wilson2010 andFAOUBET supplementary original sections located but not fully re-reviewed here; no recipe replication or supplier quantity/provider approval claimed.
- Fresh flow identity/type/media/property evidence is not actual supplier/background or site-quantity approval. No new property/unit-group endpoint read or every-source full-document scientific audit claimed.
- No builder validate, deterministic regeneration, schema-execution test, hosted qualification or scientific/formal translation approval executed. Final root repair/integration source requires independent recheck.

### 31432 — Oriented strand board (OSB)

Reference: finished_osb:1kg net finished PF/pMDI OSB at declared dispatch moisture.

Boundary: Long narrow strands with deliberately oriented faces and declared layer architecture, counteraligned or documented random core. ActualPF/pMDI combination/conditional edge seal, no whole random layup or otherboard architecture.

Physical/accounting assessment: Integrated stage/control ownership; sharedstack/mainmeter and RTOheat counted once. Whole-stream/element balances include air/humidity; reactive ledgers include PFwater, pMDIwaterconsumption/fossilCO2 and actual combustion extents.

Factual/misleading checks: USDA supports randomcore with orientedfaces. No fixedthree/fivelayers, strength/dimension/density/life or3%pMDI loading adopted. NativepMDI is OSB-specific with3%comment, explicitly rejected as dose source. Actual4,4MDI monomerCAS101-68-8 remains distinct frompolymericinput.

Primary original sections inspected: USDA286/287; EPAOSB originalPDF1/3/4/5; CORRIMOSB originalPDF13/14/17–19; Frihart2023PDF26/printed732Fig14.19 visuallyread; CPC3row1211.

EN/ZH line locators: 14, 16, 47, 57, 73, 75, 153, 887, 921, 923, 933, 949, 965, 968.

Criteria: F01=supported, F02=supported, F03=supported, F04=supported, F05=supported, F06=supported, F07=evidence_gap, C01=not_applicable, C02=not_applicable, C03=supported, P01=supported, P02=supported, H97-CIT=supported, H97-SOLIDS=supported, H97-DENOM=supported.

Limits:
- Twenty-two native gaps. Actual complete wet resin/wax/coating provider/formulation requires verification. OIML original located but complete metrological/legal conformity not assessed.
- Fresh flow identity/type/media/property evidence is not actual supplier/background or site-quantity approval. No new property/unit-group endpoint read or every-source full-document scientific audit claimed.
- No builder validate, deterministic regeneration, schema-execution test, hosted qualification or scientific/formal translation approval executed. Final root repair/integration source requires independent recheck.

### 31439 — Uncoated randomly laid PF-bonded wood waferboard

Reference: finished_waferboard:1kg uncoated unpreserved randomly laid broad-thin wafer powderedPF panel.

Boundary: Nondeliberate random layup; powdereduncuredPFresole/conditionalneatwax; externalindirectsteam/electrichandling/drycontrol. No orientedOSB, onsitecombustion, sanding/wetcontrols or coatings.

Physical/accounting assessment: Separate material/steamcondensate and environmentalburden ledgers. No equal steamreturn mass assumption. PFreactionwater distinct fromcarrier/evaporation; physical stocks/phase-resolved PM/VOC intact; actualconditionalpresence not presumed.

Factual/misleading checks: Rendered FPLGTR53printed5Figure2 confirmswidewafer specimen. RenderedFPLRP574printed2Table1 confirmsW1–W7powder andW4Ontario; PCR does not inferW4species/PF/steamroute. Conner supportsPFresole/water/powderedwaferboard use. No historical parameter/grade/life default adopted.

Primary original sections inspected: CarllFPLGTR53PDF7rendered; FPLRP574PDF4table rendered; EPAOSB originalPDF1/3–5; Conner2001PDF2/3; USDA95/324; CPC3row1213.

EN/ZH line locators: 14, 18, 49, 59, 174, 298, 437, 482, 602, 619, 646, 654, 663.

Criteria: F01=supported, F02=supported, F03=supported, F04=supported, F05=supported, F06=supported, F07=evidence_gap, C01=not_applicable, C02=not_applicable, C03=supported, P01=supported, P02=supported, H97-CIT=supported, H97-SOLIDS=supported, H97-DENOM=supported.

Limits:
- Fourteen native gaps. GHGallocation original located but whole chapter not re-reviewed; actualsteam/PFprovider/sitegrade and empirical quantities unapproved.
- Fresh flow identity/type/media/property evidence is not actual supplier/background or site-quantity approval. No new property/unit-group endpoint read or every-source full-document scientific audit claimed.
- No builder validate, deterministic regeneration, schema-execution test, hosted qualification or scientific/formal translation approval executed. Final root repair/integration source requires independent recheck.

### 31441 — Dry-process wood medium-density fibreboard manufacture

Reference: mdf_output:1kg accepted cooled sanded trimmed uncoated dry-process wood MDF.

Boundary: Steamrefining ofwoodfibres; actualUF/MUF/pMDIdosingpoint; fibre drying/dryforming/press/cool/finish; conditional separateutilitiesboiler. No wet/nonwood/specialtreated/coated board substitution.

Physical/accounting assessment: Whole mass/actualelements versus reactiveH2O/wood/resin across bothprocesses; distinct boilerH2Opostcontrol output, grosshumidity/source decomposition, partialoxidation, steam/condensate/controlwater/stocks. Completepool preserves failed/zerooutput/rework withoutinventingdenominator.

Factual/misleading checks: Twenty-one utilities cards/projected links still cite explicitly mdf_line-owned protocols, although matching *_utilities exist. Boilerwatervapour already correctly usescp_vapour_utilities; remainingpower/fuel/water/thermal/waste/gas/PM links require repair. CORRIMMDF12/13facility discrepancy truthfully retained.

Primary original sections inspected: USDA289/290; EPAMDF originalPDF1/3/4; CORRIMMDF originalPDF18/19; Frihart2023PDF14–17/26; DOEeconomizerPDF1; EPAMethod4PDF1/2; CPC3row1215.

EN/ZH line locators: 92, 1173, 1220, 1235, 1250, 1273, 1288, 1307, 1322, 1337, 1355, 1370, 1514, 1555, 1568, 1581, 1584, 1603.

Criteria: F01=confirmed_issue, F02=supported, F03=confirmed_issue, F04=supported, F05=supported, F06=supported, F07=evidence_gap, C01=not_applicable, C02=not_applicable, C03=supported, P01=confirmed_issue, P02=supported, H97-CIT=supported, H97-SOLIDS=supported, H97-DENOM=supported.

Limits:
- Twenty-one native gaps; actualsite formulation/NOx/chips/gas/heat andH2Osource fractions require records. Nolegal measurement conformity or scientific approval established.
- Fresh flow identity/type/media/property evidence is not actual supplier/background or site-quantity approval. No new property/unit-group endpoint read or every-source full-document scientific audit claimed.
- No builder validate, deterministic regeneration, schema-execution test, hosted qualification or scientific/formal translation approval executed. Final root repair/integration source requires independent recheck.

### 31450 — PF-bonded woven bamboo mat plywood

Reference: finished_panel:1m3 net solid measured PF woven-mat bamboo panel at actual dispatch moisture.

Boundary: Purchaseduntreatedungluedwovenbamboosliver mats; aqueousPFdip/squeeze/mature/redry/layup/press/cool/edge/check; electric or externalindirectsteam. No strip/curtain/scrimber/treated inputs or onsitecombustion/treatment.

Physical/accounting assessment: LWTsolid volume excludespackaging/stackvoids; wholewetPF supply notgenericdryresinkg, constituents analyticalonly. PFstocks/squeezerecirculation, reactionwater, steamloop, bamboo biogenic versusresin/release/filmfossilcarbon independent. Fullperiod rulekeepsfailed/rework pools.

Factual/misleading checks: ITTOAppendix1 creditsINBAR2002, permits purchasedmats and supportsPFpool/squeeze/maturing/press. Boil/freeze/dry is a producttest, notproductionpretreatment. No historicalresin%,pressschedule,density,lifetimeorcarboncredit default adopted. FreshnativeboardVolume includesmatplywood but not exactweave/provider.

Primary original sections inspected: ITTOoriginalPDF25–28 fullAppendix1; FreshnativeBambooMan-madeBoardVolumereference; CPC3row1219.

EN/ZH line locators: 15, 17, 19, 40, 63, 95, 122, 490, 515, 530, 535.

Criteria: F01=supported, F02=supported, F03=supported, F04=supported, F05=supported, F06=supported, F07=evidence_gap, C01=not_applicable, C02=not_applicable, C03=supported, P01=supported, P02=supported, H97-CIT=supported, H97-SOLIDS=supported, H97-DENOM=supported.

Limits:
- Nine native gaps. FAO1997/1998,INBAR2015 andEPAplywood supplementary original sections located but not fully re-reviewed here. Actual wholewetPF/mat origin/treatment/provider, geometry/density andsteamheat required.
- Fresh flow identity/type/media/property evidence is not actual supplier/background or site-quantity approval. No new property/unit-group endpoint read or every-source full-document scientific audit claimed.
- No builder validate, deterministic regeneration, schema-execution test, hosted qualification or scientific/formal translation approval executed. Final root repair/integration source requires independent recheck.

## Evidence limits

64/66 distinct adopted Flow UUIDs have fresh sanitized native physical outputs independently inspected; PM>10/methanol retain dated historical witnesses. Record-specific unresolved blank UUIDs and supplier/quantity applicability remain explicit. No native title/parity comparison is treated as scientific approval.

Source URL/date/original hashes and page/excerpt hashes are retained. Important original figures/tables were rendered and visually read: EFF stake sheet; wide-wafer specimen; W1–W7/W4table; red-oak profiled drawing; historical EPA dust pages; pMDI reaction figure. Some supplementary source sections were not independently re-reviewed and are identified per record.

No canonical/shared source write, sync, test/validate, publication or auth/environment inspection occurred. Root must serially repair confirmed issues and independently recheck the resulting final source.
