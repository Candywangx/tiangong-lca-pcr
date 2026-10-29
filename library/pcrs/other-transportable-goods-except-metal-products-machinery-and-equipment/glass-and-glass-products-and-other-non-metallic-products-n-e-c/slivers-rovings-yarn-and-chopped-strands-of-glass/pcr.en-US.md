---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.slivers-rovings-yarn-and-chopped-strands-of-glass
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Direct-melt sized untwisted E-glass direct roving

## 1. Scope and Applicability

This attributional PCR manufactures dry sized untwisted E-glass direct roving from whole supplied mineral raw materials through bushing continuous-filament drawing, aqueous sizing, single-end direct winding, electric drying and unique first quality release. Include real utilities and separate original-cohort post-release services. The terminal is an accepted dried doff, not purchased-roving repacking. Scope selects an air/natural-gas recuperative melter with actual electric-boost state, gas forehearth and electrically heated drying. It differs from purchased-roving weaving, float sheet, Danner borosilicate tubing, rolled sheet, mechanical edging and thermal toughening. [jrc-glass-bref-2013; jushi-direct-roving-312]

Exclude slivers, assembled multi-cake roving, twisted yarn, chopped strands, milled fibres, glass wool, optical fibre, woven glass fabric, mat/web/board, matrix-impregnated composite, non-E-glass chemistry, marble remelting, all-electric melting, oxygen-boost/oxy-fuel melting and gas/steam drying. A changed route requires renewed applicability rather than omission of actual exchanges. [jrc-glass-bref-2013; un-cpc3-2025]

JRC supports complete manufacture and adjacent-route countercontext; Jushi312 establishes the untwisted direct-roving terminal, while386T is adjacent product context from the same manufacturer, not an independent publisher. This is transparent technical synthesis, not one common SKU, plant, order or current universal recipe. The sheets label “grams per metre (Tex)” inconsistently with tex; do not use that label for conversion. Mechanical performance can depend on the resin system and is not a bare-roving strength default. Package illustrations do not prove wood, film or removable tubes. No source recipe, dimension, yield, heating value, density, emission, size/moisture threshold, packaging tare or life is adopted as a universal default. [jrc-glass-bref-2013; jushi-direct-roving-312; jushi-direct-roving-386t]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.slivers-rovings-yarn-and-chopped-strands-of-glass |
| classification_refs | CPC 3.0 37121; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | One declared dry sized untwisted single-end direct E-glass roving configuration |
| excluded_products | Exclude slivers, assembled multi-cake roving, twisted yarn, chopped strands, milled fibres, glass wool, optical fibre, woven glass fabric, mat/web/board, matrix-impregnated composite, non-E-glass chemistry, marble remelting, all-electric melting, oxygen-boost/oxy-fuel melting and gas/steam drying. A changed route requires renewed applicability rather than omission of actual exchanges. |
| representative_product | Newly first-accepted bare direct-roving doff |
| production_route | Individual minerals → air/gas melting → bushing draw/aqueous size → direct winding → electric dry → first release → observed services |
| market_state | Dry sized untwisted doff at actual declared residual moisture; removable packaging excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Bare qualified dry-sized direct E-glass roving |
| How much | 1 kg at unique first quality release |
| How well | Declared E-glass chemistry; diameter; linear density; sizing/compatibility; moisture; physical state and actual acceptance methods |
| How long or cycle | One declared actual production campaign; observed post-release services separately |
| reference_flow_link | first_roving |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fiber glass `12515acc-030c-4be2-ad20-fae5c0b35cfb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | E-glass chemical composition and boron/fluorine state; actual individual mineral recipe and cullet compatibility; direct-melt air/gas recuperative route and boost state; single-end directly wound untwisted form; filament diameter and linear density method/unit; whole supplied sizing identity and formulation lot; resin compatibility and finish state; drying time-temperature and actual residual moisture; product acceptance methods and tolerances; bare product mass excluding removable packaging; first-release cohort and unique Q record; opening and closing raw/WIP/FG and installed-charge history; plant geography and period; actual utility voltage supply mix water quality and agreements; actual packaging configuration and all gross movements; observed original-cohort service interval and return/rework history |

Declare every required qualifier in package metadata, process notes, reference-flow comment or equivalent fields. Bare product mass includes retained sizing and actual residual moisture at this declared state; do not switch to pure-glass dry mass, wet-cake gross mass, packaging mass or net deliveries. Native Product/Mass Fiber glass is at plant with E-Glass treatment and explicitly describes fine fibres spun from molten glass. Its general comment also uses fiberglass for fibre-reinforced plastic and discusses insulation, sheets, cloth and reinforcement uses; that mixed description is disclosed, not a requirement to add a structural resin matrix. Adopt only the expressly described E-glass-fibre member as this whole dry-sized untwisted directly wound commercial roving, including retained silane-based size and actual declared residual moisture, excluding removable packaging. No native resin fraction, matrix-binding route, exact roving form, sizing recipe, grade, CAS, geography or provider is fixed. Do not substitute pure-glass-only mass, matrix-impregnated GFRP, wet cakes, twisted/assembled yarn, chopped fibre, woven fabric or mat; actual route, formulation, state and supplier fit require independent evidence. Returned material outside this declared state must be separated rather than silently assigned this identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Calibrated net weighing at unique first acceptance; subtract actual removable packaging tare and record residual water/size independently. |
| unit_state | all inventory rows | Actual numerator property | original unit | Convert original numerator units and actual gas/liquid state before allocation. Integrate actual rates only; do not multiply integrated volume by time. Independent substance/state density is mandatory when needed; secondary property factors are not density evidence. |
| single_normalization | all inventory rows | Declared reference basis | kg | Raw protocols preserve undivided records. Section8 normalize_once performs A_j_c/Q_c once after real conversion, allocation and disjoint inherited-vector corrections. Cards and aggregation read that same result. |
| article_mass | all packaging and equipment articles | Mass | kg | Counts need calibrated actual configuration tare; no guessed item mass, density or service life. Packaging is excluded from bare Q and follows its own gross ledger. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole supplied minerals and complete purchased aqueous sizing; actual compatible cullet and inherited stock states |
| starting_condition_role | Actual physical procurement/stock starting condition for raw-to-direct-roving manufacture |
| product_classification_scope | Narrow direct-roving subset of CPC3.0:37121 |
| recursive_input_rule | Purchased finished roving is an explicit upstream input for a different converting route; never represent its repacking as new raw-to-roving manufacture. Recovered internal glass retains its own history and acceptance. |
| upstream_dataset_requirement | Representative supplier-specific mining preparation sizing manufacture fuel electricity water packaging and inbound freight datasets; unknown providers remain explicit. |
| disclosure | Declare all section3 qualifiers; operation meter interfaces; physical stock/species closures; allocation evidence; observed service boundary and uncertainty. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | manufacturing boundary | Begin with individual mineral and whole supplied sizing inputs, compatible actual cullet and their real supply/inbound histories; include batch handling, air/natural-gas recuperative melting/fining, forehearth gas heating, electrically heated Pt-Rh bushing, cooling, aqueous sizing, single-end direct winding, electric drying, inspection and first quality release. Keep actual failed/zero-output/start-stop/idle/cleanup/rework loads. | jrc-glass-bref-2013 |
| b_atomic | all real exchanges | Listed conditional cards require real presence or documented absence. Add a separate card/protocol for every actual missing ingredient, fuel, oxygen boost, treatment chemical, packaging component, repair material, pollutant species or destination before claiming complete scope. No other/zero collection hides real manufacture. A whole bought formulation is purchased once; plant formulation instead lists every purchased ingredient and real mixing losses/energy. | jrc-glass-bref-2013 |
| b_physical | independent physical gates | Reconcile each manufacturing process and consolidated gate by complete gross physical mass and relevant elements before burden allocation. Pair molten/wet roving, internal water, recycled glass and other internal movements, cancel on consolidation and preserve vectors. Maintain opening+receipts+actual chemical formation = closing+external exits+actual chemical consumption for each species; separate free water, actual reaction water, structural water, humidity and phase changes. A single residual cannot determine two unknowns; COD/VOC/NOx/total boron indicators are not chemical identities. | jrc-glass-bref-2013 |
| b_first_release | first release and WIP | Q_c is the unique newly first-accepted bare dry-sized roving kg for cohort c at actual declared moisture/size state. Includes that cohort first-released material still in closing FG; do not add closing FG again as production. Wet doffs and unaccepted/rework material stay WIP. Carry opening/closing raw, melt, wet/dry WIP with separate physical quantities and each inherited exchange vector; no earlier burden is lost or counted twice. Reinspection or dispatch never creates Q. | jrc-glass-bref-2013; jushi-direct-roving-312 |
| b_charge | equipment and fluid stocks | Keep each non-WIP bushing, refractory, oil, cooling-fluid or other installed quantity and vintage-specific exchange/service vector separate from product stocks. Use actual remaining/consumed service and real wear, removal, replenishment, leak and repair records. Do not apply a second opening/closing correction to raw records already reporting corrected consumption. | jrc-glass-bref-2013; jrc-ilcd-2010 |
| b_service | post-release physical and burden gates | Keep actual original-cohort packing, warehouse, handling, dispatch, returns and incremental rework in a separate observed service ledger using original Q_c. Bare FG opening+new first release+actual return receipts = closing+gross physical dispatch+scrap+other specifically identified exits, with real moisture/size changes recorded separately. Retain prior production vectors, original-delivery reversal and incremental rework with the original cohort; retest/returned old goods are not new Q. Unknown return history prevents a complete cohort result. Cancel internal first_roving on manufacturing/service consolidation; no closing-FG or gross-shipment double output. Retain all already performed service of held/stored FG against its original first-release Q_c over the actually observed horizon H; only genuinely unused/unassigned future service or charge may carry. No unobserved future work is estimated. Actual unauthorized, unapproved, failed or rejected work and all its material/part/water/energy/emission/loss/waste/treatment burdens remain recorded on the proper original cohort, including Q=0, idle, start-stop, cleanup and tests. Manufacturer/specification permission and postwork tests govern authorization, continued conformity, acceptance/rejection and final disposition only; they never erase work that occurred or imply restoration. Repair-held FG is one labelled FG substate OR disjoint repair-WIP, not both; rework or retest creates no new Q. | jushi-direct-roving-312; jrc-ilcd-2010 |
| b_pack | each packaging article | For each material/configuration separately: opening empty+attached-WIP+attached-FG+reusable stocks +first external procurement P +first standalone non-purchase receipts N_ext +non-purchased supplier-attached physical receipts I +true external return receipts ER + X_in = closing mutually exclusive stocks +accompanying gross shipment out +separate external return out +waste out + X_out. Categories are disjoint. Classify each external whole-article receipt once: ER only for the same item or an auditable configuration-matched batch linked to this site's prior outward record; among first receipts, P is actual procurement, including bundled paid packaging without a separate invoice, N_ext is independently supplied non-purchase borrowing/rental/pool receipt, and I is non-purchased supplier-attached receipt only. P, N_ext, I and ER are mutually exclusive; ownership or custody alone does not prove purchase or return. Existing _new cards record P; _supplied cards retain disjoint N_ext and I event records for the same specified article; _return_in cards record ER. An unknown occurrence or history is unresolved, never zero or a presumed return. N_ext is a whole-article inlet, never X. Retain actual owner/custodian, original cohort, item/batch and prior-outward links, and each complete exchange V/A vector with its provider, original native unit, measurement state, phase, gate, period and history. Gross dispatch, separate returns, losses/waste and real transport services remain explicit; empty, attached-WIP, attached-FG and reusable stock states are mutually exclusive. A whole-article provider including component manufacture supplies that manufacturing burden once; do not add the same component manufacture or bundled supplier burden again. Non-purchase receipts and true returns retain actual inherited history and attributable used service rather than inventing a new procurement or deleting real burden; actual incremental transport, handling and repair services are each recorded once against the proper original cohort/Q_c over H, without a default lifetime, share or recycling credit.  Internal reuse cancels; no net-Q subtraction, repurchase or automatic coproduct. Weigh actual wood moisture and real new/removed repair components separately when present; gross physical movements and upstream burden consumption are separate ledgers. Actual independent material/water changes extend this equation by +X_in on the incoming side and +X_out on the outgoing side. Measure each actual added/removed component and free/absorbed/released water independently, including ordinary storage/handling moisture uptake or evaporation without a repair event. X deduplicates ONLY the same real event already represented in OTHER same-side flow terms, never stocks, opposite-side flows or a merely present card. Real new retained influx and full wet closing mass both remain; unknown occurrence/species is unresolved, not zero. Whole wet P/N_ext/I/ER article receipts include integral wood/fasteners/film and water once. Actual on-site additions are disjoint from the receipt or reconciled through an article/component bridge and paired internal handoff; never add assembled tare and its same components twice. For a real single mixed outlet, independently measured per-material W remain nonadditive raw origin subledgers, sum(origin W)=one measured mixed total; use one qualified actual Waste outlet/treatment owner and report total OR disjoint partition, never both. Only physically separated streams are separate exits. Every actually present missing material/water/repair/mixed-outlet flow requires its own named atomic card and proper protocol/identity review under b_atomic before claiming completion; no occurrence is presumed. | jushi-direct-roving-312; jrc-ilcd-2010 |
| b_utility | utility interfaces | Cooling and spray water, inherited formulation water, actual moisture and genuine reaction water use one consistent control volume. Resolve real condensate or external liquid-water Product returns and actual thermal state/enthalpy under supplier energy/water ownership agreements. Never infer a steam/boiler interface for an electrically heated dryer; genuine alternative heat supply requires its own atomic inputs/returns and renewed route applicability. For physical ledger-only legs, including external_water_return, actual new/removed installed articles/parts/contained fluids, gross atmospheric-carrier throughflows and all FG/package/waste directions, A_j_c is the independently measured full unallocated gross V in that native row unit. Normalize that V once by the same manufacturing Q_c or linked original service Q_c/H; it is not net consumption, burden-stock subtraction, an economic share, old manufacturing burden, an additional purchase or automatic export credit. Retain absolute physical records and each separately owned upstream/performed-service vector independently; where a card represents assigned asset service, label that separate vector and do not charge a whole physical asset again. Actual external water/carrier returns preserve measured mass, phase, temperature, pressure and enthalpy separately from heat MJ under one supplier water/energy owner, even when incoming and returning masses differ. Pair only identical internal transfers; no steam/boiler/circuit or heat alternative is introduced. | jrc-glass-bref-2013 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| melt | Raw batch melting and forehearth conditioning | required | Individual raw inputs and actual air/gas recuperative furnace | foreground | per 1 kg reference flow |
| draw_size | Bushing drawing sizing and direct winding | required | Purchased complete aqueous sizing diluted onsite; no assembled roving or twist | foreground | per 1 kg reference flow |
| dry_release | Electric drying inspection and first quality release | required | Actual electrically heated drying and first qualified dry doffs | foreground | per 1 kg reference flow |
| utilities | Cooling and shared services | required | Actual supply circuit charge treatment and energy interfaces | foreground | per 1 kg reference flow |
| services | Observed post-release packing storage and dispatch | conditional | Actual original-cohort observed services only | foreground | per 1 kg reference flow |

### Process: Raw batch melting and forehearth conditioning (`melt`)

Individual raw inputs and actual air/gas recuperative furnace. [jrc-glass-bref-2013]

#### Inputs

##### Product flows

###### Silica sand for E-glass batch (`silica_sand`)

Whole supplied sand, with mineral form, granulometry, moisture, oxide assay and trace impurities. Silica polymorph names do not establish interchangeable particle structure.

- Selected flow: Silica sand for E-glass batch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Limestone (`limestone`)

Whole supplied limestone for the actual batch; use measured carbonate assay and actual consumption, not oxide mass as another purchase. Generic Product/Mass limestone; no fixed purity, grade, extraction route or provider. Assay carbonate, moisture and impurities separately.

- Selected flow: Limestone `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Uncalcined dolomite for E-glass batch (`dolomite`)

Conditional only when actually charged; retain carbonate and Mg/Ca assays and free moisture. A native soda-lime-batch-specific flow cannot establish E-glass applicability. Whole uncalcined dolomite mineral/rock Product/Mass/kg at plant as glass-batch raw material. Native soda-lime-glass use is an application example, not a calcined or pure-component form; the actual E-glass raw dolomite is independently supported by BREF. No grade/purity/provider/amount is established; assay carbonate, accessory minerals and moisture independently, buy the whole mineral once. No native source quantity or typical soda-lime recipe reused.

- Selected flow: Dolomite `c15705ab-58b1-420f-ac59-3938bf8cda76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Kaolin clay for glass batch (`kaolin`)

Conditional whole purchased clay; separately assay kaolinite and impurities, structural water and free water. A kaolin natural-resource Elementary flow is not a purchased Product.

- Selected flow: Kaolin clay for glass batch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Alumina (`alumina`)

Conditional additional alumina where actually present in the recipe; do not count alumina already contained in clay as another input. Manufactured Product/Mass alumina excluding artificial corundum; no grade, phase, purity, supplier or geography is established.

- Selected flow: Alumina (aluminium oxide), except artificial corundum `2b64b550-00d6-4210-aa50-7c061511518d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Boric acid (`boric_acid`)

Conditional actual boron-bearing batch; keep whole acid and its assay. Boron-free glass must establish absence from real recipe and impurity records, not a default zero. Primary-production Product/Mass orthoboric acid supplied as crystals or powder. No fixed purity or provider; do not substitute borax, metaboric acid or an aqueous formulation.

- Selected flow: Boric acid `5afb91cd-b49f-481a-9364-ad3100c47f2a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Sodium carbonate supplied for glass batch (`sodium_carbonate`)

Conditional whole supplied product; declare hydrate, assay and upstream route. Neither a hydrometallurgical-recycling route nor a fixed95% natural-alkali grade is universal soda ash.

- Selected flow: Sodium carbonate supplied for glass batch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Feldspar mineral for E-glass batch (`feldspar`)

Conditional real mineral flux; identify alkali composition, mineralogy, moisture and supplier form. Whole feldspar mineral batch raw-material Product/Mass/kg at plant. Native glass-batch application and source typical soda-lime quantity-estimation prose do not supply this PCR recipe or a fixed mineral composition. BREF separately identifies feldspar for continuous-fibre batch. Require actual mineralogy/alkali/impurities/grading/moisture/provider; no pure-compound stoichiometry, porcelain product or estimated native quantity imported.

- Selected flow: Feldspar `ec8f6638-6f17-4849-8ee4-fbe743d52e80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Fluorspar for E-glass batch (`fluorspar`)

Conditional actual calcium-fluoride mineral addition; retain purity, carbonate impurities and fluorine balance. No universal fluoride addition is prescribed. Whole mineral fluorite/fluorspar Product/Mass/kg, explicitly total mineral mass with ore grade, purity, grain size, moisture and production route unspecified. This is not pure manufactured CaF2, coarse ore imposed on a prepared batch, or a fluoride-emission identity. Require actual compatible glass-grade mineral supply and assays; no fluorine fraction, CO2/reaction yield or numerical grade is inferred.

- Selected flow: Fluorite `9897ffb9-2682-4202-a505-05a0bf733818`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Compatible E-glass cullet (`external_cullet`)

Conditional external actual cullet with source, glass chemistry and contamination acceptance. Internal drain glass is separately traced; impurity-rich drain glass is not automatically remeltable.

- Selected flow: Compatible E-glass cullet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Melting and forehearth electricity (`melt_power`)

Include batch handling, electric boost if used and actual gas-heated forehearth auxiliaries. Upstream and site transformer losses must not overlap. Native Product is CN grid-average consumption mix to users at 1–35 kV; Net calorific value reference in MJ. This binding applies only at that actual supply interface. Include site transformers/losses once; another country, voltage, production mix or dedicated generation requires separate identity/provider review. kWh converts to MJ by 3.6; no combustion heating value is inferred for electricity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-glass-bref-2013`

###### Pipeline natural gas for melting and forehearths (`melt_gas`)

Air/natural-gas recuperative furnace and gas forehearth route only. Use actual supplied gas mixture mass, independently determined state density and gas assay/LHV; a methane CAS or a case-fixed density cannot define this mixture.

- Selected flow: Pipeline natural gas for melting and forehearths
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-glass-bref-2013`

###### Aluminosilicate refractory brick (`refractory_new`)

Conditional actual cold spare and installed replacement. Keep installed physical stock and historical service vector outside glass WIP; record actual composition and dissolution/removed fractions.

- Selected flow: Aluminosilicate refractory brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_charge`
- Sources: `jrc-glass-bref-2013`

###### Heavy-duty diesel-truck road freight service (`inbound_transport`)

Conditional actual inbound road leg with payload, distance, loading, empty return and geography recorded; link service burden once. Other actual modes require their own specific service cards. Own-operated transport instead needs its individual real fuel/emission cards without double counting the purchased service.

- Selected flow: Heavy-duty diesel-truck road freight service
- Flow property / unit: Mass-distance / t*km
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Sources: `jrc-glass-bref-2013`

##### Elementary flows

###### Ambient air drawn into furnace (`melt_air`)

Measure the whole actual humid air stream and its constituent mass subledger, including infiltration. No assumed dry air composition, oxygen excess or reaction yield; actual N2/O2/Ar and humidity exits remain separate.

- Selected flow: Ambient air drawn into furnace
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

#### Outputs

##### Product flows

###### Molten E-glass for direct drawing (`molten_glass`)

Internal transfer at measured composition, thermal state and mass; pair exactly with melt_to_draw and cancel on consolidation. It is not another saleable Q.

- Selected flow: Molten E-glass for direct drawing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

##### Waste flows

###### Impurity-bearing E-glass drain cullet (`drain_glass`)

Weigh and assay actual channel drain glass, and document external treatment or verified internal remelt. Do not assume recovery: recirculating the separated impurities may worsen bushing breaks.

- Selected flow: Impurity-bearing E-glass drain cullet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-glass-bref-2013`

###### Rejected E-glass mineral batch (`reject_batch`)

Actual spill/reject mixture as one physically collected batch waste; retain its full composition and source ledger. Separate any genuinely separate material or destination.

- Selected flow: Rejected E-glass mineral batch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-glass-bref-2013`

###### Captured E-glass furnace filter dust (`furnace_filter_dust`)

Actual captured particulate stream with measured sulphate/borate/mineral composition, moisture, filter stocks and destination. It is not total boron converted into an invented compound; returned dust requires compatibility and paired physical records.

- Selected flow: Captured E-glass furnace filter dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-glass-bref-2013`

###### Spent aluminosilicate refractory brick (`refractory_removed`)

Conditional actual removal; distinguish original surviving refractory, infiltrated glass and contamination, retaining original installation vector and actual disposal.

- Selected flow: Spent aluminosilicate refractory brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_charge`
- Sources: `jrc-glass-bref-2013`

##### Elementary flows

###### Fuel-derived fossil CO2 (`fuel_co2`)

Source-resolved actual stack CO2 from fuel; keep carbonate CO2 in mineral_co2 and measured incoming CO2 separately. Elementary Mass emission to air unspecified, CAS124-38-9; use only measured source-attributed fossil/geological CO2. Mineral and fuel origins remain distinct rows and must not both claim the same stack measurement; actual compartment refinement requires renewed native identity review.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Mineral-carbonate CO2 (`mineral_co2`)

Geological carbonate decomposition CO2 from actual assayed conversion and retained carbonate, independently checked against stack and carbon ledger; not all recipe carbonate is assumed converted. Elementary Mass emission to air unspecified, CAS124-38-9; use only measured source-attributed fossil/geological CO2. Mineral and fuel origins remain distinct rows and must not both claim the same stack measurement; actual compartment refinement requires renewed native identity review.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Actual NO to air (`melt_no`)

Use actual species-resolved emissions after actual abatement, with sampling phase, gas condition and bypass events. Elementary Mass emission to air unspecified, CAS10102-43-9; actual NO only. NOx expressed as NO2 does not establish NO mass or NO/NO2 shares.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Actual NO2 to air (`melt_no2`)

Use actual NO2; preserve NOx indicator separately from chemical mass. Elementary Mass emission to air unspecified, CAS10102-44-0; actual NO2 only. Preserve speciation; a NOx indicator is not this exchange.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Actual SO2 to air (`melt_so2`)

Use measured SO2 only when actually emitted; sulphate capture remains separate. Elementary Mass emission to air unspecified, CAS7446-09-5; actual SO2 only, not SOx equivalent, sulphate aerosol or sulphur in sludge.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Furnace water vapour (`melt_vapor`)

Resolve inlet humidity, batch free/structural water and actual combustion/dehydration reaction water with independent evidence; never fit both species and water from one closure residual. Elementary Mass water-vapour emission to air unspecified, CAS7732-18-5. Separate inherited humidity, evaporation and actual reaction water; liquid droplets, wastewater and supplied steam are different exchanges.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Hydrogen fluoride gas to air (`melt_hf`)

Conditional actual HF from measured fluorine conversion/impurities, not elemental fluorine or total fluoride indicator; retains actual gas phase and final outlet. This identity is conditional on that actual ordinary molecular species/CAS, phase and measured non-long-term air release, not a total VOC/boron/fluorine/chlorine/nitrogen indicator or a related ion/salt/aqueous Product. Native Elementary/Mass/kg, air unspecified only; a known specific receiving subcompartment requires compatible re-selection. Independently measure actual speciation, gas state and mass; no occurrence, reaction yield, fraction, recipe, source quantity or emission factor is inferred. CAS 7664-39-3.

- Selected flow: hydrogen fluoride `08a91e70-3ddc-11dd-9804-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Hydrogen chloride gas to air (`melt_hcl`)

Conditional actual HCl at the final outlet; chloride ions and HCl equivalents do not establish HCl gas. This identity is conditional on that actual ordinary molecular species/CAS, phase and measured non-long-term air release, not a total VOC/boron/fluorine/chlorine/nitrogen indicator or a related ion/salt/aqueous Product. Native Elementary/Mass/kg, air unspecified only; a known specific receiving subcompartment requires compatible re-selection. Independently measure actual speciation, gas state and mass; no occurrence, reaction yield, fraction, recipe, source quantity or emission factor is inferred. CAS 7647-01-0.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Orthoboric acid vapour to air (`melt_boric_vapor`)

Conditional species-confirmed H3BO3 vapour; total boron expressed as B2O3 cannot establish phase, H3BO3 mass or emission rate. This identity is conditional on that actual ordinary molecular species/CAS, phase and measured non-long-term air release, not a total VOC/boron/fluorine/chlorine/nitrogen indicator or a related ion/salt/aqueous Product. Native Elementary/Mass/kg, air unspecified only; a known specific receiving subcompartment requires compatible re-selection. Independently measure actual speciation, gas state and mass; no occurrence, reaction yield, fraction, recipe, source quantity or emission factor is inferred. CAS 10043-35-3.

- Selected flow: Boric acid `bbe6eb7c-2e18-4f0e-afef-e6e05ffa78a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Metaboric acid vapour to air (`melt_metaboric`)

Conditional separately identified HBO2; use phase-appropriate sampling and actual outlet temperature. Separate each actual borate aerosol or chemical species when present.

- Selected flow: Metaboric acid vapour to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Dinitrogen to air (`melt_n2`)

Actual N2 throughput after independently resolving inlet and conversion; this is a gross physical carrier ledger, not an invented pollution factor. Ordinary gaseous N2 CAS7727-37-9 only, native Elementary/Mass/kg emission to air unspecified, non-long-term. Exact molecular identity, actual phase, gas state and receiving compartment are required; noisy ion/isotope/liquid aliases are not substitutes. Where a known more specific air compartment applies, reselect that compatible occurrence. Preserve this full gross physical outlet and independently measured inlet-component subledger, not net pollutant formation, aggregate air added again, resource flow reversed, industrial gas purchase, air fraction or credit. No actual occurrence/quantity is assumed.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Residual oxygen to air (`melt_o2`)

Actual remaining O2; no default excess oxygen or assumed air composition. Ordinary gaseous O2 CAS7782-44-7 only, native Elementary/Mass/kg emission to air unspecified, non-long-term. Exact molecular identity, actual phase, gas state and receiving compartment are required; noisy ion/isotope/liquid aliases are not substitutes. Where a known more specific air compartment applies, reselect that compatible occurrence. Preserve this full gross physical outlet and independently measured inlet-component subledger, not net pollutant formation, aggregate air added again, resource flow reversed, industrial gas purchase, air fraction or credit. No actual occurrence/quantity is assumed.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Argon to air (`melt_ar`)

Actual Ar carrier mass from measured inlet/outlet evidence; do not assign a guessed air fraction. Ordinary gaseous AR CAS7440-37-1 only, native Elementary/Mass/kg emission to air unspecified, non-long-term. Exact molecular identity, actual phase, gas state and receiving compartment are required; noisy ion/isotope/liquid aliases are not substitutes. Where a known more specific air compartment applies, reselect that compatible occurrence. Preserve this full gross physical outlet and independently measured inlet-component subledger, not net pollutant formation, aggregate air added again, resource flow reversed, industrial gas purchase, air fraction or credit. No actual occurrence/quantity is assumed.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Carbon monoxide to air (`carbon_monoxide`)

Conditional actual species from stack or fugitive measurement, with source and destination distinct; never allocate a total-carbon residual to this species by assumption.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Methane to air (`methane`)

Conditional actual species from stack or fugitive measurement, with source and destination distinct; never allocate a total-carbon residual to this species by assumption.

- Selected flow: Methane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Carbon dioxide of incoming-air origin to air (`melt_inlet_co2`)

Actual incoming-air CO2 returned at this outlet, source-resolved from newly generated fuel/mineral/sizing CO2. Preserve gross physical throughput; do not characterize it as newly created fossil CO2 or invent a removal/credit. Actual chemical uptake or transformation requires independent evidence and its own ledger.

- Selected flow: Carbon dioxide of incoming-air origin to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Airborne E-glass mineral-batch particulate (`batch_air_dust`)

Actual final emitted batch carryover or fugitive mineral particulate with measured composition and particle-size distribution. Captured furnace_filter_dust remains separate; do not turn total PM or total boron into an invented chemical species and do not double count nested particle fractions.

- Selected flow: Airborne E-glass mineral-batch particulate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

### Process: Bushing drawing sizing and direct winding (`draw_size`)

Purchased complete aqueous sizing diluted onsite; no assembled roving or twist. [jrc-glass-bref-2013]

#### Inputs

##### Product flows

###### Molten E-glass for direct drawing (`melt_to_draw`)

Paired internal molten_glass receipt carries its full exchange history and actual temperature/enthalpy.

- Selected flow: Molten E-glass for direct drawing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Bushing drawing and winding electricity (`drawing_power`)

Include resistance-heated Pt-Rh bushing, winding, extraction and local cooling where metered here; utility meters must not duplicate it. Native Product is CN grid-average consumption mix to users at 1–35 kV; Net calorific value reference in MJ. This binding applies only at that actual supply interface. Include site transformers/losses once; another country, voltage, production mix or dedicated generation requires separate identity/provider review. kWh converts to MJ by 3.6; no combustion heating value is inferred for electricity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-glass-bref-2013`

###### Aqueous silane-containing E-glass sizing formulation (`sizing_formulation`)

One actual purchased premixed formulation and supplier lot only, measured as the whole supplied emulsion/solution. Declare composition, film former, coupling species, lubricant, pH modifier, active/solids fraction and carrier water as subledgers, not additional purchases. This route only dilutes a complete bought formulation; actual in-house formulation from separate purchases requires individual atomic ingredient cards and real mixing energy/losses before use.

- Selected flow: Aqueous silane-containing E-glass sizing formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Sizing dilution and filament spray water (`sizing_water`)

Actual separate water added to the purchased formulation or sprayed on fibres. Do not duplicate carrier water inside the whole sizing purchase. Treated public potable-water Product at supply/consumption, Mass reference; no fixed geography. Its secondary volume coefficient is not measured density. Match actual water quality and utility supply; use independently measured water-state density for volume conversion.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-glass-bref-2013`

###### Platinum-rhodium drawing bushing (`bushing_new`)

Conditional actual new/reconditioned supplied bushing of declared alloy and hole configuration. Record delivered unit mass, alloy composition and its service/installed historical vector; never assume metal loss or recovery credit from replacement.

- Selected flow: Platinum-rhodium drawing bushing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_charge`
- Sources: `jrc-glass-bref-2013`

##### Elementary flows

###### Ambient air entering fibre forming (`draw_size_air`)

Actual humid air drawn through this control volume, including moisture and measured N2/O2/Ar subledger. Keep internal recirculation paired and actual vented gas distinct.

- Selected flow: Ambient air entering fibre forming
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

#### Outputs

##### Product flows

###### Wet sized untwisted E-glass direct roving (`wet_roving`)

Actual bushing filaments gathered and directly wound as one end without twisting or combining cakes; measured glass, retained size solids and water subledgers. Pair with wet_to_dry.

- Selected flow: Wet sized untwisted E-glass direct roving
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

##### Waste flows

###### Wet sized E-glass filament waste (`forming_fibre_waste`)

Include actual breakage, winder changes, startups and nonconforming doffs with moisture and size content. Internal remelt requires actual de-sizing/organic combustion consequences and chemistry acceptance; do not call all waste reusable.

- Selected flow: Wet sized E-glass filament waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-glass-bref-2013`

###### Sizing and forming wash wastewater (`sizing_wastewater`)

One actual collected aqueous stream to the named treatment interface; total wet mass, water, glass solids and each dissolved constituent remain in subledgers. COD is an indicator, not a chemical mass. Separate distinct sewer routes; record treatment chemicals and final species if treatment is onsite.

- Selected flow: Sizing and forming wash wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-glass-bref-2013`

###### Spent platinum-rhodium drawing bushing (`bushing_removed`)

Actual removed alloy/article with measured surviving metal, attached glass, contamination and externally sent refurbishment/disposal; separately measured metal losses need their actual species/destination cards.

- Selected flow: Spent platinum-rhodium drawing bushing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_charge`
- Sources: `jrc-glass-bref-2013`

##### Elementary flows

###### E-glass filament dust to air (`forming_fibre_dust`)

Actual glass-fibre particulate at the final forming outlet, with measured fibre dimensions, size distribution and glass composition. No automatic assumption that nominal filament diameter describes all process dust; do not duplicate nested PM size fractions.

- Selected flow: E-glass filament dust to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Dinitrogen to air (`draw_size_n2`)

Actual separately measured carrier constituent at this outlet, resolved from inlet composition and real conversions. It is a gross physical mass ledger; no guessed air composition or pollutant factor. Ordinary gaseous N2 CAS7727-37-9 only, native Elementary/Mass/kg emission to air unspecified, non-long-term. Exact molecular identity, actual phase, gas state and receiving compartment are required; noisy ion/isotope/liquid aliases are not substitutes. Where a known more specific air compartment applies, reselect that compatible occurrence. Preserve this full gross physical outlet and independently measured inlet-component subledger, not net pollutant formation, aggregate air added again, resource flow reversed, industrial gas purchase, air fraction or credit. No actual occurrence/quantity is assumed.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Oxygen to air (`draw_size_o2`)

Actual separately measured carrier constituent at this outlet, resolved from inlet composition and real conversions. It is a gross physical mass ledger; no guessed air composition or pollutant factor. Ordinary gaseous O2 CAS7782-44-7 only, native Elementary/Mass/kg emission to air unspecified, non-long-term. Exact molecular identity, actual phase, gas state and receiving compartment are required; noisy ion/isotope/liquid aliases are not substitutes. Where a known more specific air compartment applies, reselect that compatible occurrence. Preserve this full gross physical outlet and independently measured inlet-component subledger, not net pollutant formation, aggregate air added again, resource flow reversed, industrial gas purchase, air fraction or credit. No actual occurrence/quantity is assumed.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Argon to air (`draw_size_ar`)

Actual separately measured carrier constituent at this outlet, resolved from inlet composition and real conversions. It is a gross physical mass ledger; no guessed air composition or pollutant factor. Ordinary gaseous AR CAS7440-37-1 only, native Elementary/Mass/kg emission to air unspecified, non-long-term. Exact molecular identity, actual phase, gas state and receiving compartment are required; noisy ion/isotope/liquid aliases are not substitutes. Where a known more specific air compartment applies, reselect that compatible occurrence. Preserve this full gross physical outlet and independently measured inlet-component subledger, not net pollutant formation, aggregate air added again, resource flow reversed, industrial gas purchase, air fraction or credit. No actual occurrence/quantity is assumed.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Forming-area water vapour (`forming_vapor`)

Actual forming evaporation and inlet humidity distinguished by independent measurements; reconcile liquid spray and wastewater in the same physical gate. Elementary Mass water-vapour emission to air unspecified, CAS7732-18-5. Separate inherited humidity, evaporation and actual reaction water; liquid droplets, wastewater and supplied steam are different exchanges.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Carbon dioxide of incoming-air origin to air (`draw_size_inlet_co2`)

Actual incoming-air CO2 returned at this outlet, source-resolved from newly generated fuel/mineral/sizing CO2. Preserve gross physical throughput; do not characterize it as newly created fossil CO2 or invent a removal/credit. Actual chemical uptake or transformation requires independent evidence and its own ledger.

- Selected flow: Carbon dioxide of incoming-air origin to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

### Process: Electric drying inspection and first quality release (`dry_release`)

Actual electrically heated drying and first qualified dry doffs. [jrc-glass-bref-2013]

#### Inputs

##### Product flows

###### Wet sized untwisted E-glass direct roving (`wet_to_dry`)

Paired wet_roving transfer including its complete inherited glass, size and water vector. Keep unaccepted wet doffs in WIP.

- Selected flow: Wet sized untwisted E-glass direct roving
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Electric drying oven electricity (`drying_power`)

This route uses electrically heated drying/cure with actual time-temperature and airflow records, including failures, redrying, idle, cleanup and cold starts. Do not add an absent boiler, steam supply or gas dryer. Native Product is CN grid-average consumption mix to users at 1–35 kV; Net calorific value reference in MJ. This binding applies only at that actual supply interface. Include site transformers/losses once; another country, voltage, production mix or dedicated generation requires separate identity/provider review. kWh converts to MJ by 3.6; no combustion heating value is inferred for electricity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-glass-bref-2013`

##### Elementary flows

###### Ambient air entering electric drying (`dry_release_air`)

Actual humid air drawn through this control volume, including moisture and measured N2/O2/Ar subledger. Keep internal recirculation paired and actual vented gas distinct.

- Selected flow: Ambient air entering electric drying
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

#### Outputs

##### Product flows

###### Dry sized untwisted E-glass direct roving (`first_roving`)

Unique newly first-quality-released doffs of declared E-glass composition, linear density, filament diameter, sizing formulation/compatibility, residual moisture and acceptance tests. This is the sole reference output. No twisting, chopping, assembled multi-cake roving, weaving, mat formation, heat-cleaning or composite matrix impregnation. Resin-compatibility language does not make a resin composite. Native Product/Mass Fiber glass is at plant with E-Glass treatment and explicitly describes fine fibres spun from molten glass. Its general comment also uses fiberglass for fibre-reinforced plastic and discusses insulation, sheets, cloth and reinforcement uses; that mixed description is disclosed, not a requirement to add a structural resin matrix. Adopt only the expressly described E-glass-fibre member as this whole dry-sized untwisted directly wound commercial roving, including retained silane-based size and actual declared residual moisture, excluding removable packaging. No native resin fraction, matrix-binding route, exact roving form, sizing recipe, grade, CAS, geography or provider is fixed. Do not substitute pure-glass-only mass, matrix-impregnated GFRP, wet cakes, twisted/assembled yarn, chopped fibre, woven fabric or mat; actual route, formulation, state and supplier fit require independent evidence. Returned material outside this declared state must be separated rather than silently assigned this identity.

- Selected flow: Fiber glass `12515acc-030c-4be2-ad20-fae5c0b35cfb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `jushi-direct-roving-312`

##### Waste flows

###### Dry sized E-glass direct-roving rejects (`dry_reject`)

Weigh real oven/inspection rejects and retained moisture/size; extra drying and failure burden remains in the campaign. A later successful first acceptance is counted once.

- Selected flow: Dry sized E-glass direct-roving rejects
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-glass-bref-2013`

##### Elementary flows

###### Drying water vapour (`dry_vapor`)

Actual moisture removal plus actual chemically generated water, distinguished from incoming air humidity and retained product water. Silane hydrolysis/condensation is not assumed complete; use exact chemistry and independent evidence before assigning reaction water. Elementary Mass water-vapour emission to air unspecified, CAS7732-18-5. Separate inherited humidity, evaporation and actual reaction water; liquid droplets, wastewater and supplied steam are different exchanges.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Ethanol to air (`ethanol_air`)

Conditional actual ethanol from identified formulation/chemistry and measurement; do not infer it from total VOC or from the word silane. This identity is conditional on that actual ordinary molecular species/CAS, phase and measured non-long-term air release, not a total VOC/boron/fluorine/chlorine/nitrogen indicator or a related ion/salt/aqueous Product. Native Elementary/Mass/kg, air unspecified only; a known specific receiving subcompartment requires compatible re-selection. Independently measure actual speciation, gas state and mass; no occurrence, reaction yield, fraction, recipe, source quantity or emission factor is inferred. CAS 64-17-5.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Acetic acid to air (`acetic_air`)

Conditional actual acetic acid measured at the final outlet, with retained/captured acid separately reconciled. This identity is conditional on that actual ordinary molecular species/CAS, phase and measured non-long-term air release, not a total VOC/boron/fluorine/chlorine/nitrogen indicator or a related ion/salt/aqueous Product. Native Elementary/Mass/kg, air unspecified only; a known specific receiving subcompartment requires compatible re-selection. Independently measure actual speciation, gas state and mass; no occurrence, reaction yield, fraction, recipe, source quantity or emission factor is inferred. CAS 64-19-7.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Formaldehyde to air (`formaldehyde_air`)

Conditional actual identified formaldehyde; no sector maximum or resin name establishes its presence or amount. This identity is conditional on that actual ordinary molecular species/CAS, phase and measured non-long-term air release, not a total VOC/boron/fluorine/chlorine/nitrogen indicator or a related ion/salt/aqueous Product. Native Elementary/Mass/kg, air unspecified only; a known specific receiving subcompartment requires compatible re-selection. Independently measure actual speciation, gas state and mass; no occurrence, reaction yield, fraction, recipe, source quantity or emission factor is inferred. CAS 50-00-0.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Ammonia to air (`ammonia_air`)

Conditional actual identified NH3, not nitrogen equivalent or an assumed emission from sizing. This identity is conditional on that actual ordinary molecular species/CAS, phase and measured non-long-term air release, not a total VOC/boron/fluorine/chlorine/nitrogen indicator or a related ion/salt/aqueous Product. Native Elementary/Mass/kg, air unspecified only; a known specific receiving subcompartment requires compatible re-selection. Independently measure actual speciation, gas state and mass; no occurrence, reaction yield, fraction, recipe, source quantity or emission factor is inferred. CAS 7664-41-7.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Dinitrogen to air (`dry_release_n2`)

Actual separately measured carrier constituent at this outlet, resolved from inlet composition and real conversions. It is a gross physical mass ledger; no guessed air composition or pollutant factor. Ordinary gaseous N2 CAS7727-37-9 only, native Elementary/Mass/kg emission to air unspecified, non-long-term. Exact molecular identity, actual phase, gas state and receiving compartment are required; noisy ion/isotope/liquid aliases are not substitutes. Where a known more specific air compartment applies, reselect that compatible occurrence. Preserve this full gross physical outlet and independently measured inlet-component subledger, not net pollutant formation, aggregate air added again, resource flow reversed, industrial gas purchase, air fraction or credit. No actual occurrence/quantity is assumed.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Oxygen to air (`dry_release_o2`)

Actual separately measured carrier constituent at this outlet, resolved from inlet composition and real conversions. It is a gross physical mass ledger; no guessed air composition or pollutant factor. Ordinary gaseous O2 CAS7782-44-7 only, native Elementary/Mass/kg emission to air unspecified, non-long-term. Exact molecular identity, actual phase, gas state and receiving compartment are required; noisy ion/isotope/liquid aliases are not substitutes. Where a known more specific air compartment applies, reselect that compatible occurrence. Preserve this full gross physical outlet and independently measured inlet-component subledger, not net pollutant formation, aggregate air added again, resource flow reversed, industrial gas purchase, air fraction or credit. No actual occurrence/quantity is assumed.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Argon to air (`dry_release_ar`)

Actual separately measured carrier constituent at this outlet, resolved from inlet composition and real conversions. It is a gross physical mass ledger; no guessed air composition or pollutant factor. Ordinary gaseous AR CAS7440-37-1 only, native Elementary/Mass/kg emission to air unspecified, non-long-term. Exact molecular identity, actual phase, gas state and receiving compartment are required; noisy ion/isotope/liquid aliases are not substitutes. Where a known more specific air compartment applies, reselect that compatible occurrence. Preserve this full gross physical outlet and independently measured inlet-component subledger, not net pollutant formation, aggregate air added again, resource flow reversed, industrial gas purchase, air fraction or credit. No actual occurrence/quantity is assumed.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Methanol to air (`methanol_air`)

Conditional actual methanol from identified formulation/hydrolysis chemistry and species-resolved monitoring. Silane does not by itself establish methanol or ethanol. This identity is conditional on that actual ordinary molecular species/CAS, phase and measured non-long-term air release, not a total VOC/boron/fluorine/chlorine/nitrogen indicator or a related ion/salt/aqueous Product. Native Elementary/Mass/kg, air unspecified only; a known specific receiving subcompartment requires compatible re-selection. Independently measure actual speciation, gas state and mass; no occurrence, reaction yield, fraction, recipe, source quantity or emission factor is inferred. CAS 67-56-1.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Carbon dioxide of incoming-air origin to air (`dry_release_inlet_co2`)

Actual incoming-air CO2 returned at this outlet, source-resolved from newly generated fuel/mineral/sizing CO2. Preserve gross physical throughput; do not characterize it as newly created fossil CO2 or invent a removal/credit. Actual chemical uptake or transformation requires independent evidence and its own ledger.

- Selected flow: Carbon dioxide of incoming-air origin to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

### Process: Cooling and shared services (`utilities`)

Actual supply circuit charge treatment and energy interfaces. [jrc-glass-bref-2013]

#### Inputs

##### Product flows

###### Cooling circuit makeup water (`cooling_water`)

Actual fresh makeup only; paired internal recirculation does not repurchase water. Keep opening/closing circuit charge outside WIP with separate history for each exchange. Treated public potable-water Product at supply/consumption, Mass reference; no fixed geography. Its secondary volume coefficient is not measured density. Match actual water quality and utility supply; use independently measured water-state density for volume conversion.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-glass-bref-2013`

###### Cooling extraction and utility electricity (`utility_power`)

Actual pumps, fans, compressors, treatment and site transformer losses not already in operation meters. Assign actual service consumption before normalization. Native Product is CN grid-average consumption mix to users at 1–35 kV; Net calorific value reference in MJ. This binding applies only at that actual supply interface. Include site transformers/losses once; another country, voltage, production mix or dedicated generation requires separate identity/provider review. kWh converts to MJ by 3.6; no combustion heating value is inferred for electricity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-glass-bref-2013`

###### Mineral lubricating oil (`lubricating_oil`)

Conditional actual whole supplied oil of declared grade; independently reconcile cold spare, installed charge, topups and service consumption outside WIP. If measured raw consumption already corrects stock, do not subtract closing charge again.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_charge`
- Sources: `jrc-glass-bref-2013`

##### Elementary flows

###### Ambient air entering cooling tower (`utilities_air`)

Actual humid air drawn through this control volume, including moisture and measured N2/O2/Ar subledger. Keep internal recirculation paired and actual vented gas distinct.

- Selected flow: Ambient air entering cooling tower
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

#### Outputs

##### Product flows

###### Liquid cooling water returned to external supplier (`external_water_return`)

Conditional real Product return under the actual utility agreement; retain flow, temperature, pressure/enthalpy and supplier energy ownership. It is not automatically wastewater, fresh input, steam condensate or an avoided-energy credit. For physical ledger-only legs, including external_water_return, actual new/removed installed articles/parts/contained fluids, gross atmospheric-carrier throughflows and all FG/package/waste directions, A_j_c is the independently measured full unallocated gross V in that native row unit. Normalize that V once by the same manufacturing Q_c or linked original service Q_c/H; it is not net consumption, burden-stock subtraction, an economic share, old manufacturing burden, an additional purchase or automatic export credit. Retain absolute physical records and each separately owned upstream/performed-service vector independently; where a card represents assigned asset service, label that separate vector and do not charge a whole physical asset again. Actual external water/carrier returns preserve measured mass, phase, temperature, pressure and enthalpy separately from heat MJ under one supplier water/energy owner, even when incoming and returning masses differ. Pair only identical internal transfers; no steam/boiler/circuit or heat alternative is introduced. Native Product cooling-water H2O, reference Mass/kg without fixed supply route/geography/enthalpy. Use only the actual compatible liquid cooling-water return under the supplier agreement, not glycol/antifreeze, contaminated wastewater, atmospheric water or a new freshwater purchase. Match actual composition/phase/temperature and gross returned mass independently; preserve one water/energy owner and separate thermal state/MJ.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-glass-bref-2013`

##### Waste flows

###### Cooling-water blowdown (`cooling_blowdown`)

One actual circuit discharge with measured temperature, water and each dissolved constituent; if chemically treated add each actual whole supplied chemical separately before declaring completeness.

- Selected flow: Cooling-water blowdown
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-glass-bref-2013`

###### Spent mineral lubricating oil (`spent_oil`)

Conditional actual removed oil and contamination sent to a named destination; separately identify real leaks by species/media without inventing a routine loss fraction.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_charge`
- Sources: `jrc-glass-bref-2013`

##### Elementary flows

###### Evaporated cooling water (`cooling_vapor`)

Actual evaporated water with the air humidity gate reconciled; liquid drift droplets are a separate actual exchange. No industry evaporation fraction is a default. Elementary Mass water-vapour emission to air unspecified, CAS7732-18-5. Separate inherited humidity, evaporation and actual reaction water; liquid droplets, wastewater and supplied steam are different exchanges.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-glass-bref-2013`

###### Dinitrogen to air (`utilities_n2`)

Actual separately measured carrier constituent at this outlet, resolved from inlet composition and real conversions. It is a gross physical mass ledger; no guessed air composition or pollutant factor. Ordinary gaseous N2 CAS7727-37-9 only, native Elementary/Mass/kg emission to air unspecified, non-long-term. Exact molecular identity, actual phase, gas state and receiving compartment are required; noisy ion/isotope/liquid aliases are not substitutes. Where a known more specific air compartment applies, reselect that compatible occurrence. Preserve this full gross physical outlet and independently measured inlet-component subledger, not net pollutant formation, aggregate air added again, resource flow reversed, industrial gas purchase, air fraction or credit. No actual occurrence/quantity is assumed.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Oxygen to air (`utilities_o2`)

Actual separately measured carrier constituent at this outlet, resolved from inlet composition and real conversions. It is a gross physical mass ledger; no guessed air composition or pollutant factor. Ordinary gaseous O2 CAS7782-44-7 only, native Elementary/Mass/kg emission to air unspecified, non-long-term. Exact molecular identity, actual phase, gas state and receiving compartment are required; noisy ion/isotope/liquid aliases are not substitutes. Where a known more specific air compartment applies, reselect that compatible occurrence. Preserve this full gross physical outlet and independently measured inlet-component subledger, not net pollutant formation, aggregate air added again, resource flow reversed, industrial gas purchase, air fraction or credit. No actual occurrence/quantity is assumed.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Argon to air (`utilities_ar`)

Actual separately measured carrier constituent at this outlet, resolved from inlet composition and real conversions. It is a gross physical mass ledger; no guessed air composition or pollutant factor. Ordinary gaseous AR CAS7440-37-1 only, native Elementary/Mass/kg emission to air unspecified, non-long-term. Exact molecular identity, actual phase, gas state and receiving compartment are required; noisy ion/isotope/liquid aliases are not substitutes. Where a known more specific air compartment applies, reselect that compatible occurrence. Preserve this full gross physical outlet and independently measured inlet-component subledger, not net pollutant formation, aggregate air added again, resource flow reversed, industrial gas purchase, air fraction or credit. No actual occurrence/quantity is assumed.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Carbon dioxide of incoming-air origin to air (`utilities_inlet_co2`)

Actual incoming-air CO2 returned at this outlet, source-resolved from newly generated fuel/mineral/sizing CO2. Preserve gross physical throughput; do not characterize it as newly created fossil CO2 or invent a removal/credit. Actual chemical uptake or transformation requires independent evidence and its own ledger.

- Selected flow: Carbon dioxide of incoming-air origin to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Incoming-air humidity returned as water vapour (`cooling_inlet_humidity`)

Actual incoming humidity leaving this cooling control volume, separate from cooling_vapor evaporation. Resolve actual humidity uptake or condensation without using one residual to infer both water and gas composition. Elementary Mass water-vapour emission to air unspecified, CAS7732-18-5. Separate inherited humidity, evaporation and actual reaction water; liquid droplets, wastewater and supplied steam are different exchanges.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-glass-bref-2013`

###### Liquid cooling-water droplets to air (`cooling_drift`)

Conditional actual liquid drift, independently measured from vapour and carrier humidity. Retain real dissolved treatment chemicals as constituent subledgers and separately identify actual chemical species where required; no default drift rate.

- Selected flow: Liquid cooling-water droplets to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-glass-bref-2013`

### Process: Observed post-release packing storage and dispatch (`services`)

Actual original-cohort observed services only. [jrc-glass-bref-2013]

#### Inputs

##### Product flows

###### First-released E-glass direct roving (`released_receipt`)

Internal receipt of first_roving plus separately identified opening FG and actual returned old goods. Cancel matching manufacturing transfer on consolidation; inherited production vectors remain original-cohort property. Native Product/Mass Fiber glass is at plant with E-Glass treatment and explicitly describes fine fibres spun from molten glass. Its general comment also uses fiberglass for fibre-reinforced plastic and discusses insulation, sheets, cloth and reinforcement uses; that mixed description is disclosed, not a requirement to add a structural resin matrix. Adopt only the expressly described E-glass-fibre member as this whole dry-sized untwisted directly wound commercial roving, including retained silane-based size and actual declared residual moisture, excluding removable packaging. No native resin fraction, matrix-binding route, exact roving form, sizing recipe, grade, CAS, geography or provider is fixed. Do not substitute pure-glass-only mass, matrix-impregnated GFRP, wet cakes, twisted/assembled yarn, chopped fibre, woven fabric or mat; actual route, formulation, state and supplier fit require independent evidence. Returned material outside this declared state must be separated rather than silently assigned this identity.

- Selected flow: Fiber glass `12515acc-030c-4be2-ad20-fae5c0b35cfb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jushi-direct-roving-312`

###### Warehouse packing and handling electricity (`service_power`)

Actual observed original-cohort service interval, including humidity control when actually operated; no unlimited downstream service or current-period allocation of old FG production. Native Product is CN grid-average consumption mix to users at 1–35 kV; Net calorific value reference in MJ. This binding applies only at that actual supply interface. Include site transformers/losses once; another country, voltage, production mix or dedicated generation requires separate identity/provider review. kWh converts to MJ by 3.6; no combustion heating value is inferred for electricity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jushi-direct-roving-312`

###### Corrugated transport carton (`carton_new`)

Actual complete carton, with board, adhesive and printing constituents subaccounted within the whole article. Not cardboard sheet or the native folding box explicitly unsuitable for transport. This card records first external procurement P only, including bundled paid packaging without a separate invoice; new here means first procurement, not necessarily newly manufactured. Exclude N_ext, I and ER under b_pack; retain cp_pack owner/history and complete exchange vectors. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Corrugated transport carton (`carton_supplied`)

Actual complete carton, with board, adhesive and printing constituents subaccounted within the whole article. Not cardboard sheet or the native folding box explicitly unsuitable for transport. This card records first non-purchase whole-article receipts in disjoint event subrecords: standalone borrowing/rental/pool N_ext, or non-purchased supplier-attached I. Exclude paid/bundled-paid procurement P and true returns ER under b_pack. Keep each event once, with its actual provider, owner/custody, physical V and inherited exchange/service history under cp_pack; no invented procurement, extra component manufacture or duplicate included supplier burden. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Corrugated transport carton (`carton_return_in`)

Actual complete carton, with board, adhesive and printing constituents subaccounted within the whole article. Not cardboard sheet or the native folding box explicitly unsuitable for transport. This card records true external return receipt ER only for the same item or auditable configuration-matched batch linked to this site's prior outward record. First borrowing/rental/pool N_ext, first procurement P and non-purchased attached I are excluded; unknown history stays unresolved. Retain original owner/custody, cohort and complete cp_pack exchange/service vectors; no repurchase. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Polyethylene protective film (`film_new`)

Conditional only when real PE film is used; the product-sheet package does not by itself establish film presence. This card records first external procurement P only, including bundled paid packaging without a separate invoice; new here means first procurement, not necessarily newly manufactured. Exclude N_ext, I and ER under b_pack; retain cp_pack owner/history and complete exchange vectors. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Product/Mass polyethylene film, CAS9002-88-4; no fixed thickness, density grade or supplier. Native CPC29220 taxonomy is inconsistent with this packaging role, but polymer identity, form, CAS and property agree. The comment distinguishes PET as a competitor, not this material; never substitute PET, a bag composite or resin pellets.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Polyethylene protective film (`film_supplied`)

Conditional only when real PE film is used; the product-sheet package does not by itself establish film presence. This card records first non-purchase whole-article receipts in disjoint event subrecords: standalone borrowing/rental/pool N_ext, or non-purchased supplier-attached I. Exclude paid/bundled-paid procurement P and true returns ER under b_pack. Keep each event once, with its actual provider, owner/custody, physical V and inherited exchange/service history under cp_pack; no invented procurement, extra component manufacture or duplicate included supplier burden. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Product/Mass polyethylene film, CAS9002-88-4; no fixed thickness, density grade or supplier. Native CPC29220 taxonomy is inconsistent with this packaging role, but polymer identity, form, CAS and property agree. The comment distinguishes PET as a competitor, not this material; never substitute PET, a bag composite or resin pellets.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Polyethylene protective film (`film_return_in`)

Conditional only when real PE film is used; the product-sheet package does not by itself establish film presence. This card records true external return receipt ER only for the same item or auditable configuration-matched batch linked to this site's prior outward record. First borrowing/rental/pool N_ext, first procurement P and non-purchased attached I are excluded; unknown history stays unresolved. Retain original owner/custody, cohort and complete cp_pack exchange/service vectors; no repurchase. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Product/Mass polyethylene film, CAS9002-88-4; no fixed thickness, density grade or supplier. Native CPC29220 taxonomy is inconsistent with this packaging role, but polymer identity, form, CAS and property agree. The comment distinguishes PET as a competitor, not this material; never substitute PET, a bag composite or resin pellets.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Wooden pallet (`pallet_new`)

Conditional actual wooden pallet; the product sheet does not identify pallet material. Independently measure real wood moisture and metal repair parts when present. This card records first external procurement P only, including bundled paid packaging without a separate invoice; new here means first procurement, not necessarily newly manufactured. Exclude N_ext, I and ER under b_pack; retain cp_pack owner/history and complete exchange vectors. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Manufactured wood-platform Product/Mass family, used here for one specified wooden pallet configuration only. Record actual wood moisture, treatment, metal fasteners and repair components; family identity establishes neither tare, reuse count nor supplier compatibility.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Wooden pallet (`pallet_supplied`)

Conditional actual wooden pallet; the product sheet does not identify pallet material. Independently measure real wood moisture and metal repair parts when present. This card records first non-purchase whole-article receipts in disjoint event subrecords: standalone borrowing/rental/pool N_ext, or non-purchased supplier-attached I. Exclude paid/bundled-paid procurement P and true returns ER under b_pack. Keep each event once, with its actual provider, owner/custody, physical V and inherited exchange/service history under cp_pack; no invented procurement, extra component manufacture or duplicate included supplier burden. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Manufactured wood-platform Product/Mass family, used here for one specified wooden pallet configuration only. Record actual wood moisture, treatment, metal fasteners and repair components; family identity establishes neither tare, reuse count nor supplier compatibility.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Wooden pallet (`pallet_return_in`)

Conditional actual wooden pallet; the product sheet does not identify pallet material. Independently measure real wood moisture and metal repair parts when present. This card records true external return receipt ER only for the same item or auditable configuration-matched batch linked to this site's prior outward record. First borrowing/rental/pool N_ext, first procurement P and non-purchased attached I are excluded; unknown history stays unresolved. Retain original owner/custody, cohort and complete cp_pack exchange/service vectors; no repurchase. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Manufactured wood-platform Product/Mass family, used here for one specified wooden pallet configuration only. Record actual wood moisture, treatment, metal fasteners and repair components; family identity establishes neither tare, reuse count nor supplier compatibility.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Paperboard winding tube (`tube_new`)

Conditional only if a real removable paperboard tube is used; a doff centre opening is not evidence of a tube. Coreless winding must explicitly establish absence. This card records first external procurement P only, including bundled paid packaging without a separate invoice; new here means first procurement, not necessarily newly manufactured. Exclude N_ext, I and ER under b_pack; retain cp_pack owner/history and complete exchange vectors. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Whole cylindrical paperboard winding core Product/Mass/kg at plant; native comment explicitly allows yarn/core use, with no fixed dimensions, paper-fibre recipe, count weight, geography or lifetime. Conditional only on an actual such removable paperboard tube; doff drawings do not prove this material is always present. Verify construction, adhesive/finish, moisture, tare and provider. Five Product movements retain the same compatible article identity; damaged/discarded Waste stays a separate identity and origin W ledger.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Paperboard winding tube (`tube_supplied`)

Conditional only if a real removable paperboard tube is used; a doff centre opening is not evidence of a tube. Coreless winding must explicitly establish absence. This card records first non-purchase whole-article receipts in disjoint event subrecords: standalone borrowing/rental/pool N_ext, or non-purchased supplier-attached I. Exclude paid/bundled-paid procurement P and true returns ER under b_pack. Keep each event once, with its actual provider, owner/custody, physical V and inherited exchange/service history under cp_pack; no invented procurement, extra component manufacture or duplicate included supplier burden. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Whole cylindrical paperboard winding core Product/Mass/kg at plant; native comment explicitly allows yarn/core use, with no fixed dimensions, paper-fibre recipe, count weight, geography or lifetime. Conditional only on an actual such removable paperboard tube; doff drawings do not prove this material is always present. Verify construction, adhesive/finish, moisture, tare and provider. Five Product movements retain the same compatible article identity; damaged/discarded Waste stays a separate identity and origin W ledger.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Paperboard winding tube (`tube_return_in`)

Conditional only if a real removable paperboard tube is used; a doff centre opening is not evidence of a tube. Coreless winding must explicitly establish absence. This card records true external return receipt ER only for the same item or auditable configuration-matched batch linked to this site's prior outward record. First borrowing/rental/pool N_ext, first procurement P and non-purchased attached I are excluded; unknown history stays unresolved. Retain original owner/custody, cohort and complete cp_pack exchange/service vectors; no repurchase. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Whole cylindrical paperboard winding core Product/Mass/kg at plant; native comment explicitly allows yarn/core use, with no fixed dimensions, paper-fibre recipe, count weight, geography or lifetime. Conditional only on an actual such removable paperboard tube; doff drawings do not prove this material is always present. Verify construction, adhesive/finish, moisture, tare and provider. Five Product movements retain the same compatible article identity; damaged/discarded Waste stays a separate identity and origin W ledger.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

#### Outputs

##### Product flows

###### Gross dispatched E-glass direct roving (`gross_roving_dispatch`)

Actual gross bare-roving shipment by original release cohort, not a new production output and not net delivery Q. Closing FG already first released is retained in the original Q. Native Product/Mass Fiber glass is at plant with E-Glass treatment and explicitly describes fine fibres spun from molten glass. Its general comment also uses fiberglass for fibre-reinforced plastic and discusses insulation, sheets, cloth and reinforcement uses; that mixed description is disclosed, not a requirement to add a structural resin matrix. Adopt only the expressly described E-glass-fibre member as this whole dry-sized untwisted directly wound commercial roving, including retained silane-based size and actual declared residual moisture, excluding removable packaging. No native resin fraction, matrix-binding route, exact roving form, sizing recipe, grade, CAS, geography or provider is fixed. Do not substitute pure-glass-only mass, matrix-impregnated GFRP, wet cakes, twisted/assembled yarn, chopped fibre, woven fabric or mat; actual route, formulation, state and supplier fit require independent evidence. Returned material outside this declared state must be separated rather than silently assigned this identity.

- Selected flow: Fiber glass `12515acc-030c-4be2-ad20-fae5c0b35cfb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jushi-direct-roving-312`

###### Corrugated transport carton (`carton_gross_out`)

Actual complete carton, with board, adhesive and printing constituents subaccounted within the whole article. Not cardboard sheet or the native folding box explicitly unsuitable for transport. This card is the article accompanying gross physical shipment movement only. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Corrugated transport carton (`carton_return_out`)

Actual complete carton, with board, adhesive and printing constituents subaccounted within the whole article. Not cardboard sheet or the native folding box explicitly unsuitable for transport. This card is the article returned separately to external owner movement only. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Polyethylene protective film (`film_gross_out`)

Conditional only when real PE film is used; the product-sheet package does not by itself establish film presence. This card is the article accompanying gross physical shipment movement only. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Product/Mass polyethylene film, CAS9002-88-4; no fixed thickness, density grade or supplier. Native CPC29220 taxonomy is inconsistent with this packaging role, but polymer identity, form, CAS and property agree. The comment distinguishes PET as a competitor, not this material; never substitute PET, a bag composite or resin pellets.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Polyethylene protective film (`film_return_out`)

Conditional only when real PE film is used; the product-sheet package does not by itself establish film presence. This card is the article returned separately to external owner movement only. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Product/Mass polyethylene film, CAS9002-88-4; no fixed thickness, density grade or supplier. Native CPC29220 taxonomy is inconsistent with this packaging role, but polymer identity, form, CAS and property agree. The comment distinguishes PET as a competitor, not this material; never substitute PET, a bag composite or resin pellets.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Wooden pallet (`pallet_gross_out`)

Conditional actual wooden pallet; the product sheet does not identify pallet material. Independently measure real wood moisture and metal repair parts when present. This card is the article accompanying gross physical shipment movement only. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Manufactured wood-platform Product/Mass family, used here for one specified wooden pallet configuration only. Record actual wood moisture, treatment, metal fasteners and repair components; family identity establishes neither tare, reuse count nor supplier compatibility.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Wooden pallet (`pallet_return_out`)

Conditional actual wooden pallet; the product sheet does not identify pallet material. Independently measure real wood moisture and metal repair parts when present. This card is the article returned separately to external owner movement only. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Manufactured wood-platform Product/Mass family, used here for one specified wooden pallet configuration only. Record actual wood moisture, treatment, metal fasteners and repair components; family identity establishes neither tare, reuse count nor supplier compatibility.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Paperboard winding tube (`tube_gross_out`)

Conditional only if a real removable paperboard tube is used; a doff centre opening is not evidence of a tube. Coreless winding must explicitly establish absence. This card is the article accompanying gross physical shipment movement only. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Whole cylindrical paperboard winding core Product/Mass/kg at plant; native comment explicitly allows yarn/core use, with no fixed dimensions, paper-fibre recipe, count weight, geography or lifetime. Conditional only on an actual such removable paperboard tube; doff drawings do not prove this material is always present. Verify construction, adhesive/finish, moisture, tare and provider. Five Product movements retain the same compatible article identity; damaged/discarded Waste stays a separate identity and origin W ledger.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Paperboard winding tube (`tube_return_out`)

Conditional only if a real removable paperboard tube is used; a doff centre opening is not evidence of a tube. Coreless winding must explicitly establish absence. This card is the article returned separately to external owner movement only. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Whole cylindrical paperboard winding core Product/Mass/kg at plant; native comment explicitly allows yarn/core use, with no fixed dimensions, paper-fibre recipe, count weight, geography or lifetime. Conditional only on an actual such removable paperboard tube; doff drawings do not prove this material is always present. Verify construction, adhesive/finish, moisture, tare and provider. Five Product movements retain the same compatible article identity; damaged/discarded Waste stays a separate identity and origin W ledger.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

##### Waste flows

###### Post-release sized E-glass roving scrap (`fg_roving_scrap`)

Actual handling damage or returned-goods scrap with original production history, delivery reversal and incremental service/rework records; never shift old goods burdens to unrelated new Q.

- Selected flow: Post-release sized E-glass roving scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jushi-direct-roving-312`

###### Waste Corrugated transport carton (`carton_waste`)

Actual complete carton, with board, adhesive and printing constituents subaccounted within the whole article. Not cardboard sheet or the native folding box explicitly unsuitable for transport. This card is the discarded article movement only. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Actual independent material/water changes extend this equation by +X_in on the incoming side and +X_out on the outgoing side. Measure each actual added/removed component and free/absorbed/released water independently, including ordinary storage/handling moisture uptake or evaporation without a repair event. X deduplicates ONLY the same real event already represented in OTHER same-side flow terms, never stocks, opposite-side flows or a merely present card. Real new retained influx and full wet closing mass both remain; unknown occurrence/species is unresolved, not zero. Whole wet P/N_ext/I/ER article receipts include integral wood/fasteners/film and water once. Actual on-site additions are disjoint from the receipt or reconciled through an article/component bridge and paired internal handoff; never add assembled tare and its same components twice. For a real single mixed outlet, independently measured per-material W remain nonadditive raw origin subledgers, sum(origin W)=one measured mixed total; use one qualified actual Waste outlet/treatment owner and report total OR disjoint partition, never both. Only physically separated streams are separate exits. Every actually present missing material/water/repair/mixed-outlet flow requires its own named atomic card and proper protocol/identity review under b_atomic before claiming completion; no occurrence is presumed.

- Selected flow: Waste Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Waste Polyethylene protective film (`film_waste`)

Conditional only when real PE film is used; the product-sheet package does not by itself establish film presence. This card is the discarded article movement only. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Actual independent material/water changes extend this equation by +X_in on the incoming side and +X_out on the outgoing side. Measure each actual added/removed component and free/absorbed/released water independently, including ordinary storage/handling moisture uptake or evaporation without a repair event. X deduplicates ONLY the same real event already represented in OTHER same-side flow terms, never stocks, opposite-side flows or a merely present card. Real new retained influx and full wet closing mass both remain; unknown occurrence/species is unresolved, not zero. Whole wet P/N_ext/I/ER article receipts include integral wood/fasteners/film and water once. Actual on-site additions are disjoint from the receipt or reconciled through an article/component bridge and paired internal handoff; never add assembled tare and its same components twice. For a real single mixed outlet, independently measured per-material W remain nonadditive raw origin subledgers, sum(origin W)=one measured mixed total; use one qualified actual Waste outlet/treatment owner and report total OR disjoint partition, never both. Only physically separated streams are separate exits. Every actually present missing material/water/repair/mixed-outlet flow requires its own named atomic card and proper protocol/identity review under b_atomic before claiming completion; no occurrence is presumed.

- Selected flow: Waste Polyethylene protective film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Waste Wooden pallet (`pallet_waste`)

Conditional actual wooden pallet; the product sheet does not identify pallet material. Independently measure real wood moisture and metal repair parts when present. This card is the discarded article movement only. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Actual independent material/water changes extend this equation by +X_in on the incoming side and +X_out on the outgoing side. Measure each actual added/removed component and free/absorbed/released water independently, including ordinary storage/handling moisture uptake or evaporation without a repair event. X deduplicates ONLY the same real event already represented in OTHER same-side flow terms, never stocks, opposite-side flows or a merely present card. Real new retained influx and full wet closing mass both remain; unknown occurrence/species is unresolved, not zero. Whole wet P/N_ext/I/ER article receipts include integral wood/fasteners/film and water once. Actual on-site additions are disjoint from the receipt or reconciled through an article/component bridge and paired internal handoff; never add assembled tare and its same components twice. For a real single mixed outlet, independently measured per-material W remain nonadditive raw origin subledgers, sum(origin W)=one measured mixed total; use one qualified actual Waste outlet/treatment owner and report total OR disjoint partition, never both. Only physically separated streams are separate exits. Every actually present missing material/water/repair/mixed-outlet flow requires its own named atomic card and proper protocol/identity review under b_atomic before claiming completion; no occurrence is presumed.

- Selected flow: Waste Wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

###### Waste Paperboard winding tube (`tube_waste`)

Conditional only if a real removable paperboard tube is used; a doff centre opening is not evidence of a tube. Coreless winding must explicitly establish absence. This card is the discarded article movement only. Keep whole article physical mass and original-cohort burden-consumption vector separate; reusable receipts do not repurchase upstream production. Observe each direction or prove actual absence, without replacing gross movement by allocated net consumption. Actual independent material/water changes extend this equation by +X_in on the incoming side and +X_out on the outgoing side. Measure each actual added/removed component and free/absorbed/released water independently, including ordinary storage/handling moisture uptake or evaporation without a repair event. X deduplicates ONLY the same real event already represented in OTHER same-side flow terms, never stocks, opposite-side flows or a merely present card. Real new retained influx and full wet closing mass both remain; unknown occurrence/species is unresolved, not zero. Whole wet P/N_ext/I/ER article receipts include integral wood/fasteners/film and water once. Actual on-site additions are disjoint from the receipt or reconciled through an article/component bridge and paired internal handoff; never add assembled tare and its same components twice. For a real single mixed outlet, independently measured per-material W remain nonadditive raw origin subledgers, sum(origin W)=one measured mixed total; use one qualified actual Waste outlet/treatment owner and report total OR disjoint partition, never both. Only physically separated streams are separate exits. Every actually present missing material/water/repair/mixed-outlet flow requires its own named atomic card and proper protocol/identity review under b_atomic before claiming completion; no occurrence is presumed.

- Selected flow: Waste Paperboard winding tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Read the sole stored section8 normalized result for this exchange; raw collection does not divide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jushi-direct-roving-312`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_subdivision | applicable attributional multifunctionality | For a study where allocation is required and appropriate, first avoid it by independently metered dedicated operations and feasible physical or virtual subdivision. Separate raw/glass embodiment, bushing service, drying and warehouse cohort services. Assess study goal and applicable multifunctionality approach; this attributional package claims no consequential substitution or automatic recovery credits. | jrc-ilcd-2010 |
| a_causality | each remaining exchange | For each still-shared exchange determine the physical relationship that actually determines changes in that exchange with each output/function. Document evidence and exclusions individually: throughput alone need not determine drying moisture load, furnace holding or bushing service. A universal mass key or arbitrary physical/economic choice is prohibited; quantity closure is independent of burden shares. | jrc-ilcd-2010 |
| a_residual | genuine unresolved common-process remainder | Only the genuine residual after subdivision and exchange-specific determining physical causality uses contemporaneous real market value at the same common-process gate and actual state. Remove downstream conditioning/packing/transport value where needed to derive that gate value. Document actual traded quantities and price period, sensitivity and uncertainty; absent price/history is unresolved. No fixed shares, list-price substitution, discarded-waste value invention or blanket credit. | jrc-ilcd-2010 |
| a_recycle | rework cullet and recoveries | Keep actual internal cullet, fibre remelt, size residues, reusable packaging and precious-metal returns physically traced. Internal transfers are paired/cancelled; include real additional treatment and losses. Outgoing waste remains waste with actual treatment ownership unless a real separate function/product is evidenced and the applicable allocation/recycling method is justified. No avoided virgin glass, fuel or metal credit follows merely from sale or collection. | jrc-ilcd-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols collect undivided original records only. aggregation_rule declares the final target basis and performs no collection-stage division. Every card and aggregation reads the same stored normalize_once result. Each historical exchange vector preserves original unit, cohort and ownership.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | dry_release | first quality release | calibrated net weighing and acceptance | cohort; doff identity; composition; filament diameter; linear density and unit method; size lot and solids; residual moisture; tare; accepted bare net mass; unique first-release timestamp; failed and retested flags; opening closing WIP/FG; quality tests | Weigh accepted doffs on calibrated scales and subtract measured removable tare; cross-check test methods and unique first release. Q_c is sum of newly first-accepted bare mass; no second acceptance from retest or dispatch. | kg | every doff and first acceptance | whole actual campaign including failure and zero output | same declared glass formulation doff configuration and site | per 1 kg reference flow | calibration; acceptance/retest ledger; raw tare; moisture/size tests |
| cp_material | all | whole supplied material and internal glass | purchase receipt withdrawal and analysis | cohort; one physical material; supplier lot; supplied mass and state; assay; carrier water; route/grade; receipts withdrawals returns; opening closing raw/melt/wet/dryWIP; internal transfer partner; per-exchange inherited vector | Weigh each supplied material/transfer independently; preserve whole-product procurement separately from consumption and constituent subledgers. Reconcile disjoint stocks and transfer pairs; select actual recipe not sector averages. | kg | each receipt batch withdrawal transfer and stock closure | whole campaign plus inherited stock history | actual supplier and all raw-to-roving material gates | per 1 kg reference flow | weigh tickets; assays; recipe; stock and transfer history |
| cp_energy | all | one actual electricity or fuel supply | meter and operational records | cohort; supply interface; voltage country mix; original meter unit; readings; timestamps; true rate vs integrated quantity; gas assay; independently measured density temperature pressure humidity; LHV; transformer ownership; standby startup cleanup rework; service driver | Read meters before any normalization; convert kWh to MJ by3.6 or actual fuel mass/state with independently evidenced density and heating value. Record shared service drivers and assign real loads before the single normalization. | MJ; kg; kWh; measured gas volume | meter interval and abnormal event | same actual campaign and separately observed original-cohort services | actual utility supplier interface and complete operation meters | per 1 kg reference flow | calibration; meter hierarchy; PVT/assay; allocation evidence; operating logs |
| cp_water | all | water supply evaporation and actual external returns | water meters stock and state measurements | cohort; water identity; supply source quality; whole formulation water separately; original mass/volume; independently measured density; opening closing circuit charge; humidity; spray; evaporation; drift; purge; external return; temperature pressure enthalpy; supplier energy ownership; inherited exchange vector | Meter fresh water and each real exit with matching control volume. Pair internal circulation; distinguish evaporation humidity reaction water and liquid drift. Independently measure each substance/state density; respect utility water/energy ownership. For physical ledger-only legs, including external_water_return, actual new/removed installed articles/parts/contained fluids, gross atmospheric-carrier throughflows and all FG/package/waste directions, A_j_c is the independently measured full unallocated gross V in that native row unit. Normalize that V once by the same manufacturing Q_c or linked original service Q_c/H; it is not net consumption, burden-stock subtraction, an economic share, old manufacturing burden, an additional purchase or automatic export credit. Retain absolute physical records and each separately owned upstream/performed-service vector independently; where a card represents assigned asset service, label that separate vector and do not charge a whole physical asset again. Actual external water/carrier returns preserve measured mass, phase, temperature, pressure and enthalpy separately from heat MJ under one supplier water/energy owner, even when incoming and returning masses differ. Pair only identical internal transfers; no steam/boiler/circuit or heat alternative is introduced. | kg; m3; measured thermal state | each meter interval makeup drain return and closure | whole manufacturing and real service period | all actual water and cooling interfaces | per 1 kg reference flow | meters; assays; independent density; humidity; enthalpy and supplier agreements |
| cp_species | all | one real species and one destination | speciation monitoring and independent balances | cohort; source operation; species CAS and phase; final compartment; wet/dry and oxygen basis; integrated volume or actual rate/time; temperature pressure humidity; density; concentration; inlet carriers; formation consumption; retained product; capture and bypass; COD VOC NOx total B indicators separately; uncertainty | Use species-appropriate sampling and actual conversion chemistry with independent mass/element evidence. Integrate true rates only; an integrated liquid/gas volume is not multiplied by time. Preserve gross air/water/chemical ledgers before allocation. One residual cannot solve two unknowns; unmeasured species remains unresolved. | kg; actual concentration and gas/liquid-state units | monitoring interval and every release/bypass event | full campaign including failed batches zero-output and cleanup | all actual inlet vent solid capture and water outlets | per 1 kg reference flow | laboratory methods; raw gas records; independent element assays; uncertainty |
| cp_waste | all | each actual waste stream or internal recovery | weighing analysis transfer destination | cohort; origin; single stream identity; moisture; chemical constituents; gross mass; internal partner or external destination; treatment owner; stocks; retained burden vector | Weigh each real stream and retain wet mass and constituent subaccounts; pair internal movement and document verified recovery compatibility. Keep distinct streams/destinations separate and actual treatment ownership. Actual independent material/water changes extend this equation by +X_in on the incoming side and +X_out on the outgoing side. Measure each actual added/removed component and free/absorbed/released water independently, including ordinary storage/handling moisture uptake or evaporation without a repair event. X deduplicates ONLY the same real event already represented in OTHER same-side flow terms, never stocks, opposite-side flows or a merely present card. Real new retained influx and full wet closing mass both remain; unknown occurrence/species is unresolved, not zero. Whole wet P/N_ext/I/ER article receipts include integral wood/fasteners/film and water once. Actual on-site additions are disjoint from the receipt or reconciled through an article/component bridge and paired internal handoff; never add assembled tare and its same components twice. For a real single mixed outlet, independently measured per-material W remain nonadditive raw origin subledgers, sum(origin W)=one measured mixed total; use one qualified actual Waste outlet/treatment owner and report total OR disjoint partition, never both. Only physically separated streams are separate exits. Every actually present missing material/water/repair/mixed-outlet flow requires its own named atomic card and proper protocol/identity review under b_atomic before claiming completion; no occurrence is presumed. | kg | each generation transfer and closure | all normal and abnormal manufacturing operations | all actual solid liquid and internal waste gates | per 1 kg reference flow | weighing; lab methods; handover; treatment and stock evidence |
| cp_charge | all | one non-WIP installed article or fluid | installation service maintenance and removal | article/fluid identity; alloy/grade; received cold spare; opening closing installed quantity; installation vintage; measured service; remaining service; topup wear dissolution leakage; removed recovered mass; each historical exchange vector | Measure installed quantities separately from WIP; preserve vintage-specific inherited vectors and actual remaining/consumed service. Keep all physical new/removed material even if burden allocation differs; avoid duplicate correction of raw net consumption. For physical ledger-only legs, including external_water_return, actual new/removed installed articles/parts/contained fluids, gross atmospheric-carrier throughflows and all FG/package/waste directions, A_j_c is the independently measured full unallocated gross V in that native row unit. Normalize that V once by the same manufacturing Q_c or linked original service Q_c/H; it is not net consumption, burden-stock subtraction, an economic share, old manufacturing burden, an additional purchase or automatic export credit. Retain absolute physical records and each separately owned upstream/performed-service vector independently; where a card represents assigned asset service, label that separate vector and do not charge a whole physical asset again. Actual external water/carrier returns preserve measured mass, phase, temperature, pressure and enthalpy separately from heat MJ under one supplier water/energy owner, even when incoming and returning masses differ. Pair only identical internal transfers; no steam/boiler/circuit or heat alternative is introduced. | kg; actual service unit | each receipt installation repair removal and stock closure | whole actual service history assigned to cohort | all actual non-WIP equipment/circuit/fluid stocks | per 1 kg reference flow | weighing; maintenance; service history; physical and vector reconciliation |
| cp_service | services | released FG dispatch returns and incremental rework | cohort-linked physical movements and service logs | original cohort and Q; release id; opening closing FG; gross shipment; return receipt; original delivery reversal; actual moisture/size change; prior production vector; incremental rework; damage scrap; observed service interval | Reconcile gross FG physically independently of Q; all original production history and dispatch reversals remain with the original cohort. Preserve actual extra rework and services; do not create output from shipment or retesting. Retain all already performed service of held/stored FG against its original first-release Q_c over the actually observed horizon H; only genuinely unused/unassigned future service or charge may carry. No unobserved future work is estimated. Actual unauthorized, unapproved, failed or rejected work and all its material/part/water/energy/emission/loss/waste/treatment burdens remain recorded on the proper original cohort, including Q=0, idle, start-stop, cleanup and tests. Manufacturer/specification permission and postwork tests govern authorization, continued conformity, acceptance/rejection and final disposition only; they never erase work that occurred or imply restoration. Repair-held FG is one labelled FG substate OR disjoint repair-WIP, not both; rework or retest creates no new Q. | kg; actual service unit | every service movement and closure | declared observed interval by original release cohort | warehouse packing dispatch and return gates | per 1 kg reference flow | unique release shipment return ids; history vectors; rework records |
| cp_pack | services | each whole packaging article each direction | purchase tare movement return repair and stock | one material/configuration; new purchases; supplier-included receipt; external returns received; opening closing empty attachedWIP attachedFG reusable stocks; gross accompanying dispatch; separate return out; waste; tare count; real wood moisture; new/removed repair components; original burden/service vector; X_in/X_out; each actual added/removed component/water phase and ordinary humidity event; OTHER same-side overlap evidence; full wet stocks; whole wet article/component bridge; independently measured origin W and one mixed total; total-or-partition flag; unique treatment owner; P/N_ext/I/ER event class; bundled-paid evidence; actual owner/custodian; item or auditable batch configuration; prior-outward link; original cohort Q_c and H; each exchange V/A; provider; original native unit; measurement state and phase; gate; period; full history; whole-provider component-manufacture scope; actual incremental transport handling repair service owner | Classify each external whole-article receipt once: ER only for the same item or an auditable configuration-matched batch linked to this site's prior outward record; among first receipts, P is actual procurement, including bundled paid packaging without a separate invoice, N_ext is independently supplied non-purchase borrowing/rental/pool receipt, and I is non-purchased supplier-attached receipt only. P, N_ext, I and ER are mutually exclusive; ownership or custody alone does not prove purchase or return. Existing _new cards record P; _supplied cards retain disjoint N_ext and I event records for the same specified article; _return_in cards record ER. An unknown occurrence or history is unresolved, never zero or a presumed return. N_ext is a whole-article inlet, never X. Retain actual owner/custodian, original cohort, item/batch and prior-outward links, and each complete exchange V/A vector with its provider, original native unit, measurement state, phase, gate, period and history. Gross dispatch, separate returns, losses/waste and real transport services remain explicit; empty, attached-WIP, attached-FG and reusable stock states are mutually exclusive. A whole-article provider including component manufacture supplies that manufacturing burden once; do not add the same component manufacture or bundled supplier burden again. Non-purchase receipts and true returns retain actual inherited history and attributable used service rather than inventing a new procurement or deleting real burden; actual incremental transport, handling and repair services are each recorded once against the proper original cohort/Q_c over H, without a default lifetime, share or recycling credit. Weigh one complete article per configuration; convert count only with measured actual configuration tare. Reconcile b_pack separately by material and destination; internal reuse cancels. Physical gross movement is retained independently of burden consumption and upstream history. Actual independent material/water changes extend this equation by +X_in on the incoming side and +X_out on the outgoing side. Measure each actual added/removed component and free/absorbed/released water independently, including ordinary storage/handling moisture uptake or evaporation without a repair event. X deduplicates ONLY the same real event already represented in OTHER same-side flow terms, never stocks, opposite-side flows or a merely present card. Real new retained influx and full wet closing mass both remain; unknown occurrence/species is unresolved, not zero. Whole wet P/N_ext/I/ER article receipts include integral wood/fasteners/film and water once. Actual on-site additions are disjoint from the receipt or reconciled through an article/component bridge and paired internal handoff; never add assembled tare and its same components twice. For a real single mixed outlet, independently measured per-material W remain nonadditive raw origin subledgers, sum(origin W)=one measured mixed total; use one qualified actual Waste outlet/treatment owner and report total OR disjoint partition, never both. Only physically separated streams are separate exits. Every actually present missing material/water/repair/mixed-outlet flow requires its own named atomic card and proper protocol/identity review under b_atomic before claiming completion; no occurrence is presumed. | kg; count | every receipt use gross dispatch return repair and stocktake | same observed original-cohort service interval | all disjoint empty attached and reusable packaging states | per 1 kg reference flow | tare calibration; purchase and included-supply records; return repair waste and moisture evidence |
| cp_transport | melt | one real inbound freight leg | consignment payload distance and route | material lot; mode; vehicle/fuel; actual payload; loaded distance; empty return; origin destination; period; provider boundary | Use actual consignment activity; state whether purchased service includes fuel and empty return. Own-operated legs require separate real fuel/emission records without duplication. | t*km | each consignment | same receipts and campaign | actual inbound road leg only | per 1 kg reference flow | consignment notes; distance route and provider scope |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_once | all inventory rows | For Q_c>0, result_j_c=A_j_c/Q_c exactly once. First convert original raw numerator units and actual states or integrate genuine rates; then form A_j_c through evidenced subdivision and exchange-specific allocation, carrying opening minus closing vectors for disjoint raw/WIP/non-WIP installed stocks, without correcting already net-consumption records twice. Manufacturing-material A is attributable whole-supply withdrawal/consumption with its inherited upstream vector; raw purchase receipts remain recorded without consuming all unused procurement into Q. Internal transfers, waste and packaging P/N_ext/I/ER/gross-dispatch/external-return movement cards use actual physical movement as A; burden consumption separately follows actual cohort and remaining service, so returned articles do not repurchase original upstream production. Post-release service A contains only actual incremental original-cohort service and its own opening/closing service/charge vectors; do not add original manufacturing burden again. Q is original first-release kg. Cards and aggregation read this one stored result. At Q_c=0 retain every real load and issue no unit result. For physical ledger-only legs, including external_water_return, actual new/removed installed articles/parts/contained fluids, gross atmospheric-carrier throughflows and all FG/package/waste directions, A_j_c is the independently measured full unallocated gross V in that native row unit. Normalize that V once by the same manufacturing Q_c or linked original service Q_c/H; it is not net consumption, burden-stock subtraction, an economic share, old manufacturing burden, an additional purchase or automatic export credit. Retain absolute physical records and each separately owned upstream/performed-service vector independently; where a card represents assigned asset service, label that separate vector and do not charge a whole physical asset again. Actual external water/carrier returns preserve measured mass, phase, temperature, pressure and enthalpy separately from heat MJ under one supplier water/energy owner, even when incoming and returning masses differ. Pair only identical internal transfers; no steam/boiler/circuit or heat alternative is introduced. Retain all already performed service of held/stored FG against its original first-release Q_c over the actually observed horizon H; only genuinely unused/unassigned future service or charge may carry. No unobserved future work is estimated. Actual unauthorized, unapproved, failed or rejected work and all its material/part/water/energy/emission/loss/waste/treatment burdens remain recorded on the proper original cohort, including Q=0, idle, start-stop, cleanup and tests. Manufacturer/specification permission and postwork tests govern authorization, continued conformity, acceptance/rejection and final disposition only; they never erase work that occurred or imply restoration. Repair-held FG is one labelled FG substate OR disjoint repair-WIP, not both; rework or retest creates no new Q. Classify each external whole-article receipt once: ER only for the same item or an auditable configuration-matched batch linked to this site's prior outward record; among first receipts, P is actual procurement, including bundled paid packaging without a separate invoice, N_ext is independently supplied non-purchase borrowing/rental/pool receipt, and I is non-purchased supplier-attached receipt only. P, N_ext, I and ER are mutually exclusive; ownership or custody alone does not prove purchase or return. Existing _new cards record P; _supplied cards retain disjoint N_ext and I event records for the same specified article; _return_in cards record ER. An unknown occurrence or history is unresolved, never zero or a presumed return. N_ext is a whole-article inlet, never X. Retain actual owner/custodian, original cohort, item/batch and prior-outward links, and each complete exchange V/A vector with its provider, original native unit, measurement state, phase, gate, period and history. Gross dispatch, separate returns, losses/waste and real transport services remain explicit; empty, attached-WIP, attached-FG and reusable stock states are mutually exclusive. A whole-article provider including component manufacture supplies that manufacturing burden once; do not add the same component manufacture or bundled supplier burden again. Non-purchase receipts and true returns retain actual inherited history and attributable used service rather than inventing a new procurement or deleting real burden; actual incremental transport, handling and repair services are each recorded once against the proper original cohort/Q_c over H, without a default lifetime, share or recycling credit. | A_j_c; Q_c; original_cohort; measurement_state; vector_history | result_j_c | jrc-glass-bref-2013; jushi-direct-roving-312; jrc-ilcd-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Native physical chemistry/route/form/grade/geography/media/type and every property must match actual use; preserve restrictions and uncertainty. | complete native identity and supplier applicability; full context |
| dq_vectors | all stocks and cohorts | Retain physical quantities and every inherited exchange vector by original unit/vintage/cohort; no old FG or installed-charge burden shifted to new production. | raw stock/maintenance/release history |
| dq_context | all measurements | Retain calibration, representative coverage, failure/idle/startup/rework and Q=0; do not borrow historical sector numbers or resin-dependent performance. | raw records; chemistry; uncertainty; complete primary context |
| dq_coverage | whole package | List each omitted/unmeasured exchange and reason; missing core identity/history/chemistry prevents a complete result, while unresolved auxiliary UUID/provider requires actual selection and evidence before use. | explicit completeness statement with unresolved scope |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | applicability | Confirm direct melt and one directly wound untwisted dry-sized E-glass doff specification; prove each native UUID restriction and provider match. Missing or conflicting product identity is unresolved, never cured by CPC label. | jushi-direct-roving-312; jrc-glass-bref-2013 |
| v_basis | all numerator and reference records | Q is first quality release; raw collection is undivided. Convert units/state and allocate first, then normalize_once exactly once. All cards/aggregation read that stored result. Preserve every real Q=0 load and issue no unit result. | jrc-glass-bref-2013; jrc-ilcd-2010 |
| v_closure | each process and combined gate | Check gross mass, relevant elements, species, moisture and stocks independently of allocation; internal transfer pairs cancel. Unknown air/water/species, two-unknown residual fits, unmeasured density or lost historical vectors prevent completeness. | jrc-glass-bref-2013 |
| v_pack | FG and packaging | Check b_service and b_pack at each material/configuration and original cohort, including all gross external directions and mutually exclusive stocks. Do not count closing FG twice or treat returned goods/retest as new production. | jushi-direct-roving-312; jrc-ilcd-2010 |
| v_evidence | all reported quantities | Retain original records, complete applicable primary context, exact chemistry, native identity restrictions and uncertainty. A source maximum, resin-dependent mechanical result or tool success is no factory observation or approval. Missing supplier/auxiliary data requires collection; real core holds remain explicit. | jrc-glass-bref-2013; jushi-direct-roving-312; jrc-ilcd-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified raw-to-direct-roving manufacturing inventory for declared compatible receiving processes |
| allowed_use | One declared chemistry direct-roving form supply state and observed service boundary after real applicability and evidence checks |
| excluded_use | Exclude slivers, assembled multi-cake roving, twisted yarn, chopped strands, milled fibres, glass wool, optical fibre, woven glass fabric, mat/web/board, matrix-impregnated composite, non-E-glass chemistry, marble remelting, all-electric melting, oxygen-boost/oxy-fuel melting and gas/steam drying. A changed route requires renewed applicability rather than omission of actual exchanges. |
| required_metadata | E-glass chemical composition and boron/fluorine state; actual individual mineral recipe and cullet compatibility; direct-melt air/gas recuperative route and boost state; single-end directly wound untwisted form; filament diameter and linear density method/unit; whole supplied sizing identity and formulation lot; resin compatibility and finish state; drying time-temperature and actual residual moisture; product acceptance methods and tolerances; bare product mass excluding removable packaging; first-release cohort and unique Q record; opening and closing raw/WIP/FG and installed-charge history; plant geography and period; actual utility voltage supply mix water quality and agreements; actual packaging configuration and all gross movements; observed original-cohort service interval and return/rework history |
| required_quality_disclosure | First-release denominator; supplier/native restrictions; gross physical and inherited-vector closure; failures; species/chemistry; allocation; ordinary gaps; unresolved scope |
| update_trigger | Changed glass chemistry; recipe; bushing/direct form; sizing; drying heat route; utility supply; packaging; cohort gate; primary evidence or native identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version3.0 Structure 30June2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification context37121 versus26890 and37129 only; does not approve a mapping or supply manufacturing rules. |
| jrc-glass-bref-2013 | official_guidance | European Commission JRC; Best Available Techniques Reference Document for the Manufacture of Glass;2013 EUR25786 EN; doi10.2791/69502; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/GLS_Adopted_03_2012_0.pdf | Sections2.2–2.3 and2.6;3.5.1–3.5.4 including Tables2.6–2.7 and3.25–3.28 and Figure3.6: raw batch to continuous fibre routes; direct/conventional distinctions; water and waste context. No sector values adopted as defaults; no allocation prescription. |
| jushi-direct-roving-312 | handbook | Jushi USA Direct Roving312-E6; undated two-page product/packaging/storage sheet; https://www.jushiusa.com/sites/default/files/jushiUSA-312-E6.pdf | Manufacturer terminal example of directly wound untwisted silane-sized doffs; declared acceptance and storage/packaging configuration. No generic numerical defaults or common-factory claim. |
| jushi-direct-roving-386t | handbook | Jushi USA Direct Roving386T-E6; undated two-page product/packaging/storage sheet; https://www.jushiusa.com/sites/default/files/jushiUSA-386T-E6.pdf | Adjacent direct-roving terminal example and resin-dependent performance countercontext; separate product example from312 and not an independent publisher. No fibre strength or packaging mass default. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC; ILCD Handbook General guide for LCA Detailed guidance; first edition March2010; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Sections7.9.2–7.9.3: applicable attributional multifunctionality; subdivision and virtual subdivision; exchange-specific determining physical causality; residual same-state common-process-gate market value. No fixed shares or automatic recovery credit. |
