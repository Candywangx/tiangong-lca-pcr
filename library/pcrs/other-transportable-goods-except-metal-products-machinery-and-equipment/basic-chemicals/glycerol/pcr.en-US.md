---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.glycerol
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Bulk refined glycerol from fat-splitting crude glycerine

## 1. Scope and Applicability

This method covers bulk refined liquid glycerol made by vacuum distillation, steam stripping, activated-carbon bleaching and polishing of pretreated concentrated crude glycerine originating from natural fat/oil splitting. Glycerol is one species (CAS 56-81-5); the supplied crude mixture and the accepted refined commercial material have different water/impurity states. No source recipe, purity, dose, yield, temperature, pressure, emission factor or utility amount is a default. (`ifc-oleochemicals-2007`; `efisc-oilseed-refining-v3-1`; `cpm-glycerin-refining-2024`)

Exclude biodiesel/transesterification crude, soap-lye crude, synthetic propylene routes, ion-exchange-only purification, residue reclamation, formulated glycerol solutions, retail packaging and sites marketing another technical-grade glycerine co-product. These require their own compatible foreground extension and allocation review. CPC 34570 is wider than this scope. The existing fatty-acid hydrolysis PCR excludes glycerine concentration/refining and can provide a qualified upstream sweet-water interface, not this finished-product methodology.

The gate receives pretreated concentrated crude feed and external utilities, and ends at accepted bulk loading plus actual waste/air discharges. Feed concentration and pretreatment remain upstream inventory requirements. The base profile has no on-site combustion, ion-exchange regeneration or wastewater treatment: outsourced treatment is linked to actual receivers. If present, add every actual chemical, fuel, refrigerant, treatment residue and direct species as separate reviewed atomic exchanges before conformance. Missing site quantities are collection requirements, not invented measurements.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.glycerol |
| classification_refs | CPC 3.0:34570; narrower |
| covered_products | Accepted bulk refined glycerol from fat-splitting crude feed |
| excluded_products | Other feed routes, ion exchange, residue recovery, formulations, retail packs and marketed technical co-products |
| representative_product | One actual measured refined-glycerine SKU; KLK refined-glycerin family is commercial existence evidence, not a mandatory SKU or site claim |
| production_route | Crude receipt → optional NaOH conditioning → vacuum/foots distillation and internal recovery → stripping → carbon bleaching → filtration/cooling → bulk loading |
| market_state | Liquid at measured loading conditions; net commercial mass with actual residual water and impurities |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a qualified refined glycerol chemical feedstock |
| How much | 1 kg accepted net bulk product |
| How well | Actual SKU acceptance: glycerol assay and its wet/dry basis, water, MONG, ash/salts, acidity, colour and relevant contaminants |
| How long or cycle | One declared representative production and dispatch period, including startup, shutdown, rework and stock changes; no service life |
| reference_flow_link | refined_glycerol |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | glycerol `32d6a3cd-fb89-4a48-9594-bb240083042e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Fat-splitting origin and upstream pretreatment/concentration; actual supplier/SKU/lot; vacuum/bleaching route; net loading mass; measured glycerol/water/impurity composition and analytical bases; grade/acceptance; carbon origin; site/period; utility state/provider; waste receivers; rework/stocks; allocation boundary |

Declare every qualifier in the concrete dataset metadata or equivalent package fields. Dry-basis assay is not supplied wet mass: keep measured water and convert explicitly. The broad product UUID identifies the qualified finished subset but supplies no generic yield, moisture, supplier or background dataset. A single foreground unit retains stage records and has exactly one reference product output, refined_glycerol.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Reference quantity is 1 kg accepted net bulk material from calibrated weighing/tank mass records, excluding containers. cp_release provides the denominator for every row. |
| composition_basis | refined_glycerol; crude_glycerine; caustic_solution | Mass | kg | Keep whole supplied mixture mass separate from glycerol or NaOH active mass, water and dry matter. Convert a reported dry-basis glycerol fraction using the same measured water fraction; components are analytical ledgers, not extra exchanges. |
| electricity_basis | electricity | Net calorific value | MJ | Preserve the verified reference property and supplier consumption boundary. Convert metered kWh to MJ using 3.6 MJ/kWh; do not calculate electrical energy from a fuel calorific value. |
| steam_basis | heating_steam; stripping_steam; returned_condensate | Mass | kg | Keep indirect supply, direct injection and external condensate-return mass separate; reconcile measured state, enthalpy datum and provider amount definition before a heat link. Neither kg nor MJ alone proves usable delivered heat. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received pretreated concentrated fat-splitting crude glycerine and external utilities |
| starting_condition_role | foreground_gate_input |
| product_classification_scope | CPC 34570 fat-splitting vacuum-refined subset; no whole-leaf claim |
| recursive_input_rule | Same-category rework is internal if inside this gate; externally purchased glycerol remains one input with its own compatible upstream dataset and actual state; do not substitute it for crude feed |
| upstream_dataset_requirement | Compatible feed dataset includes natural oil/fat supply, joint hydrolysis allocation, sweet-water concentration and pretreatment, with supplier geography/period and wet-mixture reference basis; utilities and exported wastes need compatible provider/receiver datasets |
| disclosure | Starting state, omitted upstream stages, supplier links, stage meters, internal transfers, treatment gate, actual atmosphere/water destinations, energy/stock reconciliations and exclusions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_gate | refining | Include receipt, conditioning if used, distillation/foots recovery, stripping, bleaching, polishing, cooling, storage/loading, recovery/scrubbing, startup/shutdown, cleaning and maintenance consumption attributable to this product. Segregate stage meters and keep internal transfers equal at both ends. | `cpm-glycerin-refining-2024`; `ifc-oleochemicals-2007` |
| b_upstream | crude_glycerine | Crude glycerine is not burden-free waste by name or biological origin. Preserve the upstream joint-production allocation and concentration/pretreatment inventory once; a fatty-acid sweet-water dataset alone does not establish the received concentrated feed. | `efisc-oilseed-refining-v3-1`; `eu-pef-multifunctionality-2021` |
| b_emissions | refining | Establish an actual stream map and species inventory for condenser/vacuum/vent, cleaning and waste outlets. Exported effluent is a waste transfer; treatment emissions belong to the linked treatment boundary. If any direct outfall or on-site combustion/treatment exists, extend the inventory with exact receiving media, each actual species and unambiguous quantities. | `jrc-cww-bref-2016`; `ifc-oleochemicals-2007` |
| b_carbon | all inventory rows | Keep measured biological/fossil carbon in feed, carbon medium, product, residues and actual emissions with origin evidence. Do not remove any actual biogenic CO2 from LCI because a GHG reporting convention gives it different treatment. Captured carbon, organic carbon and CO2 mass are distinct; no assumed conversion or neutrality. | `jrc-cww-bref-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| refining | Glycerol refining through bulk loading | required | Every site in the declared route | foreground | refined_glycerol |

One aggregated foreground unit contains the whole physical refining route and its internal glycerol returns. Stage records separately cover crude/foots stills, stripping, bleaching, filtering, cooling and loading. Unallocated mass/water/carbon ledgers are retained independently of the environmental burden ledger. Additional actual chemicals, filter polymers, packaging, refrigeration or direct species are added individually rather than hidden in these cards.

### Process: Glycerol refining through bulk loading (`refining`)

#### Inputs

##### Product flows

###### Pretreated concentrated crude glycerine from fat splitting (`crude_glycerine`)

Receive the whole aqueous crude mixture after upstream sweet-water concentration and pretreatment. Record glycerol, water, salts, soaps, fatty acids, residual glycerides and matter organic non-glycerol separately as analyses, not duplicate exchanges. Pure glycerol does not identify the whole feed. Upstream concentration/pretreatment burdens must accompany this actual starting state.

- Selected flow: Pretreated concentrated crude glycerine from fat splitting
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_feed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `ifc-oleochemicals-2007`; `efisc-oilseed-refining-v3-1`

###### Aqueous sodium hydroxide solution for feed neutralisation (`caustic_solution`)

Conditional actual neutralisation or cleaning addition. Weigh the complete supplied solution and measure its NaOH mass fraction and carrier water. No 30%, 50%, pharmaceutical distilled-water route or solid-caustic default is prescribed; none of those restricted records establishes the unspecified actual solution.

- Selected flow: Aqueous sodium hydroxide solution for feed neutralisation
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `cpm-glycerin-refining-2024`

###### Activated carbon (`activated_carbon`)

Carbon supplied for liquid glycerol bleaching. Record bed charge/replacement, grade, feedstock origin, moisture, regeneration history and actual provider; do not assume a coal or biological feedstock. Source route metadata says absorption while the material comment describes adsorption: retain only the broad material identity and require source/provider clarification.

- Selected flow: Activated carbon `5cad53b5-252a-4e2f-8197-8be465707405`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `cpm-glycerin-refining-2024`; `ifc-oleochemicals-2007`

###### Alternating current (`electricity`)

CN grid-average consumption supply at 1–35 kV only; the selected native locationOfSupply is CN. Other geographies require a separately verified compatible flow/provider. Meter pumps, vacuum equipment, heaters if electrical, cooling and loading; supplier geography and loss boundary must match the background. Another voltage, direct generator or contractual supply requires its own verified flow, not reuse of this qualified identity. Preserve the database reference property Net calorific value; electrical energy is not a combustion heating value.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `ifc-oleochemicals-2007`

###### Steam delivered to indirect glycerol-refining heaters (`heating_steam`)

Record actual delivered steam mass, absolute pressure, temperature, phase/dryness and supplier state definition. Fixed 11.0 MPaG or 0.45 MPaG flows cannot establish the unmeasured supply; generic MJ heat cannot establish net delivered heat. Separate this indirectly condensed steam from direct stripping steam.

- Selected flow: Steam delivered to indirect glycerol-refining heaters
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_steam.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `cpm-glycerin-refining-2024`; `ifc-oleochemicals-2007`

###### Process steam (`stripping_steam`)

Actual steam injected for glycerol stripping/deodorisation, within this flow’s chemical-industry stripping identity. Record mass, pressure, temperature, dryness and direct-injection destination. Its water enters the process water balance; it is not a second indirect-heating exchange or an automatic MJ conversion. Pressure/provider quantity compatibility remains a concrete dataset requirement.

- Selected flow: Process steam `41a70607-cc98-4ae8-8556-e33cdf13157e`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_steam.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `cpm-glycerin-refining-2024`

###### Process Water (`makeup_water`)

Treated water entering the gate for scrubbing, washing and cooling-system makeup where present. Record treatment, quality and destination submeter totals; internal recirculation is excluded from fresh supply. For a volume meter use measured temperature/composition-dependent density, not a database secondary mass coefficient. Direct resource withdrawal requires a separately verified resource flow and treatment inventory.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `ifc-oleochemicals-2007`

###### Polypropylene liquid-polishing filter medium (`filter_medium`)

Conditional only where the actual polishing bag/filter is confirmed polypropylene. Weigh replacement media excluding housings; retain SKU, polymer and service records. A woven packaging sack is not a liquid filter. Other actual polymers are separate reviewed atomic rows, not silently covered here.

- Selected flow: Polypropylene liquid-polishing filter medium
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `cpm-glycerin-refining-2024`

#### Outputs

##### Product flows

###### glycerol (`refined_glycerol`)

Accepted refined bulk product after distillation, carbon bleaching, filtration and loading. The broad CAS 56-81-5 identity has no contrary feedstock/route restriction and is qualified here to the declared fat-splitting route. The commercial net mass includes measured residual water and impurities; it is not 1 kg of pure active glycerol.

- Selected flow: glycerol `32d6a3cd-fb89-4a48-9594-bb240083042e`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `cpm-glycerin-refining-2024`; `klk-personal-care-2025`

###### Condensate returned to the external steam supplier (`returned_condensate`)

Only actual external return from indirect heating; record mass and return enthalpy/state, destination and supplier contract. Internal condensate reuse remains internal. Do not use evaporated-milk water, purchased water or a different steam identity to represent the return, and do not count it as wastewater simultaneously.

- Selected flow: Condensate returned to the external steam supplier
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_steam.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `ifc-oleochemicals-2007`

##### Waste flows

###### Waste heavy residue from glycerol foots distillation (`still_residue`)

Final discarded residue after actual glycerol recovery; measure wet mass, retained glycerol/water, salts, soaps, fatty material and receiving treatment. Internal foots recycling is excluded. An isobutyl-acetate distillation residue has a contrary composition and is rejected.

- Selected flow: Waste heavy residue from glycerol foots distillation
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `cpm-glycerin-refining-2024`

###### spent activated carbon (`spent_carbon`)

Carbon exported after glycerol bleaching, including actual moisture and adsorbed material. Record glycerol washing/recovery if performed, carbon origin, hazardous properties and receiver/regeneration route. Recovered wash liquid returned inside the gate is not an additional product output.

- Selected flow: spent activated carbon `aff33890-3f08-40f9-9310-a7f77213de05`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `ifc-oleochemicals-2007`

###### Glycerol-refining wastewater exported for treatment (`offsite_effluent`)

Actual combined exported effluent from condensers, scrubbers, vacuum systems and cleaning, after documented internal recovery. Substreams retain separate measurements and treatment needs even when mixed before export. Measure water, glycerol, fatty substances, salts, pH, temperature, COD/TOC and receiver acceptance. This is a waste transfer, not a freshwater emission or pure-water flow; manganese-slag and silicon-wafer wastewater identities are incompatible.

- Selected flow: Glycerol-refining wastewater exported for treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_effluent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### Discarded off-specification glycerine mixture (`discarded_glycerine`)

Conditional final discarded off-spec material, measured by lot and actual disposition. Reprocessed off-spec inventory stays inside the aggregated unit and closing stocks are recorded. Selling a technical glycerine co-product is outside this single-product profile and requires a reviewed multi-output extension, not hiding a second known glycerol output.

- Selected flow: Discarded off-specification glycerine mixture
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `cpm-glycerin-refining-2024`

###### Spent polypropylene liquid-polishing filter medium (`spent_filter`)

Conditional exported filter medium from filter_medium, with measured retained glycerol/carbon fines and moisture. Keep it distinct from loose carbon and still residue. Record polymer, receiving facility and disposal/regeneration conditions; packaging waste or unrelated filtration residue does not prove this identity.

- Selected flow: Spent polypropylene liquid-polishing filter medium
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `cpm-glycerin-refining-2024`

##### Elementary flows

###### glycerin (`glycerol_air`)

Actual glycerol vapour/mist released after capture to outdoor air, unspecified subcompartment only. Measure compound-specific net discharge at vacuum exhaust and relevant vents, including operating variability. Captured glycerol and indoor occupational exposure are different quantities. Glycerol mass within measured particulate matter must not also be added as the same PM mass.

- Selected flow: glycerin `08a91e70-3ddc-11dd-9510-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### acrolein (`acrolein_air`)

Conditional only if site-specific VOC speciation identifies acrolein CAS 107-02-8 in actual outdoor discharges. No positive emission, yield or formation temperature is assumed. Quantify after control, preserve detection limits and distinguish other aldehydes and captured fractions; no correction flow, indoor or water-compartment substitution.

- Selected flow: acrolein `08a91e70-3ddc-11dd-91a4-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-bref-2016`

###### water vapour (`water_vapour_air`)

Actual uncaptured water vapour reaching outdoor air, unspecified subcompartment. Determine from the matched water balance or measured gas moisture and flow on stated wet/dry temperature-pressure bases. Condensed water exported in wastewater, returned supplier condensate and internally recovered water are not this emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `cpm-glycerin-refining-2024`; `jrc-cww-bref-2016`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_single | refining | The base profile has one saleable refined product; attribute refining burdens to it. Rework, captured light fractions, recycled foots and closing inventory are not fictional saleable co-products; count their processing and stock changes. Externally returned steam condensate is a utility return with a reconciled provider boundary, not an automatic credit. | `cpm-glycerin-refining-2024`; `eu-pef-multifunctionality-2021` |
| a_joint | crude_glycerine | For upstream hydrolysis and any reviewed multi-output extension, investigate subdivision/system expansion, then justified physical relationships, then another justified relationship such as actual gate economic value. Document the chosen goal/method, reasons, measured output bases, prices and sensitivity; no generic glycerol share or free by-product assumption. | `eu-pef-multifunctionality-2021` |
| a_ledgers | all inventory rows | Keep each full measured physical output and equal internal transfers in the unallocated process map/mass/water/carbon ledger. Allocate only the attributable environmental burden pools in a separately linked ledger; do not multiply co-product physical mass by an allocation share. Waste treatment is linked once to actual composition/disposition; no assumed substitution credit. | `eu-pef-multifunctionality-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | refining | refined_glycerol | dispatch and laboratory records | SKU; lot; net loading mass; assay wet/dry basis; water; MONG; salts/ash; acceptance; returns/reacceptance; opening/closing finished-product and work-in-progress stocks; carried inventory burdens and production history | Calibrated scale/tank mass with dispatch reconciliation; representative sampling and validated assay/water methods documented with uncertainty; retain certificate and grade criteria | kg | Each lot and dispatch | Full declared period including startup/shutdown, cleaning, rework and stocks | Same site, route and meter boundary | per 1 kg reference flow | Calibration; sample chain; provider evidence; balance reconciliation; uncertainty |
| cp_feed | refining | crude_glycerine | receipt and analytical records | Supplier; fat-splitting route; upstream concentration/pretreatment; wet mass; glycerol/water/MONG/salts/soaps/fatty profile; lots; stocks | Weigh received feed, sample each lot and retain validated analytical definitions; reconcile receipts, tanks and upstream burden dataset on the same supplied-mixture basis | kg | Each receipt/lot | Full declared period including startup/shutdown, cleaning, rework and stocks | Same site, route and meter boundary | per 1 kg reference flow | Calibration; sample chain; provider evidence; balance reconciliation; uncertainty |
| cp_materials | refining | caustic_solution; activated_carbon; filter_medium | procurement and service records | SKU; quantity; concentration/water; polymer/grade; carbon feedstock; bed charge; replacement; returns; stocks; actual destination; actual reaction pathways and independently measured reactant/product quantities for neutralisation or other observed conversion | Weigh or reconcile stock/invoice records by one material; solution active mass is calculated separately; assign replacement life across the actual monitored production, not an assumed lifetime | kg | Each batch or replacement | Full declared period including startup/shutdown, cleaning, rework and stocks | Same site, route and meter boundary | per 1 kg reference flow | Calibration; sample chain; provider evidence; balance reconciliation; uncertainty |
| cp_utilities | refining | electricity; makeup_water | stage meter records | Meter ID; voltage; provider geography/losses; kWh/MJ; water kg/volume/density/temperature; destination; clock; operating state | Calibrated synchronized meter totals for vacuum, pumps, cooling, cleaning and loading; separate fresh water from recirculation; reconcile facility and stage totals without double counting | MJ; kg | Continuous and period close | Full declared period including startup/shutdown, cleaning, rework and stocks | Same site, route and meter boundary | per 1 kg reference flow | Calibration; sample chain; provider evidence; balance reconciliation; uncertainty |
| cp_steam | refining | heating_steam; stripping_steam; returned_condensate | supplier and stage metering records | Separate supply/injection/return masses; absolute pressure; temperature; phase/dryness; supplier enthalpy and datum; state method; flash/losses; contract reference basis | Calibrated mass meters and traced supplier state/enthalpy records; reconcile indirect heater return versus direct stripping destination. Withhold heat-based provider link if state or net delivered-heat definition is unknown | kg; kJ/kg | Continuous and supplier settlement | Full declared period including startup/shutdown, cleaning, rework and stocks | Same site, route and meter boundary | per 1 kg reference flow | Calibration; sample chain; provider evidence; balance reconciliation; uncertainty |
| cp_wastes | refining | still_residue; spent_carbon; discarded_glycerine; spent_filter | weighing, composition and receiver records | Stream ID; wet/dry mass; glycerol/water/salts/carbon/polymer composition; lot; origin; receiver; treatment; waste status; rework; stocks | Weigh separate waste outlets, sample composition and reconcile transfer notes with internal recovery. Track no-export intervals and actual routing; absence needs evidence | kg | Each export and representative sampling | Full declared period including startup/shutdown, cleaning, rework and stocks | Same site, route and meter boundary | per 1 kg reference flow | Calibration; sample chain; provider evidence; balance reconciliation; uncertainty |
| cp_effluent | refining | offsite_effluent | flow-proportional sample and export records | Substream ID; mass/volume/density; flow; pH; temperature; glycerol/fatty profile; salts; COD/TOC and analytical bases; receiver; recovery; sampling interval | Matched flow/representative concentration samples for condensers, vacuum/scrubbers and cleaning; convert volume to mass with measured density; pollutant analytical loads explain this waste, not a second direct discharge | kg; m3; mg/L | Continuous flow and representative operation/cleaning samples | Full declared period including startup/shutdown, cleaning, rework and stocks | Same site, route and meter boundary | per 1 kg reference flow | Calibration; sample chain; provider evidence; balance reconciliation; uncertainty |
| cp_air | refining | glycerol_air; acrolein_air; water_vapour_air | compound-specific exhaust monitoring | Outlet; outdoor subcompartment; gas flow; T/P; wet/dry basis; compound concentration; mist/vapour capture; moisture; runtime; detection limits; control performance | Measure each relevant post-control vent and fugitive release with validated species-specific sampling; match flow/concentration/time bases; retained indoor exposure or captured liquid is not outdoor emission; water balance verifies vapour | kg; m3; mg/m3 | Representative steady, startup/shutdown and cleaning periods | Full declared period including startup/shutdown, cleaning, rework and stocks | Same site, route and meter boundary | per 1 kg reference flow | Calibration; sample chain; provider evidence; balance reconciliation; uncertainty |

Retain the raw campaign totals, opening/closing stocks, internal transfer log and stage allocation to accepted output alongside the normalized ledger. cp_release supplies accepted net output B for the same period. Any stock-change attribution requires recorded production history; do not divide a mismatched campaign by dispatch alone. Laboratory acceptance uses the actual supplier/customer specification and validated assay/moisture/salt/MONG methods with sample conditioning and uncertainty, never a catalogue limit as a measured value.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalized | all inventory rows | N = sum(Q) / B; sum raw physical exchange quantities over the same complete declared route/state/SKU period, including attributable failed or zero-output intervals, startup/shutdown, cleaning and rework, then divide once. Do not average successful-interval ratios or renormalize per-kg values. B must be positive and is accepted net bulk glycerol kg from cp_release, credited once after reconciling returns, reacceptance, finished stocks and work in progress. Internal rework passes are not new accepted output. Retain raw physical totals and separately reconcile carried inventory burdens to the same accepted output; do not drop physical exchanges when adjusting burden attribution. If B is zero, preserve totals and disclose no unit result rather than divide or omit burdens. | Q; B; cp_release | exchange quantity per 1 kg reference flow | `jrc-cww-bref-2016` |
| calc_composition | crude_glycerine; caustic_solution; refined_glycerol | component_mass = supplied_mass × measured_wet_fraction; dry_glycerol_fraction × (1 − measured_water_fraction) gives wet glycerol fraction only when both analyses share the same representative sample basis. Water, MONG, salt and active ledgers do not add extra exchanges to the parent mass. | supplied_mass; measured_wet_fraction; dry_glycerol_fraction; measured_water_fraction | component and water ledgers | `efisc-oilseed-refining-v3-1` |
| calc_air_load | glycerol_air; acrolein_air | load_kg = sum(C_mg_per_m3 × gas_volume_m3 × 0.000001) for matched species and wet/dry T/P measurement conditions. Gas_volume is time-integrated flow over the same operating interval; no capture efficiency or missing pollutant is assumed. | concentration; gas_volume; conditions; cp_air | actual post-control species load | `jrc-cww-bref-2016` |
| calc_ledgers | all inventory rows | For each complete matched period conserve whole mass and actual elements: physical input + opening stock = physical output + closing stock + disclosed residual. Count actual external losses among outputs and do not count stock accumulation twice. Use measured composition to reconcile C/H/O and relevant alkali/salt elements; preserve biological/fossil carbon origins. Water, glycerol and dry components are species/material ledgers, not automatically conserved quantities: add actual reaction formation to inputs and actual consumption to outputs, including neutralisation or any evidenced conversion. Bound reaction terms using actual equations and independently measured reactant/product quantities with uncertainty; do not fit unknown reaction water or dry matter to a residual, use COD as carbon mass, or assume a transesterification/hydrolysis recipe inside this refining gate. A water-balance estimate of vapour is available only when the other water terms are independently bounded. Internal transfers cancel only at the aggregate gate and remain equal in stage logs; retain uncertainty rather than forcing a zero residual. | stage records; composition; stocks; actual reaction evidence; actual emissions; cp_feed; cp_materials; cp_release | unallocated physical balances | `jrc-cww-bref-2016`; `cpm-glycerin-refining-2024` |
| calc_steam | heating_steam; returned_condensate | For matched steady indirect heating only, with complete measured return and negligible documented work/storage/other losses: heat_MJ = steam_mass × (h_supply − h_return) / 1000, using supplier-traced h in kJ/kg with one datum and validated state method. Otherwise require the full measured energy balance including flash, leaks, return, accumulation and losses. Never apply this shortcut to direct stripping; preserve the physical mass rows and reconcile provider net/gross/return convention before linking. | steam_mass; traced enthalpies; same datum; state_method; complete_boundary; cp_steam | conditional heat supplement ledger | `ifc-oleochemicals-2007` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Recheck actual species/CAS, mixture state, route, grade, source carbon, receiving medium and reference property/unit; a valid UUID is not a provider dataset or a recipe. Blank UUIDs remain explicit linkage gaps. | Supplier documents and identity records |
| dq_complete | refining | Use complete representative operating/cleaning periods and reconcile plant/stage totals. Missing amounts, unknown receiver, unsupported unit or unexplained balance residual remains unresolved; not_applicable requires actual absence evidence. | Meter, stock and sample records |
| dq_extend | refining | Species survey must add each additional actual VOC, carbon emission, particle fraction, refrigerant, cleaning chemical and treatment flow separately. PM size bins must be disjoint; chemical components inside a measured total cannot be summed twice. No correction-flow substitution. | `jrc-cww-bref-2016` |
| dq_language | all inventory rows | Bilingual row identities, sources, formula definitions, reference amount and normalized basis must agree; use official Chinese database baseName where available. | Bilingual alignment |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | refining | Check declared fat-splitting feed history, concentration/pretreatment upstream coverage, vacuum/bleaching route and actual grade. Other routes or externally marketed technical glycerine do not conform without a reviewed extension. | `ifc-oleochemicals-2007`; `efisc-oilseed-refining-v3-1` |
| v_reference | refined_glycerol | Require one reference output of 1 kg accepted net bulk commercial material and all qualifiers. Inventory denominator, aggregation and conversion must refer to the same accepted period/basis; dry assay or pure active mass cannot replace whole supplied mass. | `efisc-oilseed-refining-v3-1` |
| v_balances | all inventory rows | Verify full unallocated mass/water/carbon and energy balances, equal internal transfers, separate indirect/direct steam, no duplicated reference product, species or particulate bins, and distinct physical versus burden ledgers. | `cpm-glycerin-refining-2024`; `jrc-cww-bref-2016`; `eu-pef-multifunctionality-2021` |
| v_evidence | all inventory rows | Every actual exchange needs traceable measurement and compatible provider/receiver definition. Unknown UUIDs, assay/density, steam state/heat basis, pollution speciation or incomplete sampling remain explicit data-package gaps. Passing a finite measurement/projection check does not approve scientific methodology or resolve these gaps. | `jrc-cww-bref-2016` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground process dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Qualified bulk refined glycerol procurement for this route and composition after real collection, upstream linkage, receiver/provider checks and scientific review |
| excluded_use | Other routes, unspecified mixture/pure active substitution, zero-burden crude, universal purity/yield defaults, full CPC coverage or methodology approval from tool checks |
| required_metadata | All reference qualifiers; process/stage map; raw/normalized physical ledger; provider/receiver pins; sampling/calibration; balance and allocation boundaries |
| required_quality_disclosure | Unknown identities/quantities, steam and background compatibility, source-carbon uncertainty, assay basis, residual balances, excluded operations, coverage and review status |
| update_trigger | Feed origin/pretreatment, supplier/SKU/assay, process/utility state, waste destination, monitoring coverage, source data identity or allocation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-glycerol-3-0 | official_guidance | [UNSD CPC 3.0, subclass 34570 Glycerol](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/34570) | Classification identity only; no manufacturing or purity rule |
| ifc-oleochemicals-2007 | official_guidance | [IFC/WBG EHS Guidelines for Oleochemicals Manufacturing, 30 April 2007, pp. 1–4 and 15](https://www.ifc.org/content/dam/ifc/doc/2000/2007-oleochemicals-manufacturing-ehs-guidelines-en.pdf) | Natural glycerine refining; utility, condenser/vacuum effluent and VOC inventory; exclude other routes and numerical performance examples |
| jrc-cww-bref-2016 | official_guidance | [JRC103096 CWW BREF 2016, BAT 2–3, printed pp. 543–544 / PDF pp. 573–574](https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf) | Chemical-sector stream inventory, relevant species and flow/concentration monitoring; BAT limits are not LCI factors |
| efisc-oilseed-refining-v3-1 | official_guidance | [EFISC sector reference document for oilseed crushing/vegetable oil refining v3.1, p. 8 entries 13.8.1–13.8.2](https://food.ec.europa.eu/system/files/2020-08/animal-feed_fh_good-practice_eu-guide_oilseed-crushing_veg-oil-refining_v3-1.pdf) | Distinguish whole crude glycerine from refined glycerin; oil splitting/sweet-water concentration route; catalogue dry-matter criterion is not a wet chemical default |
| cpm-glycerin-refining-2024 | handbook | [CPM Crown Glycerin Refining, July 2024 brochure, pp. 1–2](https://e1.nmcdn.io/assets/cpm/wp-content/uploads/2024/07/Liquids_Processing_Glycerin_Refining_2_pager_July_2024-1.pdf) | Vacuum crude/foots stills, internal return, steam stripping, condensation, bleaching/filtering and residues; no equipment-specific yield or schedule defaults |
| klk-personal-care-2025 | handbook | [KLK OLEO Personal Care Ingredients, May 2025 URL edition, PDF p. 1 Refined Glycerine table](https://www.klkoleo.com/wp-content/uploads/2025/05/English-KLK-OLEO-Personal-Care-Ingredients.pdf) | Commercial refined-glycerin product family and CAS; not proof of any current site SKU, process or assay |
| eu-pef-multifunctionality-2021 | official_guidance | [Commission Recommendation C(2021) 9332 final, Annex I §4.5, PDF pp. 63–64](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf) | General subdivision/system expansion, physical and other justified allocation hierarchy; exclude animal-specific factors and automated credits |
