---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.compression-moulded-nbr-seals
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Compression-moulded unbonded NBR seals from purchased uncured compound


## 1. Scope and Applicability

Applies to factory manufacture of one specified SKU of unbonded, unreinforced, uncoated, solid NBR elastomer seal, including O-rings and moulded gaskets, from purchased ready-to-cure sulfur-curable compound by electrically heated compression moulding and manual tear trimming. The reference gate is newly quality-released net seal mass at the Chinese factory, with removable packaging reported separately. Actual material grade, geometry, cure schedule and acceptance tests must be collected; no recipe, temperature, cycle time, yield, density, service life or emission factor is supplied as a default. This is a mass-based manufacturing reference, not proof of functional equivalence between seal designs. The producer whitepaper establishes compression and manual trimming; the producer plant page confirms NBR/seal capabilities but does not prove every listed material/process combination. [trelleborg-custom-rubber; trelleborg-reynosa]

Exclude hard rubber/ebonite, latex-dipped gloves, tyre manufacture/reclaim, primary NBR polymerisation, uncured compound manufacture, extruded tube/profile, conveyor belt, coated textile, die-cut purchased cured sheet, injection/transfer moulding, metal/thermoplastic/fabric inserts, bonded seals, silicone/HNBR/EPDM substitutes, solvent coating and cryogenic/grinding deflashing. Such routes require independent applicability review and their own actual exchanges. No chemical-sector BREF or tyre trial recipe is transferred to this rubber conversion route. [epa-rubber-2008]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.compression-moulded-nbr-seals |
| classification_refs | CPC 3.0:36270; proposed narrower; acceptance remains external |
| covered_products | Specified unbonded solid sulfur-cured NBR O-ring or moulded gasket SKU |
| excluded_products | Hard rubber and routes excluded in section 1 |
| representative_product | A specified manually trimmed compression-moulded NBR O-ring |
| production_route | Purchased uncured compound receipt → preform preparation → electric compression cure → cooling → manual tear trim → inspection → quality release and actual packing |
| market_state | Quality-released finished solid elastomer seal, at plant CN; intended for assembly installation, not installed service |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared seal geometry and material for a specified sealing duty |
| How much | 1 kg net newly quality-released seals |
| How well | Actual SKU drawing, dimensions/tolerances, cure condition, hardness, defect and application-specific acceptance tests; no generic pressure rating |
| How long or cycle | A matched complete reporting period; service life and replacement frequency require application evidence |
| reference_flow_link | product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sealing elements `a9943e4e-1a21-412c-859e-df09a2b5ee6f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | SKU/drawing; NBR grade/formulation and sulfur cure; unbonded/unreinforced/uncoated state; geometry/tolerances; cure/trim/inspection; actual supplier and facility CN; low-voltage electric route; net new release Q; period/WIP/FG inherited burdens; packaging and dispatch gate |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Net seal mass excludes removable packaging; weigh the accepted specified SKU with calibrated tare subtraction. Count/volume records require measured SKU-specific net mass/density; no assumed item mass. All inventory amounts use per 1 kg reference flow. |
| state_compatibility | water; electricity; compound | actual row reference property | kg; MJ | Preserve actual native reference properties and reference units; secondary properties are not universal density/energy factors. Formula basis, active content and whole-mixture supply mass must remain distinct. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased ready-to-cure NBR compound accepted at factory; formulation, cure system, water/solvent and incoming burden identity declared |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | Only moulded NBR seals within 36270; no whole-leaf or hard-rubber claim |
| recursive_input_rule | Purchased cured seals are inputs with their own full upstream datasets; they cannot be reclassified as uncured compound or new manufacturing output. Internal preforms/WIP are linked transfers, not recursive new supply. |
| upstream_dataset_requirement | Link composition-compatible cradle-to-gate compound, electricity, water and packaging providers plus actual inbound transport. Without provider compatibility the quantitative model remains incomplete; UUID identity alone is insufficient. |
| disclosure | Actual factory, technology, period, cohort, incoming state, cut-offs, missing identities, provider limits and separate WIP/FG/packing/dispatch ledgers |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_line | seal_line | Include preparation, electric press heating and hydraulics, all cure/cool-down emissions, cooling, manual trim, inspection, actual packing and quality release. Exclude post-release warehouse/dispatch operations from this production gate while retaining their independent physical and carried-burden ledgers. Keep stage-specific meters and physical links within one integrated process; do not duplicate an intermediate reference product. Add actual maintenance materials, cleaners, release agent, compressed-air imports, refrigerant, transport, waste and additional emitted species as individually measured atomic rows before quantitative use. A named card is not a universal recipe. | trelleborg-custom-rubber; epa-rubber-2008 |
| boundary_stock | seal_line | Q is newly quality-released net production, never Q plus closing FG. Preserve opening/closing WIP quantities, compositions and complete inherited burdens; subtract closing WIP burdens and carry them forward, include consumed opening-WIP burdens, and include actual cohort rejects/rework. Released FG is an output of this gate even when stored: carry its full burdens in the FG ledger without subtracting it from Q. Dispatching opening FG is not new Q. Keep actual net/gross shipments and removable packaging attached to WIP/FG/shipments in independent physical ledgers; internal links balance equally at both ends. | ilcd-handbook-2010 |
| boundary_air | all air rows | Map measured species and receiving compartments individually. These two organic cards are conditional examples, not an exhaustive emission list. Screen the actual supplier formulation, cure system, residual monomers, auxiliaries and controls; record each detected or justified release. Total VOC/TOC is a reconciliation observation, not another additive elementary mass beside its constituents. Determine actual particulate presence; where present add measured disjoint particle-size bins, captured dust waste separately, never nested totals. No on-site combustion is assumed; actual combustion requires a separate fuel/boiler boundary and primary measurement. | epa-rubber-2008; epa-method18-2017 |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| seal_line | Integrated compression moulding, trim and release | required | Within declared route; retain stage ledgers | foreground | 1 kg reference flow |

### Process: Integrated seal manufacture (`seal_line`)

#### Inputs

##### Product flows

###### Purchased uncured NBR seal compound (`compound`)

One supplied solid compound, including its actual filler, curatives and process aids. Collect supplier formulation/grade, NBR fraction, additive identities, cure system, carrier water/solvent and acceptance records. It is neither pure NBR polymer nor a tyre compound. The whole supplied compound crosses this boundary once; its incorporated constituents are not added again as foreground inputs. Require a composition-compatible upstream compound dataset; unresolved UUID does not remove its burdens.

- Selected flow: Uncured sulfur-curable NBR seal compound
- Flow property / unit: Mass / kg
- Amount rule: Measured raw cohort numerator reported once per reference flow under section 8; retain the row-specific applicability and unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `trelleborg-custom-rubber`; `epa-rubber-2008`

###### Metered press and auxiliary electricity (`electricity`)

Chinese consumer-side grid-average electricity below 1 kV only, matching the native voltage, supply location and route. Include electric press heat, hydraulics, preparation, extraction ventilation, cooling and actual finishing/inspection/handling attributable to the released cohort. Record machine states, warm-up, idle and rejected cycles. Meter kWh; convert to MJ with the physical unit identity 1 kWh = 3.6 MJ. The native property is Net calorific value; it does not authorize a fuel heating-value conversion. Verify actual supply and provider boundary before use; do not apply this UUID to medium/high voltage or a specific generation technology.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured raw cohort numerator reported once per reference flow under section 8; retain the row-specific applicability and unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `trelleborg-custom-rubber`

###### Cooling-loop make-up water (`water`)

Conditional on an actual water-cooled system. This treated municipal-water identity includes industrial supply; it is not direct environmental abstraction, deionized water or a cooling service. Meter fresh external make-up, not internal recirculation. Record actual quality and provider. Convert measured liquid volume with measured temperature-dependent density, not the native secondary screening coefficient as a universal density. Air-cooled lines document absence.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Measured raw cohort numerator reported once per reference flow under section 8; retain the row-specific applicability and unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `trelleborg-reynosa`

###### PE protective liner (`film`)

Only actual single-material PE film, CAS 9002-88-4; verify grade, additives, thickness and supplier background. Preserve the physical film identity despite the native luggage-classification defect disclosed in the manifest. Weigh film attached to the quality-released cohort and actual packaging losses; split any adhesive, closure, label or other polymer into its own row. No PET equivalence is inferred from its mention as a competing material.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Measured raw cohort numerator reported once per reference flow under section 8; retain the row-specific applicability and unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `trelleborg-custom-rubber`

###### Corrugated shipping carton (`carton`)

Only if used: one complete actual corrugated carton, excluding separately inventoried liner. Collect fibre mix, coatings, adhesives, board structure, tare and provider. Do not assume the fixed primary/recycled-fibre composition of an available database carton. A generic packaging bundle cannot replace this specific box.

- Selected flow: Corrugated paperboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Measured raw cohort numerator reported once per reference flow under section 8; retain the row-specific applicability and unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `trelleborg-custom-rubber`

#### Outputs

##### Product flows

###### Quality-released finished NBR seal (`product`)

The sole reference output. The broad native identity covers O-rings/gaskets/seals, at plant CN and intended for installation during assembly. Here it is strictly one unbonded, unreinforced, uncoated, solid sulfur-cured NBR seal SKU made by compression moulding, manually tear-trimmed, quality released at the factory. It is not an installation service, hard rubber, metal gasket or assembled bonded component. Q counts newly quality-released net seal mass once, excluding removable packaging and pre-existing finished stock; finished warehouse transfers and shipments do not create another reference output.

- Selected flow: Sealing elements `a9943e4e-1a21-412c-859e-df09a2b5ee6f`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_release`
- Sources: `trelleborg-custom-rubber`; `trelleborg-reynosa`

##### Waste flows

###### Discarded uncured NBR compound (`uncured_scrap`)

Actual contaminated, expired or unusable uncured compound leaving for a specified receiver. Record actual formulation, moisture, contamination and treatment acceptance. Reusable clean preforms returned inside the same line are internal physical transfers, not waste exports, avoided production credits or new purchased compound.

- Selected flow: Uncured NBR seal-compound scrap for external treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured raw cohort numerator reported once per reference flow under section 8; retain the row-specific applicability and unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `trelleborg-custom-rubber`

###### Cured flash and rejected seals (`cured_scrap`)

Actual solid cured NBR flash and rejects leaving as waste, with composition, contamination and receiver conditions. The native broad waste includes non-tyre rubber products and has no tyre-only treatment restriction; it does not prove a recycling technology or credit. Keep uncured scrap distinct. Cured trim cannot return as uncured compound by simple milling; any actual reclaim transformation needs a separately measured process and full burdens.

- Selected flow: Waste rubber `b4818cb7-cbef-403a-9fc3-a12fe8baf092`
- Flow property / unit: Mass / kg
- Amount rule: Measured raw cohort numerator reported once per reference flow under section 8; retain the row-specific applicability and unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `trelleborg-custom-rubber`; `epa-rubber-2008`

###### Cooling-water blowdown to treatment (`cooling_blowdown`)

Only actual blowdown exported to a treatment operator. Measure water and dissolved/suspended constituents, additives, contamination, mass/volume, receiver and treatment route. It is a technosphere waste transfer, not direct freshwater emission, not manganese-residue wash water and not clean condensate. If an actual outlet goes directly to the environment, replace this transfer with separately characterized liquid water and each measured pollutant in its actual receiving medium; do not count both for the same water.

- Selected flow: Cooling-loop blowdown water for external treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured raw cohort numerator reported once per reference flow under section 8; retain the row-specific applicability and unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-rubber-2008`

##### Elementary flows

###### Acetone crossing to outdoor air (`acetone_air`)

Conditional screening card, not a claim that every NBR cure emits acetone. Use only when actual formulation/process screening and analyte-specific measurement establish CAS 67-64-1 crossing the facility boundary to unspecified outdoor air. Include captured outlet and fugitive release once, after actual controls; do not use indoor, water, soil, long-term or correction flows. Native identity has no fossil/biogenic split; it is chemical species mass, not carbon equivalent.

- Selected flow: acetone `08a91e70-3ddc-11dd-9520-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured raw cohort numerator reported once per reference flow under section 8; retain the row-specific applicability and unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-rubber-2008`; `epa-method18-2017`

###### Carbon disulphide crossing to outdoor air (`cs2_air`)

Conditional on actual detection or a justified compound-specific balance for CAS 75-15-0 from the actual sulfur cure system; no generic factor or positive release is prescribed. This is carbon disulphide, not carbon dioxide or hydrogen sulfide. Confirm unspecified outdoor-air receiving compartment and analyte-appropriate detector/recovery. Do not subtract a capture amount again from a post-control measured outlet.

- Selected flow: carbon disulphide `08a91e70-3ddc-11dd-9245-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured raw cohort numerator reported once per reference flow under section 8; retain the row-specific applicability and unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-rubber-2008`; `epa-method18-2017`

###### Water evaporated to outdoor air (`water_vapour`)

Only actual water evaporation crossing to unspecified outdoor air from the declared cooling/conditioning system. Establish it from measured water balance and stock changes with uncertainty; unexplained imbalance is not evaporation. Do not invent stoichiometric water from sulfur crosslinking. Native water-vapour records assigned to water or soil are rejected for this outlet.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured raw cohort numerator reported once per reference flow under section 8; retain the row-specific applicability and unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-rubber-2008`


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | seal_line | Use submetering and actual batch/cycle records to separate this SKU and direct flows first, including warm-up, idle, rejects, extraction and cooling. If remaining shared burdens require allocation, test determining physical causality with measured press time/state/energy relationships; identical mass alone does not prove causality. Only the causally inseparable remainder may use documented market-value allocation under the attributional ILCD hierarchy, with all affected outputs, prices, period and sensitivity. No arbitrary physical/economic choice or fixed share. | ilcd-handbook-2010 |
| allocation_physical | all exchanges | Keep full physical mass/water/carbon/constituent ledgers and separately record the attributed environmental-burden ledger. Allocation never scales an actual coproduct, waste, water or internal transfer amount in the physical process map. Saleable off-grade output requires an additional real product row, its actual gate/value and a justified allocation decision; disposal scrap receives no automatic substitution credit. Rework inside the line retains energy and material burdens. | ilcd-handbook-2010 |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | seal_line | product | release_and_stock | SKU; lot; drawing; NBR grade; cure system; test results; time; newly released net seal mass; tare; opening/closing WIP and FG quantities; return/rework histories; gross/net shipments |Quality and weighing staff use calibrated scales, remove packaging tare, reconcile unique release decisions and reversal links. Distinguish new release, reinspection and warehouse transfers; never count the same lot twice. Preserve inherited burdens by cohort in linked upstream records, separately from raw mass. Sum raw newly accepted net masses to obtain Q; retain raw WIP/FG/dispatch ledgers separately. Reporting basis is per 1 kg reference flow; no division during collection. | kg | each release and stock movement | one complete matched reporting period | factory release gate and linked WIP/FG stores | per 1 kg reference flow | calibration; lot release and reversal trace; balance closure |
| cp_material | seal_line | compound; uncured_scrap; cured_scrap | material_and_waste | row_id; lot; supplier; full formulation and NBR fraction; measured carbon content and dry/wet basis by constituent; sulfur/accelerators; filler/oil; moisture; carrier; net delivered/returned mass; opening/closing raw/WIP stock; internal preform returns; cured scrap; receiver |Material custodian and lab weigh each concrete supply and waste separately. Reconcile invoice, batch issue, formulation certificate, reuse/contamination state and waste acceptance. Record raw stage links with equal transfer mass; internal reuse has no second purchase. Preserve raw masses by row/lot and stock changes, without division. Reporting basis is per 1 kg reference flow. | kg | each receipt/issue/waste movement | same period and cohort as cp_release | receipt through quality release | per 1 kg reference flow | scale calibration; composition tests; receipts; receiver records |
| cp_energy | seal_line | electricity | meter_records | meter_id; voltage; supply location; provider boundary; start/end kWh; timestamp; press state; cycle count; hot/cold start; idle; rejected cycle; auxiliary share evidence |Energy engineer reads calibrated meters/submeters for press heat, hydraulics and all actual auxiliary stages. Separate imported supply from internal electricity distribution; preserve physical meter readings and supplier geography/voltage. Sum compatible raw meter intervals by stage and preserve shared-use evidence; no normalization. Reporting basis is per 1 kg reference flow. | kWh | each shift/batch and meter interval | same period and cohort as cp_release | production and attributable auxiliaries | per 1 kg reference flow | meter calibration; overlap check; supplier voltage definition |
| cp_water | seal_line | water; cooling_blowdown; water_vapour | water_balance | row_id; meter; temperature; density; volume/mass; quality; stock; internal circulation; blowdown; measured evaporation basis; additives; receiving operator/medium; sampling uncertainty |Water engineer meters external make-up and actual external outlets, records liquid inventory and any material moisture, verifies density and constituent assays. Identify transfers to treatment separately from direct emissions. Unexplained water balance remains a gap. Retain raw water quantities and states separately; exclude recirculation from external demand. No division; reporting basis is per 1 kg reference flow. | kg; m3; kg/m3 | each meter interval and representative water test | same period and cohort as cp_release | actual cooling and external water outlets | per 1 kg reference flow | calibration; water assays; receiver contract; balance uncertainty |
| cp_pack | seal_line | film; carton | packaging_records | row_id; component; supplier; composition; tare; delivered/returned/used mass; damaged packaging; packaging attached to WIP/FG; packaging on gross shipments; release-cohort link |Packing staff weigh each actual component and reconcile receipts, stocks, losses and packing on each cohort. Removable packaging is outside seal net mass but its attributable supply/loss burden remains included. Later shipping packaging is explicitly located beyond this production-release gate or brought into a declared extended boundary with separate records. Keep component raw masses, stocks and gross-shipment reconciliation independently; no normalization. Reporting basis is per 1 kg reference flow. | kg | each component delivery and packing batch | same period and linked cohort as cp_release | packing at release gate and separate downstream ledger | per 1 kg reference flow | tare tests; purchase specs; stock/dispatch records |
| cp_air | seal_line | acetone_air; cs2_air; actual additional species | speciated_emission_records | species/CAS; row_id; emission point; medium; recipe/cure; sampling interval; concentration; compound-vs-carbon basis; exhaust volume/flow; T/P; wet/dry basis; detection limit; blanks; calibration; recovery; control state; uncaptured route |Environmental engineer and competent laboratory survey actual formulation/cure/auxiliaries, select analyte-appropriate sampling and calibrated standards, and retain measured post-control outlets and justified fugitives separately. Method 18 scope excludes polymeric, polymerizing and very low-vapour-pressure analytes; use validated alternative methods for excluded species/particles. Preserve nondetects and uncertainty; no universal half-detection-limit substitution. Retain raw species concentration, compatible exhaust state/volume and operating-time strata separately. No normalization or duplicate captured/fugitive totals; reporting basis is per 1 kg reference flow. | kg/m3; m3; h; kg | representative cure/cool/idle states and each actual recipe/control change | same period and cohort as cp_release | all actual stacks and fugitive facility-boundary paths | per 1 kg reference flow | full lab reports; standard recovery; operating-state representativeness; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_q | product | Q = sum of newly quality-released net seal mass, with linked reversal corrections; Q > 0. Do not add opening/closing finished stock or dispatches to Q. | cp_release | Q | trelleborg-custom-rubber |
| period_burdens | all rows | Construct each raw cohort numerator A_i in its matching exchange unit before normalization; inherited burdens mean the complete same-flow inventory vector embedded in each WIP cohort, not an added scalar impact score: actual attributable period exchanges + inherited burdens of consumed opening WIP - complete burdens carried by closing WIP. Preserve corresponding physical constituent/water balances and internal transfers; do not subtract released FG or multiply physical outputs by allocation shares. Keep prior-released returned FG/rework burdens separately and avoid creating new Q for reinspection. Retain all attributable exchanges from failed or rejected batches, rework, warm-up, idle and zero-output intervals in the complete matched-period cohort numerator; selecting only successful production intervals must not discard these burdens. | cp_release; cp_material; cp_energy; cp_water; cp_pack; cp_air | A_i | ilcd-handbook-2010 |
| physical_balances | raw physical ledgers | For production material, water and carbon independently: opening raw/WIP stock + actual external inputs + actual incoming rework = closing raw/WIP stock + all actual released physical outputs + actual external waste/emission outputs. Use measured constituent/carbon fractions on compatible wet/dry bases and include residual uncertainty, never force closure into an invented emission. Newly released Q is one released output; prior-released FG rework is segregated with its original cohort and is not new Q. Separate FG ledger: opening FG + new-release receipts + actual FG returns = actual dispatches + closing FG + actual FG losses/rework transfers. Track attached packaging separately. These are physical ledgers before allocation, not scaled burdens. | cp_release; cp_material; cp_water; cp_pack; cp_air | reconciled raw ledgers | ilcd-handbook-2010 |
| energy_units | electricity | A_MJ = 3.6 × A_kWh; apply only to electrical energy on the same meter boundary, then include in the raw cohort numerator. | cp_energy | A_MJ |  |
| liquid_mass | water; cooling_blowdown | A_kg = V_m3 × rho_kg_per_m3 for the actual measured liquid state; retain temperature, quality and uncertainty. | cp_water | A_kg |  |
| air_species | each measured air species | For compatible species-mass concentration c and exhaust volume V, A_species = sum(c × V) over actual operating-state intervals plus independently measured/justified uncaptured releases. If using volume flow, integrate c × F × dt. Convert lab units explicitly; match T/P/wet-dry state; carbon-equivalent concentration requires species-specific conversion. Do not sum total VOC/TOC and constituent masses. | cp_air | A_species | epa-method18-2017; epa-rubber-2008 |
| report_once | all non-reference exchanges | x_i = A_i / Q; A_i is the complete attributed raw cohort numerator in the row unit, Q is the newly quality-released seal mass in kg. Perform this division once only, after unit conversion, WIP burden reconciliation and justified allocation. Reference output is 1 kg; all reported exchange amounts use per 1 kg reference flow. Raw collection protocols perform no division. When Q is not positive, retain the complete raw numerator, stock and operating-period records for review; do not divide, report a zero-burden normalized dataset, or borrow a positive denominator from a different period or cohort. | A_i; Q; cp_release | x_i | ilcd-handbook-2010 |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_raw | all exchanges | Use real site/SKU/supplier measurements, matched time coverage and documented uncertainty; missing values are not defaults or zeros. Collect full formulation and all material/air/water outputs before declaring a complete model. | Raw records linked to cp_release cohort |
| dq_native | all UUID rows | Flow identity and compatible quantified background are separate checks. Retain current source/version, full native limitations, medium/property/unit chain, provider geography/voltage/composition and explicit unresolved issues. | Native readback and supplier evidence |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference and all rows | Verify specified NBR/sulfur cure, unbonded geometry, compression/electric route and manual trimming. Resolve each real exchange identity with exact native name/CAS/state/route/medium/property/unit and compatible provider before quantitative use; an auxiliary UUID gap stays explicit. Reject substituted tyre, hard-rubber, bonded, alternate-polymer or wrong-voltage records. | trelleborg-custom-rubber; trelleborg-reynosa |
| validate_balance | seal_line | Check Q against unique new releases and net mass; audit raw material/constituent, water, WIP, FG, packaging and dispatch ledgers separately, with uncertainty. Internal links cancel once. Preserve full physical coproduct/waste outputs and distinct burden allocation. Any unclosed balance or missing actual species/provider makes the quantitative data package incomplete, not zero. | ilcd-handbook-2010 |
| validate_measurement | all inventory | Require raw records, calibration, composition/provider compatibility, stage coverage, correct unit conversions and single final normalization in both languages. Conditional absence needs route/measurement evidence; nondetection needs detection limits and uncertainty. Do not infer lifecycle approval, functional equivalence or a completed site inventory from this authored method. | epa-method18-2017; ilcd-handbook-2010 |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_process_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing burdens of the specified route/SKU with provider and measurement completeness disclosed |
| excluded_use | Whole 36270 coverage, hard rubber, other cure/polymer/forming routes and service-life/functional equivalence claims |
| required_metadata | Reference qualifiers; factory/period; release gate; stock and cohort links; provider boundaries; all actual flows; justified allocation; unit conversions |
| required_quality_disclosure | Authored method requires independent scientific review. Foreground measurements and auxiliary identities/providers may remain unavailable; disclose those gaps and do not present an incomplete quantitative dataset as validated. |
| update_trigger | Changed NBR grade/formulation/cure, forming/trim route, supply voltage/provider, release gate, measured species, allocation or original-method evidence |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| trelleborg-custom-rubber | handbook | Trelleborg Sealing Solutions, Optimizing the Production of Custom Rubber Components, undated publisher whitepaper, pp.5 and 9. https://www.trelleborg.com/seals/-/media/tss-media-repository/tss_website/services-and-tools/technical-library/whitepapers/mnr_customrubberpart_whitepaper.pdf | Compression preforms, heat/pressure and manual tear trimming; alternate routes distinguished. No recipe, quantity or settings defaults. |
| trelleborg-reynosa | handbook | Trelleborg Sealing Solutions, Reynosa Manufacturing Capabilities, undated official page snapshot 2026-10-16, Strengths/Products/Materials. https://www.trelleborg.com/de-de/seals/about-us/manufacturing-capabilities/reynosa | Producer NBR and seal capabilities; one plant, no cross-product recipe or quantitative generalisation. |
| epa-rubber-2008 | official_guidance | US EPA, DRAFT Final AP-42 Section 4.12 Manufacture of Rubber Products, November 2008, pp.4.12-2, 4.12-9, 4.12-16–17. https://www.epa.gov/sites/default/files/2020-10/documents/d04s12.pdf | Historical process and measurement limitations, sulfur-containing NBR example only. No recipe, numerical settings, emission factors, generic nondetect rule or tyre spray use adopted. |
| epa-method18-2017 | official_guidance | US EPA Method 18, Measurement of Gaseous Organic Compound Emissions by Gas Chromatography, Internet text 8/2/2017, sections1–2 and full method. https://www.epa.gov/sites/default/files/2017-08/documents/method_18.pdf | Analyte-specific identification/calibration and analytical exclusions; historical Internet text is not a claim of current legal compliance. No emission presence or factor established. |
| ilcd-handbook-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA – Detailed guidance, First edition March 2010, sections7.9.2–7.9.3, PDF pp.275–277 and 283. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision and physical-causality-first allocation hierarchy, transparent inventory accounting. Cohort stock accounting is this PCR operational rule, not an industrial default. |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version3.0 Structure, 30 June2025, code36270. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Broad classification context only; does not create PCR identity or establish accepted coverage. |
