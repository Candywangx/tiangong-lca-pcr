---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.carpets-and-other-textile-floor-coverings-knotted
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Carpets and other textile floor coverings, knotted

## 1. Scope and Applicability

This PCR applies to finished carpets and textile floor coverings whose pile is formed by individually tying pile-yarn knots around warp yarns and securing successive knot rows with weft picks. It covers hand-knotted construction, including symmetrical, asymmetrical, Jufti, and Spanish knot variants, made from declared wool, silk, cotton, other textile yarns, or declared blends.

The representative route is a wool-pile carpet with cotton warp and weft, produced from purchased yarn, hand knotted, washed, sheared, bound, dried, stretched, clipped, inspected, and packed at the manufacturing site. Machine-woven, tufted, flocked, needle-punched, braided, hooked, or non-textile floor coverings are excluded. Upstream fibre, yarn, dyeing, electricity, water, detergent, and packaging production remain linked upstream product systems unless controlled by the reporting site. Installation, use, cleaning during use, and end-of-life are outside the foreground production boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.carpets-and-other-textile-floor-coverings-knotted |
| classification_refs | CPC 3.0:27210 — Carpets and other textile floor coverings, knotted |
| covered_products | Finished textile floor coverings with pile yarn individually knotted to warp yarn and secured by weft picks; declared hand-knotted rugs and carpets of wool, silk, cotton, other textile yarns, or declared blends |
| excluded_products | Machine-woven non-knotted carpets; tufted or flocked carpets; needle-punched, braided, hooked, or non-textile floor coverings; installation systems and underlays sold separately |
| representative_product | Wool-pile hand-knotted carpet with cotton warp and weft, washed, sheared, stretched, clipped, inspected, and packed |
| production_route | Purchased yarn receipt; yarn opening and loom preparation; manual knotting and weft insertion; washing; shearing and side binding; drying and stretching; final clipping and inspection; packing |
| market_state | Finished, dry, quality-accepted, packed product at the manufacturing plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished knotted textile floor covering providing decorative and protective floor coverage |
| How much | 1 kg net dry mass of accepted carpet, excluding transport pallet and reusable transport equipment but including non-reusable sales packaging when supplied |
| How well | Conforms to the declared fibre composition, knot type, knot density, dimensions, pile height, colour/design, finishing route, moisture condition, and quality acceptance criteria |
| How long or cycle | Production through the manufacturing plant gate; service life is declared separately and is not assumed by this mass-based production reference |
| reference_flow_link | Output row `knotted_carpet_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Carpets and other textile floor coverings, knotted `a718c51e-66e1-40e5-bd73-00cb16f1b722` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fibre composition by mass; pile-yarn material and dyed state; warp and weft material; knot type; knot density; dimensions; pile height; finishing and washing route; dry-mass/moisture basis; packaging inclusion; production geography and period |

When constructing a foreground data package, every required qualifier shall be recorded in dataset metadata, the product description, the reference-flow comment, or an equivalent field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted finished knotted carpet | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net dry carpet mass on a calibrated scale after conditioning or record the measured moisture condition; exclude reusable transport equipment and normalize all exchanges to 1 kg accepted product. |
| `yarn_mass` | pile, warp, weft, and binding yarn inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record issued mass less returned unused yarn for each yarn identity and role; do not combine different fibre compositions or dyed states. |
| `water_mass` | supplied process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated meter data or a documented density conversion from measured volume at the stated temperature; do not substitute wastewater volume for supplied water. |
| `electricity_energy` | purchased alternating current | Net calorific value | kWh | Record metered electricity for the included process route and allocate shared meters only by a documented causal driver. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_integrated_route` | foreground manufacturing | Include receiving and issuing yarn, yarn opening, loom preparation, hand knotting and weft insertion, washing, shearing, side binding, applicable singeing, drying, stretching, final clipping, inspection, and non-reusable sales packaging controlled by the reporting site. | `cepc-carpet-production-process` |
| `boundary_purchased_inputs` | purchased product inputs | Keep purchased yarn, electricity, water, detergent, and packaging as visible product inputs and connect each accepted identity to an upstream dataset; do not absorb them into an undocumented aggregate. | `iso-14044-2006` |
| `boundary_inhouse_wet_processing` | in-house scouring or dyeing | When scouring or dyeing is controlled by the reporting site, add it as a separate foreground process and record every actual dye, auxiliary chemical, water input, energy input, waste stream, and direct emission as its own atomic exchange; apply the textiles BAT monitoring rules. | `eu-textiles-bat-2022`; `cepc-carpet-production-process` |
| `boundary_direct_releases` | site-controlled releases | Record every measured or calculated direct release to air, water, or soil and every transferred waste stream separately; do not replace actual pollutant identities with a combined emissions row. | `eu-textiles-bat-2022`; `iso-14044-2006` |
| `boundary_exclusions` | default production study | Exclude capital equipment, worker commuting, product installation, use-stage cleaning, service life, and end-of-life unless the declared goal and scope explicitly include them; disclose every applied exclusion. | `iso-14040-2006`; `iso-14044-2006` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased yarn and other product inputs received at the knotted-carpet manufacturing site |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | CPC 3.0 subclass 27210 only |
| recursive_input_rule | A purchased knotted carpet or knotted-carpet semi-product within the same category remains a separately quantified product input with its own upstream dataset; it is never recursively expanded inside the same foreground process. |
| upstream_dataset_requirement | Every purchased material, energy carrier, water supply, treatment service, and non-reusable packaging input requires an identity-matched upstream dataset or a disclosed unresolved data gap. |
| disclosure | Declare whether yarn is purchased dyed or dyed in-house, fibre composition, knot type and density, included finishing steps, washing chemistry, drying energy route, wastewater destination, waste treatment routes, and packaging inclusion. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_knotted_carpet_manufacturing` | Integrated knotted-carpet manufacture and finishing | `required` | Required for every conforming dataset; add separate in-house scouring or dyeing processes when controlled by the reporting site. | Converts declared pile, warp, and weft yarn into finished knotted carpet. | 1 kg accepted finished knotted carpet |

### Process: Integrated knotted-carpet manufacture and finishing (`integrated_knotted_carpet_manufacturing`)

#### Inputs

##### Product flows

###### Wool pile yarn (`wool_pile_yarn_input`)

Wool yarn issued to the loom for the knotted pile crosses the process boundary as one product input. The dataset shall declare fibre content, dyed state, yarn count/ply, supplier, lot, and mass.

- Selected flow: Yarn of wool, containing 85% or more by weight of wool, not put up for retail sale `10c7de33-bef0-4310-98e7-734d8e2e4c9f`
- Flow property / unit: Mass / kg
- Amount rule: issued mass minus identified unused yarn returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished knotted carpet
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_material_records`
- Sources: `cepc-carpet-production-process`

###### Cotton warp yarn (`cotton_warp_yarn_input`)

Cotton yarn tensioned longitudinally on the loom is recorded separately because it forms the structural warp. The dataset shall declare cotton content, yarn count/ply, sizing state, supplier, lot, and mass.

- Selected flow: Cotton yarn (other than sewing thread), containing 85% or more by weight of cotton `526fe0a1-be6d-4384-b609-4ca604628ec4`
- Flow property / unit: Mass / kg
- Amount rule: issued warp-yarn mass minus identified unused warp yarn returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished knotted carpet
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_material_records`
- Sources: `cepc-carpet-production-process`

###### Cotton weft yarn (`cotton_weft_yarn_input`)

Cotton yarn inserted between knot rows is recorded separately as the structural weft even when it shares the same Tiangong flow identity as warp yarn. Quantity is obtained from batch issue and return records.

- Selected flow: Cotton yarn (other than sewing thread), containing 85% or more by weight of cotton `526fe0a1-be6d-4384-b609-4ca604628ec4`
- Flow property / unit: Mass / kg
- Amount rule: issued weft-yarn mass minus identified unused weft yarn returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished knotted carpet
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_material_records`
- Sources: `cepc-carpet-production-process`

###### Cotton side-binding yarn (`cotton_binding_yarn_input`)

Cotton yarn used to bind and strengthen carpet sides is a distinct physical issue from warp and weft yarn. Record only the batch quantity consumed for side binding.

- Selected flow: Cotton yarn (other than sewing thread), containing 85% or more by weight of cotton `526fe0a1-be6d-4384-b609-4ca604628ec4`
- Flow property / unit: Mass / kg
- Amount rule: issued side-binding yarn mass minus identified unused yarn returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished knotted carpet
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_material_records`
- Sources: `cepc-carpet-production-process`

###### Process water for carpet washing (`process_water_input`)

Supplied water used for raw washing and final washing of the carpet is recorded at the manufacturing boundary. Shared-site water is apportioned only from calibrated submeter data or a documented causal allocation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured supplied process-water mass attributable to carpet washing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished knotted carpet
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater_records`
- Sources: `eu-textiles-bat-2022`; `cepc-carpet-production-process`

###### Nonionic carpet-washing detergent (`carpet_washing_detergent_input`)

The actual supplied nonionic detergent formulation used to wash the carpet is one product exchange. The supplier product name and formulation identifier shall be retained; the UUID remains unresolved until that exact formulation is mapped.

- Selected flow: Nonionic carpet-washing detergent, as supplied formulation
- Flow property / unit: Mass / kg
- Amount rule: weighed or invoiced detergent mass issued to carpet-washing batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished knotted carpet
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_chemical_records`
- Sources: `eu-textiles-bat-2022`

###### Low-voltage alternating current (`low_voltage_electricity_input`)

Purchased low-voltage alternating current used by loom auxiliaries, washing, shearing, clipping, lighting attributable to production, mechanical drying, stretching, and packing is one energy exchange. The delivery voltage and meter boundary shall be declared; no UUID is accepted until voltage semantics are confirmed.

- Selected flow: Alternating current, low voltage, facility supply
- Flow property / unit: Net calorific value / kWh
- Amount rule: metered electricity for included processes, with documented causal allocation for shared meters
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished knotted carpet
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-textiles-bat-2022`

###### Low-density polyethylene stretch film (`ldpe_packaging_film_input`)

Non-reusable low-density polyethylene stretch film remaining with the packed carpet at the plant gate is recorded as one packaging-material exchange. The grade, recycled content, thickness, and net incorporated mass shall be declared; no generic plastic-film UUID is accepted.

- Selected flow: Low-density polyethylene stretch film, non-reusable sales packaging
- Flow property / unit: Mass / kg
- Amount rule: net film mass incorporated into accepted packed product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished knotted carpet
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `cepc-carpet-production-process`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished knotted carpet (`knotted_carpet_output`)

The accepted finished carpet is the quantitative reference output after washing, drying, stretching, clipping, inspection, and packing. Record gross and excluded packaging masses so the net dry carpet basis is auditable.

- Selected flow: Carpets and other textile floor coverings, knotted `a718c51e-66e1-40e5-bd73-00cb16f1b722`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net dry carpet mass; normalize the data package to 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished knotted carpet
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_acceptance_records`
- Sources: `un-cpc-3-0`; `cepc-carpet-production-process`

##### Waste flows

###### Wool pile-yarn trimmings (`wool_pile_trimmings_output`)

Wool pile yarn cut away during knotting, shearing, embossing when applicable, and final clipping is recorded as one waste exchange. Keep it separate from cotton structural-yarn offcuts and disclose its treatment destination.

- Selected flow: Wool pile-yarn trimmings from knotted-carpet manufacture
- Flow property / unit: Mass / kg
- Amount rule: weighed collected wool pile trimmings by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished knotted carpet
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste_records`
- Sources: `cepc-carpet-production-process`

###### Cotton warp and weft yarn offcuts (`cotton_yarn_offcuts_output`)

Cotton warp, weft, fringe, and side-binding offcuts collected during loom release and finishing are recorded as one cotton-yarn waste exchange. Do not combine them with wool pile trimmings.

- Selected flow: Cotton warp and weft yarn offcuts from knotted-carpet manufacture
- Flow property / unit: Mass / kg
- Amount rule: weighed collected cotton yarn offcuts by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished knotted carpet
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste_records`
- Sources: `cepc-carpet-production-process`

###### Carpet-washing wastewater (`carpet_washing_wastewater_output`)

Wastewater leaving raw or final carpet washing for onsite or offsite treatment is recorded as one route-specific waste exchange. Record its destination, mass or metered volume conversion, and the monitored parameters relevant to the actual washing chemistry.

- Selected flow: Carpet-washing wastewater sent to declared treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass or documented density conversion from metered discharge volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished knotted carpet
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater_records`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivide` | separately measurable products, batches, and process steps | Avoid allocation by separate metering, batch records, and process subdivision before applying an allocation factor. | `iso-14044-2006` |
| `allocation_shared_utilities` | shared electricity, water, and site services | Use a documented causal driver such as machine hours, metered operating time, or measured water throughput; do not use production mass when it does not represent causality. | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `allocation_recovered_material` | yarn trimmings or other recovered material | Keep recovered material as an explicit waste or co-product output according to its actual legal and operational status; do not credit avoided production inside the foreground inventory. | `iso-14044-2006` |
| `allocation_unavoidable` | inseparable multi-product operations | If subdivision and causal allocation are not practicable, apply a disclosed physical relationship; use economic allocation only when no defensible physical relationship exists and report a sensitivity check. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_material_records` | `integrated_knotted_carpet_manufacturing` | pile, warp, weft, and binding yarn inputs | stock issue/return and batch bill of materials | product_id; supplier; lot; fibre_content; dyed_state; yarn_count_ply; role; issued_mass; returned_mass; batch_id | calibrated scale plus controlled stock issue and return records | kg | each issue and return | all conforming batches in the reporting period | each manufacturing site | sum issued minus returned mass by identity and role, then divide by accepted output mass | scale calibration; signed stock record; supplier specification; batch reconciliation |
| `cp_water_wastewater_records` | `integrated_knotted_carpet_manufacturing` | process water input and carpet-washing wastewater output | meter and discharge record | meter_id; timestamp; batch_id; supplied_water; wastewater_volume_or_mass; temperature; density_method; destination; pH; COD_or_TOC; TSS; relevant_chemistry_parameters | calibrated water/discharge meters and representative sampling under the applicable monitoring plan | kg; m3; parameter-specific units | each batch or continuous meter total; parameters at applicable monitoring frequency | all washing operations in the reporting period | each manufacturing site and washing line | reconcile opening/closing meter totals and allocate only with documented causal evidence | meter calibration; laboratory method; sample chain of custody; discharge log |
| `cp_washing_chemical_records` | `integrated_knotted_carpet_manufacturing` | nonionic carpet-washing detergent | formulation issue record | supplier_product; formulation_id; lot; active_content; issued_mass; returned_mass; batch_id | calibrated scale or controlled dispensing system plus supplier specification | kg | each batch | all washing batches in the reporting period | each washing location | sum net issued mass by exact formulation and divide by accepted output mass | scale/dispenser calibration; supplier SDS or specification; issue/return record |
| `cp_energy_records` | `integrated_knotted_carpet_manufacturing` | low-voltage alternating current | meter and operating record | meter_id; voltage_level; opening_reading; closing_reading; timestamp; process_step; machine_hours; batch_id | calibrated submeter; shared meter requires documented causal allocation | kWh | continuous or each reporting interval | representative full reporting period including seasonal drying conditions | each manufacturing site | sum included-process electricity and divide by accepted output mass | meter calibration; invoices; operating logs; allocation worksheet |
| `cp_packaging_records` | `integrated_knotted_carpet_manufacturing` | LDPE sales-packaging film | packaging issue and product specification | material_grade; supplier; recycled_content; thickness; issued_mass; returned_mass; product_batch | calibrated scale and controlled packaging issue/return record | kg | each packaging batch | all accepted product in the reporting period | each packing location | net incorporated non-reusable film divided by accepted output mass | scale calibration; supplier specification; packaging reconciliation |
| `cp_solid_waste_records` | `integrated_knotted_carpet_manufacturing` | wool trimmings and cotton offcuts | segregated waste weighing and transfer record | waste_identity; fibre_content; source_step; batch_id; gross_mass; tare_mass; destination; recovery_or_disposal_route | segregated containers, calibrated scale, and matched transfer note | kg | each container or transfer | all conforming production in the reporting period | each manufacturing site and destination | sum net mass by exact waste identity and destination, then divide by accepted output mass | scale calibration; container log; transfer note; treatment confirmation |
| `cp_product_acceptance_records` | `integrated_knotted_carpet_manufacturing` | accepted finished knotted carpet output | final inspection and weighing record | product_id; batch_id; fibre_composition; knot_type; knot_density; dimensions; pile_height; finishing_route; moisture_condition; net_carpet_mass; packaging_mass; acceptance_status | calibrated scale plus documented final inspection | kg | each finished carpet | all accepted carpets in the reporting period | each manufacturing site | sum accepted net dry carpet mass; rejected product remains a separate disposition | scale calibration; inspection record; product specification; rejection log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_reference_mass` | all foreground exchanges | normalized exchange = collected exchange amount / accepted net dry carpet mass | collected exchange amount; accepted net dry carpet mass | exchange per 1 kg accepted carpet | `iso-14044-2006` |
| `net_material_issue` | yarn, detergent, and packaging inputs | net consumed mass = issued mass - same-identity unused mass returned to controlled stock | issued mass; returned mass; exact material identity | net input mass | `iso-14044-2006` |
| `wastewater_mass_conversion` | metered wastewater reported by volume | wastewater mass = metered volume × documented density at the stated condition | discharge volume; density; temperature or stated condition | kg wastewater | `eu-textiles-bat-2022` |
| `pollutant_load` | monitored wastewater parameters | pollutant load = flow-proportional concentration × wastewater volume, with units converted consistently | concentration; matched discharge volume; sampling period | pollutant mass for a separately identified elementary flow or treatment record | `eu-textiles-bat-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and yarn inputs | Preserve exact product identity and required qualifiers; do not substitute woven, tufted, flocked, or generic carpet flows for CPC 27210. | Tiangong state_code 100 direct read; supplier specifications; final inspection record; `un-cpc-3-0` |
| `dq_measurement_traceability` | all foreground amounts | Retain calibrated-meter, scale, invoice, stock, batch, sampling, and calculation records linking each normalized value to raw evidence. | calibration certificates; invoices; signed records; calculation worksheet; `iso-14044-2006` |
| `dq_process_completeness` | site inventory | Reconcile annual or reporting-period consumption of water, energy, textile materials, process chemicals, wastewater, recovered material, and each waste type, broken down to process level as far as practicable. | site reconciliation; process meters; waste transfer records; `eu-textiles-bat-2022` |
| `dq_route_representativeness` | reporting period | Cover a representative full production period or complete declared campaign, including applicable washing and drying conditions, and disclose exclusions, abnormal operation, and data gaps. | production schedule; operating log; disclosed data-quality statement; `iso-14044-2006` |
| `dq_wastewater_monitoring` | in-house washing, scouring, or dyeing | Characterize relevant wastewater streams at key locations and use applicable EN, ISO, national, or equivalent scientific methods for relevant parameters. | sampling plan; laboratory reports; chain of custody; `eu-textiles-bat-2022` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm the output is the state_code 100 Product flow for CPC 27210 with Mass and kg, and confirm all required product qualifiers are present. | `un-cpc-3-0` |
| `validate_atomic_inventory` | every inventory row | Confirm each row contains one specific exchange; reject collection labels, selector instructions, combined utilities, combined materials, combined wastes, or combined emissions. | `iso-14044-2006` |
| `validate_uuid_readback` | every UUID-bearing flow | Confirm each UUID by both flow-hybrid-search and Tiangong CLI state_code 100 direct read; remove or leave blank any UUID whose flow type, material/state, classification, property, unit, route, or destination is not semantically exact. | `iso-14044-2006` |
| `validate_foreground_evidence` | every amount | Confirm every non-reference amount is derived from the declared collection protocol and raw foreground record; reject AI estimates and undocumented default ranges. | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `validate_route_expansion` | in-house scouring, dyeing, combustion, or wastewater treatment | Confirm each controlled route is represented by a separate process and each actual chemical, energy carrier, waste, and direct emission is a separate atomic exchange. | `eu-textiles-bat-2022` |
| `validate_mass_reconciliation` | accepted product, yarn inputs, and segregated textile wastes | Reconcile issued and returned yarn, accepted product mass, measured textile wastes, inventory change, and documented moisture basis; investigate and disclose material discrepancies. | `iso-14044-2006` |
| `validate_allocation` | shared operations | Confirm subdivision was attempted first and every remaining allocation uses a documented causal or disclosed fallback basis with sensitivity where required. | `iso-14044-2006` |
| `validate_completeness_disclosure` | published dataset | Confirm included/excluded stages, geography, period, yarn dyed state, finishing steps, drying route, wastewater destination, waste routes, packaging basis, missing UUIDs, and data gaps are disclosed. | `iso-14040-2006`; `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for finished knotted carpet |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | LCI and LCA models needing a mass-based plant-gate dataset for a declared CPC 27210 knotted carpet route with matching qualifiers |
| excluded_use | Machine-woven, tufted, flocked, needle-punched, braided, hooked, or non-textile floor coverings; service-life comparisons without a separately justified functional equivalence; undisclosed extrapolation across fibre composition, knot density, finishing route, geography, or period |
| required_metadata | canonical PCR id; CPC reference; product and yarn qualifiers; plant geography; reporting period; technology and process route; foreground/upstream boundary; allocation; wastewater and waste destinations; reference-flow UUID/property/unit; source ids |
| required_quality_disclosure | raw-record coverage; measurement and calibration methods; meter allocation; moisture basis; missing or rejected UUIDs; exclusions; data gaps; abnormal operations; uncertainty and representativeness limits |
| update_trigger | Change in product identity, fibre composition, knotting or finishing route, yarn dyed state, washing chemistry, drying energy route, wastewater treatment, waste destination, packaging system, plant geography, or materially different reporting-period performance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, structure and explanatory notes, https://unstats.un.org/unsd/classifications/Econ/CPC.cshtml (retrieved 2026-08-13) | Product-category identity and CPC 27210 scope |
| `cepc-carpet-production-process` | `official_guidance` | Carpet Export Promotion Council, Carpet Production Process, https://www.cepc.co.in/carpet-production-process (retrieved 2026-08-13) | Hand-knotted construction, yarn roles, washing, shearing, binding, drying, stretching, clipping, and packing process decomposition |
| `eu-textiles-bat-2022` | `official_guidance` | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508 (retrieved 2026-08-13) | Process-level material, water, energy, wastewater, waste, and emission monitoring; wet-processing and wastewater rules |
| `iso-14040-2006` | `standard` | ISO 14040:2006, Environmental management — Life cycle assessment — Principles and framework, https://www.iso.org/standard/37456.html (confirmed current 2022; retrieved 2026-08-13) | Goal-and-scope, boundary, interpretation, and disclosure principles |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html (confirmed current 2022; retrieved 2026-08-13) | LCI data collection, allocation, data quality, consistency, and reporting rules |
