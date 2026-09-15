---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.cards-with-a-magnetic-stripe
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cards with a magnetic stripe

## 1. Scope and Applicability

This PCR applies to cradle-to-factory-gate production of finished, unpackaged physical cards whose data-recording feature is a magnetic stripe. It covers blank or printed cards and includes magnetic-stripe encoding, embossing, or personalization only when the manufacturer performs those operations before the declared factory gate.

Smart cards containing an integrated circuit, other unrecorded magnetic media, card readers, software, shipment packaging, distribution, card use, and end-of-life are excluded. A card that combines a magnetic stripe with an integrated circuit is outside this PCR unless the foreground product is demonstrated to remain classified and marketed as a magnetic-stripe card rather than a smart card. The official CPC structure identifies CPC 47910 separately from CPC 47920 smart cards and CPC 47530 other unrecorded magnetic media (`un-cpc-3-0-structure-2025`).

The representative route converts purchased rigid PVC sheet and magnetic-stripe film through screen and offset printing, route-specific gloss-oil application, sheet assembly and lamination, card punching, finishing, inspection, and any declared pre-gate personalization. This sequence is supported by the manufacturer-origin technical process in `watchdata-cn103699921a`; the plastic-card printing, drying, adhesive-application and laminating boundary and its ink, coating, cleanup-material, isopropanol and VOC records are supported by `md-comar-26-11-19-18`. A producer using another specific substrate, printing system, coating or stripe-application route must add or mark not applicable each affected atomic exchange and disclose the route deviation; no representative-route row may be used as a proxy.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.cards-with-a-magnetic-stripe |
| classification_refs | CPC 3.0: 47910, Cards with a magnetic stripe (`exact`) |
| covered_products | Finished blank, printed, encoded, embossed, or personalized physical cards whose data-recording feature is a magnetic stripe, when supplied without an integrated-circuit smart-card identity |
| excluded_products | Smart cards; cards classified and marketed as integrated-circuit cards; other magnetic media; card readers; software; shipment packaging |
| representative_product | Finished, conforming rigid PVC magnetic-stripe card, unpackaged at the factory gate |
| production_route | Purchased card-grade PVC sheet and magnetic-stripe film; screen and offset printing with separately collected ink and gloss oil; stripe-film pre-lamination; sheet assembly and lamination; card punching; finishing; inspection; conditional pre-gate hot printing, encoding, embossing, or personalization (`watchdata-cn103699921a`) |
| market_state | Finished and quality-accepted physical cards at the manufacturing gate, with substrate, dimensions, stripe specification, encoding/personalization state, and packaging exclusion declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of finished physical cards capable of magnetic-stripe data recording or reading |
| How much | 1 kg of conforming finished cards |
| How well | Meets the declared customer specification or applicable card standard for dimensions, substrate, magnetic-stripe characteristics, and any encoded or personalized state |
| How long or cycle | One production lot through factory-gate acceptance; post-gate service life is outside the reference function |
| reference_flow_link | The finished magnetic-stripe-card output row `finished_magnetic_stripe_cards` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cards with a magnetic stripe `adb750d0-17eb-447e-8b33-2b60040d4022` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | substrate material and grade; finished-card dimensions and mean mass; magnetic-stripe coercivity or declared stripe specification; blank, encoded, embossed, or personalized state; printing and curing technology; recycled content; production geography; reference period; unpackaged factory-gate boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass-based material rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground exchanges to 1 kg of conforming finished magnetic-stripe cards at the declared factory gate. |
| `count_to_mass` | card counts reported by production systems | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert card counts to mass using a lot-representative measured mean finished-card mass; retain sample size, scale resolution, sampling date, and rejected-card exclusion. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter readings in their original unit; when converting kWh to the TianGong reference unit, use 1 kWh = 3.6 MJ and document the conversion. |
| `mass_balance_check` | non-fuel process materials and all corresponding material outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile every non-fuel material input with conforming card mass, each external solid or liquid waste, each direct named material emission, recovered material, and work-in-progress or stock change over the same accounting period; do not compare PVC alone with the full multi-material card output. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased card-grade PVC sheet, magnetic-stripe foil, printing ink, route-specific gloss oil, purchased electricity, and any actually used isopropanol, process water or gaseous natural gas delivered to the manufacturing site |
| starting_condition_role | Upstream production is represented by supplier-specific or compatible background datasets; foreground collection begins when these inputs cross the site boundary |
| product_classification_scope | Physical cards covered by CPC 3.0 subclass 47910, not CPC 47920 smart cards or CPC 47530 other unrecorded magnetic media |
| recursive_input_rule | When an already formed magnetic-stripe card is purchased for site personalization, record it as the same-category product input, model only the added foreground operations, and do not recreate burdens already embodied in the upstream card dataset |
| upstream_dataset_requirement | Use geographically, technologically, temporally, and materially representative datasets for each purchased input; disclose proxies and recycled-content assumptions |
| disclosure | Declare substrate, stripe specification, printing/curing route, personalization state, production geography, reference period, rejected-product handling, and the exact factory-gate and packaging exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | foreground manufacturing | Include the actual printing and curing operations, stripe application, lamination, card punching or cutting, finishing, inspection, internal scrap handling, and only those hot-printing, encoding, embossing, or personalization operations completed before the declared factory gate. | `watchdata-cn103699921a`; `md-comar-26-11-19-18` |
| `boundary_printing_route` | printing, curing and cleanup | For the representative screen-and-offset route, separately collect printing ink, each gloss-oil formulation, isopropanol used in fountain solution or cleanup, process water used in cleanup, waste ink, spent isopropanol solution, cleaning wastewater and direct isopropanol release. Mark solvent rows not applicable only for a documented solvent-free route; mark cleanup inputs and wastes not applicable only when records demonstrate that no onsite cleanup occurred. If another named solvent is used, add its specific product, waste and elementary-flow rows instead of a generic VOC row. | `watchdata-cn103699921a`; `md-comar-26-11-19-18` |
| `boundary_thermal_route` | drying, curing and lamination heat | Record gaseous natural gas and direct fossil carbon dioxide only when onsite natural-gas combustion supplies thermal energy. Mark both rows not applicable for fully electric or externally supplied heat; when another onsite fuel is used, replace them with the exact fuel and measured or calculated direct species rather than a generic fuel or emissions row. | `md-comar-26-11-19-18` |
| `boundary_upstream_inputs` | purchased product and energy inputs | Link every purchased atomic input to a compatible upstream dataset; do not include upstream emissions again as direct foreground elementary flows. |  |
| `boundary_product_identity` | category inclusion and exclusions | Keep CPC 47910 magnetic-stripe cards distinct from smart cards and other magnetic media; disclose any combined magnetic-stripe/integrated-circuit feature for classification review. | `un-cpc-3-0-structure-2025` |
| `boundary_packaging` | shipment packaging | Exclude shipment packaging from this unpackaged factory-gate reference product. If packaging is brought into a study boundary, add each packaging material as a separate atomic flow and report it outside the reference-product mass. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `card_manufacturing` | Magnetic-stripe card manufacture and finishing | `required` | Always included; encode, emboss, or personalize only when completed by the reporting manufacturer before the gate | Foreground conversion, finishing, inspection, and scrap accounting | 1 kg conforming finished magnetic-stripe cards |

### Process: Magnetic-stripe card manufacture and finishing (`card_manufacturing`)

#### Inputs

##### Product flows

###### Rigid PVC card-substrate sheet (`pvc_card_sheet`)

Record the mass of purchased rigid PVC sheet consumed in conforming cards, measured offcuts, setup losses, and rejects during the reference period. This representative-route row is not a proxy for another substrate.

- Selected flow: Polyvinyl chloride `50dd353a-b424-4589-adf0-71831c77c324`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass issued to card manufacturing, reconciled to inventory change and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished magnetic-stripe cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources:

###### Magnetic-stripe foil (`magnetic_stripe_foil`)

Record the mass of the supplied magnetic-recording stripe foil or laminate actually consumed, including application setup loss. No exact public state-100 TianGong product flow was confirmed, so the UUID remains unresolved.

- Selected flow: Magnetic-stripe foil
- Flow property / unit: Mass / kg
- Amount rule: measured net foil mass issued to stripe application, reconciled to unused returned roll and separately measured waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished magnetic-stripe cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources:

###### Printing ink (`printing_ink`)

Record the mass of printing ink consumed for the reported product. The evidenced representative route uses screen and offset printing; formulation, colour system, print technology, solvent content and curing route must be declared.

- Selected flow: Ink `7627af63-d2c2-4245-906f-023847c7739f`
- Flow property / unit: Mass / kg
- Amount rule: measured ink issued minus recoverable returned ink over the accounting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished magnetic-stripe cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_printing_materials_and_releases`
- Sources: `watchdata-cn103699921a`; `md-comar-26-11-19-18`

###### Thermo-print-compatible gloss oil (`thermo_print_gloss_oil`)

Record the thermo-print-compatible gloss-oil formulation applied by screen printing in the representative route. This row does not include the separate protective offset-applied gloss oil, generic paint, or an assumed water-based formulation; no exact public state-100 TianGong product flow was confirmed.

- Selected flow: Thermo-print-compatible gloss oil
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to screen printing minus unused returned formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished magnetic-stripe cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_printing_materials_and_releases`
- Sources: `watchdata-cn103699921a`; `md-comar-26-11-19-18`

###### Protective offset-applied gloss oil (`protective_gloss_oil`)

Record the protective gloss-oil formulation applied by offset printing in the representative route. This row does not include the separate screen-applied thermo-print-compatible gloss oil, generic paint, or an assumed water-based formulation; no exact public state-100 TianGong product flow was confirmed.

- Selected flow: Protective offset-applied gloss oil
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to offset printing minus unused returned formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished magnetic-stripe cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_printing_materials_and_releases`
- Sources: `watchdata-cn103699921a`; `md-comar-26-11-19-18`

###### Isopropanol (`isopropanol`)

Record isopropanol used in lithographic fountain solution or printing-equipment cleanup. This conditional row is not applicable only when supplier formulations, issue records and operating records demonstrate a solvent-free route with no isopropanol use.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: measured net isopropanol issued, including the isopropanol fraction of prepared fountain solution, reconciled to returned stock, recovered solvent, spent solution and direct release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished magnetic-stripe cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_printing_materials_and_releases`
- Sources: `md-comar-26-11-19-18`

###### Process water (`process_water`)

Record process water used in fountain solution or water-based printing-equipment cleanup. Mark this row not applicable only when the documented route uses no process water for these operations; do not include unrelated sanitary water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured or batch-recipe mass of process water entering fountain solution and printing cleanup, excluding returned or internally recirculated water until it leaves the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished magnetic-stripe cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_printing_materials_and_releases`
- Sources: `md-comar-26-11-19-18`

###### Gaseous natural gas (`natural_gas`)

Record natural gas only when it is combusted onsite to supply drying, curing or lamination heat. Mark this row not applicable for a fully electric route or externally supplied heat, and add a different exact fuel row if another onsite fuel is used.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered or invoice-reconciled volume attributable to the reporting process at declared temperature and pressure reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished magnetic-stripe cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_fuel_and_emissions`
- Sources: `md-comar-26-11-19-18`

###### Purchased electricity (`electricity`)

Record metered purchased electricity consumed by printing, curing, stripe application, lamination, cutting, finishing, inspection, and declared pre-gate personalization. Allocate shared meters only according to the allocation rules below.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity attributable to the reporting process, converted to MJ when necessary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished magnetic-stripe cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished magnetic-stripe cards (`finished_magnetic_stripe_cards`)

Record only cards that passed the declared acceptance criteria at the factory gate. The output mass establishes the normalization denominator and excludes shipment packaging.

- Selected flow: Cards with a magnetic stripe `adb750d0-17eb-447e-8b33-2b60040d4022`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of quality-accepted finished cards in the reporting lot or period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming finished magnetic-stripe cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_scrap`
- Sources:

##### Waste flows

###### PVC card offcuts and rejected PVC cards (`pvc_card_scrap`)

Record solid PVC offcuts and rejected PVC cards that leave the process for treatment. Keep material returned internally to the same process out of this waste output and disclose stripe or ink contamination and the treatment route.

- Selected flow: PVC `cacd273c-d5c5-4f38-91c2-660d8a86498b`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred out of the process as PVC card scrap, excluding internally reused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished magnetic-stripe cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_scrap`
- Sources:

###### Waste ink (`waste_ink`)

Record unused ink, ink-bearing press residue and separately collected ink cleanup residue that leave the foreground process as waste. Do not include returned reusable ink, and do not also report the same solvent mass in spent solution or wastewater.

- Selected flow: Waste ink `28055998-65ea-4b15-b3cf-7b049ffc6553`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of separately collected waste ink transferred out of the process, net of reusable ink returned to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished magnetic-stripe cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_printing_materials_and_releases`
- Sources: `md-comar-26-11-19-18`

###### Spent isopropanol printing-cleaning solution (`spent_isopropanol_cleaning_solution`)

Record spent isopropanol-containing fountain or cleanup solution transferred for treatment or recovery. No exact public state-100 TianGong waste flow was confirmed. Mark this row not applicable when no isopropanol solution leaves the process; retain concentration or composition evidence so its isopropanol fraction can be reconciled.

- Selected flow: Spent isopropanol printing-cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred out of the process, with isopropanol fraction determined from formulation, analysis or a documented solvent balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished magnetic-stripe cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_printing_materials_and_releases`
- Sources: `md-comar-26-11-19-18`

###### Printing-equipment cleaning wastewater (`printing_cleaning_wastewater`)

Record water-based washwater from card-printing equipment that leaves the process for the actual documented treatment or discharge route. Mark this row not applicable for a documented no-water-cleanup route; do not use it for sanitary wastewater or printing-plate processing.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of printing-equipment cleaning wastewater transferred out of the process, including separately documented ink and isopropanol fractions and excluding internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished magnetic-stripe cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_printing_materials_and_releases`
- Sources: `md-comar-26-11-19-18`

##### Elementary flows

###### Isopropanol to air, unspecified (`isopropanol_to_air`)

Record the isopropanol mass released directly to air from fountain solution, printing, flash-off, drying and cleanup after subtracting recovered, destroyed, retained and waste-bound isopropanol. Mark this row not applicable only when the actual route uses no isopropanol; zero release with isopropanol use requires documented complete capture or destruction.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: direct measurement or an isopropanol mass balance using input, recovered solvent, spent-solution content, wastewater content, retained mass and documented control destruction; never use total VOC as an isopropanol proxy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished magnetic-stripe cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_printing_materials_and_releases`
- Sources: `md-comar-26-11-19-18`

###### Fossil carbon dioxide from onsite natural-gas combustion (`fossil_co2_from_natural_gas`)

Record direct fossil carbon dioxide only when natural gas is combusted onsite for drying, curing or lamination heat. Exclude upstream natural-gas supply emissions and electricity-generation emissions; mark this row and `natural_gas` not applicable together when no onsite natural-gas combustion occurs.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack release or fuel-based carbon balance using attributable natural-gas quantity, supplier carbon content and documented oxidation; reconcile any captured carbon separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished magnetic-stripe cards
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_fuel_and_emissions`
- Sources: `md-comar-26-11-19-18`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared operations and meters | Avoid allocation by subdividing separately metered lines, products, production orders, or time periods wherever technically feasible. |  |
| `allocation_shared_electricity` | shared electricity | When subdivision is not feasible, allocate shared electricity using measured machine operating time multiplied by rated or measured load; use finished-product mass only when the reporting products use materially comparable operations, and disclose the method. |  |
| `allocation_scrap` | PVC card scrap | Assign no avoided-burden credit inside the foreground process. Report scrap mass and treatment route separately; any recycling substitution or downstream credit belongs to the declared downstream model. |  |
| `allocation_co_products` | saleable co-products | If a separately saleable co-product occurs, first subdivide its process. If subdivision is impossible, use a documented physical causal relationship; use economic allocation only when no defensible physical relationship exists and disclose price period and sensitivity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `card_manufacturing` | PVC sheet and magnetic-stripe foil inputs | weigh tickets, issue/return records, invoices, and inventory records | material identity; supplier; lot; gross issued mass; returned mass; opening and closing inventory; date; product order | reconcile issued, returned, and inventory-change records by concrete material | kg | each issue/return, aggregated monthly or by production lot | representative continuous production period, normally at least 12 months or the complete shorter campaign | all lines and storage locations serving the declared product | sum net consumed mass by material; normalize each material separately to conforming output mass | calibrated scale records; inventory reconciliation; supplier specification; exception log |
| `cp_printing_materials_and_releases` | `card_manufacturing` | printing ink, gloss oil, isopropanol, process water, waste ink, spent isopropanol solution, cleaning wastewater and isopropanol to air | issue/return and batch records; supplier formulation or SDS; cleanup log; waste-transfer weights; wastewater meter or batch volume with density; air test or solvent-balance worksheet | material and formulation identity; gross issue and return; isopropanol fraction; water input; cleanup event; waste-stream mass and composition; recovered solvent; control capture and destruction; release point; date; product order | reconcile each named input and output separately; derive isopropanol release only after subtracting measured recovery, waste-bound mass, retained mass and documented destruction | kg | each batch and cleanup event, aggregated monthly or by production lot | same period as product, substrate and energy records | every screen, offset, coating, drying and cleanup operation serving the declared product | sum each atomic exchange without double counting mixed-waste constituents; normalize to conforming output mass | supplier formulation or SDS; calibrated issue and waste weights; cleanup log; waste manifest; wastewater record; control-device and solvent-balance evidence |
| `cp_electricity` | `card_manufacturing` | purchased electricity | utility meter, submeter, and machine-run records | meter identifier; opening and closing reading; unit; timestamp; machine run time; product order; allocation driver | use dedicated submeters where available; otherwise apply the declared shared-electricity allocation rule | kWh or MJ | continuous or shift readings, aggregated monthly or by lot | same period as product and material records | all equipment and auxiliaries inside the declared foreground boundary | subtract excluded loads, allocate documented shared loads, convert kWh to MJ, and normalize to conforming output mass | meter calibration or utility invoice reconciliation; allocation worksheet; downtime log |
| `cp_thermal_fuel_and_emissions` | `card_manufacturing` | gaseous natural gas and direct fossil carbon dioxide | fuel meter, invoice, supplier composition, combustion log, stack measurement or carbon-balance worksheet | meter readings; reference temperature and pressure; product run time; allocation driver; carbon content; oxidation basis; captured carbon; measurement method | use dedicated fuel metering where available; otherwise allocate by documented burner operating time and load; calculate carbon dioxide only from attributable onsite fuel or use representative stack measurement | m3 natural gas and kg carbon dioxide | continuous or shift records, aggregated monthly or by lot | same period as product and material records | onsite drying, curing and lamination burners inside the declared boundary | normalize fuel and direct carbon dioxide separately; exclude upstream supply and electricity-generation emissions | meter calibration or invoice reconciliation; supplier gas specification; burner log; stack report or carbon-balance worksheet |
| `cp_product_and_scrap` | `card_manufacturing` | conforming card output and PVC scrap | production count, sample mass, finished-goods receipt, rejection, and waste-transfer records | accepted count; sampled card mass; accepted output mass; scrap mass; return-to-process mass; treatment route; date; product order | weigh finished output and scrap; where output is counted, apply the lot-specific count-to-mass rule | kg and item | each lot or shift, aggregated over the reporting period | same period as material and electricity records | every line making the declared product | sum accepted output and externally transferred scrap separately; exclude internal recirculation from waste | scale calibration; acceptance report; sampling record; waste transfer document; mass-balance investigation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_material_normalization` | all mass-based product, waste and direct-emission rows | normalized amount = period mass for the row / conforming finished-card mass for the same period | reconciled row mass; accepted output mass | kg per kg reference product |  |
| `calc_electricity_normalization` | `electricity` | normalized electricity = attributable electricity in MJ / conforming finished-card mass in kg; multiply kWh by 3.6 before normalization | meter readings; excluded loads; allocation driver; output mass | MJ per kg reference product |  |
| `calc_natural_gas_normalization` | `natural_gas` | normalized natural gas = attributable gas volume at declared reference conditions / conforming finished-card mass | reconciled gas volume; reference temperature and pressure; allocation driver; output mass | m3 per kg reference product |  |
| `calc_count_to_mass` | `finished_magnetic_stripe_cards` | output mass = accepted card count × lot-representative mean mass per accepted card | accepted count; sampled accepted-card masses | kg conforming output |  |
| `calc_nonfuel_material_balance` | all non-fuel process materials and their outputs | unexplained balance = net PVC sheet + net stripe foil + net ink + net thermo-print-compatible gloss oil + net protective gloss oil + net isopropanol + net process water − conforming card output − PVC scrap − waste ink − spent isopropanol solution − cleaning wastewater − direct isopropanol to air − every other separately named non-fuel material output − net increase in work in progress; use the same period and kg basis, and do not subtract a constituent again after it is included in a mixed-waste mass | reconciled non-fuel input masses; output and waste masses; named direct material emissions; composition records; work-in-progress change | dimensionally complete disclosed reconciliation result |  |
| `calc_isopropanol_balance` | `isopropanol`, `spent_isopropanol_cleaning_solution`, `printing_cleaning_wastewater`, `isopropanol_to_air` | unexplained isopropanol = net isopropanol input − recovered isopropanol − isopropanol in spent solution − isopropanol in wastewater − isopropanol retained in product or work in progress − destroyed isopropanol − isopropanol released to air; use constituent mass, not total mixed-stream mass | isopropanol issues and returns; formulation or analysis; recovery; waste-stream composition; control destruction; direct measurement | kg isopropanol reconciliation | `md-comar-26-11-19-18` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Retain the product specification and acceptance record linking the reported product to a physical magnetic-stripe card and disclosing any integrated circuit, substrate, dimensions, stripe specification, and personalization state. | approved specification; acceptance report; product label; classification review when combined technologies are present |
| `dq_temporal` | all foreground rows | Use the same representative period for material, energy, conforming output, and scrap records; explain shutdowns, startup lots, abnormal rejects, and any period shorter than 12 months. | period reconciliation and exception log |
| `dq_completeness` | foreground inventory | Cover all production lines, shifts, rework loops, quality rejects, printing and coating formulations, cleanup events, direct releases, liquid and solid wastes, thermal-fuel use and auxiliary loads inside the declared boundary; quantify excluded operations and justify any data gap. | line coverage matrix; meter map; material and solvent reconciliation; cleanup and waste logs; exclusion log |
| `dq_measurement` | mass and energy records | Use calibrated or invoice-reconciled instruments and retain unit conversions, sampling records, and allocation workpapers. | calibration certificate; invoice reconciliation; sampling record; calculation file |
| `dq_upstream` | background datasets | Match material form, recycled content, geography, technology, and reference period as closely as available; identify every proxy and sensitivity-critical mismatch. | dataset-selection log and supplier declarations |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | reference flow | Confirm that `finished_magnetic_stripe_cards` equals 1 kg after normalization and uses the declared factory-gate, unpackaged product state. |  |
| `validate_atomic_inventory` | inventory rows | Confirm that each row denotes one concrete product, waste, or energy exchange; reject umbrella utility, material, packaging, waste, or emission labels. |  |
| `validate_uuid_identity` | UUID-bearing rows | Confirm flow type, classification, flow property, unit group, product state, and the row-specific use against the public state-100 TianGong record; leave unresolved identities blank rather than substituting proxies. |  |
| `validate_period_alignment` | foreground records | Confirm that material, solvent, water, fuel, electricity, product, waste and direct-emission quantities use the same site, lines, product scope, and accounting period. |  |
| `validate_mass_reconciliation` | non-fuel process materials and outputs | Perform the declared dimensionally complete non-fuel material balance and constituent isopropanol balance; disclose unresolved imbalance, composition assumptions, work-in-progress changes, recovery and internal recirculation. |  |
| `validate_conditional_routes` | printing cleanup and thermal supply | Require positive records or an explicit not-applicable justification for every conditional row. A solvent-free claim must be supported by formulation and issue records; a no-cleanup claim by operating records; and a no-natural-gas claim by energy-supply and burner records. | `md-comar-26-11-19-18` |
| `validate_boundary_disclosure` | dataset metadata | Confirm disclosure of substrate, stripe specification, printing and curing route, personalization state, geography, period, scrap treatment, combined integrated-circuit features, and shipment-packaging exclusion. | `un-cpc-3-0-structure-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for magnetic-stripe cards |
| downstream_use | `secondary_dataset`; `background_dataset` after independent review and publication readiness checks |
| allowed_use | Cradle-to-gate product footprints and lifecycle models requiring a declared magnetic-stripe-card supply, when substrate, technology, geography, period, personalization state, and boundary are compatible |
| excluded_use | Smart cards or integrated-circuit-card proxies; other magnetic media; card use or end-of-life without added downstream processes; packaged delivery without separately modelled packaging |
| required_metadata | canonical PCR id; CPC reference; product specification; substrate and recycled content; dimensions and mean mass; stripe specification; blank/encoded/embossed/personalized state; print and curing technology; site geography; reference period; factory-gate and packaging boundary; allocation method; background dataset choices |
| required_quality_disclosure | metering and mass-measurement coverage; count-to-mass sampling; material and solid-output reconciliation; shared-electricity allocation; data gaps and proxies; scrap contamination and treatment; unresolved UUID and range-evidence needs |
| update_trigger | Change in substrate, stripe construction, printing or curing technology, personalization scope, site or electricity supply, recycled content, allocation method, product specification, or a material foreground intensity; otherwise review at least every three years |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved and original text verified 2026-09-12) | CPC 47910 product identity and separation from CPC 47920 smart cards and CPC 47530 other unrecorded magnetic media |
| `gbt-17554-2-2015` | `standard` | GB/T 17554.2-2015, 识别卡 测试方法 第2部分：带磁条的卡, official national-standard record, https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D80650D3A7E05397BE0A0AB82A (official record text verified 2026-09-12) | Professional Chinese terminology for cards with magnetic stripes and identification of the applicable card-test standard family |
| `watchdata-cn103699921a` | `literature` | Beijing WatchData System Co Ltd, CN103699921A, Invisible magnetic stripe card thermo-printing process, published 2 April 2014, https://patents.google.com/patent/CN103699921A/en (description paragraphs 0010-0018 compared with the original patent-page text on 2026-09-12) | Manufacturer-origin representative sequence of magnetic-stripe film pre-lamination, screen and offset printing, separate gloss-oil applications, sheet assembly and lamination, card punching, and conditional hot printing or embossing; no quantitative intensity adopted |
| `md-comar-26-11-19-18` | `standard` | Maryland Department of the Environment, COMAR 26.11.19.18, Control of Volatile Organic Compound Emissions from Screen Printing and Digital Imaging, https://regs.maryland.gov/us/md/exec/comar/26.11.19.18 (official regulation sections A(11), E and G compared with original text on 2026-09-12) | Plastic-card manufacturing boundary for screen and lithographic printing, drying ovens, adhesive application and lamination; conditional collection of inks, coatings, cleanup materials, isopropanol and direct VOC releases; regulatory limits are not empirical inventory ranges |
