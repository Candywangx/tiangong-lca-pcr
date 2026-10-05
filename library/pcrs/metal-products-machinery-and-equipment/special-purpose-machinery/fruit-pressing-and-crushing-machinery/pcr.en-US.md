---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.fruit-pressing-and-crushing-machinery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fruit pressing and crushing machinery

## 1. Scope and Applicability

This candidate PCR covers factory manufacture of new complete machines that mechanically press fruit mash or crush/mill fruit for wine, cider or fruit-juice preparation. Define one finished machine and one configuration per dataset, including installed support, working chamber, pressing or crushing mechanism, supplied guards and control, and declared delivered accessories. Speidel documents a water-pressure natural-rubber diaphragm press with stainless basket; Voran documents a historical electric centrifugal fruit mill with exchangeable stainless screens. These are different design routes, not a combined mandatory component list. Exclude beverage manufacture, fruit cultivation/harvesting, juice yield, later operation water/electricity, cleaning-in-use, maintenance, lifetime and end of life. Also exclude standalone washers/elevators, pasteurisers, fermenters, bottling/packaging machinery, oilseed presses, grain mills, mining crushers, separately sold parts and remanufacture. Installed preparation subassemblies belong only where explicitly included in the single machine BOM; separately delivered equipment is separately modelled. Scientific methodology review is pending.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.fruit-pressing-and-crushing-machinery |
| classification_refs | CPC 3.0 44191; candidate narrower semantic boundary; no accepted mapping |
| covered_products | New complete configured fruit presses and fruit crushers/mills |
| excluded_products | Beverages, cultivation, standalone washing/lifting/thermal/filling equipment, non-fruit crushers and separately sold parts |
| representative_product | One declared water-pressure diaphragm press; a separately declared electric centrifugal fruit mill is an alternative configuration, not the same reference product |
| production_route | Receipt and make-or-buy control; actual metal fabrication; route-specific finishing; working mechanism/support/control fitting; acceptance; optional packaging |
| market_state | Accepted complete machine at declared factory gate, loose spares and packaging excluded from net machine mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture one declared complete fruit press or crusher; no beverage-processing service |
| How much | 1 kg of accepted net complete configured machine; multiply by measured M for one actual unit |
| How well | Meet declared model-specific dimensional, food-contact material/surface and factory functional acceptance, including pressure/leak/relief function for fitted press hardware or rotor clearance/guards/start-stop checks for the actual mill; no generic pressure, throughput or juice yield |
| How long or cycle | One manufacturing delivery; no operating lifetime or litres of juice assigned |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Presses, crushers and similar machinery used in the manufacture of wine, cider, fruit juices or similar beverages `783c1d97-c517-42eb-bfde-b8ec8a7f3cda` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; pressing or crushing function; single configuration/BOM revision; drive mechanism and supplied motor; working chamber/basket/rotor/screen; membrane compound; metal grade and food-contact surface; seals and filter bag; installed stand/guards/control; pressure/voltage specification where relevant; included accessories and loose-spare exclusions; purchased assembly completeness; fluid and drained-test-water state; actual acceptance plan; net measured M; site; period; start/end gates; packaging boundary |

Declare these qualifiers in dataset metadata or equivalent notes; missing qualifiers make the product definition incomplete. Weigh the accepted installed configuration including supplied working bag/accessories explicitly declared part of it, excluding fruit load, drained test liquid, loose spare screens, transport fixtures and packaging. Specify residual factory fill rather than assuming empty or full. Equal mass does not imply equal press/mill service. Manufacturer catalogue weights, motor power and basket volume are not M conversion factors.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `electricity_energy` | electricity_fabrication; electricity_finishing; electricity_assembly; electricity_factory_test | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain metered kWh; exact conversion 1 kWh = 3.6 MJ. Match supply below 1 kV and grid-average sourcing; do not convert electricity to mass. |
| `liquid_mass` | tap_water_finishing; tap_water_factory_test; nitric_acid; acid_wastewater; alkaline_wastewater; factory_test_water_waste | Mass | kg | Weigh each delivered liquid; a volume record needs retained measured/supplier density, temperature and explicit conversion. Record purchased solution mass at its stated concentration, not active-substance mass. |
| `groundwater_volume` | groundwater_finishing | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Meter actual freshwater well abstraction as volume in cp_water_resource. q_ref stays m3 per kg machine; no density assumption is needed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declared stock and separately specified finished components received at machine factory |
| starting_condition_role | Inputs to a foreground manufacturing module; supplier production and incoming transport separately linked |
| product_classification_scope | Configured complete fruit pressing/crushing machine within CPC44191; not a beverage production system |
| recursive_input_rule | A bought complete machine is a supplier-gated input; do not duplicate this factory module recursively. Purchased baskets and rotors replace their site fabrication route. |
| upstream_dataset_requirement | Match alloy, finished component completeness, chemistry, concentration, electricity source/voltage, transport, geography and waste treatment; disclose missing links |
| disclosure | Declare actual operations, outsourced gates, overhead allocation, packaging and supplier links. This foreground-only module does not establish complete cradle-to-gate coverage without compatible upstream, transport and treatment activities. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | manufacturing | Include receipt checks, actually performed cutting/forming/drilling/machining/welding/grinding, route-specific surface treatment, configured assembly, inspection/acceptance, attributable rework/rejects and packout. Buying a motor, moulded membrane or cast cover does not establish site motor manufacture, rubber moulding or casting. Outsourced fabrication requires explicit supplier gates. |  |
| `boundary_actual_bom` | inventory | Reconcile every actual BOM item and operation to an atomic exchange or documented exclusion. Add separate actual covers, juice channels, stand, wheels, hoses, connectors, bolts/nuts/washers, drive couplings, guards, interlocks, actuator, hydraulic pump/oil, cutting-fluid recipe, treatment reagents/residues and measured releases where present. A water-pressure diaphragm does not require an oil-hydraulic cylinder or electric drive. Initial cards are not a universal complete BOM. |  |
| `boundary_factory_test` | factory_test | Include actual factory pressure test or powered acceptance energy, water and recorded wastes. Water-pressure design establishes operating principle, not continuous factory water demand. Later fruit processing, yields and cleaning belong to use. A fruit-loaded acceptance test, if actually performed, expands fruit input and each specific output/waste at this gate with test records; it is not presumed for every machine. |  |
| `boundary_product_split` | reference_product | Keep standalone fruit presses and mills separate from beverage products and container filling/packaging equipment. Declare included installed accessories; model a separately delivered spare screen or upstream washer separately and never divide a combined line by one machine M. | `speidel-hydropress-2025`; `voran-fruit-mills-2018` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Stock cutting, forming and joining | conditional | Actual site fabrication of declared structures | Foreground stage; internal WIP remains inside factory module | per 1 kg reference flow; collected per one accepted finished machine |
| `finishing` | Food-contact preparation and external frame finishing | conditional | Actual mechanical finishing, wet cleaning, passivation or non-contact coating | Foreground stage; internal WIP remains inside factory module | per 1 kg reference flow; collected per one accepted finished machine |
| `assembly` | Configured press or mill assembly | required | Each accepted complete machine; components depend on the single declared design | Foreground stage; internal WIP remains inside factory module | per 1 kg reference flow; collected per one accepted finished machine |
| `factory_test` | Configuration-specific inspection and acceptance | required | Each completed machine; pressure or powered testing only according to actual acceptance plan | Foreground stage; internal WIP remains inside factory module | per 1 kg reference flow; collected per one accepted finished machine |
| `packout` | Dispatch protection | conditional | Factory-applied dispatch packaging | Foreground stage; internal WIP remains inside factory module | per 1 kg reference flow; collected per one accepted finished machine |

| Operation | Stage | Route and required site record |
| --- | --- | --- |
| Receipt and configuration | assembly | BOM/serial record; press/mill design; purchased assemblies; food-contact supplier declarations; accessory and fluid completeness |
| Sheet/tube preparation | fabrication | Only if site-made: grade/thickness/dimension; cut plan; net stock; tool settings; bending/drilling time; offcuts; machining coolant in separate formulation rows |
| Joining and deburring | fabrication | Actual weld procedure, filler/gas issue, electricity, surface edge checks, rework, captured dust and monitored releases |
| Surface preparation | finishing | Only actual mechanical finishing and cleaning/passivation: finish requirement, consumables, recipe, bath change, dilution, rinsing, recovered liquid and receiver gate; no generic food-contact acid recipe |
| External frame coating | finishing | Only where applied outside food-contact surfaces: dry formulation, powder recovery, cure setting and energy, exports; other heat source or wet paint expands individual rows |
| Working mechanism fitting | assembly | Press: basket, diaphragm, water fittings, relief/gauge, bag and support checks. Mill: rotor/screen clearance, motor alignment, mounts, electrical connection and guards. Retain torque and supplier inclusion; use only fitted route |
| Inspection and acceptance | factory_test | Actual dimensional/material/surface acceptance; fitted pressure hardware leak/relief checks or mill rotation/start-stop/guard checks as specified; duration, measured energy/water, failures/retest and acceptance; net M after declared drain/fill state |
| Dispatch protection | packout | Individual packaging issues and losses; net machine and accessory mass separate from packaging and loose spares |

### Process: Stock cutting, forming and joining (`fabrication`)

#### Inputs

##### Product flows

###### Cold-rolled AISI304 stainless steel sheet (`stainless_sheet`)

Only for actual site manufacture of one declared sheet grade and thickness for hopper, basket or enclosure. Weigh issued stock net of returns; do not also count finished bought structures. Other grades require separate rows.

- Selected flow: Cold-rolled AISI304 stainless steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Welded circular AISI304 stainless steel tube (`stainless_tube`)

Only for site-fabricated tubular stand or frame. Record one diameter, wall thickness, grade and net stock mass; purchased finished stand replaces this route. No catalogue stand mass is assumed.

- Selected flow: Welded circular AISI304 stainless steel tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Solid 308L stainless steel welding wire (`welding_wire`)

Only for an actual compatible 308L solid-wire welding procedure. Weigh net issue including rework and record weld settings; other filler alloys or flux-cored wire need separate exchanges.

- Selected flow: Solid 308L stainless steel welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Pure argon shielding gas (`argon`)

Only if the actual weld procedure uses pure argon. Retain cylinder mass difference and specification; an argon mixture is a different exchange. No gas consumption factor is imposed.

- Selected flow: Pure argon shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Low-voltage grid electricity (`electricity_fabrication`)

Meter this actual stage, including attributable rework. The selected identity is grid-average AC supplied to a user below 1 kV; other voltage or electricity sourcing needs a distinct matching flow. Water-driven product design does not eliminate measured factory electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Untreated AISI304 stainless steel offcuts (`stainless_scrap`)

Weigh segregated clean AISI304 offcuts and machining chips exported without processing from actual fabrication. The broader official steel-scrap identity is restricted to this alloy in the exchange. Internal reused stock is not exported scrap; oily chips require another waste.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Collected dry AISI304 stainless steel grinding dust (`grinding_dust`)

Only for measured collected dust sent to an external receiver; retain alloy and abrasive contamination. Collected solids are separate from an airborne release.

- Selected flow: Collected dry AISI304 stainless steel grinding dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Airborne particulate (`fabrication_particulate`)

Only when actual post-control monitoring establishes particulate emitted to air with unspecified particle-size fraction and unspecified air subcompartment. Retain outlet concentration, exhaust volume and sampling conditions; no mandatory welding or grinding release is assumed. A specified size fraction or subcompartment needs its matching identity.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission`
- Sources:

### Process: Food-contact preparation and external frame finishing (`finishing`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_finishing`)

Meter this actual stage, including attributable rework. The selected identity is grid-average AC supplied to a user below 1 kV; other voltage or electricity sourcing needs a distinct matching flow. Water-driven product design does not eliminate measured factory electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Finished aluminium-oxide abrasive disc (`abrasive_disc`)

Only if mechanical finishing consumes this specified disc. Record design, binder and attributable replaced disc mass; raw aluminium oxide is not a substitute for a finished abrasive.

- Selected flow: Finished aluminium-oxide abrasive disc
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Tap water (`tap_water_finishing`)

Only for actual factory wet cleaning or dilution using supplied drinking-quality tap water. Weigh kg or retain evidenced density for volume conversion; do not double count water already inside purchased acid solution.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Industrial solid sodium hydroxide, 95–98% purity (`sodium_hydroxide`)

Only if the actual factory cleaning recipe purchases this solid industrial reagent at 95–98% purity. Weigh as-delivered net issue, not active NaOH-equivalent mass; recipe water is separate. No mandatory alkaline cleaning or universal bath concentration is prescribed.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Industrial aqueous nitric acid, 40% purity (`nitric_acid`)

Only if the actual passivation recipe buys this 40% aqueous solution. Weigh as-delivered solution, document purity and dilution, and avoid counting its contained water again. Different acid concentration or citric passivation needs a different explicit row; no category-wide acid treatment is assumed.

- Selected flow: Nitric acid `bf883501-c052-414e-8e21-e6f53cc257ba`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Dry powder paint (`powder_paint`)

Only for actual coating of a declared non-food-contact frame with one specified dry powder formulation. Weigh issue net of powder returned to stock and meter curing electricity; other heat sources need separate exchanges. It is not a prescribed food-contact coating.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

##### Elementary flows

###### Abstracted freshwater groundwater (`groundwater_finishing`)

Only if the factory actually abstracts freshwater from its own well for this stage. Meter m3 at the well and retain location/country for scarcity characterization; add actual treatment and pumping separately. Do not also count supplied tap water for the same abstraction or treat wastewater as a resource.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water_resource.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_water_resource`
- Sources:

#### Outputs

##### Waste flows

###### Spent aluminium-oxide abrasive disc (`spent_abrasive_disc`)

Only for the actual spent disc exported after metal finishing. Weigh separately from metal dust and retain binder, abrasive and adherent metal composition; the broader public polishing-media identity is narrowed to this disc.

- Selected flow: Waste polishing media `cdb1838e-d3ec-41e1-87ee-627b9ce95e88`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Unrecovered solid powder-paint overspray (`powder_waste`)

Weigh actual exported unrecovered solid overspray after internal recovery and record resin formulation and receiver route. Do not invent a universal loss rate.

- Selected flow: Unrecovered solid powder-paint overspray
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Untreated aqueous sodium-hydroxide metal-cleaning wastewater (`alkaline_wastewater`)

Only for actual alkaline cleaning bath exported to external treatment; retain mass, pH, NaOH and measured contamination. Keep it separate from acid bath. If treated on-site, expand treatment chemicals, sludge and separately monitored environmental releases.

- Selected flow: Untreated aqueous sodium-hydroxide metal-cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Untreated aqueous nitric-acid stainless-passivation wastewater (`acid_wastewater`)

Only for actual acid bath exported to external treatment. Record solution mass, pH, nitric acid and dissolved-metal analysis, bath change and receiver boundary; no automatic nitrate emission to water follows from acid use.

- Selected flow: Untreated aqueous nitric-acid stainless-passivation wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

### Process: Configured press or mill assembly (`assembly`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_assembly`)

Meter this actual stage, including attributable rework. The selected identity is grid-average AC supplied to a user below 1 kV; other voltage or electricity sourcing needs a distinct matching flow. Water-driven product design does not eliminate measured factory electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Finished stainless steel fruit-press basket (`press_basket`)

Only for a separately purchased basket installed in the declared press. Record alloy, perforation, surface finish and measured mass; purchased basket replaces its site sheet fabrication. Speidel supports stainless construction, not a universal alloy grade.

- Selected flow: Finished stainless steel fruit-press basket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: speidel-hydropress-2025

###### Finished natural-rubber hydropress diaphragm (`natural_rubber_membrane`)

Only for the natural-rubber water-pressure configuration illustrated by Speidel. Weigh the finished diaphragm and record compound, dimensions and included fittings; raw natural rubber cannot represent the moulded finished membrane. Oil-driven presses need their own actuator route.

- Selected flow: Finished natural-rubber hydropress diaphragm
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: speidel-hydropress-2025

###### Finished water-pressure relief valve with manometer (`relief_valve`)

Only if purchased as one specified complete relief-valve assembly for the water-pressure press. Record pressure setting, medium compatibility, gauge completeness and mass. Speidel maximum pressure is model-specific, not a universal PCR limit.

- Selected flow: Finished water-pressure relief valve with manometer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: speidel-hydropress-2025

###### Finished polyester fruit-press filter bag (`press_filter_bag`)

Only if the actual delivered press includes a supplier-declared polyester bag, separately supplied and weighed. Speidel establishes a supplied press bag but not polyester chemistry; verify fibre, seams and mass from the actual supplier. Another fabric needs its own row.

- Selected flow: Finished polyester fruit-press filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: speidel-hydropress-2025

###### Finished AISI304 perforated fruit-mill screen (`mill_screen`)

Only for one specified separately supplied installed mill screen. Record hole geometry, alloy, finish and mass; Voran is a historical example of exchangeable stainless screens. Loose alternative spare screens are outside net installed machine M and require declared separate delivery exchanges.

- Selected flow: Finished AISI304 perforated fruit-mill screen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: voran-fruit-mills-2018

###### Finished stainless steel fruit-mill cutting rotor (`mill_rotor`)

Only for the specified separately purchased rotor in the actual mill design. Record alloy, cutter inclusion, balance record, installed mass and interfaces; bought rotor replaces on-site blank and machining for that part.

- Selected flow: Finished stainless steel fruit-mill cutting rotor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished three-phase AC fruit-mill motor (`electric_motor`)

Only for an actual electric configuration with separately purchased motor. Weigh one specified complete motor and record rated output, supply, enclosure, mounts and included control; water-driven press excludes it. No catalogue power-to-mass conversion.

- Selected flow: Finished three-phase AC fruit-mill motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished electric-motor start-stop switch assembly (`start_stop_switch`)

Only for one separately purchased complete start-stop switch fitted to the electric machine. Record enclosure, electrical rating and measured mass; interlock or overload module separately purchased needs another row. No pooled controls mass.

- Selected flow: Finished electric-motor start-stop switch assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished ball bearing (`ball_bearing`)

Weigh one specified ball-bearing design separately supplied for the configured machine. Narrow the broader official category to that design; bearings already inside bought motor/rotor assemblies are excluded from this separate exchange.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished stainless steel hexagonal-head bolt (`stainless_bolt`)

Weigh installed bolts of one declared alloy, dimension and strength class. Separately supplied nuts and washers each need an individual row; exclude fasteners already included in purchased assemblies.

- Selected flow: Finished stainless steel hexagonal-head bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished food-contact EPDM gasket (`epdm_gasket`)

Only where the actual supplier identifies EPDM chemistry and the specified food-contact compliance for a separately supplied installed gasket. Retain formulation, interface, declaration and mass; no universal EPDM or regulatory approval inferred.

- Selected flow: Finished food-contact EPDM gasket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

### Process: Configuration-specific inspection and acceptance (`factory_test`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_factory_test`)

Meter this actual stage, including attributable rework. The selected identity is grid-average AC supplied to a user below 1 kV; other voltage or electricity sourcing needs a distinct matching flow. Water-driven product design does not eliminate measured factory electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Tap water (`tap_water_factory_test`)

Only for actual water-pressure acceptance testing using supplied drinking-quality tap water. Record make-up and discharge/reuse; later cider-making water is outside this manufacturing inventory.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

#### Outputs

##### Product flows

###### Accepted complete fruit pressing or crushing machine (`finished_machine`)

Reference output of one explicitly configured press or crusher, not a mixed category or production line. Record installed stand, basket/membrane or rotor/screen, supplied controls, guards, specified bag, actual fluid state and accepted net M; loose spares and packaging are excluded. Count only the single declared machine configuration in this dataset.

- Selected flow: Presses, crushers and similar machinery used in the manufacture of wine, cider, fruit juices or similar beverages `783c1d97-c517-42eb-bfde-b8ec8a7f3cda`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

###### Collected spent hydropress water-test liquid (`factory_test_water_waste`)

Only if the actual factory water test produces collected liquid exported for external treatment. Weigh and record contamination and receiver gate. Reused water is internal; direct environmental discharge requires its actual individual measured substances and medium, not this waste identity.

- Selected flow: Collected spent hydropress water-test liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

### Process: Dispatch protection (`packout`)

#### Inputs

##### Product flows

###### C-flute corrugated cardboard (`cardboard`)

Only for C-flute corrugated dispatch protection containing recycled fibre and at least 80% fibre. Weigh net issue, document specification and exclude packaging from M. Other flute/composition needs a distinct declared row.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Low-density polyethylene protective foil (`ldpe_film`)

Only for actual non-cellular, non-adhesive, unreinforced LDPE foil. Weigh net issue and retain grade/source; no fossil origin or recycled fraction inferred from the identity. Exclude from M.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared_operations | Subdivide by actual work order, stage and single configuration before allocation. Assign material/component issues, rework and acceptance measurements directly where traceable; water-pressure presses and electric mills do not share an assumed per-unit factor. |  |
| `allocation_physical` | shared_energy_water_support | Collect physical drivers with an evidenced causal relation: measured machine-power profiles times machining/welding hours, cure-batch loads, test rig meter/time or actual cleaning-bath use. Reconcile assigned quantities to metered totals and accepted configuration counts. If no relationship is established, retain unresolved allocation and sensitivity; no generic equal-count or mass split or economic percentage. |  |
| `allocation_waste_rejects` | exports_and_rework | Include attributable rejects, failed tests and repeated finishing in quantities per accepted output for the same configuration and period. Identify exported scrap/waste and receiver route; internal returns/recovery are netted in records. No automatic avoided virgin-metal or waste-treatment credit. Any genuine co-product designation needs a documented market and boundary decision, not the presence of scrap alone. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | factory_test | finished_machine | calibrated weighing and acceptance | model; configuration; serial number; accepted net mass M; installed accessories; fluid/drain state; excluded spares/packaging | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each unit or justified configuration-specific sample | same declared production period; gaps disclosed | declared manufacturing site | accepted net mass per machine | calibration; installed BOM; drain/fill; acceptance; sampling |
| cp_configuration | all processes | actual route | BOM and routing review | single design; BOM revision; supplier completeness; alloy/compound; food-contact declaration; work orders; rework; accepted count; outsourced gates | Crosswalk each actual item and operation to a row or justified exclusion. Separate water-pressure and electric-mill designs, installed accessories and loose spares, and purchased finished assemblies from site-made parts. | record | each configuration change and batch | same declared production period; gaps disclosed | declared manufacturing site | one coherent configured route record | BOM; purchase specification; supplier declarations; gate and work records |
| cp_material | fabrication; finishing; factory_test; packout | individual stock/reagent/liquid/packaging | stock issue and weighing | individual substance/product; grade/formulation; purity; issue/return; stock/WIP change; volume/density/temperature; accepted count | Weigh net attributable issues and reconcile stocks, returns and internal recovery. Retain density/temperature for liquid volume conversion; weigh 40% nitric solution as solution and solid NaOH as delivered, with dilution water separate. Keep test water inside manufacturing and operating water outside. | kg | each issue and batch reconciliation | same declared production period; gaps disclosed | declared manufacturing site | attributable net material mass / accepted machines of the same configuration | scale; stock ledger; supplier specification; SDS; recipe; density |
| cp_parts | assembly | single finished component | receipt, weighing and build list | part number; one design; supplier; count; measured mass; included fittings/subparts; installed status; accepted count | Use actual delivered mass or lot-specific verified count-to-mass data for each single component. Document supplied basket, bag, screens, membrane or rotor completeness and prevent duplicate stock/subpart accounting. No catalogue power/volume-to-mass factor. | kg | each supply lot and assembly batch | same declared production period; gaps disclosed | declared manufacturing site | attributable installed component mass / accepted machines of the same configuration | scale; supplier inclusion; lot mass; installed BOM |
| cp_energy | fabrication; finishing; assembly; factory_test | electricity | meter and causal driver ledger | stage; voltage/source; meter kWh; interval; shared total; driver; idle/rework; accepted count | Meter each actual stage; convert kWh to MJ using 1 kWh = 3.6 MJ. Retain measured allocation-driver totals and reconcile shared meters, idle and rework. Water-driven product does not imply zero factory energy. | MJ | each meter interval and batch | same declared production period; gaps disclosed | declared manufacturing site | attributable electrical energy / accepted machines of the same configuration | meter calibration; electricity bills; stage/driver records |
| cp_waste | fabrication; finishing; factory_test | single exported waste | container or weighbridge balance | individual waste; composition; contamination; mass; recovery; receiver gate; accepted count | Weigh segregated actual exports and reconcile stocks/recovery. Distinguish acid and alkaline baths, dry collected dust, spent abrasive discs and airborne releases; retain receiver and treatment records. Volume-only records require evidenced mass conversion. | kg | each export and batch balance | same declared production period; gaps disclosed | declared manufacturing site | attributable exported waste mass / accepted machines of the same configuration | scale; receiver receipts; composition; treatment boundary |
| cp_emission | fabrication | single air substance | post-control outlet monitoring | species; concentration/unit; gas flow/volume; interval; moisture/temperature/pressure; control; particle-size fraction; medium/submedium; accepted count | Calculate one substance mass from post-control concentration and exhaust volume measured on the same interval, retaining unit conversion, moisture/temperature basis and sampling coverage. Specify actual particle fraction and medium; do not infer gaseous metal emissions, mandatory release or zero from missing data. | kg | representative actual emitting intervals | same declared production period; gaps disclosed | declared manufacturing site | attributable measured substance mass / accepted machines of the same configuration | monitoring report; calibration; sample coverage; conversion |
| cp_water_resource | finishing | groundwater abstraction | well meter and site record | well; freshwater origin; country/location; m3; interval; stage use; internal reuse; accepted count | Read calibrated well volume meter for actual factory freshwater groundwater abstraction; subdivide stage use and reconcile withdrawals without counting recirculation as new abstraction. Retain country/location and separately inventory pumping/treatment. | m3 | each meter interval and batch | same declared production period; gaps disclosed | declared manufacturing site | attributable abstracted water volume / accepted machines of the same configuration | meter; well/source evidence; country; stage water balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_configuration` | all inventory rows | Use one design/configuration and period for M, quantities and accepted count; reconcile installed BOM, factory fill/drain, stock/WIP changes, waste and returns. Do not mix membrane press and motorised mill by equal mass. | cp_mass; cp_configuration; cp_material; cp_parts; cp_waste |
| `quality_coverage` | inventory_and_links | Disclose missing identity, component, upstream/transport/treatment links, causal allocation, weighing and monitoring coverage. Quantities require actual primary records, not manufacturer brochure factors. No universal cutoff, machine mass, lifetime, purity conversion or emission factor. | cp_configuration; cp_energy; cp_emission; cp_water_resource |
| `quality_sources` | design_examples | Two manufacturers provide independent design documentation but not quantitative factory measurements. Speidel supports a model-specific natural-rubber water-pressure press; Voran 3/18 supports only historical mill configuration and AISI304 example. Do not use apparent mislabelled technical rows for power or assume current availability, generic alloy, operating demand or regulatory compliance. | speidel-hydropress-2025; voran-fruit-mills-2018 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Require positive measured M, declared single configuration, installed accessory/loose-spare and drain/fill boundary, acceptance and 1kg finished_machine. All other quantities use normalize_mass with their own Mass/Energy/Volume numerator units. |  |
| `validation_completeness` | inventory | Reconcile actual pressing or crushing mechanism, chamber, food-contact materials, support, drive/control/guards and fitted accessories. Verify make-or-buy alternatives, test scope, returns, rejects, rework and receiver gates. Missing measurements/links are incomplete coverage, not verified zero. |  |
| `validation_identity` | all inventory rows | Check public UUID substance, state/concentration, grade/route, product/waste/elementary type, actual reference property/unit group and localization. Keep water resources, tap water and waste baths distinct; verify environmental medium and particle fraction. Broader public categories are restricted to the concrete exchange, not pooled selections. |  |
| `validation_claims` | dataset_claims | No complete cradle-to-gate, identity resolution or scientific approval claim until the corresponding coverage and review are established. Manufacturing mass reference cannot establish juice yield, processing service equivalence, lifetime or food-contact legal compliance. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured foreground fruit-press or fruit-mill manufacturing module; profile heading does not assert PCR publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same configured complete-machine manufacturing inventory, scaled by measured M with declared upstream and treatment links |
| excluded_use | Beverage yield/service, cultivation, lifetime, later use/cleaning, packaged spare bundle normalised by net machine mass, or methodology approval |
| required_metadata | All required qualifiers; single model/design/BOM; actual food-contact declarations; drive/working mechanism; assembly inclusion; accessory/spare/fluid boundary; site/period/gates; measurement/allocation; supplier/receiver links |
| required_quality_disclosure | Measurement/sample uncertainty; actual route coverage; unresolved UUIDs/allocation/upstream; missing monitoring; historical design-source limits; rework/reject inclusion |
| update_trigger | Press/mill, membrane/rotor/screen, alloy, drive, motor, control, accessory, factory drain/fill or food-contact change; supplier, site, route, energy or allocation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| speidel-hydropress-2025 | handbook | Speidel, Home Cider Making, brochure filename2025EN, Hydropress technical details, PDF physical p.13, printed p.13. https://www.speidels-hausmosterei.de/files/hausmosterei/downloads/service/broschueren/Speidel_Broschuere_Hausmosterei2025EN.pdf | Model-specific natural-rubber diaphragm, stainless basket, water feed/drain and pressure hardware, included press bag and support configuration. No generic pressure, throughput, mass, service demand or factory quantities adopted. |
| voran-fruit-mills-2018 | handbook | Voran, Fruit mills RM1,5/RM2,2/RM5,5, edition3/18 (historical), Technical data and drawings, PDF physical p.5; cover p.1. https://www.voran.at/fileadmin/user_upload/voran/Maschinen/Prospekte/Prospekte_englisch/Fruit_mills_RM.pdf | Historical electric fruit-mill construction, 1.4301/AISI304 example, screens and stand/supply distinctions. No current availability, generic alloy, catalogue mass or quantitative manufacturing factor; apparent mislabelled row not used as power evidence. |
