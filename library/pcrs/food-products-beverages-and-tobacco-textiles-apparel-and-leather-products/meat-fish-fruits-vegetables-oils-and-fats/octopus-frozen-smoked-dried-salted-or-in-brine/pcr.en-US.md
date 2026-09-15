---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.octopus-frozen-smoked-dried-salted-or-in-brine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Octopus, frozen, smoked, dried, salted or in brine

## 1. Scope and Applicability

This PCR covers saleable octopus preserved by one declared primary route: frozen, smoked, dried, salted, or in brine. Integral substeps such as salting before smoking do not make the other primary routes applicable. The foreground package shall identify species or commercial designation, incoming state, product form, route, recipe, packaging, storage condition, and represented shelf life.

Live, fresh or merely chilled octopus, canned or sterilized products, prepared meals, mixed seafood products, capture or aquaculture, distribution, retail, use, and end of life are excluded from the foreground boundary. Upstream datasets remain required for every purchased octopus, material, energy carrier, water, chemical, refrigerant, smoke material, and packaging component.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.octopus-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21267 |
| covered_products | Octopus sold frozen, smoked, dried, salted, or in brine, in whole, cleaned, cut, cooked, or raw marketable forms. |
| excluded_products | Live, fresh or chilled octopus; canned or sterilized octopus; prepared meals; mixed seafood products; non-octopus cephalopods. |
| representative_product | Packaged, qualified saleable octopus at the processing-facility gate. |
| production_route | Exactly one of `frozen`, `smoked`, `dried`, `salted`, or `in_brine`; declare all integral substeps. |
| market_state | Route-specific saleable state at the facility gate, with storage condition and shelf life declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of qualified saleable octopus in the declared product form and preservation route. |
| How much | 1 kg net octopus product, excluding packaging and, where applicable, protective ice glaze or free packing brine. |
| How well | Meets the declared commercial and food-safety specification, with product form, cooked/raw state, moisture or salt condition, and storage condition disclosed. |
| How long or cycle | One supply at the processing-facility gate; declare represented storage duration, temperature, and labelled shelf life. |
| reference_flow_link | Exactly 1 kg of the reference product flow under the applicable route-specific measurement rule. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Octopus, frozen, smoked, dried, salted or in brine `5c8cdbc1-2f53-47ac-aa4a-e44125c18761` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | preservation route; species or commercial designation; product form and saleable portion; cooked/raw state; moisture for dried or smoke-dried product; salt content or brine concentration for salt-dependent routes; glaze fraction for glazed frozen product; drainage procedure for product in brine; packaging format; storage temperature and duration; shelf life |

Every required qualifier shall be declared in dataset metadata or an equivalent foreground-package field. The Tiangong reference-product flow was directly verified at `state_code=100`; route differences remain qualifiers rather than approximate alternative flow identities.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to 1 kg net qualified saleable octopus and exclude all packaging. |
| `frozen_deglazed_mass` | glazed frozen product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use deglazed product mass; separately record glaze water and measured glaze loss. |
| `brined_drained_mass` | product sold in brine | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use drained octopus mass; separately record packing brine and drainage procedure. |
| `preservation_condition` | smoked, dried, salted, and in-brine products | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure product as sold and disclose moisture and salt or brine condition as applicable. |
| `saleable_portion` | all routes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Declare included edible/saleable parts and normalize only the qualified saleable portion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Octopus received at the processing facility, with supplier, origin, species or commercial designation, fresh/chilled/frozen state, temperature, form, and accepted mass recorded. |
| starting_condition_role | Purchased octopus input to gate-to-gate preparation, preservation, packaging, storage, sanitation, and on-site wastewater treatment. |
| product_classification_scope | Finished reference product is CPC 3.0 21267; incoming fresh/chilled octopus is an upstream input. |
| recursive_input_rule | Record a purchased CPC 21267 intermediate with its own upstream dataset and do not reconstruct its earlier preservation burdens inside this foreground package. |
| upstream_dataset_requirement | Require upstream datasets for every purchased product input, utility, fuel, chemical, refrigerant, smoke material, and packaging component. |
| disclosure | Disclose facility, period, route, species, incoming state, product form, yield, route equipment, actual fuels and refrigerants, packaging, storage, wastewater destination, and exclusions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | foreground production | Include common preparation, exactly one primary preservation route, packaging, gate storage, sanitation, and on-site wastewater treatment actually performed. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `sb_route_exclusivity` | preservation | Include only the declared route and its actual integral substeps, fuels, refrigerants, materials, wastes, and direct emissions. | `codex-cxc-52-2003`; `codex-cxc-68-2009` |
| `sb_complete_inventory` | all included processes | Keep every material, energy carrier, packaging component, waste, wastewater stream, and elementary emission as a separate exchange. | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `sb_upstream_inputs` | purchased inputs | Keep capture/aquaculture outside the foreground boundary but link an upstream dataset for each purchased input. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `common_preparation` | Receiving, thawing, washing, cleaning and grading | `required` | Always; record only operations actually performed. | Produce prepared octopus and establish accepted mass. | kg prepared octopus |
| `frozen_route` | Freezing and frozen holding | `conditional` | Only for primary route `frozen`. | Produce frozen octopus. | kg frozen octopus |
| `smoked_route` | Salting, smoking and route cooling | `conditional` | Only for primary route `smoked`. | Produce smoked octopus. | kg smoked octopus |
| `dried_route` | Drying | `conditional` | Only for primary route `dried`. | Produce dried octopus. | kg dried octopus |
| `salted_brined_route` | Salting or brine packing | `conditional` | Only for primary route `salted` or `in_brine`; distinguish the two outputs. | Produce salted or brined octopus. | kg route output |
| `packaging_storage` | Packaging and route-required storage | `required` | Always; include only actual components and storage equipment. | Produce saleable product at the facility gate. | 1 kg reference product |
| `sanitation_wastewater` | Sanitation and on-site wastewater treatment | `required` | Sanitation always; treatment rows apply only when performed on site. | Record hygiene inputs and wastewater fate. | 1 kg reference product |

### Process: Receiving, thawing, washing, cleaning and grading (`common_preparation`)

#### Inputs

##### Product flows

###### Received octopus (`received_octopus`)

Received octopus is recorded as one separate product flow entering Receiving, thawing, washing, cleaning and grading. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Received octopus
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass by lot; record supplier, species, state, temperature, and form
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared octopus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `codex-cxc-52-2003`

###### Ice used in receiving or thawing (`receiving_ice`)

Food-grade water ice is recorded as one separate product flow entering Receiving, thawing, washing, cleaning and grading. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Food-grade water ice
- Flow property / unit: Mass / kg
- Amount rule: measured purchased or produced ice entering the foreground process; do not combine with liquid water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared octopus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_common_inputs`
- Sources: `codex-cxc-52-2003`

###### Process water for thawing and washing (`preparation_water`)

Process Water is recorded as one separate product flow entering Receiving, thawing, washing, cleaning and grading. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered new liquid water for actual thawing, washing and preparation operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared octopus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_common_inputs`
- Sources: `codex-cxc-52-2003`

###### Preparation electricity (`preparation_electricity`)

Alternating current is recorded as one separate product flow entering Receiving, thawing, washing, cleaning and grading. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: submetered electricity for thawing, washing, grading and preparation equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared octopus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_common_inputs`

###### Sodium hydroxide used in common preparation cleaning (`preparation_sodium_hydroxide`)

Sodium hydroxide is recorded as one separate product flow entering Receiving, thawing, washing, cleaning and grading. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: active sodium hydroxide mass actually assigned to preparation-line cleaning; applicable only when used and excluded from the facility-wide sanitation row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared octopus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_common_inputs`
- Sources: `codex-cxc-52-2003`

###### Sodium hypochlorite used in common preparation disinfection (`preparation_sodium_hypochlorite`)

Sodium hypochlorite is recorded as one separate product flow entering Receiving, thawing, washing, cleaning and grading. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: active sodium hypochlorite mass actually assigned to preparation-line disinfection; applicable only when used and excluded from the facility-wide sanitation row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared octopus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_common_inputs`
- Sources: `codex-cxc-52-2003`

#### Outputs

##### Product flows

###### Prepared octopus intermediate (`prepared_octopus`)

Prepared octopus intermediate is recorded as one separate product flow leaving Receiving, thawing, washing, cleaning and grading. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Prepared octopus intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured prepared output mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

##### Waste flows

###### Preparation rejects (`preparation_rejects`)

Octopus preparation residues is recorded as one separate waste flow leaving Receiving, thawing, washing, cleaning and grading. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Octopus preparation residues
- Flow property / unit: Mass / kg
- Amount rule: measured viscera, skin, damaged material and grading rejects leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg received octopus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

###### Preparation wastewater (`preparation_wastewater`)

Untreated seafood-processing wastewater is recorded as one separate waste flow leaving Receiving, thawing, washing, cleaning and grading. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Untreated seafood-processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured wastewater from thawing, washing and preparation sent to the declared treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared octopus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`

##### Elementary flows

### Process: Freezing and frozen holding (`frozen_route`)

#### Inputs

##### Product flows

###### Prepared octopus for freezing (`frozen_prepared_input`)

Prepared octopus intermediate is recorded as one separate product flow entering Freezing and frozen holding. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Prepared octopus intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering the frozen route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg frozen octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

###### Glaze water (`freezing_glaze_water`)

Process Water is recorded as one separate product flow entering Freezing and frozen holding. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured water applied as protective glaze; apply only when glazing is performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg frozen octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_route`
- Sources: `codex-cxc-52-2003`

###### Freezing electricity (`freezing_electricity`)

Alternating current is recorded as one separate product flow entering Freezing and frozen holding. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: submetered electricity for freezers, pumps, fans and controls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg frozen octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_route`

###### Frozen-holding electricity (`frozen_holding_electricity`)

Alternating current is recorded as one separate product flow entering Freezing and frozen holding. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: metered cold-room electricity allocated by temperature-zone mass-time before packaging transfer
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg frozen octopus for represented holding duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_route`

###### Freezing R717 make-up (`freezing_r717_makeup`)

Ammonia, anhydrous, liquid is recorded as one separate product flow entering Freezing and frozen holding. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Ammonia, anhydrous, liquid `6928be4f-282b-4448-8f2a-f8c746621303`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: ledgered make-up assigned to freezing equipment; apply only to verified R717 systems
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg frozen octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`

###### Freezing R404A make-up (`freezing_r404a_makeup`)

Refrigerant R404A is recorded as one separate product flow entering Freezing and frozen holding. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: ledgered make-up assigned to freezing equipment; apply only to verified R404A systems
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg frozen octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`

#### Outputs

##### Product flows

###### Frozen octopus intermediate (`frozen_octopus`)

Frozen octopus intermediate is recorded as one separate product flow leaving Freezing and frozen holding. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Frozen octopus intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured frozen output before final packaging, excluding protective glaze for yield normalization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

##### Waste flows

###### Freezing product loss (`freezing_loss`)

Octopus freezing loss is recorded as one separate waste flow leaving Freezing and frozen holding. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Octopus freezing loss
- Flow property / unit: Mass / kg
- Amount rule: measured product drip, dehydration loss and off-specification frozen octopus leaving the route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared octopus entering freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

##### Elementary flows

###### R717 released from freezing (`freezing_r717_emission`)

Ammonia (R717), to air, declared compartment is recorded as one separate elementary flow leaving Freezing and frozen holding. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Ammonia (R717), to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: refrigerant mass balance or measured release; apply only to R717 equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg frozen octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

###### R404A released from freezing (`freezing_r404a_emission`)

Refrigerant R404A, to air, declared compartment is recorded as one separate elementary flow leaving Freezing and frozen holding. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Refrigerant R404A, to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: refrigerant mass balance or measured release; apply only to R404A equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg frozen octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

### Process: Salting, smoking and route cooling (`smoked_route`)

#### Inputs

##### Product flows

###### Prepared octopus for smoking (`smoked_prepared_input`)

Prepared octopus intermediate is recorded as one separate product flow entering Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Prepared octopus intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering the smoked route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

###### Salt used before smoking (`smoking_salt`)

Salt is recorded as one separate product flow entering Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Salt `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured food-grade salt issued; apply only when dry salting is performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoked_route`
- Sources: `codex-cxc-52-2003`

###### Food-grade brine used before smoking (`smoking_brine`)

Food-grade sodium chloride brine is recorded as one separate product flow entering Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Food-grade sodium chloride brine
- Flow property / unit: Mass / kg
- Amount rule: measured prepared brine entering the fish-contact system; apply only when brining is performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoked_route`
- Sources: `codex-cxc-52-2003`

###### Water for smoking brine (`smoking_water`)

Process Water is recorded as one separate product flow entering Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered new water used to make smoking brine; do not double count purchased brine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoked_route`
- Sources: `codex-cxc-52-2003`

###### Wood chips for smoke generation (`smoking_wood_chips`)

Untreated food-smoking wood chips is recorded as one separate product flow entering Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Untreated food-smoking wood chips
- Flow property / unit: Mass / kg
- Amount rule: measured wood-chip issue with species and moisture basis declared; apply only to wood-chip smoke generation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoked_route`
- Sources: `codex-cxc-52-2003`; `codex-cxc-68-2009`

###### Smoking electricity (`smoking_electricity`)

Alternating current is recorded as one separate product flow entering Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: submetered electricity for smoke generator, chamber, fans, pumps, cooling and controls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoked_route`

###### Smoking steam (`smoking_steam`)

Steam is recorded as one separate product flow entering Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered 11.0 MPaG steam crossing the route boundary; apply only when this verified grade is actually supplied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoked_route`

###### Natural gas used for smoking heat (`smoking_natural_gas`)

natural gas in the gaseous state is recorded as one separate product flow entering Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured natural gas combusted for the smoked route; apply only when this fuel is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_combustion_fuels`

###### Diesel fuel used for smoking heat (`smoking_diesel`)

Diesel fuel is recorded as one separate product flow entering Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured diesel combusted for the smoked route; apply only when this fuel is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_combustion_fuels`

###### LPG used for smoking heat (`smoking_lpg`)

Liquefied petroleum gas is recorded as one separate product flow entering Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured LPG combusted for the smoked route; apply only when this fuel is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_combustion_fuels`

#### Outputs

##### Product flows

###### Smoked octopus intermediate (`smoked_octopus`)

Smoked octopus intermediate is recorded as one separate product flow leaving Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Smoked octopus intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured smoked output before final packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

##### Waste flows

###### Spent smoking brine (`smoking_spent_brine`)

High-concentration saline wastewater is recorded as one separate waste flow leaving Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: High-concentration saline wastewater `76ab69b6-6fa7-461c-be07-bc54e581a699`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured brine leaving the reuse loop; apply only when brining is performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`

###### Smoking product rejects (`smoking_rejects`)

Rejected smoked octopus is recorded as one separate waste flow leaving Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Rejected smoked octopus
- Flow property / unit: Mass / kg
- Amount rule: measured off-specification smoked product leaving the route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared octopus entering smoking
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

###### Wood ash from smoke generation (`smoking_wood_ash`)

Wood ash from food-smoking smoke generation is recorded as one separate waste flow leaving Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Wood ash from food-smoking smoke generation
- Flow property / unit: Mass / kg
- Amount rule: measured ash removed; apply only to an on-site solid smoke fuel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoked_route`

##### Elementary flows

###### Fossil carbon dioxide from smoking (`smoking_co2`)

carbon dioxide (fossil), to air, declared compartment is recorded as one separate elementary flow leaving Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: carbon dioxide (fossil), to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: fuel-specific calculation from each consumed fossil fuel; exclude biogenic carbon
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `ipcc-2006-stationary-combustion`

###### Methane from smoking combustion (`smoking_ch4`)

methane, to air, declared compartment is recorded as one separate elementary flow leaving Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: methane, to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: measured release or fuel- and equipment-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `ipcc-2006-stationary-combustion`

###### Nitrous oxide from smoking combustion (`smoking_n2o`)

nitrous oxide, to air, declared compartment is recorded as one separate elementary flow leaving Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: nitrous oxide, to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: measured release or fuel- and equipment-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `ipcc-2006-stationary-combustion`

###### Nitrogen oxides from smoking (`smoking_nox`)

nitrogen oxides, to air, declared compartment is recorded as one separate elementary flow leaving Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: nitrogen oxides, to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: measured stack release or fuel- and equipment-specific calculation after controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`

###### Sulfur dioxide from smoking (`smoking_so2`)

sulfur dioxide, to air, declared compartment is recorded as one separate elementary flow leaving Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: sulfur dioxide, to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: measured stack release or fuel sulfur balance after controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`

###### Carbon monoxide from smoking (`smoking_co`)

carbon monoxide, to air, declared compartment is recorded as one separate elementary flow leaving Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: carbon monoxide, to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: measured stack release or fuel- and equipment-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`

###### Fine particulate matter from smoking (`smoking_pm25`)

particles, PM2.5, to air, declared compartment is recorded as one separate elementary flow leaving Salting, smoking and route cooling. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: particles, PM2.5, to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: measured stack release or equipment-specific calculation after controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg smoked octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`

### Process: Drying (`dried_route`)

#### Inputs

##### Product flows

###### Prepared octopus for drying (`dried_prepared_input`)

Prepared octopus intermediate is recorded as one separate product flow entering Drying. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Prepared octopus intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering the dried route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg dried octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

###### Drying electricity (`drying_electricity`)

Alternating current is recorded as one separate product flow entering Drying. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: submetered electricity for dryer, fans, pumps, conveyors and controls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dried_route`

###### Drying steam (`drying_steam`)

Steam is recorded as one separate product flow entering Drying. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered 11.0 MPaG steam crossing the dryer boundary; apply only when this verified grade is supplied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dried_route`

###### Natural gas used for drying (`drying_natural_gas`)

natural gas in the gaseous state is recorded as one separate product flow entering Drying. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured natural gas combusted for drying; apply only when this fuel is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_combustion_fuels`

###### Diesel fuel used for drying (`drying_diesel`)

Diesel fuel is recorded as one separate product flow entering Drying. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured diesel combusted for drying; apply only when this fuel is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_combustion_fuels`

###### LPG used for drying (`drying_lpg`)

Liquefied petroleum gas is recorded as one separate product flow entering Drying. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured LPG combusted for drying; apply only when this fuel is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_combustion_fuels`

#### Outputs

##### Product flows

###### Dried octopus intermediate (`dried_octopus`)

Dried octopus intermediate is recorded as one separate product flow leaving Drying. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Dried octopus intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured dried output before final packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

##### Waste flows

###### Drying trims and rejects (`drying_rejects`)

Rejected dried octopus is recorded as one separate waste flow leaving Drying. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Rejected dried octopus
- Flow property / unit: Mass / kg
- Amount rule: measured trims and off-specification product leaving the dried route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared octopus entering drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

##### Elementary flows

###### Water removed during drying (`drying_removed_water`)

water vapour, to air, declared compartment is recorded as one separate elementary flow leaving Drying. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: water vapour, to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: calculated from inlet and dried-product moisture balance, corrected for liquid losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dried octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_balance`
- Sources: `codex-cxc-52-2003`; `codex-cxc-68-2009`

###### Fossil carbon dioxide from drying (`drying_co2`)

carbon dioxide (fossil), to air, declared compartment is recorded as one separate elementary flow leaving Drying. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: carbon dioxide (fossil), to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: fuel-specific calculation from each consumed fossil fuel
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `ipcc-2006-stationary-combustion`

###### Methane from drying combustion (`drying_ch4`)

methane, to air, declared compartment is recorded as one separate elementary flow leaving Drying. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: methane, to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: measured release or fuel- and equipment-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `ipcc-2006-stationary-combustion`

###### Nitrous oxide from drying combustion (`drying_n2o`)

nitrous oxide, to air, declared compartment is recorded as one separate elementary flow leaving Drying. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: nitrous oxide, to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: measured release or fuel- and equipment-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `ipcc-2006-stationary-combustion`

###### Nitrogen oxides from drying (`drying_nox`)

nitrogen oxides, to air, declared compartment is recorded as one separate elementary flow leaving Drying. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: nitrogen oxides, to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: measured stack release or fuel- and equipment-specific calculation after controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`

###### Sulfur dioxide from drying (`drying_so2`)

sulfur dioxide, to air, declared compartment is recorded as one separate elementary flow leaving Drying. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: sulfur dioxide, to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: measured stack release or fuel sulfur balance after controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`

###### Carbon monoxide from drying (`drying_co`)

carbon monoxide, to air, declared compartment is recorded as one separate elementary flow leaving Drying. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: carbon monoxide, to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: measured stack release or fuel- and equipment-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`

###### Fine particulate matter from drying (`drying_pm25`)

particles, PM2.5, to air, declared compartment is recorded as one separate elementary flow leaving Drying. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: particles, PM2.5, to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: measured stack release or equipment-specific calculation after controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried octopus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`

### Process: Salting or brine packing (`salted_brined_route`)

#### Inputs

##### Product flows

###### Prepared octopus for salting or brining (`salted_brined_prepared_input`)

Prepared octopus intermediate is recorded as one separate product flow entering Salting or brine packing. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Prepared octopus intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering the salted or in-brine route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

###### Food-grade salt for salting or brine (`food_grade_salt`)

Salt is recorded as one separate product flow entering Salting or brine packing. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Salt `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured salt issued to the actual dry-salting or brine recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salted_brined_route`
- Sources: `codex-cxc-52-2003`

###### Water for salting or brine (`brine_makeup_water`)

Process Water is recorded as one separate product flow entering Salting or brine packing. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered new water used in the actual recipe or rinse; do not double count purchased brine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salted_brined_route`

###### Prepared packing or process brine (`prepared_brine`)

Food-grade sodium chloride brine is recorded as one separate product flow entering Salting or brine packing. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Food-grade sodium chloride brine
- Flow property / unit: Mass / kg
- Amount rule: measured brine contacting product; separately reconcile salt and water used on site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salted_brined_route`
- Sources: `codex-cxc-52-2003`

###### Food-grade acetic acid additive (`brine_acetic_acid`)

Food-grade acetic acid is recorded as one separate product flow entering Salting or brine packing. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Food-grade acetic acid
- Flow property / unit: Mass / kg
- Amount rule: measured recipe quantity; apply only when acetic acid is actually used and list every other additive in its own atomic row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salted_brined_route`

#### Outputs

##### Product flows

###### Salted octopus intermediate (`salted_octopus`)

Salted octopus intermediate is recorded as one separate product flow leaving Salting or brine packing. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Salted octopus intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured output; apply only to primary route `salted`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

###### Brined octopus intermediate (`brined_octopus`)

Octopus in brine intermediate is recorded as one separate product flow leaving Salting or brine packing. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Octopus in brine intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured drained octopus output; apply only to primary route `in_brine`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

##### Waste flows

###### Spent salting or packing brine (`spent_brine`)

High-concentration saline wastewater is recorded as one separate waste flow leaving Salting or brine packing. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: High-concentration saline wastewater `76ab69b6-6fa7-461c-be07-bc54e581a699`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured brine leaving the reuse loop for treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`

###### Salting or brining product loss (`salted_brined_product_loss`)

Rejected salted or brined octopus is recorded as one separate waste flow leaving Salting or brine packing. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Rejected salted or brined octopus
- Flow property / unit: Mass / kg
- Amount rule: measured product loss and off-specification octopus by route and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared octopus entering the route
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

###### Non-saline route wastewater (`salted_brined_wastewater`)

Untreated seafood-processing wastewater is recorded as one separate waste flow leaving Salting or brine packing. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Untreated seafood-processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured non-brine wash and rinse wastewater sent to the declared treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`

##### Elementary flows

### Process: Packaging and route-required storage (`packaging_storage`)

#### Inputs

##### Product flows

###### Frozen octopus entering packaging (`packaging_frozen_input`)

Frozen octopus intermediate is recorded as one separate product flow entering Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Frozen octopus intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured input; apply only to primary route `frozen`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

###### Smoked octopus entering packaging (`packaging_smoked_input`)

Smoked octopus intermediate is recorded as one separate product flow entering Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Smoked octopus intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured input; apply only to primary route `smoked`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

###### Dried octopus entering packaging (`packaging_dried_input`)

Dried octopus intermediate is recorded as one separate product flow entering Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Dried octopus intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured input; apply only to primary route `dried`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

###### Salted octopus entering packaging (`packaging_salted_input`)

Salted octopus intermediate is recorded as one separate product flow entering Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Salted octopus intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured input; apply only to primary route `salted`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

###### Brined octopus entering packaging (`packaging_brined_input`)

Octopus in brine intermediate is recorded as one separate product flow entering Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Octopus in brine intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured drained octopus input; apply only to primary route `in_brine`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

###### Plastic film packaging (`plastic_film_packaging`)

Plastic film is recorded as one separate product flow entering Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued film reconciled to packed units; declare polymer, thickness, recycled content and packaging level
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`

###### Corrugated cardboard packaging (`corrugated_cardboard_packaging`)

Corrugated cardboard is recorded as one separate product flow entering Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued boxes, trays or dividers reconciled to packed units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`

###### Glass jar packaging (`glass_jar_packaging`)

Food-contact glass jar is recorded as one separate product flow entering Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Food-contact glass jar
- Flow property / unit: Mass / kg
- Amount rule: measured jar mass; apply only when glass jars are used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`

###### Metal closure packaging (`metal_closure_packaging`)

Food-contact steel jar closure is recorded as one separate product flow entering Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Food-contact steel jar closure
- Flow property / unit: Mass / kg
- Amount rule: measured closure mass; apply only when steel closures are used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`

###### Gate-storage electricity (`storage_electricity`)

Alternating current is recorded as one separate product flow entering Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: metered storage electricity allocated by temperature-zone occupied mass-time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg reference product for represented storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage`

###### Storage R717 make-up (`storage_r717_makeup`)

Ammonia, anhydrous, liquid is recorded as one separate product flow entering Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Ammonia, anhydrous, liquid `6928be4f-282b-4448-8f2a-f8c746621303`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: ledgered make-up assigned to storage; apply only to verified R717 systems
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg reference product for represented storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`

###### Storage R404A make-up (`storage_r404a_makeup`)

Refrigerant R404A is recorded as one separate product flow entering Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: ledgered make-up assigned to storage; apply only to verified R404A systems
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg reference product for represented storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`

#### Outputs

##### Product flows

###### Qualified saleable octopus product (`reference_product`)

Octopus, frozen, smoked, dried, salted or in brine is recorded as one separate product flow leaving Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Octopus, frozen, smoked, dried, salted or in brine `5c8cdbc1-2f53-47ac-aa4a-e44125c18761`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: exactly 1 kg after applicable net, deglazed or drained normalization; modelling identity, not an empirical range
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unstats-cpc-v3-2025`

##### Waste flows

###### Plastic film packaging scrap (`plastic_film_scrap`)

Plastic film packaging scrap is recorded as one separate waste flow leaving Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Plastic film packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: measured offcuts and rejected film by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`

###### Corrugated cardboard scrap (`corrugated_cardboard_scrap`)

Corrugated cardboard packaging scrap is recorded as one separate waste flow leaving Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Corrugated cardboard packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: measured rejected or damaged cardboard by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`

###### Glass packaging scrap (`glass_packaging_scrap`)

Food-contact glass packaging scrap is recorded as one separate waste flow leaving Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Food-contact glass packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: measured broken or rejected glass by destination; apply only when glass is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`

###### Steel closure scrap (`steel_closure_scrap`)

Steel packaging closure scrap is recorded as one separate waste flow leaving Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Steel packaging closure scrap
- Flow property / unit: Mass / kg
- Amount rule: measured rejected steel closures by destination; apply only when steel closures are used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`

##### Elementary flows

###### Storage R717 release (`storage_r717_emission`)

Ammonia (R717), to air, declared compartment is recorded as one separate elementary flow leaving Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Ammonia (R717), to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: refrigerant mass balance or measured release; apply only to R717 storage systems
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg reference product for represented storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

###### Storage R404A release (`storage_r404a_emission`)

Refrigerant R404A, to air, declared compartment is recorded as one separate elementary flow leaving Packaging and route-required storage. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Refrigerant R404A, to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: refrigerant mass balance or measured release; apply only to R404A storage systems
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg reference product for represented storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

### Process: Sanitation and on-site wastewater treatment (`sanitation_wastewater`)

#### Inputs

##### Product flows

###### Sanitation water (`sanitation_water`)

Process Water is recorded as one separate product flow entering Sanitation and on-site wastewater treatment. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered new water for equipment and facility sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_treatment`
- Sources: `codex-cxc-52-2003`

###### Sodium hydroxide cleaner (`sanitation_sodium_hydroxide`)

Sodium hydroxide is recorded as one separate product flow entering Sanitation and on-site wastewater treatment. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: measured chemical issue; apply only when sodium hydroxide is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_treatment`

###### Nitric acid cleaner (`sanitation_nitric_acid`)

Nitric acid is recorded as one separate product flow entering Sanitation and on-site wastewater treatment. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: measured chemical issue; apply only when nitric acid is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_treatment`

###### Sodium hypochlorite disinfectant (`sanitation_sodium_hypochlorite`)

Sodium hypochlorite is recorded as one separate product flow entering Sanitation and on-site wastewater treatment. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: measured active-product issue; apply only when sodium hypochlorite is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_treatment`

###### Sanitation and treatment electricity (`sanitation_electricity`)

Alternating current is recorded as one separate product flow entering Sanitation and on-site wastewater treatment. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: submetered electricity for cleaning systems, pumps, aeration and on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_treatment`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

###### Non-saline wastewater influent (`non_saline_wastewater_influent`)

Untreated seafood-processing wastewater is recorded as one separate waste flow entering Sanitation and on-site wastewater treatment. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Untreated seafood-processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured non-saline process and sanitation wastewater entering on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`

###### Saline wastewater influent (`saline_wastewater_influent`)

High-concentration saline wastewater is recorded as one separate waste flow entering Sanitation and on-site wastewater treatment. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: High-concentration saline wastewater `76ab69b6-6fa7-461c-be07-bc54e581a699`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured spent brine entering the declared saline-wastewater treatment or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`

#### Outputs

##### Product flows

##### Waste flows

###### Treated wastewater effluent (`treated_wastewater`)

Treated seafood-processing wastewater effluent is recorded as one separate waste flow leaving Sanitation and on-site wastewater treatment. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Treated seafood-processing wastewater effluent
- Flow property / unit: Volume / m3
- Amount rule: measured final effluent volume at the installation boundary; apply only to on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_treatment`

###### Wastewater-treatment sludge (`wastewater_sludge`)

Seafood-processing wastewater-treatment sludge is recorded as one separate waste flow leaving Sanitation and on-site wastewater treatment. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Seafood-processing wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured wet or dry sludge leaving treatment, with solids basis and destination declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_treatment`

##### Elementary flows

###### Chemical oxygen demand to water (`effluent_cod`)

Chemical oxygen demand, to water, declared compartment is recorded as one separate elementary flow leaving Sanitation and on-site wastewater treatment. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Chemical oxygen demand, to water, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: effluent volume multiplied by measured COD concentration for the same period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_quality`
- Sources: `eu-fdm-bat-2019-2031`

###### Biochemical oxygen demand to water (`effluent_bod`)

Biochemical oxygen demand, to water, declared compartment is recorded as one separate elementary flow leaving Sanitation and on-site wastewater treatment. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Biochemical oxygen demand, to water, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: effluent volume multiplied by measured BOD concentration for the same period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_quality`
- Sources: `eu-fdm-bat-2019-2031`

###### Total nitrogen to water (`effluent_total_nitrogen`)

Total nitrogen, to water, declared compartment is recorded as one separate elementary flow leaving Sanitation and on-site wastewater treatment. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Total nitrogen, to water, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: effluent volume multiplied by measured total-nitrogen concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_quality`
- Sources: `eu-fdm-bat-2019-2031`

###### Total phosphorus to water (`effluent_total_phosphorus`)

Total phosphorus, to water, declared compartment is recorded as one separate elementary flow leaving Sanitation and on-site wastewater treatment. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Total phosphorus, to water, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: effluent volume multiplied by measured total-phosphorus concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_quality`
- Sources: `eu-fdm-bat-2019-2031`

###### Total suspended solids to water (`effluent_tss`)

Total suspended solids, to water, declared compartment is recorded as one separate elementary flow leaving Sanitation and on-site wastewater treatment. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Total suspended solids, to water, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: effluent volume multiplied by measured total-suspended-solids concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_quality`
- Sources: `eu-fdm-bat-2019-2031`

###### Chloride to water (`effluent_chloride`)

Chloride, to water, declared compartment is recorded as one separate elementary flow leaving Sanitation and on-site wastewater treatment. Its quantity is obtained using the row-specific amount rule and collection protocol below.

- Selected flow: Chloride, to water, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: effluent volume multiplied by measured chloride concentration; apply where saline streams reach the discharge
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_quality`
- Sources: `eu-fdm-bat-2019-2031`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | shared or multi-output processes | First avoid allocation by route subdivision and direct metering of each named input, waste and emission. | `eu-pef-2021-2279` |
| `alloc_physical` | unavoidable shared operations | Use a documented physical causal relation, such as occupied mass-time for a common temperature zone, when subdivision is impossible. | `eu-pef-2021-2279` |
| `alloc_economic_last_resort` | co-products without defensible physical relation | Use economic allocation only as a last resort and disclose market, price period and sensitivity. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_balance` | all production processes | each octopus input, intermediate, saleable output, loss, reject and rework row | scales, batch sheets, moisture and disposition records | lot_id; route; species; incoming_state; gross_mass; tare_mass; intermediate_mass; final_mass; glaze_mass; drained_mass; moisture; reject_mass; rework_mass | Calibrated weighing and route-specific lot reconciliation. | kg; percent | each lot | Full representative period. | Every represented line and site. | Close each route separately and normalize to qualified saleable mass. | Calibration, lot traceability and signed reconciliation. |
| `cp_common_inputs` | `common_preparation` | ice, liquid water, electricity, each cleaner and each disinfectant | meters, invoices, production and issue logs | lot_id; flow_id; quantity; active_fraction; unit; meter_start; meter_end; stock_start; stock_end; assigned_process | Meter or reconcile each atomic input separately and prevent double counting with facility sanitation. | kg; kWh | per lot or monthly with traceable allocation | Same period as mass balance. | All preparation lines. | Normalize to prepared output without combining ice, water, electricity or chemicals. | Meter calibration, active-fraction record and stock/invoice reconciliation. |
| `cp_frozen_route` | `frozen_route` | glaze water, freezing electricity, holding electricity and freezing loss | meters, glaze records, freezer and cold-room logs | lot_id; freezer_id; water; electricity; temperature; start_time; end_time; product_mass; loss_mass | Direct meter or engineering allocation by documented equipment time and mass-time. | kg; kWh; degree Celsius; hour | each lot and monthly reconciliation | Same period as mass balance. | All freezers and pre-packaging cold rooms. | Keep freezing and holding electricity separate. | Meter calibration and temperature-log completeness. |
| `cp_smoked_route` | `smoked_route` | salt, brine, water, wood chips, electricity, steam, ash and smoke-route residues | recipes, meters, issue and stack records | lot_id; salt; brine; water; wood_species; wood_moisture; electricity; steam; ash; process_time; temperature | Reconcile each material and utility separately by lot. | kg; kWh; hour; degree Celsius | each lot | Same period as mass balance. | Every smoking line. | Do not combine smoke material, electricity, steam or fuel. | Approved recipe, meter calibration and material ledger. |
| `cp_dried_route` | `dried_route` | drying electricity, steam, moisture and rejects | meters, moisture tests, dryer and batch logs | lot_id; inlet_mass; outlet_mass; inlet_moisture; outlet_moisture; electricity; steam; time; temperature; reject_mass | Meter utilities and close a moisture balance by lot. | kg; kWh; percent | each lot | Same period as mass balance. | Every dryer. | Calculate removed water from compatible moisture measurements. | Meter and moisture-method QA. |
| `cp_salted_brined_route` | `salted_brined_route` | salt, water, brine and each additive | recipes, scales, meters and issue records | lot_id; route; ingredient_id; quantity; concentration; returned_quantity; reused_brine | Reconcile each ingredient and brine loop separately. | kg; percent | each lot | Same period as mass balance. | Every salting/brining line. | Never combine additives or net discharged brine from input. | Recipe approval and scale/meter calibration. |
| `cp_combustion_fuels` | `smoked_route`; `dried_route` | natural gas, diesel and LPG | fuel meters, invoices, tank and cylinder ledgers | equipment_id; fuel_id; quantity; unit; stock_start; stock_end; net_calorific_value; operating_time | Reconcile each actual fuel separately to equipment and route. | kg; MJ | monthly with lot allocation | Same period as route production. | Every on-site combustion source. | No generic thermal-energy or combined-fuel row. | Meter, invoice and stock reconciliation. |
| `cp_combustion_emissions` | `smoked_route`; `dried_route` | CO2, CH4, N2O, NOx, SO2, CO and PM2.5 | stack monitoring and fuel-specific calculations | source_id; pollutant; measured_concentration; gas_flow; fuel_quantity; factor; factor_source; control_efficiency | Prefer source-specific monitoring; otherwise use documented fuel- and equipment-specific factors. | kg | monitoring campaign or monthly calculation | Same period as fuel records. | Every stack or direct smoke source. | Calculate each pollutant separately after controls. | Monitoring QA, fuel specification and factor provenance. |
| `cp_refrigerant_balance` | `frozen_route`; `packaging_storage` | each refrigerant make-up and release | refrigerant ledger and service records | equipment_id; refrigerant_id; charge_start; purchases; additions; recovery; charge_end; measured_release | Close a separate mass balance for each refrigerant identity and equipment group. | kg | each service event and annual closure | Same period as product data. | Every refrigeration system. | Never combine refrigerants or assume R717 and R404A both apply. | Technician records and reconciled ledger. |
| `cp_packaging_storage` | `packaging_storage` | each packaging component, scrap, storage electricity and storage condition | BOM, issue records, packed counts, warehouse meters and logs | component_id; flow_uuid; mass; units; scrap; destination; stored_mass; temperature; start; end; electricity | Reconcile each component separately and allocate storage electricity by compatible temperature-zone mass-time. | kg; kWh; day | each campaign and monthly | Same period as product data. | All packaging lines and storage rooms. | No combined packaging-material or packaging-waste row. | BOM revision, stock reconciliation and temperature logs. |
| `cp_wastewater` | all wastewater-generating processes | each non-saline wastewater and spent-brine stream | flow meters, batch and discharge records | source_process; stream_id; volume; mass; salinity; chloride; destination; start; end | Meter each saline and non-saline stream before mixing. | m3; kg | daily or per batch | Same period as production. | Every discharge point. | Keep brine separate from ordinary wastewater. | Meter calibration and destination documentation. |
| `cp_sanitation_treatment` | `sanitation_wastewater` | sanitation water, each chemical, electricity, effluent and sludge | sanitation logs, chemical ledgers, meters and treatment records | chemical_id; active_fraction; quantity; water; electricity; influent; effluent; sludge; dry_solids; destination | Record each chemical and treatment output separately. | kg; m3; kWh | daily or sanitation event | Same period as production. | Whole represented facility. | Normalize after reconciling stock and wastewater flow. | Approved sanitation schedule, meter and laboratory QA. |
| `cp_effluent_quality` | `sanitation_wastewater` | COD, BOD, TN, TP, TSS and chloride | accredited sampling and laboratory records | sample_id; point; date; flow; parameter; concentration; method; detection_limit | Pair representative concentration with same-period effluent flow. | mg/L; m3 | permit/BAT-compatible frequency | Same period as effluent flow. | Final discharge and key treatment points. | pollutant load = concentration × compatible effluent volume. | Chain of custody, method, blanks, calibration and accreditation. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all rows | normalized amount = lot or period amount / qualified saleable reference mass. | atomic flow amount; applicable net/deglazed/drained mass | amount per kg reference product | `eu-pef-2021-2279` |
| `calc_route_mass_balance` | each route | received or prepared input = route output + measured product losses + retained/reworked material + measured moisture or brine change, with imbalance disclosed. | mass and moisture records | route yield and unresolved imbalance | `codex-cxc-52-2003` |
| `calc_combustion_emissions` | each on-site fuel and pollutant | use source monitoring or fuel quantity × documented fuel/equipment factor; calculate every pollutant separately. | fuel records; monitoring or factors | kg pollutant per kg route output | `ipcc-2006-stationary-combustion`; `eu-fdm-bat-2019-2031` |
| `calc_refrigerant_release` | each refrigeration system | release = opening charge + additions - recovery - closing charge, adjusted only for documented transfers. | refrigerant ledger | kg refrigerant released |  |
| `calc_effluent_load` | each effluent pollutant | load = compatible effluent volume × measured concentration, with unit conversion and non-detect treatment disclosed. | flow and laboratory result | kg pollutant per kg reference product | `eu-fdm-bat-2019-2031` |
| `calc_storage_energy` | shared storage | allocated electricity = zone electricity × represented product mass-time / total compatible occupied mass-time. | meter, temperature zone, mass and duration | kWh per kg for declared duration | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_route` | product and process | Preserve lot-level species, incoming state, form, exactly one primary route, and all applicable qualifiers. | Product specification, label and batch route log. |
| `dq_atomic_inventory` | every exchange | Retain one flow identity, direction, flow type, unit, amount rule and applicability condition per row; do not aggregate carriers, materials, wastes or pollutants. | Atomic-flow reconciliation and Tiangong readback where UUID is present. |
| `dq_measurement` | meters, scales and laboratory results | Retain raw readings, calibration, conversions, sampling point and method. | Calibration, chain of custody and laboratory QA. |
| `dq_representativeness` | period and sites | Cover the represented facilities and a justified representative period; disclose temporal, technological and geographical limits. | Coverage table and data-quality assessment. |
| `dq_unresolved_ranges` | important rows without ranges | Do not invent a range from a single study or single point; retain foreground collection until at least two independent, original, boundary-compatible sources support an inferred range. | Evidence review record linked to manifest unresolved item. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | Require product UUID `5c8cdbc1-2f53-47ac-aa4a-e44125c18761`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, kg, and reference amount 1. | `unstats-cpc-v3-2025` |
| `val_route_one_of` | route | Require exactly one of `frozen`, `smoked`, `dried`, `salted`, or `in_brine`; reject application of all route rows. | `codex-cxc-52-2003` |
| `val_route_completeness` | applicable route | Require every applicable named material, electricity row, steam row, actual fuel, refrigerant, waste, product loss and direct pollutant; accept non-applicability only with process evidence. | `codex-cxc-52-2003`; `codex-cxc-68-2009`; `eu-pef-2021-2279` |
| `val_no_collection_flows` | inventory | Reject a selected flow that is a plural collection, carrier list, material list, utility list, input/output placeholder, or selector instruction. | `eu-pef-2021-2279` |
| `val_refrigerant_pairing` | freezing and storage | For each actual refrigerant require separate make-up and release rows; do not imply R717 and R404A are both used. | `eu-pef-2021-2279` |
| `val_wastewater_pollutants` | on-site treatment and discharge | Require separate wastewater, brine, sludge, COD, BOD, TN, TP, TSS and applicable chloride records with sampling point and destination. | `eu-fdm-bat-2019-2031` |
| `val_mass_balance` | each lot or period | Reconcile inputs, route output, loss, reject, moisture, glaze and brine changes and disclose unexplained imbalance. | `codex-cxc-52-2003` |
| `val_range_evidence` | any authored range | Reject equal lower/upper empirical ranges and any inferred external range lacking at least two independent, original, boundary-compatible sources. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate preserved-octopus production dataset. |
| downstream_use | `secondary_dataset`; `background_dataset`; process and lifecyclemodel projections. |
| allowed_use | Route-matched modelling with compatible product form, mass condition, technology, storage, geography and period. |
| excluded_use | Cross-route comparison without harmonized moisture, salt/brine, glaze, drained-mass, packaging, storage and shelf-life conditions; modelling fresh/chilled or canned products. |
| required_metadata | PCR id/version; reference UUID; CPC ref; species; product form; cooked/raw state; one primary route; integral substeps; net/deglazed/drained basis; moisture/salt/brine/glaze; facility; technology; actual fuels and refrigerants; period; packaging; storage; allocation; wastewater destination; upstream datasets. |
| required_quality_disclosure | Coverage, calibration, route mass balance, atomic-flow completeness, allocation, missing data, unresolved UUIDs and ranges, source versions, and representativeness. |
| update_trigger | Material change in route, species, form, technology, recipe, moisture/salt/glaze, fuel, refrigerant, packaging, storage, wastewater treatment, allocation, coverage, UUID, official guidance, or evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-v3-2025` | `dataset` | United Nations Statistics Division, Central Product Classification Version 3.0, structure dated 30 June 2025, code 21267, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-24). | Official category identity and scope anchor. |
| `codex-cxc-52-2003` | `official_guidance` | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, official code listing and full text, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ and https://www.fao.org/4/i2382e/i2382e.pdf (retrieved 2026-08-24). | Cephalopod receiving and thawing; ice, water, hygiene, freezing, glazing, salting, brining, drying, smoking, packaging, storage and lot controls. |
| `codex-cxc-68-2009` | `official_guidance` | Codex Alimentarius, CXC 68-2009, Code of Practice for the Reduction of Contamination of Food with Polycyclic Aromatic Hydrocarbons (PAH) from Smoking and Direct Drying Processes, official full text, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B68-2009%252FCXC_068e.pdf (retrieved 2026-08-24). | Smoke material and fuel identity, direct/indirect smoking and drying, combustion contaminants, particles, CO and process-control disclosure. |
| `eu-fdm-bat-2019-2031` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng (retrieved 2026-08-24). | Separate inventories of water, energy, raw materials, wastewater and waste gas; monitoring of COD, BOD, TN, TP, TSS, chloride and relevant air pollutants. |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279 on Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-24). | Functional unit, reference flow, complete atomic LCI, packaging, allocation, foreground collection, completeness and data quality. |
| `ipcc-2006-stationary-combustion` | `method_factor` | IPCC, 2006 Guidelines for National Greenhouse Gas Inventories, Volume 2 Energy, Chapter 2 Stationary Combustion, corrected chapter, https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol2.html (retrieved 2026-08-24). | Fuel-specific CO2, CH4 and N2O calculation method when source measurements are unavailable; no default factor is copied into this PCR. |
