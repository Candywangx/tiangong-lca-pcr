---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.pepper-piper-spp-processed
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Pepper (Piper spp.), processed

## 1. Scope and Applicability

This PCR applies to factory-gate production of processed pepper made from berries of *Piper* species, represented by *Piper nigrum* L. It covers black pepper, white pepper, and dehydrated green pepper only when the product class, cultivar or species, presentation, incoming material state, wet-treatment route, depericarping route, drying route, sanitization route, and packaging format are declared for the represented lot or campaign.

Whole, broken, cracked, coarsely ground, ground, and powdered presentations are distinct product forms. Black, white, and dehydrated green pepper are distinct product classes. A dataset shall not average these forms or classes unless it reports each segregated foreground route and calculates the declared production-weighted mix transparently. Water retting, mechanical depericarping, wet washing or blanching, sun drying, enclosed solar drying, hot-air drying, and sanitization technologies are likewise separate route gates and shall not be averaged into an undeclared generic route.

The PCR excludes raw or unprocessed pepper berries sold at farm gate, *Capsicum* and *Pimenta* peppers, spice blends, pepper oleoresin, essential oil and purified piperine, brined or canned green pepper, frozen pepper, retail preparation and use, and extraction or formulation beyond the declared pepper product. Cultivation and supplier processing remain upstream datasets unless operated by the reporting facility; outbound distribution begins after the reference product crosses the factory gate.

The required authoring profile is `atomic_flows:v1`. Every material, energy carrier, chemical, packaging material, waste, wastewater, refrigerant, and direct elementary emission crossing the foreground boundary shall be represented as its own atomic flow row. Unknown chemical identity is an evidence gap, not permission to use a grouped flow.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.pepper-piper-spp-processed |
| classification_refs | CPC:3.0:23921 (exact) |
| covered_products | Black pepper with intact pericarp; white pepper after pericarp removal; dehydrated green pepper; each as whole, broken, cracked, coarsely ground, ground, or powdered processed *Piper* pepper |
| excluded_products | Raw farm-gate pepper; *Capsicum* or *Pimenta* peppers; brined, canned, or frozen green pepper; blends; oleoresin; essential oil; purified piperine; products with undeclared class, form, or route |
| representative_product | 1 kg net processed *Piper nigrum* pepper, at factory gate, meeting the declared product class, presentation, grade, moisture specification, and package format |
| production_route | Declared route vector: incoming material state -> separation -> wet pretreatment if used -> white-pepper retting and/or depericarping if used -> route-specific drying -> cleaning/grading -> milling if used -> sanitization if used -> packaging -> storage |
| market_state | Dry, food-grade processed pepper at factory gate; product class, presentation, grade, final moisture, and package format declared |

### Product and route selection gate

Before inventory aggregation, each lot or production campaign shall declare one value for every applicable field below. Records with different values shall remain separate until the output product mix is intentionally defined and disclosed.

| gate_id | Required declaration | Allowed treatment in one dataset |
| --- | --- | --- |
| `gate_species` | *Piper* species and cultivar when known | No averaging across species or cultivars without segregated records and disclosed production weights |
| `gate_product_class` | `black`, `white`, or `dehydrated_green` | No implicit averaging across product classes |
| `gate_presentation` | `whole`, `broken`, `cracked`, `coarsely_ground`, `ground`, or `powdered` | No implicit averaging across presentations |
| `gate_incoming_state` | Fresh berries, berries on spikes, farm-dried pepper, cleaned whole pepper, or another precisely described state | Upstream dataset shall match the declared state |
| `gate_wet_treatment` | None, rapid washing, blanching, or another identified treatment | Water, heat, chemicals, and wastewater remain route-specific |
| `gate_depericarping` | None, water retting plus removal, mechanical peeling, steam-assisted peeling, or a declared sequence | Different wet and mechanical routes remain separate |
| `gate_drying` | Open sun, enclosed solar, mechanical hot air, or a declared sequential route | Energy carriers, yield, time, and moisture loss remain route-specific |
| `gate_sanitization` | None, steam, dry heat, irradiation, or another identified technology | Technology-specific inputs, losses, and direct emissions remain separate |
| `gate_packaging` | Bulk or retail format and each material layer | Each packaging material is an atomic input and scrap output |

## 3. Reference Flow

### Functional unit

| Field | Value |
| --- | --- |
| What | Processed *Piper* pepper delivered at the reporting facility gate |
| How much | 1 kg net pepper product, excluding packaging |
| How well | Meets the declared black, white, or dehydrated-green product class; declared whole-to-powder presentation; applicable Codex or buyer grade; declared final moisture and food-safety specification |
| How long or cycle | One representative production campaign or a production-weighted reporting period of up to 12 consecutive months |
| reference_flow_link | `processed_pepper_reference_output` |

### Tiangong reference flow object

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product |
| Reference product flow | Pepper (Piper spp.), processed `99d5d3c5-870f-458f-b492-a610d37c8034` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species_or_cultivar; pepper_colour_class; presentation_style; incoming_material_state; wet_pretreatment_route; depericarping_route; drying_route; sanitization_route; grade_or_specification; final_moisture_percent_wet_basis; packaging_format; production_site; production_period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass | kg | Normalize to net pepper mass at factory gate; exclude packaging mass and retain the measured product moisture. |
| `moisture_wet_basis` | Incoming, intermediate, and final pepper | Mass fraction | % wet basis | Report moisture as 100 × water mass / wet sample mass; identify the test method and sample time. |
| `dry_matter_conversion` | Route yield and material balance | Mass | kg dry matter | Calculate dry matter as wet mass × (1 - moisture fraction wet basis); do not compare wet-route yields without this conversion. |
| `energy_carrier_identity` | Electricity, steam, hot water, natural gas, LPG, diesel, and biomass | Energy and carrier quantity | kWh, MJ, kg, L, or m3 | Preserve each carrier as a separate flow; retain supplier quantity, lower heating value when used, and conversion factor. |
| `water_volume` | Washing, blanching, retting, steam, and cleaning water | Volume | m3 | Meter or reconcile each water use separately; do not combine process water with wastewater volume. |
| `packaging_net_mass` | Every packaging layer | Mass | kg | Record purchased or issued mass by material and subtract verified unused returns; do not use package count without a measured mass-per-item conversion. |
| `wastewater_load` | Each wastewater stream | Volume and concentration | m3 and kg/m3 | Report volume separately from COD or other pollutant concentration; calculate load as volume × concentration. |
| `refrigerant_mass_balance` | Any refrigerant-consuming storage equipment | Mass | kg | Report each refrigerant chemical separately using opening charge + additions - closing charge - recovered mass. |
| `direct_emission_mass` | On-site fuel combustion and dust releases | Mass | kg | Prefer stack or equipment records; otherwise calculate each pollutant separately from the recorded fuel and an identified factor source. |

## 5. System Boundary

The foreground starts at receipt of the declared pepper material state and ends when packaged processed pepper is released at the factory gate. Receiving, separation, wet-route steps, drying, dry cleaning and grading, size reduction, sanitization, equipment cleaning, packaging, finished-goods storage, on-site utilities, direct emissions, wastes, and wastewater are included when they occur. Cultivation, supplier processing, purchased energy, purchased materials, treatment of exported waste, and inbound transport require upstream datasets but are not silently absorbed into foreground measurements.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Physical state, product class, species or cultivar, moisture, cleanliness, supplier processing, packaging, location, and time of the pepper material received at the reporting facility |
| starting_condition_role | Foreground gate input whose upstream cultivation, preprocessing, and inbound transport are represented by linked supplier or secondary datasets |
| product_classification_scope | Processed *Piper* pepper associated with CPC 3.0 code 23921; classification is mapping context and does not replace product and route qualifiers |
| recursive_input_rule | If already processed pepper in this same category is received for cleaning, milling, sanitization, repacking, or storage, record it once as `same_category_processed_pepper_input`, link its upstream dataset, and model only the additional foreground operations; do not recursively reconstruct or double count its earlier processing |
| upstream_dataset_requirement | A geographically, temporally, technologically, product-class-, presentation-, moisture-, and route-matched dataset is required for each received pepper material, energy carrier, water supply, chemical, and packaging material |
| disclosure | Disclose gate vector, supplier starting state, excluded operations, allocation, cut-offs, route shares, mass and moisture balance, energy carriers, wastewater destination, direct emissions, packaging, refrigerants, and data gaps |

### Normative system-boundary rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_route_gate` | All foreground records | Apply the product and route selection gate before aggregation; mutually exclusive product classes, presentations, wet treatments, depericarping routes, and drying routes shall not be averaged implicitly. | `codex-cxs-326-2017`; `ipc-pepper-standard-2015`; `fao-gi-control-plan-2009` |
| `sb_required_operations` | Unit-process coverage | Include every listed required process and every conditional process whose gate condition is met; document a zero or not-applicable result rather than deleting an occurring route. | `ipc-pepper-standard-2015`; `fao-spice-quality-assurance` |
| `sb_recursive_input` | Same-category processed pepper input | Link the upstream processed-pepper dataset and model only added foreground conversion; prevent recursion and double counting. | `eu-pef-method-2021` |
| `sb_upstream_linkage` | Purchased inputs and exported treatments | Link upstream datasets for received pepper, utilities, chemicals, packaging, inbound transport, and treatment of wastes or wastewater outside the site. | `eu-pef-method-2021` |
| `sb_factory_gate` | Reference product | End the foreground after final release and storage at the reporting facility; exclude outbound distribution, retail, use, and end-of-life unless a broader study adds them transparently. | `eu-pef-method-2021` |
| `sb_atomic_flows` | All inventory exchanges | Use one row per identified carrier, material, chemical, packaging material, waste stream, wastewater stream, refrigerant, and elementary emission; grouped placeholders do not conform. | `fao-spice-quality-assurance`; `ipcc-stationary-combustion-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_and_lot_qualification` | Receiving and lot qualification | required | All datasets | Foreground receiving, identity gate, weighing, sampling, and rejection | Per 1 kg released reference product |
| `threshing` | Threshing and spike separation | conditional | Include only when berries on spikes or clusters cross the starting gate | Foreground mechanical separation | Per kg separated berries |
| `wet_pretreatment` | Washing or blanching pretreatment | conditional | Include only when rapid washing, blanching, or dehydrated-green preservative treatment is declared | Foreground wet conditioning | Per kg pretreated pepper |
| `white_pepper_retting` | White-pepper water retting | conditional | Include only for a declared water-retting route | Foreground wet pericarp softening | Per kg retted berries |
| `depericarping` | Pericarp removal and kernel washing | conditional | Include for white pepper whenever manual, mechanical, steam-assisted, or post-retting pericarp removal occurs | Foreground separation | Per kg white pepper kernel |
| `dry_cleaning_and_grading` | Dry cleaning and grading | required | All datasets; operations may occur before or after drying and milling but shall be located explicitly | Foreground removal of foreign matter and off-grade berries | Per kg cleaned pepper |
| `sun_drying` | Open-sun drying | conditional | Include only for the declared open-sun route | Foreground moisture removal | Per kg sun-dried pepper |
| `enclosed_solar_drying` | Enclosed solar drying | conditional | Include only for the declared enclosed-solar route | Foreground protected solar moisture removal | Per kg solar-dried pepper |
| `hot_air_drying` | Mechanical hot-air drying | conditional | Include only for the declared mechanical route or declared stage in a sequential route | Foreground forced-air moisture removal | Per kg hot-air-dried pepper |
| `milling_and_sieving` | Crushing, grinding, and sieving | conditional | Include for broken, cracked, coarsely ground, ground, or powdered presentation | Foreground size reduction | Per kg milled pepper |
| `product_sanitization` | Product sanitization | conditional | Include only when steam, dry heat, irradiation, or another identified treatment occurs | Foreground microbial reduction | Per kg sanitized pepper |
| `equipment_cleaning` | Equipment and room cleaning | required | All datasets; dry and wet cleaning records shall be distinguished | Foreground hygiene support | Per production campaign and normalized to reference product |
| `packaging` | Primary, secondary, and tertiary packaging | required | All datasets | Foreground filling and packaging | Per 1 kg released reference product |
| `finished_goods_storage` | Finished-goods storage and release | required | All datasets | Foreground ambient or conditioned storage and final release | Per 1 kg released reference product |

### Process: Receiving and lot qualification (`receiving_and_lot_qualification`)

#### Inputs

##### Product flows

###### Fresh or mature berries for black-pepper production (`fresh_black_pepper_berries_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Fresh *Piper* berries for black-pepper production
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted input for lots declared `black`; record species or cultivar, maturity, moisture, supplier state, and foreign matter before processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lot_records`
- Quality evidence: Calibrated scale ticket, supplier lot record, sampling record, moisture result, and gate declaration
- Sources: `codex-cxs-326-2017`; `ipc-pepper-standard-2015`

###### Fully mature berries for white-pepper production (`ripe_white_pepper_berries_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Fully mature or ripe *Piper* berries for white-pepper production
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted input for lots declared `white`; record species or cultivar, maturity, moisture, supplier state, and intended depericarping route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lot_records`
- Quality evidence: Calibrated scale ticket, supplier lot record, maturity inspection, moisture result, and route declaration
- Sources: `codex-cxs-326-2017`; `ipc-pepper-standard-2015`; `azman-retting-water-2020`

###### Green berries for dehydrated-green pepper (`green_pepper_berries_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Green *Piper* berries for dehydrated-green pepper
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted input only for lots declared `dehydrated_green`; record maturity, moisture, preservation treatment, and drying route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lot_records`
- Quality evidence: Calibrated scale ticket, supplier lot record, colour and maturity inspection, moisture result, and route declaration
- Sources: `codex-cxs-326-2017`; `ipc-pepper-standard-2015`

###### Same-category processed whole pepper (`same_category_processed_pepper_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Processed *Piper* pepper received for additional cleaning, milling, sanitization, repacking, or storage
- Flow property / unit: Mass / kg
- Amount rule: Weighed input only when an upstream processed-pepper dataset is linked; record product class, presentation, moisture, earlier route, and upstream dataset identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lot_records`
- Quality evidence: Scale ticket, upstream dataset reference, certificate of analysis, and same-category recursion check
- Sources: `eu-pef-method-2021`

###### Electricity for receiving and sampling (`receiving_electricity_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Electricity, facility supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered or equipment-runtime electricity used for receiving conveyors, samplers, scales, aspiration, and receiving-room services
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Meter reading or rated power × logged runtime with allocation key

#### Outputs

##### Product flows

###### Accepted declared pepper lot (`accepted_pepper_lot_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Accepted *Piper* pepper lot with declared starting state
- Flow property / unit: Mass / kg
- Amount rule: Accepted input mass after separately weighing all rejected pepper and foreign matter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per receiving lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_lot_records`
- Quality evidence: Signed lot disposition and mass reconciliation
- Sources: `fao-spice-quality-assurance`

##### Waste flows

###### Rejected pepper berries (`rejected_pepper_berries_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Rejected *Piper* pepper berries
- Flow property / unit: Mass / kg
- Amount rule: Weighed mouldy, infested, damaged, or specification-failing berries sent to the declared treatment or use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Calibrated waste scale record, rejection code, and destination receipt
- Sources: `fao-spice-quality-assurance`
- Range: Provisional mass-balance screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg received pepper
  - Basis: Screening bound from no rejection to rejection of the complete received pepper mass; replace with reviewed site evidence
  - Sensitivity: Test both bounds because rejection directly changes upstream input and waste per kg released product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separated vegetative foreign matter (`receiving_vegetative_matter_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Pepper stems, leaves, chaff, and other vegetative foreign matter
- Flow property / unit: Mass / kg
- Amount rule: Weighed vegetative matter removed during receiving; do not combine with stones, soil, or rejected berries
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Segregated container tare/gross record and destination receipt
- Sources: `codex-cxs-326-2017`; `ipc-pepper-standard-2015`

###### Separated stones and soil (`receiving_stones_soil_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Stones, sand, and soil removed from pepper
- Flow property / unit: Mass / kg
- Amount rule: Weighed mineral foreign matter removed during receiving; do not combine with vegetative matter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Segregated container tare/gross record and destination receipt
- Sources: `codex-cxs-326-2017`; `fao-spice-quality-assurance`

###### Discarded incoming jute sacks (`incoming_jute_sack_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Used jute sacks from incoming pepper
- Flow property / unit: Mass / kg
- Amount rule: Weighed jute packaging discarded after receipt; returned or reused sacks are recorded separately and not treated as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Packaging count, measured mass per sack, reuse log, and waste receipt

###### Discarded incoming polypropylene sacks (`incoming_polypropylene_sack_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Used woven polypropylene sacks from incoming pepper
- Flow property / unit: Mass / kg
- Amount rule: Weighed polypropylene packaging discarded after receipt; returned or reused sacks are recorded separately and not treated as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Packaging count, measured mass per sack, reuse log, and waste receipt

### Process: Threshing and spike separation (`threshing`)

#### Inputs

##### Product flows

###### Pepper spikes or clusters (`pepper_spikes_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: *Piper* pepper berries on spikes or clusters
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted pepper spikes entering threshing; include only when the declared starting state contains spikes or clusters
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg separated berries
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_threshing_records`
- Quality evidence: Batch scale record and declared incoming material state
- Sources: `ipc-pepper-standard-2015`

###### Electricity for threshing (`threshing_electricity_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Electricity, facility supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered or rated-power × runtime electricity for the thresher and associated conveyor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg separated berries
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Submeter or equipment nameplate, runtime log, and batch mass

#### Outputs

##### Product flows

###### Separated pepper berries (`separated_pepper_berries_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Separated *Piper* pepper berries
- Flow property / unit: Mass / kg
- Amount rule: Weighed berries leaving threshing, before wet treatment or drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per threshing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_threshing_records`
- Quality evidence: Calibrated scale ticket and batch reconciliation

##### Waste flows

###### Pepper spikes and stalks (`pepper_spikes_stalks_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Pepper spikes and stalks removed by threshing
- Flow property / unit: Mass / kg
- Amount rule: Weighed separated spikes and stalks by destination; do not combine with rejected berries
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg separated berries
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Segregated container weight and destination record
- Sources: `ipc-pepper-standard-2015`

##### Elementary flows

###### Pepper dust released during threshing (`threshing_pepper_dust_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Pepper particulate matter released to air during threshing
- Flow property / unit: Mass / kg
- Amount rule: Measured captured-plus-emitted dust balance or technology-specific emission estimate; report captured dust as waste and uncaptured dust here
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg separated berries
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dust_emission_records`
- Quality evidence: Dust collector mass record, stack test or documented engineering estimate, and runtime

### Process: Washing or blanching pretreatment (`wet_pretreatment`)

#### Inputs

##### Product flows

###### Pepper berries entering wet pretreatment (`wet_pretreatment_pepper_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Declared *Piper* pepper berries entering washing, blanching, or dehydrated-green treatment
- Flow property / unit: Mass / kg
- Amount rule: Weighed route-segregated pepper input; identify `black`, `white`, or `dehydrated_green` and the exact treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg pretreated pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_pretreatment_records`
- Quality evidence: Batch mass, route declaration, treatment set point, and operator log
- Sources: `fao-spice-quality-assurance`; `shango-pepper-quality-2021`

###### Process water for washing or blanching (`wet_pretreatment_process_water_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Process water for pepper washing or blanching
- Flow property / unit: Volume / m3
- Amount rule: Metered make-up water supplied to the declared wet-treatment batch; subtract only separately metered reuse and do not combine with cleaning water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg pretreated pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: Calibrated water meter, batch log, water-quality result, and reuse record
- Sources: `fao-spice-quality-assurance`
- Range: Provisional wet-treatment water screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 0.02
  - Unit: m3/kg pretreated pepper
  - Basis: Broad screening interval for rapid washing or blanching; route measurements replace this estimate
  - Sensitivity: Vary across the full interval because water supply and wastewater results scale directly with this value
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for wet pretreatment (`wet_pretreatment_electricity_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Electricity, facility supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered or equipment-runtime electricity for pumps, conveyors, agitators, and controls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg pretreated pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Submeter or rated power × runtime and batch mass

###### Purchased steam for blanching (`wet_pretreatment_steam_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased steam only when the batch uses steam heating; do not combine with hot water or onsite fuel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg pretreated pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Steam meter, pressure and enthalpy basis, and treatment batch log

###### Purchased hot water for blanching (`wet_pretreatment_hot_water_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered imported hot-water energy only when used; retain water volume separately and do not combine with steam
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg pretreated pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Flow and inlet/outlet temperature record, heat calculation, and batch log

###### Natural gas for wet-treatment heating (`wet_pretreatment_natural_gas_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Natural gas combusted onsite for wet-treatment heating
- Flow property / unit: Volume / m3
- Amount rule: Metered natural gas only when the selected route heats water onsite with natural gas; keep separate from LPG and diesel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg pretreated pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Fuel meter, supplier heating value, burner log, and batch allocation
- Sources: `ipcc-stationary-combustion-2006`

###### Liquefied petroleum gas for wet-treatment heating (`wet_pretreatment_lpg_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Liquefied petroleum gas combusted onsite for wet-treatment heating
- Flow property / unit: Mass / kg
- Amount rule: Weighed or invoice-reconciled LPG only when used; keep separate from natural gas and diesel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg pretreated pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Tank mass or delivery reconciliation, supplier heating value, burner log, and batch allocation
- Sources: `ipcc-stationary-combustion-2006`

###### Diesel for wet-treatment heating (`wet_pretreatment_diesel_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Diesel combusted onsite for wet-treatment heating
- Flow property / unit: Volume / L
- Amount rule: Metered diesel only when used; keep separate from natural gas and LPG
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg pretreated pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Tank dip or flow meter, supplier density and heating value, burner log, and batch allocation
- Sources: `ipcc-stationary-combustion-2006`

###### Sulfur dioxide preservative for dehydrated green pepper (`green_pepper_sulfur_dioxide_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Sulfur dioxide food additive
- Flow property / unit: Mass / kg
- Amount rule: Measured addition only for `dehydrated_green`; black and white pepper shall record zero; verify the applicable legal and buyer limit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg dehydrated green pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_input_records`
- Quality evidence: Batch formulation, calibrated dosing record, additive certificate, and finished-product test
- Sources: `codex-cxs-326-2017`

#### Outputs

##### Product flows

###### Wet-pretreated pepper (`wet_pretreated_pepper_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Washed, blanched, or treated *Piper* pepper
- Flow property / unit: Mass / kg
- Amount rule: Weighed output with treatment route, temperature-time record, and moisture after draining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per wet-treatment batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_pretreatment_records`
- Quality evidence: Calibrated scale, treatment log, moisture sample, and route identity

##### Waste flows

###### Pepper washing or blanching wastewater (`wet_pretreatment_wastewater`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Pepper washing or blanching wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered wastewater discharged from wet pretreatment, net of separately measured water retained in product or evaporated; record destination and treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg pretreated pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: Effluent meter or tank balance, sampling result, and discharge or treatment receipt
- Sources: `fao-spice-quality-assurance`

###### Wet-treatment sediment and removed debris (`wet_pretreatment_sediment_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Sediment, soil, and pepper debris removed from wet-treatment water
- Flow property / unit: Mass / kg
- Amount rule: Weighed dewatered solids removed from screens, filters, or tanks; do not combine with wastewater volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg pretreated pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Container tare/gross record, solids moisture note, and destination receipt

##### Elementary flows

###### Fossil carbon dioxide from wet-treatment heating (`wet_pretreatment_fossil_co2_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from each recorded fossil fuel quantity, lower heating value, and selected CO2 factor; zero for purchased steam or hot water to avoid double counting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg pretreated pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_combustion_emission_records`
- Quality evidence: Fuel record, heating-value source, factor version, oxidation assumption, and calculation sheet
- Sources: `ipcc-stationary-combustion-2006`

###### Methane from wet-treatment heating (`wet_pretreatment_ch4_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from each recorded onsite fuel and technology-appropriate CH4 factor; zero for purchased heat
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg pretreated pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_combustion_emission_records`
- Quality evidence: Fuel record, factor source and version, equipment class, and calculation sheet
- Sources: `ipcc-stationary-combustion-2006`

###### Nitrous oxide from wet-treatment heating (`wet_pretreatment_n2o_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from each recorded onsite fuel and technology-appropriate N2O factor; zero for purchased heat
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg pretreated pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_combustion_emission_records`
- Quality evidence: Fuel record, factor source and version, equipment class, and calculation sheet
- Sources: `ipcc-stationary-combustion-2006`

### Process: White-pepper water retting (`white_pepper_retting`)

#### Inputs

##### Product flows

###### Mature berries entering water retting (`white_retting_berries_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Fully mature *Piper* berries for white-pepper water retting
- Flow property / unit: Mass / kg
- Amount rule: Weighed segregated berries entering the declared water-retting batch; record cultivar, maturity, incoming moisture, tank, and start time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg retted berries
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_retting_records`
- Quality evidence: Batch scale ticket, maturity inspection, tank identity, and route gate
- Sources: `azman-retting-water-2020`; `shango-pepper-quality-2021`

###### Water for white-pepper retting (`white_retting_water_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Process water for white-pepper retting
- Flow property / unit: Volume / m3
- Amount rule: Metered initial and replacement water for each retting tank; running-water and static-tank routes remain separate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg berries entering retting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: Calibrated meter or tank dimensions and fill level, change log, water-source test, and batch mass
- Sources: `azman-retting-water-2020`
- Range: Experimental static-tank water-loading screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.006
  - Upper: 0.018
  - Unit: m3/kg berries entering retting
  - Basis: Range represented by the reported 18 L tanks loaded with 1-3 kg berries; use only as a screening comparison, not an industrial default
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `azman-retting-water-2020`

###### Electricity for retting circulation (`white_retting_electricity_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Electricity, facility supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered or equipment-runtime electricity for water circulation, aeration, pumps, and tank handling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg berries entering retting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Submeter or rated power × runtime, equipment identity, and batch mass

#### Outputs

##### Product flows

###### Retted pepper berries (`retted_pepper_berries_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Retted *Piper* berries with softened pericarp
- Flow property / unit: Mass / kg
- Amount rule: Weighed drained output after declared retting duration; record moisture and retained water before depericarping
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per retting batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_retting_records`
- Quality evidence: Drained batch mass, moisture result, duration, temperature, pH, and tank record
- Sources: `azman-retting-water-2020`

##### Waste flows

###### White-pepper retting wastewater (`white_retting_wastewater`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: White-pepper retting wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered spent retting water by tank and discharge event; record treatment, reuse, destination, pH, COD, dissolved oxygen, and turbidity when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg berries entering retting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: Effluent volume, dated composite sample, accredited or documented test, and treatment receipt
- Sources: `azman-retting-water-2020`
- Range: Reported retting-water COD concentration screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.008
  - Upper: 3.25
  - Unit: kg COD/m3 wastewater
  - Basis: Approximate span of initial through day-seven COD observations in the cited static-tank experiment; not a discharge limit
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `azman-retting-water-2020`

### Process: Pericarp removal and kernel washing (`depericarping`)

#### Inputs

##### Product flows

###### Pepper berries entering pericarp removal (`depericarping_pepper_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Retted, steamed, or ripe *Piper* berries entering declared pericarp removal
- Flow property / unit: Mass / kg
- Amount rule: Weighed input segregated by `water_retting_plus_removal`, `mechanical_peeling`, `steam_assisted_peeling`, or another exact sequence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg white pepper kernel
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_depericarping_records`
- Quality evidence: Batch mass, route gate, upstream lot link, and equipment or manual-work log
- Sources: `codex-cxs-326-2017`; `shango-pepper-quality-2021`

###### Water for kernel washing (`depericarping_wash_water_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Process water for white-pepper kernel washing
- Flow property / unit: Volume / m3
- Amount rule: Metered water used after or during pericarp removal; do not combine with retting or equipment-cleaning water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg white pepper kernel
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: Calibrated meter, water-quality result, batch mass, and reuse log

###### Electricity for mechanical depericarping (`depericarping_electricity_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Electricity, facility supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered or rated-power × runtime electricity for mechanical peelers, pumps, and separators; zero for fully manual routes without powered equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg white pepper kernel
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Submeter or equipment nameplate, runtime, and batch mass

###### Purchased steam for steam-assisted peeling (`depericarping_steam_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam only for the declared steam-assisted route; do not combine with onsite fuel or steam sanitization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg white pepper kernel
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Steam meter, pressure and enthalpy basis, and peeling batch log

#### Outputs

##### Product flows

###### White pepper kernels (`white_pepper_kernels_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: White *Piper* pepper kernels after pericarp removal
- Flow property / unit: Mass / kg
- Amount rule: Weighed washed and drained kernels; record retained-pericarp fraction and moisture before drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per depericarping batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_depericarping_records`
- Quality evidence: Calibrated scale, visual pericarp inspection, moisture result, and batch reconciliation
- Sources: `codex-cxs-326-2017`

##### Waste flows

###### Removed pepper pericarp (`pepper_pericarp_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Pepper pericarp removed during white-pepper production
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet or dry pericarp by destination; record moisture and do not combine with kernel rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg white pepper kernel
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Container tare/gross mass, moisture note, and destination receipt

###### Depericarping wash wastewater (`depericarping_wash_wastewater`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: White-pepper depericarping wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered wash effluent after peeling; keep separate from retting wastewater and equipment-cleaning wastewater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg white pepper kernel
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: Effluent meter or tank balance, sample record, and treatment or discharge receipt

##### Elementary flows

###### Pepper dust from mechanical peeling (`depericarping_pepper_dust_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Pepper particulate matter released to air during mechanical peeling
- Flow property / unit: Mass / kg
- Amount rule: Calculate uncaptured dust from measured collected dust and an equipment or stack balance; zero for routes without dust generation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg white pepper kernel
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dust_emission_records`
- Quality evidence: Dust collector mass, stack test or engineering estimate, and runtime

### Process: Dry cleaning and grading (`dry_cleaning_and_grading`)

#### Inputs

##### Product flows

###### Pepper entering dry cleaning and grading (`dry_cleaning_pepper_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Whole or milled *Piper* pepper entering dry cleaning and grading
- Flow property / unit: Mass / kg
- Amount rule: Weighed input with product class, presentation, moisture, and process position declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg cleaned pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_grading_records`
- Quality evidence: Batch mass, lot link, sieve or sorter settings, and incoming inspection
- Sources: `ipc-pepper-standard-2015`; `fao-spice-quality-assurance`

###### Electricity for cleaning and grading (`dry_cleaning_electricity_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Electricity, facility supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered or rated-power × runtime electricity for aspirators, destoners, magnets, graders, and conveyors
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg cleaned pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Submeter or equipment power, runtime, and batch mass

#### Outputs

##### Product flows

###### Cleaned and graded pepper (`cleaned_graded_pepper_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Cleaned and graded *Piper* pepper
- Flow property / unit: Mass / kg
- Amount rule: Weighed conforming output by declared grade and presentation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per cleaning and grading batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_grading_records`
- Quality evidence: Scale ticket, sieve or grading result, defect test, and release record
- Sources: `codex-cxs-326-2017`; `ipc-pepper-standard-2015`

##### Waste flows

###### Light berries and pinheads (`light_berries_pinheads_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Light pepper berries and pinheads removed during grading
- Flow property / unit: Mass / kg
- Amount rule: Weighed separated light berries and pinheads by destination; do not combine with stones, vegetative matter, or off-spec powder
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg cleaned pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Segregated scale record, grade test, and destination receipt
- Sources: `codex-cxs-326-2017`; `ipc-pepper-standard-2015`

###### Vegetative matter from dry cleaning (`dry_cleaning_vegetative_matter_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Pepper stems, leaves, and chaff removed during dry cleaning
- Flow property / unit: Mass / kg
- Amount rule: Weighed vegetative matter removed by aspirator or manual sorting; keep separate from mineral matter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg cleaned pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Segregated container mass and destination receipt

###### Stones and soil from destoning (`dry_cleaning_stones_soil_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Stones, sand, and soil removed during destoning
- Flow property / unit: Mass / kg
- Amount rule: Weighed mineral matter removed by destoner or manual sorting; keep separate from vegetative matter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg cleaned pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Segregated container mass and destination receipt

##### Elementary flows

###### Pepper dust from dry cleaning (`dry_cleaning_pepper_dust_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Pepper particulate matter released to air during aspiration and grading
- Flow property / unit: Mass / kg
- Amount rule: Calculate uncaptured dust separately from captured pepper dust waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg cleaned pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dust_emission_records`
- Quality evidence: Dust collector mass, stack test or engineering estimate, and equipment runtime
- Sources: `fao-spice-quality-assurance`

### Process: Open-sun drying (`sun_drying`)

#### Inputs

##### Product flows

###### Wet pepper entering open-sun drying (`sun_drying_wet_pepper_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Wet *Piper* pepper for open-sun drying
- Flow property / unit: Mass / kg
- Amount rule: Weighed route-segregated input with product class and moisture before spreading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg sun-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch_records`
- Quality evidence: Batch scale, moisture sample, drying-area record, start time, and weather log
- Sources: `fao-spice-quality-assurance`; `shango-pepper-quality-2021`

#### Outputs

##### Product flows

###### Sun-dried pepper (`sun_dried_pepper_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Open-sun-dried *Piper* pepper
- Flow property / unit: Mass / kg
- Amount rule: Weighed output after the declared drying endpoint; record final moisture, duration, turning, cover events, and contamination controls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per sun-drying batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch_records`
- Quality evidence: Calibrated scale, moisture test, time-weather record, and release inspection
- Sources: `codex-cxs-326-2017`; `fao-spice-quality-assurance`

##### Elementary flows

###### Water evaporated during sun drying (`sun_drying_water_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Water emitted to air from pepper drying
- Flow property / unit: Mass / kg
- Amount rule: Calculate from wet and dry pepper mass and moisture measurements using `calc_moisture_removed`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg sun-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_batch_records`
- Quality evidence: Paired batch masses, moisture tests, sampling method, and calculation sheet

### Process: Enclosed solar drying (`enclosed_solar_drying`)

#### Inputs

##### Product flows

###### Wet pepper entering enclosed solar drying (`solar_drying_wet_pepper_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Wet *Piper* pepper for enclosed solar drying
- Flow property / unit: Mass / kg
- Amount rule: Weighed route-segregated input with product class and moisture before loading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg solar-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch_records`
- Quality evidence: Batch scale, moisture sample, dryer identity, and start record

###### Electricity for solar-dryer fans (`solar_drying_electricity_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Electricity, facility supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered or rated-power × runtime electricity for fans, controls, and conveyors; passive solar dryers record zero
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg solar-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Submeter or equipment power, runtime, and batch mass
- Range: Provisional fan-electricity screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh/kg solar-dried pepper
  - Basis: Broad passive-to-forced-air screening interval; replace with dryer-specific records
  - Sensitivity: Test zero, midpoint, and upper bound; electricity-related results scale directly with fan demand
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Enclosed-solar-dried pepper (`solar_dried_pepper_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Enclosed-solar-dried *Piper* pepper
- Flow property / unit: Mass / kg
- Amount rule: Weighed output with final moisture, drying duration, temperature, airflow, and protection state recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per solar-drying batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch_records`
- Quality evidence: Calibrated scale, moisture test, time-temperature log, and release inspection
- Sources: `fao-spice-quality-assurance`; `shango-pepper-quality-2021`

##### Elementary flows

###### Water evaporated during enclosed solar drying (`solar_drying_water_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Water emitted to air from pepper drying
- Flow property / unit: Mass / kg
- Amount rule: Calculate from wet and dry pepper mass and moisture measurements using `calc_moisture_removed`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg solar-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_batch_records`
- Quality evidence: Paired batch masses, moisture tests, sampling method, and calculation sheet

### Process: Mechanical hot-air drying (`hot_air_drying`)

#### Inputs

##### Product flows

###### Wet pepper entering hot-air drying (`hot_air_drying_wet_pepper_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Wet *Piper* pepper for mechanical hot-air drying
- Flow property / unit: Mass / kg
- Amount rule: Weighed route-segregated input with product class, presentation, and moisture before loading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg hot-air-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch_records`
- Quality evidence: Batch scale, moisture result, dryer identity, and start record
- Sources: `shango-pepper-quality-2021`

###### Electricity for hot-air drying (`hot_air_drying_electricity_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Electricity, facility supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for fans, heaters, pumps, controls, and conveyors; electrically heated and fuel-heated routes remain separate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg hot-air-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Submeter or equipment power, runtime, and batch mass
- Range: Provisional mechanical-drying electricity screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 20
  - Unit: kWh/kg hot-air-dried pepper
  - Basis: Deliberately broad first-pass range covering fan-only through electric-heater systems; replace with equipment records
  - Sensitivity: Test both bounds and keep electric-heater and fuel-heater routes separate because the range can dominate results
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased steam for hot-air drying (`hot_air_drying_steam_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam supplied to the dryer heat exchanger only when selected; do not combine with onsite fuels
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg hot-air-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Steam meter, pressure and enthalpy basis, and batch allocation

###### Natural gas for hot-air drying (`hot_air_drying_natural_gas_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Natural gas combusted onsite for hot-air drying
- Flow property / unit: Volume / m3
- Amount rule: Metered natural gas only for a declared gas-fired dryer; keep separate from LPG, diesel, biomass, and purchased steam
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg hot-air-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Fuel meter, supplier heating value, burner log, and batch allocation
- Sources: `ipcc-stationary-combustion-2006`

###### Liquefied petroleum gas for hot-air drying (`hot_air_drying_lpg_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Liquefied petroleum gas combusted onsite for hot-air drying
- Flow property / unit: Mass / kg
- Amount rule: Weighed or invoice-reconciled LPG only for a declared LPG-fired dryer; keep separate from other carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg hot-air-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Tank mass or delivery reconciliation, supplier heating value, burner log, and batch allocation
- Sources: `ipcc-stationary-combustion-2006`

###### Diesel for hot-air drying (`hot_air_drying_diesel_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Diesel combusted onsite for hot-air drying
- Flow property / unit: Volume / L
- Amount rule: Metered diesel only for a declared diesel-fired dryer; keep separate from other carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg hot-air-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Tank dip or flow meter, supplier density and heating value, burner log, and batch allocation
- Sources: `ipcc-stationary-combustion-2006`

###### Pepper biomass used as dryer fuel (`hot_air_drying_pepper_biomass_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Dry pepper stalk, pericarp, or other identified pepper biomass combusted onsite
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry biomass by exact residue type and measured moisture; do not combine with purchased biomass of another identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg hot-air-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Fuel scale record, residue identity, moisture, heating-value source, and burner log
- Sources: `ipcc-stationary-combustion-2006`

#### Outputs

##### Product flows

###### Hot-air-dried pepper (`hot_air_dried_pepper_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Mechanical-hot-air-dried *Piper* pepper
- Flow property / unit: Mass / kg
- Amount rule: Weighed output with final moisture, temperature-time profile, airflow, and fuel or heat route recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per drying batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch_records`
- Quality evidence: Calibrated scale, moisture result, continuous time-temperature record, and batch release
- Sources: `codex-cxs-326-2017`; `shango-pepper-quality-2021`

##### Elementary flows

###### Water evaporated during hot-air drying (`hot_air_drying_water_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Water emitted to air from pepper drying
- Flow property / unit: Mass / kg
- Amount rule: Calculate from wet and dry pepper mass and moisture measurements using `calc_moisture_removed`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg hot-air-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_batch_records`
- Quality evidence: Paired batch masses, moisture tests, sampling method, and calculation sheet

###### Fossil carbon dioxide from dryer combustion (`hot_air_drying_fossil_co2_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from natural gas, LPG, and diesel activity and selected CO2 factors; zero for electricity, purchased steam, and biomass to prevent double counting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg hot-air-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_combustion_emission_records`
- Quality evidence: Fuel record, heating value, factor version, oxidation assumption, and calculation sheet
- Sources: `ipcc-stationary-combustion-2006`

###### Biogenic carbon dioxide from pepper-biomass combustion (`hot_air_drying_biogenic_co2_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate only from recorded pepper biomass fuel and a documented carbon or factor basis; report separately from fossil CO2
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg hot-air-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_combustion_emission_records`
- Quality evidence: Biomass mass, moisture, carbon or factor source, oxidation assumption, and calculation sheet
- Sources: `ipcc-stationary-combustion-2006`

###### Methane from dryer combustion (`hot_air_drying_ch4_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately for each combusted fuel using technology-appropriate CH4 factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg hot-air-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_combustion_emission_records`
- Quality evidence: Fuel record, factor source and version, equipment class, and calculation sheet
- Sources: `ipcc-stationary-combustion-2006`

###### Nitrous oxide from dryer combustion (`hot_air_drying_n2o_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately for each combusted fuel using technology-appropriate N2O factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg hot-air-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_combustion_emission_records`
- Quality evidence: Fuel record, factor source and version, equipment class, and calculation sheet
- Sources: `ipcc-stationary-combustion-2006`

###### Nitrogen oxides from dryer combustion (`hot_air_drying_nox_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Record stack measurement or calculate for each fuel using an identified technology-specific regulatory factor; do not infer from the IPCC greenhouse-gas factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg hot-air-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emission_records`
- Quality evidence: Stack test or cited local factor, oxygen correction, fuel record, and calculation sheet

###### Sulfur dioxide from dryer combustion (`hot_air_drying_so2_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Record stack measurement or calculate separately from sulfur content of the actual fuel; do not assign a generic value to gas, LPG, diesel, or biomass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg hot-air-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emission_records`
- Quality evidence: Stack test or supplier sulfur analysis, fuel mass, control efficiency, and calculation sheet

###### Particulate matter from dryer combustion (`hot_air_drying_particulate_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Particulate matter to air from dryer combustion
- Flow property / unit: Mass / kg
- Amount rule: Record stack measurement or calculate separately by fuel, combustion technology, and control device; do not combine with pepper product dust
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg hot-air-dried pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emission_records`
- Quality evidence: Stack test or cited local factor, control-device record, fuel activity, and calculation sheet

### Process: Crushing, grinding, and sieving (`milling_and_sieving`)

#### Inputs

##### Product flows

###### Whole pepper entering size reduction (`milling_whole_pepper_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Cleaned whole *Piper* pepper for crushing, grinding, or powdering
- Flow property / unit: Mass / kg
- Amount rule: Weighed input segregated by product class, target presentation, moisture, and mill campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg milled pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_records`
- Quality evidence: Batch scale, lot link, target particle-size specification, and mill-cleanliness release
- Sources: `ipc-pepper-standard-2015`; `fao-spice-quality-assurance`

###### Electricity for milling and sieving (`milling_electricity_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Electricity, facility supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered or rated-power × runtime electricity for crusher, mill, sieve, aspiration, and conveyors
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg milled pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Submeter or equipment power, runtime, screen identity, and batch mass
- Range: Provisional milling-electricity screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 5
  - Unit: kWh/kg milled pepper
  - Basis: Broad screen spanning coarse crushing through fine powdering; replace with presentation- and mill-specific records
  - Sensitivity: Test the stated bounds by presentation because fine powdering can make this exchange outcome-dominant
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Liquid nitrogen for cryogenic grinding (`milling_liquid_nitrogen_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Liquid nitrogen
- Flow property / unit: Mass / kg
- Amount rule: Metered liquid nitrogen only for a declared cryogenic-grinding route; ambient milling records zero
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg cryogenically milled pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_input_records`
- Quality evidence: Tank level or delivery reconciliation, injection record, and batch mass

#### Outputs

##### Product flows

###### Milled and sieved pepper (`milled_pepper_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Broken, cracked, coarsely ground, ground, or powdered *Piper* pepper
- Flow property / unit: Mass / kg
- Amount rule: Weighed conforming output by declared presentation and particle-size criterion; record rework separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per milling campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_records`
- Quality evidence: Scale ticket, sieve analysis, retained sample, and release record
- Sources: `codex-cxs-326-2017`; `ipc-pepper-standard-2015`

##### Waste flows

###### Off-specification milled pepper (`off_spec_milled_pepper_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Off-specification milled pepper sent to waste treatment
- Flow property / unit: Mass / kg
- Amount rule: Weighed material not reworked or sold as a product; record cause and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg milled pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Segregated scale record, disposition approval, and destination receipt

###### Captured pepper dust from milling (`captured_milling_pepper_dust_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Captured pepper dust collected as waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed dust from filters or collectors that is not returned to product; keep separate from uncaptured air emission
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg milled pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Collector clean-out mass, reuse decision, and destination receipt

##### Elementary flows

###### Pepper dust released during milling (`milling_pepper_dust_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Pepper particulate matter released to air during milling
- Flow property / unit: Mass / kg
- Amount rule: Calculate uncaptured dust from stack measurement or captured-plus-emitted dust balance; do not combine with combustion particulate matter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg milled pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dust_emission_records`
- Quality evidence: Stack test or engineering estimate, collector mass, airflow, and runtime
- Sources: `fao-spice-quality-assurance`

### Process: Product sanitization (`product_sanitization`)

#### Inputs

##### Product flows

###### Pepper entering sanitization (`sanitization_pepper_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: *Piper* pepper entering the declared sanitization technology
- Flow property / unit: Mass / kg
- Amount rule: Weighed input segregated by product class, presentation, moisture, and exact sanitization route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg sanitized pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitization_records`
- Quality evidence: Batch mass, technology identity, validated process specification, and pre-treatment sample
- Sources: `shango-pepper-quality-2021`

###### Electricity for product sanitization (`sanitization_electricity_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Electricity, facility supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for steam generator auxiliaries, dry-heat equipment, irradiation equipment operated onsite, pumps, and controls; technology remains declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg sanitized pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Submeter or equipment power, runtime, and batch mass

###### Purchased steam for product sanitization (`sanitization_steam_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam only for the declared steam-sanitization route; do not combine with onsite fuel or wet-pretreatment steam
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg steam-sanitized pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Steam meter, pressure and enthalpy basis, treatment duration, and batch mass
- Range: Provisional steam-sanitization energy screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 20
  - Unit: MJ/kg steam-sanitized pepper
  - Basis: Broad first-pass interval for direct and indirect steam systems; replace with metered enthalpy
  - Sensitivity: Test the stated bounds and do not transfer results between direct and indirect steam technologies
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water for steam sanitization (`sanitization_process_water_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Process water for steam sanitization
- Flow property / unit: Volume / m3
- Amount rule: Metered make-up water that crosses the product-sanitization boundary; keep separate from cleaning water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg steam-sanitized pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: Water meter, quality result, steam balance, and batch record

###### Natural gas for onsite sanitization heat (`sanitization_natural_gas_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Natural gas combusted onsite for product sanitization
- Flow property / unit: Volume / m3
- Amount rule: Metered natural gas only for the declared gas-fired dry-heat or steam route; keep separate from LPG and purchased steam
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg sanitized pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Fuel meter, supplier heating value, equipment log, and batch allocation
- Sources: `ipcc-stationary-combustion-2006`

###### Liquefied petroleum gas for onsite sanitization heat (`sanitization_lpg_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Liquefied petroleum gas combusted onsite for product sanitization
- Flow property / unit: Mass / kg
- Amount rule: Weighed or invoice-reconciled LPG only for the declared LPG-fired route; keep separate from natural gas and purchased steam
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg sanitized pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Tank mass or delivery reconciliation, supplier heating value, equipment log, and batch allocation
- Sources: `ipcc-stationary-combustion-2006`

#### Outputs

##### Product flows

###### Sanitized pepper (`sanitized_pepper_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Sanitized *Piper* pepper
- Flow property / unit: Mass / kg
- Amount rule: Weighed treated output with product class, presentation, treatment technology, dose or time-temperature specification, moisture, and test result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per sanitization batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitization_records`
- Quality evidence: Calibrated scale, validated process log, pre/post moisture and microbial or buyer-required release result
- Sources: `shango-pepper-quality-2021`

##### Waste flows

###### Steam-sanitization condensate wastewater (`sanitization_condensate_wastewater`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Product-sanitization condensate wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered condensate discharged rather than recovered; keep separate from product wash and equipment-cleaning wastewater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg steam-sanitized pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: Condensate meter or tank balance, reuse record, and discharge or treatment receipt

##### Elementary flows

###### Fossil carbon dioxide from sanitization heat (`sanitization_fossil_co2_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from onsite natural gas and LPG; zero for purchased steam and electricity to prevent double counting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg sanitized pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_combustion_emission_records`
- Quality evidence: Fuel activity, heating value, factor version, oxidation assumption, and calculation sheet
- Sources: `ipcc-stationary-combustion-2006`

###### Methane from sanitization heat (`sanitization_ch4_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from each onsite fuel using technology-appropriate CH4 factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg sanitized pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_combustion_emission_records`
- Quality evidence: Fuel activity, factor source and version, equipment class, and calculation sheet
- Sources: `ipcc-stationary-combustion-2006`

###### Nitrous oxide from sanitization heat (`sanitization_n2o_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from each onsite fuel using technology-appropriate N2O factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg sanitized pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_combustion_emission_records`
- Quality evidence: Fuel activity, factor source and version, equipment class, and calculation sheet
- Sources: `ipcc-stationary-combustion-2006`

###### Water vapour from steam or dry-heat sanitization (`sanitization_water_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Water emitted to air during product sanitization
- Flow property / unit: Mass / kg
- Amount rule: Calculate from pepper moisture change and unrecovered steam balance; do not duplicate condensate wastewater
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg sanitized pepper
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitization_records`
- Quality evidence: Pre/post mass and moisture, steam balance, condensate record, and calculation sheet

### Process: Equipment and room cleaning (`equipment_cleaning`)

#### Inputs

##### Product flows

###### Water for equipment and room cleaning (`equipment_cleaning_water_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Process water for equipment and room cleaning
- Flow property / unit: Volume / m3
- Amount rule: Metered water by cleaning event; keep separate from pepper washing, retting, depericarping, and sanitization water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per production campaign and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Quality evidence: Cleaning-event meter or tank volume, production campaign link, and sanitation sign-off
- Range: Provisional equipment-cleaning water screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.02
  - Unit: m3/kg released pepper
  - Basis: Broad dry-cleaning-to-wet-cleaning screen; replace with event-level water records
  - Sensitivity: Test zero and the upper bound because cleaning regime changes both water supply and wastewater burdens
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for cleaning equipment (`equipment_cleaning_electricity_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Electricity, facility supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered or equipment-runtime electricity for vacuums, pressure washers, pumps, and cleaning support
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per production campaign and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Submeter or equipment power, runtime, cleaning event, and campaign allocation

###### Sodium hypochlorite cleaning agent (`equipment_cleaning_sodium_hypochlorite_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg active substance
- Amount rule: Dosed active mass from product concentration × solution mass only when used; do not combine with other disinfectants
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per production campaign and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_input_records`
- Quality evidence: Safety data sheet, concentration certificate, solution issue mass, dilution log, and cleaning record

###### Sodium hydroxide cleaning agent (`equipment_cleaning_sodium_hydroxide_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg active substance
- Amount rule: Dosed active mass from product concentration × solution mass only when used; do not combine with other cleaning chemicals
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per production campaign and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_input_records`
- Quality evidence: Safety data sheet, concentration certificate, solution issue mass, dilution log, and cleaning record

###### Peracetic acid cleaning agent (`equipment_cleaning_peracetic_acid_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg active substance
- Amount rule: Dosed active mass from product concentration × solution mass only when used; do not combine with sodium hypochlorite or another disinfectant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per production campaign and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_input_records`
- Quality evidence: Safety data sheet, concentration certificate, solution issue mass, dilution log, and cleaning record

#### Outputs

##### Waste flows

###### Equipment-cleaning wastewater (`equipment_cleaning_wastewater`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Equipment and room cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered wet-cleaning effluent by cleaning event; retain chemical identity and concentration and keep separate from process wastewater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per production campaign and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Quality evidence: Effluent meter or tank balance, chemical-use reconciliation, sample result, and treatment receipt

###### Spent cleaning filters and wipes (`spent_cleaning_filters_wipes_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Spent filters and cleaning wipes contaminated with pepper dust
- Flow property / unit: Mass / kg
- Amount rule: Weighed spent filters and wipes by material and destination; if materials differ, create additional atomic rows in the data package
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per production campaign and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Container mass, material identity record, and destination receipt

###### Empty high-density polyethylene chemical containers (`empty_hdpe_chemical_container_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Empty high-density polyethylene cleaning-chemical containers
- Flow property / unit: Mass / kg
- Amount rule: Weighed HDPE containers not returned to supplier; containers of another polymer require a separate atomic row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per production campaign and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Container count, measured unit mass, return log, and destination receipt

### Process: Primary, secondary, and tertiary packaging (`packaging`)

#### Inputs

##### Product flows

###### Pepper for packaging (`pepper_for_packaging_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Processed pepper awaiting packaging
- Flow property / unit: Mass / kg
- Amount rule: Weighed pepper transferred to the packaging line, retaining product-class, presentation, grade, moisture, sanitization, and route qualifiers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Quality evidence: Packaging-line batch record, calibrated scale ticket, and route-lot reconciliation

###### Electricity for filling and packaging (`packaging_electricity_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Electricity, facility supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered or equipment-power-by-runtime electricity for filling, sealing, labelling, conveying, and pallet wrapping
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per packaging campaign and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Submeter record or rated power, runtime log, line throughput, and allocation key

###### Kraft paper packaging (`kraft_paper_packaging_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Kraft paper packaging
- Flow property / unit: Mass / kg
- Amount rule: Issued mass of kraft paper bags or layers minus measured unused returns; use only for the declared package format
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Quality evidence: Purchase specification, material identity, issue-return record, and measured unit mass

###### Polyethylene liner (`polyethylene_liner_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Polyethylene packaging liner
- Flow property / unit: Mass / kg
- Amount rule: Issued mass of polyethylene liners minus measured unused returns; do not combine with polypropylene or other polymers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Quality evidence: Supplier specification, polymer identity, issue-return record, and measured unit mass

###### Woven polypropylene sack (`woven_polypropylene_sack_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Woven polypropylene packaging sack
- Flow property / unit: Mass / kg
- Amount rule: Issued sack mass minus measured unused returns; exclude polyethylene liners recorded separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Quality evidence: Supplier specification, polymer identity, sack count, and measured unit mass

###### Glass jar (`glass_jar_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Glass packaging jar
- Flow property / unit: Mass / kg
- Amount rule: Mass of glass jars filled for the declared retail format, excluding closures and labels recorded separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Quality evidence: Purchase record, jar count, and measured empty-jar mass

###### Metal closure (`metal_closure_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Metal packaging closure
- Flow property / unit: Mass / kg
- Amount rule: Mass of metal closures applied to the declared package; any polymer insert shall be recorded separately when material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Quality evidence: Closure specification, count, and measured unit mass

###### Paperboard carton (`paperboard_carton_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Paperboard packaging carton
- Flow property / unit: Mass / kg
- Amount rule: Issued paperboard carton mass minus verified unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Quality evidence: Board specification, carton count, issue-return record, and measured unit mass

###### Wooden pallet (`wooden_pallet_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Net pallet mass consumed or assigned by verified trip count and reuse history; do not count returned pallets as single-use inputs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Quality evidence: Pallet specification, measured mass, dispatch-return log, reuse count, and calculation

###### Polyethylene stretch film (`polyethylene_stretch_film_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Polyethylene pallet stretch film
- Flow property / unit: Mass / kg
- Amount rule: Issued film mass minus unused roll remainder, allocated to dispatched palletized product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Quality evidence: Polymer specification, roll issue and remainder mass, pallet count, and shipment mass

#### Outputs

##### Product flows

###### Packaged processed pepper (`packaged_pepper_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Packaged processed *Piper* pepper before storage and final release
- Flow property / unit: Mass / kg net pepper
- Amount rule: Net pepper mass packed and accepted after filling losses, excluding packaging mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per packaging campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Quality evidence: Filled-unit count, tare verification, checkweigher record, rejection record, and net-mass reconciliation

##### Waste flows

###### Kraft paper packaging scrap (`kraft_paper_packaging_scrap`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Kraft paper packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed kraft paper trim, damaged bags, and rejected paper packaging by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per packaging campaign and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Segregated container mass, reject log, and destination receipt

###### Polyethylene packaging scrap (`polyethylene_packaging_scrap`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Polyethylene packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected liners and stretch-film scrap; keep other polymers separate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per packaging campaign and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Polymer identity, segregated container mass, reject log, and destination receipt

###### Polypropylene packaging scrap (`polypropylene_packaging_scrap`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Woven polypropylene packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed damaged or rejected polypropylene sacks; keep liners and other polymers separate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per packaging campaign and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Polymer identity, segregated container mass, reject log, and destination receipt

###### Glass packaging breakage (`glass_packaging_breakage_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Broken glass packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed broken or rejected glass jars, excluding metal closures and pepper residues
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per packaging campaign and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Breakage log, segregated container mass, and destination receipt

###### Metal closure scrap (`metal_closure_scrap`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Metal packaging closure scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected metal closures, with non-metal inserts separated when material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per packaging campaign and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Reject count, measured unit mass, segregated container mass, and destination receipt

###### Paperboard packaging scrap (`paperboard_packaging_scrap`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Paperboard packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed damaged cartons and paperboard trim by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per packaging campaign and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Segregated container mass, reject log, and destination receipt

###### Wooden pallet waste (`wooden_pallet_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Discarded wooden pallet waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed pallet mass retired from service and assigned using its documented reuse history
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per packaging campaign and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Quality evidence: Pallet identity, measured mass, repair and reuse history, retirement record, and destination receipt

### Process: Finished-goods storage and release (`finished_goods_storage`)

#### Inputs

##### Product flows

###### Packaged pepper for storage (`packaged_pepper_storage_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Packaged processed *Piper* pepper entering finished-goods storage
- Flow property / unit: Mass / kg net pepper
- Amount rule: Net packaged pepper mass received into storage, linked to the exact route, lot, and package format
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`
- Quality evidence: Warehouse receipt, lot linkage, net-mass record, and package specification

###### Electricity for finished-goods storage (`storage_electricity_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Electricity, facility supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered storage, ventilation, lighting, and cooling electricity allocated by occupied mass-time or another disclosed causal driver
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per storage period and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carrier_records`
- Quality evidence: Submeter record, storage duration, occupied mass-time, and allocation calculation

###### Refrigerant R-134a (`storage_refrigerant_r134a_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: 1,1,1,2-Tetrafluoroethane (HFC-134a) refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Recorded additions of R-134a to finished-goods storage equipment only; zero when no such equipment or chemical is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per reporting period and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Quality evidence: Equipment register, refrigerant label, service record, cylinder mass, and charge balance

###### Refrigerant R-410A (`storage_refrigerant_r410a_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: R-410A refrigerant blend
- Flow property / unit: Mass / kg
- Amount rule: Recorded additions of R-410A to finished-goods storage equipment only; do not combine with another refrigerant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per reporting period and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Quality evidence: Equipment register, refrigerant label, service record, cylinder mass, and charge balance

###### Refrigerant R-32 (`storage_refrigerant_r32_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Difluoromethane (HFC-32) refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Recorded additions of R-32 to finished-goods storage equipment only; do not combine with another refrigerant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per reporting period and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Quality evidence: Equipment register, refrigerant label, service record, cylinder mass, and charge balance

###### Refrigerant R-404A (`storage_refrigerant_r404a_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: R-404A refrigerant blend
- Flow property / unit: Mass / kg
- Amount rule: Recorded additions of R-404A to finished-goods storage equipment only; do not combine with another refrigerant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per reporting period and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Quality evidence: Equipment register, refrigerant label, service record, cylinder mass, and charge balance

#### Outputs

##### Product flows

###### Released processed pepper reference product (`processed_pepper_reference_output`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Pepper (Piper spp.), processed `99d5d3c5-870f-458f-b492-a610d37c8034`
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg net released pepper at factory gate, excluding packaging mass and carrying every required product and route qualifier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Reference amount of 1 kg
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`
- Quality evidence: Release certificate, final net mass, moisture and grade results, lot genealogy, gate vector, and package declaration
- Sources: `codex-cxs-326-2017`; `un-cpc-v3`

##### Elementary flows

###### R-134a emission to air (`storage_refrigerant_r134a_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: 1,1,1,2-Tetrafluoroethane (HFC-134a), emission to air
- Flow property / unit: Mass / kg
- Amount rule: Opening charge + R-134a additions - closing charge - recovered R-134a; record zero only with a complete balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per reporting period and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Quality evidence: Equipment-level charge balance, service records, recovery mass, calculation, and review sign-off

###### R-410A emission to air (`storage_refrigerant_r410a_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: R-410A refrigerant blend, emission to air
- Flow property / unit: Mass / kg
- Amount rule: Opening charge + R-410A additions - closing charge - recovered R-410A; do not substitute a generic refrigerant loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per reporting period and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Quality evidence: Equipment-level charge balance, service records, recovery mass, calculation, and review sign-off

###### R-32 emission to air (`storage_refrigerant_r32_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: Difluoromethane (HFC-32), emission to air
- Flow property / unit: Mass / kg
- Amount rule: Opening charge + R-32 additions - closing charge - recovered R-32; do not substitute a generic refrigerant loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per reporting period and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Quality evidence: Equipment-level charge balance, service records, recovery mass, calculation, and review sign-off

###### R-404A emission to air (`storage_refrigerant_r404a_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Selected flow: R-404A refrigerant blend, emission to air
- Flow property / unit: Mass / kg
- Amount rule: Opening charge + R-404A additions - closing charge - recovered R-404A; do not substitute a generic refrigerant loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per reporting period and normalized to released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Quality evidence: Equipment-level charge balance, service records, recovery mass, calculation, and review sign-off

## 7. Allocation Rules

| rule_id | Priority | Rule | Required disclosure | source_ids |
| --- | --- | --- | --- | --- |
| `alloc_avoid_by_subdivision` | 1 | Avoid allocation by separating product class, presentation, wet route, depericarping route, drying route, sanitization route, and packaging-format records. | Subprocess split, meters or causal records, and lot links | `eu-pef-method-2021` |
| `alloc_route_specific_records` | 2 | Do not allocate or average across mutually exclusive route-gate values; calculate an intentional mix only from independently modelled routes and disclosed production weights. | Gate values, route outputs, weights, period, and calculation | `codex-cxs-326-2017`; `ipc-pepper-standard-2015` |
| `alloc_residue_classification` | 3 | Treat removed stalks, pericarp, dust, off-grade pepper, and rejected product as waste unless sale, specification, and a receiving market demonstrate a co-product. | Classification basis, destination, revenue or specification, and mass | `eu-pef-method-2021` |
| `alloc_physical_relationship` | 4 | When subdivision is impossible and a causal physical relationship exists, allocate shared inputs by the measured driver, such as pepper dry matter, equipment runtime, occupied mass-time, or treated volume. | Driver, measurements, formula, and sensitivity | `eu-pef-method-2021` |
| `alloc_economic_fallback` | 5 | Use economic allocation only when no defensible physical relationship exists; use a representative price period and test price sensitivity. | Prices, currency, period, source, shares, and sensitivity | `eu-pef-method-2021` |

No avoided-burden credit is allowed inside the foreground inventory without an explicitly declared consequential study. Exported waste treatment and any substitution claim shall remain separate linked modelling choices.

## 8. Foreground Data Collection and Calculation

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_lot_records` | `receiving_and_lot_qualification` | Received pepper, sampling, rejection, and accepted lots | lot_record | Scale tickets, supplier lot, route gate, moisture, foreign matter, and inspection | Calibrated weighing and controlled lot records | kg; mass fraction | Every lot | Complete reporting period | Every receiving point in scope | Reconcile accepted plus rejected mass to received mass | Scale verification, lot genealogy, and inspection record |
| `cp_energy_carrier_records` | `hot_air_drying` | Electricity, steam, hot water, natural gas, LPG, diesel, and biomass | meter_and_invoice_record | Meter, invoice, tank or cylinder balance, runtime, heating value, and allocation driver | Meter reading and source-document reconciliation | kWh; MJ; kg; m3 | Every campaign or monthly | Complete reporting period | Every energy-consuming process in scope | Reconcile process records to facility totals using the declared driver | Meter verification, invoices, and reconciliation worksheet |
| `cp_waste_records` | `dry_cleaning_and_grading` | Every solid waste material | waste_transfer_record | Material identity, container tare and gross mass, destination, receipt, and route | Calibrated weighing and transfer-document review | kg | Every removal | Complete reporting period | Every waste-generating process in scope | Aggregate by material, process, route, and campaign | Scale verification, transfer receipt, and route record |
| `cp_threshing_records` | `threshing` | Spike separation | batch_record | Input, separated berries, stalks, runtime, and electricity | Batch weighing and meter reading | kg; h; kWh | Every batch | Complete reporting period | Every threshing line in scope | Close wet-mass balance by batch, then aggregate released mass | Scale and meter verification plus batch sheet |
| `cp_dust_emission_records` | `milling_and_sieving` | Pepper dust releases | emission_measurement_record | Capture efficiency, collected dust, stack or room measurement, and operating time | Representative measurement or transparent mass-balance calculation | kg; mg/m3; h | Each campaign or representative monitored test | Representative operating conditions and reporting period | Every dust release point in scope | Apply measurements only to documented matching operating hours | Test report, sampling method, and operating log |
| `cp_wet_pretreatment_records` | `wet_pretreatment` | Washing, blanching, and preservative treatment | batch_record | Pepper mass, water, temperature-time profile, chemical identity and dose, and drains | Batch weighing, metering, and controlled dosing records | kg; m3; degC; min | Every batch | Complete reporting period | Every wet-pretreatment vessel or line in scope | Reconcile water and chemical issues by batch | Calibration, batch sheet, and chemical issue log |
| `cp_water_and_wastewater_records` | `white_pepper_retting` | Water supply and each wastewater stream | meter_and_sample_record | Inlet meter, effluent meter or tank balance, sample time, concentration, and destination | Metered volume paired with time-matched sampling | m3; kg/m3 | Every campaign | Complete reporting period with matched sampling intervals | Every water inlet and discharge point in scope | Match sample and volume periods before calculating load | Meter verification, sampling plan, laboratory result, and destination record |
| `cp_chemical_input_records` | `product_sanitization` | Every cleaning, pretreatment, and sanitizing chemical | chemical_issue_record | Product mass, active concentration, safety data sheet, dilution, and issue log | Controlled issue records and dose calculation | kg product; kg active substance | Every dose | Complete reporting period | Every chemical-using process in scope | Calculate active mass separately by chemical and process | Product specification, safety data sheet, and issue log |
| `cp_combustion_emission_records` | `hot_air_drying` | On-site fuel combustion | fuel_and_emission_record | Fuel identity and amount, lower heating value, equipment, factor or test result, and calculation | Metered fuel with source-specific factor or measurement | kg; m3; MJ; kg pollutant | Every reporting period | Complete reporting period | Every stationary combustion unit in scope | Calculate separately by fuel, equipment, and pollutant | Fuel record, factor source or test report, and calculation worksheet |
| `cp_retting_records` | `white_pepper_retting` | White-pepper water retting | batch_record | Berry mass, water fills and changes, vessel volume, duration, temperature, wastewater volume, and sample results | Batch weighing, vessel records, metering, and sampling | kg; m3; h; degC | Every retting batch | Complete reporting period | Every retting vessel and discharge route in scope | Keep retting batches separate from non-retting routes | Batch sheet, meter verification, and laboratory result |
| `cp_depericarping_records` | `depericarping` | Pericarp removal and kernel washing | batch_record | Input, kernel, pericarp, wash water, electricity, and route technology | Batch weighing and utility metering | kg; m3; kWh | Every batch | Complete reporting period | Every depericarping line in scope | Close wet- and dry-matter balances by batch | Scale and meter verification plus batch sheet |
| `cp_cleaning_grading_records` | `dry_cleaning_and_grading` | Dry cleaning, aspiration, grading, and sorting | lot_record | Input, accepted pepper, each reject, dust, electricity, and equipment setting | Lot weighing, meter reading, and equipment log | kg; kWh | Every lot or campaign | Complete reporting period | Every cleaning and grading line in scope | Close mass balance by lot or campaign | Scale and meter verification plus equipment log |
| `cp_drying_batch_records` | `hot_air_drying` | Sun, enclosed-solar, and hot-air drying | batch_record | Input/output mass and moisture, time, temperature, weather or dryer settings, and each carrier | Paired batch weighing, moisture testing, and operating log | kg; mass fraction; h; degC; kWh; MJ | Every batch | Complete reporting period and declared season | Every drying route and dryer in scope | Calculate removed water and dry-matter loss separately by route | Scale, moisture-method, and instrument verification plus batch log |
| `cp_milling_records` | `milling_and_sieving` | Crushing, grinding, and sieving | campaign_record | Feed, accepted fractions, oversize return, dust, rejects, electricity, and settings | Campaign weighing, metering, and equipment log | kg; kWh | Every campaign and presentation | Complete reporting period | Every milling and sieving line in scope | Close mass balance separately by presentation | Scale and meter verification plus equipment log |
| `cp_sanitization_records` | `product_sanitization` | Steam, dry heat, irradiation, or other identified treatment | treatment_batch_record | Technology, input/output mass, time-dose-temperature, utilities, rejects, and certificate | Batch weighing and treatment-controller records | kg; min; degC; treatment-specific dose; kWh; MJ | Every batch | Complete reporting period | Every sanitization technology and line in scope | Keep technology routes separate and reconcile treated mass | Treatment certificate, controller record, and scale verification |
| `cp_cleaning_records` | `equipment_cleaning` | Dry and wet equipment or room cleaning | cleaning_event_record | Event, area or equipment, water, chemical, waste, wastewater, and campaign assignment | Controlled cleaning log, metering, and issue records | event; m3; kg | Every event | Complete reporting period | Every cleaned area and equipment item in scope | Normalize through documented campaign linkage | Cleaning log, meter verification, and chemical issue record |
| `cp_packaging_records` | `packaging` | Filling and every packaging layer | packaging_issue_record | Net pepper, material identity, issued and returned mass, scrap, counts, and tare | Calibrated weighing and material issue-return records | kg; item | Every format and campaign | Complete reporting period | Every packaging line and format in scope | Reconcile input to packed product plus scrap and returns | Scale verification, packaging specification, and issue-return record |
| `cp_storage_records` | `finished_goods_storage` | Finished-goods storage and release | lot_release_record | Lot receipt, release mass, duration, conditions, losses, and release test | Warehouse lot records and calibrated weighing | kg; day; degC | Every lot | Complete reporting period | Every finished-goods storage location in scope | Reconcile stored, rejected, lost, and released mass | Warehouse record, release test, and scale verification |
| `cp_refrigerant_records` | `finished_goods_storage` | Each storage refrigerant chemical | equipment_charge_record | Equipment register, chemical label, opening and closing charge, additions, recovery, and service | Equipment-level refrigerant mass balance | kg | At least annually and every service | Complete reporting period | Every refrigerated storage unit in scope | Close balance separately by equipment and chemical | Equipment register, service record, and refrigerant invoice |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | All foreground exchanges | Exchange per reference = campaign exchange / released net pepper mass | Exchange and released net mass from the same boundary and period | Exchange per 1 kg reference product |  |
| `calc_moisture_removed` | Drying | Water removed = wet input × moisture fraction in - dry output × moisture fraction out | Input/output mass and paired wet-basis moisture | kg water removed |  |
| `calc_dry_matter_balance` | Wet treatment, depericarping, drying, and milling | Dry-matter closure = (output dry matter + dry-matter wastes) / input dry matter | Paired masses and moisture for product and residues | Dimensionless closure ratio |  |
| `calc_wastewater_load` | Each wastewater stream | Pollutant load = matched wastewater volume × matched concentration | m3 wastewater and kg/m3 concentration | kg pollutant | `azman-retting-water-2020` |
| `calc_fuel_emissions` | On-site fuel combustion | Pollutant mass = fuel amount × lower heating value × identified pollutant factor, with unit conversion | Atomic fuel record, heating value, factor source, and equipment scope | kg CO2, CH4, or N2O per pollutant row | `ipcc-stationary-combustion-2006` |
| `calc_refrigerant_loss` | Refrigerated storage | Loss = opening charge + additions - closing charge - recovered mass | Equipment- and chemical-specific charge records | kg refrigerant emitted to air | `eu-pef-method-2021` |
| `calc_packaging_mass` | Packaging | Consumed packaging = issued mass - verified unused return; reusable share uses measured mass divided by documented uses | Material identity, issue/return, measured mass, and reuse history | kg of each packaging material |  |
| `calc_weighted_mix` | Explicitly declared product mix | Mixed exchange = sum of independently modelled route exchange × disclosed released-mass share | Route-specific datasets and shares summing to 1 | Disclosed intentional product mix only | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | All foreground batches | Product and route gate is complete and linked to every foreground batch. | Lot genealogy, declared gate vector, and product specification |
| `dq_calibration` | All measured exchanges | Mass, energy, water, temperature, and concentration measurements are traceable and fit for purpose. | Calibration or verification record and instrument identity |
| `dq_temporal` | Reporting period | Data cover a representative contiguous period not exceeding 12 months unless seasonality requires a disclosed multi-period model. | Period, production volume, downtime, and representativeness statement |
| `dq_mass_moisture` | Wet treatment, depericarping, drying, and milling | Wet mass and moisture are paired at comparable sample times and dry-matter closure is reviewed. | Scale records, test method, sample time, and balance calculation |
| `dq_route_completeness` | Declared route vector | Every occurring conditional process and every actual carrier, material, chemical, waste, wastewater, refrigerant, and emission is represented atomically. | Route walk-through, purchase and waste reconciliation, and zero/not-applicable justification |
| `dq_emissions` | Direct elementary emissions | Direct dust, fuel-combustion pollutants, and refrigerant losses use measured or transparent calculated records. | Test report or input record, factor source, formula, units, and reviewer |
| `dq_wastewater` | Each wastewater stream | Wastewater volumes and concentration samples share a valid time and stream basis. | Meter or tank balance, sampling plan, laboratory result, and destination |
| `dq_packaging_refrigerant` | Packaging and refrigerated storage | Package layers and refrigerant chemicals are identified separately and reconciled. | Specifications, issue/return records, equipment register, and mass balances |
| `dq_representativeness` | Published dataset | Geography, technology, capacity, product class, presentation, and season match the declared dataset. | Site and line description, campaign list, and deviation statement |
| `dq_source_traceability` | External values | Every external value retains a stable source, locator, applicability statement, and transformation. | Source ID, URL or DOI, page/table/section, calculation, and access record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity_gate` | Product identity and route selection | Error: Every required gate has one declared value and the dataset scope matches CPC 3.0 23921 processed *Piper* pepper. | `un-cpc-v3`; `codex-cxs-326-2017` |
| `val_reference_flow` | Reference product object | Error: `processed_pepper_reference_output` is exactly 1 kg net product with UUID `99d5d3c5-870f-458f-b492-a610d37c8034`, Product flow, and Mass; packaging is excluded. | `un-cpc-v3` |
| `val_no_implicit_averaging` | Mutually exclusive routes and forms | Error: Product classes, presentations, wet treatments, depericarping, drying, sanitization, and packaging formats are separate or combined only with disclosed route datasets and weights. | `codex-cxs-326-2017`; `ipc-pepper-standard-2015` |
| `val_process_gate` | Required and conditional processes | Error: All required processes and every triggered conditional process are present; map tokens are only `required` or `conditional`. | `ipc-pepper-standard-2015`; `fao-spice-quality-assurance` |
| `val_atomic_flows` | Atomic inventory | Error: Every actual carrier, material, chemical, packaging material, waste, wastewater, refrigerant, and elementary emission has its own flow card; no grouped placeholder is used. | `fao-spice-quality-assurance`; `ipcc-stationary-combustion-2006` |
| `val_only_reference_uuid` | UUID ownership | Error: The reference product flow is the only flow card with a UUID; all other flow UUIDs remain blank for author mapping. | `un-cpc-v3` |
| `val_mass_moisture_balance` | Wet- and dry-matter closure | Error: Process input, product, waste, and moisture records support reviewed wet-mass and dry-matter balances, with deviations explained. | `fao-spice-quality-assurance`; `codex-cxs-326-2017` |
| `val_final_moisture` | Released-product moisture | Error: Final moisture is measured by a declared method and meets the declared applicable grade or buyer specification. | `codex-cxs-326-2017`; `ipc-pepper-standard-2015` |
| `val_energy_separation` | Energy carrier identity | Error: Electricity, steam, hot water, natural gas, LPG, diesel, biomass, and any other actual carrier are separate and route-specific. | `eu-pef-method-2021` |
| `val_wastewater` | Wet-route wastewater | Error: Every wet-process and cleaning wastewater stream has separate volume, destination, and matched pollutant results when tested. | `azman-retting-water-2020`; `fao-spice-quality-assurance` |
| `val_combustion_emissions` | Fuel emissions | Error: Each used on-site fuel has separate CO2, CH4, and N2O measurement or transparent fuel-specific calculation. | `ipcc-stationary-combustion-2006` |
| `val_packaging` | Package layers and scrap | Error: Every actual primary, secondary, and tertiary packaging material and its scrap is recorded separately and mass-reconciled. | `fao-spice-quality-assurance` |
| `val_refrigerants` | Refrigerant identity and loss | Error: Each actual refrigerant chemical has separate addition and air-emission cards with an equipment-level charge balance; ambient storage records zero and not applicable. | `eu-pef-method-2021` |
| `val_allocation` | Allocation hierarchy | Error: Subdivision is attempted first; any remaining physical or economic allocation has complete driver, formula, source, and sensitivity disclosure. | `eu-pef-method-2021` |
| `val_temporal_completeness` | Period reconciliation | Error: Input, output, utility, waste, wastewater, emission, packaging, and storage records cover the same representative production period. | `eu-pef-method-2021` |
| `val_source_closure` | Evidence traceability | Error: Every external method or number resolves to a listed Data Sources entry; each reasoned estimate is labelled with rationale, range, sensitivity, and provisional status. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground processing dataset for a single declared processed-pepper product and route vector |
| downstream_use | May serve as `secondary_dataset` or `background_dataset` only when the consuming model matches its qualifiers and boundary |
| allowed_use | Exact or explicitly justified match for species/cultivar, class, presentation, starting state, wet treatment, depericarping, drying, sanitization, grade, moisture, packaging, geography, technology, and period |
| excluded_use | Unqualified generic pepper, implicit black/white/green mix, implicit whole/powder mix, undeclared wet or drying route, *Capsicum* pepper, or farm-gate raw pepper |
| required_metadata | Reference flow, gate vector, process map, period, geography, capacity, net output, final moisture, allocation, cut-offs, source IDs, uncertainty, and evidence gaps |
| required_quality_disclosure | Report primary-data share, measured versus calculated exchanges, reasoned estimates, mass/moisture closure, route representativeness, and unresolved gaps |
| update_trigger | Re-author when product class, presentation, supplier starting state, wet or depericarping route, dryer, sanitization, package format, site, or material data period changes materially |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3` | official_guidance | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, class 23921. https://unstats.un.org/unsd/classifications/Econ/CPC | Official classification identity and scope context for processed *Piper* pepper |
| `codex-cxs-326-2017` | standard | Codex Alimentarius, CXS 326-2017, Standard for Black, White and Green Peppers. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B326-2017%252FCXS_326e.pdf | Product classes, styles, quality and moisture specifications, and product release gate |
| `ipc-pepper-standard-2015` | standard | International Pepper Community, Pepper Standard Specifications, 2015, reproduced in Codex meeting document SC03/CRD07. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FMeetings%2FCX-736-03%2FCRD%2Fsc03_CRD07x.pdf | Processing operations, product styles, route decomposition, sampling, and quality controls |
| `fao-spice-quality-assurance` | official_guidance | FAO, Quality assurance for small-scale rural food industries, Chapter 3: Spice processing. https://www.fao.org/4/v5380e/v5380e09.htm | Washing, drying, cleaning, grading, grinding, packaging, dust control, lot records, and factory QA |
| `azman-retting-water-2020` | literature | Azman et al., “Evaluation of Various Soaking Agents as a Novel Tool for Heavy Metal Residues Mitigation from Pepper,” *Processes* 8(10), 1255 (2020). https://doi.org/10.3390/pr8101255 ; full text: https://psecommunity.org/wp-content/plugins/wpor/includes/file/2104/LAPSE-2021.0247-1v1.pdf | White-pepper retting water ratio and wastewater pH, COD, turbidity, and dissolved-oxygen evidence |
| `shango-pepper-quality-2021` | literature | Shango et al., “Post-harvest practices and loss assessment in pepper value chain,” *CABI Reviews* 16, 031 (2021). https://doi.org/10.1079/PAVSNNR202116031 ; full text: https://www.suaire.sua.ac.tz/server/api/core/bitstreams/4ec5af44-5ad3-410b-8f76-dc93e5d87340/content | Post-harvest unit operations, alternative white-pepper routes, drying, sorting, packaging, storage, and loss points |
| `fao-gi-control-plan-2009` | official_guidance | FAO, *Linking People, Places and Products*, control-plan guidance (2009). https://www.fao.org/4/i1057e/i1057e04.pdf | Measurable product and route qualifiers, traceability, and control-plan evidence |
| `eu-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | System boundary, upstream linkage, subdivision, allocation hierarchy, data quality, and reporting |
| `ipcc-stationary-combustion-2006` | method_factor | IPCC, 2006 Guidelines for National Greenhouse Gas Inventories, Volume 2, Chapter 2: Stationary Combustion. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf | Fuel-separated CO2, CH4, and N2O calculation structure and factor traceability |
