---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.thermionic-cold-cathode-or-photo-cathode-valves-and-tubes-including-cathode-ray-tubes
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Thermionic, cold cathode or photo-cathode valves and tubes (including cathode ray tubes)

## 1. Scope and Applicability

This PCR governs foreground data production for finished electron valves and tubes whose electron transport occurs in a sealed vacuum or gaseous envelope, including thermionic, cold-cathode and photo-cathode devices and CRTs. The representative foreground starts with a purchased or separately modelled unsealed assembly and covers final preparation, sealing, evacuation, activation, ageing, testing and packing. Upstream fabrication must remain linked. A mass-declared dataset is not a claim that different tube functions are equivalent. [un-cpc-3-0-structure-2025; epa-electronic-components-phase-2-1984; hamamatsu-about-pmts]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.thermionic-cold-cathode-or-photo-cathode-valves-and-tubes-including-cathode-ray-tubes |
| classification_refs | CPC 3.0: 47140; classification context, not an accepted mapping decision |
| covered_products | Finished thermionic, cold-cathode and photo-cathode electron tubes, including CRTs |
| excluded_products | Open glass envelopes and separate parts; semiconductor devices; electric lamps; complete television sets, monitors and instruments; X-ray apparatus |
| representative_product | One declared model of a sealed glass-envelope vacuum electron tube |
| production_route | Unsealed assembly receipt; optional water rinse; electric sealing and evacuation; cathode/getter activation; ageing and acceptance testing; optional corrugated box packing |
| market_state | New, sealed, tested tube at factory gate; net tube mass excludes transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Electron control, amplification, switching, light detection or image production, as declared for the specific model |
| How much | Declared unit: 1 kg of accepted finished tubes of one model; record item count and mean net mass |
| How well | Meet declared manufacturer acceptance tests, electrical ratings and model-specific response requirements |
| How long or cycle | One manufacturing campaign; service life is a disclosed product qualifier, not included operational energy |
| reference_flow_link | finished_tube |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Thermionic, cold cathode or photo-cathode valves and tubes (including cathode ray tubes) `ac3173f5-f70e-4122-a541-ac35b54330cc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Tube model and function; cathode type; envelope material and lead content; vacuum or gas fill and pressure; finished dimensions; net mass per item; electrical ratings; CRT screen or photocathode response when applicable; acceptance tests and reject criteria; declared life and duty; assembly starting state; site, period and upstream coverage |

Required qualifiers must be recorded in dataset metadata, product description or equivalent fields; missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_mass | finished tubes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Cross-check output using measured item count times model mean net mass; do not normalize by packed gross mass. |
| energy_conversion | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain raw kWh; convert with 1 kWh = 3.6 MJ; upstream grid emissions are not direct emissions here. |
| water_mass | rinse water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | For volume-to-mass conversion retain measured density and temperature; do not silently assume density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Unsealed assembly with fabricated envelope, electrodes and functional surfaces; disclose whether getter and frit are already incorporated |
| starting_condition_role | intermediate_product |
| product_classification_scope | Finished tubes within CPC 47140; unsealed assembly is a separately identified same-category precursor |
| recursive_input_rule | Record the unsealed input once with its upstream dataset and exact fabrication state; do not link it recursively to the finished-tube dataset |
| upstream_dataset_requirement | Include envelope, electrode, cathode, phosphor or photocathode fabrication and assembly in linked supplier or separate foreground datasets; verify no gap at the interface |
| disclosure | Disclose gate-to-gate foreground and upstream links separately; use and end-of-life are downstream scenarios |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | foreground | Include actual sealing, evacuation, activation, ageing, failed tests, rework energy and waste transfers. The historical EPA sequence and modern PMT description support these operations; neither supplies a current plant inventory. | epa-electronic-components-phase-2-1984; hamamatsu-about-pmts |
| boundary_extension | route | The tabulated route uses electric heating and a dry vacuum pump. For gas-filled, fuel-heated, oil-pumped, in-house coated or CRT externally coated/banded routes, add measured atomic exchanges and supplier links for the actual operation before claiming completeness; do not assign zeros to uncollected exchanges. |  |
| boundary_waste | waste | Record rejected whole tubes separately from dismantled glass, and rinse wastewater as a waste transfer to identified treatment. If treatment is on site, add treatment inputs, sludge and measured species discharged at the environmental boundary; do not count the same pollutant again as untreated wastewater. | epa-electronic-components-phase-2-1984 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rinse | Final water rinse | conditional | Water-only rinsing is performed after assembly receipt | foreground production | 1 kg accepted tubes |
| finish | Seal, evacuate, activate and test | required | All datasets | foreground production | 1 kg accepted tubes |
| pack | Corrugated box packing | conditional | Corrugated boxes cross the delivery boundary | foreground production | 1 kg accepted tubes |

### Process: Final water rinse (`rinse`)

#### Inputs

##### Product flows

###### Process Water (`rinse_water`)

Include only water-only final rinsing actually performed; meter fresh water, not recirculated throughput.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect campaign quantity under the linked protocol; normalize by accepted net tube mass in the same campaign.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net finished tube mass
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rinse`
- Sources: `epa-electronic-components-phase-2-1984`

#### Outputs

##### Waste flows

###### Wastewater from cleaning (`rinse_wastewater`)

Include when rinsing discharges a liquid waste stream; record mass, composition and treatment destination.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect campaign quantity under the linked protocol; normalize by accepted net tube mass in the same campaign.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net finished tube mass
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rinse`
- Sources: `epa-electronic-components-phase-2-1984`

### Process: Seal, evacuate, activate and test (`finish`)

#### Inputs

##### Product flows

###### Assembled electronic valve or tube, unsealed (`unsealed_assembly`)

Measure net assemblies consumed including those later rejected; link the exact upstream fabrication state.

- Selected flow: Assembled electronic valve or tube, unsealed `5a46a125-0b34-4e90-b714-2e46bb5c1257`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect campaign quantity under the linked protocol; normalize by accepted net tube mass in the same campaign.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net finished tube mass
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lot`
- Sources: `hamamatsu-about-pmts`

###### Lead-containing glass sealing frit (`sealing_frit`)

inclusion_condition: frit sealing occurs and frit is not already in the assembly inventory; weigh dry frit and declare binder separately if used.

- Selected flow: Lead-containing glass sealing frit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect campaign quantity under the linked protocol; normalize by accepted net tube mass in the same campaign.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net finished tube mass
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lot`
- Sources: `epa-electronic-components-phase-2-1984`

###### BaAl4/Ni evaporable getter device (`getter_device`)

inclusion_condition: this purchased getter is installed in the foreground and is not already included in the unsealed assembly; measure the whole device mass. Activation deposits barium inside the tube, not automatically into ambient air.

- Selected flow: BaAl4/Ni evaporable getter device
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect campaign quantity under the linked protocol; normalize by accepted net tube mass in the same campaign.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net finished tube mass
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lot`
- Sources: `saes-ep1402554a1`

###### Electricity (`electricity`)

Meter sealing, bakeout, dry pumping, activation, ageing and acceptance tests, including rejected units; allocate auxiliary operations once.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect campaign quantity under the linked protocol; normalize by accepted net tube mass in the same campaign.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net finished tube mass
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

#### Outputs

##### Product flows

###### Thermionic, cold cathode or photo-cathode valves and tubes (including cathode ray tubes) (`finished_tube`)

Weigh accepted sealed tubes without transport packaging; reconcile item count and acceptance logs.

- Selected flow: Thermionic, cold cathode or photo-cathode valves and tubes (including cathode ray tubes) `ac3173f5-f70e-4122-a541-ac35b54330cc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect campaign quantity under the linked protocol; normalize by accepted net tube mass in the same campaign.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net finished tube mass
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lot`

##### Waste flows

###### Rejected sealed electron tube (`rejected_tube`)

Record intact rejected tubes transferred out for treatment or recovery, with envelope composition and destination; do not substitute mixed electronic scrap.

- Selected flow: Rejected sealed electron tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect campaign quantity under the linked protocol; normalize by accepted net tube mass in the same campaign.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net finished tube mass
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lot`
- Sources: `epa-electronic-components-phase-2-1984`

### Process: Corrugated box packing (`pack`)

#### Inputs

##### Product flows

###### corrugated board boxes (`corrugated_box`)

Include only when this box is used; weigh net box consumption per dispatched accepted tube mass. Add any actual cushioning as separate identified exchanges.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect campaign quantity under the linked protocol; normalize by accepted net tube mass in the same campaign.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net finished tube mass
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_equipment | Use direct campaign meters first. Allocate shared vacuum and oven electricity by measured equipment power multiplied by occupied operating time, including attributable standby; document remaining shared services. |  |
| allocation_rejects | accepted_output | Charge rejects and rework to accepted tube output; do not treat failed units as burden-free co-products. Internal reuse is an internal loop; exported recovery is a separate waste fate with no automatic avoided-production credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_rinse | rinse | rinse_water; rinse_wastewater | water_meter; waste_transfer | time; inlet/outlet mass; temperature; density; composition; destination | calibrated meters and weighing; sampling; transfer tickets | kg | each batch | complete representative campaign with start/end dates | declared site and equipment | sum actual quantities then divide by same-campaign accepted net mass; document absent operations as not applicable | calibration; original logs; supporting tickets |
| cp_lot | finish | unsealed_assembly; sealing_frit; getter_device; finished_tube; rejected_tube | batch_record | batch; model; count; net mass; issues and stocks; test results; waste destination | weighing; stores reconciliation; test logs | kg | each batch | complete representative campaign with start/end dates | declared site and equipment | sum actual quantities then divide by same-campaign accepted net mass; document absent operations as not applicable | calibration; original logs; supporting tickets |
| cp_energy | finish | electricity | meter_record | equipment; timestamps; kWh; batch; occupancy; standby; allocation share | submeter readings; measured power and time for shared equipment | kWh | each batch | complete representative campaign with start/end dates | declared site and equipment | sum actual quantities then divide by same-campaign accepted net mass; document absent operations as not applicable | calibration; original logs; supporting tickets |
| cp_pack | pack | corrugated_box | stores_record | box grade; count; unit mass; dispatch batch; stock changes | weighing and dispatch reconciliation | kg | each batch | complete representative campaign with start/end dates | declared site and equipment | sum actual quantities then divide by same-campaign accepted net mass; document absent operations as not applicable | calibration; original logs; supporting tickets |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all rows | q_i = sum(Q_i) / M_accepted | same-campaign measured exchange and accepted mass | exchange per kg |  |
| yield | mass reconciliation | M_in + M_added = M_accepted + M_rejected + M_losses + delta_stock | campaign weighing and stock records | reconciliation, not a universal yield factor |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_sampling | output and energy | Cover startup, stable production, shutdown, ageing and rejects; do not select only best batches | campaign logs and complete meter series |
| dq_upstream | unsealed assembly | Supplier boundary must cover incorporated materials and preceding operations; model uncovered operations separately | supplier process map, bill of materials and dataset boundary |
| dq_ranges | quantities | Use foreground records; no external inferred range without synthesis of two independent, original-text-verified, boundary-compatible sources | raw records and uncertainty disclosure |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_flow | Reject a dataset without model, net mass, cathode/envelope state and test criteria; do not compare different functions using kg alone. |  |
| validate_balance | inventory | Reconcile assembly intake, added retained solids, accepted tubes, rejected tubes, measured losses and stock change. Explain discrepancies using weighing uncertainty and rework records, not an invented tolerance. |  |
| validate_coverage | boundary | Require route applicability, upstream interfaces, meter coverage and destination evidence; unresolved flow identity is disclosed and never silently substituted by a proxy. Missing route-specific exchanges make completeness inconclusive. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | Component supply for equipment process and lifecyclemodel projections |
| allowed_use | Declared model and compatible manufacturing route with explicit upstream links |
| excluded_use | Universal mass-based comparison between CRTs, receiving tubes and photomultipliers; complete equipment footprint; use-phase or disposal claims |
| required_metadata | Model, site, period, assembly supplier, cathode, envelope, gas/vacuum state, ratings, unit mass, process boundary and allocation drivers |
| required_quality_disclosure | Meters, calibration, yield reconciliation, missing flows, upstream representativeness, waste destinations and uncertainty |
| update_trigger | Change in tube design, cathode chemistry, pump or furnace technology, supplier, yield, energy supply or waste treatment |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 structure, row 47140 (30 June 2025); https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retrieved 2026-09-09 | Classification identity only |
| epa-electronic-components-phase-2-1984 | official_guidance | US EPA, Development Document for Electrical and Electronic Components, Phase II (1984), sections 4.1.3, 4.2 and 5.2.2; https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=2000K55B.TXT; retrieved 2026-09-09 | Historical tube process sequence and rinse-water pathways; no numerical transfer |
| hamamatsu-about-pmts | literature | Hamamatsu Photonics, About PMTs, Behind high-performance PMTs and Main components; https://www.hamamatsu.com/jp/en/product/optical-sensors/pmt/about_pmts.html; retrieved 2026-09-09 | Photo-cathode tube components, sealing, evacuation and inspection |
| saes-ep1402554a1 | literature | SAES Getters, EP1402554A1, Evaporable getter device for cathode-ray tubes, description; https://patents.google.com/patent/EP1402554A1/en; retrieved 2026-09-09 | Conditional purchased BaAl4/Ni getter device and in-envelope activation; no numeric factor |
