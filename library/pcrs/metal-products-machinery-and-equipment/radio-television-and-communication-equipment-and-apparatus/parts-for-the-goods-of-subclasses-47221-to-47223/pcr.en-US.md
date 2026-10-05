---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47221-to-47223
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Dedicated parts for telephone and wired or wireless network apparatus

## 1. Scope and Applicability

This PCR governs production of a separately delivered genuine dedicated part for a line telephone with cordless handset, cellular/other wireless telephone, or other telephone/network communication apparatus. Determine the delivered article from its drawing, fit/interface, BOM, completion state and remaining assembly; marketing as a spare and host dependence do not establish part identity. Functionality alone does not decide the boundary. [cpc3-telecom; apple-enclosure]

Complete telephone sets, completed replacement cordless handsets, routers, modems and completed communication apparatus remain outside, even if they need registration, a cable, power, software or a host chassis to operate. Panasonic optional handset listings are counterevidence against treating compatibility as proof of incomplete parts. ADP network cards are separately classified; generic ICs, bare PCBs, standalone connectors, microphones, batteries, resin and metal stock are upstream inputs, not output parts under this PCR. [cpc3-telecom; panasonic-handset; census-electronics]

Enclosures, handset constituent shells, shields, mounting pieces, dedicated connector flexes and passive antenna assemblies may qualify when the actual host and dedicated delivered state are demonstrated. Electronic/RF/network modules are not excluded because they contain electronics or lack UUIDs: include only a genuine dedicated incomplete constituent, with actual remaining host assembly documented and a classification review ruling out completed apparatus or a separately classified generic component. Cisco active uplink modules support real modular interfaces but do not themselves prove parts classification; its blank module illustrates host-specific mechanical fit and airflow requirements. [apple-enclosure; apple-connector; taoglas-cellular; cisco-network-module]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47221-to-47223 |
| classification_refs | CPC 3.0 47401 |
| covered_products | Drawing-defined dedicated incomplete parts for qualifying telephone or network hosts; bounded conditional mechanical, polymer, connector, passive antenna and electronic/RF subassembly routes |
| excluded_products | Completed telephone/communication apparatus; ADP network cards; generic separately classified electronic components and material stock |
| representative_product | One drawing/revision-defined telephone enclosure delivered without the host logic board, battery and display; no assumed grade or weight |
| production_route | Actual make/buy route: purchase completed part inputs or fabricate specified mechanical/polymer/electronic constituents; then actual finish, part assembly and acceptance |
| market_state | Accepted separately delivered dedicated part at factory gate; host assembly remains outside |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the specified constituent fit, containment, mounting or electrical/RF interface in the identified host |
| How much | 1 kg of accepted net part of one drawing/revision and delivered state |
| How well | Meet actual drawing tolerances, grade/BOM and specified part acceptance tests; no invented generic RF performance |
| How long or cycle | One production and factory acceptance cycle; no assumed host operating life |
| reference_flow_link | `final_part` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts for the goods of subclasses 47221 to 47223 `bf7766aa-8f63-4869-bd70-2090483f4437` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | host model/function; drawing/part number/revision; delivered completion state; remaining host assembly; classification review; grade/formulation/BOM; make/buy and included operations; test specification; accepted net batch mass; calibration/tare; site/period; supplier and utility interface; waste fate |

All qualifiers must be declared in foreground package metadata or equivalent product/process notes. A mass unit compares the same part specification and state, not functional equivalence of different telecom components.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Collect accepted net part batch mass using cp_mass on calibrated scales, same drawing/revision/BOM/state; exclude transport packaging and non-delivered tooling. Inventory and collection use per 1 kg reference flow. |
| count_mass | counted physical part and material records | Mass | kg | Count records require calibrated measured accepted batch net mass for the identical counted population; do not infer mass from nominal handset weight, housing percentage or an unrelated revision. Divide batch exchanges by that measured accepted kg; individual weighing/count conversion must reproduce the same net batch basis. |
| species_basis | material, chemical, residual and emitted-species mass balances | Mass | kg | Keep gross material and contained-element masses separate; assays must match grade, solution concentration, wet/dry state and sampling period. |
| energy_units | test_power; factory_power; natural_gas | Net calorific value | MJ | Energy stays MJ; calibrated kWh converts by 3.6 MJ/kWh. Gas volume requires supplier calorific value and measured conditions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received certified stock or purchased completed constituent at declared supplier gate and delivery state |
| starting_condition_role | Purchased upstream intermediate/component interface |
| product_classification_scope | Dedicated parts for CPC3 hosts47221–47223; classification of the actual delivered part reviewed independently |
| recursive_input_rule | Treat purchased same-category part as an upstream cut interface with completed operations recorded; do not recursively add its manufacturing again |
| upstream_dataset_requirement | Match physical state/grade, geography/time and supplier gate; include supplier production once, flag absent provider coverage; a product UUID is not an upstream burden dataset |
| disclosure | Delivery state, included/excluded operations, actual route gates, supplier coverage and residual identity/quantity gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_delivery | all processes | Require documented incomplete constituent identity. Host fit alone and absence of stand-alone operation are insufficient; completed apparatus and separately classified components stay outside final output. | `cpc3-telecom`; `panasonic-handset`; `census-electronics` |
| boundary_make_buy | all processes | For every BOM line record make/buy, incoming completion, upstream provider coverage and operations performed here. If bought board/antenna/enclosure already embeds copper, polymer and IC manufacture, do not add embedded inputs or operations again. If made here include actual materials, chemistry, waste and energy. | `apple-enclosure`; `taoglas-cellular` |
| boundary_factory | all processes | Include attributable fabrication, finish, assembly, rework, acceptance testing, utilities, treatment and packing. Factory RF/continuity tests are production; later telephone calls, data traffic, host installation, repair and end-of-life are outside this production package and require separate declared lifecycle stages. | `apple-enclosure`; `cisco-network-module` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_receipt | Receipt and upstream interface | required | Every selected part | foreground | `final_part` |
| p_mechanical | Mechanical forming and machining | conditional | Drawing-specific metal enclosure, shield or mounting member made on site | foreground | `final_part` |
| p_polymer | Polymer molding and trimming | conditional | Drawing-specific polymer enclosure, insert or handset shell made on site | foreground | `final_part` |
| p_electronic | Dedicated electronic or RF subassembly fabrication | conditional | Genuine incomplete dedicated part requiring host integration; actual board/antenna/connector operations performed on site | foreground | `final_part` |
| p_finish | Surface finishing and cleaning | conditional | Actually applied drawing-specified coating, bonding or cleaning | foreground | `final_part` |
| p_assembly | Part assembly and acceptance | required | Actual assembly, dimensional/continuity/RF acceptance as appropriate to delivered part | foreground | `final_part` |
| p_utilities | Utilities and pollution control | required | Attributable actual utilities and treatment; combustion only when present | foreground | `final_part` |
| p_dispatch | Packing and dispatch | required | Accepted net part at supplier gate | reference | `final_part` |

Rows below are atomic route candidates, not a universal BOM or recipe. Apply only the actual certified grade/formulation and delivered interface stated on each card; add a separate named row for every actual different material, component, chemical, fuel, waste or species. Missing UUID does not exclude a genuine route. Record not_applicable only with route evidence; zero, unknown and not_applicable are distinct. Internal process transfers are paired and cancel at the aggregate gate, while their repeated processing remains.

### Process: Receipt and upstream interface (`p_receipt`)

#### Inputs

##### Product flows

###### Drawing-specific molded telephone handset shell (`bought_shell`)

Only when bought complete as this shell; supplier production included once, no average housing-share proxy.

- Selected flow: Drawing-specific molded telephone handset shell
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_bom
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `apple-enclosure`; `protolabs-molding`

###### Host-dedicated populated telephone circuit board subassembly (`bought_board`)

Only when actual dedicated subassembly is purchased; finished-apparatus and generic bare-board classification review still required.

- Selected flow: Host-dedicated populated telephone circuit board subassembly
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_bom
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `cpc3-telecom`

###### Host-dedicated flexible cellular antenna assembly (`bought_antenna`)

Only when host drawing, feed/connector and installed state establish dedicated part status; bought antenna production covered once.

- Selected flow: Host-dedicated flexible cellular antenna assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_bom
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `taoglas-cellular`

###### Drawing-specific telephone USB-C flex connector assembly (`bought_connector`)

Only for a dedicated connector assembly fitted to host drawing; generic standalone connector belongs to its own category.

- Selected flow: Drawing-specific telephone USB-C flex connector assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_bom
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `apple-connector`

### Process: Mechanical forming and machining (`p_mechanical`)

#### Inputs

##### Product flows

###### EN AW-6061 aluminum billet (`aluminum_stock`)

Conditional candidate grade only when actual certificate and drawing match; separately add each other certified grade used.

- Selected flow: EN AW-6061 aluminum billet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `apple-enclosure`

###### C11000 copper strip (`copper_stock`)

Only when actual shield or conductor is formed from certified C11000 strip; do not infer alloy from host identity.

- Selected flow: C11000 copper strip
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cpc3-telecom`

###### Mineral-oil cutting fluid concentrate (`cutting_oil`)

Only when this formulation is used; record concentration, active species, dilution water and supplier formulation.

- Selected flow: Mineral-oil cutting fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_chem
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chem`
- Sources: `apple-enclosure`

#### Outputs

##### Waste flows

###### EN AW-6061 machining scrap (`aluminum_scrap`)

External scrap only; opening/closing scrap and internal remelt transfers remain distinct.

- Selected flow: EN AW-6061 machining scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_residual
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `apple-enclosure`

###### C11000 copper stamping scrap (`copper_scrap`)

When copper route is present; grade and actual treatment provider required.

- Selected flow: C11000 copper stamping scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_residual
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `cpc3-telecom`

### Process: Polymer molding and trimming (`p_polymer`)

#### Inputs

##### Product flows

###### ABS molding resin granulate (`abs_resin`)

Only when exact supplier ABS grade is specified; actual additives, recycled content and drying records required.

- Selected flow: ABS molding resin granulate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `protolabs-molding`

###### PC/ABS molding resin granulate (`pcabs_resin`)

Alternative actual resin route, not additional mandatory resin; retain declared blend/grade and drying/regrind records.

- Selected flow: PC/ABS molding resin granulate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `protolabs-molding`

#### Outputs

##### Waste flows

###### ABS molding reject (`abs_reject`)

When ABS route occurs; do not count internally returned sprues again as external input or waste.

- Selected flow: ABS molding reject
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_residual
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `protolabs-molding`

### Process: Dedicated electronic or RF subassembly fabrication (`p_electronic`)

#### Inputs

##### Product flows

###### Polyimide flexible copper-clad circuit substrate (`bare_flex`)

Only for actual on-site dedicated flex/antenna pattern manufacture; bought completed flex has embedded burden instead.

- Selected flow: Polyimide flexible copper-clad circuit substrate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_bom
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `taoglas-cellular`

###### Packaged radio-frequency integrated circuit (`mounted_ic`)

Only when this purchased package is mounted here in genuine dedicated incomplete telecom subassembly; no mandatory chip fabrication.

- Selected flow: Packaged radio-frequency integrated circuit
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_bom
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `cpc3-telecom`

###### SAC305 solder paste (`solder`)

Actual tin-silver-copper alloy assay and flux fraction; distinguish gross paste from contained Sn,Ag,Cu.

- Selected flow: SAC305 solder paste
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_chem
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chem`
- Sources: `apple-connector`

###### Aqueous ferric chloride etchant (`etchant`)

Only if actual on-site copper etching uses this solution; concentration and bath stock required; no recipe inferred from antenna datasheet.

- Selected flow: Aqueous ferric chloride etchant
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_chem
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chem`
- Sources: `taoglas-cellular`

#### Outputs

##### Waste flows

###### Copper-bearing spent ferric chloride etchant (`etchant_waste`)

Only from this etch route; gross liquid mass and matched copper/iron assay separate, licensed treatment interface.

- Selected flow: Copper-bearing spent ferric chloride etchant
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_residual
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `taoglas-cellular`

### Process: Surface finishing and cleaning (`p_finish`)

#### Inputs

##### Product flows

###### Isopropyl alcohol cleaning solvent (`ipa`)

Only if actual factory cleaning uses IPA; repair-source mention is evidence of solvent identity, not a factory consumption default.

- Selected flow: Isopropyl alcohol cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_chem
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chem`
- Sources: `apple-connector`

###### Acrylic pressure-sensitive adhesive film (`adhesive`)

Only if actual drawing/supplier composition confirms this film; Taoglas adhesive trade name alone cannot establish polymer composition.

- Selected flow: Acrylic pressure-sensitive adhesive film
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_chem
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chem`
- Sources: `taoglas-cellular`

#### Outputs

##### Elementary flows

###### Isopropyl alcohol to air (`ipa_air`)

Measured or species-specific calculated post-control release only; retain recovery and solvent stock changes.

- Selected flow: Isopropyl alcohol to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_emission
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `apple-connector`

### Process: Part assembly and acceptance (`p_assembly`)

#### Inputs

##### Product flows

###### Alternating current (`test_power`)

Only for CN customer-side 1–35 kV grid supply, allocated actual factory acceptance/test consumption; other country/voltage requires matching identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `cpc3-telecom`

### Process: Utilities and pollution control (`p_utilities`)

#### Inputs

##### Product flows

###### Alternating current (`factory_power`)

Same verified CN1–35kV customer interface, excluding test_power already metered; no incineration-specific power substituted as grid supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `protolabs-molding`

###### Industrial process water (`water`)

Actual purchased supply; internal cooling circulation is not repeated purchased input.

- Selected flow: Industrial process water
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `protolabs-molding`

###### Pipeline natural gas (`natural_gas`)

Only actual on-site gas heating/drying; measured volume needs supplier calorific value and conditions; no combustion in electric-only route.

- Selected flow: Pipeline natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `protolabs-molding`

#### Outputs

##### Waste flows

###### Copper-bearing industrial wastewater (`wastewater`)

Only actual aqueous metal route; record separate suspended/dissolved species and receiving treatment; add separate other effluent streams.

- Selected flow: Copper-bearing industrial wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `taoglas-cellular`

###### Copper-bearing wastewater treatment sludge (`sludge`)

Only actual treatment output; wet/dry basis, copper assay and treatment fate required.

- Selected flow: Copper-bearing wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_residual
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `taoglas-cellular`

##### Elementary flows

###### Fossil carbon dioxide to air (`co2`)

Only actual combustion, with fuel carbon and oxidation evidence and separation from upstream purchased electricity.

- Selected flow: Fossil carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_emission
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `protolabs-molding`

###### Carbon monoxide to air (`co`)

Only species-specific actual measured or applicable factor evidence; fuel-carbon balance alone cannot determine CO.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_emission
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `protolabs-molding`

###### Nitrogen dioxide to air (`no2`)

Only evidence identifying NO2 species; aggregate NOx as NO2 equivalent is not automatically pure NO2.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_emission
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `protolabs-molding`

### Process: Packing and dispatch (`p_dispatch`)

#### Inputs

##### Product flows

###### Corrugated cardboard carton (`box`)

Actual outgoing part carton only, separately from accepted part net mass.

- Selected flow: Corrugated cardboard carton
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_pack
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `apple-enclosure`

###### Static-shielding metallized polyethylene bag (`esd_bag`)

Only actual bag for electronic/RF part; composition and supplier coverage required.

- Selected flow: Static-shielding metallized polyethylene bag
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange divided by accepted net part batch mass in kg; cp_pack
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `cisco-network-module`

#### Outputs

##### Product flows

###### Accepted drawing-defined dedicated telephone or network apparatus part (`final_part`)

Exactly the delivered part state and drawing/revision; completed apparatus excluded.

- Selected flow: Parts for the goods of subclasses 47221 to 47223 `bf7766aa-8f63-4869-bd70-2090483f4437`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `cpc3-telecom`; `apple-enclosure`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_causality | shared factory operations | Investigate subdivision/system expansion first. If unavoidable, retain total inventories and choose demonstrated physical causality; use actual molding shot/cavity loading, machining time, reflow loading or measured testing demand as appropriate, not part mass merely because output is kg. Other relationships need justification and sensitivity. | `ef-allocation-2021` |
| allocation_residual | scrap and rework | Do not assume sold scrap is a co-product or avoided-primary-material credit. Disclose selected recycling/treatment allocation, provider and fate; cancel internal regrind/return transfers but retain repeated energy and losses. Rejected parts and retests contribute to the accepted output denominator. | `ef-allocation-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | p_dispatch | accepted net part | foreground_record | drawing; revision; host; delivered state; batch; tare; calibrated accepted net kg; accepted count | Weigh the identical accepted part population on calibrated scales excluding transport packaging; retain traceable batch/count pairing and acceptance record. | kg | each batch and reporting period | same production period and drawing revision | actual site and traceable supplier | per 1 kg reference flow | calibration; traceability; uncertainty; reconciliation |
| cp_bom | p_receipt | purchased constituent | foreground_record | part number; state; make/buy; supplier; provider scope; delivery mass; stock change | Reconcile receipt/issue/BOM and supplier scope with actual drawing; weigh components when counts supplied. | kg | each batch and reporting period | same production period and drawing revision | actual site and traceable supplier | per 1 kg reference flow | calibration; traceability; uncertainty; reconciliation |
| cp_material | p_mechanical | certified stock | foreground_record | grade; formulation; dry basis; batch; received/issued mass; accepted mass; stock | Use calibrated weighbridge or scale and certificate; reconcile scrap/regrind and opening/closing stocks without a fixed yield. | kg | each batch and reporting period | same production period and drawing revision | actual site and traceable supplier | per 1 kg reference flow | calibration; traceability; uncertainty; reconciliation |
| cp_chem | p_finish | specific chemical | foreground_record | species; grade; concentration; active fraction; supplier; weighed consumption; bath stock; reaction; recovery | Reconcile metered additions, assay and stock records; distinguish gross formulation mass from each active chemical. | kg | each batch and reporting period | same production period and drawing revision | actual site and traceable supplier | per 1 kg reference flow | calibration; traceability; uncertainty; reconciliation |
| cp_energy | p_utilities | actual energy interface | foreground_record | meter; voltage; country; provider; process/load; test duration; kWh; fuel volume; calorific value | Submeter actual process/test energy, retain load allocation and supplier interface; convert electricity kWh to MJ and fuel volume using actual conditions and calorific value. | MJ | each batch and reporting period | same production period and drawing revision | actual site and traceable supplier | per 1 kg reference flow | calibration; traceability; uncertainty; reconciliation |
| cp_residual | p_utilities | one residual stream | foreground_record | named stream; wet/dry mass; assay; stocks; return; external destination; treatment provider | Weigh each segregated waste stream and sample its composition; reconcile internal returns independently of outgoing residuals. | kg | each batch and reporting period | same production period and drawing revision | actual site and traceable supplier | per 1 kg reference flow | calibration; traceability; uncertainty; reconciliation |
| cp_water | p_utilities | water and effluent | foreground_record | supply; flowmeter; density; copper species; concentration; volume; stock; evaporation; provider | Use calibrated meters and matching timed concentration samples; distinguish makeup, internal circulation and actual discharge. | kg | each batch and reporting period | same production period and drawing revision | actual site and traceable supplier | per 1 kg reference flow | calibration; traceability; uncertainty; reconciliation |
| cp_emission | p_utilities | one emitted species | foreground_record | species; compartment; control state; flow; concentration; measurement duration; factor scope; stock recovery | Measure post-control discharge or apply a justified species-specific factor with matching activity; retain uncertainty and do not infer CO/NO2 from fuel carbon alone. | kg | each batch and reporting period | same production period and drawing revision | actual site and traceable supplier | per 1 kg reference flow | calibration; traceability; uncertainty; reconciliation |
| cp_pack | p_dispatch | one packing component | foreground_record | carton/bag identity; composition; received/used mass; supplier; return rate | Weigh each actual packing component and reconcile consumed batch packaging; keep it outside reference part net mass. | kg | each batch and reporting period | same production period and drawing revision | actual site and traceable supplier | per 1 kg reference flow | calibration; traceability; uncertainty; reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| batch_normalization | all inventory rows | Divide attributable batch exchange by calibrated accepted net part batch mass in kg; keep original numerator unit and reject nonpositive denominator. Reference output remains 1 kg. | cp_mass; actual batch exchange | exchange per 1 kg reference flow |  |
| energy_conversion | test_power; factory_power | Metered kWh multiplied by 3.6 yields MJ before division by accepted net kg. Preserve actual country/voltage/provider and exclude duplicated test consumption. | cp_energy; cp_mass | MJ per kg |  |
| contained_species | material, chemical, residual and emitted-species mass balances | For each material and chemical use its measured gross amount times matched assay/concentration for contained species; retain opening/closing stocks, reaction retention and actual releases, not a generic common assay. | cp_material; cp_chem; cp_residual; cp_emission | separate species balance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all flows | Actual drawing/interface/state and exact supplier grade; UUID type/property/unit/geography checked before adoption. The category-level flow does not supply drawing, site, supplier, geography or specific part qualifications; collect these explicitly. | drawing; direct-read identity; supplier scope |
| dq_coverage | all processes | Route ledger records included, not_applicable, zero and unknown separately; candidate source examples establish no universal empirical ranges. | route evidence; measured period totals |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | final_part | Verify qualifying host and delivered incomplete part, exact revision and remaining assembly; completed optional handsets, modems/routers and ADP network cards cannot be passed as dedicated parts by compatibility alone. | `cpc3-telecom`; `panasonic-handset` |
| validate_mass | all inventory rows | Check positive calibrated accepted net batch kg, same drawing/BOM/state/period and counted population; reconcile acceptance, reject and rework. Exclude packaging from reference mass and retain numerator units. |  |
| validate_balance | all processes | Close external gross material inputs plus opening stocks against accepted constituents, external scrap/waste, emissions and closing stocks; cancel paired internal transfers. Separately close each actual Cu,Al,Sn,Ag,Fe and other species using its own matched assay on every term. Include reactions, oxidation, dissolved releases and wet/dry moisture; gross scrap is not contained copper. Close water makeup/stock, discharge, evaporation and carryover; chemical additions/stock, recovery, reaction and residuals. Investigate imbalance against measured uncertainty; no invented fixed tolerances or yields. Fuel carbon may support CO2 with evidence but not establish CO or NO2. |  |
| validate_completeness | dataset | Check all real conditional operations and atomic exchanges, make/buy upstream burden once, utility provider/voltage, actual waste fate and emitted species/compartment. Unknown mandatory quantity, unresolved required UUID/provider or unsupported conversion blocks a complete dataset; methodology measurement pass is not apparatus conformity or evidence completion. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Matched part specification/state upstream interface for foreground packages and downstream process/lifecyclemodel construction |
| excluded_use | Generic complete handset/router model; host use-phase electricity; cross-part functional comparison by kg; unqualified material substitution |
| required_metadata | All reference qualifiers, actual routes, supplier coverage and allocation |
| required_quality_disclosure | Unresolved identities/providers, measured uncertainties, missing source/range coverage and exact boundaries |
| update_trigger | Drawing/BOM/revision, delivered state, make/buy, supplier, material grade, factory route/test or utility change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| cpc3-telecom | official_guidance | UNSD CPC3.0 Explanatory Notes, 30 June 2025, pp257/259; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Host and part taxonomy, complete apparatus and ADP card counter-boundary; no material recipe |
| apple-enclosure | handbook | Apple iPhone15/15Plus Enclosure, 10 April2025, Before You Begin/Reassembly; https://support.apple.com/en-gb/120605 | Delivered enclosure requires logic board, battery, display and other remaining host assembly; example only |
| apple-connector | handbook | Apple iPhone15 USB-C Connector, 3 June2025, Removal/Reassembly; https://support.apple.com/en-gb/122386 | Dedicated connector flex, host assembly and cleaning identity; not factory quantity factors |
| cisco-network-module | handbook | Cisco Catalyst9500 Hardware Installation Guide, Installing a Network Module; https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9500/hardware/install/b_catalyst_9500_hig/9500_installing-network-module.html | Specific slot/blank airflow and modular interfaces; active module classification unresolved without completion review |
| panasonic-handset | handbook | Panasonic handset part-number/model compatibility list; https://help.na.panasonic.com/answers/parts-and-accessories-telephone-handset-part-number-to-model-number-compatibility-list/ | Optional operational handset counterexample: compatibility does not prove incomplete part |
| taoglas-cellular | handbook | Taoglas FXP14.07.0100A Flexible PCB Cellular Antenna, SPE-12-8-050-G, p1; https://cdn.taoglas.com/datasheets/FXP14.07.0100A.pdf | Passive cellular flex antenna cable/connector/adhesive integration example, not universal dedication or manufacturing recipe |
| protolabs-molding | handbook | Protolabs Injection Molding Services, tooling/materials/quality sections; https://www.protolabs.com/services/injection-molding/ | Conditional plastic forming, resin alternatives and inspection capability; actual supplier grade and operations must be collected |
| census-electronics | official_guidance | US Census Schedule B2022 Chapter85, headings8517/8534/8536/8541/8542; https://www.census.gov/foreign-trade/schedules/b/2022/c85.html | Independent counterevidence for apparatus/parts and separately described generic electronic components; not an automatic CPC mapping |
| ef-allocation-2021 | official_guidance | Commission Recommendation(EU)2021/2279, section4.5 pp87–88; https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 | Allocation hierarchy and demonstrable physical relationship |
