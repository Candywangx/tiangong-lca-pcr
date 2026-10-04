---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.sheet-piling-of-iron-or-steel-and-welded-angles-shapes-and-sections-of-iron-or-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Sheet piling of iron or steel and welded angles, shapes and sections of iron or steel

## 1. Scope and Applicability

This candidate covers factory-gate iron/steel sheet piling, including hot-rolled and cold-formed interlocking piles and factory-drilled, punched or assembled variants, and welded built-up angles, shapes and sections. Product shape and function determine sheet-pile inclusion: cold forming does not turn a sheet pile into a generic cold-worked section. The two product families share traced steel feed, accepted net mass, finishing and loss accounting; their forming and joining burdens remain route-specific.

Exclude installed retaining walls/cofferdams, piling/extraction service, project design, use and end of life; unwelded ordinary hot/cold-worked sections, hollow sections, pipes, rails and unrelated fabricated structures need their own methodology. Admit iron/non-alloy, alloy and stainless grades only as explicitly declared grade/chemistry/delivery states with actual supplier feed, qualified welding procedure and conditional heat/surface processing. No generic route, acid recipe or corrosion performance transfers across grades. No retaining capacity, design life, fixed composition or industry yield is asserted.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.sheet-piling-of-iron-or-steel-and-welded-angles-shapes-and-sections-of-iron-or-steel |
| classification_refs | CPC 3.0:41252 |
| covered_products | Hot/cold-formed iron or steel sheet piles; factory assemblies; welded built-up steel angles/shapes/sections |
| excluded_products | Installed retaining structures; unrelated ordinary sections, hollow profiles, pipe, rail |
| representative_product | Accepted interlocking steel sheet pile or welded built-up steel section |
| production_route | Hot sheet-pile rolling OR cold forming of hot-rolled strip; conditional welded fabrication/assembly; actual finishing and surface system |
| market_state | Net accepted solid product at declared manufacturing gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Sheet piling of iron or steel and welded angles, shapes and sections of iron or steel |
| How much | 1 kg |
| How well | product family and interlock/section geometry; hot-rolled or cold-formed sheet-pile route; welded built-up section route; specification and edition; grade and heat chemistry; thickness and length; delivered net unit mass; weld procedure, filler and shielding system; acceptance tests; coating system and coating mass; supplier feed form and completed upstream operations; site, period, electricity interface and geography |
| How long or cycle | One accepted supply at manufacturing gate; no installed functional lifetime |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sheet piling of iron or steel and welded angles, shapes and sections of iron or steel |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family and interlock/section geometry; hot-rolled or cold-formed sheet-pile route; welded built-up section route; specification and edition; grade and heat chemistry; thickness and length; delivered net unit mass; weld procedure, filler and shielding system; acceptance tests; coating system and coating mass; supplier feed form and completed upstream operations; site, period, electricity interface and geography |

Declare every qualifier in dataset metadata. For a nonwelded pile, declare weld procedure, filler and shielding system as `not_applicable` with route evidence. For a bare product, declare coating/sealant formulation as `not_applicable` and retained coating/sealant mass as zero with acceptance records; an unknown surface state is not bare. D is positive accepted net product mass over the matched reporting period, including retained weld metal and only the contractual coating/sealant supplied at that gate. Keep steel-body, coating and sealant masses separate; exclude packing, rejects and free water. A structural design comparison requires a separate functional study.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | final_product | Mass | kg | cp_final_product measures D; each attributable period exchange is divided by D. |
| conversion | all exchanges | Row-specific property | kg; m3; kWh; MJ | Retain raw units and conversion evidence; 1 kWh = 3.6 MJ. Gas volume requires temperature/pressure, purity and density or NCV; wet residue requires moisture and element assays. |
| balances | steel, weld, coating, water and chemicals | Mass | kg | Never sum gross steel kg with contained-Fe kg. For each actual element e, measured gross mass times its own same-element assay defines every feed, weld, steel body, scrap, scale, slag, sludge, effluent, release and opening/closing stock term. Include nonsteel contributions where present; close each element separately. Carbon/alloy-element oxidation, oxygen uptake and water/chemical reactions require separate measured reaction balances; no pure-iron or fixed-alloy conversion. Cancel internal rework but retain repeated energy and consumables. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received steel beam blank/bloom/billet, hot-rolled coil, plate or individual profile; declare supplier-completed operations, temperature and coating |
| starting_condition_role | Supplier intermediate product |
| product_classification_scope | Sheet piling of iron or steel and welded angles, shapes and sections of iron or steel |
| recursive_input_rule | Purchased sheet pile or welded section retains distinct supplier burden; internal transfers cancel, never become new production or recycling credits |
| upstream_dataset_requirement | Qualified steelmaking/casting/rolling by actual feed route, grade, supplier and geography; utilities, chemicals, transport and waste destinations; missing links are explicit gaps, never zero |
| disclosure | product family and interlock/section geometry; hot-rolled or cold-formed sheet-pile route; welded built-up section route; specification and edition; grade and heat chemistry; thickness and length; delivered net unit mass; weld procedure, filler and shielding system; acceptance tests; coating system and coating mass; supplier feed form and completed upstream operations; site, period, electricity interface and geography |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | all processes | Include the actual selected route, preparation, joining, finishing, inspection, attributable handling and controls through the gate; distinguish upstream coil hot rolling from local cold forming. | `ec-fmp-bref-2022`; `arcelormittal-cold-piles-2025` |
| boundary_surface | surface_gate | Include contract surface operations and outsourced work before gate, with separate chemicals, energy, retained coating and wastes; later installation/field application is excluded. | `epa-fabricated-metal-2021` |
| boundary_completeness | all exchanges | Audit the site: add each actual fuel, shielding mixture, chemical, transport service, packing material, waste and emission as its own atomic exchange. Record and justify capital/infrastructure treatment. Candidate cards are conditional, unknown is not absent. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt | Steel receipt and route preparation | required | Trace heat/coil/plate identity and actual starting condition; crop or slit only when performed here. | Foreground manufacturing | per 1 kg reference flow |
| hot_pile | Hot rolling of sheet piling | conditional | Only hot-rolled sheet piling from bloom/billet/beam blank: reheat, descale, rough and finish with interlock profiles, cool. | Foreground manufacturing | per 1 kg reference flow |
| cold_pile | Cold forming of sheet piling | conditional | Only cold-formed sheet piling: uncoil hot-rolled strip, slit if needed, roll-form or bend the declared sheet-pile/interlock shape and cut. Coil hot rolling stays upstream. | Foreground manufacturing | per 1 kg reference flow |
| welding | Welded-section fabrication and sheet-pile assembly | conditional | Cut/prepare plate, strip or profiles, fit and tack, weld the built-up angle/shape/section or actual sheet-pile assembly; record SAW, MAG, FCAW or actual procedure, preheat and weld repairs. | Foreground manufacturing | per 1 kg reference flow |
| heat_treatment | Conditional delivery heat treatment | conditional | Only actual anneal, normalize, quench/temper or solution treatment required by declared grade/order; record every furnace pass, atmosphere, cooling medium and stock state; no generic treatment cycle. | Foreground manufacturing | per 1 kg reference flow |
| acceptance | Straightening, machining and acceptance | required | Straighten, cut to length, drill/punch as ordered, inspect dimensions and interlocks, perform specified mechanical and weld tests, segregate rejects and mark accepted lots. | Foreground manufacturing | per 1 kg reference flow |
| surface_gate | Declared surface system and dispatch | required | Record bare state or actual blast/paint/galvanize/sealant treatment before the declared gate, including outsourced work and transport; weigh accepted product separately from packaging. | Foreground manufacturing | per 1 kg reference flow |
| controls | Water circuits and pollution controls | required | Record makeup, circulation, blowdown, treatment, captured solids and actual direct releases; allocate shared pumps and extraction once. | Foreground manufacturing | per 1 kg reference flow |

### Process: Steel receipt and route preparation (`receipt`)

#### Inputs

##### Product flows

###### Steel beam blank for sheet-pile rolling (`steel_blank`)

Use only the actual solid hot-route feed; record alternate bloom or billet in a separate card when present. Link steelmaking/casting and supplier transport.

- Selected flow: Steel beam blank for sheet-pile rolling
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_steel_blank / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_blank`
- Sources: `ec-fmp-bref-2022`

###### Hot-rolled steel strip coil for cold-formed sheet piling (`steel_coil`)

Cold-route feed with width, thickness, grade and supplier hot-rolling burden; do not count as beam blank for the same path.

- Selected flow: Hot-rolled steel strip coil for cold-formed sheet piling
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_steel_coil / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_coil`
- Sources: `arcelormittal-cold-piles-2025`

###### Steel plate for welded built-up sections (`steel_plate`)

Actual plate grade/thickness and supplier process route; separately record purchased strip or individual profile feed if used.

- Selected flow: Steel plate for welded built-up sections
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_steel_plate / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_plate`
- Sources:

###### Steel I-section for welded assembly (`steel_profile`)

Only when this individual profile enters; other profiles require separate atomic cards. Purchased sheet piles also require a separate qualified input and completed-route disclosure.

- Selected flow: Steel I-section for welded assembly
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_steel_profile / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_profile`
- Sources:

###### Purchased plant electricity (`receipt_electricity`)

Meter actual delivery voltage, supplier, geography and loss boundary; source-specific generator output is not a generic factory supply.

- Selected flow: Purchased plant electricity
- Flow property / unit: Energy / kWh
- Amount rule: Matched attributable period amount from cp_receipt_electricity / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_receipt_electricity`
- Sources:

### Process: Hot rolling of sheet piling (`hot_pile`)

#### Inputs

##### Product flows

###### Purchased plant electricity (`hot_pile_electricity`)

Meter actual delivery voltage, supplier, geography and loss boundary; source-specific generator output is not a generic factory supply.

- Selected flow: Purchased plant electricity
- Flow property / unit: Energy / kWh
- Amount rule: Matched attributable period amount from cp_hot_pile_electricity / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hot_pile_electricity`
- Sources:

###### Natural gas supplied for combustion (`hot_pile_natural_gas`)

Only actual reheating, preheat or cure/bath heat; use measured net calorific value and stated volume conditions. Other fuels are separate cards.

- Selected flow: Natural gas supplied for combustion
- Flow property / unit: Net calorific value / MJ
- Amount rule: Matched attributable period amount from cp_hot_pile_natural_gas / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hot_pile_natural_gas`
- Sources:

###### Rolling lubrication oil (`rolling_oil`)

Record actual site consumption and stock movement; no generic factor is prescribed.

- Selected flow: Rolling lubrication oil
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_rolling_oil / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rolling_oil`
- Sources: `ec-fmp-bref-2022`

#### Outputs

##### Waste flows

###### Steel mill scale (`mill_scale`)

Record only actual external transfer; mass, wet/dry state, element assay, contamination, destination and opening/closing stocks are required. Internal rework is not an exported waste.

- Selected flow: Steel mill scale
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_mill_scale / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mill_scale`
- Sources: `ec-fmp-bref-2022`

###### Steel crop-end scrap (`hot_scrap`)

Record only actual external transfer; mass, wet/dry state, element assay, contamination, destination and opening/closing stocks are required. Internal rework is not an exported waste.

- Selected flow: Steel crop-end scrap
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_hot_scrap / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hot_scrap`
- Sources: `ec-fmp-bref-2022`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`combustion_co2`)

Direct combustion only; measured fuel-carbon balance, unburned carbon and oxidation basis; supplier fuel emissions remain upstream.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_combustion_co2 / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_combustion_co2`
- Sources:

###### Nitrogen oxides to air (`nitrogen_oxides`)

Measured furnace emission and actual gas flow; no default sheet-pile emission factor.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_nitrogen_oxides / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nitrogen_oxides`
- Sources:

### Process: Cold forming of sheet piling (`cold_pile`)

#### Inputs

##### Product flows

###### Purchased plant electricity (`cold_pile_electricity`)

Meter actual delivery voltage, supplier, geography and loss boundary; source-specific generator output is not a generic factory supply.

- Selected flow: Purchased plant electricity
- Flow property / unit: Energy / kWh
- Amount rule: Matched attributable period amount from cp_cold_pile_electricity / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cold_pile_electricity`
- Sources:

###### Cold-forming lubricant emulsion (`forming_lubricant`)

Specify formulation and as-supplied concentration; reconcile emulsion water separately without double counting.

- Selected flow: Cold-forming lubricant emulsion
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_forming_lubricant / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_forming_lubricant`
- Sources:

#### Outputs

##### Waste flows

###### Steel strip trimming scrap (`cold_scrap`)

Record only actual external transfer; mass, wet/dry state, element assay, contamination, destination and opening/closing stocks are required. Internal rework is not an exported waste.

- Selected flow: Steel strip trimming scrap
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_cold_scrap / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cold_scrap`
- Sources: `epa-fabricated-metal-2021`

### Process: Welded-section fabrication and sheet-pile assembly (`welding`)

#### Inputs

##### Product flows

###### Purchased plant electricity (`welding_electricity`)

Meter actual delivery voltage, supplier, geography and loss boundary; source-specific generator output is not a generic factory supply.

- Selected flow: Purchased plant electricity
- Flow property / unit: Energy / kWh
- Amount rule: Matched attributable period amount from cp_welding_electricity / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_welding_electricity`
- Sources:

###### Natural gas supplied for combustion (`welding_natural_gas`)

Only actual reheating, preheat or cure/bath heat; use measured net calorific value and stated volume conditions. Other fuels are separate cards.

- Selected flow: Natural gas supplied for combustion
- Flow property / unit: Net calorific value / MJ
- Amount rule: Matched attributable period amount from cp_welding_natural_gas / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_welding_natural_gas`
- Sources:

###### Solid steel welding wire (`solid_wire`)

For actual SAW/MAG procedure; record classification, lot, purchased and returned spool mass, deposited metal and losses, not a fixed weld factor.

- Selected flow: Solid steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_solid_wire / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_solid_wire`
- Sources: `twi-saw`

###### Flux-cored steel welding wire (`flux_cored_wire`)

Only FCAW route; declare gas-shielded or self-shielded variant. Do not adopt a generic wire row that ambiguously treats every cored wire as gas-free.

- Selected flow: Flux-cored steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_flux_cored_wire / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_flux_cored_wire`
- Sources: `twi-mag`

###### Granulated submerged-arc welding flux (`saw_flux`)

SAW only: fresh additions and opening/closing stocks, recovered unused flux, fused slag and spills; internal flux circulation is not fresh use. SAW does not require external shielding gas.

- Selected flow: Granulated submerged-arc welding flux
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_saw_flux / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_saw_flux`
- Sources: `twi-saw`

###### Delivered argon welding gas (`argon`)

Gas-shielded route only if separately delivered argon is used; record purity, pressure, cylinder return and reference volume conditions.

- Selected flow: Delivered argon welding gas
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_argon / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_argon`
- Sources: `twi-mag`

###### Delivered carbon dioxide welding gas (`carbon_dioxide_gas`)

Only actual separate CO2 supply; a purchased premixed shielding gas needs its own single formulation-qualified card, not component inputs plus the mixture.

- Selected flow: Delivered carbon dioxide welding gas
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_carbon_dioxide_gas / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carbon_dioxide_gas`
- Sources: `twi-mag`

#### Outputs

##### Waste flows

###### Spent welding slag (`weld_slag`)

Record only actual external transfer; mass, wet/dry state, element assay, contamination, destination and opening/closing stocks are required. Internal rework is not an exported waste.

- Selected flow: Spent welding slag
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_weld_slag / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_weld_slag`
- Sources: `epa-fabricated-metal-2021`

###### Steel fabrication offcut scrap (`weld_scrap`)

Record only actual external transfer; mass, wet/dry state, element assay, contamination, destination and opening/closing stocks are required. Internal rework is not an exported waste.

- Selected flow: Steel fabrication offcut scrap
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_weld_scrap / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_weld_scrap`
- Sources: `epa-fabricated-metal-2021`

##### Elementary flows

###### Particulate matter from welding to air (`welding_dust`)

Actual uncaptured air release, separate from captured filter dust; elemental constituents need separate qualified emissions without double counting totals.

- Selected flow: Particulate matter from welding to air
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_welding_dust / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_welding_dust`
- Sources:

### Process: Conditional delivery heat treatment (`heat_treatment`)

#### Inputs

##### Product flows

###### Purchased plant electricity (`heat_electricity`)

Only actual heat-treatment power with qualified supply interface and metering; repeated passes remain included.

- Selected flow: Purchased plant electricity
- Flow property / unit: Energy / kWh
- Amount rule: Matched attributable period amount from cp_heat_electricity / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat_electricity`
- Sources: `ec-fmp-bref-2022`

###### Natural gas supplied for combustion (`heat_natural_gas`)

Only actual furnace combustion; record measured NCV, grade/order and delivery condition.

- Selected flow: Natural gas supplied for combustion
- Flow property / unit: Net calorific value / MJ
- Amount rule: Matched attributable period amount from cp_heat_natural_gas / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat_natural_gas`
- Sources: `ec-fmp-bref-2022`

### Process: Straightening, machining and acceptance (`acceptance`)

#### Inputs

##### Product flows

###### Purchased plant electricity (`acceptance_electricity`)

Meter actual delivery voltage, supplier, geography and loss boundary; source-specific generator output is not a generic factory supply.

- Selected flow: Purchased plant electricity
- Flow property / unit: Energy / kWh
- Amount rule: Matched attributable period amount from cp_acceptance_electricity / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance_electricity`
- Sources:

###### Water-based machining fluid (`machining_fluid`)

Only actual drilling/cutting fluid; track concentration, replenishment and spent fluid separately.

- Selected flow: Water-based machining fluid
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_machining_fluid / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machining_fluid`
- Sources: `epa-fabricated-metal-2021`

###### Ultrasonic inspection couplant gel (`ndt_couplant`)

Only when specified inspection uses this gel; actual penetrant/developer chemicals each require their own cards.

- Selected flow: Ultrasonic inspection couplant gel
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_ndt_couplant / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ndt_couplant`
- Sources:

#### Outputs

##### Waste flows

###### Rejected steel section (`rejects`)

Record only actual external transfer; mass, wet/dry state, element assay, contamination, destination and opening/closing stocks are required. Internal rework is not an exported waste.

- Selected flow: Rejected steel section
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_rejects / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rejects`
- Sources: `epa-fabricated-metal-2021`

### Process: Declared surface system and dispatch (`surface_gate`)

#### Inputs

##### Product flows

###### Purchased plant electricity (`surface_gate_electricity`)

Meter actual delivery voltage, supplier, geography and loss boundary; source-specific generator output is not a generic factory supply.

- Selected flow: Purchased plant electricity
- Flow property / unit: Energy / kWh
- Amount rule: Matched attributable period amount from cp_surface_gate_electricity / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_gate_electricity`
- Sources:

###### Natural gas supplied for combustion (`surface_gate_natural_gas`)

Only actual reheating, preheat or cure/bath heat; use measured net calorific value and stated volume conditions. Other fuels are separate cards.

- Selected flow: Natural gas supplied for combustion
- Flow property / unit: Net calorific value / MJ
- Amount rule: Matched attributable period amount from cp_surface_gate_natural_gas / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_gate_natural_gas`
- Sources:

###### Steel blasting grit (`blast_grit`)

Actual blast route; fresh grit, recirculation, wear and spent grit are distinct.

- Selected flow: Steel blasting grit
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_blast_grit / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_blast_grit`
- Sources: `epa-fabricated-metal-2021`

###### Epoxy protective coating formulation (`epoxy_coating`)

Only when this precise formulation is sold on product; record solids, curing components and retained dry coating. Other paint layers and separately purchased hardener/thinner are individual cards.

- Selected flow: Epoxy protective coating formulation
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_epoxy_coating / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_epoxy_coating`
- Sources: `epa-fabricated-metal-2021`

###### Zinc ingot for hot-dip galvanizing (`zinc`)

Actual hot-dip route only; bath stocks, adherent zinc, dross and ash need separate measured terms; outsourced galvanizing is supplier processing without duplicated site inputs.

- Selected flow: Zinc ingot for hot-dip galvanizing
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_zinc / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_zinc`
- Sources: `epa-fabricated-metal-2021`

###### Hydrochloric acid solution (`hydrochloric_acid`)

Only actual pickling before galvanizing; declare solution and active HCl mass, bath stock and spent acid. Other pretreatment chemicals require separate cards.

- Selected flow: Hydrochloric acid solution
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_hydrochloric_acid / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydrochloric_acid`
- Sources: `epa-fabricated-metal-2021`

###### Bituminous sheet-pile interlock sealant (`sealant`)

Only when applied before the gate; disclose formulation and retained sealant mass separately from steel. Later site application is excluded.

- Selected flow: Bituminous sheet-pile interlock sealant
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_sealant / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sealant`
- Sources:

###### Steel packaging band (`packing_band`)

External packaging, excluded from accepted-product D; other packing materials are separate cards.

- Selected flow: Steel packaging band
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_packing_band / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing_band`
- Sources:

###### Nitric acid solution (`nitric_acid`)

Only actual grade-specific pickling/passivation with concentration and active-acid balance. If premixed HNO3/HF is purchased, represent the mixture as one qualified formulation instead of duplicating component inputs.

- Selected flow: Nitric acid solution
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_nitric_acid / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nitric_acid`
- Sources: `ec-fmp-bref-2022`

###### Hydrofluoric acid solution (`hydrofluoric_acid`)

Only actual separate HF supply in declared alloy/stainless treatment, not a universal recipe; measured stock, reaction and treatment fate are required.

- Selected flow: Hydrofluoric acid solution
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_hydrofluoric_acid / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydrofluoric_acid`
- Sources: `ec-fmp-bref-2022`

#### Outputs

##### Product flows

###### Sheet piling of iron or steel and welded angles, shapes and sections of iron or steel (`final_product`)

Only net accepted gate product contributes to D; steel body includes retained weld metal; retained contractual coatings and sealant are separately weighed. Rejects, packing and free water are excluded.

- Selected flow: Sheet piling of iron or steel and welded angles, shapes and sections of iron or steel
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_final_product`
- Sources:

##### Waste flows

###### Spent steel blasting grit (`spent_grit`)

Record only actual external transfer; mass, wet/dry state, element assay, contamination, destination and opening/closing stocks are required. Internal rework is not an exported waste.

- Selected flow: Spent steel blasting grit
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_spent_grit / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_grit`
- Sources: `epa-fabricated-metal-2021`

###### Epoxy paint application residue (`paint_residue`)

Record only actual external transfer; mass, wet/dry state, element assay, contamination, destination and opening/closing stocks are required. Internal rework is not an exported waste.

- Selected flow: Epoxy paint application residue
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_paint_residue / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_paint_residue`
- Sources: `epa-fabricated-metal-2021`

###### Zinc bath dross (`zinc_dross`)

Record only actual external transfer; mass, wet/dry state, element assay, contamination, destination and opening/closing stocks are required. Internal rework is not an exported waste.

- Selected flow: Zinc bath dross
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_zinc_dross / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_zinc_dross`
- Sources: `epa-fabricated-metal-2021`

###### Spent hydrochloric pickling liquor (`spent_acid`)

Record only actual external transfer; mass, wet/dry state, element assay, contamination, destination and opening/closing stocks are required. Internal rework is not an exported waste.

- Selected flow: Spent hydrochloric pickling liquor
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_spent_acid / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_acid`
- Sources: `epa-fabricated-metal-2021`

###### Spent nitric-hydrofluoric steel pickling liquor (`mixed_spent_acid`)

Only actual mixed-acid bath transfer; record water, acid and each dissolved metal assay and actual treatment; never treat gross acid liquor kg as metal kg.

- Selected flow: Spent nitric-hydrofluoric steel pickling liquor
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_mixed_spent_acid / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mixed_spent_acid`
- Sources: `ec-fmp-bref-2022`

##### Elementary flows

###### Toluene to air (`toluene_air`)

Only when actual coating formulation contains toluene; measure solvent retention, recovery and release; add every actual other solvent separately.

- Selected flow: Toluene to air
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_toluene_air / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_toluene_air`
- Sources:

###### Hydrogen fluoride to air (`hf_air`)

Only measured uncaptured release from actual fluoride treatment, separated from scrubber capture and transferred waste.

- Selected flow: Hydrogen fluoride to air
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_hf_air / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hf_air`
- Sources: `ec-fmp-bref-2022`

###### Nitrogen oxides to air (`acid_nox`)

Only actual nitric-acid treatment release; separate from furnace emissions and use site monitoring, not generic alloy factor.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_acid_nox / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acid_nox`
- Sources: `ec-fmp-bref-2022`

### Process: Water circuits and pollution controls (`controls`)

#### Inputs

##### Product flows

###### Purchased plant electricity (`controls_electricity`)

Meter actual delivery voltage, supplier, geography and loss boundary; source-specific generator output is not a generic factory supply.

- Selected flow: Purchased plant electricity
- Flow property / unit: Energy / kWh
- Amount rule: Matched attributable period amount from cp_controls_electricity / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_controls_electricity`
- Sources:

###### Purchased industrial process water (`process_water`)

Purchased makeup only; raw abstraction needs a separate elementary resource card. Record internal cooling/descaling loops as circulation, not repeated fresh inputs.

- Selected flow: Purchased industrial process water
- Flow property / unit: Volume / m3
- Amount rule: Matched attributable period amount from cp_process_water / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_process_water`
- Sources: `ec-fmp-bref-2022`

###### Sodium hydroxide solution (`sodium_hydroxide`)

Only actual wastewater neutralization; record delivered concentration, active alkali, reaction and sludge/effluent fate.

- Selected flow: Sodium hydroxide solution
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_sodium_hydroxide / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_hydroxide`
- Sources:

#### Outputs

##### Waste flows

###### Oily mill-water treatment sludge (`oily_sludge`)

Record only actual external transfer; mass, wet/dry state, element assay, contamination, destination and opening/closing stocks are required. Internal rework is not an exported waste.

- Selected flow: Oily mill-water treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_oily_sludge / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_oily_sludge`
- Sources: `ec-fmp-bref-2022`

###### Industrial wastewater transferred for treatment (`wastewater`)

Record only actual external transfer; mass, wet/dry state, element assay, contamination, destination and opening/closing stocks are required. Internal rework is not an exported waste.

- Selected flow: Industrial wastewater transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_wastewater / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `ec-fmp-bref-2022`

##### Elementary flows

###### Iron to fresh water (`iron_water`)

Only direct permitted release: measured effluent concentration times discharged volume on the same dissolved/total basis; treated offsite wastewater is not also a direct site release.

- Selected flow: Iron to fresh water
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_iron_water / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_iron_water`
- Sources:

###### Chromium to fresh water (`chromium_water`)

Only actual direct release from chromium-bearing grade; measured species and total/dissolved basis. Add separately any measured chromium(VI) with matching speciation, avoiding double-counting total chromium.

- Selected flow: Chromium to fresh water
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_chromium_water / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chromium_water`
- Sources:

###### Nickel to fresh water (`nickel_water`)

Only actual direct release from nickel-bearing grade with compatible concentration and effluent volume; offsite-treatment transfer is distinct.

- Selected flow: Nickel to fresh water
- Flow property / unit: Mass / kg
- Amount rule: Matched attributable period amount from cp_nickel_water / D, after stock and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nickel_water`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | shared processes | First isolate product and route by batch metering/subdivision; where unavoidable allocate by demonstrated physical causation (machine time, weld work, heated load or treated area). Explain other relationships with sensitivity; mass alone is not automatically appropriate across different routes. | `ec-pef-2021` |
| scrap_and_rework | metal residues | Keep rejects, internal rework, external scrap and actual saleable co-products distinct. Retain waste treatment/transport; no automatic avoided-steel credit inside this foreground package. Declare recycling method and end-of-waste boundary separately for any full LCA. | `ec-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_steel_blank | receipt | steel_blank | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_steel_coil | receipt | steel_coil | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_steel_plate | receipt | steel_plate | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_steel_profile | receipt | steel_profile | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_receipt_electricity | receipt | receipt_electricity | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kWh | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_hot_pile_electricity | hot_pile | hot_pile_electricity | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kWh | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_cold_pile_electricity | cold_pile | cold_pile_electricity | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kWh | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_welding_electricity | welding | welding_electricity | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kWh | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_acceptance_electricity | acceptance | acceptance_electricity | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kWh | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_surface_gate_electricity | surface_gate | surface_gate_electricity | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kWh | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_controls_electricity | controls | controls_electricity | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kWh | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_hot_pile_natural_gas | hot_pile | hot_pile_natural_gas | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | MJ | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_welding_natural_gas | welding | welding_natural_gas | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | MJ | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_surface_gate_natural_gas | surface_gate | surface_gate_natural_gas | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | MJ | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_rolling_oil | hot_pile | rolling_oil | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_forming_lubricant | cold_pile | forming_lubricant | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_solid_wire | welding | solid_wire | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_flux_cored_wire | welding | flux_cored_wire | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_saw_flux | welding | saw_flux | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_argon | welding | argon | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_carbon_dioxide_gas | welding | carbon_dioxide_gas | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_machining_fluid | acceptance | machining_fluid | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_ndt_couplant | acceptance | ndt_couplant | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_blast_grit | surface_gate | blast_grit | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_epoxy_coating | surface_gate | epoxy_coating | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_zinc | surface_gate | zinc | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_hydrochloric_acid | surface_gate | hydrochloric_acid | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_sealant | surface_gate | sealant | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_packing_band | surface_gate | packing_band | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_final_product | surface_gate | final_product | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Weighbridge/batch scale and stock ledger with heat chemistry and retained-coating separation | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_mill_scale | hot_pile | mill_scale | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_hot_scrap | hot_pile | hot_scrap | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_cold_scrap | cold_pile | cold_scrap | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_weld_slag | welding | weld_slag | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_weld_scrap | welding | weld_scrap | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_rejects | acceptance | rejects | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_spent_grit | surface_gate | spent_grit | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_paint_residue | surface_gate | paint_residue | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_zinc_dross | surface_gate | zinc_dross | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_spent_acid | surface_gate | spent_acid | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_oily_sludge | controls | oily_sludge | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_wastewater | controls | wastewater | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_process_water | controls | process_water | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | m3 | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_sodium_hydroxide | controls | sodium_hydroxide | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_combustion_co2 | hot_pile | combustion_co2 | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_nitrogen_oxides | hot_pile | nitrogen_oxides | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_welding_dust | welding | welding_dust | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_toluene_air | surface_gate | toluene_air | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_iron_water | controls | iron_water | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_heat_electricity | heat_treatment | heat_electricity | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kWh | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_heat_natural_gas | heat_treatment | heat_natural_gas | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | MJ | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_nitric_acid | surface_gate | nitric_acid | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_hydrofluoric_acid | surface_gate | hydrofluoric_acid | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_mixed_spent_acid | surface_gate | mixed_spent_acid | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_hf_air | surface_gate | hf_air | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_acid_nox | surface_gate | acid_nox | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_chromium_water | controls | chromium_water | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |
| cp_nickel_water | controls | nickel_water | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | Calibrated meter/scale and supplier or waste records; element assay, moisture/concentration and interface as applicable | kg | Each batch and monthly reconciliation | Matched representative reporting period, including startup, repairs and rejects | Declared site/route and external boundary only | per 1 kg reference flow | Calibration, invoices, assay reports, mass reconciliation and absence evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inventory | q_i = attributed external period amount_i / D; allocation precedes normalization. D excludes repeated rework output. | cp_final_product; each cp_i | amount per 1 kg reference flow |  |
| element_balance | steel and coating | For each measured element e: sum external input gross mass_i * measured fraction_e_i + opening element stock = accepted body element + coating element + exported residues element + measured releases element + closing stock. Same-element assays apply to every term; dissolved effluent uses compatible concentration * volume. Report residual against propagated measurement uncertainty; never impose a common Fe/alloy fraction. | mass; assays; stocks; release records | Separate elemental closures |  |
| water_balance | controls | Makeup + opening water stock + reaction-generated water = discharge + evaporation + product/waste carryover + closing stock + reaction-consumed water. Internal recirculation cancels; reconcile water carried by solutions without double counting. | meters; stock; moisture; reaction records | Water closure |  |
| chemical_balance | welding and surface | Close each active chemical/weld-flux/coating component with measured inputs, stocks, reacted/retained mass, recovery and residue. Separate carbon and alloy oxidation, oxygen uptake and gas reaction products; shield-gas CO2 release is distinct from fuel combustion CO2. | formulation; consumption; stock; composition; reaction records | Component and reaction closures |  |
| coating_conversion | surface_gate | When coverage is collected by area or length, use measured area/length and actual accepted coated mass; dry retained mass is separately measured. No coating density, thickness, transfer efficiency or weld deposition yield is prescribed. | area; length; mass; coating records | Measured conversion to D |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all flows | Match product/waste/elementary type, property, supply interface, route, formulation, geography and state before assigning UUID; classification code or baseName alone cannot prove identity. | Direct qualified record and supplier documents |
| coverage | all data | Same representative period, route and site; trace meters, lot genealogy, offsite work and stocks. Report missing data and uncertainty; absence needs evidence. | Audit and calibration records |
| ranges | all quantities | Collect actual foreground amounts. No generic yield, energy, weld consumption, alloy fraction or coating factor. Numeric defaults/guardrails require independent originals with matching route/boundary/unit conditions; unresolved evidence remains a gap. | Primary observations and source applicability review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Require D > 0, finite kg and every qualifier; distinguish accepted steel body, weld metal, coating/sealant and packing. |  |
| validate_route | all processes | Verify hot/cold sheet-pile and welded-section modules against records; bypass only completed supplier operations with burden links. Reject installed-service or unqualified-grade substitutions. |  |
| validate_balance | all exchanges | Check gross mass and every measured same-element balance separately, water/chemical/weld-flux/coating closure, stock matching, internal transfers and rework energy; investigate residuals beyond measured uncertainty. Never enforce pure Fe or fixed alloy fractions. |  |
| validate_exchange | inventory | Require atomic exchanges, dimensionally supported units, matched reporting period and explicit supplier/treatment links; keep missing UUIDs or quantities unresolved, not zero or guessed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Route/grade/surface-qualified product supply inventory and downstream process/lifecyclemodel projection |
| excluded_use | Installed wall performance or lifetime comparisons; other sections or unqualified grades; generic electricity or unqualified steel substitution |
| required_metadata | product family and interlock/section geometry; hot-rolled or cold-formed sheet-pile route; welded built-up section route; specification and edition; grade and heat chemistry; thickness and length; delivered net unit mass; weld procedure, filler and shielding system; acceptance tests; coating system and coating mass; supplier feed form and completed upstream operations; site, period, electricity interface and geography |
| required_quality_disclosure | Site/period/route, measurements, allocation, balances, upstream linkage, uncertainty and unresolved identities/ranges |
| update_trigger | Grade, geometry, route, weld/coating system, supplier interface or representative period changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ec-fmp-bref-2022` | official_guidance | European Commission JRC. Ferrous Metals Processing BREF, 2022, DOI 10.2760/196475. https://doi.org/10.2760/196475 | Section 2.2.1.5, printed pp.47–50 and Figs.2.10/2.13: section and sheet-pile rolling; sections 2.2.17–18: water circuits and residues. General mill facts, no product-specific numeric factors. |
| `arcelormittal-cold-piles-2025` | literature | ArcelorMittal. Manufacturing cold formed sheet piles, 20 January 2025. https://constructalia.arcelormittal.com/en/news_center/2025/01/cold-formed-steel-sheet-piles | Producer description verifies hot-rolled coil as cold-formed sheet-pile feed; promotional efficiency claims supply no yield range. |
| `twi-saw` | handbook | TWI. What is Submerged-arc Welding? https://www.twi-global.com/technical-knowledge/faqs/faq-what-is-submerged-arc-welding | Wire/flux/slag and absence of external shielding gas for SAW; no welding quantities prescribed. |
| `twi-mag` | handbook | TWI. What is Gas Metal Arc Welding? https://www.twi-global.com/technical-knowledge/faqs/faq-what-is-mig-mag-welding | Gas-shielded wire-welding distinction; gas identity/amount remains procedure-specific. |
| `epa-fabricated-metal-2021` | official_guidance | US EPA. Sector AA: Fabricated Metal Products Manufacturing Facilities, EPA 833-F-06-042, February 2021, Table 1 p.2. https://www.epa.gov/sites/default/files/2015-10/documents/sector_aa_fabmetal.pdf | Independent qualitative cross-check for preparation, painting, galvanizing and waste omissions; broad stormwater-sector scope, not evidence that every product uses every operation. |
| `ec-pef-2021` | official_guidance | Commission Recommendation (EU) 2021/2279, consolidated 30 December 2021, section 4.5 pp.87–88. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 | Allocation hierarchy; study-specific application and explicit recycling boundary. |
