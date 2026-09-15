---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-cold-rolled-of-a-width-649bcce4
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Flat-rolled products of non-alloy steel, not further worked than cold-rolled, of a width of 600 mm or more

## 1. Scope and Applicability

This PCR covers uncoated flat-rolled non-alloy steel at least 600 mm wide that leaves the reporting gate not further worked than cold-rolled. Coil and cut-sheet forms are included when grade, dimensions, surface, temper and delivery form are declared. Integrated steelworks and stand-alone cold rollers are supported by linking purchased intermediates to compatible upstream cradle-to-gate datasets.

Products narrower than 600 mm; alloy, stainless, silicon-electrical or high-speed steels; hot-rolled products; and clad, plated, coated or otherwise further-worked products are excluded. Downstream fabrication, use and end-of-life are outside the reference result.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-cold-rolled-of-a-width-649bcce4 |
| classification_refs | CPC 3.0: 41221 (exact) |
| covered_products | Uncoated non-alloy steel cold-rolled coil or cut sheet, width >= 600 mm, not further worked than cold-rolled |
| excluded_products | Width < 600 mm; alloy, stainless, silicon-electrical or high-speed steel; hot-rolled-only, clad, plated, coated or otherwise further-worked products |
| representative_product | Saleable uncoated non-alloy cold-rolled steel coil at the steelworks or cold-rolling gate |
| production_route | BOF or EAF steelmaking followed by casting, hot-strip production, pickling, cold reduction and declared applicable annealing, temper/skin-pass and finishing |
| market_state | Dry saleable coil or cut sheet; uncoated; grade, width, thickness, temper, surface, edge and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of saleable uncoated non-alloy steel flat product in the cold-rolled state |
| How much | 1,000 kg net saleable product |
| How well | Declared grade and dimensions, width >= 600 mm, uncoated and not further worked beyond the declared cold-rolled state |
| How long or cycle | One production batch or reporting-period aggregate; no use-stage duration |
| reference_flow_link | `cold_rolled_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Flat-rolled non-alloy steel product, cold-rolled, width >= 600 mm |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | non-alloy steel grade; BOF/EAF route share; width; thickness; coil or sheet form; annealed state; temper/skin-pass state; surface and edge; uncoated status; geography; technology; reference year; packaging inclusion |

All required qualifiers shall be declared in dataset metadata, process notes, reference-flow comment, product description or an equivalent field. The reference-product UUID is unresolved: hybrid search followed by direct reads found no exact TianGong product flow matching this product name and boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net dry saleable mass and normalize every inventory quantity to 1,000 kg of `cold_rolled_product`. |
| `electricity_measurement` | electricity rows | Energy | kWh | Preserve purchased and self-generated electricity separately; report reconciled net consumption. |
| `gas_volume_basis` | natural gas and oxygen | Volume | m3 | Declare temperature and pressure basis; do not combine incompatible normal-volume conditions. |
| `mass_balance_basis` | intermediate, product and waste mass | Mass | kg | Reconcile inputs, outputs, internal returns, stock change and losses on consistent bases. |

## 5. System Boundary

The required result is cradle-to-gate. Purchased materials, energy and steel intermediates require compatible upstream datasets. Foreground begins at the first reporting-organization-controlled process and ends with dispatch-ready qualifying product.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | reference dataset | Include upstream production and all controlled steelmaking, casting, hot-strip, pickling, cold reduction, applicable annealing and finishing, utilities, abatement, internal transport and waste management through the gate. | `worldsteel-2021-lci-study`; `worldsteel-2017-lci-methodology`; `ec-jrc-2022-fmp-bref` |
| `boundary_purchased_intermediate` | purchased slab or hot-rolled coil | Record the purchased intermediate once with a compatible cradle-to-gate upstream dataset; do not duplicate supplier stages. | `worldsteel-2021-lci-study`; `worldsteel-2017-lci-methodology` |
| `boundary_product_exclusions` | product identity | Exclude coating, plating, cladding, downstream fabrication, use and embedded end-of-life credits. | `un-cpc-v3-41221`; `china-mof-2024-tariff-7209`; `worldsteel-2023-cold-rolled-coil-global` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Raw materials, scrap or purchased steel intermediate received at the first controlled process, with upstream cradle-to-gate datasets |
| starting_condition_role | Foreground control boundary within a cradle-to-gate product system |
| product_classification_scope | Uncoated non-alloy steel flat product, cold-rolled terminal state, width >= 600 mm |
| recursive_input_rule | Record a same-category or upstream steel intermediate once and omit processes represented by its upstream dataset |
| upstream_dataset_requirement | Geography-, technology-, grade-, time- and allocation-compatible cradle-to-gate datasets for purchased inputs |
| disclosure | BOF/EAF shares; controlled stages; intermediates; electricity; gas conditions; grade and dimensions; annealing and finishing; allocation; internal scrap; packaging; geography; technology; period |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `steelmaking_and_casting` | Ironmaking, steelmaking, refining and casting | conditional | Foreground when site-controlled; otherwise represented upstream. Route rows apply only to the declared BOF/EAF configuration. | non-alloy steel slab production | kg slab |
| `hot_strip_production` | Slab reheating and hot-strip production | conditional | Foreground when site-controlled; otherwise use a compatible upstream hot-rolled-coil dataset. | hot-rolled feed coil production | kg hot-rolled coil |
| `cold_rolling_and_finishing` | Pickling, cold reduction and applicable finishing | required | Pickling and cold reduction required; annealing, temper/skin-pass and finishing only when performed before the gate. | qualifying product production | 1,000 kg saleable product |

### Process: Ironmaking, steelmaking, refining and casting (`steelmaking_and_casting`)

#### Inputs

##### Product flows

###### Natural gas for sinter ignition (`sinter_ignition_natural_gas`)

Record only when consumed to ignite an in-scope sinter strand.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: metered volume at declared conditions
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1,000 kg saleable reference product
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steelmaking_inventory`
- Sources: `worldsteel-2017-lci-methodology`

###### Industrial oxygen for refining (`industrial_oxygen`)

Record only when oxygen-blown refining applies.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: metered volume at declared normal conditions
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1,000 kg saleable reference product
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steelmaking_inventory`
- Sources: `worldsteel-2017-lci-methodology`

###### Electricity for steelmaking and casting (`steelmaking_electricity`)

Record reconciled electricity for included production, utilities and abatement.

- Selected flow: Steelworks electricity at point of use
- Flow property / unit: Energy / kWh
- Amount rule: reconciled meter consumption
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg saleable reference product
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steelmaking_inventory`
- Sources: `worldsteel-2021-lci-study`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from refining (`fossil_carbon_dioxide`)

Record direct refining emissions only; exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: direct measurement or documented carbon balance
- Value mode: `calculated_value`
- Specificity: `technology_specific`
- Normalization basis: per 1,000 kg saleable reference product
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_steelmaking_inventory`
- Sources: `worldsteel-2021-lci-study`

### Process: Slab reheating and hot-strip production (`hot_strip_production`)

#### Inputs

##### Product flows

###### Electricity for hot-strip production (`hot_strip_electricity`)

Record electricity for descaling, rolling, cooling, coiling, utilities and abatement.

- Selected flow: Steelworks electricity at point of use
- Flow property / unit: Energy / kWh
- Amount rule: reconciled meter consumption
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg saleable reference product
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hot_strip_inventory`
- Sources: `ec-jrc-2022-fmp-bref`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Uncoated hot-rolled coil (`hot_rolled_coil`)

Record feed coil released to pickling.

- Selected flow: steel hot rolled coil `4f1a1835-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured released coil mass
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1,000 kg saleable reference product
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hot_strip_inventory`
- Sources: `worldsteel-2017-lci-methodology`; `ec-jrc-2022-fmp-bref`

##### Waste flows

##### Elementary flows

### Process: Pickling, cold reduction and applicable finishing (`cold_rolling_and_finishing`)

#### Inputs

##### Product flows

###### Hot-rolled coil entering pickling (`pickling_feed_coil`)

Record uncoated feed coil at the cold-rolling boundary.

- Selected flow: steel hot rolled coil `4f1a1835-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed feed-coil mass
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1,000 kg saleable reference product
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cold_rolling_inventory`
- Sources: `worldsteel-2023-cold-rolled-coil-global`; `ec-jrc-2022-fmp-bref`

###### Electricity for cold rolling and finishing (`cold_rolling_electricity`)

Record pickling, cold reduction and declared applicable finishing electricity.

- Selected flow: Steelworks electricity at point of use
- Flow property / unit: Energy / kWh
- Amount rule: reconciled meter consumption
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg saleable reference product
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cold_rolling_inventory`
- Sources: `ec-jrc-2022-fmp-bref`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualifying cold-rolled product (`cold_rolled_product`)

This is the product output matching the Reference Flow Definition. Its TianGong product-flow UUID is explicitly unresolved; record only net saleable product meeting the declared boundary.

- Selected flow: Flat-rolled non-alloy steel product, cold-rolled, width >= 600 mm
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: net saleable mass normalized to exactly 1,000 kg
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: 1,000 kg saleable reference product
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cold_rolling_inventory`
- Sources: `un-cpc-v3-41221`; `worldsteel-2023-cold-rolled-coil-global`

##### Waste flows

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | foreground burdens | Use direct metering, process subdivision and internal-transfer tracing before allocation. | `worldsteel-2017-lci-methodology` |
| `allocation_internal_scrap` | internal scrap | Treat internal returns as transfers, not external input, final waste or recycling credit. | `worldsteel-2023-cold-rolled-coil-global` |
| `allocation_co_products` | exported co-products | Use system expansion only with a defensible substitute and displacement ratio; disclose assumptions and sensitivity. | `worldsteel-2023-cold-rolled-coil-global`; `worldsteel-2017-lci-methodology` |
| `allocation_end_of_life` | recycling | Report end-of-life recycling separately and prevent double counting. | `worldsteel-2021-lci-study`; `worldsteel-2023-cold-rolled-coil-global` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_steelmaking_inventory` | `steelmaking_and_casting` | listed rows | meters, stack data, production records | quantity; unit; time; route; gas condition; boundary | reconcile process and meter records | row-specific | monthly | >= 12 representative months | controlled steelmaking and abatement | normalize after stock and transfer reconciliation | calibration; route balance |
| `cp_hot_strip_inventory` | `hot_strip_production` | listed rows | coil scales and meters | quantity; unit; time; coil; boundary | reconcile campaigns to released coil | row-specific | monthly | >= 12 representative months | controlled hot-strip operations | normalize after transfer reconciliation | calibration; genealogy |
| `cp_cold_rolling_inventory` | `cold_rolling_and_finishing` | listed rows | feed/product scales and meters | quantity; unit; time; coil; grade; dimensions; finishing flags | trace feed through saleable output | row-specific | monthly | >= 12 representative months | cold rolling and applicable finishing | normalize to net saleable output | genealogy; calibration; inspection |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every row | normalized quantity = verified row quantity / net saleable product mass x 1,000 kg | row quantity; product mass | quantity per 1,000 kg |  |
| `calc_gas_basis` | gas rows | Convert after recording actual and target temperature, pressure and factor; retain original reading. | volume; conditions; factor | m3 at declared conditions |  |
| `calc_route_weighting` | multi-route dataset | Aggregate separately complete BOF and EAF inventories using verified saleable-mass shares. | route inventories; shares | weighted inventory | `worldsteel-2021-lci-study` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Retain grade, dimensions, form, surface, temper, uncoated status and genealogy. | specification; inspection |
| `dq_route` | route | Report BOF/EAF shares and controlled stages versus purchased intermediates. | production ledger; dataset map |
| `dq_temporal` | foreground | Use >= 12 representative months or justify a shorter campaign. | dated meters and logs |
| `dq_completeness` | all processes | Account for listed rows and add every significant actual atomic exchange without umbrella labels. | balances; signed checklist |
| `dq_upstream` | purchased inputs | Select upstream datasets compatible with geography, technology, state, time and allocation. | metadata and rationale |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference product | Fail for alloy steel, width < 600 mm, coating, further working beyond cold rolling, or missing qualifiers. | `un-cpc-v3-41221`; `china-mof-2024-tariff-7209` |
| `validation_reference_amount` | reference flow | Require one `cold_rolled_product` output normalized to 1,000 kg. | `worldsteel-2023-cold-rolled-coil-global` |
| `validation_route_boundary` | boundary | Require a complete cradle-to-gate chain without duplicated stages. | `worldsteel-2021-lci-study`; `worldsteel-2017-lci-methodology` |
| `validation_process_sequence` | cold rolling | Require pickling and cold reduction plus applicable/not-applicable finishing declarations. | `ec-jrc-2022-fmp-bref` |
| `validation_inventory_atomicity` | inventory | Require one exchange, direction, flow type, amount rule, unit, basis, evidence and protocol per row. |  |
| `validation_allocation` | co-products | Require documented system expansion and separate end-of-life reporting. | `worldsteel-2017-lci-methodology`; `worldsteel-2023-cold-rolled-coil-global` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` |
| downstream_use | Cradle-to-gate LCA for uncoated non-alloy cold-rolled flat steel, width >= 600 mm |
| allowed_use | Studies compatible with declared grade, dimensions, route, geography, technology, period and allocation |
| excluded_use | Coated, alloy or stainless products; width < 600 mm; downstream fabrication; undisclosed route mixing |
| required_metadata | PCR id; CPC; grade; dimensions; form; surface; temper; route shares; stages; intermediates; geography; technology; period; allocation; packaging |
| required_quality_disclosure | data coverage; calibration; balance; upstream selection; missing UUIDs; gaps; allocation; recycling; representativeness |
| update_trigger | Change in grade, width, coating/further working, route, technology, energy, allocation, upstream data or period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-41221` | `official_guidance` | UNSD, CPC Version 3.0 structure, code 41221, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03) | classification identity and boundary |
| `china-mof-2024-tariff-7209` | `official_guidance` | Ministry of Finance of China, 2024 tariff schedule, heading 72.09, https://gss.mof.gov.cn/gzdt/zhengcefabu/202312/P020231221537512029907.pdf (retrieved 2026-09-03) | Chinese terminology and uncoated boundary |
| `worldsteel-2017-lci-methodology` | `method_factor` | World Steel Association, Life Cycle Inventory Methodology Report, 2017, https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf (retrieved 2026-09-03) | routes, process chain, boundary and allocation |
| `worldsteel-2021-lci-study` | `dataset` | World Steel Association, Life Cycle Inventory Study: 2020 Data Release, May 2021, https://worldsteel.org/wp-content/uploads/Life-Cycle-Inventory-study-report-2020-data-release.pdf (retrieved 2026-09-03) | boundary, route coverage, collection and quality |
| `worldsteel-2023-cold-rolled-coil-global` | `dataset` | World Steel Association, Global Cold Rolled Coil LCA Eco-profile, June 2023, https://worldsteel.org/wp-content/uploads/Cold-rolled-coil-Global-Other.pdf (retrieved 2026-09-03) | product state, declared unit, routes and allocation |
| `ec-jrc-2022-fmp-bref` | `official_guidance` | European Commission JRC, Ferrous Metals Processing Industry BREF, 2022, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry (retrieved 2026-09-03) | hot-strip steps and cold-rolling sequence |
