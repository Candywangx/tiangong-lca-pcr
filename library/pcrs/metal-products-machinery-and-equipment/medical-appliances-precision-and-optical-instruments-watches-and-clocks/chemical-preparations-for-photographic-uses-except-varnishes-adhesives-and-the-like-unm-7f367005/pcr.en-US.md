---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.chemical-preparations-for-photographic-uses-except-varnishes-adhesives-and-the-like-unm-7f367005
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Chemical preparations for photographic uses, except varnishes, adhesives and the like; unmixed products for photographic uses, put up in measured portions or put up for retail sale in a form ready for use

## 1. Scope and Applicability

This PCR governs cradle-to-gate foreground data packages for manufacturing saleable photographic chemical preparations and qualifying unmixed photographic chemicals in measured portions or retail-ready form. It covers liquid concentrates, ready-to-use solutions, dry measured products, developers, stop baths, fixers, bleaches, bleach-fixes, toners, stabilizers, wetting agents and sensitizing emulsions. Product use in a photographic laboratory, film or paper processing, silver recovery after use, and end-of-life treatment after sale are outside the foreground boundary.

The record excludes photographic plates, film, paper and equipment; bulk unmixed chemicals not portioned or retail-ready for photographic use; printing-plate developers classified outside this product boundary; and varnishes, glues, adhesives and similar preparations. The authoritative CPC title establishes the classification boundary, while the product family and composition rules are supported by `un-cpc-3-0-structure-2025`, `us-epa-photographic-processing-1981` and `ilford-rapid-fixer-sds-2024`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.chemical-preparations-for-photographic-uses-except-varnishes-adhesives-and-the-like-unm-7f367005 |
| classification_refs | CPC 3.0: 48342 (exact classification context) |
| covered_products | Photographic developer, stop-bath, fixer, bleach, bleach-fix, toner, stabilizer, wetting-agent and sensitizing-emulsion preparations; qualifying unmixed photographic chemicals in measured portions or retail-ready form |
| excluded_products | Varnishes, glues, adhesives and similar preparations; photographic film, plates and paper; photographic equipment; printing-plate developer outside CPC 48342; bulk unmixed chemicals not portioned or retail-ready for photographic use |
| representative_product | Photographic developer solution |
| production_route | Receipt and dosing of purchased ingredients; aqueous dissolution or liquid blending, or dry blending/milling when applicable; optional onsite sensitizing-emulsion preparation; filtration or finishing as required; filling, packing and release |
| market_state | Declared as liquid concentrate, ready-to-use liquid, dry measured portion, retail-ready unmixed product, or sensitizing emulsion; net product mass excludes packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a saleable photographic chemical preparation meeting the declared formulation and release specification at the factory gate |
| How much | 1 kg net photographic chemical preparation, excluding primary and secondary packaging |
| How well | Product family, formulation version, physical state, concentration or dilution status, relevant active ingredients, release specification and packaging configuration are declared and conform to batch quality records |
| How long or cycle | One released production batch delivered at the factory gate; no use-duration service is included |
| reference_flow_link | `pk_reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net saleable preparation |
| Reference product flow | Photographic developer solution `1ad173c7-fe76-44fa-9f02-9942dbe1bcbc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family; formulation or recipe version; liquid or dry physical state; concentrate, ready-to-use, measured-portion or retail-ready state; active-ingredient identities and as-supplied concentrations; release specification; primary and secondary packaging; production geography; batch and reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. The confirmed reference UUID is the representative developer solution; datasets for another covered product family must state that family explicitly and must not relabel the confirmed developer flow as another preparation.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to net released preparation mass; exclude packaging mass and unreleased off-specification material from the denominator. |
| `ingredient_as_supplied_mass` | formulation ingredients | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each purchased ingredient as supplied; disclose purity, solution concentration and water content needed to interpret active-ingredient mass. |
| `water_mass_basis` | process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use metered mass or convert volume using batch-specific density and temperature; disclose the conversion. |
| `electricity_energy_basis` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electrical energy and convert kWh to MJ using 1 kWh = 3.6 MJ without treating electricity as material mass. |
| `wastewater_volume_basis` | equipment-cleaning wastewater | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record transferred wastewater volume and disclose whether recycled water, retained product and entrained rinse water are included. |

## 5. System Boundary

The foreground boundary begins when purchased ingredients, process water and packaging materials cross the manufacturing-site boundary. It includes onsite receipt and dosing, dissolution or blending, applicable dry milling, applicable sensitizing-emulsion preparation, filtration and finishing, filling and packaging, quality control, equipment cleaning, onsite waste handling before transfer, and direct measured releases. Upstream production and delivery of purchased inputs require geographically and technologically representative linked datasets. Downstream photographic processing and product end of life are excluded.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased ingredients and packaging are received at the manufacturing site in the supplier-declared grade and concentration; any internally produced ingredient is identified separately |
| starting_condition_role | Cradle-to-gate entry point for purchased inputs and beginning of the foreground formulation system |
| product_classification_scope | Photographic chemical preparations and qualifying measured-portion or retail-ready unmixed photographic products within the declared category boundary |
| recursive_input_rule | When a purchased photographic preparation from the same category is used as an input, record that specific preparation once with its upstream dataset; do not recursively decompose it unless verified supplier composition and non-overlapping upstream data are available |
| upstream_dataset_requirement | Link each purchased ingredient, water, electricity and packaging item to a dataset matching geography, technology, grade, concentration and delivery boundary |
| disclosure | Disclose purchased-versus-onsite ingredient production, product family, formulation version, batch scale, physical state, concentration, packaging configuration, control technology, recycled-water or rework loops, and all exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_formulation_operations` | foreground manufacturing | Include mixing, blending, milling or other chemical-preparation operations actually used, together with filling, cleaning, waste transfer and measured direct releases; omit a route only with batch evidence that it did not occur. | us-epa-chemical-preparations-neshap-2009 |
| `boundary_product_family` | category scope | Keep photographic processing at the customer outside the foreground system, but use the declared photographic product family and as-sold state to determine which manufacturing ingredients and unit operations apply. | un-cpc-3-0-structure-2025; us-epa-photographic-processing-1981; ilford-rapid-fixer-sds-2024 |
| `boundary_same_category_input` | recursive product input | A purchased same-category preparation is one atomic product input with an upstream dataset and may not be double-counted through both the supplier preparation and its unverified constituent recipe. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `formulation` | Ingredient dosing and photographic-chemical formulation | required |  | Foreground receipt, dosing, dissolution, blending, filtration and applicable dry milling | Net batch mass transferred to filling |
| `sensitizing_emulsion_preparation` | Sensitizing-emulsion preparation | conditional | Include only when a sensitizing emulsion is manufactured onsite rather than purchased as a finished preparation | Foreground precipitation, ripening, washing and sensitization operations | Released sensitizing-emulsion mass transferred to filling |
| `finishing_packaging` | Filling, packaging and product release | required |  | Foreground filling, closure, secondary packing and quality release | 1 kg net released reference product |
| `equipment_cleaning` | Equipment cleaning and wastewater transfer | required |  | Foreground campaign cleaning, retained-product accounting and wastewater transfer | Cleaning records allocated to released product |

### Process: Ingredient dosing and photographic-chemical formulation (`formulation`)

#### Inputs

##### Product flows

###### Formulation process water (`fm_process_water`)

Record water incorporated into liquid or wet-process preparations; exclude equipment-cleaning water recorded under `cl_process_water`.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: batch-metered or recipe-issued water incorporated into the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources:

###### Formulation electricity (`fm_electricity`)

Record electricity for dosing, agitation, pumping, temperature control, filtration and applicable milling attributable to the formulation batch.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity allocated to the formulation batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources:

###### Hydroquinone developing agent (`fm_hydroquinone`)

Include only for a formulation whose verified recipe contains hydroquinone; keep the flow UUID unresolved until an exact public state-100 identity is available.

- Selected flow: Hydroquinone
- Flow property / unit: Mass / kg
- Amount rule: as-supplied hydroquinone mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `us-epa-photographic-processing-1981`

###### Sodium carbonate activator (`fm_sodium_carbonate`)

Include only when sodium carbonate is an ingredient in the declared formulation.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: as-supplied sodium carbonate mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `us-epa-photographic-processing-1981`

###### Sodium hydroxide activator (`fm_sodium_hydroxide`)

Include only when sodium hydroxide is an ingredient in the declared formulation; disclose concentration and product state.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: as-supplied sodium hydroxide mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `us-epa-photographic-processing-1981`

###### Sodium sulfite preservative (`fm_sodium_sulfite`)

Include only when sodium sulfite is an ingredient in the declared formulation; do not substitute metabisulfite or hydrosulfite under this row.

- Selected flow: Sodium sulfite `b52e5a0a-75f6-4f96-8972-73811e95fede`
- Flow property / unit: Mass / kg
- Amount rule: as-supplied sodium sulfite mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `us-epa-photographic-processing-1981`

###### Ammonium thiosulfate fixing agent (`fm_ammonium_thiosulfate`)

Include only for fixer or bleach-fix formulations containing ammonium thiosulfate; keep the UUID unresolved rather than using sodium thiosulfate.

- Selected flow: Ammonium thiosulfate
- Flow property / unit: Mass / kg
- Amount rule: as-supplied ammonium thiosulfate mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `us-epa-photographic-processing-1981`; `ilford-rapid-fixer-sds-2024`

###### Acetic acid acidifier (`fm_acetic_acid`)

Include only for stop-bath, fixer or other declared formulations containing acetic acid; disclose as-supplied concentration.

- Selected flow: Acetic acid (acetic acid) `c7564d76-47c4-440c-9eb8-3242c38eeb1b`
- Flow property / unit: Mass / kg
- Amount rule: as-supplied acetic acid mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `us-epa-photographic-processing-1981`

###### Ferric ammonium EDTA bleaching agent (`fm_ferric_ammonium_edta`)

Include only for a verified bleach or bleach-fix recipe containing ferric ammonium EDTA; do not substitute another ferric salt.

- Selected flow: Ferric ammonium EDTA
- Flow property / unit: Mass / kg
- Amount rule: as-supplied ferric ammonium EDTA mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `us-epa-photographic-processing-1981`

###### Potassium bromide restrainer (`fm_potassium_bromide`)

Include only when potassium bromide is present in the declared developer or related formulation.

- Selected flow: Potassium bromide
- Flow property / unit: Mass / kg
- Amount rule: as-supplied potassium bromide mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `us-epa-photographic-processing-1981`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Off-specification photographic chemical preparation (`fm_offspec_preparation`)

Record unreworked rejected product transferred to internal or external waste management; exclude material returned to the same batch before release.

- Selected flow: Off-specification photographic chemical preparation
- Flow property / unit: Mass / kg
- Amount rule: weighed unreworked off-specification preparation leaving the foreground production system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources:

##### Elementary flows

###### Fine particles to air from dry handling (`fm_pm25_air`)

Include only when dry charging, blending or milling produces measured PM0.2-PM2.5 emissions after onsite controls; do not use this row for larger particles or another air compartment.

- Selected flow: Particles (PM0.2 - PM2.5) `4d9a8790-3ddd-11dd-936e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured or control-device-calculated PM0.2-PM2.5 released to unspecified air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `us-epa-chemical-preparations-neshap-2009`

### Process: Sensitizing-emulsion preparation (`sensitizing_emulsion_preparation`)

#### Inputs

##### Product flows

###### Sensitizing-emulsion process water (`se_process_water`)

Record water incorporated into or used as process water for an onsite sensitizing-emulsion batch; cleaning water remains under `cl_process_water`.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: batch-metered process water attributable to onsite sensitizing-emulsion preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released sensitizing emulsion
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emulsion_records`
- Sources:

###### Sensitizing-emulsion electricity (`se_electricity`)

Record electricity for precipitation, agitation, temperature control, washing, ripening and sensitization when those operations occur onsite.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity allocated to the onsite sensitizing-emulsion batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released sensitizing emulsion
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emulsion_records`
- Sources:

###### Silver nitrate precursor (`se_silver_nitrate`)

Include only for onsite silver-halide sensitizing-emulsion preparation and record the as-supplied precursor mass.

- Selected flow: Silver nitrate
- Flow property / unit: Mass / kg
- Amount rule: as-supplied silver nitrate mass issued to the emulsion batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released sensitizing emulsion
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emulsion_records`
- Sources: `us-epa-photographic-processing-1981`

###### Photographic-grade gelatin (`se_gelatin`)

Include only for onsite gelatin-based sensitizing-emulsion preparation; disclose grade and animal or other source where known.

- Selected flow: Photographic-grade gelatin
- Flow property / unit: Mass / kg
- Amount rule: as-supplied photographic-grade gelatin mass issued to the emulsion batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released sensitizing emulsion
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emulsion_records`
- Sources: `us-epa-photographic-processing-1981`

###### Potassium bromide halide precursor (`se_potassium_bromide`)

Include only when potassium bromide is used to form the declared onsite silver-halide emulsion.

- Selected flow: Potassium bromide
- Flow property / unit: Mass / kg
- Amount rule: as-supplied potassium bromide mass issued to the emulsion batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released sensitizing emulsion
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emulsion_records`
- Sources: `us-epa-photographic-processing-1981`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Photographic sensitizing emulsion (`se_sensitizing_emulsion`)

Record released sensitizing emulsion transferred to filling or sold as the covered product; the UUID remains unresolved and may not be replaced with the confirmed developer-solution UUID.

- Selected flow: Photographic sensitizing emulsion
- Flow property / unit: Mass / kg
- Amount rule: released sensitizing-emulsion mass from batch records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released sensitizing emulsion
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emulsion_records`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

### Process: Filling, packaging and product release (`finishing_packaging`)

#### Inputs

##### Product flows

###### High-density polyethylene primary bottle (`pk_hdpe_bottle`)

Include only when the declared liquid product is filled into an HDPE bottle; record the finished bottle mass including its inseparable closure only when supplied as one purchased item.

- Selected flow: High-density polyethylene bottle
- Flow property / unit: Mass / kg
- Amount rule: purchased finished HDPE bottle mass consumed for released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Corrugated secondary box (`pk_corrugated_box`)

Include only when corrugated board boxes are used for the declared sale unit or shipping configuration.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: purchased corrugated box mass consumed for released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Filling and packaging electricity (`pk_electricity`)

Record electricity for transfer pumps, filling, closure, labelling, packing and release-line operation attributable to the product.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity allocated to filling and packaging released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released photographic developer solution (`pk_reference_product`)

This is the representative reference output. Another covered product family must use a separately confirmed product identity and must not retain this developer UUID under a different name.

- Selected flow: Photographic developer solution `1ad173c7-fe76-44fa-9f02-9942dbe1bcbc`
- Flow property / unit: Mass / kg
- Amount rule: net released product mass calculated from accepted fill units and verified net fill mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Equipment cleaning and wastewater transfer (`equipment_cleaning`)

#### Inputs

##### Product flows

###### Equipment-cleaning process water (`cl_process_water`)

Record fresh process water used to rinse formulation, transfer and filling equipment; separately disclose verified recycled rinse water that does not cross the system boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered fresh cleaning water allocated to released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Photographic-chemical equipment-cleaning wastewater (`cl_photochemical_wastewater`)

Record the liquid waste transferred to onsite or external treatment from cleaning manufacturing equipment; characterize product family, pH, relevant hazardous constituents and destination.

- Selected flow: Equipment-cleaning wastewater containing photographic chemicals
- Flow property / unit: Volume / m3
- Amount rule: transferred wastewater volume after subtracting verified closed-loop reuse and retained product returned to the same batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | formulation, filling and cleaning | Prefer batch, line or campaign subdivision and direct metering so burdens are assigned without allocation. |  |
| `allocation_rework` | off-specification material returned to process | Keep reworked material and its additional processing inside the foreground system; do not credit it as a co-product or count it as waste. |  |
| `allocation_shared_operations` | shared electricity, cleaning and quality-control services | After subdivision, allocate remaining shared burdens by a documented physical driver such as equipment time, metered throughput or net processed mass; disclose the driver and test material alternatives. |  |
| `allocation_recovered_material` | material sent for external recovery | Report the outgoing waste or recoverable material at the site boundary without avoided-burden credit unless the study goal applies a separately disclosed consequential method. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_formulation_records` | `formulation` | ingredients, utilities and off-specification material | batch recipe, weigh ticket, issue log, meter and disposition record | batch_id; formulation_version; ingredient_id; supplier_lot; as_supplied_mass; purity_or_concentration; water_mass; electricity; rework_mass; offspec_mass; disposition | Reconcile signed recipe issues, calibrated scales, batch meters and release or waste records | kg; MJ | every batch | all batches in the reporting period | all in-scope formulation lines | Sum by atomic flow and divide by net released product mass; retain product-family separation | calibration records; recipe approval; supplier certificate; batch reconciliation; disposition record |
| `cp_emulsion_records` | `sensitizing_emulsion_preparation` | emulsion precursors, utilities and output | batch recipe, weigh ticket, process meter and release record | batch_id; emulsion_recipe; silver_nitrate_mass; gelatin_mass; potassium_bromide_mass; water_mass; electricity; released_emulsion_mass | Reconcile issued precursors and metered utilities with released emulsion | kg; MJ | every applicable batch | all onsite sensitizing-emulsion batches in the reporting period | all in-scope emulsion lines | Sum each atomic flow and divide by released sensitizing-emulsion mass | calibration records; recipe approval; supplier certificates; batch release record |
| `cp_packaging_records` | `finishing_packaging` | packaging, line electricity and released product | packaging bill of materials, inventory issue, fill counter, net-fill check and meter | product_code; package_configuration; bottle_mass; box_mass; accepted_unit_count; rejected_unit_count; verified_net_fill_mass; electricity | Reconcile purchased packaging issues, accepted fills, rejected fills, net-fill checks and line meters | kg; MJ; item | every filling batch | all released batches in the reporting period | all in-scope filling lines | Calculate consumed packaging and electricity per net released product mass | bill of materials; scale calibration; fill-control chart; inventory reconciliation; meter record |
| `cp_cleaning_records` | `equipment_cleaning` | cleaning water and wastewater | cleaning log, inlet meter, transfer meter and waste manifest | campaign_id; product_family; fresh_water_mass; recycled_water_mass; retained_product_returned; wastewater_volume; destination; pH; relevant_constituents | Reconcile cleaning events, water meters, storage-tank transfer and waste shipment | kg; m3 | every cleaning event | all cleaning events attributable to reporting-period batches | all in-scope formulation and filling equipment | Allocate by causal campaign; subtract only verified closed-loop reuse and same-batch retained product | meter calibration; signed cleaning log; wastewater analysis; transfer or manifest record |
| `cp_air_emissions` | `formulation` | PM0.2-PM2.5 direct emission | stack test, continuous or periodic measurement, material balance and control-device record | source_id; operating_hours; measured_pm25; exhaust_flow; control_efficiency; bypass_hours; dry_material_throughput | Use applicable measured emissions or a documented calculation from measured activity and control performance | kg | each test and reporting interval | all dry handling, blending or milling operation in the reporting period | all in-scope controlled and uncontrolled sources | Sum releases to the declared compartment and divide by net released product mass | test report; instrument calibration; control inspection; bypass log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | `pk_reference_product` | Net released mass = accepted sale units × verified mean net fill mass; exclude packaging and rejected or unreleased material. | accepted_unit_count; verified_net_fill_mass | kg net released product |  |
| `calc_input_normalization` | product inputs | Normalized input = total as-supplied input mass attributable to released batches ÷ net released product mass. | atomic input mass; allocation record; net released product mass | kg/kg reference product |  |
| `calc_electricity_normalization` | electricity rows | Convert metered kWh to MJ by multiplying by 3.6, allocate causally, and divide by the applicable released output mass. | metered kWh; allocation driver; output mass | MJ/kg output |  |
| `calc_packaging_normalization` | packaging rows | Packaging mass = net inventory issued minus verified unused returns and separately recorded packaging waste; divide by net released product mass. | issued packaging mass; unused return; packaging waste; net released mass | kg/kg reference product |  |
| `calc_wastewater_normalization` | `cl_photochemical_wastewater` | Net wastewater = measured treatment-transfer volume minus verified volume returned to the same closed loop; divide by net released product mass. | transfer volume; closed-loop return volume; net released product mass | m3/kg reference product |  |
| `calc_pm_normalization` | `fm_pm25_air` | Sum measured or documented control-adjusted PM0.2-PM2.5 mass released during attributable operating periods and divide by net released product mass. | measured emission mass or activity factor; control performance; operating period; net released product mass | kg/kg reference product | us-epa-chemical-preparations-neshap-2009 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and all covered product outputs | Retain product family, formulation version, physical state, concentration status, batch and release specification; do not reuse the developer UUID for another product family. | approved formulation; label; certificate of analysis; release record |
| `dq_atomic_ingredients` | formulation and emulsion inputs | Reconcile every ingredient line as one chemical or physical product; no ingredient-family subtotal may replace atomic records. | recipe; supplier identity; issue log; mass reconciliation |
| `dq_measurement` | mass, energy and volume records | Use calibrated instruments or auditable invoices and document conversion factors, allocation drivers and data gaps. | calibration certificate; meter log; invoice; calculation workbook |
| `dq_temporal_coverage` | foreground reporting period | Include all conforming, rejected, reworked and cleaning events associated with the reporting period and disclose shutdowns or atypical campaigns. | production schedule; batch register; waste log; cleaning log |
| `dq_completeness` | environmental releases and waste | Screen each declared ingredient and process condition for relevant direct release and waste pathways; quantify present pathways and document verified absence. | SDS; permit; monitoring record; waste characterization; process review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | completed foreground data package | Confirm that the reference output is one kg net saleable product, packaging is separate, and all required qualifiers are declared. | un-cpc-3-0-structure-2025 |
| `validate_atomic_rows` | process inventory | Confirm that every selected flow is one atomic exchange and that each conditional ingredient appears only when supported by the declared recipe. | us-epa-photographic-processing-1981 |
| `validate_mass_reconciliation` | each production batch | Reconcile as-supplied ingredient inputs with released product, retained inventory, verified rework, off-specification material, samples and measured losses; explain unresolved imbalance. |  |
| `validate_emulsion_route` | sensitizing-emulsion products | When onsite emulsion preparation applies, confirm precursor identity, released emulsion mass and process records; otherwise document a purchased upstream sensitizing-emulsion dataset. | us-epa-photographic-processing-1981 |
| `validate_air_pathway` | dry charging, blending or milling | Evaluate fine-particle releases and control-device performance whenever dry operations occur; do not report zero solely because the route is intermittent. | us-epa-chemical-preparations-neshap-2009 |
| `validate_wastewater` | equipment cleaning | Reconcile fresh and recycled cleaning water with transferred wastewater and retained product, and disclose treatment destination and relevant constituents. |  |
| `validate_boundary` | dataset scope | Confirm that customer photographic processing, post-use silver recovery and downstream end of life are excluded unless added as separately reported downstream modules. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Cradle-to-gate foreground production package for a declared photographic chemical preparation |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` after methodology and data review |
| allowed_use | Attributional product and process LCAs using a matching product family, formulation, state, concentration, geography, technology and packaging boundary |
| excluded_use | Automatic substitution among developer, fixer, bleach, stop-bath, toner, wetting-agent or sensitizing-emulsion families; customer photographic processing; post-use silver recovery; unqualified regional or technological extrapolation |
| required_metadata | canonical PCR id; product family; formulation version; physical state; concentrate or ready-use status; active ingredients and concentrations; batch and reporting period; facility geography; process route; packaging configuration; allocation; upstream dataset choices |
| required_quality_disclosure | foreground coverage; data age; instrument and calculation evidence; ingredient and product mass reconciliation; rejected and reworked material; water and electricity coverage; direct-release screening; wastewater destination; UUID and range evidence gaps |
| update_trigger | Formulation or supplier-grade change; product-family or market-state change; packaging redesign; process or control-technology change; geography change; material allocation change; reporting-period refresh; resolution of a missing exact UUID or independent range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Exact CPC 48342 classification identity and explicit exclusions |
| `us-epa-photographic-processing-1981` | official_guidance | U.S. EPA, Guidance Document for the Control of Water Pollution in the Photographic Processing Industry, EPA-440/1-81/082-9, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=00000VZ7.TXT | Photographic developer, stop-bath, fixer, bleach and sensitizing-emulsion chemistry used to define product-specific conditional inputs |
| `us-epa-chemical-preparations-neshap-2009` | official_guidance | U.S. EPA, Chemical Preparations Industry: National Emission Standards for Hazardous Air Pollutants for Area Sources, https://www.epa.gov/stationary-sources-air-pollution/chemical-preparations-industry-national-emission-standards | Mixing, milling, blending and extruding operation scope and conditional particulate-emission review |
| `ilford-rapid-fixer-sds-2024` | official_guidance | HARMAN Technology Ltd, Rapid Fixer USA/CAN Safety Data Sheet, issued 18 July 2024, https://www.ilfordphoto.com/wp/wp-content/uploads/2024/10/US-EN-Rapid-Fixer.pdf | Photographic-fixer solution identity, liquid physical state and ammonium-thiosulfate composition |
