---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-root-bulb-and-tuberous-vegetables-n-e-c
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other root, bulb and tuberous vegetables, n.e.c.

## 1. Scope and Applicability

This PCR defines the foreground production of fresh edible roots, bulbs, rhizomes, corms, and tubers that belong to the “other” root, bulb and tuberous vegetable category. It is intended for a product-specific crop cycle from planting or crop establishment through harvest and the declared farm gate. Soil-based open-field and protected cultivation are in scope when the product is marketed as a fresh vegetable. On-site washing, trimming, grading, cooling, packing, storage, or dispatch are conditional extensions and must be declared.

The broad category is resolved by the product identity and edible organ, not by a generic “vegetable” label. A data package must identify the crop and cultivar or type, even where the classification leaf remains broad. Fresh mass, marketable grade, moisture, and the condition at the declared gate are part of the product definition.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-root-bulb-and-tuberous-vegetables-n-e-c |
| classification_refs | CPC 3.0:01259 — Other root, bulb and tuberous vegetables, n.e.c. (classification context); mapping relation: exact |
| covered_products | Fresh, marketable edible roots, bulbs, rhizomes, corms, or tubers in the other root, bulb and tuberous vegetable class, including oyster plant, jicama (Pachyrhizus erosus), celeriac, and another comparable product not separately classified in a named root, bulb, tuber, seed, mushroom, or starch-rich root category. |
| excluded_products | Carrots and turnips; green garlic; onions; leeks and other alliaceous vegetables; potatoes, sweet potatoes, cassava, yams, taro, and other roots or tubers classified as high-starch or inulin products; vegetable seeds; mushrooms and truffles; live planting material; feed-only crops; processed, preserved, dried, frozen, cooked, peeled, or otherwise transformed products unless a separately reviewed extension is declared. |
| representative_product | Fresh celeriac (celery root), marketable at the declared farm gate |
| production_route | Crop-cycle establishment and cultivation, nutrient and water management, crop protection, harvest and primary sorting, with conditional on-site conditioning, packing, storage, and dispatch |
| market_state | Fresh, marketable product at the declared farm gate; whole or trimmed and unwashed, washed, graded, cooled, or packed only when the condition is recorded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh edible-root, bulb, rhizome, corm, or tuber vegetable at the declared farm gate |
| How much | 1 kg as-received marketable fresh product |
| How well | Product identity, edible organ, cultivar or type, moisture or dry-matter basis, marketable condition, and declared grade are recorded; no unreported processing or quality claim is assumed |
| How long or cycle | One crop cycle and its associated harvest or conditioning campaign; annual records are preferred, with perennial or multi-cycle production explicitly disclosed |
| reference_flow_link | `reference_product_at_declared_handoff` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Marketable fresh other root, bulb, rhizome, corm, or tuber vegetable at the declared farm gate |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | Mass units (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Required qualifiers | product identity; edible organ; cultivar or variety; fresh-mass basis; marketable condition (unwashed, washed, trimmed, cooled, or packed); geography; production system; crop cycle and harvest date; declared farm gate |

The sole reference output is `reference_product_at_declared_handoff` at `declared_reference_handoff`, a mandatory measurement of the actual accepted product at the already declared gate. Process `farm_gate_storage_and_dispatch` remains conditional: omission of its physical activities does not remove this reference. Select the actual last included product handoff and record its process/output id; accept only the same species, physical state, grade, moisture basis and gate as Section 3. The prior `gate_product` row is the measured output of its actual operation when active, not an additional final sale. No bypass creates processing, a yield assumption, an extra burden or a change of product boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and marketable product outputs | Mass | kg | Normalize the reference flow on as-received marketable fresh mass. Record moisture or dry matter separately and do not combine dry-matter and fresh-mass quantities without a documented conversion. |
| `crop_cycle_yield` | field, harvest, conditioning, and storage product rows | Mass | kg | Derive the denominator from measured marketable product for the declared crop cycle; gross harvested mass, sorted mass, and marketable mass must remain distinguishable. |
| `area_normalization` | land occupation and crop-cycle records | Area-time | m2*year | Convert cultivated area and the declared crop-cycle duration to area-time per kg reference product; disclose whether a shorter protected-crop cycle or a full annual occupation period is used. |
| `energy_measurement` | fuel and electricity rows | Energy or fuel amount | kWh or L | Collect electricity in meter kWh and fuel as purchased or dispensed activity data. Convert fuel to energy only with a documented fuel identity and lower-heating-value factor. |
| `water_measurement` | irrigation and conditioning water rows | Volume | m3 | Keep irrigation delivery, source withdrawal, and conditioning water separate. Record meters, estimates, or supplier records and identify any reused or recirculated water. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Land and the crop cycle are declared at planting or crop establishment. Existing soil condition and continuing land occupation are included only when measured or modelled for the declared production system; prior land-use change is not assumed. |
| starting_condition_role | Foreground crop-production gate covering cultivation, harvest, and the selected farm-gate conditioning or dispatch activities |
| product_classification_scope | Fresh products in the CPC 01259 semantic category: edible roots, bulbs, rhizomes, corms, or tubers not assigned to the named vegetable or high-starch root categories |
| recursive_input_rule | A same-category crop flow used between field harvest, sorting, conditioning, or storage is a process-linking product flow. Trace the cultivation burden once and do not recursively expand the handoff. Planting material is recorded with species or type and lot identity; an upstream dataset may be linked once when that material is itself a covered product. |
| upstream_dataset_requirement | Inputs not produced in the foreground, including planting material, fertilizer or soil amendment, crop-protection products, supplied water, energy, packaging, transport, and waste treatment, require a named supplier or background dataset before final TIDAS publication. |
| disclosure | Declare species or common name, edible organ, cultivar or type, crop cycle, farm or block, geography, production system, area, planting and harvest dates, harvested and marketable mass, moisture, conditioning state and gate, irrigation source and volume, actual nutrient products and nutrient basis, crop protection, fuel, electricity, packaging, transport, residues and losses, and the selected emissions method. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | whole PCR | Include crop establishment, field or protected-crop operations, harvest, and primary sorting to the declared farm gate. Include conditioning, storage, or dispatch only when the conditional process and its records are selected. | `unsd-cpc-3-01259`; `fao-ex-act-v9-2022` |
| `boundary_inputs` | cultivation and selected postharvest processes | Include planting material, actually used nutrient products or soil amendments, crop-protection products, irrigation and process water, field and facility energy, and packaging or transport when they cross the selected foreground boundary. | `fao-ex-act-v9-2022` |
| `boundary_land` | crop cycle | Record land occupation for the declared area and crop-cycle duration. Include land-use change or soil-carbon changes only when the study declares them with evidence; do not add an assumed land-use-change burden. | `fao-ex-act-v9-2022` |
| `boundary_emissions` | managed soils and residues | Include direct and indirect soil emissions associated with declared nitrogen inputs, relevant crop residues, and liming or urea where used, following the selected IPCC tier. Keep residue return, removal, burning, and treatment fates mutually exclusive. | `ipcc-2019-managed-soils` |
| `boundary_exclusions` | post-gate life cycle | Exclude transport after the declared farm gate, retail, consumer storage, preparation, cooking, and end-of-life unless a separately scoped extension is documented. | `unsd-cpc-3-01259`; `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_cultivation` | Crop establishment and field or protected cultivation | required | Always include the declared crop cycle from planting or establishment through harvest readiness. | foreground crop production | per 1 kg marketable fresh reference product and per declared crop cycle |
| `harvest_and_primary_sorting` | Harvest and primary sorting | required | Always include harvest, removal of field soil or plant material, and the first marketability decision. | harvest and product preparation | per 1 kg marketable fresh reference product |
| `postharvest_conditioning` | Postharvest conditioning and packing | conditional | Include when washing, trimming, grading, cooling, packing, or wastewater treatment occurs inside the declared farm-gate boundary. | optional conditioning | per 1 kg conditioned marketable product |
| `farm_gate_storage_and_dispatch` | Farm-gate storage and dispatch | conditional | Include when storage, cooling during storage, or transport to the declared collection or farm gate is within scope. | optional storage and delivery | per 1 kg product at the declared gate and per tonne-kilometre where transport is included |
| `declared_reference_handoff` | Accepted-product measurement at declared handoff | required | Every actual selected route, including bypass of conditional conditioning/packing/storage | Measurement and reconciliation only; no added physical processing | 1 kg net accepted product at the same declared gate |

### Process: Crop establishment and field or protected cultivation (`field_cultivation`)

#### Inputs

##### Product flows

###### Urea fertilizer (`field_cultivation_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for field_cultivation_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: per 1 kg marketable fresh reference product.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Ammonium sulfate fertilizer (`field_cultivation_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Triple superphosphate fertilizer (`field_cultivation_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils`; `fao-fertilizer-identities`

###### Potassium chloride fertilizer (`field_cultivation_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils`; `fao-fertilizer-identities`

###### Cattle manure applied as fertilizer (`field_cultivation_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils`; `fao-organic-nutrients`

###### Composted plant residues applied to soil (`field_cultivation_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils`; `fao-organic-nutrients`

###### Irrigation water supplied to the crop cycle (`irrigation_water`)

Irrigation water is recorded when water is delivered to the crop or protected cultivation system. Separate supplied water from source withdrawal when both are modelled.

- Selected flow: Irrigation water supplied to crop production
- Flow property / unit: Volume / m3 (flow property; unit group)
- Amount rule: meter, irrigation log, or supplier record for the crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_water_records`
- Sources: `fao-ex-act-v9-2022`
- Range: Provisional irrigation-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: m3/kg marketable product
  - Basis: per 1 kg marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel fuel (`cultivation_fuel_diesel`)

Only for documented diesel-powered machinery within this operation. Retain fuel grade and formulation; convert recorded volume with measured or supplier-supported density. Other powertrains require their actual carrier, not a diesel equivalent. Apply `cultivation_fuel_specific_input`; this example is not mandatory. Do not double count inclusive machinery services or a purchased-electricity supply for electricity transferred internally from an on-site generator. Actual fuel combustion and generator emissions remain separately accountable.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this carrier under `cp_field_energy_records` for `field_cultivation`. Attribute shared use once; scale attributed raw quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit, retaining measured stage throughput and original allocation rules. Do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_energy_records`
- Sources: `route-energy-fao`

###### Electricity for irrigation or protected cultivation (`cultivation_electricity`)

Electricity is conditional and is recorded when electric pumps, controlled-environment equipment, or other electricity-consuming cultivation equipment is inside the boundary.

- Selected flow: Electricity for irrigation or protected cultivation
- Flow property / unit: Energy / kWh (flow property; unit group)
- Amount rule: farm, block, pump, or equipment meter allocated to the declared crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `fao-ex-act-v9-2022`
- Range: Provisional cultivation-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kWh/kg marketable product
  - Basis: per 1 kg marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Source-water withdrawal for irrigation (`irrigation_withdrawal`)

Source withdrawal is conditional and is reported only when the water resource abstraction is separately measured or modelled from delivered irrigation water. Do not count the same water volume twice.

- Selected flow: Water withdrawn directly from an identified natural source; exact compartment and UUID unresolved
- Flow property / unit: Volume / m3 (flow property; unit group)
- Amount rule: directly metered natural-source abstraction owned by this foreground node, reconciled to the same-period supply ledger
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_water_records`
- Sources: `fao-ex-act-v9-2022`
- Range: Provisional withdrawal screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4
  - Unit: m3/kg marketable product
  - Basis: per 1 kg marketable fresh reference product, only when withdrawal is separately reported
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Only for direct natural-water abstraction owned by this foreground boundary. Select the actual source/compartment and compatible volume or mass identity. A municipal or other purchased water receipt is a product supply, with its provider withdrawal covered upstream once; it is not this elementary input. Keep the withdrawal-to-field supply ledger, pumping, distribution losses and internal delivered-water transfers explicit. Do not add the same supplier abstraction or internal delivery as another external resource use. Retain missing source identity or quantity as a completeness gap.


###### Land occupation for the declared crop cycle (`land_occupation`)

Land occupation represents the cultivated area and declared duration needed to produce the reference product. Land transformation remains a separate declared study choice.

- Selected flow: Land occupation for crop cultivation
- Flow property / unit: Area-time / m2*year (flow property; unit group)
- Amount rule: cultivated area multiplied by declared crop-cycle duration, divided by marketable fresh output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land_and_cycle_records`
- Sources: `fao-ex-act-v9-2022`
- Range: Provisional land-occupation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: m2*year/kg marketable product
  - Basis: per 1 kg marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


#### Outputs

##### Product flows

###### Harvestable crop leaving cultivation (`harvested_crop`)

This product flow links field cultivation to harvest and sorting. It represents the harvested edible organ before the first marketability decision.

- Selected flow: Fresh harvested edible root, bulb, rhizome, corm, or tuber crop
- Flow property / unit: Mass / kg fresh product (flow property; unit group)
- Amount rule: harvested mass from crop-cycle yield and quality records before sorting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_yield_and_quality_records`
- Sources: `fao-ex-act-v9-2022`
- Range: Provisional harvested-to-marketable yield ratio
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg harvested crop/kg marketable product
  - Basis: per 1 kg marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Crop residues returned or incorporated in the field (`crop_residue_returned`)

Record above-ground and below-ground crop residues that remain in or are deliberately returned to the soil as a waste or residue fate. Record removed, burned, or externally treated residues separately.

- Selected flow: Crop residue returned to managed soil
- Flow property / unit: Dry mass / kg dry matter (flow property; unit group)
- Amount rule: measured or calculated residue dry matter after applying the declared moisture and residue fate records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_and_fate_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional returned-residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 1.5
  - Unit: kg dry matter/kg marketable product
  - Basis: per 1 kg marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Unharvested or field-damaged crop material (`field_losses`)

Record marketable crop left in the field or damaged before harvest when the loss is material and can be assigned to the declared crop cycle.

- Selected flow: Unharvested or field-damaged crop material
- Flow property / unit: Mass / kg fresh material (flow property; unit group)
- Amount rule: calculated difference between crop harvested potential and harvested product, with the fate disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_and_fate_records`
- Sources: `fao-ex-act-v9-2022`
- Range: Provisional field-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg fresh material/kg marketable product
  - Basis: per 1 kg marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct nitrous oxide from managed soil (`direct_n2o_soil`)

Direct soil nitrous oxide is calculated from declared nitrogen sources and the selected IPCC method tier. The pollutant species and receiving medium remain explicit even while flow identity is evidence gap.

- Selected flow: Nitrous oxide to air from managed agricultural soil
- Flow property / unit: Mass / kg N2O (flow property; unit group)
- Amount rule: selected IPCC tier calculation from collected N inputs, residue N, and declared soil or climate factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional direct-soil-N2O screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg N2O/kg marketable product
  - Basis: per 1 kg marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia from managed soil (`ammonia_soil`)

Ammonia emissions are calculated when the selected method and collected nitrogen application data support them. Record the reported species and air receiving medium.

- Selected flow: Ammonia to air from managed agricultural soil
- Flow property / unit: Mass / kg NH3 (flow property; unit group)
- Amount rule: selected method calculation from collected mineral and organic N application data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional ammonia screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg NH3/kg marketable product
  - Basis: per 1 kg marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate leaching to water (`nitrate_leaching`)

Nitrate leaching is reported when water or nutrient records and the selected soil-emission method support a loss estimate. Its water receiving medium must not be conflated with a soil stock.

- Selected flow: Nitrate to water from managed agricultural soil
- Flow property / unit: Mass / kg nitrate (flow property; unit group)
- Amount rule: collected or modelled leaching fraction applied to the declared nutrient input and water regime
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional nitrate-leaching screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg nitrate/kg marketable product
  - Basis: per 1 kg marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Phosphate runoff to water (`phosphate_runoff`)

Phosphate runoff is reported when the crop cycle has a documented pathway and a method or measured record supports it. Retain the phosphorus basis used for the calculation.

- Selected flow: Phosphate to water from managed agricultural soil
- Flow property / unit: Mass / kg phosphate (flow property; unit group)
- Amount rule: measured or method-derived phosphorus loss from the declared field and water regime
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional phosphate-runoff screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg phosphate/kg marketable product
  - Basis: per 1 kg marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Carbon dioxide from liming or urea (`liming_urea_co2`)

This conditional elementary output is included only when the nutrient record shows lime or urea application and the selected method requires direct carbon dioxide accounting.

- Selected flow: Carbon dioxide to air from liming or urea application
- Flow property / unit: Mass / kg CO2 (flow property; unit group)
- Amount rule: method calculation from the actual lime or urea amount and declared carbon basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional liming-or-urea CO2 screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.03
  - Unit: kg CO2/kg marketable product
  - Basis: per 1 kg marketable fresh reference product, only when lime or urea is used
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and primary sorting (`harvest_and_primary_sorting`)

#### Inputs

##### Product flows

###### Harvested crop received for sorting (`harvested_crop_input`)

The harvested crop enters the sorting operation as the output of field cultivation. The same crop mass must not be counted as a new upstream production burden.

- Selected flow: Fresh harvested edible root, bulb, rhizome, corm, or tuber crop from the declared crop cycle
- Flow property / unit: Mass / kg fresh product (flow property; unit group)
- Amount rule: link to `harvested_crop` from the same crop cycle and reconcile received mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_yield_and_quality_records`
- Sources: `fao-ex-act-v9-2022`
- Range: Harvested-crop sorting input reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg harvested crop/kg marketable product
  - Basis: per 1 kg marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel fuel (`harvest_fuel_diesel`)

Only for documented diesel-powered machinery within this operation. Retain fuel grade and formulation; convert recorded volume with measured or supplier-supported density. Other powertrains require their actual carrier, not a diesel equivalent. Apply `harvest_fuel_specific_input`; this example is not mandatory. Do not double count inclusive machinery services or a purchased-electricity supply for electricity transferred internally from an on-site generator. Actual fuel combustion and generator emissions remain separately accountable.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this carrier under `cp_harvest_operation_records` for `harvest_and_primary_sorting`. Attribute shared use once; scale attributed raw quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit, retaining measured stage throughput and original allocation rules. Do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_operation_records`
- Sources: `route-energy-fao`

##### Waste flows

#### Outputs

##### Product flows

###### Marketable sorted crop (`marketable_sorted_crop`)

This product flow is the sorted fresh crop available for the declared farm gate or for a conditional conditioning process. The marketability decision and product condition are recorded.

- Selected flow: Fresh marketable sorted other root, bulb, rhizome, corm, or tuber vegetable
- Flow property / unit: Mass / kg fresh product (flow property; unit group)
- Amount rule: accepted mass after primary sorting, with quality and moisture records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_yield_and_quality_records`
- Sources: `fao-ex-act-v9-2022`
- Range: Provisional sorted-product output
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1
  - Unit: kg sorted product/kg marketable product
  - Basis: per 1 kg marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Sorting rejects and off-grade crop (`sorting_rejects`)

Record roots, bulbs, rhizomes, corms, or tubers rejected for damage, disease, size, shape, or other declared quality reasons. State whether rejects are returned to soil, sent to treatment, sold as a different product, or otherwise managed.

- Selected flow: Unmarketable or off-grade crop rejected during primary sorting
- Flow property / unit: Mass / kg fresh material (flow property; unit group)
- Amount rule: weighed reject mass by fate, reconciled to received crop and accepted product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_yield_and_quality_records`
- Sources: `iso-14044-2006`
- Range: Provisional sorting-reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg fresh reject/kg marketable product
  - Basis: per 1 kg marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Soil, clods, and vegetative trimmings removed in sorting (`sorting_solids_waste`)

Record soil, clods, leaves, stems, and other non-product solids removed during harvest or primary sorting when they cross the waste boundary.

- Selected flow: Soil, clods, and vegetative solids removed from harvested crop
- Flow property / unit: Mass / kg wet or dry material (flow property; unit group)
- Amount rule: measured solids by fate, with wet or dry basis and moisture recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_fate_records`
- Sources: `fao-ex-act-v9-2022`
- Range: Provisional sorting-solids screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg removed solids/kg marketable product
  - Basis: per 1 kg marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Dust from harvest and primary sorting (`harvest_dust`)

Report particulate emissions when harvesting or dry sorting creates a documented dust pathway. Retain particle-size or substance information when measured or required by the selected method.

- Selected flow: Particulate matter to ambient air from harvest and sorting
- Flow property / unit: Mass / kg particulate matter (flow property; unit group)
- Amount rule: measured or method-derived dust mass for the declared harvest and sorting operation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_operation_records`
- Sources: `fao-ex-act-v9-2022`
- Range: Provisional harvest-dust screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.002
  - Unit: kg particulate matter/kg marketable product
  - Basis: per 1 kg marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Postharvest conditioning and packing (`postharvest_conditioning`)

#### Inputs

##### Product flows

###### Sorted crop entering conditioning (`conditioning_product_input`)

This conditional product input links the sorted crop to washing, trimming, grading, cooling, or packing when those activities occur inside the declared gate.

- Selected flow: Fresh marketable sorted crop entering conditioning
- Flow property / unit: Mass / kg fresh product (flow property; unit group)
- Amount rule: link to `marketable_sorted_crop` and reconcile received mass at the conditioning operation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg conditioned marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_yield_records`
- Sources: `iso-14044-2006`
- Range: Provisional conditioning-input reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.2
  - Unit: kg sorted crop/kg conditioned product
  - Basis: per 1 kg conditioned marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning water (`conditioning_water`)

Water used for washing, rinsing, de-salting, or other conditioning crosses the process boundary as a process medium. Record reuse and discharge separately.

- Selected flow: Process water for washing or conditioning
- Flow property / unit: Volume / m3 (flow property; unit group)
- Amount rule: meter, batch log, or supplier record for the conditioning campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg conditioned marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_water_records`
- Sources: `fao-ex-act-v9-2022`
- Range: Provisional conditioning-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: m3/kg conditioned product
  - Basis: per 1 kg conditioned marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning electricity (`conditioning_electricity`)

Electricity used by washing, grading, cooling, conveying, or packing equipment is included when the equipment is inside the selected boundary.

- Selected flow: Electricity for postharvest conditioning and packing
- Flow property / unit: Energy / kWh (flow property; unit group)
- Amount rule: meter or equipment record allocated to the conditioning campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg conditioned marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
- Sources: `fao-ex-act-v9-2022`
- Range: Provisional conditioning-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kWh/kg conditioned product
  - Basis: per 1 kg conditioned marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wooden crate (`conditioning_packaging_wood_crate`)

**Collection scope and applicability for conditioning_packaging.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Packaging is conditional and includes material or a reusable packaging service used to contain or protect the declared product at conditioning.
Raw activity or stage basis: per 1 kg conditioned marketable fresh reference product.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Wooden crate
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_packaging_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`; `fao-package-identities`

###### Corrugated fibreboard box (`conditioning_packaging_corrugated_box`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_packaging_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`; `fao-package-identities`

###### Polyethylene wrapping film (`conditioning_packaging_pe_film`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_packaging_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`; `fao-package-identities`

###### Wastewater treatment service (`conditioning_wastewater_treatment`)

This conditional input is recorded when wastewater treatment is inside the declared boundary or is purchased as a treatment service linked to the conditioning campaign.

- Selected flow: Wastewater treatment service for conditioning discharge
- Flow property / unit: Treated wastewater volume / m3 (flow property; unit group)
- Amount rule: treated wastewater volume from treatment log or supplier record; reconcile to discharged conditioning water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg conditioned marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `iso-14044-2006`
- Range: Provisional wastewater-treatment screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: m3 treated wastewater/kg conditioned product
  - Basis: per 1 kg conditioned marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned marketable product (`conditioned_marketable_product`)

The conditioned product is the reference product when conditioning is included. Its final state and mass basis must match the reference-flow qualifiers.

- Selected flow: Fresh conditioned marketable other root, bulb, rhizome, corm, or tuber vegetable
- Flow property / unit: Mass / kg fresh product (flow property; unit group)
- Amount rule: accepted conditioned mass after washing, trimming, grading, cooling, or packing; normalized to 1 kg reference output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg conditioned marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_yield_records`
- Sources: `iso-14044-2006`
- Range: Conditioned-product reference-output QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.98
  - Upper: 1.02
  - Unit: kg conditioned product/kg reference product
  - Basis: per 1 kg conditioned marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Conditioning wastewater (`conditioning_wastewater`)

Record washing or conditioning wastewater crossing the boundary, including its volume and treatment or discharge fate.

- Selected flow: Wastewater from washing or conditioning
- Flow property / unit: Volume / m3 (flow property; unit group)
- Amount rule: discharged or treated volume from batch, meter, or treatment records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg conditioned marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_water_records`
- Sources: `iso-14044-2006`
- Range: Provisional conditioning-wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: m3 wastewater/kg conditioned product
  - Basis: per 1 kg conditioned marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Trimmings and conditioning rejects (`conditioning_rejects`)

Record edible-organ trimmings, damaged pieces, and other rejects generated by conditioning and disclose each fate.

- Selected flow: Trimmings and rejects from conditioning
- Flow property / unit: Mass / kg fresh material (flow property; unit group)
- Amount rule: weighed trimmings and rejects by fate, reconciled to conditioning input and product output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg conditioned marketable fresh reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_yield_records`
- Sources: `iso-14044-2006`
- Range: Provisional conditioning-reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg fresh reject/kg conditioned product
  - Basis: per 1 kg conditioned marketable fresh reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Farm-gate storage and dispatch (`farm_gate_storage_and_dispatch`)

#### Inputs

##### Product flows

###### Product entering farm-gate storage or dispatch (`storage_dispatch_product_input`)

This conditional product input links marketable sorted or conditioned product to storage or dispatch within the declared farm-gate boundary.

- Selected flow: Marketable fresh product entering farm-gate storage or dispatch
- Flow property / unit: Mass / kg fresh product (flow property; unit group)
- Amount rule: link to the selected preceding product output and reconcile intake at storage or dispatch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product at declared gate.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_dispatch_records`
- Sources: `iso-14044-2006`
- Range: Provisional storage-dispatch input reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.1
  - Unit: kg input product/kg gate product
  - Basis: per 1 kg marketable fresh reference product at declared gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Storage or dispatch electricity (`storage_electricity`)

Record electricity used for cold storage, ventilation, lighting, handling, or other storage and dispatch equipment inside the selected boundary.

- Selected flow: Electricity for farm-gate storage or dispatch
- Flow property / unit: Energy / kWh (flow property; unit group)
- Amount rule: storage or dispatch meter allocated to the declared product campaign and storage duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product at declared gate.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch_records`
- Sources: `fao-ex-act-v9-2022`
- Range: Provisional storage-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kWh/kg gate product
  - Basis: per 1 kg marketable fresh reference product at declared gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Road freight service to the declared gate (`dispatch_transport`)

Road freight is conditional and is included only when transport to the declared collection or farm gate remains inside the foreground boundary.

- Selected flow: Road freight transport service for product dispatch
- Flow property / unit: Transport service / tonne-kilometre (flow property; unit group)
- Amount rule: actual transported mass in tonnes multiplied by loaded distance in km; use capacity × utilisation only to derive missing actual payload once, never multiply an already actual payload by utilisation again
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product at declared gate.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch_transport_records`
- Sources: `fao-ex-act-v9-2022`
- Range: Provisional short-route transport screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: tonne-km/kg gate product
  - Basis: per 1 kg marketable fresh reference product at declared gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wooden crate (`storage_packaging_wood_crate`)

**Collection scope and applicability for storage_packaging.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record packaging added or replaced for storage or dispatch when it is not already included in the conditioning process.
Raw activity or stage basis: per 1 kg marketable fresh reference product at declared gate.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Wooden crate
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_packaging_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`; `fao-package-identities`

###### Corrugated fibreboard box (`storage_packaging_corrugated_box`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_packaging_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`; `fao-package-identities`

###### Polyethylene wrapping film (`storage_packaging_pe_film`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_packaging_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`; `fao-package-identities`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable product at the declared farm gate (`gate_product`)

Record the measured accepted output of `farm_gate_storage_and_dispatch` only when that operation actually occurs. Preserve species, condition, grade, moisture, lot and its real outgoing gate. This stable row id identifies an actual route output; the sole final reference is reference_product_at_declared_handoff. Retain raw output and link the selected final lot without counting it as another final product. Any UUID shown is usable only for its independently confirmed physical state/gate; an incompatible upstream/intermediate state needs a separately verified or explicit unresolved identity. Preserve the original stage measurement and collection records.

- Selected flow: Marketable fresh other root, bulb, rhizome, corm, or tuber vegetable at the declared farm gate
- Flow property/unit: Mass / kg

Original reference-state unit annotation: Mass / kg fresh product (flow property; unit group)

Raw output measurement and reconciliation: Weigh the accepted net lot output of the actual operation under `cp_storage_dispatch_records`, retain gross/tare, rejects, stocks, moisture and matched onward lot records, and reconcile before final normalization.

- Amount rule: measured accepted net output from the actual operation under `cp_storage_dispatch_records`; retain raw lot quantity and actual stage throughput, then normalize once under the final-handoff normalization in Section 8; never prescribe a fixed intermediate yield
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: measured actual operation/lot output and throughput, retained before one final-reference normalization.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch_records`
- Sources: `iso-14044-2006`

##### Waste flows

###### Storage or dispatch loss (`storage_dispatch_loss`)

Record product loss during storage or dispatch, including the time, cause, and fate of the lost material.

- Selected flow: Fresh product lost during farm-gate storage or dispatch
- Flow property / unit: Mass / kg fresh material (flow property; unit group)
- Amount rule: weighed or reconciled loss by cause and fate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product at declared gate.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_dispatch_records`
- Sources: `fao-ex-act-v9-2022`
- Range: Provisional storage-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg fresh loss/kg gate product
  - Basis: per 1 kg marketable fresh reference product at declared gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Used or discarded packaging (`packaging_waste`)

Record packaging leaving the boundary as waste or a reusable return flow, with material identity and fate.

- Selected flow: Used or discarded packaging from storage or dispatch
- Flow property / unit: Mass / kg packaging (flow property; unit group)
- Amount rule: measured packaging waste or documented return mass linked to issued packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh reference product at declared gate.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`
- Range: Provisional packaging-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg packaging waste/kg gate product
  - Basis: per 1 kg marketable fresh reference product at declared gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Accepted-product measurement at declared handoff (`declared_reference_handoff`)
This measurement adds no processing, waste generation or emission. Preserve all real upstream operations and losses; bypass only operations demonstrated absent. Select one actual terminal product lot and cancel its paired internal transfer once when aggregating the system. Do not sum inactive routes, co-products or both source and handoff as accepted final output.

#### Inputs
##### Product flows
###### Accepted actual-route product at the same handoff (`actual_route_product_for_handoff`)

Measure only accepted product at the existing declared gate. Match one actual terminal source record; internal paired transfer and this reference represent the same event, not two sales. Verify identity for the actual species/state/gate independently; an identifier confirmed only for fresh farm-gate goods cannot represent an incompatible conditioned or independent pack-house state. Missing identity remains explicit and is not resolved by copying an adjacent output UUID.
- Selected flow: Marketable fresh other root, bulb, rhizome, corm, or tuber vegetable at the declared farm gate (UUID unresolved)
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
- Selected flow: Marketable fresh other root, bulb, rhizome, corm, or tuber vegetable at the declared farm gate (UUID unresolved)
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
| `allocation_primary_product` | all crop-cycle inputs and emissions | Assign foreground burdens to the declared marketable reference product after applying the measured crop-cycle output and any selected allocation method. | `iso-14044-2006` |
| `allocation_co_product` | saleable co-products or off-grade products leaving the system | Record each co-product separately. Use mass allocation only when product comparability is documented; otherwise use economic allocation with a stated price period and source. | `iso-14044-2006` |
| `allocation_residue` | crop residues, field losses, rejects, soil, and wastewater | Keep residues and losses as waste or elementary flows by physical fate. Do not treat returned residues or treatment outputs as co-products or avoided burdens. | `ipcc-2019-managed-soils`; `iso-14044-2006` |
| `allocation_reusable_packaging` | reusable bins, crates, and containers | Allocate packaging manufacture and maintenance over documented reuse cycles and the product mass served; record losses and replacement separately. | `iso-14044-2006` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `crop_protection_products_specific_input` | `cp_crop_protection_records` | Operation field_cultivation: Record pesticides, biocontrol products, herbicides, or other crop-protection products only when they are used in the declared crop cycle. The active substance and application record remain required even when the product flow identity is evidence gap. Original quantity method: measured purchased or dispensed amount, with active-substance fraction retained |
| `cultivation_fuel_specific_input` | `cp_field_energy_records` | Operation field_cultivation: Fuel used by tractors, harvest preparation machinery, and other mobile field equipment crosses the cultivation boundary as an energy input. Record fuel by operation where possible. Original quantity method: fuel issue, invoice, tank, or machine record allocated to the declared crop cycle |
| `harvest_fuel_specific_input` | `cp_harvest_operation_records` | Operation harvest_and_primary_sorting: Record fuel used by harvesting, lifting, conveying, cleaning, and primary sorting equipment when it crosses the operation boundary. Original quantity method: fuel issue, invoice, tank, or machine record allocated to the declared harvest campaign |


Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_material_records` | `field_cultivation` | planting material | lot ledger and supplier record | crop identity; cultivar or type; material form; lot; mass or count; treatment; supplier; planting date; planted area | weigh on receipt and reconcile to invoice and planting log; Raw aggregation and attribution: sum lots used by crop cycle, then normalize by marketable output | kg or count | each lot and crop cycle | full declared crop cycle | farm and block | per declared reference flow | invoice, lot label, field log, scale record |
| `cp_nutrient_input_records` | `field_cultivation` | fertilizer or soil amendment; soil emissions | input ledger, label, test, and application log | product name; product mass or volume; N/P/K or other nutrient content; lot; application date; area; application method; lime or urea flag | reconcile invoices, product labels, tests, and application logs; retain nutrient basis; Raw aggregation and attribution: sum actual products and nutrients by crop cycle; do not infer unrecorded product types | kg product and kg nutrient | each product and application | full crop cycle | farm and block | per declared reference flow | invoice, label, laboratory test, application log |
| `cp_crop_protection_records` | `field_cultivation` | crop protection | spray or treatment log | product; active substance; dose; amount; area; date; application method; target | reconcile treatment log to product issue and label; Raw aggregation and attribution: sum products and active substances by crop cycle `crop_protection_products_specific_input`: Operation field_cultivation: Record pesticides, biocontrol products, herbicides, or other crop-protection products only when they are used in the declared crop cycle. The active substance and application record remain required even when the product flow identity is evidence gap. Original quantity method: measured purchased or dispensed amount, with active-substance fraction retained Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg product or active substance | each application | full crop cycle | farm and block | per declared reference flow | application log, label, purchase record |
| `cp_irrigation_water_records` | `field_cultivation` | irrigation water and source withdrawal | meter, irrigation log, or supplier record | source; delivery or withdrawal volume; meter id; date; crop block; irrigation method; reuse fraction | read meter or reconcile supplier/source records; record estimation method where metering is absent; Raw aggregation and attribution: sum by crop block; keep delivery and source withdrawal separate | m3 | each irrigation event or monthly meter | full crop cycle | farm and block | per declared reference flow | meter calibration, pump log, supplier statement |
| `cp_field_energy_records` | `field_cultivation` | cultivation fuel and electricity | fuel ledger and utility meter | fuel identity; volume or mass; equipment; operation; date; electricity kWh; meter; crop block | reconcile fuel issue or invoice and utility meter to field operations; Raw aggregation and attribution: allocate shared equipment by operating time, area, or measured use and disclose factor `cultivation_fuel_specific_input`: Operation field_cultivation: Fuel used by tractors, harvest preparation machinery, and other mobile field equipment crosses the cultivation boundary as an energy input. Record fuel by operation where possible. Original quantity method: fuel issue, invoice, tank, or machine record allocated to the declared crop cycle Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | L, kg fuel, or kWh | each issue or meter period | full crop cycle | farm, block, and equipment | per declared reference flow | invoice, tank record, meter record, operating log |
| `cp_land_and_cycle_records` | `field_cultivation` | land occupation | field register and crop plan | field or greenhouse id; area; crop; planting and harvest dates; cycle duration; land-use history; protected-cover status | verify field register against GIS, lease, or production records; Raw aggregation and attribution: area multiplied by cycle duration, then divide by marketable output | ha, m2, and days | each field and crop cycle | declared crop cycle and prior land disclosure | farm and block | per declared reference flow | field register, map, lease, crop plan |
| `cp_yield_and_quality_records` | `field_cultivation`; `harvest_and_primary_sorting` | harvested and sorted products | harvest tickets and grading record | product identity; cultivar; harvest date; gross mass; sorted mass; marketable mass; rejects; moisture; grade; field | weigh lots and reconcile harvest, grading, and dispatch records; Raw aggregation and attribution: sum by crop cycle and condition; use accepted marketable mass as denominator | kg fresh product and moisture fraction | each harvest lot | full harvest campaign | farm, block, and lot | per declared reference flow | calibrated scale, grading record, moisture test |
| `cp_residue_and_fate_records` | `field_cultivation`; `harvest_and_primary_sorting` | residues, soil, clods, and losses | residue and waste log | material; fresh or dry mass; moisture; fate; field or operation; date; treatment or return | weigh or estimate with documented method and reconcile to mass balance; Raw aggregation and attribution: aggregate by physical fate; do not combine product co-products with waste | kg wet or dry material | each event or crop cycle | full crop cycle and harvest campaign | farm, block, and operation | per declared reference flow | waste ticket, field log, dry-matter test, fate record |
| `cp_harvest_operation_records` | `harvest_and_primary_sorting` | harvest fuel and dust | equipment log and operation record | equipment; operation; fuel; run time; throughput; dust observation or measurement; date | reconcile fuel and operating records to harvest throughput; measure dust where available; Raw aggregation and attribution: allocate shared operation to crop throughput or operating time `harvest_fuel_specific_input`: Operation harvest_and_primary_sorting: Record fuel used by harvesting, lifting, conveying, cleaning, and primary sorting equipment when it crosses the operation boundary. Original quantity method: fuel issue, invoice, tank, or machine record allocated to the declared harvest campaign Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | L, kg fuel, hours, and kg particulate | each operation or campaign | harvest campaign | farm, block, and equipment | per declared reference flow | equipment log, fuel record, measurement or observation |
| `cp_conditioning_yield_records` | `postharvest_conditioning` | conditioning input, output, rejects | batch and grading record | input mass; output mass; trimmings; rejects; moisture; condition; date; batch | weigh input and output batches and reconcile to water and waste records; Raw aggregation and attribution: sum batches by product condition and normalize by conditioned output | kg fresh product and moisture fraction | each conditioning batch | conditioning campaign | facility and batch | per declared reference flow | calibrated scale, batch ticket, grade record |
| `cp_conditioning_water_records` | `postharvest_conditioning` | conditioning water and wastewater | water meter and discharge log | water input; reuse; discharge; treatment; meter; batch; date; source | meter or batch log; reconcile discharge and treatment volumes; Raw aggregation and attribution: aggregate by product batch; disclose reuse and treatment | m3 | each batch or meter period | conditioning campaign | facility and batch | per declared reference flow | meter record, discharge log, treatment ticket |
| `cp_conditioning_energy_records` | `postharvest_conditioning` | conditioning electricity | facility meter and equipment log | electricity; equipment; runtime; batch; cooling setpoint where relevant; date | allocate meter or equipment records to campaign throughput; Raw aggregation and attribution: allocate shared energy by throughput or runtime and disclose method | kWh | meter period or batch | conditioning campaign | facility and equipment | per declared reference flow | meter record, equipment log |
| `cp_packaging_records` | `postharvest_conditioning`; `farm_gate_storage_and_dispatch` | packaging input and waste | packaging issue and return log | material; mass or count; reusable flag; cycles; product mass served; waste or return; date | weigh or count packaging and reconcile issue, return, and waste records; Raw aggregation and attribution: prorate reusable items over documented cycles and product mass | kg, count, and cycles | each issue or campaign | conditioning, storage, and dispatch campaign | facility and campaign | per declared reference flow | supplier record, issue log, return ticket, waste ticket |
| `cp_wastewater_treatment_records` | `postharvest_conditioning` | wastewater treatment service | treatment log or supplier ticket | wastewater volume; treatment route; date; batch; provider; discharge or reuse | reconcile treatment ticket to conditioning discharge; Raw aggregation and attribution: sum treated volume by campaign and keep untreated discharge separate | m3 | each batch or treatment period | conditioning campaign | facility and provider | per declared reference flow | treatment ticket, provider record, discharge log |
| `cp_storage_dispatch_records` | `farm_gate_storage_and_dispatch` | storage input, electricity, product output, loss | storage and dispatch register | intake mass; gate mass; storage duration; temperature; electricity; loss; cause; date; gate condition | reconcile intake, storage, loss, and gate dispatch records; Raw aggregation and attribution: sum by lot and normalize to gate product; disclose storage duration | kg, kWh, days, and temperature | each lot and storage period | selected storage and dispatch campaign | farm, store, and lot | per declared reference flow | scale, meter, temperature log, dispatch ticket |
| `cp_dispatch_transport_records` | `farm_gate_storage_and_dispatch` | road freight service | route and load record | origin; destination; distance; vehicle; load; product mass; return leg; date | verify route distance and load record; calculate tonne-kilometres; Raw aggregation and attribution: sum tonne-kilometres for included route only; exclude post-gate transport | km, t, and tonne-km | each dispatch route or lot | selected dispatch campaign | route and vehicle | per declared reference flow | route record, weigh ticket, carrier record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_marketable_yield` | field and harvest product rows | Marketable output is the accepted fresh product mass after the declared sorting and conditioning decisions. Normalize each included activity by `marketable_output_kg`. | `cp_yield_and_quality_records`; harvest tickets; grading records | kg reference product and crop-cycle yield | `fao-ex-act-v9-2022` |
| `calc_dry_matter_conversion` | residues, soil, clods, and moisture-dependent rows | `dry_mass = fresh_mass × (1 − moisture_fraction)`. Record the measured or declared moisture basis and keep fresh and dry mass separate. | `cp_yield_and_quality_records`; `cp_residue_and_fate_records`; moisture test | kg dry matter | `fao-ex-act-v9-2022`; `ipcc-2019-managed-soils` |
| `calc_nutrient_basis` | fertilizer or soil amendment | `nutrient_mass = product_mass × declared nutrient_fraction`. Retain actual product mass and each declared N, P, K, or other nutrient basis; do not fill missing nutrient content with an assumed product identity. | `cp_nutrient_input_records`; product label; laboratory test | kg product and kg nutrient | `ipcc-2019-managed-soils` |
| `calc_soil_n_emissions` | direct N2O, ammonia, nitrate, phosphate, and liming or urea CO2 | Apply the selected IPCC tier and documented factors to collected N inputs, residue N, liming, or urea as applicable. Declare the factor tier, climate or soil stratification, and residue fate; avoid double counting. | `cp_nutrient_input_records`; `cp_residue_and_fate_records`; selected method factors | kg pollutant per kg marketable product | `ipcc-2019-managed-soils` |
| `calc_water_normalization` | irrigation, withdrawal, conditioning water, and wastewater | `water_per_kg = recorded_volume_m3 / marketable_output_kg`. Keep delivery, source withdrawal, reuse, and discharge as separate rows. | `cp_irrigation_water_records`; `cp_conditioning_water_records`; output records | m3 per kg reference product | `fao-ex-act-v9-2022` |
| `calc_energy_normalization` | fuel and electricity | Convert fuel only with a documented fuel identity and lower-heating-value factor; divide fuel or kWh by marketable output and allocate shared equipment by the collected use factor. | field, harvest, conditioning, and storage energy records | L, kg fuel, or kWh per kg reference product | `fao-ex-act-v9-2022` |
| `calc_land_occupation` | land occupation | `area_time_per_kg = cultivated_area × crop_cycle_duration / marketable_output_kg`; disclose area units, cycle duration, and protected-cover occupancy. | `cp_land_and_cycle_records`; `cp_yield_and_quality_records` | m2*year per kg reference product | `fao-ex-act-v9-2022` |
| `calc_mass_balance` | product, reject, residue, wastewater, and storage rows | Reconcile each operation as received mass or water plus additions equals product outputs, waste outputs, measured losses, and documented stock change within the declared tolerance. | batch, harvest, waste, water, and dispatch records | mass-balance check and normalized rows | `iso-14044-2006` |
| `calc_transport_service` | included dispatch transport | Transport work in tonne-kilometres = actual transported payload mass in tonnes * loaded route distance in kilometres. The actual payload already reflects loading; do not multiply it by a load factor again. If only rated capacity and utilisation are recorded, derive actual payload once as capacity * evidenced utilisation, then apply the distance. Apply documented empty-return and vehicle-utilisation assumptions in the transport-service dataset/factor boundary once; do not count the same fuel both as a service and a local operation. Retain shipment, route, mass, distance, source units and factor boundary. | `cp_dispatch_transport_records`; weigh and route records | tonne-km per kg gate product | `fao-ex-act-v9-2022` |
| `calc_reusable_packaging` | packaging input and waste | Allocate reusable packaging burden by documented cycles and product mass served, and reconcile returned, lost, and discarded units. | `cp_packaging_records`; supplier and return records | kg packaging per kg product and packaging fate | `iso-14044-2006` |
| `planting_material_identity_and_fate` | `field_cultivation` | For the original planting_material collection role at this operation, identify the actual physical form, species/material, composition, state and supply/treatment boundary before creating exchanges. Each seed lot, transplant, crown, cutting, larval stage, formulation, coating, preservative or separated residue actually used/generated requires its own concrete card where relevant to this role; these examples are alternatives, not a required recipe. Retain existing collection records and route-specific source evidence. Count-based planting records require measured or supplier-supported mass-per-unit when matched to a mass-based provider; retain count and mass as linked attributes rather than two purchases. Do not merge separate husk/shell or separate agents. A real mixed stream requires composition and recipient evidence and is counted once. Before completeness, record every applicable amount and native unit, link a compatible verified UUID or explicitly unresolved identity, preserve stock/return attribution, and normalize the attributable raw quantity once to the accepted reference output. Missing records are not zero; aggregate ranges are not individual-input defaults. | `cp_planting_material_records` | Identity-specific exchanges and reconciled activity records | `fao-ex-act-v9-2022` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_nutrient_input_records`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product, planting material, nutrient products, crop protection, packaging, and waste | Identify the crop, edible organ, cultivar or type, lot, product condition, and supplier or source. Do not use a generic category name as the sole identity. | product records, lot labels, supplier documents, identity review |
| `dq_temporal` | all foreground rows | Cover one complete declared crop cycle and the associated harvest or conditioning campaign. State missing months, substituted periods, and storage duration. | field log, harvest tickets, meter periods, storage register |
| `dq_geography` | field, water, energy, and transport | Declare farm, block or facility, country or region, production system, irrigation source, and included route. | field register, facility record, meter and route records |
| `dq_measurement` | amounts and conversions | Prefer calibrated scales and meters, invoices, supplier records, laboratory tests, or route tickets. Document estimation and conversion factors where direct measurement is unavailable. | calibration, invoices, tests, logs, conversion record |
| `dq_completeness` | all included processes and flow types | Include or explicitly mark not applicable all selected process inputs, outputs, wastes, residues, water, energy, nutrient products, and direct emissions. | completeness checklist, process map, inventory review |
| `dq_mass_balance` | product and waste rows | Reconcile input, output, reject, residue, wastewater, storage loss, and stock changes at each operation; explain any residual difference. | batch mass balance and waste-fate records |
| `dq_emissions_method` | elementary emissions | Record N forms, nutrient basis, residue fate, selected IPCC tier, factors, receiving medium, and climate or soil stratification where used. | nutrient ledger, residue log, method calculation record |
| `dq_disclosure` | reference flow and published dataset | Disclose product condition, moisture, marketable grade, gate, boundary extensions, allocation, proxy use, reasoned estimates, and identity evidence gaps. | dataset metadata, process notes, quality statement |
| `dq_uncertainty` | ranges and modelled estimates | Mark provisional reasoned ranges as replaceable authoring estimates and replace them with reviewed evidence before active or published use when they constrain a decision. | range review, site data, source update record |
| `dq_resolution` | all parameterized and unmapped rows | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. | identity review and final binding audit |

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
| `validation_reference_flow` | reference flow and product outputs | Use one 1 kg fresh-mass reference flow. Confirm product identity, edible organ, condition, moisture basis, geography, crop cycle, and declared gate are present. | `unsd-cpc-3-01259` |
| `validation_process_map` | process map and detailed inventory | Every required process must have matching detailed inventory. Every conditional process must state whether it is included and must carry the corresponding records when included. | `fao-ex-act-v9-2022` |
| `validation_amounts` | every flow row | Every row must state amount rule, value mode, specificity, normalization basis, basis kind, evidence kind, and a valid collection protocol when evidence is collected or calculated from collection. | `iso-14044-2006` |
| `validation_mass_balance` | product, waste, residue, and water rows | Fail validation when operation-level mass or water balance is unexplained, when a product handoff is counted twice, or when a loss has no declared fate. | `iso-14044-2006` |
| `validation_nutrient_emissions` | nutrient and elementary-emission rows | Check that emission calculations use recorded nutrient products and declared factors, that pollutant species and media are explicit, and that residue or liming pathways are not double counted. | `ipcc-2019-managed-soils` |
| `validation_flow_identity` | parameterized and unmapped rows | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |
| `validation_boundary` | published dataset profile and process selection | Reject post-gate transport, retail, consumer use, or processing when they are not declared as a boundary extension. | `unsd-cpc-3-01259` |
| `validation_bilingual_alignment` | English and Chinese Markdown | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_handoff_bypass` | selected actual route and all conditional bypass states | Check both presence and absence of optional conditioning/packing/storage against actual records: exactly one required handoff reference persists, its source product/state/gate matches Section 3, active physical rows retain measured throughput, and inactive physical activities add no exchange. Require raw accepted mass, upstream closure, unique transfer pairing and single final normalization; an unexplained state or missing identity is not an assumed valid branch. | `declared-handoff-measurement-definition` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` only when independently reviewed, complete, and identity-resolved |
| downstream_use | Foreground crop process datasets and lifecyclemodel projections for fresh covered root, bulb, rhizome, corm, or tuber vegetables at the declared farm gate |
| allowed_use | LCA modelling and aggregation when product qualifiers, geography, crop cycle, gate condition, allocation, and data-quality disclosures match; scenario comparison only when the scenario change is declared |
| excluded_use | Processed, preserved, dried, frozen, cooked, feed-only, seed-only, or live-plant products; consumer or retail modelling without a boundary extension; publication with evidence gap flow or unit identity |
| required_metadata | reference flow; CPC scope; product identity and edible organ; cultivar or type; farm or block; geography; production system; area and crop cycle; planting and harvest dates; harvested and marketable mass; moisture; nutrient products and nutrient basis; crop protection; irrigation source and volume; fuel and electricity; conditioning, storage, and gate state; packaging; transport; residues and fates; concrete flow identity verification; identity status; collection coverage; allocation; DQR |
| required_quality_disclosure | temporal and geographic coverage; measurement and proxy methods; mass balance; yield, reject, and loss fractions; N/P/K basis; emissions tier and factors; water and energy units; allocation; evidence gap or estimated rows; and quality score or narrative |
| update_trigger | New reviewed crop or process evidence; material route, technology, product-condition, or gate change; revised classification scope; changed concrete flow identity verification; recurring data outside QA ranges; or new product-specific records that replace provisional estimates |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-01259` | official_guidance | United Nations Statistics Division, CPC Version 3.0 classification detail for subclass 01259, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/01259 | product-category scope, included examples, classification exclusions, and fresh-product boundary context |
| `ipcc-2019-managed-soils` | official_guidance | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil N2O, ammonia and nutrient pathways, crop-residue N, liming and urea CO2, factor selection, and double-counting controls |
| `fao-ex-act-v9-2022` | official_guidance | FAO, EX-ACT Guidelines, second edition, tool version 9, DOI:10.4060/cc0142en, https://doi.org/10.4060/cc0142en | crop-cycle boundary, land occupation, yield, water, energy, activity records, and agricultural data disclosure |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | inventory consistency, allocation, co-product treatment, reusable packaging allocation, and mass-balance validation |
| `fao-stat-crops` | dataset | FAOSTAT Crops and livestock products, Food and Agriculture Organization of the United Nations, https://www.fao.org/faostat/en/#data/QCL | optional cross-check of crop identity, production and yield context; it does not replace foreground records |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | Equipment/carrier possibilities only; site records govern applicability. No intensity, fuel share or default recipe is adopted. |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | method_factor | This PCR Sections 3, 6 and 8: matched accepted handoff mass divided by itself times the declared reference amount; physical transfer pairing and dimensional normalization identity, not an empirical yield or new physical operation. | single accepted reference and measured route-throughput linkage |
