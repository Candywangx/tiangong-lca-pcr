---
pcr_id: "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chillies-and-peppers-dry-capsicum-spp-pimenta-spp-raw"
language: "en-US"
status: candidate
sync_with: "pcr.zh-CN.md"
content_maturity: authored_methodology
translation_status: aligned
---
# Raw Dried Chillies and Peppers (Capsicum or Pimenta) at Primary Drying Gate
## 1. Scope and Applicability
This PCR guides a foreground data package for unprocessed dried fruit of *Capsicum* spp. or *Pimenta* spp. under CPC 3.0 `01652`. The declared product is whole dried fruit after harvest, drying and first cleaning or grading, at the primary drying gate. The package must identify genus and species or cultivar; *Pimenta dioica* allspice berries and *Capsicum* chilli/paprika fruits require separate route records. Mixed genera require disaggregated inventories and outputs; no shared crop factor or moisture target is inferred.
The boundary starts with managed cultivation or an explicitly identified sourced fruit input and ends with net accepted raw dried fruit. It includes harvest, first handling, natural/solar or mechanical drying, and first cleaning or sorting if performed before the gate. Purchased upstream inputs are linked to background datasets. Fresh green chillies and peppers (`01231`), *Piper* pepper (`01651`), crushed, ground or otherwise processed dried chilli (`23922`), blends, extracts, sterilization, retail packing and downstream distribution are outside this reference output. A purchased fresh-fruit drying-only foreground dataset must declare its upstream fruit dataset and cannot represent crop cultivation it did not collect. | `un-cpc-3-exp-2025`; `codex-cxs-353-2022`; `codex-cxs-358-2024`

## 2. Product Category Identity
| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chillies-and-peppers-dry-capsicum-spp-pimenta-spp-raw` |
| classification_refs | CPC 3.0 `01652`, raw dried *Capsicum* or *Pimenta* fruit; mapping relation: exact |
| covered_products | Whole raw dried chilli, paprika fruit, or allspice fruit, with genus, species, style and drying route declared |
| excluded_products | fresh green peppers; *Piper* pepper; crushed, powdered, blended, extracted or otherwise processed spice |
| representative_product | 1 kg net accepted whole raw dried fruit at the declared primary drying gate |
| production_route | Annual or seasonal managed *Capsicum* crop, or perennial managed *Pimenta* fruit production, followed by harvest and route-specific drying |
| market_state | Whole dried unprocessed fruit, bulk or first transport container; target moisture and grade declared by applicable specification |
*Capsicum* and *Pimenta* are alternative biological production parents, not interchangeable botanical inputs. Natural/solar and mechanical drying are alternative technologies under the same drying activity; concurrent pre-drying and finishing steps may coexist when recorded separately. | `codex-cxs-353-2022`; `codex-cxs-358-2024`; `unece-ddp-24-2013`

## 3. Reference Flow
| Field | Value |
| --- | --- |
| What | Whole raw dried *Capsicum* or *Pimenta* fruit at the primary drying gate |
| How much | 1 kg net accepted dried fruit |
| How well | Declare genus/species, whole form, incoming and outgoing moisture, grade, drying route, geography and gate |
| How long or cycle | One declared harvest season and associated drying lots |
| reference_flow_link | accepted_dried_fruit |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | whole raw dried Capsicum or Pimenta fruit; UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | genus and species; cultivar or commercial type; whole raw state; moisture; grade; natural/solar or mechanical drying; harvest season; geography; declared gate; bulk/container state |
The reference amount excludes tare, free water removed, rejects, stems separated before the gate, and off-grade fruit. No CPC-specific product-flow UUID is claimed until Tiangong identity lookup succeeds.

## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted dried output | Mass | kg | Weigh net accepted whole dried fruit at the declared gate; exclude tare and rejects. |
| `moisture_basis` | harvested and dried fruit | Mass and moisture fraction | kg and % wet basis | Measure or document moisture for incoming and outgoing lots; convert by conserved dry matter with separately measured removals. |
| `drying_water` | drying output | Mass | kg | Calculate water removed as incoming water minus water retained in accepted and rejected solids, adjusted for added water if any. |
| `crop_area_time` | managed cultivation | Area-time | ha·season or ha·year | Use crop season for annual Capsicum and declared orchard year/fruit-bearing period for perennial Pimenta; record establishment attribution if included. |
| `energy_carrier` | drying and field energy | Energy, Mass or Volume | kWh, MJ, kg or L | Preserve carrier, fuel moisture, conversion basis, measured operation and batch linkage. |
| `nutrient_basis` | fertilizer and emissions | Mass | kg product and kg nutrient | Record formulated mass and nutrient composition separately; emission calculations use declared nutrient inputs. |

## 5. System Boundary
The managed production node records the crop or fruiting-tree object, geography, planted area or orchard area, seedling or tree stock, irrigation, nutrient and pest-management inputs, field energy, land use and relevant direct emissions. Capsicum and Pimenta routes may have different planting periods, perennial infrastructure and establishment attribution; collect each route rather than applying one crop factor. Harvest is a distinct node because it creates a measured fresh-fruit hand-off with collection loss. Drying stabilizes this moist, perishable input to a measured whole dry state; first cleaning and grading hand off accepted, downgraded, rejected and waste streams separately. | `codex-cxs-353-2022`; `codex-cxs-358-2024`; `ipcc-2019-managed-soils`
### Boundary Rules
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_raw_dried` | reference product | Include drying and first cleaning needed for whole raw dried fruit; exclude crushing, milling, extraction, blending and later treatment. | `un-cpc-3-exp-2025`; `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `boundary_route_identity` | production | Keep Capsicum annual/seasonal and Pimenta perennial inventories separate; declare whether cultivation is collected or supplied as an upstream fruit dataset. | `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `boundary_drying_delta` | drying | Declare natural/solar and mechanical steps, their batch or continuous mode, energy and service inputs, moisture change and weather exposure; include all steps before the gate. | `unece-ddp-24-2013`; `mass-balance-identity` |
| `boundary_output_states` | harvest, drying, sorting | Separate accepted dry fruit, downgraded fruit, rejected fruit, stems/foreign material, other recoverable residues, evaporated water and unexplained loss by fate. | `mass-balance-identity` |
### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | Identified managed crop/tree and planted area, or documented purchased fresh-fruit lot at drying intake |
| starting_condition_role | biological production input or purchased upstream product; never a second reference output |
| product_classification_scope | CPC 01652 whole raw dried Capsicum/Pimenta fruit; fresh 01231, Piper 01651 and processed 23922 excluded |
| recursive_input_rule | Same-category dried fruit used for re-drying or blending is separately sourced and measured; do not recursively treat it as this harvest's new output. |
| upstream_dataset_requirement | Planting stock, fertilizers, water supply, fuels, electricity, equipment, purchased fresh fruit and treatment services need representative background datasets or documented exclusion. |
| disclosure | genus/species, route, season/site, fruit input source, moisture and grade before/after drying, drying technology, batch yield, rejects/fate, gate and attribution decisions |

## 6. Process Inventory Structure
### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_fruit_production` | Managed Fruit Production | conditional | when cultivation is inside the foreground | foreground | crop or orchard season |
| `fruit_harvest` | Fruit Harvest and Collection | conditional | when cultivation is inside the foreground | foreground | fresh fruit collected |
| `primary_drying` | Primary Fruit Drying | required | all included natural/solar and mechanical drying steps | foreground | dried fruit at measured moisture |
| `first_cleaning_grading` | First Cleaning and Grading | conditional | when cleaning or grading occurs before the declared gate | foreground | accepted whole dried fruit |

### Process: Managed Fruit Production (`managed_fruit_production`)
#### Inputs
##### Product flows

###### Planting stock and propagation material (`planting_stock`)
Declare seed or planting stock for Capsicum and seedlings or tree maintenance for Pimenta.
- Selected flow: named planting material
- Flow property / unit: Mass / kg
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_records`
- Sources: `codex-cxs-353-2022`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fertilizer, urea input (`managed_fruit_production_agricultural_nutrient_inputs`)

Include this conditional card only when Fertilizer, urea is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, urea
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, urea used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_records`

###### Fertilizer, monoammonium phosphate input (`managed_fruit_production_agricultural_nutrient_inputs_monoammonium_phosphate`)

Include this conditional card only when Fertilizer, monoammonium phosphate is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, monoammonium phosphate
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, monoammonium phosphate used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_records`

###### Fertilizer, potassium chloride input (`managed_fruit_production_agricultural_nutrient_inputs_potassium_chloride`)

Include this conditional card only when Fertilizer, potassium chloride is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, potassium chloride
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, potassium chloride used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_records`

###### Cattle manure, as applied input (`managed_fruit_production_agricultural_nutrient_inputs_cattle_manure`)

Include this conditional card only when Cattle manure, as applied is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Cattle manure, as applied
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Cattle manure, as applied used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_records`

###### Agricultural limestone input (`managed_fruit_production_agricultural_nutrient_inputs_agricultural_limestone`)

Include this conditional card only when Agricultural limestone is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Agricultural limestone
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Agricultural limestone used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_records`

Required crop-protection records: before completing the foreground package, enumerate every actually applied formulated product separately, retaining trade name, active ingredient, salt or chemical form, concentration, density where needed, application quantity, date and treated area. Select one physically specific product identity per exchange. Derive active-substance releases separately by substance and receiving compartment. Missing formulation identity is a completeness gap; do not replace it with a generic pesticide, invented example, or assumed zero.

###### Irrigation water input (`field_water_energy`)

Include this conditional card only when Irrigation water is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Amount rule: Measured quantity of Irrigation water used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_records`

###### Electricity, medium voltage input (`field_water_energy_electricity`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_records`

###### Diesel fuel input (`field_water_energy_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_records`

##### Waste flows
No waste input is presumed; any returned compost is recorded with origin and burden treatment.

##### Elementary flows
Record land occupation, source-specific water withdrawal and managed-soil emissions from collected crop inputs; do not infer zero emissions from missing records. | `ipcc-2019-managed-soils`

#### Outputs
##### Product flows

###### Standing fruit crop transferred to harvest (`standing_fruit`)
Record the managed fruit state at the production-to-harvest hand-off by genus and season.
- Selected flow: standing Capsicum or Pimenta fruit crop
- Flow property / unit: Mass / kg
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `mass-balance-identity`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 30
  - Unit: kg/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows
Record field residues and rejected fruit separately, with retained, removed, recovered or disposal fate.
##### Elementary flows
Direct crop emissions are calculated only from documented inputs and methods.

### Process: Fruit Harvest and Collection (`fruit_harvest`)
#### Inputs
##### Product flows

###### Electricity, medium voltage (`harvest_services`)

Include this exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured Electricity, medium voltage supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_records`
- Sources: `mass-balance-identity`

###### Diesel fuel (`harvest_services_diesel`)

Include this exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured Diesel fuel supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_records`
- Sources: `mass-balance-identity`

##### Waste flows
No generic waste input is presumed.
##### Elementary flows
Record direct exhaust where measured; fuel upstream burdens remain in background datasets.
#### Outputs
##### Product flows

###### Collected fresh fruit sent to drying (`fresh_fruit_handoff`)
Weigh fresh whole fruit and record moisture, botanical identity, harvest date and lot.
- Selected flow: fresh Capsicum or Pimenta fruit
- Flow property / unit: Mass / kg
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `mass-balance-identity`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 30
  - Unit: kg/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows
Record uncollected fruit, field rejects and incidental material separately with destination.
##### Elementary flows
No new elementary output is presumed.

### Process: Primary Fruit Drying (`primary_drying`)
#### Inputs
##### Product flows

###### Fresh fruit to drying (`drying_fruit_input`)
Record the fresh-fruit hand-off or purchased lot, incoming mass and moisture.
- Selected flow: whole fresh Capsicum or Pimenta fruit
- Flow property / unit: Mass / kg
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_lot`
- Sources: `mass-balance-identity`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 30
  - Unit: kg/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage (`drying_energy`)

Include this exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured Electricity, medium voltage supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drying_lot`
- Sources: `unece-ddp-24-2013`

###### Diesel fuel (`drying_energy_diesel`)

Include this exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured Diesel fuel supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drying_lot`
- Sources: `unece-ddp-24-2013`

###### Purchased steam (`drying_energy_steam`)

Include this exchange only when Purchased steam is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Measured Purchased steam supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drying_lot`
- Sources: `unece-ddp-24-2013`

##### Waste flows
If a recovered heat or waste-derived fuel enters drying, record source and burden treatment; none is presumed.
##### Elementary flows
Record direct combustion emissions if fuel burns within the foreground.

#### Outputs
##### Product flows

###### Whole dried fruit before grading (`dried_fruit_handoff`)
Weigh the stabilized whole dried fruit at measured moisture before first grading.
- Selected flow: whole raw dried Capsicum or Pimenta fruit
- Flow property / unit: Mass / kg
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_lot`
- Sources: `mass-balance-identity`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows
Record damaged, mouldy or otherwise rejected fruit and its recovery, treatment or disposal route; re-dried fruit remains linked to its original batch.
##### Elementary flows
Evaporated water is calculated from measured water balance and reported as moisture removed where the inventory convention requires it.

### Process: First Cleaning and Grading (`first_cleaning_grading`)
#### Inputs
##### Product flows

###### Dried fruit entering sorting (`sorting_input`)
Record the whole dried fruit hand-off without counting it as newly harvested product.
- Selected flow: whole dried fruit before sorting
- Flow property / unit: Mass / kg
- Amount rule: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_records`
- Sources: `mass-balance-identity`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage (`sorting_inputs`)

Include this exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured Electricity, medium voltage supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grade_records`
- Sources: `mass-balance-identity`

###### Paperboard packaging (`sorting_inputs_paper`)

Record Paperboard packaging only when this material crosses the declared process boundary. Retain lot, physical state, composition where relevant, and actual destination. Record other materials independently rather than treating this card as a selector or material bundle. This is a conditional material example, not a packaging requirement. Measure reuse and replacement and allocate the material once across its documented uses.
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Selected flow: Paperboard packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured net quantity of Paperboard packaging, reconciled to the linked lot and process balance, then normalized once to the declared reference output; retain moisture and any density conversion evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grade_records`
- Sources: `mass-balance-identity`

###### Polyethylene packaging film (`sorting_inputs_film`)

Record Polyethylene packaging film only when this material crosses the declared process boundary. Retain lot, physical state, composition where relevant, and actual destination. Record other materials independently rather than treating this card as a selector or material bundle. This is a conditional material example, not a packaging requirement. Measure reuse and replacement and allocate the material once across its documented uses.
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Measured net quantity of Polyethylene packaging film, reconciled to the linked lot and process balance, then normalized once to the declared reference output; retain moisture and any density conversion evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grade_records`
- Sources: `mass-balance-identity`

##### Waste flows
No waste input is presumed.
##### Elementary flows
Record dust releases if measured; do not treat separated soil or stems as accepted product.
#### Outputs
##### Product flows

###### Accepted whole raw dried fruit (`accepted_dried_fruit`)
Weigh each accepted grade at declared moisture and sum only grades within the declared reference specification.
- Selected flow: whole raw dried Capsicum or Pimenta fruit; UUID unresolved
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: measure by named operation and lot, then normalize to 1 kg net accepted raw dried fruit

- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted raw dried fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_records`
- Sources: `codex-cxs-353-2022`
- Range: Provisional non-negative screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1.1
  - Unit: kg/kg
  - Basis: broad first-pass screen per 1 kg accepted fruit; replace with route data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows
Record downgraded but usable fruit, rejects, separated stems/foreign material and dust separately. State whether each is reworked, sold, recovered or discarded; only a justified co-product receives allocation.
##### Elementary flows
No generic elementary flow is presumed.

## 7. Allocation and Co-product Handling
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_primary` | crop and drying lots | Attribute measured operations to botanical route, site, season and batch first; normalize all burdens to net accepted whole dried output. | `mass-balance-identity` |
| `allocation_offgrade` | downgraded fruit | Keep off-grade but marketable fruit distinct. Prefer subdivision by grade; if a genuine co-product cannot be subdivided, document the chosen physical or economic allocation and prices/quantities. | `mass-balance-identity` |
| `allocation_rework` | re-dried or resorted fruit | Link rework energy and losses to the original batch; count the accepted mass only at final exit and never double count shared-run or changeover burdens. | `mass-balance-identity` |
| `allocation_residue` | stems, rejects, residues | Record fate and any recovery credit explicitly; do not assign product burden or avoided burden by default. | `mass-balance-identity` |
Annual Capsicum and perennial Pimenta output years cannot share an undeclared denominator. For Pimenta, document bearing years and any establishment or shared orchard burden attribution. A batch dryer must record run-level input, output, cleaning and changeover; continuous drying must record period mass balance and stable operating window.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Inventory completeness: conditional named cards are examples of individual exchanges, not an exhaustive recipe or a requirement to use those products. Before completing a foreground package, enumerate every actual planting stock, nutrient, crop-protection formulation, asset material, operating service, carrier, packaging material, waste stream and applicable elementary substance separately, using its physical identity, state, native property/unit, origin or receiving compartment, and measured or method-calculated quantity. Missing identity or quantity remains a completeness gap, never an assumed zero. Preserve the actual lot and phase basis; do not sum intermediate transfers as additional final output or duplicate burdens included in purchased services.

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.

### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_records` | `managed_fruit_production` | cultivation inputs | farm records | genus; species; field; area; season; stock; fertilizer; nutrient; pesticide; water; energy | invoices, field logs and meters; Raw aggregation and attribution: sum by botanical route and season | kg; ha; m3; kWh | each operation | full declared crop season or Pimenta orchard year | each site | per declared reference flow | dated records and meter calibration |
| `cp_harvest_records` | `fruit_harvest` | fresh fruit hand-off | harvest tickets | lot; date; fresh mass; moisture; field; losses; machinery fuel | weighbridge and harvest logs; Raw aggregation and attribution: sum measured lots; retain losses | kg; %; L | each lot | full harvest | each source field | per declared reference flow | tare and scale checks |
| `cp_drying_lot` | `primary_drying` | drying mass and energy | drying run log | lot; start/end; input/output mass and moisture; route; fuel; electricity; rejects; rework | calibrated scale, moisture test and meter; Raw aggregation and attribution: dry-matter and water balance by lot | kg; %; kWh; MJ | each run or continuous period | all declared drying | each dryer | per declared reference flow | calibration, moisture method and run linkage |
| `cp_grade_records` | `first_cleaning_grading` | accepted and off-grade outputs | grade log | lot; accepted grade mass; moisture; downgraded; rejects; stems; destination; energy | calibrated scale and grade records; Raw aggregation and attribution: sum accepted grades only | kg; %; kWh | each lot | all gate output | each sorter | per declared reference flow | grade specification and reconciliation |
| `cp_phase1_environment_coverage` | managed_fruit_production | managed environmental coverage by actual node | site/activity/method ledger | actual production nodes; soil/substrate route; climate/soil; nutrient product mass and composition; residue fate/N; relevant mineralisation/organic-soil/excreta activity; method/tier/equation/version; pathway factors and units; lime/urea; actual fuels; substance/compartment; supplier coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_matter` | drying lot | incoming dry matter = incoming mass × (1 − incoming wet-basis moisture); reconcile with all dried solids and losses | masses and moisture tests | dry-matter balance | `mass-balance-identity` |
| `calc_water_removed` | drying lot | incoming water − water retained in all dry outputs − separately measured liquid exits, adjusted for added water | masses and moisture tests | water removed, kg | `mass-balance-identity` |
| `calc_normalize` | complete package | divide attributed input/emission by net accepted dried kg at the declared gate | attributed totals and accepted mass | inventory per kg | `mass-balance-identity` |
### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | actual managed-production nodes | For the actual owned managed-production node(s), require an applicability ledger for direct soil N2O, volatilisation/deposition-derived indirect N2O, leaching/runoff-derived indirect N2O, NH3/NOx and nutrient losses, plus actual liming/urea-use CO2. Primary calculation precedence is a representative pathway measurement, then a validated site/national method applicable to the crop, soil and management; otherwise use the compatible 2006 IPCC/2019-refined managed-soil equations and climate/input-specific factor selection for N2O and lime/urea CO2. Retain the exact edition, equation, tier, activity and factor units, climate and management applicability; no universal dose or emission factor is prescribed. Non-soil/protected routes need a method valid for their actual medium; do not force soil factors onto an inapplicable route. Use the same period/field N ledger for synthetic and organic additions, residues, actual relevant mineralisation/organic-soil and excreta pathways; demonstrate absent pathways rather than infer zero. Calculate direct and each indirect component separately, then assign each once to matching existing or new concrete cards; never add a total to its components. Convert N2O-N to molecular N2O by 44/28 once. NH3, NOx and nutrient/pesticide loss require an applicable measured or documented substance/fate model; total N/P or an unexplained balance residual is not a compound release. Keep actual receiving compartments and molecular versus elemental/reporting bases explicit; indirect formation does not remove the same N from the source ledger twice. Include actual local combustion releases separately using fuel-specific combustion-only methods; purchased electricity/heat/services retain upstream coverage once. Add one identity-specific exchange only for a supported release and reuse an existing matching card, with verified UUID or explicit unresolved identity. Missing applicable method/activity/factor/identity blocks completeness; it is not a justified zero. Attribute raw activity/release totals and normalize once to the matched accepted reference output. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference | `review-ipcc-soils-2019` |

### Data Quality Requirements
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all lots | Botanical identity, whole raw form and route must be traceable to each accepted output. | source lot and grade records |
| `dq_moisture` | drying | Incoming and outgoing moisture must be measured or documented with method and sampling plan; no universal cross-genus target is assumed. | moisture test and specification |
| `dq_balance` | harvest through gate | Reconcile accepted, downgraded, rejected and lost mass by lot; explain differences. | signed mass-balance sheet |

## 9. Validation Rules
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope` | product identity | Reject green fresh fruit, Piper pepper, and crushed/ground or otherwise processed dried spice as this reference product. | `un-cpc-3-exp-2025` |
| `validation_route` | process map | Verify Capsicum/Pimenta route, cultivation inclusion, sun/solar or mechanical stages, and batch or continuous attribution against current records. | `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `validation_moisture` | drying | Check measured incoming/outgoing moisture and applicable product specification separately by species and market; do not apply one generic threshold. | `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `validation_balance` | drying and sorting | Reconcile dry matter and water; accepted output must exclude rejected, downgraded and reworked-in-process mass until final exit. | `mass-balance-identity` |
| `validation_identity_gap` | reference flow | A dataset may not claim a fixed Tiangong reference flow while its UUID remains unresolved. | `un-cpc-3-exp-2025` |

## 10. Published Dataset Profile
| Field | Value |
| --- | --- |
| dataset_role | Foreground raw dried fruit production package |
| downstream_use | `secondary_dataset`; `background_dataset` after route and identity review |
| allowed_use | Whole raw dried Capsicum or Pimenta fruit as an input to declared downstream processing or sale |
| excluded_use | Fresh green pepper, Piper pepper, powdered spice, blends or extract production as the same output |
| required_metadata | species; cultivation source; site; season; drying route; batch mode; moisture; grade; gate; reference-flow UUID when resolved |
| required_quality_disclosure | measurement coverage; moisture method; missing flows; provisional ranges; dry-matter balance; allocation and reject treatment |
| update_trigger | change in botanical route, drying technology, target moisture/grade, gate, allocation or representative records |
## 11. Data Sources
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-exp-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, <https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf> | CPC 01652 raw dried fruit boundary and exclusions |
| `codex-cxs-353-2022` | standard | Codex Alimentarius, CXS 353-2022, Standard for Dried or Dehydrated Chilli Pepper and Paprika, <https://www.fao.org/fao-who-codexalimentarius/codex-texts/standards/en/> | Capsicum dried-product styles and route-specific quality specification |
| `codex-cxs-358-2024` | standard | Codex Alimentarius, CXS 358-2024, Standard for Spices Derived from Dried or Dehydrated Fruits and Berries, <https://www.fao.org/fao-who-codexalimentarius/codex-texts/standards/en/> | Pimenta dioica allspice identity and dried-product specification |
| `unece-ddp-24-2013` | standard | UNECE, DDP-24 Whole Dried Chilli Peppers, <https://unece.org/trade/documents/2013/02/standards/chilli-peppers-whole-dried> | Whole dried Capsicum form and drying route |
| `ipcc-2019-managed-soils` | official_guidance | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html> | Managed-soil emission accounting inputs |
| `mass-balance-identity` | method_factor | Conservation of dry matter and water across measured harvest, drying, and sorting stages | Drying mass balance and reconciliation |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct/indirect N2O and lime/urea CO2 method context; factors require actual applicability and site activity, not a product default. |
