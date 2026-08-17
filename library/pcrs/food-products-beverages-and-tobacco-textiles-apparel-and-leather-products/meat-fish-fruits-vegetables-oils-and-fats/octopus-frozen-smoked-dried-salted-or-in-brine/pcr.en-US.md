---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.octopus-frozen-smoked-dried-salted-or-in-brine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Octopus, frozen, smoked, dried, salted or in brine

## 1. Scope and Applicability

This PCR covers saleable octopus preserved by exactly one declared primary route: frozen, smoked, dried, salted, or packed in brine. Combined operations that are inherent to one declared route, such as salting before smoking or drying during smoke-drying, remain part of that route and do not make every route applicable. The foreground package shall identify species or commercial designation, raw material state, product form, preservation route, packaging format, and storage condition.

The PCR excludes live, fresh or merely chilled octopus; canned or otherwise sterilized shelf-stable products; prepared meals; mixed seafood products where octopus is not the reference product; and capture, aquaculture, distribution, retail, use, and end-of-life processes from the foreground boundary. Upstream datasets for received octopus, energy, water, salt, process aids, and packaging remain required when a lifecycle model is produced.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.octopus-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21267 |
| covered_products | Octopus sold frozen, smoked, dried, salted, or in brine, including whole, cleaned, cut, or otherwise marketable forms whose principal product is octopus. |
| excluded_products | Live, fresh or chilled octopus; canned or sterilized octopus; prepared meals; mixed seafood products; non-octopus cephalopods. |
| representative_product | A packaged, qualified, saleable octopus product at the processing-facility gate. |
| production_route | One mutually exclusive declared route: `frozen`, `smoked`, `dried`, `salted`, or `in_brine`; record any integral substeps within that route. |
| market_state | Route-specific saleable state at the processing-facility gate, with required storage condition and shelf-life declaration. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of qualified, saleable preserved octopus in the declared product form and preservation route. |
| How much | 1 kg of net octopus product, excluding packaging and, where applicable, excluding protective ice glaze or free brine. |
| How well | Meets the declared commercial specification and applicable food-safety controls, with product form, route, moisture or salt condition, and storage condition disclosed. |
| How long or cycle | One supply at the processing-facility gate; declare the labelled shelf life and the storage duration and temperature represented by the dataset. |
| reference_flow_link | The functional unit is realized by exactly 1 kg of the reference product flow under the route-specific measurement rules below. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Octopus, frozen, smoked, dried, salted or in brine `5c8cdbc1-2f53-47ac-aa4a-e44125c18761` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | preservation route; species or commercial designation; product form and edible/saleable portion definition; cooked or raw state; moisture content for dried or smoke-dried product; salt content or brine concentration for salted or brined product; glaze fraction for glazed frozen product; drained-mass basis for product in brine; packaging format; storage temperature; represented storage duration; shelf life |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. The Tiangong flow is the exact generic CPC 21267 product flow; route and product-form differences are qualifiers, not alternative canonical product-flow identities.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net qualified saleable octopus product; exclude primary, secondary, and transport packaging from product mass. |
| `frozen_deglazed_mass` | glazed frozen route | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use deglazed product mass for the reference flow and separately record glaze water applied and removed; disclose the deglazing method and measured glaze fraction. |
| `brined_drained_mass` | in-brine route | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use drained octopus mass for the reference flow; record packing brine separately and disclose drainage procedure, time, temperature, and brine concentration. |
| `preservation_condition` | smoked, dried, salted, or in-brine routes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure product as sold and disclose moisture content for dried or smoke-dried product and salt content or brine concentration for salt-dependent routes; do not compare route results without harmonizing these conditions. |
| `saleable_portion` | all routes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Declare whether the marketable product is whole, cleaned, cut, cooked, or raw and which parts are included; normalize only the qualified saleable octopus portion to 1 kg. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Octopus received at the processing facility, with supplier, species or commercial designation, origin, fresh/chilled/frozen state, temperature, product form, and accepted mass recorded. |
| starting_condition_role | Purchased octopus input to gate-to-gate foreground preservation and packaging. |
| product_classification_scope | The finished reference flow is CPC 3.0 21267; incoming live, fresh, or chilled octopus is an upstream input and not the finished category. |
| recursive_input_rule | If a CPC 21267 preserved octopus product is reprocessed, record it as a purchased intermediate with its own upstream dataset and do not recursively reconstruct its preservation burdens inside this foreground package. |
| upstream_dataset_requirement | Require upstream datasets for received octopus, purchased preserved octopus intermediates, energy carriers, water, food-grade salt and process aids, smoke-generating material where used, and packaging materials. |
| disclosure | Disclose facility geography, reporting period, route, species or commercial designation, incoming state, product form, yield, storage conditions, packaging, excluded processes, and any reused preserved intermediate. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | foreground processing | Include receiving and preparation, exactly one declared preservation route, packaging, and route-required storage through the processing-facility gate. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `sb_route_exclusivity` | preservation route | Model `frozen`, `smoked`, `dried`, `salted`, or `in_brine` as mutually exclusive primary routes; include only integral substeps actually used by the declared route. | `codex-cxc-52-2003` |
| `sb_upstream_and_packaging` | purchased inputs | Keep capture or aquaculture outside the foreground process but link upstream datasets for all purchased inputs; include packaging production in the lifecycle model and record packaging by material. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `octopus_receiving_preparation` | Octopus receiving and preparation | `required` | Always; record only operations actually performed, such as thawing, washing, cleaning, cutting, or cooking. | Establish accepted raw mass and prepared intermediate. | kg prepared octopus output |
| `route_preservation` | Route-specific preservation | `required` | Select exactly one primary route: frozen, smoked, dried, salted, or in brine. | Convert prepared octopus into the declared preserved state. | kg preserved octopus output |
| `packaging_storage` | Packaging and route-required storage | `required` | Always; storage technology and duration follow the declared route and sale condition. | Produce qualified saleable product at facility gate. | 1 kg reference product |

### Process: Octopus receiving and preparation (`octopus_receiving_preparation`)

#### Inputs

##### Product flows

###### Received octopus (`received_octopus`)

Record the accepted as-received octopus mass crossing the facility gate and its incoming state.

- Selected flow: Received octopus
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass by production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `codex-cxc-52-2003`
- Range: Provisional route-spanning raw-input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 8
  - Unit: kg/kg qualified saleable product
  - Basis: broad temporary estimate spanning cleaned through strongly dried product; apply only until route-specific annual mass-balance evidence is available and replace when reviewed batch yield data exist
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water (`preparation_water`)

Record metered or reconciled water used for thawing, washing, cleaning, or de-salting only when that operation occurs.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured water supplied minus separately measured recirculated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preparation-water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg prepared octopus output
  - Basis: temporary broad estimate applicable only to the actual washing, thawing, or cleaning configuration; replace when route- and facility-specific metered records cover the reporting period
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Waste flows

###### Removed material and rejects (`preparation_rejects`)

Record viscera, skin, damaged material, and other removed octopus fractions leaving the process; internal rework is tracked separately and is not waste.

- Selected flow: Octopus preparation residues
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving the process as waste or by-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg received octopus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Range: Provisional removed-material screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.9
  - Unit: kg/kg received octopus
  - Basis: temporary physical screening interval for the declared product form; replace when reviewed lot-level disposition records are available
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

##### Product flows

###### Prepared octopus intermediate (`prepared_octopus`)

Calculate prepared intermediate mass from measured output or a closed lot mass balance.

- Selected flow: Prepared octopus intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured prepared output mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_balance`

##### Waste flows

##### Elementary flows

### Process: Route-specific preservation (`route_preservation`)

#### Inputs

##### Product flows

###### Prepared octopus input (`prepared_octopus_input`)

Record the prepared octopus entering the selected preservation route.

- Selected flow: Prepared octopus intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass entering the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Range: Provisional route-spanning prepared-input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 6
  - Unit: kg/kg preserved octopus output
  - Basis: broad temporary interval reflecting route-dependent moisture and handling loss; replace after reviewed route-specific production yields are available
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Food-grade salt (`food_grade_salt`)

Record sodium chloride issued to salting, brining, or a salt-containing smoking or drying recipe. This row is not applicable to a route whose reviewed recipe contains no added salt.

- Selected flow: Salt, food-grade, for brine preparation `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured salt issue minus measured recoverable unopened return; do not net salt discharged in brine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs`
- Sources: `codex-cxc-52-2003`

###### Brine make-up water (`brine_makeup_water`)

Record water newly supplied to prepare packing or process brine. This row applies only when the declared route uses brine; reused brine remains visible in the brine balance and is not counted as new water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered new water entering brine preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs`
- Sources: `codex-cxc-52-2003`

###### Wood chips for smoke generation (`smoking_wood_chips`)

Record the mass of wood chips entering an on-site smoke generator. Apply only to smoked or smoke-dried routes; disclose species and any prohibited treatment or contamination controls.

- Selected flow: Untreated food-smoking wood chips, declared species and moisture
- Flow property / unit: Mass / kg
- Amount rule: measured dry or as-received chip issue, with moisture basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs`
- Sources: `codex-cxc-52-2003`

###### Preservation electricity (`preservation_electricity`)

Record alternating-current electricity used by freezers, fans, pumps, controls, dryers, smoke generators, and other preservation equipment. Use the voltage- and geography-matched supply flow; the UUID below is the verified low-voltage consumption-mix identity.

- Selected flow: Alternating current, electricity mix, consumption mix, less than 1 kV `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: submetered electricity or engineering allocation from equipment power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs`
- Sources: `codex-cxc-52-2003`

###### Purchased process steam (`preservation_steam`)

Record purchased or separately generated steam only when steam crosses this process boundary. Resolve pressure and temperature to the actual supply; the verified UUID below is usable only for 11.0 MPaG steam and must not be silently reused for another grade.

- Selected flow: Steam, 11.0 MPaG `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: steam meter reading or condensate-corrected engineering balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs`
- Sources: `codex-cxc-52-2003`

###### Purchased hot water (`preservation_hot_water`)

Record hot water crossing the preservation boundary as a supplied thermal product. Apply only when heat is purchased or transferred as hot water; declare inlet and return temperatures and resolve a temperature-matched Tiangong UUID before publication.

- Selected flow: Hot water, supplied at declared inlet and return temperatures
- Flow property / unit: Mass / kg
- Amount rule: metered supply mass, without double-counting returned closed-loop water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs`
- Sources: `codex-cxc-52-2003`

###### Natural gas for on-site heat (`preservation_natural_gas`)

Record pipeline natural gas combusted on site for smoking, drying, brine heating, or other preservation heat. This row is not used when heat is received entirely as steam or hot water.

- Selected flow: Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fuel-meter mass or volume converted with measured density and declared net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs`
- Sources: `codex-cxc-52-2003`

###### Diesel oil for on-site heat (`preservation_diesel`)

Record diesel oil combusted on site only where it is the actual dryer, boiler, smoke-generator, or backup fuel.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured tank issue reconciled to stock change for the applicable equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs`
- Sources: `codex-cxc-52-2003`

###### Liquefied petroleum gas for on-site heat (`preservation_lpg`)

Record LPG combusted on site only where it is the actual thermal fuel.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured cylinder or bulk-tank issue reconciled to stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs`
- Sources: `codex-cxc-52-2003`

###### R717 refrigerant make-up (`preservation_r717_makeup`)

Record anhydrous ammonia added to preservation refrigeration equipment after charging or leakage. Apply only to equipment whose verified refrigerant is R717.

- Selected flow: Ammonia, anhydrous, liquid (R717) `6928be4f-282b-4448-8f2a-f8c746621303`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased or issued make-up mass assigned from the equipment refrigerant ledger
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs`

###### R404A refrigerant make-up (`preservation_r404a_makeup`)

Record R404A added to preservation refrigeration equipment after charging or leakage. Apply only to equipment whose verified refrigerant is R404A; other refrigerants require their own atomic cards.

- Selected flow: Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased or issued make-up mass assigned from the equipment refrigerant ledger
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs`

#### Outputs

##### Waste flows

###### Non-saline process wastewater (`preservation_wastewater`)

Record thawing, washing, condensate, or other non-saline preservation wastewater sent to treatment; keep high-salinity brine discharge in the next row.

- Selected flow: Untreated municipal wastewater influent `41eb8873-6852-40fe-8b5d-b792fe4d4754`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered or mass-balance discharge volume at the treatment inlet
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs`

###### Spent high-salinity brine (`spent_brine`)

Record spent process or packing brine that leaves for wastewater treatment or disposal. Apply only to salted or in-brine routes and do not combine it with ordinary wastewater.

- Selected flow: High-concentration saline wastewater `76ab69b6-6fa7-461c-be07-bc54e581a699`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured spent-brine mass leaving the closed reuse loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs`

###### Rejected preserved octopus (`preservation_rejects`)

Record off-specification octopus removed during preservation and sent to the declared waste destination; recovered saleable co-product or rework remains a product flow instead.

- Selected flow: Rejected preserved octopus
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected product mass by lot and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

###### Wood ash from smoke generation (`smoking_wood_ash`)

Record ash removed from an on-site wood-chip smoke generator. Apply only when such a generator is used and keep captured soot in a separate row if measured.

- Selected flow: Wood ash from food-smoking smoke generation
- Flow property / unit: Mass / kg
- Amount rule: measured ash mass removed from the smoke generator
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs`

##### Elementary flows

###### Fossil carbon dioxide to air (`onsite_fossil_co2`)

Calculate direct fossil carbon dioxide from each on-site fossil fuel separately; do not include upstream fuel-production emissions here.

- Selected flow: Carbon dioxide (fossil), to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: fuel-specific consumed mass multiplied by a documented carbon-content and oxidation factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route_inputs`

###### Nitrogen oxides to air (`onsite_nox`)

Record or calculate nitrogen oxides from on-site combustion using equipment- and fuel-specific monitoring or factors.

- Selected flow: Nitrogen oxides, to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: measured stack release or fuel-specific emission-factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route_inputs`

###### Sulfur dioxide to air (`onsite_so2`)

Record or calculate sulfur dioxide from sulfur-bearing on-site fuel; zero is allowed only with fuel specification or monitoring evidence.

- Selected flow: Sulfur dioxide, to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: measured stack release or fuel sulfur balance with documented retention
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route_inputs`

###### Fine particulate matter to air (`onsite_pm25`)

Record or calculate primary particulate matter no larger than 2.5 micrometres from on-site combustion or smoke generation.

- Selected flow: Particles (PM0.2 - PM2.5), to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: measured stack release or equipment-specific emission-factor calculation after controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route_inputs`

###### R717 refrigerant to air (`preservation_r717_emission`)

Record ammonia released from R717 preservation refrigeration equipment; apply only to R717 systems.

- Selected flow: Ammonia (R717), to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: equipment refrigerant balance or measured leakage assigned to preservation operation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route_inputs`

###### R404A refrigerant to air (`preservation_r404a_emission`)

Record R404A released from preservation refrigeration equipment; apply only to R404A systems.

- Selected flow: Refrigerant R404A, to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: equipment refrigerant balance or measured leakage assigned to preservation operation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route_inputs`

##### Product flows

###### Preserved octopus intermediate (`preserved_octopus`)

Record the measured preserved output before final packaging and storage.

- Selected flow: Preserved octopus intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured preserved output mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

##### Waste flows

##### Elementary flows

### Process: Packaging and route-required storage (`packaging_storage`)

#### Inputs

##### Product flows

###### Plastic film packaging (`plastic_film_packaging`)

Record plastic film used as a pouch, liner, wrap, or seal. Declare polymer, recycled content, thickness, and whether the film is primary or secondary packaging; other polymers or rigid packs require their own atomic rows.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued film mass reconciled to packed units and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `eu-pef-2021-2279`

###### Corrugated cardboard packaging (`corrugated_cardboard_packaging`)

Record corrugated boxes, trays, or dividers used for the declared sale unit or transport pack. Apply only when corrugated cardboard is present and declare recycled content and box specification.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued cardboard mass reconciled to packed units and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `eu-pef-2021-2279`

###### Storage electricity (`storage_electricity`)

Record electricity used by the facility storage room or freezer through the declared gate time. Apply the actual voltage and geography; the UUID below is the verified low-voltage consumption mix.

- Selected flow: Alternating current, electricity mix, consumption mix, less than 1 kV `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: metered storage electricity allocated by temperature-zone occupied mass-time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg reference product for the represented storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage`

###### Storage R717 refrigerant make-up (`storage_r717_makeup`)

Record anhydrous ammonia added to the storage refrigeration system. Apply only where the verified refrigerant is R717.

- Selected flow: Ammonia, anhydrous, liquid (R717) `6928be4f-282b-4448-8f2a-f8c746621303`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased or issued make-up mass assigned from the equipment refrigerant ledger by operating period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg reference product for the represented storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`

###### Storage R404A refrigerant make-up (`storage_r404a_makeup`)

Record R404A added to the storage refrigeration system. Apply only where the verified refrigerant is R404A; another refrigerant requires its own atomic product row and emission row.

- Selected flow: Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased or issued make-up mass assigned from the equipment refrigerant ledger by operating period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg reference product for the represented storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`

#### Outputs

##### Waste flows

###### Plastic film packaging scrap (`plastic_film_scrap`)

Record clean or contaminated plastic-film offcuts, rejected packs, and damaged film leaving the packaging process; preserve the declared treatment destination.

- Selected flow: Plastic film packaging scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured packaging scrap mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`

###### Corrugated cardboard packaging scrap (`corrugated_cardboard_scrap`)

Record corrugated-cardboard offcuts, rejected boxes, and damaged transport packaging leaving the packaging process.

- Selected flow: Corrugated cardboard packaging scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured packaging scrap mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`

##### Elementary flows

###### Storage R717 refrigerant to air (`storage_r717_emission`)

Record ammonia released from storage refrigeration equipment. Apply only to R717 systems.

- Selected flow: Ammonia (R717), to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: equipment refrigerant balance or measured leakage allocated by storage operating period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg reference product for the represented storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage`

###### Storage R404A refrigerant to air (`storage_r404a_emission`)

Record R404A released from storage refrigeration equipment. Apply only to R404A systems.

- Selected flow: Refrigerant R404A, to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: equipment refrigerant balance or measured leakage allocated by storage operating period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg reference product for the represented storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage`

##### Product flows

###### Qualified saleable octopus product (`reference_product`)

Output exactly the route-qualified reference product on the applicable net, deglazed, or drained mass basis.

- Selected flow: Octopus, frozen, smoked, dried, salted or in brine `5c8cdbc1-2f53-47ac-aa4a-e44125c18761`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: exactly 1 kg reference product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unstats-cpc-v3-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | multi-output foreground processes | First avoid allocation through process subdivision and direct measurement of route-specific inputs, utilities, residues, and products. | `eu-pef-2021-2279` |
| `alloc_physical` | unavoidable joint operations | If subdivision is not possible, use a documented physical causal relation; mass allocation may be used only when it reasonably represents causality for the joint operation. | `eu-pef-2021-2279` |
| `alloc_economic_last_resort` | co-products without defensible physical relation | Use economic allocation only as a last resort, state the market, price period, and sensitivity, and keep wastes assigned to the process that generates them. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_balance` | `octopus_receiving_preparation`; `route_preservation`; `packaging_storage` | received, prepared, preserved, saleable, reject, rework, glaze, and drained masses | scales, batch sheets, yield and disposition records | lot_id; species_or_commercial_designation; route; incoming_state; gross_mass; tare_mass; accepted_mass; intermediate_mass; final_net_mass; glaze_mass; drained_mass; reject_mass; rework_mass | Calibrated weighing by lot; preserve gross, tare, deglazed, and drained observations where applicable. | kg | each production lot | At least 12 consecutive representative months or the full seasonal campaign with justification. | All facilities represented by the dataset. | Sum accepted masses and normalize flows to qualified saleable mass; do not net rework across the boundary. | Scale calibration, lot traceability, reconciliation sign-off, and product specification. |
| `cp_route_inputs` | `octopus_receiving_preparation`; `route_preservation` | each atomic water, salt, wood-chip, electricity, steam, hot-water, natural-gas, diesel, LPG, R717, R404A, wastewater, spent-brine, reject, ash, combustion-emission, and refrigerant-emission row | meters, invoices, issue records, recipes, fuel and refrigerant ledgers, equipment logs, stack records, and discharge records | lot_id; route; atomic_flow_id; flow_uuid; quantity; unit; meter_start; meter_end; stock_start; stock_end; returned_quantity; operating_time; discharge_quantity; destination; emission_factor; factor_source | Direct metering preferred; otherwise reconcile each named material or carrier separately from purchases, stock, recipes, and equipment logs using a documented allocation. | kg; m3; kWh; carrier-specific SI unit | per lot or monthly with traceable lot allocation | Same period as product mass records. | Each included line and shared utility system. | Never aggregate carriers, materials, wastes, or pollutants into one exchange; subtract only measured closed-loop recovery; normalize each atomic row to preserved output. | Meter calibration, invoice or stock reconciliation, recipe approval, refrigerant ledger, flow UUID readback, and allocation rationale. |
| `cp_packaging_storage` | `packaging_storage` | plastic film, corrugated cardboard, each additional packaging material, storage electricity, each refrigerant make-up, each packaging scrap, and each refrigerant emission | packaging bill of materials, packed-unit counts, warehouse meters, refrigerant ledgers, temperature and inventory logs | packaging_material; flow_uuid; packaging_mass; packed_units; stored_mass; storage_start; storage_end; temperature; electricity; refrigerant_identity; refrigerant_makeup; refrigerant_recovery; refrigerant_release | Reconcile each packaging material to packed units; allocate electricity by documented mass-time; close a separate mass balance for each refrigerant identity. | kg; kWh; degree Celsius; day | each packaging campaign and monthly storage reconciliation | Same period as product mass records. | All packaging lines and storage rooms represented. | Normalize every packaging material separately to product mass, electricity to occupied mass-time, and each refrigerant make-up and release separately; retain route and temperature strata. | BOM revision, stock reconciliation, meter calibration, refrigerant ledger, flow UUID readback, and temperature-log completeness. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = period or lot amount / qualified saleable reference mass, then express per 1 kg. | collected flow amount; qualified saleable mass | amount per kg reference product | `eu-pef-2021-2279` |
| `calc_route_reference_mass` | glazed frozen or in-brine products | frozen reference mass = measured deglazed product mass; in-brine reference mass = measured drained octopus mass; all other routes use net saleable octopus mass excluding packaging. | gross, tare, glaze, deglazed, drained, and net masses | route-consistent reference mass | `codex-cxc-52-2003` |
| `calc_storage_energy` | shared storage | allocated energy = metered storage energy × represented product mass-time / total occupied mass-time for the same temperature zone and period. | meter energy; product mass; storage duration; total occupied mass-time | kWh per kg reference product for declared duration | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_route` | product and route | Preserve lot-level species or commercial designation, incoming state, product form, exactly one primary route, and required route qualifiers. | Product specification, label, batch sheet, and route log. |
| `dq_measurement` | mass, utilities, and storage | Use calibrated measurements where available, retain raw readings and conversion factors, and reconcile product, waste, rework, water, brine, packaging, and energy records. | Calibration records, meter logs, mass-balance review, and invoice or stock reconciliation. |
| `dq_representativeness` | reporting period and facilities | Cover all represented facilities and at least 12 representative months or a justified complete seasonal campaign; disclose temporal, technological, and geographical limitations. | Coverage table and data-quality assessment following `eu-pef-2021-2279`. |
| `dq_reasoned_estimates` | provisional ranges | Do not substitute the `reasoned_estimate` ranges for available foreground records; replace them when reviewed route-specific batch, meter, recipe, packaging, storage, or discharge evidence becomes available. | Review record identifying each replaced or retained provisional range. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | Require product flow UUID `5c8cdbc1-2f53-47ac-aa4a-e44125c18761`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and reference amount 1. | `unstats-cpc-v3-2025` |
| `val_route_one_of` | product route | Require exactly one of `frozen`, `smoked`, `dried`, `salted`, or `in_brine`; reject a package that applies every route or omits the actual integral substeps. | `codex-cxc-52-2003` |
| `val_mass_condition` | reference mass | Require packaging exclusion and the applicable net, deglazed, or drained mass basis; require moisture, salt or brine, glaze, edible/saleable portion, storage, and shelf-life qualifiers when applicable. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `val_process_completeness` | foreground inventory | Require all three processes and one atomic row for every applicable exchange: electricity; steam or hot water; each fuel; each refrigerant make-up and emission; water; salt; smoke material; each waste stream; each pollutant; and each packaging material and scrap. Reject collection labels, combined carrier lists, and selector instructions; zero is accepted only when records demonstrate non-use or non-generation. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `val_mass_balance` | each production lot or reconciled period | Reconcile received, intermediate, final, waste, rework, glaze, brine, and moisture-related mass changes; disclose unexplained imbalance and do not force water-loss routes to equal wet-product yields. | `codex-cxc-52-2003` |
| `val_estimate_replacement` | reasoned estimates | Flag every retained provisional range and require replacement when reviewed foreground or source-backed route-specific evidence becomes available; provisional ranges are not publication-critical allowed ranges. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate preserved-octopus production dataset. |
| downstream_use | `secondary_dataset`; `background_dataset`; process and lifecyclemodel projections. |
| allowed_use | Route-matched modelling where product form, net-mass condition, storage, geography, technology, and reporting period are compatible and upstream datasets are linked. |
| excluded_use | Direct comparison or substitution across preservation routes without harmonized moisture, salt or brine, glaze, drained-mass, edible/saleable portion, packaging, storage, and shelf-life conditions; modelling live/fresh/chilled or canned products. |
| required_metadata | PCR id and version; product flow UUID; CPC reference; species or commercial designation; product form; cooked/raw state; primary route; integral substeps; net/deglazed/drained mass basis; moisture, salt or brine, and glaze qualifiers; facility geography; technology; reporting period; packaging; storage temperature and duration; shelf life; allocation; upstream dataset references. |
| required_quality_disclosure | Data coverage, measurement and calibration, mass-balance closure, route separation, allocation, missing data, retained `reasoned_estimate` ranges, source versions, and temporal, technological, and geographical representativeness. |
| update_trigger | Change in route, species mix, product form, cooking state, preservation technology, recipe or brine, moisture or salt specification, glaze, packaging, storage regime, allocation, facility coverage, reference UUID, applicable official guidance, or replacement evidence that materially changes results. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-v3-2025` | `dataset` | United Nations Statistics Division, Central Product Classification Version 3.0, structure dated 30 June 2025, code 21267, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-11). | Exact official category title and product-scope anchor. |
| `codex-cxc-52-2003` | `official_guidance` | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, 2nd edition, FAO, https://www.fao.org/4/i2382e/i2382e.pdf (retrieved 2026-08-11). | Cephalopod handling; fresh/frozen foundation; definitions and process structure for freezing, glazing, salting, brining, smoking, smoke-drying, packaging, storage, hygiene, and lot control. |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, including Annexes 1 and 2, https://environment.ec.europa.eu/publications/recommendation-use-environmental-footprint-methods_en (retrieved 2026-08-11). | Functional unit and reference flow, system boundary, packaging inclusion, multi-functionality hierarchy, foreground collection, completeness, and data-quality representativeness. |
