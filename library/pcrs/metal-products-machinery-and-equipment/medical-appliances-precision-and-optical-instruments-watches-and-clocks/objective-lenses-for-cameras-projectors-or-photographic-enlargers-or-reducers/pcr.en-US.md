---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.objective-lenses-for-cameras-projectors-or-photographic-enlargers-or-reducers
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Objective lenses for cameras, projectors or photographic enlargers or reducers

## 1. Scope and Applicability

This PCR applies to factory-gate production of finished, mounted objective-lens assemblies whose intended application is a camera, projector, photographic enlarger, or photographic reducer. It covers fixed- and variable-focal-length products; glass, polymer, and mixed optical-element designs; optical coatings; barrels and optomechanical parts; assembly, alignment, testing, and sales packaging when those activities occur within the reporting organization.

It excludes complete cameras and projectors, image sensors, illumination systems, unmounted general-purpose optical elements, ophthalmic lenses, microscopes and telescope objectives, transport after the factory gate, use, maintenance, and end-of-life. A supplied part or process is represented by an upstream dataset and is not duplicated as foreground production. Product design, prototype development, capital equipment, and buildings are excluded unless the study goal explicitly brings them into scope.

The CPC leaf verifies the product identity but does not determine the manufacturing route. The foreground package shall declare the actual substrate materials, coating system, optomechanical configuration, focusing or aperture mechanisms, electronic content, production geography, technology, reporting period, and packaging state.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.objective-lenses-for-cameras-projectors-or-photographic-enlargers-or-reducers |
| classification_refs | CPC 3.0: 48321, exact classification context |
| covered_products | Finished objective-lens assemblies for cameras, projectors, photographic enlargers, or photographic reducers, including glass, polymer, or mixed optical-element designs |
| excluded_products | Complete cameras or projectors; unmounted general-purpose optical elements; ophthalmic, microscope, telescope, or instrument objectives outside the stated applications; lens caps, filters, adapters, sensors, and other accessories sold separately |
| representative_product | A finished, mounted multi-element imaging objective lens, aligned, tested, cleaned, and packed at the factory gate |
| production_route | Site-declared combination of purchased or in-house glass-lens fabrication, polymer-lens molding, cleaning and coating, optomechanical fabrication, assembly, alignment, testing, and packaging |
| market_state | Finished objective-lens assembly at the manufacturer factory gate, in the declared sales-packaging state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished objective-lens assembly that forms or projects an image for the declared camera, projector, photographic enlarger, or photographic reducer application |
| How much | 1 kg of accepted objective-lens assemblies at the manufacturer factory gate |
| How well | Meets the declared optical, mechanical, interface, cleanliness, and acceptance-test specifications for the represented product family |
| How long or cycle | One production reporting period; use-life performance is outside this factory-gate reference flow |
| reference_flow_link | Accepted output `assembly_objective_lens` from `objective_lens_assembly_testing_packaging`, normalized by measured net finished-product mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Objective lenses for cameras, projectors or photographic enlargers or reducers `cfef9f14-3271-428b-bebe-47ded2db11d4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | intended application; product family or model; focal-length range; maximum aperture or f-number; image format or projection format; mount and interface; substrate materials; coating specification; focusing and aperture mechanisms; electronic content; factory-gate packaging state; production geography; technology; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-normalized rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every foreground amount to 1 kg of accepted, finished objective-lens assemblies; exclude shipping pallets and tertiary transport packaging from the denominator. |
| `electricity_energy` | Purchased electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve meter values and conversion records; convert kWh to MJ using 1 kWh = 3.6 MJ and report delivered electricity at the facility boundary. |
| `water_mass` | Process-water rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass measurement; when volume is metered, retain volume, temperature, density source, and the conversion to kg. |
| `batch_mass_balance` | Material, intermediate, product, reject, and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use dry mass for solid materials unless the purchased or waste flow is explicitly a solution or slurry; record moisture or solids content for wet wastes. |

## 5. System Boundary

The foreground boundary starts when purchased optical-glass pressing blanks, polymer granulates, coating chemicals, optomechanical stock or purchased components, assembly materials, and packaging components cross into the reporting facility. It ends with accepted, tested, cleaned, and packed objective-lens assemblies at the factory gate. Include all site operations causally required for the represented production route, including utilities, internally recycled loops and their losses, rejects, rework, waste handling to the first off-site treatment or recovery hand-off, and direct elementary emissions when measured or calculable.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased optical-glass pressing blanks, optical polymer granulates, coating materials, optomechanical stock or components, assembly materials, and packaging components at receipt into the reporting facility |
| starting_condition_role | Foreground entry condition; upstream production and inbound transport are represented by linked upstream datasets |
| product_classification_scope | Finished mounted objective-lens assemblies for the applications in CPC 3.0 code 48321; classification does not prescribe material or manufacturing route |
| recursive_input_rule | A purchased finished objective lens used as a subassembly is recorded once as an external same-category product input and linked to an upstream dataset; do not recursively reproduce its production inside this foreground package |
| upstream_dataset_requirement | Every purchased material, component, energy carrier, water supply, transport service, and waste-treatment hand-off requires a geographically and technologically representative upstream dataset or an explicit documented gap |
| disclosure | Declare which optical-element, coating, optomechanical, assembly, testing, and packaging steps are in-house or purchased; identify exclusions, cut-offs, shared utilities, rework loops, treatment routes, and data gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_product_identity` | Product inclusion | Include only finished objective-lens assemblies for the stated photographic and projection applications; do not merge the category with complete equipment or general optical elements. | `un-cpc-3-0-structure-2025` |
| `boundary_route_completeness` | Foreground operations | Represent every in-house operation required by the declared route, including glass grinding and polishing, polymer molding, cleaning, coating, optomechanical fabrication, assembly, alignment, testing, and packaging when performed. | `nikon-tochigi-lens-process`; `canon-production-technology` |
| `boundary_waste_separation` | Waste records | Keep solid glass waste, wastewater, polymer lens rejects, aluminium scrap, and final assembly rejects as separate exchanges; do not combine them as residues. | `nikon-lens-environment`; `epa-optical-fabrication-waste-1991` |
| `boundary_upstream_avoidance` | Purchased inputs | Link purchased flows to upstream datasets and exclude their production from foreground equipment records to prevent double counting. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `glass_lens_element_fabrication` | Optical-glass lens-element fabrication | `conditional` | Include when optical-glass pressing blanks are ground, polished, centered, or otherwise finished inside the reporting boundary. | Foreground optical-element production | kg accepted polished optical-glass lens elements |
| `polymer_lens_element_molding` | Polymer optical-lens molding | `conditional` | Include when PMMA, polycarbonate, cyclic olefin copolymer, or another declared optical polymer is molded inside the reporting boundary. | Foreground optical-element production | kg accepted molded polymer lens elements |
| `optical_coating` | Optical cleaning and coating | `conditional` | Include when lens elements are cleaned or coated inside the reporting boundary. | Foreground surface finishing | kg accepted coated optical-lens elements |
| `optomechanical_component_fabrication` | Optomechanical component fabrication | `conditional` | Include when barrels, housings, spacers, focus parts, or aperture parts are machined or molded inside the reporting boundary. | Foreground component production | kg accepted optomechanical components |
| `objective_lens_assembly_testing_packaging` | Objective-lens assembly, alignment, testing, and packaging | `required` | Always include for finished mounted objective-lens production. | Foreground final production | 1 kg accepted objective-lens assemblies at factory gate |

### Process: Optical-glass lens-element fabrication (`glass_lens_element_fabrication`)

This process converts optical-glass pressing blanks into polished and centered lens elements. Its documented sequence and the separate energy and glass-loss records are supported by `nikon-tochigi-lens-process`, `nist-optical-surfaces-1997`, and `nikon-lens-environment`.

#### Inputs

##### Product flows

###### Optical-glass pressing blanks (`glass_optical_glass_blank`)

Record purchased pressing blanks that enter in-house optical finishing.

- Selected flow: Optical Glass Pressing Blank `a68c2948-174f-4e17-a3ee-f2b289d50d18`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured net mass issued to production, less documented unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glass_fabrication_records`
- Sources:

###### Cerium-oxide polishing compound (`glass_cerium_oxide`)

Record cerium oxide only when it is actually issued to the polishing route; other polishing compounds require their own atomic rows.

- Selected flow: Cerium oxide `b23ee368-01e2-4fcd-8e8f-e8115ee04555`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured cerium-oxide mass consumed, corrected for returned or internally recovered compound
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glass_fabrication_records`
- Sources:

###### Process water for grinding, polishing, and cleaning (`glass_process_water`)

Record supplied process water that crosses the process boundary; closed-loop recirculation is not counted again, but make-up and purge water are.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured make-up and once-through process-water mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glass_fabrication_records`
- Sources:

###### Purchased electricity for glass-lens fabrication (`glass_electricity`)

Record metered delivered electricity for pressing, grinding, polishing, centering, cleaning, extraction, and process support allocated to this process.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- Amount rule: measured delivered electricity converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glass_fabrication_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Polished optical-glass lens elements (`glass_polished_lens_element`)

Record the accepted internal intermediate after grinding, polishing, centering, and in-process inspection.

- Selected flow: Polished optical-glass lens element
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured accepted intermediate mass transferred to coating or assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glass_fabrication_records`
- Sources:

##### Waste flows

###### Optical-glass grinding fines (`glass_waste`)

Record captured optical-glass grinding fines leaving the process. Offcuts and rejected elements require their own atomic waste rows. Do not combine this row with wastewater.

- Selected flow: Glass Waste `018da71b-2e3f-41d6-a889-eee14fddf3a1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured dry mass of captured optical-glass grinding fines leaving the process, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glass_fabrication_records`
- Sources:

###### Optical-glass grinding and polishing wastewater (`glass_grinding_polishing_wastewater`)

Record the wet waste stream containing water, glass fines, and polishing residues at the first treatment or off-site hand-off; retain measured solids and water fractions.

- Selected flow: Optical-glass grinding and polishing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured wet wastewater mass with solids-content record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glass_fabrication_records`
- Sources:

##### Elementary flows

### Process: Polymer optical-lens molding (`polymer_lens_element_molding`)

Include only the individual resin cards applicable to the represented product. Plastic optical-part molding is supported by `canon-production-technology`; unlisted polymers shall be added as their own site-specific atomic exchanges.

#### Inputs

##### Product flows

###### PMMA granulate (`polymer_pmma_granulate`)

Record PMMA molding granulate when PMMA optical elements are produced.

- Selected flow: Polymethyl methacrylate (PMMA) granulate `9e35bc6c-2239-4305-9c8a-5a2b3d27caf8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured PMMA granulate issued, net of documented clean regrind returned to the same process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polymer_molding_records`
- Sources:

###### Polycarbonate granulate (`polymer_polycarbonate_granulate`)

Record polycarbonate molding granulate when polycarbonate optical elements are produced.

- Selected flow: Polycarbonate granulate `f4ad7c9a-3141-4c38-b932-45b7e67e05c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured polycarbonate granulate issued, net of documented clean regrind returned to the same process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polymer_molding_records`
- Sources:

###### Cyclic olefin copolymer resin (`polymer_coc_resin`)

Record optical-grade cyclic olefin copolymer resin only when that polymer route is used.

- Selected flow: Cyclic olefin copolymer resin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured cyclic olefin copolymer resin issued, net of documented clean regrind returned to the same process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polymer_molding_records`
- Sources:

###### Purchased electricity for polymer molding (`polymer_electricity`)

Record metered delivered electricity for drying, molding, mold-temperature control, inspection, and allocated process support.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- Amount rule: measured delivered electricity converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_polymer_molding_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Molded polymer optical-lens elements (`polymer_molded_lens_element`)

Record accepted molded optical elements as an internal intermediate, preserving polymer grade and product specification.

- Selected flow: Molded polymer optical-lens element
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured accepted intermediate mass transferred to coating or assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polymer_molding_records`
- Sources:

##### Waste flows

###### Rejected molded polymer optical-lens elements (`polymer_rejected_lens_element`)

Record off-spec molded optical elements leaving the process as waste, with polymer composition and treatment route declared.

- Selected flow: Rejected molded polymer optical-lens element
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured reject mass not returned as clean regrind
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polymer_molding_records`
- Sources:

##### Elementary flows

### Process: Optical cleaning and coating (`optical_coating`)

This process cleans lens elements, applies the declared coating in vacuum or another documented technology, and inspects coated elements. `nikon-tochigi-lens-process` and `canon-fluorite-lens-process` support the sequence; every actual coating substance not listed below requires its own atomic exchange.

#### Inputs

##### Product flows

###### Uncoated optical-glass lens elements (`coating_uncoated_glass_lens_element`)

Record the internal transfer of accepted uncoated glass elements when the glass route applies.

- Selected flow: Polished optical-glass lens element
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured uncoated glass-element mass entering coating
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources:

###### Uncoated polymer optical-lens elements (`coating_uncoated_polymer_lens_element`)

Record the internal transfer of accepted uncoated polymer elements when the polymer route applies.

- Selected flow: Molded polymer optical-lens element
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured uncoated polymer-element mass entering coating
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources:

###### Magnesium-fluoride coating material (`coating_magnesium_fluoride`)

Record magnesium fluoride only when the declared coating recipe uses it; other target or precursor chemicals require separate cards.

- Selected flow: Magnesium fluoride `93bc64cc-df82-4a13-aa0f-9f05cb4b40c9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured virgin target or precursor mass consumed, corrected for recovered material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources:

###### Purchased electricity for cleaning and coating (`coating_electricity`)

Record metered delivered electricity for cleaning, drying, vacuum generation, deposition, environmental control, and inspection allocated to this process.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- Amount rule: measured delivered electricity converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_records`
- Sources:

###### Process water for optical cleaning (`coating_process_water`)

Record supplied process water when wet or ultrasonic cleaning uses water before coating or assembly.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured make-up and once-through cleaning-water mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Coated optical-lens elements (`coating_coated_lens_element`)

Record accepted coated elements as an internal intermediate, preserving substrate, layer stack, and inspection specification.

- Selected flow: Coated optical-lens element
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured accepted coated-element mass transferred to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Optomechanical component fabrication (`optomechanical_component_fabrication`)

Include this process when barrels or other optomechanical components are fabricated in-house. The selected alloy row is conditional; add separate atomic rows for every other actual metal or polymer.

#### Inputs

##### Product flows

###### Aluminium-magnesium alloy for machined parts (`machining_aluminium_magnesium_alloy`)

Record aluminium-magnesium alloy only for product families whose in-house machined components use this alloy.

- Selected flow: Aluminium Magnesium Alloy `ab57ae32-8ffe-47fe-9550-53381391a038`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured alloy stock issued to component fabrication, less unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optomechanical_fabrication_records`
- Sources:

###### Purchased electricity for optomechanical fabrication (`machining_electricity`)

Record metered delivered electricity for machining, molding, cleaning, inspection, extraction, and allocated process support.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- Amount rule: measured delivered electricity converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_optomechanical_fabrication_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Machined objective-lens barrel (`machining_optomechanical_components`)

Record the accepted machined objective-lens barrel transferred to assembly. Every other in-house or purchased optomechanical part requires its own atomic inventory row.

- Selected flow: Machined objective-lens barrel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured accepted machined-barrel mass transferred to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optomechanical_fabrication_records`
- Sources:

##### Waste flows

###### Aluminium scrap from machining (`machining_aluminium_scrap`)

Record segregated aluminium scrap leaving in-house component fabrication; contaminated sludge requires a separate waste row.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured aluminium scrap mass handed to internal recovery or an external receiver
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optomechanical_fabrication_records`
- Sources:

##### Elementary flows

### Process: Objective-lens assembly, alignment, testing, and packaging (`objective_lens_assembly_testing_packaging`)

This required process receives coated elements and optomechanical parts, performs cleaning, assembly, alignment and functional testing, and packs accepted objective lenses. `nikon-tochigi-lens-process` supports the manufacturing and inspection sequence.

#### Inputs

##### Product flows

###### Coated optical-lens elements for assembly (`assembly_coated_lens_element`)

Record coated optical elements entering final assembly, whether internally produced or purchased.

- Selected flow: Coated optical-lens element
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured coated-element mass issued to accepted and rejected assembly lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_testing_packaging_records`
- Sources:

###### Machined objective-lens barrel for assembly (`assembly_optomechanical_components`)

Record the individual machined objective-lens barrel entering assembly. Spacers, retaining rings, focus parts, aperture parts, fasteners, and every other optomechanical item require separate atomic rows when present.

- Selected flow: Machined objective-lens barrel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured or bill-of-materials barrel mass issued to accepted and rejected assembly lots, reconciled with returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_testing_packaging_records`
- Sources:

###### Epoxy adhesive for optical assembly (`assembly_epoxy_adhesive`)

Record formulated epoxy adhesive only when used to secure optical or mechanical parts; other adhesive chemistries require separate atomic rows.

- Selected flow: Epoxy adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured mixed adhesive mass applied plus documented uncured loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_testing_packaging_records`
- Sources:

###### Purchased electricity for assembly and testing (`assembly_electricity`)

Record metered delivered electricity for cleaning, assembly, alignment, focus or aperture checks, optical testing, environmental control, and packaging allocated to this process.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- Amount rule: measured delivered electricity converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_testing_packaging_records`
- Sources:

###### Corrugated-board shipping boxes (`assembly_corrugated_board_boxes`)

Record the measured mass of corrugated boxes supplied with the finished product; inserts, bags, foams, manuals, and other packaging components require their own atomic rows.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured corrugated-box mass packed with accepted product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_testing_packaging_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished objective-lens assemblies (`assembly_objective_lens`)

Record only assemblies that pass the declared optical, mechanical, cleanliness, and packaging acceptance criteria.

- Selected flow: Objective lenses for cameras, projectors or photographic enlargers or reducers `cfef9f14-3271-428b-bebe-47ded2db11d4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: accepted net finished-product mass normalized to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_testing_packaging_records`
- Sources:

##### Waste flows

###### Rejected mounted objective-lens assemblies (`assembly_rejected_objective_lens`)

Record final assemblies rejected and leaving the process without complete disassembly; separately recovered glass, metals, or components are recorded as distinct recovery outputs and deducted from this composite waste mass.

- Selected flow: Rejected mounted objective-lens assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured net rejected-assembly mass sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted objective-lens assemblies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_testing_packaging_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared processes and utilities | Subdivide by product family, route, machine, production cell, or metered area before allocation whenever records permit. |  |
| `allocation_physical_driver` | Residual shared electricity, water, compressed services, and treatment | Allocate residual shared burdens using a documented causal physical driver such as machine time, metered consumption, processed mass, or treatment load; do not use revenue when a causal physical driver is available. |  |
| `allocation_rework` | Rework loops | Assign rework materials, energy, rejects, and losses to the product family that caused the rework; count internal transfers once and disclose repeated processing. |  |
| `allocation_recovered_material` | Glass, polymer, metal, and coating-material recovery | Keep collection, preparation, and transport burdens inside the foreground boundary until the declared recovery hand-off; report any substitution credit or avoided burden only in a separately disclosed scenario. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_glass_fabrication_records` | `glass_lens_element_fabrication` | Optical-glass materials, water, electricity, accepted elements, glass waste, and wastewater | Batch issue, meter, production, and waste records | product model; glass grade; blank mass; cerium-oxide issue and return; water meter; electricity meter; accepted element mass; glass-waste mass; wastewater mass; solids content; treatment route | Reconcile material issues, calibrated meters, accepted-output records, and waste transfer tickets by production lot | kg; kWh; MJ | Per lot, with utility aggregation no coarser than monthly | Representative continuous 12-month period or documented campaign | Each reporting facility and applicable production cell | Sum by process and product family, subtract documented internal returns, convert units, then divide by accepted objective-lens mass | Purchase and issue records; meter calibration; lot travelers; inspection results; waste tickets; mass-balance reconciliation |
| `cp_polymer_molding_records` | `polymer_lens_element_molding` | Polymer granulates, electricity, accepted molded elements, and rejects | Batch issue, meter, molding, and reject records | model; polymer grade; virgin granulate mass; regrind return; electricity; accepted element mass; reject mass; treatment route | Reconcile dryer and molding-cell records with material issues and inspected lot output | kg; kWh; MJ | Per molding lot, with utility aggregation no coarser than monthly | Representative continuous 12-month period or documented campaign | Each reporting facility and molding cell | Sum virgin input and unrecovered rejects by polymer and product family, convert electricity, then normalize to accepted objective-lens mass | Resin certificates; issue records; machine logs; meter records; inspection and reject records |
| `cp_coating_records` | `optical_coating` | Lens elements, coating materials, cleaning water, electricity, and accepted coated elements | Coating batch, target issue, meter, cleaning, and inspection records | substrate identity; layer recipe; target or precursor issue and return; lens mass in and accepted out; water; electricity; rejected mass; chamber and batch id | Reconcile coating travelers, target mass change or issue records, meters, and acceptance inspection | kg; kWh; MJ | Per coating batch, with utility aggregation no coarser than monthly | Representative continuous 12-month period or documented campaign | Each reporting facility, cleaning line, and coating chamber | Aggregate only batches with the same declared technology and recipe, then normalize to accepted objective-lens mass | Recipe authorization; target issue or weighing record; calibrated meters; chamber logs; coating inspection |
| `cp_optomechanical_fabrication_records` | `optomechanical_component_fabrication` | Alloy input, electricity, accepted components, and aluminium scrap | Material issue, machine, meter, inspection, and scrap records | product model; alloy grade; stock mass; electricity; accepted component mass; aluminium scrap mass; coolant-contamination status; recovery route | Reconcile stock issues and returns with accepted component and segregated scrap weights | kg; kWh; MJ | Per lot, with utility aggregation no coarser than monthly | Representative continuous 12-month period or documented campaign | Each reporting facility and machining cell | Sum by alloy and component family, convert electricity, then normalize to accepted objective-lens mass | Material certificate; weigh tickets; machine and meter records; inspection results; recycler receipt |
| `cp_assembly_testing_packaging_records` | `objective_lens_assembly_testing_packaging` | Components, adhesive, electricity, packaging, accepted product, and final rejects | Bill of material, batch issue, meter, test, packing, and reject records | model; optical-element mass; component-set mass; adhesive mix and loss; electricity; each packaging-component mass; accepted net product mass; test result; reject mass and route | Reconcile BOM issues with serial or lot acceptance, packing records, and rejected-assembly disposition | kg; kWh; MJ | Per assembly lot, with utility aggregation no coarser than monthly | Representative continuous 12-month period or documented campaign | Each reporting facility and assembly or test line | Sum accepted and rejected lots by product family, convert electricity, and divide every exchange by accepted net finished-product mass | BOM revision; issue records; meter calibration; test reports; serial or lot acceptance; packing specification; waste ticket |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory row | Normalized amount = net exchange amount attributable to the represented product family / accepted net objective-lens mass. | Net row amount; accepted net objective-lens mass | Exchange amount per 1 kg reference product |  |
| `calc_electricity_conversion` | Electricity rows | Delivered electricity in MJ = metered electricity in kWh × 3.6; subtract separately metered export and exclude upstream generation emissions from foreground elementary flows. | Metered kWh; documented export | MJ delivered electricity |  |
| `calc_water_conversion` | Process-water rows | Water mass = metered volume × recorded or justified density at the measurement condition; retain original volume and density evidence. | Water volume; temperature; density | kg process water |  |
| `calc_material_return` | Material input rows | Net material input = issued virgin material + externally supplied recycled material - unopened return - documented same-process internal return already counted in the issue record. | Issue, return, and inventory records | kg net material input |  |
| `calc_reject_yield` | Product and reject rows | Accepted yield = accepted product mass / (accepted product mass + unrecovered reject mass); report separately by product family and route. | Accepted mass; reject mass | Accepted yield and normalized reject mass |  |
| `calc_mass_balance` | Each material-processing process | Reconcile measured material inputs with accepted output, transferred intermediates, wastes, emissions, inventory change, and documented internal return; investigate unexplained imbalance before publication. | Input, output, waste, return, and stock-change records | Process mass-balance residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Link records to model or product family and declare all required qualifiers, acceptance specifications, and factory-gate packaging state. | Product specification, BOM revision, routing, and acceptance-test record |
| `dq_route_completeness` | Process map | Identify every in-house and purchased step and explain every not-applicable conditional process; add atomic rows for actual materials, packaging components, wastes, and direct emissions not represented by the cards above. | Approved process flow, supplier list, utility map, waste register, and completeness review |
| `dq_measurement` | Metered and weighed exchanges | Use calibrated or verified instruments; retain unit conversions, allocation drivers, meter coverage, and estimates used to close data gaps. | Calibration certificates, meter map, weigh records, and calculation workbook |
| `dq_temporal` | Foreground data | Prefer a representative continuous 12-month period; for campaigns, document start and end dates, production volume, seasonality, maintenance, and why the campaign represents normal operation. | Reporting-period records and representativeness statement |
| `dq_mass_balance` | Material-processing processes | Resolve material-balance discrepancies and prevent double counting of internal intermediates, returned slurry, polymer regrind, rework, and recovered scrap. | Signed reconciliation by process and product family |
| `dq_source_match` | Upstream datasets | Match material grade, product state, electricity grid, water supply, geography, technology, and waste-treatment route; disclose proxy datasets. | Dataset-selection log and gap register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | Reference flow | `assembly_objective_lens` shall use UUID `cfef9f14-3271-428b-bebe-47ded2db11d4`, Mass, kg, and normalize to exactly 1 kg accepted finished product. | `un-cpc-3-0-structure-2025` |
| `validation_required_process` | Process map | `objective_lens_assembly_testing_packaging` shall be present; each conditional process shall be included or carry a product- and site-specific not-applicable explanation. | `nikon-tochigi-lens-process` |
| `validation_atomic_inventory` | Inventory | Every actual material, electricity supply, water supply, packaging component, waste stream, and direct elementary emission shall be represented by one atomic row with direction, flow type, amount rule, basis, evidence, and UUID or declared unresolved identity. |  |
| `validation_internal_transfers` | Intermediate flows | The mass and identity of each internal lens-element or component transfer shall agree between the supplying and receiving processes; do not count the transfer as a purchased input. |  |
| `validation_route_materials` | Glass, polymer, coating, and optomechanical routes | Include only applicable material cards and add separate rows for every actual unlisted glass, polymer, polishing compound, coating substance, metal, plastic, adhesive, or packaging component. | `canon-production-technology`; `nikon-tochigi-lens-process` |
| `validation_waste_routes` | Waste outputs | Solid glass waste, wastewater, polymer rejects, aluminium scrap, and composite assembly rejects shall not be merged; state moisture or solids content and the first treatment or recovery hand-off. | `nikon-lens-environment`; `epa-optical-fabrication-waste-1991` |
| `validation_electricity_scope` | Electricity | Electricity shall be process-attributed, converted consistently to MJ, and shall not cause upstream grid emissions to be repeated as foreground elementary flows. |  |
| `validation_data_period` | Foreground package | Data shall cover the declared period and facilities, identify estimation and allocation shares, and disclose any process whose records do not meet the collection protocol. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; may serve as `background_dataset` only after independent methodology and data-quality review |
| downstream_use | Foreground process datasets and lifecycle-model projections for products using camera, projector, photographic enlarger, or photographic reducer objective lenses |
| allowed_use | Products matching the declared application, optical performance, material route, coating, optomechanical content, factory-gate state, geography, technology, and reporting period |
| excluded_use | Complete equipment; unmounted general optical elements; ophthalmic, microscope, telescope, or unrelated instrument objectives; materially different substrate, coating, electronics, or assembly routes without adjustment |
| required_metadata | PCR id and version; model or product family; required qualifiers; included and purchased processes; facility geography; technology; reporting period; allocation; cut-offs; upstream dataset references; UUID gaps; packaging state |
| required_quality_disclosure | Primary-data share; meter and mass coverage; allocation shares and drivers; accepted yield and reject treatment; material-balance residuals; data gaps; proxies; uncertainty; review status |
| update_trigger | Material change in product design, optical substrate, coating recipe, optomechanical or electronic content, supplier structure, process technology, facility, electricity mix, waste route, packaging, allocation, reference UUID, or evidence contract |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | English classification identity and exact CPC 48321 boundary context |
| `un-cpc-1-1-chinese-2004` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition, Series M No. 77/Ver.1.1. https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf | Verified professional Chinese rendering of the unchanged CPC 48321 title |
| `nikon-tochigi-lens-process` | `handbook` | Tochigi Nikon Corporation, NIKKOR lens work process. https://www.jp.nikon.com/company/corporate/group/ktn/businesses/imaging/process/ | Independent manufacturer evidence for grinding, precision grinding, polishing, coating, component machining and molding, assembly, and performance checks |
| `nikon-lens-environment` | `handbook` | Nikon Corporation, Reducing CO2 emissions from lens manufacturing process through technology. https://www.nikon.com/company/sustainability/highlight/1803_co2/ | Energy materiality, pressed-glass grinding and polishing, glass loss, and reject tracking; case values are not used as PCR ranges |
| `canon-production-technology` | `handbook` | Canon Inc., Production Technology. https://global.canon/en/technology/canon-tech/tech/production-tech/ | Plastic molding as a camera-lens optical-part route and precision grinding and polishing of aspherical camera lenses |
| `canon-fluorite-lens-process` | `handbook` | Canon Camera Museum, Fluorite lenses: Corrective capabilities beyond the limits of ordinary optical glass. https://global.canon/en/c-museum/special/exhibition2.html | Trimming, grinding, polishing, high-vacuum coating, interferometric inspection, and assembly hand-off for camera-lens elements |
| `nist-optical-surfaces-1997` | `official_guidance` | T. V. Vorburger, C. J. Evans, and C. Asmail, Calibration and Fabrication Facilities for Optical Surfaces, NIST, 1997. https://www.nist.gov/publications/calibration-and-fabrication-facilities-optical-surfaces | Optical grinding, polishing, surface inspection, and metrology process evidence |
| `epa-optical-fabrication-waste-1991` | `official_guidance` | M. Drabkin and E. Rissmann, Waste Minimization Opportunity Assessment: Optical Fabrication Laboratory, EPA/600/S2-91/031, 1991. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=30003U24.TXT | Separate glass-fines and washwater records in an older ophthalmic glass-lens facility; used only for waste-stream identification, not amounts or applicability of lead-bearing blocking technology |
