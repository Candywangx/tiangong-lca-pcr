---
pcr_id: "pcr.metal-products-machinery-and-equipment.basic-metals.powders-and-flakes-of-aluminium"
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Powders and flakes of aluminium

## 1. Scope and Applicability

This PCR governs foreground data packages for dry metallic aluminium powder and dry aluminium flake powder delivered at the manufacturing factory gate. It covers unalloyed and aluminium-alloy grades made by atomization and dry flake production by milling atomized powder or clean aluminium foil scrap. The actual route and product specification shall be identified; this PCR does not define a generic market mix.

Aluminium paste or slurry, formulated pigment or pyrotechnic mixtures, aluminium compounds, coarse granules, and downstream consolidation, coating, additive manufacturing, or use are excluded. Upstream aluminium production and off-site treatment are represented by separate datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.powders-and-flakes-of-aluminium |
| classification_refs | CPC 3.0: 41531, Powders and flakes of aluminium |
| covered_products | Dry metallic aluminium and aluminium-alloy powders; dry aluminium and aluminium-alloy flake powders |
| excluded_products | Aluminium pastes and slurries; aluminium compounds; coarse granules; formulated mixtures; consolidated or downstream-processed products |
| representative_product | One declared dry aluminium powder or flake grade meeting its composition, particle-size, morphology, surface-condition, and moisture specification |
| production_route | Gas atomization with compressed air, nitrogen, or argon; or dry milling of atomized powder or clean aluminium foil scrap, followed by classification and packing |
| market_state | Dry powder or dry flake in declared packaging at the manufacturing factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Dry metallic aluminium powder or dry aluminium flake powder meeting the declared saleable-product specification at the manufacturing factory gate |
| How much | 1 kg net product, excluding packaging mass |
| How well | Conforming to declared grade/composition, particle-size distribution, morphology, surface treatment or lubricant content, moisture, and contamination limits |
| How long or cycle | One representative production campaign within the dataset reference period |
| reference_flow_link | `reference_product` output of `powder_flake_manufacture` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net dry product |
| Reference product flow | Powders and flakes of aluminium |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | powder or flake; aluminium or alloy grade and composition; particle-size distribution; morphology; surface coating, passivation, or lubricant content; moisture; production route and atomizing gas; feed origin and recycled content; packaging; geography; reference period |

All required qualifiers shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product and normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine conforming product mass on the declared moisture basis, exclude packaging, and normalize exchanges to 1 kg net dry product. |
| `material_mass` | solid feed, additive, packaging, and waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated scale records on a consistent dry or as-received basis and disclose moisture correction. |
| `gas_reference_volume` | nitrogen, argon, compressed air, and natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report reference pressure and temperature and apply one documented conversion basis across the campaign. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert native meter readings to MJ using a declared exact unit conversion; disclose voltage, grid geography, and upstream loss boundary. |
| `cooling_makeup_mass` | process-water input | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record boundary-crossing make-up or once-through water, not recirculating throughput; document any volume-to-mass conversion. |

## 5. System Boundary

The foreground boundary shall apply these rules:

1. Include on-site feed receipt and preparation, melting and atomization when used, dry milling when used, classification or sieving, homogenization, internal recycling and dust collection, cooling make-up, and packing through factory-gate saleable product.
2. Model compressed air, nitrogen, and argon as separate route-conditional inputs and never aggregate them as one atomizing-gas choice.
3. Keep purchased aluminium powder used to make flakes visible as a same-category input, stop recursive tracing at its receipt, and link it to a disclosed upstream dataset.
4. Do not report internal returns, oversize, or collected powder as waste outputs while they remain inside the campaign; retain their effects through gross feed, energy, yield, and exported-waste records.
5. Exclude upstream aluminium and input production, capital equipment, employee travel, downstream transport, use, and end-of-life from the foreground process; disclose linked datasets separately.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Aluminium feed, purchased aluminium powder, or clean aluminium foil scrap received at the site |
| starting_condition_role | Foreground starting input whose upstream production is represented separately |
| product_classification_scope | Dry metallic products classified under CPC 3.0 code 41531 |
| recursive_input_rule | Purchased powder used as flake feed remains explicit `aluminium_powder_feed`; tracing stops at receipt and the upstream dataset is disclosed |
| upstream_dataset_requirement | Link every purchased material, energy, gas, water, and packaging flow to a geography-, technology-, and state-appropriate dataset |
| disclosure | Declare route, alloy and grade, feed origin, internal recycle convention, atomizing gas, packaging, geography, period, and exclusions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `powder_flake_manufacture` | Aluminium powder or flake manufacture | required | Always include; select route-dependent rows without duplicating shared exchanges | reference_process | 1 kg net dry conforming product |

### Process: Aluminium powder or flake manufacture (`powder_flake_manufacture`)

#### Inputs

##### Product flows

###### Aluminium feed for atomization (`aluminium_feed`)

Record unwrought aluminium or alloy feed only for melting and atomization; identify grade and recycled content.

- Selected flow: Aluminium material `269bf9df-c7d0-4621-ac7b-71ce409cfb9a`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted feed charged to the campaign, net of stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_mass_records`
- Sources: `gopienko-aluminium-powders-2009`

###### Purchased aluminium powder feed for dry flake milling (`aluminium_powder_feed`)

Record one specified dry powder feed only when making flakes from purchased or separately produced powder; stop recursive category tracing at receipt.

- Selected flow: Aluminium powder feed
- Flow property / unit: Mass / kg
- Amount rule: measured powder issued to the campaign, net of stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry conforming flake product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_mass_records`
- Sources: `gopienko-aluminium-powders-2009`

###### Purchased electricity (`electricity`)

Record site-metered electricity for all included operations.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or equipment-rated consumption reconciled to campaign hours and allocated under section 7
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources: `ehmsen-gas-atomization-2025`

###### Nitrogen gas (`nitrogen_gas`)

Record gaseous nitrogen only for atomization, inerting, or closed-cycle dry milling; disclose purity and supply state.

- Selected flow: Nitrogen gas `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: Volume / m3
- Amount rule: metered supply at declared reference conditions, net of stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry conforming product for the nitrogen route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources: `gopienko-aluminium-powders-2009`; `ehmsen-gas-atomization-2025`

###### Argon gas (`argon_gas`)

Record gaseous argon only for the documented atomization or inerting route; disclose purity and supply state.

- Selected flow: Argon gas
- Flow property / unit: Volume / m3
- Amount rule: metered supply at declared reference conditions, net of stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry conforming product for the argon route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources: `ehmsen-gas-atomization-2025`

###### Compressed air (`compressed_air`)

Record compressed air only for air atomization or directly metered process service; avoid double counting compressor electricity.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: metered delivery at declared conditions, or compressor electricity when volume is unavailable, without double counting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry conforming product for the air route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources: `gopienko-aluminium-powders-2009`

###### Natural gas (`natural_gas`)

Record gaseous natural gas only when burned on site, for example for tundish preheating.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered site consumption assigned to the campaign at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry conforming product when direct gas firing is used
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources: `ehmsen-gas-atomization-2025`

###### Process-water make-up (`process_water`)

Record boundary-crossing cooling make-up or once-through water, not recirculating throughput.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered make-up or once-through water less separately metered non-process uses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `ehmsen-gas-atomization-2025`

###### Stearic acid milling additive (`stearic_acid`)

Record stearic acid only when added as a process-control agent in dry flake milling; other agents require separate rows.

- Selected flow: Stearic acid
- Flow property / unit: Mass / kg
- Amount rule: weighed quantity issued to the campaign, corrected for returned stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry conforming flake product when used
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_mass_records`
- Sources: `gopienko-aluminium-powders-2009`

###### Polyethylene product bag (`polyethylene_bag`)

Record the polyethylene bag transferred with the product; add other packaging components as separate exchanges.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass / kg
- Amount rule: bag mass multiplied by bags supplied, excluding reusable packaging not transferred
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry conforming bagged product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_mass_records`
- Sources: `ehmsen-gas-atomization-2025`

##### Waste flows

###### Clean aluminium foil scrap feed (`aluminium_foil_scrap`)

Record clean foil scrap only when it crosses the site boundary as dry-flake feed; disclose composition and contamination.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted scrap charged, net of rejected deliveries and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry conforming flake product for the scrap route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_mass_records`
- Sources: `gopienko-aluminium-powders-2009`

##### Elementary flows

No elementary input is prescribed. Add any measured site-specific elementary input as a separate atomic exchange.

#### Outputs

##### Product flows

###### Reference dry aluminium powder or flake (`reference_product`)

This is net saleable dry product conforming to the declared specification; its category-level UUID remains unresolved.

- Selected flow: Powders and flakes of aluminium
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net dry conforming product after normalization; packaging is excluded
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow identity
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Sources: `mass-balance-identity`

##### Waste flows

###### Off-spec aluminium powder sent off site (`offspec_aluminium_powder_waste`)

Record off-spec powder only when it leaves for treatment or disposal; internal recycle is not an output.

- Selected flow: Off-spec aluminium powder waste
- Flow property / unit: Mass / kg
- Amount rule: weighed mass dispatched off site and reconciled to transfer records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry conforming product when exported
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_mass_records`
- Sources: `mass-balance-identity`

###### Spent refractory sent off site (`spent_refractory_waste`)

Record spent refractory only when removed from included equipment and dispatched off site.

- Selected flow: refractory `7eb01b83-1b1d-43e4-a5bc-258755063c11`
- Flow property / unit: Mass / kg
- Amount rule: weighed dispatched mass assigned by documented service life or operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry conforming atomized product when applicable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_mass_records`
- Sources: `ehmsen-gas-atomization-2025`

##### Elementary flows

###### Direct fossil carbon dioxide to air (`fossil_carbon_dioxide_air`)

Record direct on-site fossil carbon dioxide from natural-gas combustion; exclude upstream emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or verified site emission record assigned to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry conforming product when fossil fuel is burned
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_records`
- Sources:

###### Aluminium particulate to ambient air (`aluminium_particulate_air`)

Record aluminium-bearing particulate released to ambient air after controls, not captured and recycled dust.

- Selected flow: Aluminium particulate to ambient air
- Flow property / unit: Mass / kg
- Amount rule: stack test, continuous monitor, or control-system mass balance for net release after controls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | route-separated campaigns and metered operations | Subdivide records by route, campaign, or equipment before allocating shared burdens. | `mass-balance-identity` |
| `internal_recycle` | internally returned powder, oversize, and captured aluminium | Keep internal returns inside the boundary, give no co-product credit, and reconcile gross feed to product, exported waste, loss, and stock change. | `mass-balance-identity` |
| `shared_grade_allocation` | multiple saleable grades from one inseparable campaign | Directly assign grade-specific operations, then allocate shared burdens by net dry mass; perform an economic sensitivity check when prices differ materially. | `mass-balance-identity` |
| `exported_material` | aluminium-bearing material leaving the site | Use the actual contractual destination to classify it as co-product, recyclable material, or waste; disclose the burden or credit convention. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_solid_mass_records` | `powder_flake_manufacture` | solid inputs and outputs | scale, stock, production, and dispatch records | timestamp; material; grade; lot; gross; tare; moisture; opening stock; closing stock; destination; instrument | Reconcile receipts, issues, stock change, product, and dispatch by campaign | kg | each transaction and campaign close | representative consecutive campaigns | declared line and storage | sum net mass by material and campaign, then normalize | calibration; stock reconciliation; lot and transfer records |
| `cp_energy_and_gas_records` | `powder_flake_manufacture` | electricity and each supplied gas | meter, invoice, tank, and equipment records | timestamp; meter; opening; closing; native unit; gas pressure; gas temperature; equipment; hours; allocation key | Prefer dedicated meters; reconcile shared totals and use documented causal allocation | native unit; MJ; m3 | continuous or each shift, monthly reconciliation | same campaigns as product | line plus documented shared utilities | subtract non-production use, assign campaign, normalize | calibration; invoices; historian; allocation worksheet |
| `cp_water_records` | `powder_flake_manufacture` | process-water make-up | make-up or once-through meter | timestamp; meter; opening; closing; unit; density basis; discharge; hours | Meter boundary-crossing water and exclude recirculation | kg | continuous or each shift, monthly reconciliation | same campaigns as product | water connections serving the line | subtract non-process use and normalize | calibration; water balance; invoice |
| `cp_direct_emission_records` | `powder_flake_manufacture` | direct carbon dioxide and aluminium particulate | stack, verified emission, or control mass balance | time; pollutant; concentration; exhaust flow; duration; detection limit; control status; method; uncertainty | Match net releases after controls to operating campaigns | kg | per monitoring plan and material change | representative operation in dataset period | all direct release points | integrate campaign release and normalize | laboratory; calibration; stack test; reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | every non-reference exchange | campaign exchange amount divided by net dry conforming product mass | exchange amount; product mass; moisture correction | amount per 1 kg reference product | `mass-balance-identity` |
| `reconcile_material_mass` | aluminium-bearing inputs and outputs | feed equals product plus exported aluminium waste plus measured loss plus closing-minus-opening in-process stock, on one moisture basis | feed; product; waste; particulate; stock change | mass-balance difference and closure | `mass-balance-identity` |
| `assign_shared_utility` | shared utilities and emissions | Assign dedicated meters first, then residual shared quantity using documented operating time or another causal driver; reconcile to site total. | dedicated readings; shared total; causal driver; output | campaign-assigned amount | `mass-balance-identity` |
| `convert_gas_volume` | supplied gases | Convert native quantity to m3 at one declared pressure and temperature and retain native readings and inputs. | native quantity; pressure; temperature; convention | m3 at declared conditions |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal` | all records | Cover representative consecutive campaigns and a normal maintenance or changeover cycle when material. | campaign and maintenance logs |
| `dq_technology` | route and equipment | Identify atomizer or mill, atomizing gas, melting, classifier, dust control, and packaging represented. | equipment list, process flow diagram, procedure |
| `dq_geography` | site and upstream links | State site geography and use upstream datasets consistent with supply geography and state. | site metadata, supplier records, link review |
| `dq_product` | reference product | Report grade, composition, powder or flake, particle size, morphology, moisture, surface treatment or lubricant, and packaging. | specification and certificate of analysis |
| `dq_completeness` | inventory | Mark prescribed rows present, zero with evidence, or not applicable with route reason; add other material exchanges atomically. | signed checklist and balance |
| `dq_uncertainty` | measured and allocated amounts | Record resolution, calibration, sampling uncertainty, allocation share, and missing-data treatment. | calibration, laboratory, and calculation records |

## 9. Validation Rules

A foreground data package conforms only when:

- the reference output is exactly 1 kg net dry conforming product after normalization and excludes packaging mass;
- all required product qualifiers and the actual atomization or dry-milling route are declared;
- each prescribed row is one atomic exchange and is present, zero with evidence, or not applicable with a route reason;
- aluminium inputs, product, exported waste, particulate, and stock change pass the disclosed mass-balance check or the residual is investigated;
- gas volumes share declared pressure and temperature conditions and electricity conversion to MJ is reproducible;
- compressed air, nitrogen, and argon are not aggregated or simultaneously counted unless records show distinct uses;
- direct fossil carbon dioxide excludes upstream emissions and aluminium particulate is net ambient release after controls;
- internal recycle is not reported as external waste or co-product and every off-site waste has a documented destination;
- allocation follows section 7, reconciles to shared totals, and includes the required grade sensitivity;
- source identifiers, protocols, inputs, UUID identities, unresolved UUIDs, and quality evidence are reviewable.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Publishing a manufacturing process and linking lifecycle models for products using dry aluminium powder or flake |
| allowed_use | Declared grade, route, geography, technology, packaging, and period, or a justified close analogue with limitations |
| excluded_use | Paste, aluminium compounds, granules, downstream powder use, or undisclosed market-average route |
| required_metadata | PCR id; qualifiers; geography; period; route; equipment; feed origin; recycled content; atomizing gas; packaging; allocation; boundary; upstream links |
| required_quality_disclosure | Representativeness; meter and sampling quality; mass-balance closure; applicability; missing data; allocation; UUID and range-evidence gaps |
| update_trigger | Material change in grade, route, gas, equipment, energy, feed, controls, packaging, allocation, or three-year dataset age |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `src_unsd_cpc_3_0_2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, verified 2026-09-04 | Official CPC 41531 identity |
| `china-nbs-statistical-products-2010` | official_guidance | National Bureau of Statistics of China, Statistical Products Classification 3336, https://www.stats.gov.cn/sj/tjbz/tjypflml/2010/33/3336.html, verified 2026-09-04 | Chinese product-name corroboration: 铝粉及片状粉末 |
| `gopienko-aluminium-powders-2009` | literature | V. G. Gopienko, Production of Aluminum and Aluminum Alloy Powders, Handbook of Non-Ferrous Metal Powders, Elsevier, 2009, pp. 267–283; book DOI 10.1016/B978-1-85617-422-0.X0001-8 | Aluminium-specific forms, atomization, dry flake milling, protective gas, classification, and packing |
| `ehmsen-gas-atomization-2025` | literature | S. Ehmsen, J. Conrads, M. Klar, and J. C. Aurich, Environmental Impact of Powder Production for Additive Manufacturing: Carbon Footprint and Cumulative Energy Demand of Gas Atomization, 2025, DOI 10.21203/rs.3.rs-6202700/v1 | Transferable atomization operations and candidate exchanges; stainless-steel quantities are not used as aluminium ranges |
| `mass-balance-identity` | method_factor | Mass conservation and reference-flow normalization identity over the declared campaign boundary | Normalization, internal-recycle treatment, dry-mass allocation, calculation, and validation |
