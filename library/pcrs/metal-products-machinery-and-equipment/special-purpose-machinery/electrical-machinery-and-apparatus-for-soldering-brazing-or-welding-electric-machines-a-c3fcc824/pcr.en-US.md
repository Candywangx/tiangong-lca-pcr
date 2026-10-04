---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electrical-machinery-and-apparatus-for-soldering-brazing-or-welding-electric-machines-a-c3fcc824
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Electrical soldering, brazing, welding and electric hot-spraying apparatus

## 1. Scope and Applicability

This PCR covers manufacture of complete electrical soldering, brazing or welding apparatus and electric machines for hot spraying metals or sintered metal carbides. Include resistance spot/seam/projection/butt and arc welding, transformer/rectifier/inverter architectures, electrical resistance or induction soldering/brazing, and electric wire-arc or plasma thermal spraying within the declared metal/carbide scope. Portable apparatus and configured mechanised/robotic systems retain actual principal function and included components. One model or reference identity does not narrow the category. Other electrical joining architectures require their own primary configuration evidence.

Exclude separately supplied spare parts, independently sold robots/generic converters/cooling plants, non-electrical joining or combustion-only spray/tempering equipment, finished weld/coating services, and customer operation, maintenance or end of life. A handheld spray gun in a complete electric platform does not make that platform a generic hand tool. Hybrid laser/electron-beam/ultrasonic, combustion/electric or combined cutting/joining apparatus require item-specific principal-function/classification review before use. No catalogue mass, current, rated power, duty cycle, efficiency, life or consumable recipe is a factory inventory default.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electrical-machinery-and-apparatus-for-soldering-brazing-or-welding-electric-machines-a-c3fcc824 |
| classification_refs | CPC 3.0 44241; exact semantic scope |
| covered_products | Complete electrical soldering/brazing/welding and electric metal/carbide hot-spray apparatus with actual declared configured BOM |
| excluded_products | Non-electrical apparatus; separate parts; independent robots/utilities; customer welding/coating outputs |
| representative_product | One accepted configured electrical apparatus; no universal model or material recipe |
| production_route | Actual make/buy mechanical and magnetic/electronic manufacture, integration, surface finish and factory tests |
| market_state | Accepted complete supplied apparatus at factory gate, included first-set hardware and retained fills declared |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide declared electrical joining or electric metal/carbide hot-spray apparatus |
| How much | 1 kg accepted complete configured apparatus net mass |
| How well | Actual rated electrical input/output, process/feeding/control/cooling, delivered scope and documented acceptance; no inferred performance |
| How long or cycle | One common production/acceptance period; no asserted operating life |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Electrical machinery and apparatus for soldering, brazing or welding, electric machines and apparatus for hot spraying of metals or sintered metal carbides `ffcabfa7-0ae8-4a7e-af45-cfb3041a11c3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | principal joining/spray process and electric heat source; transformer/inverter/resistance/induction/arc/plasma architecture; voltage/current and actual process rating; portable/standalone/robotic principal function; supplied controller, leads, torch/coil/electrodes, feed, cooling, robot and guards; net mass and configured acceptance; make/buy and completed upstream operations; actual material grades/coolant/first-set accessories; sites/period/provider/transport/treatment; actual factory tests and gap disclosure |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference is 1 kg accepted complete apparatus net mass. Collect same-configuration accepted masses using cp_mass; exclude packing, rejects, consumed test loads and loose spares. |
| native_amount | all inventory rows | actual native property | native unit | Preserve each native numerator unit; conversion uses actual density/T/P/humidity for gas Volume and 3.6 MJ/kWh for electricity. Whole solution/formulation mass differs from contained chemical or water. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual purchased materials or completed modules with supplied finish/accessories and upstream operations identified |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | Complete electrical joining/electric metal-carbide hot-spray apparatus; principal-function and supplied-state review |
| recursive_input_rule | A bought same-category complete power/assembly input has upstream manufacture once; local extension/integration only, no recursive duplication of its embedded materials/processes |
| upstream_dataset_requirement | Compatible supplier/provider geography, period, grade, completed state, electricity/transport/treatment scope and documented gaps |
| disclosure | Declare delivered BOM, make/buy interfaces, actual operations, tests and missing identities; do not transfer user weld/spray consumables into machine BOM |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_complete | Boundary is attributable manufacture to dispatch of accepted configured complete apparatus; customer operation/install/maintenance/end-of-life separate. Mechanical, magnetic/electronic make routes replace bought modules, and paired internal transfers cancel. | un-cpc3; fronius-inverter; metco-equipment |
| boundary_tests | Factory functional joining/spray trials, rejects and rework remain attributable when actually performed. Welding wire/solder/flux/gas/feed powder/coupons used in those trials differ from shipped retained hardware/fills. Do not assume every architecture consumes every trial flow. | fronius-inverter; hakko-spec; ambrell-braze; metco-equipment |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Casing and mechanical fabrication | conditional | Actual local sheet/profile cutting, forming, machining and joining only; bought finished modules do not repeat these operations. | foreground | per 1 kg reference flow |
| magnetics | Local magnetic and power-subassembly manufacture | conditional | Actual winding/core/potting route replaces corresponding bought completed assembly; no universal transformer, core or dielectric recipe. | foreground | per 1 kg reference flow |
| assembly | Configured electrical and mechanical integration | conditional | Trace complete module interfaces for electric arc/resistance, solder/braze and arc/plasma spray; declare actual included hardware, controls, leads, coils, torch, cooling and handling. | foreground | per 1 kg reference flow |
| finish | Surface finish and cleaning | conditional | Actual coating/cleaning and curing only; outsourced completed surfaces remain upstream. | foreground | per 1 kg reference flow |
| test | Factory acceptance and functional trials | conditional | Actual safety/control/thermal/current/feed/cooling/functional test programme for supplied configuration, including rejects and rework; customer lifetime welding and spray production excluded. | foreground | per 1 kg reference flow |
| services | Shared residual utilities | conditional | Only common-period utilities not already assigned to measured local process/functional-test loads; no duplicated shared compressor/cooling electricity. | foreground | per 1 kg reference flow |
| dispatch | Dispatch of accepted configuration | conditional | Accepted complete net configured apparatus and actual packaging, declared supplied accessories/fills; loose spare parts and transport packaging outside Dnet. | foreground | per 1 kg reference flow |
| residues | Residue and elementary emission accounting | conditional | Only actual external waste/species transfers after independent measurements; provider treatment stays upstream. | foreground | per 1 kg reference flow |

### Process: Casing and mechanical fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Carbon steel sheet (`steel`)

Actual casing/frame sheet grade and rolled finish; catalogue silver/steel bilingual conflicts are unavailable.

- Selected flow: Carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: fronius-inverter; telwin-resistance

###### Aluminium extrusion profile (`aluminium`)

Only actual documented structural extruded profile grade; purchased finished heatsink or casing includes its own forming upstream.

- Selected flow: Aluminium extrusion profile `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: fronius-inverter; telwin-resistance

###### Metalworking cutting fluid (`cutfluid`)

Actual liquid machining formulation and concentration; measure own water and lubricant assay.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: fronius-inverter; telwin-resistance

###### Carbon steel welding wire (`weld`)

Actual casing/frame joining solid-wire grade only; factory equipment fabrication differs from welding-machine functional-test consumables.

- Selected flow: Carbon steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: fronius-inverter; telwin-resistance

###### Gaseous argon (`argon`)

Only actual pure gaseous argon supplier/grade; no shielding-gas mixture proxy. Liquid supply requires actual vaporisation and its separate matched identity.

- Selected flow: Argon, gaseous `f83a939c-a58f-44de-a593-d9c9ffb584e4`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: fronius-inverter; telwin-resistance

###### Low-voltage China user electricity (`fabrication_electricity`)

Conditional actual China user-side supply below 1 kV; native energy kWh, 1 kWh = 3.6 MJ. Other geography/voltage uses its own matched atomic exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources: fronius-inverter; telwin-resistance

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Local magnetic and power-subassembly manufacture (`magnetics`)

#### Inputs

##### Product flows

###### Copper wire (`copper`)

Only actual bare wire for local terminal/conductor manufacture; bought transformer excludes embedded copper.

- Selected flow: copper wire `4f197beb-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: fronius-inverter

###### Enamelled copper winding wire (`magnetwire`)

Only actual copper enamelled conductor with recorded insulation/diameter and supplied state; aluminium/paper-covered alternatives need separate identities. Record local winding/impregnation, not upstream wire fabrication again.

- Selected flow: Magnet wire `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: fronius-inverter

###### Stamped silicon-electrical steel core lamination (`lamination`)

Actual bought stamped/insulated finished lamination grade for local stack assembly; raw flat-rolled steel does not include stamping/insulation. Local stamping replaces this input with its actual sheet route and additional atomic rows.

- Selected flow: Stamped silicon-electrical steel core lamination
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: fronius-inverter

###### Power-transformer ferrite core (`ferrite`)

Actual power transformer core material/geometry, not EMI beads or chain-classified ferrite record.

- Selected flow: Power-transformer ferrite core
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: fronius-inverter

###### DGEBA epoxy resin (`epoxy`)

Only actual DGEBA uncured resin for local encapsulation; separately supplied hardener, fillers and solvent need own atomic rows. Complete potted module embeds resin upstream.

- Selected flow: Epoxy resin `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: fronius-inverter

###### Low-voltage China user electricity (`magnetics_electricity`)

Conditional actual China user-side supply below 1 kV; native energy kWh, 1 kWh = 3.6 MJ. Other geography/voltage uses its own matched atomic exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources: fronius-inverter

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Configured electrical and mechanical integration (`assembly`)

#### Inputs

##### Product flows

###### Populated welding-control printed circuit board (`pcb`)

Actual finished populated board, not bare PCB or hearing-aid/ADP assembly. Embedded devices/solder stay upstream unless actual local population replaces the module.

- Selected flow: Populated welding-control printed circuit board
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### IGBT power switching module (`igbt`)

Only actual rated IGBT module; photovoltaic module or generic semiconductor category cannot establish the device.

- Selected flow: IGBT power switching module
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Power rectifier diode module (`rectifier`)

Actual purchased rectifier architecture/rating; loose diode, solar module and assembled converter are different supplied states.

- Selected flow: Power rectifier diode module
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Film capacitor (`capacitor`)

Actual bought film capacitor voltage/capacitance/film and supplied finish; the broad capacitor identity requires these exact item qualifiers, not a universal dielectric or weight.

- Selected flow: capacitor `df93339b-f27d-4f3e-b672-9d2ef0c536f6`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Finished welding transformer (`transformer`)

Actual supplied complete transformer; casing alone cannot substitute. Local winding/core assembly replaces bought complete manufacture.

- Selected flow: Finished welding transformer
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Finished welding inverter power module (`inverter`)

Only actual finished welding-compatible inverter; PV/LED power units are not substitutes. Embedded transformer, switches and electronics count upstream once.

- Selected flow: Finished welding inverter power module
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Finished welding wire-feed unit (`feed`)

Actual motor/rollers/controller supplied assembly; welding wire itself is not a feed unit.

- Selected flow: Finished welding wire-feed unit
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Finished arc welding torch (`torch`)

Actual purchased compatible torch and declared hose/cable inclusions; welding service is not torch hardware.

- Selected flow: Finished arc welding torch
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Finished electric arc-spray gun (`gun`)

Actual metal-wire arc gun architecture and media interfaces; paint spray gun and solder alloy are unavailable.

- Selected flow: Finished electric arc-spray gun
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Finished plasma thermal-spray gun (`plasmagun`)

Actual electric DC cathode/anode/powder-injection supplied gun, atmospheric or controlled atmosphere declared; generic powder projector is not equivalent.

- Selected flow: Finished plasma thermal-spray gun
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Finished copper-alloy resistance-welding electrode (`electrode`)

Actual installed first-set electrode alloy and supplied finish; copper wire/cathode feedstock are different. Later customer electrode replacements are excluded.

- Selected flow: Finished copper-alloy resistance-welding electrode
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Finished induction brazing work coil (`induction`)

Actual geometry, conductor and cooling-compatible work coil; motor armature or lighting ballast is unrelated.

- Selected flow: Finished induction brazing work coil
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Finished soldering-iron composite heater tip (`tip`)

Actual included compatible heater/tip unit; generic heating resistor with toxicity reference property is unavailable.

- Selected flow: Finished soldering-iron composite heater tip
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Finished electric cooling fan (`fan`)

Only actual compatible supplied fan, not a complete non-electric space heater.

- Selected flow: Finished electric cooling fan
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Finished welding water-cooling unit (`chiller`)

Actual delivered complete cooling assembly, with compressor/refrigerant only if actual architecture; facility/customer cooling service is a separate boundary.

- Selected flow: Finished welding water-cooling unit
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Industrial handling robot (`robot`)

Only actual bought general handling robot incorporated in a reviewed electric joining/spray system, matching supplied general-robot identity and actual controller/BOM scope; independently sold robot stays outside complete apparatus reference.

- Selected flow: Industrial robots `f3a1c3db-6e8f-4406-b490-2d174edfc7a8`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Programmable logic controller (`plc`)

Actual complete hardware controller with compatible China procurement and voltage; embedded electronics upstream.

- Selected flow: Programmable logic controller `5b817eb4-cab3-4fed-87c9-457d66d0bb19`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Insulated copper power cable (`cable`)

Actual supplied conductor, insulation and voltage; bare wire or Energy-referenced cable cannot serve mass component.

- Selected flow: Insulated copper power cable
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Electric connector (`connector`)

Only actual <=1000 V electrical connecting hardware with matched contacts and current rating; not optic connector or merely housing.

- Selected flow: Electric connector `bc212a0a-0aeb-4077-ac4f-90e5ccf57140`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### EPDM cooling hose (`hose`)

Actual completed EPDM hose with pressure/temperature compatibility; general hydraulic hose does not establish polymer.

- Selected flow: EPDM cooling hose
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### EPDM rubber gasket (`gasket`)

Actual finished EPDM gasket of specified compound/dimensions; universal sealing elements cannot establish grade.

- Selected flow: EPDM rubber gasket
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Roller bearing (`bearing`)

Actual finished compatible roller bearing, not cage or wind pitch bearing. Broad bearing identity needs actual subtype.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Steel screw (`screw`)

Actual compatible finished screw grade/coating and counts reconciled to calibrated component masses; no universal set.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Deionised water (`di`)

Only actual retained shipped coolant-water portion of declared formulation; bought prefilled unit excludes duplicate fill.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Ethylene glycol (`ethylene`)

Only actual pure ethylene-glycol portion of a locally mixed supplied coolant with own assay/water/additives and compatible coolant-grade provider. Electrolyte-solvent supplied use does not establish this coolant input; whole proprietary coolant is not pure glycol.

- Selected flow: Ethylene glycol
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### Low-voltage China user electricity (`assembly_electricity`)

Conditional actual China user-side supply below 1 kV; native energy kWh, 1 kWh = 3.6 MJ. Other geography/voltage uses its own matched atomic exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Surface finish and cleaning (`finish`)

#### Inputs

##### Product flows

###### Powder coating (`coat`)

Only actual dry polymer formulation with documented resin/additives, cure, coating retention and powder reclaim; no universal coating recipe.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Isopropanol (`ipa`)

Actual matched China at-plant chemical cleaning supply with own assay; distinguish recovered/retained/destructed/wastewater/non-air fractions.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Process water (`water`)

Actual treated industrial cleaning/rinse makeup and water quality; circulation is not fresh input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Low-voltage China user electricity (`finish_electricity`)

Conditional actual China user-side supply below 1 kV; native energy kWh, 1 kWh = 3.6 MJ. Other geography/voltage uses its own matched atomic exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Factory acceptance and functional trials (`test`)

#### Inputs

##### Product flows

###### SAC305 lead-free solder alloy (`solder_test`)

Only actual Sn-Ag-Cu SAC305 alloy consumed in actual factory solder functional tests; local electronic board population is a separate actual make route; lead solder, silver paste and solder-plus-flux are not the unfluxed alloy.

- Selected flow: SAC305 lead-free solder alloy
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### Rosin soldering flux (`flux_test`)

Only actual separate rosin-based formulation with own solvent/assay for actual factory solder functional tests; local board population is recorded in its own actual manufacturing route; combined solder/flux avoids duplicate constituent purchase.

- Selected flow: Rosin soldering flux
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### Carbon steel welding wire (`weld_test`)

Only measured wire consumed in actual factory arc functional tests, not customer lifetime weld output; reject/test coupons retained in burden but not accepted machine Dnet.

- Selected flow: Carbon steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### Gaseous argon (`argon_test`)

Actual pure gaseous argon used in factory welding or plasma functional trial only; mixed shielding gases require their actual species/formulation rows.

- Selected flow: Argon, gaseous `f83a939c-a58f-44de-a593-d9c9ffb584e4`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### Gaseous nitrogen (`nitrogen_test`)

Only actual GLO at-plant protective atmosphere nitrogen supply matching this interface for factory tests; bottled headspace makeup record is unrelated; thermal-plasma grade/mode must be separately demonstrated.

- Selected flow: Nitrogen gas `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### Gaseous helium (`helium_test`)

Only actual factory plasma/test gas; operating manual examples cannot establish all equipment requires helium.

- Selected flow: Gaseous helium
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### Finished tungsten welding electrode (`tungsten_test`)

Only actual factory test electrode with pure/doped grade and wear/retention measured; filament/raw rod are not automatically finished electrode.

- Selected flow: Finished tungsten welding electrode
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### Carbon steel test coupon (`coupon_test`)

Actual prepared sheet test load matching factory functional test, with retained/returned scrap accounted; not accepted equipment net mass.

- Selected flow: Carbon steel test coupon
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### Zinc thermal-spray wire (`zincwire_test`)

Actual pure zinc wire consumed in factory electric arc spray trials; zinc-aluminium alloy requires distinct identity; raw calcine or hot-dip galvanizing product is not wire.

- Selected flow: Zinc thermal-spray wire
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### WC-Co thermal-spray powder (`carbide_test`)

Actual spray-grade powder morphology/binder/composition supplied for factory electrical spray trials; pressing/sintering feed granules are unavailable.

- Selected flow: WC-Co thermal-spray powder
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### Deionised water (`di_test`)

Only factory cooling/test makeup separately from actual shipped retained fill; closed-loop circulation paired, not new supply.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### Low-voltage China user electricity (`test_electricity`)

Conditional actual China user-side supply below 1 kV; native energy kWh, 1 kWh = 3.6 MJ. Other geography/voltage uses its own matched atomic exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Shared residual utilities (`services`)

#### Inputs

##### Product flows

###### Low-voltage China user electricity (`services_electricity`)

Conditional actual China user-side supply below 1 kV; native energy kWh, 1 kWh = 3.6 MJ. Other geography/voltage uses its own matched atomic exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources: ambrell-cooling

###### Compressed air (`air`)

Actual supplied compressed air native Volume/m3 with measured temperature/pressure/humidity; mass collection converts by actual density; onsite compressor electricity counted once, not again as purchased air.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources: ambrell-cooling

###### Natural-gas industrial heat (`heat`)

Only actual delivered China industrial heat energy supply; provider boiler fuel is upstream, not fictitious site combustion. Physical steam/return masses require separate atomic records.

- Selected flow: Heat, district or industrial, natural gas `eb581eb3-c707-41a0-b4e6-ee1854551714`
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources: ambrell-cooling

###### Tap water (`tap`)

Actual factory supply makeup excluding internal cooling-water circulation and exported returns.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources: ambrell-cooling

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Dispatch of accepted configuration (`dispatch`)

#### Inputs

##### Product flows

###### Corrugated paper board (`board`)

Only actual C/E/F corrugated board with at least 80% fibre, including recycled fibre; record actual fraction and converting state, not all finished cartons.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: un-cpc3; fronius-inverter; telwin-resistance

###### LDPE foil (`film`)

Only actual PE-LD non-self-adhesive, noncellular, nonreinforced, nonlaminated, unsupported foil; polypropylene/composites require own identity.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: un-cpc3; fronius-inverter; telwin-resistance

###### Wood EURO pallet (`pallet`)

Only actual EURO-standard wood pallet with single-use/return share and actual number/mass; crates and non-EURO sizes separate.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: un-cpc3; fronius-inverter; telwin-resistance

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete electrical joining or electric hot-spray apparatus (`finished`)

Delivered principal-function configured apparatus and BOM/accessories/fills documented; packing, rejected machines, consumed test loads and loose spares excluded from net reference mass.

- Selected flow: Electrical machinery and apparatus for soldering, brazing or welding, electric machines and apparatus for hot spraying of metals or sintered metal carbides `ffcabfa7-0ae8-4a7e-af45-cfb3041a11c3`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: un-cpc3; fronius-inverter; telwin-resistance

##### Waste flows

##### Elementary flows

### Process: Residue and elementary emission accounting (`residues`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel scrap (`wsteel`)

Actual untreated external steel scrap transfer; internal recoverable returns cancel and later scrap treatment not invented.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Copper scrap (`wcu`)

Only actual external copper-scrap transfer to a documented matching hydrometallurgical recycling route; preserve receiver and actual supplied untreated state, with gross mass and own alloy/insulation assay. Receiver treatment stays upstream; do not infer site hydrometallurgy. Not equivalent contained pure Cu or sorted/pressed route unless actually done.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Waste populated printed wiring board (`wpcb`)

Actual populated rejected-board waste; distinguish retained rework and bare-board waste.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Paint sludge (`sludge`)

Only actual collected coating sludge own water/resin/metal fraction and treatment route.

- Selected flow: Paint sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Spent isopropanol solvent (`spentipa`)

Actual spent solvent stream with own IPA/water/contaminant assays; recovery and destruction are separate, not air residual.

- Selected flow: Spent isopropanol solvent
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Industrial wastewater (`wastewater`)

Actual industrial effluent transfer gross water fraction and each pollutant concentration; paper-mill wastewater not substitute.

- Selected flow: Industrial wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Metal grinding dust waste (`dust`)

Actual captured metal dust own particle/element assay; captured dust is non-air fate, not untreated emitted species.

- Selected flow: Metal grinding dust waste
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

##### Elementary flows

###### Fossil carbon dioxide to ordinary air (`co2`)

Actual independently measured onsite fossil origin only, not supplier heat boiler or carbon-stock remainder.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Fossil carbon monoxide to ordinary air (`co`)

Actual molecular fossil CO emission, not carbon closure converted to CO.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Isopropanol to ordinary air (`ipair`)

Actual post-control measured IPA species plus independent fugitive measurement; retained/recovered/captured/destructed fractions separate.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Water vapour to ordinary air (`vapor`)

Actual net evaporated water after own water fractions, reactions, retention and stocks.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Ozone to ordinary air (`ozone`)

Only independently quantified molecular O3 from actual factory arc/spray testing and emitted after controls; generation is not release.

- Selected flow: ozone `08a91e70-3ddc-11dd-9756-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Nitrogen dioxide to ordinary air (`no2`)

Only measured molecular NO2; aggregate NOx as NO2-equivalent is not pure NO2.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### PM10 to ordinary air (`pm10`)

Only measured <=10 micrometre aerodynamic PM fraction with documented inclusion of finer particles; PM2.5-10 alone or unspecified dust unavailable.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Copper to ordinary air (`copperair`)

Only actual independently measured emitted elemental Cu amount; whole copper-alloy fume/oxide mass is not Cu, avoid overlap with reported PM totals.

- Selected flow: copper `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Zinc to ordinary air (`zincair`)

Only actual independently measured emitted Zn amount from actual manufacturing/factory spray; captured powder or zinc-oxide gross mass is not Zn emission.

- Selected flow: zinc `08a91e70-3ddc-11dd-94e3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:


## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_burdens | Separate configuration/site/common-period records first. Direct component/operation/test records precede allocation; shared services use a documented causal metered basis only for unassigned residual. Attributable reject/rework/test burden remains; do not dilute with total unrelated plant output. |  |
| allocate_scrap | Retained recoverable materials are stock/paired returns; actual external coproducts need explicit allocation/substitution method and compatible output state. Waste transfer receives no automatic avoided-primary-metal credit. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | accepted configured reference | foreground_record | configuration; serial/BOM; Naccepted; each calibrated accepted net mass; Dnet; included accessories/fills; excluded packing/spares/reject/test loads | Use calibrated weighing/traceable weighing records for accepted complete apparatus of same configuration; reconcile acceptance and actual supplied BOM. For disassembled shipment sum each included module once. | kg | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_materials | fabrication | each actual material/formulation | foreground_record | identity/grade; gross Qattr; own assay/water fraction; stocks; reactions; returns; local operations; bought completion; uncertainty | Weigh each purchase/use stream and measure own chemistry/water fraction; reconcile supplied finish and stock-adjusted local fabrication, winding/potting, surface finish, reject/rework. | kg | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_modules | assembly | each completed component and retained fill | foreground_record | part/serial; native Qattr; compatibility; supplier/BOM; embedded materials/operations; included controller/lead/torch/coil/feed/cooling/robot/fill; rejected/reworked amounts | Use actual receipts and measured masses of each supplied unit; installed count converts through same-unit measured mass. Bought completed modules embed manufacture once. Local population/core manufacture requires its own atomic route and actual upstream replacements. | kg | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_tests | test | each actual factory test exchange | foreground_record | configuration; test programme; actual performed intervals; measured Qattr; electrical input/output/load; media/coupon consumption and returns; coolant stocks; acceptance/reject/rework | Meter actual insulation/control/feed/thermal/electrical or functional weld/solder/braze/spray trials; retain all attributable failed/repeated tests. Distinguish retained first-set hardware/fills from consumed media and user lifetime quantities. Resistive/dummy loads do not invent weld consumables; validate actual test state only. | native unit | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_utilities | services | each actual utility meter | foreground_record | native Qattr; common-period imports/actual onsite energy generation/exports/storage; process/test assigned meters; residual shared services; voltage/provider; gas T/P/humidity/density; gross/net heat and returns | Reconcile actual imports/generation/exports/storage with assigned fabrication/magnetic/assembly/finish/test/dispatch loads; allocate only unassigned residual, investigate negatives/uncertainty without clipping. Gross heat kg×its own MJ/kg less independent return kg×its own MJ/kg on one datum, deducted once; already-net heat excludes second return deduction. Physical steam/condensate mass is separate from energy; upstream heat provider boiler excluded from onsite fuel. | native unit | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_dispatch | dispatch | each packaging and finished output | foreground_record | accepted configuration/BOM/net output; packaging Qattr; actual polymer/board/pallet grade; return share; external transport native activity | Weigh actual dispatch packaging separately from accepted net apparatus; retain supplier/transport interface and actual returned packaging, never a standard packaging ratio. | kg | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_wastes | residues | each actual waste stream | foreground_record | gross Qattr; own water/element/chemical assays; stocks/internal returns/recovery; actual external transfer/provider and treatment | Use weighed transfer manifests and own stream samples; whole sludge/alloy/wastewater differs from contained species. Captured dust/solvent stay non-air until measured release; external provider emissions belong to provider. | kg | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_emissions | residues | each elementary species | foreground_record | CAS/origin/compartment; Qattr; actual post-control concentration; matched gas/liquid flow and time; T/P/wet-dry/oxygen/unit correction; independent fugitive basis; retention/capture/destruction | Measure species after actual controls using measured concentration × matched flow × same period with state/unit corrections plus independent fugitive measurement. Element/species assay is distinct from gross dust/oxide; prevent overlapping total PM/component emissions. Unexplained mass residual and carbon closure cannot infer CO/NO2/ozone. | kg | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | For one configuration and period divide each attributable native-unit exchange total by the sum of accepted configured-apparatus net masses; keep raw amounts, units and uncertainty. | Qattr; Dnet; cp_mass | native-unit amount per kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | Qattr includes attributable reject/rework/test burdens for one configuration and common period; Naccepted counts accepted apparatus whose masses form Dnet. Per-item exchange=Qattr/Naccepted; measured mean net mass=Dnet/Naccepted; per-kg exchange=Qattr/Dnet. Count conversion uses measured same-configuration mean mass, never rated output/current/duty-cycle or catalogue machine weight. | calibrated net masses and acceptance ledger |
| quality_physical | all inventory rows | Each element/species term uses its own gross mass and own assay/moisture/wet-dry basis, stocks, reactions, retained product, returns and waste. Gross alloy/sludge is not contained element. Each water stream uses own water fraction and measured/documented density at actual temperature, reactions/retention/evaporation/discharge/stocks; pair and cancel internal returns. | stream-specific assay and stock/reaction records |
| quality_solvent | ipa; spentipa; ipair | Reconcile own IPA assay in inputs, stocks, retained product, recovery/capture, wastewater/spent media, destruction and independently measured air. Capture is not destruction and non-air fates never become air residual. | independent fate measurements and assays |
| quality_identity | all inventory rows | Match state/type, native reference property/unit, metal/polymer/chemical/species, completed supplied state, provider/geography and elementary compartment. Add every actual unlisted transport service, copper tube, coil brazing alloy, core insulation/hardener, electronics/powder feeder, filled refrigerant, powder metal, test media, gas, waste or emission as a separately queried measured atomic row. Missing differs from zero; absence requires proof. | original supplier/BOM and disclosed identity gaps |
| quality_scope | reference product | Unobserved resistance seam/projection/butt, resistance/induction soldering, robotic and other electric joining variants need item-specific primary architecture. A replacement parts list never proves shipped accessories; optional cooler does not imply compressor or glycol; electric spray system with handheld gun remains reviewed whole-system scope. Examples do not imply universal recipe, alloy, operating lifetime or factory load. | primary configuration and semantic review |


## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_scope | Require actual electrical principal joining/hot-spray function and full supplied BOM. Reject one spare torch/core/robot, non-electrical apparatus or coated output as complete reference. Both languages use the same one-kg net reference and native numerator. | un-cpc3 |
| validate_interfaces | Reject duplicated bought-module manufacture, unpaired internal returns, assumed accessory/fill inclusion and customer lifetime operation presented as factory loads; retain actual attributable factory test rejects/rework. | fronius-inverter; telwin-resistance; hakko-spec; metco-equipment |
| validate_balances | Require own-stream element/water/solvent balances and measured post-control species concentration × matched flow/time/state plus independent fugitives. Reconcile utilities common-period imports/actual generation/exports/storage and assigned process loads; only unassigned residual shared services. Gross heat deducts independently measured return on same datum once; already-net heat never deducts twice. |  |
| validate_completeness | NOx as NO2-equivalent differs from molecular NO2; gross metal oxide/fume differs from contained elemental species and PM must not overlap constituent reporting. State20, wrong reference property/compartment and unqueried identities are unavailable. Report accepted input, performed/skipped checks, findings, missing evidence and completeness. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Declared electric joining/hot-spray apparatus manufacture and compatible downstream supplied scenario |
| excluded_use | Universal customer welding/spray recipes, lifetime/efficiency factors, unrelated non-electric/part/robot outputs without reviewed scope |
| required_metadata | All qualifiers; Qattr/Naccepted/Dnet and native units; actual BOM/makebuy/configuration/route/site/period/provider/transport/treatment; factory tests, allocation and gaps |
| required_quality_disclosure | Measured/estimated/missing, calibration/sampling/uncertainty and physical residuals, supplier/identity/classification gaps, performed/skipped checks/completeness |
| update_trigger | Principal function/architecture/BOM/grade/makebuy/provider/site/period or actual supplied/test scope changes |


## 11. Data Sources

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| un-cpc3 | official_guidance | Central Product Classification Version 3.0, 30 June 2025 | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Full electrical joining and electric hot-spray scope versus non-electrical apparatus and parts. |
| fronius-inverter | handbook | TransSteel 4000 Pulse and 5000 Pulse Operating instructions, undated HTML edition | https://manuals.fronius.com/html/4204260353/en-US.html | Inverter power source and optional wirefeeder, torch, cooling unit and leads; customer operation differs from factory tests. |
| telwin-resistance | handbook | MODULAR 20 TI, undated product document | https://www.telwin.com/intl/en/products/spot-welding-machines/823015-modular-20-ti | Electronic resistance spot-welding timing and arm/electrode supplied versus optional configurations. |
| hakko-spec | handbook | HAKKO FX-971 specifications, undated | https://www.hakko.com/english/products/detail.php?s_url=hakko_fx971_spec | Station and composite-heater iron architecture; separate station/iron measured masses exclude cord, so catalogue mass is not accepted complete configured Dnet. |
| hakko-solder | handbook | HAKKO FX-971 replacement parts, undated | https://www.hakko.com/english/products/hakko_fx971_parts.html | Compatible heater/iron and replaceable accessories; replacement list does not establish included shipment BOM. |
| ambrell-braze | handbook | Induction Brazing, published 2022-09-15, updated 2026-08-04 | https://www.ambrell.com/induction-heating-applications/brazing | Induction coil and electric joining of metals with filler, unlike flame route; examples are customer applications, not universal factory loads. |
| ambrell-cooling | handbook | Induction Cooling Systems, undated | https://www.ambrell.com/products/cooling-systems | Work coil/workhead/power cooling and isolated clean closed-loop water-air/water-water alternatives; no mandatory glycol or refrigerant. |
| metco-equipment | handbook | Thermal Spray Equipment Guide, BRO-0002.15, May 2022 | https://www.oerlikon.com/ecoma/files/BRO-0002_Equipment_Guide_EN.pdf?download=true | Electrical spray system controls, power, feeds, handling and peripheral components; separate combustion-based spray is counterevidence. |
| metco-arc | handbook | EcoArc 350 Electric Arc Wire Spray System, undated | https://www.oerlikon.com/metco/en/products-services/thermal-spray-equipment/system-platforms/electric-arc-wire/ecoarc-350-electric-arc-wire-spray-system/ | Electric/pneumatic push-pull wire-drive configuration and handheld gun within complete electric system; optional spool/decoiler. |
| metco-plasma | handbook | Plasma Spray Guns, undated | https://www.oerlikon.com/metco/en/products-services/thermal-spray-equipment/thermal-spray-components/spray-guns/plasma/ | Electric cathode/anode plasma source, powder injection and atmosphere alternatives; metal/carbide declared scope requires actual compatible spray feed. |
