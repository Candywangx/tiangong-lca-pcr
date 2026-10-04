---
status: candidate
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.centrifugal-clothes-driers
language: en-US
sync_with: pcr.zh-CN.md
---

# Centrifugal clothes driers (standalone spin extractors)

## 1. Scope and Applicability

This candidate governs foreground manufacturing data for finished standalone devices that remove water from already washed clothes/linen by centrifugal basket rotation. It covers compact household spin dryers and commercial/industrial hydro-extractors, separately by configuration; the CPC 3.0 centrifugal subclass has no laundry-capacity split. It excludes integrated washer-extractors, combined domestic washer/dryers, heated tumble or heat-pump dryers, drying cabinets, textile dyeing/finishing centrifuges not supplied for clothes/linen extraction, food/process centrifuges, and independently supplied parts. Equipment kilograms are an inventory reference, not an equal laundry service across models. [un-cpc-3-0; thomas-centri; fabcare-extractor; swastik-extractor]

Household examples demonstrate the semantic centrifugal function, not an automatic CPC assignment. CPC 3.0 also names household washing/drying in 44812; assess actual design, sole/principal function, marketed use and authoritative classification evidence before assigning an individual household device. HS 2022 separately places centrifugal clothes dryers in 8421.12 and washing machines with built-in centrifugal driers in 8450.12, subject to Chapter 84 notes; this is supporting physical boundary evidence, not a published CPC3 correspondence or ruling for every model. [un-cpc-3-0; wco-hs2022-84]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.centrifugal-clothes-driers |
| classification_refs | CPC 3.0 44911 |
| covered_products | Complete standalone household or commercial/industrial centrifugal clothes extractors |
| excluded_products | Integrated washing functions, heated drying devices, unrelated centrifuges and parts |
| representative_product | One configured accepted basket extractor with supplied motor, enclosure, drive, suspension, controls and safety system |
| production_route | Purchased-subassembly assembly or actual conditional site fabrication, finish and motor production, followed by factory tests and dispatch |
| market_state | Finished tested complete device at manufacturer gate; installation foundations and downstream laundry operation separate |



## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a complete standalone clothes-water extraction device |
| How much | Manufacturing inventory per 1 kg accepted net device mass |
| How well | Actual specified dry-laundry capacity, spin speed, imbalance/safety and drain acceptance; no universal moisture performance |
| How long or cycle | One manufacturing reporting period through accepted gate; service life and subsequent spin cycles are separate study parameters |
| reference_flow_link | `finished` |



| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Centrifugal clothes driers `c6fb37f3-a8e3-4178-99c5-c2dd06e2dac1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model and BOM revision; household/industrial family; dry-laundry capacity distinct from device mass; basket alloy and dimensions; enclosure/finish; motor phase/power; direct/belt/VFD drive and braking; suspension/bearings; safety interlock; supplied optional loading device; net accepted mass; make/buy and delivered states; factory test plan/load; site/period; supply voltage/geography; packaging; provider/treatment links |



Declare all qualifiers in the data package. Never use rated laundry-load kg, a brochure example weight or boxed mass as the denominator. The generic category UUID does not supply a model BOM or upstream provider.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Collect using cp_mass: calibrated weighing of accepted complete devices, excluding transport packaging, wet test cloth, retained water and installation foundations; preserve same model/configuration and acceptance record. |
| `period_basis` | physical exchange normalization | Mass | kg | For the same configuration and period N is accepted units, D is sum of their calibrated net masses, M = D/N, Q is attributable external period quantity including setup, rework and rejected production. q_item = Q/N and q_ref = q_item/M = Q/D. N and D must be positive; no mass mixing across configurations. |
| `physical_assay` | physical material and chemical species records | Mass | kg | Match wet/dry basis, moisture and each individual species/metal assay on every material, stock, product, waste and release term; gross alloy or sludge mass is not contained Fe, Cr or Ni mass. This rule does not assign mass assays to electricity or transport. |
| `energy_basis` | energy records | Delivered energy | MJ | Preserve measured kWh, convert using 1 kWh = 3.6 MJ. Fuel remains specific kg with measured composition/NCV; regeneration exported during actual factory tests is separately metered, never an assumed use-phase saving. |



## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | Include actual delivered-input receipt through fabrication, finish, motor make when present, assembly, balancing/acceptance, rework, rejects, residual utilities and packing before release. |  |
| `make_buy` | component state | Each bought motor, drum, shaft, bearing housing, drive or control carries completed upstream production once; do not add embedded metals, resin, copper, oil or component-factory energy again. Site make instead uses actual raw inputs and stages; paired internal part transfers cancel but processing burdens remain. |  |
| `factory_test` | testing | Include electricity, actual consumed cloth/water, pneumatic-lock compressor load and rejects from the actual factory spin, vibration, lid-lock, braking, electrical and drain/leak plan. Model raw wet-cloth moisture and retained returns; consumer instructions demonstrate function, not a mandatory factory test recipe. | thomas-instructions; ifb-inc100 |
| `downstream` | later use | Exclude customer laundry electricity, washing detergent/water, subsequent tumble drying, operation replacements, installation concrete and end of life from the manufacturing foreground; retain separate downstream links when study requires them. No heated drying process is inferred from the word drier. | un-cpc-3-0; thomas-centri |
| `route_audit` | specific exchanges | Each card is conditional on documented recipe/BOM, not a universal materials basket. Add every actual alloy, polymer, purchased part, utility, formulation constituent, packaging, treatment and emission as its own exchange. not_applicable requires absence evidence; unknown never equals zero. External transport and upstream/treatment links remain explicit. |  |



### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual delivered sheet, finished parts, motor, drive, control and packaging at documented supplier processing states |
| starting_condition_role | Foreground primary-production receipt boundary |
| product_classification_scope | Standalone centrifugal clothes-water extraction; household size alone does not make it a washer or heated dryer |
| recursive_input_rule | Same-category bought complete device for actual refurbishment uses its delivered-state dataset once and a separately declared refurbishment gate; never represent new production by recursively purchasing itself |
| upstream_dataset_requirement | Exact material, completed operations, component interface, geography/period and voltage; missing providers disclosed |
| disclosure | Complete BOM/make-buy matrix, delivered configuration, test plan, net output period, allocation, upstream transport/treatment and missing data |



### Configuration and make/buy matrix

| Assembly | Alternatives and requirement |
| --- | --- |
| Basket/enclosure | Bought formed/perforated/balanced stainless basket vs actual site fabrication; THOMAS metal drum and impact-resistant cover do not establish one universal polymer or alloy. Fabcare 304 drum and galvanized base are configuration evidence, not all-site defaults. |
| Drive/brake | Direct drive, verified conventional transmission or VFD variant; mechanical brake/clutch are conditional. Swastik VFD replaces them and may regenerate; IFB non-coaxial headline conflicts with direct-drive prose, so actual drawing/nameplate governs. |
| Suspension/safety/control | THOMAS flexible motor/drum suspension and one-hand lid lock differ from Swastik spring/roller/thrust-bearing construction and IFB pneumatic lid lock. Timer, PLC, brake, damper and pneumatic actuator are included only when actually delivered. |
| Motor and finishes | Bought finished motor/painted parts use upstream datasets once; actual in-house winding/impregnation, casting, molding, plating/galvanizing and painting require their own complete recipes, external utilities and emissions. No unobserved route is mandatory. |



## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Basket, drum, frame and shaft fabrication | conditional | Only actual in-house cutting, perforating, forming, welding and machining; bought completed parts bypass corresponding stages | Foreground manufacturing records | per 1 kg reference flow |
| `finish` | Conditional surface cleaning and coating | conditional | Only actual cleaning/painting/curing before the supplied finish gate; bare stainless and bought finished parts bypass this route | Foreground manufacturing records | per 1 kg reference flow |
| `motor_make` | Conditional in-house motor production | conditional | Only documented motor fabrication/winding/impregnation and testing; whole purchased motor excludes embedded inputs | Foreground manufacturing records | per 1 kg reference flow |
| `assembly` | Mechanical, electrical and safety assembly | required | Actual BOM, drive and suspension configuration; directly purchased subassemblies versus site-made internal transfers | Foreground manufacturing records | per 1 kg reference flow |
| `test` | Factory balancing and acceptance testing | required | Actual dry/wet spin, vibration, lid interlock/braking, electrical and drain/leak tests before release | Foreground manufacturing records | per 1 kg reference flow |
| `shared` | Shared factory services | conditional | Only unassigned residual utilities after measured process loads, including test air-compressor electricity if not already assigned | Foreground manufacturing records | per 1 kg reference flow |
| `dispatch` | Packing and accepted extractor release | required | All products; accepted configuration and complete supplied device only | Foreground manufacturing records | per 1 kg reference flow |



### Process: Basket, drum, frame and shaft fabrication (`fabrication`)

Only actual in-house cutting, perforating, forming, welding and machining; bought completed parts bypass corresponding stages

#### Inputs

##### Product flows

###### AISI 304 stainless steel sheet (`ss304_sheet`)

Only for site-made basket or outer drum with documented 304 grade; bought completed drums exclude this input.

- Selected flow: AISI 304 stainless steel sheet

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `fabcare-extractor`

###### Carbon steel sheet for extractor frame (`carbon_sheet`)

Only actual specified carbon-steel frame fabrication; do not infer grade from appearance.

- Selected flow: Carbon steel sheet for extractor frame

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources:

###### Alloy steel shaft bar (`shaft_bar`)

For a site-machined shaft of the certified alloy only; purchased finished shafts take the assembly route.

- Selected flow: Alloy steel shaft bar

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`

###### ER308L stainless steel welding wire (`welding_wire`)

Only an actual compatible ER308L joining specification; other filler grades need separate records.

- Selected flow: ER308L stainless steel welding wire

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources:

###### Argon welding shielding gas (`argon`)

Only when argon shielding is consumed in site joining; gas mixture constituents require individual cards.

- Selected flow: Argon welding shielding gas

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources:

###### Mineral-oil cutting fluid (`cutting_oil`)

Actual machining fluid of declared formulation; record concentrate and make-up water separately.

- Selected flow: Mineral-oil cutting fluid

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources:

###### Alternating current (`fabrication_power`)

Only actual purchased CN <1 kV customer-side supply; record disjoint assigned process load, including rework and idle. For shared services only the unassigned measured residual after these process loads; other supply voltage/geography needs a matched separate identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Use the attributable period amount measured under cp_energy; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_energy`

- Sources:

#### Outputs

##### Waste flows

###### AISI 304 stainless steel fabrication scrap (`ss_trim`)

Only segregated 304 trim or rejects leaving the factory; internal remelt returns are paired transfers.

- Selected flow: AISI 304 stainless steel fabrication scrap

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_waste; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_waste`

- Sources:

###### Alloy steel shaft machining chips (`steel_chip`)

Actual alloy-specific chips with oil/moisture assay; never equate wet gross weight to contained metal.

- Selected flow: Alloy steel shaft machining chips

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_waste; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_waste`

- Sources:

###### Carbon steel sheet fabrication scrap (`carbon_trim`)

Actual carbon-steel trim separated from stainless steel.

- Selected flow: Carbon steel sheet fabrication scrap

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_waste; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_waste`

- Sources:

###### Spent mineral-oil cutting fluid (`spent_oil`)

Actual spent machining fluid leaving for identified treatment.

- Selected flow: Spent mineral-oil cutting fluid

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_waste; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_waste`

- Sources:

###### Stainless steel welding fume filter dust (`weld_dust`)

Captured fume is waste; distinguish each contained element by its own measured assay.

- Selected flow: Stainless steel welding fume filter dust

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_waste; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_waste`

- Sources:

### Process: Conditional surface cleaning and coating (`finish`)

Only actual cleaning/painting/curing before the supplied finish gate; bare stainless and bought finished parts bypass this route

#### Inputs

##### Product flows

###### Epoxy powder coating (`epoxy_powder`)

Only if the actual enclosure/frame uses this specified coating; bare stainless construction has no coating default.

- Selected flow: Epoxy powder coating

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources:

###### Isopropanol cleaning solvent (`isopropanol`)

Only actual factory solvent cleaning with isopropanol; retain recipe and solvent recovery.

- Selected flow: Isopropanol cleaning solvent

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources:

###### Deionized rinse water (`finish_water`)

Only actual factory surface rinse, not consumer laundry water.

- Selected flow: Deionized rinse water

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_water; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_water`

- Sources:

###### Natural gas for coating oven (`natural_gas`)

Only a site gas-fired curing oven, with actual composition and net calorific value; electric ovens use measured electricity instead.

- Selected flow: Natural gas for coating oven

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_energy; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_energy`

- Sources:

###### Alternating current (`finish_power`)

Only actual purchased CN <1 kV customer-side supply; record disjoint assigned process load, including rework and idle. For shared services only the unassigned measured residual after these process loads; other supply voltage/geography needs a matched separate identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Use the attributable period amount measured under cp_energy; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_energy`

- Sources:

#### Outputs

##### Waste flows

###### Epoxy powder coating waste (`powder_waste`)

Only powder leaving after separately recorded internal recovery.

- Selected flow: Epoxy powder coating waste

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_waste; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_waste`

- Sources:

###### Metal-bearing surface-cleaning sludge (`finish_sludge`)

Actual sludge, with wet/dry basis and separate Fe, Cr, Ni and any other measured species assays.

- Selected flow: Metal-bearing surface-cleaning sludge

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_waste; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_waste`

- Sources:

###### Surface-cleaning wastewater (`finish_effluent`)

Only water transferred for external treatment; direct environmental releases need distinct compartment/species rows.

- Selected flow: Surface-cleaning wastewater

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_waste; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_waste`

- Sources:

###### Spent isopropanol cleaning solvent (`solvent_waste`)

Actual spent solvent with assay, recovered and retained fractions kept distinct.

- Selected flow: Spent isopropanol cleaning solvent

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_waste; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_waste`

- Sources:

##### Elementary flows

###### Isopropanol, emission to air (`isopropanol_air`)

Only actual uncaptured release after solvent accounting and measurement; destruction is not automatic air loss.

- Selected flow: Isopropanol, emission to air

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_emission; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_emission`

- Sources:

###### Carbon dioxide, fossil, emission to air (`co2_air`)

Only the actual gas-fired oven release after controls; CO and nitrogen species each require their own measured concentration or valid species-specific factor.

- Selected flow: Carbon dioxide, fossil, emission to air

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_emission; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_emission`

- Sources:

###### Carbon monoxide, emission to air (`co_air`)

Only the actual gas-fired oven release after controls; CO and nitrogen species each require their own measured concentration or valid species-specific factor.

- Selected flow: Carbon monoxide, emission to air

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_emission; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_emission`

- Sources:

###### Nitrogen monoxide, emission to air (`no_air`)

Only the actual gas-fired oven release after controls; CO and nitrogen species each require their own measured concentration or valid species-specific factor.

- Selected flow: Nitrogen monoxide, emission to air

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_emission; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_emission`

- Sources:

###### Nitrogen dioxide, emission to air (`no2_air`)

Only the actual gas-fired oven release after controls; CO and nitrogen species each require their own measured concentration or valid species-specific factor.

- Selected flow: Nitrogen dioxide, emission to air

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_emission; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_emission`

- Sources:

### Process: Conditional in-house motor production (`motor_make`)

Only documented motor fabrication/winding/impregnation and testing; whole purchased motor excludes embedded inputs

#### Inputs

##### Product flows

###### Enamelled copper motor winding wire (`winding_wire`)

Only documented in-house motor winding, rather than bought complete motor.

- Selected flow: Enamelled copper motor winding wire

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources:

###### Electrical steel motor laminations (`laminations`)

Only site-made motor assembly from purchased laminations; no raw steel or punching burden duplicated.

- Selected flow: Electrical steel motor laminations

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources:

###### Epoxy motor winding impregnation varnish (`varnish`)

Only actual epoxy impregnation formulation; retain solvent constituents and cure schedule separately.

- Selected flow: Epoxy motor winding impregnation varnish

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources:

###### Alternating current (`motor_make_power`)

Only actual purchased CN <1 kV customer-side supply; record disjoint assigned process load, including rework and idle. For shared services only the unassigned measured residual after these process loads; other supply voltage/geography needs a matched separate identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Use the attributable period amount measured under cp_energy; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_energy`

- Sources:

#### Outputs

##### Waste flows

###### Enamelled copper winding-wire scrap (`wire_scrap`)

Actual winding rejects with copper assay and insulation mass distinguished.

- Selected flow: Enamelled copper winding-wire scrap

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_waste; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_waste`

- Sources:

### Process: Mechanical, electrical and safety assembly (`assembly`)

Actual BOM, drive and suspension configuration; directly purchased subassemblies versus site-made internal transfers

#### Inputs

##### Product flows

###### Finished stainless steel extractor basket (`bought_basket`)

Only bought basket; actual alloy, perforation and balancing state.

- Selected flow: Finished stainless steel extractor basket

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Finished extractor outer drum (`bought_outer`)

Only bought drum; stainless or galvanized construction must follow actual specification.

- Selected flow: Finished extractor outer drum

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Finished alloy steel extractor shaft (`bought_shaft`)

Only bought completed shaft; no parallel raw bar burden.

- Selected flow: Finished alloy steel extractor shaft

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Cast iron extractor bearing housing (`bearing_housing`)

Only specified cast-iron purchased housing; casting and embedded iron are upstream once.

- Selected flow: Cast iron extractor bearing housing

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Spring steel suspension spring (`spring`)

Only a delivered spring suspension variant.

- Selected flow: Spring steel suspension spring

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Rubber vibration-isolation mount (`damper`)

Only an actual rubber mount; retain compound, geometry and flexible-suspension specification.

- Selected flow: Rubber vibration-isolation mount

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Extractor electric drive motor (`motor`)

Bought motor with actual phase, power, brake/insulation interface and delivered winding state; embedded copper and steel are not separate assembly inputs.

- Selected flow: Extractor electric drive motor

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Extractor variable frequency drive (`vfd`)

Only VFD variant; Swastik source does not require a separate mechanical brake or clutch.

- Selected flow: Extractor variable frequency drive

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Electromagnetic extractor brake (`brake`)

Only an actual separate electromagnetic brake; DC-injection braking may be supplied by controls without this component.

- Selected flow: Electromagnetic extractor brake

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Rubber extractor drive belt (`belt`)

Only verified belt-drive configuration; direct drive is not charged a belt.

- Selected flow: Rubber extractor drive belt

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Steel extractor drive pulley (`pulley`)

Only actual belt transmission with steel pulley.

- Selected flow: Steel extractor drive pulley

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Steel roller bearing (`bearing`)

Actual roller bearing separately from shaft and housing.

- Selected flow: Steel roller bearing

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Steel thrust bearing (`thrust_bearing`)

Only specified thrust bearing, separately from roller-bearing inputs.

- Selected flow: Steel thrust bearing

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Extractor electronic timer (`timer`)

Only actual electronic timed control; mechanical lever control requires its own actual device.

- Selected flow: Extractor electronic timer

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Extractor lid safety interlock switch (`lid_switch`)

Actual lid interlock; preserve safety-circuit configuration.

- Selected flow: Extractor lid safety interlock switch

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Pneumatic extractor lid lock (`pneumatic_lock`)

Only IFB-like pneumatic lock configuration; air production belongs in factory tests if consumed before gate.

- Selected flow: Pneumatic extractor lid lock

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Impact-resistant polymer extractor lid (`lid`)

Only bought polymer lid with actual polymer identity; OEM impact-resistant description does not prove PP or ABS.

- Selected flow: Impact-resistant polymer extractor lid

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Finished extractor steel enclosure (`enclosure`)

Only bought enclosure with actual finish and alloy; no duplicate on-site sheet or coating inputs.

- Selected flow: Finished extractor steel enclosure

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Insulated copper extractor power cable (`cable`)

Actual incoming cable with specified conductor and insulation.

- Selected flow: Insulated copper extractor power cable

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Polymer extractor drain hose (`hose`)

Only supplied hose, with polymer declared; open-spout units need no hose default.

- Selected flow: Polymer extractor drain hose

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Carbon steel extractor fastening bolt (`fastener`)

Actual bolt grade, coating and delivered quantity; other fastener alloys require separate cards.

- Selected flow: Carbon steel extractor fastening bolt

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Lithium-soap mineral-oil bearing grease (`grease`)

Only actual first fill outside bought sealed-bearing burden; retain grade and SDS.

- Selected flow: Lithium-soap mineral-oil bearing grease

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`; `fabcare-extractor`; `thomas-centri`; `ifb-inc100`

###### Alternating current (`assembly_power`)

Only actual purchased CN <1 kV customer-side supply; record disjoint assigned process load, including rework and idle. For shared services only the unassigned measured residual after these process loads; other supply voltage/geography needs a matched separate identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Use the attributable period amount measured under cp_energy; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_energy`

- Sources:

###### Extractor motorized basket-loading hoist (`loading_device`)

Only an optional delivered loading device with actual supplier configuration; external laundry material handling is downstream.

- Selected flow: Extractor motorized basket-loading hoist

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `swastik-extractor`

### Process: Factory balancing and acceptance testing (`test`)

Actual dry/wet spin, vibration, lid interlock/braking, electrical and drain/leak tests before release

#### Inputs

##### Product flows

###### Factory test water (`test_water`)

Only water actually introduced for wet-cloth spin, drain, or leak acceptance tests; distinguish initial wet-cloth moisture and internal returns.

- Selected flow: Factory test water

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_water; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_water`

- Sources: `thomas-instructions`

###### Cotton acceptance-test cloth (`test_cloth`)

Only actually consumed cotton cloth; reusable test stock is not newly consumed each cycle. Record damage, replacement and wet/dry mass.

- Selected flow: Cotton acceptance-test cloth

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_material; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_material`

- Sources: `thomas-instructions`

###### Alternating current (`test_power`)

Only actual purchased CN <1 kV customer-side supply; record disjoint assigned process load, including rework and idle. For shared services only the unassigned measured residual after these process loads; other supply voltage/geography needs a matched separate identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Use the attributable period amount measured under cp_energy; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_energy`

- Sources:

###### Purchased compressed air for acceptance test (`purchased_air`)

Only when compressed air crosses the factory boundary from an external provider; in-house compressor electricity is charged once instead.

- Selected flow: Purchased compressed air for acceptance test

- Flow property / unit: Volume / m3

- Amount rule: Use the attributable period amount measured under cp_air; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_air`

- Sources:

#### Outputs

##### Product flows

###### Factory-test regenerated electricity exported (`regenerated_power`)

Only actual measured electricity leaving to the grid during regenerative spin tests; match export voltage/provider and do not use a consumer operating saving as its amount.

- Selected flow: Factory-test regenerated electricity exported

- Flow property / unit: Delivered electrical energy / MJ

- Amount rule: Use the attributable period amount measured under cp_energy; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_energy`

- Sources:

##### Waste flows

###### Extractor factory-test wastewater (`test_effluent`)

Actual test discharge sent to treatment, not the customer-use discharge.

- Selected flow: Extractor factory-test wastewater

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_waste; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_waste`

- Sources:

###### Spent cotton acceptance-test cloth (`cloth_waste`)

Only consumed cloth leaving stock with moisture specified; retained reuse cancels internal transfer.

- Selected flow: Spent cotton acceptance-test cloth

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_waste; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_waste`

- Sources:

###### Rejected complete centrifugal clothes extractor (`rejected_device`)

Only unrecoverable rejected device sent to identified treatment; preserve its actual composition, wet/dry state and embedded burden; it never increases accepted D.

- Selected flow: Rejected complete centrifugal clothes extractor

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_waste; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_waste`

- Sources:

### Process: Shared factory services (`shared`)

Only unassigned residual utilities after measured process loads, including test air-compressor electricity if not already assigned

#### Inputs

##### Product flows

###### Alternating current (`shared_power`)

Only actual purchased CN <1 kV customer-side supply; record disjoint assigned process load, including rework and idle. For shared services only the unassigned measured residual after these process loads; other supply voltage/geography needs a matched separate identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Use the attributable period amount measured under cp_energy; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_energy`

- Sources:

### Process: Packing and accepted extractor release (`dispatch`)

All products; accepted configuration and complete supplied device only

#### Inputs

##### Product flows

###### Alternating current (`dispatch_power`)

Only actual purchased CN <1 kV customer-side supply; record disjoint assigned process load, including rework and idle. For shared services only the unassigned measured residual after these process loads; other supply voltage/geography needs a matched separate identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Use the attributable period amount measured under cp_energy; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_energy`

- Sources:

###### Corrugated cardboard shipping carton (`carton`)

Only actual supplied carton, outside reference device mass.

- Selected flow: Corrugated cardboard shipping carton

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_pack; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_pack`

- Sources:

###### Wood shipping pallet (`pallet`)

Only actual pallet, with reusable allocation based on documented trips and replacement.

- Selected flow: Wood shipping pallet

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_pack; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_pack`

- Sources:

###### Polyethylene shipping film (`film`)

Only actual PE shipping film, never inferred from all packaging mass.

- Selected flow: Polyethylene shipping film

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the attributable period amount measured under cp_pack; divide by accepted net device mass D of the same configuration and period. Include rework and rejected-production burden.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_pack`

- Sources:

#### Outputs

##### Product flows

###### Centrifugal clothes driers (`finished`)

The accepted complete standalone extractor of the declared configuration; excludes shipping packaging, test load and retained test water.

- Selected flow: Centrifugal clothes driers `c6fb37f3-a8e3-4178-99c5-c2dd06e2dac1`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: 1 kg

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_mass`

- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `subdivide` | shared loads | Subdivide by production lot, component state and process submeter first. Allocate only remaining measured residual using demonstrated causal equipment time/load. Do not add a whole factory meter to already charged process/test electricity. |  |
| `reject_rework` | accepted denominator | Retain actual setup, rework, rejected-device and test failure burdens in Q; rejected device, scrap and packaging masses do not increase accepted denominator D. Separate configurations and net output periods. |  |
| `scrap` | recovery/co-products | Internal returns cancel paired physical transfers only; recovery energy remains. Scrap sales do not automatically grant avoided virgin-material credits. For actual co-products first subdivide, then document physical allocation or justify another relationship with sensitivity and compatible upstream treatment. |  |



## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_air` | test | externally purchased compressed air | measurement and ledger | provider; actual volume; temperature; absolute pressure; standard or actual basis; period; Q | Meter externally supplied air at documented pressure/temperature and preserve volume convention; do not duplicate in-house compressor electricity. | m3 | each lot or matched interval | complete same configuration reporting period including rework and rejects | declared manufacturer and actual external interface | per 1 kg reference flow | calibration; acceptance; representative assays; provider records; uncertainty |
| `cp_mass` | dispatch | reference output | measurement and ledger | model; configuration; serial number; calibrated accepted net mass; N accepted; D sum net kg; rejects; tare; dry test state | Weigh each accepted complete device on a calibrated scale excluding transport packaging and test moisture; reconcile acceptance ledger and same supplied configuration. Do not substitute rated laundry capacity. | kg | each lot or matched interval | complete same configuration reporting period including rework and rejects | declared manufacturer and actual external interface | per 1 kg reference flow | calibration; acceptance; representative assays; provider records; uncertainty |
| `cp_material` | active processes | one input | measurement and ledger | component/grade; supplier processing state; make/buy; batch; issued; returned; opening/closing stock; wet/dry; each assay; Q | Calibrated weighing and actual BOM/recipe issue records, linked supplier evidence; bought completed parts versus site raw inputs are disjoint. | kg | each lot or matched interval | complete same configuration reporting period including rework and rejects | declared manufacturer and actual external interface | per 1 kg reference flow | calibration; acceptance; representative assays; provider records; uncertainty |
| `cp_energy` | active processes; shared | each utility | measurement and ledger | meter; period; stage; imported kWh; on-site generation; exported test regeneration; storage change; submeter allocations; residual driver; fuel kg and NCV; Q | Matched interval calibrated meters and bills; measure motor/test/compressor load before shared residual. Keep purchased supply versus on-site generation separate. Match fuel measurement to oven tests. | MJ | each lot or matched interval | complete same configuration reporting period including rework and rejects | declared manufacturer and actual external interface | per 1 kg reference flow | calibration; acceptance; representative assays; provider records; uncertainty |
| `cp_water` | finish; test | water balance | measurement and ledger | supply; added water; input/test-cloth moisture; wet/dry mass; stock change; evaporation; discharge; reaction water; retained product water; paired recycle; Q | Meter supplied water and weigh wet/dry test cloth; sample moisture, meter effluent and account stock/return transfers. Volume-to-mass conversion uses actual temperature/density. | kg | each lot or matched interval | complete same configuration reporting period including rework and rejects | declared manufacturer and actual external interface | per 1 kg reference flow | calibration; acceptance; representative assays; provider records; uncertainty |
| `cp_waste` | active processes | one waste | measurement and ledger | stream; receiver; gross/tare/net; water fraction; each separate metal/species assay; stocks; internal returns; Q | Segregated calibrated weighing with representative wet/dry and species assays plus destination/treatment receipts. | kg | each lot or matched interval | complete same configuration reporting period including rework and rejects | declared manufacturer and actual external interface | per 1 kg reference flow | calibration; acceptance; representative assays; provider records; uncertainty |
| `cp_emission` | release points | one species and compartment | measurement and ledger | species; compartment; post-control concentration; air/water flow; duration; assay; capture; recovery/destruction; detection limit; uncertainty; Q | Representative post-control monitoring or documented species-specific model with flow/time and actual operating/abatement conditions; no invented balance-closing release. | kg | each lot or matched interval | complete same configuration reporting period including rework and rejects | declared manufacturer and actual external interface | per 1 kg reference flow | calibration; acceptance; representative assays; provider records; uncertainty |
| `cp_pack` | dispatch | each package | measurement and ledger | material; component net mass; dispatch count; reusable stock; returns; actual trips; replacement; Q | Weigh each packaging component, reconcile issue/return and dispatch; packaging never enters device denominator. | kg | each lot or matched interval | complete same configuration reporting period including rework and rejects | declared manufacturer and actual external interface | per 1 kg reference flow | calibration; acceptance; representative assays; provider records; uncertainty |



Aggregation is per 1 kg reference flow after measuring raw period quantities. N accepted units and D sum of accepted net masses share the same configuration, BOM/test scope and period; M = D/N is only a measured mean. q_item = Q/N then q_ref = Q/D = q_item/M. No illustrative OEM weight, capacity kg, rejects or packaging may substitute for D.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize` | all inventory rows | Each attributable external period quantity Q is divided by calibrated accepted net device mass D of the same configuration and period; retain the numerator physical unit and direction. Finished output is 1 kg. | cp_mass; cp_material; cp_energy; cp_air; cp_water; cp_waste; cp_emission; cp_pack | amount per 1 kg reference flow |  |
| `water_close` | physical water terms | Supplied water + incoming material/cloth moisture + opening stock + reaction water formed + incoming internal returns = discharged water + evaporated water + product/cloth retained water + closing stock + reaction water consumed + outgoing internal returns. Cancel only paired return terms. Investigate residual against combined measurement/sampling/allocation uncertainty; no fixed tolerance. | cp_water; cp_mass; cp_material; cp_waste; cp_emission | water residual and uncertainty |  |
| `metal_close` | each contained metal | For each separate Fe, Cr, Ni, Zn, Cu and other actual element, multiply each input/product/scrap/chip/sludge/wastewater/release/stock term by its OWN matched assay and wet/dry conversion. Include reaction transformations and paired returns. Total alloy mass cannot close an elemental balance; investigate uncertainty, do not invent emissions. | cp_material; cp_mass; cp_waste; cp_emission | each elemental residual |  |
| `solvent_close` | each solvent species | Opening solvent + actual inputs + incoming internal return = retained product + closing solvent + recovered outgoing solvent + solvent in capture media + measured destruction + wastewater/non-air residue + uncaptured air release + outgoing internal return. Every term has its own species assay; paired returns cancel. Actual destruction is not air release. Investigate combined uncertainty before using residual. | cp_material; cp_waste; cp_emission | species solvent residual |  |
| `utility_residual` | metered utility site period | In identical units and intervals reconcile purchased imports + actual on-site generation + storage withdrawals against assigned fabrication/finish/motor/assembly/test/dispatch loads + unassigned shared residual + exports + storage charging and verified delivery losses. Meter factory-test regeneration separately. Negative residual requires interval/unit/calibration and combined uncertainty investigation, never clipping to zero. Allocate ONLY residual; compressor tests are included once. | cp_energy | reconciled residual allocation |  |
| `combustion` | fuel species | Fuel carbon accounting can constrain fossil CO2 using actual composition, oxidation and retained carbon; it cannot establish CO, NO or NO2. Each emission requires matched technology/control concentration or a valid independent species-specific factor; total NOx convention is separately disclosed. | cp_energy; cp_emission | verified species release |  |
| `transfer_cancel` | internal parts and returns | Match quantity, configuration, lot, state and opening/closing work-in-progress across both sides of each internal transfer; cancel only paired transfers while retaining all actual extra processing energy, rejects and external wastes. | cp_material; cp_mass; cp_water; cp_waste | no duplicate burden |  |



### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `configuration` | device | Actual model/delivered BOM and drive/suspension/safety drawing override marketing conflicts; do not extrapolate one industrial or household recipe. | drawings; nameplates; acceptance |
| `period` | all exchanges | Complete common period, setup, idle, test, rework/reject and stocks; disjoint assigned utilities and causal residual allocation. | meter/lot reconciliation |
| `uncertainty` | physical quantities | Retain calibration, representative moisture/species sampling, detection limits and allocation uncertainty. No empirical unit mass, yield, energy, lifetime or emission range is supplied. | measurement and laboratory records |
| `links` | upstream and treatment | Resolve actual provider technology, delivered processing state, geography and treatment separately; a flow UUID is not an upstream footprint. | supplier and treatment receipts |



## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | reference product | Require standalone clothes-water extraction, every qualifier, complete delivered device and correct reference link; distinguish household laundry capacity from net device mass and washing/heated-drying categories. |  |
| `denominator` | all inventory | Require positive N and D from calibrated accepted same-configuration records, verify Q includes rework/reject, and q_ref = Q/D = (Q/N)/(D/N); reject package/test-water/reject mass or cross-configuration means. |  |
| `buy_once` | component state | Verify every completed purchased motor/drum/control and embedded materials/upstream burdens once; actual site-made components activate full recipes and stages; match paired transfers. |  |
| `balances` | physical water, metal and solvent | Execute water_close, metal_close and solvent_close for applicable records including all stocks, reactions, wet/dry and own-term assays plus paired returns. Explain residual against actual combined uncertainty, not an arbitrary universal tolerance or invented loss. |  |
| `utilities` | site meters | Execute utility_residual with same site interval/unit and disjoint test/process loads; imports, generation, exports/regeneration and storage must reconcile. Reject whole-factory-plus-submeter double charge and unexplained negative residual. |  |
| `species` | actual emissions | Captured material is waste, not emitted metal; separate actual species and receiving compartment. CO/NO/NO2 require their own evidence; solvent destruction and recovery differ from air release. |  |
| `coverage` | data package | Report accepted input, checks performed/skipped, findings and completeness; unknown UUID/provider/amount is incomplete, not zero. Conditional absence needs actual BOM/test evidence. Resolve all applicable additional exchange gaps before unqualified secondary use. |  |



## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground primary unit-process data package for one complete configured extractor through manufacturer gate |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing input to the same delivered device with reviewed upstream/treatment links; later use model separately |
| excluded_use | Standalone complete cradle-to-gate claim with missing providers; functional laundry equivalence, default lifetime or operating savings; washer/heated-dryer substitution |
| required_metadata | All qualifiers; factory period and N/D/Q; make/buy; active/absent routes; acceptance/test load; measured utility reconciliation; supplier/transport/treatment links; allocation and source editions |
| required_quality_disclosure | UUID/provider and recipe gaps; source conflict; no empirical ranges; measured uncertainty; skipped/inconclusive checks; absence evidence and substitutions |
| update_trigger | Changed model/BOM, motor/drive/suspension/safety, materials/finish, make/buy, acceptance, site utility, calibration, allocation or supplier state |



## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-notes` | official_guidance | UNSD CPC Version3.0 explanatory notes, 30 June2025, pp.239 and241. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Current original44812 household washing/drying and44911 centrifugal title only; household individual assignment requires actual classification review. |
| `wco-hs2022-84` | official_guidance | WCO HS Nomenclature 2022, Chapter84 note2 and headings8421/8450/8451, PDF pp.1,9,19–20. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1684_2022e.pdf?la=en | Primary nomenclature distinguishes centrifugal dryers from built-in washing/drying; not a current CPC3 crosswalk or individual device ruling. |
| `un-cpc-3-0` | official_guidance | UNSD CPC 3.0 structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 44911 centrifugal category; neighboring 44622 laundry machines and 44812 household washing/drying. Labels support scope comparison, not a manufacturing recipe. |
| `thomas-centri` | handbook | Robert Thomas, CENTRI 776 SEK, original product page, accessed 2026-10-02. https://thomas-germany.com/en-uk/THOMAS-Spin-dryer-CENTRI-776-SEK/ | Household standalone stainless drum, safety lid/one-hand control, device versus boxed mass distinction; no numeric mass or operating intensity adopted. |
| `thomas-instructions` | handbook | Robert Thomas, CENTRI instructions 188417, English pp.9–10. https://thomas-germany.com/media/8f/46/d4/1734441270/188417%20%281%29.pdf | Water spout, wet-cloth loading, lid stop safeguard and flexible motor/drum suspension; user operation does not prove factory test recipe. |
| `fabcare-extractor` | handbook | Fabcare, Hydro Extractor (Direct Drive), original description, accessed 2026-10-02. https://fabcare.com/shop/hydro-extractor/hydro-extractordirect-drive/ | Industrial clothes extractor, 304 basket/drum, galvanized base, self-balancing, timed DC-injection/direct-drive variant; no default laundry capacity or energy. |
| `swastik-extractor` | handbook | Swastik, Hydro Extractors, scanned original PDF p.2. https://www.swastiktextile.com/Download%20Catalogue/hydro_extractor.pdf | Stainless basket/housing, cast-iron bearing housing, steel shaft/springs, roller/thrust bearings and VFD; counterexample to universal brake/clutch, optional loading device and mains regeneration. No empirical factory factors. |
| `ifb-inc100` | handbook | IFB Industries, INC100 Hydro Extractor, construction and safety specifications, accessed 2026-10-02. https://www.ifbappliances.com/inc-100 | Industrial stainless construction, casting frame, three-phase motor, pneumatic lock, timer and safety switch; non-coaxial headline conflicts with direct-drive summary so BOM verification required. No example weight or energy default. |
