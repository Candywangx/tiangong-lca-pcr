---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.molasses
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Molasses

## 1. Scope and Applicability

This PCR applies to unblended molasses produced as a saleable liquid co-product of sugar manufacture from sugar cane or sugar beet, and to refinery molasses recovered during raw-sugar refining. It covers blackstrap or final molasses and food-grade or industrial molasses when the product remains molasses at the declared production gate.

The foreground boundary starts with sugar cane, sugar beet, or raw sugar received at the reporting facility and ends with conforming molasses in bulk storage or in the declared dispatch packaging at the production gate. Route-specific feedstock preparation, juice extraction or raw-sugar affination, purification, evaporation, crystallization, centrifugation, molasses conditioning, storage, directly operated utilities, direct emissions, and on-site treatment of wastes and waste water are included when they occur.

This PCR excludes blended table syrups; high-test or invert cane syrups not obtained as liquor remaining after sugar crystallization; molassed beet pulp; compound feed; fermentation products such as ethanol, yeast, citric acid, or rum; and distribution, use, or end-of-life after the production gate. A product excluded here requires another applicable PCR or an explicitly reviewed scope extension.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.molasses |
| classification_refs | CPC 3.0: 23540 Molasses |
| covered_products | Unblended cane molasses, beet molasses, blackstrap or final molasses, and refinery molasses recovered from sugar crystallization or raw-sugar refining |
| excluded_products | Blended syrups; high-test or invert syrups not arising as crystallization mother liquor; molassed pulp; compound feed; fermentation products; downstream formulated products |
| representative_product | As-received, saleable final molasses at the production gate |
| production_route | Integrated cane-sugar manufacture; integrated beet-sugar manufacture; or raw-sugar refinery recovery, declared separately |
| market_state | Viscous liquid in bulk storage or declared dispatch packaging, with route, grade, dry matter or soluble-solids basis, and intended market stated |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Delivery of molasses as a carbohydrate-rich liquid ingredient or industrial/feedstock material |
| How much | 1 kg of molasses on an as-received net-mass basis |
| How well | Meets the producer's declared grade and specification, with production route, intended use/grade, dry matter or soluble solids, water content, total sugars or sucrose basis, and any applicable quality or contaminant requirements declared |
| How long or cycle | One conforming production lot delivered at the production gate; no service-life duration is assigned |
| reference_flow_link | reference_molasses |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Molasses `dcc60867-03df-4ea1-be73-6d88987911bd` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production route and feedstock; final, blackstrap, or refinery molasses designation; grade and intended use; as-received mass basis; dry matter or soluble-solids method and result; water content; total sugars or sucrose basis; geographic and temporal scope; facility gate; bulk or packaged dispatch state; allocation method and factor period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference molasses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net as-received molasses mass. Do not silently convert the reference flow to dry matter, sugars, or standard-solids mass. |
| `quality_basis` | Molasses quality results | Declared analytical property | mass fraction, %, or °Brix as applicable | State the analytical method, sampling basis, temperature where relevant, and whether each result is on an as-received or dry-matter basis. °Brix must not be treated as dry matter unless the declared method establishes that equivalence. |
| `volume_to_mass` | Tank, meter, or dispatch records reported by volume | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert volume to mass only with lot- or campaign-representative measured density and its measurement temperature; retain the original volume, density, temperature, and conversion record. |
| `net_utility_use` | Water, steam, heat, and electricity | Carrier-specific property | Carrier-specific unit | Record purchased and generated utilities separately and subtract internal recirculation only once. Preserve gross generation, exports, returns, condensate recovery, and net use so double counting can be checked. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Sugar cane, sugar beet, or raw sugar received at the first foreground facility gate, with route, mass, moisture or solids basis, supplier/origin, and receipt period declared |
| starting_condition_role | Feedstock entering an integrated sugar-manufacturing or raw-sugar-refining foreground system |
| product_classification_scope | Molasses recovered as crystallization mother liquor or refinery recovery syrup and sold as molasses; excludes downstream blends and transformation products |
| recursive_input_rule | Internally transferred molasses between included unit processes is an intermediate and is not assigned a separate upstream dataset. Purchased molasses entering finishing, blending, or repacking is an external same-category input and requires a separately resolved upstream molasses dataset; its burdens must not be recreated recursively. |
| upstream_dataset_requirement | Require upstream datasets for purchased cane, beet, raw sugar, fuels, electricity, chemicals, packaging, and other technosphere inputs. Identify any cut-off or missing upstream dataset explicitly. |
| disclosure | Declare production route, facility configuration, included utilities and treatment, allocation decision, co-products, internally recycled streams, dispatch state, temporal coverage, geography, and any excluded operation. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_complete` | Supported production route | Include the route-specific chain from received cane, beet, or raw sugar through preparation/affination, juice or liquor purification, evaporation, crystallization, centrifugal separation, and molasses finishing and storage when those operations are controlled by the reporting facility. | us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019 |
| `boundary_direct_operations` | Foreground facility | Include directly operated boilers, CHP, lime preparation or kiln operations, water supply, refrigeration, compressed air, storage, and waste or waste-water treatment to the extent they serve the included route; record utility exports and treatment transfers explicitly. | us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019 |
| `boundary_upstream_and_downstream` | Product system links | Link purchased inputs to upstream datasets. Exclude transport after the declared production gate, downstream blending, feed manufacture, fermentation, use, and end-of-life unless the study explicitly expands the boundary and discloses the extension. | ghg-protocol-product-standard-2011 |
| `boundary_no_silent_cutoff` | Material and energy balance | Do not omit a shared sugar-manufacturing operation, valuable co-product, residue, waste-water stream, utility flow, or direct emission merely because it is not dedicated to molasses; address it by subdivision, allocation, or explicit documented exclusion. | ghg-protocol-product-standard-2011 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `liquor_preparation` | Feedstock preparation and sugar liquor production | required | n/a; select and document the cane, beet, or raw-sugar-refinery route | Foreground preparation of clarified juice, thick juice, or standard liquor and route co-products | Mass of prepared liquor transferred to crystallization and mass of received feedstock |
| `crystallization_separation` | Evaporation, crystallization, and centrifugal separation | required | n/a | Shared foreground sugar and molasses production | Mass of massecuite or liquor processed and mass of molasses and crystalline sugar outputs |
| `molasses_finishing_storage` | Molasses conditioning, quality release, storage, and dispatch | required | n/a | Dedicated or shared finishing of saleable molasses at the production gate | 1 kg net as-received conforming molasses dispatched |

### Process: Feedstock preparation and sugar liquor production (`liquor_preparation`)

#### Inputs

##### Product flows

###### Received sugar-bearing feedstock (`received_feedstock`)

Record the route-specific mass of sugar cane, sugar beet, or raw sugar received by the foreground facility and attributable to the reporting campaign.

- Selected flow: Sugar cane, sugar beet, or raw sugar; select the route-specific Tiangong product flow before publication
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net receipt mass reconciled to inventory change and production records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conforming molasses dispatched after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipts`
- Sources: us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019

###### Process water and purification inputs (`preparation_water_chemicals`)

Record fresh make-up water and route-specific lime, carbon dioxide, acids, flocculants, sulfur compounds, biocides, or other purification inputs that cross the facility boundary; recycled water is tracked separately and not counted again as purchased input.

- Selected flow: Route-specific water and purification product flows; select Tiangong flows before publication
- Flow property / unit: Mass / kg, with water volume retained when metered
- Amount rule: measured purchase, issue, or meter records net of inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming molasses dispatched after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_water_inputs`
- Sources: us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997

###### Preparation energy and utilities (`preparation_energy`)

Record electricity, steam, heat, fuels, and other utilities consumed in receipt, cleaning, extraction or affination, purification, and liquor preparation.

- Selected flow: Carrier-specific electricity, fuel, steam, and heat flows; select Tiangong flows before publication
- Flow property / unit: Energy / kWh or MJ and Mass / kg or Volume / m3 for fuels as metered
- Amount rule: metered or calculated net utility use linked to the included operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming molasses dispatched after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019

##### Waste flows

No waste input is required by this PCR. Record any imported waste used as fuel or material as a separately identified route-specific input with its applicable waste-flow identity.

##### Elementary flows

No elementary input is prescribed. Record directly abstracted water and other elementary resources when they cross the environment boundary rather than a technosphere supplier boundary.

#### Outputs

##### Product flows

###### Prepared sugar liquor (`prepared_liquor`)

Record clarified juice, thick juice, standard liquor, or refinery liquor transferred to crystallization as an internal intermediate.

- Selected flow: Route-specific prepared sugar liquor; internal intermediate flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass or calculated mass from volume, measured density, and temperature
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per process output transferred to `crystallization_separation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_outputs`
- Sources: us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997

###### Valuable preparation co-products (`preparation_coproducts`)

Record bagasse, beet pulp, filter cake, recovered soil or stone, and other outputs as product flows when they have a documented beneficial use or market value; otherwise record them as wastes.

- Selected flow: Route-specific co-product flows; select Tiangong product flows before publication
- Flow property / unit: Mass / kg
- Amount rule: measured net output mass by co-product and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reporting campaign before allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019

##### Waste flows

###### Preparation residues and waste water (`preparation_wastes`)

Record non-valuable soil, trash, clarification mud, spent purification media, waste water, and other residues by treatment destination without netting them against product output.

- Selected flow: Route-specific waste and waste-water flows; select Tiangong waste flows before publication
- Flow property / unit: Mass / kg or Volume / m3 as measured
- Amount rule: measured generation or transfer quantity by waste type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reporting campaign before allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes_and_emissions`
- Sources: us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019

##### Elementary flows

###### Direct preparation emissions (`preparation_direct_emissions`)

Record measured or factor-calculated direct releases from fuel combustion, lime preparation or kilns, carbonation, material handling, and waste-water treatment when operated inside the foreground boundary.

- Selected flow: Pollutant-specific elementary flows; select Tiangong elementary flows before publication
- Flow property / unit: Mass / kg
- Amount rule: measured releases or calculation from collected activity data and a cited factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reporting campaign before allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes_and_emissions`
- Sources: us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997

### Process: Evaporation, crystallization, and centrifugal separation (`crystallization_separation`)

#### Inputs

##### Product flows

###### Prepared liquor input (`prepared_liquor_input`)

Record the internal prepared liquor entering evaporation or vacuum-pan crystallization without adding a second upstream burden.

- Selected flow: Route-specific prepared sugar liquor; internal intermediate flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: equal to the reconciled transfer from `liquor_preparation`, adjusted only for documented storage change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per process output campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_outputs`
- Sources: us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997

###### Crystallization utilities and aids (`crystallization_inputs`)

Record net steam, heat, electricity, wash water, seed sugar or slurry, and route-specific processing aids used in evaporation, pan boiling, crystallization, centrifugation, and sugar washing.

- Selected flow: Carrier- and material-specific product flows; select Tiangong flows before publication
- Flow property / unit: Carrier- or material-specific property and unit
- Amount rule: metered, issued, or calculated net use after internal recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming molasses dispatched after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019

##### Waste flows

No waste input is prescribed. Returned off-spec sugar or liquor remains an internal product stream and must be reconciled without double counting.

##### Elementary flows

Record direct water abstraction only when water is taken from the environment rather than supplied as a product flow.

#### Outputs

##### Product flows

###### Unconditioned molasses intermediate (`unconditioned_molasses`)

Record the mother liquor remaining after the declared final crystallization or refinery recovery step and transferred to molasses finishing.

- Selected flow: Molasses `dcc60867-03df-4ea1-be73-6d88987911bd` used as an internal intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass reconciled to tank inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per process output transferred to `molasses_finishing_storage`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019

###### Crystalline sugar and recovered valuable products (`sugar_coproducts`)

Record crystalline sugar and every other valuable output of the common process separately because their quantities and values are required for allocation.

- Selected flow: Grade-specific sugar and recovered product flows; select Tiangong product flows before publication
- Flow property / unit: Mass / kg
- Amount rule: measured net output mass by grade, excluding internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reporting campaign before allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; ghg-protocol-product-standard-2011

##### Waste flows

###### Crystallization waste water and residues (`crystallization_wastes`)

Record non-recycled wash water, cleaning effluent, spent aids, spills, and other non-valuable residues by destination.

- Selected flow: Route-specific waste and waste-water flows; select Tiangong waste flows before publication
- Flow property / unit: Mass / kg or Volume / m3 as measured
- Amount rule: measured generation or transfer quantity net of documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reporting campaign before allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes_and_emissions`
- Sources: us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019

##### Elementary flows

###### Direct crystallization emissions (`crystallization_direct_emissions`)

Record direct releases from evaporators, boilers or other directly operated energy equipment, cooling systems, and waste-water treatment that are not already assigned to another included process.

- Selected flow: Pollutant-specific elementary flows; select Tiangong elementary flows before publication
- Flow property / unit: Mass / kg
- Amount rule: measured releases or calculation from collected activity data and a cited factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reporting campaign before allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes_and_emissions`
- Sources: us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997

### Process: Molasses conditioning, quality release, storage, and dispatch (`molasses_finishing_storage`)

#### Inputs

##### Product flows

###### Unconditioned molasses input (`unconditioned_molasses_input`)

Record the internal molasses transfer from centrifugal separation and reconcile it to finishing tank inventory.

- Selected flow: Molasses `dcc60867-03df-4ea1-be73-6d88987911bd` used as an internal intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: equal to the reconciled output of `crystallization_separation`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_quality_dispatch`
- Sources: eu-jrc-fdm-bref-2019

###### Finishing utilities and dispatch materials (`finishing_inputs`)

Record heating, pumping, cooling, quality-control consumables, and packaging only when used for the declared dispatch state.

- Selected flow: Carrier- and material-specific product flows; select Tiangong flows before publication
- Flow property / unit: Carrier- or material-specific property and unit
- Amount rule: metered or issued quantity attributable to molasses finishing and dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming molasses dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_quality_dispatch`
- Sources: eu-jrc-fdm-bref-2019

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No elementary input is prescribed unless the facility directly abstracts water or another resource for this process.

#### Outputs

##### Product flows

###### Reference molasses at production gate (`reference_molasses`)

This is the conforming, quality-released reference product after storage and dispatch-state preparation.

- Selected flow: Molasses `dcc60867-03df-4ea1-be73-6d88987911bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg net as-received molasses
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference molasses
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Off-spec product, tank bottoms, spills, and cleaning effluent (`finishing_wastes`)

Record off-spec molasses by actual destination, tank residues, losses, spills, and cleaning effluent without subtracting them from measured inputs before mass-balance reconciliation.

- Selected flow: Destination-specific product or waste flows; select Tiangong flows before publication
- Flow property / unit: Mass / kg or Volume / m3 as measured
- Amount rule: measured quantity by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming molasses dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_quality_dispatch`
- Sources: eu-jrc-fdm-bref-2019

##### Elementary flows

###### Direct storage and finishing releases (`finishing_direct_emissions`)

Record actual direct air, water, or soil releases from storage, heating, handling, spills, and on-site treatment; do not create a zero flow when the emission is not measured or applicable.

- Selected flow: Pollutant-specific elementary flows; select Tiangong elementary flows before publication
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculation from collected activity data and a cited factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming molasses dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes_and_emissions`
- Sources: eu-jrc-fdm-bref-2019

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | All multi-output foreground processes | First assign directly measured feedstock, utilities, chemicals, emissions, wastes, and dedicated finishing operations to the output that causes them by process subdivision, sub-metering, or an engineering model. Do not allocate a dedicated molasses operation to sugar or another co-product. | ghg-protocol-product-standard-2011 |
| `allocation_common_burdens` | Burdens remaining after subdivision | Where allocation cannot be avoided, use a quantified physical relationship only when it represents how changes in the co-product outputs cause the shared input use or emissions. If no defensible causal physical relationship exists, use economic allocation based on the values of sugar, molasses, and other valuable co-products when they leave the common process. | ghg-protocol-product-standard-2011 |
| `allocation_economic_period` | Economic allocation | Use net prices at the common-process exit, before downstream processing, averaged over the same representative campaign or reporting period as the inventory. Record currency, price source, averaging period, quantities, values, and every factor; assess sensitivity where price volatility could change the result materially. | ghg-protocol-product-standard-2011 |
| `allocation_waste_status` | Residues and outputs | An output with a documented market or beneficial-use value is a co-product and participates in the selected allocation approach. An output without economic value is a waste; assign its treatment to the process that generates it and do not give it a product allocation share. | ghg-protocol-product-standard-2011 |
| `allocation_completeness` | Allocation calculation | Allocation factors for all valuable outputs of each common process must sum to 1. Apply the selected method consistently to shared inputs, emissions, and removals, prevent internal recycle from becoming a second product output, and disclose any system expansion separately. | ghg-protocol-product-standard-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_receipts` | `liquor_preparation` | received feedstock | weighbridge, receiving, inventory, and quality records | date; supplier/origin; route; gross, tare, and net mass; moisture or solids; lot; opening and closing inventory | calibrated weighbridge or reconciled mass meter with laboratory quality sampling | kg and declared quality unit | each receipt and inventory period | complete reporting campaign, normally at least 12 representative months or one complete seasonal campaign | all facilities in the dataset | receipts plus opening inventory minus closing inventory, by route and lot | calibration, ticket, inventory reconciliation, sampling method, and missing-record log |
| `cp_material_and_water_inputs` | `liquor_preparation` | water and processing inputs | purchase, issue, tank, and meter records | material identity; quantity; concentration; make-up water; recycled water; inventory change; process destination | calibrated meter, invoice, stock issue, or tank reconciliation | kg, m3, and concentration unit | each transaction or continuous meter total | same period as product output | all included operations | net external input by material; internal recycle reported separately | meter calibration, invoice/issue record, concentration certificate, and reconciliation |
| `cp_energy_and_utilities` | `liquor_preparation`; `crystallization_separation` | electricity, fuel, steam, heat, cooling, and compressed air | meter, fuel, boiler, CHP, and utility-balance records | carrier; quantity; unit; meter boundary; generation; import; export; return condensate; allocation meter | calibrated meter or engineering balance from collected fuel and utility records | kWh, MJ, kg steam, kg or m3 fuel as applicable | continuous or each billing/production period | same period as product output | all included utility systems and consuming operations | gross generation and imports minus exports and documented returns; allocate only residual shared use | meter map, calibration, invoices, fuel properties, boiler/CHP balance, and gap treatment |
| `cp_process_outputs` | `liquor_preparation`; `crystallization_separation` | internal transfers, molasses, sugar, and co-products | mass meter, tank, weighbridge, production, and inventory records | product identity; grade; mass or volume; density; temperature; opening/closing inventory; destination; internal return | calibrated mass measurement or volume-density conversion with inventory reconciliation | kg; m3; kg/m3; °C | each batch, transfer, or dispatch | complete reporting campaign | all included production lines and tanks | net output by product and grade; internal recycle excluded from saleable output | calibration, batch/dispatch record, density method, tank reconciliation, and yield review |
| `cp_wastes_and_emissions` | `liquor_preparation`; `crystallization_separation`; `molasses_finishing_storage` | wastes, waste water, and direct releases | waste transfer, effluent meter, stack test, continuous monitor, laboratory, and activity records | flow identity; quantity; concentration; destination; treatment; activity; factor; sampling time | direct measurement where available; otherwise calculation from collected activity and a cited factor | kg, m3, and pollutant-specific unit | each transfer or monitoring period | same period as product output and representative operating conditions | every included direct source and treatment system | measured load or activity multiplied by cited factor; keep treatment transfers and direct releases separate | chain of custody, laboratory method, monitor calibration, factor citation, and completeness check |
| `cp_storage_quality_dispatch` | `molasses_finishing_storage` | molasses quality, inventory, losses, finishing inputs, and dispatch | tank, laboratory, dispatch, packaging, and loss records | lot; route; grade; mass/volume; density and temperature; dry matter/soluble solids; water; sugar basis; packaging; off-spec quantity; destination | representative sampling and validated laboratory method plus calibrated dispatch measurement | kg and declared analytical units | each lot or dispatch; inventory by reporting period | same period as production inventory | all molasses tanks, finishing lines, and dispatch points | conforming net dispatch plus inventory change; off-spec and losses reported separately | sampling plan, analytical method, certificates, calibration, release authorization, and inventory reconciliation |
| `cp_coproduct_values` | `crystallization_separation` | economic allocation inputs | sales and transfer-price records | product/grade; net quantity; common-process exit price; currency; date; discounts; downstream cost adjustment | audited sales ledger or documented arm's-length transfer-price method | currency/kg and kg | each sale or monthly average | same campaign or reporting period as inventory | all valuable outputs of each common process | quantity-weighted average net exit value by product; document missing or exceptional transactions | ledger extract, price basis, currency conversion, averaging method, and sensitivity record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = allocated campaign amount / net kg of conforming as-received molasses dispatched, with opening and closing molasses inventory reconciled | allocated campaign amount; conforming dispatch mass; molasses inventory change | amount per 1 kg reference molasses |  |
| `calc_volume_to_mass` | Volumetric molasses and liquid records | mass = measured volume × representative measured density at the recorded temperature; do not use an undocumented default density | volume; density; measurement temperature; lot/campaign link | kg liquid |  |
| `calc_dry_matter` | Molasses quality disclosure | dry-matter mass fraction = measured dry-matter mass / as-received sample mass; retain °Brix separately unless the method establishes equivalence | sample masses; analytical result; method; basis | declared dry-matter fraction and basis | eu-jrc-fdm-bref-2019 |
| `calc_mass_balance` | Each included process and total facility | reconcile input mass, output products, wastes, direct mass releases, internal recycle, and inventory change on compatible wet and solids bases; define and disclose the facility's review threshold before validation | collected masses; quality/solids results; inventory changes; recycle records | process and facility balance closure with explained residual |  |
| `calc_allocated_inventory` | Shared multi-output process | allocated burden for molasses = subdivided molasses burden + allocation factor × remaining common burden; factor follows the documented physical or economic rule and all factors sum to 1 | subdivided burdens; common burdens; co-product quantities and causal property or exit values | allocated molasses inventory by flow | ghg-protocol-product-standard-2011 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference and inventory flows | Confirm the molasses reference UUID and select route-, carrier-, waste-, and pollutant-specific Tiangong flows before publication; retain unresolved non-reference flow identities as review findings. | Tiangong readback, flow-selection record, and identity review |
| `dq_temporal` | Foreground campaign | Cover one complete and representative campaign; for seasonal beet or cane operations, include the full processing season and the associated storage/dispatch reconciliation. Explain shutdowns, abnormal operation, and substitutions. | dated production, meter, inventory, and dispatch records |
| `dq_mass_quality` | Material balance and product quality | Use calibrated net mass or documented volume-density conversion, align wet and dry bases, and retain representative molasses sampling and analytical methods. External typical values are plausibility context, not replacements for foreground results. | calibration, density/temperature records, laboratory methods, balance review, and source comparison |
| `dq_completeness` | Processes, utilities, and outputs | Demonstrate coverage of every process-map step, valuable co-product, waste, waste-water stream, direct emission source, and utility system; list missing data and quantify their estimated significance without silently setting them to zero. | process-flow diagram, meter map, source register, and completeness checklist |
| `dq_allocation` | Shared sugar-manufacturing burdens | Match allocation quantities, prices or physical factors, and time period to the inventory; retain the unallocated common-process inventory and a reproducible factor calculation. | allocation workbook, ledgers, engineering basis, factor sum check, and sensitivity record |
| `dq_geography_technology` | Dataset representativeness | State country/region, facility configuration, cane/beet/refinery route, purification and crystallization technology, energy system, treatment configuration, product grade, and dispatch state. | facility metadata and process description |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The reference product UUID, Mass flow-property UUID, Units of mass unit-group UUID, and kg unit must resolve; the dataset must declare every required qualifier and use exactly 1 kg net as-received conforming molasses as the quantitative reference. |  |
| `validate_scope_route` | Process coverage | The declared cane, beet, or refinery route must map to all three process-map stages, including route-specific preparation, evaporation/crystallization, centrifugal separation, and molasses finishing; any non-occurring operation must be justified by the actual facility configuration. | us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019 |
| `validate_mass_and_quality` | Foreground material balance | Wet-mass and solids-basis balances must be reproducible from raw records, inventory changes, internal recycle, wastes, and direct releases. Any residual beyond the facility's predeclared review threshold requires correction or a documented explanation; external typical molasses yield or solids values must not be substituted for missing site data. | eu-jrc-fdm-bref-2019 |
| `validate_allocation` | Multi-output processes | Confirm subdivision is applied first; every valuable output is included; waste status is evidenced; common-process factors sum to 1; physical causality or economic exit-value data support the selected factor; and internal recycle, system expansion, or exported utilities are not double counted. | ghg-protocol-product-standard-2011 |
| `validate_utilities_emissions` | Energy, water, wastes, and direct emissions | Reconcile imported, generated, returned, recycled, exported, and consumed utilities; verify all applicable combustion, lime/carbonation, evaporator, material-handling, waste-water, storage, and spill releases are measured or calculated from collected activity data with cited factors. | us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019 |
| `validate_data_lineage` | Every non-fixed amount | Each foreground or calculated row must link to its collection protocol and reporting period. Each external factor or method must link to a source id, and missing values must remain findings rather than implicit zeros. | ghg-protocol-product-standard-2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate production dataset for saleable molasses; may be linked to upstream datasets to form a cradle-to-gate result |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology, identity, representativeness, and allocation review |
| allowed_use | LCA of unblended molasses from the declared route, grade, geography, period, allocation approach, and dispatch state; use as an upstream dataset for feed, fermentation, food, or industrial systems when those qualifiers match |
| excluded_use | Blended syrups, high-test/invert syrup, molassed pulp, compound feed, fermentation products, or another route/grade without representativeness review; comparative claims without applicable review and verification |
| required_metadata | PCR id and version; reference UUIDs; route/feedstock; product designation and grade; dry matter or soluble-solids method/result; water and sugar basis; facility geography/configuration; reporting period; process boundary; dispatch state; allocation method/factors; co-products; upstream datasets; data owner and review status |
| required_quality_disclosure | Primary-data share; meter and sampling coverage; missing-data treatment; mass/solids balance closure; allocation basis and sensitivity; important unresolved flow UUIDs; temporal, geographic, and technological representativeness; external factors; uncertainty and exclusions |
| update_trigger | Change in feedstock route, purification/crystallization technology, energy system, product grade/specification, dry-matter basis, facility boundary, co-product status, allocation method or prices, treatment configuration, dispatch packaging, Tiangong identity, or evidence that materially changes the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `us-epa-ap42-cane-sugar-1997` | `official_guidance` | U.S. EPA, AP-42 Section 9.10.1.1, Sugarcane Processing, June 1997. https://www.epa.gov/sites/default/files/2020-10/documents/c9s10-1a.pdf (retrieved 2026-08-10) | Cane-sugar and refinery process decomposition; identification of bagasse, filter cake, sugar, and molasses outputs; evaporation, crystallization, centrifugation, utility, and potential emission operations |
| `us-epa-ap42-beet-sugar-1997` | `official_guidance` | U.S. EPA, AP-42 Section 9.10.1.2, Sugarbeet Processing, March 1997. https://www.epa.gov/sites/default/files/2020-10/documents/c9s10-1b.pdf (retrieved 2026-08-10) | Beet receipt, cleaning, diffusion, purification, evaporation, crystallization, centrifugation, molasses recovery, co-product, utility, waste, and potential emission operations |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf (retrieved 2026-08-10) | Sugar-sector process and environmental context; refinery molasses recovery; beet molasses formation, indicative yield and solids context; water, energy, co-product, waste-water, storage, and data-quality checks |
| `ghg-protocol-product-standard-2011` | `standard` | WRI and WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, Chapter 9 Allocation. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf (retrieved 2026-08-10) | Multi-output process definition; subdivision/system-expansion hierarchy; physical then economic allocation; waste status; consistency, completeness, disclosure, and allocation validation |
