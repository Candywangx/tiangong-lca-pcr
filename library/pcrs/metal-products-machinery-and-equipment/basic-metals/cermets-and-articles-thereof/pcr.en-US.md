---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.cermets-and-articles-thereof
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Cermets and articles thereof

## 1. Scope and Applicability

This PCR covers gate-to-gate production of cermets and simple, unmounted cermet articles made by powder preparation, shaping, debinding, sintering or pressure-assisted sintering, and any finishing needed to reach the declared plant-gate state. A cermet is a microscopic heterogeneous combination of a metallic component and a ceramic component; sintered metal carbides bonded with metal are included. The foreground starts when composition-declared ceramic powders, metallic binder powders, additives, utilities, and any accepted secondary feedstock enter the reporting site and ends with dry saleable product and all wastes and direct emissions leaving that site.

The rule covers WC-Co cemented carbides and Ti(C,N)-based cermets as representative material systems while remaining formulation-neutral. It does not cover ceramic-only products, homogeneous metal alloys, mounted tools, interchangeable tool tips or inserts already classifiable as fabricated tools, machinery used to make or work cermets, nuclear-fuel cermets, downstream brazing or assembly, or coatings applied after the declared uncoated plant-gate product. Purchased upstream powder production and off-site recycling or treatment are represented by linked datasets, not reconstructed inside this foreground.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.cermets-and-articles-thereof |
| classification_refs | CPC 3.0:41605, exact mapping context |
| covered_products | Unwrought cermet feedstock and dry, unmounted, uncoated cermet bodies whose material contains a microscopic ceramic phase and metallic binder phase, including sintered metal carbides bonded with metal |
| excluded_products | Ceramic-only bodies; homogeneous metal alloys; nuclear-fuel cermets; mounted tools; tool inserts and tips already classified as fabricated tools; machinery; downstream brazed assemblies; post-gate coatings |
| representative_product | Sintered unmounted cermet blank with declared ceramic phase, metallic binder, composition, density, dimensions, and finishing state |
| production_route | Powder receipt and dosing; wet or dry mixing/milling; conditional granulation; pressing, extrusion, injection moulding, or another declared shaping route; debinding; vacuum or controlled-atmosphere sintering; conditional pressure-assisted densification and finishing |
| market_state | Dry saleable cermet feedstock or unmounted article at the manufacturing plant gate; the reference product is uncoated and not assembled into a tool or machine |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a composition-declared cermet in the declared plant-gate product form |
| How much | 1 kg net dry saleable product |
| How well | Meets the declared ceramic phase, metallic binder, composition, density or porosity, product form, dimensions or particle-size specification, and finishing state |
| How long or cycle | One production lot at the plant gate; no service-life claim is included for this mass-based material reference |
| reference_flow_link | `cermet_reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net dry saleable product |
| Reference product flow | Sintered unmounted cermet blank |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | ceramic phase and grade; metallic binder and grade; mass fractions and assay basis; recycled-content accounting; powder or article form; density or porosity; dimensions or particle-size distribution; shaping route; sintering and pressure-assistance route; finishing state; coating state; site; geography; production period |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, the product description, the reference-flow comment, or an equivalent field. The reference-product UUID remains unresolved; the foreground data package shall not substitute a narrower tool-part flow or a composition-unspecified proxy.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | Reference product and mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh net saleable product after removable process liquid and loose contamination are removed; report moisture or retained processing aid separately and normalize all exchanges to 1 kg net dry saleable product. |
| `cobalt_content_basis` | Cobalt powder input | Cobalt content `b1192e5a-4a70-4fd7-89a2-6b798c7ed3a7` | kg | Report contained cobalt as gross cobalt-powder mass multiplied by the measured or supplier-certified cobalt mass fraction; retain both gross mass and assay evidence. |
| `electricity_energy_basis` | Electricity input | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the meter unit and conversion factor; when converting kWh to the Tiangong reference unit, use 1 kWh = 3.6 MJ and disclose voltage level, grid or on-site source, losses, and allocation of shared meters. |
| `gas_volume_basis` | Natural gas and unresolved gaseous nitrogen inputs | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State the metering pressure, temperature, dry/wet basis, composition or purity, and conversion to reference volume; do not mix normal, standard, and operating cubic metres without conversion. |
| `batch_to_reference_basis` | All batch records | Mass or applicable metered property | per kg product | Divide the quantity attributable to the declared product by net dry conforming product mass; separately disclose work-in-progress change, internally returned material, and nonconforming product. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Composition-declared ceramic powder, metallic binder powder, additives, accepted secondary feedstock, and utilities received at the reporting-site boundary |
| starting_condition_role | Foreground gate for powder processing, shaping, densification, and required finishing |
| product_classification_scope | Cermet material and simple unmounted cermet articles; classification references locate the category but do not redefine this semantic boundary |
| recursive_input_rule | Purchased cermet feedstock, cermet scrap, or a semi-finished cermet input is recorded once as an individual product input with its own upstream dataset; do not recursively rebuild it with this same PCR inside the receiving foreground |
| upstream_dataset_requirement | Link composition-, product-state-, geography-, technology-, and recycled-content-appropriate datasets for every purchased powder, binder, additive, fuel, electricity supply, process gas, water supply, and off-site treatment service |
| disclosure | Declare site, period, product formulation, product form, shaping and sintering routes, pressure assistance, finishing, internal-loop treatment, recycled-content method, abatement, cut-offs, and every excluded or outsourced operation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | Foreground system | Include receipt and internal handling of powders and additives, dosing, mixing or milling, granulation when used, shaping, debinding, sintering, pressure-assisted densification when used, inspection, required finishing, internal material returns, waste handling, and on-site abatement through the plant gate. | `furberg-arvidsson-molander-2019`; `wang-bai-wang-men-2024` |
| `boundary_upstream_links` | Purchased inputs and off-site services | Represent production of powders, binders, additives, energy carriers, utilities, and off-site recovery, recycling, or disposal with linked upstream datasets; do not omit them from the downstream lifecycle model. | `eu-pef-2021-2279` |
| `boundary_direct_releases` | Foreground emissions | Record measured or mass-balance-derived direct releases after abatement by substance and receiving compartment; retain gross generation, capture, recovery, and final release records where available. | `furberg-arvidsson-molander-2019`; `eu-pef-2021-2279` |
| `boundary_no_tool_substitution` | Product identity | Do not substitute a mounted tool, a machine, or a narrower fabricated WC-Co tool-part flow for the unresolved CPC 41605 reference product. | `eu-cn-cermet-definition-2020`; `eu-cermet-sticks-classification-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cermet_manufacture` | Cermet powder processing, consolidation, and finishing | required | Always include operations controlled by the reporting site from received powders through dry saleable product; mark an individual flow not applicable only when records demonstrate it is absent from the declared route | Foreground production | 1 kg net dry saleable cermet product |

### Process: Cermet powder processing, consolidation, and finishing (`cermet_manufacture`)

#### Inputs

##### Product flows

###### Tungsten carbide ceramic-phase powder (`tungsten_carbide_powder`)

Record tungsten carbide powder when the declared formulation contains WC. The amount is the dry received WC powder charged to attributable batches, net of documented material returned outside the batch boundary.

- Selected flow: Tungsten carbide powder `e2c47d47-229c-44f3-9ed0-e74fbbf0176f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured dry WC powder charged to attributable production batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `furberg-arvidsson-molander-2019`

###### Titanium carbonitride ceramic-phase powder (`titanium_carbonitride_powder`)

Record titanium carbonitride powder only when Ti(C,N) is charged as one declared ceramic constituent. Do not combine TiC, TiN, WC, Mo2C, or another separately purchased powder into this row.

- Selected flow: Titanium carbonitride powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured dry Ti(C,N) powder charged to attributable production batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `wang-bai-wang-men-2024`

###### Cobalt metallic-binder powder (`cobalt_powder`)

Record cobalt powder only when it is a separately purchased binder constituent. The inventory amount is contained cobalt; gross powder mass and cobalt assay are retained for reconciliation.

- Selected flow: Cobalt powder `abe5e361-25a1-4258-a481-589bf66e3b13`
- Flow property / unit: Cobalt content `b1192e5a-4a70-4fd7-89a2-6b798c7ed3a7` / kg
- Amount rule: Gross cobalt-powder mass multiplied by batch-specific cobalt mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_inputs`
- Sources: `furberg-arvidsson-molander-2019`; `wang-bai-wang-men-2024`

###### Nickel metallic-binder powder (`nickel_powder`)

Record nickel powder only when it is charged as one declared metallic binder constituent. Do not use nickel concentrate or a composition-unspecified metal powder as a proxy.

- Selected flow: Nickel powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured dry nickel powder charged to attributable production batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `wang-bai-wang-men-2024`

###### Paraffin wax pressing or granulation binder (`paraffin_wax`)

Record paraffin wax when it is charged as the binder or pressing aid. Other binders remain distinct atomic product inputs and are not represented by this row.

- Selected flow: Paraffin wax `25a8346c-d726-4428-9a25-1a9584293ec5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured paraffin wax charged, net of separately metered recovered wax returned to the same batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `furberg-arvidsson-molander-2019`

###### Heptane milling solvent (`heptane`)

Record heptane when n-heptane is charged to wet milling. Hexane, ethanol, water, or another solvent is a separate physical input and is not included in this row.

- Selected flow: Heptane `f3026a5f-e4ce-4bb3-b015-92d56ebb0091`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Gross fresh n-heptane make-up crossing the site boundary, excluding internally recovered solvent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `furberg-arvidsson-molander-2019`

###### Process water for aqueous milling or wet finishing (`process_water`)

Record process water that crosses the site boundary and is consumed in aqueous milling or wet finishing. Closed-loop recirculation is not repeatedly counted as a fresh input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or tank-balance fresh process-water input attributable to the product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_gas_inputs`
- Sources:

###### Gaseous industrial nitrogen (`nitrogen_gas`)

Record gaseous nitrogen supplied to spray drying, inert handling, or controlled-atmosphere thermal treatment. Liquid nitrogen delivered to the site requires a distinct liquid-product flow and a documented vaporisation boundary.

- Selected flow: Gaseous industrial nitrogen
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Reference-condition volume of gaseous nitrogen consumed, net of metered closed-loop recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_gas_inputs`
- Sources: `furberg-arvidsson-molander-2019`

###### Electricity supplied to foreground equipment (`electricity`)

Record electricity used by handling, milling, granulation, shaping, debinding, sintering, pressure assistance, ventilation, abatement, inspection, and attributable finishing.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: Metered electricity attributable to the foreground process, including allocated shared auxiliary loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_inputs`
- Sources: `furberg-arvidsson-molander-2019`

###### Natural gas for on-site thermal equipment (`natural_gas`)

Record gaseous natural gas only when it crosses the site boundary and is combusted in attributable dryers, furnaces, or thermal oxidisers. Do not combine it with other fuels.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Reference-condition metered natural-gas volume attributable to the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_inputs`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net dry saleable sintered cermet blank (`cermet_reference_product`)

This row is the quantitative reference output. Record conforming product after debinding, sintering, inspection, and any finishing inside the declared boundary; exclude mounted components and downstream assemblies.

- Selected flow: Sintered unmounted cermet blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net dry conforming product mass; equals 1 kg on the normalized reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources: `eu-cn-cermet-definition-2020`; `eu-cermet-sticks-classification-2021`; `furberg-arvidsson-molander-2019`

##### Waste flows

###### Off-spec cermet powder blend leaving the site (`off_spec_cermet_powder`)

Record composition-declared powder blend that leaves the foreground as waste. Powder returned internally to the same or another attributable batch is an internal loop, not a waste output.

- Selected flow: Off-spec cermet powder blend
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed powder blend sent off-site as waste, net of documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `furberg-arvidsson-molander-2019`

###### Sintered cermet reject leaving the site (`sintered_cermet_reject`)

Record a nonconforming sintered cermet body that leaves the foreground for off-site recovery, recycling, treatment, or disposal. Keep destination and composition separate from this waste identity.

- Selected flow: Sintered cermet reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed sintered reject mass crossing the site boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `furberg-arvidsson-molander-2019`

###### Cermet grinding sludge leaving the site (`cermet_grinding_sludge`)

Record wet sludge generated by grinding the declared cermet composition when it leaves the site. Dry captured grinding dust is a different waste state and shall not be entered in this row.

- Selected flow: Cermet grinding sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed wet sludge crossing the site boundary, with dry-solids fraction and retained liquid reported separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources:

##### Elementary flows

###### Unrecovered n-heptane emitted to air (`heptane_air`)

Record measured or solvent-balance n-heptane released after recovery and abatement. Do not substitute a different heptane isomer or aggregate volatile-organic-compound flow.

- Selected flow: Heptane, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fresh n-heptane input minus recovered inventory, waste transfers, product retention, and closing-stock change, reconciled to monitored release
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `furberg-arvidsson-molander-2019`

###### Paraffin-wax vapour emitted to air (`paraffin_air`)

Record paraffin-wax vapour released during debinding or sintering after recovery and abatement. Do not use an indoor-air paraffins flow for a controlled external outlet.

- Selected flow: Paraffin wax vapour, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Paraffin charged minus recovered material, waste transfers, retained carbon or product, and closing-stock change, reconciled to monitored release
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `furberg-arvidsson-molander-2019`

###### Particulate matter emitted to air (`particulate_matter_air`)

Record particulate matter released after capture and abatement from powder handling, milling, shaping, finishing, and waste handling. Report measured size fractions and cermet composition as qualifiers when available.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Stack and fugitive particulate release attributable to the product after abatement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources:

###### Fossil carbon dioxide from on-site natural-gas combustion (`fossil_co2_air`)

Record direct fossil carbon dioxide only when natural gas is combusted inside the foreground. Upstream electricity emissions are not entered as direct foreground emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Site-specific monitored or fuel-carbon-balance fossil CO2 attributable to the foreground natural-gas input
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable cermet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared operations and internal loops | First subdivide processes or use direct meters and batch records so burdens follow the product that caused them; do not allocate internally recirculated powder or solvent as a co-product. | `eu-pef-2021-2279` |
| `allocation_physical` | Unavoidable shared production | If subdivision is not possible, allocate shared electricity, fuel, water, process gas, and abatement by a documented causal physical driver such as equipment time, metered load, treated gas volume, or processed mass. | `eu-pef-2021-2279` |
| `allocation_economic_last_resort` | Multiple saleable outputs without a defensible physical relation | Use economic allocation only after documenting why subdivision and a causal physical relation are infeasible; disclose prices, currency, reference period, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_recycling` | Cermet scrap and recovered powders | Report internal closed-loop returns as inventory reconciliation; for material crossing the site boundary, report its waste or product status, composition, destination, and the recycled-content and end-of-life convention used by the downstream study without double credit. | `eu-pef-2021-2279`; `furberg-arvidsson-molander-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `cermet_manufacture` | Each separately purchased ceramic powder, metallic binder powder, paraffin wax, and heptane input | weigh ticket, batch recipe, issue/return record, supplier certificate | material identity; lot; gross mass; dry mass; assay; recycled content; issue; return; opening and closing inventory; batch id | Calibrated scale plus batch and inventory reconciliation | kg and mass fraction | Every receipt and batch | At least 12 consecutive representative months or all batches for a shorter campaign | All reporting-site lines producing the declared product | Sum net site-boundary input by atomic material, then divide by net dry conforming product mass | Calibration records; supplier certificate; batch genealogy; inventory reconciliation |
| `cp_water_and_gas_inputs` | `cermet_manufacture` | Process water and gaseous nitrogen | meter, tank balance, purchase and inventory record | flow identity; meter reading; pressure; temperature; wet/dry basis; purity; recovery; opening and closing stock; batch or line | Calibrated meter or documented tank balance | kg for water; m3 for gas | Continuous or each batch | Same period as product output | All attributable process and abatement uses | Convert gas to declared reference conditions, subtract documented closed-loop recovery, and allocate shared use by causal driver | Meter calibration; condition-conversion record; balance closure |
| `cp_energy_inputs` | `cermet_manufacture` | Electricity and natural gas | utility meter, submeter, invoice, equipment log | carrier; meter start/end; unit; voltage or gas reference conditions; equipment time; shared-load driver; batch | Prefer direct submetering; reconcile to site utility records | MJ and m3 | Continuous or each production campaign | Same period as product output | All production, ventilation, abatement, inspection, and finishing inside the boundary | Sum direct meters and allocate shared loads using documented causal drivers | Meter calibration; invoice reconciliation; allocation worksheet |
| `cp_product_output` | `cermet_manufacture` | Reference product | calibrated scale, release record, inspection and laboratory record | product id; formulation; lot; gross mass; dry mass; moisture or retained aid; density or porosity; dimensions or particle size; coating and assembly state; disposition | Weigh conforming product after final in-boundary operation and link to release inspection | kg | Every lot | Same period as inputs | All conforming product leaving the reporting site | Sum net dry conforming product; exclude work in progress and nonconforming output | Scale calibration; release certificate; batch genealogy; test results |
| `cp_waste_outputs` | `cermet_manufacture` | Each powder, sintered-reject, and wet-grinding-sludge waste | weigh ticket, container log, manifest, treatment receipt | waste identity; composition; physical state; gross and dry mass; moisture; origin; destination; treatment; internal return; date | Weigh each outgoing waste and reconcile storage change and internal return | kg | Each shipment and monthly stocktake | Same period as product output | All waste crossing the reporting-site boundary | Sum outgoing mass by atomic waste identity; do not count internally returned material | Calibrated scale; waste manifest; storage inventory; treatment receipt |
| `cp_air_emissions` | `cermet_manufacture` | Each n-heptane, paraffin-wax vapour, particulate, and fossil-CO2 release | stack test, continuous monitor, solvent balance, fuel-carbon balance, capture and abatement log | substance; compartment; concentration; flow; duration; input; recovered mass; waste transfer; stock change; abatement efficiency; uncertainty | Direct monitoring where available; otherwise close a substance-specific balance and reconcile to monitoring | kg | Continuous, campaign, or representative test under declared operating state | Same period as product output and representative of all declared routes | All point and fugitive releases after abatement | Integrate concentration and flow or apply a closed substance balance; normalize to net dry product | Accredited test report; monitor calibration; balance closure; operating-state record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = attributable period amount / net dry conforming product mass | Atomic input or output amount; net dry conforming product mass | Amount per kg reference product | `eu-pef-2021-2279` |
| `calc_cobalt_content` | `cobalt_powder` | contained cobalt = gross cobalt-powder mass × cobalt assay mass fraction | Gross powder mass; batch or supplier assay | kg cobalt content | `furberg-arvidsson-molander-2019` |
| `calc_gas_reference_volume` | `natural_gas`; `nitrogen_gas` | Convert metered volume to the declared reference pressure, temperature, and wet/dry basis using the documented gas law and composition; preserve the original meter record | Metered volume; pressure; temperature; humidity; composition | m3 at declared reference conditions |  |
| `calc_material_balance` | Product, material, waste, and direct-release reconciliation | accepted external inputs + opening attributable inventory = product + external wastes + direct releases + closing attributable inventory; investigate imbalance outside stated measurement uncertainty | Dry material inputs; recovered loops; product; wastes; releases; inventory change | Closed period material balance and unexplained difference | `furberg-arvidsson-molander-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and every exchange | Preserve one atomic flow identity, physical state, composition or purity, direction, flow type, and Tiangong UUID where confirmed; never use a material, fuel, utility, waste, or emission collection label as a flow. | Batch genealogy, supplier certificate, flow mapping, and UUID audit |
| `dq_representativeness` | Foreground dataset | Cover all declared products, lines, shifts, and normal operating states for at least 12 consecutive representative months, or disclose and justify a shorter complete campaign. | Production calendar, coverage calculation, and exclusion log |
| `dq_completeness` | Material and energy balance | Account for at least 99% of measured dry powder and binder input mass and 99% of metered electricity and fuel by mass or energy before any cut-off; list every excluded exchange separately. | Reconciliation worksheets and cut-off register |
| `dq_measurement` | Meters, scales, assays, and emissions | Use calibration-current instruments and retain sampling, detection-limit, conversion, and uncertainty records. Values below detection limits shall not be silently set to zero. | Calibration certificates, laboratory reports, and monitor QA records |
| `dq_secondary_data` | Linked upstream and treatment datasets | Match composition, product state, technology, geography, period, and recycled-content convention; document every mismatch and proxy separately. | Dataset-selection log and data-quality assessment consistent with `eu-pef-2021-2279` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | Reference product | Confirm the output is a microscopic ceramic-metal composite or sintered metal carbide with metallic binder, in the declared unmounted plant-gate state, and not a ceramic-only body, homogeneous alloy, mounted tool, fabricated tool insert, or machine. | `eu-cn-cermet-definition-2020`; `eu-cermet-sticks-classification-2021` |
| `validation_reference_mass` | Reference flow | Require exactly 1 kg net dry conforming product after normalization and complete required qualifiers; fail if a narrower tool-part UUID or other proxy is used for the unresolved reference product. | `eu-pef-2021-2279` |
| `validation_atomic_inventory` | Inventory | Require every exchange to be atomic and conditionally absent rows to be supported by route records; reject combined powders, fuels, utilities, wastes, or emissions. |  |
| `validation_balance` | Foreground period | Require material, energy, solvent, waste, and direct-emission reconciliation within documented measurement uncertainty; unexplained imbalance is a finding, not an allocated loss. | `furberg-arvidsson-molander-2019` |
| `validation_uuid_semantics` | UUID-bearing rows | Recheck state 100, English and Chinese baseName, flow type, classification, property, unit group, product state, and generalComment; fail any semantic, compartment, or state mismatch. |  |
| `validation_boundary_and_allocation` | Dataset and downstream model | Confirm all controlled operations, shared auxiliaries, abatement, direct releases, and off-site links are represented and that subdivision or causal physical allocation precedes any economic allocation. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one declared cermet formulation and plant-gate product state |
| downstream_use | `secondary_dataset`; `background_dataset` after review and resolution of product and inventory identity gaps |
| allowed_use | Product-specific cradle-to-gate or cradle-to-grave studies when composition, product state, technology, geography, period, recycled-content convention, allocation, and upstream links match the study |
| excluded_use | Comparative assertions across unlike cermet systems or product states; mounted-tool or machinery modelling; use of unresolved UUIDs as if confirmed; omission of upstream powder production or off-site waste treatment |
| required_metadata | PCR id and version; site and geography; reporting period; ceramic and metal phases; formulation and assays; recycled content; powder or article form; density or porosity; dimensions or particle size; shaping, sintering, pressure-assistance, and finishing route; coating and assembly state; allocation; cut-offs; data sources; unresolved identities |
| required_quality_disclosure | Temporal and production coverage; meter and scale coverage; assay basis; material, solvent, and energy balance closure; emission monitoring; data-quality assessment; uncertainty; proxy mismatches; outsourced steps; range-evidence gaps |
| update_trigger | Change in formulation, product form, recycled-content route, powder supplier technology, shaping or sintering technology, pressure assistance, finishing, energy supply, abatement, allocation basis, site, or representative production period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official CPC 41605 product-classification identity |
| `eu-cn-cermet-definition-2020` | standard | European Commission Implementing Regulation (EU) 2020/1577, Combined Nomenclature Section XV Note 4, https://eur-lex.europa.eu/eli/reg_impl/2020/1577/oj/eng/pdf (retrieved 2026-09-04) | Official cermet material definition, including sintered metal carbides bonded with metal |
| `eu-cermet-sticks-classification-2021` | official_guidance | European Commission Implementing Regulation (EU) 2021/910, https://eur-lex.europa.eu/eli/reg_impl/2021/910/oj/eng (retrieved 2026-09-04) | Boundary between general cermet articles and narrower tool products |
| `furberg-arvidsson-molander-2019` | literature | Furberg, A.; Arvidsson, R.; Molander, S. (2019), Environmental life cycle assessment of cemented carbide (WC-Co) production, Journal of Cleaner Production 209, 1126-1138, https://doi.org/10.1016/j.jclepro.2018.10.272 | WC-Co powder-milling, granulation, compaction, sintering, inputs, wastes, solvent recovery, and cradle-to-gate inventory structure |
| `wang-bai-wang-men-2024` | literature | Wang, L.; Bai, J.; Wang, Y.; Men, Z. (2024), A Review of Research Progress on Ti(C,N)-Based Cermet Binder by Intermetallic Compounds and High-Entropy Alloys, Materials 17(3), 675, https://doi.org/10.3390/ma17030675 | Ti(C,N) hard-phase and Fe-Co-Ni binder identity and powder-metallurgy route |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-09-04) | Functional unit, reference flow, boundary, company-specific data, data quality, allocation hierarchy, reporting, and verification rules |
