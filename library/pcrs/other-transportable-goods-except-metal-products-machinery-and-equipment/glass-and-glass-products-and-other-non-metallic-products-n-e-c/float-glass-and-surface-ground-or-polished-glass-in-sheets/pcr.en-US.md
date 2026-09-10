---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.float-glass-and-surface-ground-or-polished-glass-in-sheets
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Float glass and surface ground or polished glass, in sheets

## 1. Scope and Applicability

This PCR supports foreground data packages for continuous flat-glass manufacture through delivery of unworked sheets at the factory gate. It covers ordinary clear, low-iron, body-tinted or opacified float glass and, where declared, sheets whose faces are surface ground or polished. An online coating made during the hot ribbon process may be included only as a declared conditional unit process and qualifier.

The data package shall identify the glass kind, applicable ground or polished state, nominal and measured thickness, sheet area and mass, iron content or an applicable light-transmittance specification, online-coating status, total and source-separated cullet content, furnace technology and energy carriers, tin-bath forming, annealing, edge-trim/cutting yield, and the delivered sheet state. Product-specific optical or iron values must come from test records or specifications; this PCR sets no generic performance threshold.

The category does not include tempered or heat-strengthened safety glass, laminated glass, insulating glass units, mirrors, offline or downstream coating, fabrication beyond cutting to unworked sheet dimensions, or an exclusively photovoltaic-cover-glass product class. Such downstream operations require separate unit processes or a more specific PCR and must not be extrapolated to this category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.float-glass-and-surface-ground-or-polished-glass-in-sheets` |
| classification_refs | CPC 3.0 `37113`, exact |
| covered_products | Unworked sheets of float glass and surface-ground or polished glass; ordinary clear, low-iron, body-tinted or opacified variants; online-coated ribbon only when declared |
| excluded_products | Cast, rolled, drawn or blown sheet glass classified elsewhere; worked sheet glass; tempered or laminated safety glass; insulating glass units; mirrors; offline/downstream-coated or fabricated glazing products |
| representative_product | Declared mass of saleable, quality-accepted sheet glass at the factory gate |
| production_route | Batch preparation, melting/refining, float forming on molten tin, annealing, conditional surface grinding/polishing or online coating, inspection, cutting, cullet return and packing |
| market_state | Unworked sheets, jumbo sheets or cut-to-size stock sheets as delivered; dimensions and packing state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable float glass or applicable surface-ground/polished glass sheets matching the declared kind and delivery state |
| How much | 1,000 kg net accepted product at the declared factory gate |
| How well | Glass kind, processing state, thickness, dimensions, density basis, iron content or optical specification, coating status, cullet statement and quality-acceptance basis declared |
| How long or cycle | One reporting period representative of continuous production, normally at least 12 consecutive months |
| reference_flow_link | Tiangong process identity candidate `d6c1bf92-3556-448b-92d3-b8485d4c8e89`; identity only, with no inventory values inherited |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Float glass and surface ground or polished glass, in sheets `1b43024e-16ea-42d2-830d-329c4a2abc3d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| Reference unit | kg |
| Required qualifiers | glass kind: ordinary clear, low-iron, tinted or opacified; float or surface-ground/polished state; nominal and measured thickness; accepted area and net mass; measured density or declared conversion basis; iron content or applicable light-transmittance specification and test method; online coating present/absent and chemistry/function when present; internal, pre-consumer external and post-consumer cullet fractions; furnace type and fuel/electricity carriers; tin-bath and annealing route; cutting yield; delivered sheet dimensions and packing state; geography; reporting period; factory gate |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | net accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every exchange to 1,000 kg of saleable, quality-accepted sheets after edge trimming and rejection; exclude packing mass. |
| `area_mass_conversion` | conversion between area and mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use mass = accepted area × measured mean thickness × measured product density. If measured density is unavailable for soda-lime-silicate glass, 2,500 kg/m3 may be used only as the EN 572-1 conventional calculation value and must be disclosed; do not use it for a different composition without evidence. |
| `thickness_area_records` | each saleable product group | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record accepted area and thickness distribution by product group; do not convert a mixed-thickness output using one undeclared nominal thickness. |
| `cullet_fraction` | batch cullet statement | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg batch | Calculate internal, pre-consumer external and post-consumer cullet separately on a dry batch-input mass basis; report their sum and do not count internally returned edge trim as external recycled content. |
| `cutting_yield` | inspection and cutting | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg ribbon input | Cutting yield equals net accepted unpacked sheet mass divided by annealed ribbon mass entering inspection/cutting for the same reporting boundary. |
| `optical_iron_declaration` | product identity and performance qualifier | declared test property | declared method unit | Declare either measured total iron/iron-oxide content or an applicable light-transmittance specification and test method. Low-iron, tinted and coated variants shall not inherit ordinary-clear performance. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_inputs` | cradle-to-gate foreground data package | Include receiving and preparation of virgin batch materials, separately identified cullet, fuels, electricity, water, process gases, tin make-up, coating or polishing materials when applicable, and packaging. | `nga-flat-glass-pcr-2020`; `eu-jrc-glass-bref-2013` |
| `boundary_core` | required manufacturing | Include batching, melting/refining, float forming on molten tin, annealing, inspection, edge trimming, cutting, internal cullet return, quality rejection and packing. | `eu-jrc-glass-bref-2013`; `eurofloat-epd-2024`; `vitro-flat-glass-epd-2024` |
| `boundary_conditionals` | route-specific manufacturing | Include online coating and surface grinding/polishing only when performed before the declared gate; record them as separate conditional processes. | `unsd-hs-7005`; `eu-jrc-glass-bref-2013` |
| `boundary_gate` | delivery state | End at the factory gate with quality-accepted, unworked sheets in the declared jumbo or cut stock-sheet and packing state. | `nga-flat-glass-pcr-2020`; `eurofloat-epd-2024` |
| `boundary_exclusions` | downstream products and use/end-of-life | Exclude tempering, heat strengthening, laminating, insulating-unit assembly, silvering/mirror manufacture, offline/downstream coating, installation, use and end-of-life; model any brought-in operation separately and do not relabel it as category-wide float-glass production. | `unsd-cpc-3-0-explanatory-notes-2025`; `unsd-hs-7005`; `nga-flat-glass-pcr-2020` |
| `boundary_cutoff` | omitted flows | Seek complete mass and energy balance. Any cutoff shall be disclosed and justified; a flow expected to be environmentally relevant shall be included regardless of mass. | `nga-flat-glass-pcr-2020` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | batch_materials_and_cullet_received_at_float_glass_site |
| starting_condition_role | purchased_or_transferred_inputs_to_continuous_flat_glass_manufacture |
| product_classification_scope | CPC 3.0 `37113`, unworked float or surface-ground/polished glass in sheets |
| recursive_input_rule | same-category glass input shall remain visible as purchased or transferred cullet/sheet input and shall not be silently absorbed into the reference output |
| upstream_dataset_requirement | link purchased materials, fuels, electricity, water, gases and packaging to geographically and technologically appropriate upstream datasets |
| disclosure | identify product mix, glass kind, thickness mix, coating/polishing route, cullet origin, furnace and energy carriers, site(s), period, gate and included packaging |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `batch_preparation` | Batch material and cullet preparation | required |  | foreground | prepared batch delivered to melting |
| `melting_refining` | Furnace melting and refining | required |  | foreground | molten glass delivered to forming |
| `float_forming` | Tin-bath float forming | required |  | foreground | glass ribbon leaving the tin bath |
| `annealing` | Annealing lehr | required |  | foreground | annealed ribbon entering inspection |
| `surface_finishing` | Surface grinding or polishing | conditional | include only for a declared surface-ground or polished product | foreground | finished ribbon delivered to inspection/cutting |
| `online_coating` | Online hot-ribbon coating | conditional | include only when an online coating is present within the declared gate | foreground | online-coated ribbon |
| `inspection_cutting_packing` | Inspection, edge trimming, cutting and packing | required |  | foreground | 1,000 kg accepted unpacked sheet product |

### Process: Batch material and cullet preparation (`batch_preparation`)

#### Inputs

##### Product flows

###### Virgin batch materials (`virgin_batch_materials`)

Record silica sand, soda ash, limestone, dolomite and every minor batch constituent as separate site-selected product flows; preserve composition and moisture records rather than using an undeclared generic batch.

- Selected flow: Site-selected virgin glass batch material flows, one row per material in the produced dataset
- Flow property / unit: Mass / kg
- Amount rule: dry mass charged by constituent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted sheet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_materials`
- Sources: `eu-jrc-glass-bref-2013`

###### Internal and external cullet (`cullet_inputs`)

Record internal return cullet, pre-consumer external cullet and post-consumer cullet as distinct inputs. Supplier or site classification evidence is required for external fractions.

- Selected flow: Site-selected glass cullet product flows separated by origin
- Flow property / unit: Mass / kg
- Amount rule: dry charged mass by cullet origin
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg total dry batch input and per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cullet_inputs`
- Sources: `nga-flat-glass-pcr-2020`; `eu-jrc-glass-bref-2013`
- Range: sector screening range for total cullet charged, not a default or conformance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.10
  - Upper: 0.40
  - Unit: kg/kg total batch input
  - Basis: total cullet charged to a float furnace divided by total batch input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-jrc-glass-bref-2013`

#### Outputs

##### Product flows

###### Prepared batch (`prepared_batch`)

The mixed batch output carries the measured constituent and cullet masses to the melting process.

- Selected flow: Prepared flat-glass batch
- Flow property / unit: Mass / kg
- Amount rule: calculated from charged constituents, retained moisture corrections and preparation losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: batch transferred to melting per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_materials`
- Sources:

### Process: Furnace melting and refining (`melting_refining`)

#### Inputs

##### Product flows

###### Furnace fuels (`furnace_fuels`)

Record each fuel by lower heating value and physical quantity; identify oxy-fuel, air-fuel, electric-boost or other furnace configuration.

- Selected flow: Site-selected natural gas, fuel oil or other furnace fuel flows
- Flow property / unit: Energy / MJ lower heating value, with physical units retained
- Amount rule: metered fuel consumption by carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per tonne molten glass and per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Sources: `eu-jrc-glass-bref-2013`
- Range: European sector screening range for melting energy across carriers, not fuel-only and not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5.2
  - Upper: 8.7
  - Unit: GJ/t molten glass
  - Basis: total melting energy input reported for furnace melting
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-jrc-glass-bref-2013`

###### Purchased electricity (`melting_electricity`)

Record metered electricity separately from fuels, including electric boosting and furnace auxiliaries assigned to this process; use the supplier or residual/grid mix required by the study framework.

- Selected flow: Site- and market-appropriate electricity supply flow
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity assigned to melting and refining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per tonne molten glass and per 1,000 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Sources: `nga-flat-glass-pcr-2020`; `eu-jrc-glass-bref-2013`

#### Outputs

##### Product flows

###### Molten refined glass (`molten_refined_glass`)

Record molten glass transferred to the tin bath from furnace production and mass-balance records.

- Selected flow: Molten refined flat glass
- Flow property / unit: Mass / kg
- Amount rule: calculated mass transferred from furnace to forming
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_furnace_mass_balance`
- Sources:

##### Elementary flows

###### Direct furnace emissions (`direct_furnace_emissions`)

Record carbon dioxide from fuel and carbonate decomposition and monitored nitrogen oxides, sulfur oxides, particulate matter and other permit-relevant releases as separate elementary flows.

- Selected flow: Site-selected elementary flow for each emitted substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: monitored or calculated annual emission by substance, with method identified
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-jrc-glass-bref-2013`

### Process: Tin-bath float forming (`float_forming`)

#### Inputs

##### Product flows

###### Tin-bath gases and tin make-up (`tin_bath_operating_inputs`)

Record nitrogen, hydrogen, sulfur dioxide and tin make-up actually used to maintain the bath atmosphere and equipment; do not assume these inputs are zero.

- Selected flow: Site-selected tin, nitrogen, hydrogen and sulfur-dioxide supply flows, one row per material in the produced dataset
- Flow property / unit: Mass / kg or gas volume converted with declared conditions
- Amount rule: metered, purchased or inventory-adjusted use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per tonne ribbon leaving the tin bath and per 1,000 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_materials`
- Sources: `eu-jrc-glass-bref-2013`

#### Outputs

##### Product flows

###### Float glass ribbon (`float_glass_ribbon`)

The ribbon output records actual mass and thickness distribution after float forming.

- Selected flow: Float glass ribbon
- Flow property / unit: Mass / kg
- Amount rule: calculated or measured ribbon mass transferred to the lehr
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ribbon_output`
- Sources:

### Process: Annealing lehr (`annealing`)

#### Inputs

##### Product flows

###### Lehr fuel and electricity (`annealing_energy`)

Record lehr fuel and electricity separately by carrier using meters or a documented allocation from shared utilities.

- Selected flow: Site-selected lehr fuel and electricity supply flows
- Flow property / unit: Energy / MJ and kWh
- Amount rule: metered or documented shared-utility assignment by carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per tonne annealed ribbon and per 1,000 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Sources: `eu-jrc-glass-bref-2013`

#### Outputs

##### Product flows

###### Annealed ribbon (`annealed_ribbon`)

Record the ribbon mass entering finishing or inspection and retain thickness/product group linkage.

- Selected flow: Annealed flat-glass ribbon
- Flow property / unit: Mass / kg
- Amount rule: calculated or measured mass leaving the lehr
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ribbon_output`
- Sources:

### Process: Surface grinding or polishing (`surface_finishing`)

#### Inputs

##### Product flows

###### Surface-finishing materials and utilities (`surface_finishing_inputs`)

When this route applies, record abrasives, water, electricity and other consumables separately and declare the treated surface and removed thickness.

- Selected flow: Site-selected abrasive, water and electricity flows
- Flow property / unit: Mass / kg, water / m3 and energy / kWh
- Amount rule: measured consumption attributable to surface grinding or polishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg surface-finished output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditional_process_inputs`
- Sources: `unsd-cpc-3-0-explanatory-notes-2025`

#### Outputs

##### Product flows

###### Surface-finished ribbon (`surface_finished_ribbon`)

Record accepted ground or polished glass mass and route it to inspection/cutting; declare whether one or both faces were treated.

- Selected flow: Surface-ground or polished glass ribbon
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg surface-finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditional_process_outputs`
- Sources:

### Process: Online hot-ribbon coating (`online_coating`)

#### Inputs

##### Product flows

###### Online coating precursors and utilities (`online_coating_inputs`)

When an online coating is present, record precursor chemistry, carrier gases and energy within this process. Offline or later coating is outside this PCR boundary.

- Selected flow: Site-selected coating precursor, carrier-gas and utility flows
- Flow property / unit: Mass / kg and energy / kWh or MJ
- Amount rule: metered or reconciled consumption for online coating
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg online-coated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditional_process_inputs`
- Sources: `unsd-hs-7005`; `eu-jrc-glass-bref-2013`

#### Outputs

##### Product flows

###### Online-coated ribbon (`online_coated_ribbon`)

Record coated ribbon mass and declare coating chemistry/function, coated face and quality acceptance; do not apply it to uncoated production.

- Selected flow: Online-coated float glass ribbon
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg online-coated reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditional_process_outputs`
- Sources:

### Process: Inspection, edge trimming, cutting and packing (`inspection_cutting_packing`)

#### Inputs

##### Product flows

###### Packaging materials and finishing electricity (`packing_and_cutting_inputs`)

Record electricity for inspection/cutting and each packaging material. Packaging remains an input but is excluded from net reference-product mass.

- Selected flow: Site-selected electricity and packaging material flows, one row per input in the produced dataset
- Flow property / unit: Energy / kWh and mass / kg
- Amount rule: metered electricity and purchased/issued packaging mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packing_inputs`
- Sources: `nga-flat-glass-pcr-2020`; `eurofloat-epd-2024`

#### Outputs

##### Product flows

###### Accepted sheet glass (`accepted_sheet_glass`)

This is the reference product output after inspection and cutting, before including packaging mass.

- Selected flow: Float glass and surface ground or polished glass, in sheets `1b43024e-16ea-42d2-830d-329c4a2abc3d`
- Flow property / unit: Mass / kg
- Amount rule: sum accepted sheet masses at the declared dimensions and thicknesses; normalize to 1,000 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net accepted unpacked sheet product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accepted_sheet_output`
- Sources:

##### Waste flows

###### Edge trim, rejects and breakage (`cutting_cullet_and_rejects`)

Measure edge trim, offcuts, quality rejects and breakage. Record the internal-remelt fraction separately from cullet transferred outside the site and final waste treatment.

- Selected flow: Site-selected glass cullet or waste flow by destination
- Flow property / unit: Mass / kg
- Amount rule: measured mass by cause and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg ribbon entering inspection/cutting and per 1,000 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_yield`
- Sources: `nga-flat-glass-pcr-2020`; `eu-jrc-glass-bref-2013`
- Range: provisional broad cutting-yield screen, replace with reviewed product/site evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.80
  - Upper: 1.00
  - Unit: kg accepted sheet/kg annealed ribbon input
  - Basis: net accepted unpacked sheets divided by ribbon entering inspection/cutting
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | product groups, lines and conditional processes | First avoid allocation through meter separation, production-line or campaign subdivision, and separate modelling of online coating or surface finishing. | `nga-flat-glass-pcr-2020` |
| `allocation_recycled_glass` | internal and external cullet | Internal edge trim and rejects returned within the site carry forward the burdens already inside the system and receive no recycled-content credit. External cullet shall use the recycled-material convention required by the declared study framework, with origin and any collection/processing burdens disclosed. | `nga-flat-glass-pcr-2020` |
| `allocation_shared_energy` | shared furnace, utilities and lehr | After subdivision is exhausted, allocate shared mass/energy-driven burdens by a documented physical relationship such as mass, energy demand or operating time that reflects causality. | `nga-flat-glass-pcr-2020` |
| `allocation_coproducts` | saleable co-products | If a co-product with material economic value remains and physical causality cannot be established, use economic allocation with contemporaneous prices and disclose a sensitivity result. | `nga-flat-glass-pcr-2020` |
| `allocation_no_avoided_burden` | exported cullet, heat or by-products | Do not subtract an avoided burden inside the core product inventory unless the declared LCA framework explicitly requires system expansion; report exports and method separately. | `nga-flat-glass-pcr-2020` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_materials` | batch_preparation | virgin batch materials and prepared batch | batch ticket and stock reconciliation | material id; supplier; wet mass; moisture; dry mass; formulation; batch id | calibrated scale plus stock reconciliation | kg dry | per batch and monthly reconciliation | representative reporting period, normally 12 months | each included float line/site | sum dry constituent masses and normalize to accepted output | scale calibration; batch tickets; purchase/stock records |
| `cp_cullet_inputs` | batch_preparation | internal and external cullet | cullet charge and origin record | mass; internal/external; pre/post-consumer; contamination; supplier; batch | calibrated scale and origin documentation | kg dry | per charge or lot | same period as output | each included site | sum by origin; calculate fractions on total dry batch input | scale calibration; supplier declarations; internal return log |
| `cp_energy_carriers` | melting_refining; annealing | fuel and electricity | meter, invoice and lower-heating-value record | carrier; physical quantity; energy; meter id; process assignment; supplier/grid mix | calibrated meter; invoice reconciliation; documented shared-meter allocation | MJ LHV; kWh | continuous/monthly | same period as output | each furnace and included utilities | sum by carrier and allocate only after subdivision | meter calibration; invoices; allocation worksheet |
| `cp_furnace_mass_balance` | melting_refining | molten refined glass | furnace production balance | batch input; cullet; volatilization estimate; pull rate; transferred mass; period | production controls reconciled to mass inputs and outputs | kg | shift/daily, monthly reconciliation | same period as output | each furnace | reconcile furnace pull to downstream ribbon and losses | control-system export; signed reconciliation |
| `cp_direct_emissions` | melting_refining | direct furnace emissions | stack monitoring and calculation record | substance; compartment; concentration; gas flow; fuel/carbonate input; method; uncertainty | continuous/periodic monitoring or documented mass/emission calculation | kg | permit frequency, aggregated monthly | same period as output | each included stack | calculate by substance and normalize to accepted output | monitoring QA/QC; laboratory report; calculation file |
| `cp_process_materials` | float_forming | tin-bath operating inputs | meter and stock record | material; purchase; opening/closing stock; replenishment; gas conditions | meter or inventory reconciliation | kg; Nm3 with conditions | continuous/monthly | same period as output | each tin bath | convert gas volume with declared conditions and sum by flow | meter calibration; inventory reconciliation |
| `cp_ribbon_output` | float_forming; annealing | ribbon output | line production record | timestamp; width; length; thickness; density basis; mass; product group | line sensors reconciled with weighbridge/product records | m2; mm; kg | continuous | same period as output | each included line | calculate mass by group and reconcile to accepted output plus cullet | sensor calibration; production reports |
| `cp_conditional_process_inputs` | surface_finishing; online_coating | conditional process inputs | meter, recipe and issue record | product group; material; chemistry; quantity; meter; treated area/mass | process meter and material issue reconciliation | kg; m3; kWh; MJ | per campaign/monthly | same period as conditional output | each applicable process | sum only for products receiving the operation | recipes; meter calibration; issue records |
| `cp_conditional_process_outputs` | surface_finishing; online_coating | conditional process output | production and quality record | input mass; accepted output; rejects; treated face; removed thickness or coating specification | production system and quality inspection | kg; m2; mm | per lot/campaign | same period as output | each applicable process | sum accepted output by declared treatment | inspection/test reports; production records |
| `cp_cutting_packing_inputs` | inspection_cutting_packing | cutting electricity and packaging | meter and material issue record | electricity; material id; issue mass; returned stock; product group | submeter or documented allocation plus stock reconciliation | kWh; kg | monthly | same period as output | each cutting/packing area | sum by input and normalize to accepted output | meter data; purchase/stock reconciliation |
| `cp_cutting_yield` | inspection_cutting_packing | edge trim, rejects and breakage | cutting and rejection log | ribbon input mass; accepted mass; edge trim; reject reason; breakage; internal return; external destination | line mass/area records and calibrated scales | kg | shift/lot, monthly reconciliation | same period as output | each included line | yield = accepted mass / ribbon input; reconcile every residual by destination | scale/sensor calibration; rejection and transfer records |
| `cp_accepted_sheet_output` | inspection_cutting_packing | accepted reference product | shipment, packing and quality record | product group; glass kind; state; thickness; dimensions; area; net mass; packing mass; coating; optical/iron result | calibrated scale or validated area-thickness-density calculation linked to acceptance | kg; m2; mm | per pack/lot | same period as inputs | each included cutting and packing area | sum net accepted mass by product group; exclude packing mass | calibration; calculation check; test certificate; shipment record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_mass` | sheet mass from geometry | mass_kg = accepted_area_m2 × mean_thickness_m × density_kg_per_m3; retain unrounded intermediate values | cp_ribbon_output; cp_accepted_sheet_output | kg sheet glass | `en-572-1-2012` |
| `calc_cullet_fraction` | cullet content | cullet fraction by origin = dry cullet mass by origin / total dry batch-input mass; total cullet is the sum of origin fractions | cp_batch_materials; cp_cullet_inputs | kg/kg dry batch input | `nga-flat-glass-pcr-2020`; `eu-jrc-glass-bref-2013` |
| `calc_cutting_yield` | inspection/cutting yield | cutting yield = net accepted unpacked sheet mass / annealed ribbon mass entering inspection/cutting | cp_ribbon_output; cp_cutting_yield; cp_accepted_sheet_output | kg/kg ribbon input |  |
| `calc_reference_normalization` | all inventory exchanges | normalized exchange = reporting-period exchange × 1,000 kg / reporting-period net accepted reference-product mass | all applicable collection protocols | exchange per 1,000 kg reference product |  |
| `calc_mass_balance` | each process and full foreground system | input mass = product output + internally transferred cullet + exported waste + releases + documented stock change; explain non-measured residuals | batch, furnace, ribbon, cutting and output records | reconciled mass balance and residual | `eu-jrc-glass-bref-2013` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_representativeness` | foreground period and product mix | Use a period representative of stable continuous operation, normally at least 12 consecutive months; disclose shutdowns, rebuilds, abnormal campaigns and product-mix weighting. | dated production and operating records |
| `dq_primary_data` | controlled foreground processes | Use primary site data for all included operations under operational control and report coverage by mass and energy. | meters, batch records, production records and coverage calculation |
| `dq_identity` | each declared product group | Link ordinary/low-iron/tinted state, ground/polished state, coating status, thickness, dimensions and optical/iron evidence to the output group. | specification, test certificate and production master data |
| `dq_energy` | furnace, lehr and auxiliaries | Keep fuels and electricity separate, state heating-value basis, electricity mix and shared-meter allocation; do not infer a fuel/electricity split from sector totals. | meter/invoice reconciliation and allocation worksheet |
| `dq_mass_balance` | batch through saleable sheet | Reconcile dry batch, cullet, molten/ribbon transfers, accepted output, internal returns, exported waste, emissions and stock change; investigate material residuals. | signed mass-balance worksheet |
| `dq_secondary_data` | upstream datasets | Select temporally, geographically and technologically representative datasets and document substitutions and data age. | dataset register and data-quality assessment |
| `dq_reasoned_estimate` | provisional cutting-yield QA range | Treat the 0.80–1.00 range only as a replaceable author screening value; it is neither a default inventory value nor a performance, legal or conformance threshold. | explicit estimate label and replacement review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | The product resolves to CPC 3.0 37113 and declares glass kind, applicable surface state, thickness, dimensions, delivery state and online-coating status. | `unsd-cpc-3-0-explanatory-notes-2025`; `unsd-hs-7005` |
| `validate_reference_flow` | reference flow | Net accepted unpacked output equals 1,000 kg and uses product flow `1b43024e-16ea-42d2-830d-329c4a2abc3d`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass group `93a60a57-a4c8-11da-a746-0800200b9a66`, and kg. |  |
| `validate_area_mass` | geometry conversion | Every area-to-mass conversion identifies area, thickness and density; use of 2,500 kg/m3 is limited to the disclosed EN 572-1 conventional soda-lime-silicate calculation value. | `en-572-1-2012` |
| `validate_optical_iron` | product qualifier | Iron content or applicable light-transmittance evidence is product-group specific and identifies the test/specification method; no category-wide value is inferred. | `en-572-1-2012` |
| `validate_cullet` | cullet statement | Internal, pre-consumer external and post-consumer cullet masses and fractions are separately reported and reconcile to total dry batch input. | `nga-flat-glass-pcr-2020`; `eu-jrc-glass-bref-2013` |
| `validate_processes` | process map | Melting/fuels/electricity, tin bath, annealing and inspection/cutting are present; surface finishing and online coating are included only when applicable and remain separately visible. | `eu-jrc-glass-bref-2013` |
| `validate_yield` | cutting and mass balance | Ribbon input, accepted output, internal return, external waste and stock change reconcile, and cutting yield is reported; a value outside the reasoned-estimate screen triggers review but not automatic nonconformance. |  |
| `validate_exclusions` | scope protection | Tempering, laminating, insulating-unit assembly, mirrors, offline coating and downstream fabrication are excluded or modelled as explicitly separate downstream processes; photovoltaic cover glass is not generalized to the whole category. | `unsd-hs-7005`; `nga-flat-glass-pcr-2020` |
| `validate_sources` | evidence and estimates | Every source ID resolves in the data-source register, site measurements retain quality evidence, and any reasoned estimate is labelled provisional and replaceable. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_unit_process_or_aggregated_cradle_to_gate_process |
| downstream_use | upstream material dataset for photovoltaic-module cover-glass, building-envelope and automotive-glazing studies when the declared product qualifiers match |
| allowed_use | unworked CPC 37113 sheet glass matching glass kind, thickness, optical/iron specification, online-coating status, geography, technology, period and factory gate |
| excluded_use | direct representation of tempered, laminated, insulating, mirrored, offline-coated, fabricated or single-purpose photovoltaic glass without additional specific processes and evidence |
| required_metadata | reference UUIDs; CPC code; glass kind; surface state; thickness/area/mass basis; density basis; iron or optical specification; online coating; cullet origin fractions; furnace and energy carriers; tin bath; annealing; cutting yield; delivery and packing state; geography; period; allocation; boundary |
| required_quality_disclosure | primary-data coverage; meter/calibration evidence; mass and energy reconciliation; product-mix weighting; upstream dataset choices; cutoff; allocation; estimate replacements; data-quality assessment |
| update_trigger | furnace rebuild or fuel switch; material electricity mix change; formulation or cullet-source change; coating/polishing route change; product-mix or thickness shift; boundary/allocation change; reporting data older than the declared validity period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (accessed 2026-08-08) | authoritative CPC 37113 identity and separation from adjacent glass-product subclasses |
| `unsd-hs-7005` | official_guidance | United Nations Statistics Division, HS 2017 heading 7005 detail, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/2089/7005 (accessed 2026-08-08) | unworked sheet scope and conditional absorbent, reflecting or non-reflecting layer context |
| `nga-flat-glass-pcr-2020` | standard | National Glass Association and NSF International, Product Category Rule for Environmental Product Declarations: NGA PCR for Flat Glass, Version 2.0, September 2020, https://www.glass.org/sites/default/files/2021-10/pcr_flat_glass_2020.pdf (accessed 2026-08-08; expired 2025-09-30) | historical category method evidence for declared mass, boundary, cutoff, allocation, cullet and primary-data rules; not asserted as current conformity authority |
| `environdec-cpcr-009-flat-glass` | official_guidance | International EPD System, c-PCR-009 Flat glass products, valid through 2030-04-07, https://www.environdec.com/pcr-library/pcr2019-14-c-pcr-009 (accessed 2026-08-08) | current flat-glass PCR landscape and need to use a more specific applicable program rule for an EPD claim |
| `eu-jrc-glass-bref-2013` | official_guidance | European Commission JRC/EIPPCB, Best Available Techniques Reference Document for the Manufacture of Glass, 2013, https://op.europa.eu/en/publication-detail/-/publication/ff8a3955-d0d0-46f5-8a15-4b638896cb56 (accessed 2026-08-08) | float-process decomposition, materials, cullet, energy, emissions, tin bath, annealing and sector QA ranges |
| `en-572-1-2012` | standard | EN 572-1:2012, Glass in building — Basic soda lime silicate glass products — Part 1: Definitions and general physical and mechanical properties, public preview https://cdn.standards.iteh.ai/samples/37400/fe7c33b74a5747198946b44e88108b42/SIST-EN-572-1-2012.pdf (accessed 2026-08-08) | float-glass definition, conventional 2,500 kg/m3 calculation density and optical-property test context |
| `eurofloat-epd-2024` | dataset | Glas Trösch / IBU, Environmental Product Declaration: Float glass in construction EUROFLOAT, 2024, https://www.euroglas.com/fileadmin/user_upload/Service/Nachweise_und_Zertifikate/Umwelt_und_Qualitaetszertifikate/Float_glass_in_construction_EUROFLOAT.pdf (accessed 2026-08-08) | manufacturer-specific corroboration of batch–furnace–tin bath–lehr–inspection/cutting route and delivery states; no category-wide default values |
| `vitro-flat-glass-epd-2024` | dataset | Vitro Architectural Glass, Environmental Product Declaration: Flat Glass Products, 2024, https://www.vitroglazings.com/media/nf0nm25r/vitro-epd-flat-glass-products.pdf (accessed 2026-08-08) | manufacturer-specific corroboration of clear, low-iron and tinted variants and process sequence; no category-wide default values |
