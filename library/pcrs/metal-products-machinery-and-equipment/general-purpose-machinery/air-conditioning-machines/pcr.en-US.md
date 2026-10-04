---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.air-conditioning-machines
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Air-conditioning machines

## 1. Scope and Applicability

This PCR governs production of marketable air-conditioning machines combining a motor-driven fan with elements that change air temperature and humidity, including machines without separately controllable humidity. It includes self-contained/window/wall/ceiling/floor, split/multi-split, ducted/rooftop and vehicle-passenger conditioning forms; reversible air-conditioning heat pumps and machines without an incorporated refrigeration unit are admitted. It excludes ventilation-only fans, standalone refrigerating/freezing equipment or heat pumps that are not air-conditioning machines, detached replacement parts, installation, use and end-of-life. CPC3 current labels, historical CPC2.1 correspondence and WCO scope are complementary evidence, not interchangeable editions.

The representative route is factory production of a declared vapour-compression configuration. Thermal absorption and externally supplied water/thermal coil configurations remain in scope when the delivered equipment satisfies the air-conditioning boundary; a standalone absorption chiller is not automatically an air conditioner. Declare the actual route: compression equipment needs its compressor and refrigerant circuit; absorption needs its actual generator/absorber, pump and working pair instead; external-coil machines may leave uncharged. Other emerging technology requires an explicit route-specific module/chemical inventory and evidence review, never borrowing a compressor BOM. Magnetic cooling in the manufacturer source is prospective.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.air-conditioning-machines |
| classification_refs | CPC 3.0:43912 |
| covered_products | Air-conditioning machines |
| excluded_products | Ventilation-only fans; other refrigeration/heat-pump equipment; detached parts; services |
| representative_product | Declared accepted complete air-conditioning sales configuration |
| production_route | Actual conditional sheet/coil/plastic fabrication, circuit/electrical assembly, charging or dry release, factory test and packaging; route alternatives retained |
| market_state | Accepted tested equipment at factory gate with declared modules and retained charge, installation excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply declared complete air-conditioning equipment |
| How much | 1 kg net accepted equipment; configuration mass M connects unit BOM/test data |
| How well | model and delivered module schedule; stationary or vehicle application; conditioning function and fan; refrigeration-unit presence; vapour-compression, absorption or external-coil technology; cooling-only or reversible; compressor drive and inverter; coil materials and construction; rated cooling/heating capacity and test standard; refrigerant identity, blend composition and actual factory retained charge; dry or charged delivery; net mass M; declared factory starting state; make/buy boundary; factory geography, supply voltage and reference period; packaging schedule |
| How long or cycle | One factory supply; no service life or cooling-energy equivalence |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete air-conditioning machine |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model and delivered module schedule; stationary or vehicle application; conditioning function and fan; refrigeration-unit presence; vapour-compression, absorption or external-coil technology; cooling-only or reversible; compressor drive and inverter; coil materials and construction; rated cooling/heating capacity and test standard; refrigerant identity, blend composition and actual factory retained charge; dry or charged delivery; net mass M; declared factory starting state; make/buy boundary; factory geography, supply voltage and reference period; packaging schedule |

Declare all qualifiers in the foreground data package; for dry external-coil routes record compressor/refrigerant fields explicitly as not_applicable with route evidence, distinguishing this from unknown identity or charge. Net mass M is measured for one accepted complete configuration, including all delivered modules and retained charge/oil, excluding packaging, installation additions, rejects and temporary test media. Never invent a machine weight or treat equal mass, rated cooling capacity or efficiency as equal delivered refrigeration service. For heterogeneous products normalize model-resolved records before aggregation; do not divide a mixed BOM by an unrelated average mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| energy_units | Factory energy | Electrical energy or delivered heat | kWh; MJ | Retain meter units. 1 kWh = 3.6 MJ; cooling/heating capacity is a qualifier and is not electrical input. Steam conversion uses actual delivered/returned enthalpy. |
| species_balance | Charge and releases | Mass | kg | Balance each refrigerant or working-pair constituent by stock, receipts, retained accepted charge, sample/reject trapped charge, external recovery/waste transfer and measured release; unexplained residual remains a gap, not an assumed emission factor. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased declared raw stock, components or complete submodules received at factory |
| starting_condition_role | Supplier-product interface; actual in-house manufacture starts here |
| product_classification_scope | Air-conditioning machines |
| recursive_input_rule | Purchased same-category machines/modules retain independent supplier burdens; internal rework/transfers are not new external supplies and cancel as exchanges |
| upstream_dataset_requirement | Match component state, technology, geography/year and actual supply interface; purchased compressor includes its motor and oil unless stated otherwise |
| disclosure | Factory gate includes all delivered modules/charge and separate packaging; installation, operation electricity/heat, use leakage and end-of-life excluded |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| factory_scope | all processes | Include actual fabrication, joining, cleaning/finishing, assembly, evacuation/charging, leak/safety/functional tests, attributable rework, packaging and direct releases. Foreground starts at received stock/components; link upstream extraction/production/transport under declared provider boundary and include gate receipts not already covered. Exclude downstream installation and service energy. | `wco-hs84-2022`; `ipcc-ods-2006` |
| make_buy | fabrication; assembly | Build a component make/buy matrix: include purchased finished coil OR its in-house metal feed/forming/joining, never both for the same coil. Apply to compressor/motor/PCBA/cabinet and absorption modules. Additional supplier-completed operations are not repeated foreground burdens. | `daikin-technology-carbon` |
| route_scope | all processes | Use actual route conditions; no refrigeration unit does not mean no manufacturing burden, and a reversible air-conditioning heat pump is not excluded merely because it heats. An absorption cooling module is admitted only in a qualifying air-conditioning configuration with its fan/conditioning function. Record omitted operation evidence and actual other technologies before reuse. | `wco-hs84-2022`; `doe-hvac-2011` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Conditional cabinet, coil and plastic fabrication | conditional | For actual in-house operations: blank/stamp/bend sheet, cut/bend/expand copper tubes and press fins, or form/join aluminium microchannels; mould housings if granulate enters; degrease, powder-coat and cure actual surfaces. Purchased fabricated parts bypass the corresponding input material and operation. | Manufacturing foreground | 1 kg reference flow |
| assembly | Mechanical, electrical and fluid-circuit assembly | required | Fit actual fan, drive, compressor or absorption module, coils, valves, sensors and controls; connect tubing by actual brazing/welding/mechanical joining; preserve serial/module configuration. Reversibility adds actual reversing valve and controls. | Manufacturing foreground | 1 kg reference flow |
| charge | Circuit evacuation, pressure testing and factory charging | conditional | For actual sealed refrigeration/absorption circuits: record test gas, evacuation, charge, captured refrigerant, residual stocks, releases and discarded charge. Dry-delivered external-coil machines do not acquire fictional refrigerant charge. | Manufacturing foreground | 1 kg reference flow |
| acceptance | Electrical safety, leakage and functional acceptance | required | Record actual leak/safety/functional test sequence and rework. Reversible models test declared modes; absorption tests record actual thermal supply; external-coil tests record supplied hot/chilled water. Destructive sampled units are not accepted sale output. | Manufacturing foreground | 1 kg reference flow |
| dispatch | Final protection, packaging and factory release | required | Verify complete delivered sales configuration, including every specified indoor/outdoor module or vehicle-conditioning unit; weigh net equipment, retained charge and packaging separately. Record actual dry/charged release state. | Manufacturing foreground | 1 kg reference flow |
| services | Shared utilities and pollution controls | required | Allocate actual compressed-air, vacuum, cooling-water and effluent/air-control burdens once. External purchased compressed air or supplied test heat is distinct from internally generated utilities. | Manufacturing foreground | 1 kg reference flow |

Each card is one physical exchange. Apply route conditions before collection; missing UUID/quantity never means zero. Extend cards for actual additional alloys, refrigerants, coatings, wastes and emitted species. Cancel internal transfers; do not map a gross generic subassembly to the finished reference product.

### Process: Conditional cabinet, coil and plastic fabrication (`fabrication`)

For actual in-house operations: blank/stamp/bend sheet, cut/bend/expand copper tubes and press fins, or form/join aluminium microchannels; mould housings if granulate enters; degrease, powder-coat and cure actual surfaces. Purchased fabricated parts bypass the corresponding input material and operation.

#### Inputs

##### Product flows

###### Cold-rolled carbon steel sheet for casing (`steel_sheet`)

Conditional in-house material only. Record actual grade, thickness or formulation and constituent concentration, yield and loss. Copper-tube/aluminium-fin and all-aluminium microchannel constructions are alternatives; resin inputs apply only where moulding is performed here. Add each actual additional formulation separately, never substitute a generic material basket.

- Selected flow: Cold-rolled carbon steel sheet for casing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_steel_sheet.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_sheet`
- Sources: `daikin-technology-carbon`

###### Aluminium fin foil (`fin_foil`)

Conditional in-house material only. Record actual grade, thickness or formulation and constituent concentration, yield and loss. Copper-tube/aluminium-fin and all-aluminium microchannel constructions are alternatives; resin inputs apply only where moulding is performed here. Add each actual additional formulation separately, never substitute a generic material basket.

- Selected flow: Aluminium fin foil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fin_foil.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fin_foil`
- Sources: `daikin-technology-carbon`

###### Refrigeration-grade copper tube (`copper_tube`)

Conditional in-house material only. Record actual grade, thickness or formulation and constituent concentration, yield and loss. Copper-tube/aluminium-fin and all-aluminium microchannel constructions are alternatives; resin inputs apply only where moulding is performed here. Add each actual additional formulation separately, never substitute a generic material basket.

- Selected flow: Refrigeration-grade copper tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_copper_tube.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copper_tube`
- Sources: `daikin-technology-carbon`

###### Aluminium multiport microchannel tube (`microchannel`)

Conditional in-house material only. Record actual grade, thickness or formulation and constituent concentration, yield and loss. Copper-tube/aluminium-fin and all-aluminium microchannel constructions are alternatives; resin inputs apply only where moulding is performed here. Add each actual additional formulation separately, never substitute a generic material basket.

- Selected flow: Aluminium multiport microchannel tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_microchannel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microchannel`
- Sources: `daikin-technology-carbon`

###### Acrylonitrile-butadiene-styrene granulate (`abs_resin`)

Conditional in-house material only. Record actual grade, thickness or formulation and constituent concentration, yield and loss. Copper-tube/aluminium-fin and all-aluminium microchannel constructions are alternatives; resin inputs apply only where moulding is performed here. Add each actual additional formulation separately, never substitute a generic material basket.

- Selected flow: Acrylonitrile-butadiene-styrene granulate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_abs_resin.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_abs_resin`
- Sources: `daikin-technology-carbon`

###### Polypropylene granulate (`pp_resin`)

Conditional in-house material only. Record actual grade, thickness or formulation and constituent concentration, yield and loss. Copper-tube/aluminium-fin and all-aluminium microchannel constructions are alternatives; resin inputs apply only where moulding is performed here. Add each actual additional formulation separately, never substitute a generic material basket.

- Selected flow: Polypropylene granulate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_pp_resin.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pp_resin`
- Sources: `daikin-technology-carbon`

###### Sheet-forming lubricating oil (`forming_oil`)

Conditional in-house material only. Record actual grade, thickness or formulation and constituent concentration, yield and loss. Copper-tube/aluminium-fin and all-aluminium microchannel constructions are alternatives; resin inputs apply only where moulding is performed here. Add each actual additional formulation separately, never substitute a generic material basket.

- Selected flow: Sheet-forming lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_forming_oil.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_oil`
- Sources: `daikin-technology-carbon`

###### Sodium hydroxide degreasing solution (`degreaser`)

Conditional in-house material only. Record actual grade, thickness or formulation and constituent concentration, yield and loss. Copper-tube/aluminium-fin and all-aluminium microchannel constructions are alternatives; resin inputs apply only where moulding is performed here. Add each actual additional formulation separately, never substitute a generic material basket.

- Selected flow: Sodium hydroxide degreasing solution
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_degreaser.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_degreaser`
- Sources: `daikin-technology-carbon`

###### Polyester powder coating (`powder_coat`)

Conditional in-house material only. Record actual grade, thickness or formulation and constituent concentration, yield and loss. Copper-tube/aluminium-fin and all-aluminium microchannel constructions are alternatives; resin inputs apply only where moulding is performed here. Add each actual additional formulation separately, never substitute a generic material basket.

- Selected flow: Polyester powder coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_powder_coat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_coat`
- Sources: `daikin-technology-carbon`

###### aluminium sheet (`al_sheet`)

For cabinet/bracket sheet thicker than 0.2 mm where actual grade/state agrees; not the thin fin foil card. Supplier alloy and fabrication upstream burden require matching.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_al_sheet.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_al_sheet`
- Sources: `daikin-technology-carbon`

###### Purchased factory electricity (`fabrication_electricity`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication_electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_electricity`
- Sources:

###### Natural gas for curing and brazing (`natural_gas`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Natural gas for curing and brazing
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_natural_gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas`
- Sources:

###### Stainless steel sheet for absorption vessels (`stainless_sheet`)

Only for actual in-house vessel manufacture; retain specified steel grade and forming/welding operations. Purchased absorption vessels/modules already carry their steel and supplier fabrication.

- Selected flow: Stainless steel sheet for absorption vessels
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_stainless_sheet.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stainless_sheet`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel stamping scrap (`steel_scrap`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Steel stamping scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_steel_scrap.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_scrap`
- Sources:

###### Aluminium fabrication scrap (`al_scrap`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Aluminium fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_al_scrap.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_al_scrap`
- Sources:

###### Copper tube fabrication scrap (`cu_scrap`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Copper tube fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_cu_scrap.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cu_scrap`
- Sources:

###### ABS moulding scrap (`abs_scrap`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: ABS moulding scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_abs_scrap.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_abs_scrap`
- Sources:

###### Polypropylene moulding scrap (`pp_scrap`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Polypropylene moulding scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_pp_scrap.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pp_scrap`
- Sources:

###### Waste polyester coating powder (`waste_powder`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Waste polyester coating powder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_waste_powder.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_powder`
- Sources:

###### Spent sodium hydroxide degreasing liquor (`spent_degreaser`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Spent sodium hydroxide degreasing liquor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_spent_degreaser.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spent_degreaser`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air from curing fuel (`co2_cure`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Carbon dioxide, fossil, to air from curing fuel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_co2_cure.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co2_cure`
- Sources:

###### Carbon monoxide, to air (`fabrication_co`)

When the actual combustion, welding or finishing operation produces this measured post-control release; no assumed factory emission factor or fixed route.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication_co.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_co`
- Sources:

###### Nitrogen oxides, as NO2, to air (`fabrication_nox`)

When the actual combustion, welding or finishing operation produces this measured post-control release; no assumed factory emission factor or fixed route.

- Selected flow: Nitrogen oxides, as NO2, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication_nox.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_nox`
- Sources:

###### Particulate matter smaller than 2.5 micrometres, to air (`fabrication_pm`)

When the actual combustion, welding or finishing operation produces this measured post-control release; no assumed factory emission factor or fixed route.

- Selected flow: Particulate matter smaller than 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication_pm.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_pm`
- Sources:

### Process: Mechanical, electrical and fluid-circuit assembly (`assembly`)

Fit actual fan, drive, compressor or absorption module, coils, valves, sensors and controls; connect tubing by actual brazing/welding/mechanical joining; preserve serial/module configuration. Reversibility adds actual reversing valve and controls.

#### Inputs

##### Product flows

###### Hermetic refrigeration compressor (`compressor`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Hermetic refrigeration compressor `a2a3427c-5d93-494b-a1fd-bcab42fea432`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_compressor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_compressor`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Vehicle air-conditioning open-drive compressor (`open_compressor`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Vehicle air-conditioning open-drive compressor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_open_compressor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_open_compressor`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Air-conditioner fan electric motor (`fan_motor`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Air-conditioner fan electric motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fan_motor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fan_motor`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Air-conditioner fan impeller (`fan_impeller`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Air-conditioner fan impeller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fan_impeller.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fan_impeller`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Populated air-conditioner control circuit board (`pcba`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Populated air-conditioner control circuit board
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_pcba.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pcba`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Air-conditioner inverter drive module (`inverter`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Air-conditioner inverter drive module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_inverter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inverter`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Air-conditioner temperature sensor (`sensor`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Air-conditioner temperature sensor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_sensor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sensor`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Purchased copper-tube aluminium-fin heat exchanger (`copper_coil`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Purchased copper-tube aluminium-fin heat exchanger
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_copper_coil.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copper_coil`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Purchased aluminium microchannel heat exchanger (`al_coil`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Purchased aluminium microchannel heat exchanger
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_al_coil.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_al_coil`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Purchased chilled-water air-conditioning coil (`external_coil`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Purchased chilled-water air-conditioning coil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_external_coil.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_external_coil`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Four-way refrigerant reversing valve (`reversing_valve`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Four-way refrigerant reversing valve
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_reversing_valve.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reversing_valve`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Refrigerant expansion valve (`expansion_valve`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Refrigerant expansion valve
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_expansion_valve.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_expansion_valve`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Refrigerant circuit filter-drier (`filter_drier`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Refrigerant circuit filter-drier
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_filter_drier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filter_drier`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Purchased ammonia-water absorption cooling module (`absorption_module`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Purchased ammonia-water absorption cooling module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_absorption_module.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_absorption_module`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Purchased lithium-bromide-water absorption cooling module (`libr_module`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Purchased lithium-bromide-water absorption cooling module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_libr_module.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_libr_module`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Absorption-cycle solution pump (`abs_pump`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Absorption-cycle solution pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_abs_pump.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_abs_pump`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Stainless steel absorption generator vessel (`abs_vessel`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Stainless steel absorption generator vessel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_abs_vessel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_abs_vessel`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Copper insulated wiring harness (`wiring`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Copper insulated wiring harness
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_wiring.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wiring`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Steel assembly screw (`screw`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Steel assembly screw
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_screw.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_screw`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Closed-cell elastomeric pipe insulation (`insulation`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Closed-cell elastomeric pipe insulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_insulation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_insulation`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Copper-phosphorus brazing filler alloy (`braze_cu`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Copper-phosphorus brazing filler alloy
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_braze_cu.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_braze_cu`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Aluminium-silicon brazing filler alloy (`braze_al`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Aluminium-silicon brazing filler alloy
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_braze_al.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_braze_al`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Potassium fluoroaluminate brazing flux (`flux`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Potassium fluoroaluminate brazing flux
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_flux.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flux`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Oxygen gas for brazing (`oxygen`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Oxygen gas for brazing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_oxygen.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_oxygen`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Acetylene gas for brazing (`acetylene`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Acetylene gas for brazing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_acetylene.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acetylene`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Polyol ester compressor lubricating oil (`poe_oil`)

Use only for the actual model/route. Purchased modules/coils include upstream material and manufacture once; omit their embedded constituent inputs here. If fabricated here, replace the purchased item by its actual constituent rows and operations. Reversing valve applies only to reversible circuits; compressor alternatives apply only to matching drive/state. Compressor flow is CN at-plant identity; no mass-share estimate from its comment is adopted. Absorption modules are alternatives to compression, not an additional compressor requirement. Oils already in purchased compressors are not charged again.

- Selected flow: Polyol ester compressor lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_poe_oil.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_poe_oil`
- Sources: `daikin-technology-carbon`; `doe-hvac-2011`

###### Purchased factory electricity (`assembly_electricity`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly_electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_electricity`
- Sources:

###### Purchased hot-water air-conditioning coil (`hot_water_coil`)

Only when incorporated or consumed in the declared conditioning/absorption route. Purchased module constituent masses are not repeated as external supplies; retain actual grade and make/buy scope.

- Selected flow: Purchased hot-water air-conditioning coil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_hot_water_coil.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_water_coil`
- Sources:

###### Stainless steel absorption absorber vessel (`absorber`)

Only when incorporated or consumed in the declared conditioning/absorption route. Purchased module constituent masses are not repeated as external supplies; retain actual grade and make/buy scope.

- Selected flow: Stainless steel absorption absorber vessel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_absorber.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_absorber`
- Sources:

###### Air-conditioner electric resistance heating element (`electric_heater`)

Only when incorporated or consumed in the declared conditioning/absorption route. Purchased module constituent masses are not repeated as external supplies; retain actual grade and make/buy scope.

- Selected flow: Air-conditioner electric resistance heating element
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_electric_heater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electric_heater`
- Sources:

###### Air-conditioner water humidifier reservoir (`humidifier`)

Only when incorporated or consumed in the declared conditioning/absorption route. Purchased module constituent masses are not repeated as external supplies; retain actual grade and make/buy scope.

- Selected flow: Air-conditioner water humidifier reservoir
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_humidifier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_humidifier`
- Sources:

###### Air-conditioner particulate air-filter cartridge (`air_filter`)

Only when incorporated or consumed in the declared conditioning/absorption route. Purchased module constituent masses are not repeated as external supplies; retain actual grade and make/buy scope.

- Selected flow: Air-conditioner particulate air-filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_air_filter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_filter`
- Sources:

###### Stainless steel welding filler wire (`weld_wire`)

Only when incorporated or consumed in the declared conditioning/absorption route. Purchased module constituent masses are not repeated as external supplies; retain actual grade and make/buy scope.

- Selected flow: Stainless steel welding filler wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_weld_wire.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weld_wire`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent potassium fluoroaluminate brazing residue (`braze_residue`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Spent potassium fluoroaluminate brazing residue
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_braze_residue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_braze_residue`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air from brazing (`co2_braze`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Carbon dioxide, fossil, to air from brazing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_co2_braze.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co2_braze`
- Sources:

###### Carbon monoxide, to air (`assembly_co`)

When the actual combustion, welding or finishing operation produces this measured post-control release; no assumed factory emission factor or fixed route.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly_co.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_co`
- Sources:

###### Nitrogen oxides, as NO2, to air (`assembly_nox`)

When the actual combustion, welding or finishing operation produces this measured post-control release; no assumed factory emission factor or fixed route.

- Selected flow: Nitrogen oxides, as NO2, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly_nox.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_nox`
- Sources:

###### Particulate matter smaller than 2.5 micrometres, to air (`assembly_pm`)

When the actual combustion, welding or finishing operation produces this measured post-control release; no assumed factory emission factor or fixed route.

- Selected flow: Particulate matter smaller than 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly_pm.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_pm`
- Sources:

### Process: Circuit evacuation, pressure testing and factory charging (`charge`)

For actual sealed refrigeration/absorption circuits: record test gas, evacuation, charge, captured refrigerant, residual stocks, releases and discarded charge. Dry-delivered external-coil machines do not acquire fictional refrigerant charge.

#### Inputs

##### Product flows

###### Nitrogen gas for pressure test and brazing purge (`nitrogen`)

For the declared circuit only; R-32, R410A, R-290, R-1234yf, ammonia-water and lithium-bromide-water routes are distinct, not simultaneous defaults. Additional actual refrigerants require separate species/blend-specific cards. Nitrogen is purchased product gas, not atmospheric nitrogen or N2O. R410A identity has CN at-plant manufacture/test interface; other locations need a matching provider or disclosed substitution.

- Selected flow: Nitrogen gas for pressure test and brazing purge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_nitrogen.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nitrogen`
- Sources: `ipcc-ods-2006`; `doe-hvac-2011`

###### Difluoromethane refrigerant R-32 (`r32`)

For the declared circuit only; R-32, R410A, R-290, R-1234yf, ammonia-water and lithium-bromide-water routes are distinct, not simultaneous defaults. Additional actual refrigerants require separate species/blend-specific cards. Nitrogen is purchased product gas, not atmospheric nitrogen or N2O. R410A identity has CN at-plant manufacture/test interface; other locations need a matching provider or disclosed substitution.

- Selected flow: Difluoromethane refrigerant R-32
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_r32.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_r32`
- Sources: `ipcc-ods-2006`; `doe-hvac-2011`

###### Refrigerant R410A (`r410a`)

For the declared circuit only; R-32, R410A, R-290, R-1234yf, ammonia-water and lithium-bromide-water routes are distinct, not simultaneous defaults. Additional actual refrigerants require separate species/blend-specific cards. Nitrogen is purchased product gas, not atmospheric nitrogen or N2O. R410A identity has CN at-plant manufacture/test interface; other locations need a matching provider or disclosed substitution.

- Selected flow: Refrigerant R410A `7d38fb13-97b6-4c65-a866-0d89444afbe4`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_r410a.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_r410a`
- Sources: `ipcc-ods-2006`; `doe-hvac-2011`

###### Propane refrigerant R-290 (`r290`)

For the declared circuit only; R-32, R410A, R-290, R-1234yf, ammonia-water and lithium-bromide-water routes are distinct, not simultaneous defaults. Additional actual refrigerants require separate species/blend-specific cards. Nitrogen is purchased product gas, not atmospheric nitrogen or N2O. R410A identity has CN at-plant manufacture/test interface; other locations need a matching provider or disclosed substitution.

- Selected flow: Propane refrigerant R-290
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_r290.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_r290`
- Sources: `ipcc-ods-2006`; `doe-hvac-2011`

###### 2,3,3,3-Tetrafluoropropene refrigerant R-1234yf (`r1234yf`)

For the declared circuit only; R-32, R410A, R-290, R-1234yf, ammonia-water and lithium-bromide-water routes are distinct, not simultaneous defaults. Additional actual refrigerants require separate species/blend-specific cards. Nitrogen is purchased product gas, not atmospheric nitrogen or N2O. R410A identity has CN at-plant manufacture/test interface; other locations need a matching provider or disclosed substitution.

- Selected flow: 2,3,3,3-Tetrafluoropropene refrigerant R-1234yf
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_r1234yf.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_r1234yf`
- Sources: `ipcc-ods-2006`; `doe-hvac-2011`

###### Ammonia charge for absorption circuit (`ammonia`)

For the declared circuit only; R-32, R410A, R-290, R-1234yf, ammonia-water and lithium-bromide-water routes are distinct, not simultaneous defaults. Additional actual refrigerants require separate species/blend-specific cards. Nitrogen is purchased product gas, not atmospheric nitrogen or N2O. R410A identity has CN at-plant manufacture/test interface; other locations need a matching provider or disclosed substitution.

- Selected flow: Ammonia charge for absorption circuit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_ammonia.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ammonia`
- Sources: `ipcc-ods-2006`; `doe-hvac-2011`

###### Purified water charge for absorption circuit (`water_charge`)

For the declared circuit only; R-32, R410A, R-290, R-1234yf, ammonia-water and lithium-bromide-water routes are distinct, not simultaneous defaults. Additional actual refrigerants require separate species/blend-specific cards. Nitrogen is purchased product gas, not atmospheric nitrogen or N2O. R410A identity has CN at-plant manufacture/test interface; other locations need a matching provider or disclosed substitution.

- Selected flow: Purified water charge for absorption circuit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_water_charge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_charge`
- Sources: `ipcc-ods-2006`; `doe-hvac-2011`

###### Lithium bromide aqueous absorbent solution (`libr`)

For the declared circuit only; R-32, R410A, R-290, R-1234yf, ammonia-water and lithium-bromide-water routes are distinct, not simultaneous defaults. Additional actual refrigerants require separate species/blend-specific cards. Nitrogen is purchased product gas, not atmospheric nitrogen or N2O. R410A identity has CN at-plant manufacture/test interface; other locations need a matching provider or disclosed substitution.

- Selected flow: Lithium bromide aqueous absorbent solution
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_libr.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_libr`
- Sources: `ipcc-ods-2006`; `doe-hvac-2011`

###### Purchased factory electricity (`charge_electricity`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_charge_electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered reusable R-410A transferred off site (`reclaimed_r410a`)

Only for actual off-site reusable product transfer; internal recovery reuse is a stock movement, not another external virgin input or atmospheric emission. Record legal/product status and provider; no automatic virgin-refrigerant credit.

- Selected flow: Recovered reusable R-410A transferred off site
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_reclaimed_r410a.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reclaimed_r410a`
- Sources: `ipcc-ods-2006`

##### Waste flows

###### Waste difluoromethane refrigerant for external treatment (`waste_r32`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Waste difluoromethane refrigerant for external treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_waste_r32.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_r32`
- Sources: `ipcc-ods-2006`

###### Waste R-410A refrigerant for external treatment (`waste_r410a`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Waste R-410A refrigerant for external treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_waste_r410a.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_r410a`
- Sources: `ipcc-ods-2006`

###### Waste ammonia-water absorption solution (`waste_ammonia`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Waste ammonia-water absorption solution
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_waste_ammonia.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_ammonia`
- Sources: `ipcc-ods-2006`

###### Waste lithium-bromide-water absorption solution (`waste_libr`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Waste lithium-bromide-water absorption solution
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_waste_libr.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_libr`
- Sources: `ipcc-ods-2006`

##### Elementary flows

###### Difluoromethane (HFC-32), to air (`r32_release`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Difluoromethane (HFC-32), to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_r32_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_r32_release`
- Sources: `ipcc-ods-2006`

###### R-410A refrigerant blend, to air (`r410a_release`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: R-410A refrigerant blend, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_r410a_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_r410a_release`
- Sources: `ipcc-ods-2006`

###### Propane, to air (`propane_release`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Propane, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_propane_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_propane_release`
- Sources: `ipcc-ods-2006`

###### 2,3,3,3-Tetrafluoropropene, to air (`yf_release`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: 2,3,3,3-Tetrafluoropropene, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_yf_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yf_release`
- Sources: `ipcc-ods-2006`

###### Ammonia, to air (`ammonia_release`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_ammonia_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ammonia_release`
- Sources: `ipcc-ods-2006`

### Process: Electrical safety, leakage and functional acceptance (`acceptance`)

Record actual leak/safety/functional test sequence and rework. Reversible models test declared modes; absorption tests record actual thermal supply; external-coil tests record supplied hot/chilled water. Destructive sampled units are not accepted sale output.

#### Inputs

##### Product flows

###### Purchased factory electricity (`acceptance_electricity`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_acceptance_electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance_electricity`
- Sources:

###### Purchased steam for absorption acceptance test (`steam`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Purchased steam for absorption acceptance test
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_steam.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources:

###### Purchased water for external-coil acceptance test (`test_water`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Purchased water for external-coil acceptance test
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_water`
- Sources:

###### Purchased heat for thermal acceptance test (`test_heat`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Purchased heat for thermal acceptance test
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_heat`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Rejected air-conditioner destructive-test carcass (`destructive_sample`)

Weigh sampled/rejected dry carcass sent to treatment after recovery. Captured charge remains in stock or its own external waste/product card; it is not an atmospheric emission by default. Keep repeated testing/material burdens in accepted production.

- Selected flow: Rejected air-conditioner destructive-test carcass
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_destructive_sample.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_destructive_sample`
- Sources:

##### Elementary flows

### Process: Final protection, packaging and factory release (`dispatch`)

Verify complete delivered sales configuration, including every specified indoor/outdoor module or vehicle-conditioning unit; weigh net equipment, retained charge and packaging separately. Record actual dry/charged release state.

#### Inputs

##### Product flows

###### Purchased factory electricity (`dispatch_electricity`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_dispatch_electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_electricity`
- Sources:

###### Corrugated board transport box (`box`)

Record actual delivered packaging mass separately from net machine mass. Reusable pallets need a documented reuse/treatment convention, not an invented reuse count.

- Selected flow: Corrugated board transport box
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_box.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_box`
- Sources:

###### Expanded polystyrene packaging cushion (`eps`)

Record actual delivered packaging mass separately from net machine mass. Reusable pallets need a documented reuse/treatment convention, not an invented reuse count.

- Selected flow: Expanded polystyrene packaging cushion
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_eps.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eps`
- Sources:

###### Polyethylene packaging film (`pe_film`)

Record actual delivered packaging mass separately from net machine mass. Reusable pallets need a documented reuse/treatment convention, not an invented reuse count.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_pe_film.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pe_film`
- Sources:

###### Wooden transport pallet (`pallet`)

Record actual delivered packaging mass separately from net machine mass. Reusable pallets need a documented reuse/treatment convention, not an invented reuse count.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_pallet.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pallet`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete air-conditioning machine (`reference_product`)

One accepted sales configuration, not every internal coil or module counted again as a full machine. Reference net mass M includes every delivered module and retained charge; packaging is separate.

- Selected flow: Accepted complete air-conditioning machine
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `wco-hs84-2022`

##### Waste flows

##### Elementary flows

### Process: Shared utilities and pollution controls (`services`)

Allocate actual compressed-air, vacuum, cooling-water and effluent/air-control burdens once. External purchased compressed air or supplied test heat is distinct from internally generated utilities.

#### Inputs

##### Product flows

###### Purchased factory electricity (`services_electricity`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_services_electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services_electricity`
- Sources:

###### Purchased industrial process water (`water`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Purchased industrial process water
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources:

###### Purchased compressed air (`air`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Purchased compressed air
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources:

###### Vacuum-pump lubricating oil (`oil`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Vacuum-pump lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_oil.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_oil`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Industrial wastewater transferred to treatment (`ww`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Industrial wastewater transferred to treatment
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_ww.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ww`
- Sources:

###### Metal-bearing wastewater-treatment sludge (`sludge`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Metal-bearing wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_sludge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sludge`
- Sources:

###### Spent vacuum-pump lubricating oil (`spent_oil`)

Include only when this specific exchange crosses the declared factory/process boundary; record route absence separately from missing data.

- Selected flow: Spent vacuum-pump lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_spent_oil.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spent_oil`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_driver | shared utilities | Subdivide metered processes first. Allocate shared services by documented physical causality: actual machine time/load, test-bench energy/time and processed material when demonstrated. Capacity ratings or finished mass alone do not prove causality. If other allocation is necessary justify it and test sensitivity; allocations sum to observed totals. | `ef-allocation-2021` |
| recovery_and_rework | charge; fabrication; acceptance | Keep rework and retest energy/materials in accepted-output burden. Internal refrigerant recovery reduces fresh demand through inventory balance, not negative virgin production; separately identify external reusable product and hazardous waste. Scrap sales alone do not establish co-product status or avoided-material credit. Apply the declared recycling treatment once. | `ef-allocation-2021`; `ipcc-ods-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | measurement_record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | Each accepted configuration | Matched reporting period | All declared delivered modules at selected factory gate | accepted net mass per machine | Calibration; net weighing; module/charge reconciliation; acceptance record |
| cp_steel_sheet | fabrication | steel_sheet | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_fin_foil | fabrication | fin_foil | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_copper_tube | fabrication | copper_tube | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_microchannel | fabrication | microchannel | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_abs_resin | fabrication | abs_resin | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_pp_resin | fabrication | pp_resin | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_forming_oil | fabrication | forming_oil | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_degreaser | fabrication | degreaser | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_powder_coat | fabrication | powder_coat | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_al_sheet | fabrication | al_sheet | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_steel_scrap | fabrication | steel_scrap | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_al_scrap | fabrication | al_scrap | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_cu_scrap | fabrication | cu_scrap | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_abs_scrap | fabrication | abs_scrap | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_pp_scrap | fabrication | pp_scrap | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_waste_powder | fabrication | waste_powder | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_spent_degreaser | fabrication | spent_degreaser | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_compressor | assembly | compressor | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_open_compressor | assembly | open_compressor | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_fan_motor | assembly | fan_motor | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_fan_impeller | assembly | fan_impeller | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_pcba | assembly | pcba | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_inverter | assembly | inverter | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_sensor | assembly | sensor | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_copper_coil | assembly | copper_coil | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_al_coil | assembly | al_coil | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_external_coil | assembly | external_coil | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_reversing_valve | assembly | reversing_valve | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_expansion_valve | assembly | expansion_valve | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_filter_drier | assembly | filter_drier | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_absorption_module | assembly | absorption_module | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_libr_module | assembly | libr_module | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_abs_pump | assembly | abs_pump | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_abs_vessel | assembly | abs_vessel | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_wiring | assembly | wiring | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_screw | assembly | screw | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_insulation | assembly | insulation | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_braze_cu | assembly | braze_cu | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_braze_al | assembly | braze_al | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_flux | assembly | flux | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_oxygen | assembly | oxygen | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_acetylene | assembly | acetylene | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_poe_oil | assembly | poe_oil | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_braze_residue | assembly | braze_residue | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_co2_braze | assembly | co2_braze | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Use measured fuel consumption and verified carbon content or matching exhaust monitoring; record acetylene combustion separately from any purchased fuel supply upstream burdens. No default combustion factor. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_nitrogen | charge | nitrogen | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Weigh charging cylinders and calibrated dispensers; retain actual model/species/blend formulation, charge retained at release, recovered stock, destructive sample/reject content and external transfers. Match opening/closing stocks and document unexplained balance residual and uncertainty; no assumed charge or loss rate. Purchased precharged modules retain supplier charge without a repeated fresh-charge input. Purchased lithium bromide solution includes its solvent water; the purified-water card is only separately supplied refrigerant or dilution water. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_r32 | charge | r32 | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Weigh charging cylinders and calibrated dispensers; retain actual model/species/blend formulation, charge retained at release, recovered stock, destructive sample/reject content and external transfers. Match opening/closing stocks and document unexplained balance residual and uncertainty; no assumed charge or loss rate. Purchased precharged modules retain supplier charge without a repeated fresh-charge input. Purchased lithium bromide solution includes its solvent water; the purified-water card is only separately supplied refrigerant or dilution water. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_r410a | charge | r410a | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Weigh charging cylinders and calibrated dispensers; retain actual model/species/blend formulation, charge retained at release, recovered stock, destructive sample/reject content and external transfers. Match opening/closing stocks and document unexplained balance residual and uncertainty; no assumed charge or loss rate. Purchased precharged modules retain supplier charge without a repeated fresh-charge input. Purchased lithium bromide solution includes its solvent water; the purified-water card is only separately supplied refrigerant or dilution water. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_r290 | charge | r290 | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Weigh charging cylinders and calibrated dispensers; retain actual model/species/blend formulation, charge retained at release, recovered stock, destructive sample/reject content and external transfers. Match opening/closing stocks and document unexplained balance residual and uncertainty; no assumed charge or loss rate. Purchased precharged modules retain supplier charge without a repeated fresh-charge input. Purchased lithium bromide solution includes its solvent water; the purified-water card is only separately supplied refrigerant or dilution water. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_r1234yf | charge | r1234yf | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Weigh charging cylinders and calibrated dispensers; retain actual model/species/blend formulation, charge retained at release, recovered stock, destructive sample/reject content and external transfers. Match opening/closing stocks and document unexplained balance residual and uncertainty; no assumed charge or loss rate. Purchased precharged modules retain supplier charge without a repeated fresh-charge input. Purchased lithium bromide solution includes its solvent water; the purified-water card is only separately supplied refrigerant or dilution water. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_ammonia | charge | ammonia | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Weigh charging cylinders and calibrated dispensers; retain actual model/species/blend formulation, charge retained at release, recovered stock, destructive sample/reject content and external transfers. Match opening/closing stocks and document unexplained balance residual and uncertainty; no assumed charge or loss rate. Purchased precharged modules retain supplier charge without a repeated fresh-charge input. Purchased lithium bromide solution includes its solvent water; the purified-water card is only separately supplied refrigerant or dilution water. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_water_charge | charge | water_charge | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Weigh charging cylinders and calibrated dispensers; retain actual model/species/blend formulation, charge retained at release, recovered stock, destructive sample/reject content and external transfers. Match opening/closing stocks and document unexplained balance residual and uncertainty; no assumed charge or loss rate. Purchased precharged modules retain supplier charge without a repeated fresh-charge input. Purchased lithium bromide solution includes its solvent water; the purified-water card is only separately supplied refrigerant or dilution water. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_libr | charge | libr | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Weigh charging cylinders and calibrated dispensers; retain actual model/species/blend formulation, charge retained at release, recovered stock, destructive sample/reject content and external transfers. Match opening/closing stocks and document unexplained balance residual and uncertainty; no assumed charge or loss rate. Purchased precharged modules retain supplier charge without a repeated fresh-charge input. Purchased lithium bromide solution includes its solvent water; the purified-water card is only separately supplied refrigerant or dilution water. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_r32_release | charge | r32_release | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Measure captured/uncontained release or use closed species-specific stock/charge balance; avoid counting retained delivered charge, returned recovery stock and discarded trapped refrigerant as atmospheric loss. R410A may be resolved as the actual blend or separately measured constituent emissions, never both; confirm fractionation before speciation. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_r410a_release | charge | r410a_release | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Measure captured/uncontained release or use closed species-specific stock/charge balance; avoid counting retained delivered charge, returned recovery stock and discarded trapped refrigerant as atmospheric loss. R410A may be resolved as the actual blend or separately measured constituent emissions, never both; confirm fractionation before speciation. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_propane_release | charge | propane_release | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Measure captured/uncontained release or use closed species-specific stock/charge balance; avoid counting retained delivered charge, returned recovery stock and discarded trapped refrigerant as atmospheric loss. R410A may be resolved as the actual blend or separately measured constituent emissions, never both; confirm fractionation before speciation. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_yf_release | charge | yf_release | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Measure captured/uncontained release or use closed species-specific stock/charge balance; avoid counting retained delivered charge, returned recovery stock and discarded trapped refrigerant as atmospheric loss. R410A may be resolved as the actual blend or separately measured constituent emissions, never both; confirm fractionation before speciation. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_ammonia_release | charge | ammonia_release | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Measure captured/uncontained release or use closed species-specific stock/charge balance; avoid counting retained delivered charge, returned recovery stock and discarded trapped refrigerant as atmospheric loss. R410A may be resolved as the actual blend or separately measured constituent emissions, never both; confirm fractionation before speciation. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_waste_r32 | charge | waste_r32 | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_waste_r410a | charge | waste_r410a | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_waste_ammonia | charge | waste_ammonia | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_waste_libr | charge | waste_libr | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_reclaimed_r410a | charge | reclaimed_r410a | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_fabrication_electricity | fabrication | fabrication_electricity | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Read process/test submeter and reconcile with purchased site energy; allocate shared vacuum/air/compressor loads by measured runtime/load. Preserve voltage, region, year and supply/consumption interface; test energy is actual measured energy, never rated cooling capacity multiplied by duration. | kWh | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_assembly_electricity | assembly | assembly_electricity | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Read process/test submeter and reconcile with purchased site energy; allocate shared vacuum/air/compressor loads by measured runtime/load. Preserve voltage, region, year and supply/consumption interface; test energy is actual measured energy, never rated cooling capacity multiplied by duration. | kWh | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_charge_electricity | charge | charge_electricity | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Read process/test submeter and reconcile with purchased site energy; allocate shared vacuum/air/compressor loads by measured runtime/load. Preserve voltage, region, year and supply/consumption interface; test energy is actual measured energy, never rated cooling capacity multiplied by duration. | kWh | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_acceptance_electricity | acceptance | acceptance_electricity | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Read process/test submeter and reconcile with purchased site energy; allocate shared vacuum/air/compressor loads by measured runtime/load. Preserve voltage, region, year and supply/consumption interface; test energy is actual measured energy, never rated cooling capacity multiplied by duration. | kWh | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_dispatch_electricity | dispatch | dispatch_electricity | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Read process/test submeter and reconcile with purchased site energy; allocate shared vacuum/air/compressor loads by measured runtime/load. Preserve voltage, region, year and supply/consumption interface; test energy is actual measured energy, never rated cooling capacity multiplied by duration. | kWh | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_services_electricity | services | services_electricity | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Read process/test submeter and reconcile with purchased site energy; allocate shared vacuum/air/compressor loads by measured runtime/load. Preserve voltage, region, year and supply/consumption interface; test energy is actual measured energy, never rated cooling capacity multiplied by duration. | kWh | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_natural_gas | fabrication | natural_gas | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Meter actual gas, record temperature/pressure and measured net calorific value; preserve combustible chemical identity and no prescribed fuel route. | MJ | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_co2_cure | fabrication | co2_cure | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Use matched measured fuel carbon balance or exhaust monitoring; do not import upstream combustion from purchased electricity. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_steam | acceptance | steam | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Measure steam delivered to actual test bench and condensate return; calculate net enthalpy transfer at measured pressure/temperature. Exclude installed lifetime thermal demand. | MJ | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_test_water | acceptance | test_water | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Meter fresh makeup only; record inlet/outlet conditions and separately attributable chiller/boiler energy, without treating recirculated water as repeated external input. | m3 | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_test_heat | acceptance | test_heat | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Measure net actual heat transfer and provider boundary; use instead of the steam card where that is the purchased interface. Never record both for the same thermal delivery. | MJ | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_destructive_sample | acceptance | destructive_sample | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_box | dispatch | box | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_eps | dispatch | eps | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_pe_film | dispatch | pe_film | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_pallet | dispatch | pallet | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_water | services | water | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Meter external makeup to fabrication rinsing/cooling, reject recirculation counts and reconcile storage, discharge, evaporation and carryover. | m3 | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_air | services | air | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Record external supplier meter at stated reference pressure/temperature; internal compressor electricity is not an additional purchased compressed-air flow. | m3 | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_ww | services | ww | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Meter transferred volume by destination; analyse pH, oil and metal content; distinguish off-site treatment from actual on-site treated discharge. | m3 | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_sludge | services | sludge | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Weigh wet sludge, measure moisture and metal/oil composition and destination; no assumed dry fraction. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_spent_oil | services | spent_oil | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_oil | services | oil | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_stainless_sheet | fabrication | stainless_sheet | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_hot_water_coil | assembly | hot_water_coil | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_absorber | assembly | absorber | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_electric_heater | assembly | electric_heater | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_humidifier | assembly | humidifier | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_air_filter | assembly | air_filter | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_weld_wire | assembly | weld_wire | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Calibrated lot weighing and stock reconciliation linked to model/BOM, accepted output and actual make/buy route; separate process scrap and returned stock. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_fabrication_co | fabrication | fabrication_co | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Retain matched emission concentration, exhaust flow, species/fraction, capture/control performance and actual operating hours; quantify stack and fugitive releases separately. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_fabrication_nox | fabrication | fabrication_nox | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Retain matched emission concentration, exhaust flow, species/fraction, capture/control performance and actual operating hours; quantify stack and fugitive releases separately. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_fabrication_pm | fabrication | fabrication_pm | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Retain matched emission concentration, exhaust flow, species/fraction, capture/control performance and actual operating hours; quantify stack and fugitive releases separately. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_assembly_co | assembly | assembly_co | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Retain matched emission concentration, exhaust flow, species/fraction, capture/control performance and actual operating hours; quantify stack and fugitive releases separately. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_assembly_nox | assembly | assembly_nox | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Retain matched emission concentration, exhaust flow, species/fraction, capture/control performance and actual operating hours; quantify stack and fugitive releases separately. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |
| cp_assembly_pm | assembly | assembly_pm | measurement_record | site; period; model; batch; raw amount/unit; opening/closing stock; route; meter or scale; allocation; accepted machine count; configuration M | Retain matched emission concentration, exhaust flow, species/fraction, capture/control performance and actual operating hours; quantify stack and fugitive releases separately. | kg | Each lot or meter interval; monthly balance | Full year or justified representative campaign including rework | Selected factory and matched delivered configuration | attributable amount / accepted machines | Original measurements; calibration; BOM; stocks; acceptance and destination; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

The reference output directly declares 1 kg and needs no additional conversion. Collect each non-reference exchange per accepted complete configuration; retain raw amounts and accepted counts including attributable rework and sampling. Record actual working-pair concentration and species-specific stocks. Opening inventory plus receipts equals closing inventory plus charge retained in accepted output, trapped sample/reject charge, external transfers and actual losses. Internal recovered return cancels on both sides; any unexplained residual retains measurement uncertainty and review status. Gas/reference-volume and enthalpy conversions retain original temperatures, pressures, composition and measurement evidence.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| route_completeness | all processes | Retain model-resolved make/buy matrix, actual material/component/chemical schedule and omitted-operation evidence. Do not extrapolate a compressor model into absorption or no-unit configuration. | BOM; route sheet; supplier scope; module acceptance |
| identity | all exchanges | Resolve exact product/waste/elementary identity, property/unit, provider interface/geography and environmental compartment before complete dataset delivery; candidates remain unresolved where these are unconfirmed. | manifest review_metadata |
| ranges | all quantities | No universal BOM fraction, coil ratio, unit weight, charge, manufacturing loss/GWP, energy/test duration or intensity range is supplied. Collect actual site/model evidence; distinguish absence, measured zero and unknown. | Weighing; meters; calibrated charging; stocks; uncertainty |
| charge_disclosure | charge; dispatch | Specify refrigerant or absorbent identity, actual retained charge and recovery disposition for every delivered module, including dry-shipped state. Blend emission identity must match measurement, not nominal supplier composition alone. | Charge log; speciation; release/destination records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_check | reference_product | M must be positive calibrated net mass for exactly the declared delivered configuration; kg normalization, per-unit BOM/test records and all module/charge quantities share this denominator. Net product excludes packaging, temporary test media and destructive rejects. |  |
| no_double_count | all inventory rows | Check make/buy exclusivity, compressor motor/oil inclusions, internal transfers/recovery, accepted versus rejected counts, repeated tests and energy meter coverage. Purchased heat/steam and externally generated compressed air cannot duplicate the same supply. No use-stage electricity or leakage appears in factory totals. |  |
| balance_check | charge; fabrication; services | Reconcile species charge, material scrap, water and accepted mass balances with measurement uncertainty. Charge retained in equipment is not an elementary air release; external waste or recovered product is not release by default. Investigate unknown residuals and missing identity; never fill with an unverified default leak rate, GWP or zero. | `ipcc-ods-2006` |
| scope_check | all processes | Verify technology and conditioning function independently from capacity labels. Distinct vehicle, reversible, absorption and no-refrigeration-unit forms require their actual BOM/test/charge conditions and source limitations; equal kg does not demonstrate equivalent cooling service. | `wco-hs84-2022`; `doe-hvac-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Model declared factory-gate equipment production and downstream process/lifecyclemodel projections with actual supplier links |
| excluded_use | Cooling/heating service comparison, operating lifetime electricity/leakage, installation or end-of-life without separate scenario evidence |
| required_metadata | model and delivered module schedule; stationary or vehicle application; conditioning function and fan; refrigeration-unit presence; vapour-compression, absorption or external-coil technology; cooling-only or reversible; compressor drive and inverter; coil materials and construction; rated cooling/heating capacity and test standard; refrigerant identity, blend composition and actual factory retained charge; dry or charged delivery; net mass M; declared factory starting state; make/buy boundary; factory geography, supply voltage and reference period; packaging schedule |
| required_quality_disclosure | BOM/make-buy coverage; supplier interface; measured M/charge; tests and allocations; missing identities; balances/uncertainty; source limitations |
| update_trigger | Changed model/modules, coil route, working fluid, charge/drive, suppliers, factory boundary or measured production data |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025, subclasses 43912, 43913 and 43941. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Current classification labels and neighbouring equipment/parts boundaries; structure alone supplies no manufacturing intensity or full explanatory scope. |
| unsd-cpc21-correspondence | official_guidance | UNSD, CPC Version 2.1 subclass 43912 classification detail, HS 2012/2017 correspondence, retrieved 2 October 2026. https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/43912 | Historical same-named subclass corresponds to 841510, 841520, 841581, 841582 and 841583. Historical correspondence is supporting context, not a claim of a verified CPC3-to-HS2022 correspondence table. |
| wco-hs84-2022 | official_guidance | WCO, HS Nomenclature 2022 Chapter 84, PDF pages 7-8, headings 8415 and 8418. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1684_2022e.pdf | Fan plus temperature/humidity conditioning boundary; stationary/split, vehicle, reversible and no-refrigerating-unit forms; excludes parts and heat pumps other than air-conditioning machines. No numerical production defaults. |
| doe-hvac-2011 | official_guidance | US DOE, Energy Savings Potential and RD&D Opportunities for Commercial Building HVAC Systems, September 2011, Appendix B.1 Advanced Absorption Pairs, printed page 183 / PDF page 199. https://www.energy.gov/sites/prod/files/2014/07/f17/commercial_hvac_research_opportunities.pdf | Heat-driven absorption and ammonia-water/water-lithium-bromide working pairs. Commercial HVAC research report; heat sources describe operation, not mandatory manufacturing energy inputs; no numerical energy savings adopted. |
| daikin-technology-carbon | extension_guidance | Daikin, Challenge for Carbon Neutrality, Energy-Saving Technologies: Motors/Inverters and Refrigerant-Saving Technologies, retrieved 2 October 2026. https://www.daikin.com/about/corporate/tic/technology/carbon | Compressor/fan motor and inverter distinctions; cross-fin and all-aluminium microchannel coil alternatives. Manufacturer examples do not prescribe all products, composition, charge or factory energy. Magnetic cooling discussion is prospective, not demonstrated routine production. |
| ipcc-ods-2006 | official_guidance | IPCC, 2006 Guidelines Volume 3 Chapter 7, section 7.5 Refrigeration and Air Conditioning, manufacturing versus operation/disposal and charge accounting. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/3_Volume3/V3_7_Ch7_ODS_Substitutes.pdf | Separate refrigerant banking and charging losses across lifecycle stages; national default charge/leakage factors are not adopted as plant measurements or QA limits. No GWP factors prescribed. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Subdivision, physical-causality and justified other-relationship allocation hierarchy only; no claim of full PEF conformance. |
