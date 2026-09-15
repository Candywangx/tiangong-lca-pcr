---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.connectors-for-optical-fibres-optical-fibre-bundles-or-cables
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Connectors for optical fibres, optical fibre bundles or cables

## 1. Scope and Applicability

This PCR supports foreground data packages for the manufacture of passive, demountable optical coupling hardware sold as standalone connector plugs, adaptors or couplers, receptacles, and connector sets for optical fibres, optical fibre bundles, or optical fibre cables. It covers single-fibre and multi-fibre forms, single-mode and multimode applications, physical-contact and other declared optical-interface designs, and the production mix actually represented by the foreground site.

The foreground gate begins with received raw materials, purchased connector components, and packaging materials and ends with conforming, packaged product at the manufacturing plant gate. In-house ferrule, alignment-sleeve, housing, shell, or precision-component fabrication is included when performed by the reporting site. Connector termination, fibre-stub attachment, adhesive curing, end-face preparation, polishing, cleaning, inspection, insertion-loss or attenuation testing, return-loss testing, assembly yield, rework, rejects, and packaging are included when applicable to the declared product form and route.

This PCR excludes optical fibres, optical fibre bundles, and optical fibre cables as products; connectorized cable assemblies, patch cords, and pigtails when the cable assembly is the traded product; active optical transceivers and modules; non-connector passive optical devices; electrical connectors; network installation; use; maintenance; and end-of-life. A cable-mounted product may use this PCR only for a separately measured connector-manufacturing foreground module whose output is the connector contribution, not the cable or transceiver.

The category is technologically diverse. A dataset shall represent one declared product or a production-weighted mix with disclosed shares. Results for one connector interface, fibre type, ferrule material, housing material, end-face geometry, performance grade, or assembly route shall not be extrapolated to the whole category without a reviewed representativeness justification.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.connectors-for-optical-fibres-optical-fibre-bundles-or-cables |
| classification_refs | CPC 3.0: 46215 — Connectors for optical fibres, optical fibre bundles or cables |
| covered_products | Standalone passive optical-fibre connector plugs; adaptors or couplers; receptacles; connector sets; single-fibre and multi-fibre forms whose primary function is demountable optical coupling |
| excluded_products | Optical fibres, fibre bundles, and optical fibre cables; patch cords and pigtails as cable products; active transceivers or optical modules; splices and passive optical devices that are not connector hardware; electrical connectors |
| representative_product | A declared production mix of conforming finished optical-fibre connectors and adaptors at the manufacturing plant gate, net of external packaging mass |
| production_route | Purchased or in-house precision components; incoming inspection and kitting; conditional fibre termination and end-face preparation; connector or adaptor assembly; cleaning, inspection and optical testing; packaging |
| market_state | Finished, conforming standalone connector hardware at plant gate; product form, interface family, fibre compatibility, performance specification, geography, and production period declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished, conforming standalone connectors, connector plugs, adaptors or couplers, receptacles, or connector sets for optical fibres, bundles, or cables at the manufacturing plant gate |
| How much | 1 kg net finished product, excluding external packaging |
| How well | Meets the declared connector-interface, fibre-compatibility, end-face, cleanliness, insertion-loss or attenuation, return-loss, and applicable performance acceptance criteria |
| How long or cycle | The declared manufacturing reporting period or complete production campaign represented by the foreground records |
| reference_flow_link | The net conforming output mass is linked to the Tiangong product flow and Mass reference property below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Connectors for optical fibres, optical fibre bundles or cables `5f90c9f6-a484-428c-8846-89bece3a62ec` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form: plug, adaptor or coupler, receptacle, connector set, or other declared form; connector-interface family and mating configuration; single-fibre or multi-fibre channel count; compatible fibre type and category, including single-mode or multimode; ferrule, alignment element or lens form and material, or not applicable; housing, shell, sleeve, spring, boot and protective-cap material breakdown as applicable; end-face geometry or optical-interface finish, including PC, UPC, APC, expanded-beam, pre-polished or other declared design; termination and assembly route; declared optical test wavelength and launch condition; insertion-loss or attenuation test method, acceptance criterion and coverage; return-loss test method, acceptance criterion and coverage; end-face inspection and cleaning method; operating-service environment or performance grade; assembly yield, rework and reject basis; packaging bill of materials; production geography, period and represented product-mix shares |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | net conforming reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground inventory to 1 kg of conforming connector hardware after final inspection and before adding external packaging. |
| `net_product_mass` | finished connector or adaptor output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Exclude external packaging, attached optical cable beyond a declared termination stub, and any active transceiver or module from the reference-product mass. |
| `count_to_mass` | records available only as pieces, trays, reels, or packs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert count-based records using a measured, product-specific average mass and retained sample size, scale calibration, product identifier, and sampling period; do not apply one connector mass to another form. |
| `energy_conversion` | electricity, thermal energy, and fuel records | Energy | kWh or MJ | Preserve the metered unit and energy carrier; document every conversion factor and do not combine electricity and fuel before applying carrier-specific upstream datasets. |
| `optical_test_results` | insertion-loss or attenuation and return-loss results | Declared optical performance metric | dB | Retain measured dB results, wavelength, launch condition, reference method, equipment identity, calibration status, sampling basis, and acceptance criterion separately from physical inventory amounts. |

## 5. System Boundary

The foreground boundary follows the actual plant route from received materials and components through conforming product and packaging. Purchased ferrules, alignment sleeves, housings, shells, springs, boots, caps, fibre stubs, adhesives, cleaning agents, polishing media, and packaging require upstream datasets that match their material and supplied state. In-house component fabrication is not replaced by a purchased-component proxy when it occurs at the reporting site.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received raw materials and purchased connector, adaptor, termination, testing-consumable, and packaging components at the reporting-site gate |
| starting_condition_role | Disclosed foreground inputs whose supplier, material, supplied state, and upstream dataset are identified |
| product_classification_scope | Standalone passive optical coupling connector hardware within CPC 3.0 46215; optical cable and active-module products remain outside the category |
| recursive_input_rule | A purchased input already classified as connector hardware is recorded once as an explicit upstream connector-component or semi-finished connector input and is not recursively decomposed by this PCR inside the same foreground package |
| upstream_dataset_requirement | Use material- and state-matched upstream datasets for every purchased component, raw material, energy carrier, water supply, consumable, and waste-treatment service; disclose proxies and missing supplier data |
| disclosure | Declare product form, fibre compatibility, complete material breakdown, termination route, process inclusion, testing basis, yield and rework, packaging, geography, reporting period, and all exclusions or allocation decisions |

### Normative Rules

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `boundary_start_end` | foreground manufacturing system | Begin at receipt of raw materials, purchased components and packaging and end with conforming packaged connector hardware at the plant gate; include all onsite operations required to produce the declared reference product. | `iso-14044-2006`; `iso-ts-14048-2002` |
| `boundary_variant_specificity` | product and route representativeness | Model one declared connector or adaptor form or a production-weighted mix with documented shares; do not generalize one interface, fibre type, material system, finish, or performance grade to CPC 46215 as a whole. | `unsd-cpc-3-0-structure`; `iec-61754-1-2013`; `iec-61753-1-2018` |
| `boundary_upstream_components` | purchased materials and components | Keep purchased components explicit by material and supplied state and link them to suitable upstream datasets; include in-house component fabrication when performed onsite. | `iec-61755-3-1-2024`; `iso-ts-14048-2002` |
| `boundary_excluded_products` | category exclusions | Exclude optical fibres and cables as products, cable assemblies as traded products, active optical modules and transceivers, and unrelated connector categories; route mixed or inseparable products to a more suitable PCR or manual review. | `unsd-cpc-3-0-structure` |
| `boundary_testing` | cleaning, inspection and optical qualification | Include cleaning, end-face inspection, attenuation or insertion-loss testing, and return-loss testing actually performed for the declared product; retain test coverage and rejects even when tests do not create a separate physical flow. | `iec-61300-3-4-2023`; `iec-61300-3-6-2008`; `iec-61300-3-35-2022`; `iec-tr-62627-01-2023` |
| `boundary_packaging` | external packaging | Include primary, secondary and tertiary packaging placed on the product at the plant gate and keep packaging mass outside the net reference-product mass. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | In-house precision-component fabrication | conditional | Include when ferrules, alignment sleeves, housings, shells, inserts, lenses, or other connector components are formed or finished at the reporting site. | foreground component manufacturing | Per 1 kg conforming final connector hardware |
| `parts_receiving_and_kitting` | Parts receiving, inspection and kitting | required | Include received materials and components for every represented product and record incoming rejects and packaging. | foreground material preparation | Per 1 kg conforming final connector hardware |
| `termination_and_endface` | Fibre termination and end-face preparation | conditional | Include for products with factory-attached fibre or fibre stubs, adhesive or mechanical termination, cleaving, curing, polishing, pre-polished splice attachment, or other end-face preparation; exclude for bare adaptors or unterminated connector bodies. | foreground optical-interface preparation | Per 1 kg conforming final connector hardware |
| `connector_adapter_assembly` | Connector or adaptor assembly | required | Include the actual assembly route for connector plugs, adaptors, receptacles, or connector sets. | foreground final assembly | Per 1 kg conforming final connector hardware |
| `inspection_and_optical_testing` | Cleaning, inspection and optical testing | required | Include the declared sampling or one-hundred-percent inspection and test route and all rework or rejects. | foreground quality assurance | Per 1 kg conforming final connector hardware |
| `packaging` | Finished-product packaging | required | Include all packaging applied before the product leaves the manufacturing plant gate. | foreground packaging | 1 kg net conforming product plus separately inventoried packaging |

### Process: In-house precision-component fabrication (`component_fabrication`)

#### Inputs

##### Product flows

###### Ferrule, sleeve, housing, shell, insert or lens materials (`component_materials`)

Record each material entering in-house component fabrication separately by material grade and supplied state, including ceramics, polymers, metals, glass, or other declared materials.

- Selected flow: Declared connector-component material by material grade
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented returns to stores
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `iec-61755-3-1-2024`; `iso-ts-14048-2002`

###### Component-fabrication electricity and other energy (`component_energy`)

Record electricity, fuels, and thermal energy consumed by forming, machining, moulding, sintering, plating, coating, or finishing operations performed onsite.

- Selected flow: Declared energy carrier
- Flow property / unit: Energy / metered kWh or MJ
- Amount rule: metered process energy or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_energy`
- Sources: `iso-ts-14048-2002`

###### Component-fabrication process water and aids (`component_water_and_aids`)

Record water, machining fluids, mould-release agents, plating chemicals, coatings, abrasives, and other aids when used by onsite component fabrication.

- Selected flow: Declared water or process-aid flow
- Flow property / unit: Mass or volume / kg or m3 as purchased or metered
- Amount rule: measured consumption by material or chemical identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_water_and_aids`
- Sources: `iso-ts-14048-2002`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted in-house connector components (`accepted_components`)

Record accepted component mass transferred to kitting, disaggregated by component function and material.

- Selected flow: Accepted ferrules, sleeves, housings, shells, inserts, lenses, or other declared components
- Flow property / unit: Mass / kg
- Amount rule: calculated from accepted component counts and measured product-specific mass, reconciled to production records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_yield_and_waste`
- Sources: `iso-ts-14048-2002`

##### Waste flows

###### Component-fabrication scrap and rejects (`component_scrap`)

Record scrap and rejected components by material and destination, distinguishing internal rework or recycling from exported waste.

- Selected flow: Declared material-specific manufacturing waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass plus documented reject mass leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_yield_and_waste`
- Sources: `iso-ts-14048-2002`

###### Component-fabrication wastewater or spent bath (`component_wastewater`)

Record wastewater and spent baths when wet machining, cleaning, plating, or coating occurs onsite; preserve composition and treatment route.

- Selected flow: Declared wastewater or spent process bath
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured discharge or removal quantity by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_water_and_aids`
- Sources: `iso-ts-14048-2002`

##### Elementary flows

###### Direct emissions from onsite component fabrication (`component_direct_emissions`)

Record reportable direct air or water emissions from onsite thermal, coating, plating, or solvent operations using monitored or permit-calculation records.

- Selected flow: Pollutant-specific elementary flow
- Flow property / unit: Pollutant-specific mass / kg
- Amount rule: measured or permit-method calculated direct emission
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `iso-ts-14048-2002`

### Process: Parts receiving, inspection and kitting (`parts_receiving_and_kitting`)

#### Inputs

##### Product flows

###### Purchased connector and adaptor components (`purchased_components`)

Record the product-specific bill of materials for purchased ferrules, alignment sleeves, housings, shells, inserts, springs, boots, protective caps, lenses, fibre stubs, and other components. Declare component function, material, supplier state, and whether a field is not applicable.

- Selected flow: Purchased connector or adaptor component by material and supplied state
- Flow property / unit: Mass / kg
- Amount rule: received or issued mass reconciled to product-specific bill of materials and inventory movement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_parts_bom`
- Sources: `iec-61754-1-2013`; `iec-61755-3-1-2024`; `foa-fiber-optic-termination`

###### Incoming shipping and protective packaging (`incoming_packaging`)

Record packaging received with connector components and its material-specific mass.

- Selected flow: Incoming packaging material by material type
- Flow property / unit: Mass / kg
- Amount rule: measured received packaging mass assigned to represented production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_and_kitting`
- Sources: `iso-ts-14048-2002`

###### Receiving and kitting electricity (`kitting_energy`)

Record electricity used for incoming inspection, controlled storage, automated feeding, and kitting where material.

- Selected flow: Electricity, declared supply mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or documented shared-meter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_and_kitting`
- Sources: `iso-ts-14048-2002`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted and kitted components (`kitted_components`)

Record accepted components released to termination or assembly after incoming inspection.

- Selected flow: Product-specific kitted connector components
- Flow property / unit: Mass / kg
- Amount rule: accepted issued mass calculated from receiving and inspection records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_and_kitting`
- Sources: `iso-ts-14048-2002`

##### Waste flows

###### Incoming rejects and discarded packaging (`incoming_rejects_and_packaging_waste`)

Record rejected incoming parts and discarded incoming packaging separately by material and destination.

- Selected flow: Material-specific incoming reject or packaging waste
- Flow property / unit: Mass / kg
- Amount rule: measured rejected or discarded mass by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_and_kitting`
- Sources: `iso-ts-14048-2002`

##### Elementary flows

### Process: Fibre termination and end-face preparation (`termination_and_endface`)

#### Inputs

##### Product flows

###### Kitted connector components and declared fibre or fibre stub (`termination_components`)

Record the kitted connector body, ferrule or optical interface, and the exact fibre or fibre-stub type entering the declared termination route.

- Selected flow: Product-specific connector components and declared optical fibre or fibre stub
- Flow property / unit: Mass / kg
- Amount rule: measured or bill-of-material mass issued to termination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_termination_materials_and_energy`
- Sources: `foa-fiber-optic-termination`; `iec-61755-3-1-2024`

###### Adhesive, crimp, splice, polishing and cleaning consumables (`termination_consumables`)

Record adhesives, primers, crimp parts, splice protectors, polishing films or slurry, cleaning agents, wipes, and other route-specific consumables by material or chemical identity.

- Selected flow: Declared termination, polishing, or cleaning consumable
- Flow property / unit: Mass or count converted to mass / kg
- Amount rule: measured issue less documented return, with count-to-mass conversion where needed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_termination_materials_and_energy`
- Sources: `foa-fiber-optic-termination`; `iec-tr-62627-01-2023`

###### Termination, curing and polishing energy (`termination_energy`)

Record electricity and thermal energy for preparation, adhesive curing, cleaving, splicing, polishing, cleaning, and extraction equipment.

- Selected flow: Declared electricity or thermal-energy carrier
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered energy or documented equipment-time allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_termination_materials_and_energy`
- Sources: `foa-fiber-optic-termination`; `iso-ts-14048-2002`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted terminated optical interfaces (`terminated_interfaces`)

Record terminated and end-face-prepared interfaces transferred to final assembly or inspection.

- Selected flow: Product-specific terminated connector interface
- Flow property / unit: Mass / kg
- Amount rule: calculated accepted mass after termination inspection
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_termination_yield_and_waste`
- Sources: `foa-fiber-optic-termination`; `iec-61300-3-35-2022`

##### Waste flows

###### Fibre offcuts, polishing residues and termination rejects (`termination_waste`)

Record fibre offcuts, spent polishing media, contaminated wipes, adhesive waste, and rejected terminated parts separately by treatment route.

- Selected flow: Material-specific termination waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste and reject mass, including outsourced hazardous-waste records where applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_termination_yield_and_waste`
- Sources: `foa-fiber-optic-termination`; `iec-tr-62627-01-2023`

##### Elementary flows

###### Direct termination and cleaning emissions (`termination_direct_emissions`)

Record reportable direct emissions from adhesives, solvents, cleaning agents, or thermal curing when they cross the environment boundary.

- Selected flow: Pollutant-specific elementary flow
- Flow property / unit: Pollutant-specific mass / kg
- Amount rule: monitored or documented calculation-method emission
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `iso-ts-14048-2002`

### Process: Connector or adaptor assembly (`connector_adapter_assembly`)

#### Inputs

##### Product flows

###### Prepared connector or adaptor components (`assembly_components`)

Record every component entering assembly by function and material, including ferrules or lenses for connectors, alignment sleeves for adaptors, housings or shells, springs, clips, boots, seals, and protective caps as applicable.

- Selected flow: Product-specific prepared connector or adaptor component
- Flow property / unit: Mass / kg
- Amount rule: measured or bill-of-material mass issued to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials_and_energy`
- Sources: `iec-61754-1-2013`; `iec-61755-3-1-2024`

###### Assembly aids and energy (`assembly_aids_and_energy`)

Record assembly adhesives, lubricants, fasteners, compressed air, electricity, and other aids separately by carrier or material.

- Selected flow: Declared assembly aid or energy carrier
- Flow property / unit: Mass or energy / kg, kWh, or MJ
- Amount rule: measured issue or metered consumption, with documented shared-resource allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials_and_energy`
- Sources: `iso-ts-14048-2002`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled connector or adaptor submitted to inspection (`assembled_product`)

Record assembled product mass before final cleaning, inspection, and optical testing.

- Selected flow: Assembled product-specific connector or adaptor
- Flow property / unit: Mass / kg
- Amount rule: calculated accepted assembly mass from production and weight records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_yield_and_waste`
- Sources: `iso-ts-14048-2002`

##### Waste flows

###### Assembly rejects and unrecovered residues (`assembly_rejects`)

Record assembly rejects and residues by material, reason, rework status, and final destination.

- Selected flow: Material-specific assembly reject or residue
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving assembly without internal rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_yield_and_waste`
- Sources: `iso-ts-14048-2002`

##### Elementary flows

### Process: Cleaning, inspection and optical testing (`inspection_and_optical_testing`)

#### Inputs

##### Product flows

###### Assembled connectors or adaptors submitted for quality assurance (`test_input_product`)

Record the product form, interface, fibre type, end-face condition, batch, and mass entering final quality assurance.

- Selected flow: Product-specific assembled connector or adaptor
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated submitted mass by batch and product variant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_input_and_energy`
- Sources: `iec-61300-3-35-2022`; `iec-61300-3-4-2023`; `iec-61300-3-6-2008`

###### Test energy, cleaning materials and reference-interface consumables (`test_energy_and_consumables`)

Record electricity for inspection and test equipment plus cleaning consumables and reference-interface items consumed or replaced during the reporting period.

- Selected flow: Declared test energy carrier or cleaning and reference consumable
- Flow property / unit: Energy or mass / kWh, MJ, or kg
- Amount rule: metered energy and measured consumable issue less returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_input_and_energy`
- Sources: `iec-61300-3-35-2022`; `iec-tr-62627-01-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished connector hardware (`conforming_finished_product`)

Record only products that pass the declared inspection and optical-performance acceptance criteria. Retain insertion-loss or attenuation, return-loss, end-face inspection, wavelength, launch, method, calibration, and test-coverage records.

- Selected flow: Connectors for optical fibres, optical fibre bundles or cables `5f90c9f6-a484-428c-8846-89bece3a62ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured conforming net product mass before external packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conforming_output_and_tests`
- Sources: `iec-61300-3-4-2023`; `iec-61300-3-6-2008`; `iec-61300-3-35-2022`; `iec-61753-1-2018`

###### Products returned to rework (`test_rework`)

Record products routed to rework and all repeated cleaning, polishing, assembly, and testing burdens without counting reworked output twice.

- Selected flow: Product-specific connector or adaptor returned to rework
- Flow property / unit: Mass / kg
- Amount rule: measured rework mass by failure mode and destination process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_yield_rework_and_rejects`
- Sources: `iso-ts-14048-2002`

##### Waste flows

###### Final test rejects (`test_rejects`)

Record products rejected after final inspection or optical testing by material, failure mode, and treatment destination when they do not enter rework.

- Selected flow: Material-specific rejected connector or adaptor waste
- Flow property / unit: Mass / kg
- Amount rule: measured final reject mass excluding successfully reworked product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_yield_rework_and_rejects`
- Sources: `iec-61300-3-4-2023`; `iec-61300-3-6-2008`; `iec-61300-3-35-2022`

##### Elementary flows

### Process: Finished-product packaging (`packaging`)

#### Inputs

##### Product flows

###### Conforming connector hardware to be packaged (`packaging_product_input`)

Record the net conforming product transferred to packaging by product variant.

- Selected flow: Connectors for optical fibres, optical fibre bundles or cables `5f90c9f6-a484-428c-8846-89bece3a62ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net conforming product mass transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_mass`
- Sources: `iso-ts-14048-2002`

###### Primary, secondary and tertiary packaging and packaging energy (`outbound_packaging_and_energy`)

Record bags, trays, reels, caps used only for shipment protection, labels, cartons, dividers, pallets, wraps, desiccants, and packaging energy separately by material or carrier.

- Selected flow: Declared packaging material or energy carrier
- Flow property / unit: Mass or energy / kg, kWh, or MJ
- Amount rule: measured packaging issue and metered or allocated packaging energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_and_energy`
- Sources: `iso-14044-2006`; `iso-ts-14048-2002`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged connector hardware at plant gate (`packaged_reference_product`)

Record 1 kg net conforming connector hardware at the plant gate with packaging inventoried separately.

- Selected flow: Connectors for optical fibres, optical fibre bundles or cables `5f90c9f6-a484-428c-8846-89bece3a62ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: normalize the measured net conforming output to exactly 1 kg; do not add packaging mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_output_mass`
- Sources: `iso-14044-2006`; `iso-ts-14048-2002`

##### Waste flows

###### Packaging setup scrap and damaged packaging (`packaging_scrap`)

Record packaging scrap and damaged packaging by material and treatment route.

- Selected flow: Material-specific packaging waste
- Flow property / unit: Mass / kg
- Amount rule: measured packaging waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final connector hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_and_energy`
- Sources: `iso-ts-14048-2002`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `allocation_avoid` | shared processes and co-production | First avoid allocation through process subdivision, separate metering, or product-specific production records wherever technically feasible. | `iso-14044-2006` |
| `allocation_variant_mix` | multiple connector or adaptor variants | Build a production-weighted mix from measured conforming output mass and variant-specific bills of materials, routes, test coverage, yields, and packaging; do not use simple unit counts when product masses or routes differ materially. | `iso-14044-2006`; `iso-ts-14048-2002` |
| `allocation_shared_resources` | shared energy, water, consumables and waste | When separate measurement is not feasible, use a documented physical driver causally related to consumption, such as machine time, batch time, metered sub-area use, or processed mass, and retain a sensitivity check for material shared burdens. | `iso-14044-2006` |
| `allocation_rework` | rework loops | Assign all additional material, energy, cleaning, polishing, assembly and retesting burdens to the conforming output of the represented production; count reworked units once in conforming output and disclose the rework rate. | `iso-14044-2006`; `iso-ts-14048-2002` |
| `allocation_scrap` | internal recycling and exported scrap | Subtract only documented material returned unchanged to the same foreground process from gross issue; report exported scrap and its treatment as an output without an avoided-production credit unless the study applies and discloses a reviewed substitution or system-expansion method. | `iso-14044-2006` |
| `allocation_economic_fallback` | inseparable co-products | Use economic allocation only when subdivision and a causal physical relationship are not feasible; document prices, period, geography, allocation shares, and sensitivity and do not treat ordinary connector rejects as co-products. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | `component_fabrication` | raw materials for in-house connector components | material issue and return record | product id; component function; material grade; supplied state; lot; gross issue; return; unit; date | ERP issue and return records reconciled to calibrated weighing | kg | per lot or batch | declared reporting period | all onsite component lines in scope | sum net issue by material and product variant, then normalize to conforming output | supplier specification; material certificate; scale calibration; ERP reconciliation |
| `cp_component_energy` | `component_fabrication` | energy for component forming and finishing | meter and equipment-run record | energy carrier; meter id; start and end readings; machine; run time; batch; allocation driver | calibrated submeter or shared-meter allocation using documented physical driver | kWh or MJ | per batch or meter interval | declared reporting period | all onsite component operations in scope | aggregate by carrier and allocate only documented shared use | meter calibration; utility reconciliation; allocation worksheet |
| `cp_component_water_and_aids` | `component_fabrication` | process water, aids, wastewater and spent baths | meter, issue, discharge and waste manifest | material or chemical id; quantity; concentration; batch; discharge; treatment route; date | calibrated meter, inventory issue, laboratory record, and waste manifest | kg or m3 | per batch or discharge | declared reporting period | wet or chemical component operations in scope | aggregate separately by material and treatment route | meter calibration; SDS; laboratory result; waste manifest |
| `cp_component_yield_and_waste` | `component_fabrication` | accepted components, scrap and rejects | production and scrap record | component id; material; started count or mass; accepted count or mass; rework; scrap; destination | production execution record reconciled to calibrated weight samples and waste records | count and kg | per batch | declared reporting period | all onsite component lines in scope | calculate accepted mass and material-specific scrap without double-counting rework | batch traveler; scale calibration; waste ticket; reconciliation |
| `cp_direct_emissions` | `component_fabrication` | direct air and water emissions | monitoring or permit-calculation record | pollutant; source; measured value; activity; factor or method; period; control device | direct monitoring or documented regulatory calculation method | pollutant-specific kg | monitoring or reporting interval | declared reporting period | all onsite sources attributable to included processes | aggregate pollutant-specific releases and document allocation of shared sources | calibration; laboratory report; permit method; calculation worksheet |
| `cp_purchased_parts_bom` | `parts_receiving_and_kitting` | purchased connector and adaptor components | product-specific bill of materials and receiving record | SKU; product form; interface; component function; material; supplier state; quantity; unit mass; supplier; lot | controlled BOM reconciled to purchase receipts, inventory movements and calibrated mass samples | kg | per BOM revision and receiving lot | declared reporting period | all represented SKUs and suppliers | calculate mass by component and material; weight product-mix shares by conforming output mass | approved BOM; supplier declaration; sample weighing; receiving inspection |
| `cp_receiving_and_kitting` | `parts_receiving_and_kitting` | incoming packaging, kitting energy, accepted parts and rejects | receiving, inspection, packaging and meter record | lot; component; accepted; rejected; reason; packaging material and mass; energy; date | receiving inspection system, calibrated scale and meter or documented allocation | kg and kWh | per lot or batch | declared reporting period | receiving and kitting area for represented production | aggregate accepted and rejected mass, packaging and energy by represented product | inspection record; scale and meter calibration; waste ticket |
| `cp_termination_materials_and_energy` | `termination_and_endface` | fibre, termination consumables and energy | batch traveler, material issue and equipment record | product id; fibre type; termination route; adhesive; polishing or cleaning consumable; issued and returned quantity; energy; batch | controlled issue records, equipment counters, calibrated scale and meter | kg, count, kWh or MJ | per batch | declared reporting period | all included termination and end-face lines | convert counts using product-specific measured mass and aggregate by route and product | BOM; batch traveler; scale and meter calibration; consumable lot trace |
| `cp_termination_yield_and_waste` | `termination_and_endface` | accepted interfaces, rework and termination waste | termination inspection and waste record | started units; accepted units; rework; fibre offcuts; polishing waste; adhesive waste; reject mass; destination | batch inspection record and calibrated waste weighing | count and kg | per batch | declared reporting period | all included termination routes | calculate accepted mass, rework and waste by route without double-counting | inspection record; scale calibration; waste manifest |
| `cp_assembly_materials_and_energy` | `connector_adapter_assembly` | assembly components, aids and energy | assembly BOM, issue, meter and machine record | product id; component; material; issued quantity; return; aid; energy; machine time; batch | controlled BOM and issue records with calibrated meter or physical-driver allocation | kg, kWh or MJ | per batch | declared reporting period | all connector and adaptor assembly lines in scope | aggregate net materials and energy by product and route | approved BOM; issue reconciliation; meter calibration; allocation worksheet |
| `cp_assembly_yield_and_waste` | `connector_adapter_assembly` | assembled product, rework and rejects | assembly production and reject record | started units or mass; accepted; rework; reject; failure mode; material; destination | production execution record and calibrated weighing | count and kg | per batch | declared reporting period | all assembly lines in scope | calculate assembled mass, rework and unrecovered rejects by product | batch record; scale calibration; reject disposition |
| `cp_test_input_and_energy` | `inspection_and_optical_testing` | products submitted, test energy and cleaning consumables | test-queue, meter and consumable record | product id; batch; submitted count and mass; equipment; energy; cleaning material; quantity; date | test execution system, calibrated meter and controlled consumable issue | count, kg, kWh or MJ | per test batch or meter interval | declared reporting period | all final inspection and optical-test stations in scope | aggregate submitted product, energy and consumables by product and test route | test queue; meter calibration; consumable reconciliation |
| `cp_conforming_output_and_tests` | `inspection_and_optical_testing` | conforming output and optical-performance evidence | serialized or lot test and inspection record | product form; interface; fibre type; end-face; wavelength; launch condition; method; instrument; calibration; insertion loss or attenuation; return loss; acceptance criterion; tested count; passed count; output mass | IEC-aligned or declared equivalent test procedure using calibrated equipment, linked to product and batch | dB, count and kg | per tested item or declared sample | declared reporting period | every represented product and test route | retain distributions and coverage by SKU; sum only conforming net output mass | raw test file; calibration certificate; end-face image or report; acceptance specification |
| `cp_final_yield_rework_and_rejects` | `inspection_and_optical_testing` | final yield, rework and rejects | disposition and rework-loop record | submitted; first-pass pass; rework route; retest; final pass; reject; failure mode; reject mass; destination | quality management system linked to production and test records | count and kg | per batch | declared reporting period | all products submitted to final quality assurance | calculate first-pass and final yield, rework and reject rates on one consistent count or mass basis | disposition approval; rework traveler; retest result; waste ticket |
| `cp_packaging_bom_and_energy` | `packaging` | outbound packaging, packaging energy and scrap | packaging specification, issue, meter and waste record | product id; packaging level; material; quantity; unit mass; issue; return; energy; scrap; date | controlled packaging BOM, calibrated sample weighing, issue reconciliation and meter | kg and kWh or MJ | per packaging batch and specification revision | declared reporting period | all packaging applied at plant gate | aggregate packaging and scrap by material and product; keep energy by carrier | approved packaging specification; scale and meter calibration; issue and waste reconciliation |
| `cp_product_output_mass` | `packaging` | net conforming reference-product mass | final production and shipment record | product id; conforming count; net unit mass; net product mass; packaging mass; lot; shipment date | calibrated scale or validated product-specific count-to-mass conversion, reconciled to shipments | kg | per production or shipment lot | declared reporting period | all represented products leaving the plant gate | sum net product mass excluding packaging and normalize inventory to 1 kg | scale calibration; product mass study; shipment reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_reference_flow` | every foreground inventory row | normalized amount = reporting-period amount attributable to represented production / net conforming output kg | all collection protocols; `cp_product_output_mass` | amount per 1 kg net conforming connector hardware | `iso-14044-2006`; `iso-ts-14048-2002` |
| `calculate_product_mix` | mixed-product dataset | variant share = conforming net mass of variant / total conforming net mass; apply variant-specific BOM, route, yield, test and packaging records before aggregation | `cp_purchased_parts_bom`; `cp_conforming_output_and_tests`; `cp_product_output_mass` | mass-weighted represented product mix | `iso-14044-2006`; `iso-ts-14048-2002` |
| `calculate_count_to_mass` | count-based component or product record | mass = item count × measured product-specific average net mass; retain sample size, variability and calibration evidence | applicable count record; measured mass study | kg by component or product variant | `iso-ts-14048-2002` |
| `calculate_yield` | component, termination, assembly and final-test stages | yield = accepted output on a declared count or mass basis / started input on the same basis; report first-pass and final yield separately where rework occurs | yield and disposition protocols | stage yield and rework rate | `iso-ts-14048-2002` |
| `calculate_scrap_rate` | manufacturing scrap and rejects | scrap rate = unrecovered scrap or reject mass / started material or submitted product mass on a consistent basis; report internal returns separately | waste and yield protocols | material-specific scrap or reject rate | `iso-ts-14048-2002` |
| `allocate_shared_energy` | shared meters and equipment | allocated energy = metered shared energy × documented causal driver share; disclose driver and reconcile shares to the meter total | energy protocols; machine-time, batch-time, sub-area or processed-mass driver | carrier-specific energy assigned to represented production | `iso-14044-2006`; `iso-ts-14048-2002` |
| `calculate_test_coverage` | end-face inspection, attenuation or insertion-loss, and return-loss tests | coverage = tested units / produced units for the same product and period; retain measured result distributions, failures, retests and acceptance criteria rather than only averages | `cp_conforming_output_and_tests`; `cp_final_yield_rework_and_rejects` | test coverage, pass rate and linked dB result distribution | `iec-61300-3-4-2023`; `iec-61300-3-6-2008`; `iec-61300-3-35-2022` |
| `reconcile_mass_balance` | each material-bearing process and total foreground system | compare material input with accepted output, internal transfer, returned material, waste, direct mass emissions and inventory change on consistent moisture and measurement bases; quantify and explain every residual | material, output, waste, emission and stock-change records | documented process and foreground mass-balance reconciliation | `iso-14044-2006`; `iso-ts-14048-2002` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and represented mix | Every record shall identify product form, interface family, fibre compatibility, ferrule or alignment design, housing material system, end-face design, termination route, and applicable performance or environment grade; not-applicable fields shall be explicit. | controlled product master; drawing revision; product specification; production-mix calculation |
| `dq_material_completeness` | component and packaging bills of materials | Material composition and mass shall cover ferrule or lens, alignment element, housing or shell, sleeve, spring, boot, cap, adhesive or splice parts, and packaging as applicable; proprietary composition gaps and supplier proxies shall be disclosed. | approved BOM; supplier declaration; sample weighing; gap register |
| `dq_temporal_geographic` | all foreground records | Records shall cover the declared representative period or complete campaign and the actual production geography; substitutions from another period, plant, or supplier require justification. | record coverage report; facility list; production reconciliation |
| `dq_measurement_traceability` | mass, energy, water, emissions and waste | Retain instrument identity, calibration status, unit, reading interval, allocation driver, data owner, and reconciliation to source records. | calibration certificates; meter extracts; scale logs; utility and waste invoices |
| `dq_optical_tests` | end-face, attenuation or insertion-loss, and return-loss evidence | Retain product and batch linkage, test method, wavelength, launch condition, reference interface, equipment and calibration, sampling plan, acceptance criterion, raw result, failure, cleaning, rework and retest history. | raw test files; images; calibration certificate; controlled test specification; quality disposition |
| `dq_yield_rework` | every manufacturing stage | Use one declared count or mass basis per yield calculation; distinguish first-pass yield, rework, final yield and unrecovered rejects and prevent reworked product from being counted twice. | batch traveler; quality disposition; calculation worksheet; production reconciliation |
| `dq_mass_balance` | material-bearing processes | Reconcile all material inputs to accepted output, internal transfers, returns, waste, direct mass emissions and inventory changes; quantify and explain residuals without silently adjusting measured records. | signed mass-balance worksheet; stock-change record; waste manifest; emission record |
| `dq_source_and_proxy` | upstream datasets and estimates | Identify upstream dataset, geography, time, technology and supplied state for every material, energy carrier and treatment service; disclose proxy reason and expected direction of bias. | source register; supplier documentation; proxy assessment |
| `dq_reviewability` | complete foreground package | Preserve raw records, calculation formulas, source ids, exclusions, allocation choices and reviewer-accessible audit links so another practitioner can reproduce every normalized amount. | evidence index; calculation workbook; versioned extraction; review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `validate_category_scope` | product identity | Confirm that the reference product is standalone passive optical connector or adaptor hardware within CPC 46215 and not an optical cable, cable assembly as traded product, active transceiver or module, or unrelated connector. | `unsd-cpc-3-0-structure` |
| `validate_reference_identity` | reference flow | Require product flow `5f90c9f6-a484-428c-8846-89bece3a62ec`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, kg, and exactly 1 kg net conforming output excluding packaging. |  |
| `validate_required_qualifiers` | dataset metadata and product description | Fail completeness when product form, interface, fibre type, ferrule or alignment material, housing material, end-face or optical-interface design, termination route, test basis, yield, packaging, environment grade, geography, period, or product-mix shares are missing or silently marked generic. | `iec-61754-1-2013`; `iec-61755-3-1-2024`; `iec-61753-1-2018` |
| `validate_process_route` | process inventory | Require all required processes and every applicable conditional process; verify that purchased components are not used to hide onsite fabrication and that a bare adaptor is not assigned a fibre-termination route without evidence. | `foa-fiber-optic-termination`; `iso-ts-14048-2002` |
| `validate_optical_testing` | final quality assurance | Require declared insertion-loss or attenuation and return-loss method, wavelength, launch and reference conditions, equipment calibration, acceptance criterion, test coverage, raw results, failures, cleaning, rework and retest records; end-face inspection alone is not optical-performance qualification. | `iec-61300-3-4-2023`; `iec-61300-3-6-2008`; `iec-61300-3-35-2022`; `iec-tr-62627-01-2023` |
| `validate_yield_and_rework` | production normalization | Verify first-pass yield, final yield, rework loops and unrecovered rejects on consistent bases; all repeated process burdens shall be included and reworked conforming output shall be counted once. | `iso-14044-2006`; `iso-ts-14048-2002` |
| `validate_material_balance` | materials and waste | Require material-specific reconciliation of inputs, accepted output, transfers, returns, waste, direct mass emissions and stock changes; unexplained residuals shall be reported as a finding, not forced to zero. | `iso-14044-2006`; `iso-ts-14048-2002` |
| `validate_packaging` | plant-gate output | Require material-specific primary, secondary and tertiary packaging and packaging scrap; confirm packaging is inventoried but excluded from the 1 kg net reference-product mass. | `iso-14044-2006`; `iso-ts-14048-2002` |
| `validate_no_leaf_extrapolation` | representativeness | Reject an unqualified claim that a single connector specification, material system, test grade, factory or product route represents the whole CPC 46215 leaf. | `unsd-cpc-3-0-structure`; `iec-61753-1-2018` |
| `validate_sources_and_proxies` | evidence and upstream data | Require traceable foreground records and source ids for method constraints, disclose every upstream proxy and skipped check, and mark validation inconclusive when a required record or identity cannot be verified. | `iso-ts-14048-2002` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process or aggregated_process for connector-manufacturing foreground data; may be published as a secondary_dataset or background_dataset after review |
| downstream_use | LCA process and lifecyclemodel construction for data centres, communication networks, power-grid automation, industrial control and other applications using matching passive optical connector hardware |
| allowed_use | Product-specific or disclosed production-mix studies whose connector form, interface, fibre type, materials, end-face design, termination route, performance grade, geography, period and system boundary match this dataset |
| excluded_use | Optical fibre or cable production; connectorized cable assemblies as a whole; active optical modules or transceivers; another connector interface or material system without representativeness review; unqualified CPC-wide averages |
| required_metadata | canonical PCR id; reference-flow UUID; product form; interface and channel count; fibre type; ferrule or alignment element and housing materials; end-face design; termination and assembly route; optical-test methods and coverage; yield, rework and rejects; packaging; geography; period; represented product-mix shares; upstream datasets; allocation and exclusions |
| required_quality_disclosure | foreground-record coverage; BOM and packaging completeness; meter and scale calibration; count-to-mass sampling; mass balance; first-pass and final yield; test distributions and failures; proxy register; data-quality requirements and validation checks skipped |
| update_trigger | Material change in connector form, interface, fibre compatibility, ferrule or alignment technology, housing material, end-face design, termination or assembly route, test method or acceptance criterion, product-mix shares, yield, packaging, supplier dataset, production geography, reporting period or allocation method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure` | Dataset (`dataset`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-09) | Authoritative CPC 46215 category identity and separation from optical-fibre cable categories |
| `iec-61754-1-2013` | Standard (`standard`) | IEC 61754-1:2013, Fibre optic connector interfaces — General and guidance, https://webstore.iec.ch/en/publication/5816 (retrieved 2026-08-09) | Connector plug, adaptor and receptacle forms; interface declaration |
| `iec-61755-3-1-2024` | Standard (`standard`) | IEC 61755-3-1:2024, Connector parameters for single-mode physically contacting fibres with cylindrical zirconia ferrules, https://webstore.iec.ch/en/publication/64487 (retrieved 2026-08-09) | Evidence that ferrule material, size, fibre interface and performance variant are product-specific and must be declared rather than generalized |
| `iec-61753-1-2018` | Standard (`standard`) | IEC 61753-1:2018, Performance standard — General and guidance, including Amendment 1:2020, https://webstore.iec.ch/en/publication/31424 (retrieved 2026-08-09) | Operating-service environment and performance-category declaration; product-specific performance tests |
| `iec-61300-3-4-2023` | Standard (`standard`) | IEC 61300-3-4:2023, Examinations and measurements — Attenuation, https://webstore.iec.ch/en/publication/68498 (retrieved 2026-08-09) | Attenuation or insertion-loss measurement method and test-record requirements |
| `iec-61300-3-6-2008` | Standard (`standard`) | IEC 61300-3-6:2008, Examinations and measurements — Return loss, https://webstore.iec.ch/en/publication/5247 (retrieved 2026-08-09) | Return-loss definition and measurement-record requirements |
| `iec-61300-3-35-2022` | Standard (`standard`) | IEC 61300-3-35:2022, Visual inspection of fibre optic connectors and fibre-stub transceivers, https://webstore.iec.ch/en/publication/64254 (retrieved 2026-08-09) | End-face cleanliness, scratches and defect inspection; inspection does not replace attenuation and return-loss qualification |
| `iec-tr-62627-01-2023` | Official guidance (`official_guidance`) | IEC TR 62627-01:2023, Fibre optic connector cleaning methods, https://webstore.iec.ch/en/publication/72878 (retrieved 2026-08-09) | Cleaning route and consumable scope for plugs, adaptors, receptacles and protective caps |
| `foa-fiber-optic-termination` | Handbook (`handbook`) | Fiber Optic Association, Fiber Optic Termination and Singlemode Termination and Polishing, https://www.thefoa.org/tech/ref/basic/term.html and https://www.thefoa.org/tech/ref/termination/sm.html (retrieved 2026-08-09) | Generic process decomposition for attachment, cleaving, adhesive or splice routes, polishing, inspection and optical testing; no CPC-wide numeric defaults taken |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, confirmed 2022, https://www.iso.org/standard/38498.html (retrieved 2026-08-09) | Goal and scope, inventory, allocation, reporting and review method |
| `iso-ts-14048-2002` | Standard (`standard`) | ISO/TS 14048:2002, Environmental management — Life cycle assessment — Data documentation format, confirmed 2025, https://www.iso.org/standard/29872.html (retrieved 2026-08-09) | Transparent foreground collection, calculation, documentation and data-quality evidence |
