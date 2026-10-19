---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ground-calcium-cyanamide-fertilizer
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Ground calcium cyanamide fertilizer from carbide nitridation

## 1. Scope and Applicability

This method addresses ground, ungranulated calcium cyanamide fertilizer made by nitriding purchased technical calcium carbide with separated gaseous nitrogen, followed by cooling, grinding and bulk delivery at the factory gate. Technical product contains actual residual lime, carbon and carbide; it is not assumed to be pure CaCN2. The producer original distinguishes powder from pearled product (`alzchem-route`). The chosen foreground starts at purchased carbide and nitrogen; it does not copy the producer's integrated site boundary.

Exclude pearled or nitrate-enriched formulations, aqueous cyanamide, urea/AN/CAN, ammonium sulphate, arbitrary nitrogen-fertilizer blends, lime-urea synthesis, and pure reagent CaCN2. No field efficacy, avoided liming credit, soil emissions or fertilizer-use advantage is quantified. A broader classification label does not establish one collective manufacturing process.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ground-calcium-cyanamide-fertilizer |
| classification_refs | CPC 3.0 34619, proposed narrower only; independently confirm residual membership. |
| covered_products | Bulk ground technical calcium cyanamide fertilizer; declared actual composition. |
| excluded_products | Granulated/enriched mixtures; aqueous cyanamide; reagent grade; other nitrogen fertilizers. |
| representative_product | Ground lime-nitrogen fertilizer, not a fixed commercial SKU or assay. |
| production_route | Purchased carbide + separated gaseous N2; nitridation, cooling, grinding and bulk dispatch. |
| market_state | Unpackaged powder; net as-dispatched mass at declared moisture. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply declared ground calcium cyanamide fertilizer at factory gate. |
| How much | 1 kg net as-dispatched powder, excluding transport containers. |
| How well | Lot certificate declares total N, cyanamide-N, other N species, moisture, residual carbide, free lime/carbon and particle size; no universal assay. |
| How long or cycle | One declared production campaign and factory-gate delivery; no agronomic service duration. |
| reference_flow_link | finished_powder |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Nitrogen fertiliser `fc45dbd4-a3a4-420d-849b-a370b5261a84`; broad identity restricted here to bulk ground calcium cyanamide fertilizer. |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Route; bulk powder state; actual SKU/grade and lot; product versus N mass; total N and N species; moisture; residual CaC2; free lime/carbon; particle size; site and period; supplier background bases; electricity geography/voltage. |

Missing qualifiers make the foreground reference incomplete. The N content is a separately reported property, not a replacement reference denominator.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | finished_powder | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net as-dispatched powder mass; collect using cp_product; subtract transport tare. Keep moisture and nitrogen assay on the same lot basis. |
| nutrient_basis | finished_powder | Mass | kg | Record kg N separately using measured lot mass and measured N mass fraction. Never substitute kg N for kg fertilizer or assume pure CaCN2 conversion. |
| gas_basis | nitrogen_in | Mass | kg | Use calibrated mass delivery, or volume with documented T/P, wet/dry basis, composition, compressibility and supplier reference conditions; no database density default. |
| power_basis | electricity_in | Net calorific value | MJ | Preserve actual metered kWh and document electrical-energy conversion 1 kWh = 3.6 MJ. NCV is the platform property label, not a combustion assumption. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased technical calcium carbide and separated gaseous nitrogen received at nitridation plant. |
| starting_condition_role | foreground_start |
| product_classification_scope | Ground calcium cyanamide subset; no whole-leaf manufacturing claim. |
| recursive_input_rule | Same-category purchased powder remains an external input with its own upstream dataset; separate regrinding from nitridation; never recurse indefinitely. |
| upstream_dataset_requirement | Link compatible carbide, N2, electricity and water providers; include their upstream burdens once. Integrated carbide or air separation requires separately measured expansion, not omission or duplicated purchased inputs. |
| disclosure | Disclose site, period, stock changes, operating/upset states, utility supply, dust recycling, purge destinations and upstream exclusions. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | foreground | Include receipt, grinding of carbide, nitridation, cooling, product grinding, extraction, indirect cooling if installed, waste transfer and bulk dispatch as one measured foreground unit. Keep stage meters and material balances. | alzchem-route, jrc-cww-2016 |
| boundary_upstream | carbide_in | Carbide manufacture is an upstream electrothermal process. BREF carbide figures are not nitridation defaults. Do not model upstream recovered CO as a nitridation product or add upstream CO2 again. | jrc-lvic-s-2007 |
| boundary_complete | foreground | Maintain a species/utility/residue screen. Additional actual fuel, chemical, packaging, pollutant or cooling additive requires its own atomic row and verified identity before a complete dataset is claimed; do not infer absence from this draft list. | jrc-cww-2016 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| nitridation | Carbide nitridation and powder finishing | required | Declared purchased-carbide powder route | foreground | finished_powder |

### Process: Carbide nitridation and powder finishing (`nitridation`)

#### Inputs

##### Product flows

###### Calcium carbide for nitridation (`carbide_in`)

Weigh technical calcium carbide charged; assay CaC2, free lime, carbon, moisture and impurities. No Bayer-route UUID is assigned.

- Selected flow: Calcium carbide for nitridation
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable campaign exchange / accepted net powder kg; collect using cp_material
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `alzchem-route`, `jrc-lvic-s-2007`

###### Nitrogen (`nitrogen_in`)

Meter delivered gaseous N2 from air separation, including purge and unreacted gas in the nitrogen balance; reconcile measured mass or documented gas-state conversion.

- Selected flow: Nitrogen `67bb2ea6-2fd8-43c5-b227-bca12040b773`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable campaign exchange / accepted net powder kg; collect using cp_material
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `alzchem-route`

###### Alternating current (`electricity_in`)

Meter all reactor heating, grinding, cooling circulation, extraction and bulk handling. Selected identity applies only to China grid-average customer-side 1-35kV; verify actual supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable campaign exchange / accepted net powder kg; collect using cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `alzchem-route`

###### Water, tap (`cooling_water_in`)

Meter purchased tap-water makeup for indirect cooling only if installed; exclude internal circulation. Record actual water source and measured density for volume conversion.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable campaign exchange / accepted net powder kg; collect using cp_water
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-cww-2016`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Nitrogen fertiliser (`finished_powder`)

Accepted ground calcium cyanamide fertilizer powder measured under cp_product. The selected broad nitrogen-fertilizer identity is physically inclusive, formulation unspecified; it does not establish pure CaCN2 or a provider. Source Fertilizer,N quantities and their unclarified nutrient/product mass basis are not adopted. One foreground output preserves actual stage measurements.

- Selected flow: Nitrogen fertiliser `fc45dbd4-a3a4-420d-849b-a370b5261a84`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `source_rule`
- Collection protocol: `cp_product`
- Sources: `alzchem-route`

##### Waste flows

###### Dust (`dust_out`)

Weigh collected cyanamide-bearing dust only when transferred to an external waste receiver; record composition, residual carbide, moisture and acceptance. Internally returned dust remains internal, not an emission.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable campaign exchange / accepted net powder kg; collect using cp_residue
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `jrc-cww-2016`

###### Indirect cooling-water purge to off-site treatment (`cooling_purge`)

Meter actual indirect-cooling purge transferred to a treatment operator, if present; preserve destination, composition, biocide use and treatment boundary. Direct environmental discharge requires separately speciated elementary rows.

- Selected flow: Indirect cooling-water purge to off-site treatment
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable campaign exchange / accepted net powder kg; collect using cp_water
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-cww-2016`

##### Elementary flows

###### ammonia (`ammonia_air`)

Measure NH3 released beyond control equipment to outdoor air, unspecified subcompartment; report molecular NH3 mass, not ammonia-N. Assess moisture-related conversion; no positive default or historic reduction factor.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable campaign exchange / accepted net powder kg; collect using cp_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `alzchem-route`, `jrc-cww-2016`

###### acetylene (`acetylene_air`)

Screen residual-carbide contact with moisture and measure any resulting C2H2 actually released to outdoor air, unspecified subcompartment. Occupational concentration is not a factory emission load.

- Selected flow: acetylene `4d9a8790-3ddd-11dd-911f-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable campaign exchange / accepted net powder kg; collect using cp_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `icsc-cyanamide-2006`, `jrc-cww-2016`

###### particles (PM2.5) (`pm_fine_air`)

Measure escaped particles with aerodynamic diameter at most 2.5 micrometres after controls, including documented fugitive sources, to outdoor air unspecified.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable campaign exchange / accepted net powder kg; collect using cp_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`

###### particles (PM2.5 - PM10) (`pm_coarse_air`)

Record only the nonoverlapping fraction above 2.5 and at most 10 micrometres, to outdoor air unspecified. If comparable cumulative PM10 and PM2.5 measurements are used, subtract PM2.5; never add this row to cumulative PM10.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable campaign exchange / accepted net powder kg; collect using cp_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`

###### particles (> PM10) (`pm_large_air`)

Record escaped particles above 10 micrometres to outdoor air unspecified; derive by total minus PM10 only for comparable matched measurements. Missing size fractions remain unknown, not zero.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable campaign exchange / accepted net powder kg; collect using cp_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | nitridation | Keep the physical mass, nitrogen and carbon balances before burden allocation. Reaction carbon retained in powder is part of its composition; internal dust return is not a co-product. Do not multiply physical outputs by allocation shares. | alzchem-route, jrc-cww-2016 |
| allocation_subdivide | nitridation | Use stage meters and campaign-specific records to separate other production. No default co-product credit or allocation ratio is supplied. If an external co-product actually arises, document its identity, receiver, physical balance and reviewed allocation decision before modelling its burden. | jrc-cww-2016 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | nitridation | finished_powder | weighing and assay | lot; gross; tare; net powder; moisture; total N; cyanamide-N; nitrate/ammonium/urea N; residual CaC2; lime; carbon; particle size; opening/closing stock; unique new acceptance/return/rework lot links; failed/zero-output lots; opening/closing WIP mass/composition and carried burdens | Calibrated net acceptance weighing and representative lot analyses; count each newly accepted physical lot once after rework/withdrawals. Independently reconcile acceptance against dispatch, returns and opening/closing finished stock; retain WIP mass/composition and associated burdens across periods without omission or duplicate counting. | kg | each lot | complete declared campaign | same powder line and grade | per 1 kg reference flow | calibration; sampling method; assay uncertainty; stock ledger |
| cp_material | nitridation | carbide_in; nitrogen_in | foreground measurements | input lot; grade; supplier; delivered and charged mass; stocks; gas state; assay | Calibrated scales and gas mass meters; reconcile charges, delivery and inventory. Record gas conversion and supplier conditions if volumetric. | kg | each lot or operating mode; continuous meters where available | same complete campaign as cp_product | all attributable stages within selected foreground | per 1 kg reference flow | weighing tickets; calibration; supplier assays; gas basis |
| cp_energy | nitridation | electricity_in | foreground measurements | meter start/end; stage; operating hours; grid voltage; geography; provider; shared loads | Read dedicated electricity meters; quantify justified shared loads and reconcile invoices. Preserve kWh and MJ conversion. | kWh | each lot or operating mode; continuous meters where available | same complete campaign as cp_product | all attributable stages within selected foreground | per 1 kg reference flow | meter calibration; load attribution; provider boundary |
| cp_water | nitridation | cooling_water_in; cooling_purge | foreground measurements | makeup; purge volume; density; T; circuit; receiver; composition; additives | Meter makeup and actual off-site purge separately; weigh or measure density for water mass. Reconcile circulation, evaporation and stock; identify all added chemicals. | kg; m3 | each lot or operating mode; continuous meters where available | same complete campaign as cp_product | all attributable stages within selected foreground | per 1 kg reference flow | calibration; circuit diagram; treatment contract; analyses |
| cp_residue | nitridation | dust_out | foreground measurements | dust collection mass; internal return; external dispatch; composition; residual carbide; receiver | Weigh separately collected solid dust and retained stocks. Match external manifests and receiver acceptance; do not use total dust capture as atmospheric emissions. | kg | each lot or operating mode; continuous meters where available | same complete campaign as cp_product | all attributable stages within selected foreground | per 1 kg reference flow | scales; transfer notes; composition and acceptance |
| cp_air | nitridation | ammonia_air; acetylene_air; pm_fine_air; pm_coarse_air; pm_large_air | foreground measurements | source; species/CAS; control train; concentration; gas flow; T/P; wet/dry; test duration; operating mode; size fractions; detection limit | Use matched outlet concentration and gas-flow measurements after controls for each operating mode; characterize fugitives independently. Convert species and flow to common gas conditions; integrate loads over covered operating hours and preserve uncertainty. Integrate a measured volume flow rate over its matched interval; with already integrated gas volume, concentration times that compatible volume is the load and is never multiplied by operating hours again. Retain the raw period load before the single campaign normalization. | kg | each lot or operating mode; continuous meters where available | same complete campaign as cp_product | all attributable stages within selected foreground | per 1 kg reference flow | test report; method; calibration; gas conditions; size method; operating coverage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_basis | all inventory rows | Define one complete same-site/product/grade/state/nitridation-route campaign pool. Retain raw period totals before burden assignment or division, including all attributable startup/shutdown, failed and zero-output batches, cleaning/losses, returns, rework and opening/closing WIP with carried burdens. Q is uniquely counted newly accepted net powder kg from cp_product; reconcile dispatch/stocks independently without a second stock correction. After numerator-unit conversion and justified burden assignment, divide each attributable total by the same positive Q once only; reference output is 1 kg. If Q = 0 preserve all raw totals and stock/fate records without per-kg results, invented output or excluded failed periods. | cp_product; cp_material; cp_energy; cp_water; cp_residue; cp_air | exchange per 1 kg reference flow |  |
| element_balance | nitridation | Reconcile whole measured wet streams and independent N/Ca/C/H/O and actual impurity inventories, including stocks/WIP and actual gas/liquid destinations, before allocation. CaC2 + N2 -> CaCN2 + C is an identity, not a yield/recipe, and generates no stoichiometric water; distinguish residual carbide, free carbon/lime and bound cyanamide carbon. For the screened residual-carbide/moisture pathway only where it actually occurs, CaC2 + 2 H2O -> C2H2 + Ca(OH)2 constrains species masses; independently evidence the actual reacted amount, water consumption and formed dry components. Keep measured moisture/free water and dry-component formation/consumption separate. Do not infer water, evaporation, conversion, product yield or missing species from COD or an unexplained closure residual. | cp_material; cp_product; cp_residue; cp_air | physical element balance before allocation | alzchem-route, jrc-lvic-s-2007, jrc-cww-2016, icsc-cyanamide-2006 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_basis | all inventory rows | Preserve measured basis, supplier product identity and background quantity compatibility independently. A valid flow UUID does not establish a complete provider dataset. | cp_material; cp_energy; cp_water |
| quality_unknown | all inventory rows | Unknown is not zero. Absence requires documented equipment/route and sampling evidence. Limits of detection are retained; no universal yield, moisture, density, composition or emission factor. | cp_air; cp_product |
| quality_period | nitridation | Cover startup, shutdown, normal operation and credible upsets in the campaign; explain unmeasured periods and their uncertainty. | cp_air; cp_energy; cp_product |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_powder | Require one powder output at 1 kg, complete qualifiers and resolved product-mass reference identity before usable guidance/dataset acceptance. A measurement pass does not resolve identity. |  |
| validate_balances | nitridation | Check physical mass/N/Ca/C and stock balances separately from allocated burdens; investigate residuals with uncertainty and detection limits. Internal transfers cancel at equal actual quantities. | jrc-cww-2016 |
| validate_emissions | nitridation | Verify post-control outdoor loads, molecular NH3/C2H2 bases and nonoverlapping particle bins. Do not add captured waste dust, cumulative PM10, or upstream carbide emissions again. Direct water discharge requires its own verified species and medium. | jrc-cww-2016, icsc-cyanamide-2006 |
| validate_completeness | all inventory rows | Reject complete-dataset claims with unverified reference/carbide/waste identity, unsupported conversion, unmeasured material pathway or unqualified provider. Independent scientific review remains required. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Compatible bulk ground calcium cyanamide fertilizer input, after identity and quality acceptance. |
| allowed_use | Declared site/period/assay and purchased-carbide route only. |
| excluded_use | Whole CPC leaf; granulated/enriched blends; pure substance or kg N substitution; use-stage claims; treating this unfinished draft as an accepted dataset. |
| required_metadata | Reference qualifiers; boundary; provider links; stocks; collection protocols; identity resolution; operating coverage. |
| required_quality_disclosure | Uncertainty; actual completeness; unresolved identities; conditional utility/waste identity; allocations and exclusions. |
| update_trigger | Route, assay, supplier, utility, dust treatment or monitoring change; identity clarification or new independent evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| alzchem-route | literature | Alzchem, Product calcium cyanamide, Manufacture / Types / Quality; https://www.alzchem.com/en/brands/perlka/product-calcium-cyanamide/ | Producer route and product-state distinctions; historic plant reduction, assay and temperatures are not universal defaults. |
| jrc-lvic-s-2007 | official_guidance | European Commission, LVIC-S BREF, August 2007, 7.2.1.1, pp.356-357 (PDF401-402); https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic-s_bref_0907.pdf | Upstream carbide manufacture and boundary distinction, and the residual-carbide/water reaction identity in §7.2.1.1; no historic energy/purity, actual hydrolysis extent or emission default. |
| jrc-cww-2016 | official_guidance | European Commission, CWW BREF, 2016, BAT2 pp.543-544 (PDF573-574); https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf | Horizontal chemical-sector stream inventory and monitoring, not fertilizer-specific factors. |
| icsc-cyanamide-2006 | official_guidance | ILO/WHO, ICSC1639 Calcium cyanamide, Notes; https://inchem.org/documents/icsc/icsc/eics1639.htm | Residual carbide/moisture acetylene screening, no release fraction or LCI factor. |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC3 Explanatory Notes, 30Jun2025, p.165; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 34619 residual label and adjacent identities only; narrower membership still requires controller decision. |
