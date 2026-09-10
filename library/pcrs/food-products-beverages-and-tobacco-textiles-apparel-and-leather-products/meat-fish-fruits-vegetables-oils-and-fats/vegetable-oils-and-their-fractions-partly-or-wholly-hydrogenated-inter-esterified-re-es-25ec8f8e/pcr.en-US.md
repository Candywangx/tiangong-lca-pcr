---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetable-oils-and-their-fractions-partly-or-wholly-hydrogenated-inter-esterified-re-es-25ec8f8e
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Vegetable oils and their fractions, partly or wholly hydrogenated, inter-esterified, re-esterified or elaidinised, whether or not refined, but not further prepared

## 1. Scope and Applicability

This PCR is route-specific. It applies only to food-grade refined, bleached and deodorized soybean oil that is partly hydrogenated in a batch or semi-continuous three-phase reactor with hydrogen and a supported nickel catalyst, followed by catalyst filtration. It does not combine hydrogenation with chemical interesterification, enzymatic interesterification, re-esterification or elaidinisation. Post-hydrogenation deodorization is included only when it is actually performed and declared.

No enzyme or reaction-neutralizing agent is used in this selected route; sodium hydroxide is used only as the separately inventoried cleaning agent. The on-site steam system uses natural gas as its only fuel. An enzyme, reaction-neutralizing reagent or additional boiler fuel would define a different foreground configuration and shall not be silently aggregated into this route.

The foreground gate starts when conforming refined soybean oil, hydrogen, supported nickel catalyst, utilities and ancillary materials are received at the modification facility. It ends with partly hydrogenated soybean oil cooled, stored and either packaged or prepared for bulk dispatch. Upstream soybean cultivation, oil extraction and refining are represented by supplier datasets. Distribution, food formulation, retail, use and end-of-life of the oil are outside this foreground boundary. A data package shall not use this route as a proxy for another vegetable oil, another catalyst, full hydrogenation or an interesterification route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetable-oils-and-their-fractions-partly-or-wholly-hydrogenated-inter-esterified-re-es-25ec8f8e |
| classification_refs | CPC 3.0: 21693 |
| covered_products | Food-grade partly hydrogenated soybean oil and its fractions produced from refined soybean oil by the selected supported-nickel catalytic hydrogenation route, whether or not followed by declared deodorization |
| excluded_products | Fully hydrogenated oil; chemically or enzymatically interesterified oil; re-esterified or separately elaidinised oil; animal or marine fats; crude soybean oil; blends, margarines, shortenings, emulsions and other further preparations |
| representative_product | Partly hydrogenated refined soybean oil at the modification-facility gate |
| production_route | Receipt and preparation of refined, bleached and deodorized soybean oil; drying and inerting; hydrogen addition over supported nickel catalyst; catalyst removal by filtration with diatomaceous earth; conditional deodorization; cooling, storage and packaging |
| market_state | Food-grade semi-finished oil or fat, in bulk or declared HDPE-drum packaging, ready for dispatch and not further formulated |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply food-grade partly hydrogenated soybean oil with a declared degree of hydrogenation and declared post-treatment state |
| How much | 1,000 kg net partly hydrogenated soybean oil |
| How well | Conforms to the buyer specification and applicable food law; declares iodine value or equivalent saturation indicator, trans-fat content, residual nickel result, moisture/volatile matter, insoluble impurities, acid value, peroxide value and post-deodorization status |
| How long or cycle | One production batch or campaign delivered at the facility gate; storage time between production and dispatch is declared |
| reference_flow_link | Net mass of conforming packaged or bulk partly hydrogenated soybean oil ready for dispatch |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Partly hydrogenated soybean oil |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | soybean oil identity; refined/bleached/deodorized feed status; partial hydrogenation target and measured endpoint; supported nickel catalyst identity; batch or semi-continuous reactor; hydrogen source; catalyst filtration method; post-deodorization yes/no; bulk or packaged dispatch; packaging specification; production geography; production period; trans-fat result and applicable market limit |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent data-package field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net product mass and normalize all inventory results to 1,000 kg of conforming reference product; exclude packaging mass from the reference amount. |
| `material_mass_basis` | oil, hydrogen, catalyst, filter aid, chemicals, wastes and emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve measured wet or as-received mass and declare concentration, moisture or solids basis whenever the exchanged material is a solution, slurry or wet waste. |
| `energy_carrier_basis` | electricity and natural-gas energy | Energy | kWh or MJ | Preserve the metered unit, lower or higher heating-value convention and conversion factor; do not merge electricity, fuel and steam into one exchange. |
| `water_basis` | process, cooling and wastewater flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each water circuit separately; do not count closed-loop cooling-water circulation as consumption, and report make-up and discharge independently. |
| `gas_basis` | hydrogen, nitrogen and vent gases | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert gas-meter readings to mass using recorded pressure, temperature, composition and the stated conversion method; keep hydrogen and nitrogen separate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Food-grade refined, bleached and deodorized soybean oil received at the modification facility, with supplier identity, batch mass and quality certificate |
| starting_condition_role | Upstream refined-oil product input to the foreground hydrogenation route |
| product_classification_scope | Only partly hydrogenated soybean oil made by supported-nickel catalytic hydrogenation; the wider CPC 21693 label is classification context and does not authorize other oils or modification routes |
| recursive_input_rule | Reworked partly hydrogenated soybean oil entering the same category is recorded once as a separate product input with its upstream dataset and rework fraction; do not recursively unfold it inside the current unit process |
| upstream_dataset_requirement | Supplier-specific datasets are required for refined soybean oil, hydrogen, nickel catalyst, diatomaceous earth, natural gas, electricity, water, nitrogen, sodium hydroxide and packaging; proxy use is disclosed and justified |
| disclosure | Declare oil origin and refining status, hydrogenation endpoint, reactor mode, catalyst identity and fate, filtration, conditional deodorization, utility configuration, cleaning and wastewater treatment, storage, dispatch mode and all exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_exclusivity` | foreground route | Model only the selected refined-soybean-oil supported-nickel partial-hydrogenation route; do not add chemical or enzymatic interesterification, re-esterification or other oil routes. | `unsd-cpc-3-0`; `usda-ars-soybean-hydrogenation-2014` |
| `boundary_process_completeness` | foreground unit processes | Include refined-oil receipt and preparation, drying/inerting, hydrogenation, catalyst and filter-aid removal, applicable post-treatment, cooling, storage, cleaning, wastewater handling, utility supply and packaging or bulk dispatch. | `eu-fdm-bat-2019`; `herrera-guzman-soybean-hydrogenation-2025` |
| `boundary_upstream_inputs` | supplied products and utilities | Represent each supplied material and energy carrier with an upstream dataset and keep its transport in that dataset or as a separately disclosed process; no upstream burden may disappear through a cut-off label. | `eu-pef-2021`; `iso-14044-2006` |
| `boundary_emission_origin` | direct releases | Record direct wastewater, waste-gas and residue streams at the process where they arise, including boiler combustion, reactor/storage vents and cleaning/wastewater treatment. | `eu-fdm-bat-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `refined_oil_reception_preparation` | Refined soybean oil receipt, filtration, drying and inert preparation | required | Always | foreground feed preparation | measured prepared oil transferred to hydrogenation |
| `natural_gas_steam_generation` | On-site natural-gas steam generation | required | Selected facility route uses an on-site natural-gas boiler | foreground utility generation | measured steam supplied to foreground processes |
| `nickel_catalytic_hydrogenation` | Supported-nickel catalytic partial hydrogenation | required | Always | foreground chemical modification | measured crude hydrogenated oil leaving the reactor |
| `catalyst_removal_post_treatment` | Nickel catalyst removal and polishing filtration | required | Always | foreground catalyst separation | measured filtered hydrogenated oil |
| `conditional_deodorization` | Post-hydrogenation deodorization | conditional | Include only when the batch is deodorized after hydrogenation | foreground post-treatment | measured deodorized hydrogenated oil |
| `cooling_storage_packaging` | Product cooling, storage and packaging | required | Always; packaging rows apply to the declared HDPE-drum dispatch configuration | foreground finishing | 1,000 kg conforming product ready for dispatch |
| `cleaning_wastewater_treatment` | Equipment cleaning and on-site wastewater treatment | required | Always for campaign cleaning; treatment reflects the selected on-site configuration | foreground hygiene and waste treatment | cleaning campaign and treated wastewater associated with the reference product |

### Process: Refined soybean oil receipt, filtration, drying and inert preparation (`refined_oil_reception_preparation`)

#### Inputs

##### Product flows

###### Refined soybean oil feed (`refined_soybean_oil_input`)

Food-grade refined, bleached and deodorized soybean oil is the only vegetable-oil feed permitted for this route.

- Selected flow: Refined soybean oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: received net mass attributable to conforming product, corrected for tank opening and closing inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_oil_preparation`
- Sources: `fao-who-codex-cxs210-1999`; `fao-who-codex-cxs19-1981`

###### Reception and preparation electricity (`reception_electricity`)

Electricity for unloading, pumping, filtration, vacuum drying and instrumentation is metered separately.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity for the preparation process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_oil_preparation`
- Sources: `eu-fdm-bat-2019`

###### Preparation steam (`preparation_steam`)

Steam used for tank heating or vacuum-drying duty is recorded as one utility flow.

- Selected flow: Saturated steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured steam supplied to preparation heat exchangers and jackets
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_oil_preparation`
- Sources: `eu-fdm-bat-2019`

###### Preparation nitrogen (`preparation_nitrogen`)

Nitrogen used to inert the feed tank and drying system is kept separate from hydrogen.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: mass from metered nitrogen use at recorded pressure, temperature and purity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_oil_preparation`
- Sources: `fao-who-codex-cxc36-1987`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared dry soybean oil (`prepared_soybean_oil_output`)

The measured dry, inerted oil transferred to the hydrogenation reactor is an internal intermediate product.

- Selected flow: Prepared dry soybean oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: transfer-meter or calibrated tank-difference mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_oil_preparation`
- Sources: `usda-ars-soybean-hydrogenation-2014`

##### Waste flows

###### Preparation oil loss (`preparation_oil_loss`)

Drainage, sampling and retained oil that is not transferred onward is recorded separately from filter cake and wastewater.

- Selected flow: Waste refined soybean oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured collected waste oil plus documented unrecovered equipment hold-up
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_oil_preparation`
- Sources: `eu-fdm-bat-2019`

##### Elementary flows

###### Preparation non-methane volatile organic compounds (`preparation_nmvoc`)

Any measured organic vent loss from heated preparation and vacuum systems is reported as NMVOC to air.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured vent load or validated site-specific calculation from vent flow and concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_oil_preparation`
- Sources: `eu-fdm-bat-2019`

### Process: On-site natural-gas steam generation (`natural_gas_steam_generation`)

#### Inputs

##### Product flows

###### Boiler natural gas (`boiler_natural_gas`)

Natural gas is the only boiler fuel in the selected route; no generic fuel bundle is permitted.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered fuel energy using the declared heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_generation`
- Sources: `eu-fdm-bat-2019`

###### Boiler feedwater (`boiler_feedwater`)

Fresh and recovered-condensate feedwater are reconciled; only make-up water crossing the facility boundary is reported here.

- Selected flow: Boiler feedwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered make-up water assigned to steam used by the foreground processes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam_generation`
- Sources: `eu-fdm-bat-2019`

###### Boiler electricity (`boiler_electricity`)

Electricity for combustion air, feedwater pumps, controls and treatment is separately metered.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered boiler-house electricity allocated by delivered steam mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam_generation`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Generated saturated steam (`generated_steam`)

Steam output is measured at the boiler header and assigned to consuming processes without netting fuel against steam.

- Selected flow: Saturated steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured steam delivered to foreground users
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_generation`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

###### Boiler blowdown (`boiler_blowdown`)

Boiler blowdown is recorded as a separate aqueous waste stream.

- Selected flow: Boiler blowdown wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered or tank-difference blowdown sent to wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_generation`
- Sources: `eu-fdm-bat-2019`

##### Elementary flows

###### Fossil carbon dioxide from boiler combustion (`boiler_co2_fossil`)

Fossil carbon dioxide from natural-gas combustion is calculated independently from the other stack pollutants.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured natural-gas use multiplied by the facility-specific or supplier carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam_generation`
- Sources: `eu-pef-2021`

###### Methane from boiler combustion (`boiler_ch4`)

Unburned fossil methane in the boiler stack is reported as its own elementary emission.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured fuel use multiplied by a documented site-specific or applicable combustion factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam_generation`
- Sources: `eu-pef-2021`

###### Nitrous oxide from boiler combustion (`boiler_n2o`)

Combustion-related nitrous oxide is reported separately from nitrogen oxides.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured fuel use multiplied by a documented site-specific or applicable combustion factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam_generation`
- Sources: `eu-pef-2021`

###### Nitrogen oxides from boiler combustion (`boiler_nox`)

Nitrogen oxides in the boiler stack are reported on the declared nitrogen-dioxide-equivalent basis.

- Selected flow: Nitrogen oxides to air, expressed as nitrogen dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: stack measurement or measured fuel use multiplied by a documented applicable factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam_generation`
- Sources: `eu-fdm-bat-2019`

###### Carbon monoxide from boiler combustion (`boiler_co`)

Carbon monoxide from incomplete natural-gas combustion is quantified as a separate stack emission.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: stack measurement or measured fuel use multiplied by a documented applicable factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam_generation`
- Sources: `eu-fdm-bat-2019`

###### Sulfur dioxide from boiler combustion (`boiler_so2`)

Sulfur dioxide is retained as an atomic emission even when low-sulfur natural gas makes the measured amount small or zero.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: stack measurement or sulfur mass balance from the measured natural-gas batch; report zero only with supporting gas-composition evidence
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam_generation`
- Sources: `eu-fdm-bat-2019`

###### Particulate matter from boiler combustion (`boiler_pm`)

Particulate matter discharged in the boiler stack is recorded independently from gaseous pollutants.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: stack measurement or measured fuel use multiplied by a documented applicable factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam_generation`
- Sources: `eu-fdm-bat-2019`

### Process: Supported-nickel catalytic partial hydrogenation (`nickel_catalytic_hydrogenation`)

#### Inputs

##### Product flows

###### Prepared soybean oil to reactor (`prepared_oil_to_hydrogenation`)

The prepared dry soybean oil is measured when it is charged to the hydrogenation reactor.

- Selected flow: Prepared dry soybean oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured reactor charge mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydrogenation_batch`
- Sources: `usda-ars-soybean-hydrogenation-2014`

###### Hydrogen reactant (`hydrogen_input`)

Hydrogen is measured from the supply meter or storage mass balance and is not combined with nitrogen or reactor off-gas.

- Selected flow: Hydrogen gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: hydrogen supplied minus separately measured recovered or vented hydrogen, using recorded gas conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hydrogenation_batch`
- Sources: `usda-ars-soybean-hydrogenation-2014`; `fillion-morsi-soybean-hydrogenation-2002`

###### Supported nickel catalyst (`supported_nickel_catalyst`)

Record the as-supplied catalyst mass and nickel concentration; no other metal catalyst is permitted in this route.

- Selected flow: Nickel catalyst on inert support
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed fresh and regenerated catalyst charged to the reactor, reported separately in raw records and summed only after nickel concentration is retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hydrogenation_batch`
- Sources: `usda-ars-soybean-hydrogenation-2014`; `fillion-morsi-soybean-hydrogenation-2002`

###### Hydrogenation electricity (`hydrogenation_electricity`)

Electricity used by agitation, compression, vacuum and controls is assigned to the hydrogenation batch.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered agitation, compression, vacuum and control electricity for the hydrogenation batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydrogenation_batch`
- Sources: `eu-fdm-bat-2019`; `fillion-morsi-soybean-hydrogenation-2002`

###### Hydrogenation steam (`hydrogenation_steam`)

Steam supplied for reactor heat-up and temperature control is measured independently from electricity.

- Selected flow: Saturated steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured steam used to heat and control the reactor batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydrogenation_batch`
- Sources: `fillion-morsi-soybean-hydrogenation-2002`

###### Hydrogenation nitrogen (`hydrogenation_nitrogen`)

Nitrogen used for purging and inert transfer is kept distinct from reactive hydrogen.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: mass used for purging, leak testing and inert transfer, excluding nitrogen used in other processes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hydrogenation_batch`
- Sources: `usda-ars-soybean-hydrogenation-2014`

###### Hydrogenation cooling water (`hydrogenation_cooling_water`)

Cooling-water make-up assigned to reactor heat removal is reported; closed-loop circulation is not consumption.

- Selected flow: Cooling water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured cooling-water make-up and discharge assigned to hydrogenation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hydrogenation_batch`
- Sources: `eu-fdm-bat-2019`; `fillion-morsi-soybean-hydrogenation-2002`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Crude hydrogenated soybean oil (`crude_hydrogenated_oil_output`)

The reactor output contains the hydrogenated oil and suspended catalyst before filtration.

- Selected flow: Crude partly hydrogenated soybean oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured reactor discharge mass, reconciled with retained heel and samples
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hydrogenation_batch`
- Sources: `usda-ars-soybean-hydrogenation-2014`

##### Waste flows

##### Elementary flows

###### Hydrogen safety vent (`hydrogen_vent`)

Hydrogen released through documented purge or safety venting is recorded rather than netted into hydrogen consumption.

- Selected flow: Hydrogen to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured vent mass or engineering calculation from vent volume, pressure, temperature and composition
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hydrogenation_batch`
- Sources: `eu-fdm-bat-2019`

###### Hydrogenation non-methane volatile organic compounds (`hydrogenation_nmvoc`)

Organic material released through the reactor or vacuum vent is reported as NMVOC after controls.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or validated calculation of organic vent load from the reactor and vacuum system
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hydrogenation_batch`
- Sources: `eu-fdm-bat-2019`

### Process: Nickel catalyst removal and polishing filtration (`catalyst_removal_post_treatment`)

#### Inputs

##### Product flows

###### Crude hydrogenated oil to filtration (`crude_hydrogenated_oil_input`)

Crude hydrogenated soybean oil containing suspended catalyst is measured at the filtration inlet.

- Selected flow: Crude partly hydrogenated soybean oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass charged to catalyst-removal filters
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catalyst_filtration`
- Sources: `herrera-guzman-soybean-hydrogenation-2025`

###### Diatomaceous earth filter aid (`diatomaceous_earth_filter_aid`)

The specific filter aid is recorded separately from the nickel catalyst.

- Selected flow: Diatomaceous earth filter aid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed fresh filter aid charged to the filtration system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catalyst_filtration`
- Sources: `herrera-guzman-soybean-hydrogenation-2025`

###### Filtration electricity (`filtration_electricity`)

Electricity used by filtration pumps, pressure or vacuum equipment and controls is separately metered.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered pumps, pressure or vacuum filters and controls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catalyst_filtration`
- Sources: `eu-fdm-bat-2019`

###### Filtration steam (`filtration_steam`)

Steam used to preserve oil fluidity and assist filter recovery is recorded as a separate utility input.

- Selected flow: Saturated steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured steam used to maintain oil filterability and recover oil from the filter system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catalyst_filtration`
- Sources: `fao-who-codex-cxc36-1987`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Filtered hydrogenated soybean oil (`filtered_hydrogenated_oil_output`)

Filtered oil is measured after the supported nickel catalyst and filter solids have been removed.

- Selected flow: Filtered partly hydrogenated soybean oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: calibrated tank or transfer-meter mass after catalyst removal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catalyst_filtration`
- Sources: `herrera-guzman-soybean-hydrogenation-2025`

##### Waste flows

###### Spent supported nickel catalyst (`spent_nickel_catalyst`)

Spent catalyst removed for regeneration, metal recovery or hazardous-waste treatment is weighed and its nickel concentration retained.

- Selected flow: Spent supported nickel catalyst
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured wet mass leaving the process with solids and nickel content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catalyst_filtration`
- Sources: `eu-fdm-bat-2019`; `herrera-guzman-soybean-hydrogenation-2025`

###### Oil-bearing filter cake (`oil_bearing_filter_cake`)

Filter aid, fine catalyst and retained oil are recorded as one physically handled cake; its oil and nickel contents are measured without also counting them as free oil loss.

- Selected flow: Oil-bearing diatomaceous earth filter cake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured wet cake mass with oil and nickel analyses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catalyst_filtration`
- Sources: `eu-fdm-bat-2019`

###### Off-specification hydrogenated oil (`off_spec_hydrogenated_oil`)

Free off-specification oil routed to rework or disposal is recorded separately from oil retained in filter cake.

- Selected flow: Waste partly hydrogenated soybean oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured free oil removed from the conforming-product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catalyst_filtration`
- Sources: `eu-fdm-bat-2019`

##### Elementary flows

###### Filtration non-methane volatile organic compounds (`filtration_nmvoc`)

Organic vent losses from heated catalyst-removal filtration are reported as NMVOC after controls.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or validated calculation of organic vent load during heated filtration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_catalyst_filtration`
- Sources: `eu-fdm-bat-2019`

### Process: Post-hydrogenation deodorization (`conditional_deodorization`)

This process is omitted in full when the batch is not deodorized after hydrogenation. The dataset shall declare that omission; it shall not silently assign zero amounts to an included deodorizer.

#### Inputs

##### Product flows

###### Filtered oil to deodorizer (`filtered_oil_to_deodorizer`)

When deodorization applies, filtered hydrogenated oil is measured at the deodorizer inlet.

- Selected flow: Filtered partly hydrogenated soybean oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured charge mass when post-hydrogenation deodorization is performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deodorization`
- Sources: `fao-who-codex-cxs19-1981`

###### Deodorization stripping steam (`deodorization_steam`)

Stripping and heating steam supplied to the deodorizer is measured separately from other steam uses.

- Selected flow: Saturated steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured stripping and heating steam used by the deodorizer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deodorization`
- Sources: `eu-fdm-bat-2019`

###### Deodorization electricity (`deodorization_electricity`)

Electricity for vacuum, pumping, cooling and deodorizer controls is separately metered.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered vacuum, pumping, cooling and control electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deodorization`
- Sources: `eu-fdm-bat-2019`

###### Deodorization cooling water (`deodorization_cooling_water`)

Cooling-water make-up and discharge assigned to condensation and product cooling are reconciled.

- Selected flow: Cooling water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured make-up and discharge assigned to deodorizer condensation and product cooling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_deodorization`
- Sources: `eu-fdm-bat-2019`

###### Deodorization nitrogen (`deodorization_nitrogen`)

Nitrogen used for inert deodorizer transfer and blanketing is measured independently.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: mass used for inert transfer and deodorizer blanketing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_deodorization`
- Sources: `fao-who-codex-cxc36-1987`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Deodorized hydrogenated soybean oil (`deodorized_hydrogenated_oil_output`)

The post-deodorization oil is measured only for batches that actually undergo the conditional process.

- Selected flow: Deodorized partly hydrogenated soybean oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured oil mass after deodorization and cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deodorization`
- Sources: `fao-who-codex-cxs19-1981`

##### Waste flows

###### Deodorizer distillate (`deodorizer_distillate`)

Condensed fatty acids and other stripped oil constituents are weighed and classified as a coproduct only when sold to a documented market; otherwise they remain waste.

- Selected flow: Soybean-oil deodorizer distillate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured collected distillate mass with destination and market status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deodorization`
- Sources: `eu-fdm-bat-2019`

###### Deodorization wastewater (`deodorization_wastewater`)

Contaminated vacuum-system or condenser water is kept separate from clean cooling water.

- Selected flow: Oil-bearing deodorization wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured contaminated water sent to wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deodorization`
- Sources: `eu-fdm-bat-2019`

##### Elementary flows

###### Deodorization non-methane volatile organic compounds (`deodorization_nmvoc`)

Residual organic material leaving the deodorizer vent after condensation or abatement is reported as NMVOC.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured waste-gas load after any condenser or abatement system
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_deodorization`
- Sources: `eu-fdm-bat-2019`

### Process: Product cooling, storage and packaging (`cooling_storage_packaging`)

#### Inputs

##### Product flows

###### Hydrogenated oil to storage (`hydrogenated_oil_to_storage`)

This is filtered oil when deodorization is omitted and deodorized oil when the conditional process is included.

- Selected flow: Partly hydrogenated soybean oil before final storage
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass from the last applicable post-treatment step
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_packaging`
- Sources: `fao-who-codex-cxc36-1987`

###### Storage and filling electricity (`storage_electricity`)

Electricity for cooling, agitation, pumping and filling is assigned to the storage and dispatch process.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered cooling, tank agitation, pumping and filling electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_packaging`
- Sources: `eu-fdm-bat-2019`

###### Storage cooling water (`storage_cooling_water`)

Cooling-water make-up and discharge attributable to final product cooling are recorded separately.

- Selected flow: Cooling water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured make-up and discharge attributable to final product cooling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_packaging`
- Sources: `eu-fdm-bat-2019`

###### Storage nitrogen (`storage_nitrogen`)

Nitrogen used for storage-tank blanketing and transfer purging is measured independently.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: mass used for storage-tank blanketing and transfer purging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_packaging`
- Sources: `fao-who-codex-cxc36-1987`

###### Storage heating steam (`storage_steam`)

Steam is included only when needed to maintain pumpable semi-solid oil; the actual use is measured.

- Selected flow: Saturated steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured steam supplied to storage tanks and transfer lines
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_packaging`
- Sources: `fao-who-codex-cxc36-1987`

###### High-density polyethylene drum (`hdpe_drum`)

HDPE drums are the primary packaging for the declared packaged configuration; bulk dispatch records this configuration as not used.

- Selected flow: High-density polyethylene drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased drum mass issued to conforming packed product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_packaging`
- Sources: `eu-pef-2021`

###### Low-density polyethylene stretch film (`ldpe_stretch_film`)

LDPE stretch film used to secure the declared drum-and-pallet packaging is recorded as one packaging material.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased film mass issued to packed product, net of recorded trim waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_packaging`
- Sources: `eu-pef-2021`

###### Wooden pallet (`wooden_pallet`)

Wooden pallets used under the declared packaged configuration are accounted for with verified reuse records.

- Selected flow: Wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: pallet mass issued to packed product after accounting for documented reuse cycles
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_packaging`
- Sources: `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged partly hydrogenated soybean oil (`packaged_hydrogenated_soybean_oil`)

This is the reference product; packaging mass is excluded from the 1,000 kg reference amount.

- Selected flow: Partly hydrogenated soybean oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1,000 kg net conforming reference product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-2021`

##### Waste flows

###### Filling oil loss (`filling_oil_loss`)

Oil spilled, drained or rejected during storage and filling is recorded separately from off-specification filtration oil.

- Selected flow: Waste partly hydrogenated soybean oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured collected oil plus reconciled filling loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_packaging`
- Sources: `eu-fdm-bat-2019`

###### Damaged HDPE drum (`damaged_hdpe_drum`)

Rejected or damaged HDPE drums are recorded as a specific packaging-waste flow by destination.

- Selected flow: Waste high-density polyethylene drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected or damaged drum mass by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_packaging`
- Sources: `eu-pef-2021`

###### LDPE packaging waste (`ldpe_packaging_waste`)

Film trim and rejected LDPE film are recorded independently from damaged drums and pallets.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured film trim and rejected film mass by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_packaging`
- Sources: `eu-pef-2021`

###### Damaged wooden pallet (`damaged_wooden_pallet`)

Pallets leaving the reuse pool as waste are measured as a specific wooden packaging-waste flow.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured pallet waste assigned after documented reuse cycles
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_packaging`
- Sources: `eu-pef-2021`

##### Elementary flows

###### Storage non-methane volatile organic compounds (`storage_nmvoc`)

Organic losses from storage-tank and filling vents are reported as NMVOC after controls.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or validated calculation of tank and filling vent load after controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_packaging`
- Sources: `eu-fdm-bat-2019`

### Process: Equipment cleaning and on-site wastewater treatment (`cleaning_wastewater_treatment`)

#### Inputs

##### Product flows

###### Cleaning water (`cleaning_water`)

Fresh water used for rinsing and clean-in-place operations is recorded separately from cooling water.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered water for the cleaning campaign allocated to the reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `eu-fdm-bat-2019`

###### Sodium hydroxide cleaning agent (`sodium_hydroxide_cleaner`)

Sodium hydroxide is the specified alkaline cleaning chemical; it is not described as an unspecified cleaning-agent bundle.

- Selected flow: Sodium hydroxide solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed solution mass with concentration, density and recovered-reuse quantity retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `eu-fdm-bat-2019`

###### Wastewater-treatment electricity (`wastewater_treatment_electricity`)

Electricity for pumping, aeration, separation and sludge handling is assigned to the treated load.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered pumping, aeration, separation and sludge-handling electricity allocated by treated load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Soap-containing alkaline wash water (`soap_containing_wash_water`)

Alkaline wash water containing saponified residual oil is measured before treatment; it is not combined with clean cooling-water discharge.

- Selected flow: Soap-containing alkaline wash water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured wastewater mass with pH, temperature, COD or TOC, suspended solids and oil-and-grease load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `eu-fdm-bat-2019`

###### Wastewater-treatment sludge (`wastewater_treatment_sludge`)

Sludge from oil separation, neutralization and biological or physical treatment is reported by wet mass and dry solids.

- Selected flow: Oily wastewater-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured wet sludge mass with dry-solids fraction and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `eu-fdm-bat-2019`

##### Elementary flows

###### Treated wastewater to surface water (`treated_wastewater_to_surface_water`)

Only actual on-site discharge is reported here; off-site wastewater treatment instead uses a waste flow to the receiving treatment activity.

- Selected flow: Water to surface water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured treated-effluent mass with flow, pH, temperature, COD or TOC, total nitrogen, total phosphorus and suspended-solids records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `eu-fdm-bat-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared foreground processes | First subdivide metered preparation, boiler, hydrogenation, filtration, deodorization, storage, cleaning and wastewater operations by batch or campaign. Do not allocate a combined plant total when process-level records are available. | `iso-14044-2006`; `eu-pef-2021` |
| `allocation_steam_and_shared_utilities` | steam, shared electricity, cooling water and nitrogen | Allocate shared utilities to the selected route by measured delivery; if direct measurement is unavailable, use a documented engineering driver such as steam enthalpy, operating time and rated load, and test sensitivity. | `iso-14044-2006`; `eu-fdm-bat-2019` |
| `allocation_rework` | reworked hydrogenated oil | Keep reworked oil as a separately quantified internal or upstream product flow. Assign the additional processing actually caused by rework and prevent double counting of its original production burden. | `eu-pef-2021` |
| `allocation_residue_and_recovery` | spent nickel catalyst, deodorizer distillate, recovered oil and packaging | Do not subtract recycling or recovery credits inside the foreground inventory. Declare waste or coproduct status, mass, composition, destination and price where relevant; apply the selected study's documented end-of-life or multifunctionality method outside this unit process. | `iso-14044-2006`; `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_oil_preparation` | `refined_oil_reception_preparation` | oil, electricity, steam, nitrogen, prepared oil, oil loss and vent | weighbridge, tank gauge, transfer meter, utility submeter, batch sheet and vent record | batch id; supplier oil id; opening and closing inventory; received and transferred mass; electricity; steam; nitrogen pressure/temperature/composition; waste oil; vent flow/concentration | calibrated direct measurement with batch mass reconciliation | kg; kWh | every batch; utilities at meter interval | at least 12 consecutive representative months or all batches for a shorter campaign | all preparation equipment serving the declared product | sum batch records and normalize by conforming product mass; reconcile opening stock + receipts = transfers + closing stock + losses | calibration certificates, supplier certificate, batch sheet, stock reconciliation and exception log |
| `cp_steam_generation` | `natural_gas_steam_generation` | fuel, water, electricity, steam, blowdown and stack emissions | fuel meter, water meter, electricity meter, steam meter, gas-composition certificate and stack monitoring | fuel energy and heating-value basis; gas carbon/sulfur; feedwater; condensate return; electricity; steam; blowdown; stack flow and pollutant concentrations | calibrated meters and documented emission calculations | MJ; kg; kWh | continuous or per shift; stack frequency per permit | same period as product data | boiler and steam header supplying the foreground route | allocate delivered steam by measured process use; calculate each pollutant separately from measured fuel or stack load | meter calibration, gas certificate, stack report, calculation workbook and steam balance |
| `cp_hydrogenation_batch` | `nickel_catalytic_hydrogenation` | oil, hydrogen, nickel catalyst, electricity, steam, nitrogen, cooling water, product and vents | reactor batch sheet, scales, gas meter, utility submeters, laboratory release results and vent log | oil charge; catalyst mass and nickel content; hydrogen supply/recovery/vent conditions; nitrogen; electricity; steam; cooling-water make-up/discharge; reactor heel; product mass; time/temperature/pressure/agitation; iodine value; trans fat | calibrated measurement and batch mass balance | kg; kWh; process-condition units | every batch | all representative batches in reporting period | every reactor producing the declared product | calculate batch totals and normalize by released conforming product; do not pool different catalysts or oils | calibration, catalyst certificate, batch record, laboratory chromatogram, deviation and vent records |
| `cp_catalyst_filtration` | `catalyst_removal_post_treatment` | crude oil, filter aid, utilities, filtered oil, catalyst, cake, off-spec oil and vent | scales, transfer meters, filter log, waste manifest and laboratory analysis | inlet/outlet oil; filter aid; electricity; steam; spent catalyst wet mass and nickel; cake mass/oil/nickel; free off-spec oil; vent flow/concentration | direct weighing, calibrated flow measurement and representative sampling | kg; kWh | every filtration batch | same period as hydrogenation data | all filters serving the route | reconcile oil and solids without double counting oil in cake as free oil loss | calibration, laboratory results, filter log, waste manifest and mass balance |
| `cp_deodorization` | `conditional_deodorization` | oil, steam, electricity, cooling water, nitrogen, product, distillate, wastewater and vent | batch sheet, utility meters, tank gauge, condensate receiver, wastewater meter and stack or vent record | inlet/outlet oil; steam; electricity; cooling water; nitrogen; distillate; wastewater; vent flow/concentration; vacuum, time and temperature | direct measurement when the process is included | kg; kWh | every deodorized batch | all included batches in reporting period | every deodorizer serving the declared product | normalize only included batches and declare the share of reference product deodorized | calibration, batch sheet, quality release, distillate/waste records and inclusion declaration |
| `cp_storage_packaging` | `cooling_storage_packaging` | product, electricity, cooling water, nitrogen, steam, packaging, product loss, packaging waste and vent | tank gauge, filling scale, utility submeter, packaging issue records, waste records and vent record | inlet oil; shipped net oil; electricity; cooling water; nitrogen; steam; HDPE drum mass; LDPE film mass; pallet mass/reuse; product loss; each packaging waste; vent flow/concentration | direct measurement and packaging mass reconciliation | kg; kWh | each lot and dispatch | same period as product data | all product tanks and filling lines | exclude packaging from net reference mass; separate bulk and packaged configurations | calibrated filling scales, packaging purchase/issue records, reuse log, waste tickets and stock balance |
| `cp_cleaning_wastewater` | `cleaning_wastewater_treatment` | cleaning water, sodium hydroxide, treatment electricity, wash water, sludge and effluent | CIP log, water and chemical meters, treatment submeter, influent/effluent meter, sludge scale and laboratory results | water; NaOH solution/concentration; recovered cleaner; electricity; wastewater flow/pH/temperature/COD or TOC/oil/solids; sludge wet and dry mass; effluent TN/TP/TSS | calibrated meters, batch chemical issue and representative sampling | kg; kWh; concentration and load units | every cleaning event; effluent monitoring per permit | same reporting period as product data | cleaning circuits and on-site treatment serving the route | allocate campaign records by cleaned batches and pollutant load; keep uncontaminated cooling water separate | CIP record, calibration, laboratory chain of custody, treatment log and discharge record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every foreground exchange | normalized amount = reporting-period exchange amount / reporting-period conforming product mass × 1,000 kg | exchange amount; conforming product mass | amount per 1,000 kg reference product | `eu-pef-2021` |
| `calc_oil_mass_balance` | preparation, hydrogenation, filtration, deodorization and filling | opening oil + oil inputs + hydrogen incorporated = closing oil + conforming product + measured oil-bearing wastes + samples + documented losses; report the residual and investigate it rather than assigning it to one waste | inventory, transfer, product, waste, sample and hydrogen-incorporation records | reconciled mass balance and residual | `iso-14044-2006` |
| `calc_gas_mass` | hydrogen and nitrogen | gas mass = corrected gas volume × composition-specific density at the declared pressure and temperature reference; subtract separately measured recovery only once | meter volume; pressure; temperature; composition; recovered gas | kg gas | `fillion-morsi-soybean-hydrogenation-2002` |
| `calc_boiler_emissions` | each boiler emission | pollutant mass = measured stack load when available; otherwise measured natural-gas activity × documented applicable factor, with CO2 based on fuel carbon and SO2 based on sulfur; calculate every pollutant independently | fuel use; heating value; gas carbon/sulfur; stack flow/concentration or factor | kg CO2, CH4, N2O, NOx, CO, SO2 or particulate matter | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `calc_steam_assignment` | steam-consuming processes | assigned steam = metered process steam; if unavailable, boiler-header steam × documented process duty share based on enthalpy and operating records | process meter or header steam; pressure; condensate; duty and operating time | kg steam by process | `eu-fdm-bat-2019` |
| `calc_packaging_reuse` | reusable wooden pallets | pallet input per reference flow = purchased replacement pallet mass / documented total product mass dispatched over verified reuse cycles; do not assume a reuse count | purchases; pallet mass; reuse and loss records; dispatched product | kg pallet per 1,000 kg packaged product | `eu-pef-2021` |
| `calc_wastewater_load` | wastewater and treated effluent | pollutant load = flow-proportional concentration × wastewater flow for each reported parameter; preserve sampling and averaging period | flow; concentration; sampling duration | kg pollutant load and kg water per 1,000 kg product | `eu-fdm-bat-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | product and process identity | Records shall prove soybean-oil feed, supported nickel catalyst, partial-hydrogenation endpoint, filtration and post-deodorization status; batches from other oils, catalysts or routes are excluded. | supplier certificates, catalyst certificate, batch record and release test |
| `dq_temporal` | foreground activity data | Use a continuous representative period covering seasonal and operational variability; justify any period shorter than 12 months and disclose shutdowns, trials and abnormal batches. | dated meter extracts, production calendar and representativeness statement |
| `dq_completeness` | mass, energy, water, waste and emissions | Reconcile all required atomic exchanges and explain every missing meter, zero or excluded process; do not replace missing data with an unlabelled aggregate. | completeness checklist, balances, zero-evidence and gap register |
| `dq_measurement` | meters, scales and laboratory data | Use in-calibration instruments and preserve sampling, detection limit, method and uncertainty for iodine value, trans fat, residual nickel, wastewater and stack measurements. | calibration, chain of custody, method report and uncertainty record |
| `dq_source_technology` | upstream datasets | Match geography, technology, energy mix, hydrogen source, catalyst composition, packaging and treatment route; disclose proxy age and mismatch. | dataset metadata and proxy justification |
| `dq_range_evidence` | quantitative QA ranges | No empirical amount range may be added until at least two independent original sources are verified as compatible in process boundary, unit and normalization basis; single cases remain context only. | range evidence review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_and_route` | identity and reference flow | Reject a data package unless it reports exactly 1,000 kg net conforming product after normalization and declares soybean feed identity, supported nickel catalyst, partial-hydrogenation endpoint, filtration, deodorization status and dispatch configuration. | `unsd-cpc-3-0`; `fao-who-codex-cxs19-1981` |
| `validate_atomic_inventory` | inventory structure | Reject combined oil, utility, chemical, packaging, waste or emission labels; every selected flow in Section 6 is checked independently, including each boiler pollutant and each packaging material and waste. | `eu-fdm-bat-2019` |
| `validate_mass_balance` | oil and solids | Require an oil mass balance and separate balances for nickel catalyst/filter aid and packaging; flag unexplained residuals and prevent double counting oil in filter cake as free oil loss. | `iso-14044-2006` |
| `validate_food_quality` | reference product release | Require declared test methods and results for iodine value or equivalent endpoint, trans fat, residual nickel, moisture/volatile matter, insoluble impurities, acid value and peroxide value; applicable legal and customer limits control acceptance. | `fao-who-codex-cxs19-1981`; `eu-trans-fat-regulation-2019` |
| `validate_trans_fat_market` | product placed on the EU final-consumer or retail market | Confirm industrial trans fat does not exceed 2 g per 100 g fat under Commission Regulation (EU) 2019/649; for other markets, record and test against the applicable limit without treating the EU value as universal. | `eu-trans-fat-regulation-2019`; `who-replace-trans-fat-2020` |
| `validate_environmental_records` | wastewater and waste gas | Require water, energy and raw-material inventories plus wastewater flow/pH/temperature/pollutant load and waste-gas flow/temperature/NMVOC/CO/NOx/SOx/particulate records where relevant; missing monitoring is an explicit data gap. | `eu-fdm-bat-2019` |
| `validate_uuid_and_range_gaps` | publication readiness | Keep unresolved selected-flow UUIDs and unresolved range evidence visible as review blockers; do not select an approximate Tiangong flow or invent an estimate to remove a warning. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset that may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | attributional process or lifecycle-model construction for food-grade partly hydrogenated soybean oil produced by the declared supported-nickel route |
| allowed_use | studies matching oil identity, hydrogenation endpoint, catalyst, filtration, deodorization status, geography, period, utility system and dispatch configuration |
| excluded_use | other vegetable oils; full hydrogenation; interesterification, re-esterification or elaidinisation; biodiesel hydroprocessing; formulated fats; undisclosed trans-fat compliance; proxy selection based only on CPC code |
| required_metadata | reference-flow qualifiers; facility geography; reporting period; batch coverage; oil supplier/refining status; hydrogen source; catalyst composition and fate; reactor and endpoint; filtration; deodorization; utility meters; cleaning/treatment; packaging; allocation; upstream dataset versions; unresolved identity and range gaps |
| required_quality_disclosure | mass-balance residuals; meter and laboratory uncertainty; missing records; proxy datasets; abnormal batches; wastewater and waste-gas monitoring coverage; trans-fat and residual-nickel methods/results; waste destinations |
| update_trigger | change in vegetable oil, catalyst, hydrogen source, reactor or endpoint, filtration, deodorization, fuel/steam system, cleaning chemistry, wastewater treatment, packaging, legal trans-fat limit, production geography, or a material shift in annual energy, water, yield, waste or emission performance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, structure and explanatory notes, https://unstats.un.org/unsd/classifications/Econ/CPC | classification scope and distinction between classification context and route methodology |
| `fao-who-codex-cxs210-1999` | Standard (`standard`) | Codex Alimentarius CXS 210-1999, Standard for Named Vegetable Oils, current official text, https://www.fao.org/fao-who-codexalimentarius/codex-texts/list-standards/en/ | soybean-oil identity, quality and food-grade feed status |
| `fao-who-codex-cxs19-1981` | Standard (`standard`) | Codex Alimentarius CXS 19-1981, Standard for Edible Fats and Oils Not Covered by Individual Standards, current official text, https://www.fao.org/fao-who-codexalimentarius/codex-texts/list-standards/en/ | inclusion of hydrogenated/transesterified edible oils and product quality/release parameters |
| `fao-who-codex-cxc36-1987` | Standard (`standard`) | Codex Alimentarius CXC 36-1987, Code of Practice for the Storage and Transport of Edible Fats and Oils in Bulk, 2024 revision, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | inert storage, heating, temperature control, bulk handling and contamination prevention |
| `usda-ars-soybean-hydrogenation-2014` | Literature (`literature`) | Cheng, H.N. et al. 2014. Comparison of Soybean and Cottonseed Oils upon Hydrogenation with Nickel, Palladium and Platinum Catalysts. Journal of the American Oil Chemists' Society 91:1461-1469. DOI: 10.1007/s11746-014-2487-1; USDA ARS record https://www.ars.usda.gov/research/publications/publication/?seqNo115=295108 | soybean oil, hydrogen and nickel-catalyst route identity; endpoint and trans-fat monitoring context |
| `fillion-morsi-soybean-hydrogenation-2002` | Literature (`literature`) | Fillion, B. et al. 2002. Kinetics, Gas-Liquid Mass Transfer, and Modeling of the Soybean Oil Hydrogenation Process. Industrial & Engineering Chemistry Research 41:697-709. DOI: 10.1021/ie0104013 | supported Ni/Al2O3 route, temperature/pressure/mixing/heat-transfer control and process data fields; not used as a quantity range |
| `herrera-guzman-soybean-hydrogenation-2025` | Literature (`literature`) | Herrera-Guzmán, K. et al. 2025. Partial hydrogenation of soybean oil over a Pd/bentonite catalyst. RSC Advances 15:14292-14306. DOI: 10.1039/D5RA01198A, https://pubs.rsc.org/en/content/articlehtml/2025/ra/d5ra01198a | independently verified hydrogenation process decomposition, catalyst filtration and trace-metal post-treatment; not evidence for nickel amounts or ranges |
| `eu-fdm-bat-2019` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, CELEX 32019D2031, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng; JRC FDM BREF 2019, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/food-drink-and-milk-industries | process-level inventories of water, energy, raw materials, residues, wastewater and waste gas; CIP, water segregation, monitoring and treatment |
| `eu-pef-2021` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 | functional unit, reference flow, life-cycle inventory, multifunctionality, data quality, packaging and downstream dataset use |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, confirmed current in 2022, https://www.iso.org/standard/38498.html | LCI completeness, allocation hierarchy, data quality, interpretation and review |
| `eu-trans-fat-regulation-2019` | Standard (`standard`) | Commission Regulation (EU) 2019/649 on trans fat other than trans fat naturally occurring in fat of animal origin, CELEX 32019R0649, https://eur-lex.europa.eu/eli/reg/2019/649 | market-specific trans-fat limit and business-to-business disclosure |
| `who-replace-trans-fat-2020` | Official guidance (`official_guidance`) | World Health Organization. 2020. REPLACE trans fat: an action package to eliminate industrially produced trans-fatty acids. ISBN 978-92-4-002110-5, https://www.who.int/publications/b/57274 | health-policy rationale and explicit disclosure of partially hydrogenated-oil trans fat |
