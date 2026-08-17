---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.rape-colza-and-mustard-oil-refined
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Rape, colza and mustard oil, refined

## 1. Scope and Applicability

This PCR governs foreground data packages for refined fixed oils produced from rape or colza seed, including low-erucic-acid canola varieties, and from mustard seed. The default foreground boundary is stand-alone refinery-gate production from received crude oil through a bulk finished refined oil. Chemical and physical refining routes are both covered when the selected route, feedstock identity, grade, and actual unit operations are declared.

The PCR covers food, feed, or technical grades only when the declared product remains a refined fixed triglyceride oil within the named category. Oil placed on the market for human consumption shall be linked to the applicable product specification; Codex CXS 210-1999 provides the international identity basis for rapeseed, low-erucic-acid rapeseed or canola, and mustardseed oils. The PCR does not itself certify food safety or legal market compliance.

Crude oils, hydrogenated or interesterified fats, biodiesel, isolated allyl isothiocyanate or volatile mustard oil, oilseed meal, margarine, formulated blends without the named oil as the declared reference product, retail packaging, distribution, use, and end-of-life are excluded from the default product system. Seed cultivation, oilseed crushing, pressing, and solvent extraction are represented by an upstream crude-oil dataset and are not recreated inside this refinery-gate foreground package.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.rape-colza-and-mustard-oil-refined |
| classification_refs | CPC 3.0: 21642 Rape, colza and mustard oil, refined |
| covered_products | Refined fixed oil from rape or colza seed; refined low-erucic-acid rapeseed or canola oil; refined fixed oil from white, brown, yellow, or black mustard seed; declared food, feed, or technical grades |
| excluded_products | Crude oil; virgin or cold-pressed oil sold without refining; hydrogenated, interesterified, or otherwise chemically modified oil; biodiesel; volatile mustard oil or allyl isothiocyanate; oilcake and meal; margarine and formulated blends; packaging and downstream distribution |
| representative_product | Bulk refined rape or colza oil at the refinery gate |
| production_route | Received crude named oil followed by declared chemical refining or physical refining, normally including degumming or pretreatment, bleaching, and deodorisation; chemical neutralisation is route-conditional |
| market_state | Finished liquid refined oil, production mix at plant, bulk and before retail packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Refined rape, colza, canola, or mustard fixed oil supplied as a finished bulk product at the refinery gate |
| How much | 1 kg net refined oil |
| How well | The declared oil identity, grade, refining route, and market specification are met; food-grade oil is linked to the applicable named-oil and food-safety specification |
| How long or cycle | One production batch or a representative production campaign whose dates and averaging period are declared |
| reference_flow_link | The reference output of the `refining_train` process |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Rape, colza and mustard oil, refined `e30cf6ff-7dfb-4972-affc-6cab3ae17283` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | oil source: rape or colza, low-erucic canola, or mustard; species or commercial oil designation; food, feed, or technical grade; chemical or physical refining route; crude-oil pretreatment state; production geography; production period; bulk delivery state; allocation treatment; applicable product specification |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product, crude-oil input, co-products, and oil-bearing residues | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net mass at the measurement temperature and moisture or volatile-matter convention used by the site; normalize all mass rows to 1 kg net refined oil. |
| `energy_carrier_separation` | Electricity, steam, heat, and fuels | Carrier-native energy property | kWh or MJ | Keep electricity and each thermal-energy carrier as separate collected records; convert to final energy only for the installation-level BAT screening calculation and retain the conversion factors. |
| `water_volume_and_mass` | Process, wash, and cooling water | Declared volume or mass property | m3 or kg | Record water by function and circulation mode; do not treat recirculated cooling water as fresh-water withdrawal, and disclose any density conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Named crude rape, colza, canola, or mustard fixed oil received at the refinery gate with mass, pretreatment state, quality, supplier geography, and upstream dataset reference declared |
| starting_condition_role | Upstream product input to the stand-alone foreground refining train |
| product_classification_scope | Refined fixed oils within CPC 3.0 subclass 21642; the canonical PCR meaning is not owned by CPC |
| recursive_input_rule | Any refined named oil used as rework or blending input is recorded as a product input linked to a compatible upstream dataset; its production is not recursively reconstructed inside the same refining-train record |
| upstream_dataset_requirement | A traceable crude-oil dataset including cultivation and oil extraction as applicable, with its reference flow, geography, technology, allocation, and data quality disclosed |
| disclosure | Declare crude-oil origin and pretreatment, refining route, included and bypassed unit operations, site integration with crushing, utility system, co-product destinations, wastewater treatment, packaging exclusion, production period, and any departures from the default refinery-gate boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_refinery_gate` | Foreground product system | Include receipt and storage losses, degumming or pretreatment, route-conditional neutralisation, bleaching, deodorisation, internal recirculation, utility use, direct emissions, residue handling, wastewater sent to treatment, and the bulk refined-oil output up to the refinery gate. | `eu-fdm-bref-2019` |
| `boundary_route_declaration` | Chemical and physical refining | Declare the actual route. Chemical refining includes degumming or neutralisation, bleaching, and deodorisation; physical refining includes adequate degumming or pretreatment, bleaching, and distillative deacidification or deodorisation. Do not insert a route-conditional operation that did not occur. | `eu-fdm-bref-2019` |
| `boundary_upstream_crude_oil` | Crude-oil input | Keep cultivation, crushing, pressing, and solvent extraction in the linked upstream crude-oil dataset unless an integrated-site study explicitly expands the boundary and reports the additional processes separately. | `eu-fdm-bref-2019` |
| `boundary_material_completeness` | Listed material and emission flows | Collect all material flows listed by this PCR. Any omission shall be identified, quantified where possible, justified for environmental insignificance, and included in the quality disclosure; no omitted flow may be hidden by a generic cut-off statement. | `eu-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `refining_train` | Named seed-oil refining train | required | Always; declare chemical or physical route and all bypassed operations | Foreground refining from received crude oil to finished bulk refined oil | 1 kg net refined oil at refinery gate |

The `refining_train` record shall preserve stage-level measurements for degumming or pretreatment, neutralisation when used, bleaching, and deodorisation even when the facility publishes one aggregated refining process. Refining process UUIDs are intentionally not prescribed because no reviewed Tiangong process candidate was confirmed with both this product scope and a consistent quantitative reference.

### Process: Named seed-oil refining train (`refining_train`)

#### Inputs

##### Product flows

###### Received named crude oil (`crude_named_oil`)

Record the crude rape, colza, canola, or mustard fixed oil entering the refinery, including supplier, origin, species or commercial designation, degumming state, free-fatty-acid and phosphorus indicators when available, and the linked upstream dataset.

- Selected flow: Site-specific crude named oil product flow; Tiangong UUID to be selected for the declared oil identity and pretreatment
- Flow property / unit: Mass / kg
- Amount rule: Measured net crude-oil input assigned to the production batch or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net refined oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:
- Range: Provisional crude-oil input mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 1.3
  - Unit: kg/kg refined oil
  - Basis: crude-oil input per 1 kg net refined oil output; deliberately broad pending reviewed site evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process and wash water (`refinery_water`)

Collect fresh and reused water separately for degumming, neutralisation washing, steam makeup, cleaning, and cooling. The range is an annual installation-level screen and shall not replace metered foreground data.

- Selected flow: Site-specific process-water product flow; UUID to be selected for water source and treatment state
- Flow property / unit: Volume / m3
- Amount rule: Metered net water withdrawal allocated to the refining train, excluding recirculated volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 tonne net refined oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-fdm-bat-2019`
- Range: Stand-alone refining specific water-consumption screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.15
  - Upper: 0.9
  - Unit: m3/t refined oil
  - Basis: annual net water consumption per tonne of oil produced at a stand-alone refinery
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-fdm-bat-2019`

###### Neutralising alkali (`neutralising_alkali`)

Include sodium hydroxide or the actual alkali only when chemical neutralisation occurs; preserve concentration and convert the inventory to both solution mass and active-alkali mass.

- Selected flow: Site-specific sodium hydroxide or other alkali product flow; UUID to be selected for concentration and market state
- Flow property / unit: Mass / kg
- Amount rule: Measured solution consumption and calculated active-alkali mass from batch dosing records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 tonne oil processed through chemical neutralisation
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_dosing`
- Sources: `eu-fdm-bref-2019`
- Range: Sodium hydroxide use in chemical neutralisation
  - Range role: Typical range (`typical_range`)
  - Lower: 1
  - Upper: 6
  - Unit: kg NaOH/t oil
  - Basis: active sodium hydroxide per tonne of oil entering chemical neutralisation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-fdm-bref-2019`

###### Degumming acid (`degumming_acid`)

Include phosphoric acid or citric acid when used for acid degumming or pretreatment. Preserve acid identity and concentration; do not sum different acids without a separate calculation field.

- Selected flow: Site-specific phosphoric-acid or citric-acid product flow; UUID to be selected for acid identity and concentration
- Flow property / unit: Mass / kg
- Amount rule: Measured acid solution consumption and calculated active-acid mass from dosing records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 tonne oil treated with the declared acid
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_dosing`
- Sources: `eu-fdm-bref-2019`
- Range: Active-acid use in degumming
  - Range role: Typical range (`typical_range`)
  - Lower: 0.1
  - Upper: 2.0
  - Unit: kg active acid/t oil
  - Basis: phosphoric acid range is 0.1-2.0 kg/t and citric acid range is 0.1-1.0 kg/t; use the narrower upper limit when citric acid is declared
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-fdm-bref-2019`

###### Bleaching earth and filter aid (`bleaching_media`)

Record bleaching earth, activated carbon, and filter aid separately. This row covers the bleaching earth mass; additional media remain distinct product flows in the foreground record.

- Selected flow: Site-specific bleaching-earth product flow; UUID to be selected for activated or non-activated grade
- Flow property / unit: Mass / kg
- Amount rule: Measured bleaching-earth input from batch recipes or silo mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 tonne oil entering bleaching
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_dosing`
- Sources: `eu-fdm-bref-2019`
- Range: Bleaching-earth dose screen
  - Range role: Typical range (`typical_range`)
  - Lower: 1
  - Upper: 30
  - Unit: kg/t oil
  - Basis: 0.1-3 percent bleaching earth per tonne of oil entering bleaching
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-fdm-bref-2019`

###### Electricity and thermal-energy carriers (`refining_energy`)

Collect electricity, steam, direct fuel, and purchased heat as separate carrier rows before calculating total final energy. The screening interval is a yearly stand-alone-refinery total and is not a default amount for an individual batch.

- Selected flow: Site-specific electricity, steam, heat, and fuel product flows; UUIDs to be selected separately for each carrier
- Flow property / unit: Carrier-native energy property / kWh or MJ
- Amount rule: Metered or invoice-reconciled final energy assigned to refining, separated by carrier and converted with documented factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 tonne net refined oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-fdm-bat-2019`
- Range: Stand-alone refining total final-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 0.45
  - Unit: MWh/t refined oil
  - Basis: annual final energy consumption per tonne of oil produced at a stand-alone refinery
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-fdm-bat-2019`

##### Waste flows

No waste input is prescribed. If off-site residues are accepted for co-processing, record them as separate waste inputs with identity, origin, contaminant controls, and the treatment function declared; do not merge them with the crude-oil input.

##### Elementary flows

###### Direct water withdrawal (`direct_water_withdrawal`)

Record only water taken directly from the environment as an elementary input. Purchased municipal or industrial water remains the product-flow input `refinery_water`.

- Selected flow: Site-specific freshwater or other environmental water-compartment flow; UUID to be selected for source compartment
- Flow property / unit: Volume / m3
- Amount rule: Metered direct abstraction assigned to the refining train
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 tonne net refined oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources:

#### Outputs

##### Product flows

###### Finished refined named oil (`refined_named_oil`)

This is the quantitative reference output. It shall meet the declared oil identity, grade, and product specification and shall be measured after refining losses and before excluded retail packaging.

- Selected flow: Rape, colza and mustard oil, refined `e30cf6ff-7dfb-4972-affc-6cab3ae17283`
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net refined oil as the normalized reference output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Reference-output identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: normalized reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Marketable refining co-products (`refining_coproducts`)

Record gums or lecithin, soapstock or recovered acid oil, and deodoriser distillate as separate product outputs only when they leave the system with a documented beneficial use or market. Preserve identity, mass, destination, and revenue evidence for each output.

- Selected flow: Site-specific co-product flow for each declared output; UUID to be selected separately for gums or lecithin, soapstock or acid oil, and deodoriser distillate
- Flow property / unit: Mass / kg
- Amount rule: Measured sale or transfer mass by co-product identity; zero for a co-product not produced or treated as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net refined oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_residue_mass`
- Sources: `eu-fdm-bref-2019`
- Range: Provisional combined marketable co-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg/kg refined oil
  - Basis: combined marketable refining co-products per 1 kg net refined oil; replace with reviewed route-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Non-marketable refining residues (`refining_residues`)

Record spent bleaching earth, non-marketable gums or soapstock, filter aid, sludge, and off-spec oil separately by waste identity and destination. Spent bleaching earth shall retain oil content and self-heating risk information.

- Selected flow: Site-specific waste flow for each residue; UUID to be selected separately by waste identity and treatment destination
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatched mass or tank and container mass balance by residue type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net refined oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_residue_mass`
- Sources: `eu-fdm-bref-2019`
- Range: Provisional residue-generation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg refined oil
  - Basis: combined non-marketable residues per 1 kg net refined oil; replace with reviewed route-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refinery wastewater (`refinery_wastewater`)

Record process wastewater sent to on-site or off-site treatment separately from uncontaminated cooling-water discharge. Include flow, receiving treatment, and measured pollutant loads where applicable.

- Selected flow: Site-specific wastewater flow; UUID to be selected for wastewater identity and treatment destination
- Flow property / unit: Volume / m3
- Amount rule: Metered wastewater discharge assigned to the refining train, separated by stream and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 tonne net refined oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-fdm-bref-2019`
- Range: Provisional wastewater-volume screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: m3/t refined oil
  - Basis: total process wastewater per tonne of net refined oil; replace with reviewed route-specific evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct emissions from refining (`direct_refining_emissions`)

Quantify site emissions caused by the refining train, including combustion emissions and any residual volatile organic compounds from deodorisation or vacuum systems. Do not duplicate emissions already contained in purchased energy or off-site treatment datasets.

- Selected flow: Site-specific elementary flows to the actual air or water compartments; UUIDs to be selected for each measured substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: Measured emissions or calculations from measured activity data and a cited method factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 tonne net refined oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-fdm-bat-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | Refining train and shared utilities | First subdivide stage-level measurements and directly assign material and utility records to the refining train. Use system expansion only when the added function and substituted product can be represented consistently. | `eu-pef-2021` |
| `allocation_output_status` | Gums, lecithin, soapstock, acid oil, deodoriser distillate, spent earth, and residues | Treat an output as a co-product only when it has a documented beneficial use or market and leaves the boundary as a product. Otherwise classify it as waste and include its treatment; do not change classification solely to obtain an allocation credit. | `eu-fdm-bref-2019` |
| `allocation_physical_residual` | Unsubdivided burdens with multiple marketable oil-derived outputs | If subdivision and justified system expansion are not feasible, allocate the remaining shared burdens by measured dry or net mass among the refined oil and marketable oil-derived co-products. Exclude wastewater, recirculated water, and wastes from the denominator. | `eu-pef-2021`; `mass-balance-identity` |
| `allocation_disclosure` | Published foreground package | Report output masses, allocation fractions, co-product status and destination, price period if an economic sensitivity is used, excluded waste-treatment burdens, and the change in results under a no-credit sensitivity. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `refining_train` | Crude-oil input and internal oil transfers | Weighbridge, calibrated tank gauge, batch sheet, and inventory reconciliation | material identity; supplier; batch; opening stock; receipts; transfers; closing stock; net mass; temperature; moisture or volatile convention | Reconcile calibrated mass or volume-and-density records to each batch and monthly inventory | kg | Each receipt and batch; monthly reconciliation | At least 12 representative consecutive months or a declared complete campaign | All units supplying the reported refinery output | Sum net input by oil identity and assign only to conforming output batches; document stock changes and rework | Calibration certificates; tank tables; weigh tickets; signed reconciliation; specification or certificate of analysis |
| `cp_water_records` | `refining_train` | Fresh water, reused water, cooling water, and direct abstraction | Meter and water-balance record | source; meter id; opening and closing reading; withdrawal; recirculation; discharge; purpose; batch or period | Read source and sub-meters; reconcile fresh intake, reuse, evaporation, product carryover, and discharge | m3 | Daily or batch readings; monthly reconciliation | Same period as product output | Whole refinery with sub-meter allocation to refining | Net fresh water equals withdrawal minus exported or returned uncontaminated water; recirculated volume is disclosed separately | Meter calibration; utility invoice; water-balance sign-off |
| `cp_chemical_dosing` | `refining_train` | Alkali, acid, bleaching earth, activated carbon, and filter aid | Recipe, dosing meter, purchase, and stock record | chemical identity; concentration; lot; gross solution mass; active fraction; batch; opening and closing stock | Reconcile automated dosing or weighed batch additions with purchase and inventory records | kg | Each batch; monthly reconciliation | Same period as product output | All refining lines in scope | Calculate active reagent as solution mass multiplied by certified active fraction; retain each chemical separately | Dosing calibration; supplier certificate; batch recipe; stock reconciliation |
| `cp_energy_records` | `refining_train` | Electricity, steam, purchased heat, and fuels | Meter, invoice, boiler log, and energy-balance record | carrier; meter id; quantity; unit; heating value; steam condition; generation efficiency; allocation key; period | Read sub-meters where available and reconcile with invoices or fuel stocks | kWh or MJ | Continuous or daily; monthly reconciliation | At least 12 representative consecutive months or a complete campaign | Refining train and declared shared utilities | Preserve carriers; convert to final energy with documented factors; assign shared utility use by metered demand before any allocation | Meter calibration; invoices; boiler logs; documented conversion factors; energy-balance review |
| `cp_output_and_residue_mass` | `refining_train` | Refined oil, co-products, and solid or liquid residues | Tank, scale, dispatch, sales, and waste-transfer record | output identity; product or waste status; batch; net mass; moisture; oil content where relevant; destination; revenue or disposal route | Reconcile production tanks, packaged bulk dispatch, co-product sales, and waste transfers | kg | Each batch or dispatch; monthly reconciliation | Same period as input and utility records | All output and residue handling areas in scope | Sum by identity and destination; keep marketable co-products separate from wastes and internal recycle | Calibrated scales or tank tables; dispatch documents; sales records; waste transfer notes; laboratory oil-content result |
| `cp_wastewater_records` | `refining_train` | Process wastewater and pollutant load | Flow meter, composite sample, and treatment record | stream; flow; COD; BOD; total suspended solids; total nitrogen; total phosphorus; oils and grease; pH; treatment destination | Meter discharge and sample under the applicable permit or site monitoring plan | m3 and kg pollutant | Flow continuous or daily; laboratory frequency justified by variability | Same period as product output and representative operating conditions | All refinery wastewater outlets in scope | Calculate pollutant load as concentration multiplied by compatible measured flow; separate uncontaminated cooling water | Meter calibration; accredited laboratory report; chain of custody; treatment operator record |
| `cp_direct_emissions` | `refining_train` | Direct air and water emissions | Stack test, continuous monitor, leak record, and method calculation | substance; compartment; concentration; flow; operating hours; fuel activity; factor; abatement status | Use measured emission and gas-flow data where available; otherwise calculate from collected activity and cited factor | kg | Permit frequency and after material process change | Same period as product output or a justified representative test | All direct emission points serving the refining train | Integrate measured rate over operating time or multiply measured activity by the cited factor; prevent double counting with energy datasets | Accredited test report; monitor QA; activity record; factor reference; uncertainty statement |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | Every inventory row | normalized amount = period amount / net conforming refined-oil output in the same period | Period flow amount; net refined-oil output | Amount per 1 kg or 1 tonne refined oil | `mass-balance-identity` |
| `calc_active_reagent` | Alkali and acid solutions | active reagent mass = solution mass x certified active mass fraction | Solution mass; certificate concentration | kg active reagent | `eu-fdm-bref-2019` |
| `calc_final_energy` | Refinery energy screen | total final energy = purchased electricity + purchased heat + fuel lower-heating-value input + net imported steam energy; keep carrier rows available | Metered carrier quantities; heating values; steam enthalpy; exported energy | MWh final energy per tonne refined oil | `eu-fdm-bat-2019` |
| `calc_oil_phase_closure` | Oil-bearing inputs and outputs | closure = (refined oil + oil contained in co-products + oil contained in wastes + measured oil losses) / crude-oil input x 100 | Crude-oil input; output masses; measured oil contents; identified losses | Oil-phase mass closure percent | `mass-balance-identity` |
| `calc_physical_allocation` | Remaining shared burdens | allocation fraction for output i = net mass of marketable output i / sum of net masses of all marketable outputs | Measured refined-oil and marketable co-product masses | Output-specific allocation fractions summing to 1 | `eu-pef-2021`; `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and crude-oil input | Preserve named oil source, species or commercial designation, low-erucic status when claimed, grade, route, pretreatment state, and applicable specification for every contributing batch. | Product specification; certificate of analysis; supplier declaration; batch genealogy |
| `dq_measurement` | Mass, water, energy, chemicals, and outputs | Use calibrated measurement where material; document resolution, conversion factors, stock corrections, and uncertainty; estimates shall be separately flagged and sensitivity-tested. | Calibration certificate; meter register; reconciliation; uncertainty record |
| `dq_temporal` | Published average | Use at least 12 representative consecutive months or a complete declared campaign; explain shutdowns, abnormal batches, and seasonal or feedstock shifts. | Production calendar; batch list; maintenance and exception log |
| `dq_completeness` | Foreground inventory | Reconcile all measured crude-oil, chemical, energy, and water records to the selected production basis and explicitly assess every omitted or unreconciled balance for environmental significance. | Completeness reconciliation by flow family; omission register; reviewer sign-off |
| `dq_route_and_site` | Technology and geography | Identify chemical or physical refining, actual degumming, neutralisation, bleaching, and deodorisation configuration, vacuum and wastewater systems, site integration, and geography. | Process flow diagram; equipment list; site description; operator confirmation |
| `dq_source_currency` | External ranges and method rules | Record source edition and retrieval date; treat BAT ranges as QA screens and reassess applicability after a material technology, feedstock, or regulatory change. | Source register; applicability review; change log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | Reference flow | The reference output UUID shall be `e30cf6ff-7dfb-4972-affc-6cab3ae17283`, its quantitative flow property shall be Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, and the normalized amount shall be exactly 1 kg. | |
| `validation_product_scope` | Product identity | Reject a package that does not declare named oil source, grade, refining route, crude-oil pretreatment, geography, period, and bulk delivery state, or that represents a crude, hydrogenated, interesterified, volatile, blended, or biodiesel product outside this scope. | `codex-cxs-210-1999`; `unsd-cpc-v3-2025` |
| `validation_route_inventory` | Process completeness | Chemical refining shall include collected records for degumming or neutralisation, bleaching, and deodorisation. Physical refining shall include collected records for adequate pretreatment or degumming, bleaching, and distillative deacidification or deodorisation. Bypassed steps require explicit justification. | `eu-fdm-bref-2019` |
| `validation_mass_closure` | Oil-phase mass balance | Investigate oil-phase closure outside 95-105 percent; do not force closure by changing the fixed reference output or hiding unmeasured residues. The interval is a provisional QA tolerance, not a permitted process loss. | `mass-balance-identity` |
| `validation_bat_screens` | Annual stand-alone refinery totals | Flag, but do not automatically reject, final energy outside 0.1-0.45 MWh/t oil or net water consumption outside 0.15-0.9 m3/t oil. Confirm installation type, boundary, route, and operating context before concluding that data are erroneous. | `eu-fdm-bat-2019` |
| `validation_coproduct_allocation` | Co-products and wastes | Allocation fractions shall sum to 1 within rounding; every included co-product shall have measured mass and documented beneficial destination, while every excluded residue shall be linked to waste treatment without an allocation credit. | `eu-pef-2021`; `eu-fdm-bref-2019` |
| `validation_no_double_count` | Upstream and downstream datasets | Do not duplicate seed cultivation, crushing or extraction burdens contained in the crude-oil dataset, direct emissions already represented in purchased-energy datasets, or wastewater treatment both on site and in an off-site treatment dataset. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for stand-alone refinery-gate refined named oil |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology and translation review and publication |
| allowed_use | Product and process LCA requiring bulk refined rape, colza, canola, or mustard fixed oil at the refinery gate when geography, period, grade, route, upstream crude-oil dataset, and allocation are compatible |
| excluded_use | Crude or virgin oil; farm-gate seed; integrated crushing and refining without explicit boundary expansion; hydrogenated or interesterified oil; biodiesel; volatile mustard oil; packaged retail oil; comparative food-safety or legal-conformity claims without separate verification |
| required_metadata | PCR id and version state; reference-flow UUID; named oil source and low-erucic status where applicable; grade and specification; chemical or physical route; crude-oil pretreatment and upstream dataset; geography; technology; production period; bulk delivery state; co-product status and allocation; wastewater treatment; data owner and review state |
| required_quality_disclosure | Foreground share; measurement and estimation shares; temporal coverage; completeness by flow family; mass closure; energy and water BAT-screen result; omitted flows; provisional reasoned ranges used; source applicability; allocation sensitivity; unresolved UUIDs |
| update_trigger | Material change in feedstock identity or origin, refining route or equipment, energy or water system, co-product destination, allocation, product specification, regulation, site geography, or normalized major inputs or outputs beyond documented uncertainty or process-control limits |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-210-1999` | `standard` | Codex Alimentarius, CXS 210-1999, Standard for Named Vegetable Oils, official standard listing last modified 2024 and official text; https://www.fao.org/fao-who-codexalimentarius/codex-texts/list-standards/en/ ; retrieved 2026-08-10 | Rapeseed, low-erucic or canola, and mustardseed oil identity; edible-oil applicability and product specification linkage |
| `unsd-cpc-v3-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 explanatory notes, subclass 21642; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf ; retrieved 2026-08-10 | Classification context and refined named-oil product boundary |
| `eu-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf ; retrieved 2026-08-10 | Chemical and physical refining sequence; degumming, neutralisation, bleaching, and deodorisation; reagent ranges; co-products, residues, and emissions |
| `eu-fdm-bat-2019` | `standard` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, especially Section 10 oilseed processing and vegetable oil refining; https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj ; retrieved 2026-08-10 | Stand-alone refining energy and water QA screens; monitoring and environmental-performance context |
| `eu-pef-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, Annex I; https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 ; retrieved 2026-08-10 | Multi-functionality hierarchy, allocation disclosure, material completeness, data collection, and quality principles |
| `mass-balance-identity` | `method_factor` | Mass conservation identity applied to the measured oil phase of the foreground refining train | Reference normalization, oil-phase closure, and physical mass allocation calculations |
