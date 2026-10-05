---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.non-energetic-weapon-environmental-manufacturing
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Complete new non-energetic weapon manufacturing environmental accounts

## 1. Scope and Applicability

Environmental manufacturing accounts for one declared complete new non-energetic weapon or firearm at its producer acceptance gate. Heavy and small product families share the reporting method, with separate configurations, actual chemical/waste interfaces and supplier gates. Scope covers procurement, actual site manufacturing environmental totals, conditional treatment/recovery, non-functional release records and delivery protection. No weapon design, construction/functional part list, manufacturing settings, recipes, assembly or operating instructions are provided.

Ammunition and energetic materials/charges or their processing; products with inseparable energetic contents; independently supplied parts; ceremonial/edged arms; used/refurbished products and restoration; use, functional/live-fire testing, deployment, storage after gate and end of life. An actual excluded factory activity is a disclosed coverage gap, not zero burden.

Partitions are environmental accounts, not a manufacturing sequence. HK monitoring and NYDEC heavy-site history support separate environmental interfaces; neither supplies current product quantities or a completed current closure. Require the current records described below. Do not infer chemical occurrence, completed chromium substitution or common intensity from public reports. The operating receipt-to-acceptance foreground is not complete cradle-to-gate without verified compatible upstream links and disclosed excluded contributions.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.non-energetic-weapon-environmental-manufacturing |
| classification_refs | CPC3.0 44720 and44730; proxy candidate context requiring scope review, not accepted mapping |
| covered_products | Environmental manufacturing accounts for one declared complete new non-energetic weapon or firearm at its producer acceptance gate. Heavy and small product families share the reporting method, with separate configurations, actual chemical/waste interfaces and supplier gates. Scope covers procurement, actual site manufacturing environmental totals, conditional treatment/recovery, non-functional release records and delivery protection. No weapon design, construction/functional part list, manufacturing settings, recipes, assembly or operating instructions are provided. |
| excluded_products | Ammunition and energetic materials/charges or their processing; products with inseparable energetic contents; independently supplied parts; ceremonial/edged arms; used/refurbished products and restoration; use, functional/live-fire testing, deployment, storage after gate and end of life. An actual excluded factory activity is a disclosed coverage gap, not zero burden. |
| representative_product | One accepted complete new non-energetic product identified by neutral configuration and delivery state |
| production_route | Non-operational environmental reporting gates: procurement/stock; actual site manufacturing accounts; conditional treatment/recovery accounts; acceptance mass/release; shared utilities; conditional protection. Heavy and small configurations remain separate |
| market_state | New complete non-energetic accepted product at declared manufacturer gate, with actual producer release required |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Environmental accounting of manufacturing a specified complete accepted non-energetic product |
| How much | 1 kg accepted net mass; per-unit exchanges normalized by measured M |
| How well | Same documented configuration/delivery state and controlled non-functional acceptance record; no operational equivalence or performance criterion asserted |
| How long or cycle | One actual manufacture/acceptance cycle; no lifetime, deployment or functional-use cycle assumed |
| reference_flow_link | accepted_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete new non-energetic weapon |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | neutral product family/configuration and accepted release identifier; complete new non-energetic delivery state; producer/site/reporting period; actual accepted quantity; positive net M kg, physical mass provenance and controlled acceptance record; packaging/fixture exclusion; environmental make/buy and subcontractor gates; chemical supply/SDS state and chromium analytical speciation when applicable; actual new-supply versus recovery/stock balances; wastewater/sludge/oily-chip receiver and wet/dry basis; causal shared allocation; omitted/withheld/excluded activities and upstream uncertainty |

Declare qualifiers in metadata or equivalent notes. One unit is one complete accepted product, not purchased stock or a separately delivered part. Permanent accepted contents are included; ammunition/energetic charges, testing consumables, transport packaging and removable fixtures are excluded from net M. Equal kg does not establish equal functional performance or comparability across product families.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `mass_record_provenance` | cp_mass | Mass | kg | Controlled acceptance mass must originate in current traceable physical weighing for the same delivered complete unit and measured tare. If the physical method uses separately weighed portions, require an independently checked complete mass reconciliation, traceable calibrated readings and inclusion/exclusion register; no design or functional-component list is published. Keep date, configuration, original method, uncertainty and signed release. Catalogue weight, theoretical density, rated capacity, shipping gross mass or an unreconciled sum cannot establish M. Future positive measured M is required; no mass assumed. |
| `energy_units` | each electricity row | Net calorific value | MJ | Use verified 1 kWh = 3.6 MJ conversion. Retain actual provider/voltage and metered scope including standby; do not substitute rated power or group-average intensity. Reconcile stage and common meters once. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received physical supplies and supplier manufacturing gates with opening/closing stocks |
| starting_condition_role | Receipt-to-accepted-product operating foreground; boundary_abstraction |
| product_classification_scope | Environmental manufacturing accounts for one declared complete new non-energetic weapon or firearm at its producer acceptance gate. Heavy and small product families share the reporting method, with separate configurations, actual chemical/waste interfaces and supplier gates. Scope covers procurement, actual site manufacturing environmental totals, conditional treatment/recovery, non-functional release records and delivery protection. No weapon design, construction/functional part list, manufacturing settings, recipes, assembly or operating instructions are provided. |
| recursive_input_rule | Separate purchased completed-product supplier burden from actual local contributions; never duplicate its contained material supply. Internal transfers/recovered stock remain circulation, not a second purchase. Each outsourced service and contained exchanges is counted once |
| upstream_dataset_requirement | Match actual item/material/chemical supply state, provider gate, reference property/unit, site/period and receiver. Unreviewable confidential interfaces remain gaps, not zero; reviewed upstream links required for extended coverage |
| disclosure | neutral product family/configuration and accepted release identifier; complete new non-energetic delivery state; producer/site/reporting period; actual accepted quantity; positive net M kg, physical mass provenance and controlled acceptance record; packaging/fixture exclusion; environmental make/buy and subcontractor gates; chemical supply/SDS state and chromium analytical speciation when applicable; actual new-supply versus recovery/stock balances; wastewater/sludge/oily-chip receiver and wet/dry basis; causal shared allocation; omitted/withheld/excluded activities and upstream uncertainty |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_accounts` | all partitions | Collect actual production environmental burdens, rework and rejects, shared controls and outsourced treatment at non-operational gates. Long-lived infrastructure/tooling and independent R&D are excluded from core operating foreground and disclosed. Functional/energetic tests and later lifecycle burdens are excluded with actual omissions disclosed; no silent complete-LCI claim. | `hk`, `nydec` |
| `boundary_interface_audit` | all actual exchanges | Cards are conditional atomic starting examples, not a weapon material recipe or complete inventory. Independently review every current safe environmental interface; add each actual supply, chemical, waste or released species separately with its physical identity. Undisclosed inputs cannot be omitted as zero. Do not disclose structure, technical settings, manufacture/assembly methods or functionality. |  |
| `boundary_water_waste` | treatment, recovery and receivers | Supplied water is technosphere input, not natural-water withdrawal or effluent. Track actual recovery/reuse internally and each final wastewater/sludge/oily-chip transfer at the receiving boundary. Discharged chemical species are distinct from gross waste. Historical contaminated groundwater, legacy soil remediation and indoor-air mitigation are separate activities, not current unit manufacturing emissions. | `nydec`, `epa` |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt` | Procurement and stock accounting | required | Each declared new non-energetic weapon or firearm | foreground | one accepted same-configuration finished unit, normalized using M |
| `site_manufacture` | Site manufacturing environmental accounts | required | Actual site manufacturing within declared gates | foreground | one accepted same-configuration finished unit, normalized using M |
| `surface` | Conditional surface-treatment environmental accounts | conditional | Only documented actual site surface-treatment burden | foreground | one accepted same-configuration finished unit, normalized using M |
| `acceptance` | Acceptance and net-mass accounting | required | Each accepted complete non-energetic product | foreground | one accepted same-configuration finished unit, normalized using M |
| `utilities` | Shared facility utility and waste accounts | required | Actual attributable facility services | foreground | one accepted same-configuration finished unit, normalized using M |
| `packing` | Conditional delivery protection accounts | conditional | Actual factory-gate shipping protection | foreground | one accepted same-configuration finished unit, normalized using M |

Linked accounts reconcile receipts/stocks, actual manufacturing totals, conditional treatment/recovery, accepted output, shared services and protection. They do not imply a production sequence. Separate heavy and small configurations, current waste interfaces and suppliers; no common default occurrence or quantities.

### Process: Procurement and stock accounting (`receipt`)

Record actual incoming physical products, supplier gates, stocks and returns. Each purchased item has its own environmental interface; public cards do not reveal or replace a complete confidential material register. No design or component function is specified.

#### Inputs

##### Product flows

###### Purchased cold-rolled non-alloy steel sheet (`steel_plate`)

Conditional actual supplier stock with grade and delivery state recorded; not a mandated material or design prescription. Excludes contained stock already represented by a purchased finished item.

- Selected flow: Purchased cold-rolled non-alloy steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_receipt.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_receipt`
- Sources: `hk`

###### Purchased wrought aluminium-alloy sheet (`aluminium_sheet`)

Only actual declared alloy grade, supplied sheet state and net issues; not pure aluminium or a universal product composition.

- Selected flow: Purchased wrought aluminium-alloy sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_receipt.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_receipt`
- Sources: `hk`

### Process: Site manufacturing environmental accounts (`site_manufacture`)

Assign actual shop-floor energy, material losses and pollution-control burdens to reporting partitions. These are environmental accounts, not a manufacturing sequence. Actual outsourcing and rework remain explicit; no technical operations, settings, geometry or assembly instructions are provided.

#### Inputs

##### Product flows

###### Purchased medium-voltage electricity (`electricity_site_manufacture`)

Only actual purchased supply at the declared voltage/site/time; use measured kWh converted to MJ through verified 3.6 MJ/kWh. On-site generation is not purchased electricity and requires separate actual accounts; subtract submeter totals from common ledger once.

- Selected flow: Purchased medium-voltage electricity
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_site_manufacture.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_manufacture`
- Sources: `hk`, `nydec`

#### Outputs

##### Waste flows

###### Discarded non-alloy steel sheet scrap (`steel_scrap`)

Actual weighed external waste from the declared material, with destination; internal returns remain stock transfers. No automatic avoided-production credit.

- Selected flow: Discarded non-alloy steel sheet scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_site_manufacture.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_manufacture`
- Sources: `hk`, `nydec`

###### Discarded wrought aluminium-alloy sheet scrap (`aluminium_scrap`)

Actual segregated alloy scrap, contamination and destination records; not pure aluminium release to the environment.

- Selected flow: Discarded wrought aluminium-alloy sheet scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_site_manufacture.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_manufacture`
- Sources: `hk`, `nydec`

###### Oil-contaminated steel-chip waste (`oily_steel_chips`)

Only actual external segregated steel chips with measured oil/moisture and destination; not a pure metal emission. Internal recovered oil and chips are tracked separately as circulation. NYDEC is historical/mixed interface evidence only.

- Selected flow: Oil-contaminated steel-chip waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_site_manufacture.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_manufacture`
- Sources: `hk`, `nydec`

### Process: Conditional surface-treatment environmental accounts (`surface`)

Account for actual separately identified purchased chemicals, water, emissions and waste from this reporting partition. Example isopropanol rows apply only when verified by current supplier/SDS and environmental records. No bath recipe, process conditions or coating design is specified.

#### Inputs

##### Product flows

###### Purchased isopropanol solvent (`isopropanol`)

Only documented actual isopropanol CAS67-63-0 purity and supply route; aqueous mixtures require their own matching identity. No universal solvent requirement.

- Selected flow: Purchased isopropanol solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface`
- Sources: `epa`, `nydec`

###### Purchased medium-voltage electricity (`electricity_surface`)

Only actual purchased supply at the declared voltage/site/time; use measured kWh converted to MJ through verified 3.6 MJ/kWh. On-site generation is not purchased electricity and requires separate actual accounts; subtract submeter totals from common ledger once.

- Selected flow: Purchased medium-voltage electricity
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface`
- Sources: `epa`, `nydec`

#### Outputs

##### Waste flows

###### Spent isopropanol solvent waste (`spent_isopropanol`)

Actual separate transferred waste composition and net mass, not pure chemical or air emission; capture/recovery and disposal are distinct.

- Selected flow: Spent isopropanol solvent waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface`
- Sources: `epa`, `nydec`

###### Industrial surface-treatment wastewater (`industrial_effluent`)

Only an actual separately identified residual surface-treatment wastewater stream not represented by chromium_vi_effluent, chromium_iii_effluent or oily_effluent. Require net wet mass, composition and receiver. Do not count the same gross liquid again. Supplied water, freshwater withdrawal and any released species are separate identities.

- Selected flow: Industrial surface-treatment wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface`
- Sources: `epa`, `nydec`

###### Chromium(VI)-bearing acidic industrial wastewater (`chromium_vi_effluent`)

Only current evidenced independently transferred wastewater, chromium speciation, wet mass and receiver. Not total chromium as CrVI, freshwater abstraction, historical contaminated groundwater or pure chromic acid. No assumed concentration or mandatory production.

- Selected flow: Chromium(VI)-bearing acidic industrial wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface`
- Sources: `epa`, `nydec`

###### Chromium(III)-bearing industrial wastewater (`chromium_iii_effluent`)

Only actual current separate effluent with analytically established CrIII state and wet mass/receiver; replacement project intent is not completed conversion or evidence that CrVI is absent. Mixed speciation requires explicit analytical boundaries. chromium_vi_effluent and chromium_iii_effluent are alternatives for one liquid stream; both may carry quantities only for physically separate receiver streams, never two copies of the same gross liquid mass.

- Selected flow: Chromium(III)-bearing industrial wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface`
- Sources: `epa`, `nydec`

###### Chromium-bearing wastewater-treatment sludge (`chromium_sludge`)

Only actual final transferred sludge, measured wet/dry mass and individual CrIII/CrVI analytical definitions. Treatment is not guaranteed to remove chromium; sludge is not an elementary chromium release. No double-counting contained treatment resources or sludge.

- Selected flow: Chromium-bearing wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface`
- Sources: `epa`, `nydec`

###### Water-soluble waste-oil industrial effluent (`oily_effluent`)

Only actual separately collected oil-containing liquid stream with measured water/oil basis and receiver; it is not pure lubricant, freshwater or a species release. Current applicability required despite historical facility description.

- Selected flow: Water-soluble waste-oil industrial effluent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface`
- Sources: `epa`, `nydec`

#### Outputs

##### Elementary flows

###### isopropanol (`isopropanol_air`)

Only actual residual released CAS67-63-0 to immediate air/unspecified after measured recovery and stock balance. Purchased solvent mass is not emitted mass; no assumed loss fraction.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface`
- Sources: `epa`, `nydec`

### Process: Acceptance and net-mass accounting (`acceptance`)

Link neutral configuration/release identifier to actual complete net mass and attributed acceptance environmental totals. Acceptance is a reporting gate; no functional test procedure or performance criterion is provided. Energetic testing is outside this methodology and must remain a disclosed gap if it occurs in the actual manufacturing system.

#### Inputs

##### Product flows

###### Purchased medium-voltage electricity (`electricity_acceptance`)

Only actual purchased supply at the declared voltage/site/time; use measured kWh converted to MJ through verified 3.6 MJ/kWh. On-site generation is not purchased electricity and requires separate actual accounts; subtract submeter totals from common ledger once.

- Selected flow: Purchased medium-voltage electricity
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources:

#### Outputs

##### Product flows

###### Accepted complete new non-energetic weapon (`accepted_product`)

One new complete product of the same neutral configuration and signed acceptance state, excluding ammunition, energetic charges, test consumables, shipping packaging and fixtures. Declared environmental gate only; no operating/design details.

- Selected flow: Accepted complete new non-energetic weapon
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `identity_reference`
- Collection protocol: `cp_mass`
- Sources:

### Process: Shared facility utility and waste accounts (`utilities`)

Separate supplied electricity, water and actual facility chemicals from emissions and waste transfers. Submeter and reconcile shared services without duplicating stage totals. Office/R&D and unrelated families stay separate.

#### Inputs

##### Product flows

###### Process Water (`process_water`)

Actual supplied technosphere process water measured in kg; volume records need actual density/conditions. Not natural-water abstraction, recirculating internal water or wastewater.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utilities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `hk`, `epa`

###### Purchased medium-voltage electricity (`electricity_utilities`)

Only actual purchased supply at the declared voltage/site/time; use measured kWh converted to MJ through verified 3.6 MJ/kWh. On-site generation is not purchased electricity and requires separate actual accounts; subtract submeter totals from common ledger once.

- Selected flow: Purchased medium-voltage electricity
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utilities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `hk`, `epa`

### Process: Conditional delivery protection accounts (`packing`)

Count actual separate protection supplies and net returns; exclude transport packaging from M. Reusable support allocation needs real movements and service denominator. No assumed lifetime.

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`protective_film`)

Only actual supplied PE-LD film net issues, excluding its mass from accepted product M. Not all plastics or mandatory wrapping.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### Corrugated cardboard shipping box (`corrugated_board`)

Actual independent box supply and net tare; not mixed paper packaging or product net mass.

- Selected flow: Corrugated cardboard shipping box
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### Purchased medium-voltage electricity (`electricity_packing`)

Only actual purchased supply at the declared voltage/site/time; use measured kWh converted to MJ through verified 3.6 MJ/kWh. On-site generation is not purchased electricity and requires separate actual accounts; subtract submeter totals from common ledger once.

- Selected flow: Purchased medium-voltage electricity
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_shared` | shared resources and families | Directly assign measured exchanges where possible. Allocate residual shared burden using a current causal driver: share = covered configuration driver / sum of covered drivers. Require actual records of meter scope, usage/load/occupied service and accepted counts; preserve period, denominator, standby, driver rationale and sensitivity. Different heavy/small families need separate actual drivers; corporate totals divided by catalogue product weights or sales counts are not acceptable. |  |
| `allocation_recovery` | actual recovery, stock and waste | Track incoming new supply, internal recovered material, stock change, final product/reject and final waste once. Internal recovered solvent/oil/water is not new purchased supply or an automatic virgin-production credit. Preserve actual recovery and treatment resource burden. Wet slurry and contained chromium are different bases, and CrIII/CrVI shares do not create two copies of one wastewater stream. |  |
| `allocation_coproduct` | scrap and other outputs | Trace actual receivers and material status. Waste recyclability alone does not establish co-product status or credits. Any co-product allocation requires actual causal/economic records and sensitivity. Rejected/reworked units retain attributed burden in accepted production scope; no default yield, shared quota or recovery efficiency. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | reference_product | controlled acceptance mass record | model; configuration; serial number; accepted net mass M; actual physical measurement provenance; calibration/tare/uncertainty; neutral delivery-state record; signed release | Use controlled acceptance records for the accepted complete unit of the same configuration. | kg | each accepted unit | actual current manufacturing and acceptance period | declared complete-product acceptance gate | accepted net mass per unit | current traceable physical weighing/tare/calibration and checked mass reconciliation under mass_record_provenance |
| `cp_receipt` | `receipt` | inventory | current environmental exchange records | model; configuration; serial/batch; neutral release identifier; exact chemical/SDS and waste speciation; net issues/returns/stocks; kg; metered kWh; receiver; current-versus-legacy scope; actual causal shared driver | Read actual supplier invoices, delivery states and opening/closing stock records | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual covered production period | actual current manufacturing and acceptance period | declared producer/subcontractor/environmental receiver gates | attribute measured period exchange / accepted units of the same configuration | current environmental ledgers/SDS, calibrated meters, acceptance and receiver records |
| `cp_site_manufacture` | `site_manufacture` | inventory | current environmental exchange records | model; configuration; serial/batch; neutral release identifier; exact chemical/SDS and waste speciation; net issues/returns/stocks; kg; metered kWh; receiver; current-versus-legacy scope; actual causal shared driver | Read non-operational environmental issue/return ledgers, stage meters and waste transfers | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual covered production period | actual current manufacturing and acceptance period | declared producer/subcontractor/environmental receiver gates | attribute measured period exchange / accepted units of the same configuration | current environmental ledgers/SDS, calibrated meters, acceptance and receiver records |
| `cp_surface` | `surface` | inventory | current environmental exchange records | model; configuration; serial/batch; neutral release identifier; exact chemical/SDS and waste speciation; net issues/returns/stocks; kg; metered kWh; receiver; current-versus-legacy scope; actual causal shared driver | Read chemical-specific net issues, SDS, water meter and species-resolved environmental monitoring records | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual covered production period | actual current manufacturing and acceptance period | declared producer/subcontractor/environmental receiver gates | attribute measured period exchange / accepted units of the same configuration | current environmental ledgers/SDS, calibrated meters, acceptance and receiver records |
| `cp_acceptance` | `acceptance` | inventory | current environmental exchange records | model; configuration; serial/batch; neutral release identifier; exact chemical/SDS and waste speciation; net issues/returns/stocks; kg; metered kWh; receiver; current-versus-legacy scope; actual causal shared driver | Read signed release, controlled net-mass records and acceptance environmental meters | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual covered production period | actual current manufacturing and acceptance period | declared producer/subcontractor/environmental receiver gates | attribute measured period exchange / accepted units of the same configuration | current environmental ledgers/SDS, calibrated meters, acceptance and receiver records |
| `cp_utilities` | `utilities` | inventory | current environmental exchange records | model; configuration; serial/batch; neutral release identifier; exact chemical/SDS and waste speciation; net issues/returns/stocks; kg; metered kWh; receiver; current-versus-legacy scope; actual causal shared driver | Read actual utility meters, site reconciliation and documented causal allocation drivers | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual covered production period | actual current manufacturing and acceptance period | declared producer/subcontractor/environmental receiver gates | attribute measured period exchange / accepted units of the same configuration | current environmental ledgers/SDS, calibrated meters, acceptance and receiver records |
| `cp_packing` | `packing` | inventory | current environmental exchange records | model; configuration; serial/batch; neutral release identifier; exact chemical/SDS and waste speciation; net issues/returns/stocks; kg; metered kWh; receiver; current-versus-legacy scope; actual causal shared driver | Read actual packaging issues/returns and measured tare | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual covered production period | actual current manufacturing and acceptance period | declared producer/subcontractor/environmental receiver gates | attribute measured period exchange / accepted units of the same configuration | current environmental ledgers/SDS, calibrated meters, acceptance and receiver records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | Require positive net M kg with current complete delivered configuration, physical provenance, calibration/tare and controlled release. Same-configuration accepted quantity must agree with these originals. Controlled acceptance records are only the collection interface, not proof without original physical metrology. No catalogue or group-total mass estimate. Missing source records requires data/scientific review. | actual physical method/readings, calibration/tare, mass closure and acceptance |
| `quality_speciation` | current chemicals, wastewater and sludge | Preserve actual chemical/formulation, CAS where established, phase, wet/dry basis and analytical speciation. Total chromium is not CrVI or CrIII; hexavalent compound is not chromium metal. Chemical feed, captured sludge, gross wastewater and actually released dissolved species require separate identities and balances. Historical groundwater release or substitution intent is not current production evidence; never assume chromium-free state. | current SDS/analysis definitions and receiver/species records |
| `quality_balance` | materials, recovery, water and meters | Reconcile actual new-supply versus internal recovery and opening/closing stocks, product/reject and final waste without double-counting. Separate technosphere water from natural-resource abstraction and effluent, treatment service from contained resources, and shared from stage meters. Preserve meter failures, substitutions/estimates and uncertainty; HK2024 notes a water-meter anomaly, not a product consumption default. | current environmental reconciliations, anomaly records and causal drivers |
| `quality_completeness` | actual dataset, both product families and providers | Audit the whole current non-operational environmental interface register beyond candidate rows, with measured/calculated/missing/evidenced not_applicable distinguished. A shared method does not establish shared material recipe or emissions. Disclose supplier/outsourcing/withheld scope and excluded functional-testing/capital/later lifecycle contributions. Missing current records is a gap, not zero. No complete cradle-to-gate or scientific approval claim from contract checking. | current complete environmental records and transparent coverage gaps |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference and accepted_product | Exact reference name equals accepted_product output. Require one complete new non-energetic accepted unit, current configuration/net M kg under cp_mass, physical provenance and normalize_mass. Blank candidate reference UUID is registered at that exact row in unresolved_flow_identities. Independent parts, energetic content and gross shipping mass cannot substitute. |  |
| `validate_identity_basis` | all rows and both languages | Verify lawful matching lowercase identifiers and actual projected row/protocol/rule links, per-unit q_item/M kg and accepted-count aggregation. Preserve actual public reference properties/units, official localized UUID names, atomic exchanges and chemical/media/supply qualifiers. CrVI/CrIII/waste/species distinctions cannot be replaced by generic chromium totals. |  |
| `validate_scope` | actual interface and dataset use | Require current environmental-only scope evidence and independently reviewed make/buy, recovery/receiver and mass closure before claiming complete foreground coverage. Historical remediation and public group totals are not current unit burdens. Uniform reporting across families conveys no functional equivalence or common default emissions. Candidate science review remains pending. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset and background_dataset after actual data completion and review |
| downstream_use | Environmental manufacture input for a separately declared non-energetic product lifecycle, with omitted stages explicitly visible |
| allowed_use | Manufacturing environmental accounts/comparisons within matching actual configuration, delivered state, environmental gate and disclosed coverage; no automatic cross-family comparison |
| excluded_use | Ammunition and energetic materials/charges or their processing; products with inseparable energetic contents; independently supplied parts; ceremonial/edged arms; used/refurbished products and restoration; use, functional/live-fire testing, deployment, storage after gate and end of life. An actual excluded factory activity is a disclosed coverage gap, not zero burden. |
| required_metadata | neutral product family/configuration and accepted release identifier; complete new non-energetic delivery state; producer/site/reporting period; actual accepted quantity; positive net M kg, physical mass provenance and controlled acceptance record; packaging/fixture exclusion; environmental make/buy and subcontractor gates; chemical supply/SDS state and chromium analytical speciation when applicable; actual new-supply versus recovery/stock balances; wastewater/sludge/oily-chip receiver and wet/dry basis; causal shared allocation; omitted/withheld/excluded activities and upstream uncertainty |
| required_quality_disclosure | Current records, M provenance, chemical speciation/wet-dry basis, receiver/recovery/stock and allocation evidence, unresolved identities, withheld/omitted upstream and excluded stages; scientific review pending |
| update_trigger | Product completion/configuration, actual supply/chemical/waste state, chromium replacement status, recovery loop, site/provider/receiver, metrology or allocation changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `hk` | literature | [Heckler & Koch Nachhaltigkeitsbericht2024](https://www.heckler-koch.com/Downloads/Investor%20Relations/Abschl%C3%BCsse/2024/Abschlussbericht/Nachhaltigkeitsbericht%202024.pdf) | Printed/PDF11 and13: disclosed water/waste monitoring, water-meter anomaly and energy records. Facility/group reporting-year context only, not classification proof, current product closure, unit mass/intensity or universal process requirement. No numeric totals/factors adopted. |
| `nydec` | literature | [NYDEC official Watervliet Periodic Review Report](https://extapps.dec.ny.gov/data/DecDocs/401034A/Report.RCRA.401034A.2019-03-13.2018%20Final%20PRR.pdf) | Actual document March6 2019 revision1 (URL label2018), PDF5/printed1 section2.1 and adjacent remediation summary: heavy-product context and solvent, chromium wastewater, oily-metal waste interfaces mixing current/past activities. Historical context only; not actual current delivery/M, mandatory chemistry, production factors, completed CrIII conversion or routine-manufacture allocation of remediation. No dimensions, quantities or technical manufacture details adopted. |
| `epa` | extension_guidance | [US EPA TRI Overview](https://www.epa.gov/enviro/tri-overview) | TRI Overview first chemical-management paragraph: distinguish reported chemical management/recycling/treatment from environmental releases. General US reporting context only; no universal legal applicability/threshold, product class or process emission factor adopted. |
