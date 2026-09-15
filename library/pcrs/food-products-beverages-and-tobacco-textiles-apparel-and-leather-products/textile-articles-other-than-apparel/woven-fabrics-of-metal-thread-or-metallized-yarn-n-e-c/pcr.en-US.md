---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.woven-fabrics-of-metal-thread-or-metallized-yarn-n-e-c
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Woven fabrics of metal thread or metallized yarn n.e.c.

## 1. Scope and Applicability

This PCR applies to finished woven fabric whose defining construction uses metal thread, metallized yarn, or both and that falls within CPC 3.0 subclass 27994. It supports gate-to-gate foreground data production from accepted yarn at the weaving site through inspection and saleable roll packaging. Optional preparation and wet-finishing operations are included only when performed within the reporting organization.

The PCR excludes metallized yarn sold as yarn (CPC 27993), ordinary woven fabrics classified by their non-metallic fibre, nonwovens, knitted fabrics, coated or impregnated fabrics classified elsewhere, made-up articles, and apparel. Upstream manufacture of metal thread, metallized yarn, chemicals, energy, and packaging is represented by linked supplier or background datasets rather than recreated inside the foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.woven-fabrics-of-metal-thread-or-metallized-yarn-n-e-c |
| classification_refs | CPC 3.0:27994 (exact) |
| covered_products | Woven fabrics made with metal thread or metallized yarn, including mixed constructions where that yarn gives the fabric its defining metallic character, n.e.c. |
| excluded_products | Metallized yarn sold without weaving; ordinary non-metallic woven fabrics; knitted or nonwoven fabric; coated or impregnated fabric classified elsewhere; made-up articles and apparel |
| representative_product | Inspected finished woven fabric containing metal thread or metallized yarn, supplied as a roll at the factory gate |
| production_route | Yarn receipt and preparation; optional sizing; weaving; optional pretreatment or finishing; inspection; roll making and packaging |
| market_state | Finished manufactured fabric roll at plant gate, with composition and finish declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide woven fabric whose defining construction uses metal thread or metallized yarn |
| How much | 1 kg net mass of saleable finished fabric |
| How well | Meets the declared weave, fibre and metal composition, mass per area, width, finish, and quality grade |
| How long or cycle | One production batch through release at the factory gate; no use-phase service life is asserted |
| reference_flow_link | Net saleable mass after final inspection and before transport beyond the plant gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Woven fabrics of metal thread or metallized yarn n.e.c. `fc1c034a-6087-48d4-93ec-a57b94919068` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | metal-thread or metallized-yarn type and mass fraction; other fibre composition; weave construction; finished width; mass per unit area; finish or treatment; colour; quality grade; production geography; reporting period; packaging state |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, reference-flow comments, the product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net saleable fabric mass after final inspection; exclude core, wrap, pallet, and other packaging. |
| `composition_mass_balance` | batch composition | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile metal thread, metallized yarn, other yarn, retained finishing agents, products, rejects, and wastes on one dry-mass convention; disclose any moisture correction. |
| `area_conversion` | fabric area | Mass and area | kg and m2 | When records are area-based, retain measured length, finished width, and mass per unit area and document the conversion to kg reference product. |
| `energy_conversion` | purchased energy | Energy | kWh or MJ | Retain metered units and conversion factors; do not combine electricity, compressed air, heat, and fuels into one exchange. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | foreground_system_boundary | Include yarn receipt and preparation, optional sizing, weaving, optional on-site pretreatment or finishing, inspection, roll making, packaging, on-site waste handling, and on-site wastewater handling up to the transfer point. | `jrc-textiles-bref-2023`; `ec-pef-method-2021` |
| `boundary_purchased_inputs` | purchased_product_inputs | Represent metal thread, metallized yarn, other yarn, chemicals, energy, water, and packaging with separate upstream datasets matched to the declared supply and geography. | `ec-pef-method-2021` |
| `boundary_direct_releases` | elementary_exchanges | Record direct releases to air and water only when measured or calculated from site records using a documented method; do not infer releases from purchased-input quantities. | `jrc-textiles-bref-2023`; `ec-pef-method-2021` |
| `boundary_optional_operations` | route_specific_operations | Mark sizing, wet pretreatment, dyeing, printing, coating, and finishing not applicable when absent; when present, disclose the exact operation and record each chemical, utility, waste, wastewater, and measured direct release separately. | `jrc-textiles-bref-2023` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Metal thread, metallized yarn, and any other yarn accepted at the reporting plant with supplier identity, composition, moisture convention, and mass recorded |
| starting_condition_role | Purchased product inputs linked to upstream datasets; their production is outside the foreground boundary |
| product_classification_scope | CPC 3.0 subclass 27994 only |
| recursive_input_rule | A purchased fabric already meeting the same CPC 27994 product boundary remains a separately quantified product input linked to an upstream dataset; its manufacture is not re-expanded in the receiving process |
| upstream_dataset_requirement | Use supplier-specific datasets where available; otherwise select documented background datasets matching material construction, metal or coating, geography, technology, and reference mass |
| disclosure | Declare whether metal enters as metal thread, metal-coated substrate, metallized film yarn, or another construction; disclose other fibres, preparation, wet processing, finish, rejects, and packaging |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation_weaving` | Yarn preparation and weaving | required | Always include for fabric manufactured at the reporting site | Convert declared yarn inputs into unfinished woven fabric | Per measured unfinished fabric output and normalized to 1 kg saleable final fabric |
| `wet_finishing` | Wet pretreatment and finishing | conditional | Include only when washing, desizing, scouring, bleaching, dyeing, printing, coating, or other wet finishing occurs on site | Produce the declared finished fabric state | Per measured finished fabric output and normalized to 1 kg saleable final fabric |
| `inspection_packaging` | Inspection, roll making, and packaging | required | Always include through factory-gate release | Establish saleable output and packaging state | Per 1 kg net saleable finished fabric |

### Process: Yarn preparation and weaving (`yarn_preparation_weaving`)

#### Inputs

##### Product flows

###### Metal thread input (`metal_thread_input`)

Record metal thread when it is physically fed to the preparation or weaving route.

- Selected flow: Metal thread
- Flow property / unit: Mass / kg
- Amount rule: measured accepted dry mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured unfinished fabric output and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_batch_records`
- Sources: `un-cpc-3-0-27994-2025`

###### Metallized yarn input (`metallized_yarn_input`)

Record metallized yarn separately from solid metal thread and other yarn.

- Selected flow: Metallized yarn
- Flow property / unit: Mass / kg
- Amount rule: measured accepted dry mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured unfinished fabric output and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_batch_records`
- Sources: `un-cpc-3-0-27994-2025`

###### Modified starch sizing agent (`modified_starch_size_input`)

Record this exchange only when modified starch size is applied on site; other sizing substances require their own atomic rows.

- Selected flow: Modified starch sizing agent
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented return, when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured sized warp output and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_batch_records`
- Sources: `jrc-textiles-bref-2023`

###### Weaving electricity (`weaving_electricity_input`)

Record metered electricity used by preparation, sizing, weaving, and local extraction assigned to the batch.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered or submetered consumption; otherwise documented allocation from the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured unfinished fabric output and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_batch_records`
- Sources: `ec-pef-method-2021`

###### Weaving compressed air (`weaving_compressed_air_input`)

Record compressed air when used by the selected loom or preparation equipment; do not merge it with electricity.

- Selected flow: Compressed air
- Flow property / unit: Volume / m3
- Amount rule: metered delivered volume at declared pressure, or documented engineering allocation from compressor records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured unfinished fabric output and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_batch_records`
- Sources: `ec-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unfinished woven fabric (`woven_grey_fabric_output`)

Record the inspected mass transferred from weaving to finishing or final inspection.

- Selected flow: Woven fabric of metal thread or metallized yarn, unfinished
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass transferred out of weaving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per weaving batch and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_batch_records`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

###### Loom waste (`loom_waste_output`)

Record yarn ends, loom waste, and weaving rejects with the same declared material composition; segregated materially different wastes require separate rows.

- Selected flow: Loom waste containing metal thread or metallized yarn
- Flow property / unit: Mass / kg
- Amount rule: measured mass by waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per weaving batch and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_batch_records`
- Sources: `ec-pef-method-2021`

##### Elementary flows

###### Weaving particulate release (`weaving_particulate_output`)

Record a particulate release only when the size fraction and receiving air compartment are identified by measurement or a documented calculation.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated site release assigned to the batch; omit when no identified elementary exchange exists
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per weaving batch and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_batch_records`
- Sources: `jrc-textiles-bref-2023`

### Process: Wet pretreatment and finishing (`wet_finishing`)

#### Inputs

##### Product flows

###### Unfinished fabric input (`unfinished_fabric_input`)

Record the unfinished fabric entering an on-site wet route.

- Selected flow: Woven fabric of metal thread or metallized yarn, unfinished
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass accepted by the finishing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured finished fabric output and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch_records`
- Sources: `jrc-textiles-bref-2023`

###### Finishing water (`finishing_water_input`)

Record process water entering washing, desizing, scouring, bleaching, dyeing, printing, or finishing.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered or batch-recorded water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured finished fabric output and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch_records`
- Sources: `jrc-textiles-bref-2023`

###### Sodium hydroxide input (`sodium_hydroxide_input`)

Record sodium hydroxide only when used in the declared finishing recipe; record other chemicals in separate atomic rows.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: measured active-substance mass charged to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured finished fabric output and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch_records`
- Sources: `jrc-textiles-bref-2023`

###### Hydrogen peroxide input (`hydrogen_peroxide_input`)

Record hydrogen peroxide only when used in the declared finishing recipe.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: measured active-substance mass charged to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured finished fabric output and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch_records`
- Sources: `jrc-textiles-bref-2023`

###### Finishing electricity (`finishing_electricity_input`)

Record metered electricity assigned to the wet-finishing batch.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered or submetered consumption; otherwise documented allocation from the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured finished fabric output and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch_records`
- Sources: `ec-pef-method-2021`

###### Finishing natural gas (`finishing_natural_gas_input`)

Record natural gas only when directly consumed for the declared finishing route; purchased steam or other fuels require separate rows.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered fuel energy on a declared calorific-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured finished fabric output and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch_records`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished fabric (`finished_fabric_output`)

Record finished fabric transferred to final inspection.

- Selected flow: Woven fabric of metal thread or metallized yarn, finished
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass released from finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing batch and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch_records`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

###### Finishing wastewater (`finishing_wastewater_output`)

Record wastewater transferred to on-site treatment, external treatment, or direct discharge as the applicable waste flow; identified waterborne elementary releases are separate exchanges.

- Selected flow: Textile finishing wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered or batch-balanced wastewater volume by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per finishing batch and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch_records`
- Sources: `jrc-textiles-bref-2023`

##### Elementary flows

### Process: Inspection, roll making, and packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Finished fabric for inspection (`finished_fabric_pack_input`)

Record finished or unfinished-as-sold fabric entering final inspection.

- Selected flow: Woven fabric of metal thread or metallized yarn, finished
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per final inspection batch and normalized to 1 kg saleable final fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_packaging_records`
- Sources: `ec-pef-method-2021`

###### Inspection electricity (`inspection_electricity_input`)

Record electricity for inspection, roll making, and packaging assigned to released product.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered consumption or documented allocation from the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable finished fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_packaging_records`
- Sources: `ec-pef-method-2021`

###### Paperboard core (`paperboard_core_input`)

Record the paperboard core separately from wrap, pallet, and other packaging components.

- Selected flow: Paperboard core
- Flow property / unit: Mass / kg
- Amount rule: measured or purchase-record mass assigned to released rolls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_packaging_records`
- Sources: `ec-pef-method-2021`

###### Polyethylene packaging film (`polyethylene_film_input`)

Record polyethylene protective film separately from every other packaging component.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured or purchase-record mass assigned to released rolls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_packaging_records`
- Sources: `ec-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable woven fabric (`reference_product_output`)

Record the net saleable product without packaging; this is the reference exchange.

- Selected flow: Woven fabrics of metal thread or metallized yarn n.e.c. `fc1c034a-6087-48d4-93ec-a57b94919068`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net saleable mass normalized to 1 kg reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_packaging_records`
- Sources: `un-cpc-3-0-27994-2025`

##### Waste flows

###### Fabric offcuts and final rejects (`fabric_offcuts_output`)

Record offcuts and final rejects that share the declared fabric composition; other compositions require separate rows.

- Selected flow: Offcuts of metal-thread or metallized-yarn woven fabric
- Flow property / unit: Mass / kg
- Amount rule: measured mass by waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per final inspection batch and normalized to 1 kg saleable final fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_packaging_records`
- Sources: `ec-pef-method-2021`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | shared foreground operations | First subdivide meters, batches, production lines, and waste records so that fabric-specific inputs and outputs are directly assigned. | `ec-pef-method-2021` |
| `allocation_physical_when_unavoidable` | inseparable multi-product operations | When subdivision is not practicable, use a documented physical relation that reflects the causal use of the shared operation, such as machine time combined with measured power, treated mass, or wastewater volume. | `ec-pef-method-2021` |
| `allocation_no_unjustified_credit` | wastes and recoverable material | Record each waste destination and any revenue or recovered-product status; do not apply an avoided-burden credit inside the foreground inventory without the declared downstream method and consistent system model. | `ec-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_weaving_batch_records` | `yarn_preparation_weaving` | all yarn, sizing, electricity, compressed-air, product, waste, and measured release rows | batch record; meter; issue-return log; scale ticket; waste ticket; test report | batch_id; product_code; yarn identities; composition; opening and closing meter readings; issued and returned material; output mass; waste mass and destination; release method | reconcile timestamped production, meter, stock, scale, and waste records to the batch | native recorded unit and kg-normalized result | each batch; meters at least monthly | representative continuous 12 months or all batches in the declared shorter period | all equipment and utilities serving the declared foreground route | subtract documented returns; allocate shared meters only by disclosed causal driver; normalize by net saleable mass | meter calibration; scale calibration; purchase and stock reconciliation; signed batch release; waste transfer record |
| `cp_finishing_batch_records` | `wet_finishing` | unfinished fabric, water, each chemical, electricity, fuel, finished fabric, wastewater, and measured release rows | recipe; batch record; meter; laboratory report; wastewater log | batch_id; fabric mass; chemical identity and concentration; charged mass; water; energy; fuel; output mass; wastewater volume; destination; measured pollutant result | reconcile recipe, meter, laboratory, and transfer records to each route and batch | native recorded unit and kg-normalized result | each batch; continuous or daily utilities | representative continuous 12 months or all batches in the declared shorter period | all on-site wet operations and treatment serving the declared product | convert solution charges to active substance; retain water and wastewater separately; normalize by released product mass | calibrated meters; recipe authorization; laboratory method; treatment and discharge records |
| `cp_release_packaging_records` | `inspection_packaging` | inspected fabric, electricity, each packaging component, reference product, and reject rows | inspection record; roll ticket; scale record; packaging issue record; meter | roll_id; batch_id; net fabric mass; width; length; mass per area; quality grade; packaging component and mass; reject mass and destination | reconcile roll release, calibrated weighing, packaging issue, and rejection records | kg; m; m2; g/m2; kWh | each released roll and batch | all releases in the reporting period | final inspection, roll making, and packaging at the reporting site | sum released net mass separately from packaging; normalize all assigned exchanges to 1 kg net released fabric | calibration records; signed quality release; packaging stock reconciliation; reject disposition |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | reference product | Sum measured released roll gross mass minus separately measured core and packaging mass; prefer direct net fabric weighing when available. | roll mass; core mass; packaging mass | kg net saleable fabric | `ec-pef-method-2021` |
| `calc_area_to_mass` | area-based fabric records | Fabric mass equals measured length multiplied by finished width and measured mass per unit area; reconcile with scale mass and retain the discrepancy. | length; width; mass per unit area; scale mass | kg fabric and reconciliation difference | `ec-pef-method-2021` |
| `calc_active_chemical` | chemical solution inputs | Active-substance mass equals charged solution mass multiplied by the documented active concentration. | solution mass; active concentration | kg active substance | `jrc-textiles-bref-2023` |
| `calc_batch_normalization` | all foreground exchanges | Divide each batch-assigned exchange by net saleable fabric mass from that batch; exclude nonconforming output from the denominator and record it as waste. | assigned exchange; net saleable mass | exchange per 1 kg reference product | `ec-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and material identity | Preserve supplier and lot identity, metal or coating identity, yarn construction, other-fibre composition, weave, width, mass per area, and finish. | supplier specification; incoming inspection; bill of materials; laboratory or quality report |
| `dq_temporal` | foreground activity data | Prefer a continuous 12-month period covering normal variability; disclose shorter periods, shutdowns, trials, abnormal batches, and seasonality. | dated meter exports; production calendar; batch register |
| `dq_completeness` | mass, energy, water, chemicals, wastes, and releases | Reconcile all declared processes and explicitly mark every conditional process or atomic exchange present, absent, or outside the site boundary. | mass balance; utility reconciliation; chemical inventory; waste and wastewater register |
| `dq_technology_geography` | linked upstream datasets | Match yarn construction, metal or metallization route, electricity geography, water supply, fuel, chemicals, and packaging technology; document every proxy. | supplier dataset; dataset metadata; proxy justification |
| `dq_measurement` | meters and calculations | Retain raw readings, units, calibration status, allocation driver, conversion factor, and calculation version. | calibration certificate; meter log; calculation workbook or machine-readable record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | Confirm the selected reference flow UUID, Product flow type, exact CPC 27994 classification, Mass property UUID, kg unit, and all required product qualifiers. | `un-cpc-3-0-27994-2025` |
| `validate_atomic_inventory` | process inventory | Reject combined or selector flows; every electricity supply, compressed-air supply, fuel, chemical, packaging component, waste, wastewater, and elementary release shall be a separate exchange with route applicability stated. | `ec-pef-method-2021`; `jrc-textiles-bref-2023` |
| `validate_mass_balance` | foreground batches | Reconcile input materials with saleable product, intermediate transfers, retained material, waste, and measured releases on the declared moisture basis; investigate and disclose unexplained differences. | `ec-pef-method-2021` |
| `validate_route_completeness` | optional operations | Confirm that sizing and each wet-finishing operation are either represented with their atomic inputs and outputs or explicitly marked not applicable. | `jrc-textiles-bref-2023` |
| `validate_evidence` | all reported values | Reject AI-generated amounts and unsupported default ranges; values shall come from foreground records or documented calculations, and every proxy or allocation shall be disclosed. | `ec-pef-method-2021` |
| `validate_bilingual_alignment` | PCR application | Confirm that English and Chinese machine identifiers, row order, UUIDs, controlled tokens, and normative rule ids are identical. | `ec-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for woven fabrics of metal thread or metallized yarn n.e.c. at the factory gate |
| downstream_use | `secondary_dataset`; `background_dataset`; input to `process` and `lifecyclemodel` projections |
| allowed_use | Studies whose product scope, composition, technology, geography, period, finish, allocation, and packaging state match the dataset or are transparently adapted |
| excluded_use | Metallized yarn production alone; ordinary non-metallic fabric; knitted or nonwoven fabric; apparel; undisclosed proxy use; comparative claims without method-consistent review |
| required_metadata | PCR id and version; CPC 27994; reference flow UUID; geography; period; metal or metallized-yarn construction and fraction; other fibres; weave; width; mass per area; finish; route; allocation; waste and wastewater destinations; packaging state; source and dataset versions |
| required_quality_disclosure | Primary-data coverage; meter and scale status; mass-balance result; missing flows; UUID gaps; proxy datasets; allocation shares; exclusions; uncertainty and limitations |
| update_trigger | Material change in product construction, loom or finishing technology, energy or water supply, chemical recipe, waste treatment, allocation, site geography, data period, source method, or Tiangong identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-27994-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 27994, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Exact product-category scope and distinction from adjacent CPC subclasses |
| `jrc-textiles-bref-2023` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, EUR 31316 EN, 2023. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | Textile fibre and yarn preparation, sizing, pretreatment, dyeing, printing, finishing, water and energy use, chemicals, wastewater, and direct-release data needs |
| `ec-pef-method-2021` | Standard (`standard`) | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on Environmental Footprint methods, Annex I Product Environmental Footprint method. ELI: http://data.europa.eu/eli/reco/2021/2279/oj | Life-cycle inventory completeness, company-specific data, allocation hierarchy, data quality, documentation, and verification |
