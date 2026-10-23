---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.compounds-of-rare-earth-metals-of-yttrium-or-of-scandium
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
translation_status: canonical
---

# Cerium(IV) oxide powder from electric calcination of separated cerium carbonate hydrate

## 1. Scope and Applicability

This PCR covers one single-species dry CeO2 conversion route from purchased separated cerium carbonate hydrate, using electric heating in air and dry finishing. Actual mineral-carbon origin must be established for the carbonate; biogenic or captured-carbon precursors require separately identified carbon rows. It defines methods for future measured production, not an already measured factory inventory. Proof of carbonate/electric calcination is provided by nissan-ceria-2008; general dry unit-operation evidence is limited to jrc-sic-2007. No temperature, residence time, purity, yield, water ratio or energy quantity is prescribed from a historical example. All are actual grade/campaign records. The reference is the whole accepted powder in its supplied dry market state, including measured residual moisture and incidental impurities; it is not 1 kg pure-oxide equivalent. Verify CeO2 phase identity and declared lot assay before using the product UUID. A polishing end use alone neither establishes an exclusive polishing grade nor excludes an otherwise qualifying dry chemical powder; formulated surface-polishing preparations remain outside scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.compounds-of-rare-earth-metals-of-yttrium-or-of-scandium |
| classification_refs | CPC 3.0 34290; proposed narrower, subject to independent mapping acceptance |
| covered_products | Undoped CeO2 dry powder made from purchased separated Ce(III) carbonate hydrate by electric-air calcination and dry finishing |
| excluded_products | Mixed rare-earth compounds; Y/Sc compounds; Ce2O3; cerium salts as final products; doped or mixed oxides; formulated abrasives, sols and slurries; oxalate/nitrate/hydroxide routes; fuel-fired, humidified or wet-milling routes |
| representative_product | Accepted single-species cerium dioxide powder, CAS 1306-38-3; supplier grade and batch acceptance declared |
| production_route | Separated carbonate hydrate receipt -> electric calcination in air -> cooling -> dry milling/classification -> dry collection -> powder dispatch |
| market_state | Dry powder with measured residual moisture and purity; no intentional organic coating, boron brightener or carrier water |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply CeO2 powder as a chemical material, not a polishing service |
| How much | 1 kg accepted net supplied dry powder, excluding packaging |
| How well | Measured declared grade, CeO2 assay, residual moisture, impurity/particle-size/surface-area specification and receiving acceptance |
| How long or cycle | One declared factory dispatch; no assumed service lifetime |
| reference_flow_link | out_ceria |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Cerium oxide `b23ee368-01e2-4fcd-8e8f-e8115ee04555` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CeO2/Ce(III) distinction; dry supplied net powder mass; residual moisture; CeO2 assay and impurity basis; carbonate-hydrate speciation and carbon origin; actual mineral source and separation supplier; furnace/electricity voltage/atmosphere; lot, temperature-time history; particle size and surface-area acceptance; receiving use; packaging and dispatch gate; upstream provider quantity and allocation basis |

All required qualifiers belong in the data package metadata or equivalent product/process fields. Missing qualifiers mean an incomplete reference definition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| measure_powder | out_ceria | Mass | kg | Reference mass is accepted supplied dry powder net of packaging, with residual moisture measured; it is neither elemental Ce nor contained pure CeO2 mass. The assay and drying bases remain separate records. |
| measure_feed | in_carbonate | Mass | kg | Keep hydrated supplied mass, free-water mass, dry chemical mass and Ce-equivalent separate. Trace-metal/REO purity does not establish total chemical purity, hydration or a per-kg conversion. |
| measure_energy | in_electricity | Net calorific value | MJ | Retain the database property name and measured electrical energy. Convert kWh by the verified unit-group factor 3.6; do not interpret electricity as combustion fuel or furnace delivered heat. |
| measure_air | in_compressed_air | Volume | m3 | Provider reference m3, measured pressure/temperature and dry/wet composition must agree; an unidentified volume convention leaves the background link pending. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased separated Ce(III) carbonate hydrate at receiving gate, with actual producer, grade, hydration, water and Ce assay |
| starting_condition_role | foreground_starting_point |
| product_classification_scope | One cerium oxide subset of CPC34290, not generic rare-earth chemistry |
| recursive_input_rule | No cut-off for same-category intermediates or rework; disclose purchased oxide input if present and reassess route applicability |
| upstream_dataset_requirement | Traceable separated-carbonate provider per actual supplied kg, with supplier qualification, phase identity, hydration, free moisture, Ce assay and wet/dry/oxide-equivalent reference compatibility. Link the purchased precursor burden once for the measured quantity. Trace mine/concentrate, actual leaching acid/alkali, each extractant and diluent, solvent recovery, precipitation reagent, mother liquor, tailings, radionuclide-bearing residue and real coproduct destinations. Supplier operations remain background; explicitly expanding them replaces the corresponding linked burdens, never adds them again or treats them as zero. Each expanded upstream exchange is atomic; no generic rare-earth average substitutes for this species/route |
| disclosure | Report gate-to-gate inventory separately from linked upstream burdens. Missing producer/mineral/chemistry/provider-basis evidence prevents a complete cradle-to-gate claim; an unknown is never a zero |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | conversion | Include electricity, furnace auxiliaries, dry finishing, dry gas filtration, internal rework and dispatch packaging. Wet scrubbing, steam humidification, fuel heating, additives or slurry production require a separately evidenced route and atomic exchanges before use. | nissan-ceria-2008; jrc-sic-2007 |
| boundary_upstream | upstream_interface | Require actual upstream physical species and provider bases; historical mine flow diagrams demonstrate diversity, not a default plant recipe. Acid, alkali, each solvent and each residue remain separate flows in the linked supplier unit. | epa-ree-2012 |
| boundary_ledger | all_processes | Retain unallocated physical TotalMass and separate elemental C, H, O, Ce and every actual impurity-element ledger, including free/bound water, wet inlet/outlet air, purchased gas carriers, auxiliary water, full packaging/carriers, maintenance consumption, returns and stock changes. Match internal transfers at both ends. Pass-through air is recorded gross in the physical ledger; only net environmental exchanges enter the LCI, without counting the same oxygen or water twice. Shared upstream coproducts retain measured physical quantities. Keep a separate measured electricity/heat balance; allocation acts only on environmental burdens. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| ceria_conversion | Electric carbonate calcination and dry powder finishing | required | Declared carbonate-hydrate/electric/dry route | foreground | out_ceria |

Receiving and furnace loading -> electric calcination -> cooling -> dry finishing/classification -> dry-filter recovery -> dispatch. Maintain stage-specific meters, internal rework and dust return with equal quantities on each link; these stages are one foreground unit with one accepted product output. Upstream mineral separation is a required linked provider interface, not a fictional foreground ore input. Survey the actual plant before claiming completeness: cooling/cleaning water and its destination, lubricants, each maintenance material, filter replacements, returned/reusable packaging and every carrier gas or transport service require separate concrete exchanges and protocols when present. Dry-route scope does not prove auxiliary water or waste absence. Wet milling, wet abatement, additives or fuel-fired conversion require route reassessment rather than suppression of actual exchanges. Any purchased fuel or source gas in the supplier or auxiliary inventory retains native Volume/energy/mass reference, measured absolute P/T, wet/dry composition and background definition; calorific or secondary property coefficients do not supply a density. Do not invent a plant recipe, gas demand, decomposition yield, efficiency or generic equipment consumption.

### Process: Ceria conversion (`ceria_conversion`)

#### Inputs

##### Product flows

###### Cerium carbonate (`in_carbonate`)

Weigh purchased separated Ce(III) carbonate hydrate as supplied, excluding packaging. Declare hydration, free moisture, carbonate carbon origin, cerium assay and other rare earth impurities. CAS 54451-25-1 supports the hydrate; the database anhydrous formula is not a wet-mass conversion. Reject mixed rare-earth carbonate or oxycarbonate substitution.

- Selected flow: Cerium carbonate `773e491f-cd4b-4ae2-9a31-9f116e7f1aaf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_feed
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_feed
- Sources: nissan-ceria-2008; thermo-carbonate-spec; epa-ree-2012

###### Alternating current (`in_electricity`)

The selected native flow is CN, 1–35 kV, user-side consumption mix with grid-average supply. Use this UUID only for matching geography, voltage, market mix and provider reference; another location, voltage or contractual supply requires its own verified flow. Meter matching purchased alternating current for electric furnace heating, holding, cooling auxiliaries, dry milling, ventilation and dust collection. Record each stage separately and aggregate once. Electricity for any on-site compressor belongs here; do not also charge a purchased-air background for that compressor.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_energy
- Sources: nissan-ceria-2008; jrc-sic-2007

###### Compressed air (`in_compressed_air`)

Conditional purchased compressed air for pneumatic dry finishing or filter cleaning. Measure delivered volume and pressure; reconcile temperature, absolute pressure, moisture and compressibility with the provider cubic-metre reference. This UUID does not establish a normal-volume or useful-energy basis. No air demand is assumed for a mechanical mill.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: jrc-sic-2007

###### Porcelain firing crucible (`in_porcelain`)

Conditional porcelain firing crucibles when actually used for this electric-furnace route; measure replacements. Other actual firing-container materials require their own specific exchanges. Preserve composition, service cycles and contamination; charge only campaign consumption or a documented service-life share, not one new crucible per batch by default. Silicon-processing ceramic and quartz crucible records cannot establish this identity.

- Selected flow: Porcelain firing crucible
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_solids
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_solids
- Sources: nissan-ceria-2008

###### Polyethylene film (`in_pe_liner`)

Conditional single-material PE liner for powder dispatch; weigh net film used and rejects, identify resin grade and supplier. The physical film identity is retained despite a source classification error. Add each actual additional packaging component as a separate measured exchange; never include packaging mass in powder output.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_solids
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_solids

##### Elementary flows

###### oxygen (`in_oxygen`)

Record net oxygen incorporated from ambient air in carbonate oxidation, using measured precursor speciation and oxygen balance. Medium: Resources from air / Renewable element resources from air. Do not count all ventilation air as consumed oxygen, or count purchased-air oxygen a second time.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_balance
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_balance
- Sources: nissan-ceria-2008

#### Outputs

##### Product flows

###### Cerium oxide (`out_ceria`)

Accepted dry, undoped single-species CeO2 powder at factory dispatch, net of all packaging. Assay and residual moisture are measured for the declared grade. Calcination, cooling, dry finishing and packing form one foreground unit; stage meters are retained without a second same-UUID product output.

- Selected flow: Cerium oxide `b23ee368-01e2-4fcd-8e8f-e8115ee04555`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: cp_product
- Sources: nissan-ceria-2008

##### Waste flows

###### Dust (`out_collected_dust`)

Conditional externally transferred collected ceria-bearing dust. The broad waste-dust identity is limited here by measured CeO2 content, precursor/ceramic contamination, moisture, hazard classification and actual receiving treatment. Internally returned dust remains in the physical recycle ledger and is not an external waste or air emission.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_solids
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_solids
- Sources: jrc-sic-2007

###### Discarded off-specification cerium(IV) oxide powder (`out_offspec`)

Conditional discarded off-specification CeO2 powder, physically distinct from filter dust and spent crucibles. Weigh and assay the actual lot; identify receiver. Returned material is internal; a genuinely sold recoverable off-grade product must instead be a separately identified product exchange with its own acceptance specification.

- Selected flow: Discarded off-specification cerium(IV) oxide powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_solids
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_solids
- Sources: nissan-ceria-2008

###### Spent porcelain firing crucible (`out_spent_porcelain`)

Conditional externally transferred spent porcelain firing crucibles. Record ceramic composition, adhering cerium compound mass, moisture and receiving route. Exclude quartz crucible substitution and keep the ceramic and cerium components in the balance without double-counting another waste stream.

- Selected flow: Spent porcelain firing crucible
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_solids
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_solids
- Sources: nissan-ceria-2008

##### Elementary flows

###### Carbon dioxide from mineral-origin carbonate decomposition (`out_carbonate_co2`)

Carbon dioxide from decomposition of verified mineral-origin carbonate, emitted to outdoor air unspecified. Measure outlet CO2 and gas volume with matched dry/wet and temperature/pressure bases; reconcile carbonate carbon, retained carbonate, captured CO2 and stock change. Keep actual CO2 species, mineral/geologic carbon origin, receiving compartment and the selected LCIA channel separate. Fossil or biogenic labels are not inferred from the carbonate name. Fossil-labelled database rows lack explicit geogenic-carbon scope and are not adopted; emission mass remains required even while UUID/channel compatibility is unresolved.

- Selected flow: Carbon dioxide from mineral-origin carbonate decomposition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_balance
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_balance
- Sources: nissan-ceria-2008; jrc-sic-2007

###### water vapour (`out_water_vapour`)

Water vapour to outdoor air unspecified from precursor dehydration and free-moisture evaporation. Measure net outlet water, subtract incoming air humidity and reconcile feed water, product moisture, condensate and storage. Vapour is not a freshwater liquid discharge; actual condensate sent to treatment needs its own waste row.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_balance
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_balance
- Sources: nissan-ceria-2008

###### particles (PM2.5) (`out_pm25`)

Emitted particles with aerodynamic diameter at or below 2.5 micrometres, outdoor air unspecified, after collection controls plus separately measured fugitive releases. Retain filterable and condensable PM coverage; use Method 201A only within its dry stationary-source applicability. Unknown particle sizing is unresolved, not zero. PM fractions describe whole emitted particle mass, not captured Ce-bearing solids or dissolved Ce. For any additional chemistry-specific characterization, document actual speciation, compartment and whether the CF denominator is whole compound kg or elemental-Ce kg; retain that conversion separately and avoid duplicate physical mass or overlapping impact characterization.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_pm
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_pm
- Sources: jrc-sic-2007; epa-pm201a-2020

###### particles (PM2.5 - PM10) (`out_pm2510`)

Emitted particles above 2.5 and at or below 10 micrometres, outdoor air unspecified. Derive the exclusive fraction from compatible paired PM10 and PM2.5 measurements; do not also add the inclusive PM10 total. Measure dry milling, classification, filling and calciner outlets and fugitives.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_pm
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_pm
- Sources: jrc-sic-2007; epa-pm201a-2020

###### particles (> PM10) (`out_pmover10`)

Emitted particles above 10 micrometres, outdoor air unspecified. Require a compatible total filterable-PM measurement or validated direct fraction measurement; Method 201A PM10 alone does not quantify this row. Collected dust is excluded from this emitted fraction.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_pm
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_pm
- Sources: jrc-sic-2007; epa-pm201a-2020

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | environmental_burdens | Use dedicated stage and campaign meters first. Separate other grades, non-ceria products and shared utilities by measured attributable use under cp_burden. Dedicated ceria conversion has no assumed coproduct. |  |
| allocation_shared | inseparable_burdens | For genuinely inseparable upstream shared burdens, retain the provider allocation method and collection evidence. Use a demonstrated physical causal relationship where available; if none is defensible, disclose economic shares calculated from actual same-period net revenues and sensitivity, without a universal mass or price factor. |  |
| allocation_physical | physical_ledger | Allocation shares apply only to shared environmental burdens. Never multiply physical coproduct outputs, internal transfers, tailings, mother liquor or recovered solvent by the target-product share. Waste treatment is linked to actual receiver and status; no automatic avoided-product credit. | epa-ree-2012 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | ceria_conversion | out_ceria | primary measured records | accepted net supplied powder mass; residual moisture; measured CeO2 phase/assay and impurity basis; particle-size/surface-area acceptance; opening/closing stock; batch and grade | Calibrated net weighing excluding packaging; representative moisture and chemical assay tests with declared wet/dry denominator; phase identification sufficient to distinguish CeO2 from residual carbonate/oxycarbonate; reconcile dispatch and acceptance records | kg | Each lot/campaign and material change | Declared consecutive representative campaign; retain start/end and seasonal or idle limitations | Actual plant, supplier, grade and matched boundary | per 1 kg reference flow | Calibration, raw logs, analytical methods, uncertainty and traceable acceptance/provider records |
| cp_feed | ceria_conversion | in_carbonate | primary measured records | supplied mass; dry mass; hydration/free water; Ce assay; carbonate carbon and origin; lot; supplier; mineral and separation chain; impurities | Calibrated weighing, supplier primary records, phase/assay/moisture analyses and actual producer upstream data; trace chemical form and quantity basis independently of UUID identity | kg | Each lot/campaign and material change | Declared consecutive representative campaign; retain start/end and seasonal or idle limitations | Actual plant, supplier, grade and matched boundary | per 1 kg reference flow | Calibration, raw logs, analytical methods, uncertainty and traceable acceptance/provider records |
| cp_energy | ceria_conversion | in_electricity | primary measured records | stage meter start/end; furnace heating/hold/cooling; mill; ventilation; dry filters; compressor ownership; idle use; delivery voltage; CN/geographic supply; grid/contract mix; provider reference | Calibrated electricity meters and equipment logs, with campaign and shared-load reconciliation; convert measured kWh to MJ using 3.6 MJ/kWh | MJ | Each lot/campaign and material change | Declared consecutive representative campaign; retain start/end and seasonal or idle limitations | Actual plant, supplier, grade and matched boundary | per 1 kg reference flow | Calibration, raw logs, analytical methods, uncertainty and traceable acceptance/provider records |
| cp_air | ceria_conversion | in_compressed_air | primary measured records | delivered air volume; meter basis; absolute pressure; temperature; dry/wet composition; compressibility; supplier reference m3 | Trace calibrated delivery flowmeter and provider definition; transform volumes only with documented matched conditions; separate purchased air from on-site compressor electricity | m3 | Each lot/campaign and material change | Declared consecutive representative campaign; retain start/end and seasonal or idle limitations | Actual plant, supplier, grade and matched boundary | per 1 kg reference flow | Calibration, raw logs, analytical methods, uncertainty and traceable acceptance/provider records |
| cp_solids | ceria_conversion | solid_exchange | primary measured records | separate net mass for each row; composition; moisture; recovered/internal/external status; crucible service life; PE grade; receiver and treatment | Calibrated scales, purchasing and waste transfer records; assay ceria-bearing dust and adhesion; record actual stocks and reusable-container service cycles | kg | Each lot/campaign and material change | Declared consecutive representative campaign; retain start/end and seasonal or idle limitations | Actual plant, supplier, grade and matched boundary | per 1 kg reference flow | Calibration, raw logs, analytical methods, uncertainty and traceable acceptance/provider records |
| cp_balance | ceria_conversion | gas_species | primary measured records | full wet inlet/outlet air and gas composition/flow; absolute P/T; dry/wet meter basis; precursor/product/solid/liquid total mass and C/H/O/Ce/impurity assays; oxygen uptake; gas capture/condensate; carrier and auxiliary water; stocks | Calibrated gas monitoring and representative moisture/species analyses; reconcile gross physical TotalMass and all actual elements, then derive net environmental exchanges without double-counting gas carriers. Distinguish precursor mineral carbon from each fuel or other carbon source; no ideal yield, invented density or calorific coefficient replaces measurements | kg | Each lot/campaign and material change | Declared consecutive representative campaign; retain start/end and seasonal or idle limitations | Actual plant, supplier, grade and matched boundary | per 1 kg reference flow | Calibration, raw logs, analytical methods, uncertainty and traceable acceptance/provider records |
| cp_pm | ceria_conversion | size_fraction | primary measured records | filterable PM2.5; inclusive filterable PM10; compatible total filterable PM; condensable PM scope; stack gas volume; time; flow/temperature/moisture; fugitive sources; captured dust | Representative dry-source size-resolved sampling and gravimetric analysis under Method201A applicability; compatible total-PM method for >10 micrometres; assess condensables separately and avoid duplicate classification; include fugitive measurements; retain uncertainty | kg | Each lot/campaign and material change | Declared consecutive representative campaign; retain start/end and seasonal or idle limitations | Actual plant, supplier, grade and matched boundary | per 1 kg reference flow | Calibration, raw logs, analytical methods, uncertainty and traceable acceptance/provider records |
| cp_burden | ceria_conversion | shared_burden | primary measured records | dedicated meters; shared loads; physical causality; full physical coproduct output; same-period sales and net revenue; allocation method and sensitivity | Retain actual supplier allocation records and site submeter evidence, with separate unallocated physical and allocated environmental ledgers | native units | Each lot/campaign and material change | Declared consecutive representative campaign; retain start/end and seasonal or idle limitations | Actual plant, supplier, grade and matched boundary | per 1 kg reference flow | Calibration, raw logs, analytical methods, uncertainty and traceable acceptance/provider records |

Retain raw unallocated campaign totals before normalization. Use one matched route, supplied state, grade and representative period, including all attributable startup, shutdown, idle, failed, off-specification, zero-accepted-output and rework operations. Reconcile opening/closing work in progress and finished stocks with their accumulated inventory burdens, using documented carry-in/carry-out attribution without lost or duplicated burdens. Define strictly positive D as final accepted net supplied powder produced for that pool, reconciled with acceptance, dispatch and stocks; exclude final rejects and do not count returned, reworked and reaccepted powder twice. Divide each reconciled raw exchange total by D once under calc_reference. A complete period with D <= 0 requires a justified wider representative period or an incomplete result. Conditional exchanges require evidence of applicability or documented absence; no positive demand or zero emission is supplied by this PCR.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_reference | all inventory rows | For each exchange divide the measured attributable campaign quantity by the accepted net powder output in kg of the same grade and period. Output is the exchange per 1 kg reference flow; retain unallocated totals and stock reconciliation. Retain raw unallocated campaign totals before normalization. Use one matched route, supplied state, grade and representative period, including all attributable startup, shutdown, idle, failed, off-specification, zero-accepted-output and rework operations. Reconcile opening/closing work in progress and finished stocks with their accumulated inventory burdens, using documented carry-in/carry-out attribution without lost or duplicated burdens. Define strictly positive D as final accepted net supplied powder produced for that pool, reconciled with acceptance, dispatch and stocks; exclude final rejects and do not count returned, reworked and reaccepted powder twice. Divide each reconciled raw exchange total by D once under calc_reference. A complete period with D <= 0 requires a justified wider representative period or an incomplete result. Conditional exchanges require evidence of applicability or documented absence; no positive demand or zero emission is supplied by this PCR. | campaign exchange; accepted powder kg; cp_product | native numerator unit per kg |  |
| calc_assay | in_carbonate, out_ceria | Keep accepted supplied powder kg as the reference. For each material, free-moisture-excluded mass = supplied mass × (1 − measured free-moisture fraction); this does not remove structural hydrate water. Apply each assay only to its declared wet/dry or oxide-equivalent denominator. Precursor elemental Ce mass is measured Ce fraction × the matching assayed mass; any reported CeO2 equivalent is a bookkeeping equivalent, not actual oxide in carbonate. For verified product CeO2, Ce mass = contained CeO2 mass × A(Ce)/(A(Ce)+2A(O)), with documented atomic-weight edition; add measured Ce in any other actual species separately. Neither composition conversion defines yield or changes the reference denominator. | supplied mass; measured moisture/speciation and assay denominator; atomic weights; cp_feed; cp_product | free-moisture-excluded mass and separate elemental Ce | thermo-carbonate-spec |
| calc_balances | physical_ledger | Before allocation, reconcile gross physical TotalMass and each actual element C/H/O/Ce/impurity across all inputs, products, gas/particles, liquids, externally transferred solids, packaging/carriers and stock changes. Include wet inlet/outlet air, auxiliary water and maintenance consumption; keep net oxygen/water LCI exchanges distinct from gross carrier balances. Count internal returns at matching endpoints once; keep electricity/heat balance separate. Require measured chemical forms and hydration; ideal stoichiometry alone neither defines actual emissions nor plant yield. | cp_feed; cp_product; cp_solids; cp_air; cp_energy; cp_balance; cp_pm | physical and energy residuals with uncertainty |  |
| calc_pm | out_pm25, out_pm2510, out_pmover10 | Use exclusive filterable aerodynamic intervals: filterable PM2.5; filterable PM10 − filterable PM2.5; total compatible filterable PM − filterable PM10. Retain method uncertainty and require compatible simultaneous bases; a negative difference requires investigation. Keep separately quantified condensable PM outside these subtraction inputs; when applying Method201A §3.1, add it once to PM2.5 under that explicit convention. Disclose method scope. Do not add inclusive PM10, captured dust or condensable PM a second time. | cp_pm | exclusive emitted particle masses | epa-pm201a-2020 |
| calc_allocation | shared_burden | Allocated burden = dedicated measured burden + documented target share × inseparable shared burden. If an economic fallback is justified, target share = target net revenue / total net revenue of all actual coproducts in the same period. Preserve the full physical outputs; require sensitivity and treatment of non-positive revenue before calculation. | cp_burden | allocated environmental burdens only |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_primary | all inventory rows | Use actual primary measurements, grades and supplier-route data; disclose missing flow UUIDs, volume/provider bases and mineral-carbon identity. Record full-year representativeness limitations rather than claiming a survey not performed. | cp_product; cp_feed; cp_energy; cp_air; cp_solids; cp_balance; cp_pm |
| quality_balance | physical_ledger | Set TotalMass and all actual C/H/O/Ce/impurity-element and energy closure criteria from instrument and assay uncertainty; no invented universal tolerance. Explain discrepancies before completeness claims. | cp_balance; cp_burden |
| quality_sources | method_rules | Retain source-specific applicability: general SIC unit operations, producer patent case route, supplier catalogue basis and dry-stack PM measurement are different evidence roles; none supplies a generic recipe. | nissan-ceria-2008; jrc-sic-2007; thermo-carbonate-spec; epa-pm201a-2020; epa-ree-2012 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_flow | Confirm dry single-species CeO2, actual carbonate-hydrate/electric/dry route, grade assays and all qualifiers. A broad flow UUID does not validate supplier dataset quantity or energy basis. |  |
| validate_measurement | all inventory rows | Require one completed 1 kg product output and a common per-1-kg reference denominator in both languages, protocols and calculations. Keep water, impurity, oxide-contained mass, elemental Ce and packaging distinct. |  |
| validate_completeness | inventory | Reconcile all stages, idle/rework losses, dust controls, stock changes and actual extra exchanges. Each additional chemical, solvent, packaging, waste or emission is a separate row with a collection protocol. Unresolved UUID, provider basis or unmeasured fraction prevents complete dataset validation, not an assumed zero. |  |
| validate_particles | out_pm25, out_pm2510, out_pmover10 | Require non-overlapping fractions and explicit filterable/condensable/fugitive coverage. Water-droplet or unmatched total-PM sampling does not establish Method201A size fractions. Review uncertainty rather than forcing negative differences to zero. | epa-pm201a-2020 |
| validate_upstream | supplier_link | Verify actual mine and separation chain and provider reference quantity, with separate physical and burden ledgers. Shared rare-earth averages or historical flow-sheet product labels are not evidence of a specific Ce product. | epa-ree-2012 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground conversion process |
| downstream_use | secondary_dataset; background_dataset only after data completeness and applicable review |
| allowed_use | Declared carbonate-hydrate/electric/dry CeO2 route and grade; upstream linked only after provider-basis verification |
| excluded_use | Generic rare-earth/yttrium/scandium averages, fuel-fired or wet routes, mixed oxides, abrasive performance comparisons and slurry kg equivalence |
| required_metadata | CeO2/Ce(III) distinction; dry supplied net powder mass; residual moisture; CeO2 assay and impurity basis; carbonate-hydrate speciation and carbon origin; actual mineral source and separation supplier; furnace/electricity voltage/atmosphere; lot, temperature-time history; particle size and surface-area acceptance; receiving use; packaging and dispatch gate; upstream provider quantity and allocation basis |
| required_quality_disclosure | Actual campaign/site/grade, measured yield and assays, supplier and carbon-origin traceability, unresolved identities/provider bases, source limitations, balances, allocation and completeness |
| update_trigger | Changed precursor/source, hydration or assay basis, furnace/electricity/atmosphere, product grade, finishing, abatement, packaging, supplier or allocation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| nissan-ceria-2008 | literature | Nissan Chemical Industries, US7431758B2, 2008-10-07, original PDF page 7, columns 11–12, Examples 1–2; https://patents.google.com/patent/US7431758B2/en | Producer original confirms carbonate-hydrate/electric-furnace CeO2 powder route and distinguishes partially converted material. No example recipe, furnace schedule, yield, particle size or energy default is transferred. Slurry preparation is excluded. |
| jrc-sic-2007 | official_guidance | European Commission, SIC BREF August 2007, §§2.2.4 and 2.2.7.1, printed pp9/11, PDF pp39/41; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/sic_bref_0907.pdf | General calcination and dry grinding, energy and dust interfaces only; pigment-specific BAT limits, chemistry and factors are not transferred to ceria. |
| epa-pm201a-2020 | method_factor | US EPA Method201A, October 7 2020 publication, §§1.1–1.6, 2 and 3, PDF pp1–3; https://www.epa.gov/sites/default/files/2019-08/documents/method_201a_0.pdf | Stationary dry-source filterable PM sizing and limitations. Requires compatible total-PM method for >10 micrometres and separate condensable/fugitive coverage; no emission factors. Not a legal compliance declaration. |
| epa-ree-2012 | official_guidance | US EPA/600/R-12/572, December 2012 Revised, §§4.2–4.3 and Appendix C Figure C-1 continuation; https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100EUBC.TXT | Historical evidence of mineral/separation diversity and variable coproduct chemical forms; supports supplier traceability need, not a modern universal recipe, plant inventory or allocation fraction. |
| thermo-carbonate-spec | literature | ThermoFisher Scientific product specification, Cerium(III) carbonate hydrate 379402500, print 2026-10-14, PDF p1; https://assets.thermofisher.com/chem-specs-pdf/retrievePdf?countryCode=kr&erp_type=KR_E1_LCD&rootSku=37940&sku=379402500 | Confirms hydrate name/CAS and that trace-metal purity has a separate denominator. This catalogue grade is not assumed to be a factory input or total dry chemical purity; measure actual lot hydration, assay and water. |
