---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.commercial-laundry-washing-and-drying-machinery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of configured commercial laundry washing and drying machinery

## 1. Scope and Applicability

Factory manufacture of a new complete water-based washer-extractor, electric heated vented tumble dryer, or factory-integrated stack of these functions. Each included functional module has a declared dry-linen rated capacity exceeding10kg on its specified fabric/programme/loading basis; capacities cannot be added to pass this criterion. A washer may be electrically heated or unheated, with actual inlet-water/heating interfaces declared. This deliberately narrower CPC44622 boundary excludes solvent dry-cleaning machines, gas/steam-heated machines, heat-pump dryers, tunnel washing lines, textile-fabric manufacturing/finishing machinery, modules rated10kg or less, separately delivered parts, remanufacture, customer laundry service, use-phase detergent/water/energy, service life and end of life. Other routes require explicit methodology expansion. Electrolux and Speed Queen2022 originals are historical configuration examples only. Manufacturing mass does not establish equal cleaning, drying or laundry-service performance.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.commercial-laundry-washing-and-drying-machinery |
| classification_refs | CPC 3.0 44622; narrower candidate scope; no accepted mapping asserted |
| covered_products | Configured water-based washer-extractors and electric vented tumble dryers; integrated stacks, each functional module exceeding10kg dry linen on its declared rating basis |
| excluded_products | Dry-cleaning solvent machines; gas/steam/heat-pump routes; small machines; tunnel lines; components; laundry service |
| representative_product | One configured complete machine with drum/tub, drive, suspension or rigid mounting as applicable, controls, water or exhaust interface and declared electric heating |
| production_route | Receipt/configuration control; actual sheet/drum fabrication and finish; bought-module assembly; actual model-specific factory testing; acceptance and optional protection |
| market_state | New complete accepted machine in declared drained/dried delivery state at factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture one declared complete commercial laundry-machine configuration |
| How much | 1 kg accepted net complete machine; one machine is represented by its actual measured M kg |
| How well | Meet the actual model-specific mechanical/drum alignment, electrical, control/interlock and water/leak or air/heating acceptance plan. Record actual limits/results; no universal cycle, leak threshold or temperature imposed |
| How long or cycle | One manufacturing delivery; no lifetime or customer laundry cycle imposed |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Laundry-type washing machines, each of a dry linen capacity exceeding 10 kg, dry-cleaning machines, drying machines for textile fabrics or articles, each of a dry linen capacity exceeding 10 kg `20cac093-29a5-4999-bcc8-8839b4ef8de9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/serial; complete configuration/BOM revision; individual functional-module dry-linen capacities and rating fabric/programme/fill basis; washer/dryer/stack completeness; drum/tub and water/exhaust interfaces; suspension/mounting; supply voltage and heating type; drive/blower/control inclusion; installed options; supplier subparts; acceptance plan/results; drained/dried delivery and retained lubricant state; measured net M; site/period/gates; packaging/transport-restraint/test-cloth/water/loose-spare exclusions |

Declare these qualifiers in dataset metadata or equivalent notes. Weigh the accepted complete machine, including installed controls/options and declared retained lubrication. Exclude test linen/water, shipping restraints, packaging and loose spares. A stack has one whole-unit M, not separate duplicate allocations of this mass to its two functions. Catalogue net/shipping masses and load capacities cannot replace actual measured M. A special fabric programme has its own load basis; do not treat an alternate wool/silk load as the general linen rating or combine model capacities.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `electricity_energy` | electricity_fabrication; electricity_finishing; electricity_assembly; electricity_factory_test | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain actual metered kWh; convert using1 kWh =3.6 MJ, matching voltage and source. A nameplate power or brochure operating cycle is not factory-test energy. |
| `solution_mass` | tap_water_finishing; tap_water_factory_test; sodium_carbonate_solution; spent_cleaning_solution; test_wastewater; grease | Mass | kg | Weigh the actual delivered formulation or solution. Volume records need actual density/temperature and evidenced conversion; do not double count constituents of purchased ready mixtures. |
| `water_resource_volume` | groundwater | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Meter actual freshwater well abstraction; keep resource volume distinct from purchased tap water and exported wastewater mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declared sheet stock, consumables and separately specified finished components received at the laundry-machine factory |
| starting_condition_role | Foreground inputs; separately link supplier production and incoming transport |
| product_classification_scope | Water-based washer-extractor/electric vented-dryer subset of CPC44622 |
| recursive_input_rule | Bought finished drums, tubs, frames and complete drive/control/blower modules replace local stock and their fabrication or included internals. A bought complete machine is supplier-gated input, not another assembly manufacture |
| upstream_dataset_requirement | Match actual grade/state, component completeness, electric/water interface, energy source, site/geography and supplier/transport/receiver gate |
| disclosure | This is a foreground manufacturing module, not complete cradle-to-gate. Disclose local/outsourced routes, shared utilities, packing and missing upstream/transport/treatment links |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | manufacturing | Include receipt inspection and actual sheet cutting/punching, drum perforating/forming, joining, interface machining, grinding/cleaning/finishing, mechanical/water/electrical integration, balancing/alignment, actual factory acceptance, attributable rejects/rework and protection. In-house casting, motor winding, heat treatment or polymer manufacture cannot be inferred from bought parts; an actual local route requires expanded atomic inputs/outputs. No universal stainless grade or coating route. |  |
| `boundary_bom` | inventory | Crosswalk each actual BOM item/operation to one atomic exchange or justified exclusion. Expand separately supplied shafts, pulleys, dampers, springs, door/glazing/seals, valves, pump, drains/hoses, lint filter, heating assembly, thermostat, sensors, electronics/wiring, insulation, fasteners and installed dispensing options where present. Do not duplicate purchased panel, blower or drive internals. Each actual design, alloy, chemical concentration and waste is separate; initial cards are not a complete universal BOM. |  |
| `boundary_test` | factory_test | Use actual model-specific inspection and acceptance records for drum balance/alignment, electrical/control/interlocks, water fill/leak/drain or dryer airflow/heating. A loaded washing/drying cycle is included only when actually performed. Record duration, load/fabric, inlet conditions, result, retests, water reuse/drain and electric meters; no prescribed full cycle, detergent dose or test-cloth replacement rate. Customer operating data do not supply factory quantities. | electrolux-lagoon-2022; speedqueen-stack-2022 |
| `boundary_semantic` | reference_product | Existing commercial warewashing PCR owns tableware, not textiles. Existing industrial fans/centrifuges PCR excludes clothes dryers and may describe separately bought blower components. Heat-pump equipment has a distinct delivered unit and this route excludes heat-pump dryers. Keep the old classification scaffold/id read-only; this semantic identity asserts no mapping acceptance. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Structural and drum fabrication | conditional | Actual local sheet cutting, forming, joining and machining | Foreground stage; internal WIP stays inside module | per 1 kg reference flow; collected per one accepted finished machine |
| `finishing` | Declared cleaning and finishing | conditional | Actual cleaning, grinding or coating route | Foreground stage; internal WIP stays inside module | per 1 kg reference flow; collected per one accepted finished machine |
| `assembly` | Configured laundry-machine integration | required | Each declared complete configuration | Foreground stage; internal WIP stays inside module | per 1 kg reference flow; collected per one accepted finished machine |
| `factory_test` | Factory testing and acceptance | required | Actual model-specific acceptance; wet/loaded tests only as performed | Foreground stage; internal WIP stays inside module | per 1 kg reference flow; collected per one accepted finished machine |
| `packout` | Dispatch protection | conditional | Actual dispatch protection | Foreground stage; internal WIP stays inside module | per 1 kg reference flow; collected per one accepted finished machine |

| Operation | Stage | Required actual route record |
| --- | --- | --- |
| Receipt/configuration | assembly | Grade, supplier completeness, part number and installed BOM |
| Drum/frame fabrication | fabrication | Cut/punch/form/join actual stock, machining allowance, procedure and consumables; bought parts replace this route |
| Cleaning/finish | finishing | One actual recipe/coating, grinding dust capture, internal recovery and export |
| Integration | assembly | Drum/tub/drive/suspension, water/drain or blower/heating, doors and controls; assembly/alignment and supplier exclusions |
| Acceptance | factory_test | Actual dry or wet/load test plan; electricity/water/load reuse, drain/dry state and complete net weighing |
| Dispatch | packout | Measured protection, excluded from machine M |

### Process: Structural and drum fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Cold-rolled304 stainless steel sheet (`stainless_sheet`)

Only if the actual local drum, tub, frame or cabinet route uses this single supplier-declared grade, thickness and delivery state. Weigh net issues/returns and retain certificate; purchased finished structure replaces its stock route. These grades are conditional designs, not manufacturer-wide requirements.

- Selected flow: Cold-rolled304 stainless steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Cold-rolled non-alloy steel sheet (`steel_sheet`)

Only if the actual local drum, tub, frame or cabinet route uses this single supplier-declared grade, thickness and delivery state. Weigh net issues/returns and retain certificate; purchased finished structure replaces its stock route. These grades are conditional designs, not manufacturer-wide requirements.

- Selected flow: Cold-rolled non-alloy steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Flat hot-dip-galvanized steel sheet (`galvanized_sheet`)

Only if the actual local drum, tub, frame or cabinet route uses this single supplier-declared grade, thickness and delivery state. Weigh net issues/returns and retain certificate; purchased finished structure replaces its stock route. These grades are conditional designs, not manufacturer-wide requirements.

- Selected flow: Flat hot-dip-galvanized steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Solid ER308L stainless steel welding wire (`weld_wire`)

Only for an actual certified ER308L solid-wire procedure. Weigh net issues and returns; keep different wire chemistries separate and do not impose a welding-consumption factor.

- Selected flow: Solid ER308L stainless steel welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Pure argon welding shielding gas (`argon`)

Only if an actual procedure uses pure argon. Weigh net supplied gas or explicitly convert measured volume with actual pressure/temperature and evidenced density. Separately purchased pure gases used for onsite blending need separate input rows and their own delivery records. A purchased shielding-gas premix needs one composition-specific supplied-mixture exchange with actual issue, return and delivery evidence; do not also record its contained constituents as pure-gas purchases. No compulsory gas route.

- Selected flow: Pure argon welding shielding gas
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

Meter actual stage including attributable rework. This identity is user-side grid-average AC below1kV; other voltage/source needs a distinct matching exchange.

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

###### Untreated clean non-alloy steel offcut (`steel_offcut`)

Weigh segregated offcuts exported from the declared sheet route without treatment. Internal stock reuse is not export; galvanized, stainless and contaminated material require separate rows.

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

###### Untreated clean304 stainless steel offcut (`stainless_offcut`)

Only for the actual declared304 route; weigh segregated clean exported offcuts, retaining alloy certificate and receiver. Narrow the public steel-offcut category to this single alloy; no nickel recovery credit or universal yield.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Untreated clean galvanized steel offcut (`galvanized_offcut`)

Only if the declared coated sheet route produces this segregated waste. Weigh total exported offcut mass and retain coating and contamination; metallic zinc content is not total scrap mass.

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

###### Collected dry stainless steel grinding dust (`collected_dust`)

Only actual collected dust exported to a receiver; retain alloy, abrasive contamination and dry state. Do not combine it with air release or clean sheet offcuts.

- Selected flow: Collected dry stainless steel grinding dust
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

###### Particulate emitted to air, size unspecified (`air_particulate`)

Only if actual post-control monitoring establishes particulate mass to air with unspecified particle size and air subcompartment. Retain concentration, exhaust volume and sampling basis; no mandatory release inferred from welding/grinding. Specific size fractions need distinct identities.

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

### Process: Declared cleaning and finishing (`finishing`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_finishing`)

Meter actual stage including attributable rework. This identity is user-side grid-average AC below1kV; other voltage/source needs a distinct matching exchange.

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

###### Dry powder paint (`powder_paint`)

Only actual cabinet/frame coating with one declared dry-powder formulation. Weigh net issue after returns/recovery and meter actual cure; this is not compulsory for stainless surfaces. Wet paint and other heating sources need their own exchanges.

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

###### Finished aluminium-oxide abrasive disc (`abrasive_disc`)

Only one actual specified grade/binder/design. Allocate measured replacement mass to the served orders using evidenced work records; raw alumina is not the finished disc.

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

###### Aqueous sodium-carbonate cleaning solution (`sodium_carbonate_solution`)

Only one actual supplier-declared aqueous formulation used for cleaning. Weigh purchased solution and retain concentration/basis, temperature and chemistry. Do not also count water/chemical already inside that purchased mixture. If prepared on site, replace with individual actual ingredients and their mixing record.

- Selected flow: Aqueous sodium-carbonate cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Supplied drinking-quality tap water (`tap_water_finishing`)

Only actual surface rinsing using supplied drinking-quality water. Weigh kg or retain actual density/temperature for conversion; purchased ready-mixed cleaner water is excluded.

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

##### Elementary flows

###### Abstracted renewable freshwater groundwater (`groundwater`)

Only if the factory actually abstracts renewable freshwater from its well for this route, evidenced by site aquifer/source records matching the public resource class. Meter m3 and record country/site; expand actual pumping/treatment. Do not count recirculation as new resource or the same water as tap supply.

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

###### Spent aluminium-oxide abrasive disc (`spent_disc`)

Weigh actual exported spent disc separately from captured dust; retain binder/abrasive/adherent alloy. Narrow the public polishing-media category to this one consumable design.

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

Weigh actual exported unrecovered overspray after internal recovery; retain formulation and receiver route. No default coating loss.

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

###### Spent aqueous sodium-carbonate steel-cleaning solution (`spent_cleaning_solution`)

Only actual contained spent cleaning solution exported to external treatment. Weigh solution mass and retain carbonate concentration, oil/metal contamination and receiver. Direct discharge requires individual measured elementary substances and receiving medium, not this waste export.

- Selected flow: Spent aqueous sodium-carbonate steel-cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

### Process: Configured laundry-machine integration (`assembly`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_assembly`)

Meter actual stage including attributable rework. This identity is user-side grid-average AC below1kV; other voltage/source needs a distinct matching exchange.

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

###### Finished304 stainless steel washer-extractor drum (`washer_drum`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished304 stainless steel washer-extractor drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished304 stainless steel washer outer tub (`outer_tub`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished304 stainless steel washer outer tub
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished galvanized steel tumble-dryer drum (`dryer_drum`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished galvanized steel tumble-dryer drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished welded steel laundry-machine frame (`frame`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished welded steel laundry-machine frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished cast-iron drive pulley (`pulley`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished cast-iron drive pulley
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel helical compression spring (`spring`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished steel helical compression spring
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished hydraulic suspension damper (`damper`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished hydraulic suspension damper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished water-inlet solenoid valve (`inlet_valve`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished water-inlet solenoid valve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: electrolux-lagoon-2022

###### Finished washer drain valve (`drain_valve`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished washer drain valve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: electrolux-lagoon-2022

###### Finished electric laundry drain pump (`drain_pump`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished electric laundry drain pump
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished stainless steel mesh lint filter (`lint_filter`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished stainless steel mesh lint filter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished wired laundry-machine control panel (`controller`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished wired laundry-machine control panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished tempered-glass washer door pane (`washer_glass`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished tempered-glass washer door pane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished tempered-glass dryer door pane (`dryer_glass`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished tempered-glass dryer door pane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished EPDM rubber washer door gasket (`door_gasket`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished EPDM rubber washer door gasket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished insulated copper power cable (`cable`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished insulated copper power cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel hexagon-head bolt (`bolt`)

Only for the actual function/design present in the declared washer, dryer or integrated stack. Record one part number, material grade, dimensions, measured delivered mass, installed count and included subparts. Purchased drum/frame replaces its local stock/fabrication; hydraulic suspension, valve or pump is conditional on actual design. Keep different designs separate and do not duplicate internals of bought assemblies.

- Selected flow: Finished steel hexagon-head bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished washer drum induction motor (`washer_motor`)

Only for one separately supplied actual three-phase induction motor design; weigh kg and record voltage, output, mounting, cooling and supplier completeness. The public purchased washing-module motor identity is broader; its expert estimate is not adopted as an amount. Exclude motors included inside a bought blower/drum module.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: speedqueen-stack-2022

###### Finished dryer drum induction motor (`dryer_motor`)

Only for one separately supplied actual three-phase induction motor design; weigh kg and record voltage, output, mounting, cooling and supplier completeness. The public purchased washing-module motor identity is broader; its expert estimate is not adopted as an amount. Exclude motors included inside a bought blower/drum module.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: speedqueen-stack-2022

###### Finished motor variable-frequency drive (`vfd`)

Only one actual separately supplied complete drive with enclosure/heat sink and declared supply voltage not exceeding1000V, matching the public class. Weigh delivered mass and exclude electronics inside the control-panel supply. Public expert-judgement context supports identity only, not a primary factory quantity.

- Selected flow: Variable frequency drive `c14b641c-8fbe-40c4-843b-3cc9b0faeff3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel ball bearing (`ball_bearing`)

One actual separately supplied ball-bearing design; retain dimensions, lubrication and kg mass. Narrow the public ball/roller category to this design and exclude bearings already inside purchased motor or drum modules.

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

###### Finished vulcanized-rubber V-belt (`v_belt`)

Only one actual vulcanized-rubber drive-belt profile/length/reinforcement design. Weigh delivered mass and narrow the public belt category to this product; no conveyor service or raw rubber.

- Selected flow: Conveyor or transmission belts or belting, of vulcanized rubber `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished non-carbon tubular washer heating resistor (`washer_heater`)

Only if this actual electric-heating design uses one finished metal-sheathed non-carbon tubular resistor. Record rated supply/power, resistance element, sheath, included thermostat exclusions, design and mass; another heating principle requires its own boundary/rows. Rating is not an amount or mass factor.

- Selected flow: Electric heating resistors, except of carbon `991da6ee-1a8a-4e77-8f9c-c50615e255e7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: electrolux-lagoon-2022

###### Finished non-carbon tubular dryer heating resistor (`dryer_heater`)

Only if this actual electric-heating design uses one finished metal-sheathed non-carbon tubular resistor. Record rated supply/power, resistance element, sheath, included thermostat exclusions, design and mass; another heating principle requires its own boundary/rows. Rating is not an amount or mass factor.

- Selected flow: Electric heating resistors, except of carbon `991da6ee-1a8a-4e77-8f9c-c50615e255e7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: electrolux-lagoon-2022

###### Finished motor-driven non-domestic centrifugal air blower (`dryer_blower`)

Only the actual separately supplied complete blower including its declared motor. Record airflow/pressure as configuration, installed design and mass; exclude duplicate blower motor/impeller issues. Narrow the public fan category to this blower, not the complete clothes dryer.

- Selected flow: Fans, except domestic type, centrifuges, except cream separators and clothes dryers `a48b3c52-704f-4843-9325-a30168349fe5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: speedqueen-stack-2022

###### Lithium-soap mineral-oil lubricating grease (`grease`)

Only the actual declared formulation added at factory. Weigh net issues/returns and exclude supplier-prelubricated bearing fill from another issue. No operating-lifetime lubricant or universal first-fill amount.

- Selected flow: Lithium-soap mineral-oil lubricating grease
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

### Process: Factory testing and acceptance (`factory_test`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_factory_test`)

Meter actual stage including attributable rework. This identity is user-side grid-average AC below1kV; other voltage/source needs a distinct matching exchange.

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

###### Supplied drinking-quality tap water (`tap_water_factory_test`)

Only actual factory hydraulic leak/function tests or wet-load preparation. Meter net fresh supply after reuse and retain density/temperature for mass conversion; customer wash-cycle water is outside.

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

###### Finished reusable plain-woven cotton factory-test cloth (`test_cloth`)

Only when an actual loaded acceptance test uses this specific dry cotton cloth. Track measured dry mass, reuse and replacement across served orders; allocate actual consumable replacement, not the full reusable load per machine. Wetting water is separate and test cloth is excluded from delivered M.

- Selected flow: Finished reusable plain-woven cotton factory-test cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_test_load.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_test_load`
- Sources:

#### Outputs

##### Product flows

###### Accepted complete configured commercial laundry machine (`finished_machine`)

Reference output after actual model-specific mechanical, electrical, water/leak or airflow/heating and control/interlock acceptance. One declared washer-extractor, electric vented dryer or integrated stack; every included laundry module exceeds10kg dry linen capacity on its declared rating basis. Weigh drained/dried delivered state with installed controls/options; exclude test cloth, transport fixtures, packaging, loose detergent and spares. The public category is narrowed to this water-based/electric route.

- Selected flow: Laundry-type washing machines, each of a dry linen capacity exceeding 10 kg, dry-cleaning machines, drying machines for textile fabrics or articles, each of a dry linen capacity exceeding 10 kg `20cac093-29a5-4999-bcc8-8839b4ef8de9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_mass`
- Sources: electrolux-lagoon-2022; speedqueen-stack-2022

##### Waste flows

###### Contained water from laundry-machine factory leak testing (`test_wastewater`)

Only actual drained test water exported to treatment, with measured solution mass and recorded contamination. Internal reuse is not export. A detergent-loaded test or direct discharge needs its own separate composition/species and boundary; no customer laundry wastewater.

- Selected flow: Contained water from laundry-machine factory leak testing
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

###### Water vapour emitted to air during factory dryer testing (`air_water`)

Only actual electric vented-dryer wet-load testing with measured incremental water vapour to air, unspecified subcompartment. Use inlet/outlet humidity and dry-air flow on the same interval or an evidenced wet-load water balance including drains/condensate/retention. Exclude inlet background moisture and avoid double counting tap input. No operating-cycle evaporation factor or mandatory wet test.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission`
- Sources:

### Process: Dispatch protection (`packout`)

#### Inputs

##### Product flows

###### C-flute corrugated cardboard (`cardboard`)

Only actual C-flute dispatch protection with recycled fibre and at least80% fibre. Weigh net issue and exclude from M; different specifications need separate rows.

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

###### LDPE protective foil (`ldpe_film`)

Only actual non-cellular, non-adhesive, unreinforced LDPE protection. Weigh kg and retain grade; packaging is outside M, without assumed fossil origin or recycled fraction.

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

###### Finished wooden dispatch pallet (`wood_pallet`)

Only one actual finished wooden pallet design, including its supplied fasteners. Record species, moisture/treatment, actual net delivered mass and reuse attribution. Narrow the broad public pallet category to this one product; exclude from M and do not assume a standard pallet weight or single use.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
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

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_separate` | shared_operations | Separate metered batches and designs first. Attribute shared cutting, finishing, assembly and tests using measured operation time/load or net material issues with evidenced causal drivers; reconcile to the shared total including idle and rework. Do not use blanket equal-per-machine or sales-value allocation without an evidenced relationship and sensitivity. |  |
| `allocation_reuse` | test_cloth_and_water | Reusable cotton test loads are factory tools, not delivered mass or one full load consumed per machine. Attribute measured replacement to actually served orders using documented reuse records. Recycled test water is internal circulation; count only actual make-up input and exported drain. A stack is one declared whole product; do not split/double its M by function. |  |
| `allocation_rejects` | manufacturing_batch | Retain rejected units, rework, retests, WIP changes and recovered stock in the same period/configuration balance. Normalize attributable burden to accepted complete machines. Exported scrap/waste leaves at its recorded receiver gate without automatic avoided-primary-material credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_configuration | assembly; factory_test | configured machine | configuration/BOM crosswalk | model; functional modules; individual capacity/fabric/fill basis; heating/water/exhaust; BOM; supplier internals; actual route; acceptance; rejects/WIP | Reconcile the actual installed design and make-or-buy for every item and operation. Retain each module rating basis and one whole-unit acceptance/M for stacks. Capacity, power and catalogue weight are configuration only, not manufacturing exchange factors. | kg | each configuration and revision | same declared production period; gaps disclosed | declared manufacturing site | one configured build record per accepted machine | BOM; supplier inclusion; drawings; rating and acceptance records |
| cp_mass | factory_test | reference product | calibrated net machine weighing | model; configuration; serial; accepted net mass M; drained/dried state; retained lubricant; exclusions; accepted count | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted configuration and representative units | same declared production period; gaps disclosed | declared manufacturing site | accepted net mass per machine | scale calibration; net weigh ticket; configuration; acceptance |
| cp_material | fabrication; finishing; assembly; factory_test; packout | single delivered material | issue/return and inventory balance | single grade/formulation/state; net issues/returns; recovery; density/temperature; served orders; accepted count | Weigh net attributable stock, wire, gas, abrasive, coating, cleaner, lubricant, tap water or specified protection individually. Keep each alloy and supplied mixture separate; retain actual density/temperature for volume conversion and exclude supplier-included fills. Purchased ready mixture is not counted again by ingredients. No dilution, yield or standard-water factor. | kg | each issue and reconciled batch | same declared production period; gaps disclosed | declared manufacturing site | attributable net material mass / accepted machines of the same configuration | scale; issue ledger; SDS; composition and concentration; density |
| cp_parts | assembly | single finished component | receipt weighing and installed build list | one part design; supplier completeness; count; delivered mass; installed quantity; accepted count | Measure the delivered mass or verify actual lot-specific count-to-mass records for each design. Reconcile drums/tubs, drives, suspension, valves, heaters/blower, doors and controls. A purchased complete blower includes its declared motor; exclude panel/drive/heater internals already included. No capacity, power, airflow or catalogue-machine-weight component factor. | kg | each supplied lot and build batch | same declared production period; gaps disclosed | declared manufacturing site | attributable installed component mass / accepted machines of the same configuration | scale; supplier inclusion; actual part BOM and lot mass |
| cp_energy | fabrication; finishing; assembly; factory_test | electricity | meter and causal-driver ledger | stage; source/voltage; metered kWh; interval; measured shared total; driver; idle/retest; accepted count | Meter actual operations including actual washer heating, dryer heater/blower and wet-load tests only as performed. Convert1 kWh =3.6 MJ. Attribute measured shared totals by actual causal load/time records and reconcile idle/rework/rejects. Manufacturer operating energy is not factory-test consumption; rated power times invented hours is prohibited. | MJ | each actual stage interval and batch | same declared production period; gaps disclosed | declared manufacturing site | attributable electrical energy / accepted machines of the same configuration | meter calibration; bills; stage/driver and acceptance records |
| cp_waste | fabrication; finishing; factory_test | individual exported waste | segregated weighing and receiver receipts | single waste; alloy/composition; wet/dry; contamination; exported mass; recovery; receiver/treatment; accepted count | Weigh actual segregated exports and reconcile internal recovery and WIP. Keep non-alloy/galvanized/stainless offcuts, captured dust, spent discs, powder overspray, cleaner solution and leak-test water separate. Retain actual solution concentration and receiver gate. Reused water is not export; discharge after treatment requires individual measured elementary species/medium and its own boundary. | kg | each export and reconciled batch | same declared production period; gaps disclosed | declared manufacturing site | attributable exported waste mass / accepted machines of the same configuration | scale; composition; treatment/receiver receipts |
| cp_emission | fabrication; factory_test | single air substance | post-control monitoring or water balance | substance; medium/submedium; size; concentration; flow; interval; humidity/temperature/pressure; background; wet/dry cloth; water in/drain/condensate/retention; accepted count | For actual particulate releases, pair post-control concentration and air volume with sampling/size evidence. For actual wet dryer tests, establish incremental water vapour from paired inlet/outlet humidity and dry-air flow, or an evidenced load-water balance including drains/condensate/retention. Retain conversion and uncertainty; exclude inlet moisture and captured solids. No assumed emission, mandatory wet test or operating evaporation factor. | kg | representative actual emitting/test intervals | same declared production period; gaps disclosed | declared manufacturing site | attributable measured substance mass / accepted machines of the same configuration | monitoring; sampling; humidity/flow or full water balance |
| cp_water_resource | finishing; factory_test | groundwater | well volume meter and site record | freshwater source; well/site/country; m3; interval; stage use; reuse; accepted count | Meter actual freshwater groundwater abstraction at the declared factory; reconcile actual use and keep pumping/treatment as separate inputs. Internal circulation is not abstraction and the same resource cannot also be a tap-water purchase. | m3 | each metered interval and batch | same declared production period; gaps disclosed | declared manufacturing site | attributable abstracted water volume / accepted machines of the same configuration | meter; source/site; stage water balance |
| cp_test_load | factory_test | specific dry cotton test cloth | reuse/replacement ledger and weighing | cotton cloth design; dry mass; wet-load states; reuse; replaced mass; served test orders; accepted count | Measure actual replacement of the specified reusable dry cotton cloth and allocate to served orders using actual reuse records. Track wet-load water separately. Do not count a full reusable load as consumed per unit, do not include cloth in M, and do not infer replacement from rated dry-linen capacity. | kg | each actual loaded-test/replacement period | same declared production period; gaps disclosed | declared manufacturing site | attributable replacement cloth mass / accepted machines of the same configuration | dry weighing; cloth identity; reuse and served-order ledger |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_configuration` | all inventory rows | Use the same configuration, period and accepted count for positive measured M and exchange numerators. Verify every module rating basis, stack completeness, supplier subparts and make-or-buy. Reconcile actual stock, retained lubricant, water/test-cloth reuse, drain, rejects/retests and WIP; retain uncertainty. | cp_configuration; cp_mass; cp_parts; cp_material; cp_test_load |
| `quality_coverage` | inventory_and_links | Disclose missing BOM/route items, UUIDs, measurements and supplier/transport/treatment links. Actual route evidence establishes optional stages and exclusions. No universal alloy, mass, capacity-to-mass, manufacturing yield, test cycle, lifetime or emission factor. | cp_configuration; cp_energy; cp_waste; cp_emission; cp_water_resource |
| `quality_sources` | design_evidence | Electrolux2022.10.07 and Speed Queen AO22-0021©2022 are historical manufacturer examples. General/special-fabric capacities, alternative heating interfaces, operating quantities and net/shipping weights vary by model and condition; none supplies factory quantities, measured M, material grade, lifespan or universally mandatory operations. Verify actual design and foreground data. | electrolux-lagoon-2022; speedqueen-stack-2022 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Require each included functional module dry-linen rating above10kg on its declared basis and one positive measured complete-machine M with actual installed options/retained lubrication. Stack mass is counted once. Reference output is1kg; all other rows explicitly normalize kg, MJ or m3 numerators using normalize_mass. |  |
| `validation_bom` | inventory | Check actual drum/tub/frame, drive/suspension, water/drain or air/heating circuit, doors/controls and all installed options against the configured BOM. Verify purchased internals, local/outsourced routes, test reuse/drain, rejects/retests and receiver gates. Expand initial cards for actual completeness before any full boundary claim. |  |
| `validation_identity` | all inventory rows | Check public type, delivery grade/concentration/state/completeness, route/geography, actual reference property/unit group and official localized names. Groundwater resource is not purchased water or wastewater; contained exported solution is not direct environmental discharge; immediate unspecified-air water vapour is not long-term air or liquid water. Energy/area cannot identify total component mass. |  |
| `validation_claims` | dataset_claims | No complete cradle-to-gate claim without actual route and linked supplier/transport/treatment coverage. Manufacturing mass cannot establish laundry-service equivalence, energy efficiency, life, regulatory conformity or methodology approval. Independent scientific review remains required. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured foreground commercial laundry-machine manufacturing module; heading does not assert publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same complete configuration manufacturing scaled by measured M with separately declared upstream/transport/treatment links |
| excluded_use | Customer laundry service, textile output, use-phase water/detergent/energy, lifetime, dry-cleaning/gas/steam/heat-pump routes or methodology approval |
| required_metadata | All reference qualifiers; each module rating basis; complete BOM/options; supply completeness and make-or-buy; actual M and drained/dried state; stack whole-unit boundary; acceptance/test plan; site/period/gates; actual exchanges, allocation, reuse/drain and linked suppliers/receivers |
| required_quality_disclosure | Missing identities/measurements/links, route coverage, uncertainty, causal allocation, actual rejects/retests, historical-source limitations |
| update_trigger | Module/configuration/capacity-rating basis, heating/ventilation or water circuit, drive/suspension/control, supplier completeness, material recipe, make-or-buy, acceptance/test plan, site/period, reuse or allocation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| electrolux-lagoon-2022 | handbook | Electrolux Professional, PROFESSIONAL LAUNDRY lagoon Advanced Care WH6-14LAG and TD6-14LAC, Art.No.438913913EN/2022.10.07; physical unnumbered pp.2–4, edition footer p.8. https://tools.electroluxprofessional.com/Mirror/Doc/ELS/PDS/PS_438913913EN_Lagoon%20concept_TD6-14%20and%20WH6-14_EN.pdf | Historical dry-linen capacity/fabric/fill bases and alternative heating, water/drain and exhaust interfaces; electric route selected, alternatives excluded. No operation quantities, catalogue net mass, universal grade or factory test factor adopted. |
| speedqueen-stack-2022 | handbook | Alliance Laundry Systems, SPEED QUEEN ON-PREMISES LAUNDRY SOLUTIONS Stacked Washer-Extractor/Tumble Dryers, AO22-0021©2022; physical unnumbered p.2. https://distribution.alliancelaundry.com/wp-content/uploads/2023/08/DL_AO22-0021_SpecSheet_SWXTD_en-US.pdf | Historical integrated-stack configuration, separate function capacities/motors, washer water/drain and dryer exhaust, model-specific electric/gas alternatives and whole-unit net/shipping distinction. No numeric weight/capacity conversion, full electric model range, material composition, test consumption or warranty-to-life adopted. |
