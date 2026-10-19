---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.potassium-sulphate-sulphate-of-potash
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Mannheim manufacture of bulk powdered potassium sulphate

## 1. Scope and Applicability

This PCR covers bulk, uncoated powdered potassium sulphate fertilizer produced by the Mannheim reaction of refined solid potassium chloride with concentrated sulfuric acid, with fossil pipeline natural gas supplying the separated furnace combustion chamber and water absorption recovering aqueous hydrochloric acid. The representative product is a solid K2SO4 grade at the plant gate, not an NPK mixture or a potassium-nutrient-only flow. `mannheim-patent` supports the two-stage chemistry and gas-fired apparatus; `tess-sop-grade` supports an actual marketed fine-powder SOP state. Neither source supplies a universal recipe, assay, density, yield, operating temperature, emission factor or energy requirement.

Exclude ore/brine extraction of naturally occurring sulfate salts, Hargreaves SO2 conversion, wet metathesis with other sulfate salts, potassium-magnesium double salts, blended multi-nutrient fertilizer, liquid formulated fertilizer, downstream dissolution/fertigation, coated products and separate granulation. Product manufacture here includes cooling and the actual powder finishing operations needed to meet the declared specification; milling/screening inclusion and their electricity/dust are collected, never inferred from a classification label. Oil-fired, biogenic-gas, chemically dosed scrubber and supplied-steam variants require additional route evidence and individually verified exchanges before applying this methodology to that extended scope. The method does not claim full coverage of all SOP manufacturing routes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.potassium-sulphate-sulphate-of-potash |
| classification_refs | CPC 3.0 34632 Potassium sulphate (sulphate of potash); proposed narrower relation for this manufacturing subset (`un-cpc-sop`) |
| covered_products | Uncoated bulk solid powdered K2SO4 fertilizer from the specified gas-fired Mannheim route; actual residual chloride, acid and moisture declared |
| excluded_products | Natural sulfate ore/brine recovery; wet metathesis; double salts; nutrient-K accounting flows; mixtures; separate granulation/coating; aqueous fertilizer and field use |
| representative_product | Accepted bulk powdered SOP, actual SKU and assay to be collected; no manufacturer's composition copied as default |
| production_route | KCl + H2SO4 → KHSO4 + HCl; KHSO4 + KCl → K2SO4 + HCl; separated natural-gas combustion, cooling/powder finishing, aqueous HCl recovery |
| market_state | Plant-gate dry solid powder sold as supplied, including measured residual moisture/impurities; unbagged; aqueous HCl co-product separately accepted |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Bulk powdered potassium sulphate at the plant gate |
| How much | 1 kg accepted net product as supplied |
| How well | Actual SKU, K2SO4 and nutrient assay, moisture, chloride, residual acidity, insolubles and particle distribution; no generic purity target substituted |
| How long or cycle | One declared representative production campaign; no assumed fertilizer-use service life |
| reference_flow_link | `sop` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Potassium sulphate (sulphate of potash) `eb8bf5f1-2c58-4513-9fe6-3e7d092564f8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual SKU; solid uncoated powder; K2SO4 assay and assay basis; K or K2O-equivalent declaration; measured moisture; chloride; residual free acid; insolubles; particle distribution; Mannheim gas-fired route; plant and campaign; bulk gate; net product mass excluding packaging; acid recovery and co-product acceptance/concentration; utility-provider quantity bases; allocation and treatment fate |

The same qualifiers must appear in the concrete data package. Identity verification does not prove an actual batch, supplier dataset, compatibility of its reference amount or completeness of measurements. Product mass is neither dry pure K2SO4 mass nor K/K2O mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | P is the calibrated net mass of accepted SOP output for the same campaign, excluding packaging and rejected product; record inventories and transfers so output and inputs cover the same production. Normalize each exchange by P to per 1 kg reference flow using cp_output. |
| `solution_basis` | sulfuric; hcl_product; acidic_purge | Mass | kg | Keep whole solution mass, assay mass fraction and carrier water distinct. Active substance mass equals measured solution mass multiplied by its measured mass fraction; no default acid concentration. Acid-product mass is not multiplied by an allocation fraction. |
| `solid_input_volume` | kcl | Volume | m3 | The KCl UUID reference is Volume, not Mass. Require paired measured mass/volume, declared bulk or solid-volume convention, packing and moisture, and supplier background reference definition. Convert weighed mass only using the measured compatible density; unknown convention leaves the input quantity/provider link incomplete. |
| `gas_volume` | gas | Volume | m3 | Convert the calibrated gas meter to the supplier reference using recorded absolute pressure, temperature, moisture, composition and compressibility. Secondary mass coefficients are not density; unknown reference state leaves the provider link incomplete. Retain measured calorific value with NCV/GCV basis for energy QA. |
| `electric_energy` | electricity | Net calorific value | MJ | The selected electricity property is Net calorific value. 1 kWh = 3.6 MJ; keep the actual 1–35 kV consumption-mix interface and consistent transmission/loss boundary. |
| `species_mass` | hcl_air; h2so4_air; no_air; no2_air; chloride_water; sulfate_water | Mass | kg | Report species mass and original laboratory basis. NOx-as-NO2, elemental N/S, acid equivalent and ionic mass require explicit chemical conversion/speciation; unknown conversion is a data gap, not zero. |
| `water_basis` | process_water; cooling_water; water_vapor_air; water_liquid | Mass or Volume as selected | kg or m3 as selected | Supplied water and vapour use Mass; liquid return uses Volume. Convert metered water volume to mass only with measured density/temperature; distinguish product-water purchases, natural abstraction, evaporation and environmental return. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Refined solid KCl and concentrated industrial sulfuric solution received; gas and electricity at verified supply interfaces; water supply conditions recorded |
| starting_condition_role | Foreground feed/utility receipt, not extraction or manufacture of those inputs |
| product_classification_scope | Manufactured SOP subset of CPC 3.0 34632; classification does not establish route or identity |
| recursive_input_rule | Recycled SOP/dust inside the consolidated plant is an internal measured loop. Purchased SOP is not newly manufactured output; segregate it and disclose its separate verified upstream origin, otherwise this reaction dataset is inapplicable. |
| upstream_dataset_requirement | Compatible supplier production and inbound transport for each external input, including actual concentration, treatment, voltage, volume state and water source; unresolved provider links are disclosed and prevent a complete cradle-to-gate claim |
| disclosure | One plant/campaign, actual stages, recycling/stock flows, emission control and water interfaces; physical balances kept separately from allocated burdens; no collection quantity fabricated |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_reaction` | mannheim | Include receipt/storage, feed preparation/dosing, the two chemical stages, separated combustion, actual cooling/powder finishing, capture/absorption of HCl, water-only gas treatment, bulk storage and all attributable utilities, startup/shutdown and maintenance losses. Common BAT and a patent design are scope evidence, not generic operating defaults. | `mannheim-patent`; `lvic-aaf`; `cww-bref` |
| `boundary_internal` | mannheim | Keep reaction-gas/absorption, powder finishing and internal cooling in one foreground unit with separate stage meters. Retain same-quantity internal transfer endpoints and recycled dust/acid/water logs; only net boundary crossings are inventory exchanges. This avoids assigning the reference UUID to multiple intermediate outputs. | `mannheim-patent`; `ham-recovery`; `cww-bref` |
| `boundary_waste_water` | mannheim | Distinguish accepted aqueous HCl, internal recovered liquid, exported acidic waste and actual environmental discharge. Include waste treatment links once. For direct discharge collect receiving medium, species loads, temperature and flow; external treatment is not immediate freshwater emission. A historical closed-cooler case does not prove no purge at another plant. | `ham-recovery`; `cww-bref` |
| `boundary_complete` | mannheim | Maintain source-based waste-gas/water inventories; add each additional confirmed reagent, emitted species, packaging component or waste as its own verified atomic exchange. The listed conditional rows neither prescribe positive emissions nor establish exhaustive site completeness. Excluded capital equipment, downstream transport/use/end-of-life and any material cutoff must be disclosed with a study-specific relevance assessment; hazardous/material omissions are not justified by a fixed cutoff percentage. | `cww-bref`; `ilcd-allocation` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `mannheim` | Integrated Mannheim conversion, bulk powder finishing and aqueous HCl recovery | required | Specified gas-fired route and plant-gate product | foreground production with stage-resolved physical records | 1 kg accepted SOP reference flow; HCl solution output separately measured |

### Process: Integrated Mannheim production (`mannheim`)

The physical stage map is feed preparation → KHSO4 formation → heated K2SO4 conversion → actual cooling/powder finishing → accepted bulk SOP. Reaction HCl → cooling/water absorption → accepted aqueous HCl; residual gas → controls → actual air emissions. The separated natural-gas combustion chamber has its own flue-gas outlet. Cooling circuits, internal recycle and any purge retain explicit measured endpoints. The allocated environmental-burden account is a distinct calculation, not a replacement for this material map.

#### Inputs

##### Product flows

###### Solid potassium chloride feed (`kcl`)

Record refined solid KCl entering the furnace preparation train, not ore or potassium nutrient mass. Retain weighed mass, assay, moisture and paired measured volume. The selected identity has a Volume reference; bulk/crystal volume and packing must agree with the provider before exchange quantities can be linked. Reject a density inferred from database secondary properties.

- Selected flow: Potassium chloride `c0f36a80-f6a0-4926-9a92-9c80f5fcb662`
- Flow property / unit: Volume / m3
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `mannheim-patent`

###### Sulfuric acid solution feed (`sulfuric`)

Record the delivered industrial solution only when its measured concentration is within the selected 93–98% grade. Whole solution mass and active H2SO4 mass are separate fields; use the measured assay, not a nominal purity. The source CPC34231 title includes sulfuric acid and does not establish nitric acid identity. Its explanatory comment incorrectly describes manufacture by oxidation of SO3; do not infer a manufacturing mechanism or quantity from that sentence. Actual supplier grade and quantity-basis compatibility remain separate checks.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `mannheim-patent`

###### Pipeline natural gas for furnace heating (`gas`)

Meter fossil pipeline gas consumed by the separated combustion chamber. Preserve actual and supplier-reference temperature, absolute pressure, moisture, composition and compressibility factor. The Volume reference does not supply a density or standard-state convention; no default m3-to-kg or calorific-value conversion is allowed.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `mannheim-patent`; `epa-gas`

###### Purchased medium-voltage electricity (`electricity`)

Record customer-side CN grid-average electricity only for an actual 1–35 kV supply interface. The native locationOfSupply is CN; another geography requires a separately verified compatible flow/provider. Meter fuel handling, furnace drives, fans, cooling, acid recovery and powder finishing separately, then aggregate without counting transformer losses twice. Net calorific value is the database energy property; electricity measured in kWh is converted to MJ, not interpreted as a combustible material. Other voltages require a verified replacement identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `lvic-aaf`; `mannheim-patent`

###### Water for acid absorption and water-only scrubbing (`process_water`)

Record supplied water incorporated into aqueous HCl or used in water-only gas absorption/cleaning. Measure fresh inflow, recovered water and stock changes separately; recycled liquid inside the unit is not another purchased input. Declare treatment, dissolved salts and supplier basis.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ham-recovery`; `cww-bref`

###### Cooling-water supply or makeup (`cooling_water`)

Conditional on water-cooled equipment. Record water crossing the foreground boundary, including makeup, rather than repeated circulation throughput. Reconcile inlet/return temperature, makeup, blowdown, evaporation and leaks with the cooling design. A dry cooler has no water input unless site evidence shows one.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ham-recovery`; `lvic-aaf`

##### Waste flows

No exchange of this direction/type is declared for the scoped route; add actual identified exchanges individually.

##### Elementary flows

No exchange of this direction/type is declared for the scoped route; add actual identified exchanges individually.

#### Outputs

##### Product flows

###### Accepted bulk powdered potassium sulphate (`sop`)

The only reference-product output. Record 1 kg accepted net product, as supplied, excluding containers and off-spec stocks. Record water, K2SO4 assay, K/K2O reporting basis, chloride, residual acidity, insoluble material and size distribution; these are not assumed zero. Powder transfer between cooling, milling, screening and storage stays internal to this consolidated unit.

- Selected flow: Potassium sulphate (sulphate of potash) `eb8bf5f1-2c58-4513-9fe6-3e7d092564f8`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `tess-sop-grade`; `mannheim-patent`

###### Recovered aqueous hydrochloric acid co-product (`hcl_product`)

Record accepted solution crossing the plant boundary with actual HCl mass fraction and customer acceptance or documented captive use. The product UUID identifies aqueous solution, not pure gaseous HCl. Carrier water remains in solution mass; HCl equivalent is tracked separately in the chlorine balance. Rejected acid is not saleable output and needs its own waste classification and treatment.

- Selected flow: Hydrochloric Acid `a118a682-1600-4855-b959-c78777b75ee8`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `mannheim-patent`; `ham-recovery`

##### Waste flows

###### Acidic chloride-sulfate aqueous purge for external treatment (`acidic_purge`)

Conditional on contaminated absorber/cooling/cleaning purge exported to a handler. Measure actual wet solution mass, pH, chloride, sulfate, acidity and suspended salt; retain receiver and treatment acceptance. Keep UUID blank until composition and route match one real Waste flow. Export is a technosphere waste transfer, not direct water emission. Internal acid recovery is not waste export.

- Selected flow: Acidic chloride-sulfate aqueous purge
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ham-recovery`; `cww-bref`

###### Captured potassium-sulphate dust sent to disposal (`sop_dust`)

Conditional on captured inorganic salt dust that cannot be returned to accepted production and is exported. Collect weighed dry solids, moisture, residual KCl/KHSO4/H2SO4 and receiver conditions. Keep UUID blank; feed-grade grinding dust is incompatible. Internal reuse is recorded in the physical stage ledger and excluded from this exported-waste row.

- Selected flow: Captured inorganic potassium-sulphate waste dust
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `cww-bref`; `tess-sop-grade`

##### Elementary flows

###### Uncaptured hydrogen chloride (`hcl_air`)

Measure residual HCl from absorption vents, acid storage and any furnace leakage reaching outdoor air; distinguish captured acid product and dissolved chloride.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `mannheim-patent`; `ham-recovery`; `cww-bref`

###### Sulfuric acid aerosol (`h2so4_air`)

Conditional on measured H2SO4 aerosol released outdoors from acid feeding, handling or vents. Report kg H2SO4, not SO2/SO3 equivalent or a mist-waste product. Coordinate speciation with particle-size totals to prevent duplicate aerosol mass.

- Selected flow: sulphuric acid `d1e249b9-59b4-45c4-b1cb-ad89a2dd167b`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `cww-bref`

###### Fossil carbon dioxide (`co2_fossil`)

Use measured fossil fuel carbon and a reconciled carbon balance or compatible stack measurements, including startup/shutdown. The KCl/H2SO4 reaction contains no carbon; it does not justify assigning all CO2 to the sulfate reaction.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon`
- Sources: `epa-gas`; `lvic-aaf`

###### Fossil methane slip (`ch4_fossil`)

Measure unburned methane and gas-system fugitive loss inside the plant boundary; do not copy upstream provider leakage. Exclude delayed-emission correction identities and keep any biogenic methane separate if the scoped fuel changes.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas`; `cww-bref`

###### Nitrous oxide from combustion (`n2o_air`)

Quantify N2O independently from NO and NO2. No boiler emission factor is an automatic Mannheim-furnace amount; retain site measurements or a justified furnace-specific method.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas`; `mannheim-patent`

###### Fossil carbon monoxide (`co_fossil`)

Measure CO mass released by fossil-gas combustion, including abnormal-operation coverage. Use chemical mass, not carbon equivalent without explicit conversion.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas`; `cww-bref`

###### Nitrogen monoxide (`no_air`)

Report kg NO only from measured or justified NO speciation. An aggregate NOx-as-NO2 report cannot be assigned here without a defensible split and molar conversion.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `mannheim-patent`; `cww-bref`

###### Nitrogen dioxide (`no2_air`)

Report kg NO2 separately from NO; exclude N2O. Keep aggregate NOx as a monitoring QA quantity and never count it again alongside the species exchanges.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `mannheim-patent`; `cww-bref`

###### Sulfur dioxide (`so2_air`)

Conditional on SO2 in fuel combustion or other confirmed vents. Collect actual fuel sulfur, sulfate/acid transformations and measured release; sulfuric feed mass is not itself SO2 emission.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas`; `cww-bref`

###### Particles up to PM2.5 (`pm25_air`)

Measure the outdoor released non-speciated particle mass in the smallest interval. The physical ledger retains total size-class mass; a separately reported H2SO4 aerosol portion is partitioned out only with measured compatible size/speciation evidence.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `cww-bref`; `epa-gas`

###### Particles above PM2.5 and up to PM10 (`pm25_10_air`)

Use the non-overlapping 2.5–10 micrometre residual fraction, obtained from compatible same-stream size measurements; do not add a cumulative PM10 total to PM2.5.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `cww-bref`

###### Particles above PM10 (`pmover10_air`)

Record the distinct coarse outdoor fraction from powder handling and any relevant combustion/vent source after capture. Collected dust, internal recycle and emitted coarse particles are different destinations.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `cww-bref`; `tess-sop-grade`

###### Benzene from gas combustion (`benzene_air`)

Conditional on benzene detected or supported by site-specific fuel/combustion evidence. Report the species mass once; a total VOC measurement is QA evidence, not another exchange over the same mass.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas`; `cww-bref`

###### Formaldehyde from gas combustion (`formaldehyde_air`)

Conditional on formaldehyde detected or supported by actual combustion evidence. Other identified organic species need separate atomic rows and verified identities; these two VOC examples do not close the species inventory.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas`; `cww-bref`

###### Water returned to outdoor air (`water_vapor_air`)

Measure evaporation, water entrainment and combustion-generated vapour separately in the water ledger. Exclude ambient inlet-air moisture from attributed net return. Retain water origin and do not assign fuel-derived combustion water as freshwater consumption.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `lvic-aaf`; `cww-bref`

###### Liquid water returned to fresh water (`water_liquid`)

Conditional on a direct liquid return to a verified fresh-water receiving body. Record m3 returned after treatment or clean cooling discharge; water in exported wastewater is not a direct emission here. Characterise temperature and dissolved constituents separately.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume / m3
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_discharge`
- Sources: `cww-bref`

###### Chloride ion to fresh water (`chloride_water`)

Conditional on verified direct freshwater discharge. Integrate measured dissolved chloride ion concentration with discharge volume, not HCl solution mass, NaCl mass or total dissolved solids. External-treatment transfers are excluded.

- Selected flow: chloride `08a91e70-3ddc-11dd-9508-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_discharge`
- Sources: `cww-bref`

###### Sulfate ion to fresh water (`sulfate_water`)

Conditional on verified direct freshwater discharge. Report sulfate ion mass from speciation/analysis; elemental S, sulfuric acid and neutral-salt aggregates are different quantities. Do not duplicate an explicitly speciated salt and its ions.

- Selected flow: sulfate `fe0acd60-3ddc-11dd-ac59-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record actual boundary quantity per 1 kg reference flow under this row collection protocol; conditional presence has no default positive amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_discharge`
- Sources: `cww-bref`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_physical_ledger` | mannheim | Preserve unallocated measured KCl/acid/water/carbon balances, full SOP output P and full accepted HCl solution output H. Never multiply physical product/co-product masses, internal links or measured capture efficiency by a burden share. Residual waste has a documented receiver/treatment; neutralising acid for disposal does not turn it into a saleable co-product. | `mannheim-patent`; `ham-recovery`; `ilcd-allocation` |
| `allocation_hierarchy` | mannheim | Declare attributional study goal, functions and treatment of multifunctionality. First subdivide or assign independently metered operations: SOP finishing to SOP, acid-only concentration/storage to acid, shared furnace and capture functions identified. Apply physical causal relationships to residual shared burdens only with evidence that the selected property determines those burdens; stoichiometry or wet acid mass alone is not that evidence. If these relationships cannot be justified, use the economic fallback for accepted positive-value co-products, with sensitivity. System expansion needs a separately justified goal, actual substitutable acid grade/provider and disclosed scenario; never combine substitution credits and allocation for the same coproduct. | `ilcd-allocation` |
| `allocation_economic` | mannheim | For remaining inseparable shared burden B, use a_S = V_S/(V_S+V_H), V_S = P times p_S, V_H = H times p_H, and a_H = 1-a_S. P and H are accepted as-supplied physical quantities; net plant-gate prices p_S and p_H are per kg of those exact grades at the same market/time/currency, weighted over actual sales. Acid carrier water and concentration must match its quoted grade; artificial dilution must not alter value. Retain both allocated ledgers, reconcile their sum to B and disclose price sensitivity. Unknown prices, zero/negative total value or disposal/captive-use cases require explicit methodological review, not a default split or zero acid burden. | `ilcd-allocation`; `ham-recovery` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

These protocols are requirements for future site data production; no current factory records or quantitative defaults are asserted. Each row uses the same campaign and denominator P. Keep physical and allocated quantities in separately labelled accounts.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | mannheim | SOP and accepted HCl solution | weighing and laboratory records | accepted SOP net mass P; returns/reacceptance; opening/closing finished and WIP stocks; production history and carried inventory burdens; lot/SKU; moisture; assay basis; chloride/acidity/insolubles; HCl solution H and mass fraction; receiver acceptance | Calibrated scales or reconciled mass-flow meters, lot sampling and laboratory assay; track rejected stocks and internal transfers separately; reporting procedure: Divide campaign boundary quantities by P kg accepted SOP output; report per 1 kg reference flow; H remains full solution quantity before allocation | kg; mass fraction | Each lot and transfer | Full representative campaign, startup/shutdown and off-spec periods retained | Same plant and product route | per 1 kg reference flow | Scale calibration; assay method/results; stock reconciliation; receiver acceptance |
| `cp_feed` | mannheim | KCl and sulfuric solution | receipt, dosing and laboratory records | mass; measured volume; lot; supplier; assay; moisture; acid concentration; KCl bulk/solid-volume convention and packing; feed/recycle stocks | Calibrated weighing/dosing and paired volume measurements; representative composition sampling; reconcile actual consumed receipts/stocks with stage transfers; reporting procedure: Sum external feed consumed with stock reconciliation; convert only on measured compatible property basis; divide by P; per 1 kg reference flow | kg; m3; mass fraction | Each receipt/batch; dosing logs continuous where available | Same campaign as cp_output | Same plant feed receipt/dosing interfaces | per 1 kg reference flow | Calibration; density/packing method; certificate of analysis; supplier reference-basis confirmation |
| `cp_utilities` | mannheim | gas and electricity | submeter and supplier records | actual meter readings; gas T/P/wet-dry/composition/Z; supplier reference state; NCV/GCV; voltage; loss boundary; stage loads; hours/startup | Calibrated stage submetering; supplier bills and actual gas composition/calorimetry; reconcile to plant master meters and attributable operating records; reporting procedure: Sum attributable supplied quantities once; convert to verified supplier basis; divide by P; per 1 kg reference flow | m3; kWh; MJ | Continuous or shift readings and billing reconciliation | Complete campaign including startup, shutdown and controls | Furnace, auxiliaries, acid recovery and powder stages | per 1 kg reference flow | Meter calibration; supplier specification; reconciliation and attribution evidence |
| `cp_water` | mannheim | supplied water, cooling and air return | meter and water/heat balance records | inflow/makeup; circulation separately; return; purge; evaporation; leak; water incorporated in acid; inlet moisture; temperatures; density; water origin | Calibrated inlet/outlet meters and validated evaporation/heat-water balance; partition absorption and cooling, and combustion-generated water; reporting procedure: Sum net external supplies/returns by identity and origin; exclude internal circulation; divide by P; per 1 kg reference flow | kg; m3; temperature | Shift/continuous plus each purge | Full matched campaign | Absorbers, cooling, cleaning and their verified supply/discharge interfaces | per 1 kg reference flow | Calibration; density; balance residual and uncertainty; cooling design |
| `cp_air` | mannheim | each emitted species and particle interval | source testing, monitoring and loss records | outlet/source; actual gas flow; concentrations; species/CAS; T/P; dry/wet; oxygen basis; time/load; HCl/H2SO4; NO/NO2 split; N2O; PM cumulative sizes and chemical partition; VOC speciation; fugitives | Compatible source tests/continuous monitors and documented representative campaigns; integrate concentrations and gas volumes on the same reference state; speciate aggregate reports before linking; reporting procedure: Sum each compatible pollutant load once after control; partition non-overlapping sizes/chemical mass; divide by P; per 1 kg reference flow | kg species; mg/m3; m3; time | Continuous where installed; otherwise representative tests covering load, controls and abnormal periods | Same campaign; include diffuse and startup/shutdown scope | Each reaction, absorption, combustion and powder outlet; outdoor releases | per 1 kg reference flow | Original monitoring reports, methods/calibration, temporal representativeness, detection limits, conversion evidence |
| `cp_carbon` | mannheim | fossil CO2 and carbon closure | gas composition and carbon account | carbon in gas; carbon in emitted CO2/CO/CH4/speciated VOC; stocks; unburned carbon; fossil/biogenic origins | Calibrated gas delivery with actual composition; independently reconcile measured combustion emissions and any other carbon-bearing input; reporting procedure: Reconcile carbon before burden allocation, derive compatible CO2 mass where necessary and divide by P; per 1 kg reference flow | kg C; kg species; m3 | Campaign with operating-period reconciliation | Same campaign as cp_output | Actual fossil-gas boundary and any justified extension | per 1 kg reference flow | Gas analysis; measurement uncertainty; closure residual; no default oxidation fraction |
| `cp_waste` | mannheim | acidic purge and captured SOP dust | weighing, assay and transfer records | actual amount; wet/dry; composition; pH; chloride/sulfate/acidity; contaminants; internal return; receiver; treatment route; waste acceptance | Weigh/sampling each dispatch; meter/assay liquids; reconcile recovered material against stocks and disposal receipts; reporting procedure: Sum actual exported waste once; exclude internal recovery; divide by P; per 1 kg reference flow | kg; mass fraction | Each transfer | Full campaign including maintenance and rejects | Actual plant waste outlets and named handlers | per 1 kg reference flow | Weighbridge/handler receipt; composition; provider treatment scope; unresolved identity disclosure |
| `cp_discharge` | mannheim | liquid water, chloride and sulfate to fresh water | outfall metering and laboratory records | outfall/receiver medium; liquid volume; temperature; density; chloride/sulfate concentrations; other actual constituents; treatment scope; discharge periods | Meter actual direct fresh-water return and obtain compatible flow-weighted laboratory samples; external waste transfers excluded; reporting procedure: Integrate each measured species and water volume at outfall; divide by P; per 1 kg reference flow | m3; mg/L; kg species | Matched samples/flows, continuous flow where possible, each abnormal discharge | Same representative campaign | Verified environmental outfall only | per 1 kg reference flow | Receiving-medium evidence; original analysis; calibration; treatment boundary and completeness |
| `cp_allocation` | mannheim | co-product burden attribution | stage submeter, function and sales records | accepted grades; P; H; prices by grade; period/currency; positive-value receipts; functions; independent stage burdens; causal evidence | Reconcile accepted products and stage meters to actual matched sales/captive functions; assess allocation hierarchy and justified alternatives; reporting procedure: Preserve physical per 1 kg reference flow ledger; assign only environmental burdens using declared hierarchy, exact-grade values and sensitivity | kg; currency/kg; actual burden units | Each sale/lot and campaign aggregation | Same physical campaign with declared market-price coverage | Same plant-gate grades and actual co-product receiver | per 1 kg reference flow | Price receipts; functional acceptance; stage evidence; conservation of allocated burdens |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalization` | all inventory rows | a_j = X_j/P; sum raw boundary quantities X_j of each exchange over the complete same route, supplied grade and campaign, including attributable failed/zero-output intervals, startup/shutdown, cleaning and rework, then divide once. P must be positive accepted net SOP kg from cp_output, credited once after returns/reacceptance, finished-stock and WIP reconciliation. Preserve production history and carried stock/WIP burdens so attribution covers the same accepted output; burden adjustments do not erase raw physical exchanges or scale HCl output. Do not average successful-interval ratios or divide already normalized per-kg values again; protocol reporting steps state this final basis. If P is zero, retain totals and disclose no unit result rather than divide or omit burdens. Keep each verified numerator property/unit; sop output is 1 kg. | cp_output; linked row protocol; actual quantities | Per 1 kg reference flow inventory with original numerator unit | `lvic-aaf`; `cww-bref` |
| `substance_accounts` | sulfuric; hcl_product; acidic_purge; kcl; sop | m_substance = m_solution_or_product times measured mass fraction on the same wet/dry basis; m_water is separately measured/derived with full composition reconciliation. Retain K, Cl and S balances: 2KCl + H2SO4 → K2SO4 + 2HCl is a reaction-account identity, not measured consumption/yield. Track impurities, unconverted KCl/KHSO4, free acid, stocks, dust and purge; require actual route-compatible elemental assays. | cp_feed; cp_output; cp_waste; cp_water | Unallocated physical material/element accounts and residual uncertainty | `mannheim-patent`; `cww-bref` |
| `meter_conversion` | gas; kcl; electricity; process_water; cooling_water | Use compatible measured density for mass-volume conversions; gas V_ref = V_meter times (p_meter/p_ref) times (T_ref/T_meter) times (Z_ref/Z_meter), with absolute p and kelvin T and separately reconciled moisture/composition. Electricity MJ = 3.6 times measured kWh. A conversion is unavailable if its supplier reference convention is unknown. | cp_feed; cp_utilities; cp_water; provider definitions | Supplier-compatible exchange quantities and independent energy QA | `lvic-aaf` |
| `air_loads` | hcl_air; h2so4_air; ch4_fossil; n2o_air; co_fossil; no_air; no2_air; so2_air; pm25_air; pm25_10_air; pmover10_air; benzene_air; formaldehyde_air | L_i = sum(C_i,k times V_k times 10^-6) for mg/m3 and matched m3. Correct gas T/P, wet/dry and oxygen reference consistently before integration. PM2.5–10 = compatible cumulative PM10 minus PM2.5; >PM10 = compatible total minus PM10. Subtract identified chemical-aerosol portions only within measured matching size bins; retain physical totals and partition uncertainty. Unknown speciation/size splits remain unresolved. | cp_air | kg of each non-duplicated species/particle interval | `cww-bref`; `epa-gas` |
| `carbon_account` | co2_fossil | Reconciled emitted CO2 mass = accounted emitted fossil carbon in CO2 times molecular mass CO2/atomic mass C; deduct measured carbon in CO/CH4/other species and stocks from a fuel-carbon balance, or use a compatible direct CO2 measurement once. No boiler oxidation default. | cp_carbon; cp_air | Fossil CO2 and physical carbon closure | `epa-gas`; `lvic-aaf` |
| `water_loads` | chloride_water; sulfate_water; water_liquid; water_vapor_air | Dissolved load kg = sum(concentration mg/L times matched discharge m3 times 10^-3). Liquid water is the measured returned volume; vapour is actual attributed net water return, with combustion-water origin retained. Keep exported wastewater and its treatment emissions in the receiving system once. | cp_discharge; cp_water; cp_waste | Water-return quantities and dissolved-ion loads with explicit receiver | `cww-bref`; `ham-recovery` |
| `burden_allocation` | all inventory rows | Keep physical X_j and product outputs intact. For attributable burden after stage subdivision apply the evidenced physical share or economic share in allocation_economic; SOP burden = SOP-only burden + a_S times shared burden; acid ledger receives its own assigned burden plus a_H times shared burden. Reconcile both accounts to total and normalize the SOP account by P. | cp_allocation; cp_output; stage burdens | Allocated environmental-burden account distinct from the physical exchange ledger | `ilcd-allocation` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope` | all inventory rows | Verify actual route, material states, assayed grades and receivers; conditional absence requires site evidence. Record each additional actual species/material independently. | Plant diagram; SKU/assay; stream inventory and original source applicability |
| `dq_basis` | all inventory rows | P, collection period and aggregation must match. Preserve actual supplier quantity conventions and distinguish verified identity from a compatible complete provider dataset. | Meter/scale calibration; stocks; original provider/reference-unit definition |
| `dq_balances` | mannheim | Close unallocated K/Cl/S, water and fossil-carbon accounts with documented residuals, measurement uncertainty and recovery/stock terms; a deficit is investigated, not filled with invented yields. | cp_feed; cp_output; cp_water; cp_waste; cp_carbon |
| `dq_emissions` | all environmental outputs | Actual compartment/species/size and monitoring coverage must be justified; aggregate NOx, VOC or PM evidence does not automatically identify exact atomic quantities. Below detection retains limit/method, not an unexplained zero. | cp_air; cp_discharge; cww-bref |
| `dq_sources` | all rules | Preserve original evidence limitations. Historical plant cases, patent operating parameters and commercial grade properties are not universal factors or survey ranges. | Source edition/pages and scope; actual site collection protocols |
| `dq_links` | kcl; gas; sulfuric; acidic_purge; sop_dust | Resolve KCl volume convention, gas reference state, acid-grade/provider concentration and source explanatory-comment defect, and compatible waste identity/treatment before claiming a complete linked data package. | Provider clarification; actual measurement; waste acceptance |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | sop | Require exactly one final reference output of 1 kg accepted as-supplied SOP, same identity and denominator in both languages; exclude packaging, off-spec stocks and internal transfers. Require all category qualifiers. | `tess-sop-grade`; `mannheim-patent` |
| `validate_balances` | mannheim | Verify measured unallocated material, water and carbon balances and matching internal links before allocation; investigate residuals with uncertainty. Do not enforce ideal reaction yield, pure product, universal consumption or single-plant emission performance as a default. | `mannheim-patent`; `lvic-aaf`; `cww-bref` |
| `validate_atomic` | all inventory rows | Require one physical exchange per row, exact species/material/medium and verified property/unit chain for adopted UUIDs; no substituted feed-grade dust, organic saline wastewater, correction flow, overlapping particle ranges or duplicate ionic/speciated totals. Blank waste UUIDs are explicit unresolved identity gaps. | `cww-bref` |
| `validate_quantity_links` | all inventory rows | Normalize physical quantities consistently by P; require supplier-basis compatibility for KCl volume, natural-gas state, electricity voltage/losses, acid concentration and water definitions. A name match or mass-to-volume factor without an actual compatible measurement/provider basis does not close the link. | `lvic-aaf`; `cww-bref` |
| `validate_allocation` | mannheim | Separate physical outputs from allocated burden; justify hierarchy and exact-grade values/causality, conservation and sensitivity. No arbitrary mass split, fabricated price, negative-value fallback or duplicate substitution credit. | `ilcd-allocation` |
| `validate_completeness` | mannheim | Disclose measurements performed, missing identities/providers/speciation, included/excluded scope, conditional absence and unresolved uncertainty. A complete dataset claim fails until every relevant exchange, fate and measurement is resolved; methodology authoring does not certify a collected industrial dataset. | `cww-bref`; `ilcd-allocation` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific attributional foreground process dataset for specified Mannheim bulk powder, with separately retained physical and co-product burden accounts |
| downstream_use | Link compatible SOP manufacture to upstream supply and declared downstream fertilizer use; use actual mass/assay, not a nutrient-only substitution |
| allowed_use | Selected gas-fired solid-powder route and exact declared plant/grade/campaign, with transparent provider/identity completeness |
| excluded_use | Natural sulfate recovery, wet metathesis, double salts, mixtures, coatings, granulation, liquid formulation, generic fertilizer efficacy or all-route SOP comparison without additional methodology |
| required_metadata | All reference qualifiers; full stage map; supplier quantity bases; accepted HCl grade/function/amount; co-product allocation; emissions/receiver compartments; waste routes; time/geography; sources and calibration |
| required_quality_disclosure | Actual measurement/estimate coverage; unresolved identities and providers; assay/stock/balance uncertainty; price/speciation sensitivity; environmental and technology cutoffs; reviewed methodology state separate from dataset quality |
| update_trigger | Route/fuel, grade, coating/granulation, supplier quantity convention, gas state, utility voltage, acid recovery/use, controls/waste fate or monitoring changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-sop` | official_guidance | UNSD CPC Version 3.0, code 34632, [official detail](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/34632) | Official product label/hierarchy only; no manufacturing route or PCR identity approval |
| `mannheim-patent` | literature | Tessenderlo Group NV, EP3680217A1, 15 July 2020, pp. 1–5, paragraphs 0002, 0006–0013, 0030, 0045, 0053–0061; [original patent](https://patentimages.storage.googleapis.com/1e/0d/d5/f1696137d404f9/EP3680217A1.pdf) | Reaction stages, separate combustion, HCl co-product, natural-gas example, NO/NO2 distinction; patent performance/recipe values excluded as defaults |
| `tess-sop-grade` | literature | Tessenderlo Kerley, SoluPotasse sell sheet, ©2025, pp. 1–2, [producer original](https://www.tessenderlokerley.com/sites/tg_kerley/files/files/2025-04/solupotasse-sell-sheet-digital.pdf) | Actual dry fine-powder commercial state and need to distinguish nutrient, product and loose/struck bulk-density bases; one SKU, no generic numerical properties adopted |
| `ham-recovery` | literature | Alfa Laval, Efficient DIABON plate heat exchangers give Belgium fertilizer plant license to operate, historical Ham plant case (equipment since 2011; page retrieved 2026-10-14), sections A valuable by-product, DIABON plate heat exchangers and Mission accomplished; [supplier original](https://www.alfalaval.us/media/stories/fertilizers/efficient-diabon-plate-heat-exchangers-give-belgium-fertilizer-plant-license-to-operate/) | Water absorption, aqueous acid cooling/product versus contaminated purge; case-specific equipment/zero-waste claims not transferred |
| `lvic-aaf` | official_guidance | European Commission, LVIC–AAF BREF, August 2007, Scope and §§1.4.8, 1.5.1 (PDF pp. 27, 51, 61; printed xxv, 23, 33), [official original](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf?download=1) | Common fertilizer-site energy audits and physical water/CO2 accounts; no ammonia/NPK recipe, boiler or steam quantity applied to SOP |
| `cww-bref` | official_guidance | European Commission, Common Waste Water and Waste Gas Treatment/Management Systems in the Chemical Sector BREF, 2016, chapter 4 BAT 2–5, 7–11 (PDF pp. 573–574, 576–578; printed 543–544, 546–548), [official original](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/CWW_Bref_2016_published.pdf) | Chemical stream inventories, actual species/concentration/flow, water interfaces, treatment and monitoring; no site emission default |
| `epa-gas` | official_guidance | US EPA, AP-42 §1.4 Natural Gas Combustion, hosted PDF retrieved 2026-10-14 with page footers 10/26, disclaimer and §1.4.3, PDF pp. 1–3; [official original](https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf) | Combustion species screening and source-testing limitations; boiler factors, fuel composition, heating value and oxidation assumptions are not Mannheim quantities |
| `ilcd-allocation` | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA, Detailed guidance, first edition March 2010, §7.9.3 (PDF pp. 277, 283, 286–287; printed 257, 263, 266–267), [official original](https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf) | Declared-goal multifunctionality, subdivision, demonstrated physical causality and economic fallback; no default SOP/HCl burden split |
