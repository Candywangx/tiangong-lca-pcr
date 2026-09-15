---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.bottled-waters-not-sweetened-or-flavoured
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Bottled waters, not sweetened or flavoured

## 1. Scope and Applicability

This PCR covers drinking water placed in sealed bottles or comparable consumer containers without sugars, sweeteners, flavourings, or other food ingredients. It covers still and carbonated prepared drinking water, waters defined by origin, spring water, and natural mineral water when the declared product satisfies the applicable legal identity. The category boundary follows CPC 3.0 subclass 24410 and the product description in `fao-who-cxs-227-2001`.

Sweetened water, flavoured water, caloric or non-caloric soft drinks, juice, non-animal milk, alcoholic beverages, bulk municipal water, water not packaged as a beverage, distilled water sold as a chemical, ice, and medicinal water are excluded. Added carbon dioxide and permitted minerals do not by themselves make a water sweetened or flavoured, but every addition and the applicable route shall be declared.

The foreground boundary begins with raw water received at the bottling facility or transferred from a protected source and ends with conforming sealed bottled water at the bottling-plant gate. It includes route-specific treatment, conditional carbonation, container preparation, filling, closing, labelling, secondary packaging, cleaning and sanitation, foreground wastewater and waste handling, and direct site emissions. Natural mineral and spring-water routes shall preserve source identity and apply only legally permitted treatments; prepared-water treatment shall be based on the actual hazard analysis and treatment train. Distribution, retail refrigeration, consumer use, and packaging end of life are outside the default foreground package.

The representative product is one specific route: still prepared drinking water, not sweetened or flavoured, in a 1.5 L single-use PET bottle with a polypropylene cap, paper label, corrugated carton and LDPE shrink film at the bottling-plant gate. Other container, source, treatment and carbonation routes require separate route-specific inventories and shall not be averaged into the representative route without disclosed production weighting.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.bottled-waters-not-sweetened-or-flavoured |
| classification_refs | CPC 3.0: 24410, Bottled waters, not sweetened or flavoured, exact classification context |
| covered_products | Sealed still or carbonated bottled drinking water without sugars, sweeteners, flavourings or other food ingredients; prepared water, water defined by origin, spring water and legally recognized natural mineral water when route identity is declared |
| excluded_products | Sweetened or flavoured water; soft drinks; juice; non-animal milk; alcoholic beverages; bulk water not individually packaged as a beverage; water sold for industrial or chemical use; ice; medicinal water |
| representative_product | One 1.5 L single-use PET bottle of still prepared drinking water, not sweetened or flavoured, with polypropylene cap and declared label and distribution packaging |
| production_route | Raw-water receipt -> route-specific treatment and monitoring -> optional carbonation -> PET preform blowing or receipt of ready bottle -> container preparation -> filling and closing -> labelling and packing -> plant-gate release; cleaning, wastewater, wastes and direct emissions included |
| market_state | Sealed, labelled, consumer-ready bottled water at the bottling-plant gate; packaging is inventoried separately and excluded from net reference-water mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of safe, conforming still prepared drinking water without sweetening or flavouring in one declared sealed consumer package |
| How much | 1 kg net water content of the representative 1.5 L single-use PET bottled-water product, excluding all packaging tare |
| How well | Meets the applicable chemical, microbiological, radiological and sensory requirements; source type, treatment train, carbonation state and package configuration are declared; package remains sealed and fit for sale |
| How long or cycle | One plant-gate release of the declared production lot; no storage life or use-stage service is claimed |
| reference_flow_link | The reference amount below realizes the functional unit on a net bottled-water mass basis; packaging quantities are separate inventory inputs normalized to that output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net bottled-water content |
| Reference product flow | Still prepared drinking water, not sweetened or flavoured, in one 1.5 L single-use PET bottle at bottling-plant gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | water identity: prepared/origin-defined/spring/natural mineral; source name and location; source supply type; still/carbonated state; every treatment step; every added substance; bottle nominal volume; bottle material and recycled content; cap material; label material; carton and film configuration; package tare; reusable or single-use status; site; geography; reporting period; production-lot coverage; quality release specification |

The product-flow UUID remains unresolved. The singular human-readable product identity is intentionally retained; do not substitute a generic beverage, tap-water, natural-mineral-water-only, flavoured-water, or packaging UUID. Tiangong direct read verified the public Mass flow property `93a60a56-a3c8-11da-a746-0800200b9a66` and Units of mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, both version 03.00.003 at state code 100; kg is the reference unit.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_water_mass` | Reference bottled-water output | Mass | kg | Determine net water mass from calibrated filler or check-weigher records and deduct bottle, cap, label and all other packaging tare. Normalize inventory to 1 kg net conforming water. |
| `volume_mass_conversion` | Water volumes converted to mass | Volume and density | L or m3; kg/L | Use measured product temperature and density or a documented water-density convention. Retain original volume, temperature, density and conversion calculation. |
| `packaging_tare` | Primary, secondary and tertiary packaging | Mass and count | kg; item | Record each packaging component separately by material. Convert item counts to mass with lot-specific sampled unit weights and retain sample size and variation. |
| `treatment_chemical_mass` | Each treatment and cleaning chemical | Mass | kg | Record each chemical or formulated product as a separate atomic exchange on as-used mass; also retain active concentration when purchased as a solution. |
| `utility_energy` | Electricity, steam and each fuel | Energy, mass or volume | kWh; MJ; kg; m3 | Preserve invoiced or metered units, separately identify electricity, steam, natural gas, LPG and diesel, and disclose calorific-value and conversion bases. |
| `water_stream_separation` | Product water, process water and cleaning water | Mass or volume | kg or m3 | Meter or calculate raw/product water, treatment process water and cleaning/sanitation water separately. Do not treat all site water as product water. |
| `emission_load` | Direct air and water emissions | Mass | kg | Calculate each substance from concentration and matched flow volume over the same period, or from a disclosed source-specific method. Do not combine COD, BOD, TSS, nitrogen or phosphorus into one emission. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Raw water received at the bottling-facility intake or transferred from the declared protected source, with source identity, legal water category, quantity, quality-release evidence and upstream dataset reference recorded |
| starting_condition_role | Starting product input for foreground bottled-water production; source development, catchment management and off-site municipal treatment remain in linked upstream datasets unless operated and intentionally included by the reporting organization |
| product_classification_scope | Bottled waters without sweeteners or flavourings in CPC 3.0 subclass 24410; prepared, origin-defined, spring and natural-mineral routes remain distinct |
| recursive_input_rule | Purchased bottled water of the same category used for repacking is recorded once as a specific upstream product input with its dataset; do not recursively recreate its production or count internal treated-water transfers as new external inputs |
| upstream_dataset_requirement | Link representative datasets for raw-water supply, purchased electricity, steam and fuels, every chemical, PET preform or other bottle body, cap, label, carton, film, external waste treatment and any included inbound transport |
| disclosure | Declare source type and location, legal product identity, treatment and carbonation route, source-to-filler transfer, line and site, reporting period, package configuration and tare, included conditional processes, allocation, omissions, upstream datasets, waste and wastewater routes, and all unresolved identities or data gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_raw_water_to_gate` | default foreground system | Include raw-water receipt, every applied treatment, conditional carbonation, bottle preparation, filling, closing, labelling, packing, cleaning, attributable wastewater and waste handling, and direct site emissions through conforming plant-gate release. | `fao-who-cxc-48-2001`; `us-epa-awg-lca-2019`; `garfi-et-al-2016` |
| `sb_route_specific_treatment` | water treatment | Apply only the actual hazard-analysis-based treatment train. Keep prepared-water, origin-defined, spring-water and natural-mineral-water routes separate; a zero-treatment claim requires source and release evidence. | `fao-who-cxs-227-2001`; `fao-who-cxc-48-2001`; `who-gdwq-2026`; `eu-2009-54-ec` |
| `sb_natural_mineral_restrictions` | natural mineral and spring water | Preserve source identity and exclude disinfection or composition-changing treatment when prohibited by the applicable legal route; declare every permitted separation, ozone-enriched-air treatment and carbon-dioxide addition or removal. | `eu-2009-54-ec` |
| `sb_packaging_components` | packaging system | Include the actual bottle body or preform conversion, cap, label, carton, film and their line losses as separate material exchanges; exclude packaging tare from net reference-water mass. | `us-epa-awg-lca-2019`; `garfi-et-al-2016` |
| `sb_downstream_exclusion` | downstream lifecycle stages | Distribution, retail storage or refrigeration, consumer use and packaging end of life are outside this foreground package and may be added only in a declared lifecycle model without changing plant-gate foreground amounts. | `us-epa-awg-lca-2019`; `garfi-et-al-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_water_receipt` | Raw-water receipt and source control | required | Every covered route; the source and legal water identity shall be declared | Establish controlled raw-water input and transfer to treatment or filling | kg raw water accepted |
| `water_treatment` | Route-specific water treatment and conditioning | required | Include the process record for every route; individual treatment exchanges apply only when operated, and a no-treatment route requires documented evidence | Produce release-ready still water | kg treated water |
| `carbonation` | Carbon dioxide dosing | conditional | Include only when carbon dioxide is added or reincorporated on site | Produce declared carbonated water without mixing it with still-water output | kg carbonated water |
| `filling_packaging` | Bottle preparation, filling, closing, labelling and packing | required | Every covered product; use the actual package configuration | Produce sealed, conforming plant-gate bottled water | 1 kg net conforming bottled water |
| `cleaning_sanitation` | Equipment and container cleaning and sanitation | required | Include allocated cleaning for every line; container washing applies when performed or required | Maintain hygienic production and collect attributable cleaning effluent | cleaning campaign attributable to declared output |
| `wastewater_handling` | Wastewater and residual handling | required | Account for every foreground wastewater and residual route; on-site treatment exchanges apply only when operated | Reconcile wastewater, sludge, screenings and direct water emissions | m3 wastewater attributable to declared output |

### Process: Raw-water receipt and source control (`raw_water_receipt`)

#### Inputs

##### Product flows

###### Raw water accepted for bottling (`raw_water_input`)

Raw water crosses the foreground boundary after source approval and before any on-site treatment or direct filling.

- Selected flow: Raw water accepted for bottled drinking-water production
- Flow property / unit: Mass / kg
- Amount rule: Calibrated intake-meter quantity accepted after source and receiving quality controls.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_water`
- Sources: `fao-who-cxs-227-2001`; `fao-who-cxc-48-2001`; `who-gdwq-2026`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw-water transfer to production (`raw_water_transfer`)

Accepted raw water is transferred as one measured intermediate to treatment or, when legally and technically justified, directly to filling.

- Selected flow: Accepted raw water transferred to bottled-water production
- Flow property / unit: Mass / kg
- Amount rule: Matched intake and transfer meter or tank mass-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted raw-water transfer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_water`
- Sources: `fao-who-cxc-48-2001`

##### Waste flows

##### Elementary flows

### Process: Route-specific water treatment and conditioning (`water_treatment`)

#### Inputs

##### Product flows

###### Accepted raw-water feed (`treatment_raw_water`)

This is the measured raw-water intermediate entering the declared treatment train.

- Selected flow: Accepted raw water transferred to bottled-water production
- Flow property / unit: Mass / kg
- Amount rule: Treatment-feed meter quantity matched to the raw-water transfer record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_treatment`
- Sources: `fao-who-cxc-48-2001`

###### Treatment electricity (`treatment_electricity`)

Electricity powers pumping, filtration, ultraviolet, ozone generation, reverse osmosis and controls actually operated.

- Selected flow: Grid electricity supplied to bottled-water treatment equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or documented engineering allocation from a matched site meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_treatment`
- Sources: `us-epa-awg-lca-2019`; `garfi-et-al-2016`

###### Sodium hypochlorite treatment chemical (`sodium_hypochlorite`)

Sodium hypochlorite is recorded only when dosed in the declared prepared-water treatment route.

- Selected flow: Sodium hypochlorite solution for water treatment
- Flow property / unit: Mass / kg
- Amount rule: As-used solution mass from batch dosing and concentration records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_treatment`
- Sources: `fao-who-cxc-48-2001`

###### Ozone treatment chemical (`ozone_treatment`)

Ozone supplied to water is a distinct conditional exchange and is not combined with chlorine or ultraviolet treatment.

- Selected flow: Ozone supplied to bottled-water treatment
- Flow property / unit: Mass / kg
- Amount rule: Generator output or dose calculated from validated concentration and treated-water flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_treatment`
- Sources: `fao-who-cxc-48-2001`; `us-epa-awg-lca-2019`

###### Granular activated carbon (`granular_activated_carbon`)

Granular activated carbon is recorded separately when replaced or replenished in the actual treatment train.

- Selected flow: Granular activated carbon for drinking-water treatment
- Flow property / unit: Mass / kg
- Amount rule: Issued mass amortized over the matched treated-water throughput between replacements.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_treatment`
- Sources: `fao-who-cxc-48-2001`

###### Sodium hexametaphosphate antiscalant (`sodium_hexametaphosphate`)

Sodium hexametaphosphate is recorded only when it is the actual reverse-osmosis antiscalant; another formulation requires its own atomic card.

- Selected flow: Sodium hexametaphosphate for reverse-osmosis antiscaling
- Flow property / unit: Mass / kg
- Amount rule: As-used mass calculated from solution issue, active concentration and dosing records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg reverse-osmosis permeate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_treatment`
- Sources: `fao-who-cxc-48-2001`

###### Sodium hydroxide for treatment pH control (`sodium_hydroxide_treatment`)

Treatment-grade sodium hydroxide is recorded only when dosed for pH adjustment or membrane cleaning assigned to this process.

- Selected flow: Sodium hydroxide solution for bottled-water treatment
- Flow property / unit: Mass / kg
- Amount rule: As-used solution mass from issue and dosing records, with active concentration retained.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_treatment`
- Sources: `fao-who-cxc-48-2001`

###### Hydrochloric acid for treatment pH control (`hydrochloric_acid_treatment`)

Hydrochloric acid is a separate conditional exchange when used for treatment pH control or membrane maintenance assigned here.

- Selected flow: Hydrochloric acid solution for bottled-water treatment
- Flow property / unit: Mass / kg
- Amount rule: As-used solution mass from issue and dosing records, with active concentration retained.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_treatment`
- Sources: `fao-who-cxc-48-2001`

###### Treatment process water (`treatment_process_water`)

Backwash, rinse or make-up water not retained in the bottled product is measured separately from raw product water and cleaning water.

- Selected flow: Process water used for bottled-water treatment
- Flow property / unit: Volume / m3
- Amount rule: Dedicated meter or validated cycle-volume calculation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_treatment`
- Sources: `fao-who-cxc-48-2001`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Treated still water (`treated_water`)

Release-ready still water is the measured intermediate supplied to carbonation or filling.

- Selected flow: Treated still drinking water for bottling
- Flow property / unit: Mass / kg
- Amount rule: Calibrated transfer-meter quantity meeting the declared release specification.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated still-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_treatment`
- Sources: `fao-who-cxs-227-2001`; `who-gdwq-2026`

##### Waste flows

###### Water-treatment wastewater (`treatment_wastewater`)

Filter backwash, reverse-osmosis concentrate and other treatment wastewater are aggregated only when they enter one measured combined treatment stream.

- Selected flow: Combined bottled-water treatment wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or validated water balance for the combined treatment-wastewater header.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_treatment`
- Sources: `fao-who-cxc-48-2001`

###### Water-treatment sludge (`treatment_sludge`)

Settled or dewatered solids generated by the treatment train leave as one separately weighed waste.

- Selected flow: Dewatered sludge from bottled-water treatment
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet mass with dry-solids fraction retained.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_treatment`
- Sources: `fao-who-cxc-48-2001`

###### Spent filter cartridge (`spent_filter_cartridge`)

Each discarded filter cartridge is recorded by mass and not combined with sludge or spent activated carbon.

- Selected flow: Spent drinking-water filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: Weighed discarded cartridge mass allocated over matched treated-water throughput.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_treatment`
- Sources: `fao-who-cxc-48-2001`

##### Elementary flows

### Process: Carbon dioxide dosing (`carbonation`)

#### Inputs

##### Product flows

###### Treated still-water feed to carbonation (`carbonation_water`)

Treated water enters this process only for a declared carbonated route.

- Selected flow: Treated still drinking water for bottling
- Flow property / unit: Mass / kg
- Amount rule: Calibrated carbonation-feed meter quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg carbonated-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonation`
- Sources: `fao-who-cxs-227-2001`

###### Food-grade carbon dioxide (`carbonation_co2`)

Purchased or recovered food-grade carbon dioxide dosed into water is one separate product exchange.

- Selected flow: Food-grade carbon dioxide for bottled-water carbonation
- Flow property / unit: Mass / kg
- Amount rule: Supplier mass balance or calibrated mass-flow quantity dosed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg carbonated-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonation`
- Sources: `fao-who-cxs-227-2001`; `eu-2009-54-ec`

###### Carbonation electricity (`carbonation_electricity`)

Electricity for chilling, pumping and dosing is recorded separately from filling-line electricity.

- Selected flow: Grid electricity supplied to bottled-water carbonation equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or documented allocation from a matched utility meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg carbonated-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonation`
- Sources: `fao-who-cxc-48-2001`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Carbonated water (`carbonated_water`)

Carbonated water is transferred as a measured intermediate to filling and is not merged with still water.

- Selected flow: Carbonated drinking water for bottling
- Flow property / unit: Mass / kg
- Amount rule: Calibrated transfer-meter quantity meeting declared carbon-dioxide specification.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg carbonated-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonation`
- Sources: `fao-who-cxs-227-2001`

##### Waste flows

##### Elementary flows

###### Carbon dioxide released during carbonation (`carbonation_co2_air`)

Measured or balanced carbon dioxide not retained in product is reported as one direct air emission with origin disclosed.

- Selected flow: Carbon dioxide from bottled-water carbonation to air
- Flow property / unit: Mass / kg
- Amount rule: Carbon-dioxide input minus product retention and separately recovered quantity over the same period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg carbonated-water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carbonation`
- Sources: `fao-who-cxs-227-2001`

### Process: Bottle preparation, filling, closing, labelling and packing (`filling_packaging`)

#### Inputs

##### Product flows

###### Still-water feed to filling (`filling_water`)

This feed is used only for the still-water route and is not duplicated with carbonated-water feed.

- Selected flow: Treated still drinking water for bottling
- Flow property / unit: Mass / kg
- Amount rule: Calibrated filler-inlet meter quantity for still-water lots.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources: `fao-who-cxc-48-2001`

###### Carbonated-water feed to filling (`filling_carbonated_water`)

This alternative feed is used only for carbonated lots and is not duplicated with still-water feed.

- Selected flow: Carbonated drinking water for bottling
- Flow property / unit: Mass / kg
- Amount rule: Calibrated filler-inlet meter quantity for carbonated-water lots.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources: `fao-who-cxs-227-2001`

###### PET bottle preform (`pet_preform`)

The representative route records the PET preform separately before on-site stretch blow moulding.

- Selected flow: Bottle-grade polyethylene terephthalate preform for a 1.5 L water bottle
- Flow property / unit: Mass / kg
- Amount rule: Issued preform count multiplied by lot-specific mean preform mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources: `us-epa-awg-lca-2019`; `garfi-et-al-2016`

###### Polypropylene bottle cap (`polypropylene_cap`)

Each tamper-evident polypropylene closure is recorded separately from the bottle body.

- Selected flow: Polypropylene tamper-evident cap for bottled water
- Flow property / unit: Mass / kg
- Amount rule: Issued cap count multiplied by lot-specific mean cap mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources: `us-epa-awg-lca-2019`

###### Paper bottle label (`paper_label`)

The representative paper label is an atomic packaging input and is not combined with adhesive or film.

- Selected flow: Printed paper label for a 1.5 L bottled-water bottle
- Flow property / unit: Mass / kg
- Amount rule: Issued label count multiplied by lot-specific mean dry label mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources: `garfi-et-al-2016`

###### Corrugated cardboard carton (`corrugated_carton`)

Corrugated cartons used for distribution are measured separately from labels and polymer film.

- Selected flow: Corrugated cardboard carton for bottled-water distribution
- Flow property / unit: Mass / kg
- Amount rule: Carton issue count multiplied by lot-specific mean dry carton mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### LDPE shrink film (`ldpe_shrink_film`)

Low-density polyethylene shrink film is recorded as one distribution-packaging material.

- Selected flow: Low-density polyethylene shrink film for bottled-water multipacks
- Flow property / unit: Mass / kg
- Amount rule: Film issue or roll-stock mass balance assigned to conforming packs.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources: `us-epa-awg-lca-2019`

###### Filling and packaging electricity (`filling_electricity`)

Electricity for preform heating, blow moulding, conveyors, filling, capping, labelling and packing is recorded as one metered utility exchange for this process.

- Selected flow: Grid electricity supplied to bottled-water filling and packaging equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or documented allocation from a matched site meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources: `us-epa-awg-lca-2019`; `garfi-et-al-2016`

###### Filling-line compressed air (`filling_compressed_air`)

Compressed air delivered to blow moulding and pneumatic equipment is recorded separately from electricity.

- Selected flow: Compressed air supplied to bottled-water filling and packaging equipment
- Flow property / unit: Volume / Nm3
- Amount rule: Submetered standard-volume use or compressor engineering allocation with standard conditions declared.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources: `us-epa-awg-lca-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming bottled-water output (`bottled_water_output`)

This is the singular reference product released in sealed 1.5 L PET bottles, measured on net water mass.

- Selected flow: Still prepared drinking water, not sweetened or flavoured, in one 1.5 L single-use PET bottle at bottling-plant gate
- Flow property / unit: Mass / kg
- Amount rule: Net conforming water mass released after quality and packaging checks.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources: `un-cpc-3-0-2023`; `fao-who-cxs-227-2001`

##### Waste flows

###### Off-specification bottled water (`offspec_bottled_water`)

Water in rejected filled units is measured separately from recoverable packaging scrap.

- Selected flow: Off-specification unsweetened and unflavoured bottled water
- Flow property / unit: Mass / kg
- Amount rule: Net water mass in rejected units from reject count and verified fill mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources: `fao-who-cxc-48-2001`

###### PET preform and bottle scrap (`pet_scrap`)

Rejected preforms and PET bottle bodies leave as a distinct PET waste stream.

- Selected flow: Waste bottle-grade polyethylene terephthalate from bottled-water packaging
- Flow property / unit: Mass / kg
- Amount rule: Weighed PET scrap leaving the line, net of documented in-process reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources: `us-epa-awg-lca-2019`; `garfi-et-al-2016`

###### Polypropylene cap scrap (`cap_scrap`)

Rejected polypropylene caps are not combined with PET or mixed packaging waste.

- Selected flow: Waste polypropylene bottle caps from bottled-water packaging
- Flow property / unit: Mass / kg
- Amount rule: Weighed or count-to-mass cap scrap leaving the line.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources: `us-epa-awg-lca-2019`

###### Paper label scrap (`label_scrap`)

Discarded paper labels are measured separately from cartons and polymer film.

- Selected flow: Waste printed paper labels from bottled-water packaging
- Flow property / unit: Mass / kg
- Amount rule: Weighed label scrap or rejected-label count multiplied by mean dry label mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources: `garfi-et-al-2016`

###### Corrugated carton scrap (`carton_scrap`)

Damaged or trimmed corrugated cardboard leaves as one paper-based waste stream.

- Selected flow: Waste corrugated cardboard cartons from bottled-water packaging
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry carton scrap leaving the packing line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### LDPE shrink-film scrap (`film_scrap`)

Trimmed or rejected LDPE film is kept separate from PET and polypropylene scrap.

- Selected flow: Waste low-density polyethylene shrink film from bottled-water packaging
- Flow property / unit: Mass / kg
- Amount rule: Weighed film scrap leaving the packing line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources: `us-epa-awg-lca-2019`

###### Filling-line wastewater (`filling_wastewater`)

Filler spills, container-rinse water and line drainage are recorded as one measured filling-area wastewater stream.

- Selected flow: Bottled-water filling-line wastewater
- Flow property / unit: Volume / m3
- Amount rule: Dedicated drain meter or validated water balance for the filling area.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources: `fao-who-cxc-48-2001`

##### Elementary flows

### Process: Equipment and container cleaning and sanitation (`cleaning_sanitation`)

#### Inputs

##### Product flows

###### Cleaning and sanitation water (`cleaning_water`)

Water used for equipment cleaning, container washing and sanitation is measured separately from product and treatment-process water.

- Selected flow: Potable cleaning water for bottled-water equipment and containers
- Flow property / unit: Volume / m3
- Amount rule: Cleaning-header meter or validated cycle-volume total attributable to the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-who-cxc-48-2001`; `who-gdwq-2026`

###### Sodium hydroxide cleaning chemical (`cleaning_sodium_hydroxide`)

Sodium hydroxide used in clean-in-place or container washing is recorded separately from acids and disinfectants.

- Selected flow: Sodium hydroxide solution for bottled-water equipment cleaning
- Flow property / unit: Mass / kg
- Amount rule: As-used solution mass from issue, concentration and cycle records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cleaning campaign attributable to declared output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-who-cxc-48-2001`

###### Peracetic acid disinfectant (`cleaning_peracetic_acid`)

Peracetic acid is a distinct sanitation chemical when present in the approved cleaning programme.

- Selected flow: Peracetic acid solution for bottled-water equipment sanitation
- Flow property / unit: Mass / kg
- Amount rule: As-used solution mass from issue, concentration and cycle records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cleaning campaign attributable to declared output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-who-cxc-48-2001`

###### Cleaning electricity (`cleaning_electricity`)

Electricity for pumps, washers and sanitation systems is separated from production-line electricity.

- Selected flow: Grid electricity supplied to bottled-water cleaning and sanitation equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or documented allocation from cleaning-equipment power and cycle time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cleaning campaign attributable to declared output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-who-cxc-48-2001`

###### Purchased steam for cleaning (`cleaning_steam`)

Purchased steam delivered to cleaning equipment is one thermal product exchange and is not combined with fuels.

- Selected flow: Purchased saturated steam for bottled-water equipment cleaning
- Flow property / unit: Mass / kg
- Amount rule: Metered steam delivered to cleaning, with pressure and condensate handling retained.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cleaning campaign attributable to declared output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-who-cxc-48-2001`

###### Natural gas for on-site cleaning heat (`cleaning_natural_gas`)

Natural gas is included only when combusted on site to supply cleaning heat and is not combined with LPG or diesel.

- Selected flow: Natural gas combusted for bottled-water cleaning heat
- Flow property / unit: Energy / MJ
- Amount rule: Fuel-meter quantity assigned to delivered cleaning heat using documented boiler efficiency.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cleaning campaign attributable to declared output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources:

###### Liquefied petroleum gas for on-site cleaning heat (`cleaning_lpg`)

LPG is an alternative fuel card used only for the actual LPG-fired heat route.

- Selected flow: Liquefied petroleum gas combusted for bottled-water cleaning heat
- Flow property / unit: Mass / kg
- Amount rule: Tank or invoice mass assigned to cleaning heat using documented boiler efficiency.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cleaning campaign attributable to declared output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources:

###### Diesel for emergency cleaning heat (`cleaning_diesel`)

Diesel is recorded only when actually combusted for cleaning heat and is not merged with other fuels.

- Selected flow: Diesel fuel combusted for bottled-water cleaning heat
- Flow property / unit: Mass / kg
- Amount rule: Tank or invoice mass assigned to cleaning heat using documented boiler efficiency.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cleaning campaign attributable to declared output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Cleaning wastewater (`cleaning_wastewater`)

Spent rinse water and diluted cleaning discharge leave as one measured cleaning wastewater stream.

- Selected flow: Bottled-water equipment-cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Cleaning-drain meter or validated cycle water balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-who-cxc-48-2001`

###### Spent concentrated cleaning solution (`spent_cleaning_solution`)

Concentrated cleaning solution removed for off-site treatment is recorded separately from dilute cleaning wastewater.

- Selected flow: Spent sodium-hydroxide cleaning solution from bottled-water equipment
- Flow property / unit: Mass / kg
- Amount rule: Weighed or tank-gauged concentrated solution sent off site.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming bottled-water output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-who-cxc-48-2001`

##### Elementary flows

###### Fossil carbon dioxide from cleaning heat (`combustion_co2_air`)

Direct fossil carbon dioxide from on-site fuel combustion is reported separately from nitrogen oxides.

- Selected flow: Carbon dioxide, fossil, from bottled-water cleaning heat to air
- Flow property / unit: Mass / kg
- Amount rule: Fuel-specific carbon balance from matched natural-gas, LPG or diesel records with biogenic carbon excluded.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per fuel inventory attributable to cleaning heat
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources:

###### Nitrogen oxides from cleaning heat (`combustion_nox_air`)

Direct nitrogen oxides from on-site fuel combustion are reported as one substance-specific air emission.

- Selected flow: Nitrogen oxides from bottled-water cleaning heat to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or disclosed fuel- and equipment-specific factor applied to matched fuel use.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per fuel inventory attributable to cleaning heat
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources:

### Process: Wastewater and residual handling (`wastewater_handling`)

#### Inputs

##### Product flows

###### Combined process wastewater (`wastewater_input`)

Measured treatment, filling and cleaning wastewater enters on-site treatment without hiding its source-stream records.

- Selected flow: Combined bottled-water plant process wastewater
- Flow property / unit: Volume / m3
- Amount rule: Influent flow meter reconciled to the three generating streams.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `fao-who-cxc-48-2001`

###### Wastewater-treatment electricity (`wastewater_electricity`)

Electricity for pumping, aeration, dosing and dewatering is kept separate from production electricity.

- Selected flow: Grid electricity supplied to bottled-water wastewater treatment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or documented equipment allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources:

###### Ferric chloride coagulant (`ferric_chloride`)

Ferric chloride is recorded only when dosed in the actual wastewater-treatment route.

- Selected flow: Ferric chloride solution for bottled-water wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: As-used solution mass from issue, concentration and dosing records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Treated effluent (`treated_effluent`)

Treated effluent is measured at the treatment outlet before reuse, sewer transfer or discharge.

- Selected flow: Treated bottled-water plant effluent
- Flow property / unit: Volume / m3
- Amount rule: Calibrated effluent-flow meter quantity by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources:

##### Waste flows

###### Wastewater-treatment sludge (`wastewater_sludge`)

Sludge from on-site wastewater treatment is weighed separately from raw-water-treatment sludge.

- Selected flow: Dewatered sludge from bottled-water plant wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet mass with dry-solids fraction and destination retained.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources:

###### Wastewater screenings (`wastewater_screenings`)

Coarse solids removed from wastewater are recorded as a distinct waste stream.

- Selected flow: Screenings from bottled-water plant wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: Weighed screenings with moisture basis and destination retained.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources:

##### Elementary flows

###### Chemical oxygen demand to water (`cod_to_water`)

COD discharged after treatment is reported separately from BOD and suspended solids.

- Selected flow: Chemical oxygen demand in treated effluent to water
- Flow property / unit: Mass / kg
- Amount rule: Flow-weighted COD concentration multiplied by matched effluent volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources:

###### Biochemical oxygen demand to water (`bod_to_water`)

BOD discharged after treatment is a separate measured water emission.

- Selected flow: Biochemical oxygen demand in treated effluent to water
- Flow property / unit: Mass / kg
- Amount rule: Flow-weighted BOD concentration multiplied by matched effluent volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources:

###### Total suspended solids to water (`tss_to_water`)

Total suspended solids discharged after treatment are reported separately from oxygen-demand indicators.

- Selected flow: Total suspended solids in treated effluent to water
- Flow property / unit: Mass / kg
- Amount rule: Flow-weighted TSS concentration multiplied by matched effluent volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources:

###### Total nitrogen to water (`total_nitrogen_to_water`)

Total nitrogen in treated effluent is one substance-specific direct emission.

- Selected flow: Total nitrogen in treated effluent to water
- Flow property / unit: Mass / kg
- Amount rule: Flow-weighted total-nitrogen concentration multiplied by matched effluent volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources:

###### Total phosphorus to water (`total_phosphorus_to_water`)

Total phosphorus in treated effluent is not combined with nitrogen or suspended solids.

- Selected flow: Total phosphorus in treated effluent to water
- Flow property / unit: Mass / kg
- Amount rule: Flow-weighted total-phosphorus concentration multiplied by matched effluent volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared site operations | Subdivide by source, treatment train, carbonation state, package line and cleaning campaign wherever meters or production records permit; allocation is used only after practical subdivision. | `who-gdwq-2026` |
| `allocation_mass_balance` | water treatment and filling losses | Assign raw water, treatment water, product, rejects and wastewater through a reconciled mass or volume balance. Do not allocate unexplained loss away from the declared product. | `fao-who-cxc-48-2001` |
| `allocation_shared_utilities` | common electricity, compressed air, steam and fuels | Allocate a shared utility by submetered use; otherwise use documented equipment power and operating time, delivered thermal energy, or another causal engineering driver. Production mass alone is allowed only when causal equivalence is demonstrated. |  |
| `allocation_cleaning` | line and container cleaning | Assign product-dedicated cleaning directly. Allocate shared campaign cleaning by cleaned equipment time, internal surface area, cycle volume or another documented causal driver; disclose changeovers and reusable-container washing. | `fao-who-cxc-48-2001` |
| `allocation_internal_recovery` | recovered water, CO2 or packaging material | Record internal recovery once as a transfer that reduces virgin input or waste output. Do not create an avoided-product credit inside the foreground inventory. |  |
| `allocation_waste_outputs` | PET, cap, label, carton, film, sludge and other residuals | Report physical waste quantities and treatment destinations. Any recycling or avoided-burden credit belongs to a separately declared lifecycle-model scenario and shall not reduce plant-gate waste mass. | `us-epa-awg-lca-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_water` | `raw_water_receipt` | raw-water receipt and transfer | meter, tank, source approval and quality-release records | source identity; legal water type; opening/closing meter; tank level; accepted and rejected volume; test result; transfer quantity | Calibrated intake and transfer meters reconciled to tank changes and release status | kg; m3 | Each lot or daily, with monthly reconciliation | At least 12 consecutive representative months or the complete campaign | Every source and bottling site in scope | Sum accepted source-specific quantity; keep rejected water and unexplained balance separate | Meter calibration; source authorization; laboratory release record; balance reconciliation |
| `cp_water_treatment` | `water_treatment` | treatment inputs, output and residuals | submeter, dosing, batch, replacement and discharge records | feed/output water; electricity; each chemical name, concentration and dose; process water; wastewater; sludge; filter count and mass | Direct meters and issue records; calculate active or amortized mass only from collected fields | kg; m3; kWh | Each batch or daily; replacements at event | Same period as reference production | Each treatment train | Preserve route totals, normalize by released treated water, and reconcile water balance | Calibration; chemical certificate; batch sheet; maintenance and replacement log; laboratory release result |
| `cp_carbonation` | `carbonation` | carbonation input, product and loss | water and CO2 mass-flow, electricity and product test records | water feed; CO2 input; electricity; product CO2; recovered CO2; vented CO2 | Calibrated mass flow and matched product testing | kg; kWh | Each lot, summarized monthly | Same period as carbonated production | Each carbonation line | Carbon balance by lot; do not mix still and carbonated production | Meter calibration; gas certificate; product release test; balance reconciliation |
| `cp_filling_packaging` | `filling_packaging` | filling, packaging and line losses | filler meter, production count, packaging issue, sampled weight, electricity, compressed air and reject records | water feed; good and rejected units; net fill; preform, cap, label, carton and film issues; component weights; PET/cap/label/carton/film scrap; electricity; compressed air; wastewater | Calibrated filler and utility meters, ERP issues, counted units and representative component weighing | kg; item; kWh; Nm3; m3 | Each lot or shift, summarized monthly | At least 12 representative months or complete campaign | Each package format and filling line | Net good water is denominator; preserve each component and waste stream separately | Check-weigher verification; scale and meter calibration; material reconciliation; reject log; package specification |
| `cp_cleaning_sanitation` | `cleaning_sanitation` | cleaning water, chemicals, energy, fuels and discharges | CIP/container-washer cycle, utility, chemical issue, fuel and drain records | cleaning water; NaOH; peracetic acid; electricity; steam; natural gas; LPG; diesel; wastewater; spent concentrate; cycle and line | Automated cycle log and meters; issue records; calculate active mass and fuel emissions from collected quantities | m3; kg; kWh; MJ | Every cleaning cycle, summarized monthly | Same period as production | Each line, tank, filler and reusable-container washer in scope | Assign dedicated cycles directly and shared cycles by documented causal driver | Approved sanitation programme; concentration verification; meter calibration; fuel invoice; discharge record |
| `cp_wastewater` | `wastewater_handling` | influent, treatment inputs, effluent, sludge and emissions | flow, laboratory, chemical issue, electricity, sludge and destination records | source-stream and influent volume; electricity; ferric chloride; effluent volume; sludge; screenings; COD; BOD; TSS; total N; total P | Calibrated flow meters, representative composite sampling, laboratory analysis, scales and issue records | m3; kg; kWh; mg/L | Continuous flow; sampling at permit or risk-based frequency; monthly balance | Same period as production | Each treatment plant and discharge destination | Match concentration and flow periods, calculate each load separately and reconcile influent/effluent/residuals | Sampling plan; laboratory QA/QC; meter and scale calibration; chain of custody; discharge compliance record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_product` | reference output | Sum conforming unit net fills or gross filled-unit mass minus measured package tare; exclude rejected units | conforming count; fill mass; bottle, cap and label tare | kg net conforming bottled water |  |
| `calc_water_balance` | raw-water, treatment, filling and cleaning processes | Input water = net product water + wastewater + water in wastes + measured evaporation or vent loss + inventory change + unresolved balance; report unresolved balance rather than forcing closure | matched water meters, tanks, product and wastewater | reconciled kg or m3 by process | `fao-who-cxc-48-2001` |
| `calc_chemical_active_mass` | each treatment and cleaning solution | As-used solution mass = issued volume x measured density; active mass = as-used solution mass x verified active fraction | issue, density, concentration | kg solution and kg active substance |  |
| `calc_packaging_mass` | each packaging component | Component mass = issued count x lot-specific sampled mean mass; reconcile with stock change, scrap and conforming units | counts, sampled weights, inventory and scrap | kg of PET preform, cap, label, carton and film separately | `us-epa-awg-lca-2019`; `garfi-et-al-2016` |
| `calc_shared_energy` | shared electricity, steam or fuel | Allocated quantity = matched total x causal driver for declared line / sum of matched causal drivers; retain driver and denominator | meter or invoice, operating time, rated load or delivered heat | kWh, kg steam, MJ or kg fuel assigned |  |
| `calc_emission_load` | each direct water emission | Load = flow-weighted concentration x matched effluent volume with unit conversion; calculate COD, BOD, TSS, total N and total P separately | concentration, effluent volume and sampling coverage | kg substance to water |  |
| `calc_combustion_emissions` | on-site fuel combustion | Apply verified fuel carbon balance and source-specific stack data or disclosed factors to each fuel separately; do not combine fuel quantities | natural gas, LPG or diesel quantity; carbon content; stack result or factor | kg fossil CO2 and kg NOx to air |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and every lot | Retain source type, legal water identity, still/carbonated state, complete treatment train, additions, bottle size and all package materials; demonstrate absence of sweeteners and flavourings. | Product specification, source authorization, formula or no-addition declaration, label and release record |
| `dq_route_separation` | source, treatment and package routes | Keep prepared, origin-defined, spring and natural-mineral routes and each package format separate until transparent weighting; do not use a natural-mineral-water restriction for a prepared-water route or vice versa. | Route map, production ledger and weighted aggregation workbook |
| `dq_temporal` | foreground records | Use at least 12 consecutive representative months when production is continuous, or the complete campaign; disclose shutdowns, abnormal events and incomplete coverage. | Dated meter, batch, maintenance and production records |
| `dq_completeness` | inventory | Cover raw water, every applied chemical, electricity, every thermal or fuel input, PET preform, cap, label, carton, film, process water, cleaning water, every waste stream and every direct emission. | Atomic-flow reconciliation checklist and process balances |
| `dq_measurement` | meters, scales and laboratories | Use in-calibration instruments and matched time bases; retain laboratory QA/QC and detection-limit treatment for release and emission data. | Calibration certificates, sampling plan, chain of custody and laboratory QA/QC |
| `dq_uuid_identity` | Tiangong references | Do not assign a UUID until direct read confirms exact physical or chemical identity, flow type, property and unit support; apply the official Chinese baseName when available. | Tiangong direct-read evidence retained outside PCR content |
| `dq_range_evidence` | important-flow QA ranges | Do not infer a range from one case or isolated point. A transferable empirical range requires at least two independent boundary-compatible originals and review of the inference and applicability. | Evidence review record and cited originals |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_identity_scope` | product identity | Reject a data package containing sugar, sweetener, flavouring or another food ingredient, or one that cannot establish a covered bottled-water identity and sealed package. | `un-cpc-3-0-2023`; `fao-who-cxs-227-2001` |
| `val_reference_flow` | reference flow | Require 1 kg net conforming bottled-water content, package tare excluded, and every required qualifier; flag the unresolved Tiangong reference identity until verified. |  |
| `val_treatment_route` | treatment inventory | Require the actual source-specific treatment train, applied chemicals and release controls. For natural mineral or spring water, reject disinfection or composition-changing treatment prohibited by the declared legal route. | `fao-who-cxs-227-2001`; `fao-who-cxc-48-2001`; `eu-2009-54-ec` |
| `val_atomic_inventory` | process inventory | Reject combined selected flows for chemicals, electricity, steam, fuels, packaging, wastes or emissions. Require each PET preform, cap, label, carton, film, wastewater, sludge, waste and emitted substance as its own row. |  |
| `val_water_balance` | water processes | Require a disclosed, time-matched balance from raw water through net product, wastewater, wastes, inventory changes and identified losses; report unresolved difference. | `fao-who-cxc-48-2001` |
| `val_hygienic_filling` | container preparation and filling | Require evidence that container preparation, filling and sealing protect against contamination and that cleaning water with possible product contact is potable. | `fao-who-cxc-48-2001`; `who-gdwq-2026` |
| `val_packaging_balance` | packaging | Require component-specific input, conforming-unit consumption and scrap reconciliation for PET preform, cap, label, carton and film; package tare shall not enter reference-water mass. | `us-epa-awg-lca-2019`; `garfi-et-al-2016` |
| `val_emission_loads` | direct emissions | Require each direct air or water emission to use matched activity and measurement periods, correct unit conversion and a disclosed calculation method; do not accept one combined wastewater-pollutant row. |  |
| `val_no_unsupported_range` | all amount ranges | Reject any empirical range derived from a single case, abstract, isolated point, or incompatible boundaries; require two independent compatible originals or omit the range and retain the foreground amount rule. |  |
| `val_dataset_profile` | publication candidate | Require complete metadata, quality disclosure, unresolved UUID disclosure, allocation, upstream dataset references, conditional-route decisions and update triggers before downstream publication. | `who-gdwq-2026` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; eligible for `background_dataset` use only after independent review, Tiangong identity resolution and declared representativeness |
| downstream_use | Foreground process-data package for bottled-water production and input to process or lifecyclemodel projections for packaged drinking water |
| allowed_use | Use for the declared source, legal water identity, treatment train, carbonation state, package format, geography, site technology and period; aggregate only with transparent production weighting |
| excluded_use | Do not use as a proxy for sweetened or flavoured water, soft drinks, bulk municipal water, medicinal water, an undeclared natural-mineral route, another bottle material or size, distribution, refrigeration, consumer use or end of life |
| required_metadata | PCR id and maturity; source and legal water identity; source location; still/carbonated state; treatment and additions; reference-flow qualifiers; bottle, cap, label, carton and film specification and tare; recycled content; site and line; geography; period; lot coverage; allocation; upstream datasets; waste and wastewater destinations; unresolved UUIDs |
| required_quality_disclosure | Meter and scale calibration; source and product-release testing; laboratory QA/QC; record coverage; water and packaging balances; allocation drivers; exclusions; abnormal events; unresolved balances; missing UUIDs; absence of evidence-backed ranges |
| update_trigger | Change in water source or legal identity, treatment or sanitation train, carbonation, bottle size/material/recycled content, cap/label/carton/film, line technology, electricity or fuel supply, wastewater route, allocation, site, representative period, release specification, Tiangong identity or independently reviewed range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2023` | official_guidance | United Nations Statistics Division. CPC Version 3.0 Structure, subclass 24410, 2023. https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2023/8-3_Background3_CPC3_Structure.pdf (retrieved 2026-08-23). | Official classification scope and category title only; not quantitative evidence |
| `fao-who-cxs-227-2001` | standard | FAO/WHO. General Standard for Bottled/Packaged Drinking Waters (Other than Natural Mineral Waters), CXS 227-2001, amended 2019. https://workspace.fao.org/sites/codex/Standards/CXS%20227-2001/CXS_227e.pdf (retrieved 2026-08-23). | Product inclusion/exclusion, prepared and origin-defined water identities, permitted additions and treatment-route controls |
| `fao-who-cxc-48-2001` | standard | FAO/WHO. Code of Hygienic Practice for Bottled/Packaged Drinking Waters (Other than Natural Mineral Waters), CXC 48-2001. https://workspace.fao.org/sites/codex/Standards/CXC%2048-2001/CXC_048e.pdf (retrieved 2026-08-23). | Source control, treatment-train decomposition, chemical/physical treatment, potable cleaning water, container washing, hygienic filling and sealing, collection and validation rules |
| `who-gdwq-2026` | official_guidance | World Health Organization. Guidelines for Drinking-water Quality, fourth edition incorporating the first, second and third addenda, 2026, ISBN 978-92-4-012122-5. https://www.who.int/publications/i/item/9789240121225 (retrieved 2026-08-23). | Source-to-consumer risk management, system assessment, operational monitoring, review and drinking-water quality control |
| `eu-2009-54-ec` | standard | European Parliament and Council. Directive 2009/54/EC on the exploitation and marketing of natural mineral waters. https://eur-lex.europa.eu/eli/dir/2009/54/oj (retrieved 2026-08-23). | Natural mineral and spring-water source identity, permitted treatment, disinfection prohibition, bottling and closure route restrictions |
| `us-epa-awg-lca-2019` | official_guidance | U.S. Environmental Protection Agency. Life Cycle and Cost Assessments of Atmospheric Water Generation Technologies and Alternative Potable Water Emergency Response Options, 2019, DOI 10.23719/1503094. https://pasteur.epa.gov/uploads/10.23719/1503094/AWG_LCA_Report_Final_1.29.19.pdf (retrieved 2026-08-23). | Bottled-water system and process decomposition; ultrafiltration, ozone and UV examples; PET preform and bottle conversion; cap, label and film components; no PCR range derived |
| `garfi-et-al-2016` | literature | Garfí, M.; Cadena, E.; Sanchez-Ramos, D.; Ferrer, I. Life cycle assessment of drinking water: Comparing conventional water treatment, reverse osmosis and mineral water in glass and plastic bottles. Journal of Cleaner Production 137 (2016) 997-1003. DOI 10.1016/j.jclepro.2016.07.218. Open full text: https://upcommons.upc.edu/bitstream/2117/102090/1/LCA%20water_v7_Revised2_POST%20PRINT.pdf (retrieved 2026-08-23). | Full-text confirmation of bottled-water uptake, factory energy, PET bottle, cap, label, packaging and waste as important inventory elements; single-case quantities are not used as ranges |
