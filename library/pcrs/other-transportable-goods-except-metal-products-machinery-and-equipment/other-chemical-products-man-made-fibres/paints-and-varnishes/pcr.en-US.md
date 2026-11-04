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
| reference_flow_link | fp_reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Paint; UUID b2aa1a35-1823-4b13-96db-d5b89eda2db5 |
| Reference flow property | Mass; UUID 93a60a56-a3c8-11da-a746-0800200b9a66 |
| Reference unit group | Units of mass; UUID 93a60a57-a4c8-11da-a746-0800200c9a66 |
| Reference unit | kg |
| Required qualifiers | formulation family; water-borne / solvent-borne / powder / one-component / multi-component / actual cooked route; product subcategory and intended substrate; solids content; density; VOC content; packaging format and material; plant and geography; batch period; coverage or spreading rate and performance class when relevant |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

The reference binding is conditional on the complete-object identity and actual-route requirements in section 5.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mu_reference_mass | Reference product output | Mass | kg | Normalize the packaged saleable product to 1 kg net coating, excluding packaging mass. |
| mu_material_inputs | Formulation ingredients, cleaning agents, packaging, wastes, and wastewater | Mass | kg | Record wet mass as received; additionally record dry matter, solids, or concentration when required to interpret the material. Where solids/nonvolatile (NV) content is used, declare the actual measurement method, test state and conditions, and compatibility with the supplied formulation and supplier reference. Keep whole wet mass, NV fraction, carrier water and retained volatile liquid in separate accounts; retained water, ethanol or other volatile carrier is not NV solids. An operational residue reading requires its retained-carrier/interference uncertainty to be disclosed; it does not establish an assumed cure or yield. |
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

### Whole-reference binding limits

The native Paint UUID describes a liquid pigmented paint with a reference Mass property of 1; it does not establish identity for powder coatings, clear varnishes, every performance system or an arbitrary multi-component kit. Use this binding only when the declared configuration matches the complete native object; never change the product to fit the UUID. Other actual routes require an individually verified reference flow for the complete finished preparation, with its property, unit, physical form and delivery state; an unresolved core reference identity blocks use for that dataset. For multi-component products, record the components and proportions of the declared sold configuration: 1 kg is the sum of their net coating masses, not the mass of one active resin.

### Actual configuration and individual exchanges

Each dataset represents one declared product, formulation, site, period and actual route. The named cards below are conditional individual-exchange methods, not a common plant BOM or an assertion that all these chemicals are used; absence requires actual evidence of non-applicability. Expand every actual purchased ingredient, complete preparation, packaging item, fuel, steam supply, electricity input, cleaning agent, waste stream and emitted substance by its individual name, raw quantity and provider. One example cannot stand for other real exchanges, and a category label is never a selected flow. An unresolved UUID retains its concrete name and identity gap; do not invent one.

For a purchased complete polymer emulsion, pigment paste, solvent mixture or coating preparation, record the whole as-received purchase once; its polymer, pigment, water and solvent contents are a non-additive composition subledger, not additional purchases. For on-site compounding, each separately purchased actual component is an individual exchange. Retain composition, concentration and aqueous phase with the raw records; do not force formulation water into powder routes or collapse 1K/multi-component/cooked routes into a water-borne sample. Track ordinary auxiliary-identity and provider gaps against affected rows; incompatible core reference identity, unknown key actual materials or missing routes block use for that dataset. Source scope does not establish a site recipe.

### Production cohort, gate and single normalization

The protocols' aggregation_rule declares the final result basis, not an instruction to meter each kg separately. Retain the raw aggregation steps in collection_method and all raw_fields. Build a traceable cohort for the same product configuration, site, period and actual batches, retaining actual quantity Q: the kg net coating mass first released after completed filling/packaging and conformity to sale specification, excluding packaging. Q is not design capacity, material input, shipments or output inferred from an assumed yield. Newly accepted product in closing finished-goods stock is already in Q exactly once; do not add or subtract that closing stock again. Shipping opening finished goods, reaccepting returns or internal transfer does not create new production. Retain opening/closing raw-material, WIP and finished-goods stock and their historical burdens separately. Carry into the output cohort only its attributable opening-WIP burdens and carry forward closing-WIP burdens outside it; do not additionally deduct finished-goods stock from a Q that includes newly released closing finished goods. Retain actual packaging, handling, storage, cleaning and waste burdens.

The raw numerator is the actual matched-cohort exchange total after evidenced return/recovery reconciliation and any necessary allocation; divide by actual Q once. Keep batch quantity ledgers rather than averaging batch ratios. Local QA ratios per bulk output, solvent charged or precursor input are not successive normalization divisors. Do not delete failed batches, zero-output runs, changeovers or shutdown cleaning: assign their burdens to the related cohort on an evidenced basis or retain a separate failure record. When Q=0, do not normalize per kg or erase burdens with zero values or invented output.

Record physical flow V at its actual state, unit and quantity; record burden attribution A and causal allocation factors separately, without scaling physical outputs to force burden allocation. Check each provider's product/waste type, property/unit, technology, geography, gate, phase and period. A unit-group conversion is not density or composition evidence. Reconcile intermediate receipts/transfers within process accounts and cancel them in the consolidated site account; do not subtract final product, internal transfers and stock change twice. Retain closure gaps and raw reconciliation, never infer unidentified emissions from residual mass or claim closure has been achieved.

Expand aqueous and thermal exchanges only for the real configuration. Keep solids/wet/dry mass and solvent subledgers separate. Record actual cooling-water makeup and discharge, cleaning water, reaction water, condensate and water vapour individually by phase/destination; not every cooked route forms water or uses steam. Actual thermal reactions require species, reaction and operating evidence. For real on-site combustion retain each fuel, oxidant, emitted substance and control burden; electric or externally supplied heat does not imply on-site combustion. Include actual powder extrusion, cooling, grinding and sieving within formulation_dispersion. Reconcile separately produced/packed multi-component quantities and proportions to the real sold configuration. Keep manufacturing gates separate from downstream application/curing.

### Identity and emission-use conditions

Verify medium-voltage electricity against actual voltage, region and provider; a previously unresolvable identifier is not unit evidence. Confirm manufacturing rejects and cleaning residue individually by composition, form and treatment gate rather than using a flow described as application overspray/sludge/spent filters. The wastewater UUID is only a conditional physical locator for whole liquid-stream mass if source-owner/provider and actual receiving evidence establish the intended untreated handover interface. Its native Secondary/Tertiary Treatment label leaves that interface unestablished by the label alone: it proves neither the pre-treatment generation gate nor an already-treated effluent state. Record actual collection stage, composition, density, treatment acceptance and compatible provider before using the binding; otherwise verify a different compatible interface. It is not a direct elementary discharge; no generic kg-to-m3 substitution is allowed.

Xylene on each VOC card is only a conditional individual substance exchange; expand other real emitted substances by species, gas/water phase, receiving compartment and post-control quantity. Reconcile their sum with total-VOC QA without adding the sum indicator as another release. The titanium-dioxide particulate card likewise cannot represent all dust; confirm particle size, composition and air compartment. In the VOC balance, product retention, recovery, shipped waste, control destruction and stock are mutually exclusive fates. Capture alone is not a final fate: do not deduct it again when already assigned to recovery/waste/stock. Record real combustion/control products separately; destroyed VOC is not disappearance of total mass. Total VOC, COD, closure residuals or historical factors cannot fabricate speciated quantities.

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
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Polyvinyl acetate emulsion (complete purchased preparation)
- Flow property / unit: Mass / kg
- Amount rule: Sum batch issue mass and subtract documented returns. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_batch_materials
- Sources: eu-commission-2025-2607, jrc-145239-2026, us-epa-eiip-coating-2005


###### Acrylic binder (`fd_acrylic_binder`)

Conditional on the actual acrylic formulation and supply state; JRC screening chemistry is not a site recipe.

- Selected flow: Acrylic copolymer dispersion (complete purchased preparation)
- Flow property / unit: Mass / kg
- Amount rule: Sum batch issue mass and subtract documented returns. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_batch_materials
- Sources: eu-commission-2025-2607, jrc-145239-2026


###### Powder-coating binder (`fd_polyester_binder`)

Conditional on actual powder manufacture; retain separate actual crosslinker, additives, extrusion/grinding and associated energy and losses. No downstream substrate curing is included here.

- Selected flow: Polyester resin, powder-coating grade
- Flow property / unit: Mass / kg
- Amount rule: Sum batch issue mass and subtract documented returns. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_batch_materials
- Sources: eu-commission-2025-2607, jrc-145239-2026


###### Purchased alkyd binder (`fd_alkyd_binder`)

Conditional on actual purchased alkyd formulation; retain resin/solvent composition without purchasing those contents twice. On-site cooking uses its actual precursor ledger instead.

- Selected flow: Alkyd resin solution (complete purchased preparation)
- Flow property / unit: Mass / kg
- Amount rule: Sum batch issue mass and subtract documented returns. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_batch_materials
- Sources: eu-commission-2025-2607, jrc-145239-2026


###### Pigments and fillers (`fd_pigments_fillers`)

Record pigment and filler ingredients separately where supplier datasets differ; titanium dioxide may use the confirmed selected flow.
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Titanium Dioxide; UUID 12525dde-1d7a-4024-9ea3-5b90912a48f8
- Flow property / unit: Mass / kg
- Amount rule: Sum batch issue mass and subtract documented returns. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_batch_materials
- Sources: jrc-145239-2026


###### Formulation water (`fd_water`)

Record water deliberately added to the formula, separate from cleaning water.

- Selected flow: Water, fresh; UUID 021fbe67-2b7a-43b4-af09-4c3d62b83e3b
- Flow property / unit: Mass / kg
- Amount rule: Use metered mass or convert metered volume with measured density. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
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
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Xylene (mixed isomers)
- Flow property / unit: Mass / kg
- Amount rule: Sum batch issue mass and subtract documented returns. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_batch_materials
- Sources: us-epa-ap42-6-4-1995, jrc-145239-2026, us-epa-voc-controls-1978


###### Additives (`fd_additives`)

Record significant additives separately by chemistry and hazard relevance.
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Ammonia solution (complete purchased preparation)
- Flow property / unit: Mass / kg
- Amount rule: Sum batch issue mass and subtract documented returns. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_batch_materials
- Sources: eu-commission-2025-2607, us-epa-eiip-coating-2005


###### Electricity (`fd_electricity`)

Include mixing, dispersion, milling, pumping, ventilation, filtration, and local quality-control electricity.
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Use submetered electricity or allocate a reconciled site meter total by causal equipment runtime and load. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
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

Retain 0.90–1.00 kg released bulk coating per kg total formulation inputs only as a provisional QA diagnostic from matched raw batch quantities. The denominator is total formulation input mass, not process output or final net product. This is a reasoned estimate to flag unreconciled losses, without an external measured population range; replace it with site-specific yield history, investigate rather than clip outliers, and never use it as a plant default or mandatory acceptance threshold. It is outside typed inventory amount/ranges and does not alter the card or Section 8 single net-product normalization.
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Bulk coating preparation of the declared configuration
- Flow property / unit: Mass / kg
- Amount rule: Measure released batch mass; calculate from filled mass plus retained samples and documented downstream losses when direct weighing is unavailable. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_batch_outputs
- Sources: mass-balance-identity

##### Waste flows

###### Off-specification coating and retained residue (`fd_waste_paint`)

Separate material internally reworked from material sent to recovery, treatment, or disposal.
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Rejected coating preparation from manufacturing
- Flow property / unit: Mass / kg
- Amount rule: Sum weighed residues and rejected batches leaving the process, excluding documented closed-loop rework. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
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
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Xylene (mixed isomers), to air
- Flow property / unit: Mass / kg
- Amount rule: Use monitored release or solvent balance; report control efficiency and avoid double counting retained solvent. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated value (`calculated_from_collection`)
- Collection protocol: cp_process_emissions
- Sources: us-epa-ap42-6-4-1995


###### Particulate matter to air (`fd_pm_air`)

Record pigment and powder handling releases after capture and control.
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Titanium dioxide particulate, to air
- Flow property / unit: Mass / kg
- Amount rule: Use monitored release or dry-material balance adjusted for documented capture and control. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated value (`calculated_from_collection`)
- Collection protocol: cp_process_emissions
- Sources: us-epa-ap42-6-4-1995


### Process: Thermal cooking of varnish or resin intermediate (`thermal_cooking`)

#### Inputs

##### Product flows

###### Varnish or resin precursors (`tc_precursors`)

Include only ingredients entering the on-site cooked intermediate.
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Linseed oil
- Flow property / unit: Mass / kg
- Amount rule: Sum batch issue mass and subtract documented returns. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_thermal_batch
- Sources: us-epa-ap42-6-4-1995, us-epa-voc-controls-1978

###### Rosin precursor (`tc_rosin`)

Conditional on a documented cooked-varnish formulation. Linseed oil and rosin are historical named examples, not a required recipe or fractions; expand every actual precursor individually (EPA 1978 section 4.8.2).

- Selected flow: Rosin
- Flow property / unit: Mass / kg
- Amount rule: Sum batch issue mass and subtract documented returns. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_thermal_batch
- Sources: us-epa-ap42-6-4-1995, us-epa-voc-controls-1978

###### Thermal energy (`tc_thermal_energy`)

Record fuel and heat carriers separately; the flow UUID remains route-specific.
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use metered fuel or heat and measured net calorific value; allocate shared heat by causal duty. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_thermal_energy
- Sources: us-epa-ap42-6-4-1995


###### Purchased steam (`tc_supplied_steam`)

Only for actual supplied-steam duty; keep fuel, steam, purchased heat and electricity separate. Independently record same-period supply and each actual return/discharge/vent mass, pressure, temperature, phase, steam quality where needed and specific enthalpy, with opening/closing carrier inventory and energy; never assume full or equal return. Apply the same per-leg principle to hot-water service only if it actually exists, without creating hot-water, boiler or heat-duty flows.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Use calibrated net-heat metering matched to the declared boundary, or actual-leg enthalpy accounting qualified by val_records in section 9. Use m*(h_s-h_r) only to simplify evidenced equal matched supply/return masses, without dropping other actual legs or storage. For masses in kg and specific enthalpies in kJ/kg, divide summed kJ by 1000 once to MJ; do not reconvert a net meter already in MJ. Retain actual matched-cohort totals and causal duty attribution before the original single net-product normalization.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_thermal_energy
- Sources: us-epa-ap42-6-4-1995, doe-ornl-steam-system-survey-2002


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cooked varnish or resin intermediate (`tc_intermediate`)

Transfer the measured intermediate to formulation without assigning a final-product reference flow.
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Cooked varnish intermediate of the declared configuration
- Flow property / unit: Mass / kg
- Amount rule: Use measured batch output reconciled with precursor inputs and recorded releases. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_thermal_batch
- Sources: mass-balance-identity

##### Waste flows

##### Elementary flows

###### Thermal-route VOC to air (`tc_voc_air`)

Record route-specific VOC separately from formulation emissions before aggregation.
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Xylene (mixed isomers), to air
- Flow property / unit: Mass / kg
- Amount rule: Use monitored release or a documented batch mass balance after capture and control. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated value (`calculated_from_collection`)
- Collection protocol: cp_thermal_emissions
- Sources: us-epa-ap42-6-4-1995

### Process: Filling and packaging (`filling_packaging`)

#### Inputs

##### Product flows

###### Bulk coating (`fp_bulk_input`)

Transfer the released bulk coating from formulation.
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Bulk coating preparation of the declared configuration
- Flow property / unit: Mass / kg
- Amount rule: Use transferred or reconciled batch mass. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_packaging_records
- Sources: mass-balance-identity

###### Packaging materials (`fp_packaging`)

Record containers, closures, liners, labels, cartons, pallets, and other non-reusable packaging separately.
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Tinplate coating container
- Flow property / unit: Mass / kg
- Amount rule: Use bill-of-material quantity reconciled with issues, returns, and packaging scrap. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_packaging_records
- Sources: eu-commission-2025-2607


###### Polyethylene container (`fp_hdpe_container`)

Only if this is the actual packaging. Tinplate and polyethylene containers are alternative conditional objects, not jointly assumed; expand actual closure, liner, label, carton and pallet by material.

- Selected flow: High-density polyethylene coating container
- Flow property / unit: Mass / kg
- Amount rule: Use bill-of-material quantity reconciled with issues, returns, and packaging scrap. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_packaging_records
- Sources: eu-commission-2025-2607


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged paint or varnish (`fp_reference_product`)

This is the quantitative reference output. Normalize measured saleable batch output once to exactly 1 kg net coating; inventory packaging separately.

- Selected flow: Paint; UUID b2aa1a35-1823-4b13-96db-d5b89eda2db5
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Fixed constant (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
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
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Tinplate container scrap
- Flow property / unit: Mass / kg
- Amount rule: Weigh or reconcile issued packaging against packaged units, returns, and stock. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_packaging_records
- Sources: mass-balance-identity


###### Polyethylene container scrap (`fp_hdpe_scrap`)

Only actual polyethylene container scrap; retain its destination, recovered amount and provider separately from metal scrap or other packaging waste.

- Selected flow: High-density polyethylene container scrap
- Flow property / unit: Mass / kg
- Amount rule: Weigh or reconcile issued packaging against packaged units, returns, and stock. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_packaging_records
- Sources: mass-balance-identity


##### Elementary flows

### Process: Equipment cleaning and on-site waste management (`cleaning_waste_management`)

#### Inputs

##### Product flows

###### Cleaning water (`cw_water`)

Record cleaning water separately from formulation water.

- Selected flow: Water, fresh; UUID 021fbe67-2b7a-43b4-af09-4c3d62b83e3b
- Flow property / unit: Mass / kg
- Amount rule: Use metered mass or volume converted with measured density and allocate by documented cleaning event. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
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
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Xylene (mixed isomers)
- Flow property / unit: Mass / kg
- Amount rule: Reconcile issued, recovered, returned, emitted, and discarded solvent by cleaning event. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_cleaning_inputs
- Sources: us-epa-ap42-6-4-1995


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater (`cw_wastewater`)

Characterize actual wastewater solids, organic content and destination. The native Secondary/Tertiary Treatment label alone does not establish this UUID as the intended untreated handover. Use it only as a conditional whole-stream Mass/kg physical locator if source-owner/provider and actual receiving-interface evidence confirm that untreated state; until then the interface remains pending. Do not infer already-treated effluent, treatment technology, receiving permission or density. Collect actual composition, collection/treatment gate, density and acceptance/provider scope; otherwise verify a different compatible interface.

- Selected flow: Wastewater; UUID bc2cd1d5-69d5-42d7-818f-38a69ebb18ef
- Flow property / unit: Mass / kg
- Amount rule: Use discharge meter or cleaning-event water balance, net of documented recovered water. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
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
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Coating preparation residue from equipment cleaning
- Flow property / unit: Mass / kg
- Amount rule: Weigh residue containers and subtract documented internal recovery. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
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
This card applies only when actual records confirm the single named physical or chemical object; record other actual constituents or routes individually, without combining them.

- Selected flow: Xylene (mixed isomers), to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from the cleaning-solvent balance after recovery, waste shipment, and control, or use monitored release. Retain raw totals for the matched production cohort; the final inventory uses the single net-product normalization in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated value (`calculated_from_collection`)
- Collection protocol: cp_cleaning_outputs
- Sources: us-epa-ap42-6-4-1995


## 7. Allocation and Co-product Handling

First subdivide or meter directly; for remaining multifunctionality, document whether system expansion fits the goal, background model and governing programme. Where allocation cannot be avoided use real physical causality, otherwise justify and test another relationship such as economic allocation. VOC or material balances establish physical reconciliation, not an economic/co-product allocation basis. Retain physical flows separately from burden attribution.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_avoid | Shared operations and utilities | First avoid allocation through batch segregation, submetering, or process subdivision. | iso-14044-2006, jrc-ilcd-handbook-2010 |
| al_internal_rework | In-specification closed-loop rework | Keep internal rework inside the foreground system; do not create a co-product credit, and reconcile its mass without double counting fresh input. | mass-balance-identity, jrc-ilcd-handbook-2010 |
| al_saleable_coproduct | Multiple saleable outputs | Use a documented physical causal relationship where it represents resource use; use economic allocation only when no defensible physical relationship exists and disclose prices, period, and sensitivity. | iso-14044-2006, jrc-ilcd-handbook-2010 |
| al_waste_recovery | Waste, recovered solvent, and recovered packaging | Model treatment burdens and any credits under the governing programme; disclose system expansion, substitution, or cut-off and never treat avoided waste as negative foreground input. | iso-14044-2006, epd-international-pcr-2019-14-v2-0-1, jrc-ilcd-handbook-2010 |
| al_shared_site_energy | Shared site electricity and heat | Allocate by metered equipment consumption or causal runtime and load; mass allocation is allowed only with justification and sensitivity for materially different routes. | iso-14044-2006, jrc-ilcd-handbook-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The collection and calculation rules are governed by the complete actual-configuration, cohort, gate, stock and single-normalization conditions in section 5. Section 9 retains the local QA ratios and their limits.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_batch_materials | formulation_dispersion | formulation ingredients | batch issue and return record | material ID, lot, gross issue, return, density, solids; actual solids/NV definition and measurement method; test state and conditions; supplier/formulation reference compatibility; separate carrier-water and retained-volatile-liquid contents; operational residue/interference uncertainty | ERP issue and calibrated scale; volume conversion only with measured density; obtain actual compatible solids/NV method and condition evidence, keeping the whole wet issue, NV fraction, water and retained volatile carrier separate rather than assuming carrier removal or curing; raw cohort aggregation: sum net issues by material and product family | kg | each batch | representative reporting year | reporting plant | per 1 kg reference flow | purchase ledger, batch sheet, scale calibration; actual method/test-state records, supplier/formulation compatibility and residue/interference uncertainty evidence |
| cp_formulation_energy | formulation_dispersion | electricity | meter and equipment log | meter start, meter end, runtime, load, product family | submeter; otherwise reconciled site meter with causal allocation; raw cohort aggregation: sum direct readings; allocate documented shared remainder | kWh | batch or monthly | representative reporting year | reporting plant | per 1 kg reference flow | meter calibration, energy reconciliation |
| cp_batch_outputs | formulation_dispersion | bulk output and residue | batch yield record | released mass, retained sample, rework, residue, stock change | calibrated scale and batch reconciliation; raw cohort aggregation: mass-weighted aggregate by product family | kg | each batch | representative reporting year | reporting plant | per 1 kg reference flow | release record, waste record, mass balance |
| cp_process_emissions | formulation_dispersion | VOC and particulate release | monitoring and material balance | solvent charged, solvent retained, recovery, waste, capture, control, measured concentration, gas flow ; actual dry mass H, species/size, f_loss/G evidence, hood/duct/device topology, matched bypass/inlet/outlet PM and gas flow, C, D, recovered-solids wet/dry masses and destination | compliant monitoring or documented mass balance; raw cohort aggregation: sum pollutant mass after control; keep routes separate ; for modelled PM establish pre-capture G, capture-to-inlet C and captured-stream removal D, retain uncaptured and treated-outlet branches on matched species/size/period, and retain measured total-release alternatives; do not apply efficiencies again to already controlled amounts | kg | campaign and reporting period | representative reporting year | reporting plant and emission point | per 1 kg reference flow | monitoring report, control log, balance reconciliation ; capture-network diagram, paired-stream measurements, dry-basis/generation evidence, recovered-solids and destination/provider ledgers |
| cp_thermal_batch | thermal_cooking | precursors and cooked intermediate | batch record | precursor issue, return, intermediate output, residue | calibrated scale and batch reconciliation; raw cohort aggregation: sum net input and output by route | kg | each thermal batch | representative reporting year | reporting plant | per 1 kg reference flow | batch sheet, scale calibration, mass balance |
| cp_thermal_energy | thermal_cooking | fuel and heat | meter and fuel record | fuel mass or volume, net calorific value, heat meter, runtime; steam mass, supply/return pressure, temperature, enthalpy and phase ; independent supply and each actual return/discharge/vent mass (kg), matched period/meter boundary, common enthalpy reference and property source, each leg specific enthalpy (kJ/kg) and quality where needed, opening/closing carrier mass and stored energy, actual other energy transfers, supplier-native reference quantity/property/unit/gate and coverage | Calibrated meters and actual fuel specification; NCV conversion applies only to actual fuels, not steam, supplied heat or hot water. For carriers use boundary-matched calibrated net-heat metering or each actual leg at one common enthalpy reference; m*(h_s-h_r) simplifies only evidenced matched equal masses, with other legs and storage reconciled separately. Raw cohort aggregation: sum converted fuel amounts and carrier boundary energy separately; summed kg*kJ/kg in kJ is /1000 to MJ once. Supplier-native billed/reference quantity is not automatically consumer useful duty; retain physical carrier-water and provider-coverage ledgers, counting provider production once. | MJ | each batch or monthly | representative reporting year | reporting plant | per 1 kg reference flow | meter calibration, fuel certificate ; independent leg mass/state records, property/common-reference source, equal-mass-shortcut evidence or per-leg/storage reconciliation, meter-boundary and provider-coverage evidence |
| cp_thermal_emissions | thermal_cooking | route VOC | monitoring and batch balance | volatile input, retained mass, condensate, recovery, control, measured release | compliant monitoring or documented mass balance; raw cohort aggregation: sum release after control by route | kg | campaign and reporting period | representative reporting year | reporting plant and emission point | per 1 kg reference flow | monitoring report, batch balance |
| cp_packaging_records | filling_packaging | bulk input, product output, and packaging | filling and bill-of-material record | bulk transfer, filled net mass, unit count, packaging issue, return, scrap | calibrated filler or scale plus inventory reconciliation; raw cohort aggregation: sum measured saleable net output and raw packaging by material | kg | each batch | representative reporting year | reporting plant | per 1 kg reference flow | fill check, bill of materials, scale calibration |
| cp_cleaning_inputs | cleaning_waste_management | water and solvent input | cleaning-event record | equipment, water, fresh solvent, recovered solvent, return | meter, weighed issue, and solvent log; raw cohort aggregation: assign directly to product campaign or documented shared cleaning driver | kg | each cleaning event | representative reporting year | reporting plant | per 1 kg reference flow | cleaning log, meter calibration |
| cp_cleaning_outputs | cleaning_waste_management | wastewater, residue, and VOC | discharge, shipment, and balance record | wastewater, solids, residue, recovery, solvent issued, solvent returned, VOC control | discharge meter, weighed shipment, and solvent balance; raw cohort aggregation: sum by destination and product family; reconcile recovery | kg | each event and reporting period | representative reporting year | reporting plant | per 1 kg reference flow | manifests, discharge report, solvent balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | All foreground exchanges | normalized amount = matched raw cohort exchange total / actual net released quantity Q; apply once only | raw cohort exchange total; actual net released quantity Q; stock and historical-burden reconciliation | amount per kg net product | mass-balance-identity |
| calc_material_balance | Each production route | closure gap = actual inputs to the declared control volume - outward outputs - recorded wastes - recorded releases - stock increase within that volume; process accounts include boundary intermediates, consolidated site accounts cancel internal transfers | wet-mass inputs, outputs, wastes, releases, stock change | absolute and percentage closure gap | mass-balance-identity |
| calc_voc_balance | VOC release | VOC release = volatile input - VOC retained in product - recovered solvent - solvent in shipped waste - destroyed VOC mass - justified stock increase; use mutually exclusive fates and do not additionally deduct capture already represented in another fate | solvent and volatile-component balance | kg VOC after control | us-epa-ap42-6-4-1995, mass-balance-identity, us-epa-eiip-coating-2005 |
| calc_pm_release | Particulate release | G = H*f_loss; H is actual dry mass handled on the documented species/particle-size basis; f_loss is the site-qualified fraction generating airborne PM before capture, not an already controlled release fraction. Only for documented uncaptured-to-air and capture-to-one-removal-device branches: C is the fraction of G routed to that device inlet; D is the fraction removed from that captured stream in the device; released particulate = G*(1-C) + G*C*(1-D) = G*(1-C*D). Account for other actual branches and serial-device inlet/removal relationships instead of assuming a universal topology. | actual dry mass handled H; generation fraction f_loss and G evidence; capture-to-inlet fraction C; removal-on-captured-stream fraction D; actual species/size/period and topology | kg particulate release | us-epa-ap42-6-4-1995, us-epa-eiip-coating-2005, us-epa-capture-systems |
| calc_shared_energy | Shared energy | allocate reconciled shared energy by metered runtime and load or another documented causal driver; test material alternatives | meter total, direct readings, driver quantities | process and product energy | iso-14044-2006, jrc-ilcd-handbook-2010 |
| calc_service_conversion | Comparative service | required product mass = declared area / coverage × density / applied fraction × maintenance multiplier for the declared study period; applied fraction is the fraction actually applied to the target surface (greater than 0 and at most 1), with compatible volumetric coverage and density; equivalent application mass per area = density / coverage | area, coverage or spreading rate, density where needed, applied fraction, maintenance cycle, study period | kg product for equivalent declared service | jrc-145239-2026 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_technology | Foreground route | Data shall represent the declared water-borne, solvent-borne, powder, one-component, multi-component, or thermal route and its actual control technology. | process description, formulation family, equipment and control records |
| dq_time | Foreground data | Use a representative continuous twelve-month period where available; explain shutdowns, campaigns, abnormal batches, and extrapolation. | dated batch, meter, purchase, waste, and production records |
| dq_geography | All datasets | Identify plant country or region and use representative electricity, fuel, transport, water, and waste-treatment datasets. | dataset metadata and supplier or utility records |
| dq_completeness | Material and emission inventory | Reconcile mass and energy, list omissions and cut-offs, and retain hazardous or environmentally significant constituents and releases. Before completing any solids/NV-dependent quantitative conversion, require the actual declared method/test state/conditions and compatible supplier/formulation basis; keep whole wet mass and retained water/ethanol/other volatile-carrier contents separate from NV solids. Retain operational residue/interference uncertainty explicitly; an unknown or unmatched basis blocks the dependent quantitative completion and cannot be replaced by assumed cure, yield or carrier removal. | balance checks, omission register, monitoring reports; actual solids/NV method and condition evidence, supplier/formulation compatibility, retained-carrier/interference uncertainty and pending-basis register |
| dq_source_priority | Secondary data | Prefer official standards, PCRs, regulations, official datasets and institutional reports, then peer-reviewed literature, then industry documents; label reasoned estimates as provisional. | source register and estimate flags |
| dq_uncertainty | Estimates and allocation | Quantify or qualitatively assess uncertainty for provisional estimates, secondary substitutions, allocation, and service conversion. | sensitivity results and data-quality notes |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| val_reference_identity | Reference flow | Confirm Paint UUID b2aa1a35-1823-4b13-96db-d5b89eda2db5 only when its whole-object scope matches section 3; otherwise verify the actual route-specific complete finished-product flow; confirm Mass UUID 93a60a56-a3c8-11da-a746-0800200b9a66, unit-group UUID 93a60a57-a4c8-11da-a746-0800200c9a66, kg unit, and exactly 1 kg net product excluding packaging. | mass-balance-identity |
| val_qualifiers | Dataset metadata | Reject an incomplete reference definition when any required qualifier is absent or ambiguous. | eu-commission-2025-2607, jrc-145239-2026 |
| val_route_coverage | Process map | Require formulation_dispersion, filling_packaging, and cleaning_waste_management; require thermal_cooking only when on-site cooking or reaction occurs and otherwise record it as not applicable. | us-epa-ap42-6-4-1995 |
| val_mass_closure | Foreground processes | Calculate route and site mass-balance closure, report the gap and threshold, and investigate rather than clip unexplained losses. | mass-balance-identity |
| val_records | Collected values | Confirm temporal coverage, site scope, units, calibration, aggregation, and traceability to the named collection protocol. For actual steam (or hot water only if present), declare supplier gate versus consumer control volume, matched period, meter boundary and common enthalpy reference/property source; independently measure each real supply, return, discharge and vent mass/state without assuming full return. The carried-energy ledger is E_legs_MJ = (sum incoming m_i*h_i - sum outgoing m_j*h_j)/1000, with m in kg and h in kJ/kg. Supply/return terms alone are (m_s*h_s - m_r*h_r)/1000; only evidenced m_s=m_r=m with matched boundary/states permits simplifying those terms to m*(h_s-h_r)/1000, never dropping other real legs or stocks. Consumer useful duty additionally reconciles actual stored-energy increase, heat losses, shaft work and other actual energy transfers at that same boundary, with justified omissions; it is not automatically supplier billed/native reference quantity. A calibrated net meter replaces corresponding leg-energy accounting only for the same boundary, without adding both; a meter already in MJ is not /1000 again. Retain physical carrier-water mass, history and destinations; count provider production once using its actual native property/unit/gate and coverage, without double purchase of included carrier water or provider fuel/boiler, or invented return credits. NCV is for actual fuels only. All actual raw totals remain subject to section 5 cohort, physical V/burden A and single normalization conditions. | epd-international-pcr-2019-14-v2-0-1, doe-ornl-steam-system-survey-2002 |
| val_emissions | Direct VOC and particulate | Confirm route-specific monitoring or balances, capture and control treatment, and absence of double counting; use AP-42 ranges only as historical QA checks. For modelled PM verify actual pre-capture G and its dry-mass/species/size/period basis, C as the fraction routed to the device, and D as removal on the captured stream; only for this evidenced topology add uncaptured G*(1-C) and device outlet G*C*(1-D). Apply actual serial removal stages to their own measured inlets/removal fractions, never treating capture as removal. A measured total covering the same boundary and all branches is an alternative to the branch sum, not an additional release; reconcile any real branches outside its measurement coverage. Retain actual collected solids/residue, reuse or waste destinations and treatment providers; their dry PM content is not additive to the whole wet residue. Nested PM total/species/size subledgers are not additional emitted mass; historical ranges or closure residuals cannot invent G, C, D or species quantities. | us-epa-ap42-6-4-1995, us-epa-eiip-coating-2005, us-epa-capture-systems |
| val_allocation | Shared operations and outputs | Confirm subdivision was considered first, the causal basis is documented, and economic allocation is justified and sensitivity-tested if used. | iso-14044-2006, jrc-ilcd-handbook-2010 |
| val_background | Cradle-to-gate profile | Confirm upstream datasets and transport are present for material inputs and disclose geography, technology, age, and substitutions. | epd-international-pcr-2019-14-v2-0-1 |
| val_service_claim | Comparative claims | Reject service-equivalence claims based only on 1 kg product; require declared area, performance, applied fraction, coverage or spreading rate, maintenance, and study period. | jrc-145239-2026 |
| val_provisional | Reasoned estimates | Flag all reasoned_estimate ranges as provisional and prevent their use as plant defaults; replace them before publication unless explicitly reviewed and justified. |  |

### Retained local diagnostic ratios

These original family-level ranges are separate from final reference normalization and retained only as bounded candidate screening information, not per-ingredient bounds, replacements for actual recipes/meters or mandatory acceptance thresholds. Original ranges remaining on other cards likewise retain their local denominators: calculate local indicators from matched raw quantities rather than dividing final normalized exchanges again. No external measured population range substantiates the reasoned_estimate bounds; never use them as universal plant defaults, and investigate rather than clip outliers. The cleaning-VOC 0–1 conservation bound needs the same event/solvent constituent and no other volatile source; mixture mass is not a species quantity. The AP-42 particulate percentage denominator is pigment handled, not all powders or fillers; it establishes neither species, particle size, compartment nor current emission permission.

#### fd_binder: original family/process diagnostic ratio

- Range: Provisional formulation guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 0.80
  - Unit: kg/kg bulk coating
  - Basis: Reasoned estimate spanning materially different coating families; replace with plant formulation data.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

#### fd_pigments_fillers: original family/process diagnostic ratio

- Range: Provisional formulation guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.80
  - Unit: kg/kg bulk coating
  - Basis: Reasoned estimate allowing clear varnishes and highly filled coatings; replace with plant formulation data.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

#### fd_solvent: original family/process diagnostic ratio

- Range: Provisional formulation guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.80
  - Unit: kg/kg bulk coating
  - Basis: Reasoned estimate across powder, water-borne, and high-solvent products; replace with plant formulation data.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

#### fd_additives: original family/process diagnostic ratio

- Range: Provisional formulation guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg bulk coating
  - Basis: Reasoned estimate; replace with plant formulation and purchasing data.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

#### fd_voc_air: original family/process diagnostic ratio

- Range: Historical manufacturing solvent-loss observation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 0.02
  - Unit: kg VOC/kg solvent charged
  - Basis: AP-42 section 6.4.1 reports 1–2% solvent loss even under well-controlled paint-manufacturing conditions. This prose observation is separate from Table 6.4-1 uncontrolled product-based factors; it is not a current default, a varnish-route factor or a species-level release fraction.
  - Denominator: actual material input named in the unit; this prose diagnostic is not a process-output basis token.
  - Evidence kind: External source (`external_source`)
  - Sources: us-epa-ap42-6-4-1995

#### fd_pm_air: original family/process diagnostic ratio

- Range: Historical uncontrolled dry-pigment handling check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.01
  - Unit: kg particulate/kg dry pigment handled
  - Basis: Historical AP-42 estimate for uncontrolled particulate emissions; not a current default or regulatory factor.
  - Denominator: actual material input named in the unit; this prose diagnostic is not a process-output basis token.
  - Evidence kind: External source (`external_source`)
  - Sources: us-epa-ap42-6-4-1995

#### tc_thermal_energy: original family/process diagnostic ratio

- Range: Provisional thermal-energy guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg cooked intermediate
  - Basis: Reasoned estimate; replace with metered route-specific data.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

#### fp_packaging: original family/process diagnostic ratio

- Range: Provisional packaging guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 0.30
  - Unit: kg packaging/kg net product
  - Basis: Reasoned estimate spanning bulk and small-container formats; replace with the packaging bill of materials.
  - Basis kind: Reference flow (`reference_flow`）
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

#### fp_packaging_waste: original family/process diagnostic ratio

- Range: Provisional packaging-waste guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg net product
  - Basis: Reasoned estimate; replace with packaging reconciliation.
  - Basis kind: Reference flow (`reference_flow`）
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

#### cw_solvent: original family/process diagnostic ratio

- Range: Provisional cleaning-solvent guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net product
  - Basis: Reasoned estimate; replace with cleaning-event solvent balances.
  - Basis kind: Reference flow (`reference_flow`）
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

#### cw_voc_air: original family/process diagnostic ratio

- Range: Provisional cleaning-solvent mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg VOC/kg cleaning solvent issued
  - Basis: Reasoned mass-conservation bound; replace with monitored release or a reconciled event-specific solvent balance.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


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
| us-epa-ap42-6-4-1995 | official_guidance | United States Environmental Protection Agency, AP-42 Section 6.4 Paint and Varnish, January 1995; https://www.epa.gov/sites/default/files/2020-10/documents/c06s04.pdf | Manufacturing process map; solvent and pigment release mechanisms; historical QA observations with distinct prose and uncontrolled-table contexts |
| epd-international-pcr-2019-14-v2-0-1 | standard | EPD International, PCR 2019:14 Construction products, version 2.0.1, 2025; https://www.environdec.com/pcr-library/pcr_6b99d07c-4b75-4763-4485-08dd775d2e49 | Cradle-to-gate modules, upstream material and transport coverage, data quality, completeness, and waste treatment framing |
| iso-14044-2006 | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines; https://www.iso.org/standard/38498.html | Allocation hierarchy and LCA methodological requirements |
| mass-balance-identity | method_factor | Conservation of mass calculation identity | Reference normalization, yield, rework, packaging, solvent, and process mass-balance calculations |
| jrc-ilcd-handbook-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition, 2010, section 6.5.3.2; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Independent multifunctionality method: subdivision, system expansion, real physical causality and other relationships; not a site recipe, emission factor or current permission |
| us-epa-eiip-coating-2005 | official_guidance | US EPA, EIIP Volume II, Chapter 8: Methods for Estimating Air Emissions from Paint, Ink, and Other Coating Manufacturing Facilities, February 2005, sections 2.1–2.2 and 5.2; https://www.epa.gov/sites/default/files/2015-08/documents/ii08_feb2005.pdf | Conditional named ingredients including PVAc emulsion and ammonia solution, actual operations and speciated emission methods; historical non-binding guidance, without adopting example recipe quantities or default factors |
| us-epa-voc-controls-1978 | official_guidance | US EPA, Control Techniques for Volatile Organic Emissions from Stationary Sources, EPA-450/2-78-022, May 1978, section 4.8.2 and Table 4.8-1; https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=2000M8SN.TXT | Cooking/bodying versus physical mixing and historical named examples including linseed oil, rosin and xylene; not an actual plant BOM, mandatory ingredients, reaction fractions or current permission |
| us-epa-capture-systems | official_guidance | US EPA, Monitoring by Control Technique — Capture Systems, Description and local exhaust ventilation; https://www.epa.gov/air-emissions-monitoring-knowledge-base/monitoring-control-technique-capture-systems | Capture routes emissions to a device; read with EIIP section 2.1.5 Figure 8.2-1 dust collector/recovered PM. Supports network conservation reasoning only, not adoption of VOC enclosure criteria, 100% capture assumptions, legal test applicability or PM efficiencies |
| doe-ornl-steam-system-survey-2002 | official_guidance | Greg Harrell, Steam System Survey Guide, ORNL/TM-2001/263, May 2002, sections 3, 4.2, 6.2.2 and 6.4; https://www.energy.gov/sites/prod/files/2014/04/f15/steam_survey_guide.pdf | Actual steam/condensate/makeup states, recovery and loss distinctions support per-leg conservation reasoning and heat-boundary qualification; no report example quantities, states, return fractions, efficiencies or boiler defaults adopted, nor supplier-native quantity equated to consumer useful heat |

Source limits: EU 2025/2607 sets Ecolabel criteria for specific product groups, not all CPC 35110 or industrial powder/UV-cured systems, and does not establish every production indicator in this PCR. JRC145239 screening scenarios, study period, coverage and formulation assumptions are not universal defaults. AP-42 retains its 1983/1995 historical context. EPD 2019:14 v2.0.1 supplies construction-product programme context: adoption requires the complete applicable text and accompanying c-PCR, not A1–A3 eligibility for all coatings. ISO 14044 bibliographic information does not replace review of the standard text; the independently read ILCD source also supports the allocation method. No source replaces actual site records, independent methodology/Chinese review or verification of current legal applicability and permissions.
