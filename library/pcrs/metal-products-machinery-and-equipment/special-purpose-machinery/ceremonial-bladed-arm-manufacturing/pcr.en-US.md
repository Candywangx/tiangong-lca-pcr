---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.ceremonial-bladed-arm-manufacturing
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Environmental accounting for manufacture of ceremonial swords with matched scabbards

## 1. Scope and Applicability

This candidate authored methodology accounts for the environmental foreground of a new configured ceremonial sword delivered with one matched scabbard, beginning at declared finished-component supply gates and ending at accepted complete product packing. It collects procurement, actual attributed plant utilities, individually characterized waste and measured releases. It provides no weapon design, production parameters, performance optimization, operating or assembly instructions. The process map is an environmental record grouping only. The representative boundary requires actual completed-component supply records; it is not a claim that every manufacturer purchases these components. Earlier production, including in-house earlier component production, must be separately linked once.

Existing knife/scissor PCRs concern cutting products and table cutlery PCRs concern food handling; neither establishes this complete ceremonial product with matched scabbard. The distinct methodological need is to reconcile component supply gates, the complete delivery configuration and scabbard inclusion in measured net M while excluding service and functional-performance claims. UNSD44750 is broader than this scope; this draft creates no accepted classification mapping.

Exclude separately sold blades/scabbards, other44750 arms, food/cutting tools, refurbishment/repair services, ceremonial use, transport after dispatch and end-of-life. No sharpness, hardness, strength, life or harmlessness is inferred from ceremonial purpose. Actual site processes or materials beyond the declared completed-component foreground require additional specific exchanges and records before extending a coverage claim. Independent scientific review remains pending.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.ceremonial-bladed-arm-manufacturing |
| classification_refs | CPC3.0:44750; narrower |
| covered_products | New declared ceremonial sword plus one matched scabbard at completed-component manufacturing foreground |
| excluded_products | Separate component sale, other arms, cutting/table tools and repair services |
| representative_product | Same-configuration accepted complete ceremonial set, with actual supplied composition |
| production_route | Environmental records from finished-component gates through actual site operations and optional cleaning to acceptance/packing; earlier manufacture linked |
| market_state | Accepted new complete delivered configuration; transport packing separate from net M |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture environmental foreground of declared ceremonial sword with one matched scabbard |
| How much | 1 kg |
| How well | Positive measured complete net M, same supplier specifications/configuration and signed supply completeness acceptance; no functional test thresholds prescribed |
| How long or cycle | One declared manufacturing period; no use cycle or life |
| reference_flow_link | finished_ceremonial_set |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Swords, cutlasses, bayonets, lances and similar arms and parts thereof and scabbards and sheaths therefor `958b5c7e-4167-4f23-ae05-580f7c9af04c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Declared ceremonial supply purpose; configuration/specification revision; one matched scabbard; actual supplied component composition and surface/residue scope; complete net M and independent component weights; transport packing excluded from M; plant/period/accepted count; earlier linked production boundaries and actual conditional operations |

Declare all required qualifiers in the data package; missing qualifiers make its reference definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `exchange_mass` | mass inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Collect q_item in actual kg per accepted same-configuration unit using its declared protocol; normalize_mass uses reference_mass. |
| `exchange_energy` | electricity rows | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Read actual kWh and convert using3.6 MJ/kWh; collect q_item MJ per accepted unit and apply normalize_mass. Public property energy dimension is retained; Mass is not substituted. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished blade, single physically complete hilt module and single finished matched scabbard at actual supplier gates |
| starting_condition_role | manufacturing_input |
| product_classification_scope | CPC44750 narrower ceremonial complete-product context |
| recursive_input_rule | Link preceding component manufacture once; do not count both finished components and their upstream constituent materials inside this foreground |
| upstream_dataset_requirement | Actual matching supplier production, utilities and treatment links are required before complete lifecycle coverage claims |
| disclosure | Finished-component-to-accepted-product foreground, not complete cradle-to-gate; sources supply no measured factory inventory |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground` | all_processes | Include all actual attributable activity within declared site gates, including handling, utilities, rejected/reworked consumption and packing. Record environmental quantities without mechanical manufacturing instructions. Earlier manufacturing inside the same plant is a separately linked upstream stage, not an omitted burden. |  |
| `boundary_conditional` | cleaning | Cleaning is conditional on actual records. Aqueous and IPA exchanges are separate; neither is compulsory. Other actual reagents/utilities/wastes need their own specific cards before extending coverage. |  |
| `boundary_output` | finished_ceremonial_set | Include exactly the declared sword and one matched scabbard in net M; exclude transport packaging, display supports, spares and separately supplied accessories. Declare additional retained coating/residue without double-counting supplier inclusion. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `site_account` | Supplied-component receipt and site-operation environmental account | required | Actual declared foreground records | manufacturing | accepted complete unit; normalize by M |
| `cleaning` | Conditional cleaning environmental account | conditional | Only if actually performed | manufacturing | accepted complete unit; normalize by M |
| `acceptance` | Configured net-mass acceptance and packing environmental account | required | Actual declared foreground records | manufacturing | accepted complete unit; normalize by M |

### Process: Supplied-component receipt and site-operation environmental account (`site_account`)

#### Inputs

##### Product flows

###### Finished supplied steel ceremonial sword blade (`supplied_blade`)

One actual supplier-specified finished steel component at its completed supply gate. Collect net issued kg, supplier material certificate and included surface/residue state; preceding component production is linked once, without giving design or fabrication instructions.

- Selected flow: Finished supplied steel ceremonial sword blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Finished supplied ceremonial sword hilt module (`supplied_hilt`)

One physically complete supplied module with a single declared supplier specification and actual material composition. Collect its net supplied kg and included coatings/residues, rather than treating a list of unrelated materials as one exchange. Earlier module production must have its own linked inventory; if supplied as separate items, replace this card with individual specific exchanges.

- Selected flow: Finished supplied ceremonial sword hilt module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Finished supplied matched ceremonial sword scabbard (`supplied_scabbard`)

One actual finished scabbard matched to the declared delivered configuration, with actual supplier composition and net kg. No universal steel, leather or wood construction is assumed; this is a single physical finished component whose materials are declared in its upstream inventory.

- Selected flow: Finished supplied matched ceremonial sword scabbard
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### User-side electricity for Supplied-component receipt and site-operation environmental account (`site_account_electricity`)

Actual CN <1kV user-side grid-average electricity; read calibrated kWh including attributed handling, ventilation, idle and rework, convert by3.6 MJ/kWh and collect q_item MJ per accepted same-configuration unit. The process map groups environmental records, not a manufacturing sequence.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Discarded supplied steel ceremonial sword blade (`reject_blade`)

Only actual discarded component of the corresponding supplied specification, with measured net kg, material/contamination and declared receiver. Distinguish supplier returns, repair/reuse and legal waste; no compulsory rejection rate or treatment credit. If fractionated, replace by each actual material fraction rather than duplicating the complete component.

- Selected flow: Discarded supplied steel ceremonial sword blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Discarded supplied ceremonial sword hilt module (`reject_hilt`)

Only actual discarded component of the corresponding supplied specification, with measured net kg, material/contamination and declared receiver. Distinguish supplier returns, repair/reuse and legal waste; no compulsory rejection rate or treatment credit. If fractionated, replace by each actual material fraction rather than duplicating the complete component.

- Selected flow: Discarded supplied ceremonial sword hilt module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Discarded supplied ceremonial sword scabbard (`reject_scabbard`)

Only actual discarded component of the corresponding supplied specification, with measured net kg, material/contamination and declared receiver. Distinguish supplier returns, repair/reuse and legal waste; no compulsory rejection rate or treatment credit. If fractionated, replace by each actual material fraction rather than duplicating the complete component.

- Selected flow: Discarded supplied ceremonial sword scabbard
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

### Process: Conditional cleaning environmental account (`cleaning`)

#### Inputs

##### Product flows

###### Supplied industrial cleaning water (`industrial_water`)

Conditional actual aqueous cleaning only: collect supplied water kg by calibrated mass measurement or actual metered volume and documented measured density. Exclude water already contained in purchased formulations. Technosphere water is distinct from direct resource extraction.

- Selected flow: Water for industrial use `81960a30-5488-4358-a28a-a0ee1f43f0f2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Supplied liquid isopropanol, CAS67-63-0 (`ipa_liquid`)

Conditional actual IPA cleaning only, with supplier SDS, liquid state and actual purity. Collect net issued kg and recovered returns; do not infer mandatory solvent use or use an elementary air-flow identity for purchased solvent.

- Selected flow: Supplied liquid isopropanol, CAS67-63-0
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### User-side electricity for Conditional cleaning environmental account (`cleaning_electricity`)

Actual CN <1kV user-side grid-average electricity; read calibrated kWh including attributed handling, ventilation, idle and rework, convert by3.6 MJ/kWh and collect q_item MJ per accepted same-configuration unit. The process map groups environmental records, not a manufacturing sequence.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Collected spent liquid isopropanol cleaning solvent (`spent_ipa`)

Conditional collected solvent waste with actual IPA/water/contaminant composition and net transferred kg to a declared treatment receiver. Reusable recovery is separately reconciled; an elementary chemical release is not this waste mixture.

- Selected flow: Collected spent liquid isopropanol cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Collected ceremonial-product aqueous cleaning effluent (`wash_effluent`)

Conditional actual collected liquid with sampled composition, net kg and off-site treatment receiver. No direct discharge to water is assumed; on-site treatment needs its own exchanges and measured species/submedium releases.

- Selected flow: Collected ceremonial-product aqueous cleaning effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Immediate isopropanol release to unspecified air (`ipa_air`)

Conditional species-specific actual outdoor IPA release, CAS67-63-0, to air/unspecified, immediate. Collect matched sampling concentration/flow/time or a documented closed solvent balance with recovery/residue/retention and uncertainty. Unexplained loss, workplace exposure or collected solvent is not assumed outdoor release.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Configured net-mass acceptance and packing environmental account (`acceptance`)

#### Inputs

##### Product flows

###### Supplied corrugated cardboard box (`packing_box`)

Conditional actual single corrugated box specification, recorded in net kg and supplier fibre composition. Exclude transport packaging from finished net M. A composition-qualified upstream box identity requires matching actual supplier fibre proportions.

- Selected flow: Supplied corrugated cardboard box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Supplied polyethylene packaging film (`packing_film`)

Conditional actual PE film, CAS9002-88-4, one supplier specification and net kg. Confirm PE composition, production supply state and fossil feedstock scope; do not silently apply to PET, multilayer composite or bio-based film. Record actual supplier origin and material state before linking its upstream production.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### User-side electricity for Configured net-mass acceptance and packing environmental account (`acceptance_electricity`)

Actual CN <1kV user-side grid-average electricity; read calibrated kWh including attributed handling, ventilation, idle and rework, convert by3.6 MJ/kWh and collect q_item MJ per accepted same-configuration unit. The process map groups environmental records, not a manufacturing sequence.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted ceremonial sword with one matched scabbard (`finished_ceremonial_set`)

One complete accepted declared ceremonial sword and its single matched scabbard. The public44750 finished product identity is narrowed by explicit configuration, not by altering its Mass reference property. Collect actual component and complete net kg; no functional performance or service life is claimed.

- Selected flow: Swords, cutlasses, bayonets, lances and similar arms and parts thereof and scabbards and sheaths therefor `958b5c7e-4167-4f23-ae05-580f7c9af04c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

###### Discarded cardboard packaging (`waste_box`)

Only actual segregated cardboard packaging waste arising inside this plant, measured net kg with contamination/receiver; include incoming packing disposal and packing losses once. Packaging delivered with the product is not simultaneously factory waste.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Discarded polyethylene packaging film (`waste_film`)

Only actual separately collected PE film waste with composition, contamination, net kg and receiver; do not identify it using a virgin PE product flow.

- Selected flow: Discarded polyethylene packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_causal` | all_processes | Avoid allocation by separate job/utility/stock records for each accepted configuration. Shared actual consumption uses documented causal metering, observed machine time/load or handling records; accepted counts only when comparable actual loads justify it. Record total, driver, denominator, assigned shares and sensitivity; no default mass or economic allocation between sword and scabbard delivered as one reference set. |  |
| `allocation_waste` | specific waste | Rejected/reworked consumption remains attributed to accepted production; unknown quantities are not zero. Waste transfers carry no automatic avoided-production credit. If actual co-products exist, document substitution-free allocation and receivers in a separate specified model before application. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | finished_ceremonial_set | calibrated scale and acceptance records | configuration; accepted net mass M; independent supplied component kg; zero/tare/net; scale capacity/resolution/calibration; acceptance count | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each configuration and accepted unit | actual declared period | declared site and supplied-component gates | accepted net mass per unit | original scale/component/completeness records |
| `cp_stock` | all_processes | specific supplied input | original issue/return and supplier records | one physical specification; composition/supply state; measured net kg; issue/return/stock change; accepted count | Measure each actual supplied input kg, including retained supplied residues once; reconcile returns and stock changes. Water volume conversion requires actual density evidence, not assumed1 kg/L. | kg | each transfer and actual period | actual declared period | declared site and supplied-component gates | actual attributed input kg / accepted units of the same configuration | scale/supplier/SDS/stock records |
| `cp_energy` | all_processes | electricity | actual calibrated operation meters | process/job; provider/voltage; kWh start/end; handling/idle/ventilation/rework; causal shared-load records; accepted count | Read actual meter coverage, convert kWh to MJ using3.6 MJ/kWh, attribute shared consumption once using causal records. | MJ | actual period and shared-load changes | actual declared period | declared site and supplied-component gates | actual attributed MJ / accepted units of the same configuration | meter calibration and allocation observations |
| `cp_waste` | all_processes | specific characterized waste | receiver manifests and original weights | one physical waste; actual composition/contamination; net kg; reusable returns; receiver/status; accepted count | Weigh each distinct collected waste after controlled tare, record composition and receiver; keep liquid effluent separate from elementary water releases. | kg | each actual transfer | actual declared period | declared site and supplied-component gates | actual transferred waste kg / accepted units of the same configuration | original weights/composition/receiver receipts |
| `cp_emission` | cleaning | ipa_air | matched sampling or closed solvent balance | CAS67-63-0; air submedium; concentration/flow/time; issue/recovery/retention/residue; detection/uncertainty; accepted count | Measure actual outdoor residual IPA using matched species sampling or a complete documented solvent balance; unexplained residual is not an assumed emission. | kg | actual cleaning period | actual declared period | declared site and supplied-component gates | actual released kg / accepted units of the same configuration | sampling calibration and complete balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `configuration_mass` | cp_mass; finished_ceremonial_set | Complete unit here means the sword plus one matched scabbard. Independently weigh each supplied component and the accepted complete set on scales of suitable actual capacity/resolution, with calibration and zero/tare/net originals. Reconcile installed component kg plus actual retained additions to positive M kg; packaging/display fixtures are excluded. No catalogue mass, assumed per-unit weight or functional geometry substitutes. Declare included supplier coatings/residues and avoid counting twice. | cp_mass; cp_stock; signed supply acceptance |
| `actual_period` | all protocols | Use actual accepted counts of the same configuration and declared period to collect q_item. Retain rejected/reworked consumption in numerator; paired M is physically measured for that population. Record stock changes and nonproduction utility attribution; do not pool materially different configurations. | actual job/count/meter records |
| `balance_coverage` | all exchanges | Reconcile each physical supplied component to accepted retained kg, returns, stock change and specific waste; reconcile solvent issue/recovery/retention/residue/release with uncertainty. Additional actual glue, lubricant, wiping cloth, plating/coating inputs, heat, compressed air or other physical waste/release requires individual specified exchanges and evidence. No missing stage is treated as zero, and no mandatory process is inferred from a catalogue. This boundary does not offer a manufacturing recipe. | actual plant activity register and balances |
| `source_limits` | external evidence | UNSD printed/PDF239 provides broad44750 title only. Windlass undated About Us supports dress-product and separate refurbishment context, not factory measurements. WKC publisher-retained historical catalogue PDF3 is a historical ceremonial sword/scabbard supply example only; no present process, quality certification, quantity or lifetime transferred. The finished-component boundary is an authored modelling choice requiring actual supplier records. Upstream PE film use requires actual material and supply-route matching. | unsd-cpc3; windlass-scope; wkc-historical |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Verify exact reference/output name and UUID, actual declared ceremonial configuration with one matched scabbard, physically measured positive complete M and independent component reconciliation. |  |
| `validation_scope` | all_processes | Verify completed-component supply gates and earlier linked production; utilities and actual conditional cleaning/waste records are covered without mechanical instructions. Do not claim complete cradle-to-gate while upstream or additional actual site exchanges remain absent. |  |
| `validation_identity` | all flow rows | Verify public type, actual reference property/unit group and official bilingual names; the adopted electricity identity has CN supply geography and <1kV user-side grid-average route, requiring matching actual procurement. Different geography/provider/route needs its own matched identity. Distinguish purchased liquid IPA from elementary IPA; supplied industrial water from resource water or wastewater; collected effluent from direct discharge. Keep unmatched concrete rows blank with declared reasons. |  |
| `validation_claims` | dataset claims | Mechanical consistency pass does not establish measured factory data, weapon performance, complete lifecycle coverage, publication or scientific approval. Disclose unresolved identities, measurements, links and uncertainty; distinguish unknown, not-applicable and below-detection values. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured ceremonial sword/scabbard manufacturing environmental foreground; this heading implies no publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Matching completed-component foreground or linked ceremonial product manufacturing model scaled by actual M |
| excluded_use | Weapon design, performance, operating instructions, other arms, ordinary cutlery, repair/use/life claims |
| required_metadata | Configuration/specification revision, ceremonial supply purpose, matched scabbard, actual component composition/net weights/retained additions, complete M, packaging scope, plant/period/count, supplier gates, linked upstream/receiver identities and causal allocations |
| required_quality_disclosure | All identity/measurement/link/site coverage gaps, source historical limits, balance uncertainty and allocation sensitivity; independent scientific review pending |
| update_trigger | Supply configuration/composition/state/gate, plant utility provider, waste receiver, actual processing or measurement basis changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3 | official_guidance | UNSD, CPC Version3.0 Explanatory Notes,30June2025, printed/PDF239,44750. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Broad category only; narrower method is authored, not an accepted mapping |
| windlass-scope | handbook | Windlass Steelcrafts, About Windlass, undated official page, dress-product and Sword Refurbishment paragraphs. https://windlass.com/about-windlass/ | Product/service context only; no measured inventory or universal sourcing route |
| wkc-historical | handbook | WKC, publisher-retained catalogue wkc_katalog_2004.pdf (no internal publication date established), PDF3 About us. https://www.wkc-shop.de/media/files_public/3df4dd5f4237f7b969e987534218a0cb/wkc_katalog_2004.pdf | Historical ceremonial sword/scabbard supply example, no current quantitative or procedural rule |
