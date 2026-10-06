---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-seeding-and-transplanting-machinery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Agricultural seeding and transplanting machinery manufacturing

## 1. Scope and Applicability

This PCR addresses manufacture of complete agricultural seed drills, precision planters and seedling transplanters, including mounted, trailed, walk-behind and self-propelled configurations. Integrated furrow opening, seed placement, closing, seedling placement and installed fertilizer attachments belong to the declared complete machine; record their presence without attributing crop yield or fertilizer savings to manufacturing. The product may be shipped partly folded or with an identified detachable component, but its complete accepted configuration must be covered.

Exclude stand-alone tillage equipment, tractors sold separately, general-purpose fertilizer spreaders, spare parts sold separately, seed and seedling production, field planting services, farm fuel and maintenance, crop cultivation, harvested output and end-of-life. No service reference is defined. A mass-normalized manufacturing result does not establish equal agronomic performance between different machines. The historical Great Plains manufacturing example and Kubota model-development case support route and configuration distinctions, not universal quantities or technology mandates. (`greatplains-corporate-1602e`; `kubota-transplanter-2020`)

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-seeding-and-transplanting-machinery |
| classification_refs | CPC 3.0 44113 |
| covered_products | Complete agricultural seed drills; precision planters; seedling transplanters, each declared configuration separately. |
| excluded_products | Separate tractors, spare parts, stand-alone tillage and fertilizer machines, farm planting services and crop output. |
| representative_product | One specified complete multi-row seed planter with declared metering and drive; transplanter datasets substitute their actual seedling-placement configuration. |
| production_route | Purchased stock and finished parts → site fabrication/welding/coating where performed → configuration assembly and filling → factory acceptance/rework → dispatch protection where applied. |
| market_state | New complete factory-accepted machine, net of shipping packaging; seed and fertilizer hoppers empty. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacturing delivery of a complete machine intended to place seed or seedlings at its declared design quality; agricultural work is outside this dataset. |
| How much | 1 kg of accepted net complete machine of one specified configuration; a normalized share of a whole machine, not an independently usable 1 kg component. |
| How well | Matches the released drawing/BOM and actual acceptance specification: row count/spacing, working width, metering or transplanting mechanism, drive and supply boundary. Record functional test evidence, not assumed field yield. |
| How long or cycle | One manufacturing and acceptance cycle; service life and hectares treated are unspecified and cannot be inferred. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Seeders, planters and transplanters `08676b65-9304-437b-bb11-7b65f5fbcc40` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model and revision; serial/batch; product function; complete BOM; row count and spacing; working width; metering/transplanting mechanism; drive and hitch; hopper and attachment configuration; propulsion/engine if installed; acceptance criteria; net mass M; retained fluid/fuel state; detachable components; factory/period; coating route; starting condition; upstream coverage; packaging exclusion |

The broad reference identity is narrowed by these configuration qualifiers; it does not authorize pooling distinct machines. Declare every qualifier in the dataset metadata or reference-flow comment. Missing qualifiers make the reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| electricity_units | fabrication_power; welding_power; coating_power; assembly_power; test_power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve electricity energy basis: convert recorded kWh to MJ using 3.6 MJ/kWh before normalization. This identity has an energy property; it is not a mass or fuel-heating-value measurement. |
| volume_units | hydraulic_fluid; curing_gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Use measured volume with temperature and, for gas, pressure and standard-state convention; liters convert using 0.001 m3/L. A mass record needs actual density at the declared conditions; no generic density is allowed. |
| count_units | tyre; diesel_engine | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Retain installed count by specified part type; also collect net part mass for BOM reconciliation. Count is not kg; no generic per-part mass conversion is prescribed. |

Measure M after acceptance with the same retained fluid/fuel state as the BOM: include installed fluid, exclude shipping packaging and crop/seed/fertilizer load. Detachable parts belonging to the accepted supply are weighed with the machine or added from traceable weights. Keep actual measured configuration masses; do not average across unrelated variants.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased stock and finished components received at the manufacturing site; their production is not automatically foreground-covered. |
| starting_condition_role | Declared material/assembly starting point for a manufacturing module. |
| product_classification_scope | Semantic complete agricultural seeders, planters and transplanters; CPC 3.0 44113 is classification context only. |
| recursive_input_rule | An incoming partly assembled machine or row-unit assembly is an explicit purchased input with its included parts and upstream boundary. Trace only to that declared supply, and never recursively add the same assembly or included raw material twice. |
| upstream_dataset_requirement | Link compatible supplier/material datasets and delivery transport separately when an expanded study requires upstream impacts; disclose actual geography, technology, grade and boundary. Missing providers remain coverage gaps. |
| disclosure | Report factory/period, make-or-buy split, outsourced finishing, tested configuration, transport coverage, packaging, waste treatment and omitted flows. A manufacturing module alone is not a complete cradle-to-gate result. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacturing | foreground | Include all actual receipt-to-acceptance activities, attributable utilities, losses, rework and on-site handling. Include each conditional operation only if performed; purchased finished parts carry supplier boundaries instead of duplicated fabrication. | greatplains-corporate-1602e |
| boundary_configuration | complete_machine | Include declared row-unit tools and controls, hopper/support frame and self-propulsion if installed. Record substituted or absent parts explicitly; the Kubota case illustrates design variation, not a common material recipe. | kubota-transplanter-2020 |
| boundary_exclusions | downstream | Exclude field planting, crop growth, external towing tractor, dealer operation, maintenance and end-of-life from this manufacturing module. Any expansion must state its separate reference, transport and lifecycle coverage. |  |
| boundary_emissions | elementary_outputs | Record actual species and receiving medium after controls. Wastewater exported to treatment is a waste exchange; treated direct discharges need measured substance rows with the correct receiving-water subcompartment. No emissions are presumed solely from a process label. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Cutting, forming and machining | conditional | Only operations performed within the declared foreground boundary; otherwise record the purchased finished part. | foreground_production | per 1 kg reference flow |
| welding | Frame and row-unit welding | conditional | Only when frame or row-unit weldments are produced on site. | foreground_production | per 1 kg reference flow |
| coating | Surface preparation and coating | conditional | Only coating performed on site; distinguish powder, liquid and heating routes. | foreground_production | per 1 kg reference flow |
| assembly | Configured machine assembly and filling | required | All products; retain configuration-specific purchased part coverage. | foreground_production | per 1 kg reference flow |
| acceptance | Factory acceptance and rework | required | All products; actual test methods determine conditional exchanges. | foreground_production | per 1 kg reference flow |
| packing | Dispatch protection and packaging | conditional | Only protective packaging actually applied before the factory gate. | foreground_production | per 1 kg reference flow |

These are subactivities of one manufacturing module. Trace internal fabricated parts through work orders without recording the same internal transfer as another external purchased input. The cards define concrete starting exchanges; supplement missing BOM parts, each actual chemical, fuel, packaging component, waste and emission as its own atomic row. Conditional absence needs route evidence; an unresolved identity or unmeasured amount is not zero.

### Process: Cutting, forming and machining (`fabrication`)

Only operations performed within the declared foreground boundary; otherwise record the purchased finished part.

#### Inputs

##### Product flows

###### Hot-rolled carbon-steel plate (`carbon_plate`)

Include only plate actually cut or formed on site; record grade, thickness and gross issued mass less returned reusable stock.

- Selected flow: Hot-rolled carbon-steel plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Rectangular carbon-steel hollow section (`hollow_section`)

Include the fabricated toolbar or frame stock only where this section geometry and carbon-steel grade are in the bill of materials.

- Selected flow: Rectangular carbon-steel hollow section
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Mineral-oil cutting-fluid concentrate (`cutting_fluid`)

Conditional on wet machining; record concentrate formulation and issued mass; separately record dilution water and do not count recirculation as a new input.

- Selected flow: Mineral-oil cutting-fluid concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Alternating current (`fabrication_power`)

Meter cutting, press-brake forming, drilling and machining electricity, including attributable extraction and compressed-air equipment. This identity applies only to grid-average supply delivered below 1 kV; specify the actual country and supplier dataset.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Tap water (`dilution_water`)

Only mains water freshly introduced for cutting-fluid dilution; record separately from concentrate and reused coolant.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`steel_offcuts`)

Weigh carbon-steel offcuts and chips leaving the plant untreated. Separate oily chips and nonferrous fractions; exclude reused stock and internal circulation.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Spent mineral-oil cutting-fluid emulsion (`spent_cutting_fluid`)

Only the spent emulsion leaving the site for treatment; weigh liquid mass and record oil concentration and destination. Metal chips and clean recyclable steel are separate.

- Selected flow: Spent mineral-oil cutting-fluid emulsion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

### Process: Frame and row-unit welding (`welding`)

Only when frame or row-unit weldments are produced on site.

#### Inputs

##### Product flows

###### Flux Cored Wire (`selfshielded_wire`)

Only self-shielded flux-cored carbon-steel welding consistent with this identity; quantify consumed wire from spool issues and returns. Gas-shielded wire is a distinct input.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding`

###### Carbon-steel solid welding wire (`solid_welding_wire`)

Include only when the approved welding procedure uses solid welding wire; retain composition and diameter. Do not substitute building electrical wire.

- Selected flow: Carbon-steel solid welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding`

###### Argon shielding gas (`argon_shield`)

Only separately purchased argon supplied to the weld cell; weigh cylinder deliveries and returns. A premixed shielding gas requires its own single composition-specific row and must not also be recorded here.

- Selected flow: Argon shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding`

###### Carbon dioxide shielding gas (`co2_shield`)

Only separately supplied industrial carbon dioxide for the documented welding procedure. This is a technosphere gas input, not an elementary emission.

- Selected flow: Carbon dioxide shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding`

###### Alternating current (`welding_power`)

Meter welding power and attributable fume extraction at below-1-kV grid supply; segregate cutting power.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding`

#### Outputs

##### Waste flows

###### Captured carbon-steel welding filter dust (`welding_filter_dust`)

Weigh removed filter dust when generated; retain composition and waste-handler destination. Captured solids are not air emissions.

- Selected flow: Captured carbon-steel welding filter dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding`

##### Elementary flows

###### Particulate matter, particle size unspecified (`welding_pm_air`)

Include only documented particulate mass emitted to outdoor air after capture where size and air subcompartment remain unspecified. State monitoring coverage, control equipment and uncertainty; absence of measurement is not zero. Do not invent a universal welding emission factor.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding`

### Process: Surface preparation and coating (`coating`)

Only coating performed on site; distinguish powder, liquid and heating routes.

#### Inputs

##### Product flows

###### Powder Coating (`powder_paint`)

Conditional on powder coating; record the single supplied formulation, resin and color batch, mass consumed net of recovered powder returned to stock. No universal cure schedule or film thickness is imposed.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Formulated polyurethane topcoat base (`liquid_paint`)

Include only the purchased formulated coating base with documented component ratio when liquid coating is actually performed; specify supplied solids and solvent content. This row does not imply that every machine is liquid-painted.

- Selected flow: Formulated polyurethane topcoat base
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Sodium hydroxide solution, 30% (`caustic_30`)

Only if incoming degreasing reagent is documented as 30% sodium hydroxide solution by mass; record delivered solution mass, not active NaOH mass. Other concentrations need a distinct identity and record.

- Selected flow: Sodium hydroxide solution, 30% `7115909b-796c-4b3d-b40a-1a7c693d12d0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Tap water (`wash_water`)

Conditional on mains-water pretreatment or rinsing. Measure make-up water by mass or convert a calibrated volume meter using documented water density and temperature; do not equate water supply with wastewater output.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Alternating current (`coating_power`)

Meter pretreatment, spraying and electrically heated curing, attributable to the actual route; below-1-kV grid supply only.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### natural gas in the gaseous state (`curing_gas`)

Only for a gas-fired curing oven; meter pipeline gas volume and document meter pressure, temperature, compressibility convention and supply conditions before matching the flow volume. Never use the record’s 1-to-1 mass/volume entries as a physical gas density.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Polyisocyanate coating hardener (`polyisocyanate_hardener`)

Only if the actual coating is supplied as separate base and hardener; weigh hardener separately and retain its composition and documented mixing ratio; no hardener amount is inferred from base mass.

- Selected flow: Polyisocyanate coating hardener
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

#### Outputs

##### Waste flows

###### Discarded polyester coating powder (`powder_waste`)

Only discarded solid overspray of the stated formulation; weigh separately from cured paint chips, wastewater sludge and internally reclaimed powder.

- Selected flow: Discarded polyester coating powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Spent aqueous alkaline-degreasing rinse water (`pretreatment_wastewater`)

Only effluent sent across the technosphere boundary to treatment; measure liquid mass and retain pH, dissolved-metal analysis and treatment destination. Direct receiving-water emissions require separate species-specific rows.

- Selected flow: Spent aqueous alkaline-degreasing rinse water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

##### Elementary flows

###### carbon dioxide (fossil) (`curing_co2`)

Only measured or site fuel-carbon-balance fossil CO2 emitted to outdoor air from the curing burner, with air subcompartment unspecified. Disclose fossil fraction, oxidation evidence and capture; do not derive CO2 from electricity use.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

### Process: Configured machine assembly and filling (`assembly`)

All products; retain configuration-specific purchased part coverage.

#### Inputs

##### Product flows

###### Finished carbon-steel seed-furrow opener disc (`opener_disc`)

Only a bought-in finished opener disc of the specified row-unit configuration; record part number and mass. Omit as a purchased input if made from already inventoried on-site steel.

- Selected flow: Finished carbon-steel seed-furrow opener disc
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished seed-metering unit (`seed_meter`)

Only the bought-in metering unit, one specified mechanical or pneumatic design per dataset; record drive, crop compatibility and part number. Seed and fertilizer are not manufacturing components.

- Selected flow: Finished seed-metering unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished HDPE seed hopper (`seed_hopper`)

Only if HDPE hopper is part of the accepted configuration; record actual grade, net part mass and supplied assembly boundary. Resin granules cannot stand for an already molded hopper.

- Selected flow: Finished HDPE seed hopper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished polyurethane seed-delivery tube (`seed_tube`)

Only where the specified polyurethane tube occurs; record diameter, length and net mass. Other polymers are distinct parts.

- Selected flow: Finished polyurethane seed-delivery tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel ball bearing (`ball_bearing`)

Record each installed bearing specification and mass; reconcile seals and bearing-hub assembly boundaries to avoid counting an included bearing twice.

- Selected flow: Finished steel ball bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel hexagon bolt (`steel_bolt`)

Record the installed bolt grade, coating and mass; washers and nuts, when present, are separate exchanges in the completed dataset.

- Selected flow: Finished steel hexagon bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Tire (`tyre`)

Only purchased finished pneumatic rubber tyre, one size/type per exchange. Record count, net mass per tyre, construction, load class and whether the rim is excluded; use Item(s) for this identity. Metal wheels and track assemblies require distinct rows.

- Selected flow: Tire `11c2e97a-624f-41de-957d-543cddb777ef`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Hydraulic hose (`hydraulic_hose`)

Conditional on installed hydraulic circuits; record finished hose grade, reinforcement, pressure class, length and net mass; identify fittings separately if outside the purchased hose assembly.

- Selected flow: Hydraulic hose `e2fc1719-69dc-4281-8eae-383af8d9a405`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished hydraulic cylinder (`hydraulic_cylinder`)

Only where the complete cylinder is installed for folding, lifting or row-unit control; retain bore, stroke, part number and net mass.

- Selected flow: Finished hydraulic cylinder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Hydraulic Fluid (`hydraulic_fluid`)

Only one documented formulated hydraulic fluid supplied for factory filling; record grade, base-oil origin, density and temperature, retained fill and test losses separately; use Volume / m3 for this public identity.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished insulated copper wiring harness (`wiring_harness`)

Conditional on electrical controls; specify connector set, conductor mass and harness boundary; no separate copper input when already contained in this purchased harness.

- Selected flow: Finished insulated copper wiring harness
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished planter electronic control unit (`controller`)

Conditional on electronic control; record board, casing, software configuration and installed mass; avoid counting components again if part of an integrated supplied module.

- Selected flow: Finished planter electronic control unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished electric seed-meter drive motor (`electric_drive`)

Conditional on electric metering; record rated output, voltage, control boundary and net mass. An industrial conveyor motor or China-specific generic machinery module is not an unconditional identity.

- Selected flow: Finished electric seed-meter drive motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Diesel engine (`diesel_engine`)

Only self-propelled diesel configuration; record one specified purchased engine with power, emissions configuration, count and net mass; do not include the towing tractor for a mounted or trailed implement. This identity uses Item(s).

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel seedling-transplanting claw (`transplant_claw`)

Only a bought-in transplanting claw of specified material and design; record number installed and total mass. A seeder does not require this component.

- Selected flow: Finished steel seedling-transplanting claw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel seedling-tray support rack (`seedling_rack`)

Only if an external finished rack is installed; record mounting configuration and mass; seedling trays consumed during farm operation are outside the manufacturing product.

- Selected flow: Finished steel seedling-tray support rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished hydrostatic transmission unit (`hydrostatic_drive`)

Only self-propelled machines using HST; declare included pump, motor and gearcase boundary and net mass. Do not list those included parts again.

- Selected flow: Finished hydrostatic transmission unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Alternating current (`assembly_power`)

Measure installation and factory filling electricity, including attributable pneumatic-tool compressor use; below-1-kV grid supply only.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel planter main frame (`purchased_main_frame`)

Only the purchased finished main frame/toolbar for a seeding machine; specify coating and included parts. Its fabricated stock, welding and coating are not recorded again in this site module. A transplanter chassis is a distinct BOM part.

- Selected flow: Finished steel planter main frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel planter row-unit frame (`purchased_row_frame`)

Only an externally purchased finished row-unit frame, with opener disc, bearing and metering-unit inclusion declared; do not double count included parts.

- Selected flow: Finished steel planter row-unit frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

### Process: Factory acceptance and rework (`acceptance`)

All products; actual test methods determine conditional exchanges.

#### Inputs

##### Product flows

###### Alternating current (`test_power`)

Record factory metering checks, hydraulic leak tests and control checks supplied by below-1-kV grid electricity; identify test duration and any rework.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Diesel fuel (`test_diesel`)

Only fuel actually consumed by a diesel-powered machine or test rig in factory acceptance; measure issued fuel minus returned and retained unburned fuel. Farm operating fuel is excluded.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

#### Outputs

##### Product flows

###### Seeders, planters and transplanters (`finished_machine`)

1 kg of the accepted complete machine, represented through measured net machine mass M and the same configuration record; shipping packaging and transported seed or fertilizer are excluded from product mass.

- Selected flow: Seeders, planters and transplanters `08676b65-9304-437b-bb11-7b65f5fbcc40`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

##### Elementary flows

###### carbon dioxide (fossil) (`test_co2`)

Only documented fossil CO2 to outdoor air, subcompartment unspecified, from factory diesel testing; use measured emissions or verified site fuel-carbon balance. Biogenic carbon is a distinct flow.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Nitrogen dioxide emitted to outdoor air, subcompartment unspecified (`test_no2`)

Only if nitrogen dioxide is separately determined in acceptance-test exhaust; aggregate NOx-as-NO2 results are not a measured NO2 species and require their own basis. Do not substitute NO or N2O.

- Selected flow: Nitrogen dioxide emitted to outdoor air, subcompartment unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

### Process: Dispatch protection and packaging (`packing`)

Only protective packaging actually applied before the factory gate.

#### Inputs

##### Product flows

###### Polyethylene film (`pe_film`)

Only protective polyethylene film actually applied for dispatch; weigh issued mass less return; exclude from machine mass M.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

###### Corrugated cardboard (`corrugated_board`)

Only recycled-content C, E or F corrugated board with documented fiber content at least 80%, matching this identity; weigh installed protective packaging. Other grades need a separate identity.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | manufacturing | Use directly metered or work-order-issued exchanges first. Under cp_allocation, partition remaining shared utility by measured causal driver: machining/welding machine operating time with measured power; coating loaded area with measured batch consumption; assembly/test station time with measured station demand. Document driver coverage and reconcile total allocated plus excluded demand to the original meter. |  |
| allocation_variants | product_mix | Do not allocate all production by machine count when variants have different energy demand or configurations. A fallback mass or economic basis needs documented foreground justification, sensitivity and review; it is not a default imposed by this PCR. |  |
| allocation_scrap | steel_offcuts | Keep virgin/material inputs and separately measured scrap outputs without an automatic avoided-steel credit. Report scrap price and destination when relevant; any co-product classification or recycling credit requires a separately declared reviewed model to prevent double credit. Recovered powder recirculated internally is not a saleable co-product. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_machine | measurement | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted configuration and sampled serial with traceable coverage | same manufacturing period as activity records | accepted complete supply at one declared site | accepted net mass per machine | scale calibration; empty hopper; retained fluid state; detachable-part weights; acceptance sign-off |
| cp_fabrication | fabrication | each atomic row in this process | measurement | part/grade; stock issues/returns; chips/offcuts; cutting-fluid mass; kWh; work orders | Weigh each stock/consumable and outgoing steel fraction separately; meter each operation; reconcile input stock, internal parts, retained material and waste. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_welding | welding | each atomic row in this process | measurement | wire grade; spool issue/return; cylinder gas mass; kWh; filter dust; outdoor particulate analysis; operating time | Use welding work-order records, calibrated meters, gas-cylinder weights and actual emission sampling after controls. Preserve unknown particle size; retain filter waste records separately. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_coating | coating | each atomic row in this process | measurement | formulation; concentration; fresh powder; reclaim return; topcoat base; hardener; mixing ratio; rinse water mass; MJ; gas m3 and conditions; liquid-waste mass; fossil carbon analysis | Record separate chemical batches and consumption, fresh water, oven electricity/fuel, waste removal and actual monitored emissions. Reclaim loops are internal; reconcile coating retained on parts, losses and stock. | kg; m3; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_assembly | assembly | each atomic row in this process | measurement | BOM part number; supplier boundary; installed count; each part net mass; installed fluid volume/density; returned parts; kWh; configuration | Use configuration-controlled BOM and issued/returned purchased part records. Weigh each relevant component type; preserve Item(s) for engines and tyres and m3 for hydraulic fluid; retain electrical and hydraulic acceptance requirements. | kg; m3; Item(s); MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_acceptance | acceptance | each atomic row in this process | measurement | serial/configuration; drawing revision; test method/duration; pass/fail; rework; MJ; diesel kg; fuel fossil carbon; separately measured NO2 kg; M | Retain signed acceptance records for metering/transplanting mechanism, folding/hydraulics and installed controls as applicable; meter bench energy and fuel, record actual exhaust species and rework. Separate field demonstration from factory acceptance. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_packing | packing | each atomic row in this process | measurement | polyethylene film mass; corrugated board grade/fiber/recycled content; issues/returns; serial shipment | Weigh each actually used packaging component separately, reconcile returns and dispatched configuration, and exclude packaging mass from M. Additional wood/steel protectors need their own individual rows. | kg | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_allocation | manufacturing | shared_demand | measurement | total utility; measured power/load; operating time; coated area; accepted configuration counts; excluded demand | Submeter where possible; measure load and causal drivers for shared machines/ovens/stations and document why the driver represents each shared exchange. | MJ; h; m2 | each shared batch and monthly reconciliation | same production interval | all consuming products and excluded operations at this site | partition total by measured causal demand; then aggregate attributable amount / accepted machines | submeter agreement; total closure; driver uncertainty; sensitivity; approval record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | carbon_plate; hollow_section; cutting_fluid; fabrication_power; steel_offcuts; selfshielded_wire; solid_welding_wire; argon_shield; co2_shield; welding_power; welding_filter_dust; welding_pm_air; powder_paint; liquid_paint; caustic_30; wash_water; coating_power; curing_gas; powder_waste; pretreatment_wastewater; curing_co2; opener_disc; seed_meter; seed_hopper; seed_tube; ball_bearing; steel_bolt; tyre; hydraulic_hose; hydraulic_cylinder; hydraulic_fluid; wiring_harness; controller; electric_drive; diesel_engine; transplant_claw; seedling_rack; hydrostatic_drive; assembly_power; test_power; test_diesel; test_co2; test_no2; pe_film; corrugated_board; dilution_water; spent_cutting_fluid; polyisocyanate_hardener; purchased_main_frame; purchased_row_frame | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

Before applying normalize_mass, retain one declared configuration and matched period. Derive each q_item from its protocol: net stock/part issues minus valid returns, attributable meter use or measured waste/emission divided by accepted machine count for that same configuration. Include rejects and rework in manufacturing burdens carried by accepted output; never divide by all starts. Mass-weight datasets with different measured M values only after keeping configuration-specific records. Unit conversion and allocation are performed on raw records and retained as separate calculation evidence; no universal consumption range, density or emissions factor is supplied.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all_flows | Match actual part/material grade, supplied state, concentration, geography, reference property and units. A UUID is identity only, not amount evidence or a provider dataset. Resolve blanks before treating an exchange as fully linked. | supplier sheet; flow/property/unit records; identity review |
| quality_completeness | complete_machine | Reconcile all configured BOM components, fluids and detachable items to M; inventory actual utilities, chemicals, each waste and emission. Measure missing parts rather than infer them as the residual of M. Report coverage and any unlinked provider. | BOM revision; weigh sheets; material balances; missing-data register |
| quality_period | production_records | Use one declared factory and complete representative period; record model changes, seasonality, idle demand, outsourcing and rework; quantify primary coverage and uncertainty. Historic product cases cannot substitute for current production records. | work orders; acceptance ledger; meter calibration; source limits |
| quality_test | acceptance | Use actual released acceptance criteria for seed-meter rotation/singulation or seedling-placement mechanism, drives, hydraulic circuits and electronics as installed; no arbitrary field performance or durability threshold. | signed test plan and serial/configuration-linked test results |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Require 1 kg reference output, measured M from cp_mass, complete configuration, empty crop hoppers, packaging exclusion and identical retained fluid state. Missing acceptance/mass evidence prevents a complete dataset claim. |  |
| validation_normalization | inventory | Every applicable non-reference row uses normalize_mass and a declared protocol; check q_item and M share configuration/period, correct division direction and preserved energy/volume/item numerator units. |  |
| validation_route | processes | Match make-or-buy, welding method and coating route to work orders. No double counting of steel and finished fabricated parts, purchased assemblies and their included parts, internal reclaim or tyre/engine count and mass. | greatplains-corporate-1602e |
| validation_species | elementary_flows | Check fossil/biogenic carbon, NO2 versus NO/NOx/N2O, particle size, outdoor air subcompartment and control boundary. Unknown species or media remain gaps; wastewater treatment transfer is not a freshwater emission. |  |
| validation_coverage | dataset | Disclose measured, calculated, estimated, excluded, not-applicable and missing quantities distinctly; reconcile accepted outputs, scrap, stock and allocation closure. A method check or valid projection does not approve scientific methodology or establish cradle-to-gate completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | A documented manufacturing module for the exact configured machine and period; upstream-connected assessment only after supplier/transport/treatment coverage is established. |
| excluded_use | Per-hectare planting service, crop yield comparison, lifespan-normalized claims, generic equivalence between seeders and transplanters, and unsupported complete cradle-to-gate claims. |
| required_metadata | PCR id; model/configuration/BOM and serial scope; measured M and fluid state; acceptance standard; site/period; make-or-buy and process route; reference basis; providers and transport; packaging; allocation; data sources; version. |
| required_quality_disclosure | Measured coverage, missing identities/providers and quantities, route exclusions, source age/limits, conversion conditions, allocation evidence, emissions monitoring gaps, uncertainty and independent review status. |
| update_trigger | BOM or configuration change; revised acceptance test; changed supplier/process/coating or energy supply; new representative production period; resolved identity or evidence gap. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| greatplains-corporate-1602e | handbook | Great Plains Manufacturing, corporate brochure 1602E-CORP, undated edition containing 2017 events, PDF p.11 (unnumbered Salina manufacturing page). https://cdn-assets.greatplainsmfg.com/ag_files/1602e-corp-corporate-brochure-web.pdf | Historical planter manufacturing example: fabrication, lasers/plasma, welding, CNC, coating and assembly. No facility count, yield, current route, mass or consumption requirement is adopted. |
| kubota-transplanter-2020 | literature | Kubota Technical Report No.53, January 2020, Development of Diesel Rice Transplanter NW6S/8S for Domestic Market, printed/PDF pp.21–28; p.24 §4.1.1 and Figs.3–5. https://www.kubota.com/innovation/report/no53/data/tech_report_no53_en.pdf | Model-specific frame, resin-part and drivetrain changes show why BOM/configuration and actual mass must be retained. No historical weight savings, lifetime, field performance or fertilizer savings are transferred to the manufacturing reference. |
