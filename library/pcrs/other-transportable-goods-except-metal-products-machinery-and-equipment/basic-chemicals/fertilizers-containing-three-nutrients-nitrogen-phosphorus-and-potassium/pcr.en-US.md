---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fertilizers-containing-three-nutrients-nitrogen-phosphorus-and-potassium
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Dry blended NPK fertilizer from urea, MAP and potassium chloride

## 1. Scope and Applicability

This method covers dry physical blending of purchased granular urea, granular monoammonium phosphate (MAP) and granular fertilizer-grade potassium chloride with K2O-equivalent mass fraction ≥60.0%. The route comprises reception, segregated storage, pre-blend screening, metered feeding, mixing, dry dust collection, final acceptance and bulk loading or sack filling. Blending and packing are one foreground unit, with separate stage meters. There is no chemical reaction, granulation, compaction, added water, coating or thermal drying. This boundary follows the route distinction in `eu-jrc-lvic-aaf-2007`, §7.2.1, and the dry-blend definition and physical-quality controls in `efba-solid-blending-2016`, §§2–5.

Exclude reacted mixed-acid and Odda compound fertilizers, NP/PK/NK products, organic blends, solutions or suspensions, ammonium-nitrate blends, micronutrient additions and coated products. A real site using other ingredients, liquid cleaning, combustion, extra packaging or other observed releases needs additional individually identified rows and evidence before applying this method. No source example supplies a default recipe, assay, yield, energy, loss or emission quantity. `zaria-blending-2026` corroborates industrial dry-blending existence only. The broader reference identity is usable only under the product, route and source-context limitations in Section 3; actual SKU and supplier/background compatibility still require documented verification.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fertilizers-containing-three-nutrients-nitrogen-phosphorus-and-potassium |
| classification_refs | CPC 3.0 34641; proposed narrower scope; no accepted mapping |
| covered_products | Ternary granular dry blend using only the three specified mineral/chemical feeds |
| excluded_products | Reacted, compacted, coated, organic, liquid, binary or ammonium-nitrate products |
| representative_product | One actual accepted SKU with declared N–P2O5–K2O analysis, not a prescribed grade |
| production_route | Dry physical blending of purchased granules; separate upstream manufacturing datasets |
| market_state | Solid mixture at plant gate, bulk or bagged; moisture included, packaging excluded from net product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a mineral/chemical fertilizer mixture containing N, P and K |
| How much | 1 kg accepted net finished product |
| How well | Actual SKU nutrient analysis, moisture, granule-size distribution, blend homogeneity and agreed acceptance specification |
| How long or cycle | One declared production and storage campaign through plant-gate delivery; field use excluded |
| reference_flow_link | npk_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Multi-nutrient compound fertilizer, formulation unspecified `b4e892e2-0421-4512-88e7-a5f8ae556d7a` |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual SKU and recipe; all three positive nutrient contents; urea/MAP/KCl grades and suppliers; dry physical route; N and P2O5/K2O assay bases and P solubility; net as-delivered mass and moisture; particle-size and segregation tests; plant, campaign and electricity supply; package type; broader reference source-context limitations and verified actual supplier boundary |

Required qualifiers must accompany the dataset. The 1 kg basis is product supply, not a nutrient-equivalent functional comparison or a field-response claim. The selected broader Product flow specifies no CAS, fixed grade, formulation or manufacturing route, and no each-granule nutrient structure; this PCR restricts it to the actual dry urea/MAP/KCl ternary blend. Its native name retains a Zhangjiakou, Hebei linseed-field input/seed-fertilizer context under DB1307/T 149—2022, while the source leaves formulation and supplier unspecified and cuts off upstream production. These source-use/interface limitations are disclosed; they do not establish the target SKU, plant-gate provider or zero upstream burden. Do not transfer the original field-use quantity, geographic provider claim or cutoff into this production inventory; verify the actual supply interface and complete upstream burdens separately.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_product | npk_product | Mass | kg | Weigh accepted product excluding sacks and liners. Include actual retained moisture; record gross, tare and calibrated net mass. Use cp_net. |
| nutrient_basis | feed_urea; feed_map; feed_kcl; npk_product | Mass | kg | Inventory uses commercial product mass, not kg N, P2O5 or K2O. Store measured nutrient fractions and moisture separately; oxide equivalents are reporting conventions, not separate reagent inputs. No theoretical purity substitution. |
| energy_basis | electricity | Net calorific value | MJ | Preserve the verified reference property and unit. Convert metered kWh to MJ using exactly 3.6 MJ/kWh; match delivered electricity and supplier boundary, with no calorific fuel conversion. |
| pm_intervals | pm25; pm2510; pm10plus | Mass | kg | Use non-overlapping size intervals and the same actual measurement basis. Report total PM as a check only, never as a fourth summed exchange. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased finished granular urea, MAP and KCl received for dry blending |
| starting_condition_role | upstream_product_interface |
| product_classification_scope | Specified dry-blend subset of CPC 3.0 34641 |
| recursive_input_rule | Do not recursively apply this blending unit to its three chemically different feeds; internal rework is an internal balance only |
| upstream_dataset_requirement | Match each feed, grid and package to its actual upstream manufacture and inbound delivery; disclose absent providers and avoid double counted transport |
| disclosure | Report site, period, route, recipes and grade campaigns, all interfaces, storage/packaging, emissions, waste receivers and unresolved references |

The cradle-to-gate supply model connects upstream manufacturing and transport to the measured gate-to-gate blending unit. Field application, soil emissions and downstream package disposal are outside this production dataset. Declare inbound transport distances, load, mode and existing provider transport scope; do not claim cradle-to-gate completeness while missing links remain. Indoor dry cleaning and dust recovery are included; liquid scrubbing/cleaning and on-site combustion fall outside this selected route and require explicit method extension.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| blend | Reception, screening, dry blending, dust control, storage and delivery packing | required | Declared dry route; packaging rows conditional on actual delivery | foreground | npk_product |

Physical stages: received feeds → separate storage and screening → metered mixing → acceptance → storage and delivery. Capture stage electricity and feed transfers independently, but export only one final product output. Recovered dust and rework move internally with equal outbound/inbound measured amounts; they are never additional purchased feeds, reference products or external credits.

### Process: dry NPK blending (`blend`)

#### Inputs

##### Product flows

###### Urea (`feed_urea`)

Purchased granular synthetic urea; require actual grade, particle-size distribution, moisture, nitrogen assay and supplier route. Do not substitute nutrient-as-N mass or UAN solution.

- Selected flow: Urea (`3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`)
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable actual quantity using cp_feed; report per 1 kg reference flow. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_feed
- Sources: `efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### Monoammonium phosphate (`feed_map`)

Purchased granular MAP (NH4H2PO4); actual N and P2O5-equivalent assays and solubility are mandatory. Reject powder-only identity and DAP substitution. No pure-salt theoretical composition becomes a fertilizer-grade assay.

- Selected flow: Monoammonium phosphate (`90d4a1dc-fa9b-4f22-9c97-8acb0a457d0d`)
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable actual quantity using cp_feed; report per 1 kg reference flow. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_feed
- Sources: `efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### Potassium chloride fertilizer, granular, K2O equivalent ≥60.0% by mass (`feed_kcl`)

Purchased granular fertilizer KCl within the selected identity: K2O-equivalent mass fraction at least 60.0%, GB/T 37918-2019 grade context. Confirm actual grade and assay; this identity threshold is not a recipe or universal assay. Reject the alternative volume-based KCl record unless its actual volume basis and supplier conversion are established. This UUID specifies locationOfSupply CN and China at-plant product supply. Document the actual compatible CN source interface, supplier and inbound delivery; non-CN product supply needs a separately verified matching flow before linkage.

- Selected flow: Potassium chloride fertilizer, granular, K2O equivalent ≥60.0% by mass (`c8585965-5595-48da-9260-2970ed1905cb`)
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable actual quantity using cp_feed; report per 1 kg reference flow. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_feed
- Sources: `efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### Alternating current (`electricity`)

Metered low-voltage (<1 kV) grid electricity to user, for conveyors, screens, weighing, mixer, extraction fans, dry cleaning and bagging. The database reference property is Net calorific value; report delivered electrical energy, not an invented fuel heating value. Check supplier voltage, geography, period and transformation boundary. This UUID specifies locationOfSupply CN; use only a documented matching CN user-side grid-average <1 kV supply interface. Non-CN supply needs a separately verified matching electricity flow and provider before linkage.

- Selected flow: Alternating current (`50657322-939c-4829-a87b-47c093bfa6a7`)
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect attributable actual quantity using cp_energy; report per 1 kg reference flow. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_energy
- Sources: `efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### Polypropylene woven sack (`bag_pp`)

One purchased PP woven outer sack, conditional on bagged delivery. Obtain empty sack mass, grade, recycled content, closure and actual supplier. No fixed bag size or count is prescribed; the seed-specific 25 kg bag candidate does not establish this general sack identity.

- Selected flow: Polypropylene woven sack
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable actual quantity using cp_pack; report per 1 kg reference flow. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources: `efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### Polyethylene film (`liner_pe`)

One PE film liner, conditional on its actual use. Verify polymer CAS 9002-88-4, thickness, grade, additives, recycled content and supplier mass basis. The source classification erroneously indicates luggage; retain only conditional physical film identity, with source clarification required. Do not include film again in an already composite sack background.

- Selected flow: Polyethylene film (`e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`)
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable actual quantity using cp_pack; report per 1 kg reference flow. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources: `efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

#### Outputs

##### Product flows

###### Multi-nutrient compound fertilizer, formulation unspecified (`npk_product`)

One accepted finished physical mixture at plant gate; the blend has all three nutrients in its representative bulk sample, not necessarily in every granule. Product mass includes actual retained moisture and excludes all packaging. Use the broader selected Product flow only with the dry-blend qualifiers and explicit source-use/interface limitations in Section 3; no Odda, aquaculture or residual n.e.c. identity is substituted.

- Selected flow: Multi-nutrient compound fertilizer, formulation unspecified `b4e892e2-0421-4512-88e7-a5f8ae556d7a`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: cp_net
- Sources: `efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

##### Waste flows

###### Dust (`discard_fines`)

One separately collected discarded fertilizer-dust mixture from this blending campaign, conditional on material leaving the site for treatment. Confirm urea/MAP/KCl composition, nutrient and moisture assays, contaminants and receiver acceptance. This broad industrial-dust identity supplies no fertilizer-specific treatment dataset. Material returned internally is neither this waste output nor an air emission.

- Selected flow: Dust (`2a6c9b60-a075-45ec-b611-c3b4dd255935`)
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable actual quantity using cp_waste; report per 1 kg reference flow. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### Discarded polypropylene woven sacks from NPK packing (`waste_pp`)

One rejected or damaged PP sack waste stream. Record residual fertilizer contamination, actual liner separation and receiving treatment. Accepted sacks delivered with product are not waste here; separate PE liner waste rather than reporting a mixed polymer collection row.

- Selected flow: Discarded polypropylene woven sacks from NPK packing
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable actual quantity using cp_waste; report per 1 kg reference flow. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### Discarded polyethylene film liners from NPK packing (`waste_pe`)

One separated discarded PE liner waste stream. Weigh after recording residual fertilizer mass and receiver conditions; distinguish saleable clean scrap from contaminated treatment waste and prevent counting retained packaging twice.

- Selected flow: Discarded polyethylene film liners from NPK packing
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable actual quantity using cp_waste; report per 1 kg reference flow. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

##### Elementary flows

###### particles (PM2.5) (`pm25`)

Actual residual particles ≤2.5 µm emitted to outdoor air, unspecified subcompartment, after control equipment and including attributable fugitive releases. Collect size-resolved measurements; no default emission or particle-size fraction. Captured dust is not this exchange.

- Selected flow: particles (PM2.5) (`08a91e70-3ddc-11dd-9293-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable actual quantity using cp_air; report per 1 kg reference flow. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### particles (PM2.5 - PM10) (`pm2510`)

Actual residual outdoor-air particles >2.5 and ≤10 µm. This interval is disjoint from pm25 and pm10plus. Cumulative PM10 must first have measured PM2.5 removed on identical sampling, moisture and gas-volume bases; without compatible data retain an unresolved split, never a fabricated fraction.

- Selected flow: particles (PM2.5 - PM10) (`08a91e70-3ddc-11dd-9501-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable actual quantity using cp_air; report per 1 kg reference flow. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### particles (> PM10) (`pm10plus`)

Actual residual particles >10 µm to outdoor air, unspecified subcompartment. Total particulate minus cumulative PM10 is usable only with compatible simultaneous measurements and non-negative reconciliation. Indoor collected dust and deposition retained on site are not outdoor releases.

- Selected flow: particles (> PM10) (`fe0acd60-3ddc-11dd-a70a-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable actual quantity using cp_air; report per 1 kg reference flow. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

## 7. Allocation and Co-product Handling

A normal declared blend has one commercial output and no default co-product allocation. Keep the unallocated physical mass/water/N/P/K ledger distinct from any allocated environmental-burden ledger. First separate grade campaigns and dedicated equipment by measured records. Shared electricity uses submetering or measured equipment duty and campaign attribution; disclose unresolved attribution and test its sensitivity. Do not allocate input ingredient mass by nutrient percentages, mechanically reduce physical product by an allocation share, or credit internal rework. If an actual separately sold fertilizer-dust co-product exists, record its identity, quantity, quality, receiver and function, revise the waste row and review allocation independently before use.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Each protocol retains original campaign totals. Reconcile attributable quantities and accepted net finished-product mass in the same campaign before normalization; all aggregated results are per 1 kg reference flow.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_net | blend | npk_product | foreground_record | SKU; grade; gross; tare; accepted net kg; moisture; N/P2O5/K2O assays; solubility; rejected lots; starting/ending stocks | Calibrated product weighing and representative batch sampling; compare stored and delivered quality | kg | Each batch and stage; air tests linked to represented operating periods | One complete declared campaign, including starts, stops, cleaning and storage | Selected site and actual grade campaigns | per 1 kg reference flow | Calibration, sampling, certificates, raw totals and reconciliation |
| cp_feed | blend | feed_urea; feed_map; feed_kcl | foreground_record | supplier; lot; grade; recipe; feed kg; stocks; assays; moisture; sieve analysis; compatibility evidence | Calibrated feed scales and stock reconciliation; retain actual supplier certificates and physical tests | kg | Each batch and stage; air tests linked to represented operating periods | One complete declared campaign, including starts, stops, cleaning and storage | Selected site and actual grade campaigns | per 1 kg reference flow | Calibration, sampling, certificates, raw totals and reconciliation |
| cp_energy | blend | electricity | foreground_record | stage; meter; kWh; time; voltage; supplier; region; campaign; shared loads | Read calibrated stage meters including fans and packing; reconcile bills and duty attribution | MJ | Each batch and stage; air tests linked to represented operating periods | One complete declared campaign, including starts, stops, cleaning and storage | Selected site and actual grade campaigns | per 1 kg reference flow | Calibration, sampling, certificates, raw totals and reconciliation |
| cp_pack | blend | bag_pp; liner_pe | foreground_record | supplier; polymer; grade; actual empty component kg; delivered package count; composite boundary; damaged kg | Weigh PP and PE independently and reconcile issue, retained stock and damaged material | kg | Each batch and stage; air tests linked to represented operating periods | One complete declared campaign, including starts, stops, cleaning and storage | Selected site and actual grade campaigns | per 1 kg reference flow | Calibration, sampling, certificates, raw totals and reconciliation |
| cp_waste | blend | discard_fines; waste_pp; waste_pe | foreground_record | origin; composition; contamination; kg; moisture; internal recovery; receiver; treatment; manifest | Weigh each separated external stream and internal returns; retain receiver acceptance and transfer records | kg | Each batch and stage; air tests linked to represented operating periods | One complete declared campaign, including starts, stops, cleaning and storage | Selected site and actual grade campaigns | per 1 kg reference flow | Calibration, sampling, certificates, raw totals and reconciliation |
| cp_air | blend | pm25; pm2510; pm10plus | foreground_record | source; stack/fugitive; size fractions; concentration; dry/wet and actual/normal gas basis; gas flow; operating time; controls; detection limits | Measure actual residual releases after dry control with documented sampling coverage and fugitive method; no emission factor default | kg | Each batch and stage; air tests linked to represented operating periods | One complete declared campaign, including starts, stops, cleaning and storage | Selected site and actual grade campaigns | per 1 kg reference flow | Calibration, sampling, certificates, raw totals and reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | all inventory rows | For every non-reference exchange, retain its attributable raw campaign total X in the stated numerator unit; apply x = X / Q exactly once here, after conversions and load calculations. Use the complete matched site/route/SKU-state campaign pool, including failed and zero-output batches, starts/stops, rejects, cleaning, storage and rework with their actual input, energy, waste and emission burdens. Reconcile opening/closing feed, work-in-progress and product stocks with carried production burdens, receipts, withdrawals and returns. Q is the unique positive accepted as-delivered net product kg attributable to that pool after stock and return reconciliation; a returned and reaccepted net batch is confirmed only once and internal rework is not added output. If Q <= 0 or the pool and carried burdens cannot be matched, keep raw records and leave the normalized result unavailable. Reference product is exactly 1 kg; retain the unallocated physical ledger separately from burden attribution. | cp_net; cp_feed; cp_energy; cp_pack; cp_waste; cp_air | Normalized exchanges plus retained raw totals | efba-solid-blending-2016 |
| electricity_conversion | electricity | E_MJ = metered campaign E_kWh × 3.6; apply measured campaign attribution and retain the resulting raw campaign MJ total. Only campaign_normalization divides by Q. | cp_energy; cp_net | E_MJ; raw campaign total | efba-solid-blending-2016 |
| physical_balance | all inventory rows | On the unallocated campaign ledger reconcile received feeds plus opening fertilizer stocks with accepted product, closing stocks, actual discarded fertilizer and actual size-resolved emitted dust; record rejected product and signed moisture exchange separately. Retained packaging is a separate material ledger. Measure loss composition; do not infer a constant yield or force residuals into a pollution row. | cp_feed; cp_net; cp_pack; cp_waste; cp_air | Mass, water and measured N/P/K component balances with residuals | efba-solid-blending-2016 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Verify actual grade, state, formulation, supplier and reference property independently of identity UUID lookup. No absent provider or route mismatch is a zero burden. | cp_feed; cp_net; cp_pack |
| quality_blend | npk_product | Retain representative nutrient analysis, water content, particle-size compatibility and segregation tests through storage/delivery; measured feed recipe alone is insufficient if screening or losses change composition. | efba-solid-blending-2016 |
| quality_coverage | all inventory rows | Cover complete campaign and all operated stages; distinguish conditional absence, measured zero, below detection, missing measurement and unresolved identity. Add atomic rows for real uncovered flows before use. | cp_net; cp_air; cp_waste |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | npk_product | Require the actual finished dry-blend SKU, three-feed route, complete Section 3 qualifiers and supplier-compatible Mass/kg basis. The broader reference UUID does not establish source-case formulation, a matching plant-gate provider or permission to inherit an upstream cutoff; unresolved actual compatibility prevents a complete site dataset. A measurement check alone is not scientific approval. | eu-jrc-lvic-aaf-2007 |
| validate_denominator | all inventory rows | One output equals 1 kg net reference product; bilingual rows, collection and calculations use the same denominator. All campaign amounts are actual measurements, with no defaults. | efba-solid-blending-2016 |
| validate_scope | all inventory rows | Check dry physical route and all three declared nutrients. Any added ingredient, water, reaction, compaction, combustion or wet treatment requires method review and additional atomic rows. | eu-jrc-lvic-aaf-2007; efba-solid-blending-2016 |
| validate_emissions | pm25; pm2510; pm10plus; discard_fines | Check outdoor air medium, non-overlapping bins, sampling scope, actual gas-volume basis and no duplicate captured dust. Unmeasured fractions remain unresolved rather than zero. | efba-solid-blending-2016 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Future verified supply model for the selected dry NPK blend only |
| excluded_use | Unverified site datasets; reactive NPK, nutrient-as-N datasets, crop response or field emissions |
| required_metadata | All reference qualifiers, period, site, upstream links, campaign records, receipts and waste/air boundaries |
| required_quality_disclosure | Reference source-context limitations, package/waste identities, supplier links, sampling coverage, classification defect and uncertainty |
| update_trigger | Reference identity or source-context constraint change, new route/ingredient, assay or supplier change, changed waste/control or measurement method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | UN Statistics Division, CPC 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 34641 classification boundary only; no canonical identity or route prescription |
| `eu-jrc-lvic-aaf-2007` | official_guidance | European Commission, LVIC-AAF BREF, August 2007, §§7.1 and 7.2.1, printed 283/285, PDF 311/313. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf?download=1 | Distinguish physical mixing from reaction and compaction; nutrient reporting bases; no numerical source defaults |
| `efba-solid-blending-2016` | handbook | European Fertilizer Blenders Association, Handbook of Solid Fertiliser Blending, Code of Good Practice for Quality, third edition 2016, March 2017 file; §§2–5,7–9. https://fertiliser-society.org/wp-content/uploads/2019/11/Blender-Handbook-2017-efba.pdf | Dry-blend definition, feed quality and compatibility, weighing, screening, segregation, sampling and physical/chemical tests; historical legislative references are not current legal advice; no table values copied as recipes or inventory defaults |
| `zaria-blending-2026` | literature | Zaria Fertilizers and Packaging Ltd, About Us, snapshot 2026-10-14. https://zariablenders.com/about-us/ | Producer corroboration of industrial dry NPK blending only; no site quantity, recipe or emission transfer |
