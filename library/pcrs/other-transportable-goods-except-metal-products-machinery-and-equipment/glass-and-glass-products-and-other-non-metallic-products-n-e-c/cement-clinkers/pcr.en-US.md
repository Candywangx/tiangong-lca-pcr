---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.cement-clinkers
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Dry preheater-precalciner Portland cement clinker

## 1. Scope and Applicability

This PCR covers grey Portland cement clinker produced from documented mineral supplies through preblending, raw-meal preparation, suspension preheating, separate precalcination, rotary-kiln sintering, grate cooling and first quality release. It is an attributional cradle-to-first-release manufacturing method with separately disclosed cohort storage/handling/dispatch services. It is a transparent technical synthesis of primary process descriptions, not one claimed SKU, factory observation or contemporary purchase order. Supplier extraction and transport remain upstream inventory or explicit controlled foreground operations, with one owner per operation.

Exclude wet, semi-wet, semi-dry, shaft-kiln, white-clinker whitening/quenching, calcium-aluminate and other clinker chemistries unless independently extended and reviewed. Exclude gypsum/addition blending, cement finish grinding, cement bags, concrete, installation, use, hydration and carbonation service claims. Crushing hot clinker for cooler operation is included; grinding clinker with gypsum to make cement is excluded. Purchased finished clinker cannot replace mineral-to-clinker manufacture. No BREF temperatures, energy intensities, feed ratios, oxide percentages, strength values or emission factors are PCR defaults.

The selected Product flow is high-temperature kiln-sintered nodular clinker from limestone and clay, ready for subsequent cement grinding, at kiln/plant production mix. It has no fixed strength, recipe, particle-size interval, provider or geography in its native identity, and no CAS is declared. Its mineral classification is inconsistent with this manufactured identity; disclose this taxonomy defect without treating it as carbonate feed or ignoring the consistent physical description. It does not establish supplier, quality or methodology approval.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.cement-clinkers |
| classification_refs | CPC 3.0 37430; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Grey Portland clinker from the specified dry preheater-precalciner/grate-cooler route; no universal coverage of every cement clinker |
| excluded_products | Exclude wet, semi-wet, semi-dry, shaft-kiln, white-clinker whitening/quenching, calcium-aluminate and other clinker chemistries unless independently extended and reviewed. Exclude gypsum/addition blending, cement finish grinding, cement bags, concrete, installation, use, hydration and carbonation service claims. Crushing hot clinker for cooler operation is included; grinding clinker with gypsum to make cement is excluded. Purchased finished clinker cannot replace mineral-to-clinker manufacture. No BREF temperatures, energy intensities, feed ratios, oxide percentages, strength values or emission factors are PCR defaults. |
| representative_product | Cooled unhydrated nodular Portland clinker meeting an actual manufacturer specification at first quality release |
| production_route | This PCR covers grey Portland cement clinker produced from documented mineral supplies through preblending, raw-meal preparation, suspension preheating, separate precalcination, rotary-kiln sintering, grate cooling and first quality release. It is an attributional cradle-to-first-release manufacturing method with separately disclosed cohort storage/handling/dispatch services. It is a transparent technical synthesis of primary process descriptions, not one claimed SKU, factory observation or contemporary purchase order. Supplier extraction and transport remain upstream inventory or explicit controlled foreground operations, with one owner per operation. |
| market_state | Bulk clinker at first quality release; actual later packing/handling/dispatch services separately tied to original cohorts |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Dry preheater-precalciner Portland cement clinker |
| How much | 1 kg net dry first-released conforming clinker excluding packaging and free water |
| How well | Actual clinker specification, mineral phases/free lime and relevant laboratory acceptance records; no default strength grade, oxide recipe or test result |
| How long or cycle | One declared original production cohort and complete reporting interval; separate observed cohort service horizon; no assigned use life |
| reference_flow_link | `clinker_first_release` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Clinker `7d259356-1aad-44d2-8ea3-e44c8dbd986a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | grey Portland clinker family and actual product specification; mineral phase and oxide analyses with actual methods and test ages where relevant; free lime and acceptance criteria without default limits; unhydrated nodular supply state and measured free moisture; dry preheater/precalciner rotary kiln and grate cooler configuration; mineral suppliers and quarry/transport ownership; each alternative mineral and fuel formulation/status/feed point; fossil/biogenic/mineral carbon and measured water phases; kiln/raw-mill operating modes and bypass/CKD return/export routes; site/geography and complete reporting horizon; first-release cohort Q and inherited raw/WIP/store burden vectors; cohort-specific FG service horizon and actual dispatch/return history; bulk or actual clinker packaging with upstream owner; native identity restrictions and unresolved exchanges; allocation and upstream dataset matches |

All required qualifiers shall appear in dataset metadata, process notes, reference comments or equivalent fields; missing qualifiers make the data package incomplete. The same native restrictions apply to the reference output card and its complete process context.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | `clinker_first_release` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference product is 1 kg net dry clinker; measure cohort Q using cp_release and normalize inventory once with calc_inventory. Manufacturing Q is first-release quantity, not dispatch or net deliveries. |
| `native_units` | all inventory rows | Each native extensive property | kg or MJ as declared on each row | Preserve each numerator property/unit. Gross mass, thermal energy and electricity are separate ledgers; electricity kWh to native MJ uses 3.6 once. Do not require Mass/kg for energy, or infer mass/density from a secondary property. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole mineral/fuel/water/utility/auxiliary supplies at disclosed provider gates, with full upstream extraction/production/transport; controlled quarry operations explicitly included once |
| starting_condition_role | Cradle-to-first-release manufacture plus separate original-cohort service accounting |
| product_classification_scope | A narrower real Portland-clinker route within CPC 3.0:37430; classification does not establish identity or positive mapping |
| recursive_input_rule | Purchased clinker, if actually used for permitted seed/rework blending, requires its own qualified upstream manufacture and original identity; internal clinker/dust/raw-meal transfers retain histories and cancel internally once, never as another purchase or Q |
| upstream_dataset_requirement | Match each actual provider, formulation, route, state, geography and period with one upstream burden owner; native identity does not establish provider/process compatibility |
| disclosure | grey Portland clinker family and actual product specification; mineral phase and oxide analyses with actual methods and test ages where relevant; free lime and acceptance criteria without default limits; unhydrated nodular supply state and measured free moisture; dry preheater/precalciner rotary kiln and grate cooler configuration; mineral suppliers and quarry/transport ownership; each alternative mineral and fuel formulation/status/feed point; fossil/biogenic/mineral carbon and measured water phases; kiln/raw-mill operating modes and bypass/CKD return/export routes; site/geography and complete reporting horizon; first-release cohort Q and inherited raw/WIP/store burden vectors; cohort-specific FG service horizon and actual dispatch/return history; bulk or actual clinker packaging with upstream owner; native identity restrictions and unresolved exchanges; allocation and upstream dataset matches |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_route` | Manufacture | Include source-specific upstream quarrying and transport, receipt/preblending, crushing/milling/drying/homogenisation, fuel preparation, calcination/sintering, cooler/crusher, pollution control and first clinker acceptance. Declare purchased-prepared input boundaries; do not duplicate their provider operations. | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `b_quality_gate` | First release and stock history | Q is the sum of newly first-released conforming net dry clinker in the selected cohort. Reinspection, transfer, dispatch, returned FG and permitted rework never create another Q. Closing FG already belongs to Q; neither subtract its manufacturing burden nor add it as another production output. Opening raw material, WIP, hot meal, kiln coating/rings, held clinker and unallocated non-WIP stores carry exchange-specific inherited histories; distinguish them from already released FG. | `eu-jrc-clm-2013` |
| `b_all_states` | Complete operation | Keep failed/off-spec/sampled clinker and all start-up, shutdown, idle, cleanup, repair, blocked cyclone, CO-trip and zero-output intervals. Record actual dispositions, losses and treatment without assuming recoverability. Rework of FG requires manufacturer/specification permission plus postwork testing, acceptance and disposition; hydraulic material damage is not presumed reversible. Q=0 retains the full burden ledger and yields no unit result. | `eu-jrc-clm-2013` |
| `b_dust` | Dust and alternative feeds | Track kiln dust and bypass dust separately by internal return, retained stock, external use and disposal. Internal dust and recovered hot air/heat retain histories and cancel only at an actual consolidation boundary. Mineral carbonate CO2 and each fuel carbon origin remain separate. Accept alternative raw materials/fuels only with formulation, legal status, contamination, feed point and quality evidence; supplier waste status never grants zero burden or automatic credit. | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `b_atomic` | Every exchange | Every supplied formulation is purchased once as a whole; assay, carrier water, oxide/element composition and LHV are subaccounts. On-site preparation instead records every actual purchased ingredient, energy and loss. Add a separate named card/protocol for every actual flow absent below, including each process chemical, fuel, emission species, wastewater destination and packaging component; absence requires evidence, unknown is not zero. Gross material, water, gas, waste and asset quantities are never scaled by economic allocation shares. | `eu-jrc-clm-2013` |
| `b_service` | Released clinker services | Retain storage, sampling, handling, conditional packing, loading, transport under control and returns as actual incremental services linked to original cohort c and its original Q_c over a declared observed service horizon. Carry opening/closing FG identity and prior manufacturing burden once; separate historical burden from new service burden. Internal Q cancels in the consolidated gate. Do not normalize service to current-period shipments, replace Q by net delivery, or repeat manufacturing because of a return; trace original dispatch and reversal records independently of returned wet weight. Retain performed original-cohort service even for held closing FG, using actual observed H_c without future-service assumptions. For actual permitted post-release work record new and removed materials/parts, new/old state and each added/removed water phase; keep repair-held FG as a labelled FG substate or a disjoint repair-WIP state once. Require actual permission, postwork tests, acceptance and final disposition; do not assume hydration damage is restored or create new manufactured Q. | `eu-jrc-clm-2013` |
| `b_thermal` | Conditional heat systems | Recover cooler/exit-gas heat internally without a second purchased heat input. Include separate heat/power exports only when delivered and measured; no assumed CHP, boiler or steam. For actual external steam or hot-water systems keep carrier mass, temperature/pressure/phase, enthalpy, condensate/liquid return as a Product exchange, and provider water/energy ownership. No implicit water-density or enthalpy default. | `eu-jrc-clm-2013` |
| `b_assets` | Physical assets and repair | Keep kiln shell, cooler, mill and each installed/replacement component physical stock separately from the period service burden. Track new/used refractory, steel parts, lubricant and maintenance water inflows/outflows plus full wet closing stocks. X_in/X_out only remove overlap with another listed flow, never a true influx retained in stock. Allocate embodied service from measured use and documented service history; no fixed lifetime or whole kiln per kg clinker. | `eu-jrc-clm-2013` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_prep` | Mineral supply and raw-meal preparation | required | Actual operations and conditional rows only; document absence | This PCR covers grey Portland cement clinker produced from documented mineral supplies through preblending, raw-meal preparation, suspension preheating, separate precalcination, rotary-kiln sintering, grate cooling and first quality release. It is an attributional cradle-to-first-release manufacturing method with separately disclosed cohort storage/handling/dispatch services. It is a transparent technical synthesis of primary process descriptions, not one claimed SKU, factory observation or contemporary purchase order. Supplier extraction and transport remain upstream inventory or explicit controlled foreground operations, with one owner per operation. | 1 kg reference flow; raw cohort totals retained |
| `burn_cool` | Fuel preparation, calcination, sintering, cooling and first release | required | Actual operations and conditional rows only; document absence | This PCR covers grey Portland cement clinker produced from documented mineral supplies through preblending, raw-meal preparation, suspension preheating, separate precalcination, rotary-kiln sintering, grate cooling and first quality release. It is an attributional cradle-to-first-release manufacturing method with separately disclosed cohort storage/handling/dispatch services. It is a transparent technical synthesis of primary process descriptions, not one claimed SKU, factory observation or contemporary purchase order. Supplier extraction and transport remain upstream inventory or explicit controlled foreground operations, with one owner per operation. | 1 kg reference flow; raw cohort totals retained |
| `fg_service` | Original-cohort storage, handling and dispatch service | required | Actual operations and conditional rows only; document absence | Retain storage, sampling, handling, conditional packing, loading, transport under control and returns as actual incremental services linked to original cohort c and its original Q_c over a declared observed service horizon. Carry opening/closing FG identity and prior manufacturing burden once; separate historical burden from new service burden. Internal Q cancels in the consolidated gate. Do not normalize service to current-period shipments, replace Q by net delivery, or repeat manufacturing because of a return; trace original dispatch and reversal records independently of returned wet weight. | 1 kg reference flow; raw cohort totals retained |

The card list is an initial atomic inventory, not an exhaustive substance list. Each process inherits the full Section 5 boundary rules. Attribute actual common service/fuel/air inputs to their measured process; transfer internal raw meal, hot meal, cooler air and returned dust with complete histories, not duplicated external cards. Conditional exchanges require documented actual occurrence; add each real missing exchange rather than using “other”, an unknown zero or a collection UUID.

### Process: Mineral supply and raw-meal preparation (`raw_prep`)

#### Inputs

##### Product flows

###### Limestone (`limestone`)

Whole limestone mineral supply. Native Product/Mass identity leaves composition, purity, grade, extraction route and provider unspecified; measure carbonate/mineral phases and free moisture, distinguish supplier crushing from on-site work. Do not use pure calcium carbonate or a chemically contradictory CAS substitute. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Limestone `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Clay (`clay`)

Natural fine-grained hydrous aluminosilicate clay at mining-site supply. Record mineralogy, carbonate/organic content and separately measured free versus structural water. This identity is not calcined clay, clinker or a manufactured ceramic. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Clay `226972bf-eeed-4ec4-a22e-f227e582ca18`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Quartz (`quartz`)

Conditional whole quartz corrective raw material at plant for batch preparation. Native synonyms include silica/silica sand/quartz sand; grade, size and supplier remain to be qualified. No cristobalite, amorphous silica, treated composite or extracted-resource flow substitution. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Quartz `ddee14c5-2a28-4224-9b84-68dc5956972f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Iron ore (`iron_ore`)

Conditional whole iron-ore corrective supply, consumption mix from mechanical mining/transport. Native US steel-industry statistics are context, not a mandated supplier/geography or a cement recipe. Match actual mineral content and provider boundary; not pure Fe2O3, pig iron, mill scale or waste residue. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Iron ore `961fd7b3-4d9f-41bc-b703-44cdc4151a4f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Coal fly ash (`fly_ash`)

Conditional separately supplied ash used as kiln mineral feed, not a finished-cement addition. Keep its actual incoming Product/Waste status, pretreatment and upstream allocation explicit. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Coal fly ash
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Granulated blast-furnace slag (`slag`)

Conditional mineral replacement fed before clinkering. Verify supply form/status and upstream history; slag blended after clinker release belongs to cement and is excluded. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Granulated blast-furnace slag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Alternating current (`raw_prep_electricity`)

Meter this process independently, including fans, conveyors, controls, dust collection and actual idle/start-stop demand. Native Product is CN grid-average consumption mix delivered at 1–35 kV; use only compatible China medium-voltage supply, qualify regional/time/provider match, and split any other supply into a new card. Native reference property is Net calorific value in MJ: convert measured kWh by 3.6 MJ/kWh once; no fuel mass or on-site generation double count. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_energy retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Water, tap (`raw_water`)

Actual raw-mill conditioning or dust-suppression tap-water input; raw-material free water is already inside each whole mineral supply and is not purchased here again. Native Product/Mass tap-water identity supplies no grade, geography or treatment assurance; qualify actual tap supply and upstream water service once. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Fuel preparation, calcination, sintering, cooling and first release (`burn_cool`)

#### Inputs

##### Product flows

###### Alternating current (`burn_cool_electricity`)

Meter this process independently, including fans, conveyors, controls, dust collection and actual idle/start-stop demand. Native Product is CN grid-average consumption mix delivered at 1–35 kV; use only compatible China medium-voltage supply, qualify regional/time/provider match, and split any other supply into a new card. Native reference property is Net calorific value in MJ: convert measured kWh by 3.6 MJ/kWh once; no fuel mass or on-site generation double count. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_energy retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Hard coal (`hard_coal`)

Whole actually purchased coal before any on-site drying/milling; record separate kiln/calciner/dryer burns, moisture, ash, LHV and fossil carbon. If prepared coal is purchased, move the provider boundary explicitly and do not count raw coal plus purchased coal powder again. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Hard coal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_energy retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Petroleum coke (`petcoke`)

Conditional actual fuel, separately prepared/metered with its own ash, sulfur, carbon and LHV. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Petroleum coke
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_energy retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Diesel fuel (`diesel`)

Conditional startup or mobile-equipment fuel; split locations and measured properties, including failed starts. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_energy retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Natural gas (`gas`)

Conditional actual pipeline fuel; retain metered integrated volume or true rate series, base temperature/pressure/compressibility, measured composition and gas-specific density/LHV. Do not substitute pure methane or water density. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Natural gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_energy retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Water, tap (`spray_water`)

Actual gas-conditioning/bypass/cooling make-up tap water only where installed; distinguish spray evaporation, coolant inventory, bleed and external return. A dry clinker route does not imply zero water, nor mandatory white-clinker quenching. Native Product/Mass tap-water identity supplies no grade, geography or treatment assurance; qualify actual tap supply and upstream water service once. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Magnesia-spinel refractory brick (`refractory`)

Conditional actual lining grade; new/used installed and spare stock, removal, wear into clinker/dust and scrap remain separate. Whole brick supply is not separately purchased again as MgO and spinel assays. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Magnesia-spinel refractory brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Cast-steel clinker-cooler grate plate (`grate_plate`)

Actual new/used replacement plate physical stock and wear; record service history and replacement work. Do not put one whole cooler or arbitrary service-life factor into every kg. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Cast-steel clinker-cooler grate plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Mineral lubricating oil (`lubricant`)

Whole actual lubricant formulation, measured new/used inventory, in-equipment fluid, leaks and spent oil; no separate base oil/additive procurement for an externally formulated lubricant. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Polyester dust-filter bag (`filter_bag`)

Conditional actual polyester bag including supplied construction, not every dust-control technology. Add actual other filter media as separate cards; track retained dust separately from bag mass. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Polyester dust-filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Aqueous ammonia solution (`ammonia_solution`)

Conditional actual SNCR reagent only if installed; purchase the complete solution once, with concentration and carrier water subaccounts, evaporation, reaction nitrogen and ammonia slip separately resolved. Never assume an ammonia plant because NOx exists. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Aqueous ammonia solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Water steam (`steam_in`)

Conditional external steam supply only when physically present; record carrier kg and separate enthalpy MJ with actual pressure/temperature/phase, provider convention and measured return. Do not presume a boiler or buy thermal energy twice. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Water steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### Waste flows

###### Shredded end-of-life tyre fuel (`tyre_fuel`)

Conditional one supplied tyre-fuel preparation including rubber/steel/textile as delivered, with composition and water subaccounts, actual waste status, allowed feed point and clinker-quality evidence. Purchase/receive once; ash incorporation is not another virgin mineral purchase and biomass carbon is measured, not assumed. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Shredded end-of-life tyre fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_energy retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### Elementary flows

###### Atmospheric molecular oxygen (`o2_in`)

Resolve this one actual air constituent from measured gross air volume/composition/humidity and independent state-specific gas conversion. Keep pass-through and reaction consumption distinct; do not add an air aggregate on top of its constituents or use industrial bottled-gas Product identity. CAS 7782-44-7, native Elementary renewable element resource from air. Restrict to measured atmospheric molecular O2; liquid/bottled-gas synonyms do not establish purchased oxygen supply. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Atmospheric argon (`ar_in`)

Resolve this one actual air constituent from measured gross air volume/composition/humidity and independent state-specific gas conversion. Keep pass-through and reaction consumption distinct; do not add an air aggregate on top of its constituents or use industrial bottled-gas Product identity. CAS 7440-37-1, native Elementary renewable element resource from air on Mass basis; only atmospheric elemental Ar. A native (41Ar) alias is ambiguous and does not authorise radioactive argon-41 or an activity-based exchange. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Atmospheric carbon dioxide (`air_co2_in`)

Resolve this one actual air constituent from measured gross air volume/composition/humidity and independent state-specific gas conversion. Keep pass-through and reaction consumption distinct; do not add an air aggregate on top of its constituents or use industrial bottled-gas Product identity. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Atmospheric carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Atmospheric water vapour (`humidity_in`)

Resolve this one actual air constituent from measured gross air volume/composition/humidity and independent state-specific gas conversion. Keep pass-through and reaction consumption distinct; do not add an air aggregate on top of its constituents or use industrial bottled-gas Product identity. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Atmospheric water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### dinitrogen (`n2_in`)

Atmospheric N2 resource input, CAS 7727-37-9, renewable element resources from air; not liquid/purchased nitrogen or an air-emission row. Collect gross inlet constituent mass and transfer to the species ledger without re-buying air. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

#### Outputs

##### Product flows

###### Clinker (`clinker_first_release`)

The selected Product flow is high-temperature kiln-sintered nodular clinker from limestone and clay, ready for subsequent cement grinding, at kiln/plant production mix. It has no fixed strength, recipe, particle-size interval, provider or geography in its native identity, and no CAS is declared. Its mineral classification is inconsistent with this manufactured identity; disclose this taxonomy defect without treating it as carbonate feed or ignoring the consistent physical description. It does not establish supplier, quality or methodology approval. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Clinker `7d259356-1aad-44d2-8ea3-e44c8dbd986a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Liquid water condensate return (`condensate_return`)

Only actual externally returned condensate/carrier water under the supplier convention, with measured temperature/phase/enthalpy and separate mass. It is a Product return, not assumed wastewater or avoided-steam credit. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Liquid water condensate return
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### Waste flows

###### Discarded cement kiln dust (`ckd_export`)

Only the external discarded fraction; measure wet/dry mass, carbonate/calcined phases and treatment destination. Internal return and retained CKD stock are separate ledgers, not repeated external output. No automatic burden removal for sale. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Discarded cement kiln dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Discarded chloride-bearing kiln bypass dust (`bypass_dust`)

Conditional actual bypass discard; distinct from CKD, fly ash and stack particles. Keep internal return, storage, external use/disposal and entrained water separately; no assumed fixed bypass rate. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Discarded chloride-bearing kiln bypass dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Rejected Portland clinker (`failed_clinker`)

Actually rejected/off-spec/sampled material leaving manufacture, not new accepted clinker. Failed loads and treatment remain attributable; any reprocessing requires permission and postwork evidence. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Rejected Portland clinker
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Spent magnesia-spinel refractory brick (`spent_refractory`)

Actually removed used refractory, separately weigh adhered kiln material/water and route each once; wear embedded in clinker/dust is not also exported here. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Spent magnesia-spinel refractory brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Scrapped cast-steel grate plate (`steel_scrap`)

Actual worn/rejected plate external scrap with moisture/contamination subaccounts and retained manufacturing/maintenance burdens. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Scrapped cast-steel grate plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Spent mineral lubricating oil (`spent_oil`)

Actual spent oil including received contamination/water as whole waste; split independent phases and treatment, without subtracting manufacturing because recovered. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Spent polyester dust-filter bag (`spent_filter`)

Actual discarded bag body, entrained dust/water separately reconciled without purchasing or exporting them twice. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Spent polyester dust-filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Kiln-system aqueous cleaning effluent (`kiln_wastewater`)

Conditional actual whole aqueous effluent to external treatment. Preserve liquid mass, dissolved/suspended species and water independently; COD/total metals do not become named compound mass. Add each actual other destination separately. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Kiln-system aqueous cleaning effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### Elementary flows

###### carbon dioxide (fossil) (`co2_mineral`)

Geogenic carbonate-decomposition CO2 only, CAS 124-38-9, actual air release using the native unspecified-air non-long-term Elementary identity. Independently reconcile measured mineral carbon, dust/stock carbonate and incomplete decomposition; no default CaO ratio or LOI-as-CO2 assumption. Exclude fuel CO2 and pass-through ambient CO2 here. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.  The native fossil label is used as a non-biogenic/geological inventory mapping convention, not a statement that carbonate carbon originated in fuel. Retain actual mineral-carbon ownership and this separate geogenic subaccount; document the chosen LCI/LCIA convention before use and choose a different compatible identity if that convention distinguishes geogenic CO2. ILCD section 7.4.3.6.4 demonstrates that the fossil label is not restricted to fuel combustion; it does not supply a carbonate factor or an explicit universal geogenic mapping.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### carbon dioxide (fossil) (`co2_fuel`)

Fossil fuel/organic-feed CO2 only, CAS 124-38-9, Elementary emission to unspecified air without long-term qualification. Preserve each fuel carbon/LHV basis and CO/CH4/unburned carbon subaccounts; aggregate fossil contributions once without duplicating stack total, mineral carbon or ambient pass-through. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### water vapour (`water_vapour`)

CAS 7732-18-5, native Elementary emission to unspecified air, not the similarly named freshwater/sea/soil/long-term/stratospheric record. Separate evaporated free/carrier water, mineral dehydration water, combustion reaction water and inlet humidity from independent evidence; retain residual liquid and structural phases. No residual fitted simultaneously to water and CO2. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### dinitrogen (`n2_out`)

CAS 7727-37-9, Elementary emission to unspecified air, separately reconcile gross N2 out and chemically transformed nitrogen with measured inputs. Do not call total nitrogen or NOx molecular N2; do not count both flue gas aggregate and constituents. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### sulfur dioxide (`so2`)

CAS 7446-09-5, Elementary emission to unspecified air without long-term qualification. Use actual SO2 speciation/monitoring; total sulfur or SOx does not establish SO2 mass. Keep sulfur retained in clinker/dust and other sulfur species separately. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Molecular oxygen to air (`o2_out`)

Unreacted molecular O2, not oxygen demand or an oxide-oxygen subtotal. CAS 7782-44-7, native Elementary emission to unspecified air without long-term qualification; restrict to actual molecular O2, not oxide oxygen or oxygen demand. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Argon to air (`ar_out`)

Actual pass-through Ar separately from N2; no atmospheric fixed composition default. CAS 7440-37-1, native Elementary emission to unspecified air without long-term qualification, Mass only. The ambiguous (41Ar) alias does not authorise radioactive argon-41; use actual atmospheric pass-through Ar only. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Pass-through atmospheric carbon dioxide (`ambient_co2_out`)

Only the independently quantified inlet ambient CO2 returned to air; balance separately, do not label as newly generated geogenic/fuel CO2. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Pass-through atmospheric carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Biogenic carbon dioxide to air (`co2_bio`)

Conditional measured biogenic carbon conversion with real fuel/feed evidence; no automatic carbon-neutrality or avoided emission credit. CAS 124-38-9, native Elementary emission to unspecified air, not indoor/long-term/delayed-correction or fossil identity. Native dry-ice/ion aliases do not authorise solid or ionic exchange; actual molecular gas and biogenic-origin evidence are required. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Carbon monoxide to air (`co`)

Actual molecular CO; differentiate fuel incomplete combustion from raw-material organic carbon. Do not bind a purchased-gas Product record. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Nitrogen monoxide to air (`no`)

Only independently speciated molecular NO; NOx expressed as NO2 equivalent is not NO mass. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised. Native ordinary molecular identity CAS 10102-43-9; unspecified non-long-term air emission only. Verify actual chemical species, origin and receiving air compartment; noisy ion/isotope or other-species aliases do not permit substituting HNO, N2O4, carbon black, graphite, aggregate NOx/VOC or a solution. No quantity or emission factor is supplied.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Nitrogen dioxide to air (`no2`)

Only molecular NO2 with independent speciation; NOx-as-NO2 equivalent is an indicator and nitrous oxide is a different CAS. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised. Native ordinary molecular identity CAS 10102-44-0; unspecified non-long-term air emission only. Verify actual chemical species, origin and receiving air compartment; noisy ion/isotope or other-species aliases do not permit substituting HNO, N2O4, carbon black, graphite, aggregate NOx/VOC or a solution. No quantity or emission factor is supplied.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Dinitrogen monoxide to air (`n2o`)

Conditional actual N2O; exclude delayed-emission correction, indoor-air and purchased-gas identities. CAS 10024-97-2, native Elementary emission to unspecified air, no long-term or delayed correction. Compressed/refrigerated synonyms do not establish a purchased-gas Product; N2O is not NO/NO2/NOx. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Fossil methane to air (`methane`)

Conditional actual molecular fossil CH4 from fuel losses or incomplete combustion; total organic carbon/VOC is not CH4. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised. Native ordinary molecular identity CAS 74-82-8; unspecified non-long-term air emission only. Verify actual chemical species, origin and receiving air compartment; noisy ion/isotope or other-species aliases do not permit substituting HNO, N2O4, carbon black, graphite, aggregate NOx/VOC or a solution. No quantity or emission factor is supplied.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Ammonia to air (`nh3`)

Conditional actual molecular NH3 slip from installed treatment or other verified source; not total nitrogen. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised. Native ordinary molecular identity CAS 7664-41-7; unspecified non-long-term air emission only. Verify actual chemical species, origin and receiving air compartment; noisy ion/isotope or other-species aliases do not permit substituting HNO, N2O4, carbon black, graphite, aggregate NOx/VOC or a solution. No quantity or emission factor is supplied.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Hydrogen chloride to air (`hcl`)

Conditional actual HCl gas after control; chloride in mineral/dust is a separate phase, not the same molecular exchange. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised. Native ordinary molecular identity CAS 7647-01-0; unspecified non-long-term air emission only. Verify actual chemical species, origin and receiving air compartment; noisy ion/isotope or other-species aliases do not permit substituting HNO, N2O4, carbon black, graphite, aggregate NOx/VOC or a solution. No quantity or emission factor is supplied.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Hydrogen fluoride to air (`hf`)

Conditional actual HF gas supported by species evidence; not total fluorine. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised. Native ordinary molecular identity CAS 7664-39-3; unspecified non-long-term air emission only. Verify actual chemical species, origin and receiving air compartment; noisy ion/isotope or other-species aliases do not permit substituting HNO, N2O4, carbon black, graphite, aggregate NOx/VOC or a solution. No quantity or emission factor is supplied.

- Selected flow: hydrogen fluoride `08a91e70-3ddc-11dd-9804-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Airborne Portland-clinker mineral particulate (`clinker_pm`)

Only actual entrained clinker material with measured size/collection method and mineral identity. Keep non-overlapping size fractions as separate cards; total PM and its subsets must not be summed and must not be relabelled as pure SiO2. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Airborne Portland-clinker mineral particulate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_species retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

### Process: Original-cohort storage, handling and dispatch service (`fg_service`)

#### Inputs

##### Product flows

###### Alternating current (`fg_service_electricity`)

Meter this process independently, including fans, conveyors, controls, dust collection and actual idle/start-stop demand. Native Product is CN grid-average consumption mix delivered at 1–35 kV; use only compatible China medium-voltage supply, qualify regional/time/provider match, and split any other supply into a new card. Native reference property is Net calorific value in MJ: convert measured kWh by 3.6 MJ/kWh once; no fuel mass or on-site generation double count. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_energy retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Water, tap (`service_water`)

Actual cleaning/repair tap water linked to original FG service cohort; retain added water in wet closing stock and independent outgoing phases. Native Product/Mass tap-water identity supplies no grade, geography or treatment assurance; qualify actual tap supply and upstream water service once. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Woven polypropylene clinker sack (`pp_sack`)

This card is only purchased physical P, including separately identified paid packaging supplied in a bundle. First non-purchased external ingress I and external return received ER have distinct cards, are never combined here and imply no second provider purchase. Only actual clinker packaging, not assumed cement packaging. First non-purchased external ingress is real physical receipt with one upstream owner; record new supply and external return received separately. Follow the complete six-leg packaging balance, including empty/attached WIP/FG/reusable stock, independent repair material/water, actual tare and all gross movements. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Woven polypropylene clinker sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Polyethylene wrapping film (`pe_film`)

This card is only purchased physical P, including separately identified paid packaging supplied in a bundle. First non-purchased external ingress I and external return received ER have distinct cards, are never combined here and imply no second provider purchase. Only actual clinker packaging, not assumed cement packaging. First non-purchased external ingress is real physical receipt with one upstream owner; record new supply and external return received separately. Follow the complete six-leg packaging balance, including empty/attached WIP/FG/reusable stock, independent repair material/water, actual tare and all gross movements. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Wooden transport pallet (`wood_pallet`)

This card is only purchased physical P, including separately identified paid packaging supplied in a bundle. First non-purchased external ingress I and external return received ER have distinct cards, are never combined here and imply no second provider purchase. Only actual clinker packaging, not assumed cement packaging. First non-purchased external ingress is real physical receipt with one upstream owner; record new supply and external return received separately. Follow the complete six-leg packaging balance, including empty/attached WIP/FG/reusable stock, independent repair material/water, actual tare and all gross movements. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Clinker (`returned_clinker`)

Actual gross R received back from a prior dispatch only while the same unhydrated nodular clinker identity remains true. Trace original cohort, original dispatch/reversal and inherited manufacturing once; returned wet weight is measured independently and cannot define original delivered mass or new Q. Record all added water, loss and actual permitted rework/test/disposition. Altered/hydrated rejects require their own specific material identity, not this UUID. The selected Product flow is high-temperature kiln-sintered nodular clinker from limestone and clay, ready for subsequent cement grinding, at kiln/plant production mix. It has no fixed strength, recipe, particle-size interval, provider or geography in its native identity, and no CAS is declared. Its mineral classification is inconsistent with this manufactured identity; disclose this taxonomy defect without treating it as carbonate feed or ignoring the consistent physical description. It does not establish supplier, quality or methodology approval. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Clinker `7d259356-1aad-44d2-8ea3-e44c8dbd986a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_release retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Woven polypropylene clinker sack I (`pp_sack_included_ingress`)

Only actual first non-purchased external physical ingress I, whether supplier-included or otherwise received, disjoint from paid P (including paid bundled supply) and external return ER; retain whole wet contents once with one upstream owner and no new purchase. Previously sent-out same-item returns belong to ER rather than I. Only actual clinker packaging, never assumed from finished cement bags or bulk clinker. Integral material/water once; actual compatible construction/provider required.

- Selected flow: Woven polypropylene clinker sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Woven polypropylene clinker sack ER (`pp_sack_external_return_received`)

Only actual external return received ER of the same previously sent-out packaging item; trace original dispatch/ownership and actual wet condition; not internal reuse, a new purchase or negative shipment. Only actual clinker packaging, never assumed from finished cement bags or bulk clinker. Integral material/water once; actual compatible construction/provider required.

- Selected flow: Woven polypropylene clinker sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Polyethylene wrapping film I (`pe_film_included_ingress`)

Only actual first non-purchased external physical ingress I, whether supplier-included or otherwise received, disjoint from paid P (including paid bundled supply) and external return ER; retain whole wet contents once with one upstream owner and no new purchase. Previously sent-out same-item returns belong to ER rather than I. Only actual clinker packaging, never assumed from finished cement bags or bulk clinker. Integral material/water once; actual compatible construction/provider required.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Polyethylene wrapping film ER (`pe_film_external_return_received`)

Only actual external return received ER of the same previously sent-out packaging item; trace original dispatch/ownership and actual wet condition; not internal reuse, a new purchase or negative shipment. Only actual clinker packaging, never assumed from finished cement bags or bulk clinker. Integral material/water once; actual compatible construction/provider required.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Wooden transport pallet I (`wood_pallet_included_ingress`)

Only actual first non-purchased external physical ingress I, whether supplier-included or otherwise received, disjoint from paid P (including paid bundled supply) and external return ER; retain whole wet contents once with one upstream owner and no new purchase. Previously sent-out same-item returns belong to ER rather than I. Only actual clinker packaging, never assumed from finished cement bags or bulk clinker. Integral material/water once; actual compatible construction/provider required.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Wooden transport pallet ER (`wood_pallet_external_return_received`)

Only actual external return received ER of the same previously sent-out packaging item; trace original dispatch/ownership and actual wet condition; not internal reuse, a new purchase or negative shipment. Only actual clinker packaging, never assumed from finished cement bags or bulk clinker. Integral material/water once; actual compatible construction/provider required.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Actual packaging repair wood (`pack_repair_wood`)

Only actual separately supplied replacement wood/board for an actual packaging repair; not a whole pallet or a guessed recipe. Record wood species, treatment, dry matter, free/absorbed water, custody and one owner; add actual other fasteners/glue individually. Only a real independently quantified nonoverlapping physical leg is an exchange; when an existing same-side meter or collection total already includes it, keep a disjoint raw source-use subaccount, not another additive exchange/provider. Retained true influx AND full closing wet stock remain; missing quantities remain unknown.

- Selected flow: Actual packaging repair wood
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Water, tap (`pack_repair_water`)

Only actual supplied tap water used in package cleaning/repair, actual state and provider, never assumed clinker hydration. If included in service_water meter, retain this disjoint source-use child without another additive exchange/purchase. Only a real independently quantified nonoverlapping physical leg is an exchange; when an existing same-side meter or collection total already includes it, keep a disjoint raw source-use subaccount, not another additive exchange/provider. Retained true influx AND full closing wet stock remain; missing quantities remain unknown.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### Waste flows

###### Returned hydration-damaged Portland clinker (`hydrated_clinker_return`)

Conditional actual returned hydration-damaged material, with whole wet mass, inherited original cohort/dispatch burden, changed phase/water, losses and treatment. It is not conforming clinker, not a new Q, and not assumed recoverable by regrinding; actual manufacturer/specification permission and postwork acceptance are mandatory for any rework. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Returned hydration-damaged Portland clinker
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_release retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### Elementary flows

###### Atmospheric water vapour entering packaging (`pack_humidity_in`)

Actual independently measured ordinary H2O vapour from air transferred into packaging during storage/handling or actual work over H_c, with real phase/state and stock change; no repair event, fixed humidity or density is assumed. Not purchased water or water already in whole wet article. Only a real independently quantified nonoverlapping physical leg is an exchange; when an existing same-side meter or collection total already includes it, keep a disjoint raw source-use subaccount, not another additive exchange/provider. Retained true influx AND full closing wet stock remain; missing quantities remain unknown.

- Selected flow: Atmospheric water vapour entering packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

#### Outputs

##### Product flows

###### Woven polypropylene clinker sack (`pp_sack_out`)

This card is only full gross shipment-accompanying physical S, including later-returned shipments. External empty return EO has a distinct card and is never included here. Not net product Q, new purchase, or automatic coproduct. Internal reuse cancels only internally. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Woven polypropylene clinker sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Polyethylene wrapping film (`pe_film_out`)

This card is only full gross shipment-accompanying physical S, including later-returned shipments. External empty return EO has a distinct card and is never included here. Not net product Q, new purchase, or automatic coproduct. Internal reuse cancels only internally. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Wooden transport pallet (`wood_pallet_out`)

This card is only full gross shipment-accompanying physical S, including later-returned shipments. External empty return EO has a distinct card and is never included here. Not net product Q, new purchase, or automatic coproduct. Internal reuse cancels only internally. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Clinker (`released_clinker_dispatch`)

Actual gross dispatch G of already first-released unhydrated nodular grey Portland clinker, linked to original cohort Q_c and observed service horizon. This is a physical service-gate output, never new manufactured production or an additional reference Q. Record dry solids, actual free moisture, gross delivery and original dispatch/reversal identifiers separately; cancel the internal first-release transfer once on consolidation. The selected Product flow is high-temperature kiln-sintered nodular clinker from limestone and clay, ready for subsequent cement grinding, at kiln/plant production mix. It has no fixed strength, recipe, particle-size interval, provider or geography in its native identity, and no CAS is declared. Its mineral classification is inconsistent with this manufactured identity; disclose this taxonomy defect without treating it as carbonate feed or ignoring the consistent physical description. It does not establish supplier, quality or methodology approval. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Clinker `7d259356-1aad-44d2-8ea3-e44c8dbd986a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_release retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Woven polypropylene clinker sack EO (`pp_sack_external_return_out`)

Only actual packaging external return outward EO, distinct from S, Waste and internal reuse; retain gross wet mass and original Q_c/H_c without purchase/credit. Only actual clinker packaging, never assumed from finished cement bags or bulk clinker. Integral material/water once; actual compatible construction/provider required.

- Selected flow: Woven polypropylene clinker sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Polyethylene wrapping film EO (`pe_film_external_return_out`)

Only actual packaging external return outward EO, distinct from S, Waste and internal reuse; retain gross wet mass and original Q_c/H_c without purchase/credit. Only actual clinker packaging, never assumed from finished cement bags or bulk clinker. Integral material/water once; actual compatible construction/provider required.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Wooden transport pallet EO (`wood_pallet_external_return_out`)

Only actual packaging external return outward EO, distinct from S, Waste and internal reuse; retain gross wet mass and original Q_c/H_c without purchase/credit. Only actual clinker packaging, never assumed from finished cement bags or bulk clinker. Integral material/water once; actual compatible construction/provider required.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### Waste flows

###### Discarded woven polypropylene clinker sack (`pp_sack_waste`)

Actual discarded single packaging material including independently tracked adherent water/material, treatment and one burden owner. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Discarded woven polypropylene clinker sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Discarded polyethylene wrapping film (`pe_film_waste`)

Actual discarded single packaging material including independently tracked adherent water/material, treatment and one burden owner. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Discarded polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Discarded wooden transport pallet (`wood_pallet_waste`)

Actual discarded single packaging material including independently tracked adherent water/material, treatment and one burden owner. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Discarded wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Discarded released Portland clinker (`fg_loss`)

Actual post-release damage, sample or loss assigned to original cohort service; do not reverse Q or drop original manufacture. Record changed water state, permitted rework tests and final disposition. The amount uses the single calc_inventory cohort normalization in Section 8; original records and physical gross amounts remain unnormalised.

- Selected flow: Discarded released Portland clinker
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_raw retains original records; keep every physical gross ledger separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_raw`
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Removed packaging repair wood (`pack_removed_wood`)

Only actual old wood/part removed in packaging repair, independently measured dry matter/water/contamination and destination; not a duplicate whole-pallet W outlet or an automatic burden export/credit. Only a real independently quantified nonoverlapping physical leg is an exchange; when an existing same-side meter or collection total already includes it, keep a disjoint raw source-use subaccount, not another additive exchange/provider. Retained true influx AND full closing wet stock remain; missing quantities remain unknown.

- Selected flow: Removed packaging repair wood
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

###### Actual packaging cleaning wastewater (`pack_repair_wastewater`)

Actual separately collected package cleaning/repair wastewater with measured wet mass, carrier water and dissolved/suspended matter, treatment and custody; not direct elementary freshwater or COD-as-chemical, not water retained or vapour. Only a real independently quantified nonoverlapping physical leg is an exchange; when an existing same-side meter or collection total already includes it, keep a disjoint raw source-use subaccount, not another additive exchange/provider. Retained true influx AND full closing wet stock remain; missing quantities remain unknown.

- Selected flow: Actual packaging cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

##### Elementary flows

###### water vapour (`pack_water_vapour`)

Only actual ordinary molecular gaseous H2O CAS7732-18-5 emitted during ordinary storage/handling desorption or evaporation or actual cleaning/repair/drying, over original H_c into actual unspecified-air compartment. No repair event needed. Distinguish incoming humidity, retained liquid/bound water and wastewater; no heavy-water/isotope/ice/ether or liquid substitution. Native Mass/kg, not an assumed evaporation fraction. Only a real independently quantified nonoverlapping physical leg is an exchange; when an existing same-side meter or collection total already includes it, keep a disjoint raw source-use subaccount, not another additive exchange/provider. Retained true influx AND full closing wet stock remain; missing quantities remain unknown.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Quantity per reference flow from the single cohort calculation in Section 8; cp_pack retains original records; keep every physical gross ledger separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_scope` | Attributional inventory | Use the attributional hierarchy only in the ILCD situations requiring allocation. Assign dedicated processes and uniquely attributable exchanges first; subdivide physically or virtually with defensible process evidence. Unneeded allocation is not mandatory. | `ec-jrc-ilcd-2010` |
| `a_causality` | Remaining multifunctional exchanges | For each residual exchange identify its determining physical causal relationship with the actual co-functions. Mass, energy or any other physical ratio is admissible only when it determines that exchange; a single convenient plant-wide physical ratio is not justified by correlation. Retain the driver, measurements, affected flows and sensitivity. | `ec-jrc-ilcd-2010` |
| `a_residual` | True unassigned residual | Only after dedicated assignment/subdivision/causality are exhausted may the common residual use documented contemporary market values of actual co-functions in their real state at the same common process gate. Record quantity, price basis, contracts, period, moisture/quality, gate, residual flow set and rationale; absent values remain unresolved. Do not mix dedicated processing or downstream transport prices into that ratio; do not choose freely between physical and economic rules or invent shares. | `ec-jrc-ilcd-2010` |
| `a_waste` | Dust/waste/external sales | Ordinary exported or sold manufacturing waste, broken/failed clinker, samples and their treatment retain the manufacturing burdens they caused. Only a real independent co-function/cohort and justified one-time burden-transfer decision can transfer an exchange vector; preserve the entire physical gross flow. Neither revenue, waste status nor external recovery alone removes manufacture or grants avoided-production credit. | `ec-jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Manufacturing gate

At the manufacturing gate reconcile opening raw/WIP/unallocated stores and separate full wet installed/spare physical-asset stocks plus every true external gross wet-material and air input against closing raw/WIP/unallocated stores and separate full wet installed/spare physical-asset stocks, first-released physical clinker, all unreleased loss/waste and each actual gas/liquid/solid exit. First-released physical clinker equals Q plus separately measured free moisture, not Q plus closing FG. Track hot meal, kiln coating/rings and dust stock as real states; thermal MJ and electricity are not physical kg.

### FG and consolidated gates

FG service gate: opening wet FG plus actual first-release transfers and gross returned material plus other real service-material/water influx equals closing wet FG plus gross dispatch, external returns, actual waste/loss and every real water/gas exit. Returned wet mass need not equal original delivered mass. In the consolidated physical gate cancel internal first-release and other paired transfers once; retain opening/closing FG and installed/spare-asset wet stock and all external gross legs. Maintain constituent balances for Ca/Si/Al/Fe/C/H/O/S/Cl and measured other relevant elements separately from total mass. No residual may solve two unknown species or phases.

### Burden vectors

For each original cohort c and exchange i, carry B_open_ic and add true new attributable burden; subtract only B_close_ic in raw/WIP/unallocated non-WIP stores and independently justified transfers to other functions/cohorts. Released closing FG is never in manufacturing B_close. Preserve each inherited exchange amount, native unit, upstream dataset, water/composition state, prior treatment and allocation history. Ordinary waste/treatment and all failures stay in manufacture. Asset physical stock remains a separate ledger; only documented current asset service enters the burden numerator. Service A_ic contains actual incremental service and inherited unfinished-service work only, not a new copy of manufactured FG. Exchange index i also preserves original source process, carrier, pathway and compartment: an inherited upstream-provider burden is not reclassified as a direct kiln emission or added alongside a provider model that already owns it.

### Packaging six gross legs

For each real packaging material j: P_open_j + P_new_j + P_external_return_received_j = P_close_j + P_gross_shipped_j + P_external_return_out_j + P_waste_j, with repair-material and repair-water additions/exits explicitly added when independent. P_open/P_close each include empty, attached WIP, attached FG and reusable stock; P_new includes supplier-included ingress with exactly one upstream owner. The six movement classes are purchased P (including paid bundled supply), first non-purchased external ingress I, external return received ER, gross shipment out S, external return out EO and waste W; opening and closing are stocks, and P_new combines the disjoint P and I receipts. Internal reuse cancels, and X_in/X_out only deduplicate other flow terms. Never cancel true influx merely because it remains in wet closing stock; no economic scaling of these physical legs.

### Independent conversions and reaction evidence

Convert original amounts/rates to the exchange native extensive property before actual allocation. Integrate a true rate over time once; integrated gas/liquid volume is not multiplied by time again. Density and gas state/compressibility are substance-specific independent measurements. Preserve fossil, biogenic and geogenic carbon origins; separate free water, carrier water, mineral structural/dehydration water, reaction water, retained liquid, vapour and measured hydration changes. Oxide assay/LOI, COD, total carbon, VOC, NOx or total metals are indicators, not unique molecular species. Use actual resolved reaction/phase evidence and full gas constituent balances, not default stoichiometric conversion of an unknown mixture.

Protocols collect original unnormalised records and aggregate raw totals only. Their aggregation_rule cell names the final basis and refers exclusively to calc_inventory after original-unit conversion and real allocation; it performs no division at collection or aggregation.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_release` | burn_cool | First-release cohort | foreground_record | actual process; cohort; first acceptance record; wet net mass; tare; free moisture; dry Q; tests; raw/WIP/stores opening and closing; historic vectors; failures; samples; rework permission; postwork tests; disposition; gross dispatch/returns; original dispatch/reversal identifiers; actual observed H_c; held-FG performed services; repair-FG substate versus disjoint repair-WIP; actual new/removed materials and parts with new/old state; added/removed free/structural/reaction water; permission; postwork acceptance or rejection and destination ; actual work authorization/status separate from occurrence; unapproved/unauthorized/failed/rejected work; actual flow and burden capture; maker/spec permission; posttests; acceptance/disposition | Use calibrated scale/weigh-feeder and reconciled stock survey with product-specific moisture/phase tests and first-release authorisation. Trace each cohort once; record original-cohort Q for services and wet return changes separately.  Keep full first-release manufacturing Q including closing FG and all failures. Follow actual performed services against original Q_c/H_c; independently weigh repair inputs/removals and all affected wet stocks, without assuming damaged clinker is restored. The burden-stock equation does not assign the numerator of a custody-only gross physical card; that physical view uses full measured V under calc_inventory. For every actual manufacture or post-release work event, retain actual materials/water/energy, releases, wastes, custody and burdens whether authorized, unapproved, unauthorized, failed or rejected. Manufacturer/specification permission and postwork tests govern authorization and continued identity/quality, never erasure of actual flows or burdens. Retain original Q_c/H_c and actual acceptance/disposition; do not assume hydrated/damaged clinker restored. Future unperformed work stays unknown; only unused and unassigned stores may carry. | kg | Each batch/meter interval and stock boundary | Complete cohort plus all failed/zero-output intervals; original service horizon separately | Declared kiln line with raw_prep, burn_cool and fg_service as applicable; actual supplier gates and original cohort. process_id identifies the governing kiln system; raw_fields separately retain the actual process. | per reference flow | Calibration, original records, composition/phase tests, complete reconciliations and upstream ownership |
| `cp_raw` | burn_cool | Atomic material and stock | foreground_record | actual process; row_id; provider; whole formulation; original quantity/unit; wet/dry state; composition; raw/WIP/non-WIP/FG/asset opening and closing; new/used; water phases; inherited vector; actual inputs/outputs; treatment; ownership; allocation; independent X overlap evidence; gross-receipt versus already-net-consumption flag and prior stock correction; every inherited exchange vector; actual new/old repair additions and removed parts/materials; independent water phases and repair-WIP custody | Weigh each physically named material/external waste separately and reconcile invoices, recipes, stock survey, maintenance logs and actual destination. Track supplier-included packaging and water subaccounts without duplicating upstream purchase.  Distinguish physical asset purchase from attributable service and preserve every stock quantity and inherited exchange history. Do not reapply stock corrections to measured net consumption or deduct ordinary discarded/sold material manufacturing burdens automatically. | kg | Each batch/meter interval and stock boundary | Complete cohort plus all failed/zero-output intervals; original service horizon separately | Declared kiln line with raw_prep, burn_cool and fg_service as applicable; actual supplier gates and original cohort. process_id identifies the governing kiln system; raw_fields separately retain the actual process. | per reference flow | Calibration, original records, composition/phase tests, complete reconciliations and upstream ownership |
| `cp_energy` | burn_cool | Electricity and each fuel | foreground_record | actual process; row_id; process/mode; meter interval; raw kWh; fuel raw mass/volume/rate; state; density; LHV; fossil/biogenic carbon; ash; moisture; operating/idle/zero-output hours; supplier; gross carrier mass; enthalpy; imports/exports; original unit; upstream owner ; gross thermal-carrier supply/return V; independent kg/state/enthalpy and heat MJ; original Q_c; one provider agreement and return ownership | Retain calibrated interval meter readings and fuel weigh/volume records; assay each supply. Keep carrier mass separate from thermal energy. Electricity purchase, onsite generation and recovered heat require one upstream owner and no duplicated fuel/provider burden. The custody-only gross exception also covers each actual external thermal-carrier supply and Product condensate/hot-water return, including steam_in and condensate_return: A_ic is the complete measured gross leg V in its true native unit/state, not B_open+U-B_close, an inherited burden sum, net consumption or an economic/service share. Preserve carrier kg, phase/T/P/enthalpy reference independently of actual heat MJ and use this one original-Q_c quotient once. Separate attributable supply/operation/treatment/service vectors have one actual provider owner; neither a return nor mass/heat dimensions create another purchase, provider or automatic credit. Internal circulation cancels only at matched internal interfaces. | kWh; MJ; kg; m3 | Each batch/meter interval and stock boundary | Complete cohort plus all failed/zero-output intervals; original service horizon separately | Declared kiln line with raw_prep, burn_cool and fg_service as applicable; actual supplier gates and original cohort. process_id identifies the governing kiln system; raw_fields separately retain the actual process. | per reference flow | Calibration, original records, composition/phase tests, complete reconciliations and upstream ownership |
| `cp_species` | burn_cool | Actual gas and aqueous species | foreground_record | actual process; species; CAS where valid; input/output; inlet/stack/fugitive media; original concentration and basis; dry/wet gas flow; integrated or rate flag; interval; oxygen correction; T/P; humidity; speciation; detection limits; mineral/fuel carbon; ash/dust/stock phases; air constituent totals; reaction evidence | Use calibrated monitoring and independent material/phase analyses; retain every operating state and gas-path split, including bypass, mill-on/off and cooler. Preserve NOx/VOC/COD indicators separately until actual molecular identity and mass are known; never use one mass residual for two unknowns. | kg; original concentration; m3; time | Each batch/meter interval and stock boundary | Complete cohort plus all failed/zero-output intervals; original service horizon separately | Declared kiln line with raw_prep, burn_cool and fg_service as applicable; actual supplier gates and original cohort. process_id identifies the governing kiln system; raw_fields separately retain the actual process. | per reference flow | Calibration, original records, composition/phase tests, complete reconciliations and upstream ownership |
| `cp_pack` | fg_service | Each actual packaging material | foreground_record | actual process; material j; empty/attached WIP/FG/reusable opening and closing; new receipt; supplier-included receipt/owner; external return received; gross dispatched; external return out; waste; repair material/water in/out; X overlap; measured tare; original cohort and service horizon; separate P_purchase_j and I_supplier_j; repair-material and water X_in_j/X_out_j not represented by another flow term; exact same-direction overlap evidence; complete wet stock independently ; exact P/I/ER/S/EO/W row/direction; article/component boundary; matched internal transfers; per-pool W source and actual collection total; ordinary humidity uptake/release; actual new/removed wood and water phases; meter/outlet overlaps; original Q_c/H_c | Weigh each real packaging type, reconcile all six gross legs and wet stock, and retain return/dispatch/repair records. Supplier-included ingress stays physical with upstream owner once; internal reuse is not new procurement.  Keep purchased P (including paid bundled supply) and first non-purchased external ingress I disjoint, each whole wet article with one upstream owner. Six movement legs are P/I/ER/S/EO/W, never opening or closing stock. Only deduplicate X against the same material/water already represented in another flow term, never against a stock; retained ingress and full wet closing stock both remain. Ordinary storage/handling uptake and desorption/evaporation require no repair event. X removes only duplication in another same-side actual FLOW term, not stock, opposite direction or mere atomic-card presence; retained influx and full wet closing stock both remain. Whole supplied articles include integral liner/seam/glue/print and water once as child composition; actual separately supplied onsite components need independent atomic receipt/provider ownership. Use disjoint component contributions or reconciled whole article: empty assembled tare equals measured whole-bought contribution plus actual added matter/retained water minus real removed/lost matter, excluding clinker. Never add whole assembled tare plus its same components; match internal handoff IDs and replace component stock/shipment by the reconciled article in article mode, cancelling matched transfers. A real mixed collection outlet uses one qualified atomic Waste exchange; independently measured per-pool W origins are raw nonadditive source withdrawals whose sum matches the outlet. Total OR disjoint partition, never both; treatment/provider once. Separate actual outlets keep separate cards. All packaging and repair cards are conditional on actual physical presence; bulk clinker does not create invented packages or repairs. | kg | Each batch/meter interval and stock boundary | Complete cohort plus all failed/zero-output intervals; original service horizon separately | Declared kiln line with raw_prep, burn_cool and fg_service as applicable; actual supplier gates and original cohort. process_id identifies the governing kiln system; raw_fields separately retain the actual process. | per reference flow | Calibration, original records, composition/phase tests, complete reconciliations and upstream ownership |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_inventory` | all inventory rows | x_ic = A_ic / Q_c. This is the unique normalization: A_ic is the exchange-specific native-unit attributable burden numerator after raw-unit/rate conversions, dedicated assignment, actual allocation and inherited vector reconciliation; Q_c is original newly first-released net dry clinker in kg. The reference row is exactly 1 kg. Manufacturing and incremental service retain separate A vectors and the same original cohort Q_c. For Q_c=0 retain A without a unit result. Cards and aggregation refer to this calculation; neither divides again. For physical-custody-only rows (gross FG dispatch/returns, packaging legs, asset movements and outgoing waste), A_ic instead denotes that independently measured, unallocated gross movement converted to its own native extensive unit; its x_ic is a physical movement per original Q_c, not an attributable burden vector. Keep the absolute gross ledger primary and separate from manufacturing/service burden; neither custody output nor historical FG creates a new Q, purchase or burden credit. The custody-only gross exception also covers each actual external thermal-carrier supply and Product condensate/hot-water return, including steam_in and condensate_return: A_ic is the complete measured gross leg V in its true native unit/state, not B_open+U-B_close, an inherited burden sum, net consumption or an economic/service share. Preserve carrier kg, phase/T/P/enthalpy reference independently of actual heat MJ and use this one original-Q_c quotient once. Separate attributable supply/operation/treatment/service vectors have one actual provider owner; neither a return nor mass/heat dimensions create another purchase, provider or automatic credit. Internal circulation cancels only at matched internal interfaces. | A_ic; Q_c; cp_release; cp_raw; cp_energy; cp_species; cp_pack | x_ic | `ec-jrc-ilcd-2010`; `eu-jrc-clm-2013` |
| `calc_units` | all inventory rows | Convert tonnes to kg using 1000 kg/t; electricity MJ = recorded kWh × 3.6. Convert measured gas/liquid amounts by their documented state-specific method. Fuel LHV MJ is an energy subaccount of the same supplied carrier, not a second purchase. For actual steam/hot-water carriers, measured kg multiplied by specific enthalpy in kJ/kg gives kJ; divide by 1000 once for MJ. Use independently measured supply and return masses with each leg's actual state and a consistent enthalpy reference; reconcile real losses and storage changes on the same boundary/time basis. The shortcut mass × enthalpy difference applies only to matched equal-mass supply/return legs; do not invent efficiency or a return credit. Never infer unit-item mass, density, recipe or emission factors. | cp_energy; cp_species; original_units | converted_native_numerators | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `calc_vectors` | all inventory rows | For each original cohort c and exchange i, carry B_open_ic and add true new attributable burden; subtract only B_close_ic in raw/WIP/unallocated non-WIP stores and independently justified transfers to other functions/cohorts. Released closing FG is never in manufacturing B_close. Preserve each inherited exchange amount, native unit, upstream dataset, water/composition state, prior treatment and allocation history. Ordinary waste/treatment and all failures stay in manufacture. Asset physical stock remains a separate ledger; only documented current asset service enters the burden numerator. Service A_ic contains actual incremental service and inherited unfinished-service work only, not a new copy of manufactured FG. Exchange index i also preserves original source process, carrier, pathway and compartment: an inherited upstream-provider burden is not reclassified as a direct kiln emission or added alongside a provider model that already owns it. Label every input basis: gross receipts/purchases require the applicable opening/closing stock reconciliation for each exchange; already reconciled net consumption must not receive the same stock correction again. Physical quantities and every inherited exchange vector remain separately reconciled. Other-function/cohort transfers require actual eligibility, allocation and handover evidence once; ordinary manufacturing waste, breakage, samples, off-site removal or sale do not automatically export the burden of causing or treating them. Retain all actually performed original-cohort services over observed H_c using original Q_c even while FG remains held; only genuinely unconsumed and unassigned stores/unfinished work may carry forward, never completed service merely attached to closing FG. The burden-stock equation does not assign the numerator of a custody-only gross physical card; that physical view uses full measured V under calc_inventory. For every actual manufacture or post-release work event, retain actual materials/water/energy, releases, wastes, custody and burdens whether authorized, unapproved, unauthorized, failed or rejected. Manufacturer/specification permission and postwork tests govern authorization and continued identity/quality, never erasure of actual flows or burdens. Retain original Q_c/H_c and actual acceptance/disposition; do not assume hydrated/damaged clinker restored. Future unperformed work stays unknown; only unused and unassigned stores may carry. | cp_release; cp_raw; cp_energy; cp_species; cp_pack; B_open_ic; B_close_ic; new_burden_ic; justified_transfers_ic | A_ic | `ec-jrc-ilcd-2010` |
| `calc_physical_manufacture` | all inventory rows | At the manufacturing gate reconcile opening raw/WIP/unallocated stores and separate full wet installed/spare physical-asset stocks plus every true external gross wet-material and air input against closing raw/WIP/unallocated stores and separate full wet installed/spare physical-asset stocks, first-released physical clinker, all unreleased loss/waste and each actual gas/liquid/solid exit. First-released physical clinker equals Q plus separately measured free moisture, not Q plus closing FG. Track hot meal, kiln coating/rings and dust stock as real states; thermal MJ and electricity are not physical kg. | cp_release; cp_raw; cp_energy; cp_species; opening_physical_stocks; true_external_gross_inputs; closing_physical_stocks; first_release_wet_clinker; actual_waste; actual_gas_liquid_solid_exits | manufacturing_mass_reconciliation | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `calc_physical_fg` | all inventory rows | FG service gate: opening wet FG plus actual first-release transfers and gross returned material plus other real service-material/water influx equals closing wet FG plus gross dispatch, external returns, actual waste/loss and every real water/gas exit. Returned wet mass need not equal original delivered mass. In the consolidated physical gate cancel internal first-release and other paired transfers once; retain opening/closing FG and installed/spare-asset wet stock and all external gross legs. Maintain constituent balances for Ca/Si/Al/Fe/C/H/O/S/Cl and measured other relevant elements separately from total mass. No residual may solve two unknown species or phases. Record each actual repair/handling addition and removal of new/old materials, parts and free/structural/reaction water, separately measured rather than inferred from one wet residual. Repair-held FG belongs to one labelled FG substate or disjoint repair-WIP, never both. Retained actual influx remains on the input side while the complete wet closing material remains on the stock side. Actual permission, postwork tests, acceptance or rejection/disposition govern the resulting identity; no assumed restoration or new Q. | cp_release; cp_raw; cp_species; opening_FG_and_assets; first_release_transfer; gross_returns; real_service_inputs; closing_FG_and_assets; gross_dispatch; external_returns; real_loss_waste; actual_water_gas_exits | FG_and_consolidated_mass_element_reconciliation | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `calc_packaging` | all inventory rows | For each actual packaging material j: P_open_j + P_purchase_j + I_supplier_j + P_external_return_received_j + X_in_j = P_close_j + P_gross_shipped_j + P_external_return_out_j + P_waste_j + X_out_j. The six gross movement legs are separate purchased P (including paid bundled supply), first non-purchased external ingress I, external return received ER, gross shipment S, external return out EO and waste W; opening and closing stocks are not movement legs. Each stock includes empty, attached WIP, attached FG and reusable states. P and I each cover the whole actual wet article once with one upstream owner; internal reuse is not procurement. X_in/X_out contain actual repair-material and water additions/removals only to the extent absent from other same-direction flow terms; record the overlap evidence and never deduplicate against stocks. Retained actual influx and complete wet closing stock both remain. Reconcile new/old repaired parts, wood/material and free/absorbed/released water independently; no economic scaling of physical quantities. Ordinary storage/handling uptake and desorption/evaporation require no repair event. X removes only duplication in another same-side actual FLOW term, not stock, opposite direction or mere atomic-card presence; retained influx and full wet closing stock both remain. Whole supplied articles include integral liner/seam/glue/print and water once as child composition; actual separately supplied onsite components need independent atomic receipt/provider ownership. Use disjoint component contributions or reconciled whole article: empty assembled tare equals measured whole-bought contribution plus actual added matter/retained water minus real removed/lost matter, excluding clinker. Never add whole assembled tare plus its same components; match internal handoff IDs and replace component stock/shipment by the reconciled article in article mode, cancelling matched transfers. A real mixed collection outlet uses one qualified atomic Waste exchange; independently measured per-pool W origins are raw nonadditive source withdrawals whose sum matches the outlet. Total OR disjoint partition, never both; treatment/provider once. Separate actual outlets keep separate cards. All packaging and repair cards are conditional on actual physical presence; bulk clinker does not create invented packages or repairs. | cp_pack; P_open_j; P_purchase_j; I_supplier_j; P_external_return_received_j; P_close_j; P_gross_shipped_j; P_external_return_out_j; P_waste_j; X_in_j; X_out_j; repair_material_in_out; repair_water_in_out; X_overlap_evidence | packaging_gross_mass_reconciliation | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `calc_species_phases` | all inventory rows | Convert original amounts/rates to the exchange native extensive property before actual allocation. Integrate a true rate over time once; integrated gas/liquid volume is not multiplied by time again. Density and gas state/compressibility are substance-specific independent measurements. Preserve fossil, biogenic and geogenic carbon origins; separate free water, carrier water, mineral structural/dehydration water, reaction water, retained liquid, vapour and measured hydration changes. Oxide assay/LOI, COD, total carbon, VOC, NOx or total metals are indicators, not unique molecular species. Use actual resolved reaction/phase evidence and full gas constituent balances, not default stoichiometric conversion of an unknown mixture. | cp_species; cp_raw; cp_energy; actual_concentration; actual_volume_or_rate; measured_state; independent_composition; independent_phase_evidence | independent_species_phase_reconciliation | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all inventory rows | Confirm whole formulation, native Product/Waste/Elementary type, CAS/form/media/route/geography and every property. Preserve adopted restrictions in each card and context; unresolved auxiliary identities remain explicit and cannot be filled with a broad collection. | Direct identity and measured supplier/specification matching |
| `dq_balance` | all physical gates | At the manufacturing gate reconcile opening raw/WIP/unallocated stores and separate full wet installed/spare physical-asset stocks plus every true external gross wet-material and air input against closing raw/WIP/unallocated stores and separate full wet installed/spare physical-asset stocks, first-released physical clinker, all unreleased loss/waste and each actual gas/liquid/solid exit. First-released physical clinker equals Q plus separately measured free moisture, not Q plus closing FG. Track hot meal, kiln coating/rings and dust stock as real states; thermal MJ and electricity are not physical kg. | Independent stock/mass/element/phase measurements, uncertainty and unexplained residuals |
| `dq_complete` | all operating states | Keep failed/off-spec/sampled clinker and all start-up, shutdown, idle, cleanup, repair, blocked cyclone, CO-trip and zero-output intervals. Record actual dispositions, losses and treatment without assuming recoverability. Rework of FG requires manufacturer/specification permission plus postwork testing, acceptance and disposition; hydraulic material damage is not presumed reversible. Q=0 retains the full burden ledger and yields no unit result. | Complete event/meter/stock/test histories; no silent exclusions |
| `dq_source` | method and site data | Technical sources support qualitative process scope only; all quantities/specification limits/conditions come from real foreground or separately justified sources. Keep detection limits, time/geography representativeness, numerical gaps, uncertainty and allocation sensitivity explicit. | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025`; `ec-jrc-ilcd-2010` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | Reference and output | Reject a core reference identity conflict or unconfirmed core flow. Require one first-release clinker row with the same UUID, 1 kg and all qualifiers in both languages. A bound cement/calcite identity cannot stand for clinker. | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `v_units` | all inventory rows | Require raw native-unit conversion, one actual attribution step, complete cohort vectors and exactly one calc_inventory normalization; Q=0 gives no unit result. Energy is not forced to Mass/kg. Unknown quantities are not successful measured results. | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `v_physical` | all physical gates | FG service gate: opening wet FG plus actual first-release transfers and gross returned material plus other real service-material/water influx equals closing wet FG plus gross dispatch, external returns, actual waste/loss and every real water/gas exit. Returned wet mass need not equal original delivered mass. In the consolidated physical gate cancel internal first-release and other paired transfers once; retain opening/closing FG and installed/spare-asset wet stock and all external gross legs. Maintain constituent balances for Ca/Si/Al/Fe/C/H/O/S/Cl and measured other relevant elements separately from total mass. No residual may solve two unknown species or phases. | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `v_species` | gas/water/materials | Convert original amounts/rates to the exchange native extensive property before actual allocation. Integrate a true rate over time once; integrated gas/liquid volume is not multiplied by time again. Density and gas state/compressibility are substance-specific independent measurements. Preserve fossil, biogenic and geogenic carbon origins; separate free water, carrier water, mineral structural/dehydration water, reaction water, retained liquid, vapour and measured hydration changes. Oxide assay/LOI, COD, total carbon, VOC, NOx or total metals are indicators, not unique molecular species. Use actual resolved reaction/phase evidence and full gas constituent balances, not default stoichiometric conversion of an unknown mixture. | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `v_stocks` | manufacture and FG services | Retain storage, sampling, handling, conditional packing, loading, transport under control and returns as actual incremental services linked to original cohort c and its original Q_c over a declared observed service horizon. Carry opening/closing FG identity and prior manufacturing burden once; separate historical burden from new service burden. Internal Q cancels in the consolidated gate. Do not normalize service to current-period shipments, replace Q by net delivery, or repeat manufacturing because of a return; trace original dispatch and reversal records independently of returned wet weight. | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `v_pack_assets` | packaging and physical assets | Require all six gross packaging legs, supplier-included ingress/upstream owner, repair material/water and full wet stocks; X only removes overlap. Require new/used asset physical stocks separate from current service burden, with no fixed life or invented per-machine mass. | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |
| `v_allocation` | multifunctional processes | Reject arbitrary physical/economic choice, fabricated shares, automatic waste/sale burden subtraction or credit. Verify dedicated/virtual subdivision, exchange-specific determining physical causality and only the justified market-value residual at the real common gate. | `ec-jrc-ilcd-2010` |
| `v_scope` | route/product gate | Reject purchased-clinker packaging-only manufacture, gypsum finish grinding within the clinker gate, an unsupported route, missing actual exchange, hidden failure/cleanup interval or an unknown treated as zero. No engineering check establishes scientific/translation/mapping/publication approval. | `eu-jrc-clm-2013`; `us-epa-ap42-cement-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared clinker input to cement grinding and qualified downstream LCA; first-release manufacture and separately disclosed cohort services |
| allowed_use | Only the specified grey dry-precalciner Portland-clinker route/state/site/period and verified native restrictions |
| excluded_use | Exclude wet, semi-wet, semi-dry, shaft-kiln, white-clinker whitening/quenching, calcium-aluminate and other clinker chemistries unless independently extended and reviewed. Exclude gypsum/addition blending, cement finish grinding, cement bags, concrete, installation, use, hydration and carbonation service claims. Crushing hot clinker for cooler operation is included; grinding clinker with gypsum to make cement is excluded. Purchased finished clinker cannot replace mineral-to-clinker manufacture. No BREF temperatures, energy intensities, feed ratios, oxide percentages, strength values or emission factors are PCR defaults. |
| required_metadata | grey Portland clinker family and actual product specification; mineral phase and oxide analyses with actual methods and test ages where relevant; free lime and acceptance criteria without default limits; unhydrated nodular supply state and measured free moisture; dry preheater/precalciner rotary kiln and grate cooler configuration; mineral suppliers and quarry/transport ownership; each alternative mineral and fuel formulation/status/feed point; fossil/biogenic/mineral carbon and measured water phases; kiln/raw-mill operating modes and bypass/CKD return/export routes; site/geography and complete reporting horizon; first-release cohort Q and inherited raw/WIP/store burden vectors; cohort-specific FG service horizon and actual dispatch/return history; bulk or actual clinker packaging with upstream owner; native identity restrictions and unresolved exchanges; allocation and upstream dataset matches Separate physical-gross and burden/provider views; disjoint article/components and actual outlet versus origin-W memo; ordinary humidity and all actual unapproved/failed work; original Q_c/H_c and one provider per thermal supply. |
| required_quality_disclosure | Actual source/quantity coverage, auxiliary UUID/provider gaps, atomic species and phase uncertainty, balances, inherited vectors, failures, allocation, service horizon and exclusions; do not claim reviewed science from engineering validation |
| update_trigger | Changed mineral/fuel supply, phase/grade, kiln/cooler/control system, actual auxiliary exchange, upstream boundary, product gate, Q method, allocation or service horizon |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-jrc-clm-2013` | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Cement, Lime and Magnesium Oxide, EUR 26129 EN (2013), DOI 10.2788/12850, §§1.2.1–1.2.6, printed pp.9–39; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/CLM_Published_def_0.pdf | Industrial route and neighbouring exclusions; mineral/fuel preparation, precalciner kiln, cooling, dust loops, water conditioning and storage. Technical synthesis only; no numerical defaults and no LCA allocation authority. |
| `us-epa-ap42-cement-2025` | official_guidance | US EPA, AP-42 §11.6 Portland Cement Manufacturing, February 2025, §11.6.1, Fig.11.6-1 and neighbouring wet/semi-dry/finish-grinding descriptions, pp.11.6-1–11.6-9; https://www.epa.gov/system/files/documents/2025-02/c11s06_final_2-2025_0.pdf | Independent process description and clinker/cement terminal distinction; free/combined water, calcination, fuel and bypass paths. Emission-factor tables and historical recipes are not adopted. |
| `ec-jrc-ilcd-2010` | handbook | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp.255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation hierarchy only: subdivision/virtual subdivision, exchange-specific determining physical causality, residual market value at the actual common process gate; conditions and limitations retained. |
