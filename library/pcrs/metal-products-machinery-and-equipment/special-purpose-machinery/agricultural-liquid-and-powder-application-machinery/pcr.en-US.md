---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-liquid-and-powder-application-machinery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Agricultural liquid and powder application machinery manufacturing

## 1. Scope and Applicability

Manufacture of complete ground-based agricultural/horticultural liquid sprayers and pneumatic powder dusters: operator-carried, tractor-mounted and trailed configurations. Define each model as liquid-only, powder-only or documented convertible equipment. Included pump, vessel, nozzle/manifold, boom or blower, metering, drive, guards and supplied controls belong to its complete accepted supply.

Exclude granular fertilizer/manure spreaders covered by the neighbouring material PCR, slurry transport tankers and soil injectors, irrigation-only systems, thermal foggers, aircraft and self-propelled carrier vehicles, tractors, separately sold parts, pesticides/fertilizers, farm application, crop yield, maintenance and end-of-life. No application service reference is defined. This narrower manufacturing boundary does not imply agronomic equivalence between machines.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-liquid-and-powder-application-machinery |
| classification_refs | CPC 3.0 44150; narrower ground-based manufacturing scope, no mapping acceptance |
| covered_products | Complete carried/mounted/trailed liquid sprayers and pneumatic powder dusters; declared configuration separately. |
| excluded_products | Granular spreaders, slurry injectors, irrigation-only systems, thermal foggers, aircraft/carrier vehicles, standalone parts and field services. |
| representative_product | One accepted empty tractor-mounted or trailed liquid sprayer with specified tank, pump and nozzle configuration; powder datasets retain their actual feeder/air path. |
| production_route | Received stock and parts → conditional site metal fabrication, joining, coating and vessel molding → configured assembly/filling → factory tests and rework → dispatch. |
| market_state | New complete accepted appliance; application tank/hopper empty, fluid state documented, shipping packaging excluded from net product mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacturing delivery of a complete appliance for its declared liquid spraying or dry-powder dispersion function; farm application is outside this dataset. |
| How much | 1 kg of accepted net complete machine of one specified configuration; a normalized share of a whole machine, not an independently usable 1 kg component. |
| How well | Matches the released drawing/BOM and actual acceptance specification: tank/hopper, pump or air-path, nozzle/meter configuration, leak/pressure/control tests and supply boundary. Record functional test evidence, not assumed field yield. |
| How long or cycle | One manufacturing and acceptance cycle; service life and hectares treated are unspecified and cannot be inferred. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Mechanical appliances for projecting, dispersing or spraying liquids or powders for agriculture or horticulture `add1cc52-3d10-40c4-864c-97e4a4c428e7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/revision; serial/batch; carried/mounted/trailed; liquid/powder/convertible; tank/hopper material, capacity and empty state; pump, pressure and nozzle or feeder/blower configuration; boom width if installed; drive, engine and hydraulic/electrical options; PTO and guards; included detachable parts; actual acceptance criteria; net mass M; retained oil/fuel state; factory/period; make-or-buy; molding/finishing routes; starting condition; upstream coverage; packaging exclusion |

The broad reference identity is narrowed by these configuration qualifiers; it does not authorize pooling distinct machines. Declare every qualifier in the dataset metadata or reference-flow comment. Missing qualifiers make the reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| electricity_units | fabrication_power; welding_power; coating_power; assembly_power; test_power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve electricity energy basis: convert recorded kWh to MJ using 3.6 MJ/kWh before normalization. This identity has an energy property; it is not a mass or fuel-heating-value measurement. |
| volume_units | hydraulic_fluid; curing_gas; test_petrol | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Use measured volume with temperature and, for gas, pressure and standard-state convention; liters convert using 0.001 m3/L. A mass record needs actual density at the declared conditions; no generic density is allowed. |
| count_units | tyre | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Retain installed count by specified part type; also collect net part mass for BOM reconciliation. Count is not kg; no generic per-part mass conversion is prescribed. |

Measure M after acceptance with the same retained fluid/fuel state as the BOM: include installed fluid, exclude shipping packaging and towed implements and external payload. Detachable parts belonging to the accepted supply are weighed with the machine or added from traceable weights. Keep actual measured configuration masses; do not average across unrelated variants.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased stock and finished components received at the manufacturing site; their production is not automatically foreground-covered. |
| starting_condition_role | Declared material/assembly starting point for a manufacturing module. |
| product_classification_scope | Semantic complete ground-based liquid sprayers and pneumatic powder dusters; CPC 3.0 44150 is classification context only. |
| recursive_input_rule | An incoming partly assembled machine or spray-system assembly is an explicit purchased input with its included parts and upstream boundary. Trace only to that declared supply, and never recursively add the same assembly or included raw material twice. |
| upstream_dataset_requirement | Link compatible supplier/material datasets and delivery transport separately when an expanded study requires upstream impacts; disclose actual geography, technology, grade and boundary. Missing providers remain coverage gaps. |
| disclosure | Report factory/period, make-or-buy split, outsourced finishing, tested configuration, transport coverage, packaging, waste treatment and omitted flows. A manufacturing module alone is not a complete cradle-to-gate result. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacturing | foreground | Include all actual receipt-to-acceptance activities, attributable utilities, losses, rework and on-site handling. Include each conditional operation only if performed; purchased finished parts carry supplier boundaries instead of duplicated fabrication. | hardi-factory |
| boundary_configuration | complete_machine | Cover every installed vessel, pump/air path, nozzle, dosing gate, boom, drive and control in the declared empty accepted supply. HARDI and STIHL documents illustrate different configurations, not compulsory common parts. | hardi-lbtb; stihl-sr450 |
| boundary_exclusions | downstream | Exclude field chemicals, water and crop emissions; do not attribute reduced pesticide use, yield or drift benefits to manufacturing. Record only actual factory test exchanges. |  |
| boundary_emissions | elementary_outputs | Record actual species and receiving medium after controls. Wastewater exported to treatment is a waste exchange; treated direct discharges need measured substance rows with the correct receiving-water subcompartment. No emissions are presumed solely from a process label. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| molding | Tank and hopper molding | conditional | Only polymer tank/hopper molding performed at this site; purchased finished vessels replace this operation. | foreground_production | per 1 kg reference flow |
| fabrication | Cutting, forming and machining | conditional | Only operations performed within the declared foreground boundary; otherwise record the purchased finished part. | foreground_production | per 1 kg reference flow |
| welding | Sprayer chassis and boom welding | conditional | Only when sprayer chassis or boom weldments are produced on site; other joining methods require distinct wire/gas cards. | foreground_production | per 1 kg reference flow |
| coating | Surface preparation and coating | conditional | Only coating performed on site; distinguish powder, liquid and heating routes. | foreground_production | per 1 kg reference flow |
| assembly | Configured machine assembly and filling | required | All products; retain configuration-specific purchased part coverage. | foreground_production | per 1 kg reference flow |
| acceptance | Factory acceptance and rework | required | All products; actual test methods determine conditional exchanges. | foreground_production | per 1 kg reference flow |
| packing | Dispatch protection and packaging | conditional | Only protective packaging actually applied before the factory gate. | foreground_production | per 1 kg reference flow |

Reconcile supplied tank/hopper, cap/strainer, pump, hose, valve/manifold, nozzle inserts, boom, fan/air path, feeder, PTO/engine/motor, support straps or wheels, guards and controls to the configured BOM. Purchased filled components must not duplicate fills; bought-in tanks replace on-site resin/molding. Add each missing actual part, chemical and waste separately. Factory testing uses the actual approved medium; pesticide or powder surrogates, when used, require specific composition-based rows and disposal evidence rather than assumed crop inputs.

These are subactivities of one manufacturing module. Trace internal fabricated parts through work orders without recording the same internal transfer as another external purchased input. The cards define concrete starting exchanges; supplement missing BOM parts, each actual chemical, fuel, packaging component, waste and emission as its own atomic row. Conditional absence needs route evidence; an unresolved identity or unmeasured amount is not zero.

### Process: Tank and hopper molding (`molding`)

Only polymer tank/hopper molding performed at this site; purchased finished vessels replace this operation.

#### Inputs

##### Product flows

###### Rotational-molding-grade polyethylene powder (`pe_resin`)

Only polyethylene raw material actually molded into the declared tank/hopper on site; preserve grade, virgin origin, powder form, additives and mass issued net of returns. Generic PE identity needs actual supplier-grade qualification; additives purchased separately need atomic rows.

- Selected flow: Rotational-molding-grade polyethylene powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_molding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_molding`

###### Alternating current (`molding_power`)

Meter electrically heated tank molding, cooling and trimming only when performed at the site; gas-fired heat requires a distinct metered fuel row and burner emissions.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_molding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_molding`

#### Outputs

##### Waste flows

###### Discarded polyethylene molding trim (`pe_trim`)

Only PE trim leaving for treatment/recycling; record polymer grade, additives and weighed net mass; internal clean regrind is an internal loop.

- Selected flow: Discarded polyethylene molding trim
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_molding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_molding`

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

Only a specified rectangular carbon-steel section actually used in fabricated sprayer chassis or boom structure; record grade, geometry and issues net of returns.

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

Meter cutting, press-brake forming, frame/pump-mount drilling and machining electricity, including attributable extraction and compressed-air equipment. This identity applies only to grid-average supply delivered below 1 kV; specify the actual country and supplier dataset.

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

### Process: Sprayer chassis and boom welding (`welding`)

Only when sprayer chassis or boom weldments are produced on site; other joining methods require distinct wire/gas cards.

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

Conditional on powder coating; record the single supplied formulation, resin and color batch, mass consumed net of recovered powder returned to stock. No universal cure schedule or film thickness is imposed. Liquid paint, blasting or chemical pretreatment actually used require separate formulation-specific inputs and waste records before claiming coverage.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
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

###### Finished steel agricultural sprayer chassis (`purchased_frame`)

Only bought-in chassis; record included welded frame and finishing. On-site steel fabrication is alternative, not duplicated.

- Selected flow: Finished steel agricultural sprayer chassis
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished polyethylene agricultural spray tank (`spray_tank`)

Only a bought-in molded liquid tank; record polymer grade, capacity, wall construction and included cap/strainer. Resin is not a finished tank.

- Selected flow: Finished polyethylene agricultural spray tank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished agricultural sprayer diaphragm pump (`liquid_pump`)

Only the specified purchased complete diaphragm pump, with pressure/flow acceptance basis and included drive declared; piston pumps need a separate row.

- Selected flow: Finished agricultural sprayer diaphragm pump
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished ceramic agricultural spray nozzle insert (`spray_nozzle`)

Only one specified ceramic insert type per exchange; record installed count and net mass, mounting-body boundary and selected pattern. Polymer nozzles need their own row.

- Selected flow: Finished ceramic agricultural spray nozzle insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished agricultural sprayer liquid strainer (`liquid_filter`)

Record mesh, housing material, cartridge boundary and actual mass; omit if already included in the supplied pump or tank.

- Selected flow: Finished agricultural sprayer liquid strainer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished reinforced rubber pesticide-spray hose (`spray_hose`)

Record one specified hose grade, inner diameter, length, pressure and net mass; hydraulic hose is a different circuit and identity.

- Selected flow: Finished reinforced rubber pesticide-spray hose
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished liquid-sprayer pressure-regulating valve (`pressure_valve`)

Record material, controlled pressure range from actual specification and included gauge/manifold boundary; never assume a universal pressure.

- Selected flow: Finished liquid-sprayer pressure-regulating valve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished polyethylene powder-duster hopper (`powder_hopper`)

Only a dry-powder configuration; record closure, dosing-outlet and anti-static provisions specified by the model; empty at net-mass acceptance.

- Selected flow: Finished polyethylene powder-duster hopper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished powder-duster metering gate (`powder_meter`)

Only one actual dry-powder metering gate assembly, with included actuator and mass; auger metering needs a distinct row.

- Selected flow: Finished powder-duster metering gate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished agricultural mistblower fan assembly (`blower`)

Record actual axial or centrifugal architecture, housing and drive inclusion, net mass and air-path assembly; one configuration per dataset.

- Selected flow: Finished agricultural mistblower fan assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished insulated copper sprayer wiring harness (`wiring_harness`)

Only installed electric controls; declare connector/conductor boundary and actual mass; contained copper is not a separate incoming material here.

- Selected flow: Finished insulated copper sprayer wiring harness
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished agricultural sprayer electronic control unit (`controller`)

Record specified valve-section control and sensor inclusion; avoid duplicating integrated included parts.

- Selected flow: Finished agricultural sprayer electronic control unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished agricultural sprayer PTO shaft with guard (`pto_shaft`)

Only a tractor-driven configuration; record shaft size, joints, guard inclusion and mass. The tractor remains outside this product supply.

- Selected flow: Finished agricultural sprayer PTO shaft with guard
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished electric agricultural sprayer pump motor (`electric_motor`)

Only an installed separate electric pump drive; record rated voltage/output, controller inclusion and net mass.

- Selected flow: Finished electric agricultural sprayer pump motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished spark-ignition backpack mistblower engine (`petrol_engine`)

Only the actual supplied engine module of a carried unit; record stroke architecture, included fan, exhaust system and mass.

- Selected flow: Finished spark-ignition backpack mistblower engine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Tire (`tyre`)

Only installed pneumatic rubber tyre of a declared trailer size; collect Item(s) plus net part mass for BOM reconciliation, with rim inclusion explicitly declared.

- Selected flow: Tire `11c2e97a-624f-41de-957d-543cddb777ef`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
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

Record factory liquid/powder mechanism checks, hydraulic leak tests and control checks supplied by below-1-kV grid electricity; identify test duration and any rework.

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

###### Tap water (`test_water`)

Fresh mains water for tank/line pressure, leak, nozzle-flow and rinse tests; record actual net withdrawal separately from reuse, recovered water and wastewater. No farm spray mixture is included.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Petrol (`test_petrol`)

Only the measured volume of unleaded gasoline burned in the configured factory test engine; record m3 (or liters converted), temperature and actual composition. A kg issue requires measured density. Two-stroke oil and unburned retained fuel are separate records.

- Selected flow: Petrol `1611d42e-3a3f-46ff-b994-466fa33ca65d`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Formulated two-stroke engine mixing oil (`two_stroke_oil`)

Only where factory tests actually require this supplied formulation; weigh separately from gasoline and use documented model fuel-mix instructions, not a universal mix ratio.

- Selected flow: Formulated two-stroke engine mixing oil
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

###### Mechanical appliances for projecting, dispersing or spraying liquids or powders for agriculture or horticulture (`finished_machine`)

1 kg of the accepted complete machine, represented through measured net machine mass M and the same configuration record; shipping packaging and separately sold implements are excluded from product mass.

- Selected flow: Mechanical appliances for projecting, dispersing or spraying liquids or powders for agriculture or horticulture `add1cc52-3d10-40c4-864c-97e4a4c428e7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

##### Waste flows

###### Collected aqueous sprayer factory-test effluent (`test_wastewater`)

Only the aqueous stream transferred to treatment; record measured liquid mass, contaminants and destination. A clean-water recirculation is internal, not a fresh input or discharged pollutant.

- Selected flow: Collected aqueous sprayer factory-test effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

##### Elementary flows

###### carbon dioxide (fossil) (`test_co2`)

Only documented fossil CO2 to outdoor air, subcompartment unspecified, from actual factory engine testing; use measured emissions or verified site fuel-carbon balance. Biogenic carbon is a distinct flow.

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
| allocation_direct | manufacturing | Use directly metered or work-order-issued exchanges first. Under cp_allocation, partition remaining shared utility by measured causal driver: machining/welding machine operating time with measured power; molding heater time/load with measured batch demand; coating loaded area with measured batch consumption; assembly/test station time with measured station demand. Document driver coverage and reconcile total allocated plus excluded demand to the original meter. |  |
| allocation_variants | product_mix | Do not allocate all production by machine count when variants have different energy demand or configurations. A fallback mass or economic basis needs documented foreground justification, sensitivity and review; it is not a default imposed by this PCR. |  |
| allocation_scrap | steel_offcuts | Keep virgin/material inputs and separately measured scrap outputs without an automatic avoided-steel credit. Report scrap price and destination when relevant; any co-product classification or recycling credit requires a separately declared reviewed model to prevent double credit. Recovered powder recirculated internally is not a saleable co-product. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_machine | measurement | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted configuration and sampled serial with traceable coverage | same manufacturing period as activity records | accepted complete supply at one declared site | accepted net mass per machine | scale calibration; empty tank/hopper; retained fluid state; detachable-part weights; acceptance sign-off |
| cp_molding | molding | each atomic row in this process | measurement | polymer grade; resin issues/returns; heater MJ; trim/regrind; tank configuration | Weigh resin and external trim separately; meter molding, cooling and trimming and reconcile internal regrind. Retain actual resin/additive recipe and make-or-buy records. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_fabrication | fabrication | each atomic row in this process | measurement | part/grade; frame section issues; stock issues/returns; chips/offcuts; cutting-fluid mass; kWh; work orders | Weigh each stock/consumable and outgoing steel fraction separately; meter each operation; reconcile input stock, internal parts, retained material and waste. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_welding | welding | each atomic row in this process | measurement | wire grade; spool issue/return; cylinder gas mass; kWh; filter dust; outdoor particulate analysis; operating time | Use welding work-order records, calibrated meters, gas-cylinder weights and actual emission sampling after controls. Preserve unknown particle size; retain filter waste records separately. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_coating | coating | each atomic row in this process | measurement | formulation; concentration; fresh powder; reclaim return; topcoat base; hardener; mixing ratio; rinse water mass; MJ; gas m3 and conditions; liquid-waste mass; fossil carbon analysis | Record separate chemical batches and consumption, fresh water, oven electricity/fuel, waste removal and actual monitored emissions. Reclaim loops are internal; reconcile coating retained on parts, losses and stock. | kg; m3; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_assembly | assembly | each atomic row in this process | measurement | BOM part number; supplier boundary; installed count; each part net mass; installed fluid volume/density; returned parts; kWh; configuration | Use configuration-controlled BOM and issued/returned purchased part records. Weigh each relevant component type; preserve Item(s) for tyres and m3 for hydraulic fluid; retain electrical and hydraulic acceptance requirements. | kg; m3; Item(s); MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_acceptance | acceptance | each atomic row in this process | measurement | serial/configuration; drawing revision; test method/duration; pass/fail; rework; MJ; diesel kg; gasoline m3/temperature/density; test-water mass; reuse; effluent mass/analysis; powder surrogate composition; fuel fossil carbon; separately measured NO2 kg; M | Retain signed acceptance records for tank and line leaks, pump pressure/flow, individual nozzle delivery, boom folding, powder-meter opening/closing, blower/air-path function, PTO guards and installed controls as applicable; meter bench energy and fuel, record actual exhaust species and rework. Separate field demonstration from factory acceptance. | kg; m3; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_packing | packing | each atomic row in this process | measurement | polyethylene film mass; corrugated board grade/fiber/recycled content; issues/returns; serial shipment | Weigh each actually used packaging component separately, reconcile returns and dispatched configuration, and exclude packaging mass from M. Additional wood/steel protectors need their own individual rows. | kg | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_allocation | manufacturing | shared_demand | measurement | total utility; measured power/load; operating time; coated area; accepted configuration counts; excluded demand | Submeter where possible; measure load and causal drivers for shared machines/ovens/stations and document why the driver represents each shared exchange. | MJ; h; m2 | each shared batch and monthly reconciliation | same production interval | all consuming products and excluded operations at this site | partition total by measured causal demand; then aggregate attributable amount / accepted machines | submeter agreement; total closure; driver uncertainty; sensitivity; approval record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | carbon_plate; hollow_section; cutting_fluid; fabrication_power; steel_offcuts; selfshielded_wire; welding_power; welding_pm_air; powder_paint; wash_water; coating_power; curing_gas; powder_waste; pretreatment_wastewater; curing_co2; hydraulic_hose; hydraulic_fluid; assembly_power; test_power; test_diesel; test_co2; test_no2; pe_film; corrugated_board; dilution_water; spent_cutting_fluid; purchased_frame; spray_tank; liquid_pump; spray_nozzle; liquid_filter; spray_hose; pressure_valve; powder_hopper; powder_meter; blower; wiring_harness; controller; pto_shaft; electric_motor; petrol_engine; tyre; test_water; test_wastewater; pe_resin; molding_power; pe_trim; test_petrol; two_stroke_oil | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

Before applying normalize_mass, retain one declared configuration and matched period. Derive each q_item from its protocol: net stock/part issues minus valid returns, attributable meter use or measured waste/emission divided by accepted machine count for that same configuration. Include rejects and rework in manufacturing burdens carried by accepted output; never divide by all starts. Mass-weight datasets with different measured M values only after keeping configuration-specific records. Unit conversion and allocation are performed on raw records and retained as separate calculation evidence; no universal consumption range, density or emissions factor is supplied.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all_flows | Match actual part/material grade, supplied state, concentration, geography, reference property and units. A UUID is identity only, not amount evidence or a provider dataset. Resolve blanks before treating an exchange as fully linked. | supplier sheet; flow/property/unit records; identity review |
| quality_completeness | complete_machine | Reconcile all configured BOM components, fluids and detachable items to M; inventory actual utilities, chemicals, each waste and emission. Measure missing parts rather than infer them as the residual of M. Report coverage and any unlinked provider. | BOM revision; weigh sheets; material balances; missing-data register |
| quality_period | production_records | Use one declared factory and complete representative period; record model changes, seasonality, idle demand, outsourcing and rework; quantify primary coverage and uncertainty. Historic product cases cannot substitute for current production records. | work orders; acceptance ledger; meter calibration; source limits |
| quality_test | acceptance | Use actual released acceptance criteria for tank/line leak tightness, pump/nozzle flow, pressure regulation, powder metering, air path, hydraulics and controls as installed; no arbitrary field performance or durability threshold. | signed test plan and serial/configuration-linked test results |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Require 1 kg reference output, measured M from cp_mass, complete configuration, declared empty tank/hopper and supply, packaging exclusion and identical retained fluid state. Missing acceptance/mass evidence prevents a complete dataset claim. |  |
| validation_normalization | inventory | Every applicable non-reference row uses normalize_mass and a declared protocol; check q_item and M share configuration/period, correct division direction and preserved energy/volume/item numerator units. |  |
| validation_route | processes | Match make-or-buy, welding method and coating route to work orders. No double counting of steel and finished fabricated parts, purchased assemblies and their included parts, internal reclaim or engine count and mass. | hardi-factory |
| validation_species | elementary_flows | Check fossil/biogenic carbon, NO2 versus NO/NOx/N2O, particle size, outdoor air subcompartment and control boundary. Unknown species or media remain gaps; wastewater treatment transfer is not a freshwater emission. |  |
| validation_coverage | dataset | Disclose measured, calculated, estimated, excluded, not-applicable and missing quantities distinctly; reconcile accepted outputs, scrap, stock and allocation closure. A method check or valid projection does not approve scientific methodology or establish cradle-to-gate completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | A documented manufacturing module for the exact configured machine and period; upstream-connected assessment only after supplier/transport/treatment coverage is established. |
| excluded_use | Farm liquid/powder application services, crop yield comparison, lifespan-normalized claims, generic equivalence between application configurations, and unsupported complete cradle-to-gate claims. |
| required_metadata | PCR id; model/configuration/BOM and serial scope; measured M and fluid state; acceptance standard; site/period; make-or-buy and process route; reference basis; providers and transport; packaging; allocation; data sources; version. |
| required_quality_disclosure | Measured coverage, missing identities/providers and quantities, route exclusions, source age/limits, conversion conditions, allocation evidence, emissions monitoring gaps, uncertainty and independent review status. |
| update_trigger | BOM or configuration change; revised acceptance test; changed supplier/process/coating or energy supply; new representative production period; resolved identity or evidence gap. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| hardi-factory | handbook | HARDI Australia, Global Made Local, manufacturer web page, Adelaide manufacturing paragraphs. https://hardi.com/en-au/our-company/global-made-local | Example of welding, powder spraying/baking, fit-out and testing; undated snapshot, no annual factory total, labour hour or product-normalized consumption adopted. |
| hardi-lbtb | handbook | HARDI LB/TB instruction manual 674087-GB-96/2 (historical edition), Description, PDF/printed p.5. https://www.hardiinternational.com/application/files/9515/3424/6237/674087_LB_TB_GB.pdf | Historical model-specific tank, pump, pressure-control, filter, ceramic nozzle, PTO and blower component boundaries. Actual current BOM and acceptance protocol govern datasets; no specification numbers imposed. |
| stihl-sr450 | handbook | STIHL USA, SR 450 Gasoline Backpack Sprayer, manufacturer product page, Product Details and multi-function sprayer/duster description. https://www.stihlusa.com/en/p/mistblowers-sprayers-sr-450-gasoline-backpack-sprayer-1027378 | Model-specific misting/dusting conversion and supplied backpack configuration; granular operation, delivery rates, operating fuel ratios and farm performance are not transferred to this manufacturing reference. |
