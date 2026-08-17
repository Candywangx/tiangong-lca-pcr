---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.potatoes-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Potatoes, frozen

## 1. Scope and Applicability

This PCR applies to whole or cut potatoes preserved by freezing and supplied as an uncooked product or after boiling or steaming in water. It covers the factory-gate production of the frozen potato product, including raw-potato receiving and preparation, any declared boiling or steaming step, freezing, packaging, and the declared period of frozen storage at the producing facility.

Frozen mashed potatoes, frozen French fries, frozen potato chips, potatoes precooked in fat or oil, seasoned prepared potato dishes, and products whose defining transformation is frying, mashing, baking, or formulation with other principal ingredients are outside this PCR. Agricultural production of the incoming potatoes is represented by an upstream dataset rather than recreated inside the foreground factory process. Outbound distribution, retail storage, consumer preparation, and end-of-life are outside the default factory-gate boundary unless the study explicitly extends the scope and reports those stages separately.

The PCR produces foreground data packages for a declared product, facility, technology, geography, and reference period. Candidate ranges below are deliberately broad QA screens, not default inventory values. They must be replaced by foreground measurements or reviewed source-backed evidence when used for publication-critical modelling.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.potatoes-frozen |
| classification_refs | CPC 3.0: 21313, Potatoes, frozen (`exact`) |
| covered_products | Frozen potatoes, whole or cut, uncooked or cooked only by boiling or steaming in water |
| excluded_products | Frozen mashed potatoes; frozen French fries; frozen potato chips; potatoes precooked in fat or oil; baked, seasoned, formulated, or otherwise prepared potato products |
| representative_product | Net frozen potato product at the producing facility gate |
| production_route | Receiving and sorting -> washing, peeling and cutting as applicable -> optional boiling or steaming -> cooling or dewatering as applicable -> freezing -> packaging -> declared frozen storage |
| market_state | Frozen, packaged or otherwise dispatch-ready, at plant; uncooked, boiled, or steamed state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Frozen potatoes that satisfy the declared CPC 21313 product state and quality specification |
| How much | 1 kg net product mass, excluding packaging |
| How well | Dispatch-ready at the producing facility; frozen state, cut form, peel status, and uncooked, boiled, or steamed route declared; excludes mashed, fried, chipped, fat-precooked, and formulated potato products |
| How long or cycle | One production lot through the end of the declared factory frozen-storage period |
| reference_flow_link | rf_frozen_potatoes_at_plant |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net frozen potato product |
| Reference product flow | Potatoes, frozen / 冷冻土豆 `cca3d996-be28-4f23-915d-6432bd1bdac3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | uncooked, boiled, or steamed route; whole or cut form; peel status; freezing technology; package format and net mass; factory-gate point; frozen-storage duration and temperature record; geography; reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg of net frozen potato product; exclude primary, secondary, and tertiary packaging mass from the reference amount and record packaging as separate inventory inputs. |
| `mass_balance_basis` | potatoes, intermediate product, final product, rejects, and potato residues | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured lot or campaign masses on one consistent wet-mass basis. Declare drainage, glazing, adhering water, or moisture-change conventions that materially affect the mass balance. |
| `water_measurement` | process water and wastewater | Mass or measured volume converted to mass | kg | Prefer meter, invoice, tank, or batch records. When volume is converted to mass, retain the measured volume, applied density, temperature basis when material, and conversion calculation. |
| `energy_measurement` | electricity, fuel, steam, hot water, and purchased cooling | Metered energy or supplier quantity | kWh, MJ, kg, or documented supplier unit | Preserve the recorded carrier and unit, separate freezing from storage where metering permits, and document every conversion and allocation to the reference flow. |
| `frozen_state_record` | freezing exit and frozen storage | Measured temperature and time | deg C and h or d | Record product or representative air temperature, monitoring location, setpoint where applicable, excursion handling, and the storage duration represented by the dataset; apply the product specification or governing cold-chain requirement without inventing a generic threshold. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fresh potatoes received at the processing facility, with received mass, origin or supplier group, storage condition before processing, and quality or reject status declared |
| starting_condition_role | Foreground factory-gate starting condition backed by receiving and purchase records |
| product_classification_scope | Frozen potatoes under CPC 3.0 code 21313: uncooked or boiled/steamed in water; excludes mashed, French-fried, chipped, fat-precooked, and otherwise prepared potato products |
| recursive_input_rule | If purchased frozen potatoes or returned frozen potato rework enters the foreground system, record it as a separate product input with its own upstream dataset and do not recursively recreate the same product-category production inside this data package. |
| upstream_dataset_requirement | Use temporally, geographically, and technologically representative upstream datasets for fresh potatoes, water, energy carriers, refrigerants, packaging, processing aids, and external waste treatment. |
| disclosure | Declare cut form, peel status, uncooked/boiled/steamed route, preparation operations, freezing technology, package format, frozen-storage duration, cold-chain monitoring basis, excluded operations, and any scope extension beyond the factory gate. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `system_boundary_rule_1` | foreground factory production | Include receiving and sorting, preparation, the declared conditional cooking route, cooling or dewatering when used, freezing, packaging, factory frozen storage, direct utilities, refrigerant losses, wastes, wastewater, and on-site treatment that occur before the declared gate. | `codex-cxc-8-1976` |
| `system_boundary_rule_2` | upstream inputs | Link each purchased product or service input to a representative upstream dataset; do not omit upstream potato production, electricity, fuels, water supply, packaging production, refrigerant production, or external treatment merely because those processes are outside the foreground facility. | `eu-pef-2021-2279` |
| `system_boundary_rule_3` | conditional cooking | Include boiling or steaming and associated cooling or dewatering only when the reference product is sold in that state; the dataset must not mix uncooked and cooked routes without a documented production-weighted aggregation. | `un-cpc-3-0-21313` |
| `system_boundary_rule_4` | downstream stages | Exclude outbound transport, distribution storage, retail, consumer preparation, and end-of-life from the default factory-gate dataset. If included for a declared study, model and disclose them as separate downstream stages. | `eu-pef-2021-2279` |
| `system_boundary_rule_5` | cold chain and losses | Include electricity or purchased cooling, refrigerant make-up or calculated leakage, temperature monitoring, product losses, and waste handling attributable to freezing and the declared factory storage period. | `codex-cxc-8-1976` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | Receiving, sorting, washing, peeling, and cutting | `required` | Always included; individual preparation operations may be zero only when documented as not used | Foreground preparation | per kg prepared potato transferred to the next process and normalized to 1 kg reference product |
| `cooking_conditioning` | Boiling or steaming, cooling, and dewatering | `conditional` | Included only for a boiled or steamed reference product | Foreground thermal conditioning | per kg cooked potato transferred to freezing and normalized to 1 kg reference product |
| `freezing_packaging` | Freezing and packaging | `required` | Always included | Foreground freezing and packing | 1 kg net frozen potato product |
| `frozen_storage` | Factory frozen storage | `required` | Included for the storage duration represented at the factory gate | Foreground storage | 1 kg net frozen potato product over the declared storage duration |
| `outbound_distribution` | Refrigerated outbound distribution | `excluded_by_default` | Include only when the declared study extends beyond the producing facility gate | Downstream distribution | tonne-kilometres and storage time under the extended scope |

### Process: Receiving, sorting, washing, peeling, and cutting (`receiving_preparation`)

#### Inputs

##### Product flows

###### Fresh potatoes received (`raw_potatoes_input`)

Record the mass of fresh potatoes entering the preparation process, including lots later rejected, and link the input to a representative upstream potato-production dataset.

- Selected flow: Fresh potatoes (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured received mass allocated to the production lot or campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen potato reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_mass_balance`
- Sources:
- Range: Provisional raw-potato input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.9
  - Upper: 2.0
  - Unit: kg
  - Basis: per 1 kg net frozen potato reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water supplied (`preparation_water_input`)

Record water crossing the process boundary for washing, peeling, cutting, fluming, or sanitation when attributable to the represented production.

- Selected flow: Process water (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled preparation-water consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen potato reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_water`
- Sources:
- Range: Provisional preparation-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg net frozen potato reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity supplied (`preparation_electricity_input`)

Record electricity for conveyors, sorting, washing, peeling, cutting, pumping, and attributable preparation auxiliaries.

- Selected flow: Electricity, supplied to site (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: metered or reconciled preparation electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen potato reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_energy`
- Sources:
- Range: Provisional preparation-electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh
  - Basis: per 1 kg net frozen potato reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally expected. Record any returned waste entering on-site treatment as a distinct row when applicable.

##### Elementary flows

No direct elementary input is prescribed. Record directly abstracted water as an elementary input rather than duplicating purchased water when applicable.

#### Outputs

##### Product flows

###### Prepared potatoes transferred (`prepared_potatoes_output`)

Calculate prepared potato output from measured transfer mass or a reconciled preparation mass balance.

- Selected flow: Prepared potatoes for freezing or cooking (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated received mass minus measured rejects and accountable losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen potato reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_mass_balance`
- Sources:
- Range: Provisional preparation-yield QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.6
  - Upper: 1.2
  - Unit: kg
  - Basis: prepared potato output per 1 kg net frozen potato reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Sorting, peeling, and trimming residues (`preparation_residue_output`)

Record potato residues and rejected material by destination and distinguish saleable by-product, animal-feed use, recovery, and waste treatment.

- Selected flow: Potato preparation residue (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass by destination or mass-balance remainder with reconciliation evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen potato reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_mass_balance`
- Sources:
- Range: Provisional preparation-residue QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.8
  - Unit: kg
  - Basis: per 1 kg net frozen potato reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater_output`)

Record wastewater leaving the foreground facility or entering on-site treatment, with destination and treatment state declared.

- Selected flow: Wastewater from potato preparation (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or reconciled water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen potato reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_water`
- Sources:
- Range: Provisional preparation-wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg net frozen potato reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Record direct emissions from on-site water treatment or fuel combustion only when they occur within this process and are supported by measurements or a cited calculation method.

### Process: Boiling or steaming, cooling, and dewatering (`cooking_conditioning`)

#### Inputs

##### Product flows

###### Prepared potatoes for cooking (`prepared_potatoes_cooking_input`)

Record the prepared potato transferred from preparation when the product is boiled or steamed before freezing.

- Selected flow: Prepared potatoes for cooking (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: equal to the measured or reconciled transfer from preparation for the cooked route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen potato reference product for the cooked route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_mass_balance`
- Sources: `un-cpc-3-0-21313`
- Range: Provisional cooked-route input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.6
  - Upper: 1.3
  - Unit: kg
  - Basis: per 1 kg net frozen potato reference product for the cooked route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooking and cooling water supplied (`cooking_water_input`)

Record water used for boiling, steam generation when supplied as water, cooling, and attributable cleaning, avoiding double counting with purchased steam.

- Selected flow: Process water (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled cooking and cooling water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen potato reference product for the cooked route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_utilities`
- Sources:
- Range: Provisional cooking-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg net frozen potato reference product for the cooked route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooking thermal energy supplied (`cooking_thermal_energy_input`)

Record purchased steam, hot water, or on-site fuel attributable to boiling or steaming, preserving the energy carrier and avoiding double counting boiler fuel and delivered steam.

- Selected flow: Thermal energy carrier or steam (Tiangong UUID unresolved)
- Flow property / unit: Energy or supplier quantity / MJ, kg steam, or documented unit
- Amount rule: metered or reconciled thermal-energy consumption converted with documented factors
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen potato reference product for the cooked route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_utilities`
- Sources:
- Range: Provisional cooking-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ
  - Basis: per 1 kg net frozen potato reference product for the cooked route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally expected. Record returned cooking waste entering treatment only when applicable.

##### Elementary flows

Record directly abstracted water as an elementary input when applicable and avoid duplicating it as purchased process water.

#### Outputs

##### Product flows

###### Cooked potatoes transferred to freezing (`cooked_potatoes_output`)

Record the drained or dewatered cooked potato mass transferred to freezing and declare whether the route is boiled or steamed.

- Selected flow: Boiled or steamed potatoes for freezing (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass after declared draining or dewatering
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen potato reference product for the cooked route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_mass_balance`
- Sources: `un-cpc-3-0-21313`
- Range: Provisional cooked-output QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.6
  - Upper: 1.3
  - Unit: kg
  - Basis: per 1 kg net frozen potato reference product for the cooked route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cooking and cooling wastewater (`cooking_wastewater_output`)

Record wastewater from boiling, cooling, draining, and attributable cleaning, with treatment destination declared.

- Selected flow: Wastewater from cooking and cooling (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or reconciled water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen potato reference product for the cooked route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_utilities`
- Sources:
- Range: Provisional cooking-wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg net frozen potato reference product for the cooked route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Record direct combustion emissions when heat is generated on site and a cited fuel-to-emission calculation or measured stack record is available.

### Process: Freezing and packaging (`freezing_packaging`)

#### Inputs

##### Product flows

###### Potato product entering freezing (`potatoes_to_freezing_input`)

Record uncooked prepared potato or cooked conditioned potato entering the freezer; do not aggregate routes unless production shares and route inventories are documented.

- Selected flow: Prepared or cooked potatoes entering freezing (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from the applicable upstream foreground process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen potato reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_mass_balance`
- Sources: `codex-cxc-8-1976`
- Range: Provisional freezer-input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.6
  - Upper: 1.3
  - Unit: kg
  - Basis: per 1 kg net frozen potato reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Freezing and packing electricity supplied (`freezing_electricity_input`)

Record electricity for the freezer, refrigeration auxiliaries, conveyors, packaging equipment, and attributable defrosting, separated from factory storage where metering permits.

- Selected flow: Electricity, supplied to site (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: metered or reconciled freezing and packing electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen potato reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_energy`
- Sources: `codex-cxc-8-1976`
- Range: Provisional freezing-electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 2
  - Unit: kWh
  - Basis: per 1 kg net frozen potato reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials supplied (`packaging_material_input`)

Record each primary, secondary, and tertiary packaging material by material and mass; include only the share attributable to the reference product.

- Selected flow: Packaging material by material type (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: bill-of-material mass plus measured or reconciled line loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen potato reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:
- Range: Provisional packaging-mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg
  - Basis: per 1 kg net frozen potato reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally expected. Record externally generated waste accepted for treatment only if it is actually part of the declared foreground system.

##### Elementary flows

No direct elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Frozen potato reference product (`frozen_potatoes_output`)

This is the quantitative reference output. Record net product mass after freezing and before adding packaging mass.

- Selected flow: Potatoes, frozen / 冷冻土豆 `cca3d996-be28-4f23-915d-6432bd1bdac3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference output of 1 kg net frozen potato product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

###### Packaging line losses (`packaging_waste_output`)

Record packaging scrap and rejected packed product separately by material and treatment destination.

- Selected flow: Packaging waste by material type (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured scrap or packaging mass-balance difference
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen potato reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:
- Range: Provisional packaging-waste QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg
  - Basis: per 1 kg net frozen potato reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Freezing-system refrigerant emissions (`freezing_refrigerant_emission`)

Calculate refrigerant emitted to air from equipment-specific make-up, recovery, and inventory-change records; identify the refrigerant species and do not report an unspecified aggregate as a characterized elementary flow.

- Selected flow: Refrigerant species emission to air (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: calculated refrigerant loss allocated to freezing and packing equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen potato reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_refrigerant`
- Sources:
- Range: Provisional refrigerant-loss QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg
  - Basis: refrigerant emitted per 1 kg net frozen potato reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Factory frozen storage (`frozen_storage`)

#### Inputs

##### Product flows

###### Frozen packaged potatoes entering storage (`stored_product_input`)

Record the reference product transferred into frozen storage and reconcile storage losses and dispatch mass.

- Selected flow: Potatoes, frozen / 冷冻土豆 `cca3d996-be28-4f23-915d-6432bd1bdac3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass normalized to the dispatch-ready output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen potato reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_product_records`
- Sources: `codex-cxc-8-1976`
- Range: Provisional storage-input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.1
  - Unit: kg
  - Basis: per 1 kg net frozen potato reference product dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Frozen-storage electricity supplied (`storage_electricity_input`)

Record electricity for refrigeration, fans, lighting, defrosting, and attributable storage auxiliaries over the declared storage duration.

- Selected flow: Electricity, supplied to site (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: metered or reconciled storage electricity allocated using occupied mass-time or another disclosed causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen potato reference product over the declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_energy`
- Sources: `codex-cxc-8-1976`
- Range: Provisional storage-electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh
  - Basis: per 1 kg net frozen potato reference product over the declared factory storage duration
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally expected.

##### Elementary flows

No direct elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Dispatch-ready frozen potato product (`dispatch_ready_product_output`)

Record the net mass of conforming frozen potato product at the declared factory gate after the represented storage period.

- Selected flow: Potatoes, frozen / 冷冻土豆 `cca3d996-be28-4f23-915d-6432bd1bdac3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference output of 1 kg net dispatch-ready frozen potato product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

###### Frozen-storage product losses (`storage_product_loss_output`)

Record damaged, thawed, out-of-specification, or otherwise lost product by treatment or recovery destination.

- Selected flow: Frozen potato product loss (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured inventory write-off or reconciled storage mass-balance difference
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen potato reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_product_records`
- Sources:
- Range: Provisional frozen-storage-loss QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg
  - Basis: per 1 kg net frozen potato reference product dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Frozen-storage refrigerant emissions (`storage_refrigerant_emission`)

Calculate refrigerant emitted to air from storage-system make-up, recovery, and inventory-change records and identify the refrigerant species.

- Selected flow: Refrigerant species emission to air (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: calculated refrigerant loss allocated by equipment service and occupied mass-time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen potato reference product over the declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigerant`
- Sources:
- Range: Provisional storage-refrigerant QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg
  - Basis: refrigerant emitted per 1 kg net frozen potato reference product over the declared storage duration
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | shared foreground operations | Avoid allocation where practicable by subdividing uncooked and cooked routes, freezing lines, package formats, and storage periods, and by directly metering their material and energy use. | `eu-pef-2021-2279` |
| `allocation_rule_2` | potato residues and saleable secondary outputs | First classify each output as reference product, saleable co-product, recoverable material, or waste and maintain a reconciled mass balance. Do not assign zero burden to a saleable output without justification. | `eu-pef-2021-2279` |
| `allocation_rule_3` | unavoidable shared burdens | Use a physical causal driver such as measured mass, equipment time, thermal load, or occupied mass-time when subdivision is not possible. Use economic allocation only when no defensible physical relation exists, and disclose prices, reference period, shares, and a sensitivity check. | `eu-pef-2021-2279` |
| `allocation_rule_4` | recycling, recovery, and avoided products | Keep collection and treatment burdens within the declared boundary and apply any recycling or substitution credit only in the downstream model under one disclosed method; do not count both a recovered-material output and an avoided-product credit in the foreground dataset. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_mass_balance` | `receiving_preparation` | raw potatoes, prepared transfer, and residues | weighbridge, receiving, batch, transfer, reject, and waste records | lot_id; received_mass; prepared_transfer_mass; reject_or_residue_mass; destination; inventory_change; timestamp | calibrated scales and reconciled production records | kg | each lot or batch | all represented production days | all included receiving and preparation lines | sum attributable masses by route and divide by conforming reference-product output; reconcile inventory change | calibration records; lot traceability; signed mass-balance reconciliation |
| `cp_preparation_water` | `receiving_preparation` | preparation water and wastewater | meter, invoice, tank, and discharge records | opening_reading; closing_reading; water_source; discharge_quantity; production_period; shared_use_driver | calibrated meter preferred; reconcile invoice or tank records when dedicated metering is absent | kg or m3 with documented conversion | continuous or each production shift | same period as represented production | all included preparation equipment and sanitation attributable to the product | subtract non-production and non-attributable use, then normalize to conforming output | meter calibration; invoices; water-balance check; allocation record |
| `cp_preparation_energy` | `receiving_preparation` | preparation electricity | meter and equipment-runtime records | meter_open; meter_close; runtime; rated_load_if_needed; production_period; shared_use_driver | dedicated meter preferred; otherwise reconciled facility meter with documented causal allocation | kWh | continuous or each shift | same period as represented production | all included preparation equipment | sum measured use or calculate reconciled allocated use and normalize to conforming output | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_cooking_mass_balance` | `cooking_conditioning` | prepared input and cooked transfer | batch and scale records | batch_id; route; prepared_input_mass; cooked_output_mass; drain_or_dewater_condition; timestamp | calibrated batch or line scales | kg | each cooked batch | all represented cooked-route production | all included boiling, steaming, cooling, and dewatering lines | sum by boiled or steamed route and normalize to its conforming output | calibration; batch traceability; mass-balance check |
| `cp_cooking_utilities` | `cooking_conditioning` | cooking water, wastewater, steam, fuel, and electricity | meter, supplier, boiler, batch, and discharge records | carrier; quantity; unit; meter_readings; batch_id; wastewater_quantity; conversion_factor | dedicated metering where available; otherwise documented engineering reconciliation | kg, kWh, MJ, or supplier unit | each batch, shift, or meter period | same period as represented cooked-route production | all included cooking, cooling, and attributable utility equipment | aggregate by route, avoid steam/fuel double counting, convert with documented factors, and normalize to cooked-route output | meter calibration; supplier records; conversion worksheet; water and energy reconciliation |
| `cp_freezing_mass_balance` | `freezing_packaging` | freezer input and frozen output | transfer, freezer, and packing records | route; input_mass; frozen_net_output_mass; rejected_mass; inventory_change; timestamp | calibrated line scales and packing records | kg | each lot or shift | all represented freezing production | all included freezing and packing lines | reconcile input, output, loss, and inventory change by route and normalize to net reference product | calibration; lot traceability; mass-balance check |
| `cp_freezing_energy` | `freezing_packaging` | freezing and packing electricity | submeter, facility meter, runtime, and production records | meter_open; meter_close; freezer_runtime; defrost_energy; packed_output_mass; shared_use_driver | dedicated submeter preferred; otherwise documented engineering or causal allocation | kWh | continuous or each shift | same period as represented freezing production | all included freezing, refrigeration-auxiliary, and packing equipment | separate freezing from storage where possible and normalize attributable use to net packed output | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_packaging_records` | `freezing_packaging` | packaging inputs and waste | bill of materials, purchase, issue, return, and scrap records | package_format; material; unit_mass; units_used; scrap_mass; returned_mass; packed_output_mass | item-count times verified unit mass, reconciled to material issues and scrap | kg | each package-format lot or campaign | same period as represented production | all included packaging formats and packing lines | calculate net material input and scrap by material per kg net packed output | supplier specification; sample weighing; inventory reconciliation |
| `cp_freezing_refrigerant` | `freezing_packaging` | freezing-system refrigerant loss | service, purchase, recovery, charge, and equipment records | refrigerant_species; opening_charge; additions; recovery; closing_charge; equipment_id; service_date | equipment-specific mass balance using verified service records | kg | each service event and at least annually | covers the represented production period | all freezing-system equipment serving the represented production | calculate net loss and allocate using equipment service, runtime, or cooling-load driver | service certificates; cylinder weights; equipment log; calculation worksheet |
| `cp_storage_product_records` | `frozen_storage` | stored product input, output, duration, and losses | warehouse management, dispatch, write-off, and temperature records | lot_id; mass_in; mass_out; entry_time; dispatch_time; write_off_mass; loss_reason; temperature_series | warehouse records reconciled to periodic physical inventory | kg and d | each movement with daily monitoring | complete declared factory-storage period | all frozen-storage rooms and lots serving the represented product | calculate occupied mass-time and reconcile dispatch plus loss to receipts and inventory change | inventory reconciliation; lot traceability; temperature-monitoring completeness |
| `cp_storage_energy` | `frozen_storage` | frozen-storage electricity | submeter, facility meter, occupancy, and operating records | meter_open; meter_close; occupied_mass_time; defrost_energy; shared_use_driver; period | dedicated submeter preferred; otherwise documented causal allocation based on storage service | kWh | continuous or monthly meter period | complete declared factory-storage period | all included cold rooms and attributable storage auxiliaries | allocate attributable use to occupied mass-time and normalize to the declared reference-product duration | meter calibration; invoice reconciliation; occupancy record; allocation worksheet |
| `cp_storage_refrigerant` | `frozen_storage` | storage-system refrigerant loss | service, purchase, recovery, charge, and equipment records | refrigerant_species; opening_charge; additions; recovery; closing_charge; equipment_id; service_date | equipment-specific mass balance using verified service records | kg | each service event and at least annually | covers the declared factory-storage period | all storage-system equipment serving the represented product | calculate net loss and allocate by equipment service and occupied mass-time | service certificates; cylinder weights; equipment log; calculation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_rule_1` | all inventory rows | Normalized amount = attributable quantity for the represented period / net conforming frozen potato output for the same period. | attributable quantity; net conforming output | amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calculation_rule_2` | preparation and cooking mass balances | Reconcile opening inventory + inputs = outputs + residues + wastewater-carried solids when quantified + closing inventory + documented unexplained difference; report the unexplained difference rather than forcing balance. | measured masses; inventory changes; residue and loss records | reconciled mass balance and unexplained difference |  |
| `calculation_rule_3` | mixed uncooked, boiled, or steamed production | Aggregate only after calculating route-specific inventories: combined amount = sum(route amount x conforming route output) / sum(conforming route output). | route-specific amount; route-specific conforming output | production-weighted combined amount | `un-cpc-3-0-21313` |
| `calculation_rule_4` | storage energy | Storage amount = attributable storage electricity / occupied net-product mass-time, multiplied by the declared reference-product storage duration. | electricity; occupied mass-time; declared duration | kWh per kg reference product for declared duration | `codex-cxc-8-1976` |
| `calculation_rule_5` | refrigerant emissions | Refrigerant loss = opening charge + additions - recovered quantity - closing charge, adjusted for documented transfers; allocate only the equipment share serving the represented product. | charge inventory; additions; recovery; transfers; allocation driver | kg emitted refrigerant species per reference flow |  |
| `calculation_rule_6` | packaging | Packaging input by material = verified unit mass x units used + attributable line loss - reusable packaging returned within the same accounting treatment; normalize by net product mass. | unit mass; item count; loss; returns; net product mass | kg packaging material per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `data_quality_1` | product identity and scope | Retain evidence for CPC 21313 scope, cut form, peel status, uncooked/boiled/steamed route, exclusion of mashed or fried products, package format, factory gate, and represented storage period. | product specification; label; batch recipe or route record; `un-cpc-3-0-21313` |
| `data_quality_2` | temporal representativeness | Cover a representative operating period that includes normal production, sanitation, defrosting, start-up, shutdown, and storage conditions, or disclose exclusions and their expected influence. | production calendar; meter coverage; downtime and cleaning logs; `eu-pef-2021-2279` |
| `data_quality_3` | geographical and technological representativeness | Identify facility geography, electricity and fuel supply, water source, preparation and cooking configuration, freezing technology, refrigerant species, package format, and storage system. | facility metadata; supplier records; equipment register; `eu-pef-2021-2279` |
| `data_quality_4` | completeness and reconciliation | Reconcile product mass, water, energy, packaging, wastes, and refrigerants across the represented period; quantify missing coverage, allocation shares, inventory changes, and unexplained differences. | signed reconciliation; meter and invoice cross-check; completeness statement |
| `data_quality_5` | provisional ranges | Treat every `reasoned_estimate` range only as a QA screen. Flag values outside the range for review, and replace the range with representative foreground or source-backed evidence before publication-critical use unless a reviewer explicitly accepts it. | review record; replacement source or approved foreground summary |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference flow and identity | Confirm the canonical PCR id, product-flow UUID, Mass UUID, Units of mass UUID, kg reference unit, 1 kg net reference amount, and all required qualifiers; reject mashed, fried, chipped, fat-precooked, or otherwise prepared products. | `un-cpc-3-0-21313` |
| `validation_rule_2` | route and process coverage | Require preparation, freezing and packaging, and declared factory storage; require cooking-conditioning only for boiled or steamed product, and confirm that route-specific inventories or production-weighted aggregation are used. | `un-cpc-3-0-21313`; `codex-cxc-8-1976` |
| `validation_rule_3` | mass balance | Check that raw-potato inputs, intermediate transfers, final output, residues, losses, wastewater-related mass where material, and inventory changes reconcile; report any unexplained difference and do not silently force closure. |  |
| `validation_rule_4` | cold-chain inventory | Confirm that freezing and storage electricity or purchased cooling, declared storage duration, temperature records, defrosting where material, refrigerant species and losses, and frozen-product losses are included or explicitly justified as zero or unavailable. | `codex-cxc-8-1976` |
| `validation_rule_5` | allocation and completeness | Confirm that shared burdens use subdivision, direct metering, or a disclosed causal driver; verify allocation shares sum to one and that no recycling or substitution benefit is double counted. | `eu-pef-2021-2279` |
| `validation_rule_6` | evidence readiness | Report unresolved Tiangong inventory-flow UUIDs, missing collection coverage, and every retained `reasoned_estimate`; candidate guidance is inconclusive for publication until those issues are resolved or explicitly accepted through review. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground dataset for frozen potato production |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review, identity resolution, and evidence-quality review |
| allowed_use | Modelling frozen whole or cut potatoes that are uncooked or boiled/steamed in water, with declared route, package, factory storage, geography, technology, and reference period |
| excluded_use | Frozen mashed potatoes, French fries, potato chips, fat-precooked or formulated potato products; downstream cold-chain, retail, consumer preparation, or end-of-life unless separately modelled |
| required_metadata | canonical PCR id; product-flow UUID; CPC reference; product form; peel and cooking state; facility geography; reference period; technology; package format; net mass; storage duration and temperature-monitoring basis; allocation; upstream dataset identities |
| required_quality_disclosure | foreground coverage; meter and mass-balance completeness; allocation shares; route aggregation; temporal, geographical, and technological representativeness; refrigerant method; exclusions; unresolved UUIDs; retained reasoned estimates and review status |
| update_trigger | Material change in product scope, cooking route, preparation yield, freezing or storage technology, refrigerant, package format, allocation, facility energy or water supply, storage duration, upstream datasets, or representative foreground evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-21313` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, subclass 21313, pp. 81 and 83, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Product-category inclusions and exclusions; distinction between uncooked/boiled/steamed frozen potatoes and otherwise prepared potatoes |
| `codex-cxc-8-1976` | `standard` | Codex Alimentarius, CXC 8-1976, Code of Practice for the Processing and Handling of Quick Frozen Foods, last modified 2008, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ (retrieved 2026-08-11) | High-level quick-freezing, handling, storage, and cold-chain process and record scope; no product-specific quantitative range is taken from this source |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Official Journal L 471, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Life-cycle inventory completeness, representative and verifiable data, allocation disclosure, dataset quality, and downstream-use controls |
