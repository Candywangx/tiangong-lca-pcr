---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-chickens-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Meat of chickens, frozen

## 1. Scope and Applicability

This PCR applies to foreground data packages for raw meat of domestic chickens that has been slaughtered, dressed, chilled as needed, optionally cut or deboned, frozen, and held frozen for dispatch from the producing plant. It covers whole carcasses and meat cuts, with bone or boneless and with skin or skinless, when the product is sold as frozen chicken meat.

The foreground boundary begins when live chickens accepted for slaughter enter the slaughter facility and ends when conforming frozen chicken meat leaves plant-gate frozen storage. Farm production, feed production, and transport before acceptance are represented by linked upstream datasets. Downstream distribution, retail, cooking, consumption, and end-of-life after the plant gate are excluded. Edible offal sold separately, mechanically separated meat, cooked or otherwise manufactured chicken products, fresh or chilled chicken meat, and non-chicken poultry meat are outside the product category.

The data producer shall model the actual plant route. Cutting or deboning, glazing, primary packaging, secondary packaging, and refrigerant use are conditional where the declared product and technology require them. All non-reference inventory UUIDs remain unresolved until an exact Tiangong identity is selected; a semantic candidate in this PCR is not authority to reuse an unrelated UUID.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-chickens-frozen |
| classification_refs | CPC 3.0: 21141 — Meat of chickens, frozen |
| covered_products | Raw frozen meat of domestic chickens, including whole carcasses and cuts, bone-in or boneless, skin-on or skinless, with glazing and packaging states declared |
| excluded_products | Fresh or chilled chicken meat; edible chicken offal marketed separately; mechanically separated meat; cooked, seasoned, cured, canned, or otherwise manufactured chicken products; meat of other poultry species |
| representative_product | Frozen raw chicken meat, production mix at plant |
| production_route | Live-bird reception, slaughter and dressing, chilling, conditional cutting or deboning, freezing, conditional glazing and packaging, frozen storage, and plant-gate dispatch |
| market_state | Frozen finished product at the producing plant gate, maintained at -18 °C or colder unless a stricter applicable specification is declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Raw frozen meat of domestic chickens supplied at the producing plant gate |
| How much | 1 kg net chicken meat, excluding packaging and excluding separately marketed co-products |
| How well | Product identity, cut, bone status, skin status, glazing fraction, packaging inclusion, and frozen-temperature condition are declared; product remains within the applicable food-safety and commercial specification |
| How long or cycle | Through the declared plant frozen-storage period up to dispatch; storage duration is reported |
| reference_flow_link | `frozen_chicken_meat_at_plant_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Meat of chickens, frozen `00dbb94a-580a-4aae-979b-a7b1f4278116` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species: domestic chicken; product form and cut; bone status; skin status; net meat mass basis; glazing mass fraction; packaging included or excluded; freezing technology; plant geography; production period; frozen-storage duration; dispatch temperature; allocation method |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net frozen chicken meat as the quantitative reference. Exclude packaging and separately marketed co-products from the reference mass. |
| `glaze_mass_separation` | glazed product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure gross frozen mass and glaze mass separately; calculate net chicken-meat mass after subtracting glaze water. Declare the measurement method and sampling plan. |
| `input_output_mass_consistency` | live birds, meat intermediates, final meat, co-products, waste, and wastewater solids | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert all mass records to kg and retain wet/dry basis and measurement point. Reconcile each production period against the declared mass-balance perimeter. |
| `frozen_temperature_condition` | reference product and frozen storage | Temperature | °C | Record product temperature at freezer exit and dispatch, plus continuous or representative cold-store records. The declared frozen product shall be maintained at -18 °C or colder, subject only to applicable documented tolerances. |
| `storage_duration_basis` | frozen storage electricity and refrigerant losses | Time | day | Record average and range of residence time. Normalize duration-dependent inventories to the actual kg-day service before reporting them per 1 kg reference product. |
| `energy_carrier_separation` | electricity, fuels, steam, heat, and refrigeration | Energy or carrier-specific property | kWh, MJ, or carrier mass/volume | Preserve measured carrier units and conversion factors. Do not combine electricity, thermal energy, and refrigerant make-up into one undifferentiated energy total. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_stages` | foreground plant operations | Include live-bird reception after facility acceptance, slaughter, dressing, carcass washing where used, chilling, conditional cutting or deboning, freezing, conditional glazing and packaging, frozen storage, cleaning and sanitation, on-site utilities allocated to these stages, and management of outputs crossing the foreground boundary. | codex-cxc-58-2005; codex-cxc-8-1976 |
| `boundary_upstream_live_birds` | live-chicken supply | Represent farm production, feed, hatchery burdens where applicable, and transport before slaughter-facility acceptance through traceable upstream datasets; do not silently treat live birds as burden-free. | fao-leap-poultry-2016 |
| `boundary_cold_chain` | freezing and plant frozen storage | Include electricity, thermal loads, refrigerant make-up and direct losses, defrosting, and duration-dependent frozen storage through plant-gate dispatch. Declare freezer technology, refrigerant, storage duration, and temperature records. | codex-cxc-8-1976 |
| `boundary_packaging` | packaging operations | Include packaging materials and packaging waste when packaging occurs before the declared plant gate. If packaging is excluded from the reference product mass, it still remains an inventory input when inside the boundary. | codex-cxc-8-1976 |
| `boundary_wastewater_and_byproducts` | slaughter, cutting, cleaning, and freezing | Record wastewater, edible co-products, animal by-products, condemned material, feathers, blood, bones, trimmings, product losses, and packaging waste separately when they cross the foreground boundary; link off-site treatment or recovery through appropriate datasets. | codex-cxc-58-2005 |
| `boundary_downstream_exclusion` | downstream life-cycle stages | Exclude distribution after plant dispatch, retail, cooking, consumption, and post-consumer end-of-life. Disclose any study-specific extension instead of presenting it as PCR-conforming plant-gate scope. | fao-leap-poultry-2016 |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live domestic chickens accepted at the slaughter-facility reception point, with accepted mass, mortality or rejection, supplier, origin, and transport handover recorded |
| starting_condition_role | Foreground plant-gate input and link point to upstream poultry-production and inbound-transport datasets |
| product_classification_scope | Frozen raw chicken meat corresponding to CPC 3.0 code 21141; classification is mapping context and does not define canonical PCR identity |
| recursive_input_rule | A purchased frozen chicken-meat input within this product category shall be recorded as an upstream product input with supplier, product form, mass, and dataset reference; do not recursively reproduce its upstream production inside the same foreground process |
| upstream_dataset_requirement | Use traceable upstream datasets for live-chicken production, feed and hatchery burdens where applicable, inbound transport, purchased energy and materials, packaging, and off-site waste or wastewater treatment |
| disclosure | Declare plant geography, reporting period, product mix, product form, allocation method, cut and bone/skin states, glazing fraction, packaging boundary, freezer and refrigerant technology, frozen-storage duration, dispatch temperature, upstream dataset choices, exclusions, and data gaps |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `slaughter_dressing_chilling` | Live-bird reception, slaughter, dressing, and primary chilling | required | Always included for chicken meat produced from live birds at the reporting plant | Foreground conversion of accepted live birds into chilled dressed meat and co-products | kg chilled dressed chicken output |
| `cutting_deboning` | Cutting and deboning | conditional | Include when the reference product is a cut, portion, or boneless product, or when cutting losses occur before freezing | Foreground product preparation | kg prepared chicken meat output |
| `freezing_glazing_packaging` | Freezing, conditional glazing, and packaging | required | Freezing is required; include glazing and each packaging level only when performed before the declared plant gate | Foreground conversion to frozen saleable form | kg frozen chicken meat before frozen storage |
| `frozen_storage_dispatch` | Frozen storage and plant-gate dispatch | required | Always include storage between freezer exit and dispatch; zero duration is allowed only with evidence | Foreground cold-store service and final reference output | kg reference product dispatched and kg-day stored |

### Process: Live-bird reception, slaughter, dressing, and primary chilling (`slaughter_dressing_chilling`)

#### Inputs

##### Product flows

###### Accepted live chickens (`live_chickens_input`)

Record live chickens after facility acceptance, including received mass, rejected or dead-on-arrival mass, supplier, origin, and upstream dataset link.

- Selected flow: Unresolved — select the exact Tiangong live-chicken product flow before publication
- Flow property / unit: Mass / kg
- Amount rule: accepted live-chicken mass assigned to the reporting product group
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_bird_intake`
- Sources: `fao-leap-poultry-2016`
- Range: Provisional live-bird input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.1
  - Upper: 4.0
  - Unit: kg/kg reference product
  - Basis: accepted live-bird mass per 1 kg frozen chicken meat dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process and sanitation water (`slaughter_water`)

Record metered water used for scalding, washing, evisceration, chilling where applicable, cleaning, and sanitation, net of separately metered reuse.

- Selected flow: Unresolved — select the exact Tiangong water product flow before publication
- Flow property / unit: Volume or Mass / m3 or kg
- Amount rule: metered water allocated to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg chilled dressed chicken output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Range: Provisional water-use QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.05
  - Unit: m3/kg process output
  - Basis: metered process and sanitation water per kg chilled dressed chicken
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased electricity (`slaughter_electricity`)

Record interval-metered or invoice-reconciled electricity for reception, slaughter, dressing, pumps, ventilation, chilling, cleaning, and allocated shared utilities.

- Selected flow: Unresolved — select a geography- and voltage-appropriate Tiangong electricity flow before publication
- Flow property / unit: Energy / kWh
- Amount rule: measured electricity allocated to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg chilled dressed chicken output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Range: Provisional electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 1.5
  - Unit: kWh/kg process output
  - Basis: electricity per kg chilled dressed chicken
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy carriers (`slaughter_thermal_energy`)

Record fuels, steam, or purchased heat separately by carrier for scalding, hot water, sanitation, and other thermal duties.

- Selected flow: Unresolved — select each exact Tiangong fuel, steam, or heat flow before publication
- Flow property / unit: Energy or carrier property / MJ or native carrier unit
- Amount rule: measured carrier use converted with documented factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg chilled dressed chicken output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_records`
- Range: Provisional thermal-energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: MJ/kg process output
  - Basis: delivered thermal energy per kg chilled dressed chicken
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Chilled dressed chicken intermediate (`chilled_chicken_intermediate`)

Record saleable chilled carcass or meat mass transferred to cutting or freezing, with temperature and bone/skin state.

- Selected flow: Unresolved — select an exact Tiangong intermediate product flow only if one exists
- Flow property / unit: Mass / kg
- Amount rule: weighed chilled dressed chicken transferred from the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per process batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Range: Provisional chilled-output yield QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.25
  - Upper: 0.95
  - Unit: kg/kg accepted live chickens
  - Basis: chilled dressed chicken mass divided by accepted live-chicken mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Edible co-products (`edible_coproducts`)

Record separately marketed edible co-products by product type and measured mass; do not include them in the reference product mass.

- Selected flow: Unresolved — select exact Tiangong co-product flows before publication
- Flow property / unit: Mass / kg
- Amount rule: measured edible co-product mass by type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg chilled dressed chicken output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Range: Provisional edible co-product QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg process output
  - Basis: edible co-product mass per kg chilled dressed chicken
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Animal by-products and condemned material (`animal_byproducts_waste`)

Record blood, feathers, inedible viscera, condemned material, mortality, and other animal by-products separately by destination and regulatory status.

- Selected flow: Unresolved — select exact Tiangong waste or recoverable-product flows according to destination
- Flow property / unit: Mass / kg
- Amount rule: measured mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg chilled dressed chicken output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `codex-cxc-58-2005`
- Range: Provisional animal-by-product QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 2.5
  - Unit: kg/kg process output
  - Basis: animal by-products and condemned material per kg chilled dressed chicken
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Slaughter wastewater (`slaughter_wastewater`)

Record wastewater volume or mass at the process boundary and retain sampling data for solids, organic load, nutrients, fats, and treatment destination where available.

- Selected flow: Unresolved — select the exact Tiangong wastewater flow or treatment input before publication
- Flow property / unit: Volume or Mass / m3 or kg
- Amount rule: metered discharge plus documented internal transfers to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg chilled dressed chicken output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Range: Provisional wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.0005
  - Upper: 0.06
  - Unit: m3/kg process output
  - Basis: wastewater leaving this process per kg chilled dressed chicken
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Cutting and deboning (`cutting_deboning`)

#### Inputs

##### Product flows

###### Chilled chicken for cutting (`cutting_chilled_input`)

Record the mass and declared product state of chilled chicken entering cutting or deboning.

- Selected flow: Unresolved — select an exact Tiangong intermediate product flow only if one exists
- Flow property / unit: Mass / kg
- Amount rule: weighed chilled chicken issued to cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cutting batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`

###### Cutting electricity and water (`cutting_utilities`)

Record electricity and water as separate inventory flows; this combined card defines the shared collection requirement but shall project to separate concrete exchanges.

- Selected flow: Unresolved — select exact Tiangong electricity and water flows before publication
- Flow property / unit: Energy and Volume or Mass / kWh and m3 or kg
- Amount rule: metered utilities allocated to cutting and sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared chicken meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Range: Provisional combined utility QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh-equivalent or m3 reported separately per kg process output
  - Basis: separate cutting electricity and water intensities screened against this broad per-flow upper bound
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Prepared chicken meat intermediate (`prepared_chicken_intermediate`)

Record prepared meat transferred to freezing, with cut, bone, skin, and net-meat states.

- Selected flow: Unresolved — select an exact Tiangong intermediate product flow only if one exists
- Flow property / unit: Mass / kg
- Amount rule: weighed prepared meat transferred to freezing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cutting batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Range: Provisional cutting-yield QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.3
  - Upper: 1.0
  - Unit: kg/kg chilled chicken input
  - Basis: prepared meat mass divided by chilled chicken input mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Bones, skin, and trimmings (`cutting_residues`)

Record bones, skin, fat, trimmings, and rejected meat separately by whether they are co-products, recoverable materials, animal by-products, or wastes.

- Selected flow: Unresolved — select exact Tiangong product or waste flows according to actual destination
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared chicken meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Range: Provisional cutting-residue QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg/kg process output
  - Basis: cutting residues per kg prepared chicken meat
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Freezing, conditional glazing, and packaging (`freezing_glazing_packaging`)

#### Inputs

##### Product flows

###### Prepared chicken meat for freezing (`freezing_meat_input`)

Record net chicken-meat mass entering the freezer, excluding any subsequently added glaze and packaging.

- Selected flow: Unresolved — select an exact Tiangong chilled chicken intermediate only if one exists
- Flow property / unit: Mass / kg
- Amount rule: weighed net chicken meat entering freezing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per freezing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_packaging_records`

###### Freezing electricity (`freezing_electricity`)

Record electricity for freezers, conveyors, pumps, fans, defrosting, and allocated refrigeration auxiliaries, separated from cold-store electricity.

- Selected flow: Unresolved — select a geography- and voltage-appropriate Tiangong electricity flow before publication
- Flow property / unit: Energy / kWh
- Amount rule: measured electricity allocated to freezing and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg frozen chicken meat before storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_packaging_records`
- Sources: `codex-cxc-8-1976`
- Range: Provisional freezing-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 3.0
  - Unit: kWh/kg process output
  - Basis: freezing and packaging electricity per kg frozen chicken meat before storage
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Glazing water (`glazing_water`)

Record potable water retained as glaze separately from process water when glazing is applied.

- Selected flow: Unresolved — select the exact Tiangong water product flow before publication
- Flow property / unit: Mass / kg
- Amount rule: gross frozen mass minus measured net chicken-meat mass, reconciled to applied glaze water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_packaging_records`
- Range: Provisional glazing-fraction QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net chicken meat
  - Basis: retained glaze water per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and tertiary packaging separately by material and mass when applied before the plant gate.

- Selected flow: Unresolved — select exact Tiangong packaging material flows before publication
- Flow property / unit: Mass / kg
- Amount rule: issued packaging minus returned and separately measured unused packaging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_packaging_records`
- Range: Provisional packaging QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net chicken meat
  - Basis: total packaging material per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant make-up for freezing (`freezing_refrigerant_makeup`)

Record refrigerant type and make-up charged to freezing equipment, using a documented allocation of the site refrigerant balance.

- Selected flow: Unresolved — select the exact Tiangong refrigerant product flow before publication
- Flow property / unit: Mass / kg
- Amount rule: allocated annual refrigerant make-up from inventory reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg frozen chicken meat before storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Range: Provisional refrigerant make-up QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg process output
  - Basis: allocated refrigerant make-up per kg frozen chicken meat before storage
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Frozen chicken meat before plant storage (`frozen_chicken_before_storage`)

Record net chicken-meat mass leaving freezing separately from glaze and packaging mass, with freezer-exit temperature.

- Selected flow: Unresolved — internal intermediate; do not reuse the reference-product UUID unless the exchange is the final plant-gate output
- Flow property / unit: Mass / kg
- Amount rule: net frozen chicken-meat mass after deducting glaze and packaging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per freezing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_packaging_records`
- Sources: `codex-cxc-8-1976`

##### Waste flows

###### Packaging and product losses (`freezing_packaging_waste`)

Record damaged packaging, rejected frozen product, purge, spilled glaze, and other process losses separately by material and destination.

- Selected flow: Unresolved — select exact Tiangong waste flows before publication
- Flow property / unit: Mass / kg
- Amount rule: measured losses and stock reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg frozen chicken meat before storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_packaging_records`
- Range: Provisional freezing and packaging loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg process output
  - Basis: material losses per kg frozen chicken meat before storage
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct refrigerant emissions from freezing (`freezing_refrigerant_emissions`)

Calculate direct emissions by refrigerant species from the reconciled make-up balance unless leak measurements provide a better basis.

- Selected flow: Unresolved — select the exact Tiangong elementary flow for each emitted refrigerant before publication
- Flow property / unit: Mass / kg
- Amount rule: allocated refrigerant loss by species after subtracting recovered and transferred quantities
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg frozen chicken meat before storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Range: Provisional direct refrigerant-emission QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg process output
  - Basis: direct refrigerant emissions per kg frozen chicken meat before storage
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Frozen storage and plant-gate dispatch (`frozen_storage_dispatch`)

#### Inputs

##### Product flows

###### Frozen chicken entering storage (`stored_frozen_chicken_input`)

Record net chicken-meat mass, glaze, packaging, entry temperature, storage location, and entry time.

- Selected flow: Unresolved — internal intermediate; do not use the reference-product UUID for an input without applying the recursive-input rule
- Flow property / unit: Mass / kg
- Amount rule: weighed or stock-reconciled net chicken-meat mass entering storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per storage lot
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_store_records`

###### Cold-store electricity (`cold_store_electricity`)

Record electricity for refrigeration, fans, lighting, defrost, doors, and allocated auxiliaries during the declared plant storage period.

- Selected flow: Unresolved — select a geography- and voltage-appropriate Tiangong electricity flow before publication
- Flow property / unit: Energy / kWh
- Amount rule: metered cold-store electricity allocated by measured load or kg-day occupancy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg-day of frozen chicken storage, then per 1 kg reference product using actual residence time
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_store_records`
- Sources: `codex-cxc-8-1976`
- Range: Provisional cold-store electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.0001
  - Upper: 0.2
  - Unit: kWh/kg-day
  - Basis: cold-store electricity per kg-day occupancy
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant make-up for cold storage (`cold_store_refrigerant_makeup`)

Record refrigerant type and the cold-store share of reconciled site make-up.

- Selected flow: Unresolved — select the exact Tiangong refrigerant product flow before publication
- Flow property / unit: Mass / kg
- Amount rule: allocated annual refrigerant make-up by equipment or cooling load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product using actual residence time
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Range: Provisional cold-store refrigerant make-up QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg reference product
  - Basis: allocated refrigerant make-up for the declared plant storage period
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Frozen chicken meat at plant gate (`frozen_chicken_meat_at_plant_gate`)

This is the sole reference-product output. Report net chicken-meat mass excluding glaze and packaging, together with all required qualifiers and dispatch temperature.

- Selected flow: Meat of chickens, frozen `00dbb94a-580a-4aae-979b-a7b1f4278116`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed quantitative reference of 1 kg net frozen chicken meat dispatched
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `codex-cxc-8-1976`

##### Waste flows

###### Cold-store product losses (`cold_store_product_loss`)

Record damaged, thawed, rejected, or inventory-short frozen product separately by destination.

- Selected flow: Unresolved — select exact Tiangong product or waste flows according to destination
- Flow property / unit: Mass / kg
- Amount rule: stock reconciliation and rejection records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_store_records`
- Range: Provisional cold-store product-loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg reference product
  - Basis: cold-store product losses per kg dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct refrigerant emissions from cold storage (`cold_store_refrigerant_emissions`)

Calculate direct emissions by refrigerant species from the reconciled cold-store make-up balance unless direct leak measurements are available.

- Selected flow: Unresolved — select the exact Tiangong elementary flow for each emitted refrigerant before publication
- Flow property / unit: Mass / kg
- Amount rule: allocated refrigerant loss by species after subtracting recovered and transferred quantities
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product using actual residence time
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Range: Provisional cold-store refrigerant-emission QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg reference product
  - Basis: direct refrigerant emissions for the declared plant storage period
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | separately metered processes and product lines | Avoid allocation by subdividing processes and directly assigning measured materials, energy, emissions, and wastes to the product line whenever technically feasible. | iso-14044-2006 |
| `allocation_co_products` | edible co-products, recoverable animal by-products, and saleable cutting outputs | After subdivision, allocate remaining shared burdens using a documented physical causal relationship where one can be demonstrated. If no defensible causal relationship exists, use mass allocation on consistent wet-mass product outputs and report an economic-allocation sensitivity. | iso-14044-2006; fao-leap-poultry-2016 |
| `allocation_waste_treatment` | wastes and animal by-products sent to treatment | Do not assign avoided-product credits without an explicitly declared substitution method and receiving-system boundary. Include treatment burdens and disclose any recovery credit separately. | iso-14044-2006 |
| `allocation_shared_utilities` | refrigeration, boilers, water systems, sanitation, wastewater treatment, and site services | Allocate shared utilities using measured submetering where available; otherwise use a documented causal driver such as equipment load, operating hours, water volume, organic load, occupied cold-store kg-day, or throughput. | iso-14044-2006 |
| `allocation_consistency` | reference product and all co-products | Apply the selected allocation hierarchy consistently across the reporting period and disclose product quantities, allocation factors, factor sum, prices and reference period when economic sensitivity is used, and any material exclusions. | iso-14044-2006; fao-leap-poultry-2016 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_bird_intake` | `slaughter_dressing_chilling` | accepted live chickens and reception losses | weighbridge, receiving, supplier, and rejection records | received gross mass; tare; accepted mass; rejected mass; dead-on-arrival mass; supplier; origin; arrival time; upstream dataset reference | calibrated weighbridge or verified scales reconciled to receiving records | kg | each delivery | full reporting period | all suppliers and reception points serving the product group | sum accepted mass by supplier and product group; retain rejected and dead-on-arrival mass separately | scale calibration; ticket IDs; supplier traceability; completeness reconciliation |
| `cp_slaughter_records` | `slaughter_dressing_chilling` | utilities, meat output, co-products, animal by-products, and wastewater | meters, production logs, invoices, scales, waste manifests, and laboratory records | water; electricity; fuel/steam/heat; chilled output mass; co-product mass; waste mass; wastewater volume; wastewater quality; operating hours | direct meters and scales preferred; reconcile invoices and stock changes for shared utilities | native unit and kg output | shift or batch for production; at least monthly for reconciliations | representative continuous period covering seasonality, normally at least 12 months | all relevant slaughter, dressing, chilling, sanitation, and utility areas | allocate shared totals with declared causal driver; normalize to kg chilled output | meter calibration; invoice reconciliation; mass balance; laboratory QA; treatment manifests |
| `cp_cutting_records` | `cutting_deboning` | chilled input, prepared output, utilities, and residues | batch sheets, scales, meters, and waste records | chilled input mass; prepared output mass; cut; bone and skin state; electricity; water; bones; skin; trimmings; rejects | calibrated batch scales and submetering or documented allocation from site totals | kg, kWh, m3 | each batch or shift | all cutting campaigns in reporting period | all included cutting and deboning lines | calculate yield and normalize utilities and residues to kg prepared output | scale calibration; batch reconciliation; product specification; residue destination evidence |
| `cp_freezing_packaging_records` | `freezing_glazing_packaging` | freezer input/output, electricity, glaze, packaging, losses, and temperature | batch scales, electricity meters, packaging issue records, temperature logger, and rejection records | net meat input; net frozen output; gross glazed mass; glaze mass; packaging by material; electricity; freezer-exit temperature; losses; freezer technology | calibrated scales, submetering, material issue reconciliation, and logged temperature measurements | kg, kWh, °C | each batch and continuous temperature logging | all freezing campaigns in reporting period | all freezers, glazing stations, and packaging lines serving the reference product | normalize to kg net frozen meat; keep glaze and packaging outside net meat mass | scale and meter calibration; packaging stock reconciliation; logger calibration; batch mass balance |
| `cp_cold_store_records` | `frozen_storage_dispatch` | occupancy, residence time, electricity, temperature, dispatch, and losses | warehouse management system, electricity meter, temperature logger, dispatch scale, and stock counts | lot mass; entry and exit time; location; electricity; temperature; defrost events; dispatched net mass; losses | lot tracking, calibrated dispatch scales, submetering, and continuous or justified representative temperature logging | kg, day, kg-day, kWh, °C | each lot; continuous temperature; monthly energy reconciliation | full reporting period including seasonal ambient conditions | all on-site frozen stores serving the reference product | allocate electricity by measured load or kg-day; normalize to actual lot residence time and kg dispatched | warehouse traceability; meter and logger calibration; stock reconciliation; excursion records |
| `cp_refrigerant_balance` | `freezing_glazing_packaging`; `frozen_storage_dispatch` | refrigerant make-up and direct emissions | refrigerant purchase, charge, recovery, service, transfer, and equipment records | refrigerant species; opening stock; purchases; charges; recovery; transfers; closing stock; equipment identity; cooling load or operating hours | annual mass-balance reconciliation supplemented by leak detection and service records | kg refrigerant | each service event with annual reconciliation | full reporting year | all refrigeration equipment serving included processes | calculate loss by species and allocate by direct equipment record, cooling load, or operating hours | purchase invoices; technician records; cylinder reconciliation; leak-test evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground exchanges | normalized amount = exchange amount assigned to product group / net reference-product mass dispatched | assigned exchange amount; net dispatched meat mass | exchange amount per 1 kg reference product | iso-14044-2006 |
| `calc_net_meat_mass` | glazed and packaged product | net chicken-meat mass = gross packaged product mass - packaging mass - retained glaze mass; verify with direct product specification and sampling | gross mass; packaging mass; glaze mass; sampling results | kg net chicken meat | codex-cxc-8-1976 |
| `calc_process_yield` | slaughter, cutting, freezing, and storage | yield = qualifying process output mass / qualifying process input mass; keep co-products, waste, water gain, and losses as separate terms | input mass; output mass; co-product mass; waste mass; water gain; stock change | dimensionless yield and reconciled mass balance | codex-cxc-58-2005 |
| `calc_storage_service` | frozen storage | kg-day = sum for each lot of net meat mass multiplied by residence time; allocated storage electricity = store electricity multiplied by product-group kg-day / total compatible kg-day | lot mass; entry time; exit time; store electricity; total occupancy | kg-day and kWh per kg reference product | codex-cxc-8-1976 |
| `calc_refrigerant_loss` | freezing and cold storage | refrigerant loss by species = opening stock + purchases + received transfers - closing stock - recovered stock - outgoing transfers; allocate only the share serving included equipment | refrigerant inventory and service records; equipment allocation driver | kg direct refrigerant emission per kg reference product |  |
| `calc_allocation_factors` | co-products and shared utilities | calculate factors from the declared causal driver; verify that the complete factor set sums to 1 within rounding tolerance and retain unrounded factors | product quantities; causal driver; optional market values; shared inventory | documented allocation factors and sensitivity result | iso-14044-2006; fao-leap-poultry-2016 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and inventory flows | Verify the reference UUID exactly as specified. Resolve every other product, waste, elementary, flow-property, and unit-group identity against Tiangong before publication; retain semantic descriptions where identity remains unresolved. | Tiangong readback; identity review record |
| `dq_temporal` | all foreground records | Use one coherent reporting period that represents normal operation and captures relevant seasonality; normally target at least 12 months or justify a shorter campaign. | record coverage table; operating calendar; exception justification |
| `dq_geographic_technology` | facility and upstream datasets | Declare facility geography, freezer and refrigeration technology, refrigerant species, product route, and the geography and technology of material upstream datasets. | facility metadata; equipment register; dataset metadata |
| `dq_completeness` | mass, energy, water, co-products, wastes, wastewater, and refrigerants | Reconcile production, utility, stock, and waste records. Explain missing meters, estimated shares, exclusions, and any unresolved mass-balance difference. | meter and invoice reconciliation; mass balance; waste manifests; data-gap log |
| `dq_temperature_traceability` | freezing and cold storage | Retain calibrated freezer-exit and dispatch measurements plus continuous or justified representative storage records, including excursions and corrective actions. | temperature logs; calibration records; excursion reports; codex-cxc-8-1976 |
| `dq_hygiene_route` | slaughter and dressing boundary | Confirm that included operations correspond to the actual slaughter, dressing, chilling, cutting, and handling route and that condemned material and hygiene-related cleaning flows are represented. | process flow diagram; production records; codex-cxc-58-2005 |
| `dq_provisional_ranges` | all reasoned_estimate ranges | Treat broad ranges only as QA screens. Replace them with measured or source-backed ranges, or obtain explicit reviewer acceptance, before using them as publication-critical constraints. | range review log; accepted evidence references |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require product flow UUID `00dbb94a-580a-4aae-979b-a7b1f4278116`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and reference amount 1. |  |
| `validate_reference_qualifiers` | reference flow metadata | Fail completeness when any required qualifier is absent or when gross product, glaze, or packaging mass is substituted for net chicken-meat mass. | codex-cxc-8-1976 |
| `validate_product_scope` | product identity | Reject fresh or chilled meat, edible offal marketed separately, mechanically separated meat, cooked or manufactured products, and non-chicken poultry from this PCR scope. |  |
| `validate_process_coverage` | process map and inventory | Require detailed inventories for slaughter/dressing/chilling, freezing/glazing/packaging, and frozen storage/dispatch; require cutting/deboning when the declared product route includes it. | codex-cxc-58-2005; codex-cxc-8-1976 |
| `validate_frozen_condition` | freezer exit, storage, and dispatch | Require temperature records demonstrating -18 °C or colder for the declared frozen state, subject only to documented applicable tolerances; flag unexplained excursions. | codex-cxc-8-1976 |
| `validate_mass_balance` | each process and reporting period | Check input mass, output meat, co-products, wastes, added glaze water, wastewater terms where measured, and stock changes; require explanation for material imbalance and prevent double counting of intermediates. | codex-cxc-58-2005 |
| `validate_inventory_identity` | non-reference exchanges | Fail publication readiness when a semantic candidate is presented as a resolved Tiangong flow without exact UUID verification. Unresolved inventory UUIDs are acceptable only while lifecycle status remains candidate. |  |
| `validate_allocation` | shared burdens and co-products | Require declared allocation hierarchy, driver, complete factor set, unrounded factors, factor-sum check, product quantities, and economic sensitivity when mass allocation is used without a physical causal relation. | iso-14044-2006; fao-leap-poultry-2016 |
| `validate_cold_store_service` | storage inventories | Require storage duration and kg-day basis; reject a duration-independent allocation when residence time materially differs among product groups and no alternative causal measurement is supplied. | codex-cxc-8-1976 |
| `validate_refrigerants` | freezing and cold storage | Require refrigerant species, equipment scope, make-up/recovery balance, allocation method, and corresponding direct elementary emissions or an evidence-backed zero-loss statement. |  |
| `validate_packaging_glaze` | packaged or glazed product | Require separate masses for net chicken meat, glaze, and each packaging material; confirm that only net chicken meat forms the 1 kg reference amount. | codex-cxc-8-1976 |
| `validate_provisional_ranges` | reasoned_estimate QA guardrails | Emit a review finding when a measured value falls outside a provisional guardrail; do not automatically replace the measured value or treat the guardrail as an allowed range. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground plant-gate production data package for frozen chicken meat, suitable after review for publication as a secondary_dataset or background_dataset |
| downstream_use | Construction of process datasets and lifecyclemodel projections for frozen chicken meat where product form, geography, technology, allocation, glazing, packaging, storage, and temperature conditions are compatible |
| allowed_use | Product carbon-footprint or LCA modelling, supply-chain inventory construction, benchmarking, and scenario analysis within the declared scope and data quality |
| excluded_use | Claims about fresh/chilled chicken, edible offal, other poultry species, cooked or manufactured products, retail or consumer stages, or geographies and technologies not represented without explicit adaptation |
| required_metadata | PCR id and version state; CPC mapping context; facility geography; reporting period; production route; product form; cut; bone and skin states; net-mass method; glaze fraction; packaging boundary; freezer technology; refrigerant; storage duration; dispatch temperature; allocation method; upstream datasets; unresolved identities; exclusions |
| required_quality_disclosure | Primary-data coverage; meter and scale calibration; temporal and site coverage; mass-balance result; allocation factors and sensitivity; cold-chain records; refrigerant reconciliation; wastewater and waste coverage; source-backed versus reasoned ranges; uncertainty and data gaps |
| update_trigger | Material change in product scope, plant route, freezer or refrigeration technology, refrigerant, packaging or glazing practice, allocation method, geography, upstream live-bird supply, storage duration, applicable regulation, verified Tiangong identities, or evidence replacing provisional ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-58-2005` | official_guidance | FAO/WHO Codex Alimentarius, Code of Hygienic Practice for Meat, CXC 58-2005, https://workspace.fao.org/sites/codex/Standards/CXC%2058-2005/CXC_058e.pdf (retrieved 2026-08-11) | Slaughter, dressing, cutting, chilling, hygiene-process decomposition, product and waste handling, temperature traceability, and validation requirements |
| `codex-cxc-8-1976` | official_guidance | FAO/WHO Codex Alimentarius, Code of Practice for the Processing and Handling of Quick Frozen Foods, CXC 8-1976, https://workspace.fao.org/sites/codex/Standards/CXC%208-1976/CXC_008e.pdf (retrieved 2026-08-11) | Quick-freezing and cold-chain boundary, -18 °C frozen condition, storage, temperature records, packaging/glazing handling, and validation |
| `fao-leap-poultry-2016` | official_guidance | FAO LEAP Partnership, Greenhouse gas emissions and fossil energy use from poultry supply chains: Guidelines for assessment, 2016, https://openknowledge.fao.org/handle/20.500.14283/i6421en (retrieved 2026-08-11) | Poultry supply-chain boundary, upstream dataset requirement, co-product and shared-burden method context, and data-quality framing |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html (retrieved 2026-08-11) | LCI scope, allocation hierarchy, consistency, calculation, reporting, and review rules |
