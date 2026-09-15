---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-of-mammals-fresh-or-chilled
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other meat of mammals, fresh or chilled

## 1. Scope and Applicability

This PCR applies to fresh or chilled meat of mammals that falls within CPC 3.0 subclass 21119 and is not classified as cattle, buffalo, pig, rabbit or hare, sheep, goat, camel or camelid, horse, or other equine meat. Every foreground data package shall name one mammal species, the anatomical cut, bone status, and whether the product is fresh or chilled. The phrase "other mammal meat" is not an acceptable undeclared material identity.

The representative route is boneless red deer (`Cervus elaphus`) primal or retail cuts, fresh or chilled and never frozen. The foreground boundary begins when a post-mortem-inspected deer carcass or deer primal cut is handed over from slaughter or game handling to the cutting/packing operation. It covers receipt, identity and condition inspection, grading, trimming and cutting, product washing only when actually performed, chilling and refrigerated holding, packaging, hygiene and sanitation, and factory-gate dispatch. Animal husbandry, hunting or capture, transport of live animals, killing, dressing, evisceration, hide removal, and post-mortem inspection are excluded; their burdens shall arrive in the upstream dataset for the accepted carcass or primal cut.

Frozen meat, edible offal, minced meat, meat preparations, cooked, cured, smoked, dried or otherwise preserved meat, retail operation, consumer transport, cooking, consumption, and downstream end-of-life are outside this PCR. A dataset for another CPC 21119 mammal may use this method only after replacing every deer-specific product identity with one declared species and preserving atomic flows and route disclosure.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-of-mammals-fresh-or-chilled |
| classification_refs | CPC 3.0: 21119, Other meat of mammals, fresh or chilled |
| covered_products | Fresh or chilled skeletal muscle meat and cuts from mammals within CPC 21119, with one species and cut declared per dataset |
| excluded_products | Meat of mammals classified in CPC 21111-21118; frozen meat; edible offal; minced meat; meat preparations; preserved or cooked meat; undeclared multi-species aggregate meat |
| representative_product | Boneless red deer (`Cervus elaphus`) primal or retail cut, fresh or chilled |
| production_route | Transfer of inspected deer carcass or primal cut; receiving and grading; trimming/cutting; conditional washing; chilling/cold holding; packaging; sanitation; factory-gate dispatch |
| market_state | Packaged fresh or chilled meat, never frozen, with dispatch temperature and packaging atmosphere declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Boneless red deer meat supplied at the factory gate for sale or further food preparation |
| How much | 1 kg net meat mass, excluding packaging |
| How well | Inspected and accepted, species and anatomical cut declared, fresh or chilled and never frozen, meeting the applicable hygiene and dispatch-temperature specification |
| How long or cycle | One production and dispatch lot through the post-slaughter cutting and packing facility |
| reference_flow_link | Net packaged meat output in `delivered_deer_meat` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net meat mass |
| Reference product flow | Boneless deer meat, fresh or chilled |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | mammal common and scientific name; farmed or wild origin; carcass/primal input route; anatomical cut; bone status; fresh or chilled state; confirmation never frozen; receiving and dispatch temperatures; jurisdictional temperature limit; packaging format and component materials; vacuum or modified-atmosphere status; modified-atmosphere gas composition when used; net meat mass; facility and reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net edible meat at factory gate; packaging mass is inventoried separately and shall not be included in reference mass. |
| `wet_mass_basis` | meat, bone, fat, trimmings, rejects, and sludge | Mass | kg | Use as-weighed wet mass and retain weighing date, scale identity, tare procedure, and moisture condition where it affects interpretation. |
| `utility_basis` | electricity, steam, fuels, water, ice, gases, and refrigerants | Energy, mass, or volume appropriate to the atomic flow | kWh, MJ, kg, or m3 | Preserve the metered or invoiced unit, record conversion factors and calorific-value basis, then normalize to 1 kg net reference product. |
| `temperature_basis` | receiving, cutting, chilling, storage, and dispatch | Temperature and elapsed time | degrees C and h | Retain product temperature, measurement location, timestamp, instrument, and applicable legal or customer limit; do not substitute room temperature for product temperature unless the governing rule expressly allows it. |
| `no_empirical_range_without_two_sources` | all inventory amount ranges | Same as the underlying flow | Same as the underlying flow | Do not publish an empirical range from a single case or single point. Omit the range until at least two independent, verified, boundary-, unit-, and basis-compatible original sources support a synthesis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Post-mortem-inspected red deer carcass or red deer primal cut, fresh or chilled, identified by species and cut, handed over at the cutting/packing facility |
| starting_condition_role | Upstream product input; it carries all husbandry or wild-harvest, live-animal transport, killing, dressing, evisceration, hide removal, and inspection burdens |
| product_classification_scope | CPC 3.0 subclass 21119 only; one declared mammal species and cut per data package |
| recursive_input_rule | Record a same-category purchased fresh/chilled meat input once at its physical handover condition and link one upstream dataset; do not reopen the excluded husbandry, hunting, or slaughter stages in this foreground package. |
| upstream_dataset_requirement | The accepted carcass or primal-cut input requires a geographically, temporally, technologically, species-, origin-, and cut-representative upstream dataset through post-mortem inspection and handover. |
| disclosure | Declare species, scientific name, farmed/wild origin, cut, bone status, input route, incoming temperature, inspection/acceptance status, packaging route, chilling regime, facility, period, and any excluded or shared operation. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_handover` | foreground boundary | Begin at physical transfer of a post-mortem-inspected carcass or primal cut; exclude husbandry/hunting and slaughter while requiring those burdens in the incoming meat dataset. | `unsd-cpc-3-21119`; `codex-cxc-58-2005` |
| `boundary_required_operations` | foreground process coverage | Include receiving, inspection/grading, trimming/cutting, chilling/cold holding, packaging, sanitation, and factory-gate dispatch; include meat washing only when it is actually performed. | `codex-cxc-58-2005`; `fao-meat-cutting-guidelines`; `rotz-et-al-2019` |
| `boundary_cold_chain` | meat temperature control | Maintain and record the declared fresh/chilled state through cutting, packaging, cold holding, and dispatch. For the representative EU large-wild-game deer route, apply the 7 degrees C product limit where Regulation (EC) No 853/2004 governs; otherwise record and apply the competent jurisdiction's limit. | `eu-853-2004-consolidated`; `codex-cxc-58-2005` |
| `boundary_complete_inventory` | foreground exchanges | Inventory all known material and energy inputs, products, co-products, wastes, direct emissions, and refrigerant losses; do not hide an actual flow in an aggregate energy, material, packaging, or waste row. | `eu-pef-2021-2279`; `eu-bat-2023-2749` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p01_receiving` | Receiving, identity inspection, and grading | `required` | Always | foreground production | kg accepted incoming deer carcass or primal cut |
| `p02_cutting` | Trimming, deboning, and cutting | `required` | Always | foreground production | kg cut deer meat output |
| `p03_washing` | Product washing and ice contact | `conditional` | Include only when the declared product route actually washes meat or applies ice directly to it | foreground conditioning | kg washed deer meat output |
| `p04_chilling` | Chilling and refrigerated holding | `required` | Always | foreground conditioning and storage | kg chilled deer meat output and storage hours |
| `p05_packaging` | Vacuum or modified-atmosphere packaging | `required` | Always; instantiate the actual packaging route | foreground production | kg packaged deer meat output |
| `p06_sanitation` | Facility and equipment sanitation | `required` | Always; record only chemicals and fuels actually used | shared foreground support | kg net reference product supported |
| `p07_dispatch` | Finished-goods cold staging and factory-gate dispatch | `required` | Always | foreground delivery | kg net reference product delivered |

### Process: Receiving, identity inspection, and grading (`p01_receiving`)

#### Inputs

##### Product flows

###### Incoming red deer carcass, fresh or chilled (`incoming_deer_carcass`)

Use this route-specific input only when an inspected red deer carcass crosses the foreground boundary.

- Selected flow: Red deer carcass, fresh or chilled
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted and rejected incoming carcass mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_mass_identity`
- Sources: `unsd-cpc-3-21119`; `codex-cxc-58-2005`

###### Incoming red deer primal cut, fresh or chilled (`incoming_deer_primal_cut`)

Use this route-specific input only when an inspected red deer primal cut, rather than a carcass, crosses the foreground boundary.

- Selected flow: Red deer primal cut, fresh or chilled
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted and rejected incoming primal-cut mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_mass_identity`
- Sources: `unsd-cpc-3-21119`; `codex-cxc-58-2005`

###### Electricity for receiving and grading (`receiving_electricity`)

Record metered electricity used for receiving conveyors, scales, inspection lighting, and grading equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity, or documented allocation from a facility meter when no submeter exists
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `eu-bat-2023-2749`; `rotz-et-al-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted red deer carcass (`accepted_deer_carcass`)

Record the accepted carcass mass transferred to cutting when the carcass-input route applies.

- Selected flow: Accepted red deer carcass, fresh or chilled
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted carcass mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_mass_identity`
- Sources: `codex-cxc-58-2005`

###### Accepted red deer primal cut (`accepted_deer_primal_cut`)

Record the accepted primal-cut mass transferred to cutting when the primal-input route applies.

- Selected flow: Accepted red deer primal cut, fresh or chilled
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted primal-cut mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_mass_identity`
- Sources: `codex-cxc-58-2005`

##### Waste flows

###### Rejected deer meat at receiving (`receiving_reject`)

Record meat rejected for identity, condition, hygiene, temperature, or specification failure.

- Selected flow: Rejected red deer meat
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected mass by reason and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rejects`
- Sources: `codex-cxc-58-2005`

##### Elementary flows

### Process: Trimming, deboning, and cutting (`p02_cutting`)

#### Inputs

##### Product flows

###### Accepted red deer carcass for cutting (`cutting_carcass_input`)

This internal transfer applies to the carcass-input route.

- Selected flow: Accepted red deer carcass, fresh or chilled
- Flow property / unit: Mass / kg
- Amount rule: Mass transferred from `accepted_deer_carcass`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_yield`
- Sources: `codex-cxc-58-2005`

###### Accepted red deer primal cut for cutting (`cutting_primal_input`)

This internal transfer applies to the primal-input route.

- Selected flow: Accepted red deer primal cut, fresh or chilled
- Flow property / unit: Mass / kg
- Amount rule: Mass transferred from `accepted_deer_primal_cut`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_yield`
- Sources: `codex-cxc-58-2005`

###### Electricity for trimming, deboning, and cutting (`cutting_electricity`)

Record electricity for saws, knives, conveyors, portioning, and local extraction attributable to this process.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or documented allocation from equipment power and operating hours
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `fao-meat-cutting-guidelines`; `rotz-et-al-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cut red deer meat (`cut_deer_meat`)

Record fresh cut meat transferred to washing or directly to chilling.

- Selected flow: Cut red deer meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weighed cut meat mass by declared anatomical cut and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_yield`
- Sources: `codex-cxc-58-2005`; `rotz-et-al-2019`

###### Red deer bone sent for recovery (`deer_bone_recovery`)

Record clean bone as a co-product only when it leaves to a documented recovery use.

- Selected flow: Red deer bone for recovery
- Flow property / unit: Mass / kg
- Amount rule: Weighed bone mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_yield`
- Sources: `eu-pef-2021-2279`; `rotz-et-al-2019`

###### Red deer fat sent for recovery (`deer_fat_recovery`)

Record separated fat as a co-product only when it leaves to a documented recovery use.

- Selected flow: Red deer fat for recovery
- Flow property / unit: Mass / kg
- Amount rule: Weighed fat mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_yield`
- Sources: `eu-pef-2021-2279`; `rotz-et-al-2019`

###### Red deer trimmings sent for recovery (`deer_trimming_recovery`)

Record edible or recoverable trimmings as a co-product only when a documented use exists.

- Selected flow: Red deer meat trimmings for recovery
- Flow property / unit: Mass / kg
- Amount rule: Weighed trimming mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_yield`
- Sources: `eu-pef-2021-2279`; `rotz-et-al-2019`

##### Waste flows

###### Discarded red deer bone (`discarded_deer_bone`)

Record bone sent to waste treatment rather than recovery.

- Selected flow: Waste red deer bone
- Flow property / unit: Mass / kg
- Amount rule: Weighed discarded bone mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rejects`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Discarded red deer fat (`discarded_deer_fat`)

Record fat sent to waste treatment rather than recovery.

- Selected flow: Waste red deer fat
- Flow property / unit: Mass / kg
- Amount rule: Weighed discarded fat mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rejects`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Discarded red deer trimmings (`discarded_deer_trimmings`)

Record trimmings sent to waste treatment rather than recovery.

- Selected flow: Waste red deer meat trimmings
- Flow property / unit: Mass / kg
- Amount rule: Weighed discarded trimming mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rejects`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Blood-contaminated drainage from cutting (`blood_contaminated_drainage`)

Record separately collected blood-bearing drip and drainage; do not combine it with product-washing wastewater.

- Selected flow: Blood-contaminated meat-cutting drainage
- Flow property / unit: Mass / kg
- Amount rule: Measured volume converted with recorded density, or direct mass measurement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_streams`
- Sources: `eu-bat-2023-2749`; `rotz-et-al-2019`

###### Rejected red deer cuts (`cutting_reject`)

Record meat rejected during trimming, deboning, or cutting separately from recoverable trimmings.

- Selected flow: Rejected red deer cuts
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected mass by reason and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rejects`
- Sources: `codex-cxc-58-2005`

##### Elementary flows

### Process: Product washing and ice contact (`p03_washing`)

#### Inputs

##### Product flows

###### Cut red deer meat for washing (`washing_meat_input`)

Include this transfer only when product washing is actually performed.

- Selected flow: Cut red deer meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Mass transferred from `cut_deer_meat` to the washing route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_washing`
- Sources: `codex-cxc-58-2005`

###### Potable water for product washing (`washing_water`)

Record water that contacts meat only when this washing step occurs.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: Metered water delivered to product-washing equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_washing`
- Sources: `codex-cxc-58-2005`; `eu-bat-2023-2749`

###### Potable ice contacting meat (`washing_ice`)

Record ice only when it directly contacts meat or washing water.

- Selected flow: Ice from potable water
- Flow property / unit: Mass / kg
- Amount rule: Weighed ice supplied to the washing route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_washing`
- Sources: `codex-cxc-58-2005`

###### Electricity for product washing (`washing_electricity`)

Record electricity for wash pumps, conveyors, and ice handling.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or equipment power multiplied by recorded operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `eu-bat-2023-2749`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Washed red deer meat (`washed_deer_meat`)

Record washed meat mass transferred to chilling.

- Selected flow: Washed red deer meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Weighed washed meat mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_washing`
- Sources: `codex-cxc-58-2005`

##### Waste flows

###### Meat-washing wastewater (`meat_washing_wastewater`)

Record product-washing effluent separately from sanitation wastewater and blood-contaminated drainage.

- Selected flow: Meat-washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered segregated wastewater volume at the washing process outlet
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_streams`
- Sources: `eu-bat-2023-2749`; `codex-cxc-58-2005`

##### Elementary flows

### Process: Chilling and refrigerated holding (`p04_chilling`)

#### Inputs

##### Product flows

###### Unwashed cut red deer meat for chilling (`chilling_unwashed_meat_input`)

Use this internal transfer when product washing does not occur.

- Selected flow: Cut red deer meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Mass transferred from `cut_deer_meat` directly to chilling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigeration`
- Sources: `codex-cxc-58-2005`

###### Washed red deer meat for chilling (`chilling_washed_meat_input`)

Use this internal transfer when product washing occurs.

- Selected flow: Washed red deer meat, fresh
- Flow property / unit: Mass / kg
- Amount rule: Mass transferred from `washed_deer_meat`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigeration`
- Sources: `codex-cxc-58-2005`

###### Electricity for chilling and cold holding (`chilling_electricity`)

Record compressor, condenser, evaporator fan, defrost, cold-room lighting, and control electricity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Refrigeration submeter reading allocated by measured product mass-time when equipment is shared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigeration`
- Sources: `eu-bat-2023-2749`; `fao-cold-store-1991`; `rotz-et-al-2019`

###### Ammonia R717 refrigerant make-up (`refrigerant_r717_makeup`)

Record only when the refrigeration system contains R717.

- Selected flow: Ammonia, refrigerant R717
- Flow property / unit: Mass / kg
- Amount rule: Purchased and charged make-up mass reconciled with stock, recovery, and service records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigeration`
- Sources: `eu-bat-2023-2749`

###### Carbon dioxide R744 refrigerant make-up (`refrigerant_r744_makeup`)

Record only when the refrigeration system contains R744.

- Selected flow: Carbon dioxide, refrigerant R744
- Flow property / unit: Mass / kg
- Amount rule: Purchased and charged make-up mass reconciled with stock, recovery, and service records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigeration`
- Sources: `eu-bat-2023-2749`

###### HFC-134a refrigerant make-up (`refrigerant_r134a_makeup`)

Record only when the refrigeration system contains R134a.

- Selected flow: 1,1,1,2-tetrafluoroethane, refrigerant R134a
- Flow property / unit: Mass / kg
- Amount rule: Purchased and charged make-up mass reconciled with stock, recovery, and service records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigeration`
- Sources: `eu-bat-2023-2749`; `rotz-et-al-2019`

###### Refrigerant R404A make-up (`refrigerant_r404a_makeup`)

Record only when the refrigeration system contains R404A; preserve the mixture identity rather than recording a generic refrigerant.

- Selected flow: Refrigerant blend R404A
- Flow property / unit: Mass / kg
- Amount rule: Purchased and charged make-up mass reconciled with stock, recovery, and service records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigeration`
- Sources: `eu-bat-2023-2749`; `rotz-et-al-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilled red deer meat (`chilled_deer_meat`)

Record chilled meat transferred to packaging together with product temperature and holding time.

- Selected flow: Chilled red deer meat
- Flow property / unit: Mass / kg
- Amount rule: Weighed chilled meat mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigeration`
- Sources: `eu-853-2004-consolidated`; `codex-cxc-58-2005`

##### Waste flows

##### Elementary flows

###### Ammonia R717 emitted to air (`refrigerant_r717_emission`)

Calculate leakage only when R717 is used.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: R717 make-up plus documented inventory decrease minus recovered or transferred R717
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigeration`
- Sources: `eu-bat-2023-2749`

###### Carbon dioxide R744 emitted to air (`refrigerant_r744_emission`)

Calculate leakage only when R744 is used.

- Selected flow: Carbon dioxide to air, refrigerant origin
- Flow property / unit: Mass / kg
- Amount rule: R744 make-up plus documented inventory decrease minus recovered or transferred R744
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigeration`
- Sources: `eu-bat-2023-2749`

###### HFC-134a emitted to air (`refrigerant_r134a_emission`)

Calculate leakage only when R134a is used.

- Selected flow: 1,1,1,2-tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: R134a make-up plus documented inventory decrease minus recovered or transferred R134a
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigeration`
- Sources: `eu-bat-2023-2749`; `rotz-et-al-2019`

###### Refrigerant R404A emitted to air (`refrigerant_r404a_emission`)

Calculate leakage only when R404A is used and preserve the mixture identity required by the background method.

- Selected flow: Refrigerant blend R404A to air
- Flow property / unit: Mass / kg
- Amount rule: R404A make-up plus documented inventory decrease minus recovered or transferred R404A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigeration`
- Sources: `eu-bat-2023-2749`; `rotz-et-al-2019`

### Process: Vacuum or modified-atmosphere packaging (`p05_packaging`)

#### Inputs

##### Product flows

###### Chilled red deer meat for packaging (`packaging_meat_input`)

Record the chilled meat mass entering the declared packaging route.

- Selected flow: Chilled red deer meat
- Flow property / unit: Mass / kg
- Amount rule: Mass transferred from `chilled_deer_meat`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources: `codex-cxc-58-2005`; `rotz-et-al-2019`

###### Electricity for packaging (`packaging_electricity`)

Record electricity for sealers, vacuum pumps, gas mixers, labelers, and packaging conveyors.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or equipment power multiplied by recorded operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `rotz-et-al-2019`

###### Polyamide/polyethylene vacuum bag (`vacuum_bag_pa_pe`)

Record only for the vacuum-pack route.

- Selected flow: Polyamide/polyethylene multilayer vacuum bag
- Flow property / unit: Mass / kg
- Amount rule: Issued bag mass minus returned usable stock, reconciled with packaged units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `codex-cxc-58-2005`; `rotz-et-al-2019`

###### PET tray (`pet_tray`)

Record only when a PET tray is used.

- Selected flow: Polyethylene terephthalate tray
- Flow property / unit: Mass / kg
- Amount rule: Issued tray mass minus returned usable stock, reconciled with packaged units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `codex-cxc-58-2005`; `rotz-et-al-2019`

###### Polyethylene lidding film (`polyethylene_lidding_film`)

Record only when polyethylene lidding film is used.

- Selected flow: Polyethylene lidding film
- Flow property / unit: Mass / kg
- Amount rule: Issued film mass minus returned usable stock, reconciled with packaged units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `rotz-et-al-2019`

###### Cellulose absorbent pad (`cellulose_absorbent_pad`)

Record only when an absorbent pad is placed in the package.

- Selected flow: Cellulose absorbent meat pad
- Flow property / unit: Mass / kg
- Amount rule: Issued pad mass minus returned usable stock, reconciled with packaged units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `codex-cxc-58-2005`; `rotz-et-al-2019`

###### Corrugated cardboard case (`corrugated_cardboard_case`)

Record each corrugated distribution case used for dispatch.

- Selected flow: Corrugated cardboard case
- Flow property / unit: Mass / kg
- Amount rule: Issued case mass minus returned usable stock, reconciled with dispatched cases
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `codex-cxc-58-2005`; `rotz-et-al-2019`

###### Paper package label (`paper_label`)

Record the paper label separately from film and tray.

- Selected flow: Paper package label
- Flow property / unit: Mass / kg
- Amount rule: Issued label mass minus returned usable stock, reconciled with packaged units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `codex-cxc-58-2005`; `rotz-et-al-2019`

###### Carbon dioxide for modified-atmosphere packaging (`map_carbon_dioxide`)

Record only when carbon dioxide is supplied to the package atmosphere.

- Selected flow: Carbon dioxide, food grade
- Flow property / unit: Mass / kg
- Amount rule: Gas-cylinder or bulk-meter withdrawal allocated to conforming MAP units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_gases`
- Sources: `codex-cxc-58-2005`; `rotz-et-al-2019`

###### Nitrogen for modified-atmosphere packaging (`map_nitrogen`)

Record only when nitrogen is supplied to the package atmosphere.

- Selected flow: Nitrogen gas, food grade
- Flow property / unit: Mass / kg
- Amount rule: Gas-cylinder or bulk-meter withdrawal allocated to conforming MAP units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_gases`
- Sources: `codex-cxc-58-2005`

###### Oxygen for modified-atmosphere packaging (`map_oxygen`)

Record only when oxygen is supplied to the package atmosphere.

- Selected flow: Oxygen gas, food grade
- Flow property / unit: Mass / kg
- Amount rule: Gas-cylinder or bulk-meter withdrawal allocated to conforming MAP units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_gases`
- Sources: `codex-cxc-58-2005`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged chilled red deer meat (`packaged_deer_meat`)

Record the net meat mass transferred to finished-goods cold staging.

- Selected flow: Packaged boneless red deer meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Net scale mass excluding all packaging components
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `codex-cxc-58-2005`; `rotz-et-al-2019`

##### Waste flows

###### Rejected packaged red deer meat (`packaging_reject`)

Record nonconforming meat rejected at packaging separately from packaging scrap.

- Selected flow: Rejected packaged red deer meat
- Flow property / unit: Mass / kg
- Amount rule: Net rejected meat mass by reason and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rejects`
- Sources: `codex-cxc-58-2005`

###### Waste polyamide/polyethylene vacuum bags (`waste_vacuum_bag_pa_pe`)

Record unused, damaged, and process-scrap vacuum bags.

- Selected flow: Waste polyamide/polyethylene multilayer film
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste vacuum-bag material by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `eu-pef-2021-2279`; `rotz-et-al-2019`

###### Waste PET trays (`waste_pet_tray`)

Record damaged or unused PET trays.

- Selected flow: Waste polyethylene terephthalate tray
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste PET tray material by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `eu-pef-2021-2279`; `rotz-et-al-2019`

###### Waste polyethylene lidding film (`waste_polyethylene_lidding_film`)

Record lidding-film trim and rejected film.

- Selected flow: Waste polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste polyethylene film by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `eu-pef-2021-2279`; `rotz-et-al-2019`

###### Waste cellulose absorbent pads (`waste_cellulose_absorbent_pad`)

Record unused or rejected absorbent pads; meat-soiled pads remain this distinct waste material.

- Selected flow: Waste cellulose absorbent meat pad
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste absorbent-pad material by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `eu-pef-2021-2279`; `rotz-et-al-2019`

###### Waste corrugated cardboard (`waste_corrugated_cardboard`)

Record corrugated-case waste separately from paper labels.

- Selected flow: Waste corrugated cardboard
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste corrugated cardboard by recycling or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `eu-pef-2021-2279`; `rotz-et-al-2019`

###### Waste paper labels (`waste_paper_label`)

Record rejected or unused paper labels separately.

- Selected flow: Waste paper label
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste paper-label material by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `eu-pef-2021-2279`; `rotz-et-al-2019`

##### Elementary flows

### Process: Facility and equipment sanitation (`p06_sanitation`)

#### Inputs

##### Product flows

###### Potable sanitation water (`sanitation_water`)

Record water for equipment, surface, room, crate, and hygiene cleaning within the foreground facility.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: Metered sanitation water, segregated from product-washing water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs_outputs`
- Sources: `codex-cxc-58-2005`; `fao-cold-store-1991`; `eu-bat-2023-2749`

###### Electricity for sanitation (`sanitation_electricity`)

Record electricity for pumps, pressure washers, chemical dosing, and sanitation equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or documented equipment-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `eu-bat-2023-2749`; `rotz-et-al-2019`

###### Purchased steam for sanitation (`sanitation_steam`)

Record purchased steam only when it crosses the site boundary; onsite-boiler fuels are recorded separately.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased steam energy using recorded pressure, temperature, and condensate return basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs_outputs`
- Sources: `fao-meat-cutting-guidelines`; `eu-bat-2023-2749`

###### Natural gas for onsite sanitation heat (`sanitation_natural_gas`)

Record natural gas only when burned onsite for hot water, steam, or sanitation heat.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ net calorific value
- Amount rule: Metered fuel volume converted with supplier composition and net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_combustion`
- Sources: `eu-bat-2023-2749`; `ipcc-2006-stationary-combustion`; `rotz-et-al-2019`

###### Liquefied petroleum gas for onsite sanitation heat (`sanitation_lpg`)

Record LPG only when it is burned onsite.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoiced LPG mass adjusted for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_combustion`
- Sources: `ipcc-2006-stationary-combustion`

###### Diesel for onsite sanitation heat (`sanitation_diesel`)

Record diesel only when it is burned in a stationary onsite heater or boiler; vehicle fuel is outside this row.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoiced diesel mass adjusted for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_combustion`
- Sources: `ipcc-2006-stationary-combustion`

###### Sodium hydroxide cleaner (`sanitation_sodium_hydroxide`)

Record formulated-product mass and active sodium hydroxide concentration when this alkaline cleaner is used.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg active substance
- Amount rule: Chemical issue mass multiplied by verified active concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_inputs_outputs`
- Sources: `codex-cxc-58-2005`; `eu-bat-2023-2749`

###### Nitric acid cleaner (`sanitation_nitric_acid`)

Record formulated-product mass and active nitric acid concentration when this acid cleaner is used.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg active substance
- Amount rule: Chemical issue mass multiplied by verified active concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_inputs_outputs`
- Sources: `codex-cxc-58-2005`; `eu-bat-2023-2749`

###### Sodium hypochlorite disinfectant (`sanitation_sodium_hypochlorite`)

Record formulated-product mass and active sodium hypochlorite concentration when this disinfectant is used.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg active substance
- Amount rule: Chemical issue mass multiplied by verified active concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_inputs_outputs`
- Sources: `fao-cold-store-1991`; `codex-cxc-58-2005`

###### Peracetic acid disinfectant (`sanitation_peracetic_acid`)

Record formulated-product mass and active peracetic acid concentration when this disinfectant is used.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg active substance
- Amount rule: Chemical issue mass multiplied by verified active concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_inputs_outputs`
- Sources: `codex-cxc-58-2005`; `eu-bat-2023-2749`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Sanitation wastewater (`sanitation_wastewater`)

Record sanitation wastewater separately from product-washing effluent and blood-contaminated cutting drainage.

- Selected flow: Meat-facility sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered segregated sanitation wastewater volume by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_streams`
- Sources: `eu-bat-2023-2749`; `rotz-et-al-2019`

###### Wastewater-treatment sludge (`wastewater_sludge`)

Record sludge only when generated by onsite treatment serving the foreground operations.

- Selected flow: Meat-processing wastewater-treatment sludge
- Flow property / unit: Mass / kg wet sludge
- Amount rule: Weighed wet sludge with dry-solids fraction and destination recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs_outputs`
- Sources: `eu-bat-2023-2749`; `rotz-et-al-2019`

##### Elementary flows

###### Fossil carbon dioxide from onsite fuel combustion (`combustion_carbon_dioxide`)

Calculate direct fossil carbon dioxide for each recorded onsite fuel and sum only after retaining fuel-level calculations.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Sum of each fuel activity multiplied by its verified jurisdiction-, fuel-, and technology-specific CO2 factor; use IPCC default only when a better factor is unavailable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_combustion`
- Sources: `ipcc-2006-stationary-combustion`

###### Methane from onsite fuel combustion (`combustion_methane`)

Calculate direct methane for each recorded onsite fuel and combustion technology.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Sum of each fuel activity multiplied by its verified jurisdiction-, fuel-, and technology-specific CH4 factor; use IPCC default only when a better factor is unavailable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_combustion`
- Sources: `ipcc-2006-stationary-combustion`

###### Nitrous oxide from onsite fuel combustion (`combustion_nitrous_oxide`)

Calculate direct nitrous oxide for each recorded onsite fuel and combustion technology.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Sum of each fuel activity multiplied by its verified jurisdiction-, fuel-, and technology-specific N2O factor; use IPCC default only when a better factor is unavailable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_combustion`
- Sources: `ipcc-2006-stationary-combustion`

### Process: Finished-goods cold staging and factory-gate dispatch (`p07_dispatch`)

#### Inputs

##### Product flows

###### Packaged chilled red deer meat for dispatch (`dispatch_meat_input`)

Record net meat mass entering finished-goods cold staging.

- Selected flow: Packaged boneless red deer meat, chilled
- Flow property / unit: Mass / kg
- Amount rule: Mass transferred from `packaged_deer_meat`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Sources: `codex-cxc-58-2005`

###### Electricity for finished-goods staging and loading (`dispatch_electricity`)

Record electricity for dispatch cold holding, dock equipment, and loading attributable to the reference product before gate transfer.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity allocated by net meat mass-time in finished-goods staging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `fao-cold-store-1991`; `eu-bat-2023-2749`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Boneless deer meat delivered at factory gate (`delivered_deer_meat`)

This is the reference product output. It is one declared deer species and cut, packaged, fresh or chilled, and never frozen.

- Selected flow: Boneless deer meat, fresh or chilled
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net delivered meat mass excluding packaging; normalize the dataset to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Sources: `unsd-cpc-3-21119`; `codex-cxc-58-2005`

##### Waste flows

###### Rejected meat at dispatch (`dispatch_reject`)

Record packaged meat rejected during final temperature, label, seal, or condition checks.

- Selected flow: Rejected chilled red deer meat at dispatch
- Flow property / unit: Mass / kg
- Amount rule: Net rejected meat mass by reason and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rejects`
- Sources: `codex-cxc-58-2005`; `eu-853-2004-consolidated`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_preserve_upstream` | incoming carcass or primal cut | Do not reallocate upstream husbandry, hunting, or slaughter burdens inside this gate-to-gate PCR; use the burden already carried by the accepted incoming product dataset and disclose its allocation method. | `eu-pef-2021-2279` |
| `allocation_subdivision_first` | shared foreground equipment and utilities | Prefer submetering, batch records, equipment time, mass-time, or another causal subdivision before allocation. | `eu-pef-2021-2279`; `eu-bat-2023-2749` |
| `allocation_joint_cutting` | meat, recoverable bone, fat, and trimmings | If cutting cannot be subdivided, partition residual shared burdens by measured wet output mass because mass is the directly observed physical relationship; disclose all mass fractions and test economic allocation as a sensitivity when co-product value could change conclusions. | `eu-pef-2021-2279`; `rotz-et-al-2019` |
| `allocation_waste` | discarded material, wastewater, sludge, and packaging waste | Do not assign a co-product credit to waste. Assign segregation and onsite treatment burdens to the process that generates the waste; model downstream treatment with the declared waste destination. | `eu-pef-2021-2279` |
| `allocation_no_double_count` | internal product transfers | Internal transfers between required processes carry no new upstream burden; reconcile them once in the process mass balance and count only exchanges crossing the foreground system boundary in the published inventory. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_mass_identity` | `p01_receiving` | incoming and accepted deer meat | lot receipt, inspection, and scale record | species; scientific name; origin; carcass/primal route; cut; bone status; fresh/chilled state; incoming temperature; gross; tare; net; accepted; rejected | calibrated scale joined to traceability and inspection record | kg; degrees C | every lot | full reporting period | all receiving points | sum accepted and rejected net mass by declared route; retain lot links | scale calibration; supplier document; inspection disposition; temperature record |
| `cp_process_electricity` | `p01_receiving`-`p07_dispatch` | process electricity | meter and operating-time record | meter start/end; equipment; rated power; operating hours; shared-load driver; product mass | direct submeter preferred; documented equipment-time or causal allocation otherwise | kWh | each batch or meter interval | full reporting period | all included processes | sum by process; allocate shared load with disclosed causal driver | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_cutting_yield` | `p02_cutting` | cut meat, bone, fat, and trimmings | lot mass-balance record | input route; input mass; cut identity; meat; recoverable bone; recoverable fat; recoverable trimmings; discarded fractions; rejects; drip | calibrated scales at input and each output destination | kg wet mass | every lot or representative campaign with coverage proof | representative operating period within reporting year | all cutting lines | sum each atomic output; calculate unexplained mass difference | scale calibration; destination tickets; lot reconciliation |
| `cp_product_washing` | `p03_washing` | conditional meat washing | route flag, water meter, ice issue, product scale, and electricity record | washing performed; meat in/out; water in; ice in; electricity; start/end; wastewater | dedicated meters and lot records | kg; m3; kWh | every washing batch | all washing events in reporting period | all washing equipment | sum only applicable batches; zero is allowed only with route evidence | meter checks; sanitation SOP; batch record |
| `cp_refrigeration` | `p04_chilling` | chilling, storage, refrigerant make-up, and leakage | temperature logger, electricity meter, refrigerant stock/service record | meat in/out; product temperatures and times; storage hours; electricity; refrigerant identity; opening/closing stock; purchases; charges; recovery; transfer | continuous temperature and electricity records plus refrigerant mass reconciliation | kg; kWh; degrees C; h | continuous for temperature; each service event for refrigerant | full reporting period | all systems serving included meat | allocate energy by product mass-time; calculate each refrigerant separately | calibrated logger; submeter; service invoice; cylinder weights; leak-alarm record |
| `cp_packaging_components` | `p05_packaging` | meat and each packaging component | bill of materials, stock issue, count, and scale record | meat in/out; package route; component material; unit count; unit mass; opening/closing stock; purchases; returns | verified BOM reconciled to stock and packaged units | kg; item | each packaging lot | full reporting period | all packaging lines | calculate each component mass separately; no combined packaging total substitutes for components | supplier specification; scale check; stock reconciliation |
| `cp_packaging_gases` | `p05_packaging` | each MAP gas | gas meter or cylinder reconciliation | gas identity; purity; opening/closing stock; purchases; pressure/temperature conversion; conforming MAP units | mass meter preferred; cylinder stock reconciliation otherwise | kg | each lot or cylinder change | all MAP production in reporting period | all MAP packaging lines | allocate each gas separately to conforming MAP product | meter calibration; cylinder invoice; gas-composition check |
| `cp_packaging_waste` | `p05_packaging` | each packaging waste | waste scale and destination record | material identity; mass; contamination status; destination; date | segregated weighing by material | kg | each collection | full reporting period | all packaging lines | sum each material and destination separately | weigh ticket; recycler or treatment receipt |
| `cp_sanitation_inputs_outputs` | `p06_sanitation` | water, steam, chemicals, wastewater, and sludge | meter, stock, formulation, and waste record | water; steam; chemical product; active concentration; issue mass; electricity; wastewater; sludge wet mass; dry solids; destination | dedicated meters and stock reconciliation; active mass calculation | m3; MJ; kWh; kg | each sanitation cycle or meter interval | full reporting period | all included rooms and equipment | sum each atomic chemical and output; allocate shared sanitation by cleaned area-time or production mass with disclosure | meter calibration; SDS/product specification; stock record; treatment ticket |
| `cp_fuel_and_combustion` | `p06_sanitation` | each onsite fuel and CO2, CH4, N2O | fuel meter/invoice, stock, calorific value, and emission-factor record | fuel identity; quantity; opening/closing stock; net calorific value; combustion technology; factor source; CO2; CH4; N2O | reconcile each fuel, then apply verified fuel- and technology-specific factors | kg; MJ; kg emission | each meter interval; annual reconciliation | full reporting period | all stationary combustion serving foreground operations | calculate each gas per fuel before summing the same elementary flow | invoice; meter check; supplier calorific value; factor version; calculation sheet |
| `cp_wastewater_streams` | `p02_cutting`; `p03_washing`; `p06_sanitation` | blood-contaminated drainage, washing wastewater, and sanitation wastewater | segregated flow meter and sampling record | stream identity; flow; density if mass conversion; COD; total N; total P; treatment destination | separate meters or validated water balance; representative sampling | m3; kg | continuous or each discharge batch | full reporting period | each segregated drain and treatment route | sum by stream; never merge streams before retaining origin data | meter calibration; sampling chain of custody; treatment invoice |
| `cp_waste_and_rejects` | `p01_receiving`; `p02_cutting`; `p05_packaging`; `p07_dispatch` | rejects and animal material wastes | scale and disposition record | row identity; mass; reason; edible/co-product/waste status; destination; date | segregated weighing and disposition log | kg | each event | full reporting period | all included processes | sum each atomic row and destination | scale check; rejection record; destination receipt |
| `cp_dispatch` | `p07_dispatch` | reference product delivery | final scale, temperature, label, seal, and shipment record | species; scientific name; cut; bone status; net meat mass; package; atmosphere; product temperature; time; lot; customer/jurisdiction limit | calibrated final scale and product-temperature measurement | kg; degrees C | every dispatch lot | full reporting period | all factory-gate dispatches | sum conforming net meat mass; normalize all exchanges to 1 kg | scale calibration; temperature calibration; release record; label review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | every foreground exchange | normalized amount = reporting-period exchange amount / reporting-period conforming net meat mass at factory gate | atomic exchange total; `delivered_deer_meat` total | amount per 1 kg net reference product | `eu-pef-2021-2279` |
| `calc_process_mass_balance` | receiving, cutting, washing, packaging, and dispatch | input wet mass = product outputs + co-product outputs + waste outputs + measured liquid transfer + recorded stock change + unexplained difference; report the difference rather than forcing balance | calibrated input/output masses; stock; liquid records | process balance and unexplained mass difference | `eu-bat-2023-2749`; `eu-pef-2021-2279` |
| `calc_refrigerant_leakage` | each refrigerant | emitted mass = make-up charged + opening system inventory - closing system inventory - recovered mass - transferred mass; calculate R717, R744, R134a, R404A, and any other actual refrigerant as separate substances | stock, purchase, charge, recovery, transfer, service records | kg of each refrigerant emitted to air | `eu-bat-2023-2749` |
| `calc_combustion_emissions` | natural gas, LPG, and stationary diesel | emission by gas = fuel activity on the factor's calorific basis x verified factor; retain fuel-level CO2, CH4, and N2O calculations before aggregation | each fuel amount; net calorific value; combustion technology; factor | kg fossil CO2, kg CH4, and kg N2O | `ipcc-2006-stationary-combustion` |
| `calc_active_chemical` | sodium hydroxide, nitric acid, sodium hypochlorite, and peracetic acid | active substance mass = formulated product mass x verified active mass fraction | issued product mass; supplier concentration | kg active chemical | `eu-bat-2023-2749` |
| `calc_packaging_component` | each package component | component mass = verified unit mass x used units, reconciled to opening stock + purchases - closing stock - returned usable stock - measured waste | BOM; counts; stock; waste | kg of each component in product and kg of each component wasted | `eu-pef-2021-2279`; `rotz-et-al-2019` |
| `calc_allocation` | inseparable shared cutting or support process | apply measured causal subdivision first; if impossible for joint cutting, allocate residual shared burden by measured wet output mass and disclose an economic sensitivity when material | submeter or causal driver; output masses; value evidence if sensitivity is needed | allocated foreground burden by output | `eu-pef-2021-2279`; `rotz-et-al-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | meat inputs and reference product | Preserve traceability to one declared mammal species, scientific name, origin, anatomical cut, bone status, and fresh/chilled state for every lot; reject undeclared aggregate meat. | supplier record; inspection record; lot link; product label |
| `dq_temperature` | receipt through dispatch | Use calibrated product-temperature measurements and time records sufficient to demonstrate the applicable chilled-meat limit and continuous cold control. | calibration certificate; logger export; release record; applicable regulation or specification |
| `dq_completeness` | all processes and flows | Include every required process and every actual atomic material, energy, refrigerant, package component, waste, wastewater, and direct emission. Add a separate row for any actual refrigerant, fuel, chemical, package component, waste, or emission not enumerated here. | signed completeness checklist; purchase-to-inventory reconciliation; process flow diagram |
| `dq_representativeness` | foreground activity data | Cover a full year where practical, or document season, operating modes, species/cut mix, production volume, and why a shorter representative campaign is adequate. | reporting-period record; production schedule; campaign justification |
| `dq_metering` | mass, utility, temperature, gas, and wastewater records | Retain calibration or verification status and reconcile submeter totals to site invoices or master meters where applicable. | calibration record; invoice; reconciliation worksheet |
| `dq_waste_destination` | animal material, packaging waste, wastewater, and sludge | Record co-product or waste status, treatment or recovery destination, and mass for each atomic stream; do not infer destination from a generic waste contract. | weigh ticket; transfer note; treatment or recycler receipt |
| `dq_range_evidence` | amount ranges | Do not use a single paper, single facility value, or duplicated endpoint as an empirical range. Keep the foreground record requirement and manifest unresolved-range entry until two compatible original sources support synthesis. | source review record or explicit unresolved entry |
| `dq_uuid_resolution` | reference and inventory flows | UUID cells may remain blank for this authored candidate, but each named atomic flow must be resolved and directly verified before active review or publication. | manifest unresolved list; future Tiangong direct-read evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | dataset identity | Fail if mammal species, scientific name, anatomical cut, bone status, or fresh/chilled state is missing, or if an undeclared multi-species "other mammal meat" aggregate is used. | `unsd-cpc-3-21119` |
| `validation_boundary` | system boundary | Fail if husbandry, hunting, or slaughter burdens are omitted from the incoming product dataset, or if they are also added inside the foreground boundary and double counted. | `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `validation_process_coverage` | process map | Fail if any required process lacks a detailed inventory; require evidence of non-applicability for product washing and every conditional packaging gas, refrigerant, fuel, chemical, or package component. | `codex-cxc-58-2005`; `eu-bat-2023-2749` |
| `validation_temperature` | cold chain | Fail when product-temperature/time evidence does not demonstrate the declared applicable limit at receipt, cutting as applicable, chilling, cold holding, and dispatch. | `eu-853-2004-consolidated`; `codex-cxc-58-2005` |
| `validation_atomic_flows` | inventory | Fail when electricity, steam, fuels, refrigerants, chemicals, gases, packaging components, animal residues, wastewater streams, wastes, or emissions are combined into a selector or collection row. | `eu-pef-2021-2279`; `eu-bat-2023-2749` |
| `validation_mass_balance` | process quantities | Flag any unexplained mass difference and fail if input, product, co-product, waste, liquid transfer, and stock-change records are insufficient to reproduce the process balance. | `eu-bat-2023-2749`; `eu-pef-2021-2279` |
| `validation_refrigerant` | refrigeration | Fail if an actual refrigerant lacks separate make-up and leakage calculations or if stock, service, recovery, and transfer records are not reconciled. | `eu-bat-2023-2749` |
| `validation_combustion` | onsite fuels | Fail if natural gas, LPG, or stationary diesel is used without separate activity records and direct fossil CO2, CH4, and N2O calculations using a documented factor basis. | `ipcc-2006-stationary-combustion` |
| `validation_reference_mass` | reference flow | Fail unless the output is normalized to exactly 1 kg net boneless meat excluding packaging and the `delivered_deer_meat` output is linked to the reference flow. | `eu-pef-2021-2279` |
| `validation_ranges` | ranges | Fail any empirical range supported only by one case, one point, duplicated endpoints, an abstract, or incompatible boundaries. Absence of a range remains an unresolved candidate evidence gap, not permission to invent an estimate. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate `secondary_dataset` or `background_dataset` for post-slaughter cutting, chilling, packaging, and dispatch of one declared CPC 21119 mammal meat product |
| downstream_use | Link after a species- and route-compatible upstream carcass or primal-cut dataset in a `process` or `lifecyclemodel`; use for factory-gate fresh/chilled meat studies |
| allowed_use | Product systems matching the declared species, origin, cut, input route, packaging route, chilling technology, jurisdiction, facility scale, and reporting period |
| excluded_use | Undeclared aggregate other-mammal meat; cattle/buffalo/pig/rabbit/hare/sheep/goat/camelid/equine categories; frozen/offal/minced/prepared/preserved meat; standalone slaughter; retail or consumer stage; comparative claims without equivalent upstream allocation and quality |
| required_metadata | PCR id and version; species common/scientific name; farmed/wild origin; cut; bone status; fresh/chilled and never-frozen declaration; input route; upstream dataset; facility geography and scale; reporting period; temperature limits and records; package components and atmosphere; refrigerant and fuel identities; allocation; cut-offs; data quality; unresolved UUIDs |
| required_quality_disclosure | primary-data share; meter and scale coverage; temporal, geographic, and technological representativeness; mass-balance difference; shared-operation allocation; refrigerant reconciliation; waste destinations; source and factor versions; deviations; missing range evidence |
| update_trigger | Change in species/cut scope, input route, packaging system or gas mix, refrigerant, fuel or heat supply, sanitation chemistry, cold-chain limit, allocation method, waste destination, facility technology, reporting-period representativeness, source rule, or resolved Tiangong identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21119` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 classification detail, subclass 21119, Other meat of mammals, fresh or chilled. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/1073/21119 (retrieved 2026-08-24) | official category inclusion/exclusion and product identity |
| `codex-cxc-58-2005` | `standard` | Codex Alimentarius, Code of Hygienic Practice for Meat, CXC 58-2005. https://workspace.fao.org/sites/codex/Standards/CXC%2058-2005/CXC_058e.pdf (retrieved 2026-08-24) | post-mortem boundary, cutting, chilling, packaging separation, sanitation, inspection, rejected material, and temperature monitoring |
| `eu-853-2004-consolidated` | `standard` | Regulation (EC) No 853/2004, consolidated text of 8 December 2022, Annex III provisions for cutting/boning and large wild game. https://eur-lex.europa.eu/eli/reg/2004/853/2022-12-08 (retrieved 2026-08-24) | representative deer-route cutting hygiene, product temperature, chilling, and dispatch conformance |
| `fao-meat-cutting-guidelines` | `official_guidance` | FAO, Guidelines for slaughtering, meat cutting and further processing, facility hygiene and refrigeration chapters. https://www.fao.org/4/t0279e/T0279E02.htm (retrieved 2026-08-24) | process decomposition, cutting-room refrigeration, hot water/steam, cleaning, and sanitation |
| `fao-cold-store-1991` | `official_guidance` | Cano-Munoz, G., Manual on Meat Cold Store Operation and Management, FAO Animal Production and Health Paper 92, 1991, ISBN 92-5-102788-9. https://www.fao.org/4/t0098e/t0098e00.htm (retrieved 2026-08-24) | chilling/cold storage, refrigeration equipment, storage hygiene, cleaning water and disinfectant, dispatch handling |
| `eu-bat-2023-2749` | `standard` | Commission Implementing Decision (EU) 2023/2749 establishing BAT conclusions for slaughterhouses and animal by-products/edible co-products industries. https://eur-lex.europa.eu/eli/dec_impl/2023/2749/oj (retrieved 2026-08-24) | input/output inventories, energy and water management, wastewater segregation, chemical management, refrigeration energy, refrigerant identity and loss monitoring |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, consolidated text. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-24) | functional/reference flow, complete company-specific inventory, cut-off disclosure, allocation hierarchy, mass-balance and data-quality rules |
| `ipcc-2006-stationary-combustion` | `method_factor` | IPCC, 2006 Guidelines for National Greenhouse Gas Inventories, Volume 2 Energy, Chapter 2 Stationary Combustion. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf (retrieved 2026-08-24) | fuel-specific activity and CO2, CH4, and N2O calculation method; default factors only when better verified factors are unavailable |
| `rotz-et-al-2019` | `literature` | Rotz, C.A. et al., A life cycle assessment of the environmental impacts of a beef system in the USA, International Journal of Life Cycle Assessment 24, 441-455 (2019). https://doi.org/10.1007/s11367-018-1464-6 (retrieved 2026-08-24) | directly opened peer-reviewed full text supporting case-ready cutting, packaging components, energy, water, cleaning chemicals, wastes, wastewater, allocation, and refrigerant inventory; not used as numerical range evidence |
