---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.potassium-chloride-muriate-of-potash
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Bulk granular fertilizer-grade potassium chloride by hot leaching and crystallisation

## 1. Scope and Applicability

This attributional, cradle-to-gate method covers granular muriate of potash made from mined sylvinite by thermal dissolution, solid/liquid separation, cooling crystallisation, debrining, natural-gas drying, mechanical compaction, screening and bulk loadout. The delivered granular fertilizer product has measured K2O-equivalent content ≥60% by mass and declared moisture, KCl assay and impurities. This is a KCl-dominant commercial mineral product, not an assumed analytically pure chemical or a multi-nutrient formulation. The selected reference identity additionally requires its China at-plant context. Source diagrams establish physically compatible operations, not a verified target plant or default operating recipe. [ks-thermal-2023; eccc-potash-2017; ks-kalimop-grade]

Exclude flotation and electrostatic-separation routes, solution mining/solar-pond brine routes, chemical synthesis, food/pharmaceutical recrystallisation, KCl supply solutions, powdered/standard products sold without granular finishing, K2SO4, KNO3, carnallite/sylvite sold as raw fertilizer and NPK blends. This route has no product binder, coating, anti-caking or de-dusting chemical formulation; water glazing and water-only dust capture are included when used. A chemical additive, distinct purification route or alternative pollution-control reagent requires applicability reassessment and separate atomic exchanges before use. Actual site data are collected later; product identity, route and measurement bases must already be demonstrable. CPC34631 includes further grades/routes; the proposed relation is narrower, subject to independent acceptance. [un-cpc3-2025; ks-thermal-2023]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.potassium-chloride-muriate-of-potash |
| classification_refs | CPC 3.0 34631; narrower |
| covered_products | Uncoated bulk granular fertilizer-grade KCl from the declared thermal route |
| excluded_products | Other production routes, grades/states and compound fertilizers listed in Section 1 |
| representative_product | Potassium chloride fertilizer, granular, K2O equivalent ≥60.0% by mass |
| production_route | Sylvinite hot leaching → separation → cooling crystallisation → debrining/drying → compaction/screening → bulk delivery |
| market_state | Granular solid, bulk, accepted at the China plant gate; moisture and grade as delivered |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply granular KCl fertilizer as a potassium source; no field-yield claim |
| How much | 1 kg accepted as-delivered net product |
| How well | K2O-equivalent ≥60% by actual assay; declared KCl, water and granule specification |
| How long or cycle | One plant-gate delivery; agricultural use and service duration excluded |
| reference_flow_link | kcl_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Potassium chloride fertilizer, granular, K2O equivalent ≥60.0% by mass `c8585965-5595-48da-9260-2970ed1905cb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual producer/site and China plant-gate context; mined feed and hot-leach route; bulk granular uncoated state; actual KCl/K2O-equivalent assay and assay basis; moisture and insolubles/Mg/NaCl impurities; granule-size specification; accepted net mass excluding packaging; measurement period; internal recycle and stock changes; energy/control configuration; supplier background basis |

Declare these qualifiers in each data package. A product identity link is not a supplier inventory, purity measurement, process approval or geographic substitute.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference is 1 kg accepted as-delivered net granular product, not 1 kg K, K2O, dry KCl or packaged gross mass. Q is accepted net product mass for the same collection period; exclude rejects, recycles and co-products. |
| nutrient_basis | kcl_product | Mass | kg | Keep product, dry solids, KCl, elemental K and K2O-equivalent quantities separately. Use measured moisture/assay on a stated basis; nutrient equivalents are calculations, not new physical product or emitted K2O. [ks-kalimop-grade] |
| gas_volume | gas | Volume | m3 | Meter pipeline gaseous natural gas for the onsite heating boiler and direct-contact dryer, with separate consumption records. Reference quantity is Volume/m3. Record temperature, absolute pressure, wet/dry basis, composition, compressibility and supplier reference-volume definition; conversion and background compatibility remain unestablished until these agree. No mass coefficient from a database row is a density. Do not add the internal steam generated from this gas as purchased heat. |
| energy_basis | electricity | Net calorific value | MJ | Meter grid electricity at the 1–35 kV delivery point and retain stage submetering for crushing, pumps, vacuum/cooling, centrifuges, compaction, screening and dust controls. Match region, year, voltage and upstream delivery losses. Convert metered kWh to MJ using 3.6 MJ/kWh; the database reference property is Net calorific value, not a claimed fuel heating value. |
| water_components | water_out; chloride; potassium; sodium | Volume; Mass | m3; kg | Preserve the outfall’s total physical brine volume/mass separately from the water component and individual dissolved ions. Use measured density and composition; no assumed saline density. Water resource input, purchased water, waste shipment and direct water release are different boundary roles. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Mined sylvinite ore delivered to aboveground processing; upstream mining, crushing and transport are supplied through verified background data |
| starting_condition_role | background_dataset |
| product_classification_scope | CPC 3.0 34631; narrower |
| recursive_input_rule | Do not recurse into another KCl fertilizer dataset as if it were untreated ore. If refined KCl is actually the feed, this production boundary does not apply; choose finishing-only guidance after independent applicability review. |
| upstream_dataset_requirement | Delivered ore with actual composition/origin and extraction burden; electricity at actual voltage/region/year; pipeline gas at verified volume basis; water supply; actual purchased makeup salt; residue management and applicable transport. Missing upstream burdens are disclosed as incomplete, not zero. |
| disclosure | Disclose outsourced mining/transport and shared utilities, waste management inside/outside the site, stock changes, closure/aftercare scenario and exclusions. No physical mining-stage omission is concealed by a gate-to-gate label. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | hot_leach_kcl | Include heat generation/recovery, brine recycle, crystalliser vacuum/cooling, debrining, drying, water glazing, compaction, screening, storage, loading and actual emissions/waste controls. Keep final-product transfers inside one integrated unit; stage handoffs have equal amounts on both ends, with assay/stock changes reconciled. | ks-thermal-2023; eccc-potash-2017 |
| boundary_waste | hot_leach_kcl | Cover actual saline tailings, clarification sludge, purge, captured dust, contaminated runoff and receiver treatments. Separate onsite intermediates from offsite exchanges. Tailings dissolution and closure/aftercare cannot be asserted harmless; retain an attributable scenario, duration and uncertainty for long-term releases. | eu-mwei-2018 |
| boundary_downstream | hot_leach_kcl | Exclude field application, crop yields, avoided fertilizer substitution, user transport after plant gate, and product packaging from this bulk reference. Disclose any capital/maintenance exclusions and their significance; actual material consumptions or releases cannot be silently removed. | un-cpc3-2025 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| hot_leach_kcl | Integrated hot-leach granular KCl production | required | Declared route and accepted product identity in Sections 1–3 | foreground | kcl_product; 1 kg |

Keep independent phase records for ore reception/crushing, dissolution and hot separation, cooling crystallisation/recycle, debrining/drying, compaction/glazing/screening, and loadout/waste controls. Internal crystals, fines and mother brine do not become extra final-product output rows. The inventory below describes individual physical streams; conditional rows are included only when their documented conditions apply. A screening row does not require a positive emission. Add any actual additional chemical, fuel, transport, recovered mineral or pollutant as one specifically identified row; unsupported cut-offs or anonymous grouped exchanges are incomplete.

### Process: Integrated hot-leach granular KCl production (`hot_leach_kcl`)

#### Inputs

##### Product flows

###### Sylvinite ore for hot leaching (`ore`)

Weigh received sylvinite ore and sample KCl, NaCl, water, water-insoluble matter and Mg-bearing impurities. Declare mined feed origin, crushing state and delivered upstream inventory; refined MOP is not raw ore.

- Selected flow: Sylvinite ore for hot leaching
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_mineral; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_mineral
- Sources: ks-thermal-2023; eu-mwei-2018

###### Alternating current (`electricity`)

Meter grid electricity at the 1–35 kV delivery point and retain stage submetering for crushing, pumps, vacuum/cooling, centrifuges, compaction, screening and dust controls. Match region, year, voltage and upstream delivery losses. Convert metered kWh to MJ using 3.6 MJ/kWh; the database reference property is Net calorific value, not a claimed fuel heating value.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
Reference unit group `93a60a57-a3c8-11da-a746-0800200c9a66`.

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Record the actual attributable period exchange by cp_energy; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_energy
- Sources: eu-lvic-aaf-2007; eccc-potash-2017; eu-mwei-2018

###### Water, process (`water`)

Record purchased process-water mass added to leaching, washing, glazing, cooling makeup and water-only dust scrubbing separately by stage. Internal mother brine and recovered condensate are circulation, not repeated purchased water. Count water carried by incoming ore separately in its composition.

- Selected flow: Water, process `d8ad9111-4304-46fb-bc23-9a2f36d65a83`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_water; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_water
- Sources: eu-lvic-aaf-2007; eccc-potash-2017; eu-mwei-2018

###### natural gas in the gaseous state (`gas`)

Meter pipeline gaseous natural gas for the onsite heating boiler and direct-contact dryer, with separate consumption records. Reference quantity is Volume/m3. Record temperature, absolute pressure, wet/dry basis, composition, compressibility and supplier reference-volume definition; conversion and background compatibility remain unestablished until these agree. No mass coefficient from a database row is a density. Do not add the internal steam generated from this gas as purchased heat. The selected record names processed pipeline natural gas but carries CAS 74-82-8 for methane; retain this source identity-review conflict explicitly. It does not establish pure methane or the composition of the metered gas mixture. Use this link only with documented compatible actual pipeline-gas identity and supplier Volume/m3 basis; otherwise keep the input linkage pending.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
Reference unit group `93a60a57-a3c8-12da-a746-0800200c9a66`.

- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Record the actual attributable period exchange by cp_energy; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_energy
- Sources: eu-lvic-aaf-2007; eccc-potash-2017; eu-mwei-2018

###### Sodium chloride (`makeup_salt`)

Conditional: separately weigh purchased NaCl of verified purity ≥99.5% used for initial leach-brine preparation or salt makeup. Count only actual external addition and account for initial/final brine stocks. This flow cannot identify mixed halite tailings or imply that salt dosing is always needed.

- Selected flow: Sodium chloride `a413ea86-0887-42c8-be77-3bee86d5863b`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_mineral; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_mineral
- Sources: ks-thermal-2023; eu-mwei-2018

#### Outputs

##### Product flows

###### Potassium chloride fertilizer, granular, K2O equivalent ≥60.0% by mass (`kcl_product`)

Exactly one final accepted bulk granular KCl product output; exclude packaging and rejected/recycled material from Q. Assay as-delivered K2O-equivalent grade, KCl, moisture and impurities. Use actual assay, not the identity record’s nominal 60% scenario, for nutrient calculations. Retain centrifuge, dryer and compactor handoff measurements within the same foreground unit.

- Selected flow: Potassium chloride fertilizer, granular, K2O equivalent ≥60.0% by mass `c8585965-5595-48da-9260-2970ed1905cb`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_product
- Sources: ks-thermal-2023; eccc-potash-2017; ks-kalimop-grade

###### Recovered halite-rich mineral salt (`halite_product`)

Conditional: one recovered halite-rich salt sold as a documented co-product; weigh the actual mixture and report NaCl/KCl/Mg-salt/insoluble fractions, moisture and buyer specification. It is neither pure NaCl by assumption nor waste automatically. The same mass must not also appear as tailings. Additional recovered mineral products require separate identified rows.

- Selected flow: Recovered halite-rich mineral salt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_mineral; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_mineral
- Sources: ks-thermal-2023; eu-mwei-2018

##### Waste flows

###### NaCl-rich solid hot-leach tailings (`tailings`)

Weigh one NaCl-rich solid hot-leach residue sent to identified waste management. Measure water and residual KCl, NaCl, Mg salts and insolubles. Require the receiver’s salinity acceptance and management route; do not substitute sodium-chloride chemical product or unrelated waste. Onsite handling remains inside the integrated unit, with its material stock and saline releases tracked.

- Selected flow: NaCl-rich solid hot-leach tailings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_residue; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_residue
- Sources: eu-mwei-2018; ks-thermal-2023

###### Water-insoluble mineral clarification sludge (`sludge`)

Weigh water-insoluble mineral clarification sludge separately from coarse salt tailings; sample actual clay/mineral composition, entrained brine and moisture. Record dewatering and treatment destination. It is not biological sludge.

- Selected flow: Water-insoluble mineral clarification sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_residue; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_residue
- Sources: eu-mwei-2018; ks-thermal-2023

###### Spent saline mother-liquor purge (`purge`)

Conditional: measure one spent saline mother-liquor stream exported for treatment, with mass, density, water and each major salt concentration and receiver. Internal purge treatment is not simultaneously an exported waste and a direct freshwater release. Returned mother brine is internal recycle; neither treated wastewater from another industry nor pure water identifies this waste.

- Selected flow: Spent saline mother-liquor purge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_purge; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_purge
- Sources: eu-mwei-2018; ks-thermal-2023

###### Collected potassium-chloride-bearing dust for disposal (`dust_waste`)

Conditional: weigh collected KCl-bearing dust actually sent for disposal and assay moisture and contamination. Dust returned to product or leaching is internal recovery, not this waste output and not an air emission. Separate mineral sludge from collected dry dust.

- Selected flow: Collected potassium-chloride-bearing dust for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_residue; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_residue
- Sources: eccc-potash-2017

##### Elementary flows

###### carbon dioxide (fossil) (`co2`)

Record fossil CO2 from onsite natural-gas combustion and reconcile fuel carbon with measured CO, CH4 and other actual carbon species. Do not borrow a boiler default conversion fraction or treat mineral KCl as carbon input.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_air; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-ap42-gas; eu-lvic-aaf-2007

###### carbon monoxide (fossil) (`co`)

Measure fossil CO from the applicable gas burners; retain mass of CO, sampling method, exhaust flow, dry/wet conditions and operating periods. Do not convert it to CO2 mass in the physical emission ledger.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_air; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-ap42-gas; eu-lvic-aaf-2007

###### methane (fossil) (`ch4`)

Measure unburnt fossil methane from burners and actual onsite gas-system leakage separately, then aggregate without overlap. Do not use a biogenic or delayed-emission correction flow.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_air; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-ap42-gas; eu-lvic-aaf-2007

###### nitrous oxide (`n2o`)

Collect N2O combustion emissions or a technically justified species-specific estimate with uncertainty. N2O is separate from NO and NO2; nitrogenous fertilizer-use factors do not apply.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_air; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-ap42-gas; eu-lvic-aaf-2007

###### nitrogen monoxide (`no`)

Report actual NO mass from species-resolved measurements. Total NOx reported as NO2-equivalent does not establish this quantity; require speciation and a documented conversion or retain the quantitative result as pending. Do not sum NOx again with NO/NO2.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_air; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-ap42-gas; eu-lvic-aaf-2007

###### nitrogen dioxide (`no2`)

Report actual NO2 mass with the same sampling and exhaust basis as NO. Maintain the separate physical species and verified characterization basis; exclude N2O from NOx.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_air; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-ap42-gas; eu-lvic-aaf-2007

###### sulfur dioxide (`so2`)

Quantify SO2 according to measured gas sulfur/odorants and applicable stack records; low sulfur is not proof of zero. Do not substitute a generic sulfur-oxides aggregate.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_air; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-ap42-gas; eu-lvic-aaf-2007

###### hydrogen chloride (`hcl`)

Conditional screening row for actual HCl from the salt dryer: the Autazes producer report describes MgCl2 impurity decomposition in its specific dryer; use it only as a screening mechanism, not a recipe or emission factor. Establish impurity chemistry, exhaust evidence and control configuration before using a positive amount. No HCl formation fraction is assumed from the KCl product name, and natural-gas boiler factors do not describe this salt-specific release.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_air; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: brazil-potash-dryer-case

###### formaldehyde (`formaldehyde`)

Species-specific combustion screening: quantify formaldehyde where applicable, with detection limits and method evidence. An aggregate VOC total cannot stand in for this row.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_air; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-ap42-gas; eu-lvic-aaf-2007

###### benzene (`benzene`)

Species-specific combustion screening: quantify benzene where applicable, without reusing the formaldehyde or total VOC amount. Additional actual VOC species require their own atomic rows.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_air; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: epa-ap42-gas; eu-lvic-aaf-2007

###### particles (PM2.5) (`pm25`)

Measure PM2.5 leaving the site from dryers, compactors, screens, storage, loadout and combustion, after actual control devices. Include fugitive sources; wet-scrubber water droplets and condensable particulate definitions must be documented. Collected dust is not emitted dust.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_air; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: eccc-potash-2017

###### particles (PM2.5 - PM10) (`pm10`)

Report only the PM2.5–PM10 size interval. If the same compatible method reports cumulative PM10 and PM2.5, derive this interval by subtraction with uncertainty and nonnegative reconciliation; otherwise do not fabricate a split.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_air; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: eccc-potash-2017

###### particles (> PM10) (`pm_over10`)

Report only particles larger than PM10; derive total-minus-PM10 only when sampling definitions and coverage agree. Never add cumulative total particulate or PM10 again to the three non-overlapping intervals.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_air; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: eccc-potash-2017

###### water vapour (`water_air`)

Determine water vapour actually discharged from evaporation, drying and cooling, separating recovered condensate and combustion-generated water in the water ledger. Record mass, not the volume of humid exhaust gas.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_air; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: eu-lvic-aaf-2007; eccc-potash-2017; eu-mwei-2018

###### Water (`water_out`)

Conditional: liquid water component directly released to freshwater after onsite management. Record actual effluent volume, density and water fraction; convert water-component mass to the water reference volume using justified water density. The total brine volume is not automatically pure-water volume. Exclude offsite wastewater shipments and internal recycles from this elementary exchange.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
Reference unit group `93a60a57-a3c8-12da-a746-0800200c9a66`.

- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Record the actual attributable period exchange by cp_water; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_water
- Sources: eu-lvic-aaf-2007; eccc-potash-2017; eu-mwei-2018

###### chloride (`chloride`)

Conditional: chloride-ion mass released to freshwater, using discharge volume and representative chloride analysis at the final outfall, including attributable saline runoff. This is not elemental chlorine or HCl.

- Selected flow: chloride `08a91e70-3ddc-11dd-9508-0050c2490048`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_water; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_water
- Sources: eu-lvic-aaf-2007; eccc-potash-2017; eu-mwei-2018

###### Potassium, ion (`potassium`)

Conditional: potassium-ion mass directly released to freshwater from the same outfall basis; use measured ion concentration, not fertilizer K2O grade. Record residual K loss in the mineral balance.

- Selected flow: Potassium, ion `17f0762e-681b-4f6f-8693-58b95f6779a7`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_water; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_water
- Sources: eu-lvic-aaf-2007; eccc-potash-2017; eu-mwei-2018

###### Sodium, ion (`sodium`)

Conditional: sodium-ion mass directly released to freshwater, with measured concentration and outfall volume. Do not reuse a sodium resource extraction flow or add whole NaCl mass to the same ionic discharge inventory.

- Selected flow: Sodium, ion `6a3f413e-8aab-4c58-93b0-1f51c9714adb`
Reference unit group `93a60a57-a4c8-11da-a746-0800200c9a66`.

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual attributable period exchange by cp_water; divide by Q, the accepted product mass in kg for the same period. Preserve the stream’s stated numerator unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_water
- Sources: eu-lvic-aaf-2007; eccc-potash-2017; eu-mwei-2018

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | hot_leach_kcl | For this attributional inventory, first separately collect dedicated KCl finishing burdens and any physically separable salt recovery. Apply virtual subdivision only with an evidenced causal relationship. Allocate only the remaining inseparable environmental burdens, first by determining physical causality; where that does not establish a relationship, use documented market value at the separation point and matched-period prices, with sensitivity. No universal mass share or revenue price is supplied. | eu-ilcd-2010 |
| allocation_physical_ledger | hot_leach_kcl | Preserve actual ore, product, recovered salt, waste and emissions in the unallocated physical mass/water/K/Na/Cl/carbon ledger. Multiply environmental burden accounts by allocation shares, never mechanically multiply co-product physical outputs. Report physical and allocated accounts separately; recovered salt is not an avoided-production credit by default. Waste disposal remains attributed consistently to its originating process. | eu-ilcd-2010; eu-mwei-2018 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | hot_leach_kcl | kcl_product | accepted product ledger | lot; net accepted mass Q; granule sizes; as-delivered moisture; KCl; K2O-equivalent; NaCl; Mg; insolubles; assay basis; site; date; failed/zero-output and rework/return links; opening/closing product and work-in-progress stocks with carried burdens | Calibrated net weighing and representative composite sample/traceable laboratory assay; exclude packaging, rejected lots and internal recycles from Q while retaining their actual production burdens in the matched pool. Reconcile net accepted production, stocks and returns by lot under normalize_period; a returned/reaccepted net batch is confirmed only once and internal rework is not added output; final reference output per 1 kg reference flow | kg | each lot | one declared representative period including startup/shutdown and stock changes | same site and product scope; shared units assigned transparently | per 1 kg reference flow | calibration; assays; coverage; reconciliation; detection limits; traceable records |
| cp_mineral | hot_leach_kcl | ore; makeup_salt; halite_product | weighing and mineral assay | stream; lot; incoming/outgoing mass; moisture; KCl/NaCl/Mg salts/insolubles; origin/receiver; initial/final stocks; makeup-salt purity | Calibrated scales, representative solid/liquid sampling and assay with standards, lab method and uncertainty; reconcile dry components and entrained liquid; retain raw period stream totals and opening/closing stock/composition records for normalize_period; no division during collection | kg | each lot and stock reconciliation | one declared representative period including startup/shutdown and stock changes | same site and product scope; shared units assigned transparently | per 1 kg reference flow | calibration; assays; coverage; reconciliation; detection limits; traceable records |
| cp_energy | hot_leach_kcl | electricity; gas | meter and supplier record | meter; stage; kWh; gas m3; temperature; absolute pressure; wet/dry basis; Z; composition; LHV/HHV basis; supplier volume definition; steam supply/return conditions | Calibrated delivery meters and phase submeters; invoices and supplier definitions; heat audit including boiler losses, condensate return, recovery and actual steam enthalpy; retain raw attributable period delivered-energy/volume totals for normalize_period; no division during collection | MJ; m3 | continuous, reconciled each accounting period | one declared representative period including startup/shutdown and stock changes | same site and product scope; shared units assigned transparently | per 1 kg reference flow | calibration; assays; coverage; reconciliation; detection limits; traceable records |
| cp_residue | hot_leach_kcl | tailings; sludge; dust_waste | residue stock and disposal record | stream; actual wet mass; dry fractions; entrained liquid; contamination; internal recycle; shipment/onsite stock; receiver; salinity acceptance; long-term facility scenario | Separate calibrated weighing, representative moisture/composition assay and waste-receiver documentation; reconcile capture with recovered/rejected dust; retain raw actual outbound period stream totals for normalize_period, with onsite deposition stocks separately; no division during collection | kg | each disposal or stock event | one declared representative period including startup/shutdown and stock changes | same site and product scope; shared units assigned transparently | per 1 kg reference flow | calibration; assays; coverage; reconciliation; detection limits; traceable records |
| cp_purge | hot_leach_kcl | purge | external liquid-waste record | purge mass/volume; density; water/salt fractions; destination; recycled amount; initial/final brine stocks | Meter/weigh external liquid shipment and sample composition; reconcile internal treatment and recirculation separately; retain raw external purge period mass totals for normalize_period; no division during collection | kg | each shipment and period balance | one declared representative period including startup/shutdown and stock changes | same site and product scope; shared units assigned transparently | per 1 kg reference flow | calibration; assays; coverage; reconciliation; detection limits; traceable records |
| cp_air | hot_leach_kcl | co2; co; ch4; n2o; no; no2; so2; hcl; formaldehyde; benzene; pm25; pm10; pm_over10; water_air | species and dust measurement | source/stage; species; size interval; stack/fugitive flow; concentration; temperature/pressure; wet/dry/O2-reference basis; hours; detection limit; control status; sampling definition; condensable fraction | Representative outlet stack/species tests with matched exhaust volume and operating coverage; documented fugitive assessment; droplet interference and filterable/condensable definitions; carbon/water reconciliation where valid; retain raw species-specific actual period emitted-mass totals for normalize_period; disjoint size intervals; no division during collection | kg | representative operating modes and period hours | one declared representative period including startup/shutdown and stock changes | same site and product scope; shared units assigned transparently | per 1 kg reference flow | calibration; assays; coverage; reconciliation; detection limits; traceable records |
| cp_water | hot_leach_kcl | water; water_out; chloride; potassium; sodium | water and outfall balance | purchased water mass; recycle/condensate; effluent volume/density/water fraction; temperature; Cl-/K+/Na+ concentration; freshwater receptor; rainfall/runoff; stocks; closure scenario | Calibrated meters, representative flow-weighted outfall samples and ion-specific analysis; state density/temperature and uncertainty; monitor saline residue facilities and attributable long-term releases; retain raw actual period water/ion totals and original physical effluent records for normalize_period; no division during collection; do not duplicate an offsite purge as direct discharge | kg; m3 | continuous flows and representative sampling; stock periods | one declared representative period including startup/shutdown and stock changes | same site and product scope; shared units assigned transparently | per 1 kg reference flow | calibration; assays; coverage; reconciliation; detection limits; traceable records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | For each non-reference exchange, collect X as the raw period total in its stated numerator unit and apply x = X / Q exactly once here; protocols, conversions and load calculations do not divide by Q. Use the complete matched site/route/product-state production pool, including startup/shutdown, failed and zero-output runs, rejects and internal rework, with their actual material, energy, emission and waste burdens. Reconcile opening/closing raw-material, mother-brine, work-in-progress and product stocks together with their carried production burdens; match withdrawals, receipts and returns so prior or carried burdens are neither omitted nor counted twice. Q is the unique positive accepted as-delivered net product mass attributable to that pool after stock and return reconciliation; count a returned and reaccepted net batch only once, and internal rework is not new output. If Q <= 0 or the pool/burden match cannot be demonstrated, retain the raw records and leave the normalized result unavailable. Final reference output is 1 kg; preserve the unallocated physical ledger and apply any burden allocation only to the separate environmental-burden account. | X; Q; cp_product | exchange per 1 kg reference flow | eu-lvic-aaf-2007 |
| electricity_conversion | electricity | E_MJ = 3.6 * E_kWh | E_kWh; cp_energy | E_MJ | eu-lvic-aaf-2007 |
| assay_conversion | kcl_product | m_dry = m_product * (1 - w); m_KCl = m_dry * f_KCl_dry only for a dry-basis assay. Elemental K in KCl = m_KCl * molar_mass(K) / molar_mass(KCl); K2O-equivalent = m_K * molar_mass(K2O) / (2 * molar_mass(K)). Use actual declared assay if other K-bearing impurities exist; no nominal-grade substitution. | m_product; w; f_KCl_dry; cp_product | m_dry; m_KCl; m_K; K2O-equivalent | ks-kalimop-grade |
| ion_load | chloride; potassium; sodium | For each ion, emitted mass = sum of representative concentration (kg/m3 of actual effluent) times matched discharged effluent volume (m3), with compatible dissolved/total definition. Reconcile rainfall, runoff and stocks. | concentration; discharge volume; cp_water | ion mass | eu-mwei-2018 |
| water_volume | water_out | water-component mass = effluent volume * measured effluent density * water mass fraction; water reference volume = water-component mass / justified water density at the declared temperature. Preserve the original total effluent measurement. | effluent volume; effluent density; water fraction; water density; cp_water | water volume | eu-mwei-2018 |
| mineral_balance | hot_leach_kcl | For K, Na and Cl individually: incoming measured component mass + opening stock = product + recovered salt + residues + direct releases + closing stock, with actual impurity speciation and measurement uncertainty. Keep mass/water balances before environmental burden allocation. | cp_mineral; cp_product; cp_residue; cp_purge; cp_air; cp_water | component reconciliation | eu-mwei-2018; eu-lvic-aaf-2007 |
| allocation_account | hot_leach_kcl | Assigned KCl burden = measured KCl-specific burden + justified KCl share * inseparable shared burden; shares sum to one. Physical co-product quantities remain their measured values; dividing burdens by Q does not rescale their mass. | specific/shared burden; causal or price records; Q | allocated KCl burden | eu-ilcd-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Verify physical name/CAS/route/state, constituent mixture and stream destination; UUID identity and provider quantitative basis are separate checks. Unresolved links require a specific named physical stream, assay and later resolution; do not replace ore or wastes with convenient adjacent products. | cp_mineral; cp_residue; cp_purge |
| dq_scope | hot_leach_kcl | Retain actual SKU/site/period and operating modes, initial/final brine stocks and phase submetering. A missing measurement, unsupported emission split or unmatched supplier dataset is pending, not zero or a complete dataset. | cp_product; cp_energy |
| dq_air | cp_air | Distinguish actual species, non-overlapping particle fractions and sampling/condensable definitions; nondetects need detection limits and treatment of uncertainty. Screening excludes sources only with a documented physical/measurement basis. | eccc-potash-2017; epa-ap42-gas |
| dq_source_limits | hot_leach_kcl | K+S diagrams and Canadian practices support physical methods only; do not import their temperatures, sector emission percentages, purity, yield or energy as generic values. LVIC-AAF common audits are used without importing ammonia/NPK recipes. AP42 boiler data require actual combustor applicability and cannot default the direct salt dryer. | ks-thermal-2023; eccc-potash-2017; eu-lvic-aaf-2007; epa-ap42-gas |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_product | kcl_product | Require exactly one reference-linked accepted output and all Section 3 qualifiers, measured ≥60% K2O-equivalent on the declared grade basis, net mass, moisture and granular bulk identity; other physical routes/states cannot be auto-selected. | ks-kalimop-grade; un-cpc3-2025 |
| validate_balance | hot_leach_kcl | Check period/Q alignment, phase handoff equality, K/Na/Cl/water/fuel-carbon reconciliation, stock changes, no duplicate recycle/steam/wastewater or particle outputs, and separate physical versus allocated accounts. Unexplained residuals beyond declared measurement uncertainty are findings, not balancing filler flows. | eu-mwei-2018; eu-lvic-aaf-2007; eu-ilcd-2010 |
| validate_completeness | all inventory rows | Require primary collection, actual supplier/receiver compatibility and conditional applicability evidence for each used exchange. Unresolved UUID, natural-gas volume convention, total-NOx-only data, missing particle speciation, unknown brine composition or omitted long-term residue burdens remain explicit incomplete coverage. No source factor or claimed identity converts these into a passing site dataset. | eccc-potash-2017; eu-mwei-2018; epa-ap42-gas |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared granular KCl supply inventory within this route/grade/site basis after data completeness review |
| excluded_use | Other mineral/chemical products, agricultural-use impact factors, automatic classification-wide coverage, food/pharma purity or supplier substitution without verification |
| required_metadata | reference qualifiers; boundary and period; measured assays/stocks; allocation decision; source scope; supplier and receiver records; actual units/conversions |
| required_quality_disclosure | unresolved identities/backgrounds; measurement coverage and detection limits; physical balance residuals; long-term scenarios; allocation sensitivity and exclusions |
| update_trigger | feed mineralogy/grade, purification or additive route, product grade/state, utility basis, residue destination, monitoring or supplier change |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p165; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification identity and adjacent K2SO4/carnallite boundaries only |
| ks-thermal-2023 | handbook | K+S Compendium July 2023, p48 thermal dissolution diagram; https://www.kpluss.com/.downloads/ir/2023/kpluss-compendium-july-2023.pdf | Thermal KCl separation and mother-brine recycling; no diagram operating defaults |
| ks-kalimop-grade | handbook | K+S KALIMOP GRAN. product information, web snapshot 2026-10-14; https://www.kpluss.com/en-us/our-business-products/agriculture/products/en-kalimop-gran/ | Granular KCl and 60% K2O-equivalent grade existence; not target SKU assay or manufacturing-site proof |
| eccc-potash-2017 | official_guidance | ECCC Code of Practice for the Management of PM2.5 Emissions in the Potash Sector in Canada, September 2017, Sections 2.1.2.6–2.1.2.9 and 3–4, PDF pp15,19,24; https://www.canada.ca/content/dam/eccc/documents/pdf/cepa/20250707-eng.pdf | Drying/compaction/glazing and dust monitoring/control limitations; Canadian physical examples, no emission percentages transferred |
| eu-mwei-2018 | official_guidance | JRC109657, MWEI BREF 2018, Sections 1.3.1.2, 2.1.1.8–2.1.1.9, 4.2.1.3.4.1, PDF pp60,81,278; DOI10.2760/35297; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC109657/jrc109657_mwei_bref_-_for_pubsy_online.pdf | Saline potash-residue dissolution, extractive-waste mass/water balances and aftercare; no universal residue composition |
| eu-lvic-aaf-2007 | official_guidance | EC LVIC-AAF BREF August 2007, scope and Sections 1.4.8/1.5.1, PDF pp27,51,61; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf | Common energy audits, steam/water/CO2 bookkeeping only; ammonia, acid and NPK-specific methods excluded |
| epa-ap42-gas | official_guidance | US EPA AP42 Section 1.4 Natural Gas Combustion, retained edition with page footer 10/26 (October 2026), pp1.4-2–1.4-3; https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | Gas boiler/furnace emission species and technology/measurement scope; no universal factor or dryer recipe |
| eu-ilcd-2010 | official_guidance | ILCD Handbook General guide for LCA Detailed guidance, March 2010, Sections 7.9.2–7.9.3, printed pp255–257/PDF pp275–277; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision, physical causality and market-value fallback with decision-context limitations |
| brazil-potash-dryer-case | handbook | Brazil Potash Autazes Technical Report Summary, 19 April 2024, rotary dryer and scrubber sections, printed pp138 and 144; https://ir.brazilpotash.com/financials/sec-filings/content/0001193125-24-102820/d818742daddexhb.htm | Project-case screening of MgCl2 impurity-related HCl; no transfer of recipe, treatment reagent, capacity or emission factor |
