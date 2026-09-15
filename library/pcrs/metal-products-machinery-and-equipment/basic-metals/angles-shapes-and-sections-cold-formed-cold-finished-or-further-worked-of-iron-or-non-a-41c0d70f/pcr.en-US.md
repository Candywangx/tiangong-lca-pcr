---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.angles-shapes-and-sections-cold-formed-cold-finished-or-further-worked-of-iron-or-non-a-41c0d70f
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Angles, shapes and sections, cold-formed, cold-finished or further worked, of iron or non-alloy steel

## 1. Scope and Applicability

This PCR applies to gate-to-gate foreground data packages for iron or non-alloy steel angles, shapes and sections whose declared market state results from at least one cold-forming, cold-finishing or further-working operation. It covers open or solid section profiles obtained from flat-rolled feedstock or from a pre-existing iron or non-alloy steel section, provided the output remains a basic steel section rather than a fabricated structural article. The producer shall declare the incoming steel state, steel grade, section geometry, actual processing route, surface condition and dispatch condition.

The PCR excludes products that are only hot-rolled, hot-drawn or hot-extruded; alloy-steel or stainless-steel sections; bars, rods, wire, sheet piling, railway track material, tubes and hollow profiles; welded sections classified as welded structural shapes rather than cold-processed sections; and plates, profiles or assemblies prepared for a specific structure. Upstream ironmaking, steelmaking and production of purchased steel feedstock are represented by qualified upstream datasets and are not recreated inside the foreground process. Installation, use, maintenance, demolition and end-of-life are outside the reference boundary.

The category boundary follows CPC 3.0 code 41262 and the corresponding HS 7216 distinctions. The CPC reference is classification context, not the canonical PCR identity. `un-cpc-3-0-2025` and `un-hs-2017-7216` support this semantic boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.angles-shapes-and-sections-cold-formed-cold-finished-or-further-worked-of-iron-or-non-a-41c0d70f |
| classification_refs | CPC 3.0: 41262; HS 2017: 7216 product-state distinctions |
| covered_products | Iron or non-alloy steel angles, shapes and sections that are cold-formed, cold-finished or further worked and remain basic steel sections at the factory gate |
| excluded_products | Hot-only sections; alloy or stainless steel sections; bars, rods and wire; sheet piling; railway track material; tubes and hollow profiles; separately classified welded sections; fabricated structural articles |
| representative_product | A dimensionally specified iron or non-alloy steel open section made from flat-rolled steel by cold roll forming, cut and inspected for dispatch |
| production_route | Declared purchased steel feedstock followed by one or more documented cold-forming, cold-finishing or further-working operations; pickling, heat treatment, surface finishing and packing are included only when performed |
| market_state | Finished section at the producing facility gate, with steel grade, cross-section, dimensions, surface condition, coating status, processing route and packaging state declared |

## 3. Reference Flow

Because the final application and service life are not fixed by this product category, this is a mass-based declared unit for an intermediate steel product rather than an end-use functional unit.

| Field | Value |
| --- | --- |
| What | Provision of a dimensionally specified iron or non-alloy steel angle, shape or section after cold-forming, cold-finishing or further working at the producing facility gate |
| How much | 1 kg of conforming finished section, excluding packaging mass |
| How well | Meets the declared steel grade, section geometry, dimensional tolerance, surface condition and order or applicable product specification |
| How long or cycle | One production reporting period and production lot at factory gate; no use-stage service life is assigned |
| reference_flow_link | The `reference_product` output of `section_manufacturing` normalized to 1 kg net conforming product |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Iron or non-alloy steel angle, shape or section, cold-formed, cold-finished or further worked |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | iron or non-alloy steel grade and applicable specification; section type and cross-sectional dimensions; wall or web and flange thickness as applicable; product length; incoming feedstock form and state; cold-forming, cold-finishing and further-working operations performed; heat-treatment state; surface and coating condition; facility and country or region; reporting period; product moisture or oil-film convention where relevant; packaging included or excluded from delivered mass |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, product description or an equivalent field. Missing qualifiers make the reference-flow definition incomplete. No exact public TianGong reference-product UUID was confirmed; the unresolved `reference_product` row is registered in the manifest and shall not be replaced by a broader steel-product proxy.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass of conforming finished section at factory gate. Exclude pallet, wrap, paper and strapping from the reference-product mass and inventory each packaging component separately when used. |
| `mass_normalization` | all mass exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg reference product | Convert reporting-period totals to kg per kg net conforming product using the same reporting-period denominator; retain unrounded source totals and conversion factors. |
| `electricity_energy` | `rolling_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert metered electricity to MJ using 1 kWh = 3.6 MJ without changing the supplier, geography, voltage, technology or delivery-boundary qualifiers. |
| `natural_gas_volume` | `natural_gas_input` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report gas volume at the metered reference temperature and pressure, disclose those conditions and do not combine gas volume with purchased heat or another fuel. |
| `route_applicability` | conditional exchanges | Applicable row property | row reference unit | Use `not_applicable` only after the producer documents that the named atomic exchange does not occur in the declared route; a missing record is not evidence of non-applicability. |

## 5. System Boundary

The foreground starts when declared purchased steel feedstock crosses the producing facility gate and ends when the conforming section is packed as applicable and ready for dispatch. The integrated process includes receiving and handling; actual cold forming or cold finishing; cutting, straightening, sizing, punching, drilling, grinding or other further working when performed; conditional pickling, rinsing, drying and neutralization; conditional heat treatment; inspection; internal transport; on-site utility generation; waste handling; abatement; and packing. `eu-jrc-fmp-bref-2022` supports the conditional operation and input/output decomposition, while `worldsteel-lci-methodology-2017` supports the gate-to-gate boundary and complete recording of energy, materials, wastes and emissions.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased iron or non-alloy steel flat product, hot-worked section, or same-category semi-finished section at the foreground facility gate, with mass, grade, form, surface and prior processing state declared |
| starting_condition_role | Foreground gate that separates purchased steel production from the incremental cold processing and further working represented by this PCR |
| product_classification_scope | Iron or non-alloy steel angles, shapes and sections that leave the foreground facility in a cold-formed, cold-finished or further-worked state consistent with CPC 3.0 code 41262 |
| recursive_input_rule | When a purchased input is already in this same product category, record it once as `input_same_category_section`, require an upstream dataset for its incoming state, and model only the additional operations performed in the foreground; do not unfold the same PCR recursively |
| upstream_dataset_requirement | Use supplier-specific datasets where available, otherwise geographically and technologically representative datasets for each declared steel feedstock, electricity supply, fuel, chemical, water and packaging component; disclose dataset geography, technology, product state and reference year |
| disclosure | Declare facility, reporting period, steel grade, incoming feedstock route and state, included and absent operations, utility supply conditions, yield and scrap destination, abatement and wastewater route, packaging state, allocation, exclusions and any deviation from this boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground product system | Include every operation and ancillary service performed from receipt of purchased steel feedstock through the section ready for dispatch, including internal transport, on-site utilities, abatement, waste handling and packing when used. | `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022` |
| `boundary_qualifying_operation` | category eligibility | Confirm that at least one cold-forming, cold-finishing or further-working operation changes the incoming steel into the declared market state; a product that is only hot-worked is outside this PCR. | `un-cpc-3-0-2025`; `un-hs-2017-7216` |
| `boundary_upstream_inputs` | purchased inputs | Link each purchased steel state, electricity supply, fuel, chemical, water and packaging component to an upstream dataset matching its geography, technology and delivery state; never recreate upstream steelmaking as an unqualified generic process inside the foreground. | `worldsteel-lci-methodology-2017` |
| `boundary_cutoff` | completeness | Record all energetic inputs. An excluded material flow shall be below 1% of mass, energy and environmental relevance for its unit process, and all excluded flows together shall remain below 5%; document the screening and never use cut-off to omit a hazardous or regulated release. | `worldsteel-lci-methodology-2017` |
| `boundary_downstream` | excluded life-cycle stages | Exclude outbound distribution, fabrication into a specific structure, installation, use, maintenance, demolition and end-of-life unless a separately declared expanded study adds them without changing this reference flow. | `worldsteel-lci-methodology-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `section_manufacturing` | Integrated cold processing and further working of iron or non-alloy steel sections | required | Include the actual sequence from purchased feedstock receipt to conforming product ready for dispatch; individual conditional exchanges are reported only when their named operation or material occurs. | Foreground manufacturing, finishing, ancillary services, abatement, waste handling and packing | 1 kg net conforming finished section at facility gate |

### Process: Integrated cold processing and further working (`section_manufacturing`)

#### Inputs

##### Product flows

###### Hot-rolled flat steel feedstock (`input_hot_rolled_flat_steel`)

Record hot-rolled iron or non-alloy steel sheet, strip or coil only when it is the purchased feedstock for the declared section route. Declare grade, coating, dimensions, mass and supplier production route.

- Selected flow: Hot-rolled flat product of iron or non-alloy steel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net received mass consumed in conforming and rejected production during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_mass`
- Sources: `un-hs-2017-7216`; `worldsteel-lci-methodology-2017`

###### Cold-rolled flat steel feedstock (`input_cold_rolled_flat_steel`)

Record cold-rolled iron or non-alloy steel sheet, strip or coil only when it enters the facility as purchased feedstock for profile forming. Keep its prior cold-rolling burdens in the upstream dataset.

- Selected flow: Cold-rolled flat product of iron or non-alloy steel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net received mass consumed in conforming and rejected production during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_mass`
- Sources: `un-hs-2017-7216`; `worldsteel-lci-methodology-2017`

###### Hot-worked steel section feedstock (`input_hot_rolled_section`)

Record a hot-rolled, hot-drawn or hot-extruded iron or non-alloy steel angle, shape or section only when the foreground gives it a qualifying cold-finished or further-worked market state.

- Selected flow: Hot-rolled angle, shape or section of iron or non-alloy steel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net received mass consumed in conforming and rejected production during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_mass`
- Sources: `un-cpc-3-0-2025`; `un-hs-2017-7216`

###### Same-category semi-finished section input (`input_same_category_section`)

Record a purchased cold-processed section only when additional qualifying work is performed at the foreground site. Declare the precise incoming state and apply the recursive-input rule.

- Selected flow: Semi-finished cold-processed angle, shape or section of iron or non-alloy steel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net received mass entering additional foreground processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_mass`
- Sources: `worldsteel-lci-methodology-2017`

###### Electricity at point of use (`rolling_electricity`)

Record alternating-current electricity consumed by production equipment, internal handling, cooling, pumps, extraction, abatement, wastewater treatment and packing within the foreground boundary. The selected flow requires declared supplier, geography, voltage, generation technology or mix and delivery boundary; no China voltage-class candidate may be substituted without those facts.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered electricity attributable to the declared product route, converted from kWh when needed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

###### Gaseous natural gas for on-site heating (`natural_gas_input`)

Record gaseous natural gas only when it crosses the foreground boundary for an identified furnace, dryer or other process-heating operation. Declare supply geography, process use and metered reference temperature and pressure.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered reference-condition gas volume attributable to included section production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

###### Mineral-oil cold-forming lubricant (`cold_forming_lubricant`)

Record fresh mineral-oil-based lubricant or oil-in-water emulsion concentrate added to cold-forming, rolling, grinding or cutting systems. Water added separately is recorded as `process_water`.

- Selected flow: Mineral-oil-based cold-forming lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchased make-up lubricant mass issued to the included equipment, net of returned unopened material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Sources: `eu-jrc-fmp-bref-2022`

###### Process water (`process_water`)

Record make-up water crossing the foreground boundary for lubricant emulsion, cooling, pickling-bath preparation, rinsing, cleaning or wastewater treatment. Do not count recirculated internal water as a new input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or invoiced make-up water supplied to included operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Sources: `eu-jrc-fmp-bref-2022`

###### Hydrochloric acid for pickling (`hydrochloric_acid`)

Record aqueous hydrochloric acid only when it is added to an included pickling or acid-cleaning operation. Report solution mass and concentration so pure-acid content can be calculated without combining it with another acid.

- Selected flow: Aqueous hydrochloric acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchased or prepared hydrochloric-acid solution mass added, with concentration recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Sources: `eu-jrc-fmp-bref-2022`

###### Sodium hydroxide for neutralization (`sodium_hydroxide`)

Record aqueous sodium hydroxide only when it is consumed in on-site neutralization of acidic wastewater or spent liquor. Report solution mass and concentration separately from hydrochloric acid.

- Selected flow: Aqueous sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sodium-hydroxide solution mass charged to the included treatment system, with concentration recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Sources: `eu-jrc-fmp-bref-2022`

###### Steel packaging strap (`steel_strapping`)

Record steel strap only when consumed to secure dispatched sections. Exclude reusable strap returned to the supplier from consumption and declare the accounting treatment.

- Selected flow: Steel baling band `56fe4f71-b594-4b55-8553-c87f2516737d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net steel strap mass consumed for dispatched conforming product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `eu-jrc-fmp-bref-2022`

###### Kraft-paper wrapping (`kraft_paper`)

Record uncoated kraft paper only when it is consumed as product wrapping or interleaving material for dispatch.

- Selected flow: Uncoated kraft packaging paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net dry paper mass consumed for dispatched conforming product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `eu-jrc-fmp-bref-2022`

###### Low-density polyethylene packaging film (`ldpe_film`)

Record low-density polyethylene film only when it is consumed for wrapping or moisture protection of dispatched sections.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net film mass consumed for dispatched conforming product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `eu-jrc-fmp-bref-2022`

###### Reusable wood pallet input (`wood_pallet`)

Record wood pallets only when supplied with the product or consumed through loss or damage. For a reuse pool, allocate the pallet mass over documented trips and retain the pool records.

- Selected flow: Reusable softwood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Pallet mass supplied once or documented mass loss allocated over verified reuse trips
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished section (`reference_product`)

This is the reference product leaving the foreground facility after the declared cold processing, inspection and packing state. Packaging mass is excluded from this flow.

- Selected flow: Iron or non-alloy steel angle, shape or section, cold-formed, cold-finished or further worked
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net verified mass of conforming finished section released for dispatch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_mass`
- Sources: `worldsteel-lci-methodology-2017`; `un-cpc-3-0-2025`

##### Waste flows

###### Segregated ferrous steel process scrap (`ferrous_steel_scrap`)

Record offcuts, edge trim, rejected section and captured ferrous swarf leaving the foreground as one segregated ferrous steel scrap stream. Keep internally reworked material out of both product output and exported scrap until its final disposition is known.

- Selected flow: Steel scrap `8658611f-0588-4eb7-9490-46bcd02b3c2f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed ferrous process scrap transferred to external recycling or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### Spent cold-forming oil emulsion (`spent_oil_emulsion`)

Record spent oil-in-water emulsion removed from the lubricant or coolant circuit and transferred off site or to on-site treatment. Do not combine it with dry swarf or spent pickling liquor.

- Selected flow: Spent mineral-oil-in-water cold-forming emulsion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or manifested spent emulsion leaving the recirculation system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-jrc-fmp-bref-2022`

###### Spent hydrochloric-acid pickling liquor (`spent_pickling_liquor`)

Record spent hydrochloric-acid liquor removed from an included pickling bath for regeneration or treatment. Report acid concentration and dissolved iron content when available.

- Selected flow: Spent hydrochloric-acid pickling liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or manifested spent liquor transferred from the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-jrc-fmp-bref-2022`

###### Iron-hydroxide neutralization sludge (`iron_hydroxide_sludge`)

Record dewatered iron-hydroxide sludge only when acidic wastewater is neutralized within the foreground boundary. Keep it distinct from spent oil emulsion and pickling liquor.

- Selected flow: Dewatered iron-hydroxide wastewater-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Wet sludge mass transferred from treatment, with dry-solids fraction recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-jrc-fmp-bref-2022`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2_air`)

Record direct fossil carbon dioxide from included on-site natural-gas combustion. Do not use this row for upstream electricity emissions or biogenic carbon dioxide.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stack mass or gas consumption multiplied by a documented site-specific fuel carbon and oxidation factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

###### Hydrogen chloride to air (`hydrogen_chloride_air`)

Record hydrogen chloride released after the control device from an included hydrochloric-acid pickling operation. Do not combine it with other acid gases.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Stack-test, continuous-monitoring or validated pickling mass-balance result after abatement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-fmp-bref-2022`

###### Nitrogen oxides to air (`nitrogen_oxides_air`)

Record nitrogen oxides from included on-site combustion, expressed as nitrogen dioxide mass. Do not combine this row with carbon monoxide or carbon dioxide.

- Selected flow: Nitrogen oxides to air, unspecified, as nitrogen dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured emission mass or fuel use multiplied by a documented site-specific nitrogen-oxides factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-fmp-bref-2022`

###### Carbon monoxide to air (`carbon_monoxide_air`)

Record carbon monoxide from included on-site combustion as a separate elementary emission after abatement.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured emission mass or fuel use multiplied by a documented site-specific carbon-monoxide factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-fmp-bref-2022`

###### Mineral-oil mist to air (`mineral_oil_mist_air`)

Record mineral-oil aerosol emitted after extraction and control from cold-forming, rolling, grinding or cutting equipment. Do not combine it with iron-bearing particulate.

- Selected flow: Mineral-oil mist to air, unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Stack-test or validated mass-balance emission mass after abatement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-fmp-bref-2022`

###### Iron-bearing particulate to air (`iron_particulate_air`)

Record iron-bearing particulate emitted after control from cutting, grinding or finishing. Declare the measured size fraction and do not combine it with oil mist.

- Selected flow: Iron-bearing particulate to air, unspecified size fraction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Stack-test or validated captured-versus-emitted mass-balance result after abatement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished section
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-fmp-bref-2022`

No external quantitative inventory range is prescribed. Available cold-rolling observations could not be combined with a second independent, boundary-compatible source for this broader section category. The manifest records the unresolved range-evidence needs, and the foreground collection rules remain mandatory.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | foreground operations | Prefer subdivision and direct meters, scales or batch records for the declared product family so allocation is avoided. | `worldsteel-lci-methodology-2017` |
| `allocation_shared_line` | shared line inputs and emissions | When direct measurement is not practicable, allocate shared exchanges using a documented physical relationship that reflects causation, such as machine time, metered load or processed mass. State the driver and test a materially different plausible driver when allocation changes conclusions. | `worldsteel-lci-methodology-2017` |
| `allocation_scrap` | ferrous process scrap | Treat segregated ferrous process scrap as a waste output at the foreground gate unless a documented expanded model applies a named recycling method. Do not add an end-of-life recycling credit to this gate-to-gate product and do not count internally reworked steel as both input and exported scrap. | `worldsteel-lci-methodology-2017` |
| `allocation_recovered_output` | recovered non-product outputs | Treat a recovered output as a co-product only when its quantity, destination, market demand and substituted function are documented. If system expansion is used, name the substituted product, disclose functional equivalence and conduct sensitivity analysis when the result is material. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_steel_mass` | `section_manufacturing` | each declared steel feedstock state | receiving scale, purchase and material-traceability records | feedstock item id; steel grade; form; prior processing state; supplier; origin; gross, tare and net mass; lot; destination product | reconcile calibrated scale tickets to purchase receipts and production issue records for each atomic feedstock row | kg | each receipt and production issue | same reporting period as product output, normally 12 consecutive months | all foreground production lines and storage losses serving the declared product | sum net consumed mass by feedstock row and product family; exclude inventory change not consumed | scale calibration, supplier certificate, material test certificate, purchase receipt and inventory reconciliation |
| `cp_energy` | `section_manufacturing` | electricity and gaseous natural gas | revenue meter, submeter and fuel invoice | meter id; opening and closing reading; kWh; gas volume; reference temperature and pressure; supplier; voltage; tariff or mix; equipment or line; downtime | use calibrated submeters where available and reconcile to facility invoices; allocate shared use only with the declared driver | kWh, MJ and m3 | at least monthly and at each meter change | same reporting period as product output, normally 12 consecutive months | all included equipment, ancillary systems and internal handling | subtract documented non-foreground loads, convert electricity at 3.6 MJ/kWh and normalize by conforming output mass | meter calibration, invoices, meter hierarchy, supplier disclosure and allocation worksheet |
| `cp_consumables` | `section_manufacturing` | lubricant, process water, hydrochloric acid and sodium hydroxide | item-specific issue, tank, meter, invoice and inventory records | item id; chemical identity; solution concentration; opening stock; receipts; closing stock; returned quantity; make-up water; process destination | calculate consumption separately for each named material from stock balance or calibrated meter | kg and concentration fraction | each issue or batch, reconciled monthly | same reporting period as product output | every included forming, finishing, pickling, rinsing, cooling and treatment system | opening stock plus receipts minus closing stock minus documented returns, by atomic row | calibrated tank or meter record, safety data sheet, concentration analysis, invoice and stock reconciliation |
| `cp_packaging` | `section_manufacturing` | steel strap, kraft paper, LDPE film and reusable wood pallets | packaging issue and dispatch records | packaging item id; material; unit mass; quantity issued; quantity returned; damaged quantity; reuse-pool trips; dispatched product mass | weigh representative units and reconcile item-specific issues to dispatch records | kg and item count | each dispatch batch, reconciled monthly | same reporting period as product output | packaging used for the declared product at the foreground facility | calculate each material mass separately; for pallets use measured pallet mass divided by verified trips only when a documented reuse pool exists | unit-weight checks, issue records, dispatch records, return logs and reuse-pool register |
| `cp_product_mass` | `section_manufacturing` | conforming finished section | calibrated product scale, piece count and dimensional record | product id; grade; cross-section; length; piece count; unit mass basis; measured net mass; rejected mass; release status; packaging tare | determine net conforming mass from calibrated scale records or verified piece count times measured unit mass, excluding packaging | kg | each production or dispatch lot | same reporting period as all inputs and outputs | all conforming lots represented by the dataset | sum released net mass after subtracting packaging tare and rejected product | scale calibration, dimensional inspection, release certificate, count reconciliation and packaging tare record |
| `cp_waste` | `section_manufacturing` | each segregated waste stream | waste scale, tank transfer, laboratory and manifest records | waste row id; gross, tare and net mass; liquid concentration or sludge dry solids; origin process; destination; treatment code; internal rework quantity | weigh or meter each named waste separately and reconcile storage change and manifests | kg | each transfer, reconciled monthly | same reporting period as product output | all included production, abatement and wastewater systems | generated waste equals transfers plus closing stock minus opening stock, adjusted for documented internal rework | calibrated scale or tank, waste manifest, laboratory analysis, recycler receipt and storage reconciliation |
| `cp_air_emissions` | `section_manufacturing` | each direct elementary air emission | continuous monitor, stack test or species-specific calculation record | source id; pollutant species; concentration; flow; operating time; fuel use; fuel carbon content; oxidation factor; control efficiency; test method; detection limit | use measured mass where available; otherwise calculate one species at a time from verified site-specific activity data and factor | kg emission and supporting measurement units | continuous where required or each representative test campaign, reconciled to operating hours | same reporting period as product output and representative operating conditions | every included combustion, pickling, forming, grinding and abatement source | integrate measured mass or multiply verified activity by the species-specific site factor; never reuse an upstream electricity emission here | monitor calibration, accredited test report, fuel certificate, operating log, factor provenance and abatement record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = reporting-period row amount / reporting-period net conforming finished-section mass | row total from its collection protocol; `reference_product` net mass | amount per 1 kg reference product | `worldsteel-lci-methodology-2017` |
| `calc_steel_mass_balance` | steel-bearing rows | reconcile total steel feedstock mass with conforming product, ferrous scrap, retained inventory change and other separately measured steel-bearing outputs; explain every residual rather than forcing balance | steel input rows; `reference_product`; `ferrous_steel_scrap`; inventory change | documented steel mass-balance residual | `worldsteel-lci-methodology-2017` |
| `calc_shared_exchange` | shared meters and common batches | allocated exchange = shared total × declared causal driver for this product / sum of the same driver for all products served | shared total; machine time, metered load or processed mass by product | product-attributed exchange | `worldsteel-lci-methodology-2017` |
| `calc_fossil_co2` | `fossil_co2_air` | use directly measured fossil CO2 mass; if unavailable, calculate from metered natural gas and a documented site-specific carbon content and oxidation factor with consistent units | natural-gas record; carbon-content certificate; oxidation evidence or stack measurement | kg fossil CO2 emitted |  |
| `calc_reusable_pallet` | `wood_pallet` | allocated pallet mass = measured pallet mass × pallets lost or supplied / conforming product mass, or measured pallet mass / verified reuse trips when pool accounting demonstrates those trips | pallet unit mass; issue, return, loss and trip records; product mass | kg pallet input per kg product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and steel feedstock | Preserve steel grade, material certificate, feedstock state, section geometry, route, surface state and product release linkage from incoming lot to output lot. | material certificates, route cards, inspection and release records |
| `dq_temporal` | all foreground data | Use one representative 12-month period when practicable. If a shorter period is unavoidable, state and justify it and account for maintenance, campaign, seasonal and product-mix effects. | reporting calendar, production log and representativeness assessment supported by `worldsteel-lci-methodology-2017` |
| `dq_geography_technology` | upstream links and utilities | Match upstream steel, electricity, fuel and consumable datasets to actual supply geography, technology and delivery state; document every proxy and why it is the closest available dataset. | supplier declaration, dataset metadata and proxy review |
| `dq_measurement` | meters, scales and tests | Retain calibration status, resolution, test method, detection limit and uncertainty or accuracy statement for material measurements. Prefer measured over calculated and calculated over estimated values. | calibration certificates, laboratory reports and meter register |
| `dq_completeness` | all included operations | Reconcile material, energy, product, waste and direct-emission records across the same facility and period, and document the cut-off screen and all exclusions. | mass balance, invoice reconciliation, meter hierarchy, waste manifests and exclusion register |
| `dq_uuid_status` | TianGong flow identity | Keep unresolved UUID cells blank until hybrid discovery and a public state-code 100 direct read confirm semantic identity, flow type, classification, property, unit group, product state, geography, technology and comment. | manifest unresolved register and direct-read audit record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference product | Reject a data package that omits steel grade, section geometry and dimensions, incoming feedstock state, qualifying cold or further-working operation, surface state, facility geography or reporting period. | `un-cpc-3-0-2025`; `un-hs-2017-7216` |
| `validation_reference_mass` | reference flow | Confirm that the reference output is exactly 1 kg net conforming section after normalization and that packaging tare is excluded from product mass but each consumed packaging component is inventoried separately. | `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022` |
| `validation_route_rows` | conditional inventory rows | For every absent conditional row, require evidence that its named operation or material is absent. Reject blank values or missing records presented as `not_applicable`. | `eu-jrc-fmp-bref-2022` |
| `validation_balance` | steel-bearing inventory | Recalculate the steel mass balance using unrounded reporting-period totals and require an explanation for every discrepancy, inventory change, internal rework and rejected output. | `worldsteel-lci-methodology-2017` |
| `validation_energy_and_emissions` | utilities and direct emissions | Reconcile electricity and natural gas with invoices and meter hierarchy; ensure direct emissions are restricted to foreground sources and that fossil CO2 is not duplicated from upstream electricity. | `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022` |
| `validation_allocation` | shared production | Verify subdivision first, reproduce the declared physical allocation calculation, and require sensitivity analysis when another plausible driver materially changes results. | `worldsteel-lci-methodology-2017` |
| `validation_recursive_input` | same-category input | Verify that a purchased same-category section has one qualified upstream dataset and that only incremental site operations are represented, with no recursive expansion of this PCR. | `worldsteel-lci-methodology-2017` |
| `validation_uuid` | UUID-bearing rows | Accept only UUIDs supported by a finalized hybrid-search receipt and public state-code 100 direct reads. Keep every non-adopted candidate from the receipts used for an inventory row rejected unless new route facts establish an exact semantic match and a new audit is completed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production package that may be reviewed and published as a `secondary_dataset` or `background_dataset` for the declared section route |
| downstream_use | Product-system modelling of cold-formed, cold-finished or further-worked iron or non-alloy steel sections when product state, geography, technology and boundary match |
| allowed_use | Cradle-to-gate models after adding qualified upstream datasets; comparative internal scenarios with an identical reference flow, boundary and allocation method; supply-chain screening with disclosed unresolved flow identities |
| excluded_use | Direct substitution for hot-only, alloy-steel, stainless-steel, hollow-section, welded structural-section or fabricated-structure datasets; use-stage performance comparisons without an application-specific functional unit; undisclosed geographic or technology proxies |
| required_metadata | canonical PCR id; product and feedstock qualifiers; facility geography; reporting period; process route and operation flags; reference mass convention; upstream dataset identities; utility supply qualifiers; allocation driver; cut-off screen; waste destinations; unresolved UUID register |
| required_quality_disclosure | primary-data coverage; measurement and calculation shares; calibration and uncertainty evidence; mass-balance residual; allocation sensitivity; temporal, geographic and technological representativeness; exclusions and proxies; flow-UUID audit status |
| update_trigger | Change in steel feedstock state or supplier route, section family, cold-processing technology, heat treatment, surface treatment, coating, energy supply, abatement, waste destination, allocation driver, facility geography, or reporting data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, *Central Product Classification Version 3.0 Structure and Explanatory Notes*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Official CPC 41262 identity, neighboring-category exclusions and product-state boundary |
| `un-hs-2017-7216` | Official guidance (`official_guidance`) | United Nations Statistics Division, *HS 2017, heading 7216 classification detail*, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2089/7216 | Distinguishing flat-product-derived and other cold-formed or cold-finished iron or non-alloy steel sections from hot-only states |
| `eu-jrc-fmp-bref-2022` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, *Best Available Techniques Reference Document for the Ferrous Metals Processing Industry*, December 2022, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf | Conditional cold-processing steps, finishing, pickling, water, oil, energy, wastewater, wastes and direct-emission inventory coverage |
| `worldsteel-lci-methodology-2017` | Method factor (`method_factor`) | World Steel Association, *Life Cycle Inventory Methodology Report*, 2017, https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 | 1 kg declared unit, gate-to-gate boundary, upstream dataset matching, data period and quality, completeness, mass balance, allocation and scrap treatment |
