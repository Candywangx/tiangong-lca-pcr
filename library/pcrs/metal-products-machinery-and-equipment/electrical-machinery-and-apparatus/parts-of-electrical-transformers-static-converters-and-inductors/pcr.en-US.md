---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-electrical-transformers-static-converters-and-inductors
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Parts of electrical transformers, static converters and inductors

## 1. Scope and Applicability

This PCR covers factory production of physical parts designed principally for electrical transformers, static converters, or inductors: magnetic cores, windings and coil subassemblies, dedicated insulation and terminals, converter-specific busbars and populated boards, housings, cooling parts, and dedicated subassemblies. Finished apparatus, generic upstream materials or components, manufacturing services, installation, maintenance, use losses, and end-of-life are excluded. Declare the concrete part family and include only route operations and atomic exchanges that apply.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-electrical-transformers-static-converters-and-inductors |
| classification_refs | CPC 3.0: 46132, Parts of electrical transformers, static converters and inductors |
| covered_products | Dedicated cores, windings, coil subassemblies, converter busbars, power modules, populated boards, enclosures, terminals, insulation and cooling parts |
| excluded_products | Complete transformers, ballasts, static converters or inductors; generic materials and electronic components; distribution/control apparatus; services |
| representative_product | One declared market-ready part or homogeneous lot within CPC 46132 |
| production_route | Route-qualified core forming, winding, metalworking, board assembly, molding, surface treatment, testing and packing |
| market_state | Conforming, dry, saleable part at factory gate, with shipment packaging where applied; not installed in complete apparatus |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production and provision of a conforming market-ready part for an electrical transformer, static converter, or inductor |
| How much | 1 kg net conforming product, excluding removable shipment packaging |
| How well | Meets declared drawing, part number, material/insulation specification, acceptance criteria, and quality plan |
| How long or cycle | One production lot at factory gate; no use-stage duration |
| reference_flow_link | Output row `reference_product_output`, normalized to 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Parts of electrical transformers, static converters and inductors `d4ea4c05-fc8a-4f2b-b6e9-0ecae8795a95` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part family/number; recipient apparatus; conductor/core material; insulation system; board population state; route; treatment; site; period; packaging; net-mass basis |

Required qualifiers must appear in the foreground data package; otherwise its reference flow is incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product and mass rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use dry net mass; exclude removable shipment packaging and report it separately. |
| `electricity_energy` | `electricity_input` | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve meter records and convert kWh using 1 kWh = 3.6 MJ; disclose grid, voltage, and included losses. |
| `gas_volume` | `natural_gas_input` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Declare temperature, pressure, moisture, and standard/actual conditions. |
| `industrial_gas_volume` | `industrial_oxygen_input` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Declare purity and reference conditions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, chemicals, utilities and packaging received at the manufacturing site |
| starting_condition_role | Foreground gate-to-gate start linked to upstream supply and inbound-transport datasets |
| product_classification_scope | Physical CPC 46132 parts, independent of upstream input classifications |
| recursive_input_rule | Record a purchased CPC 46132 input once and link its upstream dataset; do not recreate its production recursively |
| upstream_dataset_requirement | Link every purchased product and energy input to geographically and technologically representative upstream data |
| disclosure | Part family; recipient apparatus; BOM; materials; board state; route; treatment; site/period; yield; allocation; packaging; exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground | Include applicable forming, winding, board assembly, molding, joining, treatment, testing, rejects, utilities, direct emissions and packing through factory gate. | oria-et-al-transformer-lca-review-2026; iea-pvps-lci-photovoltaic-systems-2020 |
| `boundary_rule_2` | upstream linkage | Use linked upstream datasets for purchased inputs and inbound transport; never hide them in an aggregate input. | iea-pvps-lci-photovoltaic-systems-2020 |
| `boundary_rule_3` | exclusions | Exclude complete apparatus manufacture/use, losses, installation, distribution and end-of-life unless separately expanded and reported. | eu-transformer-regulation-548-2014; oria-et-al-transformer-lca-review-2026 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `part_fabrication_assembly` | Route-qualified part fabrication, assembly, testing and packing | required | Include only operations and atomic exchanges for the declared part route | foreground production | 1 kg conforming reference product |

### Process: Route-qualified part fabrication, assembly, testing and packing (`part_fabrication_assembly`)

#### Inputs

##### Product flows

###### Electrical steel sheet for laminated cores (`electrical_steel_input`)

Only for laminated or wound steel cores; declare grade and coating.

- Selected flow: Electrical steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued mass minus returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_mass`
- Sources: `oria-et-al-transformer-lca-review-2026`

###### Insulated conductor for windings (`magnet_wire_input`)

Only for winding routes; declare copper or aluminium conductor, insulation chemistry, thermal class, and form.

- Selected flow: Magnet wire `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued magnet-wire mass minus returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_mass`
- Sources: `eu-transformer-regulation-548-2014`; `oria-et-al-transformer-lca-review-2026`

###### Ferrite core for high-frequency magnetic parts (`ferrite_core_input`)

Only for ferrite-based parts; declare material family, geometry, and state.

- Selected flow: Ferrite magnetic core
- Flow property / unit: Mass / kg
- Amount rule: Measured ferrite-core mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_mass`
- Sources: `iea-pvps-lci-photovoltaic-systems-2020`

###### Cellulose electrical insulation paper (`electrical_insulation_paper_input`)

Only when retained as insulation; declare grade, thickness, treatment, and moisture basis.

- Selected flow: Cellulose electrical insulation paper
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued dry mass minus returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_mass`
- Sources: `oria-et-al-transformer-lca-review-2026`

###### Non-alloy steel for enclosure or hardware (`non_alloy_steel_input`)

Only when fabricated into the declared enclosure, bracket, terminal, or cooling part.

- Selected flow: Non-Alloy Steel `ce3ac926-5d6f-4558-9edc-67179d93dde4`
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued steel mass minus returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_mass`
- Sources: `oria-et-al-transformer-lca-review-2026`; `iea-pvps-lci-photovoltaic-systems-2020`

###### Printed wire board for converter assembly (`printed_wire_board_input`)

Only when populated or integrated on site; declare area, layer count, substrate, and finish.

- Selected flow: Printed Wire Board `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of boards issued
- Value mode: Foreground record (`foreground_record`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_mass`
- Sources: `iea-pvps-lci-photovoltaic-systems-2020`

###### Lead-free flux-free solder (`lead_free_solder_input`)

Only for flux-free lead-free joining; other solder states require separate rows.

- Selected flow: Lead-free solder, flux-free `a78ab927-44b9-4978-a3e3-2b9fb20d3648`
- Flow property / unit: Mass / kg
- Amount rule: Measured net solder consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: technology specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_mass`
- Sources: `iea-pvps-lci-photovoltaic-systems-2020`

###### Power semiconductor device (`power_semiconductor_input`)

Only for converter parts; declare one actual device family per data package.

- Selected flow: Insulated-gate bipolar transistor power semiconductor device
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of the declared device family
- Value mode: Foreground record (`foreground_record`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_mass`
- Sources: `iea-pvps-lci-photovoltaic-systems-2020`

###### Glass-fibre-reinforced polyamide granulate (`glass_fibre_polyamide_input`)

Only for on-site molding; declare polymer grade, fibre fraction, and recycled content.

- Selected flow: Glass-fibre-reinforced polyamide granulate
- Flow property / unit: Mass / kg
- Amount rule: Measured dry granulate issued
- Value mode: Foreground record (`foreground_record`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_mass`
- Sources: `iea-pvps-lci-photovoltaic-systems-2020`

###### Purchased electricity (`electricity_input`)

Include applicable fabrication, assembly, testing, ventilation, and packing electricity.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity converted to MJ and causally allocated
- Value mode: Foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `iea-pvps-lci-photovoltaic-systems-2020`

###### Gaseous natural gas (`natural_gas_input`)

Only for direct on-site drying, curing, or heating; purchased heat is separate.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered gas allocated and corrected to declared conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `iea-pvps-lci-photovoltaic-systems-2020`

###### Industrial oxygen (`industrial_oxygen_input`)

Only for oxygen-assisted cutting or joining; declare purity and reference conditions.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered or cylinder-inventory consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: technology specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

###### Process water (`process_water_input`)

Only for applicable cleaning, rinsing, or alkaline treatment; cooling water is separate.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered mass allocated to the treatment lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `iea-pvps-lci-photovoltaic-systems-2020`

###### Sodium hydroxide (`sodium_hydroxide_input`)

Only for an applicable treatment bath; declare supplied state and concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Measured product mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: technology specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_mass`
- Sources:

###### Corrugated board boxes (`corrugated_box_input`)

Only when applied before the factory gate; exclude from reference-product mass.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured box mass issued
- Value mode: Foreground record (`foreground_record`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`
- Sources: `iea-pvps-lci-photovoltaic-systems-2020`

###### Low-density polyethylene protective film (`ldpe_film_input`)

Only when applied before the factory gate; exclude from reference-product mass.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Measured film mass issued
- Value mode: Foreground record (`foreground_record`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`
- Sources: `iea-pvps-lci-photovoltaic-systems-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming parts reference product (`reference_product_output`)

Record only conforming parts; removable shipment packaging is excluded.

- Selected flow: Parts of electrical transformers, static converters and inductors `d4ea4c05-fc8a-4f2b-b6e9-0ecae8795a95`
- Flow property / unit: Mass / kg
- Amount rule: Measured dry net conforming mass, normalized to exactly 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_waste_mass`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Ferrous steel fabrication scrap (`steel_scrap_output`)

Separately collect and retain alloy and coating composition.

- Selected flow: Steel scrap `8658611f-0588-4eb7-9490-46bcd02b3c2f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed ferrous scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_waste_mass`
- Sources:

###### Copper winding-wire offcuts (`copper_scrap_output`)

Keep separate from aluminium and mixed metal; retain insulation details.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: Weighed copper scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_waste_mass`
- Sources:

###### Aluminium winding-wire offcuts (`aluminium_scrap_output`)

Keep separate from copper, steel, and mixed metal.

- Selected flow: Aluminium winding-wire offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weighed aluminium offcuts
- Value mode: Foreground record (`foreground_record`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_waste_mass`
- Sources:

###### Rejected populated printed wiring boards (`populated_pwb_waste_output`)

Use only after population; bare-board scrap is separate.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass / kg
- Amount rule: Weighed populated-board rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_waste_mass`
- Sources: `iea-pvps-lci-photovoltaic-systems-2020`

###### Spent alkaline treatment liquor (`waste_alkaline_liquor_output`)

Keep separate from rinse water; declare pH, NaOH and metal content.

- Selected flow: Waste Alkaline Liquor `ca310225-50c8-4d41-8353-4338b41e19a1`
- Flow property / unit: Mass / kg
- Amount rule: Measured purge mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_waste_mass`
- Sources:

##### Elementary flows

###### Direct fossil carbon dioxide (`fossil_co2_output`)

Record only direct fossil CO2 from on-site combustion attributable to the lot; exclude upstream electricity and biogenic CO2.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured stack emission or verified site direct-emission record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | multiple part families/routes | Subdivide independently metered lots before allocation; do not average unlike routes without declaring the production mix. |  |
| `allocation_rule_2` | shared records | Allocate using a causal driver such as machine time, thermal load, board area, or treated area; use mass only when demonstrated. |  |
| `allocation_rule_3` | scrap/rejects | Keep scrap as waste without avoided-production credit inside the gate result; disclose any separately modeled co-product. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_mass` | `part_fabrication_assembly` | materials/components/chemicals | ERP issues/returns; supplier/BOM | identity; lot; issued/returned mass; state; route | Reconcile issue minus return to lot | kg | each lot; monthly reconcile | 12 months or full campaign | all controlled facilities | sum atomic net input / conforming mass | specifications; scales; transactions; BOM log |
| `cp_utility_records` | `part_fabrication_assembly` | electricity/gas/oxygen/water | meters; invoices; cylinders; logs | readings; unit; conditions; hours; route; driver | subtract readings, correct conditions, causally allocate | native and normalized units | continuous/lot; monthly | same as output | all facilities | sum and normalize after allocation | calibration; invoice reconcile; coverage map |
| `cp_packaging_mass` | `part_fabrication_assembly` | shipment packaging | issues; specifications | material; count; unit mass; returnability | weigh or count × verified unit mass | kg | configuration/lot | same as output | packing sites | sum non-returnable packaging / net product | scale; drawing; purchase spec |
| `cp_output_waste_mass` | `part_fabrication_assembly` | product/waste | scales; reject log; waste tickets | part; lot; product/waste mass; composition; destination | weigh and reconcile each atomic output | kg | lot/dispatch | same as inputs | all facilities | sum by output / conforming mass | calibration; release; transfer note; mass balance |
| `cp_direct_emission_records` | `part_fabrication_assembly` | fossil CO2 | stack or verified inventory | source; fuel; mass; period; route; driver | use verified direct emissions and causally allocate | kg CO2 | monitoring interval; annual reconcile | same as fuel/output | on-site combustion | sum by source / conforming mass | monitoring; verification; fuel reconcile |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_rule_1` | all rows | normalized amount = lot flow / dry net conforming product mass | atomic record; output mass | amount per 1 kg |  |
| `calculation_rule_2` | electricity | MJ = kWh × 3.6 | meter record | MJ |  |
| `calculation_rule_3` | shared records | allocated flow = shared amount × causal-driver share; shares sum to 1 | shared record; driver | lot flow |  |
| `calculation_rule_4` | mass balance | residual = mass inputs - product - measured wastes - direct mass emissions; investigate, never force-balance | consistent mass records | residual/explanation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_requirement_1` | identity | Retain part/drawing/BOM, recipient apparatus, acceptance, and CPC scope. | drawing; BOM; release; un-cpc-3-0-structure-2025; eu-transformer-regulation-548-2014 |
| `quality_requirement_2` | completeness | Reconcile route with material, utility, reject, and packaging records; explain omissions. | traveler; meter map; oria-et-al-transformer-lca-review-2026; iea-pvps-lci-photovoltaic-systems-2020 |
| `quality_requirement_3` | representativeness | Use a common period/site and disclose outsourcing, mix, and obsolete data. | period reconciliation; facility/supplier records |
| `quality_requirement_4` | measurement | Retain calibration, gas conditions, allocation coverage, uncertainty, and residuals. | certificates; invoices; worksheets |
| `quality_requirement_5` | flow identity | Verify public state-100 UUIDs and retain exact atomic names for unresolved flows. | receipts; row audit; unresolved list |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | category | Reject complete apparatus, generic material, or service outputs. | un-cpc-3-0-structure-2025; eu-transformer-regulation-548-2014 |
| `validation_rule_2` | reference flow | Confirm exactly 1 kg dry net conforming part; exclude and separately report removable packaging. |  |
| `validation_rule_3` | completeness | Confirm each applicable material, utility, waste, and direct emission is one atomic row; support absent routes. | oria-et-al-transformer-lca-review-2026; iea-pvps-lci-photovoltaic-systems-2020 |
| `validation_rule_4` | calculation | Recalculate normalization, conversion, allocation shares, and residual; reject unexplained differences. |  |
| `validation_rule_5` | identity/unit | Verify UUID, flow type, property, unit group, Chinese baseName, and condition; never use a proxy for unresolved identity. |  |
| `validation_rule_6` | disclosure | Confirm sources, records, site, period, part family, materials, board state, treatment, and packaging. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing dataset eligible as `secondary_dataset` or `background_dataset` after review |
| downstream_use | cradle-to-gate footprints and upstream input to complete-apparatus processes/lifecycle models |
| allowed_use | matching part family, BOM, route, site, period, state, and allocation basis |
| excluded_use | complete-apparatus losses, installation, maintenance, end-of-life, or unmatched part/board state |
| required_metadata | PCR; part/recipient; BOM/drawing; materials; insulation; board state; route/treatment; site/period; mass; packaging; UUIDs; allocation |
| required_quality_disclosure | source/meter coverage; supplier share; period; calibration; residual; allocation/sensitivity; unresolved evidence; exclusions/outsourcing |
| update_trigger | material/BOM/route/board/site/energy/treatment/packaging/allocation change; obsolete data; resolved identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | UN Statistics Division, CPC 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | CPC 46132 identity/hierarchy |
| `eu-transformer-regulation-548-2014` | official_guidance | Commission Regulation (EU) No 548/2014, CELEX 32014R0548, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32014R0548 (accessed 2026-09-04) | Finished-transformer and winding definitions |
| `oria-et-al-transformer-lca-review-2026` | literature | Oria et al., LCA of transformers: a systematic review of methods, dominant contributors and research gaps (2026), https://doi.org/10.1007/s11367-026-02664-7 | Transformer components, materials, scope, quality |
| `iea-pvps-lci-photovoltaic-systems-2020` | dataset | Frischknecht et al., IEA PVPS T12-19:2020, ISBN 978-3-907281-14-7, https://www.iea-pvps.org/wp-content/uploads/2020/12/IEA-PVPS-LCI-report-2020.pdf | Original inverter LCI: components, utilities, processing, packaging, water, waste |
