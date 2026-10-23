---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonia-in-aqueous-solution
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Bulk aqueous ammonia by closed absorption

## 1. Scope and Applicability

This method covers a declared bulk aqueous-ammonia grade produced by combining separately supplied manufactured anhydrous ammonia and purchased high-purity deionised water in a closed absorption/blending system, concentration adjustment, indirect cooling where used, water-only vent recovery, quality acceptance, storage and loading to plant gate. hill-process-2021 supports the production and QC sequence; yara-solution corroborates gas dissolution and bulk delivery independently. No source grade, density, recipe, yield, energy use or certification becomes a universal default.

Exclude anhydrous ammonia as final product, ammonium salts, UAN/APP or formulated multi-nutrient fertilizer, cleaning formulations with additives, recovered waste-derived ammonia, high-purity electronic purification trains, packaged consumer products, distribution and use. Direct ammonia synthesis belongs to the separately linked upstream ammonia dataset. This boundary requires purchased indirect cooling where cooling is imported, offsite wastewater treatment, and no foreground combustion; on-site cooling utility manufacture, direct water discharge, acid scrubbing, nitrogen blanketing, refrigerant losses or any additional chemical need a documented atomic-flow extension when present. A use label alone never creates another PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonia-in-aqueous-solution |
| classification_refs | CPC 3.0 34652; proposed narrower production-route scope; acceptance pending |
| covered_products | Bulk aqueous NH3 solution, no added solute, declared measured concentration |
| excluded_products | Anhydrous ammonia and incompatible routes/formulations listed in section 1 |
| representative_product | Actual accepted SKU; no default concentration |
| production_route | Closed absorption of manufactured anhydrous ammonia in purchased DI water |
| market_state | Bulk aqueous liquid at plant gate, net solution mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared aqueous ammonia solution |
| How much | 1 kg accepted net as-supplied whole solution |
| How well | Actual NH3 assay, water, impurities and acceptance specification; temperature and density recorded |
| How long or cycle | One matched site, grade, route and stock-accounting period through actual plant-gate handover |
| reference_flow_link | aq_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Aqueous ammonia `058124f8-5e84-4070-b6c0-4bacac3a0024` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Site and period; grade and measured NH3 mass fraction; water and impurities; net solution basis; acceptance Q; density temperature method; feed route and provider; stock/rework burdens; cooling service reference; electricity region voltage and delivery mix; emissions media and wet/dry gas basis; waste receiver; allocation; plant-gate condition |

Required qualifiers must be declared in dataset metadata, process notes or reference-flow description. Missing qualifiers make the package incomplete. NH3-active mass and nitrogen mass are companion subledgers, not alternate reference outputs.

## 4. Measurement and Unit Rules

Q means accepted net supplied solution kg at actual plant-gate handover; retained closing finished stock is not Q. Returned parcels supplied again must not create duplicate cumulative accepted output; trace original lot returns, rework and handover. The physical balance retains all opening/closing feed, WIP and finished stocks and uses actual net plant-gate supply as reference output; a separate production tally is a reconciliation record, not an additional output to add to the same closing finished stock. Release opening-stock burdens or transfer burdens into closing stocks by lot and measured assignment; stock is neither a free purchase nor an omission.

Preserve complete raw-period totals for the same site/grade/state/route production pool: startup/shutdown, failed and zero-output runs, downtime, returns, rework, opening/closing WIP and stock with their carried burdens. Reconcile final acceptance, dispatch and stocks; count each accepted parcel once, excluding packaging and internal recirculation. Match burdens released from opening stocks and retained in closing stocks without deleting failed-run burdens or averaging successful-batch intensities. Divide the matched attributable pool totals by positive Q once after physical conversions. If the entire pool Q is zero, retain raw totals and stock/destination records; no normalized result exists. Separate incompatible pools by evidence, never solely to obtain a positive denominator.

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| measure_reference | aq_product | Mass | kg | Use 1 kg net accepted supplied whole solution; report Q in kg. Do not divide again by NH3 fraction. |
| measure_materials | nh3_feed, di_water, ammoniacal_liquor | Mass | kg | Whole purchased streams cross the boundary once. NH3, water and impurities are component subledgers, never duplicate purchases. Convert liquid volume using independently measured density at matching temperature and composition. |
| measure_energy | electricity, cooling_service | Net calorific value for electricity; delivered cooling duty for cooling | MJ | Electricity kWh × 3.6 = MJ. Cooling is integrated coolant mass × measured enthalpy difference; verify service basis independently of the database property label. |
| measure_emissions | nh3_air, water_air | Mass | kg | Use matching concentration × integrated gas volume, without extra duration; integrate flow rate over time only for rate records. Retain T/P and wet/dry basis and NH3 versus N convention. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received manufactured anhydrous ammonia, purchased DI water, electricity and imported indirect cooling with traceable upstream supply |
| starting_condition_role | Foreground conversion gate; cradle-to-gate result requires linked upstream supply and waste treatment |
| product_classification_scope | CPC 34652 route subset, not all possible recovered or formulated ammonia solutions |
| recursive_input_rule | Returned internal solution is a loop, not new upstream ammonia; purchased finished aqueous solution dilution is outside this route |
| upstream_dataset_requirement | Match ammonia synthesis route and purity, DI production and delivery, actual grid supply and cooling service; link waste destination without double counting |
| disclosure | Actual process configuration, grade, sources, stock burdens, omissions, medium, geography and utility provider conventions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | aq_absorption | Include receiving, actual vaporisation, absorption, concentration adjustment, indirect cooling, vent recovery, cleaning, failed runs, storage and plant-gate loading. Keep stage meters within one foreground process. | hill-process-2021; hill-handling-2021 |
| boundary_losses | aq_absorption | Close captured/recovered/disposed NH3 separately from atmospheric NH3; offsite wastewater treatment is a linked downstream activity, not a foreground air or water emission. Actual direct environmental discharge requires added receiving-medium species rows. | hill-handling-2021; lvic-balance-2007 |
| boundary_extensions | aq_absorption | Do not silently omit any actual utility, chemical, packaging, direct emission or waste outside the stated route. Extend with verified atomic rows and original method evidence or declare the case inapplicable. | lvic-balance-2007 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| aq_absorption | Closed absorption, acceptance and bulk dispatch | required | Declared route and actual conditional utilities | One integrated foreground unit; independent stage records and internal loops | per 1 kg reference flow |

### Process: Closed absorption and bulk dispatch (`aq_absorption`)

#### Inputs

##### Product flows

###### Ammonia, anhydrous (`nh3_feed`)

Measure the entire received manufactured anhydrous-ammonia stream, including its actual impurities. Production mix at plant; no native geography or CAS is declared. Retain supplier NH3 assay, water, physical state, temperature/pressure and upstream synthesis route; do not assume the record fixes any purity or burden.

- Selected flow: Ammonia, anhydrous `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Complete attributable period feed kg, converted from actual custody-transfer mass or compatible volume/density; normalize the matched raw period total by Q once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `hill-process-2021`

###### Deionised water (`di_water`)

Purchased deionised water, production mix at plant, ion exchange or reverse osmosis, CAS 7732-18-5; geography unspecified. Include absorption/dilution water and actual water for cleaning or water-only vent scrubbing. Supplier production and delivery remain upstream; no direct abstraction is implied.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Complete purchased/consumed period kg reconciled to stocks; distinguish incorporation, scrubbing and cleaning submeter totals without duplicating purchases; divide the matched raw period total by Q once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `hill-process-2021`

###### Alternating current (`electricity`)

Native identity is CN, <1 kV, consumption mix to user, grid-average supply. Apply this UUID only to that supply. Meter ammonia receiving/vaporisation when used, absorption pumps, controls, storage and loading. Imported cooling service energy is excluded from this meter after documented separation; another region/voltage needs a separately verified identity and provider.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete attributable meter kWh multiplied by 3.6 to MJ; preserve every meter and utility allocation before divide the matched raw period total by Q once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_electricity`
- Sources: `lvic-balance-2007`

###### Indirect process cooling service (`cooling_service`)

Conditional purchased indirect cooling duty at the process heat exchanger. Keep supply/return temperatures, pressure, coolant composition and integrated flow. A database NCV/MJ label does not establish delivered cooling duty; require the supplier service reference and matching enthalpy basis. No brewery energy range or coefficient of performance is a default. A facility without this service documents absence; on-site utility production requires a complete separately evidenced extension.

- Selected flow: Indirect process cooling service
- Flow property / unit: Delivered cooling duty / MJ; property and unit-group UUID unresolved
- Amount rule: Measured net delivered period cooling MJ from the supplier-compatible enthalpy difference times integrated coolant mass; retain heat losses and boundary; divide the matched raw period total by Q once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cooling`
- Sources: `lvic-balance-2007`

#### Outputs

##### Product flows

###### Aqueous ammonia (`aq_product`)

The only reference product output is accepted aqueous NH3 solution in bulk at plant gate, not pure NH3 or isolated NH4OH. Native CAS 1336-21-6, production mix at plant, no fixed concentration, treatment route or geography. State actual grade and NH3 mass fraction; product identity does not provide a supplier background dataset.

- Selected flow: Aqueous ammonia `058124f8-5e84-4070-b6c0-4bacac3a0024`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_product`
- Sources: `hill-process-2021`

##### Waste flows

###### Ammonia-containing aqueous cleaning liquor (`ammoniacal_liquor`)

One aqueous waste stream combines compatible captured spill, water-scrubber purge and cleaning liquor only where actually collected in the same receiver. Keep incompatible streams as separate added atomic exchanges. Record whole wet kg, NH3-equivalent/total N and water separately, receiver and treatment; neither an ammonia-nitrogen index nor unrelated industrial wash water is its identity. Internal recovered solution never crosses this boundary twice.

- Selected flow: Ammonia-containing aqueous cleaning liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Complete exported wet waste kg and independently assayed component kg, including failures and spills; no offsite-treatment emissions booked at this foreground outlet; divide the matched raw period total by Q once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `hill-handling-2021`

##### Elementary flows

###### ammonia (`nh3_air`)

CAS 7664-41-7, emissions to air, unspecified subcompartment, as kg NH3. Include actual stack, fugitive, tank breathing, relief, loading and maintenance losses after control. Document the receiving-air location; a known finer compartment needs the corresponding verified flow. Air is external ambient air, not indoor exposure. No correction flow, default positive emission or regulatory reporting percentage is used.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Independent measured/modelled NH3 period kg using calibrated concentration and matching integrated gas volume; rate is integrated over duration only when it is a rate. Never derive both NH3 and water loss from one residual; divide the matched raw period total by Q once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `hill-handling-2021`

###### water vapour (`water_air`)

CAS 7732-18-5, emissions to air unspecified, water vapour only. Measure net process water added to outgoing gas above incoming moisture on compatible wet/dry and temperature/pressure bases; liquid entrainment is a different exchange. No freshwater discharge or water withdrawal is represented by this flow.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Independent humidity/condensate and integrated gas records give net period emitted kg; phase change does not create reaction water; divide the matched raw period total by Q once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `lvic-balance-2007`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | aq_absorption | Preserve whole physical input/output and internal-loop masses before allocating environmental burdens. Recovered internal NH3/water is not a co-product or avoided purchase credit. Wet waste keeps whole physical mass. | lvic-balance-2007 |
| allocation_shared | aq_absorption | Prefer dedicated submetering and physical assignment. Where utilities are shared, document measured causal drivers and shares summing to one; retain unallocated totals and assign failed-run/stock burdens to the matched pool. No mass multiplier is applied to physical co-product output. | lvic-balance-2007 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | aq_absorption | aq_product | lot and stock ledger | lot IDs; accepted net kg; NH3 fraction; water; impurities; temperature; density; acceptance; dispatch; returns; opening/closing stock and WIP; carried burdens | Calibrated scales/tank meters, temperature-matched density, retained-sample assay, supplier CoA/site QC and unique lot acceptance ledger; Raw aggregation rule: Reconcile Q and each burden movement; a parcel is accepted once after rework, not once per pass | kg; kg/kg; deg C | each batch and stock close | Complete declared period including failures and zero-output runs | Same site grade state route pool and actual utility/waste boundaries | per 1 kg reference flow | Calibration, timestamps, chain of custody, original logs, inventory reconciliation and uncertainty |
| cp_materials | aq_absorption | nh3_feed; di_water | custody transfer and consumption | delivery mass; volume; density; T/P; NH3 assay; water and impurity fractions; source route; provider; opening/closing feed stocks; stage water meters | Calibrated transfer masses, compatible density/temperature and supplier assays; separate actual ingredient and cleaning-water meters; Raw aggregation rule: Reconcile complete external consumption and stocks, retain component subledgers without extra exchanges | kg; m3; kg/m3; deg C; kPa; kg/kg | each delivery and batch | Complete declared period including failures and zero-output runs | Same site grade state route pool and actual utility/waste boundaries | per 1 kg reference flow | Calibration, timestamps, chain of custody, original logs, inventory reconciliation and uncertainty |
| cp_electricity | aq_absorption | electricity | meter and utility assignment | meter start/end; kWh; voltage; grid region; delivered mix; utility boundaries; submeter shares; failed-run and standby usage | Calibratable submeters and bills; separate service-embedded energy from this unit electricity; Raw aggregation rule: Sum complete period meter differences before 3.6 conversion and pool assignment | kWh; MJ | continuous totals and period close | Complete declared period including failures and zero-output runs | Same site grade state route pool and actual utility/waste boundaries | per 1 kg reference flow | Calibration, timestamps, chain of custody, original logs, inventory reconciliation and uncertainty |
| cp_cooling | aq_absorption | cooling_service | service receipt and enthalpy measurements | provider; service reference; integrated coolant mass; flow rates and duration when used; supply/return T/P; composition; heat capacity/enthalpy method; losses; boundary | Calibrated heat meter and supply/return enthalpy with supplier service definition; NCV label is insufficient; Raw aggregation rule: Integrate rates only; sum net delivered duty, not both service and its embedded resources | kg; kg/s; s; deg C; kPa; kJ/kg; MJ | continuous and period close | Complete declared period including failures and zero-output runs | Same site grade state route pool and actual utility/waste boundaries | per 1 kg reference flow | Calibration, timestamps, chain of custody, original logs, inventory reconciliation and uncertainty |
| cp_waste | aq_absorption | ammoniacal_liquor | waste manifest and assay | wet kg; NH3 equivalent; total N; water; impurity species; sample time; compatible receiver; destination; return/recovery; stock | Weigh whole exported liquor, independently assay and retain transfer and treatment acceptance records; Raw aggregation rule: Sum exported wet kg once; internal recovery cancels; reconcile components and carried burdens | kg; kg/kg | each removal and stock close | Complete declared period including failures and zero-output runs | Same site grade state route pool and actual utility/waste boundaries | per 1 kg reference flow | Calibration, timestamps, chain of custody, original logs, inventory reconciliation and uncertainty |
| cp_emissions | aq_absorption | nh3_air; water_air | source test and event log | outlet; NH3 concentration; humidity in/out; gas flow rate/duration or integrated volume; T/P; wet/dry basis; controls; loading/relief/maintenance events; species convention; uncertainty | Calibrated source/fugitive and humidity methods covering vents, storage/loading and nonroutine events; retain nondetect handling; Raw aggregation rule: Sum nonoverlapping species/outlet/event amounts on compatible bases; no unexplained residual emission factor | kg; mg/m3; m3; m3/s; s; deg C; kPa | test campaign plus complete operating/event log | Complete declared period including failures and zero-output runs | Same site grade state route pool and actual utility/waste boundaries | per 1 kg reference flow | Calibration, timestamps, chain of custody, original logs, inventory reconciliation and uncertainty |

### Calculation Rules

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | all inventory rows | For Q > 0: x_i = B_i / Q. B_i is the matched attributable raw period total after unit conversion and opening/closing burden transfers. For Q = 0, no x_i. aq_product = 1 kg/kg. | B_i; Q | normalized exchange | lvic-balance-2007 |
| calc_components | nh3_feed, aq_product, ammoniacal_liquor | m_NH3eq = m_whole × measured w_NH3eq. N mass uses the declared stoichiometric N/NH3 molecular-mass ratio or independently measured N. Water = whole mass × independently measured water fraction, not an unmeasured balance remainder. | m_whole; w_NH3eq; measured water fraction; molecular mass convention | component subledgers | hill-process-2021; hill-spec-2020 |
| calc_balances | aq_absorption | For total physical mass and each element: external material input + all opening physical stocks = actual accepted net plant-gate supply + exported waste + environmental emissions + all closing physical stocks + documented residual. Q excludes retained finished stock. Electricity and indirect cooling services have separate energy ledgers; coolant circulation outside the process material boundary is not raw material input. Internal loops cancel. Retain NH3-equivalent, total N, H, O and water ledgers; investigate residuals against uncertainty without forcing closure. | all external mass; opening stock; closing stock; assays; emission records | physical balance residuals | lvic-balance-2007 |
| calc_water_species | aq_absorption | Aqueous acid-base speciation is not procurement of pure NH4OH or proof of net reaction-water production. Track actual dissolved NH3/NH4+ convention, evaporation/condensation and water phase separately. Do not invent reaction water, dry-organic generation or COD-derived water. Any additional reaction needs an independently measured/reaction-supported extent and balanced species ledger. | species convention; assays; phase measurements; reaction evidence if applicable | independent water and species ledgers | lvic-balance-2007; yara-solution |
| calc_gas | nh3_air, water_air | m = concentration × integrated compatible gas volume with stated unit conversion; if only gas rate exists, V = integral(rate dt). Water uses net outgoing minus incoming humidity. Never multiply integrated volume by time again or double-count measured and modelled outlets. | concentration; integrated volume; gas rate if used; duration if used; humidity; T/P; wet/dry basis | raw species kg | lvic-balance-2007 |
| calc_cooling | cooling_service | H_MJ = sum[m_coolant × (h_return - h_supply)] / 1000 for h in kJ/kg, net of boundary-consistent corrections. This duty is distinct from electricity input and an NCV label. No unmeasured COP converts it to electricity. | integrated coolant mass; supply enthalpy; return enthalpy; boundary corrections | raw delivered cooling MJ | lvic-balance-2007 |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Verify complete native identity, CAS when declared, all name components, medium, route, grade, geography and exact property/unit basis. A valid UUID does not establish background dataset compatibility. | Direct native records; provider declarations |
| quality_pool | all inventory rows | Complete matched period and stock/burden trail, retained failures, duplicate-free Q and unit conversions before one normalization are mandatory. | Original pool and stock reconciliation |
| quality_ranges | all inventory rows | No generic recipe, yield, energy, density or emission ranges are established. Collect site values and uncertainty; unresolved empirical range needs remain explicit, not fabricated priors. | Source scope and actual collection records |
| quality_completeness | aq_absorption | Verify the no-additive bulk route and conditional utility/emission/waste applicability, including nonroutine events. Ordinary auxiliary identity gaps require an explicit provider/flow resolution before the corresponding dataset link is complete. | Flow diagram; test reports; utility and receiver evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | aq_product | Require exactly one reference product output linked to aq_product, 1 kg whole accepted solution, measured grade/concentration and positive unique Q for normalization. Active NH3 and N remain analyses. | lvic-balance-2007 |
| validate_pool | all inventory rows | Check complete failed/zero-output/rework/WIP coverage, opening/closing burden transfers and once-only normalization; no Q = 0 per-kg result. | lvic-balance-2007 |
| validate_balances | aq_absorption | Check independently supported whole mass, N/H/O, component and phase-water ledgers before allocation. Investigate uncertainty/residuals; no unknown outlet and reaction water fitted together. | lvic-balance-2007 |
| validate_identity | all inventory rows | Recheck each exact native identity/property/unit and regional, grade, route, mix and receiving-medium limitation. Unresolved auxiliary links are explicit incompleteness, not silently matched substitutes. | lvic-balance-2007 |
| validate_no_duplicates | aq_absorption | Check internal recovery cancellation, whole solution versus components, imported service versus embedded resources, and waste transfer versus treatment emissions. Do not duplicate any physical or burden exchange. | lvic-balance-2007 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared aqueous ammonia supply to chemical or NOx-control users at matching concentration and delivery basis |
| allowed_use | Only the declared route/grade/site/period with complete linked upstream and waste scope |
| excluded_use | Pure ammonia mass, nutrient-only fertilizer service, consumer cleaning blend, recovered ammonia, downstream NOx abatement credit or generic route average |
| required_metadata | All reference qualifiers, native flow restrictions, provider compatibility, stock burdens, boundary and allocation |
| required_quality_disclosure | Coverage, raw measurements, uncertainty, missing auxiliary UUIDs/providers, unresolved range needs and residuals |
| update_trigger | Changed concentration, route, supply region/voltage, provider, cooling, emission control or waste destination |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD CPC 3.0 structure, 30 June 2025, row 34652; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification label only; no process, recipe or acceptance decision |
| hill-process-2021 | handbook | Hill Brothers, Ammonium Hydroxide Manufacturing Process, Rev.12/2021, p.1; https://www.hillbrothers.com/wp-content/uploads/2021/12/AmmoniumHydroxide-ManufacturingProcess-PP-12-7-2021.pdf | Closed water/anhydrous-ammonia production, concentration QC with temperature/specific gravity, and shipment CoA. Single producer example; no generic grade, recipe, yield, energy or certification requirement. |
| hill-spec-2020 | handbook | Hill Brothers, Aqua Ammonia Industrial Grade Product Specifications, Rev.12/2020, p.1; https://www.hillbrothers.com/wp-content/uploads/2021/01/AquaAmmonia-Industrial-Grade-PS-12-17-2020.pdf | Assay expressed as NH3 weight fraction; density depends on grade and temperature. Listed specification/density numbers are not defaults and do not demonstrate actual site compliance. |
| hill-handling-2021 | handbook | Hill Brothers, Aqua Ammonia General Safety and Handling, Rev.4/2021, p.1; https://www.hillbrothers.com/wp-content/uploads/2021/04/AquaAmmonia-GeneralSafetyHandling-4-26-2021.pdf | Tank vapour control, contained spills and loading-area collection support the loss boundary. Handling guidance provides no quantified emissions factor or assumed abatement performance. |
| yara-solution | handbook | Yara Australia, Ammonia solution, accessed 2026-10-16; https://www.yara.com.au/chemical-and-environmental-solutions/nox-reduction-for-industrial-plants/reagents-for-nox-control/ammonia-solution/ | Independent producer corroboration of ammonia-gas dissolution and bulk liquid delivery. Use-performance claims, concentration examples and logistics are not foreground quantity defaults. |
| lvic-balance-2007 | official_guidance | European Commission, LVIC-AAF BREF, August 2007, section 1.4.6, printed p.19 / PDF p.47; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf | General method for nitrogen, water and utility balances. Historical integrated-chemical context; examples are not aqueous-ammonia recipes, utility benchmarks or sector-specific BAT limits. Collection and normalization formulas here are PCR accounting rules, not copied plant quantities. |
