---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.raspberries-blackberries-mulberries-and-loganberries
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raspberries, blackberries, mulberries and loganberries

## 1. Scope and Applicability

This candidate PCR covers managed production of fresh raspberries, blackberries, mulberries and loganberries from crop management through harvest, primary conditioning, grading and dispatch at the farm-gate or first marketable outlet. It covers open-field, protected and perennial systems when declared. It excludes nursery material, retail, consumer use and processing into frozen, dried, juice, jam or wine products.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.raspberries-blackberries-mulberries-and-loganberries |
| classification_refs | CPC 3.0 / 01353; mapping relation: exact |
| covered_products | Fresh raspberries, blackberries, mulberries and loganberries |
| excluded_products | Processed products; nursery plants and propagating material |
| representative_product | Marketable fresh berries, with species, cultivar and grade declared |
| production_route | Managed biological production → harvest → primary conditioning → grading/sorting → dispatch |
| market_state | Fresh marketable product at declared outlet condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh berries at the declared outlet |
| How much | 1 kg |
| How well | Species, cultivar, system, season, quality grade, condition and saleable-yield definition declared |
| How long or cycle | One declared production season; perennial establishment and multi-year attribution disclosed |
| reference_flow_link | `reference_product_at_declared_handoff` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raspberries, blackberries, mulberries and loganberries `562e96d5-9c9f-4b90-877c-b2ebf33c87cc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; cultivar; production system; harvest season; quality grade; marketable yield; outlet condition; allocation basis; crop age or establishment treatment |

This reference UUID denotes the fresh, unprocessed farm-gate product. Verify actual species, product state and handoff before applying the binding. An independent pack-house, further-processed or otherwise incompatible output requires separately verified identity and must not inherit this UUID. Identity verification does not change the actual system boundary or quantity-normalization requirements of this PCR.

The sole reference output is `reference_product_at_declared_handoff` at `declared_reference_handoff`, a mandatory measurement of the actual accepted product at the already declared gate. Process `process_conditioning_grading` remains conditional: omission of its physical activities does not remove this reference. Select the actual last included product handoff and record its process/output id; accept only the same species, physical state, grade, moisture basis and gate as Section 3. The prior `marketable_berries` row is the measured output of its actual operation when active, not an additional final sale. No bypass creates processing, a yield assumption, an extra burden or a change of product boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `rule_mass_reference` | reference product | Mass | kg | Normalize results to 1 kg marketable fresh product at the declared outlet. |
| `rule_yield_basis` | yield and inventory | Mass | kg fresh product | Use weighed marketable output; disclose harvested-but-rejected and field-loss amounts separately. |
| `rule_nutrient_basis` | fertilizer and soil amendment | Product mass and nutrient mass where available | kg product; kg nutrient | Record the actual product and N/P/K basis; never substitute an unlabeled generic product. |
| `rule_perennial_attribution` | perennial inputs | Mass, area or time | kg, ha, year | Allocate establishment and shared stand inputs over the declared productive period and disclose the basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Field or protected-production unit ready for the declared season; purchased inputs enter when received by the operator |
| starting_condition_role | Foreground begins with crop-stand management and ends at farm-gate or first marketable outlet |
| product_classification_scope | Fresh raspberries, blackberries, mulberries and loganberries; semantic scope governs inclusion |
| recursive_input_rule | Classify same-category fruit inputs by their actual origin and the declared system boundary. A transfer between processes already represented within the same product system is an internal transfer: preserve its physical quantity and link the supplying process without repeating its production burden. Fruit purchased or otherwise received from outside the represented system is an external product input requiring a compatible upstream dataset; category identity alone does not make it internal. Stop same-category recursion at that documented upstream handover, not by assigning zero upstream burden. |
| upstream_dataset_requirement | For external same-category fruit, require a documented upstream dataset matching species/product identity, fresh state, production route and handover gate, with geographical and temporal representativeness disclosed. Reconcile the activities covered upstream with the receiving foreground processes so production, conditioning and transport are neither omitted nor counted twice. Use separately documented background datasets for electricity, fuel, fertilizer, amendments, packaging, water supply and purchased services. Missing upstream evidence remains an explicit completeness gap, not an internal-transfer or zero-burden assumption. |
| disclosure | Declare land/structure, crop age, season, outlet, yields, losses, irrigation, nutrient products, packaging and exclusions; for same-category inputs, record internal/external origin, supplier or supplying process, lot and quantity, transfer gate, upstream dataset and covered activities, and any unresolved upstream evidence. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_end` | all datasets | Include crop management through dispatch; exclude downstream processing and retail. | `fao-gap-framework-2003` |
| `boundary_perennial` | perennial systems | Disclose establishment and productive-period attribution; do not assign all establishment burdens to one season silently. | `fao-gap-framework-2003` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `process_crop_establishment` | Crop establishment and stand maintenance | conditional | Include establishment, replacement and multi-year stand management | biological production | area and productive period |
| `process_crop_management` | Seasonal crop management | required | Always | biological production | season and marketable kg |
| `process_harvest` | Harvest and field capture | required | Always | harvest capture | harvested and marketable mass |
| `process_conditioning_grading` | Primary conditioning and grading | conditional | Include washing, cooling, sorting or packing before outlet | primary conditioning | dispatched kg |
| `process_reject_routing` | Reject, loss and co-product routing | conditional | Include non-marketable fruit and co-products | attribution and waste routing | mass balance |
| `declared_reference_handoff` | Accepted-product measurement at declared handoff | required | Every actual selected route, including bypass of conditional conditioning/packing/storage | Measurement and reconciliation only; no added physical processing | 1 kg net accepted product at the same declared gate |

Each process is reported by direction (`Inputs`, `Outputs`) and flow type (`Product flows`, `Waste flows`, `Elementary flows`). Each row is a flow card with `row_id`, selected flow identity, flow property/unit, amount rule, `value_mode`, `specificity`, `basis_kind`, `evidence_kind`, `collection_protocol_id` and `source_ids`.

### Process: Crop establishment and stand maintenance (`process_crop_establishment`)
#### Inputs
##### Product flows
###### Galvanized steel wire (`establishment_inputs_wire`)

Only for an actual galvanized-wire raspberry trellis. Verify wire form, coating and supplier specification; distinguish from uncoated wire, steel frame and rope. Attribute installation and replacement over the documented productive period once.

- Selected flow: Galvanized steel wire `6bebb982-c6c5-4250-88da-6607f8899574`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record actual material mass consumed at this node, excluding returns and upstream-service inclusions; apply documented period/output attribution once and divide by the matched final accepted reference-output mass. Preserve raw quantities and do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_establishment_records`
- Sources: `raspberry-trellis-materials`

No numerical range is inherited from the former group. Collect actual quantity and uncertainty; lack of applicable range evidence does not justify a default or zero.

###### Wooden trellis post (`establishment_inputs_post`)

Only where a wooden trellis post is actually installed; record timber species, moisture, dimensions and preservative treatment. Attribute consumed replacement/installation mass over the productive period; do not count the whole post anew each harvest.

- Selected flow: Wooden trellis post
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record actual material mass consumed at this node, excluding returns and upstream-service inclusions; apply documented period/output attribution once and divide by the matched final accepted reference-output mass. Preserve raw quantities and do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_establishment_records`
- Sources: `raspberry-trellis-materials`

No numerical range is inherited from the former group. Collect actual quantity and uncertainty; lack of applicable range evidence does not justify a default or zero.

##### Elementary flows
###### Establishment land occupation (`establishment_land`)
Record area, duration and transformation status for the declared stand.
- Selected flow: Cultivated land occupation (UUID unresolved; occupation only)
Land occupation is area multiplied by actual occupied duration. Land transformation, if included, is a separate from/to land-state area event with date, previous use, accounting period and attribution; never give it an area-time quantity or repeat it each crop cycle.
- Flow property / unit: Area-time / ha-year
- Amount rule: site register and area map
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh berry.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `fao-gap-framework-2003`

### Process: Seasonal crop management (`process_crop_management`)
#### Inputs
##### Product flows
###### Urea fertilizer (`process_crop_management_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for process_crop_management_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: per 1 kg marketable fresh berry.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`; `source-ipcc-2019-refinement`; `fao-fertilizer-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Ammonium sulfate fertilizer (`process_crop_management_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`; `source-ipcc-2019-refinement`; `fao-fertilizer-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Triple superphosphate fertilizer (`process_crop_management_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`; `source-ipcc-2019-refinement`; `fao-fertilizer-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Potassium chloride fertilizer (`process_crop_management_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer, granular, K2O equivalent ≥60.0% by mass `c8585965-5595-48da-9260-2970ed1905cb`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`; `source-ipcc-2019-refinement`; `fao-fertilizer-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

This UUID is restricted to granular fertilizer-grade potassium chloride with K2O-equivalent content at least 60.0% by mass. Activate only when supplier evidence matches; otherwise resolve the actual grade separately. The threshold is an identity qualifier, not an assumed nutrient fraction for calculation.

###### Cattle manure applied as fertilizer (`process_crop_management_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`; `source-ipcc-2019-refinement`; `fao-organic-nutrients`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Composted plant residues applied to soil (`process_crop_management_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`; `source-ipcc-2019-refinement`; `fao-organic-nutrients`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Irrigation water (`irrigation_water_services`)
Record irrigation water by plot, source, operation and season.
- Selected flow: Irrigation water supply (UUID unresolved; intentionally blank)
- Flow property / unit: Volume / m3
- Amount rule: meter, delivery, invoice or operation log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh berry.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`
###### Electricity at the equipment supply point (`energy_services_electricity`)

**Collection scope and applicability for energy_services.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record electricity, fuel and other energy carriers used by field operations and purchased services.
Raw activity or stage basis: per 1 kg marketable fresh berry.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`; `fao-agricultural-energy`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kWh per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

This binding is alternating current at the use point with supply technology, voltage and provider unspecified. Confirm actual AC supply; DC requires a different identity. The database reference is 1 MJ: preserve meter kWh and convert once using 1 kWh = 3.6 MJ when linking reference quantities. Internal generation links to its foreground generator, without an additional purchased-electricity burden.

###### Diesel fuel supplied to equipment (`energy_services_diesel`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`; `fao-agricultural-energy`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

#### Outputs
##### Elementary flows

###### Nitrous oxide to air, direct managed-soil pathway (`soil_direct_n2o`)
Document applicability and responsibility by site, N source, climate, route and receiving medium. Missing pathway data are not zero; a justified inapplicable pathway is explicitly disclosed.
- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Amount rule: calculate the named compound from compatible nitrogen activity and the documented pathway method; convert compound-N by 44/28 once, assign upstream/foreground responsibility without duplication, then normalize to accepted reference output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: measured nitrogen activity and emissions for the actual plot and reporting period before final normalization.
- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_managed_soil_nitrogen`
- Sources: `ipcc-managed-soils-2019`
- Range: Physical precursor-N conservation check; not an empirical emission-factor range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg compound-N/kg available precursor N
  - Basis: the named pathway and its compatible precursor-N ledger; indirect N2O-N is bounded by its documented deposited/leached precursor, not a second subtraction from the source ledger
  - Basis kind: N input (`n_input`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

The elementary-flow identity represents compound mass, not nitrogen mass. This UUID is for emissions to air, unspecified, excluding the long-term, indoor and upper-atmosphere variants. Preserve the known receiving compartment and use a more specific compatible identity where required by the dataset. Keep direct and indirect method contributions distinct while aggregating compatible exchanges only once; UUID verification does not verify the activity, factor or precursor partition.

###### Nitrous oxide to air, indirect deposition/leaching pathways (`soil_indirect_n2o`)
Document applicability and responsibility by site, N source, climate, route and receiving medium. Missing pathway data are not zero; a justified inapplicable pathway is explicitly disclosed.
- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Amount rule: calculate the named compound from compatible nitrogen activity and the documented pathway method; convert compound-N by 44/28 once, assign upstream/foreground responsibility without duplication, then normalize to accepted reference output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: measured nitrogen activity and emissions for the actual plot and reporting period before final normalization.
- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_managed_soil_nitrogen`
- Sources: `ipcc-managed-soils-2019`
- Range: Physical precursor-N conservation check; not an empirical emission-factor range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg compound-N/kg available precursor N
  - Basis: the named pathway and its compatible precursor-N ledger; indirect N2O-N is bounded by its documented deposited/leached precursor, not a second subtraction from the source ledger
  - Basis kind: N input (`n_input`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

The elementary-flow identity represents compound mass, not nitrogen mass. This UUID is for emissions to air, unspecified, excluding the long-term, indoor and upper-atmosphere variants. Preserve the known receiving compartment and use a more specific compatible identity where required by the dataset. Keep direct and indirect method contributions distinct while aggregating compatible exchanges only once; UUID verification does not verify the activity, factor or precursor partition.

###### Ammonia to air from the documented nitrogen pathway (`soil_ammonia`)
Document applicability and responsibility by site, N source, climate, route and receiving medium. Missing pathway data are not zero; a justified inapplicable pathway is explicitly disclosed.
- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg NH3
- Amount rule: calculate the named compound from compatible nitrogen activity and the documented pathway method; convert compound-N by 17/14 once, assign upstream/foreground responsibility without duplication, then normalize to accepted reference output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: measured nitrogen activity and emissions for the actual plot and reporting period before final normalization.
- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_managed_soil_nitrogen`
- Sources: `ipcc-managed-soils-2019`
- Range: Physical precursor-N conservation check; not an empirical emission-factor range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg compound-N/kg available precursor N
  - Basis: the named pathway and its compatible precursor-N ledger; indirect N2O-N is bounded by its documented deposited/leached precursor, not a second subtraction from the source ledger
  - Basis kind: N input (`n_input`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

The elementary-flow identity represents compound mass, not nitrogen mass. This UUID is for emissions to air, unspecified, excluding the long-term, indoor and upper-atmosphere variants. Preserve the known receiving compartment and use a more specific compatible identity where required by the dataset. Keep direct and indirect method contributions distinct while aggregating compatible exchanges only once; UUID verification does not verify the activity, factor or precursor partition.

###### Nitrate to water from the documented leaching/runoff pathway (`soil_nitrate`)
Document applicability and responsibility by site, N source, climate, route and receiving medium. Missing pathway data are not zero; a justified inapplicable pathway is explicitly disclosed.
- Selected flow: nitrate `4d9a8790-3ddd-11dd-8d68-0050c2490048`
- Flow property / unit: Mass / kg NO3
- Amount rule: calculate the named compound from compatible nitrogen activity and the documented pathway method; convert compound-N by 62/14 once, assign upstream/foreground responsibility without duplication, then normalize to accepted reference output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: measured nitrogen activity and emissions for the actual plot and reporting period before final normalization.
- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_managed_soil_nitrogen`
- Sources: `ipcc-managed-soils-2019`
- Range: Physical precursor-N conservation check; not an empirical emission-factor range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg compound-N/kg available precursor N
  - Basis: the named pathway and its compatible precursor-N ledger; indirect N2O-N is bounded by its documented deposited/leached precursor, not a second subtraction from the source ledger
  - Basis kind: N input (`n_input`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

The elementary-flow identity represents compound mass, not nitrogen mass. This UUID is for emissions to fresh water only. Confirm actual receiving medium; retain any more specific receiving compartment required by the dataset; seawater or unspecified receiving water must not be silently relabelled fresh water. Keep direct and indirect method contributions distinct while aggregating compatible exchanges only once; UUID verification does not verify the activity, factor or precursor partition.

### Process: Harvest and field capture (`process_harvest`)
#### Inputs
##### Product flows
#### Outputs
##### Product flows
###### Harvested berries (`harvested_berries`)
Weigh harvested berries by species and grade before conditioning.
- Selected flow: Harvested fresh berries (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: lot scale records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh berry.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_records`
- Sources: `fao-gap-framework-2003`
##### Waste flows
###### Harvest losses (`harvest_losses`)
Record field losses or estimates with the destination and estimation method.
- Selected flow: Harvest loss (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: weighed loss or reconciled mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh berry.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_records`
- Sources: `fao-gap-framework-2003`

### Process: Primary conditioning and grading (`process_conditioning_grading`)
#### Inputs
##### Product flows
###### Conditioning water (`conditioning_inputs`)
Record water used for washing or other conditioning operations linked to each lot.
- Selected flow: Conditioning water supply (UUID unresolved; intentionally blank)
- Flow property / unit: Volume / m3
- Amount rule: receiving, utility and packaging records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh berry.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-gap-framework-2003`
###### Alternating current (`conditioning_energy_electricity`)

Actual electric cooling, washing, sorting and packing equipment for the berry lot at this node; retain upstream field consumption separately.

Activate only for documented alternating-current consumption at this node. The identity leaves voltage, technology and provider unspecified; record them and select compatible upstream supply. Preserve measured kWh and convert exactly to MJ using 1 kWh = 3.6 MJ; do not interpret electric energy as combustion fuel or useful heat.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy (database reference property: net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect only this carrier quantity attributable to this node under `cp_conditioning_records`. Reconcile inclusive services and shared use once; scale the attributed quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit. Preserve process-native throughput records; do not renormalize a final-reference amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_conditioning_records`
- Sources: `route-energy-fao`

Apply `conditioning_energy_identification` in Section 8. No numerical range or default is inherited from the former aggregate card.

###### Wooden crate (`conditioning_packaging_wood_crate`)

**Collection scope and applicability for conditioning_packaging.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record packaging and presentation materials consumed by the conditioning run when applicable.
Raw activity or stage basis: per 1 kg marketable fresh berry.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Wooden crate
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_conditioning_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-gap-framework-2003`; `fao-package-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Corrugated fibreboard box (`conditioning_packaging_corrugated_box`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_conditioning_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-gap-framework-2003`; `fao-package-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Polyethylene wrapping film (`conditioning_packaging_pe_film`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_conditioning_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-gap-framework-2003`; `fao-package-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

#### Outputs
##### Product flows
###### Marketable berries (`marketable_berries`)

Record the measured accepted output of `process_conditioning_grading` only when that operation actually occurs. Preserve species, condition, grade, moisture, lot and its real outgoing gate. This stable row id identifies an actual route output; the sole final reference is reference_product_at_declared_handoff. Retain raw output and link the selected final lot without counting it as another final product. Any UUID shown is usable only for its independently confirmed physical state/gate; an incompatible upstream/intermediate state needs a separately verified or explicit unresolved identity. Preserve the original stage measurement and collection records.

- Selected flow: Raspberries, blackberries, mulberries and loganberries `562e96d5-9c9f-4b90-877c-b2ebf33c87cc`
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: Weigh the accepted net lot output of the actual operation under `cp_yield_records`, retain gross/tare, rejects, stocks, moisture and matched onward lot records, and reconcile before final normalization.

- Amount rule: measured accepted net output from the actual operation under `cp_yield_records`; retain raw lot quantity and actual stage throughput, then normalize once under the final-handoff normalization in Section 8; never prescribe a fixed intermediate yield
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: measured actual operation/lot output and throughput, retained before one final-reference normalization.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_records`
- Sources: `fao-gap-framework-2003`
##### Waste flows
###### Conditioning rejects (`conditioning_rejects`)
Record grading rejects by destination and treatment route.
- Selected flow: Conditioning reject (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: reject weight or reconciled mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh berry.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_records`
- Sources: `fao-gap-framework-2003`

### Process: Accepted-product measurement at declared handoff (`declared_reference_handoff`)
This measurement adds no processing, waste generation or emission. Preserve all real upstream operations and losses; bypass only operations demonstrated absent. Select one actual terminal product lot and cancel its paired internal transfer once when aggregating the system. Do not sum inactive routes, co-products or both source and handoff as accepted final output.

#### Inputs
##### Product flows
###### Accepted actual-route product at the same handoff (`actual_route_product_for_handoff`)

Measure only accepted product at the existing declared gate. Match one actual terminal source record; internal paired transfer and this reference represent the same event, not two sales. Verify identity for the actual species/state/gate independently; an identifier confirmed only for fresh farm-gate goods cannot represent an incompatible conditioned or independent pack-house state. Missing identity remains explicit and is not resolved by copying an adjacent output UUID.
- Selected flow: Raspberries, blackberries, mulberries and loganberries `562e96d5-9c9f-4b90-877c-b2ebf33c87cc`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net mass at this same handoff, normalized as R/R * 1 kg; paired input equals accepted output, with raw R retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_reference_handoff`

##### Waste flows
##### Elementary flows
#### Outputs
##### Product flows
###### Reference product at declared handoff (`reference_product_at_declared_handoff`)

Measure only accepted product at the existing declared gate. Match one actual terminal source record; internal paired transfer and this reference represent the same event, not two sales. Verify identity for the actual species/state/gate independently; an identifier confirmed only for fresh farm-gate goods cannot represent an incompatible conditioned or independent pack-house state. Missing identity remains explicit and is not resolved by copying an adjacent output UUID.
- Selected flow: Raspberries, blackberries, mulberries and loganberries `562e96d5-9c9f-4b90-877c-b2ebf33c87cc`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_reference_handoff`

##### Waste flows
Actual waste remains at the operation that generates it; no duplicate here.
##### Elementary flows
Actual releases remain at their responsible physical operation; no duplicate here.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_marketable_rejects` | outputs and rejects | Avoid allocation through justified process subdivision or an explicitly justified expanded system where applicable. Otherwise identify the actual independently transferred co-products and use a justified physical relationship; use a documented alternative such as economic allocation only when physical attribution is unsuitable, with sensitivity. Disposed rejects are not automatically co-products and retain their production/treatment burden with saleable output. Shared establishment burdens use documented productive-period/output attribution once; neither equal annual yields nor a universal lifetime is assumed. | `ghg-protocol-product-standard-2011` |
| `allocation_multi_period` | perennial systems | Allocate shared establishment and stand-management burdens over the productive period using disclosed yield or time shares. | `ghg-protocol-product-standard-2011` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `harvest_materials_specific_input` | `cp_harvest_records` | Operation process_harvest: Record actual harvest aids and field packaging by harvest period. Original quantity method: issue and return reconciliation |


### Route-specific energy identification requirements

Select energy exchanges from the actual product state, operation, equipment and supply records. The conditional cards below are not a mandatory or exhaustive fuel list. For each requirement, document applicability and the used carrier, supplier, service period, native quantity and allocation; add a separate physically specific card and verify its UUID for any actual input not yet represented. An unidentified input remains an explicit completeness gap, never a zero or a generic energy exchange. Evidence of manual work, ambient drying or a bypass can justify non-use only for the affected operation. Preserve every required operation even when no example card is supplied.

Separate purchased supply from on-site conversion. Link self-generated electricity internally to the foreground generator and count its actual fuel and emissions there once; do not also charge a purchased-electricity supply for the same internal transfer. Likewise do not count supplier-side fuel again with purchased heat. Reconcile shared meters and contractor-included energy against existing cards, with one physical quantity assigned once. Retain source quantities, output throughput, shared-service allocation and excluded post-gate activities. For each carrier, apply period/output attribution once and scale to the declared reference quantity using matched accepted final output in the same product unit; do not normalize an already normalized amount again. Process-native intensities require a measured throughput link to that final output. These requirements do not set a consumption default or certify dataset completeness.

| requirement_id | collection_protocol_id | Required operation and evidence |
| --- | --- | --- |
| `conditioning_energy_identification` | `cp_conditioning_records` | Actual electric cooling, washing, sorting and packing equipment for the berry lot at this node; retain upstream field consumption separately. Raw activity or stage basis: per 1 kg marketable fresh berry. (`route-energy-fao`) |


### Material and service identification requirements

Identify each actual material or independently supplied service from supplier and activity records; record composition/specification, quantity, unit, node and period separately. Add one concrete exchange per identity before dataset completion; these requirements are not a single exchange. Reconcile with existing cards and inclusive services to avoid duplication. Allocate reusable assets over evidenced use and preserve physical quantities; normalize once to the matched final reference output. Missing identity or use evidence is a completeness gap, not zero use. Conditional examples below are not an exhaustive bill of materials and do not prescribe use or amounts.

| requirement_id | collection_protocol_id | Required scope |
| --- | --- | --- |
| `establishment_inputs_identification` | `cp_establishment_records` | actual nursery plants, trellis components, substrates and replacement materials by block and event |


Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `process_crop_establishment` | inputs and land | field log, invoice, area map | area, age, plants, materials, dates | reconcile field and purchase records; Raw aggregation and attribution: allocate by declared period | kg, ha, year | event/annual | establishment and productive period | each block | per declared reference flow | invoices, maps, review |
| `cp_input_records` | `process_crop_management` | inputs | invoice, meter, application log | product, nutrient content, amount, date, field | primary records and reconciliation; Raw aggregation and attribution: sum by season | kg, kg nutrient, m3, kWh, L | event/monthly | full season | block/site | per declared reference flow | invoices, meters |
| `cp_yield_records` | `process_harvest` | outputs | weigh ticket, harvest log | species, grade, mass, date, block | weigh each lot and outlet; Raw aggregation and attribution: sum lots and grades | kg | each lot | full season | block/outlet | per declared reference flow | calibrated scale |
| `cp_harvest_records` | `process_harvest` | harvest materials | issue/waste log | material, quantity, route | issue and return reconciliation; Raw aggregation and attribution: sum by material `harvest_materials_specific_input`: Operation process_harvest: Record actual harvest aids and field packaging by harvest period. Original quantity method: issue and return reconciliation Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg | harvest period | full season | harvest operation | per declared reference flow | inventory records |
| `cp_conditioning_records` | `process_conditioning_grading` | conditioning inputs | meter, packing log, invoice | input, amount, lot, energy | lot-linked records; Raw aggregation and attribution: allocate by lot mass Route-specific requirements: `conditioning_energy_identification`: Actual electric cooling, washing, sorting and packing equipment for the berry lot at this node; retain upstream field consumption separately. Raw activity or stage basis: per 1 kg marketable fresh berry. (`route-energy-fao`) Verify actual use, equipment and supply for each applicable input; create one specific exchange per actual carrier before dataset completeness. Missing identity or quantity evidence remains unresolved, never zero. Distinguish purchased supply, internal generation and inclusive contractor services; count their energy once. Do not substitute the conditional examples for an unverified route. | kg, m3, kWh | lot/daily | full season | conditioning unit | per declared reference flow | meters, invoices |
| `cp_reject_records` | `process_reject_routing` | rejects and destinations | grading/destination log | mass, quality, destination, treatment | mass-balance each lot; Raw aggregation and attribution: reconcile all outputs | kg | each lot | full season | site/outlet | per declared reference flow | receipts, balance |
| `cp_emission_calculation` | all relevant processes | elementary exchanges | calculation record | activity, factor, method, uncertainty | apply declared method; Raw aggregation and attribution: calculate then normalize | kg substance or MJ | reporting period | declared period | site/block | per declared reference flow | cited method |
| `cp_managed_soil_nitrogen` | `process_crop_management` | direct and indirect soil emissions | nitrogen activity and method ledger | N sources and amounts; amendments; residue N and fate; area; dates; climate; soil; volatilisation; leaching; precursor; factors and units; receiving medium; upstream owner; stocks; accepted output | Reconcile compatible N activity by pathway, retain source worksheets and method applicability, then attribute and normalize once. For each nitrogen pathway, record whether it is quantified locally, included once in a named compatible upstream process, demonstrably inapplicable, or unresolved. Choose the IPCC tier and applicable climate/soil/input categories before selecting factors; retain N activity, factor units, uncertainty and molecular conversions. NH3/NOx and nitrate/other leached species require justified partitioning rather than treating total precursor N as one compound. Audit actual urea and liming application CO2 separately from manufacture and N2O; document method, carbon basis and upstream ownership. Inventory other applicable land-use, soil-carbon, pesticide, phosphorus, combustion and water-regime emissions under a compatible documented method; four nitrogen cards alone do not establish complete emission coverage. Material unquantified pathways prevent dataset completeness. | kg N; kg compound | application and period close | complete represented plot/season | actual plot | per declared reference flow | activity records; original factor source; precursor balance; uncertainty |
| `cp_species_route_evidence` | `process_crop_establishment`; `process_crop_management`; `process_harvest`; `process_conditioning_grading` | route and parameter applicability | field register and source assessment | species; cultivar; geography; soil; water regime; purpose; operations; parameter source; compatibility; output | Separate raspberry/blackberry/Logan cane management from Morus fruit-tree management. Document cane growth habit, support and harvest route for caneberries; document fruit-purpose tree management for mulberries. Do not transfer leaf-production or sericulture yield, pruning, fertilization or co-product assumptions to a fruit-only system. Record species/cultivar, location, soil and tissue evidence where relevant, stand age, actual operations, yield, loss and reporting period. For each adopted agronomic parameter, retain a primary or regional source and explain product, climate, soil, technology and period compatibility. The cited regional guidance supports route questions, not universal rates. Data gaps block claims for the affected dataset; this PCR does not manufacture site measurements. | native units with explicit conversions | route/season and material change | complete represented period | actual source plots | per declared reference flow | farm records; source applicability decision; uncertainty and unresolved-data register |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_marketable` | all rows | inventory amount / marketable fresh berry mass | process amount, marketable mass | per kg | `fao-gap-framework-2003` |
| `calc_nutrient_application` | fertilizer card | product mass × declared nutrient fraction; retain product mass | product mass, nutrient fraction | product and nutrient amounts | `fao-gap-framework-2003` |
| `calc_perennial_share` | establishment | shared burden × declared season/yield share | burden, period, yield | season amount | `fao-gap-framework-2003` |
| `calc_mass_balance` | harvest and routing | harvested = marketable + rejects + losses within declared tolerance | all mass records | reconciled balance | `fao-gap-framework-2003` |
| `calc_managed_soil_nitrogen` | `process_crop_management` | Select compatible direct and indirect methods for fertilizer, organic amendments, returned residues and applicable managed-soil sources. Direct N2O-N = sum of eligible N activity times applicable EF1-family factors plus separately applicable sources; indirect N2O-N = volatilised N precursor times EF4 plus leached/runoff N precursor times EF5, where applicable. Convert N2O-N by44/28 once. Quantify NH3 and nitrate with separately justified species-specific loss fractions, not by assigning all NH3+NOx to NH3 or all leached N to nitrate. Convert NH3-N by17/14 and nitrate-N by62/14 once. Keep components, source pools, media, method uncertainty and burden owner distinct; already covered emissions are not repeated. Missing applicable data prevent completeness; do not invent an emission default. | `cp_managed_soil_nitrogen` | molecular emission amounts per declared reference flow | `ipcc-managed-soils-2019`; `mass-balance-identity` |

Require traceable identity, calibrated weighing, complete season coverage, block scope, lot reconciliation, documented allocation, and explicit missing-data treatment. Disclose representativeness, uncertainty, crop age, yield variability, and unresolved identity.
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `` | Identity-specific exchanges and reconciled activity records |  |

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_declared_reference_handoff` | `declared_reference_handoff` | actual accepted terminal product and paired transfer | scale/lot/acceptance records | species; state; grade; moisture/basis; gate; actual_terminal_process_id; actual_terminal_output_row_id; lot/transfer_id; gross/tare/net mass R; raw stage totals/throughputs; stocks, rejects and destinations | Weigh accepted net R at the existing gate; match exactly one actual terminal source of the same lot/state and reconcile all earlier losses and stocks. If conditional preparation is absent use the last actual included eligible product output, without inventing that preparation. Preserve original activity records and all required qualifiers. | kg and native activity units | each accepted lot | matched production and handoff period | existing declared producer/primary gate | per declared reference flow | calibrated weighing, acceptance/grade records, lot chain, activation/bypass evidence and closed balances |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_final_handoff_normalization` | all foreground quantities and actual route outputs | Let R be positive measured accepted final mass in kg for one matched species/state/grade/gate/period, excluding tare, rejects, co-products and held stock. Physical ledger = raw physical quantity/R * 1 kg, without burden-allocation scaling. Attributable inventory contribution = attributable raw quantity/R * 1 kg, preserving native numerator units and the existing output/period attribution. A local intensity q_i=Q_i/O_i first reconstructs Q_i=q_i*actual linked O_i; do not divide by R again after final normalization. Both handoff sides are the same measured event R/R*1 kg, not another physical yield. Include only actual active operations; record and substantiate bypass. Missing/nonpositive R or an unlinked terminal record blocks a normalized complete result, not zero. Preserve original stage data and cancel paired internal transfers once. | cp_declared_reference_handoff; original linked collection protocols | native quantities per declared final reference | `declared-handoff-measurement-definition` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference flow | Confirm one product flow, mass property and kg unit; unresolved identity remains a review finding. | `fao-gap-framework-2003` |
| `validation_completeness` | foreground package | Required processes and protocols must be present or marked not applicable with justification. | `fao-gap-framework-2003` |
| `validation_mass_balance` | harvest and routing | Check harvested mass against marketable output, rejects and losses; unexplained gaps fail validation. | `fao-gap-framework-2003` |
| `validation_nutrient_basis` | fertilizer and amendments | Check product, nutrient content, amount, date, area and source record; generic unlabeled totals fail. | `fao-gap-framework-2003`, `source-ipcc-2019-refinement` |
| `validation_managed_soil_coverage` | nitrogen inputs, residues and emissions | Require each applicable nitrogen pathway to be quantified under the stated method or covered by a named compatible upstream dataset once. Supported inapplicability is recorded; missing activity, factors, species split, medium or attribution remains a blocking completeness gap. Reject automatic zero or double counting of direct/indirect components. | `ipcc-managed-soils-2019` |
| `validation_species_route_evidence` | all represented processes | Separate raspberry/blackberry/Logan cane management from Morus fruit-tree management. Document cane growth habit, support and harvest route for caneberries; document fruit-purpose tree management for mulberries. Do not transfer leaf-production or sericulture yield, pruning, fertilization or co-product assumptions to a fruit-only system. Record species/cultivar, location, soil and tissue evidence where relevant, stand age, actual operations, yield, loss and reporting period. For each adopted agronomic parameter, retain a primary or regional source and explain product, climate, soil, technology and period compatibility. The cited regional guidance supports route questions, not universal rates. Data gaps block claims for the affected dataset; this PCR does not manufacture site measurements. | `osu-caneberry-nutrition`; `osu-caneberry-route`; `fao-mulberry-use` |
| `validation_evidence_based_ranges` | quantities and screening limits | Do not apply a universal 0–1000 range to land, materials, water, product or losses. Use measured records and justified uncertainty, reconcile like-unit physical balances and retain the exact declared reference amount. Any future numeric screening bound must state its input, unit, denominator, applicability and evidence; an outlier triggers investigation, not automatic substitution. | `mass-balance-identity` |
| `validation_field_emission_coverage` | field emissions and upstream coverage | For each nitrogen pathway, record whether it is quantified locally, included once in a named compatible upstream process, demonstrably inapplicable, or unresolved. Choose the IPCC tier and applicable climate/soil/input categories before selecting factors; retain N activity, factor units, uncertainty and molecular conversions. NH3/NOx and nitrate/other leached species require justified partitioning rather than treating total precursor N as one compound. Audit actual urea and liming application CO2 separately from manufacture and N2O; document method, carbon basis and upstream ownership. Inventory other applicable land-use, soil-carbon, pesticide, phosphorus, combustion and water-regime emissions under a compatible documented method; four nitrogen cards alone do not establish complete emission coverage. Material unquantified pathways prevent dataset completeness. | `ipcc-managed-soils-2019`; `ipcc-liming-urea-2006`; `mass-balance-identity` |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_handoff_bypass` | selected actual route and all conditional bypass states | Check both presence and absence of optional conditioning/packing/storage against actual records: exactly one required handoff reference persists, its source product/state/gate matches Section 3, active physical rows retain measured throughput, and inactive physical activities add no exchange. Require raw accepted mass, upstream closure, unique transfer pairing and single final normalization; an unexplained state or missing identity is not an assumed valid branch. | `declared-handoff-measurement-definition` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only after completeness and review |
| downstream_use | Fresh berry foreground production and linked product-system modelling |
| allowed_use | Declared fresh berry system, season and outlet |
| excluded_use | Processed products, retail, unspecified systems or undisclosed seasons |
| required_metadata | species, cultivar, geography, age, system, season, outlet, yield, products, allocation, losses |
| required_quality_disclosure | completeness, representativeness, measurement basis, uncertainty and unresolved identities |
| update_trigger | new season, replacement, route/input/outlet change, or corrected mass balance |

Evidence applicability: cited general farm-record and postharvest frameworks do not supply crop-specific yields, lifetimes, gate cutoffs or LCA allocation defaults. Those are this PCR methodology decisions; qualify them by the actual species, route and period and obtain compatible agronomic evidence before asserting completeness. No universal numeric screen is retained; record-based uncertainty and physical consistency checks govern quantities.

## 11. Data Sources

| source_id | type | Reference | Use |
| --- | --- | --- | --- |
| `source-ipcc-2019-refinement` | method_factor | IPCC 2019 Refinement to the 2006 Guidelines | conditional field-emission and nutrient-related calculation method |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | Generic monitoring and farm-record context only; crop-specific routes, lifetimes, quantitative ranges and LCA allocation are PCR choices requiring separate applicable evidence. |
| `ipcc-managed-soils-2019` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, sections 11.2.1 and 11.2.2 and Tables 11.1/11.3, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Nitrogen activity and direct/indirect N2O methods; no berry-specific yield or universal per-product emission default |
| `mass-balance-identity` | method_factor | Physical conservation of mass and nitrogen, as defined by the stated PCR calculation and precursor ledgers | Conservation constraints only, not measured loss fractions or empirical factors |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `raspberry-trellis-materials` | extension_guidance | Iowa State University Extension, How would you construct a trellis for red raspberries? https://yardandgarden.extension.iastate.edu/faq/how-would-you-construct-trellis-red-raspberries | Wood posts and galvanized wire for an actual raspberry trellis; not a requirement for every covered berry or a dimension/lifetime default. |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | Equipment/carrier possibilities only; site records govern applicability. No intensity, fuel share or default recipe is adopted. |
| `osu-caneberry-nutrition` | extension_guidance | OSU Extension, PNW 780, Nutrient management of raspberries and blackberries in Oregon and Washington. https://extension.oregonstate.edu/catalog/pub/pnw-780-nutrient-management-raspberries-blackberries-oregon-washington | Regional crop/soil/tissue evidence context, not a universal fertilizer rate. |
| `osu-caneberry-route` | extension_guidance | OSU Extension, EM 9180, Growing berries on the Oregon Coast: Raspberries and blackberries. https://extension.oregonstate.edu/catalog/em-9180-growing-berries-oregon-coast-raspberries-blackberries | Distinguishes caneberry growth habits and Logan trailing hybrids; regional examples are conditional. |
| `fao-mulberry-use` | official_guidance | FAO, Mulberry cultivation and utilization in China. https://www.fao.org/4/X9895E/x9895e03.htm | Distinguishes fruit and leaf/sericulture purposes; leaf-yield and leaf-harvest recommendations are not fruit-production defaults. |
| `ipcc-liming-urea-2006` | method_factor | IPCC 2006 Guidelines, Volume 4, Chapter 11, sections 11.3 and 11.4. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/4_Volume4/V4_11_Ch11_N2O%26CO2.pdf | Applicable liming and urea-application CO2 coverage, distinct from fertilizer manufacturing and managed-soil N2O. |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter 9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Allocation hierarchy; no site-specific numerical shares |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | method_factor | This PCR Sections 3, 6 and 8: matched accepted handoff mass divided by itself times the declared reference amount; physical transfer pairing and dimensional normalization identity, not an empirical yield or new physical operation. | single accepted reference and measured route-throughput linkage |
