---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.coke-oven-gas
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Coke oven gas

## 1. Scope and Applicability

This PCR covers cleaned fuel gas recovered from by-product coke ovens, including gas used internally by a steelworks after a measurable transfer. The foreground begins with raw gas reception before primary cooling and ends with cleaned gas at the plant-gate meter. Coal carbonisation remains an upstream burden-bearing process. Heat-recovery ovens that burn raw gas at source and export only heat or power are outside this gas category. Natural gas, gasworks gas, blast-furnace gas, methanol, separated hydrogen and downstream combustion are excluded. This boundary follows the distinction in BREF section 5.1.4; CPC confirms the category name, not a complete production recipe. [`jrc-iron-steel-bref-2013`; `un-cpc-3-2025`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.coke-oven-gas |
| classification_refs | CPC 3.0: 17201 |
| covered_products | Cleaned coke oven fuel gas; internal or external metered delivery |
| excluded_products | Unrecovered heat-recovery oven gas; mixed town gas; other recovered metallurgical gases; separated chemicals |
| representative_product | Coke oven gas |
| production_route | Coal carbonisation followed by gas cooling, tar separation, cleaning and metered dispatch |
| market_state | Gaseous fuel; dry mass basis; declared composition and delivery pressure |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply cleaned coke oven gas as a fuel at the plant gate |
| How much | 1 kg dry cleaned coke oven gas |
| How well | Measured composition, net calorific value and contaminant specification accepted by the receiving fuel system |
| How long or cycle | One reporting-period production campaign; no service-life assumption |
| reference_flow_link | `reference_gas` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | coke oven gas `32ab44a2-c912-4c1f-98cf-856a24b3f99a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site; reporting period; coal-coking origin; gas composition; moisture and dry basis; net calorific value and basis; volume reference temperature and absolute pressure when used; density method; contaminant acceptance limits; gas cleaning route; dispatch pressure; upstream and foreground allocation; internal-use and export split |

Every qualifier must be declared in data-package metadata or the reference-flow comment. The mass reference is a declared quantity, not an assertion of equivalent energy service across gas compositions.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `gas_mass` | reference product | Mass | kg | Use cp_gas to measure reporting-period dry delivered gas mass; reference_gas is 1 kg. All inventory rows are per 1 kg reference flow. |
| `gas_state` | raw_gas, reference_gas | Mass | kg | Convert metered volumes using a traceable density at the same temperature, absolute pressure, composition and moisture basis. Do not assume a universal density or interpret Nm3 without its declared reference conditions. |
| `energy_basis` | electricity, steam_heat, reference_gas | Energy | MJ | Record electricity in MJ, using the exact unit identity 1 kWh = 3.6 MJ when invoices use kWh. Measure steam heat from supplied/returned enthalpy. Report gas net calorific value separately in MJ/kg dry gas; do not use gross calorific value in its place. |
| `chemical_basis` | sulfuric_acid, carbonate, ammonium_sulfate | Mass | kg | Declare concentration, water content and purity. Preserve the selected product formulation basis; record active-chemical mass as supplementary data, not an unlabelled replacement. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Raw gas at the collecting-main outlet before primary cooling, with composition, moisture, mass and upstream coking burdens declared |
| starting_condition_role | Burden-bearing upstream intermediate input, not burden-free waste |
| product_classification_scope | Coke oven gas recovered and cleaned from coal carbonisation |
| recursive_input_rule | Record imported same-category gas separately with its upstream supply; net internal recirculation within this boundary and do not create self-referencing upstream datasets |
| upstream_dataset_requirement | Link raw gas to coal supply and carbonisation with documented allocation between coke, gas and other recovered products; link purchased utilities and reagents and exported waste to compatible supply/treatment datasets |
| disclosure | Identify reception and dispatch meters, included cleaning equipment, excluded sulfur conversion and wastewater treatment, upstream burden interface, gas losses, internal fuel transfers and each recovery route |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_start | raw_gas | Include cooling, tar recovery, installed ammonia/sulfur removal, light-oil recovery when operated, gas holding and plant-gate compression. Do not omit upstream coking burdens merely because gas is a coproduct. | `jrc-iron-steel-bref-2013`; `eu-environmental-footprint-2021` |
| boundary_loops | all inventory rows | Count external makeup and exported streams; internal wash-liquor, cooling-water and solvent circulation do not cross the aggregate foreground boundary. Reconcile separate makeup and purge records. | `jrc-iron-steel-bref-2013` |
| boundary_extensions | foreground package | Add a separate atomic row for every actually used reagent, solvent, catalyst, direct-contact steam input, residue and measured emission not represented below. Flaring or combustion inside the selected boundary requires separate fuel and individual combustion-emission rows; downstream consumer combustion remains outside. Document absent routes instead of assigning invented zeros. | `jrc-iron-steel-bref-2013` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `gas-cooling` | Gas cooling and tar separation | `required` |  | Foreground production | per 1 kg reference flow |
| `gas-cleaning` | Gas cleaning and liquor management | `required` |  | Foreground production | per 1 kg reference flow |
| `sulfate-recovery` | Ammonium-sulfate recovery | `conditional` | Sulfuric-acid ammonia capture producing ammonium sulfate is operated | Foreground production | per 1 kg reference flow |
| `carbonate-scrubbing` | Potassium-carbonate scrubbing | `conditional` | Potassium-carbonate desulfurisation is operated | Foreground production | per 1 kg reference flow |
| `benzol-recovery` | Coal-tar wash-oil benzol recovery | `conditional` | BTX recovery with coal-tar wash oil is operated | Foreground production | per 1 kg reference flow |
| `gas-dispatch` | Gas holding and metered dispatch | `required` |  | Foreground production | per 1 kg reference flow |
| `utilities` | Electricity supply accounting | `required` |  | Foreground production | per 1 kg reference flow |
| `gas-releases` | Gas-handling air releases | `conditional` | Leaks, vents or open contact-cooling releases occur | Foreground production | per 1 kg reference flow |

### Process: Gas cooling and tar separation (`gas-cooling`)

#### Inputs

##### Product flows

###### Raw coke oven gas before primary cooling (`raw_gas`)

Raw gas crosses the declared reception point.

- Selected flow: Raw coke oven gas before primary cooling
- Flow property / unit: Mass / kg
- Amount rule: Collect using cp_raw_gas; report the attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_raw_gas`
- Sources: `jrc-iron-steel-bref-2013`

###### Cooling water (`cooling_water`)

External cooling-water supply or makeup is present; exclude internal recirculation.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_water; report the attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-iron-steel-bref-2013`

#### Outputs

##### Product flows

###### Coal tar (`coal_tar`)

Separated tar leaves the foreground boundary as a product.

- Selected flow: Coal tar `176de006-c7be-47ad-be03-2ce15e99c6ff`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_tar; report the attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tar`
- Sources: `jrc-iron-steel-bref-2013`

### Process: Gas cleaning and liquor management (`gas-cleaning`)

#### Inputs

##### Product flows

###### Heat from steam (`steam_heat`)

Indirect steam heat is supplied to stripping or solvent regeneration.

- Selected flow: Heat from steam `c333ae82-c22d-4cb0-8f0a-b10017eec1f7`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect using cp_heat; report the attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat`
- Sources: `jrc-iron-steel-bref-2013`

#### Outputs

##### Product flows

###### Ammonia-hydrogen-sulfide stripping vapour (`stripping_vapour`)

Stripping vapour is transferred to a separately modelled sulfur-recovery facility.

- Selected flow: Ammonia-hydrogen-sulfide stripping vapour
- Flow property / unit: Mass / kg
- Amount rule: Collect using cp_material; report the attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-iron-steel-bref-2013`

##### Waste flows

###### Ammoniacal coke-oven still effluent (`ammoniacal_effluent`)

Still effluent is exported to treatment; treatment is linked downstream.

- Selected flow: Ammoniacal coke-oven still effluent
- Flow property / unit: Mass / kg
- Amount rule: Collect using cp_effluent; report the attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `jrc-iron-steel-bref-2013`

### Process: Ammonium-sulfate recovery (`sulfate-recovery`)

#### Inputs

##### Product flows

###### Sulfuric acid (`sulfuric_acid`)

The ammonium-sulfate recovery route uses sulfuric acid; declare solution strength.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_sulfate; report the attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sulfate`
- Sources: `jrc-iron-steel-bref-2013`

#### Outputs

##### Product flows

###### Ammonium sulfate (`ammonium_sulfate`)

Ammonium sulfate is actually recovered and dispatched as a product.

- Selected flow: Ammonium sulphate `7f128b59-9df7-4b5d-ad0f-00103b916cf7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_sulfate; report the attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sulfate`
- Sources: `jrc-iron-steel-bref-2013`

### Process: Potassium-carbonate scrubbing (`carbonate-scrubbing`)

#### Inputs

##### Product flows

###### Potassium carbonate (`carbonate`)

Potassium-carbonate scrubbing is operated; record makeup, not solution circulation.

- Selected flow: Potassium carbonate `50187d31-fd0a-47c3-9aa2-84402ffb625e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_carbonate; report the attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carbonate`
- Sources: `jrc-iron-steel-bref-2013`

### Process: Coal-tar wash-oil benzol recovery (`benzol-recovery`)

#### Inputs

##### Product flows

###### Coal-tar wash oil (`wash_oil`)

Light oil is recovered with coal-tar wash oil; record fresh makeup.

- Selected flow: Coal-tar wash oil
- Flow property / unit: Mass / kg
- Amount rule: Collect using cp_benzol; report the attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_benzol`
- Sources: `jrc-iron-steel-bref-2013`

#### Outputs

##### Product flows

###### Crude benzol from coke oven gas (`crude_benzol`)

BTX-rich light oil is recovered; do not substitute pure benzene.

- Selected flow: Crude benzene `521f59f8-548c-43c8-a6e5-51c11d153cb2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_benzol; report the attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_benzol`
- Sources: `jrc-iron-steel-bref-2013`

### Process: Gas holding and metered dispatch (`gas-dispatch`)

#### Outputs

##### Product flows

###### coke oven gas (`reference_gas`)

Accepted dry cleaned gas at the metered plant gate.

- Selected flow: coke oven gas `32ab44a2-c912-4c1f-98cf-856a24b3f99a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas`
- Sources: `jrc-iron-steel-bref-2013`

### Process: Electricity supply accounting (`utilities`)

#### Inputs

##### Product flows

###### Alternating current (`electricity`)

Meter electricity for exhausters, pumps, cooling and dispatch compression once.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect using cp_power; report the attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power`
- Sources: `jrc-iron-steel-bref-2013`

### Process: Gas-handling air releases (`gas-releases`)

#### Outputs

##### Elementary flows

###### Methane, fossil, to air (`methane_air`)

Leaks or venting release methane; gas composition and leak records establish amounts.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_air; report the attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-iron-steel-bref-2013`

###### Benzene, to air (`benzene_air`)

Benzene is released from gas handling or an open direct-cooling circuit.

- Selected flow: Benzene, to air
- Flow property / unit: Mass / kg
- Amount rule: Collect using cp_air; report the attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-iron-steel-bref-2013`

###### Hydrogen sulfide, to air (`h2s_air`)

Residual hydrogen sulfide is emitted from gas handling or cleaning.

- Selected flow: hydrogen sulfide `08a91e70-3ddc-11dd-94a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect using cp_air; report the attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-iron-steel-bref-2013`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocate_direct | foreground burdens | First investigate subdivision or system expansion. Assign dedicated cooling, purification and recovery operations by separate metering when possible. An expanded-system result must disclose all functions and cannot masquerade as this single-gas reference. | `eu-environmental-footprint-2021` |
| allocate_shared | shared burdens | When earlier approaches cannot be applied, justify a relevant physical relationship. Use energy allocation only where it represents the shared process function; nonfuel products such as ammonium sulfate do not automatically share fuel-energy allocation. If physical causation is unavailable, justify an alternative relationship, with economic allocation using contemporaneous prices and quantities at the same separation stage. Retain sensitivity analysis and complete allocation fractions. | `eu-environmental-footprint-2021` |
| allocate_interface | raw gas and coproducts | Document the upstream coke/gas allocation and the downstream recovery allocation as distinct stages. Do not allocate an already assigned upstream burden twice. Record internal gas use as a transfer, not as a substitution credit. Waste is linked to its treatment; only supported marketable coproducts enter the coproduct allocation set. | `eu-environmental-footprint-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_gas` | gas-dispatch | reference_gas | meter and analysis | mass or volume; temperature; absolute pressure; moisture; composition; density; LHV; accepted dry output; export and internal-use meters | Use calibrated gas meters and representative laboratory samples; reconcile dry/wet basis and matching density conditions, stock changes, exported and internal-delivered gas, vents and rejected gas | kg | continuous meter; composition by representative campaign sampling | same complete reporting period | declared gas-recovery plant | per 1 kg reference flow | calibration; original records; stock and meter reconciliation; sampling uncertainty |
| `cp_water` | gas-cooling | cooling_water | water meter | supply; makeup; purge; loop stock change; density if volume metered | Meter external supplied cooling water and net makeup; keep internal circulation separate and reconcile volume-to-mass with measured conditions | kg | continuous and monthly reconciliation | same complete reporting period | declared gas-recovery plant | per 1 kg reference flow | calibration; original records; stock and meter reconciliation; sampling uncertainty |
| `cp_material` | gas-cleaning | stripping_vapour | stock and transfer records | specific substance; composition; purity; incoming/outgoing mass; initial/final stock; stage; marketability; allocation decision and fractions | Reconcile weighed transfer, supplier and inventory records; measure each reagent and coproduct separately; use traceable gas mass/composition records for stripping vapour | kg | each transfer; monthly stock balance | same complete reporting period | declared gas-recovery plant | per 1 kg reference flow | calibration; original records; stock and meter reconciliation; sampling uncertainty |
| `cp_sulfate` | sulfate-recovery | sulfuric_acid; ammonium_sulfate | stock and transfer records | specific substance; composition; purity; incoming/outgoing mass; initial/final stock; stage; marketability; allocation decision and fractions | Reconcile weighed transfer, supplier and inventory records; measure each reagent and coproduct separately; use traceable gas mass/composition records for stripping vapour | kg | each transfer; monthly stock balance | same complete reporting period | declared gas-recovery plant | per 1 kg reference flow | calibration; original records; stock and meter reconciliation; sampling uncertainty |
| `cp_carbonate` | carbonate-scrubbing | carbonate | stock and transfer records | specific substance; composition; purity; incoming/outgoing mass; initial/final stock; stage; marketability; allocation decision and fractions | Reconcile weighed transfer, supplier and inventory records; measure each reagent and coproduct separately; use traceable gas mass/composition records for stripping vapour | kg | each transfer; monthly stock balance | same complete reporting period | declared gas-recovery plant | per 1 kg reference flow | calibration; original records; stock and meter reconciliation; sampling uncertainty |
| `cp_benzol` | benzol-recovery | wash_oil; crude_benzol | stock and transfer records | specific substance; composition; purity; incoming/outgoing mass; initial/final stock; stage; marketability; allocation decision and fractions | Reconcile weighed transfer, supplier and inventory records; measure each reagent and coproduct separately; use traceable gas mass/composition records for stripping vapour | kg | each transfer; monthly stock balance | same complete reporting period | declared gas-recovery plant | per 1 kg reference flow | calibration; original records; stock and meter reconciliation; sampling uncertainty |
| `cp_heat` | gas-cleaning | steam_heat | heat meter | steam flow; pressure; temperature; supply and return enthalpy; heat supplied | Meter useful indirect steam heat at the cleaning boundary; exclude boiler fuel already in the heat-supply dataset | MJ | continuous; monthly reconciliation | same complete reporting period | declared gas-recovery plant | per 1 kg reference flow | calibration; original records; stock and meter reconciliation; sampling uncertainty |
| `cp_power` | utilities | electricity | electricity meter | meter readings; voltage; supplier; equipment scope; kWh or MJ | Submeter or document attributable equipment loads; convert kWh to MJ; avoid counting plant totals and their submeter readings twice | MJ | continuous; monthly reconciliation | same complete reporting period | declared gas-recovery plant | per 1 kg reference flow | calibration; original records; stock and meter reconciliation; sampling uncertainty |
| `cp_effluent` | gas-cleaning | ammoniacal_effluent | effluent transfer | mass/volume; density; ammonia; COD; phenols; receiving treatment; sampling dates | Meter exported still effluent and sample its composition; do not count treated water emissions again in this boundary that excludes treatment | kg | continuous flow; representative sampling | same complete reporting period | declared gas-recovery plant | per 1 kg reference flow | calibration; original records; stock and meter reconciliation; sampling uncertainty |
| `cp_air` | gas-releases | methane_air; benzene_air; h2s_air | emission measurement | specific chemical; vent/leak point; rate; operating hours; gas composition; control efficiency; compartment | Use site emission measurements or a documented leak/vent estimate using measured gas composition; identify species and air compartment; do not report entire lost gas as methane | kg | campaign surveys plus continuous vent logs | same complete reporting period | declared gas-recovery plant | per 1 kg reference flow | calibration; original records; stock and meter reconciliation; sampling uncertainty |
| `cp_raw_gas` | gas-cooling | raw_gas | meter and analysis | received raw-gas mass or volume; temperature; pressure; moisture; density; composition | Meter reception separately from dry cleaned-gas dispatch; use the received wet-gas state and record entrained condensate separately when present | kg | continuous and representative sampling | same complete reporting period | declared gas-recovery plant | per 1 kg reference flow | calibration; original records; stock and meter reconciliation; sampling uncertainty |
| `cp_tar` | gas-cooling | coal_tar | stock and transfer records | coal tar mass; water content; stock change; transfer destination | Weigh separated tar and reconcile tank stocks, export and internal transfer | kg | each transfer; monthly stock balance | same complete reporting period | declared gas-recovery plant | per 1 kg reference flow | calibration; original records; stock and meter reconciliation; sampling uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Divide the attributable reporting-period exchange by reporting-period accepted dry gas mass in kg; reference_gas is fixed at 1 kg. Keep coproduct quantities before allocation and document burden fractions separately. | cp_gas; relevant collection protocol | exchange amount per 1 kg reference flow | `eu-environmental-footprint-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_period | all inventory rows | Use the same reporting period and equipment scope; explain missing records and estimates rather than replacing them with assumed zeros. | source records and meter map |
| quality_balance | raw_gas; reference_gas; recovered streams | Reconcile raw-gas reception, dry gas dispatch, water and condensate, coproducts, stock changes and losses. Investigate discrepancies against measurement uncertainty; no universal gas yield, density or loss fraction is supplied. | component and material balances; uncertainty records |
| quality_routes | gas-cleaning | Describe actual cleaning and recovery technologies and all specific additional exchanges. Do not apply the European technical description as a universal recipe or legal limit. | `jrc-iron-steel-bref-2013` |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference_gas | Require all reference qualifiers, 1 kg dry product and the same inventory denominator in both language renderings. Reject unspecified volume reference conditions or incompatible wet/dry conversions. | `jrc-iron-steel-bref-2013` |
| validate_completeness | foreground package | Require complete route-specific atomic exchanges and protocols, consistent gate meters, no internal-loop double count, linked upstream coking burdens and downstream waste treatment. Resolve additional emitted species before dataset publication. | `jrc-iron-steel-bref-2013` |
| validate_allocation | allocation stages | Require justified allocation decisions, fractions summing to unity within declared precision, prices or physical relationship evidence where used, and stage separation preventing double allocation or credits. | `eu-environmental-footprint-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Fuel-supply input in process or lifecyclemodel projections after applicable review |
| allowed_use | Supply of coke oven gas matching cleaning route, composition, dry basis, geography, period, gate and allocation |
| excluded_use | Universal natural-gas proxy; heat-recovery oven gas production; downstream combustion emissions; hydrogen or methanol production |
| required_metadata | All reference qualifiers; source and gate scope; upstream links; route; coproduct handling; collection methods |
| required_quality_disclosure | Coverage; uncertainty; gas balance; allocation sensitivity; missing identities or evidence; measured versus estimated emission values |
| update_trigger | Coal blend, gas composition, recovery technology, pressure, upstream dataset, allocation, supplier or material operating change |

## 11. Data Sources

### Central Product Classification (CPC) Version 3.0 Structure (`un-cpc-3-2025`)

- Source type: `official_guidance`
- Reference: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv
- Version: 2025-06-30
- Retrieved date: 2026-10-01
- Use: Category identity only; original CSV rows 520–525

### Best Available Techniques (BAT) Reference Document for Iron and Steel Production (`jrc-iron-steel-bref-2013`)

- Source type: `official_guidance`
- Reference: https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf
- Version: 2013
- Retrieved date: 2026-10-01
- Use: Sections 5.1.4–5.1.5, printed pp. 215, 218–220; route distinction, cooling, named recovery chemicals and coproducts; European technical evidence, not default quantity ranges

### Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods (`eu-environmental-footprint-2021`)

- Source type: `official_guidance`
- Reference: https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230
- Version: 2021-12-30
- Retrieved date: 2026-10-01
- Use: Annex I section 4.5, original PDF pp. 87–88; general multifunctionality hierarchy adopted as a method choice; no claim of full PEF conformity

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Central Product Classification (CPC) Version 3.0 Structure; 2025-06-30; Category identity only; original CSV rows 520–525 |
| jrc-iron-steel-bref-2013 | `official_guidance` | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf | Best Available Techniques (BAT) Reference Document for Iron and Steel Production; 2013; Sections 5.1.4–5.1.5, printed pp. 215, 218–220; route distinction, cooling, named recovery chemicals and coproducts; European technical evidence, not default quantity ranges |
| eu-environmental-footprint-2021 | `official_guidance` | https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods; 2021-12-30; Annex I section 4.5, original PDF pp. 87–88; general multifunctionality hierarchy adopted as a method choice; no claim of full PEF conformity |
