---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.nonwovens
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Nonwovens

## 1. Scope and Applicability

This PCR governs foreground data packages for nonwoven sheets, webs and batts classified as CPC 27922. A covered product is manufactured from directionally or randomly oriented fibres or filaments and consolidated by friction, cohesion or adhesion rather than weaving or knitting. Covered routes include drylaid carded webs, airlaid and wetlaid webs, spunbond, meltblown and declared combinations, followed by mechanical, thermal or chemical bonding and any finishing that does not move the product outside CPC 27922.

The foreground gate begins with purchased polymer granulate, staple fibre, pulp or another declared fibre-forming feed at the nonwoven facility. It includes actual feedstock preparation, web formation, consolidation, route-specific washing or finishing, drying, slitting, winding, inspection and packaging performed at that facility. Each fibre or polymer composition, recycled-content basis, formation route, bonding route, finish, multilayer construction, basis-weight class and production line must remain identifiable. Aggregation is allowed only after a representativeness review.

Fibre and polymer production before receipt, transport outside the facility gate, manufacture of finished wipes, garments, filters, hygiene articles, medical devices, geotextile systems or other converted articles, distribution, use and end-of-life are outside the foreground boundary. Felt, wadding, paper, woven, knitted, tufted and stitch-bonded products that do not meet the declared nonwoven definition are excluded. A coated, impregnated, covered or laminated material is covered only when its classification remains CPC 27922 and the added layer and process are fully disclosed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.nonwovens |
| classification_refs | CPC 3.0: 27922 - Nonwovens |
| covered_products | Nonwoven sheets, webs and batts classified as CPC 27922, including drylaid, airlaid, wetlaid, spunbond, meltblown and combined routes with mechanical, thermal or chemical consolidation |
| excluded_products | Felt; wadding; paper; woven, knitted, tufted or non-qualifying stitch-bonded fabric; fibre or polymer feedstock; yarn; and finished or converted articles whose product identity is no longer nonwoven material |
| representative_product | Saleable nonwoven material in roll or sheet form at the manufacturing-facility gate, with composition, basis weight, width, thickness, formation route, bonding route and finish declared |
| production_route | Route-specific fibre or polymer preparation, web formation, web consolidation, conditional finishing and drying, then slitting, winding, inspection and packaging; no unconditional average across materially different routes |
| market_state | Net dry or declared conditioned mass of saleable roll or sheet material at plant, excluding packaging and off-spec output |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Nonwoven material that meets the declared composition, web-formation, bonding and performance specification |
| How much | 1,000 kg net nonwoven material, excluding roll cores, wrapping, cartons and pallets |
| How well | Meets the declared basis weight, width, thickness, tensile properties and applicable end-use specification at the stated conditioning and moisture basis |
| How long or cycle | One released production lot at the nonwoven-facility gate; no service-life duration applies to this intermediate material |
| reference_flow_link | The functional unit is realized by exactly 1,000 kg net saleable nonwoven output at the declared product state |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net nonwoven material |
| Reference product flow | Nonwovens `dd37c0b0-8d07-452a-a62a-aaffa8c42b61` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CPC 27922 scope confirmation; fibre and polymer identities with mass fractions; virgin and recycled content basis; web-formation route; bonding route; multilayer construction; basis weight in g/m2; width; thickness; relevant tensile or performance specification; finish, coating or lamination status; moisture or conditioning basis; roll or sheet form; production line; geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

The reference flow UUID was returned by flow-hybrid-search and independently confirmed by a Tiangong state-code-100 direct read as a public Product flow classified exactly as CPC 27922 with Mass as its reference property. The other hybrid candidates were rejected because their public classification leaves were CPC 27991, CPC 27999 or CPC 27120 rather than CPC 27922.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1,000 kg net saleable nonwoven. Exclude roll cores, wrappers, cartons, pallets, edge trim and off-spec output from the reference amount. |
| `conditioned_mass_basis` | Fibre inputs, intermediates, wastes and product | Mass | kg | Use one declared moisture or conditioning basis throughout the material balance. Do not combine oven-dry, conditioned and as-received masses without measured moisture and an explicit conversion. |
| `basis_weight_measurement` | Reference product | Mass per unit area | g/m2 | Determine mass per unit area using ISO 9073-1:2023 or a documented equivalent. Retain specimen area, specimen mass, sampling position and conditioning record. |
| `thickness_measurement` | Reference product | Length | mm | Report thickness with the applicable test method, pressure and conditioning state; do not compare thickness values measured under different pressures without disclosure. |
| `tensile_measurement` | Reference product | Force and elongation | N and % | Report machine- and cross-direction results separately when tensile performance is a product qualifier, with specimen width, gauge length and conditioning stated. |
| `composition_mass_fraction` | Fibre, polymer, binder and product composition | Mass fraction | kg/kg | Record every intentionally added fibre, polymer and binder separately on a dry or declared conditioned basis. Fractions must reconcile with the declared product composition. |
| `energy_carrier_separation` | Electricity, compressed air, steam, purchased heat and fuels | Energy or delivered service | kWh, MJ or Nm3 | Preserve each carrier and meter basis. Do not combine electricity, steam, heat, compressed air or fuel into one energy row. |
| `water_balance_units` | Wetlaid, hydroentanglement, washing and aqueous finishing | Volume or Mass | m3 or kg | Keep fresh intake, reused water, evaporation or carry-over and wastewater separate. State density and temperature assumptions for mass-volume conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased polymer granulate, staple fibre, pulp or another identified fibre-forming feed received at the nonwoven facility with composition, grade, virgin or recycled status, moisture, prior processing and packaging state declared |
| starting_condition_role | Upstream product input whose polymer, fibre or pulp production burden is represented by a supply-specific upstream dataset |
| product_classification_scope | CPC 27922 nonwovens only; ambiguous paper, felt, wadding, coated-fabric or converted-article identities require classification review before this PCR is used |
| recursive_input_rule | If a purchased input is already a CPC 27922 nonwoven, link its upstream dataset and inventory only the incremental on-site lamination, finishing or converting operation; do not recreate burdens already represented upstream |
| upstream_dataset_requirement | Use composition-, recycled-content-, grade-, geography- and route-specific datasets for polymer, fibre, pulp, binders, chemicals, packaging and utilities; disclose every proxy and mismatch |
| disclosure | Declare the feedstock gate, route sequence, web-formation and bonding technology, all conditional wet and thermal operations, multilayer construction, recycled content, internal recycling, abatement, product conditioning, packaging treatment, excluded converting stages and data gaps |

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Nonwoven manufacturing facility | Include actual receipt and internal handling, feed preparation, web formation, consolidation, in-scope finishing and drying, slitting, winding, inspection, abatement and packaging through release at the facility gate. | `un-cpc-v3-2025`; `iso-9092-2026`; `gaynor-nonwovens-2022` |
| `boundary_route_separation` | Dataset stratification | Keep drylaid, airlaid, wetlaid, spunbond, meltblown and combined routes separate unless measured evidence demonstrates that aggregation is representative; preserve bonding and finish strata. | `gaynor-nonwovens-2022`; `eu-pef-method-2021` |
| `boundary_upstream_inputs` | Purchased feedstocks and auxiliaries | Link upstream burdens for each identified polymer, fibre, pulp, binder, chemical, packaging item and utility. Do not place upstream polymerisation, fibre manufacture or pulp manufacture inside the foreground process unless physically performed on site. | `eu-pef-method-2021`; `ec-jrc-txt-bref-2023` |
| `boundary_wet_processing` | Wetlaid, hydroentanglement, washing and aqueous finishing | Include water intake, recirculation, pumping, drying, chemical dosing, wastewater treatment, sludge and direct releases whenever the operation occurs. | `ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_converted_articles` | Downstream product manufacture | Exclude manufacture of wipes, garments, filters, hygiene articles, medical devices, geotextile systems and other converted products after saleable nonwoven release; link separate downstream datasets. | `un-cpc-v3-2025`; `epd-pcr-nonwovens-2011-06` |
| `boundary_no_hidden_cutoff` | Included foreground processes | Record all known material, energy, water, product, waste and direct-emission exchanges. Any exclusion requires a documented cut-off basis and sensitivity assessment; a missing UUID is not a cut-off reason. | `eu-pef-method-2021`; `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feedstock_web_formation` | Feedstock preparation and web formation | required | Required for every route; record only the route-specific feedstock and utilities actually used | Foreground preparation and formation | kg unconsolidated web or direct-laid web |
| `web_consolidation` | Mechanical, thermal or chemical web consolidation | required | Required; declare needle-punch, hydroentanglement, thermal, chemical or combined bonding technology | Foreground bonding | kg bonded nonwoven web |
| `finishing_drying` | Finishing, washing and drying | conditional | Include when washing, aqueous treatment, coating, impregnation, drying, heat setting or another finish occurs before sale | Foreground finishing | kg finished nonwoven |
| `slitting_packaging` | Slitting, winding, inspection and packaging | required | Required through release of saleable roll or sheet product | Foreground converting and release | 1,000 kg net reference product |

### Process: Feedstock preparation and web formation (`feedstock_web_formation`)

#### Inputs

##### Product flows

###### Polypropylene granulate for spunlaid formation (`polypropylene_granulate`)

Polypropylene granulate crosses the facility boundary as the fibre-forming polymer for an applicable spunbond or meltblown route. Record the actual grade and virgin or recycled status from receipts and stock reconciliation.

- Selected flow: Polypropylene granulate
- Flow property / unit: Mass / kg
- Amount rule: Measured net polypropylene granulate consumed by the applicable production lot or matched period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_records`
- Sources: `gaynor-nonwovens-2022`

###### Polyester granulate for spunlaid formation (`polyester_granulate`)

Polyethylene terephthalate granulate is an alternative fibre-forming polymer for an applicable spunlaid route. Keep it separate from polypropylene and record its actual grade and recycled-content basis.

- Selected flow: Polyethylene terephthalate granulate
- Flow property / unit: Mass / kg
- Amount rule: Measured net PET granulate consumed by the applicable production lot or matched period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_records`
- Sources: `gaynor-nonwovens-2022`

###### Bleached cellulosic pulp for wetlaid or airlaid formation (`bleached_cellulosic_pulp`)

Bleached cellulosic wood pulp crosses the process boundary as the principal fibre furnish only for a declared wetlaid or airlaid route. Record pulp grade, dry content, origin and certification separately from synthetic fibre inputs.

- Selected flow: Bleached cellulosic wood pulp
- Flow property / unit: Mass / kg dry pulp
- Amount rule: Measured dry pulp input derived from received mass and measured dry-solids fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_records`
- Sources: `gaynor-nonwovens-2022`

###### Cotton staple fibre for drylaid formation (`cotton_staple_fibre`)

Cotton staple fibre enters an applicable drylaid route as one identified fibre component. Record grade, origin, recycled status, moisture and net mass for each lot.

- Selected flow: Cotton staple fibre
- Flow property / unit: Mass / kg
- Amount rule: Measured net cotton staple fibre consumed by the applicable production lot or matched period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_records`
- Sources: `ilo-textile-competency-2006`

###### Viscose staple fibre for drylaid formation (`viscose_staple_fibre`)

Viscose staple fibre enters an applicable drylaid route as one identified regenerated-cellulose component. Record fibre grade, supplier, moisture, finish and net mass separately.

- Selected flow: Viscose staple fibre
- Flow property / unit: Mass / kg
- Amount rule: Measured net viscose staple fibre consumed by the applicable production lot or matched period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_records`
- Sources: `ec-jrc-txt-bref-2023`

###### Electricity for feed preparation and web formation (`web_formation_electricity`)

Electricity powers opening, blending, carding, airlaying, wetlaying pumps or melt spinning and collection for the applicable route. Record a dedicated meter or documented equipment allocation without mixing thermal energy.

- Selected flow: Electricity supplied to the nonwoven production line
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for feed preparation and web formation during the matched production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-pef-method-2021`

###### Compressed air for web formation (`web_formation_compressed_air`)

Compressed air crosses the web-formation process boundary when used for fibre transport, attenuation or cleaning. Record delivered volume at the declared pressure and avoid combining it with electricity.

- Selected flow: Compressed air
- Flow property / unit: Volume / Nm3
- Amount rule: Metered or production-recorded compressed-air delivery at declared pressure for the matched period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `gaynor-nonwovens-2022`

###### Process water for wetlaid formation (`wetlaid_process_water`)

Process water is a product input only when the declared wetlaid route forms a fibre suspension. Record fresh supplied water separately from recirculated internal water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered fresh process-water intake to wetlaid stock preparation and formation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `ec-jrc-txt-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unconsolidated nonwoven web (`unconsolidated_nonwoven_web`)

The unconsolidated web is the route-specific intermediate transferred from formation to bonding. Measure it on a matched conditioned-mass basis and keep drylaid, airlaid, wetlaid, spunbond and meltblown webs distinct.

- Selected flow: Unconsolidated nonwoven web
- Flow property / unit: Mass / kg
- Amount rule: Measured web mass transferred to consolidation, adjusted for matched work-in-progress change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `gaynor-nonwovens-2022`

##### Waste flows

###### Mixed off-spec fibre or polymer feed (`mixed_feedstock_reject`)

This row represents one physically segregated mixed reject stream removed before or during web formation. Record its measured mass, composition, internal return and external treatment without netting returned material against fresh input.

- Selected flow: Mixed off-spec fibre or polymer feed
- Flow property / unit: Mass / kg
- Amount rule: Measured externally discarded mass after separately recording internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-textiles-bat-2022`

###### Captured fibre dust (`captured_fibre_dust`)

Captured fibre dust is one solid waste stream removed by the formation-line extraction or filtration system. Record dry or as-collected mass and fibre composition separately from residual air emissions.

- Selected flow: Captured fibre dust
- Flow property / unit: Mass / kg
- Amount rule: Measured filter-bin or container mass discharged from the web-formation dust-control system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ilo-textile-competency-2006`; `eu-textiles-bat-2022`

##### Elementary flows

###### Residual PM10 emitted to air (`pm10_air_web_formation`)

PM10 is recorded as one elementary emission only when the residual mass leaving a declared air-emission point is measured or calculated from a source-specific test. Do not substitute captured dust mass for emitted PM10.

- Selected flow: Particulate matter, PM10, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or source-test-derived PM10 mass emitted during the matched production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-textiles-bat-2022`

### Process: Mechanical, thermal or chemical web consolidation (`web_consolidation`)

#### Inputs

##### Product flows

###### Unconsolidated web transferred to bonding (`web_bonding_input`)

The route-specific unconsolidated web enters the actual needle-punch, hydroentanglement, thermal or chemical bonding operation. Its identity and mass must match the formation-process output.

- Selected flow: Unconsolidated nonwoven web
- Flow property / unit: Mass / kg
- Amount rule: Measured web mass received by consolidation on the matched conditioned-mass basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `gaynor-nonwovens-2022`

###### Styrene-butadiene latex binder (`styrene_butadiene_latex`)

Styrene-butadiene latex crosses the bonding boundary only for a declared latex-bonded route. Record the actual commercial product mass and dry-solids content from dosing and stock records.

- Selected flow: Styrene-butadiene latex binder
- Flow property / unit: Mass / kg commercial product
- Amount rule: Measured latex product dosed to the applicable bonded web, with dry-solids fraction retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `gaynor-nonwovens-2022`

###### Bicomponent bonding fibre (`bicomponent_bonding_fibre`)

Bicomponent sheath-core fibre enters as one thermally activatable bonding fibre where that technology is used. Record the polymer pair, sheath-core ratio, fibre form and mass separately from structural fibres.

- Selected flow: Bicomponent sheath-core bonding fibre
- Flow property / unit: Mass / kg
- Amount rule: Measured net bicomponent bonding-fibre input for the applicable product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_records`
- Sources: `gaynor-nonwovens-2022`

###### Electricity for web consolidation (`bonding_electricity`)

Electricity powers needles, pumps, suction, calendars, ovens, fans and controls for the selected bonding technology. Record bonding electricity separately from formation and finishing.

- Selected flow: Electricity supplied to the nonwoven bonding line
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for web consolidation during the matched production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-pef-method-2021`

###### Water for hydroentanglement (`hydroentanglement_water`)

Process water crosses the bonding boundary for hydroentanglement. Record fresh intake separately from filtered recirculation and subsequent discharge.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered fresh water supplied to the hydroentanglement circuit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `gaynor-nonwovens-2022`; `eu-textiles-bat-2022`

###### Purchased steam for thermal bonding or drying (`purchased_steam`)

Purchased steam is one delivered thermal-energy carrier used only when the consolidation line receives steam from outside the foreground boundary. Keep it separate from fuel and electricity.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered or invoiced steam energy on the declared pressure, condensate and enthalpy basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bonded nonwoven web (`bonded_nonwoven_web`)

The bonded nonwoven web is the consolidated intermediate leaving mechanical, thermal or chemical bonding. Measure its mass and preserve the bonding technology, composition and basis-weight stratum.

- Selected flow: Bonded nonwoven web
- Flow property / unit: Mass / kg
- Amount rule: Measured bonded-web output transferred to finishing or converting, adjusted for work-in-progress change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `iso-9092-2026`; `gaynor-nonwovens-2022`

##### Waste flows

###### Wastewater from wet bonding (`bonding_wastewater`)

This is one wastewater stream leaving hydroentanglement or aqueous chemical bonding after any internal recirculation. Record discharged volume, treatment state and measured pollutant concentrations separately.

- Selected flow: Nonwoven bonding wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered wastewater discharged from bonding during the matched period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`

###### Sludge from bonding-water treatment (`bonding_sludge`)

Treatment sludge is one exported solid waste stream from bonding-water treatment. Record wet mass, dry solids, hazardous status and treatment route.

- Selected flow: Nonwoven bonding wastewater-treatment sludge
- Flow property / unit: Mass / kg wet sludge
- Amount rule: Measured exported sludge mass with dry-solids fraction retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

###### Styrene emitted to air (`styrene_air`)

Styrene is one substance-specific air emission for applicable styrene-butadiene latex bonding. Include it only from a matched measurement or validated facility calculation.

- Selected flow: Styrene, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or validated-calculation styrene mass emitted during the matched latex-bonding period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-textiles-bat-2022`

###### 1,3-Butadiene emitted to air (`butadiene_air`)

1,3-Butadiene is one substance-specific air emission for an applicable styrene-butadiene latex route. It must not be combined with styrene or generic volatile organic compounds.

- Selected flow: 1,3-Butadiene, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or validated-calculation 1,3-butadiene mass emitted during the matched latex-bonding period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-textiles-bat-2022`

### Process: Finishing, washing and drying (`finishing_drying`)

#### Inputs

##### Product flows

###### Bonded nonwoven entering finishing (`finishing_input_nonwoven`)

Bonded nonwoven crosses into this conditional process when it is washed, finished, coated, impregnated, dried or heat-set before sale. Its mass and substrate specification must match the bonding output.

- Selected flow: Bonded nonwoven web
- Flow property / unit: Mass / kg
- Amount rule: Measured bonded-web mass received by the finishing line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `ec-jrc-txt-bref-2023`

###### Electricity for finishing and drying (`finishing_electricity`)

Electricity powers pumps, applicators, dryers, fans, calendars and controls for the declared finish. Record it on a line or documented equipment basis.

- Selected flow: Electricity supplied to the nonwoven finishing line
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for finishing and drying during the matched period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-textiles-bat-2022`

###### Process water for washing or aqueous finishing (`finishing_process_water`)

Fresh process water crosses the boundary when the product is washed or receives an aqueous finish. Keep fresh intake separate from reused water and wastewater.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered fresh water supplied to the finishing line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`

###### Purchased steam for finishing and drying (`finishing_steam`)

Purchased steam supplies thermal energy to a finishing or drying line when received across the foreground boundary. Record its pressure and condensate basis separately from other energy carriers.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered or invoiced steam energy attributable to finishing and drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-textiles-bat-2022`

###### Sodium hydroxide used in finishing (`sodium_hydroxide`)

Sodium hydroxide is one chemical input only when the declared finishing recipe uses it. Record the commercial solution mass and active sodium-hydroxide fraction separately.

- Selected flow: Sodium hydroxide solution
- Flow property / unit: Mass / kg commercial solution
- Amount rule: Measured solution mass dosed to the applicable finishing lot, with concentration retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `ec-jrc-txt-bref-2023`

###### Hydrogen peroxide used in finishing (`hydrogen_peroxide`)

Hydrogen peroxide solution is one chemical input only when the declared finishing or bleaching recipe uses it. Record solution mass and active concentration separately.

- Selected flow: Hydrogen peroxide solution
- Flow property / unit: Mass / kg commercial solution
- Amount rule: Measured solution mass dosed to the applicable finishing lot, with concentration retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `ec-jrc-txt-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished nonwoven intermediate (`finished_nonwoven_intermediate`)

Finished nonwoven leaves the conditional finishing line with its substrate, finish, coating or lamination, dry add-on, moisture and performance state declared. Measure it before slitting and packaging.

- Selected flow: Finished nonwoven material
- Flow property / unit: Mass / kg
- Amount rule: Measured finished nonwoven mass transferred to converting, adjusted for work-in-progress change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `ec-jrc-txt-bref-2023`

##### Waste flows

###### Wastewater from nonwoven finishing (`finishing_wastewater`)

This is one wastewater stream leaving the finishing operation after internal reuse. Record discharged volume, treatment state and each measured pollutant as separate substance-specific elementary flows where applicable.

- Selected flow: Nonwoven finishing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered wastewater discharged from finishing during the matched period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`

###### Sludge from finishing-water treatment (`finishing_sludge`)

Finishing-treatment sludge is one exported waste stream. Record wet mass, dry solids, hazardous status and destination without combining it with bonding sludge unless physically mixed and documented.

- Selected flow: Nonwoven finishing wastewater-treatment sludge
- Flow property / unit: Mass / kg wet sludge
- Amount rule: Measured exported sludge mass with dry-solids fraction retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Slitting, winding, inspection and packaging (`slitting_packaging`)

#### Inputs

##### Product flows

###### Nonwoven material entering converting (`converting_input_nonwoven`)

The bonded or finished nonwoven entering slitting and winding is one identified intermediate whose composition, route and mass match the preceding process output. Do not combine unrelated product strata.

- Selected flow: Nonwoven material before slitting and winding
- Flow property / unit: Mass / kg
- Amount rule: Measured nonwoven mass entering converting on the matched conditioned-mass basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `iso-9073-1-2023`

###### Electricity for slitting and winding (`converting_electricity`)

Electricity powers slitting, winding, inspection and packaging equipment. Record it separately from formation, bonding and finishing electricity.

- Selected flow: Electricity supplied to the nonwoven converting line
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for slitting, winding, inspection and packaging during the matched period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-pef-method-2021`

###### Paperboard roll core (`paperboard_roll_core`)

The paperboard core is one packaging component incorporated into saleable rolls but excluded from net reference mass. Record grade, dimensions, unit mass and recycled content.

- Selected flow: Paperboard roll core
- Flow property / unit: Mass / kg
- Amount rule: Measured unit mass multiplied by the number of cores used, reconciled with stock records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-method-2021`

###### Polyethylene wrapping film (`polyethylene_wrap_film`)

Polyethylene wrapping film is one packaging material used to protect saleable rolls or sheets. Record film grade, thickness and mass without combining it with straps or other plastics.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Measured film issued to released product, reconciled with opening stock, receipts and closing stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-method-2021`

###### Corrugated-board packaging (`corrugated_board_packaging`)

Corrugated board is one packaging component for applicable sheet packs or roll protection. Record grade, unit mass and recycled content separately from paperboard cores.

- Selected flow: Corrugated-board packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured corrugated-board mass issued to released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-method-2021`

###### Wooden pallet (`wooden_pallet`)

A wooden pallet is one transport-packaging component when shipped with the product. Record pallet mass, treatment and reuse accounting separately from other packaging.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured or verified unit mass multiplied by pallets dispatched with product, net of documented same-system returns only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released CPC 27922 nonwoven (`reference_nonwoven_output`)

The released saleable nonwoven is the sole reference product. The accepted Tiangong UUID is exact for public Product flow, CPC 27922 and Mass; net mass excludes all packaging.

- Selected flow: Nonwovens `dd37c0b0-8d07-452a-a62a-aaffa8c42b61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured released gross mass minus measured roll-core and external-packaging tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_output`
- Sources: `un-cpc-v3-2025`; `iso-9073-1-2023`

##### Waste flows

###### Nonwoven edge-trim waste (`edge_trim_waste`)

Edge trim is one composition-specific nonwoven waste stream cut from the web during slitting. Record gross trim, clean internal return and externally treated residue separately.

- Selected flow: Nonwoven edge-trim waste
- Flow property / unit: Mass / kg
- Amount rule: Measured externally discarded trim after separately recording clean internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-textiles-bat-2022`

###### Discarded polyethylene wrapping film (`waste_polyethylene_film`)

This row records one polyethylene-film waste stream generated by damaged or unused wrap at the facility. It does not represent film shipped with product.

- Selected flow: Waste polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Measured waste film sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-method-2021`

###### Discarded corrugated board (`waste_corrugated_board`)

This row records one corrugated-board waste stream generated by damaged or unused packaging. Keep it separate from paperboard cores and mixed waste.

- Selected flow: Waste corrugated board
- Flow property / unit: Mass / kg
- Amount rule: Measured waste corrugated board sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-method-2021`

###### Discarded wooden pallet (`waste_wooden_pallet`)

This row records one wooden-pallet waste stream when a pallet is discarded rather than reused or shipped. Record treatment and do not assign reuse credits without the allocation rule.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured pallet mass sent to the declared waste treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net nonwoven output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-method-2021`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Multi-line and multi-product operations | Prefer process subdivision and route-, line- or product-specific metering. Do not allocate an avoidable shared exchange. | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_shared_utilities` | Shared electricity, steam, compressed air, water and treatment | When subdivision is not possible, use a documented causal driver such as metered runtime multiplied by measured load, steam demand, water flow or treated pollutant load. Use product mass only when no more causal driver is available and disclose sensitivity. | `eu-pef-method-2021` |
| `allocation_internal_recycling` | Clean fibre, web and edge trim returned within the same foreground system | Record gross generation and gross return, but cancel the internal loop once in the net external inventory. Allocate collection and reprocessing energy to the process that uses it; do not claim avoided-product credit. | `eu-pef-method-2021` |
| `allocation_exported_material` | Sold or exported off-spec nonwoven, fibre or polymer residue | Treat an exported material as a co-product only when it has a documented market and specification. Apply the PEF allocation hierarchy and report the method, driver, burden share and sensitivity; otherwise treat it as waste with its actual treatment. | `eu-pef-method-2021`; `iso-14044-2006` |
| `allocation_reusable_packaging` | Reusable cores, pallets or containers | Allocate manufacturing and return burdens over documented trips or use cycles. Do not assume a reuse count without inventory records, loss rate and end-of-life disclosure. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_records` | `feedstock_web_formation`; `web_consolidation` | Polymer, fibre, pulp and bonding-fibre inputs | Supplier specification, receipt, weigh ticket and stock ledger | lot_id, supplier, material_identity, grade, polymer_or_fibre, mass_fraction, virgin_or_recycled_status, moisture, dry_solids, gross_mass, tare_mass, net_mass, receipt_time, process_id | Match every lot to supplier evidence and reconcile weighed use with stock change | kg and kg/kg | Each receipt and issue; reconcile monthly or by campaign | Same representative period as output | Every included facility, line and product stratum | Aggregate only identical material and route strata after stock reconciliation | Calibrated scale, supplier certificate, lot traceability and signed stock reconciliation |
| `cp_energy_records` | all processes | Electricity, compressed air and purchased steam | Submeter, utility invoice, flow meter or equipment runtime record | carrier, meter_id, opening_reading, closing_reading, pressure, enthalpy_basis, equipment_id, runtime, measured_load, process_id, lot_or_period | Prefer process submetering; otherwise apply a documented causal allocation | kWh, MJ or Nm3 | Continuous or each batch; aggregate by matched period | Representative normal-operation period | Every included line and utility | Preserve each carrier and process; subtract non-production use where measured | Meter calibration, invoices, runtime log, load evidence and allocation worksheet |
| `cp_water_records` | route-dependent wet processes | Fresh water, recirculation and wastewater | Intake and discharge meter, tank record and laboratory analysis | water_source, intake_volume, recirculated_volume, discharge_volume, carryover_or_evaporation, sample_time, substance, concentration, treatment_state, process_id | Build a process water balance and match samples with discharge volume | m3, kg and mg/L as applicable | Continuous meter; sample according to permit and risk | Same wet-route period as output | All wet circuits, treatment units and discharge points | Keep fresh, internal reuse and discharge separate; calculate each pollutant load separately | Meter calibration, sampling plan, chain of custody, accredited result and balance reconciliation |
| `cp_chemical_records` | `web_consolidation`; `finishing_drying` | Latex and individual finishing chemicals | Recipe, batch dosing sheet, purchase issue, SDS and stock ledger | product_name, supplier, function, composition, active_fraction, dose, opening_stock, receipts, closing_stock, lot_id, process_id | Record each commercial product separately and reconcile dose with stock change | kg commercial product and kg active substance | Each batch or dosing event; reconcile monthly | Same route and period as output | Every line applying the chemical | Never aggregate different formulations; normalize commercial and active mass separately | Calibrated dosing record, signed recipe, SDS or composition certificate and stock reconciliation |
| `cp_mass_balance` | all processes | Feed, intermediates, product, internal return and removed material | Hopper, bale, roll or platform scale and work-in-progress ledger | process_id, lot_id, input_mass, output_mass, internal_return_mass, exported_waste_mass, opening_wip, closing_wip, moisture_basis | Construct process and line mass balances on one conditioning basis | kg | Each lot where feasible; otherwise each shift or campaign | Matched input-output period | Every included route and line | Retain gross internal loops; use net external values only after reconciliation | Scale calibration, signed balance and reason for every unexplained difference |
| `cp_air_emissions` | emission-relevant processes | One named air substance per record | Stack test, continuous monitor or substance-specific calculation | emission_point, substance, compartment, concentration, gas_flow, operating_time, abatement_state, production_mass, method, detection_limit | Match concentration and flow in time or use a validated facility-specific factor | kg substance, mg/Nm3 and Nm3 | According to permit and process risk; repeat after material change | Representative operating condition | Every relevant emission point | Calculate each substance separately; do not combine VOCs, particles or compartments | Laboratory report, instrument calibration, sampling plan and operating log |
| `cp_waste_records` | all processes | One identified waste stream per record | Container scale, waste manifest and treatment receipt | waste_identity, composition, process_id, gross_mass, tare_mass, moisture_or_dry_solids, internal_return, destination, treatment, date | Weigh each stream and link it to the generating process and disposition | kg wet and kg dry where applicable | Each container or shipment | Same period as output | Every included process | Keep waste identity, moisture and destination strata separate | Scale record, manifest, treatment receipt and composition evidence |
| `cp_packaging_records` | `slitting_packaging` | Individual packaging component and packaging waste | Bill of materials, unit-weight test and stock ledger | component, material, grade, recycled_content, unit_mass, units_used, stock_change, shipped_units, damaged_units, waste_mass | Reconcile packaging issued, shipped and discarded by material | kg | Each dispatch campaign; reconcile monthly | Same period as reference output | Every packaging format | Preserve each material and reuse status | Pack specification, unit-weight check, stock record and waste receipt |
| `cp_reference_output` | `slitting_packaging` | Net reference product and qualifiers | Calibrated scale, roll map, release record and laboratory test | lot_id, gross_roll_mass, core_mass, external_packaging_tare, net_nonwoven_mass, composition, recycled_content, formation_route, bonding_route, finish, basis_weight, width, thickness, tensile_results, moisture_basis, geography, release_time | Calculate net product mass and verify all required qualifiers before release | kg and declared test units | Every released lot | Same period as normalized inputs and outputs | Every represented product and line | Keep product strata separate until representativeness review | Scale calibration, release certificate, ISO-method test records and lot traceability |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | Released product lot | net_nonwoven_mass = gross_roll_or_pack_mass - roll_core_mass - external_packaging_tare | gross mass; core mass; packaging tare | kg net nonwoven | `iso-9073-1-2023`; `eu-pef-method-2021` |
| `calc_normalize_1000kg` | Every foreground exchange | normalized_amount = matched_period_or_lot_amount / matched_net_nonwoven_mass * 1000 kg | exchange amount; matched net product mass | amount per 1,000 kg net nonwoven | `eu-pef-method-2021` |
| `calc_basis_weight` | Reference product | basis_weight = conditioned_specimen_mass / specimen_area with ISO 9073-1 sampling and precision | specimen mass; specimen area | g/m2 | `iso-9073-1-2023` |
| `calc_conditioned_mass` | Material converted between moisture states | target_mass = measured_mass * (1 - measured_initial_moisture_fraction) / (1 - declared_target_moisture_fraction); use consistent wet- or dry-basis fractions | measured mass; initial moisture; target moisture | kg at declared conditioning state | `eu-pef-method-2021` |
| `calc_process_mass_balance` | Each process and matched period | unexplained_difference = inputs + opening_wip - outputs - exported_waste - closing_wip; internal returns cancel within the same system | inputs; outputs; wastes; opening and closing WIP; internal returns | kg unexplained difference | `eu-textiles-bat-2022` |
| `calc_water_pollutant_load` | Direct wastewater discharge | substance_mass = matched_concentration * matched_discharge_volume with explicit unit conversion | substance concentration; discharge volume; sample period | kg named substance | `eu-textiles-bat-2022` |
| `calc_air_mass_load` | Channelled air emission | substance_mass = concentration * gas_flow_on_same_reference_basis * operating_time with explicit conversion | concentration; gas flow; operating time; reference conditions | kg named substance | `eu-textiles-bat-2022` |
| `calc_shared_utility` | Shared utility without submeter | Allocate by a documented causal driver; if none is available, disclose the gap and test a mass-allocation sensitivity rather than claiming measured site specificity | shared amount; causal driver; product strata | allocated kWh, MJ, Nm3 or m3 | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Inputs, intermediates and output | Trace each released lot through feedstock lots, route, bonding, finishing, converting and tests; retain the exact CPC 27922 product identity. | Supplier records, route traveller, batch record, roll map and release certificate; `un-cpc-v3-2025` |
| `dq_route_representativeness` | Aggregated datasets | Do not aggregate materially different composition, recycled-content, formation, bonding, finishing, basis-weight or line strata without a documented representativeness test. | Disaggregated inventory and aggregation review; `eu-pef-method-2021`; `gaynor-nonwovens-2022` |
| `dq_temporal_match` | All foreground data | Match material, energy, water, waste, emissions and output to the same representative normal-operation period; identify startup, shutdown, maintenance and abnormal production. | Dated ledgers, meter periods and operating log; `eu-pef-method-2021` |
| `dq_measurement_quality` | Mass, utilities, tests and emissions | Retain instrument identity, calibration or verification, method, sample location, detection limit and unit conversion. State whether each value is measured or calculated. | Calibration certificates, laboratory reports, meter exports and calculation workbook |
| `dq_completeness` | Included foreground processes | Include every known individual material, utility, product, waste and direct-emission exchange. A missing Tiangong UUID does not justify omission. | Input-output register, material and water balances, waste manifests and emission-point register; `eu-textiles-bat-2022` |
| `dq_chemical_specificity` | Binder and finishing chemistry | Record each commercial formulation as one product input and each reported emitted substance as one elementary flow; retain active fraction and SDS information. | Recipe, SDS, supplier composition, dosing and substance-specific monitoring; `ec-jrc-txt-bref-2023` |
| `dq_product_testing` | Reference product | Use representative conditioned specimens and report basis weight, width, thickness and applicable tensile or end-use performance methods with lot linkage. | ISO 9073 test record and release specification; `iso-9073-1-2023`; `iso-9073-2-1995`; `iso-9073-3-2023` |
| `dq_no_ai_ranges` | Quantitative inventory guidance | This candidate defines no AI-authored amount range. Obtain values from foreground records and introduce a range only when reviewed route-specific evidence or a foreground distribution supports it. | Foreground collection record or reviewed range source and approval record |

## 9. Validation Rules

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | Reference flow | Require Product flow UUID dd37c0b0-8d07-452a-a62a-aaffa8c42b61, Mass UUID 93a60a56-a3c8-11da-a746-0800200b9a66, Units of mass UUID 93a60a57-a4c8-11da-a746-0800200c9a66 and kg. | `un-cpc-v3-2025` |
| `validation_scope` | Product category | Confirm that the output is a nonwoven sheet, web or batt classified as CPC 27922. Reject felt, wadding, paper, woven, knitted, tufted and downstream converted articles. | `un-cpc-v3-2025`; `iso-9092-2026` |
| `validation_required_qualifiers` | Product metadata | Fail completeness when composition, recycled content, formation route, bonding route, multilayer construction, basis weight, width, thickness, finish, moisture basis, line, geography or reporting period is missing. | `iso-9073-1-2023`; `eu-pef-method-2021` |
| `validation_process_inclusion` | Process map | Require `feedstock_web_formation`, `web_consolidation` and `slitting_packaging`; include `finishing_drying` whenever any declared washing, finishing, coating, impregnation, drying or heat setting occurs. | `gaynor-nonwovens-2022`; `ec-jrc-txt-bref-2023` |
| `validation_atomic_exchanges` | Inventory rows | Require one physical or chemical exchange per row. Reject combined energy carriers, plural material selectors, grouped packaging, grouped wastes and generic emitted-substance collections. | `eu-pef-method-2021` |
| `validation_mass_balance` | Process and line inventory | Require one moisture basis, matched work-in-progress, gross internal-return disclosure, net packaging exclusion and a signed explanation for every material-balance difference. | `eu-textiles-bat-2022`; `eu-pef-method-2021` |
| `validation_wet_routes` | Wetlaid, hydroentangled and aqueous-finished routes | Require fresh water, recirculation, pumping and drying energy, each chemical, wastewater, treatment sludge and each reported direct release when the route applies. | `ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022` |
| `validation_air_emissions` | Formation, bonding and finishing emission points | Require captured waste and residual emissions to remain separate; record each emitted substance and compartment separately with measurement or validated calculation evidence. | `eu-textiles-bat-2022` |
| `validation_allocation` | Shared and multi-output operations | Verify subdivision was attempted first and every remaining allocation uses a documented causal driver, calculation and sensitivity where required. Reject silent avoided-burden credits. | `iso-14044-2006`; `eu-pef-method-2021` |
| `validation_product_tests` | Released nonwoven | Verify that basis weight uses ISO 9073-1 or a documented equivalent and that thickness and tensile claims identify method, conditioning and direction. | `iso-9073-1-2023`; `iso-9073-2-1995`; `iso-9073-3-2023` |
| `validation_temporal_completeness` | Foreground data package | Verify that input, output, utility, water, waste and emission records cover the same representative operating window and that abnormal periods and missing measurements are disclosed. | `eu-pef-method-2021`; `eu-textiles-bat-2022` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Route-, product-, line- and facility-specific foreground dataset for CPC 27922 nonwoven production at the manufacturing-facility gate |
| downstream_use | May become a `secondary_dataset` or `background_dataset` for downstream articles only after methodology review, inventory UUID completion and evidence review |
| allowed_use | Model the disclosed composition, recycled-content basis, web-formation route, bonding route, finish, basis-weight class, multilayer construction, geography, line and period |
| excluded_use | Generic proxy for felt, wadding, paper, woven or knitted fabric; fibre or polymer production; downstream converted articles; undisclosed route or composition substitution; use or end-of-life |
| required_metadata | Canonical PCR id; CPC coordinate; reference UUIDs; composition; recycled content; feedstock origin; formation and bonding routes; finish; multilayer construction; basis weight; width; thickness; performance tests; moisture basis; facility, line, geography and period; upstream datasets; allocation; review state |
| required_quality_disclosure | Foreground and secondary shares; calibration and method status; temporal, geographical and technological coverage; mass and water reconciliation; internal recycling; allocation; missing UUIDs; data gaps; abnormal periods; uncertainty and source versions |
| update_trigger | Change in product classification, reference-flow identity, material or recycled content, route, binder or finish chemistry, equipment, line, abatement, water circuit, packaging, allocation, upstream data, legal requirement, BAT conclusion or test standard; or resolution of missing UUIDs and reviewed quantitative evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, code 27922, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-08-13 | Official category identity and separation from felt, wadding and other textile articles |
| `iso-9092-2026` | Standard (`standard`) | ISO 9092:2026, Nonwovens - Vocabulary, https://www.iso.org/standard/90537.html, retrieved 2026-08-13 | Current nonwoven terminology and distinction from other sheet materials |
| `iso-9073-1-2023` | Standard (`standard`) | ISO 9073-1:2023, Nonwovens - Test methods - Part 1: Determination of mass per unit area, https://www.iso.org/standard/83590.html, retrieved 2026-08-13 | Basis-weight measurement, sampling and reference-product quality evidence |
| `iso-9073-2-1995` | Standard (`standard`) | ISO 9073-2:1995, Textiles - Test methods for nonwovens - Part 2: Determination of thickness, https://www.iso.org/standard/16651.html, retrieved 2026-08-13 | Thickness qualifier and test-method disclosure |
| `iso-9073-3-2023` | Standard (`standard`) | ISO 9073-3:2023, Nonwovens - Test methods - Part 3: Determination of tensile strength and elongation at break using the strip method, https://www.iso.org/standard/83591.html, retrieved 2026-08-13 | Machine- and cross-direction tensile quality evidence |
| `gaynor-nonwovens-2022` | Literature (`literature`) | Gaynor et al., Lignin use in nonwovens: A review, BioResources 17(2), 3445-3488, DOI 10.15376/biores.17.2.Gaynor, https://bioresources.cnr.ncsu.edu/resources/lignin-use-in-nonwovens-a-review/, retrieved 2026-08-13 | Peer-reviewed full-text process decomposition for drylaid, wetlaid, spunbond, meltblown and bonding routes |
| `ilo-textile-competency-2006` | Official guidance (`official_guidance`) | International Labour Office, Regional Model Competency Standards: Manufacturing Industry, carding unit H14, https://www.ilo.org/sites/default/files/wcmsp5/groups/public/%40asia/%40ro-bangkok/documents/publication/wcm_041777.pdf, retrieved 2026-08-13 | Feedstock receipt fields, carding controls, air filtration, web checks and production documentation |
| `ec-jrc-txt-bref-2023` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://publications.jrc.ec.europa.eu/repository/handle/JRC131874, retrieved 2026-08-13 | Fibre preparation, wet processing, finishing, chemicals, water, energy, emissions and process monitoring |
| `eu-textiles-bat-2022` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, http://data.europa.eu/eli/dec_impl/2022/2508/oj, retrieved 2026-08-13 | Input-output inventory, monitoring, water, energy, chemicals, waste, wastewater and air-emission management for applicable operations |
| `eu-pef-method-2021` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, Annex I Product Environmental Footprint Method, http://data.europa.eu/eli/reco/2021/2279/oj, retrieved 2026-08-13 | Functional-unit normalization, company-specific data, data quality, system boundary and allocation hierarchy |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, with Amendments 1:2017 and 2:2020, https://www.iso.org/standard/38498.html, retrieved 2026-08-13 | LCI completeness, transparency and allocation hierarchy |
| `epd-pcr-nonwovens-2011-06` | Standard (`standard`) | International EPD System PCR 2011:06 version 4.0.0, Nonwovens for clothing, protective clothing and upholstery, https://www.environdec.com/pcr-library/pcr2011-06, retrieved 2026-08-13 | Official PCR evidence that end-use nonwoven subsets require category-specific scope and downstream-use disclosure |
