---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tubes-pipes-and-hollow-profiles-of-cast-iron-tubes-and-pipes-of-centrifugally-cast-steel
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Tubes, pipes and hollow profiles of cast-iron; tubes and pipes of centrifugally cast-steel

## 1. Scope and Applicability

This PCR applies to factory-gate production of cast-iron tubes, pipes and hollow profiles and to steel tubes and pipes whose cylindrical body is formed by centrifugal casting. It covers grey and ductile cast iron and centrifugally cast carbon, low-alloy or high-alloy steel when the finished product remains within this semantic category. The data package shall declare the metal grade, product form and dimensions, pressure or service specification, mould route, melting furnace, heat treatment, machining, testing, and any factory-applied lining or external coating.

The PCR excludes wrought, seamless-extruded, rolled or welded steel tubes and pipes; tube or pipe fittings; fabrication of pipeline systems; transport after the factory gate; installation; use; maintenance; and end-of-life. A steel product is not in scope merely because centrifugal equipment is used for another operation: the pipe body itself must be centrifugally cast. The product category is distinct from other seamless or welded steel tube PCR identities already present in the library.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tubes-pipes-and-hollow-profiles-of-cast-iron-tubes-and-pipes-of-centrifugally-cast-steel |
| classification_refs | CPC 3.0: 41291 (exact classification context; mapping acceptance remains separately governed) |
| covered_products | Cast-iron tubes, pipes and hollow profiles; tubes and pipes made from steel by centrifugal casting |
| excluded_products | Wrought, rolled, extruded, seamless-pierced or welded steel tubes and pipes; tube and pipe fittings; installed pipeline systems |
| representative_product | Finished, conforming, factory-gate cast-iron pipe or centrifugally cast-steel pipe, including only linings and coatings actually applied before sale |
| production_route | Ferrous charge preparation and melting; metal treatment; centrifugal casting in a rotating permanent or sand-lined mould; route-required heat treatment; cleaning, machining, testing, lining/coating and marking |
| market_state | Finished product at the manufacturing site gate, identified by grade, dimensions, standard/service class and surface condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished cast-iron tube, pipe or hollow profile, or finished centrifugally cast-steel tube or pipe, meeting the declared product specification |
| How much | 1,000 kg net mass of accepted product |
| How well | Conforming to the declared grade, dimensions, mechanical properties, pressure/service requirements, tests, and lining/coating specification |
| How long or cycle | One production reporting period; no use-life equivalence is asserted |
| reference_flow_link | `ft_reference_product` in `finishing_testing_and_coating` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Tubes, pipes and hollow profiles of cast-iron, tubes and pipes of centrifugally cast-steel `122e65ff-cac1-4c63-a199-7d204800d6f3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cast-iron or centrifugally cast-steel route; grey/ductile iron or steel grade; tube/pipe/hollow-profile form; nominal diameter and wall thickness; product standard and service class; pressure rating where relevant; furnace and mould route; heat-treatment condition; machining allowance; lining and coating system; manufacturing geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all exchanges to 1,000 kg of product that passed the declared final acceptance tests. Exclude shipping packaging and rejected product from reference mass. |
| `material_mass` | charge materials, additives, lining/coating materials, wastes and internal intermediates | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated scale records; state whether wet, dry, as-received, elemental-content or formulation mass is reported, and do not mix these bases. |
| `electricity_energy` | grid-supplied alternating current | Net calorific value | MJ | Retain the directly metered electricity quantity by process. When meters report kWh, convert to MJ using 1 kWh = 3.6 MJ and retain the original reading. |
| `gas_volume` | gaseous natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report measured volume with temperature, pressure and standard/reference-condition convention; never combine gases with different reference conditions. |
| `water_mass` | process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net water crossing the foreground boundary. When volume is metered, document measured density or the justified conversion used. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased primary and secondary ferrous materials, alloy/treatment additions, fuels, fluxes, mould materials, coating/lining materials, water and electricity as they cross the manufacturing-site boundary |
| starting_condition_role | Gate-to-gate foreground starting condition with upstream production represented by linked background datasets |
| product_classification_scope | Cast-iron tubes, pipes and hollow profiles and centrifugally cast-steel tubes and pipes; not fittings or wrought/welded tube routes |
| recursive_input_rule | A returned product of this same category that is externally purchased shall be recorded as an input with its upstream dataset; internal same-site returns are closed-loop intermediates and are not recursively modelled as a new external product input. |
| upstream_dataset_requirement | Every purchased material, fuel, electricity and treatment input shall link to an upstream dataset matching declared geography, technology, grade/state and delivery boundary, or disclose a justified proxy. |
| disclosure | Declare furnace type, metallic-charge composition, internal-return accounting, mould and core route, heat treatment, energy sources, abatement, machining, rejection, testing, and factory-applied lining/coating. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all foreground processes | Include raw-material handling at the site, melting and treatment, mould preparation directly used by the product, centrifugal casting and cooling, required heat treatment, cleaning, machining, testing, factory-applied lining/coating, marking, internal handling, on-site abatement, and management of wastes up to their first off-site transfer. | `eu-jrc-sf-bref-2024`, `dipra-cast-iron-pipe-handbook-1978`, `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995` |
| `boundary_route_condition` | conditional processes and flows | Include only the declared cast-iron or centrifugally cast-steel route and only furnace, mould, core, heat-treatment, machining, test, lining and coating operations actually used for the reference product. | `eu-jrc-sf-bref-2024`, `iso-2531-2009`, `astm-a451-a451m-20` |
| `boundary_direct_releases` | site emissions and wastes | Record direct releases and captured residues at the process where they arise; do not add upstream electricity or purchased-material emissions as foreground elementary flows. | `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995` |
| `boundary_exclusions` | downstream life cycle | Exclude transport after the manufacturing gate, installation, use, maintenance and end-of-life unless a separate downstream model explicitly adds them. | `unsd-cpc-3-0-structure-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `metal_melting_and_treatment` | Ferrous charge preparation, melting and metal treatment | `required` | Always; route-specific inputs are marked on their individual cards | Foreground production of molten cast iron or molten steel | Per 1,000 kg accepted reference product |
| `centrifugal_casting` | Mould preparation, centrifugal casting and cooling | `required` | Always; sand lining and socket cores are included only when used | Foreground formation of the hollow product body | Per 1,000 kg accepted reference product |
| `heat_treatment` | Annealing or steel heat treatment | `conditional` | Include when required by grade, product standard, customer specification or the declared manufacturing route | Foreground thermal conditioning | Per 1,000 kg accepted reference product |
| `finishing_testing_and_coating` | Cleaning, machining, testing, lining/coating and marking | `required` | Always; individual lining/coating inputs are conditional on the as-sold product | Foreground completion and acceptance | 1,000 kg accepted reference product |

### Process: Ferrous charge preparation, melting and metal treatment (`metal_melting_and_treatment`)

#### Inputs

##### Product flows

###### Pig iron charge (`mm_pig_iron`)

Record pig iron weighed into a cast-iron melt when used.

- Selected flow: pig iron `439daa27-1495-4a1b-8dec-d9adabba0269`
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received batch mass charged to the furnace; zero only when batch records demonstrate no pig iron input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_materials`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`, `eu-jrc-sf-bref-2024`

###### Scrap-steel charge (`mm_scrap_steel`)

Record clean steel scrap crossing the site boundary and charged to either declared route.

- Selected flow: Scrap Steel `6cb5e364-ba39-4009-8b40-a76fdc88bc42`
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received external scrap mass; exclude internal returns already inside the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_materials`
- Sources: `eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

###### Metallurgical coke for cupola melting (`mm_metallurgical_coke`)

Record coke only for a declared cupola route.

- Selected flow: metallurgical coke `a94c42b1-7fa9-42f3-a9d1-1e7353e8490d`
- Flow property / unit: Mass / kg
- Amount rule: Measured coke mass charged to the cupola
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuels_and_energy`
- Sources: `eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`

###### Gaseous natural gas for melting or holding (`mm_natural_gas`)

Record purchased gaseous natural gas consumed by melting, holding, rotary-furnace or burner systems.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered volume allocated to melting and holding, with reference conditions and allocation basis retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuels_and_energy`
- Sources: `eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`

###### Grid-supplied alternating current (`mm_grid_electricity`)

Record electricity delivered to melting, holding, charging, extraction and associated process equipment; the final Tiangong UUID remains under manual review.

- Selected flow: Grid-supplied alternating current
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or a documented allocation from the site meter, preserving the original kWh reading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuels_and_energy`
- Sources: `eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

###### Limestone flux (`mm_limestone_flux`)

Record limestone used as furnace flux.

- Selected flow: Limestone `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- Flow property / unit: Mass / kg
- Amount rule: Measured batch mass charged as flux
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_materials`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

###### Rare-earth magnesium alloy for ductile-iron treatment (`mm_magnesium_alloy`)

Record this nodularising alloy only when it is the actual magnesium-bearing treatment product for ductile iron.

- Selected flow: Rare earth magnesium alloy `e117530c-8388-4549-b784-fce6ddb8df6b`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass added to the molten iron; retain the supplier grade and magnesium content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_materials`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`

###### Industrial oxygen for oxygen-assisted melting or refining (`mm_industrial_oxygen`)

Record oxygen only when metered oxygen lancing or oxy-fuel assistance is used.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered oxygen volume, with purity, pressure and reference conditions declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_materials`
- Sources: `eu-jrc-sf-bref-2024`, `us-epa-ap42-steel-foundries-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Molten cast iron at ladle discharge (`mm_molten_cast_iron`)

Record the internal molten cast-iron intermediate transferred to centrifugal casting.

- Selected flow: Molten cast iron at ladle discharge
- Flow property / unit: Mass / kg
- Amount rule: Calculated from ladle weights or measured metal-transfer mass for the cast-iron route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_mass_balance`
- Sources: `eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`

###### Molten steel at foundry ladle discharge (`mm_molten_steel`)

Record the internal molten-steel intermediate transferred to centrifugal casting.

- Selected flow: Molten steel at foundry ladle discharge
- Flow property / unit: Mass / kg
- Amount rule: Calculated from ladle weights or measured metal-transfer mass for the centrifugally cast-steel route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_mass_balance`
- Sources: `eu-jrc-sf-bref-2024`, `us-epa-ap42-steel-foundries-1995`

##### Waste flows

###### Cast-iron foundry slag (`mm_cast_iron_slag`)

Record separated slag from the cast-iron melting route; no exact Tiangong waste UUID is confirmed.

- Selected flow: Cast-iron foundry slag
- Flow property / unit: Mass / kg
- Amount rule: Weighed slag leaving the process, net of documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`

###### Steel slag (`mm_steel_slag`)

Record slag separated from the centrifugally cast-steel melting and refining route.

- Selected flow: Steel slag `a58d033e-31dc-4e26-a4a7-a5c6caeb2766`
- Flow property / unit: Mass / kg
- Amount rule: Weighed slag leaving the process, net of documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `us-epa-ap42-steel-foundries-1995`

###### Dust-removal ash from melting and treatment (`mm_captured_dust`)

Record particulate captured by melting and treatment exhaust controls as a waste output.

- Selected flow: Dust removal ash `a2bf9717-8d95-46fd-a485-6ecc0e32dfb6`
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry or as-collected mass, with moisture basis and disposal or recycling route declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

##### Elementary flows

###### Direct fossil carbon dioxide (`mm_fossil_co2`)

Record only direct fossil carbon dioxide from on-site fuel and charge-carbon oxidation in melting and treatment.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculation from verified fuel/charge quantity and supplier carbon data; exclude upstream electricity emissions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_releases`
- Sources: `eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

###### Direct fossil carbon monoxide (`mm_fossil_co`)

Record direct fossil carbon monoxide released after on-site control.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Process-specific continuous monitoring or representative stack-test result multiplied by measured exhaust flow and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_releases`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

###### Particulate matter released after melting controls (`mm_particulate_air`)

Record total particulate matter of unspecified particle size released to air after control; separately reported size fractions shall not be double counted.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Process-specific stack or fugitive-emission measurement normalized from measured exhaust flow and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_releases`
- Sources: `eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

### Process: Mould preparation, centrifugal casting and cooling (`centrifugal_casting`)

#### Inputs

##### Product flows

###### Molten cast iron supplied to the rotating mould (`cc_molten_cast_iron`)

Record the internal molten cast-iron input for the cast-iron route.

- Selected flow: Molten cast iron at centrifugal-casting inlet
- Flow property / unit: Mass / kg
- Amount rule: Same transfer quantity as `mm_molten_cast_iron`, reconciled for documented holding loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_mass_balance`
- Sources: `eu-jrc-sf-bref-2024`, `dipra-cast-iron-pipe-handbook-1978`

###### Molten steel supplied to the rotating mould (`cc_molten_steel`)

Record the internal molten-steel input for the centrifugally cast-steel route.

- Selected flow: Molten steel at centrifugal-casting inlet
- Flow property / unit: Mass / kg
- Amount rule: Same transfer quantity as `mm_molten_steel`, reconciled for documented holding loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_mass_balance`
- Sources: `eu-jrc-sf-bref-2024`

###### Silica sand for sand lining or socket core (`cc_silica_sand`)

Record silica sand only when a sand-lined mould or sand core is used for the declared product.

- Selected flow: silica sand `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- Flow property / unit: Mass / kg
- Amount rule: Fresh and externally regenerated silica-sand mass entering the process; exclude recirculated sand that does not cross the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_materials`
- Sources: `eu-jrc-sf-bref-2024`, `dipra-cast-iron-pipe-handbook-1978`

###### Grid-supplied alternating current for casting (`cc_grid_electricity`)

Record electricity for mould rotation, cooling circulation, extraction and casting-line auxiliaries; the final Tiangong UUID remains under manual review.

- Selected flow: Grid-supplied alternating current
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or documented allocation from the site meter, preserving the original kWh reading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_energy`
- Sources: `eu-jrc-sf-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Uncoated centrifugally cast-iron body (`cc_cast_iron_pipe_body`)

Record the solidified cast-iron tube, pipe or hollow-profile body transferred to later processing.

- Selected flow: Uncoated centrifugally cast-iron pipe or hollow-profile body
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balance-calculated output after mould removal, before heat treatment and finishing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_mass_balance`
- Sources: `eu-jrc-sf-bref-2024`, `dipra-cast-iron-pipe-handbook-1978`

###### Uncoated centrifugally cast-steel body (`cc_cast_steel_pipe_body`)

Record the solidified centrifugally cast-steel tube or pipe body transferred to later processing.

- Selected flow: Uncoated centrifugally cast-steel pipe body
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balance-calculated output after mould removal, before heat treatment and finishing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_mass_balance`
- Sources: `eu-jrc-sf-bref-2024`, `astm-a451-a451m-20`

##### Waste flows

###### Spent foundry sand (`cc_spent_foundry_sand`)

Record spent sand removed from mould linings or cores and sent outside the process after internal reclamation.

- Selected flow: Spent foundry sand
- Flow property / unit: Mass / kg
- Amount rule: Weighed sand leaving the internal reclamation loop, with moisture and treatment route declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

##### Elementary flows

###### Particulate matter released after casting controls (`cc_particulate_air`)

Record particulate matter released from mould preparation, pouring, cooling and core removal after controls.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Process-specific monitoring or representative stack/fugitive test normalized by measured production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_releases`
- Sources: `eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

### Process: Annealing or steel heat treatment (`heat_treatment`)

#### Inputs

##### Product flows

###### Cast-iron body entering heat treatment (`ht_cast_iron_pipe_body`)

Record the internal cast-iron body only when annealing or another declared heat treatment is applied.

- Selected flow: Centrifugally cast-iron pipe body before heat treatment
- Flow property / unit: Mass / kg
- Amount rule: Mass transferred into the heat-treatment furnace
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_mass_balance`
- Sources: `dipra-cast-iron-pipe-handbook-1978`, `eu-jrc-sf-bref-2024`

###### Cast-steel body entering heat treatment (`ht_cast_steel_pipe_body`)

Record the internal steel body when the declared steel grade requires heat treatment.

- Selected flow: Centrifugally cast-steel pipe body before heat treatment
- Flow property / unit: Mass / kg
- Amount rule: Mass transferred into the heat-treatment furnace
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_mass_balance`
- Sources: `eu-jrc-sf-bref-2024`, `astm-a451-a451m-20`

###### Gaseous natural gas for heat treatment (`ht_natural_gas`)

Record natural gas consumed by the heat-treatment furnace when gas firing is used.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered heat-treatment-furnace volume with reference conditions declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `eu-jrc-sf-bref-2024`

###### Grid-supplied alternating current for heat treatment (`ht_grid_electricity`)

Record electricity consumed when an electric heat-treatment furnace or electric auxiliary is used; the final Tiangong UUID remains under manual review.

- Selected flow: Grid-supplied alternating current
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or documented allocation, preserving original kWh readings
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `eu-jrc-sf-bref-2024`

###### Process water used as quench makeup (`ht_process_water`)

Record net process-water makeup only when water quenching is used; recirculated water that does not cross the boundary is excluded.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-balance makeup-water mass, with density conversion documented when volume is measured
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `astm-a451-a451m-20`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Heat-treated centrifugally cast-iron body (`ht_heat_treated_cast_iron_body`)

Record the internal cast-iron body after the specified heat-treatment cycle.

- Selected flow: Heat-treated centrifugally cast-iron pipe body
- Flow property / unit: Mass / kg
- Amount rule: Output mass reconciled with furnace input and documented rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_mass_balance`
- Sources: `dipra-cast-iron-pipe-handbook-1978`, `eu-jrc-sf-bref-2024`

###### Heat-treated centrifugally cast-steel body (`ht_heat_treated_cast_steel_body`)

Record the internal steel body after the specified heat-treatment and quench/cooling cycle.

- Selected flow: Heat-treated centrifugally cast-steel pipe body
- Flow property / unit: Mass / kg
- Amount rule: Output mass reconciled with furnace input and documented rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_mass_balance`
- Sources: `eu-jrc-sf-bref-2024`, `astm-a451-a451m-20`

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from heat treatment (`ht_fossil_co2`)

Record direct fossil carbon dioxide only from on-site heat-treatment fuel combustion.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculation from verified gas quantity and supplier carbon data; exclude upstream electricity emissions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_releases`
- Sources: `eu-jrc-sf-bref-2024`

### Process: Cleaning, machining, testing, lining/coating and marking (`finishing_testing_and_coating`)

#### Inputs

##### Product flows

###### Cast-iron body entering finishing (`ft_cast_iron_pipe_body`)

Record the cast-iron body entering cleaning and finishing, after heat treatment where applicable.

- Selected flow: Cast-iron pipe or hollow-profile body before finishing
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balance-calculated transfer mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_mass_balance`
- Sources: `dipra-cast-iron-pipe-handbook-1978`

###### Cast-steel body entering finishing (`ft_cast_steel_pipe_body`)

Record the centrifugally cast-steel body entering machining and finishing, after heat treatment where applicable.

- Selected flow: Centrifugally cast-steel pipe body before finishing
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balance-calculated transfer mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_mass_balance`
- Sources: `astm-a451-a451m-20`

###### Grid-supplied alternating current for finishing and tests (`ft_grid_electricity`)

Record electricity for cleaning, machining, pressure testing, coating/lining, ventilation and marking; the final Tiangong UUID remains under manual review.

- Selected flow: Grid-supplied alternating current
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or documented allocation, preserving original kWh readings
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `dipra-cast-iron-pipe-handbook-1978`, `astm-a451-a451m-20`

###### Process water for testing, cleaning or mortar preparation (`ft_process_water`)

Record net process water crossing the boundary for hydrostatic testing, cleaning or cement-mortar preparation; distinguish each use in raw records.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Net makeup-water mass by use, excluding recirculation that remains inside the site system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `dipra-cast-iron-pipe-handbook-1978`, `iso-2531-2009`

###### Ordinary Portland cement for internal lining (`ft_portland_cement`)

Record this exact cement grade only when it is actually used in a factory-applied cement-mortar lining; otherwise use a separately verified atomic cement flow.

- Selected flow: Cement, ordinary portland cement, 52.4mpa `5333f41c-446a-4d3f-82f3-a53e879c0a12`
- Flow property / unit: Mass / kg
- Amount rule: Measured dry cement mass incorporated plus documented preparation loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `iso-2531-2009`, `dipra-cast-iron-pipe-handbook-1978`

###### Silica sand for cement-mortar lining (`ft_silica_sand`)

Record silica sand only when it is incorporated into a factory-applied cement-mortar lining.

- Selected flow: silica sand `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- Flow property / unit: Mass / kg
- Amount rule: Measured dry sand mass incorporated plus documented preparation loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `iso-2531-2009`, `dipra-cast-iron-pipe-handbook-1978`

###### Special-high-grade zinc for metallic coating (`ft_zinc_metal`)

Record this exact zinc product only when it is applied as the declared factory metallic coating.

- Selected flow: Special High Grade zinc metal `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- Flow property / unit: Mass / kg
- Amount rule: Applied zinc mass from batch issue and coating-recovery records, with grade and coating system declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `iso-2531-2009`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted factory-gate reference product (`ft_reference_product`)

Record only finished products that passed the declared dimensional, mechanical, pressure/service and surface-condition acceptance checks.

- Selected flow: Tubes, pipes and hollow profiles of cast-iron, tubes and pipes of centrifugally cast-steel `122e65ff-cac1-4c63-a199-7d204800d6f3`
- Flow property / unit: Mass / kg
- Amount rule: Fixed normalization output of 1,000 kg net accepted product; retain measured batch output before normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_product`
- Sources: `unsd-cpc-3-0-structure-2025`, `iso-2531-2009`, `astm-a451-a451m-20`

##### Waste flows

###### Iron-metal chips from cast-iron finishing (`ft_iron_machining_chips`)

Record iron chips removed during machining of cast-iron products and transferred out of the finishing process.

- Selected flow: Iron metal chips `8aa263a4-39e5-475e-966b-d967747ecc9c`
- Flow property / unit: Mass / kg
- Amount rule: Weighed chip mass, with adhering coolant/moisture basis and internal remelting route declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `eu-jrc-sf-bref-2024`, `dipra-cast-iron-pipe-handbook-1978`

###### Steel chips from cast-steel finishing (`ft_steel_machining_chips`)

Record steel chips removed during machining of centrifugally cast-steel products and transferred out of the finishing process.

- Selected flow: Steel chips `bcb2604e-4735-4b7d-88ab-03de8ff5930b`
- Flow property / unit: Mass / kg
- Amount rule: Weighed chip mass, with adhering coolant/moisture basis and internal remelting route declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `eu-jrc-sf-bref-2024`, `astm-a451-a451m-20`

##### Elementary flows

###### Particulate matter released after finishing controls (`ft_particulate_air`)

Record particulate matter released from cleaning, grinding, blasting and machining after controls.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Process-specific monitoring, representative test, or a documented capture mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_releases`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | multi-product site operations | Prefer process subdivision and direct metering by furnace, casting line, heat-treatment batch and finishing line. Allocate shared measurements only after technically justified subdivision is exhausted. |  |
| `allocation_shared_operations` | unavoidable shared burdens | Allocate shared burdens by a causal physical driver such as metered energy, operating time, treated mass or machine time. If no defensible physical relationship exists and multiple marketable products leave the system, use documented economic allocation and report a mass-allocation sensitivity result. |  |
| `allocation_internal_returns` | gates, risers, rejects, chips and dust returned on site | Treat internal returns as internal flows: retain the burdens that generated them, record remelting energy and yield loss, and do not assign an avoided-product credit within this product system. | `eu-jrc-sf-bref-2024` |
| `allocation_exported_residues` | slag, dust, sand or metal residues leaving the site | Classify each exported residue as waste or co-product using the foreground disposition and market evidence. Do not apply an avoided-burden credit inside this gate-to-gate inventory; any downstream substitution belongs in an explicitly separate scenario. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_charge_materials` | `metal_melting_and_treatment` | external metallics, flux and treatment additions | scale tickets, batch sheets and supplier certificates | material identity; supplier grade; batch id; gross/tare/net mass; moisture or assay basis; furnace; product route | Reconcile calibrated scale tickets to batch sheets and purchasing records | kg and declared composition basis | each charge | complete reporting period | all furnaces serving the declared product | Sum external inputs by exact material and route; exclude internal returns from external-input totals | scale calibration; supplier certificate; batch reconciliation |
| `cp_fuels_and_energy` | `metal_melting_and_treatment` | coke, natural gas and electricity | charge sheets, invoices and process meters | fuel identity; coke mass; gas volume; temperature/pressure convention; kWh; meter id; furnace; operating period | Direct weigh or submeter; document allocation only where a shared meter cannot be subdivided | kg, m3, kWh and MJ | each batch or meter interval | complete reporting period | melting, holding and associated control equipment | Sum by energy carrier and convert kWh to MJ using `calc_electricity_conversion` | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_internal_mass_balance` | all foreground processes | molten metal and pipe-body intermediates | ladle, scale, production and rejection records | route; batch; input mass; output mass; returns; spills; rejects; transfer point | Reconcile successive process-stage records without creating an external upstream burden for internal returns | kg | each batch | complete reporting period | all included lines | Sum by route and stage; disclose unexplained mass-balance difference | calibrated scales; signed batch reconciliation; reject log |
| `cp_casting_materials` | `centrifugal_casting` | sand lining and core material | issue, return and reclamation records | sand identity; dry/as-received mass; mould type; core use; recovered mass; discarded mass | Weigh fresh/external sand and reconcile internal reuse | kg | each batch or shift | complete reporting period | all included casting machines | Sum external sand by exact product; do not count internal recirculation as a new input | scale calibration; reclamation log; stock reconciliation |
| `cp_casting_energy` | `centrifugal_casting` | casting-line electricity | submeter or allocated site-meter record | kWh; meter id; casting machine; cooling system; operating time; product batch | Direct submeter preferred; otherwise allocate by measured machine time and rated/verified load | kWh and MJ | meter interval | complete reporting period | rotating mould, cooling, extraction and direct auxiliaries | Sum readings and convert by `calc_electricity_conversion` | meter calibration; machine-time log; allocation worksheet |
| `cp_heat_treatment_records` | `heat_treatment` | heat-treatment inputs | furnace recipe, gas/electric meter and quench makeup record | grade; batch; cycle; temperature/time record; gas volume; kWh; water makeup; quench route | Link each heat-treatment cycle to product batch and process meters | m3, kWh, MJ and kg | each cycle | complete reporting period | all included heat-treatment furnaces | Sum by route and normalize to accepted product from the same batches | calibrated meters; validated furnace chart; quench-tank balance |
| `cp_finishing_records` | `finishing_testing_and_coating` | machining, testing and applied lining/coating inputs | line meters, batch issue records, test logs and coating records | product batch; kWh; water makeup; cement/sand/zinc identity and mass; applied system; recovery; test status | Reconcile issued material and utility meters to accepted and rejected products | kg, kWh and MJ | each batch or shift | complete reporting period | all included finishing and test lines | Sum exact inputs by route and surface system; exclude absent coating/lining rows | meter/scale calibration; material certificate; coating and test log |
| `cp_waste_outputs` | all foreground processes | separately identified waste outputs | waste scale tickets, internal return logs and transfer manifests | waste identity; process origin; mass; moisture; destination; internal return; hazardous classification | Weigh each atomic waste stream and reconcile transfers and internal returns | kg | each transfer and monthly reconciliation | complete reporting period | all included process areas | Sum by exact waste identity and disposition; do not combine slag, sand, dust or metal chips | calibrated scales; signed manifests; stock-change reconciliation |
| `cp_direct_air_releases` | all foreground processes | direct elementary releases | CEMS, stack tests, fugitive tests and verified fuel-carbon records | substance; process; concentration; exhaust flow; operating time; control state; fuel/charge amount; carbon data | Use site-specific monitoring or representative compliant testing; use carbon calculation only with verified foreground activity and supplier data | kg, concentration and flow units | continuous or each representative campaign | representative coverage of the reporting period | all included stacks and material fugitive sources | Calculate released mass by substance and process; prevent overlap between total particulate and size fractions | instrument calibration; laboratory report; sampling plan; operating-condition match |
| `cp_reference_product` | `finishing_testing_and_coating` | accepted product output | production, weighing and final-inspection records | product id; route; grade; dimensions; standard; lining/coating; gross/net mass; acceptance result; rejection reason | Sum calibrated net masses only for conforming product | kg | each accepted unit or batch | complete reporting period | all included finishing lines | Normalize all exchanges by `calc_reference_normalization` | scale calibration; dimensional/mechanical/pressure test records; release certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory exchange | Normalized amount = reporting-period exchange amount × 1,000 / reporting-period net accepted product mass. Apply within the declared route and product group before aggregation. | exact exchange amount; net accepted product mass | amount per 1,000 kg accepted reference product |  |
| `calc_electricity_conversion` | electricity records | Electricity (MJ) = metered electricity (kWh) × 3.6. Retain kWh and conversion trace. | metered kWh | MJ |  |
| `calc_gas_reference_condition` | natural gas and oxygen | Convert a measured gas volume only when temperature, absolute pressure and compressibility/reference convention are documented; otherwise retain the measured condition and flag it as non-comparable. | measured volume; temperature; pressure; reference convention | m3 at declared condition |  |
| `calc_direct_fossil_co2` | direct fuel and charge-carbon oxidation | Use measured stack mass where representative. Otherwise calculate from verified foreground fuel/charge quantity and supplier-specific fossil-carbon data, subtracting only documented carbon retained in products or separately measured carbon-bearing outputs; do not use the UUID identity as an emission factor. | foreground activity; supplier carbon data; retained-carbon records | kg direct fossil CO2 | `eu-jrc-sf-bref-2024` |
| `calc_mass_balance` | each foreground process | Reconcile product and waste outputs against material inputs and internal transfers on a consistent moisture and composition basis; investigate rather than distribute unexplained differences. | calibrated input/output masses; stock change; internal returns | documented process mass-balance check |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and all inputs/outputs | Preserve exact material/flow identity, route, grade, state, supplier specification and disposition. Do not replace missing rows with umbrella material or waste categories. | supplier certificates, Tiangong UUID audit, batch records and waste manifests |
| `dq_temporal` | all foreground data | Cover a representative continuous reporting period, normally at least 12 months or a complete shorter campaign justified for campaign production; document shutdowns and abnormal batches. | dated meter, production, purchase, test and waste records |
| `dq_technology` | furnace, casting, treatment and finishing | Demonstrate that records correspond to the declared furnace, centrifugal-casting machine, mould route, heat-treatment recipe and surface system. | equipment list, process flow diagram, batch genealogy and line-meter mapping |
| `dq_completeness` | inventory | Reconcile purchased inputs, internal returns, accepted product, rejects and wastes; list every directly measured regulated release and explain any unmeasured expected release. | mass/energy balance, emissions inventory and completeness checklist |
| `dq_measurement` | measured quantities | Use calibrated instruments and retain original readings, units, conversion steps, meter coverage and allocation worksheets. | calibration certificates, raw exports and calculation workbook |
| `dq_proxy` | upstream datasets | Document geography, technology, time and product-state match for each upstream dataset; disclose and justify every proxy. | dataset mapping register and proxy justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | dataset identity | Confirm that the product is cast iron or a steel pipe/tube whose body is centrifugally cast, that fittings and wrought/welded routes are excluded, and that the reference product UUID, Mass property and kg unit match this PCR. | `unsd-cpc-3-0-structure-2025`, `eu-jrc-sf-bref-2024` |
| `validation_qualifiers` | required metadata | Fail completeness when route, grade, dimensions, product standard/service class, furnace, mould, heat treatment, machining, lining/coating, geography or reporting period is missing. | `iso-2531-2009`, `astm-a451-a451m-20` |
| `validation_processes` | process coverage | Require melting/treatment, centrifugal casting, and finishing/testing. Require heat treatment when batch or standard records show it is applied; require each declared lining/coating input when present on the as-sold product. | `eu-jrc-sf-bref-2024`, `dipra-cast-iron-pipe-handbook-1978`, `astm-a451-a451m-20` |
| `validation_atomic_inventory` | inventory rows | Confirm every row is one atomic exchange with direction, flow type, property, unit, amount-production rule, specificity, normalization basis, evidence and collection protocol; reject combined materials, carriers, wastes or releases. |  |
| `validation_mass_energy` | balances and normalization | Confirm the 1,000 kg reference output, reconcile internal transfers and returns, investigate unexplained mass differences, and reconcile carrier-specific energy records to meters without double counting. |  |
| `validation_direct_releases` | elementary flows | Confirm that direct fossil CO2, fossil CO and particulate rows include only on-site releases for the named process and that upstream electricity/material emissions and overlapping particulate size fractions are not duplicated. | `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995` |
| `validation_ranges` | quantitative QA | Treat this candidate PCR as having no external empirical amount ranges. Do not infer a range from one case, one publication or incompatible routes; use foreground collection until two independent, boundary-compatible original sources are reviewed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after review and publication |
| downstream_use | Product carbon footprints, LCA process datasets and lifecycle models requiring a factory-gate inventory for the declared cast-iron or centrifugally cast-steel product |
| allowed_use | Use when product route, grade/state, dimensions, standard/service class, geography, technology, period and surface system match the downstream study or are transparently adjusted |
| excluded_use | Do not use for welded, wrought, rolled, extruded or seamless-pierced steel tubes; fittings; installed pipelines; or downstream use/end-of-life without additional modelling |
| required_metadata | PCR id/version; reference product UUID; route; grade; dimensions; product standard and service class; furnace and mould technology; heat treatment; machining; tests; lining/coating; geography; period; allocation; upstream dataset mapping |
| required_quality_disclosure | Primary-data coverage; meter and scale coverage; mass/energy reconciliation; internal-return treatment; rejection rate; direct-emission method; waste disposition; proxy use; unresolved UUIDs; absence of external empirical ranges |
| update_trigger | Change in furnace or casting technology, metal grade family, charge mix, heat-treatment recipe, abatement, machining allowance, product standard, lining/coating system, geography, allocation, or evidence sufficient to resolve UUID/range gaps |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, code 41291. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official classification identity and exclusion of neighbouring product categories |
| `eu-jrc-sf-bref-2024` | `official_guidance` | European Commission Joint Research Centre, *Best Available Techniques Reference Document for the Smitheries and Foundries Industry*, 2024. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-12/SF_BREF_2024-bref.pdf (retrieved 2026-09-04) | Centrifugal-casting definition; furnace, mould, casting, heat-treatment, finishing, resource and release process decomposition |
| `us-epa-ap42-gray-iron-foundries-2003` | `official_guidance` | U.S. EPA, AP-42 Section 12.10, *Gray Iron Foundries*, May 2003. https://www.epa.gov/sites/default/files/2020-11/documents/c12s10.pdf (retrieved 2026-09-04) | Cast-iron charge, melting, ductile-iron treatment, slag, sand, finishing and direct-release candidates |
| `us-epa-ap42-steel-foundries-1995` | `official_guidance` | U.S. EPA, AP-42 Section 12.13, *Steel Foundries*, January 1995. https://www.epa.gov/sites/default/files/2020-11/documents/c12s13.pdf (retrieved 2026-09-04) | Steel-foundry charge, electric melting, treatment, finishing, waste and direct-release candidates |
| `dipra-cast-iron-pipe-handbook-1978` | `handbook` | Ductile Iron Pipe Research Association, *Cast Iron Pipe Handbook*, Fifth Edition, 1978. https://dipra.org/wp-content/uploads/2025/07/Cast_Iron_Pipe_Handbook_1978_-_Fifth_Edition.pdf (retrieved 2026-09-04) | Pipe-specific centrifugal casting, annealing, cleaning, hydrostatic testing, dimensional gauging, coating, lining and marking sequence |
| `iso-2531-2009` | `standard` | ISO 2531:2009, *Ductile iron pipes, fittings, accessories and their joints for water applications*. https://gso-sims-preview-doc-aws.s3-eu-west-1.amazonaws.com/iso-2531-2009-en.html (GSO Standards Information Management System-hosted ISO original preview verified 2026-09-04) | Ductile-iron pipe specification, dimension, mechanical-property, coating and performance-test qualifiers |
| `astm-a451-a451m-20` | `standard` | ASTM A451/A451M-20, *Standard Specification for Centrifugally Cast Austenitic Steel Pipe for High-Temperature Service*. https://store.astm.org/a0451_a0451m-20.html (official abstract and scope verified 2026-09-04) | Centrifugally cast-steel heat treatment, machining, chemistry, hydrostatic and tensile-test qualifiers |
| `cn-nbs-industrial-classification-2017` | `official_guidance` | National Bureau of Statistics of China, *Industrial Classification for National Economic Activities* (GB/T 4754-2017), official PDF. https://www.stats.gov.cn/xxgk/tjbz/gjtjbz/202008/P020200811608157848094.pdf (retrieved 2026-09-04) | Professional Chinese terminology for cast-iron straight pipe and cast-iron hollow profiles |
| `cn-samr-centrifugally-cast-steel-2026` | `standard` | State Administration for Market Regulation, national-standard record, *Centrifugally cast steel and alloy products—Part 1: General testing and tolerances*. https://std.samr.gov.cn/gb/search/gbDetailedCNF?id=511EBC5967EA9318E06397BE0A0AFBD5 (verified 2026-09-04) | Professional Chinese terminology for centrifugally cast steel products |
