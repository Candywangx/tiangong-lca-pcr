---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.watch-or-clock-movements
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Watch or clock movements

## 1. Scope and Applicability

This PCR applies to the cradle-to-factory-gate production of watch or clock movements: devices that produce and maintain a recurring phenomenon and count time, and complete movement sets containing the parts necessary to assemble such a device. It covers mechanical, electromechanical, and electronic or quartz movements, whether supplied assembled, partly assembled, or as a declared complete set.

The product boundary excludes complete watches and clocks; cases, dials, hands, glasses, crowns, straps, bands, and other external parts sold separately; individual movement parts sold separately; batteries sold separately from a movement; time switches and time-recording apparatus; repair services; distribution; installation in a finished watch or clock; use; and end of life. When a battery, dial, or hands are supplied with the movement, their inclusion is declared and their foreground input is recorded. The declared product state and component completeness determine which conditional processes and rows apply.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.watch-or-clock-movements |
| classification_refs | CPC 3.0: 48440 — Watch or clock movements |
| covered_products | Complete assembled watch movements; complete assembled clock movements; electromechanical and electronic/quartz movements; complete movement sets supplied unassembled or partly assembled |
| excluded_products | Complete watches and clocks; cases, dials, hands, glasses, crowns, straps, bands, and other separately marketed parts; separately marketed batteries; time switches and time-recording apparatus; incomplete or rough component sets that cannot count time without missing functional parts |
| representative_product | A conforming complete movement at the factory gate, represented on a mass basis |
| production_route | Purchased or in-house component fabrication; conditional precision cleaning or finishing; mechanical, electromechanical, or electronic/quartz assembly; adjustment and functional testing; dispatch packaging |
| market_state | Factory-gate movement or declared complete movement set; assembly state, watch-versus-clock dimensional class, regulating system, display provision, battery inclusion, calibre, and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A marketable watch or clock movement capable of maintaining and counting time, or a declared complete movement set capable of becoming that device by assembly |
| How much | 1 kg net mass of conforming movement product, excluding returnable transport packaging |
| How well | Meets the producer's declared calibre, dimensional class, regulating system, display interface, accuracy or functional test, assembly state, and component-completeness specification |
| How long or cycle | One factory-gate production lot; the use-phase service duration is outside this cradle-to-gate reference |
| reference_flow_link | `reference_movement` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Watch or clock movement |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | movement class (watch or clock); regulating system (mechanical, electromechanical, electronic/quartz, or other declared); calibre and principal dimensions; assembly state and completeness; display interface or display included; battery included or excluded; accuracy and test specification; net product mass; factory geography; technology and reporting period; primary and transport packaging inclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | reference product and all mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net movement mass after final acceptance and before adding returnable transport packaging. Normalize all process exchanges to 1 kg of conforming reference output. |
| `mu_item_to_mass` | item-count records for movements, batteries, and packages | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert item counts using measured lot-average mass for the exact calibre, battery specification, or package; retain count, sample size, measured mass, and conversion factor. Do not use a generic count-to-mass factor. |
| `mu_electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the metered electricity quantity and conversion provenance. When source records are in kWh, convert to MJ using 1 kWh = 3.6 MJ without changing the supplier mix, voltage, geography, or loss boundary. |
| `mu_water_mass` | process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer measured mass. If volume is metered, record temperature or the declared density factor and convert volume to mass; do not assume density silently. |

## 5. System Boundary

The foreground boundary begins with purchased metals, finished movement components, electronic components, lubricants, cleaning media, electricity, water, batteries supplied with the movement, and packaging at the manufacturing site gate. It includes in-house component fabrication when performed, precision cleaning or finishing when performed, movement assembly, adjustment and functional testing, reject handling up to the first waste-treatment handoff, and dispatch packaging. Upstream production is represented by supplier-specific or geographically and technologically representative datasets. Capital equipment, employee travel, retail, installation into complete watches or clocks, use, repair, and end of life are outside the default foreground boundary unless the study goal explicitly includes them.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_product_boundary` | product identity | Include only the time-counting movement or complete movement set; exclude finished watches or clocks, cases, separately marketed external parts, and time-recording apparatus. Declare watch-versus-clock class and assembly state. | `usitc-hts-chapter-91-2013`; `un-cpc-3-0-structure-2025` |
| `sb_route_boundary` | foreground manufacturing | Include the actual in-house component, cleaning, assembly, testing, and packaging operations; mark a conditional operation not applicable only with site records showing it was not performed for the reported product. | `eta-movement-production-sites`; `us-epa-snap-precision-cleaning`; `eta-quartz-overview-2017` |
| `sb_upstream_boundary` | purchased inputs | Link every purchased atomic input to a supplier-specific or representative upstream dataset that matches material grade or component specification, geography, technology, and delivered state. | `eu-pef-recommendation-2021-2279` |
| `sb_no_silent_cutoff` | inventory completeness | Record every measured material, energy, water, waste, and direct elementary exchange within the declared foreground processes. Any exclusion requires a quantitative materiality check and disclosure; absence of a UUID is not a cut-off reason. | `eu-pef-recommendation-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased raw metals and components at the factory gate, with supplier, material or component specification, delivered mass, geography, and upstream dataset identity declared |
| starting_condition_role | upstream product inputs to the movement-manufacturing foreground system |
| product_classification_scope | Watch or clock movements and complete movement sets; individual parts and finished watches or clocks are outside the canonical product boundary |
| recursive_input_rule | If a purchased complete movement or complete movement set in this same product category crosses the boundary, record it once as a supplied product input with its upstream dataset and do not recursively decompose it; disclose the mass share and role in the final output. |
| upstream_dataset_requirement | Use supplier-specific datasets when available; otherwise use geographically, technologically, compositionally, and temporally representative datasets for every purchased input. |
| disclosure | Declare component make-or-buy share; movement class; regulating system; calibre; assembly and completeness state; battery, display, dial, and hands inclusion; in-house cleaning or finishing; test specification; reject treatment; packaging; geography; technology; and reporting period. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | Movement component fabrication | conditional | Include when plates, bridges, gears, shafts, springs, or comparable movement parts are fabricated at the reporting site. | foreground component production | kg accepted fabricated components |
| `precision_cleaning` | Precision cleaning of movement components | conditional | Include when aqueous or solvent cleaning crosses the reporting boundary before assembly or finishing. | foreground component cleaning | kg cleaned components |
| `movement_assembly` | Movement or complete-set assembly | conditional | Include for assembled or partly assembled products; for an unassembled complete set, record component completeness and omit only operations not performed. | foreground product assembly | kg assembled movement or complete set |
| `adjustment_testing` | Adjustment, inspection, and functional testing | required | Applies to each marketable movement or complete movement set using the declared acceptance specification. | foreground quality assurance | kg conforming accepted movements or sets |
| `dispatch_packaging` | Dispatch packaging | required | Applies to the product state leaving the factory gate; individual packaging inputs are conditional on actual use. | foreground dispatch preparation | 1 kg reference movement output |

### Process: Movement component fabrication (`component_fabrication`)

#### Inputs

##### Product flows

###### Stainless-steel feedstock (`component_stainless_steel`)

Record stainless steel only when it is physically consumed in in-house movement component fabrication; declare alloy grade and delivered form.

- Selected flow: Stainless steel `84c2403f-5062-5d68-8276-838384d32b89`
- Flow property / unit: Mass / kg
- Amount rule: measured net receipts issued to movement component fabrication, adjusted for stock change and returned offcuts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_fabrication_records`

###### Brass feedstock (`component_brass`)

Record brass consumed for plates, wheels, bridges, or other in-house components; declare alloy grade and delivered form.

- Selected flow: Brass `e422cfbf-5444-43ab-a68a-22be82e2ad47`
- Flow property / unit: Mass / kg
- Amount rule: measured net receipts issued to movement component fabrication, adjusted for stock change and returned offcuts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_fabrication_records`

###### Fabrication electricity (`component_electricity`)

Record electricity delivered to machining, stamping, forming, deburring, polishing, and directly attributable local support equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or allocated meter total for the component-fabrication work centre
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_fabrication_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fabricated movement components (`component_output_parts`)

Record accepted plates, bridges, gears, and shafts transferred to cleaning or assembly.

- Selected flow: Manufactured precision movement components (plates, bridges, gears, and shafts) `b22494b2-5115-4392-9850-51e046ce6d91`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted component mass transferred from fabrication
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_fabrication_records`

##### Waste flows

###### Machining scrap (`component_metal_scrap`)

Record segregated shavings, turnings, and offcuts leaving component fabrication; disclose alloy segregation and destination.

- Selected flow: Metal scrap, shavings and turnings `2a5ca712-1e70-48bf-b665-e6d49a55f3cb`
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass at handoff, reconciled with input, accepted output, stock change, and other documented losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_fabrication_records`

##### Elementary flows

### Process: Precision cleaning of movement components (`precision_cleaning`)

#### Inputs

##### Product flows

###### Components entering cleaning (`cleaning_input_components`)

Record fabricated or purchased movement components entering the declared cleaning operation.

- Selected flow: Manufactured precision movement components (plates, bridges, gears, and shafts) `b22494b2-5115-4392-9850-51e046ce6d91`
- Flow property / unit: Mass / kg
- Amount rule: measured component mass entering precision cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_precision_cleaning_records`

###### Cleaning process water (`cleaning_process_water`)

Record process water delivered to aqueous cleaning or rinsing; declare source, quality, and any recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered make-up water less separately metered water returned without entering the cleaning system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_precision_cleaning_records`

###### Isopropanol cleaning solvent (`cleaning_isopropanol`)

Record isopropanol make-up entering precision cleaning; declare purity and recovered-solvent fraction.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: purchases plus opening stock minus closing stock, off-site returns, and recovered solvent transferred out
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_precision_cleaning_records`

###### Cleaning electricity (`cleaning_electricity`)

Record electricity for aqueous cleaning, ultrasonic equipment, solvent systems, drying, and directly attributable extraction.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or allocated cleaning work-centre meter total
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_precision_cleaning_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cleaned movement components (`cleaning_output_components`)

Record the foreground intermediate transferred from cleaning to assembly with its cleanliness specification.

- Selected flow: Cleaned precision movement components
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass of accepted components leaving cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_precision_cleaning_records`

##### Waste flows

###### Metal-bearing cleaning wastewater (`cleaning_wastewater`)

Record the aqueous waste leaving cleaning before on-site or off-site treatment; declare measured metals, oil, and solvent indicators used for treatment routing.

- Selected flow: Metal-bearing process wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered discharge volume or verified cleaning-system water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_precision_cleaning_records`

###### Spent isopropanol cleaning solvent (`cleaning_spent_isopropanol`)

Record spent isopropanol transferred to solvent recovery or waste treatment separately from aqueous wastewater.

- Selected flow: Spent isopropanol cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: measured container mass at waste handoff, net of tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_precision_cleaning_records`

##### Elementary flows

### Process: Movement or complete-set assembly (`movement_assembly`)

#### Inputs

##### Product flows

###### Cleaned components entering assembly (`assembly_input_cleaned_components`)

Record cleaned plates, bridges, gears, shafts, springs, escapement parts, and other components as one defined foreground component-set intermediate, not as a substitute for separately purchased components.

- Selected flow: Cleaned precision movement components
- Flow property / unit: Mass / kg
- Amount rule: measured dry component-set mass issued to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_movement_assembly_records`

###### Quartz crystal resonator (`assembly_quartz_resonator`)

Record the fabricated resonator only for electronic or quartz movement routes; raw quartz is not an acceptable substitute.

- Selected flow: Quartz crystal resonator
- Flow property / unit: Mass / kg
- Amount rule: measured received mass issued to conforming electronic or quartz movement lots, adjusted for stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming electronic or quartz reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_movement_assembly_records`
- Sources: `eta-quartz-overview-2017`

###### Movement-control integrated circuit (`assembly_integrated_circuit`)

Record the integrated circuit only for electronic or quartz routes that use it; declare package and control function.

- Selected flow: Integrated circuit for quartz movement control
- Flow property / unit: Mass / kg
- Amount rule: measured received mass issued to conforming electronic or quartz movement lots, adjusted for stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming electronic or quartz reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_movement_assembly_records`
- Sources: `eta-quartz-overview-2017`

###### Precision movement lubricant (`assembly_lubricant`)

Record the specific synthetic oil or grease applied to movement contact points; identify formulation and supplier.

- Selected flow: Synthetic watch or clock movement lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: measured dispenser issue plus opening stock minus closing stock and recovered unused lubricant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_movement_assembly_records`

###### Button-cell battery supplied with movement (`assembly_button_cell`)

Record one specified button-cell chemistry only when the battery is included with the movement; otherwise mark this atomic row not applicable and disclose the exclusion.

- Selected flow: Button-cell battery for quartz movement
- Flow property / unit: Mass / kg
- Amount rule: item count multiplied by measured lot-average mass for the declared battery chemistry and size
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming battery-included reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_movement_assembly_records`
- Sources: `eta-quartz-overview-2017`; `usitc-hts-chapter-91-2013`

###### Assembly electricity (`assembly_electricity`)

Record electricity for assembly workstations, controlled environments, joining, lubrication dispensing, and directly attributable local support equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or allocated assembly work-centre meter total
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_movement_assembly_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled movement awaiting testing (`assembly_output_movement`)

Record the assembled or partly assembled movement transferred to adjustment and testing as a foreground intermediate.

- Selected flow: Assembled watch or clock movement awaiting testing
- Flow property / unit: Mass / kg
- Amount rule: measured assembled movement mass transferred to testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_movement_assembly_records`

##### Waste flows

##### Elementary flows

### Process: Adjustment, inspection, and functional testing (`adjustment_testing`)

#### Inputs

##### Product flows

###### Assembled movement entering testing (`testing_input_movement`)

Record assembled movements entering adjustment, rate or functional testing, and final inspection.

- Selected flow: Assembled watch or clock movement awaiting testing
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering the acceptance process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_adjustment_testing_records`

###### Testing electricity (`testing_electricity`)

Record electricity for adjustment benches, timing equipment, electronic test stands, environmental control directly attributable to testing, and inspection equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or allocated testing work-centre meter total
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_adjustment_testing_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted movement awaiting dispatch packaging (`testing_accepted_movement`)

Record only movements or complete sets that pass the declared acceptance specification.

- Selected flow: Conforming watch or clock movement awaiting dispatch packaging
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of accepted movements transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_adjustment_testing_records`

##### Waste flows

###### Rejected movement (`testing_rejected_movement`)

Record movements rejected from the product stream when they leave for recycling or treatment; reworked units remain in the process balance and are not double-counted as waste.

- Selected flow: Rejected watch or clock movement
- Flow property / unit: Mass / kg
- Amount rule: measured net rejected mass at final disposition after subtracting successfully reworked units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_adjustment_testing_records`

##### Elementary flows

### Process: Dispatch packaging (`dispatch_packaging`)

#### Inputs

##### Product flows

###### Accepted movement entering packaging (`packaging_input_movement`)

Record the accepted movement or complete set entering dispatch preparation.

- Selected flow: Conforming watch or clock movement awaiting dispatch packaging
- Flow property / unit: Mass / kg
- Amount rule: measured net movement mass entering packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_packaging_records`

###### Corrugated dispatch box (`packaging_corrugated_box`)

Record corrugated board boxes supplied with the reference product; declare recycled content, reuse, and whether the box is primary or transport packaging.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: package count multiplied by measured empty-box mass, less documented reusable transport boxes returned within the declared boundary
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch_packaging_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference movement output (`reference_movement`)

Record the conforming factory-gate movement or complete movement set. Packaging mass is not included in the 1 kg net reference amount and is reported separately.

- Selected flow: Watch or clock movement
- Flow property / unit: Mass / kg
- Amount rule: fixed normalization identity of 1 kg net conforming movement output, derived from measured accepted lot mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg net conforming reference movement output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_first` | shared fabrication, cleaning, assembly, testing, and site services | Avoid allocation by separately metering or otherwise subdividing product-specific work centres and lots. If subdivision is not feasible, document why before selecting another relationship. | `eu-pef-recommendation-2021-2279` |
| `al_physical_relation` | shared processes producing several movement families | Allocate remaining shared exchanges using a causal physical relationship such as machine time, cleaning load, tested unit time, or net processed mass that matches the exchange driver; document the factor and source records. | `eu-pef-recommendation-2021-2279` |
| `al_other_relation` | shared processes lacking a defensible physical relation | Economic or another relationship may be used only after subdivision, system expansion, and physical allocation are shown infeasible; disclose prices, period, currency, factor, and sensitivity. | `eu-pef-recommendation-2021-2279` |
| `al_scrap_treatment` | machining scrap and rejected movements | Keep scrap and rejected movements as waste outputs through the first treatment handoff. Do not add an avoided-primary-material credit inside the foreground inventory unless the downstream study explicitly applies and discloses a consistent recycling allocation method. | `eu-pef-recommendation-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_fabrication_records` | `component_fabrication` | Each listed material, electricity, accepted-component, and scrap exchange | purchase and issue records; stock counts; scales; electricity meters; waste transfer records | calibre; material grade; opening and closing stock; receipts; returns; accepted output mass; scrap mass; meter reading; meter allocation driver; timestamps | reconcile each atomic material and output by lot and reporting period; retain meter and scale identifiers | kg; MJ | each lot with monthly reconciliation | representative continuous 12-month period or declared campaign | all in-scope component-fabrication work centres | sum net atomic inputs and outputs, allocate shared meters by documented causal driver, then normalize to accepted reference output | calibrated scale and meter records; stock reconciliation; waste transfer receipts; material balance |
| `cp_precision_cleaning_records` | `precision_cleaning` | Each listed component, water, isopropanol, electricity, wastewater, and spent-solvent exchange | batch tickets; chemical issues; tank inventories; water and electricity meters; discharge meters; waste manifests | cleaning route; component mass; water; isopropanol purchases, recovery, stock and transfer; electricity; wastewater volume; spent-solvent gross and tare mass; chemistry indicators | reconcile each cleaning campaign, segregating aqueous and solvent routes and recovery loops | kg; m3; MJ | each cleaning campaign with monthly reconciliation | representative continuous 12-month period or declared campaign | all in-scope cleaning equipment and local extraction | sum by atomic exchange and route, subtract documented recovery transfers, and normalize to accepted reference output | calibrated meter records; chemical inventory reconciliation; discharge analysis; waste manifests |
| `cp_movement_assembly_records` | `movement_assembly` | Each listed component, electronic part, lubricant, battery, electricity, and assembled-intermediate exchange | bills of material; goods issues; stock counts; dispenser logs; assembly counters; scales; electricity meters | calibre; route; component identifier; quantity; measured unit mass; lubricant issue and stock; battery chemistry and size; electricity; assembled output mass; timestamps | reconcile component and consumable issues to each movement lot; convert counts only with measured lot-average masses | kg; MJ | each assembly lot with monthly reconciliation | representative continuous 12-month period or declared campaign | all in-scope assembly lines and clean areas | sum by atomic exchange and route, subtract returned unused input, and normalize to accepted reference output | controlled bill of material; calibrated scales; inventory reconciliation; meter records; lot traceability |
| `cp_adjustment_testing_records` | `adjustment_testing` | Assembled input, electricity, accepted output, and rejected movement | test-system logs; inspection records; rework logs; scales; electricity meters; waste disposition records | calibre; input count and mass; test specification; pass, fail, and rework status; accepted mass; final rejected mass; electricity; timestamps | link each serial or lot result to the declared acceptance specification and final disposition | kg; MJ | each test lot with monthly reconciliation | representative continuous 12-month period or declared campaign | all in-scope adjustment and test stations | accepted output plus final rejects must reconcile with input, stock change, and documented rework losses; normalize to accepted output | test-equipment calibration; signed acceptance records; rework trace; scale and meter calibration |
| `cp_dispatch_packaging_records` | `dispatch_packaging` | Accepted movement, corrugated box, and reference output | packing lists; package issue records; package tare measurements; accepted movement scale records | calibre; assembly state; accepted net mass; package type; count; empty mass; reuse or return status; final shipped net mass; timestamps | weigh representative empty packages and reconcile issued packages to shipped movements | kg | each dispatch lot with monthly reconciliation | representative continuous 12-month period or declared campaign | all in-scope dispatch packing areas | report packaging separately; normalize atomic packaging mass to 1 kg net conforming movement output | packing list reconciliation; calibrated scales; package specification; return records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_input` | stainless steel, brass, isopropanol, electronic parts, lubricant, and batteries | net consumed mass = opening stock + receipts - closing stock - documented returns - recovered unused material transferred out | stock, receipt, return, recovery, and measured unit-mass records | kg atomic input per 1 kg reference output | `mass-balance-identity` |
| `calc_energy_normalization` | electricity rows | normalized electricity = metered process electricity × declared allocation share ÷ net conforming reference output mass; convert kWh to MJ with 3.6 MJ/kWh when needed | meter readings, allocation driver, output mass, energy unit | MJ per 1 kg reference output | `mass-balance-identity` |
| `calc_process_mass_balance` | each foreground process | input mass + opening work in progress = product output + waste output + closing work in progress + quantified direct mass releases; investigate unexplained remainder | atomic input, output, waste, stock, and direct-release records | process mass-balance residual and completeness flag | `mass-balance-identity` |
| `calc_reject_mass` | rejected movements | final rejected mass = failed-test mass - mass of units successfully reworked and returned to accepted output | test disposition, rework, and scale records | kg rejected movement per 1 kg reference output | `mass-balance-identity` |
| `calc_reference_output` | reference movement | normalized amount = measured net conforming movement mass ÷ the same measured net conforming movement mass | accepted lot mass | 1 kg reference movement | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and purchased components | Maintain calibre, movement class, regulating system, assembly state, component completeness, battery inclusion, material or component specification, supplier, and lot traceability. | product specification; bill of material; supplier declaration; lot record |
| `dq_measurement` | all quantitative rows | Use calibrated meters or scales, record units and conversions, retain raw readings, and document any shared-meter allocation driver. | calibration certificates; meter exports; scale tickets; calculation workbook |
| `dq_temporal` | foreground reporting period | Use a representative continuous 12-month period where available; otherwise disclose campaign dates, seasonality, shutdowns, abnormal production, and representativeness limits. | production calendar; monthly reconciliations; campaign log |
| `dq_completeness` | each foreground process | Reconcile atomic inputs, outputs, wastes, stock change, rework loops, and direct releases. Investigate and disclose material residuals and missing meters. | process mass balance; exception log; waste manifests |
| `dq_upstream` | upstream datasets | Document supplier specificity or the reason for selecting a proxy, including geography, technology, temporal period, composition, and delivered state. | supplier dataset; dataset metadata; representativeness assessment |
| `dq_route` | conditional processes and rows | Mark a process or row not applicable only with evidence that the route, material, battery, cleaning medium, or packaging component was absent from the reported product. | bill of material; route sheet; purchase and issue records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference_identity` | reference flow | Confirm that the reference output is a movement or complete movement set, not a complete watch or clock, case, individual part, time switch, or time-recording apparatus; verify every required qualifier. | `usitc-hts-chapter-91-2013`; `un-cpc-3-0-structure-2025` |
| `vr_reference_amount` | reference amount | Confirm that the normalized output equals 1 kg net conforming movement mass and that packaging mass is reported separately. | `mass-balance-identity` |
| `vr_process_coverage` | process map | Confirm that every performed in-house process is included, every omitted conditional process has route evidence, and each required process has a detailed inventory section. | `eta-movement-production-sites`; `us-epa-snap-precision-cleaning` |
| `vr_inventory_atomicity` | process inventory | Confirm each row is one atomic physical, chemical, energy, waste, or elementary exchange; reject umbrella utility, material, packaging, waste, or emission labels. | `eu-pef-recommendation-2021-2279` |
| `vr_uuid_semantics` | UUID-bearing rows | Confirm state-100 flow name, Chinese name, flow type, classification, property, unit group, product state, geography, technology, and generalComment remain compatible with the declared exchange. |  |
| `vr_mass_balance` | foreground processes | Confirm input, output, waste, stock, rework, and direct-release reconciliation; disclose unresolved residuals and do not use missing UUIDs as cut-offs. | `mass-balance-identity` |
| `vr_allocation` | shared and multifunctional processes | Confirm subdivision was attempted first and any physical or other allocation factor has a documented driver, period, and sensitivity. | `eu-pef-recommendation-2021-2279` |
| `vr_source_and_range` | quantitative constraints | Confirm no external empirical range is used unless at least two independent, original-text-verified, boundary-compatible sources support the synthesis; otherwise retain foreground collection and the unresolved evidence need. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; may be used as `background_dataset` after review of representativeness and completeness |
| downstream_use | Foreground data package for movement manufacture and downstream process or lifecyclemodel projections of watches, clocks, timekeeping equipment, and products incorporating movements |
| allowed_use | Use for the declared movement class, regulating system, calibre family, assembly state, battery inclusion, manufacturing route, geography, technology, and reporting period when required qualifiers and upstream links are present |
| excluded_use | Complete watches or clocks; cases or other separately marketed parts; time switches and time-recording apparatus; repair; use-phase electricity or battery replacement; end of life; or materially different movement routes without adaptation |
| required_metadata | PCR id and version; product name and CPC context; movement class; regulating system; calibre and dimensions; assembly and completeness state; display interface; battery inclusion; net product mass; make-or-buy share; process applicability; factory geography; technology; reporting period; allocation; cut-offs; upstream datasets; packaging |
| required_quality_disclosure | UUID resolution status; source and foreground evidence; measurement and conversion methods; meter allocation; temporal coverage; mass-balance residuals; rework and reject handling; allocation sensitivity; upstream representativeness; unresolved range evidence |
| update_trigger | Change in calibre family, movement class, regulating system, assembly state, component make-or-buy share, battery inclusion, cleaning chemistry, production technology, site geography, allocation method, packaging system, upstream dataset, or a material flow exceeding the documented review threshold |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official CPC 48440 classification identity |
| `usitc-hts-chapter-91-2013` | official_guidance | United States International Trade Commission, Harmonized Tariff Schedule of the United States (2013), Chapter 91, https://www.usitc.gov/publications/docs/tata/hts/bychapter/1300c91.pdf (retrieved 2026-09-07) | Watch-versus-clock movement dimensions, complete-set boundary, incomplete-movement distinctions, and exclusion of cases and external parts |
| `eta-movement-production-sites` | official_guidance | ETA SA Manufacture Horlogère Suisse, The Motorist of Time, https://www.eta.ch/en/enterprise (retrieved 2026-09-07) | Evidence that movement production includes watch parts, blank movements, quartz and mechanical routes, and assembly |
| `us-epa-snap-precision-cleaning` | official_guidance | United States Environmental Protection Agency, Questions and Answers About SNAP — precision, electronics, and metals cleaning, https://www.epa.gov/snap/questions-and-answers-about-snap (retrieved 2026-09-07) | Conditional precision-cleaning process, cleaning-media distinctions, and contamination records |
| `eta-quartz-overview-2017` | handbook | ETA SA, Quartz 2017 Overview, https://www.eta.ch/sites/default/files/downloads-items/overview_vert_rv_TAB_EN.pdf (retrieved 2026-09-07) | Quartz crystal, integrated circuit, and battery components of quartz movements |
| `eu-pef-recommendation-2021-2279` | official_guidance | European Commission, Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-09-07) | System boundary, company-specific data, inventory completeness, multifunctionality hierarchy, and recycling treatment |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to measured foreground inputs, outputs, stock change, rework, waste, and direct releases | Normalization, process reconciliation, reject calculation, and reference-flow identity |
