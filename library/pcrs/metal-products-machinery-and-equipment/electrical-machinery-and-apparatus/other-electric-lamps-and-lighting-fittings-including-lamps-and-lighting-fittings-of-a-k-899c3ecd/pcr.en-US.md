---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electric-lamps-and-lighting-fittings-including-lamps-and-lighting-fittings-of-a-k-899c3ecd
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other electric lamps and lighting fittings (including lamps and lighting fittings of a kind used for lighting public open spaces or thorough-fares), not solely for LED light sources

## 1. Scope and Applicability

This PCR covers grid-connected finished electric luminaires and lighting fittings in the CPC 3.0 subclass 46539 boundary, including fittings for public open spaces and thoroughfares, when the design is not solely for LED light sources. A luminaire includes its structure and, where supplied or required for operation, control gear, compatible lamp, fixing parts, electrical connectors, sensors, and light-management accessories.

It excludes luminaires designed solely for LED light sources, portable self-powered lamps, Christmas-tree lighting sets, non-electrical lamps, illuminated signs, lamp sources sold as products in their own right, and parts sold separately. The foreground boundary is cradle-to-gate through final assembly, testing, and packaging. Distribution, installation works, use-stage electricity, replacement lamps/control gear, and end-of-life are downstream scenarios and are not part of the foreground inventory, but the required use-profile qualifiers are retained so downstream lifecycle models can add them consistently.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electric-lamps-and-lighting-fittings-including-lamps-and-lighting-fittings-of-a-k-899c3ecd |
| classification_refs | CPC 3.0:46539 |
| covered_products | Finished grid-connected electric lamps and lighting fittings not designed solely for LED light sources, including public-open-space and thoroughfare luminaires |
| excluded_products | Solely-LED luminaires; portable self-powered lamps; Christmas-tree lighting sets; non-electrical lamps; illuminated signs; separate lamp sources; separately sold parts |
| representative_product | A finished, packaged grid-connected luminaire with declared housing, optical element, compatible non-LED-only light-source configuration, control gear configuration, outgoing luminous flux, and assigned lifetime |
| production_route | Purchased and/or in-house fabricated components; conditional surface finishing; final assembly; electrical and photometric testing; packaging |
| market_state | Finished packaged luminaire at factory gate; application and supplied accessories declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide outgoing artificial light from a conforming luminaire |
| How much | 1,000 lumens of outgoing artificial luminous flux |
| How well | At the declared photometric distribution, electrical input, light-source/control-gear configuration, light-management state, and application conditions |
| How long or cycle | 35,000 operating hours |
| reference_flow_link | Number of luminaires N = (1,000 lumen × 35,000 h) / (declared outgoing luminous flux V × assigned lifetime H); multiply every cradle-to-gate exchange by N |

| Field | Value |
| --- | --- |
| Reference amount | N × measured finished-product mass, in kg |
| Reference product flow | Other electric lamps and lighting fittings (including lamps and lighting fittings of a kind used for lighting public open spaces or thorough-fares), not solely for LED light sources `f3d53035-bae3-4ebd-8a74-f133bc33211a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | declared outgoing luminous flux V; assigned lifetime H; luminaire mass; application; indoor/outdoor state; compatible light-source technology and replaceability; supplied lamp count; control-gear count and type; light-management functions; declared input power; housing/optic materials; mounting and accessories supplied; manufacturing geography; production route; packaging state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_product_mass` | finished luminaire and constituent material rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net product and constituent masses without product packaging; report packaging in separate rows. |
| `mu_luminous_flux` | reference-flow scaling | outgoing artificial luminous flux | lumen | Use a photometric report for the complete declared luminaire configuration; do not substitute bare-lamp rated flux for luminaire output. |
| `mu_lifetime` | reference-flow scaling | assigned operating lifetime | h | Use the manufacturer-declared luminaire life under stated conditions; for a non-replaceable source use the source-limited lifetime, and for a replaceable source use the structure lifetime. |
| `mu_energy` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered kWh, then convert once using 1 kWh = 3.6 MJ and document voltage, grid geography, and loss boundary. |
| `mu_gas` | natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State temperature and pressure reference conditions and distinguish purchased gas from on-site generation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | All purchased materials, finished components, accessories, and packaging crossing the reporting-facility gate for the declared luminaire |
| starting_condition_role | foreground manufacturing input boundary |
| product_classification_scope | Finished CPC 3.0:46539 luminaire; not a solely-LED luminaire, separate lamp, or separately sold part |
| recursive_input_rule | A purchased CPC 46539 luminaire used as an input is recorded as a separate product input with an upstream dataset and is not reopened into the same foreground process. |
| upstream_dataset_requirement | Use supplier- or geography/technology-representative upstream datasets for each purchased atomic material, component, utility, and waste-treatment service. |
| disclosure | Disclose make-or-buy status, included lamp/control gear/accessories, facility geography, allocation, cut-off decisions, recycled-content claims, packaging, and processes performed on site. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_complete_delivered_product` | manufacturing boundary | Include every component and accessory delivered with or required for proper operation of the declared luminaire; keep structural modification, roadworks, distribution, installation, use, maintenance, and end-of-life outside this foreground boundary. | pep-ecopassport-psr-0014-ed2-2023 |
| `sb_atomic_bom` | material and component inputs | Record the actual bill of materials as atomic purchased material or component flows; do not combine dissimilar materials or energy carriers. | pep-ecopassport-psr-0014-ed2-2023 |
| `sb_production_waste` | manufacturing outputs | Record each segregated production waste and its treatment destination; do not net scrap from material input. | pep-ecopassport-psr-0014-ed2-2023 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | Material and component fabrication | `required` | Always include; use purchased finished-component masses when fabrication is outside the reporting facility. | foreground manufacturing | mass of each constituent and fabrication exchange per reference flow |
| `surface_finishing` | Surface finishing | `conditional` | Include when cleaning, etching, anodizing, painting, or powder coating occurs inside the reporting facility. | foreground finishing | finishing inputs and outputs per reference flow |
| `assembly_packaging` | Final assembly, testing, and packaging | `required` | Always include. | foreground assembly and product release | finished-product mass and packaging per reference flow |

### Process: Material and component fabrication (`component_fabrication`)

#### Inputs

##### Product flows

###### Aluminium sheet (`aluminium_sheet`)

Record this atomic exchange when aluminium sheet is cut or formed in the reporting facility; obtain the amount from batch material, meter, or waste records.

- Selected flow: Aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_materials`
- Sources: `luminaire-embodied-carbon-lca-2024`

###### Cold-rolled steel sheet (`steel_sheet`)

Record this atomic exchange when steel sheet is cut or formed in the reporting facility; obtain the amount from batch material, meter, or waste records.

- Selected flow: Cold-rolled steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_materials`
- Sources: `luminaire-embodied-carbon-lca-2024`

###### copper wire (`copper_wire`)

Record this atomic exchange when copper wire crosses the foreground boundary for internal conductors; obtain the amount from batch material, meter, or waste records.

- Selected flow: copper wire `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_materials`
- Sources: `pep-ecopassport-psr-0014-ed2-2023`

###### Float glass and surface ground or polished glass, in sheets (`float_glass_sheet`)

Record this atomic exchange when a flat-glass cover, lens, or diffuser is fabricated in the reporting facility; obtain the amount from batch material, meter, or waste records.

- Selected flow: Float glass and surface ground or polished glass, in sheets `1b43024e-16ea-42d2-830d-329c4a2abc3d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_materials`
- Sources: `luminaire-embodied-carbon-lca-2024`

###### Polycarbonate granulate (`polycarbonate_granulate`)

Record this atomic exchange when a polycarbonate optical or enclosure part is moulded in the reporting facility; obtain the amount from batch material, meter, or waste records.

- Selected flow: Polycarbonate granulate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_materials`
- Sources: `luminaire-embodied-carbon-lca-2024`

###### Electricity (`fabrication_electricity`)

Record this atomic exchange for cutting, forming, moulding, joining, and fabrication auxiliaries inside the reporting facility; obtain the amount from batch material, meter, or waste records.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metered_energy`
- Sources: `luminaire-embodied-carbon-lca-2024`

###### Industrial oxygen (`fabrication_oxygen`)

Record this atomic exchange only when oxygen-assisted cutting is performed in the reporting facility; obtain the amount from batch material, meter, or waste records.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gases`
- Sources: `luminaire-embodied-carbon-lca-2024`

##### Waste flows

No atomic exchange is prescribed in this group; any actual exchange shall be recorded as a separate concrete flow.

##### Elementary flows

No atomic exchange is prescribed in this group; any actual exchange shall be recorded as a separate concrete flow.

#### Outputs

##### Product flows

No atomic exchange is prescribed in this group; any actual exchange shall be recorded as a separate concrete flow.

##### Waste flows

###### Aluminium Scrap (`aluminium_scrap`)

Record this atomic exchange when segregated aluminium offcuts or rejects leave fabrication; obtain the amount from batch material, meter, or waste records.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `pep-ecopassport-psr-0014-ed2-2023`

###### Steel scrap (`steel_scrap`)

Record this atomic exchange when segregated steel offcuts or rejects leave fabrication; obtain the amount from batch material, meter, or waste records.

- Selected flow: Steel scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `pep-ecopassport-psr-0014-ed2-2023`

###### Polycarbonate fabrication offcuts (`polycarbonate_scrap`)

Record this atomic exchange when segregated polycarbonate runners, offcuts, or rejects leave fabrication; obtain the amount from batch material, meter, or waste records.

- Selected flow: Polycarbonate fabrication offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `pep-ecopassport-psr-0014-ed2-2023`

###### cullet float glass (`float_glass_cullet`)

Record this atomic exchange when segregated flat-glass offcuts or breakage leave fabrication; obtain the amount from batch material, meter, or waste records.

- Selected flow: cullet float glass `a62b5f32-0de6-4587-a5f8-d668a64e7979`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `pep-ecopassport-psr-0014-ed2-2023`

##### Elementary flows

No atomic exchange is prescribed in this group; any actual exchange shall be recorded as a separate concrete flow.

### Process: Surface finishing (`surface_finishing`)

#### Inputs

##### Product flows

###### Polyester powder coating (`powder_coating`)

Record this atomic exchange when powder coating is applied to the luminaire structure; obtain the amount from batch material, meter, or waste records.

- Selected flow: Polyester powder coating
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `luminaire-embodied-carbon-lca-2024`

###### Sodium hydroxide (`sodium_hydroxide`)

Record this atomic exchange when sodium-hydroxide cleaning or etching is performed; obtain the amount from batch material, meter, or waste records.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `luminaire-embodied-carbon-lca-2024`

###### Process Water (`process_water`)

Record this atomic exchange when aqueous cleaning, rinsing, or surface treatment is performed; obtain the amount from batch material, meter, or waste records.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `luminaire-embodied-carbon-lca-2024`

###### Electricity (`finishing_electricity`)

Record this atomic exchange for pumps, booths, curing ovens, and treatment equipment attributable to the product; obtain the amount from batch material, meter, or waste records.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metered_energy`
- Sources: `luminaire-embodied-carbon-lca-2024`

###### natural gas in the gaseous state (`natural_gas`)

Record this atomic exchange only when gaseous natural gas is burned in an attributable curing or drying operation; obtain the amount from batch material, meter, or waste records.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gases`
- Sources: `luminaire-embodied-carbon-lca-2024`

##### Waste flows

No atomic exchange is prescribed in this group; any actual exchange shall be recorded as a separate concrete flow.

##### Elementary flows

No atomic exchange is prescribed in this group; any actual exchange shall be recorded as a separate concrete flow.

#### Outputs

##### Product flows

No atomic exchange is prescribed in this group; any actual exchange shall be recorded as a separate concrete flow.

##### Waste flows

###### Powder coating waste (`powder_coating_waste`)

Record this atomic exchange when captured overspray or spent powder leaves the process as waste; obtain the amount from batch material, meter, or waste records.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `pep-ecopassport-psr-0014-ed2-2023`

###### Metal surface-finishing wastewater (`surface_finishing_wastewater`)

Record this atomic exchange when aqueous surface-treatment effluent crosses to on-site or off-site treatment; obtain the amount from batch material, meter, or waste records.

- Selected flow: Metal surface-finishing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `pep-ecopassport-psr-0014-ed2-2023`

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Record this atomic exchange for direct fossil carbon dioxide emitted from attributable on-site natural-gas combustion only; obtain the amount from batch material, meter, or waste records.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_and_fuel_balance`
- Sources:

### Process: Final assembly, testing, and packaging (`assembly_packaging`)

#### Inputs

##### Product flows

###### Electronic ballast or declared luminaire control gear (`control_gear`)

Record this atomic exchange when control gear is delivered with, integrated in, or required for the reference luminaire; obtain the amount from batch material, meter, or waste records.

- Selected flow: Electronic ballast or declared luminaire control gear
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_materials`
- Sources: `pep-ecopassport-psr-0014-ed2-2023`

###### Electric filament or discharge lamps, arc lamps (`lamp_light_source`)

Record this atomic exchange when a compatible non-LED-only lamp is delivered with or selected for the reference luminaire; obtain the amount from batch material, meter, or waste records.

- Selected flow: Electric filament or discharge lamps, arc lamps `73b0a95f-d108-410a-ba2e-fac299a73970`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_materials`
- Sources: `pep-ecopassport-psr-0014-ed2-2023`

###### corrugated board boxes (`corrugated_box`)

Record this atomic exchange when a corrugated board box is delivered with the finished luminaire; obtain the amount from batch material, meter, or waste records.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`
- Sources: `pep-ecopassport-psr-0014-ed2-2023`

###### Low-density polyethylene foil (PE-LD) (`ldpe_film`)

Record this atomic exchange when PE-LD protective film or bag is delivered with the finished luminaire; obtain the amount from batch material, meter, or waste records.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`
- Sources: `pep-ecopassport-psr-0014-ed2-2023`

###### Electricity (`assembly_electricity`)

Record this atomic exchange for attributable assembly, electrical safety testing, photometric testing, and packaging; obtain the amount from batch material, meter, or waste records.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metered_energy`
- Sources: `luminaire-embodied-carbon-lca-2024`

##### Waste flows

No atomic exchange is prescribed in this group; any actual exchange shall be recorded as a separate concrete flow.

##### Elementary flows

No atomic exchange is prescribed in this group; any actual exchange shall be recorded as a separate concrete flow.

#### Outputs

##### Product flows

###### Other electric lamps and lighting fittings (including lamps and lighting fittings of a kind used for lighting public open spaces or thorough-fares), not solely for LED light sources (`finished_luminaire`)

Record this atomic exchange for conforming finished luminaires released from final inspection; obtain the amount from batch material, meter, or waste records.

- Selected flow: Other electric lamps and lighting fittings (including lamps and lighting fittings of a kind used for lighting public open spaces or thorough-fares), not solely for LED light sources `f3d53035-bae3-4ebd-8a74-f133bc33211a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the actual quantity crossing the process boundary and normalize it to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per functional-equivalent quantity of luminaires required by the reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_product`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

No atomic exchange is prescribed in this group; any actual exchange shall be recorded as a separate concrete flow.

##### Elementary flows

No atomic exchange is prescribed in this group; any actual exchange shall be recorded as a separate concrete flow.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all foreground processes | Avoid allocation by metering product-specific batches, machines, finishing lines, and waste streams separately where feasible. |  |
| `allocation_mass` | unavoidable shared process with multiple co-products | When subdivision is not feasible and physical causality cannot be established, allocate shared burdens by measured output mass and disclose all outputs and the allocation fraction. | pep-ecopassport-psr-0014-ed2-2023 |
| `allocation_scrap` | production scrap | Report scrap as a waste output and model its treatment separately; do not subtract its mass or a recycling credit from gross material input in the foreground inventory. | pep-ecopassport-psr-0014-ed2-2023 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_materials` | component_fabrication; assembly_packaging | constituent material or component | ERP issue, supplier specification, weighed sample | item id; material grade; mass; quantity; supplier; recycled content; make-or-buy state | reconcile approved BOM with purchasing and batch issue records; weigh representative units | kg | each product revision and production batch | representative 12-month production period or full campaign | all reporting facilities and outsourced steps declared | gross input mass divided by conforming output, then multiplied by N | signed BOM; calibration record; supplier declaration; mass-balance reconciliation |
| `cp_metered_energy` | all processes | electricity | submeter or machine log | meter start/end; machine id; batch; operating mode; grid connection | product-specific submetering or documented allocation from machine-hours | kWh, converted to MJ | each batch or monthly | representative 12 months | all attributable on-site operations | subtract non-production baseline; divide by conforming output; multiply by N | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_process_gases` | component_fabrication; surface_finishing | industrial oxygen or natural gas | flowmeter, cylinder, or invoice record | gas identity; volume; temperature; pressure; batch; opening/closing inventory | meter or inventory balance with reference-condition conversion | m3 | each batch or monthly | representative 12 months | attributable cutting, curing, or drying equipment | net consumption divided by conforming output; multiply by N | meter calibration; invoice balance; reference-condition record |
| `cp_waste_mass` | component_fabrication; surface_finishing | segregated waste | scale ticket and waste manifest | waste identity; mass; batch; destination; treatment; hazardous status | weigh each segregated waste stream before internal reuse or dispatch | kg | each dispatch and batch reconciliation | representative 12 months | all reporting facilities | gross waste divided by conforming output; multiply by N | scale calibration; manifest; mass balance |
| `cp_finishing_materials` | surface_finishing | coating, chemical, or process water | batch recipe, tank make-up log, meter | substance; concentration; opening/closing inventory; additions; recovered amount; batch | inventory balance and calibrated water metering | kg | each batch | representative 12 months | each declared finishing line | net fresh input divided by conforming output; multiply by N | recipe approval; SDS; meter calibration; inventory reconciliation |
| `cp_stack_and_fuel_balance` | surface_finishing | direct fossil carbon dioxide | fuel analysis and combustion calculation | natural-gas volume; reference conditions; carbon content; oxidation factor | calculate only direct on-site fossil CO2 from collected fuel records | kg | monthly or each campaign | same period as gas inventory | reporting-facility combustion sources | documented carbon balance normalized by conforming output and N | fuel specification; calculation worksheet; stack test when available |
| `cp_packaging_mass` | assembly_packaging | packaging component | packaging BOM and weighed sample | packaging item; material; mass; reuse count; units shipped | weigh each packaging component separately and reconcile to shipments | kg | each packaging design and quarterly check | representative 12 months | factory-gate packaging supplied with product | packaging mass per shipped luminaire multiplied by N | packaging drawing; scale calibration; shipment reconciliation |
| `cp_finished_product` | assembly_packaging | finished luminaire | final inspection and photometric report | net mass; outgoing flux V; lifetime H; power; configuration; rejects | calibrated weighing plus electrical and photometric test for declared configuration | kg; lumen; h; W | each product revision and representative batch | current marketed configuration | all reference-product variants claimed | calculate N and scale all exchanges to the functional unit | calibration certificates; test report; release record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_quantity` | all inventory rows | N = (1,000 × 35,000) / (V × H); multiply per-luminaire exchanges by N. | outgoing flux V in lumen; assigned lifetime H in h | functional-equivalent luminaire quantity N | pep-ecopassport-psr-0014-ed2-2023 |
| `calc_electricity` | electricity rows | MJ = metered kWh × 3.6. | attributable metered kWh | MJ per reference flow |  |
| `calc_mass_balance` | component fabrication and finishing | Reconcile gross inputs = conforming product incorporated mass + each separately reported waste output + measured inventory change, within documented uncertainty. | input, output, waste, and stock records | mass-balance residual and completeness flag |  |
| `calc_direct_co2` | fossil_co2 | Calculate direct fossil CO2 from collected natural-gas quantity and documented carbon/oxidation data; do not include upstream electricity or fuel-supply emissions. | collected fuel and composition records | kg fossil CO2 per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Demonstrate that the product is CPC 46539 and not solely designed for LED light sources; retain product specification, compatible-lamp statement, photos, and model number. | approved product specification and classification review |
| `dq_completeness` | bill of materials and processes | Reconcile constituent mass, purchased components, factory inputs, wastes, and finished output; explain every material omission and outsourced step. | BOM-to-production mass balance and supplier records |
| `dq_temporal` | all foreground data | Use a representative 12-month period or the complete production campaign; disclose shutdowns, prototypes, and abnormal batches. | dated meter, purchasing, production, and waste records |
| `dq_technology` | fabrication and finishing | Identify in-house and outsourced cutting, forming, moulding, coating, anodizing, and testing technologies. | route sheet, supplier declaration, and facility process map |
| `dq_photometry` | reference-flow scaling | Retain the complete-luminaire photometric report, assigned-lifetime basis, and declared power for the same configuration represented by the BOM. | photometric and lifetime reports |
| `dq_uncertainty` | all calculated or allocated values | Report measurement uncertainty, allocation shares, data gaps, and any proxy upstream datasets. | calculation workbook and data-quality review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | product identity | Fail if the product is solely designed for LED light sources, is a separate light source or part, or lacks evidence for the declared CPC 46539 boundary. | un-cpc-3-0-structure-2025 |
| `val_reference_flow` | functional unit | Fail if V, H, N, net mass, supplied lamp/control-gear configuration, or photometric basis is missing or internally inconsistent. | pep-ecopassport-psr-0014-ed2-2023 |
| `val_atomic_inventory` | process inventory | Fail if any recorded exchange combines multiple materials, utilities, fuels, wastes, or emissions, or if an actual exchange is hidden in an umbrella row. |  |
| `val_mass_balance` | manufacturing | Flag a non-zero unexplained mass-balance residual and fail when material omissions or netted scrap prevent reconciliation. | pep-ecopassport-psr-0014-ed2-2023 |
| `val_direct_emissions` | fossil_co2 | Fail if upstream fuel or electricity emissions are reported as direct elementary outputs, or if direct combustion CO2 lacks collected fuel evidence. |  |
| `val_packaging` | packaging | Fail if product packaging is included in net luminaire mass or if supplied packaging components are not reported separately. | pep-ecopassport-psr-0014-ed2-2023 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground product-manufacturing dataset |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Cradle-to-gate manufacturing comparisons within the same CPC 46539 boundary and downstream lifecycle models that add declared distribution, installation, use, maintenance, and end-of-life scenarios |
| excluded_use | Comparison with solely-LED luminaires or other lighting categories without harmonized functional performance, lifetime, configuration, geography, and downstream scenarios |
| required_metadata | model number; CPC evidence; V; H; N; mass; power; lamp/control-gear/accessory configuration; light-management functions; application; geography; route; packaging; data period; allocation; upstream datasets |
| required_quality_disclosure | foreground share; primary-data coverage; mass-balance residual; metering uncertainty; allocation; outsourced steps; recycled-content evidence; unresolved UUIDs and range-evidence needs |
| update_trigger | Product redesign; light-source/control-gear change; flux, power, or lifetime change; BOM or packaging change above the study materiality threshold; facility/route/geography change; or newer representative data |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official CPC 46539 identity and separation from adjacent lighting categories |
| `pep-ecopassport-psr-0014-ed2-2023` | `standard` | PEP ecopassport, PSR-0014-ed2.0-EN-2023 07 13, Specific Rules for Luminaires, https://register.pep-ecopassport.org/documents/public/PSR-0014-EN (retrieved 2026-09-04) | Luminaire scope, functional unit, reference-flow qualifiers, component/accessory boundary, allocation, packaging, waste, and disclosure rules |
| `luminaire-embodied-carbon-lca-2024` | `literature` | Mazzei et al., Embodied carbon quantification of luminaires using life cycle assessment and CIBSE TM65 methodologies: A comparison case study, Journal of Industrial Ecology 28 (2024), University of Cambridge published-version repository copy, https://api.repository.cam.ac.uk/server/api/core/bitstreams/ebf1b47c-5d0f-4e43-bd63-fb691f995d10/content (retrieved 2026-09-05; DOI 10.1111/jiec.13449) | Original-text-verified manufacturing-process and material-composition evidence; supports primary collection of aluminium, steel, glass, electricity, gas, and finishing operations |
