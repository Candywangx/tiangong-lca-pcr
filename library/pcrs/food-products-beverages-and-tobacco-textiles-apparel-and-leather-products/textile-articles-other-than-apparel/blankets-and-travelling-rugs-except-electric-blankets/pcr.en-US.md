---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.blankets-and-travelling-rugs-except-electric-blankets
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Blankets and travelling rugs (except electric blankets)

## 1. Scope and Applicability

This PCR applies to the gate-to-gate manufacture of non-electric blankets and travelling rugs classified to CPC 3.0 subclass 27110. It covers products made from woven, knitted, non-woven, pile, fleece, quilted, or felted textile constructions when they are supplied as blankets or travelling rugs for warmth or covering.

Electric blankets and any product incorporating an electrical device or electrical circuit are excluded. Textile floor coverings, sleeping bags, bed linen, quilts whose primary classification is not CPC 27110, and upstream fibre, yarn, and fabric manufacture are outside this category unless explicitly added to the declared study boundary. The producing data package must identify fibre composition, construction, finishing route, dimensions, mass, and market state so a consumer can judge representativeness. `un-stats-cpc-3-2025` supports the classification boundary; `eu-ecolabel-textiles-2014` supports the exclusion of electrical textile products and the disclosure of fibre and component composition.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.blankets-and-travelling-rugs-except-electric-blankets |
| classification_refs | CPC 3.0: 27110 — Blankets and travelling rugs (except electric blankets) |
| covered_products | non-electric blankets and travelling rugs made from textile materials, including pile, fleece, woven, knitted, non-woven, felted, or quilted constructions |
| excluded_products | electric blankets; textile floor coverings; sleeping bags; bed linen; upstream fibres, yarns, and fabrics sold as intermediates; products classified outside CPC 27110 |
| representative_product | one finished, saleable non-electric blanket at the factory gate |
| production_route | receipt and conditioning of ready-to-make textile material; cutting and make-up; conditional wet finishing and drying; inspection, folding, labelling, and packaging |
| market_state | finished, dry, quality-released, packaged or otherwise saleable at the manufacturing gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | provide a finished non-electric textile blanket or travelling rug for warmth or covering |
| How much | 1 kg net mass of finished saleable product |
| How well | conforms to the declared fibre composition, construction, dimensions, mass per item, finishing route, and applicable fitness-for-use specification |
| How long or cycle | factory-gate product; service life is not asserted by this mass-based production reference |
| reference_flow_link | the reference amount is the dry net mass of the quality-released product before optional transport packaging |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Blanket `b7478885-d1a2-4ced-9240-4737fc0b8020` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fibre composition by mass; textile construction; finishing route and applied functional finishes; finished dimensions; mass per item; moisture-conditioning basis; packaging state; production geography and reference year |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use dry net mass of quality-released blankets; exclude removable transport packaging from the reference product mass and report its mass in separate packaging exchanges. |
| `item_to_mass` | records kept as blanket count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert count to mass with measured net mass by product SKU and production lot; retain count, sampled item masses, sampling plan, and conversion calculation. |
| `moisture_basis` | received textile and finished product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record the conditioning method and moisture basis; do not mix wet-process mass with conditioned finished mass without a documented conversion. |
| `energy_preservation` | electricity and thermal energy | declared energy property | kWh or MJ | Preserve the meter unit and conversion factor; do not represent electricity, steam, and natural gas as one combined exchange. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | ready-to-make blanket body textile and auxiliary materials received at the blanket manufacturing site |
| starting_condition_role | foreground gate-to-gate starting condition; upstream fibre, yarn, fabric formation, dyeing, and finishing burdens remain in linked supplier datasets unless performed on site |
| product_classification_scope | CPC 3.0 subclass 27110 only; electrical products and other made-up textile categories are excluded |
| recursive_input_rule | a purchased blanket or travelling rug already in CPC 27110 is an upstream product input and must use a separately declared supplier dataset; it must not be re-created recursively inside this foreground process |
| upstream_dataset_requirement | link each received textile, thread, chemical, fuel, water, electricity, and packaging material to a representative upstream dataset with geography, technology, and reference year disclosed |
| disclosure | declare which cutting, sewing, brushing/raising, washing, finishing, drying, inspection, and packaging operations are on site or outsourced, and identify any omitted operation with justification |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | foreground blanket manufacture | Include receipt/conditioning, cutting and make-up, inspection, reference-product output, and packaging exchanges; include washing, dyeing, printing, finishing, drying, direct heating, and wastewater treatment whenever performed for the declared product. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_input_output_inventory` | each included process | Maintain an operation-specific inventory of material, chemical, water, energy, product, waste, wastewater, and direct elementary exchanges; do not hide wet processing or on-site combustion in a generic utility total. | `eu-textiles-bat-2022`; `ifc-textile-ehs-2007` |
| `boundary_outsourcing` | outsourced operations | Disclose outsourced operations and link their datasets; an outsourced operation is not a valid cut-off solely because it occurs off site. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_receipt_conditioning` | Material receipt and conditioning | required | always | foreground material preparation | kg conditioned blanket body textile released to cutting |
| `cutting_makeup` | Cutting and make-up | required | always | foreground product assembly | kg unfinished blanket output |
| `wet_finishing_drying` | Wet finishing and drying | conditional | include when washing, dyeing, printing, softening, functional finishing, rinsing, or drying is performed for the product | foreground wet processing and conditioning | kg dry finished blanket intermediate |
| `onsite_heat_generation` | On-site natural-gas heat generation | conditional | include when natural gas is combusted on site for direct or indirect process heat | foreground energy conversion and direct emissions | MJ gross calorific value of natural gas consumed |
| `inspection_packaging` | Inspection and packaging | required | always | foreground quality release and packing | 1 kg net finished blanket output |

### Process: Material receipt and conditioning (`material_receipt_conditioning`)

#### Inputs

##### Product flows

###### Ready-to-make blanket body textile (`blanket_body_textile_input`)

Record the specific received textile that becomes the blanket body, including fibre composition, construction, finish, supplier lot, and conditioned mass. Its UUID remains unresolved because generic fabric records do not preserve these qualifiers.

- Selected flow: Ready-to-make blanket body textile
- Flow property / unit: Mass / kg
- Amount rule: weigh or reconcile supplier-certified conditioned textile mass received for the declared product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conditioned blanket body textile released to cutting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-ecolabel-textiles-2014`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned blanket body textile (`conditioned_blanket_body_output`)

This intermediate is the measured textile released after quarantine, identification, and conditioning; it is distinct from generic fabric and therefore remains UUID-unresolved.

- Selected flow: Conditioned blanket body textile
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned mass released to cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conditioned blanket body textile released to cutting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Cutting and make-up (`cutting_makeup`)

#### Inputs

##### Product flows

###### Conditioned blanket body textile (`conditioned_blanket_body_input`)

Record the conditioned material issued to cutting by product lot; the unresolved UUID must match the output identity declared by the preceding process.

- Selected flow: Conditioned blanket body textile
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned textile issued to cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unfinished blanket output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources:

###### Sewing thread (`sewing_thread_input`)

Record each actual sewing-thread material and linear-density specification separately in the foreground package; this card represents the single sewing-thread exchange used for the declared product.

- Selected flow: Sewing thread
- Flow property / unit: Mass / kg
- Amount rule: weigh issued thread less returned usable thread, or convert verified length by supplier linear density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unfinished blanket output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources:

###### Purchased electricity for cutting and sewing (`purchased_electricity_cutting`)

Record metered purchased electricity for cutting, sewing, trimming, and local extraction. The UUID is unresolved until voltage level and supply geography are matched to one compatible public flow.

- Selected flow: Purchased grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity; otherwise reconciled site-meter electricity allocated by documented machine runtime and rated load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfinished blanket output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unfinished assembled blanket (`unfinished_blanket_output`)

Record the mass of assembled blanket output before any declared wet finishing and final packaging; no exact public intermediate identity was verified.

- Selected flow: Unfinished assembled blanket
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output from cutting and make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unfinished blanket output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources:

##### Waste flows

###### Textile cutting offcuts (`textile_cutting_offcuts`)

Record separately weighed blanket-body offcuts leaving cutting as a waste flow; reusable components returned to production are internal loops, not waste outputs.

- Selected flow: Waste fiber fabric `cd3a2b81-3287-457e-9501-2a39f59cec99`
- Flow property / unit: Mass / kg
- Amount rule: measured offcut mass by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unfinished blanket output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources:

##### Elementary flows

### Process: Wet finishing and drying (`wet_finishing_drying`)

#### Inputs

##### Product flows

###### Unfinished assembled blanket (`unfinished_blanket_input`)

Record the unfinished blanket entering the specific wet-finishing route; the intermediate UUID remains unresolved.

- Selected flow: Unfinished assembled blanket
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass charged to the wet-finishing route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry wet-finished blanket output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_process_batch`
- Sources: `jrc-textiles-bref-2023`

###### Process water (`process_water_input`)

Record water entering washing, preparation, finishing, and rinsing from meters or batch recipes, without merging it with wastewater output.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or tank-volume water charged to included wet operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry wet-finished blanket output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_process_batch`
- Sources: `eu-textiles-bat-2022`; `ifc-textile-ehs-2007`

###### Liquid detergent (`liquid_detergent_input`)

Record the formulated liquid detergent charged to the blanket washing operation; other chemicals must be added as separate atomic exchanges.

- Selected flow: Liquid Detergent `c1214ed0-28a4-4273-a8c9-a4f29351747a`
- Flow property / unit: Mass / kg
- Amount rule: batch issue or dosing-system mass for the declared product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry wet-finished blanket output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_dosing`
- Sources: `eu-ecolabel-textiles-2014`; `eu-textiles-bat-2022`

###### Textile finishing agent (`textile_finishing_agent_input`)

Record the single formulated finishing agent used for the declared blanket route, with product name, function, composition disclosure, and batch dose; additional agents require additional cards in the foreground package.

- Selected flow: Textile finishing agent `2289d57c-b3aa-4288-a69c-c0f7aa016702`
- Flow property / unit: Mass / kg
- Amount rule: batch issue or calibrated dosing-system mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry wet-finished blanket output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_dosing`
- Sources: `eu-ecolabel-textiles-2014`; `eu-textiles-bat-2022`

###### Purchased steam (`purchased_steam_input`)

Record purchased steam crossing the site boundary for wet processing or drying; exclude steam generated inside the separately modelled on-site heat process.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass / kg
- Amount rule: metered steam mass supplied to the included wet-finishing and drying operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry wet-finished blanket output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet-finished blanket (`wet_finished_blanket_output`)

Record the dry, conditioned blanket leaving the declared wet-finishing route; the UUID remains unresolved until an exact intermediate record exists.

- Selected flow: Wet-finished blanket
- Flow property / unit: Mass / kg
- Amount rule: measured dry conditioned output accepted for inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry wet-finished blanket output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_process_batch`
- Sources:

##### Waste flows

###### Textile process wastewater (`textile_process_wastewater`)

Record wastewater transferred to on-site or off-site treatment, preserving the discharge/treatment route and the batch or meter link.

- Selected flow: Wastewater, textile process (to water) `48438fa9-4988-405c-ba44-646f134e2ecc`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass or measured volume converted with documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry wet-finished blanket output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`; `ifc-textile-ehs-2007`

##### Elementary flows

### Process: On-site natural-gas heat generation (`onsite_heat_generation`)

#### Inputs

##### Product flows

###### Natural gas combusted on site (`natural_gas_input`)

Record natural gas consumed for direct or indirect process heat from calibrated fuel meters or reconciled invoices; do not combine it with purchased steam.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Flow property / unit: Gross calorific value / MJ
- Amount rule: metered gas quantity converted with the supplier gross calorific value for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ gross calorific value natural gas consumed
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_combustion`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2_to_air`)

Record direct fossil carbon dioxide from the same natural-gas inventory using a measured stack result or an explicitly documented accepted combustion-factor calculation.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated from metered fuel and a documented accepted factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ gross calorific value natural gas consumed
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_combustion`
- Sources: `eu-textiles-bat-2022`

### Process: Inspection and packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Finished blanket before packaging (`wet_finished_blanket_input`)

Record the dry blanket released to final inspection; for routes without wet finishing this is the accepted unfinished blanket after any dry finishing.

- Selected flow: Wet-finished blanket
- Flow property / unit: Mass / kg
- Amount rule: measured net mass entering final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net finished blanket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources:

###### Purchased electricity for inspection and packaging (`purchased_electricity_packaging`)

Record electricity for inspection, folding, labelling, sealing, and packing; the UUID remains unresolved until voltage and geography are exact.

- Selected flow: Purchased grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity; otherwise reconciled site-meter electricity allocated by documented runtime and load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net finished blanket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-textiles-bat-2022`

###### Corrugated board box (`corrugated_box_input`)

Record the mass of corrugated board boxes consumed for the declared saleable packaging configuration.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: issued packaging mass less unused returns, reconciled to packed units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net finished blanket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources:

###### Polyethylene packaging film (`polyethylene_packaging_film`)

Record the single polyethylene film exchange used for bags, sleeves, or wrapping; its UUID is withheld because the retrieved candidate had a non-packaging CPC identity.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: issued film mass less unused returns, reconciled to packed units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net finished blanket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources:

###### Paper packaging label (`paper_label_input`)

Record paper labels attached to or packed with the declared product, converting label count with verified supplier mass when necessary.

- Selected flow: Packaging label, paper `d5890643-6859-42b5-9e05-556b072c6a8c`
- Flow property / unit: Mass / kg
- Amount rule: issued label count multiplied by verified mass per label, less unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net finished blanket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Quality-released blanket (`reference_blanket_output`)

This is the declared reference product after final inspection, at dry net mass and with its packaging state separately disclosed.

- Selected flow: Blanket `b7478885-d1a2-4ced-9240-4737fc0b8020`
- Flow property / unit: Mass / kg
- Amount rule: measured dry net mass of quality-released blanket output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net finished blanket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `un-stats-cpc-3-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all shared foreground operations | First avoid allocation by submetering, batch segregation, line-level mass balances, and subdivision of independently operated processes. | `iso-14044-2006` |
| `allocation_causal` | shared utilities and common services | Where subdivision is not practicable, allocate with a documented physical causal driver such as machine runtime and load, steam demand, water meter, processed mass, or occupied batch capacity. | `iso-14044-2006` |
| `allocation_multi_product` | facilities producing several blanket SKUs or other textile products | Do not use revenue allocation unless a physical relationship cannot be established and the study explicitly justifies the alternative; disclose the allocation base, totals, assigned amounts, and sensitivity. | `iso-14044-2006` |
| `allocation_recycling` | offcuts, rejects, recovered chemicals, and reusable packaging | Record the actual destination and keep internal reuse as an internal loop; do not credit recycling, reuse, or avoided production without an explicitly declared downstream modelling convention. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `material_receipt_conditioning` | received and conditioned textile mass | weighbridge, scale, receipt, and lot release records | material identity, fibre composition, construction, supplier lot, gross mass, tare, conditioned mass, moisture basis, release status | calibrated weighing and lot reconciliation | kg | each receipt and release lot | representative reporting year | all supplying stores and conditioning areas serving the product | sum accepted lot mass and reconcile opening stock plus receipts minus issues and closing stock | scale calibration, supplier specification, lot traceability, stock reconciliation |
| `cp_cutting_mass_balance` | `cutting_makeup` | textile, thread, output, and offcut mass | issue, return, scale, and production records | SKU, lot, issued textile, returned textile, thread issue/return, accepted output, offcuts, rejects | calibrated weighing; verified thread length-to-mass conversion only where weighing is impracticable | kg | each production lot | representative reporting year | all cutting and make-up lines | reconcile material inputs with accepted output, offcuts, rejects, and inventory change | scale calibration, batch reconciliation, exception log |
| `cp_wet_process_batch` | `wet_finishing_drying` | blanket and process-water balance | batch sheet, water meter, tank level, and conditioned mass records | route, batch, textile charge, water meter start/end, tank volume, dry output, moisture basis | batch-linked meters and calibrated weighing | kg | each wet-process batch | representative reporting year | all included wet-finishing and drying equipment | sum batch records and normalize by accepted dry output | meter calibration, recipe version, mass/water reconciliation |
| `cp_chemical_dosing` | `wet_finishing_drying` | detergent and finishing-agent dose | recipe, issue, return, and dosing-system records | product name, supplier, function, composition/SDS reference, batch, dose, returned quantity | calibrated dosing system or issue-minus-return weighing | kg | each batch | representative reporting year | all chemical preparation and dosing points | sum net dose by named chemical and product route | calibration, approved recipe, purchase/stock reconciliation, SDS |
| `cp_wastewater_records` | `wet_finishing_drying` | wastewater to treatment | flow meter, batch discharge, treatment transfer, and sampling records | route, volume or mass, density if converted, destination, sampling time, monitored parameters | continuous meter or batch tank measurement linked to discharge route | kg | each batch or continuous meter interval | representative reporting year | all included wet-process discharges | sum by treatment destination; convert volume only with documented density | meter calibration, sample chain of custody, influent/effluent reconciliation |
| `cp_energy_records` | `cutting_makeup` | purchased electricity and steam | utility meters, invoices, runtime, and load records | meter start/end, carrier, voltage or steam condition, runtime, load, allocation driver, product output | submeter; otherwise reconciled site meter with documented causal allocation | kWh or kg | meter interval and monthly reconciliation | representative reporting year | all included equipment and utility headers | sum direct readings; allocate documented shared remainder and reconcile to invoice/site meter | meter calibration, invoice reconciliation, allocation worksheet |
| `cp_fuel_combustion` | `onsite_heat_generation` | natural gas and direct fossil CO2 | fuel meter, supplier calorific value, stack measurement, and calculation record | gas quantity, unit, gross calorific value, meter period, equipment, operating hours, measured emission or factor identity | calibrated fuel meter plus stack result or documented accepted factor calculation | MJ and kg | meter interval and reporting period | representative reporting year | all on-site combustion serving included operations | convert each period to MJ GCV and link emissions to the same fuel inventory | meter calibration, supplier certificate, stack report or factor provenance, reconciliation |
| `cp_packaging_release` | `inspection_packaging` | packaging inputs and reference output | packaging issue/return, label count, scale, inspection, and release records | SKU, lot, blanket count, net product mass, box mass, film mass, label count/mass, rejected units, packaging state | calibrated weighing plus count-to-mass conversion from verified component mass | kg | each packing lot | representative reporting year | all inspection and packing lines | reconcile net released product and each packaging material separately | scale calibration, component specification, release record, packaging reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all inventory exchanges | normalized exchange = total exchange assigned to conforming product / dry net kg of quality-released blanket | assigned exchange; dry net released product mass | exchange per kg reference product | `iso-14044-2006` |
| `calc_item_mass` | count-based product or label records | mass = verified count multiplied by representative measured mass per item from the same SKU and applicable lot or sampling period | item count; measured item masses; sampling record | kg | `iso-14048-2002` |
| `calc_water_volume_mass` | water and wastewater records | mass = measured volume multiplied by documented density at the applicable condition; retain original volume | volume; density; temperature or declared condition | kg | `iso-14048-2002` |
| `calc_natural_gas_energy` | natural gas input | energy = metered gas quantity multiplied by supplier gross calorific value for the same reporting period | gas quantity; gross calorific value | MJ GCV | `eu-textiles-bat-2022` |
| `calc_mass_balance` | material and wet-process batches | reconcile inputs = accepted outputs + wastes + emissions/transfers + inventory change; investigate and disclose unresolved imbalance | measured inputs; outputs; wastes; transfers; inventory change | batch balance and unexplained difference | `eu-textiles-bat-2022`; `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and intermediates | Preserve product SKU, fibre composition, construction, finishing route, dimensions, mass per item, moisture basis, and lot through all process records. | product specification, bill of materials, lot traveller, release certificate |
| `dq_temporal` | all foreground records | Use a representative continuous 12-month period where practicable; disclose shutdowns, start-ups, campaigns, and substitutions that affect representativeness. | dated meter series, production calendar, exception log |
| `dq_completeness` | each process | Reconcile materials, water, chemicals, energy, products, waste, wastewater, and direct emissions; document every missing stream and estimation. | signed mass/energy reconciliation and completeness checklist |
| `dq_measurement` | measured exchanges | Identify meter/scale, unit, calibration status, reading interval, and conversion factor; preserve source records and calculation lineage. | calibration certificate, raw reading, invoice, calculation worksheet |
| `dq_supplier` | upstream inputs | Record supplier, production geography, technology/route, reference year, and dataset match for significant textile, chemical, energy, and packaging inputs. | supplier declaration, SDS, certificate, linked dataset metadata |
| `dq_chemical` | wet finishing chemicals | Keep product identity, function, composition or SDS reference, batch dose, and applicable restricted-substance or substitution assessment. | approved recipe, SDS, purchase and dosing record, compliance declaration |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require flow UUID `b7478885-d1a2-4ced-9240-4737fc0b8020`, public state 100 Product flow evidence, exact CPC 27110 scope, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. | `un-stats-cpc-3-2025` |
| `validate_required_qualifiers` | reference product metadata | Fail completeness when any required qualifier is missing or when the product contains an electrical device or circuit. | `eu-ecolabel-textiles-2014` |
| `validate_atomic_inventory` | process inventory | Require each inventory card to represent one exchange, retain only a directly verified UUID, and preserve an explicit unresolved reason for every UUID-free row. | `iso-14048-2002` |
| `validate_process_route` | process boundary | Require all required processes and every applicable conditional operation; reconcile outsourced operations to linked datasets. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_foreground_values` | inventory amounts | Require every published amount to originate from a foreground record or an identified calculation over foreground records; this candidate PCR supplies no AI-authored numerical ranges or defaults. | `iso-14044-2006`; `iso-14048-2002` |
| `validate_mass_balance` | each production stage and reporting period | Require documented reconciliation of material inputs, accepted outputs, wastes, transfers, and inventory change, with investigated and disclosed residuals. | `eu-textiles-bat-2022`; `iso-14044-2006` |
| `validate_allocation` | shared operations | Require subdivision or a documented causal physical allocation driver, complete totals, assigned quantities, and sensitivity where allocation materially affects results. | `iso-14044-2006` |
| `validate_source_traceability` | data package | Require raw-record lineage, calibration/quality evidence, source ids for normative rules, and linked upstream dataset metadata. | `iso-14048-2002` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground blanket-manufacturing dataset eligible for `secondary_dataset` or `background_dataset` use after review and publication |
| downstream_use | construction of product `process` datasets and downstream `lifecyclemodel` systems for non-electric blankets or travelling rugs matching the declared qualifiers |
| allowed_use | gate-to-gate blanket manufacturing, or a linked manufacturing stage in a broader cradle-to-gate or cradle-to-grave model, when product, geography, technology, and time are representative |
| excluded_use | electric blankets; floor coverings; sleeping bags; upstream textile production; use-phase service claims; products with materially different construction or finishing routes without adaptation |
| required_metadata | canonical PCR id; CPC 27110; reference UUID/property/unit group; required qualifiers; process inclusions; geography; reference year; technology; allocation; data sources; unresolved identities; packaging state |
| required_quality_disclosure | primary-data share; meter and scale coverage; calibration status; temporal coverage; supplier-data coverage; mass-balance residuals; allocation shares; missing or estimated exchanges; outsourced operation coverage |
| update_trigger | change in fibre composition, construction, finishing chemistry or route, energy system, wastewater treatment, packaging configuration, production geography, supplier dataset, reference-flow identity, or a material data-quality finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-stats-cpc-3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 structure, subclass 27110, official structure dated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-12) | official product-category title and scope anchor |
| `jrc-textiles-bref-2023` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf (retrieved 2026-08-12) | textile process decomposition, wet processing, finishing, and emissions-control context |
| `eu-textiles-bat-2022` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, CELEX 32022D2508, https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj/eng (retrieved 2026-08-12) | input/output inventories, water and energy management, chemical management, wastewater and air-emission monitoring, process boundary |
| `eu-ecolabel-textiles-2014` | Official guidance (`official_guidance`) | Commission Decision 2014/350/EU establishing EU Ecolabel criteria for textile products, consolidated text, CELEX 32014D0350, https://eur-lex.europa.eu/eli/dec/2014/350/oj/eng (retrieved 2026-08-12) | textile-product scope, electrical exclusion, fibre/component disclosure, chemicals, processing, and fitness-for-use context |
| `ifc-textile-ehs-2007` | Official guidance (`official_guidance`) | World Bank Group / IFC, Environmental, Health, and Safety Guidelines for Textile Manufacturing, 30 April 2007, https://www.ifc.org/content/dam/ifc/doc/2000/2007-textiles-manufacturing-ehs-guidelines-en.pdf (retrieved 2026-08-12) | water, chemicals, wastewater, waste, and air-emission collection and control context |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including Amendments 1:2017 and 2:2020, https://www.iso.org/standard/38498.html (retrieved 2026-08-12) | goal and scope, inventory, allocation, completeness, reporting, and review rules |
| `iso-14048-2002` | Standard (`standard`) | ISO/TS 14048:2002, Environmental management — Life cycle assessment — Data documentation format, confirmed 2025, https://www.iso.org/standard/29872.html (retrieved 2026-08-12) | transparent data fields, collection, calculation, quality, and exchange documentation |
