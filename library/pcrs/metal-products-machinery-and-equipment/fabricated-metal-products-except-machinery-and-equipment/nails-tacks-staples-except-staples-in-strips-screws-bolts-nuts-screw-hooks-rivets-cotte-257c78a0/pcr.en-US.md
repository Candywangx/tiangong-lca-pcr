---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.nails-tacks-staples-except-staples-in-strips-screws-bolts-nuts-screw-hooks-rivets-cotte-257c78a0
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Nails, tacks, staples (except staples in strips), screws, bolts, nuts, screw hooks, rivets, cotters, cotter-pins, washers and similar articles, of iron, steel, copper or aluminium

## 1. Scope and Applicability

This PCR applies to the factory-gate production of individual metal fastening and similar articles within the stated product category: nails, tacks, non-strip staples, screws, bolts, nuts, screw hooks, rivets, cotters, cotter-pins, washers and physically similar articles made of iron, steel, copper or aluminium. A foreground data package represents one declared article family and production route, not an average assembled from unrelated article, metal and finishing variants.

The scope includes incoming metal wire or rod at the manufacturing-site gate, forming or heading, required machining or thread production, conditional heat treatment, cleaning, conditional surface finishing, inspection and the packaging supplied with the product. It excludes staples in strips, tubular or bifurcated rivets, springs, electrical cables, installation or use, maintenance, demolition and end-of-life after sale. Manufacture of primary metal and other purchased inputs is represented by upstream datasets rather than duplicated inside the foreground process.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.nails-tacks-staples-except-staples-in-strips-screws-bolts-nuts-screw-hooks-rivets-cotte-257c78a0 |
| classification_refs | CPC 3.0: 42944 (exact classification context) |
| covered_products | Nails; tacks; staples not supplied in strips; screws; bolts; nuts; screw hooks; rivets; cotters; cotter-pins; washers; and similar fastening articles of iron, steel, copper or aluminium. |
| excluded_products | Staples in strips; tubular or bifurcated rivets; springs; cables; fastening assemblies whose dominant function or material is outside this category; installation and use services. |
| representative_product | A saleable batch of one declared fastener or similar article meeting its specified material, dimensions, mechanical properties and surface condition. |
| production_route | Wire or rod receipt and conditioning; heading, forming, stamping or machining; thread production when applicable; conditional heat treatment; cleaning and conditional finishing; inspection; packaging. |
| market_state | Conforming, inspected and packaged product at the manufacturing-site gate; article type, metal/alloy, grade, dimensions, coating and heat-treatment state declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of a conforming, saleable metal fastener or similar article with declared fastening function and specification. |
| How much | 1 kg net mass of conforming product, excluding separately declared transport packaging. |
| How well | Meets the declared article standard or customer specification for material/alloy, dimensions and tolerances, mechanical property class, thread where applicable, heat-treatment state, surface finish or coating and acceptance test. |
| How long or cycle | One production batch ending at the manufacturing-site gate; no service-life claim is included. |
| reference_flow_link | `reference_fastener_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fasteners, unspecified `0eddfdee-c657-4086-b39d-aa60466b6970` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | article type; iron, steel, copper or aluminium material and alloy/grade; feedstock form; nominal dimensions and mass-per-piece or piece count; thread and tolerance when applicable; mechanical property class; forming and machining route; heat-treatment state; surface treatment or coating and coating mass/thickness; inspection standard and acceptance rate; packaging configuration; manufacturing geography and reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and all mass-normalized inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net dry or as-sold metal-product mass consistently. Exclude corrugated boxes and pallets from the 1 kg product reference mass and record them as separate inputs. |
| `piece_to_mass_conversion` | Production or sales records available only as piece counts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert count to mass with a batch-specific verified average mass per conforming piece; retain the count, sample size, weighing method and uncertainty. |
| `electricity_energy_conversion` | Electricity inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electrical energy and convert kWh to MJ using 1 kWh = 3.6 MJ; do not apply a fuel calorific-value factor to electricity. |
| `gas_volume_reference` | Gaseous natural gas input | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume at the supplier or meter reference conditions and declare temperature, pressure, correction basis and lower-heating-value data used for any energy conversion. |

## 5. System Boundary

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground production boundary | Include all on-site forming, machining or threading, conditional heat treatment, washing or cleaning, conditional surface finishing, inspection and packaging through release of the packaged product at the manufacturing-site gate. | us-epa-metal-fastener-pollution-prevention-1995 |
| `boundary_conditional_routes` | heat treatment and surface finishing | Include heat treatment, pickling, galvanising or other finishing only when performed for the declared product. If outsourced, include the supplier-specific upstream process dataset and the transport embedded in that purchased service or delivered input boundary. | us-epa-metal-fastener-pollution-prevention-1995; ec-jrc-ferrous-metals-processing-bref-2022; ec-jrc-metal-surface-treatment-2022 |
| `boundary_upstream_inputs` | purchased inputs | Represent production and delivery of metal feedstock, energy, water, chemicals and packaging with geographically and technologically appropriate upstream datasets; do not duplicate those upstream processes in the foreground inventory. | — |
| `boundary_exclusions` | downstream and infrastructure | Exclude installation, use, maintenance and product end-of-life. Exclude capital goods and factory infrastructure unless the study goal requires them or a documented screening shows they are material. | — |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declared metal wire or rod, process consumables, energy and packaging delivered at the manufacturing-site gate, with supplier and upstream dataset boundaries identified. |
| starting_condition_role | Upstream products entering the foreground fastener manufacturing system. |
| product_classification_scope | One declared CPC 42944 article family and metal/alloy route per foreground data package. |
| recursive_input_rule | If a purchased fastener within this same category enters assembly, tooling, packaging or rework, record it once as an atomic product input linked to an upstream dataset; do not recursively recreate its manufacturing inventory inside this foreground package. |
| upstream_dataset_requirement | Use supplier-specific data where available; otherwise use a geography-, technology-, material-grade- and product-state-compatible upstream dataset and disclose substitutions. |
| disclosure | Declare article type, alloy and grade, feedstock form, production technology, heat treatment, surface finish, outsourced operations, scrap recovery route, packaging and all upstream dataset substitutions. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming_and_machining` | Stock conditioning, forming, heading, threading and machining | required | Include the operations actually used; non-applicable secondary machining or threading has no row rather than a zero-valued combined route. | foreground production | 1 kg conforming product |
| `heat_treatment` | Heat treatment and quenching | conditional | Include when the declared material grade and mechanical-property specification require thermal treatment. | foreground production | 1 kg heat-treated product |
| `cleaning_and_surface_finishing` | Washing, pickling, polishing and surface finishing | required | Include actual cleaning; include acid pickling and zinc coating rows only when those specific routes are used. | foreground production | 1 kg cleaned or finished product |
| `inspection_and_packaging` | Final inspection and packaging | required | Include release inspection and the actual packaging supplied at the manufacturing-site gate. | foreground production | 1 kg conforming packaged product, packaging reported separately |

### Process: Stock conditioning, forming, heading, threading and machining (`forming_and_machining`)

#### Inputs

##### Product flows

###### Non-alloy steel wire feedstock (`steel_wire_input`)

Record this input only for the declared non-alloy steel wire route; other steel grades or feedstock forms require their own atomic foreground row.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass / kg
- Amount rule: measured net steel wire issued to the batch, including measured returns and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: us-epa-metal-fastener-pollution-prevention-1995

###### Copper wire-rod feedstock (`copper_wire_rod_input`)

Record this input only for a declared copper or copper-alloy wire-rod route.

- Selected flow: Copper wire rod `99715c69-4245-44ff-a438-0e0d68377386`
- Flow property / unit: Mass / kg
- Amount rule: measured net copper wire rod issued to the batch, including measured returns and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: us-epa-metal-fastener-pollution-prevention-1995

###### Aluminium wire feedstock (`aluminium_wire_input`)

Record this input only for a declared aluminium or aluminium-alloy wire route.

- Selected flow: Aluminum wire `89db8507-09bd-45f8-ba96-4e459058412c`
- Flow property / unit: Mass / kg
- Amount rule: measured net aluminium wire issued to the batch, including measured returns and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: us-epa-metal-fastener-pollution-prevention-1995

###### Forming and machining electricity (`forming_electricity`)

Record electricity metered or allocated to wire drawing or sizing, heading, forming, stamping, machining and thread production.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured electricity attributable to the included forming and machining operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`

###### Cutting fluid for secondary machining (`cutting_fluid_input`)

Record fresh cutting fluid make-up crossing the process boundary when drilling, turning, tapping or comparable machining is used.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: purchases plus opening stock minus closing stock and recovered fluid sent off-site, assigned to the declared batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: us-epa-metal-fastener-pollution-prevention-1995

##### Waste flows

No waste flow enters this process under the default virgin or purchased-feedstock boundary. If recovered scrap is remelted on site, define that distinct input and its treatment process explicitly.

##### Elementary flows

No routine elementary input is prescribed for this process. Facility-specific withdrawals that cross the environment boundary must be added as atomic rows.

#### Outputs

##### Product flows

Intermediate formed parts remain inside the foreground system and are not duplicated as technosphere outputs.

##### Waste flows

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Record steel offcuts, chips and rejected steel parts leaving forming and machining for recovery or treatment.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass leaving the process, excluding internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: us-epa-metal-fastener-pollution-prevention-1995

###### Copper scrap (`copper_scrap`)

Record copper or copper-alloy offcuts, chips and rejected parts leaving the process for recovery or treatment.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass leaving the process, excluding internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: us-epa-metal-fastener-pollution-prevention-1995

###### Aluminium scrap (`aluminium_scrap`)

Record aluminium or aluminium-alloy offcuts, chips and rejected parts leaving the process for recovery or treatment.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass leaving the process, excluding internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: us-epa-metal-fastener-pollution-prevention-1995

##### Elementary flows

No default direct elementary output is prescribed. Quantified site emissions from machining or forming must be added individually with their measured compartment.

### Process: Heat treatment and quenching (`heat_treatment`)

#### Inputs

##### Product flows

###### Gaseous natural gas for heat treatment (`heat_treatment_natural_gas`)

Record gaseous natural gas combusted in the heat-treatment oven or draw furnace when that route applies.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume attributable to heat treatment at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: us-epa-metal-fastener-pollution-prevention-1995

###### Heat-treatment electricity (`heat_treatment_electricity`)

Record electricity used by furnaces, controls, circulation, quench handling and stress-relief equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured electricity attributable to heat treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`

###### Quenching-oil make-up (`quenching_oil_input`)

Record fresh quenching oil make-up when an oil-quench route applies; do not record total bath inventory as consumption.

- Selected flow: Quenching Oil `02f62137-e204-46e6-8e72-e88b450fbdc4`
- Flow property / unit: Mass / kg
- Amount rule: fresh make-up plus stock loss minus recovered oil, assigned to the declared batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: us-epa-metal-fastener-pollution-prevention-1995

##### Waste flows

No routine waste input is prescribed for this process.

##### Elementary flows

No routine elementary input is prescribed for this process.

#### Outputs

##### Product flows

Heat-treated parts remain within the foreground system.

##### Waste flows

Spent quenching oil must be added as a distinct atomic waste row when it leaves the system; no exact identity was asserted without a dedicated lookup and composition review.

##### Elementary flows

###### Fossil carbon dioxide from on-site natural-gas combustion (`heat_treatment_fossil_co2`)

Record direct fossil carbon dioxide released from on-site heat-treatment combustion; exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack emission or value calculated from metered fuel, documented carbon content and oxidation factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_treatment_records`

### Process: Washing, pickling, polishing and surface finishing (`cleaning_and_surface_finishing`)

#### Inputs

##### Product flows

###### Process water for parts cleaning and rinsing (`cleaning_process_water`)

Record process water supplied to parts washing, rinsing and finishing baths, net of internally recycled water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or tank-balance water entering the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: us-epa-metal-fastener-pollution-prevention-1995; ec-jrc-metal-surface-treatment-2022

###### Sodium hydroxide for alkaline cleaning (`cleaning_sodium_hydroxide`)

Record sodium hydroxide product mass entering alkaline cleaning only when that chemistry is used; declare concentration and delivered solution state.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured delivered product mass charged or replenished to the cleaning bath
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: ec-jrc-metal-surface-treatment-2022

###### Hydrochloric acid solution for pickling (`pickling_hydrochloric_acid_30pct`)

Record delivered 30% hydrochloric acid solution only when hydrochloric-acid pickling is used; other concentrations require a separately identified product row and declared conversion.

- Selected flow: Hydrochloric acid (30%) `56414d25-a353-4d67-b362-87212ce6011d`
- Flow property / unit: Mass / kg
- Amount rule: measured delivered solution mass charged or replenished to the pickling bath
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: ec-jrc-metal-surface-treatment-2022

###### Special High Grade zinc metal for coating (`coating_shg_zinc_metal`)

Record Special High Grade zinc metal only when that declared zinc grade is consumed in the coating route.

- Selected flow: Special High Grade zinc metal `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- Flow property / unit: Mass / kg
- Amount rule: purchases plus opening stock minus closing stock, recovered dross and unused returns, assigned to the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: ec-jrc-ferrous-metals-processing-bref-2022; ec-jrc-metal-surface-treatment-2022

###### Cleaning and surface-finishing electricity (`finishing_electricity`)

Record electricity used by washers, pumps, bath heating auxiliaries, polishing and on-site coating equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured electricity attributable to cleaning and finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`

##### Waste flows

No waste flow is prescribed as an input. Returned bath material must be represented only when it crosses the process boundary.

##### Elementary flows

No routine elementary input is prescribed; direct water withdrawal from the environment must not be substituted for purchased Process Water.

#### Outputs

##### Product flows

Cleaned or coated parts remain within the foreground system.

##### Waste flows

###### Metal-finishing wastewater (`metal_finishing_wastewater`)

Record the aqueous waste stream leaving washing, rinsing or surface treatment for on-site or off-site treatment, with composition and destination declared.

- Selected flow: Metal-finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass or volume converted with measured density, net of internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: us-epa-metal-fastener-pollution-prevention-1995; ec-jrc-ferrous-metals-processing-bref-2022

###### Oily sludge from parts washing (`oil_sludge_output`)

Record separated oily sludge leaving parts washing or wastewater treatment as one waste stream.

- Selected flow: Oil Sludge `956abaf8-8049-4aad-bf6b-a06713de97a6`
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass leaving the process, with water and oil content disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: us-epa-metal-fastener-pollution-prevention-1995

###### Spent hydrochloric-acid pickling liquor (`spent_hydrochloric_pickling_liquor`)

Record spent hydrochloric-acid liquor leaving the pickling bath, including residual free acid and dissolved metal salts; do not replace it with generic waste acid.

- Selected flow: Spent hydrochloric-acid pickling liquor
- Flow property / unit: Mass / kg
- Amount rule: measured mass removed from the bath minus any internal regeneration return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: ec-jrc-metal-surface-treatment-2022

##### Elementary flows

Direct air and water emissions from the actual finishing route must be added as individual substance-and-compartment rows from monitoring or a documented calculation; no unspecified emissions collection is permitted.

### Process: Final inspection and packaging (`inspection_and_packaging`)

#### Inputs

##### Product flows

###### Corrugated-board boxes (`corrugated_box_input`)

Record the mass of corrugated-board boxes supplied with the released product when this packaging is used.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured new box mass consumed for the declared shipment batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: us-epa-metal-fastener-pollution-prevention-1995

###### Wooden pallets (`wooden_pallet_input`)

Record the effective mass of wooden pallets supplied with the product, adjusted for documented reuse or return when applicable.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: new pallet mass allocated by documented trips or net pallet purchases and stock change for the declared shipment batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`

###### Inspection and packaging electricity (`packaging_electricity`)

Record electricity used by inspection, sorting, counting, labelling and packaging equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured or submeter-allocated electricity attributable to inspection and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

##### Waste flows

No default packaging waste input is prescribed. Returned packaging entering a reuse loop requires its own identified row and accounting rule.

##### Elementary flows

No routine elementary input is prescribed for inspection and packaging.

#### Outputs

##### Product flows

###### Conforming fastener or similar article (`reference_fastener_output`)

Record the net mass of accepted product released at the factory gate; packaging is excluded from this mass.

- Selected flow: Fasteners, unspecified `0eddfdee-c657-4086-b39d-aa60466b6970`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of conforming released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: un-cpc-3-0-structure-2025

##### Waste flows

Rejected finished articles must be routed to the applicable metal-specific scrap row and must not be double-counted here.

##### Elementary flows

No routine elementary output is prescribed for inspection and packaging.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared lines and utilities | Prefer physical subdivision, submeters and batch records. Allocate only the residual shared consumption that cannot be directly assigned. | — |
| `allocation_shared_operations` | residual shared electricity, water and consumables | Allocate residual shared inputs by a documented causal driver such as machine time, treated mass, bath throughput or metered load; mass allocation is allowed only when it reasonably represents the causal relationship. | — |
| `allocation_scrap_outputs` | metal scrap and rejected parts | Record scrap leaving the foreground system as waste with its measured mass and destination. Do not credit avoided primary metal production inside this foreground inventory; any recycling substitution belongs to a separately declared downstream scenario. | — |
| `allocation_no_double_counting` | internal recycle and outsourced treatment | Exclude internally recirculated material from both input consumption and waste output. For outsourced operations, include either the supplier process dataset or its disaggregated inventory, never both. | — |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_forming_records` | `forming_and_machining` | metal feedstocks, electricity, cutting fluid and metal scrap | purchase, inventory, meter, batch and weighbridge records | batch_id; article_id; alloy_grade; feedstock_form; opening_stock; receipts; closing_stock; returned_material; electricity; cutting_fluid_makeup; scrap_mass; conforming_output_mass | reconcile material stores to batch issue/return records; read dedicated meters or allocate documented shared meters; weigh each scrap stream by metal | kg; MJ | each batch with monthly reconciliation | representative continuous 12-month period including product mix | all included forming and machining lines at the declared site | sum net flows by article route and divide by conforming output mass | calibrated scales and meters; stock reconciliation; batch traveller; scrap tickets |
| `cp_heat_treatment_records` | `heat_treatment` | natural gas, electricity, quenching oil and direct fossil CO2 | meter, fuel-quality, bath-maintenance and stack records | batch_id; furnace_id; treated_mass; gas_volume; gas_reference_conditions; electricity; quench_makeup; recovered_oil; fuel_carbon_content; oxidation_factor; measured_co2 | read furnace meters; reconcile quench-oil make-up; use stack measurement or documented fuel-carbon calculation | m3; MJ; kg | each heat-treatment batch with monthly meter reconciliation | representative continuous 12-month period covering furnace loads | all on-site heat-treatment equipment used for the product | assign metered flows to treated batches by measured load or operating time, then normalize to conforming output | meter calibration; fuel certificate; bath log; calculation sheet; stack report when available |
| `cp_finishing_records` | `cleaning_and_surface_finishing` | water, cleaning chemicals, pickling acid, zinc, electricity, wastewater, oil sludge and spent pickling liquor | meter, bath log, purchase, inventory, laboratory and waste-transfer records | batch_id; treated_mass; water_input; recycle_water; chemical_product; concentration; bath_charge; bath_makeup; zinc_stock; electricity; wastewater_mass_or_volume; density; oil_sludge_mass; sludge_water_content; spent_liquor_mass; free_acid; dissolved_metals; destination | meter water and electricity; reconcile bath additions and zinc inventory; weigh wastes or convert measured volume with measured density; retain analytical composition | kg; MJ | each bath charge and product batch with monthly reconciliation | representative continuous 12-month period covering finishing routes | all on-site and contracted finishing routes attributed to the product | subtract internal recycle and stock returns; normalize net inputs and outputs to conforming product mass | calibrated meters and scales; bath analyses; chemical certificates; waste manifests; supplier finishing data |
| `cp_packaging_records` | `inspection_and_packaging` | accepted product, corrugated boxes, wooden pallets and electricity | release, scale, packaging bill, pallet-loop and meter records | batch_id; accepted_piece_count; sampled_piece_mass; accepted_product_mass; rejected_mass; box_mass; box_count; pallet_mass; pallet_count; pallet_trips; returned_pallets; electricity | weigh released product and packaging; verify count-to-mass conversion; reconcile pallet reuse; read or allocate packaging meter | kg; MJ | each released shipment batch with monthly reconciliation | representative continuous 12-month period covering package formats | all inspection and packaging operations at the declared site | divide net packaging consumption and electricity by accepted product mass; exclude rejected product and packaging mass from reference output | calibrated scales; acceptance records; packaging specifications; pallet-return records; meter allocation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_to_reference_mass` | all inventory rows | normalized amount = net flow assigned to the declared product / net conforming product mass; the denominator excludes transport packaging | net batch or reporting-period flow; conforming product mass | amount per 1 kg reference product | — |
| `calc_piece_count_to_mass` | piece-count records | product mass = accepted piece count × verified batch-average mass per piece; use direct batch weighing when available | accepted count; sampled or directly measured mass per piece | conforming product mass | — |
| `calc_direct_fossil_co2` | `heat_treatment_fossil_co2` | use measured direct stack CO2; otherwise calculate from metered fuel quantity × documented fuel carbon content × oxidation factor × 44/12, with consistent volume-to-mass conversion | gas volume and reference conditions or gas mass; carbon content; oxidation factor | kg fossil CO2 | — |
| `calc_reusable_pallet` | `wooden_pallet_input` | effective pallet input = new pallet mass / documented lifetime trips for closed reuse loops; otherwise use net pallet purchases plus opening stock minus closing stock and verified returns | new pallet mass; trips; purchases; stocks; returns | kg wooden pallet input | — |
| `calc_mass_balance_check` | metal feedstocks, product and metal scrap | compare metal-bearing inputs with conforming output, metal scrap, inventory change and measured treatment losses for each declared metal; investigate unexplained imbalance rather than forcing closure | metal input; product output; metal-specific scrap; stock change; measured losses | disclosed mass-balance residual | — |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Identify article type, alloy/grade, dimensions, thread, mechanical class, heat treatment, coating and applicable acceptance standard for every represented product family. | product specification; certificate of conformity; batch traveller |
| `dq_temporal_coverage` | foreground records | Use a representative continuous 12-month period or justify a shorter period that captures product mix, furnace loads, bath cycles, maintenance and seasonal effects. | dated meter, production, inventory and waste records |
| `dq_mass_completeness` | metal inputs and outputs | Reconcile each metal route to conforming product, metal-specific scrap, stock change and measured loss; disclose the residual and corrective investigation. | signed mass-balance worksheet; scale calibration; scrap tickets |
| `dq_route_separation` | conditional heat treatment and finishing | Do not average absent and present operations without reporting route shares and allocation drivers. Supplier finishing data must match the declared coating and geography. | route-specific batch records; supplier dataset and specification |
| `dq_measurement_traceability` | all collected rows | Retain meter or scale identifier, calibration status, raw unit, conversion, allocation driver and responsible record owner. | calibration certificates; raw exports; calculation workbook |
| `dq_uuid_qualifiers` | UUID-bearing flows | Confirm that foreground product state, concentration, grade, geography and technology remain compatible with the selected Tiangong identity; UUID identity does not replace these qualifiers. | supplier certificate; flow direct-read audit; process note |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | product and reference flow | Fail validation if the article is outside the covered list, the material is not iron, steel, copper or aluminium, required qualifiers are missing, or the reference output is not exactly 1 kg net conforming product. | un-cpc-3-0-structure-2025 |
| `validate_inventory_atomicity` | process inventory | Each inventory row must identify one product, waste or elementary exchange. Reject umbrella utilities, combined fuels, combined packaging, combined wastes or unspecified emissions. | — |
| `validate_process_applicability` | process map | Required processes must have foreground records. Conditional heat-treatment, pickling and zinc-coating rows must be present only when the declared route applies; absent routes require an explicit not-applicable statement outside amount totals. | us-epa-metal-fastener-pollution-prevention-1995; ec-jrc-metal-surface-treatment-2022 |
| `validate_mass_and_units` | measurements and calculations | Check kg reference mass, kWh-to-MJ conversion, gas reference conditions, count-to-mass evidence, package-mass exclusion and metal-specific mass-balance residuals. | — |
| `validate_waste_and_recycling` | scrap, wastewater, sludge and spent liquor | Require measured mass, composition where material, destination and internal-recycle exclusion. Do not apply avoided-burden credits in the foreground inventory. | us-epa-metal-fastener-pollution-prevention-1995; ec-jrc-metal-surface-treatment-2022 |
| `validate_source_and_dataset_fit` | evidence and upstream datasets | Confirm source identifiers resolve, external evidence is used only for the supported rule, and every upstream dataset is compatible in geography, technology, material grade, product state and delivery boundary. | — |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for one declared metal fastener or similar article route. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product carbon footprints, LCA process datasets and lifecycle models requiring a factory-gate inventory for a declared CPC 42944 article with compatible material, process and finishing qualifiers. |
| excluded_use | Undeclared averages across metals or article types; staples in strips; springs; tubular or bifurcated rivets; installation, use or end-of-life claims; comparison of products with incompatible specifications or system boundaries. |
| required_metadata | PCR id and version; article type; material/alloy and grade; dimensions and mass per piece; mechanical class; forming and machining route; heat treatment; coating/finish; site and geography; reporting period; allocation; scrap and waste destinations; packaging; upstream dataset identifiers and substitutions. |
| required_quality_disclosure | Completeness by process and flow; meter and scale coverage; count-to-mass method; mass-balance residual; allocation shares; route shares; bath and waste composition; supplier-data coverage; temporal representativeness; unresolved UUID and range-evidence needs. |
| update_trigger | Material change in article mix, alloy, feedstock form, forming technology, furnace or fuel, coating route, wastewater treatment, packaging, allocation method, site geography, upstream datasets, or an updated representative reporting period. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division. CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05). | Official category identity and covered product wording. |
| `us-epa-metal-fastener-pollution-prevention-1995` | official_guidance | U.S. Environmental Protection Agency. *Pollution Prevention Assessment for a Manufacturer of Metal Fasteners*. EPA/600/S-95/016, August 1995. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=30003VJO.TXT (retrieved 2026-09-05). | Fastener feedstocks, process decomposition, cleaning, heat treatment, finishing, packaging and named waste streams. |
| `ec-jrc-ferrous-metals-processing-bref-2022` | official_guidance | European Commission Joint Research Centre. *Best Available Techniques (BAT) Reference Document for the Ferrous Metals Processing Industry*. JRC131649, EUR 31321 EN, DOI 10.2760/196475, 2022. https://publications.jrc.ec.europa.eu/repository/handle/JRC131649 (retrieved 2026-09-05). | Conditional galvanising, chemical/electrolytic surface treatment and associated wastewater-treatment boundary. |
| `ec-jrc-metal-surface-treatment-2022` | official_guidance | Huygens, D. and Saveyn, H.G.M. *Technical proposals for by-products and high purity materials as component materials for EU Fertilising Products*. JRC128459, EUR 31035 EN, DOI 10.2760/185544, 2022, section 19.2.8. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC128459/JRC128459_01.pdf (retrieved 2026-09-05). | Metal cleaning, hydroxide cleaning, hydrochloric-acid pickling, spent pickling liquor and zinc galvanising process decomposition. |
| `china-state-council-fastener-tariff-terms-2010` | official_guidance | State Council of the People's Republic of China, official tariff terminology table, 2010. https://www.gov.cn/gzdt/att/att/site1/20100302/001e3741a2cc0cf6c6d301.pdf (retrieved 2026-09-05). | Professional Chinese terminology for screws, bolts, nuts, screw hooks, rivets, pins, cotter-pins and washers. |
