---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.paints-and-varnishes
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Paints and varnishes

## 1. Scope and Applicability

This PCR applies to factory production of liquid or powder paints, varnishes, lacquers, primers, woodstains, performance coatings, and related formulated coating products classified under CPC 3.0 code 35110. It covers water-borne, solvent-borne, powder, one-component, multi-component, and on-site cooked varnish routes when the route is declared.

The foreground system produces a packaged, saleable coating at the factory gate. It includes formulation, dispersion or milling, let-down and tinting, conditional thermal cooking, quality control and rework, filtration, filling, packaging, equipment cleaning, direct releases, and on-site waste handling. Printing and writing inks, artists' colours, adhesives and sealants, paint removers, coating-application services, cured coatings on substrates, and upstream manufacture of pigments or binders as separate products are outside this PCR.

The reference amount supports production inventory and cradle-to-gate datasets. Comparisons based on coating service shall additionally convert product mass to a declared covered area, performance, maintenance cycle, and study period; the factory-gate reference amount alone does not assert functional equivalence.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.paints-and-varnishes |
| classification_refs | CPC 3.0: 35110, Paints and varnishes and related products |
| covered_products | Water-borne and solvent-borne paints, varnishes, lacquers, primers, woodstains, performance coatings, powder coatings, and related formulated coating products |
| excluded_products | Printing and writing inks; artists' colours; adhesives and sealants; paint removers; coating-application services; cured coatings or coated articles; separately produced upstream pigments and binders |
| representative_product | Packaged paint or varnish conforming to its declared formulation family and sale specification |
| production_route | Ingredient receipt and dosing; mixing and dispersion or milling; let-down, tinting, and filtration; conditional thermal cooking; quality control and rework; filling and packaging; cleaning and waste management |
| market_state | Net coating product packaged for sale at the factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Packaged paint or varnish at the factory gate |
| How much | 1 kg net coating product; packaging is inventoried separately and is not part of the 1 kg net product mass |
| How well | Conforms to the declared product family, formulation route, solids content, density, VOC content, coverage or spreading-rate specification where relevant, and release quality criteria |
| How long or cycle | One production batch; no use-stage service life is represented |
| reference_flow_link | The quantitative reference output of filling_packaging is 1 kg net product linked to the selected Paint flow |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net packaged coating product at factory gate |
| Reference product flow | Paint; UUID b2aa1a35-1823-4b13-96db-d5b89eda2db5 |
| Reference flow property | Mass; UUID 93a60a56-a3c8-11da-a746-0800200b9a66 |
| Reference unit group | Units of mass; UUID 93a60a57-a4c8-11da-a746-0800200c9a66 |
| Reference unit | kg |
| Required qualifiers | formulation family; water-borne, solvent-borne, powder, one-component, or multi-component route; product subcategory and intended substrate; solids content; density; VOC content; packaging format and material; plant and geography; batch period; coverage or spreading rate and performance class when relevant |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mu_reference_mass | Reference product output | Mass | kg | Normalize the packaged saleable product to 1 kg net coating, excluding packaging mass. |
| mu_material_inputs | Formulation ingredients, cleaning agents, packaging, wastes, and wastewater | Mass | kg | Record wet mass as received; additionally record dry matter, solids, or concentration when required to interpret the material. |
| mu_liquid_volume | Metered water, solvent, or liquid ingredients when mass is not directly measured | Volume and density | m3 and kg/m3 | Convert volume to mass using a batch- and temperature-representative measured density; retain the raw volume and density. |
| mu_electricity | Purchased or generated electricity | Energy | kWh | Record meter or allocated electricity and identify voltage level and supply dataset. |
| mu_thermal_energy | Fuel or supplied heat used by a thermal cooking route | Net calorific value or energy | MJ | Report fuel mass or volume and net calorific value, or directly metered supplied heat; do not substitute electricity without disclosure. |
| mu_air_emissions | VOC and particulate releases | Mass | kg | Report pollutant-specific measured or calculated mass after control; identify capture and abatement assumptions. |
| mu_service_conversion | Comparative coating service | Area, performance, and time | m2 and year | Convert product mass using declared coverage or spreading rate, density where needed, applied fraction, maintenance multiplier, performance criterion, and study period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt at the manufacturing site of coating ingredients, intermediates, packaging, fuels, and utilities |
| starting_condition_role | Foreground factory-gate start; upstream production and supplier-to-plant transport remain required background contributions for cradle-to-gate results |
| product_classification_scope | CPC 3.0 code 35110 products represented by the declared formulation family and production route |
| recursive_input_rule | Purchased paint, varnish, or intermediate coating used as an input shall be recorded as a visible technosphere input and shall not inherit this foreground process recursively |
| upstream_dataset_requirement | Use representative upstream datasets for pigments, fillers, binders, solvents, water, additives, packaging, fuels, electricity, transport, and waste treatment; disclose geography, technology, age, and substitutions |
| disclosure | Disclose excluded operations, outsourced steps, rework loops, cut-offs, abatement, allocation, data gaps, and whether application and end-of-life stages are outside the dataset |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_received_inputs | Foreground start | Include receipt, storage losses, and dosing of all ingredients, intermediates, packaging, fuels, and utilities; attach upstream datasets and supplier-to-plant transport when reporting cradle-to-gate impacts. | epd-international-pcr-2019-14-v2-0-1 |
| sb_manufacturing_operations | Factory operations | Include mixing, dispersion or milling, let-down, tinting, filtration, conditional thermal cooking, quality control, rework, filling, packaging, equipment cleaning, direct releases, and on-site waste handling when present. | us-epa-ap42-6-4-1995 |
| sb_direct_releases | Air, water, and waste releases | Record direct VOC, particulate, wastewater, coating residue, and other material releases after control, together with capture, abatement, and destination. | eu-commission-2025-2607, us-epa-ap42-6-4-1995 |
| sb_use_end_of_life | Factory-gate profile | Exclude application, service, maintenance, removal, and final end-of-life from the factory-gate dataset; include them only in a separately declared expanded study. | jrc-145239-2026 |
| sb_cutoff_disclosure | Completeness | Do not omit known hazardous constituents or direct releases solely because their mass is small; document every cut-off and apply the governing programme's completeness rules. | epd-international-pcr-2019-14-v2-0-1 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| formulation_dispersion | Formulation, dispersion, and finishing | required | All products | Converts ingredients into specification-conforming bulk coating | kg bulk coating released to filling |
| thermal_cooking | Thermal cooking of varnish or resin intermediate | conditional | Include only when cooking or reaction occurs at the reporting site | Produces a cooked intermediate and associated releases | kg cooked intermediate transferred to formulation |
| filling_packaging | Filling and packaging | required | All packaged products | Produces the factory-gate reference product | 1 kg net packaged coating product |
| cleaning_waste_management | Equipment cleaning and on-site waste management | required | All products; record zero only with documented evidence | Records cleaning inputs, wastewater, residues, recovery, and releases | kg net packaged coating product supported |

### Process: Formulation, dispersion, and finishing (`formulation_dispersion`)

#### Inputs

##### Product flows

###### Binder or resin (`fd_binder`)

Record each binder or resin family separately using supplier mass records; no generic UUID is assigned until the actual chemistry is known.

- Selected flow: Product-specific binder or resin flow; unresolved family UUID
- Flow property / unit: Mass / kg
- Amount rule: Sum batch issue mass and subtract documented returns, normalized by released bulk coating mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg bulk coating released to filling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_batch_materials
- Sources: eu-commission-2025-2607, jrc-145239-2026
- Range: Provisional formulation guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 0.80
  - Unit: kg/kg bulk coating
  - Basis: Reasoned estimate spanning materially different coating families; replace with plant formulation data.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Pigments and fillers (`fd_pigments_fillers`)

Record pigment and filler ingredients separately where supplier datasets differ; titanium dioxide may use the confirmed selected flow.

- Selected flow: Titanium Dioxide; UUID 12525dde-1d7a-4024-9ea3-5b90912a48f8, plus product-specific pigment and filler flows
- Flow property / unit: Mass / kg
- Amount rule: Sum batch issue mass and subtract documented returns, normalized by released bulk coating mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg bulk coating released to filling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_batch_materials
- Sources: jrc-145239-2026
- Range: Provisional formulation guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.80
  - Unit: kg/kg bulk coating
  - Basis: Reasoned estimate allowing clear varnishes and highly filled coatings; replace with plant formulation data.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Formulation water (`fd_water`)

Record water deliberately added to the formula, separate from cleaning water.

- Selected flow: Fresh water; UUID 021fbe67-2b7a-43b4-af09-4c3d62b83e3b
- Flow property / unit: Mass / kg
- Amount rule: Use metered mass or convert metered volume with measured density, normalized by released bulk coating mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg bulk coating released to filling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_batch_materials
- Sources: eu-commission-2025-2607
- Range: Provisional formulation guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.80
  - Unit: kg/kg bulk coating
  - Basis: Reasoned estimate across solvent-borne, water-borne, and powder products; replace with plant formulation data.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Formulation solvent (`fd_solvent`)

Record each organic solvent by substance or supplier product where possible.

- Selected flow: Solvent, for coating, at plant; UUID db1ae0f8-e5fb-408a-a443-e5d837ec8767, or substance-specific solvent flow
- Flow property / unit: Mass / kg
- Amount rule: Sum batch issue mass and subtract documented returns, normalized by released bulk coating mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg bulk coating released to filling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_batch_materials
- Sources: us-epa-ap42-6-4-1995, jrc-145239-2026
- Range: Provisional formulation guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.80
  - Unit: kg/kg bulk coating
  - Basis: Reasoned estimate across powder, water-borne, and high-solvent products; replace with plant formulation data.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Additives (`fd_additives`)

Record significant additives separately by chemistry and hazard relevance.

- Selected flow: Product-specific additive flow; unresolved family UUID
- Flow property / unit: Mass / kg
- Amount rule: Sum batch issue mass and subtract documented returns, normalized by released bulk coating mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg bulk coating released to filling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_batch_materials
- Sources: eu-commission-2025-2607
- Range: Provisional formulation guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg bulk coating
  - Basis: Reasoned estimate; replace with plant formulation and purchasing data.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Electricity (`fd_electricity`)

Include mixing, dispersion, milling, pumping, ventilation, filtration, and local quality-control electricity.

- Selected flow: Electricity, medium voltage, at plant GLO; UUID 00e13b1e-b38b-42bc-b5d9-22b1ff5d4355, replaced by a representative regional supply flow
- Flow property / unit: Net calorific value / kWh
- Amount rule: Use submetered electricity or allocate a reconciled site meter total by causal equipment runtime and load.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg bulk coating released to filling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_formulation_energy
- Sources: eu-commission-2025-2607
- Range: Provisional process-energy guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 1.5
  - Unit: kWh/kg bulk coating
  - Basis: Reasoned estimate covering low-shear blending through intensive milling; replace with metered data.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bulk coating released to filling (`fd_bulk_output`)

This intermediate closes the formulation process and transfers to filling.

- Selected flow: Product-specific bulk paint or varnish intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measure released batch mass; calculate from filled mass plus retained samples and documented downstream losses when direct weighing is unavailable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: total formulation inputs
- Basis kind: Material input (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_batch_outputs
- Sources: mass-balance-identity
- Range: Provisional batch-yield guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.90
  - Upper: 1.00
  - Unit: kg/kg total formulation inputs
  - Basis: Reasoned estimate used only to flag unreconciled losses; replace with site-specific yield history.
  - Basis kind: Material input (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Waste flows

###### Off-specification coating and retained residue (`fd_waste_paint`)

Separate material internally reworked from material sent to recovery, treatment, or disposal.

- Selected flow: Waste paint; UUID 877e5a04-76c8-4c5b-ac4c-062f5beeb2bd
- Flow property / unit: Mass / kg
- Amount rule: Sum weighed residues and rejected batches leaving the process, excluding documented closed-loop rework.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg bulk coating released to filling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_batch_outputs
- Sources: mass-balance-identity
- Range: Provisional waste guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg bulk coating
  - Basis: Reasoned estimate; investigate values outside the range rather than clipping them.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Elementary flows

###### Volatile organic compounds to air (`fd_voc_air`)

Record measured VOC or a documented substance-level mass balance after capture and control.

- Selected flow: VOC, volatile organic compounds, unspecified origin; UUID 08a91e70-3ddc-11dd-9155-0050c2490048
- Flow property / unit: Mass / kg
- Amount rule: Use monitored release or solvent balance; report control efficiency and avoid double counting retained solvent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg solvent charged
- Basis kind: Material input (`process_output`)
- Evidence kind: Calculated value (`calculated_from_collection`)
- Collection protocol: cp_process_emissions
- Sources: us-epa-ap42-6-4-1995
- Range: Historical uncontrolled manufacturing-loss check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 0.02
  - Unit: kg VOC/kg solvent charged
  - Basis: Historical AP-42 statement for solvent loss from paint and varnish manufacturing; not a current default or regulatory factor.
  - Basis kind: Material input (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: us-epa-ap42-6-4-1995

###### Particulate matter to air (`fd_pm_air`)

Record pigment and powder handling releases after capture and control.

- Selected flow: Particulate matter; UUID 0418b561-ecf8-33c8-9c81-225789f15bd3
- Flow property / unit: Mass / kg
- Amount rule: Use monitored release or dry-material balance adjusted for documented capture and control.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg dry pigment and filler handled
- Basis kind: Material input (`process_output`)
- Evidence kind: Calculated value (`calculated_from_collection`)
- Collection protocol: cp_process_emissions
- Sources: us-epa-ap42-6-4-1995
- Range: Historical uncontrolled dry-pigment handling check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.01
  - Unit: kg particulate/kg dry pigment handled
  - Basis: Historical AP-42 estimate for uncontrolled particulate emissions; not a current default or regulatory factor.
  - Basis kind: Material input (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: us-epa-ap42-6-4-1995

### Process: Thermal cooking of varnish or resin intermediate (`thermal_cooking`)

#### Inputs

##### Product flows

###### Varnish or resin precursors (`tc_precursors`)

Include only ingredients entering the on-site cooked intermediate.

- Selected flow: Chemistry-specific precursor flows
- Flow property / unit: Mass / kg
- Amount rule: Sum batch issue mass and subtract documented returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg cooked intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_thermal_batch
- Sources: us-epa-ap42-6-4-1995

###### Thermal energy (`tc_thermal_energy`)

Record fuel and heat carriers separately; the flow UUID remains route-specific.

- Selected flow: Route-specific fuel or supplied heat flow; unresolved thermal-energy UUID
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use metered fuel or heat and measured net calorific value; allocate shared heat by causal duty.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg cooked intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_thermal_energy
- Sources: us-epa-ap42-6-4-1995
- Range: Provisional thermal-energy guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg cooked intermediate
  - Basis: Reasoned estimate; replace with metered route-specific data.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cooked varnish or resin intermediate (`tc_intermediate`)

Transfer the measured intermediate to formulation without assigning a final-product reference flow.

- Selected flow: Product-specific cooked intermediate
- Flow property / unit: Mass / kg
- Amount rule: Use measured batch output reconciled with precursor inputs and recorded releases.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: total precursor mass
- Basis kind: Material input (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_thermal_batch
- Sources: mass-balance-identity

##### Waste flows

##### Elementary flows

###### Thermal-route VOC to air (`tc_voc_air`)

Record route-specific VOC separately from formulation emissions before aggregation.

- Selected flow: VOC, volatile organic compounds, unspecified origin; UUID 08a91e70-3ddc-11dd-9155-0050c2490048
- Flow property / unit: Mass / kg
- Amount rule: Use monitored release or a documented batch mass balance after capture and control.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg cooked intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated value (`calculated_from_collection`)
- Collection protocol: cp_thermal_emissions
- Sources: us-epa-ap42-6-4-1995

### Process: Filling and packaging (`filling_packaging`)

#### Inputs

##### Product flows

###### Bulk coating (`fp_bulk_input`)

Transfer the released bulk coating from formulation.

- Selected flow: Product-specific bulk paint or varnish intermediate
- Flow property / unit: Mass / kg
- Amount rule: Use transferred or reconciled batch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg net packaged product
- Basis kind: Reference flow (`reference_flow`）
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_packaging_records
- Sources: mass-balance-identity

###### Packaging materials (`fp_packaging`)

Record containers, closures, liners, labels, cartons, pallets, and other non-reusable packaging separately.

- Selected flow: Material-specific packaging flows; unresolved packaging-material UUIDs
- Flow property / unit: Mass / kg
- Amount rule: Use bill-of-material quantity reconciled with issues, returns, and packaging scrap.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg net packaged product
- Basis kind: Reference flow (`reference_flow`）
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_packaging_records
- Sources: eu-commission-2025-2607
- Range: Provisional packaging guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 0.30
  - Unit: kg packaging/kg net product
  - Basis: Reasoned estimate spanning bulk and small-container formats; replace with the packaging bill of materials.
  - Basis kind: Reference flow (`reference_flow`）
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged paint or varnish (`fp_reference_product`)

This is the quantitative reference output.

- Selected flow: Paint; UUID b2aa1a35-1823-4b13-96db-d5b89eda2db5
- Flow property / unit: Mass / kg
- Amount rule: Set to exactly 1 kg net coating after normalizing measured saleable batch output; inventory packaging separately.
- Value mode: Fixed constant (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference product output
- Basis kind: Reference flow (`reference_flow`）
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Sources: mass-balance-identity
- Range: Reference amount identity
  - Range role: Expected range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: Defined reference amount.
  - Basis kind: Reference flow (`reference_flow`）
  - Evidence kind: Method formula (`method_formula`)
  - Sources: mass-balance-identity

##### Waste flows

###### Packaging scrap (`fp_packaging_waste`)

Record material-specific packaging scrap sent to recovery, treatment, or disposal.

- Selected flow: Material-specific packaging waste flows
- Flow property / unit: Mass / kg
- Amount rule: Weigh or reconcile issued packaging against packaged units, returns, and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg net packaged product
- Basis kind: Reference flow (`reference_flow`）
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_packaging_records
- Sources: mass-balance-identity
- Range: Provisional packaging-waste guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg net product
  - Basis: Reasoned estimate; replace with packaging reconciliation.
  - Basis kind: Reference flow (`reference_flow`）
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Elementary flows

### Process: Equipment cleaning and on-site waste management (`cleaning_waste_management`)

#### Inputs

##### Product flows

###### Cleaning water (`cw_water`)

Record cleaning water separately from formulation water.

- Selected flow: Fresh water; UUID 021fbe67-2b7a-43b4-af09-4c3d62b83e3b
- Flow property / unit: Mass / kg
- Amount rule: Use metered mass or volume converted with measured density and allocate by documented cleaning event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg net packaged product supported
- Basis kind: Reference flow (`reference_flow`）
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_cleaning_inputs
- Sources: eu-commission-2025-2607
- Range: Provisional cleaning-water guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg net product
  - Basis: Reasoned estimate; replace with cleaning-event records.
  - Basis kind: Reference flow (`reference_flow`）
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Cleaning solvent (`cw_solvent`)

Record fresh and recovered cleaning solvents separately.

- Selected flow: Solvent, for coating, at plant; UUID db1ae0f8-e5fb-408a-a443-e5d837ec8767, or substance-specific solvent flow
- Flow property / unit: Mass / kg
- Amount rule: Reconcile issued, recovered, returned, emitted, and discarded solvent by cleaning event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg net packaged product supported
- Basis kind: Reference flow (`reference_flow`）
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_cleaning_inputs
- Sources: us-epa-ap42-6-4-1995
- Range: Provisional cleaning-solvent guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net product
  - Basis: Reasoned estimate; replace with cleaning-event solvent balances.
  - Basis kind: Reference flow (`reference_flow`）
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater (`cw_wastewater`)

Characterize wastewater solids, organic content, and destination where data permit.

- Selected flow: Wastewater; UUID bc2cd1d5-69d5-42d7-818f-38a69ebb18ef
- Flow property / unit: Mass / kg
- Amount rule: Use discharge meter or cleaning-event water balance, net of documented recovered water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg net packaged product supported
- Basis kind: Reference flow (`reference_flow`）
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_cleaning_outputs
- Sources: eu-commission-2025-2607
- Range: Provisional wastewater guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg net product
  - Basis: Reasoned estimate; replace with discharge data or cleaning-event balance.
  - Basis kind: Reference flow (`reference_flow`）
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Cleaning residue and waste paint (`cw_residue`)

Record recovered coating separately from residue leaving for treatment or disposal.

- Selected flow: Waste paint; UUID 877e5a04-76c8-4c5b-ac4c-062f5beeb2bd
- Flow property / unit: Mass / kg
- Amount rule: Weigh residue containers and subtract documented internal recovery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg net packaged product supported
- Basis kind: Reference flow (`reference_flow`）
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_cleaning_outputs
- Sources: mass-balance-identity
- Range: Provisional cleaning-residue guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg net product
  - Basis: Reasoned estimate; replace with residue shipment and recovery records.
  - Basis kind: Reference flow (`reference_flow`）
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Elementary flows

###### Cleaning VOC to air (`cw_voc_air`)

Record cleaning-solvent emissions separately before aggregation.

- Selected flow: VOC, volatile organic compounds, unspecified origin; UUID 08a91e70-3ddc-11dd-9155-0050c2490048
- Flow property / unit: Mass / kg
- Amount rule: Calculate from the cleaning-solvent balance after recovery, waste shipment, and control, or use monitored release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: kg cleaning solvent issued
- Basis kind: Material input (`process_output`)
- Evidence kind: Calculated value (`calculated_from_collection`)
- Collection protocol: cp_cleaning_outputs
- Sources: us-epa-ap42-6-4-1995
- Range: Provisional cleaning-solvent mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg VOC/kg cleaning solvent issued
  - Basis: Reasoned mass-conservation bound; replace with monitored release or a reconciled event-specific solvent balance.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_avoid | Shared operations and utilities | First avoid allocation through batch segregation, submetering, or process subdivision. | iso-14044-2006 |
| al_internal_rework | In-specification closed-loop rework | Keep internal rework inside the foreground system; do not create a co-product credit, and reconcile its mass without double counting fresh input. | mass-balance-identity |
| al_saleable_coproduct | Multiple saleable outputs | Use a documented physical causal relationship where it represents resource use; use economic allocation only when no defensible physical relationship exists and disclose prices, period, and sensitivity. | iso-14044-2006 |
| al_waste_recovery | Waste, recovered solvent, and recovered packaging | Model treatment burdens and any credits under the governing programme; disclose system expansion, substitution, or cut-off and never treat avoided waste as negative foreground input. | iso-14044-2006, epd-international-pcr-2019-14-v2-0-1 |
| al_shared_site_energy | Shared site electricity and heat | Allocate by metered equipment consumption or causal runtime and load; mass allocation is allowed only with justification and sensitivity for materially different routes. | iso-14044-2006 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_batch_materials | formulation_dispersion | formulation ingredients | batch issue and return record | material ID, lot, gross issue, return, density, solids | ERP issue and calibrated scale; volume conversion only with measured density | kg | each batch | representative reporting year | reporting plant | sum net issues by material and product family | purchase ledger, batch sheet, scale calibration |
| cp_formulation_energy | formulation_dispersion | electricity | meter and equipment log | meter start, meter end, runtime, load, product family | submeter; otherwise reconciled site meter with causal allocation | kWh | batch or monthly | representative reporting year | reporting plant | sum direct readings; allocate documented shared remainder | meter calibration, energy reconciliation |
| cp_batch_outputs | formulation_dispersion | bulk output and residue | batch yield record | released mass, retained sample, rework, residue, stock change | calibrated scale and batch reconciliation | kg | each batch | representative reporting year | reporting plant | mass-weighted aggregate by product family | release record, waste record, mass balance |
| cp_process_emissions | formulation_dispersion | VOC and particulate release | monitoring and material balance | solvent charged, solvent retained, recovery, waste, capture, control, measured concentration, gas flow | compliant monitoring or documented mass balance | kg | campaign and reporting period | representative reporting year | reporting plant and emission point | sum pollutant mass after control; keep routes separate | monitoring report, control log, balance reconciliation |
| cp_thermal_batch | thermal_cooking | precursors and cooked intermediate | batch record | precursor issue, return, intermediate output, residue | calibrated scale and batch reconciliation | kg | each thermal batch | representative reporting year | reporting plant | sum net input and output by route | batch sheet, scale calibration, mass balance |
| cp_thermal_energy | thermal_cooking | fuel and heat | meter and fuel record | fuel mass or volume, net calorific value, heat meter, runtime | calibrated meter and supplier fuel specification | MJ | each batch or monthly | representative reporting year | reporting plant | convert with recorded net calorific value and sum by route | meter calibration, fuel certificate |
| cp_thermal_emissions | thermal_cooking | route VOC | monitoring and batch balance | volatile input, retained mass, condensate, recovery, control, measured release | compliant monitoring or documented mass balance | kg | campaign and reporting period | representative reporting year | reporting plant and emission point | sum release after control by route | monitoring report, batch balance |
| cp_packaging_records | filling_packaging | bulk input, product output, and packaging | filling and bill-of-material record | bulk transfer, filled net mass, unit count, packaging issue, return, scrap | calibrated filler or scale plus inventory reconciliation | kg | each batch | representative reporting year | reporting plant | normalize saleable net output to 1 kg and sum packaging by material | fill check, bill of materials, scale calibration |
| cp_cleaning_inputs | cleaning_waste_management | water and solvent input | cleaning-event record | equipment, water, fresh solvent, recovered solvent, return | meter, weighed issue, and solvent log | kg | each cleaning event | representative reporting year | reporting plant | assign directly to product campaign or documented shared cleaning driver | cleaning log, meter calibration |
| cp_cleaning_outputs | cleaning_waste_management | wastewater, residue, and VOC | discharge, shipment, and balance record | wastewater, solids, residue, recovery, solvent issued, solvent returned, VOC control | discharge meter, weighed shipment, and solvent balance | kg | each event and reporting period | representative reporting year | reporting plant | sum by destination and product family; reconcile recovery | manifests, discharge report, solvent balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | All foreground exchanges | normalized amount = reporting-period amount / net saleable coating mass | exchange amount, net saleable coating mass | amount per kg net product | mass-balance-identity |
| calc_material_balance | Each production route | closure gap = total mass inputs - saleable output - transferred intermediates - recorded wastes - recorded releases - justified stock change | wet-mass inputs, outputs, wastes, releases, stock change | absolute and percentage closure gap | mass-balance-identity |
| calc_voc_balance | VOC release | VOC release = volatile input - VOC retained in product - recovered solvent - solvent in shipped waste - destroyed or captured mass - justified stock change | solvent and volatile-component balance | kg VOC after control | us-epa-ap42-6-4-1995, mass-balance-identity |
| calc_pm_release | Particulate release | released particulate = dry material handled × measured or justified loss fraction × one minus capture efficiency × one minus control efficiency | dry pigment and filler handled, loss, capture, control | kg particulate release | us-epa-ap42-6-4-1995 |
| calc_shared_energy | Shared energy | allocate reconciled shared energy by metered runtime and load or another documented causal driver; test material alternatives | meter total, direct readings, driver quantities | process and product energy | iso-14044-2006 |
| calc_service_conversion | Comparative service | required product mass = declared area × application-specific mass per area × applied fraction × maintenance multiplier for the declared study period | area, coverage or spreading rate, density where needed, applied fraction, maintenance cycle, study period | kg product for equivalent declared service | jrc-145239-2026 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_technology | Foreground route | Data shall represent the declared water-borne, solvent-borne, powder, one-component, multi-component, or thermal route and its actual control technology. | process description, formulation family, equipment and control records |
| dq_time | Foreground data | Use a representative continuous twelve-month period where available; explain shutdowns, campaigns, abnormal batches, and extrapolation. | dated batch, meter, purchase, waste, and production records |
| dq_geography | All datasets | Identify plant country or region and use representative electricity, fuel, transport, water, and waste-treatment datasets. | dataset metadata and supplier or utility records |
| dq_completeness | Material and emission inventory | Reconcile mass and energy, list omissions and cut-offs, and retain hazardous or environmentally significant constituents and releases. | balance checks, omission register, monitoring reports |
| dq_source_priority | Secondary data | Prefer official standards, PCRs, regulations, official datasets and institutional reports, then peer-reviewed literature, then industry documents; label reasoned estimates as provisional. | source register and estimate flags |
| dq_uncertainty | Estimates and allocation | Quantify or qualitatively assess uncertainty for provisional estimates, secondary substitutions, allocation, and service conversion. | sensitivity results and data-quality notes |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| val_reference_identity | Reference flow | Confirm Paint UUID b2aa1a35-1823-4b13-96db-d5b89eda2db5, Mass UUID 93a60a56-a3c8-11da-a746-0800200b9a66, unit-group UUID 93a60a57-a4c8-11da-a746-0800200c9a66, kg unit, and exactly 1 kg net product excluding packaging. | mass-balance-identity |
| val_qualifiers | Dataset metadata | Reject an incomplete reference definition when any required qualifier is absent or ambiguous. | eu-commission-2025-2607, jrc-145239-2026 |
| val_route_coverage | Process map | Require formulation_dispersion, filling_packaging, and cleaning_waste_management; require thermal_cooking only when on-site cooking or reaction occurs and otherwise record it as not applicable. | us-epa-ap42-6-4-1995 |
| val_mass_closure | Foreground processes | Calculate route and site mass-balance closure, report the gap and threshold, and investigate rather than clip unexplained losses. | mass-balance-identity |
| val_records | Collected values | Confirm temporal coverage, site scope, units, calibration, aggregation, and traceability to the named collection protocol. | epd-international-pcr-2019-14-v2-0-1 |
| val_emissions | Direct VOC and particulate | Confirm route-specific monitoring or balances, capture and control treatment, and absence of double counting; use AP-42 ranges only as historical QA checks. | us-epa-ap42-6-4-1995 |
| val_allocation | Shared operations and outputs | Confirm subdivision was considered first, the causal basis is documented, and economic allocation is justified and sensitivity-tested if used. | iso-14044-2006 |
| val_background | Cradle-to-gate profile | Confirm upstream datasets and transport are present for material inputs and disclose geography, technology, age, and substitutions. | epd-international-pcr-2019-14-v2-0-1 |
| val_service_claim | Comparative claims | Reject service-equivalence claims based only on 1 kg product; require declared area, performance, applied fraction, coverage or spreading rate, maintenance, and study period. | jrc-145239-2026 |
| val_provisional | Reasoned estimates | Flag all reasoned_estimate ranges as provisional and prevent their use as plant defaults; replace them before publication unless explicitly reviewed and justified. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for a declared paint or varnish product family and plant route |
| downstream_use | Cradle-to-gate LCA, EPD modules A1 to A3 where the governing programme permits, product footprinting, and input to expanded application or building studies |
| allowed_use | Products and routes within the declared scope when reference qualifiers, process coverage, source quality, and validation checks are satisfied |
| excluded_use | Direct comparison of unlike coating services; coating-application inventory without added use-stage data; printing inks, artists' colours, adhesives, paint removers, or cured coated articles |
| required_metadata | PCR id and version; product and formulation family; route; CPC reference; product and flow UUID; plant geography; period; solids, density, VOC and coverage properties; packaging; process map; allocation; cut-offs; data sources |
| required_quality_disclosure | Primary-data share; secondary dataset substitutions; mass and energy closure; direct-emission method; allocation; uncertainty; provisional estimates; excluded and outsourced operations |
| update_trigger | Material formulation or route change; new plant or control technology; packaging change; revised classification or applicable PCR; data older than the governing programme permits; material correction to UUID, source, or calculation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| eu-commission-2025-2607 | official_guidance | European Commission, Commission Decision (EU) 2025/2607 establishing EU Ecolabel criteria for paints, varnishes and related products, CELEX 32025D2607, 2025; https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX:32025D2607 | Product-family scope; formulation and packaging characteristics; production air, water, VOC, material-efficiency and energy-efficiency concerns |
| jrc-145239-2026 | official_guidance | European Commission Joint Research Centre, Revision of the EU Ecolabel criteria for Paints and Varnishes: Final Technical Report, JRC145239, DOI 10.2760/7406739, 2026; https://doi.org/10.2760/7406739 | Raw-material hotspots; cradle-to-grave context; coverage-, performance-, maintenance-, and study-period-based service conversion |
| us-epa-ap42-6-4-1995 | official_guidance | United States Environmental Protection Agency, AP-42 Section 6.4 Paint and Varnish, January 1995; https://www.epa.gov/sites/default/files/2020-10/documents/c06s04.pdf | Manufacturing process map; solvent and pigment release mechanisms; historical uncontrolled QA ranges |
| epd-international-pcr-2019-14-v2-0-1 | standard | EPD International, PCR 2019:14 Construction products, version 2.0.1, 2025; https://www.environdec.com/pcr-library/pcr_6b99d07c-4b75-4763-4485-08dd775d2e49 | Cradle-to-gate modules, upstream material and transport coverage, data quality, completeness, and waste treatment framing |
| iso-14044-2006 | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines; https://www.iso.org/standard/38498.html | Allocation hierarchy and LCA methodological requirements |
| mass-balance-identity | method_factor | Conservation of mass calculation identity | Reference normalization, yield, rework, packaging, solvent, and process mass-balance calculations |
