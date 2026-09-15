---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.padlocks-and-locks-of-base-metal-clasps-and-frames-with-clasps-incorporating-locks-of-b-058f6573
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Padlocks and locks, of base metal; clasps and frames with clasps, incorporating locks, of base metal; keys and parts thereof, of base metal; base metal fittings for furniture, doors, saddlery and the like

## 1. Scope and Applicability

This PCR covers foreground production of finished base-metal locking and fitting hardware supplied at the factory gate: padlocks and locks; lock-incorporating clasps and clasp frames; keys and lock parts; and base-metal fittings for furniture, doors, saddlery, cabinets and comparable applications. It applies to mechanical products and to the metal-hardware portion of electromechanical products when electronic assemblies are separately identified.

The foreground boundary starts with purchased metal stock, castings, components, finishing chemicals, water, energy and packaging at the reporting organization's receiving gate. It ends with inspected and packaged finished hardware at the factory gate. Include forming, machining, cleaning, heat treatment, surface finishing, assembly, inspection and packaging when performed by the reporting organization or by a toll processor for the declared product.

Exclude complete doors, furniture, saddlery and access-control systems; powered door operators; stand-alone electronic control modules; installation, distribution, use, maintenance and end-of-life; and clothing or footwear clasps that do not incorporate a lock. An expanded study may add excluded life-cycle stages as separate processes without changing this gate-to-gate reference flow.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.padlocks-and-locks-of-base-metal-clasps-and-frames-with-clasps-incorporating-locks-of-b-058f6573 |
| classification_refs | CPC 3.0: 42992 (exact classification context; mapping acceptance is governed separately) |
| covered_products | Finished base-metal padlocks, locks, lock-incorporating clasps and frames, keys, lock parts, and fittings for furniture, doors, saddlery, cabinets and similar articles |
| excluded_products | Complete host products; powered door operators; stand-alone electronic controls; non-locking clothing and footwear clasps; non-metal fittings; installation-only services |
| representative_product | A finished, saleable base-metal lock or fitting with its normally supplied integral parts and declared accessories |
| production_route | Purchased metal stock or cast components; forming and machining as applicable; optional heat treatment; optional cleaning and surface finishing; final assembly, inspection and packaging |
| market_state | Finished and packaged at the manufacturing gate; product subtype, principal alloy, finish, dimensions, security or performance class, accessories and packaging configuration declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and make available finished base-metal locking or fitting hardware that performs the declared securing, access-control, fastening, motion-control or fitting function |
| How much | 1 kg net mass of finished product at the factory gate; also declare product units per kg and mass per product unit |
| How well | Meets the declared product specification, performance or security class, dimensions, finish and quality acceptance criteria |
| How long or cycle | One completed manufacturing batch normalized to 1 kg finished product; no use-stage service period is represented |
| reference_flow_link | 1 kg of the declared finished hardware product flow, excluding external packaging but including integral parts and normally supplied accessories |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished product |
| Reference product flow | Padlocks and locks, of base metal, clasps and frames with clasps, incorporating locks, of base metal, keys and parts thereof, of base metal, base metal fittings for furniture, doors, saddlery and the like `5cf66c20-e740-4088-a8a8-4a1afca932b2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | hardware subtype and intended function; principal metal and alloy grade; product mass and units per kg; dimensions; mechanical or electromechanical configuration; finish and coating system; performance, security or fire-rating class where applicable; included fasteners, keys and accessories; packaging configuration; production route and outsourced operations; manufacturing site and geography; reporting period; factory-gate condition |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh saleable finished hardware including integral parts and normally supplied accessories; exclude external packaging and report each packaging material separately. |
| `unit_to_mass_conversion` | product counts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record product count and a representative weighed mass per product unit for each configuration; calculate units per kg without combining unlike configurations unless production-volume weighting is disclosed. |
| `electricity_conversion` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter readings in kWh and convert to MJ with 1 kWh = 3.6 MJ; declare grid geography, voltage level and whether downstream losses are included. |
| `water_mass_conversion` | process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer mass records; when water is metered by volume, use measured density and temperature or document the justified density conversion. |
| `chemical_supply_state` | finishing chemicals | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report delivered solution or hydrate mass and declare concentration, hydration state and bath make-up versus replenishment; do not mix active-substance and supplied-product mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_rule_1` | foreground manufacturing | Include each operation that transforms the declared product before the factory gate, including controlled toll processing; disclose the manufacturing locations and the process sequence actually used. | us-epa-locking-devices-1995; ul-builders-hardware-pcr-2019 |
| `sb_rule_2` | packaging | Record each packaging material as a separate input and disclose its type, composition, reuse status and disposition assumption; do not use a combined packaging-material row. | ul-builders-hardware-pcr-2019 |
| `sb_rule_3` | excluded life-cycle stages | Keep distribution, installation, use, maintenance and end-of-life outside this gate-to-gate dataset. If an expanded study adds them, report them as separate processes and do not duplicate manufacturing inputs. | ul-builders-hardware-pcr-2019 |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metal stock, purchased castings or discrete components, finishing chemicals, process water, energy and packaging are received at the reporting organization's gate with supplier, grade, state and upstream dataset references declared. |
| starting_condition_role | Upstream product inputs to gate-to-gate manufacture of finished locking and fitting hardware |
| product_classification_scope | Finished base-metal locks, lock parts, keys, lock-incorporating clasps and base-metal fittings; classification references locate the category but do not replace product qualifiers. |
| recursive_input_rule | A purchased lock, key, fitting or lock component that would recurse into this same category is recorded once as a product input with its own upstream dataset; its prior manufacture is not reopened inside the foreground process. |
| upstream_dataset_requirement | Use supplier-specific datasets when available; otherwise use geographically and technologically representative upstream data and disclose alloy grade, recycled content, product state and delivery boundary. |
| disclosure | Declare which forming, heat-treatment, finishing and assembly operations are on-site or outsourced; metal and coating system; chemical supply state; energy geography; water source; waste destinations; packaging composition; reporting period; and any excluded operation. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | Metal component forming and machining | conditional | Include when stock or castings are cut, bent, shaped, drilled, milled, tapped, die-cast, stamped or otherwise fabricated within the declared foreground or by a controlled toll processor. | foreground production | kg fabricated components sent to the next included operation |
| `heat_treatment` | Component heat treatment | conditional | Include when hardness, strength, spring properties or dimensional stability are achieved by thermal treatment before final assembly. | foreground conditioning | kg heat-treated components |
| `surface_finishing` | Cleaning and surface finishing | conditional | Include each on-site or controlled cleaning, buffing, plating, conversion-coating, powder-coating or lacquer route applied to the declared product. | foreground finishing | kg surface-finished components |
| `assembly_packaging` | Final assembly, inspection and packaging | required | Always include final product acceptance and factory-gate output; record assembly and each packaging material when present. | foreground production and gate output | 1 kg net finished product |

### Process: Metal component forming and machining (`component_fabrication`)

#### Inputs

##### Product flows

###### Carbon-steel sheet stock (`carbon_steel_sheet`)

Record carbon-steel sheet only when it crosses the fabrication boundary for the declared product; declare grade, coating state, thickness and recycled content.

- Selected flow: Carbon-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: measured purchased or issued mass attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `us-epa-locking-devices-1995`

###### Stainless-steel bar stock (`stainless_steel_bar`)

Record stainless-steel bar only for a product configuration that uses this stock form; declare grade, diameter or section, finish and recycled content.

- Selected flow: Stainless-steel bar
- Flow property / unit: Mass / kg
- Amount rule: measured purchased or issued mass attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `us-epa-locking-devices-1995`

###### Brass stock (`brass_stock`)

Record the public state-code-100 Brass flow, classified at CPC 41512 (Bars, rods and profiles, of copper), when copper-zinc alloy stock is fabricated into the declared hardware; declare alloy grade and stock form.

- Selected flow: Brass `e422cfbf-5444-43ab-a68a-22be82e2ad47`
- Flow property / unit: Mass / kg
- Amount rule: measured purchased or issued mass attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `us-epa-locking-devices-1995`

###### Zinc die-casting alloy (`zinc_die_casting_alloy`)

Record zinc die-casting alloy only when the declared components are die-cast; declare alloy designation, primary or secondary content and delivered ingot state.

- Selected flow: Zinc die-casting alloy
- Flow property / unit: Mass / kg
- Amount rule: measured furnace charge net of documented internal return metal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `us-epa-locking-devices-1995`

###### Cutting fluid (`cutting_fluid`)

Record fresh make-up of the public state-code-100 Cutting Fluid flow, classified at CPC 35499 (Other chemical products n.e.c.), when consumed by machining; exclude recirculated fluid already inside the foreground loop.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: purchased or tank-make-up mass less documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `us-epa-locking-devices-1995`

###### Electricity for component fabrication (`electricity_component`)

Record electricity metered or allocated to forming, casting, machining, deburring and in-process material handling.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: process-metered electricity, converted from kWh when needed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_energy`

##### Waste flows

No waste input is prescribed. Returned waste accepted for remanufacture must be added as its own specific waste input.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

No separate product output is prescribed; fabricated components remain inside the foreground product system.

##### Waste flows

###### Post-industrial steel machining scrap (`steel_scrap`)

Record segregated ferrous offcuts, chips and turnings that leave the process for recycling or treatment; declare contamination and destination.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: weighed scrap leaving the foreground process, net of internal remelt or direct reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `us-epa-locking-devices-1995`

##### Elementary flows

Direct emissions from fabrication must be added as separate measured elementary-flow rows when they cross the environmental boundary.

### Process: Component heat treatment (`heat_treatment`)

#### Inputs

##### Product flows

###### Gaseous natural gas for heat treatment (`natural_gas_heat`)

Record this flow only when an on-site furnace burns natural gas for the declared components; declare reference conditions and fuel composition.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment`
- Sources: `us-epa-locking-devices-1995`

###### Electricity for heat treatment (`electricity_heat`)

Record electricity for furnaces, controls, quenching equipment and heat-treatment auxiliaries when the route is included.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: process-metered electricity, converted from kWh when needed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment`

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No elementary input is prescribed.

#### Outputs

##### Product flows

No separate product output is prescribed; heat-treated components remain inside the foreground product system.

##### Waste flows

Add each spent quench medium or treatment residue as a specific waste row if it leaves the foreground boundary.

##### Elementary flows

###### Direct fossil carbon dioxide from natural-gas combustion (`co2_fossil_heat`)

Record direct stack carbon dioxide calculated from measured fossil natural gas and supplier or fuel-analysis carbon data; do not include upstream grid emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured fuel use, carbon content and documented oxidation assumption
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_treatment`

### Process: Cleaning and surface finishing (`surface_finishing`)

#### Inputs

##### Product flows

###### Electricity for surface finishing (`electricity_finish`)

Record electricity for cleaning, buffing, plating rectifiers, pumps, ventilation, powder coating, curing or lacquer application that occurs in the declared route.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: process-metered electricity, converted from kWh when needed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `us-epa-locking-devices-1995`

###### Process water for cleaning and rinsing (`process_water_finish`)

Record make-up and rinse water that crosses the process boundary; exclude recirculated water until it leaves the loop.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered water supply converted to mass when necessary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `us-epa-locking-devices-1995`

###### Sodium hydroxide for alkaline cleaning or treatment (`sodium_hydroxide_finish`)

Record supplied sodium hydroxide only when it is consumed in the declared cleaning or wastewater-treatment route; declare solution concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: delivered solution or solid make-up mass attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`

###### Hydrochloric acid for pickling or bath control (`hydrochloric_acid_30_finish`)

Record 30% supplied hydrochloric acid only when the declared route uses that supply concentration; other concentrations require a separately resolved flow and concentration disclosure.

- Selected flow: Hydrochloric acid (30%) `56414d25-a353-4d67-b362-87212ce6011d`
- Flow property / unit: Mass / kg
- Amount rule: delivered 30% solution make-up mass attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`

###### Nickel sulfate for nickel-plating bath make-up (`nickel_sulfate_finish`)

Record nickel sulfate only for a nickel-plating route; declare hydration state, purity and supplied-product concentration.

- Selected flow: Nickel sulfate
- Flow property / unit: Mass / kg
- Amount rule: purchased bath make-up and replenishment mass attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `us-epa-locking-devices-1995`

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No elementary input is prescribed.

#### Outputs

##### Product flows

No separate product output is prescribed; finished components remain inside the foreground product system.

##### Waste flows

###### Metal-finishing wastewater (`metal_finishing_wastewater`)

Record aqueous waste leaving cleaning, rinsing or plating for treatment; declare pH, principal dissolved metals, treatment destination and whether water is internally recycled.

- Selected flow: Metal-finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered or weighed wastewater sent to on-site or off-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `us-epa-locking-devices-1995`

###### Metal-hydroxide sludge from finishing-water treatment (`metal_hydroxide_sludge`)

Record dewatered sludge generated by treatment of metal-finishing wastewater; declare dry solids, principal metals, hazardous classification and destination.

- Selected flow: Metal-hydroxide sludge
- Flow property / unit: Mass / kg
- Amount rule: weighed wet sludge leaving the treatment process with dry-solids content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `us-epa-locking-devices-1995`

##### Elementary flows

Add each measured direct emission to air or water as a separate chemical-species flow. Do not use a combined emissions row.

### Process: Final assembly, inspection and packaging (`assembly_packaging`)

#### Inputs

##### Product flows

###### Electricity for assembly and packaging (`electricity_assembly`)

Record electricity for assembly equipment, inspection, testing and packaging attributable to the declared product.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: process-metered electricity, converted from kWh when needed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_packaging`

###### Corrugated board boxes (`corrugated_boxes`)

Record formed corrugated boxes shipped with the product; declare board grade, recycled content and reuse status.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured packaging mass issued to shipped product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_packaging`
- Sources: `ul-builders-hardware-pcr-2019`

###### Polyethylene film packaging (`polyethylene_film`)

Record polyethylene film only when used in the declared packaging configuration; declare polymer grade, thickness and recycled content.

- Selected flow: Polyethylene `1ff32f1d-77ac-4a6f-b91c-67b08b13e55a`
- Flow property / unit: Mass / kg
- Amount rule: measured film mass issued to shipped product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_packaging`
- Sources: `ul-builders-hardware-pcr-2019`

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No elementary input is prescribed.

#### Outputs

##### Product flows

###### Finished base-metal locking or fitting hardware (`finished_hardware`)

Record only inspected, saleable product at the factory gate. Product units, unit mass, integral accessories and net-versus-packaged mass must be traceable.

- Selected flow: Padlocks and locks, of base metal, clasps and frames with clasps, incorporating locks, of base metal, keys and parts thereof, of base metal, base metal fittings for furniture, doors, saddlery and the like `5cf66c20-e740-4088-a8a8-4a1afca932b2`
- Flow property / unit: Mass / kg
- Amount rule: normalize weighed net saleable output to exactly 1 kg reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_packaging`
- Sources: `un-cpc-3-0-2025`; `ul-builders-hardware-pcr-2019`

##### Waste flows

Record each rejected component and packaging scrap material separately when it leaves the foreground boundary.

##### Elementary flows

No direct elementary output is prescribed; add separately measured emissions when present.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | multiple products and production lines | Avoid allocation by subdividing meters, material issues, batch records and waste records to the declared product configuration wherever technically feasible. | ul-builders-hardware-pcr-2019 |
| `allocation_rule_2` | residual shared burdens | When subdivision is not feasible, allocate shared manufacturing burdens by net product mass. A different physical relationship may be used only when documented and consistently applied. | ul-builders-hardware-pcr-2019 |
| `allocation_rule_3` | metal scrap and recovered materials | Record scrap leaving the foreground as a waste output without an avoided-production credit inside this gate-to-gate dataset. Any recycling credit or substitution is reported separately in the downstream model with method and destination disclosed. | us-epa-locking-devices-1995 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | `component_fabrication` | metal stock, cutting fluid and steel scrap | purchase, issue, return and scale records | material identity, grade, supplied mass, returned mass, internal recycle, scrap mass, batch id | reconcile purchasing and stores records with calibrated scales and batch travellers | kg | each batch; monthly reconciliation | declared representative reporting period or production campaign | each fabrication site and controlled toll processor | sum net inputs and outputs by product configuration, then normalize by net finished mass | invoices, certificates of analysis, scale calibration, material reconciliation and scrap transfer records |
| `cp_component_energy` | `component_fabrication` | electricity | meter or equipment energy log | meter start and end, kWh, production hours, product mass, allocation driver | use submeter data; if shared, allocate by documented equipment time or another physical driver | kWh and MJ | each batch or monthly | same period as product output | each fabrication site | subtract non-production baseload where evidenced, convert kWh to MJ, normalize by net finished mass | meter calibration, bills and operating logs |
| `cp_heat_treatment` | `heat_treatment` | natural gas, electricity and direct fossil CO2 | fuel meter, electricity meter and fuel-analysis records | gas volume, reference conditions, kWh, carbon content, oxidation assumption, treated mass | read meters for included furnaces and retain supplier fuel specification or analysis | m3, kWh, MJ and kg | each heat-treatment campaign; monthly reconciliation | same period as treated output | each furnace site or controlled toll processor | allocate by treated mass only after subdivision by furnace campaign; calculate direct CO2 from collected fuel data | meter calibration, fuel invoices, supplier specification and furnace log |
| `cp_surface_finishing` | `surface_finishing` | electricity, water, each chemical, wastewater and sludge | meter, bath, purchasing and waste-transfer records | kWh, water volume or mass, chemical identity and concentration, make-up mass, wastewater mass, sludge wet mass and dry solids, batch id | reconcile meters and bath logs with purchase and waste manifests | kg, m3, kWh and MJ | each bath make-up and batch; monthly reconciliation | same period as finished components | each finishing line and wastewater-treatment unit | keep each chemical and waste stream separate; subtract documented internal recycle; normalize by net finished mass | meter calibration, bath analysis, SDS or certificate, invoices, manifests and sludge solids test |
| `cp_assembly_packaging` | `assembly_packaging` | electricity, each packaging material and finished product | meter, bill-of-materials, issue, count, scale and shipment records | kWh, packaging identity and mass, product count, net unit mass, rejected units, shipped mass, batch id | reconcile assembly and packaging issues with calibrated product scales and shipment records | kg, item, kWh and MJ | each batch; monthly reconciliation | declared representative reporting period or production campaign | each final assembly and packaging site | aggregate only equivalent product configurations; production-volume weight disclosed averages; normalize to 1 kg net finished product | scale and meter calibration, inspection release, bill of materials and shipment record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | every inventory row | normalized amount = attributable row amount / net saleable product mass | attributable flow amount; net saleable product mass | flow amount per 1 kg net finished product |  |
| `calc_count_mass` | product count conversion | net product mass = accepted product count × representative weighed mass per unit; stratify unlike configurations before aggregation | accepted count; weighed unit mass; configuration id | kg net saleable product and units per kg | ul-builders-hardware-pcr-2019 |
| `calc_electricity_mj` | electricity rows | electricity MJ = metered kWh × 3.6 | metered kWh | MJ electricity |  |
| `calc_water_mass` | process-water row | water mass = metered volume × documented density at the declared condition | water volume; density; temperature | kg process water |  |
| `calc_co2_fossil` | direct natural-gas combustion | calculate fossil CO2 from measured gas volume, reference conditions, supplier or analysed carbon content and documented oxidation assumption; do not use upstream electricity emissions | gas volume; reference conditions; carbon content; oxidation assumption | kg carbon dioxide (fossil) |  |
| `calc_material_balance` | metal fabrication and finished output | reconcile purchased metal + same-category components = net finished metal + segregated metal scrap + other measured metal residues ± inventory change | metal inputs, product output, scrap, residues, work-in-progress change | disclosed metal mass-balance closure | us-epa-locking-devices-1995 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and all exchanges | Retain supplier identity, grade or formulation, product state, UUID resolution, and batch or lot linkage. Do not substitute a broader flow for an unresolved exact identity. | supplier specification, certificate, SDS, direct-read UUID audit and batch record |
| `dq_measurement` | mass, energy, water and count data | Use calibrated scales and meters suitable for the amount measured; document conversions, shared-meter allocation and excluded baseload. | calibration records, meter logs and calculation workbook |
| `dq_temporal` | foreground dataset | Cover the declared reporting period or production campaign, demonstrate temporal representativeness, and disclose material seasonal or production-volume variation. | production calendar, batch list and variance review |
| `dq_completeness` | process map and inventory | Reconcile product, metal and packaging records; add every route-specific chemical, fuel, waste and measured emission as its own atomic exchange even when not prelisted. | mass balance, purchase reconciliation, waste manifests and completeness checklist |
| `dq_geography_technology` | site and upstream data | Declare manufacturing geography, equipment route, outsourced operations, electricity mix, water source and waste destination; justify proxies for missing upstream data. | site description, supplier geography and data-quality assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference flow | Verify that net finished output equals 1 kg after normalization and that product subtype, unit mass, units per kg, alloy, finish, performance class, accessories, site, period and gate condition are declared. | un-cpc-3-0-2025; ul-builders-hardware-pcr-2019 |
| `validation_rule_2` | process route | Every included process-map row must have collected inventory. Every omitted conditional process must have a documented non-applicability statement, including outsourced operations. | us-epa-locking-devices-1995 |
| `validation_rule_3` | atomic flows and UUIDs | Verify one physical, chemical, waste or energy exchange per row, correct direction and flow type, compatible property and unit, and an exact state-100 UUID before final dataset publication. |  |
| `validation_rule_4` | metal mass balance | Investigate unexplained difference between metal inputs and net product, segregated scrap, other metal residues and work-in-progress change; disclose the reconciliation result. | us-epa-locking-devices-1995 |
| `validation_rule_5` | finishing water and wastes | When surface finishing is included, reconcile supplied water with internally recycled water, wastewater, evaporation and carry-out, and reconcile treatment sludge with waste-transfer records without combining wastewater and sludge. | us-epa-locking-devices-1995 |
| `validation_rule_6` | packaging | Confirm that each shipped packaging material is recorded separately and that net product mass excludes external packaging. | ul-builders-hardware-pcr-2019 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset or background_dataset after methodology review, exact flow resolution and dataset validation |
| downstream_use | foreground process models for base-metal locks, keys, lock parts and fittings; product LCAs and lifecycle models needing a factory-gate hardware input |
| allowed_use | Use for the declared product subtype, alloy, finish, production route, geography, technology and reporting period, or after a documented representativeness assessment. |
| excluded_use | Do not represent complete doors, furniture, saddlery or access-control systems; non-metal fittings; installation or use performance; or a materially different alloy, finish, security class or manufacturing route without adjustment. |
| required_metadata | canonical PCR id; product subtype and function; reference-flow UUID; net unit mass and units per kg; material composition; finish; performance class; included accessories; packaging; process map; site and geography; outsourced operations; reporting period; allocation; upstream data; unresolved-flow disposition |
| required_quality_disclosure | primary-data share; meter and scale coverage; temporal coverage; product grouping and weighting; mass-balance closure; UUID audit status; proxy data; excluded operations; water and waste reconciliation; uncertainty and known limitations |
| update_trigger | Reassess when product design, principal alloy, finish system, manufacturing route, site, supplier mix, energy mix, packaging, allocation method or annual inputs or outputs change materially, or when an unresolved exact flow is resolved. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division. CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05; cached content SHA-256 `sha256:5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Exact CPC 42992 classification identity and hierarchy context |
| `us-epa-locking-devices-1995` | Official guidance (`official_guidance`) | Jendrucko, R. J.; Hurst, B. T.; Looby, G. P. Pollution Prevention Assessment for a Manufacturer of Locking Devices. U.S. EPA, EPA/600/S-95/013, August 1995. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=30003VJ0.TXT (retrieved 2026-09-05) | Locking-device process decomposition, metal stock, machining, cleaning, heat treatment, finishing, assembly, packaging, scrap and wastewater-treatment sludge pathways |
| `ul-builders-hardware-pcr-2019` | Standard (`standard`) | UL Environment. PCR for Building-Related Products and Services: Builders Hardware EPD Requirements, 2019. https://www.ul.com/sites/g/files/qbfpbp251/files/2019-07/ULE_PCR_Builder_Hardware_PartB_6-19-19.pdf (retrieved 2026-09-05) | Builder-hardware scope, product-unit and mass disclosure, system-boundary disclosure, manufacturing-location disclosure, packaging composition and pathway disclosure |
