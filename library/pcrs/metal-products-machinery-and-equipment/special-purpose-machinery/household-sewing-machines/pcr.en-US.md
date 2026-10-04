---
status: candidate
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.household-sewing-machines
language: en-US
sync_with: pcr.zh-CN.md
---

# Household sewing machines

## 1. Scope and Applicability

This candidate methodology produces configuration-specific foreground manufacturing data for household sewing machines delivered at the factory gate. It includes electric mechanical/electronic and non-electric manual/treadle variants, domestic sewing/embroidery combinations and domestic overlock machines where principal function and manufacturer design support household identity. Sources establish equipment configuration rather than factory recipes or numerical ranges. No default weight, yield, operating-to-manufacturing energy conversion or lifetime is prescribed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.household-sewing-machines |
| classification_refs | CPC 3.0 44814 |
| covered_products | Household complete machine configurations; manually powered heads may require disclosed external drive |
| excluded_products | Industrial sewing/embroidery machines; book-sewing machines; separately sold furniture, parts and needles; garments and sewing services |
| representative_product | Declared accepted household sewing-machine configuration; no single model represents all routes |
| production_route | Actual make/buy frame, housing, stitch mechanism and drive/control; finishing, assembly, factory tests and packing |
| market_state | Accepted manufactured machine at plant; supplied accessories and deferred installation declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply household stitch-forming equipment, with actual sewing, embroidery or overlock capability |
| How much | 1 kg of accepted net supplied machine configuration |
| How well | Pass documented factory stitch/feed checks and applicable electric safety acceptance; declare speed, stitch and configuration |
| How long or cycle | One manufacturing and acceptance period; no service lifetime or garment-output equivalence |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Household sewing machines `633bed4f-5fd3-4590-b645-8d8daeedaa00` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; configuration/BOM; household principal function; mechanical/electronic/manual drive; embroidery/overlock capability; supplied head/table/pedal/case/accessories; actual material grades; make/buy states; performed routes; test recipe; calibrated net mass; accepted N and D; site and period; utility supply voltage/geography; upstream/treatment links; uncertainty |

Declare all required qualifiers in the foreground data package. Kilograms normalize manufacturing inventory; they do not make domestic lockstitch, embroidery, overlock and treadle functionality interchangeable.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| energy_basis | electricity and heat | Energy | MJ | Preserve raw kWh and 1 kWh = 3.6 MJ; preserve actual purchased-heat delivery Energy MJ and own supply/return enthalpy convention. Never convert operating watts to factory manufacturing energy. |
| physical_basis | physical material/species records | Mass | kg | For each metal/species balance preserve input, accepted product, scrap, slag, sludge, wastewater, release and stock masses with EACH term own matched assay and wet/dry basis. Add actual reaction creation/consumption; paired internal returns cancel. Gross compound mass never equals contained metal or solvent. Volumetric conversion uses each stream own measured density at its conditions. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| factory_gate | foreground | Include receipt, actual component manufacture, finishing, assembly, adjustment, acceptance tests, rework, rejects, site utilities and packing through accepted release. Manufacturing gate does not include later sewing services. |  |
| household_identity | category | Cover household mechanical, electronic, non-electric hand/treadle, sewing/embroidery combination and domestic overlock machines according to actual principal function and manufacturer household design. Industrial machines remain outside this PCR regardless of home installation; do not impose an invented stitch-speed threshold. | janome-712t; singer-4423; brother-se725; brother-1034d; juki-ddl8700 |
| supplied_configuration | reference_product | Declare actual supplied head, power interface, pedal, hoop, feet, durable case, first-fill and integrated table. A required externally owned treadle table is not automatically supplied product. Separately sold furniture, spare needles, repair parts and industrial embroidery machinery are excluded outputs. | janome-712t; brother-se725; brother-1034d |
| make_buy | upstream | Keep exact BOM make/buy and processing-state matrix. Bought finished motor, board, frame, gears, needle, foot and hook/looper modules carry upstream manufacture once; exclude duplicate embedded wire, resin, casting and machining. In-house alternatives require raw materials and actual process inventory. Cancel paired internal transfers; purchased same-category head keeps supplier history once without recursive expansion. |  |
| conditional_routes | actual_design | Cast aluminum, cast iron, stamped steel and polymer housing are design-specific alternatives; retain exact alloy grade, supplied finish and molding recipe. Neither metal-frame advertising nor classification establishes alloy, onsite foundry, winding, electronics fabrication or coating chemistry. not_applicable means evidenced absence; missing record is unknown, never zero. Add every actually used atomic material, utility, chemical, waste and emission beyond these conditional anchors. | singer-4423 |
| test_scope | test | Record actual factory test cycles, metered electricity, exact thread/fabric issued minus documented reusable returns, trim waste, rejected machines and all rework. Test textiles are not delivered garments and never enter machine net mass denominator. Operating nameplate watts, customer stitch demand and advertised life cannot establish manufacturing energy or factory consumption. |  |
| life_cycle_links | dataset | Primary factory inventory requires separate links for actual upstream supply, freight and external waste treatment before complete cradle-to-gate use; declare missing providers. Consumer electricity, garments, maintenance and end of life are downstream scenarios, not this reference output. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual delivered materials and completed supplier components of specified machine configuration |
| starting_condition_role | Supplier-state start of primary foreground manufacture |
| product_classification_scope | Reviewed household stitch-forming equipment; industrial scope separate |
| recursive_input_rule | Bought same-category head retains upstream state once; model only subsequent work and cancel internal paired transfers |
| upstream_dataset_requirement | Match actual component processing state, grade, polymer formulation, electricity voltage, supply geography and period, heat return convention, transport and waste-treatment provider; disclose substitutions and incomplete linkage. No product source establishes a provider. |
| disclosure | Configuration, supplied/external drive and furniture, actual route, make/buy, test consumption, missing UUID/providers, scope and uncertainty |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| frame | Frame and bed manufacture | conditional | Actual in-house casting, sheet forming or machining; purchased finished frame bypasses embedded manufacture | Foreground factory records | per 1 kg reference flow |
| housing | Polymer housing molding | conditional | Only actual site molding of specified polymer; bought housing uses supplier-state dataset | Foreground factory records | per 1 kg reference flow |
| mechanism | Stitch formation and feed mechanism preparation | conditional | Only site-made shafts, gears, needle bars, hooks or loopers; bought finished modules bypass prior fabrication | Foreground factory records | per 1 kg reference flow |
| drive | Motor and control manufacture | conditional | Electric variant only; winding, board assembly and soldering only when performed on site | Foreground factory records | per 1 kg reference flow |
| finish | Cleaning and surface finishing | conditional | Activate actual bath, paint, powder coating or plating chemistry; no assumed finish | Foreground factory records | per 1 kg reference flow |
| assembly | Configuration-specific assembly | required | Every machine; include only actual supplied drive, stitch, embroidery or overlock parts | Foreground factory records | per 1 kg reference flow |
| test | Factory adjustment and acceptance sewing tests | required | Every machine; actual stitch/feed checks and electric safety checks where applicable | Foreground factory records | per 1 kg reference flow |
| services | Residual shared factory services | conditional | Only site-period consumption unassigned to other process cards | Foreground factory records | per 1 kg reference flow |
| dispatch | Packing and accepted factory-gate release | required | Every accepted supplied configuration; packaging separate from net product mass | Foreground factory records | per 1 kg reference flow |

### Process: Frame and bed manufacture (`frame`)

#### Inputs

##### Product flows

###### Aluminum casting-alloy ingot (`al_charge`)

Only actual in-house aluminum casting; record exact alloy grade, charge and returns.

- Selected flow: Aluminum casting-alloy ingot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Cast-iron foundry pig iron (`iron_charge`)

Only actual iron casting; measured composition, additives and foundry route required.

- Selected flow: Cast-iron foundry pig iron
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Carbon-steel sheet (`steel_sheet`)

Only site-stamped frame or bed; exact grade, thickness and supplied finish.

- Selected flow: Carbon-steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Stainless-steel sheet for bedplate (`stainless_bed`)

Only site-made stainless bedplate; exact grade and finish.

- Selected flow: Stainless-steel sheet for bedplate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `singer-4423`

###### Water-miscible machining coolant concentrate (`coolant`)

Only actual machining; exact formulation and dilution.

- Selected flow: Water-miscible machining coolant concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Alternating current (`frame_electricity`)

Only actual <1 kV user-side consumption assigned to this process; residual services only unassigned remainder.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Aluminum-alloy machining scrap (`al_scrap`)

External scrap only; subtract paired internal returns from external exchanges.

- Selected flow: Aluminum-alloy machining scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Iron-casting slag (`iron_slag`)

Only actual casting discharge; own assay and moisture.

- Selected flow: Iron-casting slag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Carbon-steel stamping offcut (`steel_scrap`)

Only offcuts crossing factory gate.

- Selected flow: Carbon-steel stamping offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

### Process: Polymer housing molding (`housing`)

#### Inputs

##### Product flows

###### Acrylonitrile-butadiene-styrene molding compound (`abs`)

Only actual ABS housing grade; additives included in supplied compound once.

- Selected flow: Acrylonitrile-butadiene-styrene molding compound
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Polypropylene molding compound (`pp`)

Only actual PP design; not simultaneous substitute for ABS part.

- Selected flow: Polypropylene molding compound
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Alternating current (`housing_electricity`)

Only actual <1 kV user-side consumption assigned to this process; residual services only unassigned remainder.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### ABS molding sprue waste (`polymer_scrap`)

Only external ABS sprues; internal regrind tracked as paired transfer.

- Selected flow: ABS molding sprue waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

### Process: Stitch formation and feed mechanism preparation (`mechanism`)

#### Inputs

##### Product flows

###### Alloy-steel round bar (`shaft_stock`)

Only site machining of actual shaft or needle bar; match exact grade.

- Selected flow: Alloy-steel round bar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Polyoxymethylene gear molding compound (`pom`)

Only actual molded POM gear; complete bought gear excludes this input.

- Selected flow: Polyoxymethylene gear molding compound
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Heat-treatment quenching oil (`heat_oil`)

Only actual site heat treatment; measured makeup, losses and waste.

- Selected flow: Heat-treatment quenching oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Alternating current (`mechanism_electricity`)

Only actual <1 kV user-side consumption assigned to this process; residual services only unassigned remainder.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Oil-contaminated alloy-steel swarf (`oily_swarf`)

Separate metal content, oil content and water.

- Selected flow: Oil-contaminated alloy-steel swarf
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

### Process: Motor and control manufacture (`drive`)

#### Inputs

##### Product flows

###### Enameled copper winding wire (`copper_wire`)

Only actual site motor winding; exact wire insulation and copper assay.

- Selected flow: Enameled copper winding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Electrical-steel motor lamination (`motor_core`)

Only actual site-built motor, specified supplied lamination.

- Selected flow: Electrical-steel motor lamination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Bare printed circuit board (`bare_board`)

Only site electronics assembly; assembled bought board excludes embedded fabrication.

- Selected flow: Bare printed circuit board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Tin-silver-copper solder (`solder`)

Only actual lead-free solder formulation used on site.

- Selected flow: Tin-silver-copper solder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Rosin soldering flux (`flux`)

Only actual rosin flux recipe; collect solvent content separately by species.

- Selected flow: Rosin soldering flux
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Alternating current (`drive_electricity`)

Only actual <1 kV user-side consumption assigned to this process; residual services only unassigned remainder.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Rejected assembled control board (`electronic_waste`)

Only boards leaving site for treatment; rework retained within burden.

- Selected flow: Rejected assembled control board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

### Process: Cleaning and surface finishing (`finish`)

#### Inputs

##### Product flows

###### Deionized cleaning water (`water`)

Only actual aqueous cleaning or bath preparation.

- Selected flow: Deionized cleaning water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources:

###### Sodium carbonate cleaning agent (`alkali`)

Only actual alkaline recipe; distinguish formulated solution and active solute.

- Selected flow: Sodium carbonate cleaning agent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Polyester coating powder (`powder`)

Only actual powder coating formulation; recovered powder is internal transfer.

- Selected flow: Polyester coating powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Alkyd coating paint (`paint`)

Only actual wet-paint recipe; own solvent composition and dry solids.

- Selected flow: Alkyd coating paint
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Isopropyl alcohol cleaning solvent (`ipa`)

Only actual IPA cleaning; distinguish virgin makeup, reuse and recovery.

- Selected flow: Isopropyl alcohol cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Alternating current (`finish_electricity`)

Only actual <1 kV user-side consumption assigned to this process; residual services only unassigned remainder.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Metal-bearing cleaning wastewater (`wastewater`)

Actual discharged effluent; each metal species concentration separately.

- Selected flow: Metal-bearing cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources:

###### Metal-bearing surface-treatment sludge (`sludge`)

Actual wet sludge; own solids, water and metal assays.

- Selected flow: Metal-bearing surface-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent isopropyl alcohol solvent (`spent_solvent`)

Actual external solvent waste; composition and disposal route.

- Selected flow: Spent isopropyl alcohol solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Isopropyl alcohol, air (`ipa_air`)

Only species-specific measured release to stated air compartment; capture is not destruction.

- Selected flow: Isopropyl alcohol, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Configuration-specific assembly (`assembly`)

#### Inputs

##### Product flows

###### Finished sewing-machine frame (`bought_frame`)

Actual bought frame; no parallel charge of embedded raw metal/casting.

- Selected flow: Finished sewing-machine frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `singer-4423`

###### Finished sewing-machine polymer housing (`bought_housing`)

Actual bought housing; do not also charge molding compound.

- Selected flow: Finished sewing-machine polymer housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete sewing-machine electric motor (`bought_motor`)

Electric design with bought motor; excludes duplicate wire/core manufacture.

- Selected flow: Complete sewing-machine electric motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `singer-4423`

###### Assembled sewing-machine control board (`bought_control`)

Electronic design with bought board; excludes duplicate bare board/solder.

- Selected flow: Assembled sewing-machine control board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Sewing-machine electric foot controller (`foot_control`)

Only actual supplied electric foot controller.

- Selected flow: Sewing-machine electric foot controller
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `brother-1034d`

###### Finished sewing-machine drive gear (`gear`)

Only bought gear of actual metal/polymer grade.

- Selected flow: Finished sewing-machine drive gear
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Finished sewing-machine needle (`needle`)

Installed and actually supplied accessory needles.

- Selected flow: Finished sewing-machine needle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Finished sewing-machine presser foot (`presser`)

Each actual foot model separate within configuration BOM.

- Selected flow: Finished sewing-machine presser foot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete sewing-machine rotary hook (`hook`)

Only hook-based stitch mechanism; not assumed for looper machine.

- Selected flow: Complete sewing-machine rotary hook
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `janome-712t`

###### Finished overlock looper (`looper`)

Only domestic overlock mechanism.

- Selected flow: Finished overlock looper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `brother-1034d`

###### Finished overlock trimming knife (`knife`)

Only actual overlock trimming mechanism.

- Selected flow: Finished overlock trimming knife
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `brother-1034d`

###### Sewing-machine embroidery positioning module (`embroidery`)

Only actual domestic embroidery-combination or dedicated domestic embroidery configuration.

- Selected flow: Sewing-machine embroidery positioning module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `brother-se725`

###### Sewing-machine embroidery hoop (`hoop`)

Only actual supplied hoop; optional unsupplied hoop excluded.

- Selected flow: Sewing-machine embroidery hoop
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `brother-se725`

###### Sewing-machine treadle drive assembly (`treadle`)

Only actually supplied manual/treadle drive; external consumer table is not assumed supplied.

- Selected flow: Sewing-machine treadle drive assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `janome-712t`

###### Sewing-machine table cabinet (`table`)

Only actual integrated supplied machine configuration, excluding separately sold furniture.

- Selected flow: Sewing-machine table cabinet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `janome-712t`

###### Reusable sewing-machine protective case (`case`)

Only supplied durable accessory case; transport packaging mass excluded from product denominator.

- Selected flow: Reusable sewing-machine protective case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Sewing-machine lubricating oil (`lubricant`)

Actual factory lubrication or supplied first-fill; no lifetime oil demand.

- Selected flow: Sewing-machine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Finished sewing-machine bobbin (`bobbin`)

Actual installed or supplied accessory bobbin; declare material and quantity.

- Selected flow: Finished sewing-machine bobbin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `brother-se725`

###### Polyester sewing thread supplied with machine (`supplied_thread`)

Only actual supplied polyester thread spools/prewound bobbins; different actual fibre gets separate row; not factory consumed test thread.

- Selected flow: Polyester sewing thread supplied with machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `brother-1034d`

###### Reusable sewing-machine soft dust cover (`dust_cover`)

Only actual supplied durable cover of specified textile/polymer; separate from transport bag.

- Selected flow: Reusable sewing-machine soft dust cover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `brother-se725`

###### Finished overlock trim-collection tray (`trim_trap`)

Only actual supplied trim trap accessory; declare exact housing material.

- Selected flow: Finished overlock trim-collection tray
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `brother-1034d`

###### Alternating current (`assembly_electricity`)

Only actual <1 kV user-side consumption assigned to this process; residual services only unassigned remainder.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

### Process: Factory adjustment and acceptance sewing tests (`test`)

#### Inputs

##### Product flows

###### Polyester sewing test thread (`test_thread`)

Only actual factory test thread; record exact fibre and issued/returned quantity.

- Selected flow: Polyester sewing test thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_test.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Sources:

###### Cotton woven sewing test fabric (`test_fabric`)

Only actual cotton test fabric; actual other fabrics get separate cards.

- Selected flow: Cotton woven sewing test fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_test.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Sources:

###### Alternating current (`test_electricity`)

Only actual <1 kV user-side consumption assigned to this process; residual services only unassigned remainder.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Used cotton sewing-test swatch (`test_waste`)

Actual externally discarded swatches; repeatable fixture stays capital equipment.

- Selected flow: Used cotton sewing-test swatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Rejected household sewing machine (`machine_reject`)

External unrecovered reject only; never counts as accepted product.

- Selected flow: Rejected household sewing machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

### Process: Residual shared factory services (`services`)

#### Inputs

##### Product flows

###### Natural gas, gaseous factory supply (`natural_gas`)

Only actual gas-fired furnace or on-site boiler; measured standard volume and own density/NCV.

- Selected flow: Natural gas, gaseous factory supply
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fuel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`
- Sources:

###### Purchased process heat (`heat`)

Only actual independently measured delivered Energy MJ; verify gross versus net return convention.

- Selected flow: Purchased process heat
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources:

###### Alternating current (`services_electricity`)

Only actual <1 kV user-side consumption assigned to this process; residual services only unassigned remainder.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Elementary flows

###### Carbon dioxide, air (`carbon_dioxide`)

Only site fuel combustion with own carbon balance and actual oxidation evidence.

- Selected flow: Carbon dioxide, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Carbon monoxide, air (`carbon_monoxide`)

Only species-specific stack measurements or matched factor; not inferred from total carbon.

- Selected flow: Carbon monoxide, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide, air (`nitrogen_dioxide`)

Only resolved NO2 species evidence; NOx reported as NO2 is not automatic actual NO2.

- Selected flow: Nitrogen dioxide, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Packing and accepted factory-gate release (`dispatch`)

#### Inputs

##### Product flows

###### Corrugated cardboard shipping carton (`carton`)

Only actual packaging specification; exclude from accepted net machine mass.

- Selected flow: Corrugated cardboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Expanded-polystyrene protective cushion (`cushion`)

Only actual packaging specification; exclude from accepted net machine mass.

- Selected flow: Expanded-polystyrene protective cushion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Low-density polyethylene protective bag (`bag`)

Only actual packaging specification; exclude from accepted net machine mass.

- Selected flow: Low-density polyethylene protective bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Alternating current (`dispatch_electricity`)

Only actual <1 kV user-side consumption assigned to this process; residual services only unassigned remainder.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Product flows

###### Household sewing machines (`reference_product`)

Accepted manufactured supplied configuration at factory gate.

- Selected flow: Household sewing machines `633bed4f-5fd3-4590-b645-8d8daeedaa00`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivide | all processes | Subdivide routes and configuration-specific production before allocation; trace direct BOM issues, machine hours, tests and meters. No cross-configuration averaging. |  |
| reject_rework | accepted_output | Retain all attributable failed tests, scrap, reject and rework burden in period numerator Q; N counts accepted units only. Sold scrap is a documented separate waste/co-product treatment, not an automatic avoided-primary-metal credit. |  |
| shared_residual | services | For each utility reconcile same site/period/units purchased imports plus actual onsite generation minus exports and net storage change with assigned fabrication, assembly, test and dispatch loads. Shared service is only the remaining unassigned consumption allocated by measured causal driver. Never add whole-site meter totals on top of process submeters. Investigate negative residuals with meter, period and uncertainty evidence; never clip to zero. |  |
| heat_return | heat | Purchased heat is independently measured delivered Energy MJ. If derived, use actual supply and return mass in kg times their own enthalpy in MJ/kg at measured pressure/temperature with common zero; distinguish gross supply from already-net provider convention and subtract returns once. Onsite boiler heat is internal output; fuel, electricity, water and emissions carry actual burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | foreground_record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | Each lot/meter period | Same declared production period | Same site and configuration | accepted net mass per machine | Calibration, sampling uncertainty and acceptance ledger |
| cp_material | frame; housing; mechanism; drive; finish; assembly; test; services; dispatch | one atomic exchange | foreground_record | grade; batch; issued mass; supplier state; returns; opening/closing stocks; own density/assay/moisture | Collect calibrated meters/weighing and matched invoices, sampling and stocks; attribute Q to same configuration/period including rejects and rework; compute q_item=Q/N. | kg | Each lot/meter period | Same declared production period | Same site and configuration | attributable exchange amount / accepted machines | Calibration, sampling uncertainty and acceptance ledger |
| cp_waste | frame; housing; mechanism; drive; finish; assembly; test; services; dispatch | one atomic exchange | foreground_record | waste species; weighed shipment; destination; own assay; dry solids; stock; internal returns | Collect calibrated meters/weighing and matched invoices, sampling and stocks; attribute Q to same configuration/period including rejects and rework; compute q_item=Q/N. | kg | Each lot/meter period | Same declared production period | Same site and configuration | attributable exchange amount / accepted machines | Calibration, sampling uncertainty and acceptance ledger |
| cp_water | frame; housing; mechanism; drive; finish; assembly; test; services; dispatch | one atomic exchange | foreground_record | inlet/outlet meters; each stream density and temperature; input moisture; evaporation; stock; reaction water; paired returns | Collect calibrated meters/weighing and matched invoices, sampling and stocks; attribute Q to same configuration/period including rejects and rework; compute q_item=Q/N. | kg | Each lot/meter period | Same declared production period | Same site and configuration | attributable exchange amount / accepted machines | Calibration, sampling uncertainty and acceptance ledger |
| cp_energy | frame; housing; mechanism; drive; finish; assembly; test; services; dispatch | one atomic exchange | foreground_record | import meter; process submeters; generation; export; storage; causal residual allocation; kWh and voltage | Collect calibrated meters/weighing and matched invoices, sampling and stocks; attribute Q to same configuration/period including rejects and rework; compute q_item=Q/N. | MJ | Each lot/meter period | Same declared production period | Same site and configuration | attributable exchange amount / accepted machines | Calibration, sampling uncertainty and acceptance ledger |
| cp_fuel | frame; housing; mechanism; drive; finish; assembly; test; services; dispatch | one atomic exchange | foreground_record | fuel identity; meter; standard conditions; own density/NCV/carbon; stocks | Collect calibrated meters/weighing and matched invoices, sampling and stocks; attribute Q to same configuration/period including rejects and rework; compute q_item=Q/N. | kg | Each lot/meter period | Same declared production period | Same site and configuration | attributable exchange amount / accepted machines | Calibration, sampling uncertainty and acceptance ledger |
| cp_heat | frame; housing; mechanism; drive; finish; assembly; test; services; dispatch | one atomic exchange | foreground_record | independent delivered MJ; gross/net convention; supply/return kg; temperature; pressure; own enthalpy; common zero | Collect calibrated meters/weighing and matched invoices, sampling and stocks; attribute Q to same configuration/period including rejects and rework; compute q_item=Q/N. | MJ | Each lot/meter period | Same declared production period | Same site and configuration | attributable exchange amount / accepted machines | Calibration, sampling uncertainty and acceptance ledger |
| cp_test | frame; housing; mechanism; drive; finish; assembly; test; services; dispatch | one atomic exchange | foreground_record | machine configuration; accepted/rejected ledger; cycle; issued/returned thread/fabric; electricity; swatch disposal; rework | Collect calibrated meters/weighing and matched invoices, sampling and stocks; attribute Q to same configuration/period including rejects and rework; compute q_item=Q/N. | kg | Each lot/meter period | Same declared production period | Same site and configuration | attributable exchange amount / accepted machines | Calibration, sampling uncertainty and acceptance ledger |
| cp_emission | frame; housing; mechanism; drive; finish; assembly; test; services; dispatch | one atomic exchange | foreground_record | species; compartment; stack volume and conditions; concentration; time; solvent destinations; uncertainty | Collect calibrated meters/weighing and matched invoices, sampling and stocks; attribute Q to same configuration/period including rejects and rework; compute q_item=Q/N. | kg | Each lot/meter period | Same declared production period | Same site and configuration | attributable exchange amount / accepted machines | Calibration, sampling uncertainty and acceptance ledger |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| species_emission | physical emissions records | Integrate each measured species concentration with synchronized dry gas flow and time at matched standard conditions; account for actual abatement inlet/outlet and uncertainty. CO2 may use own fuel carbon with actual oxidation, retained carbon and other carbon sinks; carbon balance alone cannot establish CO or NO2. NOx expressed as NO2 equivalent is not measured molecular NO2. Unknown emissions remain unknown, not zero. | Synchronized species sampling and flow records / 同步物种采样及流量记录 |
| same_configuration | reference_product | Keep accepted serial ledger, BOM/configuration, supplied accessories and calibrated net weighing on the same period; D is sum of accepted net product masses, N accepted units, M=D/N. Exclude packaging, rejects, test fabric and externally owned table from D. | Calibration and acceptance ledger / 校准及验收台账 |
| period_conversion | inventory | For each exchange collect attributable period Q including reject/rework burden; q_item=Q/N then q_ref=q_item/M=Q/D for the same configuration. The finite normalize_mass rule below implements this conversion; do not derive M from advertised weights or average different configurations. | Period numerator and denominator ledger / 期间分子分母台账 |
| physical_assays | physical material records | For each metal/species balance preserve input, accepted product, scrap, slag, sludge, wastewater, release and stock masses with EACH term own matched assay and wet/dry basis. Add actual reaction creation/consumption; paired internal returns cancel. Gross compound mass never equals contained metal or solvent. Volumetric conversion uses each stream own measured density at its conditions. | Matched sampling and stock records / 匹配采样及库存记录 |
| water_balance | physical water records | Close purchased/abstracted water plus each input moisture and opening stock against product/waste moisture, evaporation, discharge and closing stock; include actual reaction water and paired internal returns. Match density/temperature for each volume; no zero-loss assumption. | Water meters, moisture samples and stock / 水表、含水采样及库存 |
| solvent_balance | physical solvent records | For EACH solvent species separately close input and stock against retained product, recovered solvent, capture media, actual destruction, wastewater, other non-air outputs and measured air release. Capture does not establish destruction, and unexplained residual is not an air emission. | Solvent assays and treatment evidence / 溶剂化验及处理证据 |
| uncertainty | balances | Investigate closure against combined actual weighing, sampling, stock, meter and allocation uncertainty and known reactions; no universal numerical tolerance, yield or loss. Maintain unknown versus measured zero versus evidenced not_applicable. | Uncertainty budget / 不确定性预算 |
| providers | upstream | Match actual component processing state, grade, polymer formulation, electricity voltage, supply geography and period, heat return convention, transport and waste-treatment provider; disclose substitutions and incomplete linkage. No product source establishes a provider. | Supplier declarations / 供应商声明 |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope | reference_product | Confirm household manufacturer design and actual principal function, domestic embroidery/overlock conditions and supplied configuration; industrial or separate furniture/parts cannot use this output. | janome-712t; singer-4423; brother-se725; brother-1034d; juki-ddl8700 |
| measurement | inventory | Verify calibrated same-configuration mass, accepted N/D, attributed Q, q_item and normalize_mass applications on every non-reference row; missing finite conversion or any skipped relationship is incomplete. |  |
| double_count | make_buy | Check conditional make/buy matrix, complete supplier modules versus raw embedded materials, internal-transfer cancellation, residual utilities and purchased heat return accounting once. |  |
| balance | physical records | Validate EACH material/species own assay/moisture, water stocks/reactions/returns and solvent recovery/capture/destruction/non-air destinations; unexplained closure and absent species evidence require review. |  |
| utility_species | utilities and releases | Reject operating-watt manufacturing estimates, carbon-only CO/NOx inference, generic project-specific generation substituted for purchased grid supply, whole-site plus submeter summation and zero-clipped negative residuals. |  |
| completeness | dataset | Require actual route atomic exchanges, every unresolved identity/provider/range disclosure, acceptance/reject/test records and source applicability. Measurement-contract pass does not verify observed factory data or establish reviewed publication readiness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Configuration-specific household machine factory production; downstream models with explicit upstream and scenario links |
| excluded_use | Garment sewing service, lifetime operating energy or claimed functional equivalence of different stitch mechanisms |
| required_metadata | Reference qualifiers; Q/N/D; make/buy and route applicability; actual test/utility/provider states |
| required_quality_disclosure | Missing identities and providers; coverage; uncertainty; no sector ranges; allocation and exclusion evidence |
| update_trigger | Changed configuration, BOM, material grade, site route, supply interface, test or allocation evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| janome-712t | handbook | Janome Model 712T Instruction Book, 749-800-011 (E-N), Printed in Taiwan, undated; pages 2–4, 9 and final installation page. https://www.janome.com/wp-content/uploads/2014/10/Inst-book-712T-En.pdf | Pedal-driven mechanism, accessories and required external treadle table; no factory quantities |
| singer-4423 | official_guidance | SINGER Heavy Duty 4423 Sewing Machine, publisher product body snapshot 2026-10-02. https://www.singer.com/products/singer-4423-heavy-duty-sewing-machine | Electric mechanical configuration, metal frame and stainless bedplate; no specific frame grade or factory route |
| brother-se725 | official_guidance | Brother SE725 Computerized Sewing and Embroidery Machine, publisher product body snapshot 2026-10-02. https://www.brother-usa.com/p/sewing-embroidery/SE725 | Domestic sewing/embroidery combination, electronic control and supplied embroidery frame |
| brother-1034d | official_guidance | Brother 1034D Serger, publisher product body snapshot 2026-10-02. https://www.brother-usa.com/p/sergers-coverstitch/1034D | Household overlock, differential feed, looper and supplied foot control |
| juki-ddl8700 | official_guidance | JUKI DDL-8700 1-needle Lockstitch Machine, industrial product body snapshot 2026-10-02. https://juki.com/apparel/ddl-8700 | Industrial counterexample; lockstitch alone does not establish household scope |
