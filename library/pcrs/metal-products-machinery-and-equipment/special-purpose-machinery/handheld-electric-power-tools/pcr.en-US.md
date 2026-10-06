---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.handheld-electric-power-tools
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Handheld electric power tool manufacturing

## 1. Scope and Applicability

Manufacture of complete general workshop/construction tools designed to be held during work and containing their own electric motor: drills/drivers, impact tools, portable saws, grinders and sanders. Declare one product function and motor/drive configuration per dataset. Corded products include their installed mains cord; cordless products use a declared bare-tool-body supply without detachable battery and charger. Integral non-removable battery tools are outside this bounded body-only rule.

Exclude pneumatic/hydraulic/non-electric tools, stationary machine tools, garden/forestry machinery, medical/food appliances, separately sold parts, detachable batteries/chargers, interchangeable bits/blades/abrasives, kit cases, customer operation and maintenance, workpiece production and end-of-life. A kit must split its independent products and shared packaging using measured foreground attribution; it cannot use total kit mass as tool M. No machining, drilling or fastening service reference is defined.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.handheld-electric-power-tools |
| classification_refs | CPC 3.0 44232; narrower tool-body manufacturing context; no accepted mapping |
| covered_products | Complete corded tool or cordless bare body with integral electric motor, configured by one working function. |
| excluded_products | Detachable battery/charger, integral-battery tools, consumables, cases, stationary/non-electric tools, garden/medical/food machinery and work services. |
| representative_product | One accepted cordless drill/driver bare body with declared motor, gearbox, chuck, switches and battery-contact interface. Corded variants include their actual power cord. |
| production_route | Received stock/parts → conditional polymer molding, drive-part machining, motor winding and electrical connections → configured assembly → factory acceptance/rework → dispatch. |
| market_state | New accepted complete declared tool body with retained lubricant and required guards/handles; independent kit products and shipping packaging excluded from net tool mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacturing delivery of a complete declared handheld electric tool body; it is a product reference, not energy-to-work efficiency or a customer working service. |
| How much | 1 kg of accepted net complete tool of one specified configuration; a normalized fraction of a whole tool, not an independently functional 1 kg component. |
| How well | Meets released BOM/drawings and actual acceptance criteria for fitted motor/drive, output interface, controls, guards, electrical conformity and specified working mode. No universal torque/speed/noise/durability or lifetime assumed. |
| How long or cycle | One manufacturing and acceptance cycle; tool operating hours, holes cut and fasteners driven are not this manufacturing denominator. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Electromechanical tools for working in the hand, with self-contained electric motor `e7c50d40-dc9e-4e25-88d5-3df54c86969f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/revision; serial/batch; working function; corded/cordless bare-body supply; brushed/brushless and AC/DC motor; gearbox/output interface; controls; rated voltage; required installed guards/handles; retained lubricant; installed cord/contact boundary; excluded detachable battery/charger/consumables/case; measured net M; actual release test criteria; factory/period; make-or-buy; molding/machining/winding/electrical routes; upstream/provider coverage; packaging exclusion |

Declare all qualifiers in dataset metadata/reference-flow comments. The broad public category is narrowed by this body-only scope and actual configuration; different working functions are not made equivalent by mass normalization.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| electricity_units | molding_power; fabrication_power; motor_build_power; electrical_power; assembly_power; test_power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert measured kWh using 3.6 MJ/kWh before normalization. Meter factory wall-side delivered supply, not rated motor power multiplied by an assumed test duration. |

Measure net M for the exact accepted corded tool or cordless bare body. Include fitted cord, contact interface, required handles/guards and retained grease; exclude detachable battery/charger, interchangeable consumables, case, workpieces and packaging. Use calibrated actual weighing and component boundaries; no category-average tool or battery mass is supplied.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased stock and finished parts received at one manufacturing site; supplier production not automatically foreground-covered. |
| starting_condition_role | Declared material/assembly starting point for a tool manufacturing module. |
| product_classification_scope | Dedicated general-purpose handheld electric tool body; excludes independent batteries/chargers and specialist garden/medical/food equipment. |
| recursive_input_rule | Purchased motor/gearbox/board/housing assemblies carry explicit included-part and upstream boundaries. Stop tracing at their declared supply and do not duplicate their internal resin, winding, bearings or grease. |
| upstream_dataset_requirement | Expanded studies separately link actual compatible suppliers, transport and waste treatment with technology, grade and geography disclosed; missing providers remain gaps. |
| disclosure | Report site/period, make-or-buy, outsourcing, assembly/test supply, shared kit packaging, capital/test-bench treatment, transport/waste coverage and omissions. The manufacturing module alone does not establish complete cradle-to-gate coverage. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_foreground | manufacturing | Include actual receipt-to-release work, attributable utilities, consumables, losses, rework and tests. Conditional fabrication applies only where site work orders establish it; purchased finished parts replace duplicate site manufacture. |  |
| boundary_supply | complete_tool | Match released body supply, cord/contact interface, motor/drive/control and required safety fittings. Bosch and Makita model examples distinguish detachable accessories and corded/cordless controls; they impose no universal tool mass or manufacturing test. | bosch-drill; makita-hp1640 |
| boundary_downstream | customer_work | Exclude customer tool energy, battery cycling, replacement consumables and workpiece impacts. Include only actual factory load-test media and bench energy; do not import customer dust/noise values as manufacturing emissions. |  |
| boundary_species | elementary_flows | Quantify actual post-control species and outdoor receiving medium. Collected swarf/wipes are waste, not air emissions; purchased solvent is not an elementary emission identity. Unknown amounts remain gaps, not zero. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| molding | Housing polymer molding | conditional | Only on-site molding; purchased housings replace it. | foreground_production | per 1 kg reference flow |
| fabrication | Drive-part machining | conditional | Only actual machining of incoming blanks; no presumed casting/forging/heat treatment. | foreground_production | per 1 kg reference flow |
| motor_build | Motor winding and finishing | conditional | Only site winding/impregnation/balancing; complete purchased motors replace these activities. | foreground_production | per 1 kg reference flow |
| electrical | Electrical connections and soldering | conditional | Only actual site electrical work; bought-in populated boards carry upstream boundaries. | foreground_production | per 1 kg reference flow |
| assembly | Configured tool-body assembly | required | All products; retain corded/cordless and drive-specific installed parts. | foreground_production | per 1 kg reference flow |
| acceptance | Factory acceptance and rework | required | All products; actual released test plans define applicable bench/load media. | foreground_production | per 1 kg reference flow |
| packing | Dispatch packaging | conditional | Only factory-applied actual protection. | foreground_production | per 1 kg reference flow |

Reconcile exact housing, motor/rotor/winding, gear train/output spindle, bearings, chuck or other fixed interface, switch/controller, cord/contact, guard, handle, screws and lubricant to the tool BOM. Each function needs its own actual interface/guard parts; this starting set is not a universal drill BOM for every saw or grinder. Add each missing physical part, chemical, waste and measured species separately. Site-built internal transfers are not purchased inputs; bought-in assemblies replace their contained raw materials and processes.

### Process: Housing polymer molding (`molding`)

Only on-site molding; purchased housings replace it.

#### Inputs

##### Product flows

###### acrylonitrile-butadiene-styrene granulate (ABS) (`abs_resin`)

Only when actual housing molding uses ABS granulate; retain supplier grade, formulation, additives/color and net issues after returns. Bought-in housings replace resin and site molding. Separately added masterbatch is another formulation-specific exchange.

- Selected flow: acrylonitrile-butadiene-styrene granulate (ABS) `4f197be0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_molding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_molding`

###### Polyamide-6 granulate with 30% glass fibre by mass (`pa6_gf30`)

Only if the supplied compound is documented as PA6-GF30; quantify the whole delivered compound mass, not neat-polymer mass. No universal reinforcement fraction or housing resin is prescribed. Other recipes are separate rows.

- Selected flow: Polyamide-6 granulate with 30% glass fibre by mass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_molding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_molding`

###### Alternating current (`molding_power`)

Meter actual resin drying, injection, cooling and trimming demand at delivered below-1-kV grid-average electricity; actual geography/provider required.

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

###### Discarded ABS molding trim (`abs_trim`)

Only externally discarded trim of the actual ABS formulation; weigh separately from internally returned clean regrind and glass-filled polyamide losses.

- Selected flow: Discarded ABS molding trim
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_molding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_molding`

### Process: Drive-part machining (`fabrication`)

Only actual machining of incoming blanks; no presumed casting/forging/heat treatment.

#### Inputs

##### Product flows

###### Prepared steel gear blank (`steel_blank`)

Only site-machined steel gear blanks of specified alloy, shape and incoming mass. Bought-in complete gearboxes replace this stock and machining for their included gears. No on-site forging or heat treatment presumed.

- Selected flow: Prepared steel gear blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Unmachined aluminium-alloy gearbox housing casting (`al_cast_housing`)

Only if a bought-in cast housing is machined on site; retain alloy, casting net mass, machining stock and finish boundary. Finished purchased gearboxes/housings omit this blank.

- Selected flow: Unmachined aluminium-alloy gearbox housing casting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Alternating current (`fabrication_power`)

Meter actual turning, gear cutting/grinding, drilling and extraction demand; delivered grid-average supply below 1 kV. Cutting fluids or heat-treatment routes actually used need separate composition-specific inputs and waste records before claiming coverage.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
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

Weigh actual untreated carbon/low-alloy steel offcuts and chips exported; oily chips and nonferrous fractions remain separate. Internal reused stock is not waste.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Untreated aluminium-alloy machining swarf (`al_swarf`)

Only actual alloy-specific exported swarf, with lubricant contamination and handler recorded; do not substitute ferrous swarf or recycled aluminium product.

- Selected flow: Untreated aluminium-alloy machining swarf
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

##### Elementary flows

###### Particulate matter, particle size unspecified (`machining_pm`)

Only measured particulate mass emitted to outdoor air after control, with particle size and air subcompartment unspecified. Do not infer a universal emission from machining or subtract captured dust as an air emission.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

### Process: Motor winding and finishing (`motor_build`)

Only site winding/impregnation/balancing; complete purchased motors replace these activities.

#### Inputs

##### Product flows

###### Magnet wire (`winding_wire`)

Only site motor winding with enamel-insulated copper conductor; narrow this broad copper/aluminium identity by documented actual copper grade, diameter and enamel system. Quantify delivered insulated-wire mass; the record length/mass values are not a physical linear density. Bought-in motors replace their included winding input.

- Selected flow: Magnet wire `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_motor_build.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_motor_build`

###### Finished electrical-steel stator lamination stack (`stator_stack`)

Only purchased assembled stator lamination stack used for site winding; specify steel grade, geometry and mass. Do not add separate electrical-steel sheet if already contained in the stack.

- Selected flow: Finished electrical-steel stator lamination stack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_motor_build.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_motor_build`

###### Polyester motor-winding impregnation varnish (`winding_varnish`)

Only documented supplied formulation actually used in site impregnation; record resin, solvent and solids content, retained coating and waste separately. Do not assume all motors are impregnated on site.

- Selected flow: Polyester motor-winding impregnation varnish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_motor_build.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_motor_build`

###### Alternating current (`motor_build_power`)

Meter winding, impregnation, balancing and electric curing where performed; delivered below-1-kV grid-average supply. Actual solvent species, capture and waste from varnish require additional specific rows.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_motor_build.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_motor_build`

#### Outputs

##### Waste flows

###### Discarded enamel-insulated copper winding-wire offcuts (`winding_offcuts`)

Weigh actual discarded insulated-copper wire offcuts; record enamel fraction and handler. Do not call this clean copper metal scrap or duplicate internally reused wire.

- Selected flow: Discarded enamel-insulated copper winding-wire offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_motor_build.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_motor_build`

### Process: Electrical connections and soldering (`electrical`)

Only actual site electrical work; bought-in populated boards carry upstream boundaries.

#### Inputs

##### Product flows

###### Flux-free tin-silver-copper solder wire (`solder_wire`)

Only if the actual electronics connection route uses separately supplied flux-free SAC wire; specify alloy and consumed mass. Flux-cored solder, paste and lead solder need distinct formulation-specific exchanges.

- Selected flow: Flux-free tin-silver-copper solder wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electrical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical`

###### Rosin-based solder flux in isopropanol (`rosin_flux`)

Only one documented supplied flux formulation; record rosin/activator concentration and delivered solution mass. Do not record its solvent twice as purchased pure isopropanol.

- Selected flow: Rosin-based solder flux in isopropanol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electrical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical`

###### Neat isopropanol cleaning solvent (`ipa_cleaner`)

Only separately purchased neat isopropanol actually used in factory connection cleaning; retain purity and issue/return/retained waste balance. Other aqueous concentrations need separate identities.

- Selected flow: Neat isopropanol cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electrical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical`

###### Alternating current (`electrical_power`)

Meter connection assembly, soldering and extraction only where done at the site; below-1-kV delivered grid-average supply. Bought-in populated boards omit duplicated upstream component manufacture.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electrical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical`

#### Outputs

##### Waste flows

###### Spent cotton wipes contaminated with isopropanol (`spent_wipes`)

Only this physical waste actually generated; weigh retained liquid and cotton together for the delivered waste, record solvent content and disposal. It is not emitted solvent mass.

- Selected flow: Spent cotton wipes contaminated with isopropanol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electrical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical`

##### Elementary flows

###### isopropanol (`ipa_air`)

Only actual isopropanol emitted to outdoor air with unspecified air subcompartment after capture. Use measured species or a site solvent mass balance with documented purity, recovery, retained waste and controls; no universal evaporated fraction. Indoor exposure is a different medium.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electrical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical`

### Process: Configured tool-body assembly (`assembly`)

All products; retain corded/cordless and drive-specific installed parts.

#### Inputs

##### Product flows

###### Motor subassembly for handheld electromechanical tool (`motor`)

Only a purchased motor module of the actual brushed/brushless and AC/DC design, with included winding, rotor and bearings declared; site-built motors are internal transfers, not another purchased input.

- Selected flow: Motor subassembly for handheld electromechanical tool `85b3d713-bbb4-4780-87f7-50b1edb65fe6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished glass-fibre-reinforced PA6 tool housing shell (`housing`)

Only when supplier BOM verifies this polymer compound and part geometry; bought-in housing replaces corresponding site resin/molding. Other polymers use their own part row.

- Selected flow: Finished glass-fibre-reinforced PA6 tool housing shell
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel-geared drill gearbox assembly (`gearbox`)

One purchased complete gearbox of specified casing/gears/bearings and grease boundary; exclude already included gear blanks, bearings and fill from other inputs.

- Selected flow: Finished steel-geared drill gearbox assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel drill chuck (`chuck`)

Only a specified keyed/keyless drill chuck of the released drawing; retain clamping range/type, part mass and interface. Other tools need their actual output-interface parts rather than a drill chuck.

- Selected flow: Finished steel drill chuck
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel ball bearing (`bearing`)

Record actual specification and mass only where not included in bought-in motor/gearbox; no duplicate contained bearing.

- Selected flow: Finished steel ball bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished power-tool trigger switch (`switch`)

One installed specified switch assembly and wiring boundary; retain voltage/current rating and mass, not generic control-system bundling.

- Selected flow: Finished power-tool trigger switch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished brushless-motor control board (`controller`)

Only brushless designs with this purchased populated control board; record included switches/connectors and mass; omit when absent or already in motor module.

- Selected flow: Finished brushless-motor control board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished insulated-copper mains cord with plug (`cord`)

One physically assembled power-cord product of a specified plug/length/insulation; included in corded-tool M, absent for cordless bare bodies. Extension leads are excluded.

- Selected flow: Finished insulated-copper mains cord with plug
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished cordless battery-contact connector (`contact`)

Only the tool-side contact assembly; record alloy/coating and mass. This input is not a battery cell or pack.

- Selected flow: Finished cordless battery-contact connector
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished graphite motor brush (`brush`)

Only brushed motors and only when not already included in bought-in motor; record graphite grade, lead boundary and mass. Brushless designs omit.

- Selected flow: Finished graphite motor brush
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Lithium-soap lubricating grease (`grease`)

Only actual separately supplied gearbox grease; specify base oil, thickener/additives and delivered mass. Do not duplicate grease already in a purchased complete gearbox. Installed retained grease belongs in tool M.

- Selected flow: Lithium-soap lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Alternating current (`assembly_power`)

Meter actual final fastening, fitting and attributable powered tools; below-1-kV grid-average supply. Record installed guards, handles and screws as individual BOM parts if outside supplied assemblies.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

### Process: Factory acceptance and rework (`acceptance`)

All products; actual released test plans define applicable bench/load media.

#### Inputs

##### Product flows

###### Alternating current (`test_power`)

Meter wall-side electricity for actual run-in, no-load/loaded function, controls and electrical conformity tests, including bench supply/charging losses and failed tests/rework. Reusable bench battery packs are not tool-body material inputs; disclose capital/test-equipment boundary and separately record actual replacement/loss if included. Customer operating kWh is excluded.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Cold-rolled carbon-steel drilling-test coupon (`test_coupon`)

Only actual consumable steel coupon in an approved loaded drill test; collect alloy/thickness, issued mass, reuse and removed swarf. Other tool/load media need separate material-specific rows; no universal loaded test or coupon quantity prescribed.

- Selected flow: Cold-rolled carbon-steel drilling-test coupon
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

###### Electromechanical tools for working in the hand, with self-contained electric motor (`finished_machine`)

Accepted complete corded tool with installed mains cord or cordless bare tool body, with motor, drive, controls, output interface, required guards/handles and retained grease. Exclude detachable batteries/chargers, interchangeable bits/blades/abrasives, cases, test workpieces and packaging. Tool-specific fixed interfaces and mandatory supplied safety handles remain included.

- Selected flow: Electromechanical tools for working in the hand, with self-contained electric motor `e7c50d40-dc9e-4e25-88d5-3df54c86969f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

##### Waste flows

###### Post-industrial steel scrap (`test_swarf`)

Only actual untreated steel drilling-test offcuts/swarf leaving the site, quantified separately from retained/reused coupons. This is not ambient particulate; alloy and contamination must match this waste identity.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

### Process: Dispatch packaging (`packing`)

Only factory-applied actual protection.

#### Inputs

##### Product flows

###### Polyethylene film (`film`)

Only PE film actually applied, net of returns; record grade and packaging mass separately from M.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

###### Corrugated cardboard (`board`)

Use only actual C/E/F flute board with fibre at least 80% and recycled material consistent with the public flow; record actual composition. This identity condition is not a mandatory tool-packaging specification; other board grades need their own identity.

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
| allocation_direct | manufacturing | Use direct work-order issues and meters first. Under cp_allocation, partition remaining shared demand by a measured causal driver: molding batch demand and shot mass/cycle; machining/winding machine time with measured power; assembly/test bench demand and actual station time; kit packaging measured product demand or geometric fit. Demonstrate the driver with foreground records and reconcile allocated plus excluded demand to the original total. No assumed fixed burden share. |  |
| allocation_variants | product_mix | Do not allocate all production by machine count when variants have different energy demand or configurations. A fallback mass or economic basis needs documented foreground justification, sensitivity and review; it is not a default imposed by this PCR. |  |
| allocation_scrap | steel_offcuts | Keep virgin/material inputs and separately measured scrap outputs without an automatic avoided-steel credit. Report scrap price and destination when relevant; any co-product classification or recycling credit requires a separately declared reviewed model to prevent double credit. Clean polymer regrind recirculated internally is not a saleable co-product. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_machine | measurement | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted configuration and sampled serial with traceable coverage | same manufacturing period as activity records | accepted complete supply at one declared site | accepted net mass per machine | scale calibration; declared bare/corded body; battery/case exclusions; fitted grease; detachable-part weights; acceptance sign-off |
| cp_molding | molding | each atomic row in this process | measurement | resin grade/formulation; issues/returns; drying/injection/cooling kWh; accepted housings; separated trim/regrind | Weigh each actual supplied compound and external waste; meter mold/cooling demand; reconcile internal regrind and stock; retain released part and supplier specifications. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_fabrication | fabrication | each atomic row in this process | measurement | blank alloy/shape; issues/returns; gear/housing part mass; each swarf; cutting-fluid recipe if used; machining kWh; actual outdoor particle monitoring | Use part-linked work orders and stock/part/waste balances; meter actual machine and extraction demand; record any actual heat-treatment, cutting-fluid and waste route as additional specific rows. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_motor_build | motor_build | each atomic row in this process | measurement | wire conductor/enamel/diameter; delivered insulated-wire mass; actual winding turns; stator/rotor boundary; varnish formulation; issues/returns; retained coating; wire/waste fractions; kWh | Weigh actual magnet wire and supplied parts, meter winding/balancing/curing and reconcile finished internal motor parts and waste. Do not use database length/mass relations as wire density or double-count a bought-in complete motor. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_electrical | electrical | each atomic row in this process | measurement | alloy and flux composition; solvent purity; issues/returns; solder joints; captured/recovered solvent; contaminated wipe mass/composition; isopropanol outdoor species kg; kWh | Record separate supplied chemicals and net use; meter soldering and extraction. Measure solvent species or close an actual site balance across returned stock, retained liquid in waste, recovered solvent and emitted mass; retain uncertainty and control coverage. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_assembly | assembly | each atomic row in this process | measurement | model/BOM revision; part number/material; motor brushed/brushless AC/DC; supplied assembly boundary; installed count; each part mass; grease formulation/fill; issues/returns; kWh | Use configuration-controlled received/issued/returned parts and grease records. Weigh each supplied part, reconcile installed cord/contact, motor/gearbox/controls and mandatory guards/handles; no contained-part duplication. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_acceptance | acceptance | each atomic row in this process | measurement | serial/configuration; released test plan; duration/mode; drive speed/control response; electrical conformity; pass/fail/rework; bench wall-side kWh; test coupon grade/mass/reuse; steel swarf; bench battery boundary; measured M | Retain signed current model tests and acceptance results. Meter actual wall-side bench demand and trace loaded-test media and removed residues; include failed tests/rework. Do not replace tests with rated power times an assumed duration, or count a reusable test battery as a shipped body component. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_packing | packing | each atomic row in this process | measurement | PE film mass; board flute/fibre/recycled content; issues/returns; kit shared packaging; dispatched serial | Weigh each actual packaging part, exclude it from M and reconcile shipment. Split shared kit packaging using measured product-specific packing demand or a justified measured geometric driver under cp_allocation; disclose method and closure. | kg | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_allocation | manufacturing | shared_demand | measurement | total utility; measured power/load; operating time; packaged product dimensions/area; accepted configuration counts; excluded demand | Submeter where possible; measure load and causal drivers for shared molding/machining/winding stations and document why the driver represents each shared exchange. | MJ; h; m2 | each shared batch and monthly reconciliation | same production interval | all consuming products and excluded operations at this site | partition total by measured causal demand; then aggregate attributable amount / accepted machines | submeter agreement; total closure; driver uncertainty; sensitivity; approval record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | abs_resin; pa6_gf30; molding_power; abs_trim; steel_blank; al_cast_housing; fabrication_power; steel_offcuts; al_swarf; machining_pm; winding_wire; stator_stack; winding_varnish; motor_build_power; winding_offcuts; solder_wire; rosin_flux; ipa_cleaner; electrical_power; spent_wipes; ipa_air; motor; housing; gearbox; chuck; bearing; switch; controller; cord; contact; brush; grease; assembly_power; test_power; test_coupon; test_swarf; film; board | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

Before applying normalize_mass, retain one declared configuration and matched period. Derive each q_item from its protocol: net stock/part issues minus valid returns, attributable meter use or measured waste/emission divided by accepted machine count for that same configuration. Include rejects and rework in manufacturing burdens carried by accepted output; never divide by all starts. Mass-weight datasets with different measured M values only after keeping configuration-specific records. Unit conversion and allocation are performed on raw records and retained as separate calculation evidence; no universal consumption range, density or emissions factor is supplied.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all_flows | Match actual part/material grade, supplied state, concentration, geography, reference property and units. A UUID is identity only, not amount evidence or a provider dataset. Resolve blanks before treating an exchange as fully linked. | supplier sheet; flow/property/unit records; identity review |
| quality_completeness | complete_machine | Reconcile all configured BOM components, required fitted guards/handles and cord/contact to M; inventory actual utilities, chemicals, each waste and emission. Measure missing parts rather than infer them as the residual of M. Report coverage and any unlinked provider. | BOM revision; weigh sheets; material balances; missing-data register |
| quality_period | production_records | Use one declared factory and complete representative period; record model changes, seasonality, idle demand, outsourcing and rework; quantify primary coverage and uncertainty. Historic product cases cannot substitute for current production records. | work orders; acceptance ledger; meter calibration; source limits |
| quality_test | acceptance | Use current released criteria for the actual motor/drive/control/output interface, required guards/handles and electrical conformity. Distinguish corded and cordless bench supply. Manufacturer user performance/safety advice is not a universal factory test limit or durability requirement. | signed test plan; serial/model results; calibration and conformity specification |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Require 1 kg reference output, cp_mass measured M, complete declared tool-body supply and installed cord/contact/guards/handles/grease boundary. Detachable battery/charger, consumables, case and packaging must not enter M; do not use kit gross mass. |  |
| validation_normalization | inventory | Every applicable non-reference row uses normalize_mass and a declared protocol; check q_item and M share configuration/period, correct division direction and preserved energy/volume/item numerator units. |  |
| validation_route | processes | Match site molding, gear machining, motor winding and electrical work to actual make-or-buy records; no duplication of resin and housing, wire and bought-in motor, bearings/grease and bought-in gearbox, or reusable bench battery and shipped tool. |  |
| validation_species | elementary_flows | Match isopropanol CAS67-63-0 and outdoor-air unspecified subcompartment, particulate particle-size coverage and post-control boundary. Indoor or upper-troposphere isopropanol identities do not match outdoor factory emissions; captured swarf/wipes remain waste. No emitted fraction or emissions factor presumed. |  |
| validation_coverage | dataset | Disclose measured, calculated, estimated, excluded, not-applicable and missing quantities distinctly; reconcile accepted outputs, scrap, stock and allocation closure. A method check or valid projection does not approve scientific methodology or establish cradle-to-gate completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | A documented manufacturing module for the exact configured machine and period; upstream-connected assessment only after supplier/transport/treatment coverage is established. |
| excluded_use | Customer machining/fastening services, operating-energy or lifetime comparisons, lifespan-normalized claims, generic equivalence between appliance configurations, and unsupported complete cradle-to-gate claims. |
| required_metadata | PCR id; model/configuration/BOM and serial scope; measured M and declared battery/cord/grease boundary; acceptance standard; site/period; make-or-buy and process route; reference basis; providers and transport; packaging; allocation; data sources; version. |
| required_quality_disclosure | Measured coverage, missing identities/providers and quantities, route exclusions, source age/limits, conversion conditions, allocation evidence, emissions monitoring gaps, uncertainty and independent review status. |
| update_trigger | BOM or configuration change; revised acceptance test; changed supplier/process/electrical or energy supply; new representative production period; resolved identity or evidence gap. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| bosch-drill | handbook | Bosch GSR/GSB18V-55 Original instructions, 1 609 92A 7XG,14.11.2022, PDF/printed p.15 Product Features and accessory footnote. https://www.bosch-professional.com/binary/manualsmedia/o402762v21_160992A7XG_202211.pdf | Historical model-specific chuck, selectors, switches, handle and detachable battery/accessory distinction only; no mass, torque, speed, battery life or operating factor adopted. Current BOM/release tests govern foreground. |
| makita-hp1640 | handbook | Makita HP1640/HP1641 instruction manual,884851B879, retained manufacturer edition, PDF metadata2023; PDF/printed pp.5–6 Functional Description and Assembly. https://www.makita.ae/makita_cpanel/attachments/user_manuals/HP1640.pdf | Model-specific corded trigger/reversing controls, chuck and side-grip assembly; no universal material, rating, operating drilling capacity/noise, service life or manufacturing energy transferred. |
