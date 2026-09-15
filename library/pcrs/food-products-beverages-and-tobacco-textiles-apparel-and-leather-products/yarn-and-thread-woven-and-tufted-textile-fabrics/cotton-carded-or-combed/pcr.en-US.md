---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-carded-or-combed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cotton, carded or combed

## 1. Scope and Applicability

This PCR covers gate-to-gate foreground production of cotton that has been carded or combed and is delivered as a natural textile fibre prepared for spinning. The declared product may be card sliver, drawn carded sliver, combed sliver, lap, web, or another non-yarn presentation only when the presentation, route, and classification remain consistent with CPC 3.0 subclass 26160.

The dataset shall declare `route=carded` or `route=combed`. It shall also declare cotton fibre type and origin, including at least Upland or extra-long-staple/Pima where known, virgin or reclaimed/recycled origin, and the relevant grade or supplier specification. Carded and combed routes, materially different cotton fibre types, and virgin and reclaimed/recycled feedstocks shall be modelled separately; they shall not be combined into one unconditional category average. A production-weighted aggregate may be reported only as an additional result when the disaggregated route/fibre-type datasets and weighting period are retained.

Reclaimed or recycled cotton may be included only when the delivered output is confirmed to remain cotton, carded or combed, rather than cotton waste or garnetted stock. Sorting, cutting, tearing, or garnetting of recovered textiles is conditional and belongs inside the boundary only when performed by the reporting facility. Blended cotton/man-made-fibre slivers, raw or ginned cotton not yet carded, cotton waste marketed as waste or garnetted stock, rovings, yarns, fabrics, wet pretreatment, dyeing, finishing, cultivation, harvesting, and ginning are excluded from the reference product.

This candidate PCR is intended to produce auditable foreground data. It does not provide a default industry-average inventory, a legal determination of product classification, an occupational compliance assessment, or an environmental product declaration.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-carded-or-combed |
| classification_refs | CPC 3.0: 26160, Cotton, carded or combed, exact generic reference; classification remains subject to the declared physical state and market presentation |
| covered_products | 100% cotton fibre outputs that are carded or combed and prepared for spinning; virgin Upland and extra-long-staple/Pima cotton; reclaimed/recycled cotton only when classification as CPC 26160 is confirmed |
| excluded_products | raw or merely ginned cotton; cotton linters; cotton waste or garnetted stock sold as such; man-made staple fibre; cotton/man-made-fibre blends; roving; yarn; thread; fabric; finished textile products |
| representative_product | one declared lot of cotton prepared for spinning, reported separately as carded or combed and by cotton fibre type/origin |
| production_route | receiving and conditioning; opening, cleaning, and lot-specific blending; carding; drawing when part of the delivered state; for combed output only, lap/sliver preparation, combing, and post-combing drawing; attributable suction, dust collection, humidification, internal handling, inspection, and packaging |
| market_state | dry prepared cotton fibre at the reporting facility gate, not spun; presentation, moisture or commercial mass basis, packaging, route, and fibre type/origin declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | cotton fibre separated, cleaned, aligned, and prepared for subsequent spinning by a declared carded or combed route |
| How much | 1 kg of delivered product on the declared measured or commercial mass basis |
| How well | conforms to the declared route, cotton fibre type/origin, presentation, moisture or regain convention, lot specification, and applicable quality attributes |
| How long or cycle | one production lot at the facility gate; no service-life duration applies |
| reference_flow_link | the reference product is the final saleable carded or combed cotton output of the declared route, after attributable losses and before spinning |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cotton, carded or combed `93976740-418a-40e3-8901-dbc34f0acdc6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | carded or combed route; delivered presentation; cotton species/type or commercial class; Upland or extra-long-staple/Pima where known; virgin or reclaimed/recycled origin; recycled-content calculation basis where applicable; input and output grade/specification; fibre length and uniformity where available; micronaire or declared fineness/maturity indicator; strength where available; colour and trash/foreign-matter indicator where relevant; moisture content and measured/commercial mass convention; production site, technology, lot, period, packaging, and allocation status |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. A qualifier may be marked not applicable only with a reason. The verified Tiangong row is a generic exact product-flow identity: version `01.01.000`, `state_code=100`, Product flow, CPC 26160. The PCR stores only UUID `93976740-418a-40e3-8901-dbc34f0acdc6`; the checked version is disclosed here solely as identity-verification context and shall not be treated as a version lock or quantitative evidence.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `meas_reference_mass` | reference product and cotton material flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground quantities to 1 kg of delivered carded or combed cotton. Retain unrounded lot masses and the conversion to the reference amount. |
| `meas_moisture_basis` | cotton input, intermediate, output, noils, and fibre waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Declare whether each mass is as received, conditioned, oven-dry, or commercial mass. Do not mix bases. Record measured moisture and the exact agreed regain/allowance or conversion method; do not insert a generic regain value. ISO 6741-1 applies only within its stated homogeneous single-fibre consignment scope. |
| `meas_route_separation` | carded and combed product routes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Meter or allocate measured values to carded and combed routes separately. Route aggregation is permitted only as an additional production-weighted view with disaggregated records retained. |
| `meas_fibre_type_separation` | materially different cotton fibre types and origins | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep virgin Upland, virgin extra-long-staple/Pima, and reclaimed/recycled feedstock records separate whenever yields, energy, waste, quality, or processing conditions differ materially. |
| `meas_energy` | electricity and fuels | energy content and carrier-specific property | kWh, MJ, or native invoiced unit | Preserve metered units and conversion factors. Record grid mix, supplier product, onsite generation, fuel lower/higher heating-value basis, and allocation of shared utilities. |
| `meas_dust` | captured fibre/dust and direct particulate releases | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh captured material where practicable and quantify stack or fugitive release using a documented environmental-emission method. Occupational cotton-dust concentration shall not be converted into an environmental mass emission without measured airflow, time, capture, and release-point data. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | cotton feedstock received at the preparation facility, with bale/lot identity, physical presentation, fibre type/origin, grade or supplier specification, moisture/mass basis, and prior preparation state declared |
| starting_condition_role | gate-to-gate input condition; upstream cultivation, harvesting, ginning, recycled-textile collection, and off-site feedstock preparation are represented by linked upstream datasets rather than silently absorbed into this foreground process |
| product_classification_scope | output shall be confirmed as cotton, carded or combed and prepared for spinning; a reclaimed/recycled route is included only when the output is not classified and marketed as cotton waste or garnetted stock |
| recursive_input_rule | when a same-category carded or combed cotton input crosses the foreground boundary, record it as an explicit technosphere input with its upstream dataset and do not recursively reconstruct its prior preparation; disclose whether the operation is re-drawing, re-carding, blending, or reprocessing |
| upstream_dataset_requirement | use geographically, temporally, technologically, and fibre-type-representative upstream datasets for cotton cultivation/ginning or recovered-textile preparation, electricity, fuels, water, auxiliaries, packaging, and waste treatment; identify proxies and data gaps |
| disclosure | disclose route, fibre type/origin, recycled-content basis, input state, included equipment, shared-service allocation, moisture/mass convention, product/co-product/waste classification, dust-control boundary, packaging, geography, technology, production period, and every excluded or externally supplied operation |

### Normative System Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | foreground_system | Include all on-site operations attributable to the saleable prepared-cotton output from declared receiving condition through opening/cleaning/blending, carding, route-required drawing, conditional combing preparation and combing, suction and dust collection, internal transfer, quality control, and packaging. | `un-cpc-3-2025`; `eu-jrc-txt-bref-2023`; `osha-1910-262-textiles` |
| `sb_route_condition` | production_route | Carding is required for both declared routes. Include lap/sliver preparation, combing, and post-combing drawing only for a combed output; do not assign combing losses or energy to a carded output. | `eu-jrc-txt-bref-2023`; `osha-1910-262-textiles` |
| `sb_fibre_condition` | fibre_type_origin | Model materially different cotton fibre types and virgin versus reclaimed/recycled feedstocks as separate foreground strata. Do not use an unconditional average across them. | `usda-ams-cotton-classing`; `eu-pef-2021-2279` |
| `sb_recycled_route` | reclaimed_recycled_cotton | Include onsite sorting, cutting, tearing, willowing, garnetting, or additional cleaning only when performed and when the delivered product classification is confirmed. Report off-site preparation through an upstream dataset. | `osha-1910-1043-cotton-dust`; `osha-1910-262-textiles`; `un-cpc-3-2025` |
| `sb_upstream_exclusion` | upstream_supply | Exclude cultivation, harvesting, ginning, transport to the facility, and off-site recycled-feedstock preparation from the foreground gate-to-gate process, but require explicit upstream product flows/datasets when a downstream life-cycle model is built. | `un-cpc-3-2025`; `eu-pef-2021-2279` |
| `sb_downstream_exclusion` | downstream_operations | Exclude roving, spinning, twisting, winding, wet pretreatment, dyeing, printing, finishing, fabric manufacture, distribution, use, and end of life unless a broader study adds them as separately identified downstream processes. | `eu-jrc-txt-bref-2023`; `un-cpc-3-2025` |
| `sb_dust_and_waste` | emissions_and_waste | Include captured fibre/trash/dust, direct particulate releases, noils, packaging waste, and treatment routes. Keep occupational exposure measurements separate from environmental emission inventory. | `osha-1910-1043-cotton-dust`; `eu-jrc-txt-bref-2023` |
| `sb_atomic_flows` | all_inventory_rows | Represent each material, energy carrier, named chemical, product, waste, and elementary release as one atomic flow row. Electricity rows do not include steam, natural gas, diesel, LPG, compressed-air service, refrigerant makeup, or heat. No category-wide chemical input is assumed; if a facility uses a named conditioning agent, lubricant, cleaning chemical, fuel, refrigerant, or other carrier, add one conditional atomic row per substance/carrier with its own quantity, unit, protocol, source status, and UUID status. | `eu-pef-2021-2279` |
| `sb_no_hidden_cutoff` | inventory_completeness | Do not omit a material or energy flow merely because no default factor exists. Record the foreground requirement, proxy, exclusion, or unresolved gap and assess its significance. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_conditioning` | Feedstock receiving and conditioning | required | Always represented; prior preparation state and moisture/mass basis vary by lot | establish input identity, mass, and quality | kg cotton feedstock accepted by declared route and fibre-type stratum |
| `opening_cleaning_blending` | Opening, cleaning, and lot-specific blending | required | Equipment steps may be zero only when the declared received input is already equivalently opened/cleaned; the omission is disclosed | open bales or recovered fibre, remove foreign matter, and form the declared cotton blend | kg cleaned opened cotton transferred to carding |
| `carding_drawing` | Carding and route-required drawing | required | Carding always applies; drawing applies when performed for the declared delivery or combing-preparation state | separate and align fibres; produce carded output or combing intermediate | kg carded cotton output/intermediate |
| `combing_preparation` | Lap/sliver preparation, combing, and post-combing drawing | conditional | Include only when `route=combed` | remove short fibres and neps, parallel long fibres, and produce combed cotton | kg combed cotton output |
| `site_services_packaging` | Attributable site services, dust control, inspection, and packaging | required | Packaging material is conditional on delivered form; humidification, compressed air, and onsite fuel are included when used | provide utilities, capture dust, inspect, and prepare saleable output | 1 kg delivered reference product |

### Process: Feedstock receiving and conditioning (`receiving_conditioning`)

#### Inputs

##### Product flows

###### Virgin Upland ginned cotton feedstock (`virgin_upland_cotton_feedstock`)

Use only for a declared virgin Upland cotton stratum. Carded and combed route destinations remain separate.

- Flow name: virgin Upland ginned cotton fibre
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: virgin Upland cotton only; mutually exclusive with the other feedstock rows for the same input mass
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per 1 kg delivered product of the same route and virgin Upland stratum
- Unit: kg
- Value or formula or rule: measured accepted mass corrected only by the declared moisture/commercial-mass method
- Range or uncertainty: route-specific provisional `reasoned_estimate` ranges below; replace with reviewed lot mass balances
- Data source id: `cp_lot_mass_quality`
- Source id or status: `iso-6741-1-1989`; `usda-ams-cotton-classing`; UUID unresolved; provisional ranges are `reasoned_estimate`
- Selected flow: virgin Upland ginned cotton fibre; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass corrected only by the declared moisture/commercial-mass method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg delivered carded or combed cotton of the same route and fibre-type stratum
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_quality`
- Sources: `iso-6741-1-1989`; `usda-ams-cotton-classing`
- Range: Provisional virgin-Upland carded-route input screening estimate; replace after reviewed lot mass balances or stronger route-specific evidence is available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1.00
  - Upper: 1.30
  - Unit: kg
  - Basis: per 1 kg delivered carded cotton, virgin Upland stratum only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional virgin-Upland combed-route input screening estimate; replace after reviewed lot mass balances or stronger route-specific evidence is available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1.05
  - Upper: 1.70
  - Unit: kg
  - Basis: per 1 kg delivered combed cotton, virgin Upland stratum only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Virgin extra-long-staple ginned cotton feedstock, including Pima (`virgin_els_pima_cotton_feedstock`)

Use only for a declared virgin extra-long-staple/Pima cotton stratum. Do not borrow the Upland screening range.

- Flow name: virgin extra-long-staple ginned cotton fibre, including Pima
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: virgin extra-long-staple/Pima cotton only; mutually exclusive with the other feedstock rows for the same input mass
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per 1 kg delivered product of the same route and virgin extra-long-staple/Pima stratum
- Unit: kg
- Value or formula or rule: measured accepted mass corrected only by the declared moisture/commercial-mass method
- Range or uncertainty: no category-wide numeric range is asserted; foreground lot mass balance is mandatory
- Data source id: `cp_lot_mass_quality`
- Source id or status: `iso-6741-1-1989`; `usda-ams-cotton-classing`; UUID unresolved; foreground record required
- Selected flow: virgin extra-long-staple ginned cotton fibre, including Pima; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass corrected only by the declared moisture/commercial-mass method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg delivered carded or combed cotton of the same route and extra-long-staple/Pima stratum
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_quality`
- Sources: `iso-6741-1-1989`; `usda-ams-cotton-classing`

###### Reclaimed cotton fibre feedstock (`reclaimed_cotton_feedstock`)

Use only when the recovered input is a single declared cotton-fibre stream and classification review confirms that the delivered output remains CPC 26160 rather than cotton waste or garnetted stock.

- Flow name: reclaimed cotton fibre feedstock
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: reclaimed/recycled cotton route only; mutually exclusive with the virgin feedstock rows for the same input mass
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per 1 kg delivered product of the same reclaimed-cotton route and fibre-type stratum
- Unit: kg
- Value or formula or rule: measured accepted mass corrected only by the declared moisture/commercial-mass method
- Range or uncertainty: provisional reclaimed-cotton screening range below; replace after classification review and reviewed route-specific lots
- Data source id: `cp_lot_mass_quality`
- Source id or status: `cp_lot_mass_quality`; UUID unresolved; provisional range is `reasoned_estimate`
- Selected flow: reclaimed cotton fibre feedstock; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass corrected only by the declared moisture/commercial-mass method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg delivered carded or combed cotton of the same reclaimed-cotton route and fibre-type stratum
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_quality`
- Sources: `osha-1910-1043-cotton-dust`
- Range: Provisional reclaimed/recycled-cotton route screening estimate; replace after classification review and reviewed route-specific lot mass balances
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1.05
  - Upper: 2.50
  - Unit: kg
  - Basis: per 1 kg delivered carded or combed cotton, reclaimed/recycled stratum only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Conditioned feedstock released to opening (`conditioned_feedstock`)

Transfer the weighed, identified lot to the matching route/fibre-type production record without changing its stratum.

- Flow name: conditioned cotton feedstock of one declared fibre-type stratum
- Direction: Outputs (`outputs`)
- Flow type: Product (`product`)
- Applicability / condition: one separately identified route/fibre-type lot; never an aggregate of materially different strata
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per receiving lot and per 1 kg delivered reference product
- Unit: kg
- Value or formula or rule: accepted feedstock mass less separately measured receiving waste and sampling loss
- Range or uncertainty: calculated from the same lot records; no category-wide numeric range asserted
- Data source id: `cp_lot_mass_quality`
- Source id or status: `iso-6741-1-1989`; `cp_lot_mass_quality`; UUID unresolved
- Selected flow: conditioned cotton feedstock; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: accepted feedstock mass less separately recorded receiving rejects and sampling losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per receiving lot and per 1 kg delivered reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_quality`
- Sources: `iso-6741-1-1989`

### Process: Opening, cleaning, and lot-specific blending (`opening_cleaning_blending`)

#### Inputs

##### Product flows

###### Conditioned cotton supplied to opening and cleaning (`opening_cotton_input`)

Keep the route destination and fibre-type/origin stratum attached to the transferred mass.

- Flow name: conditioned cotton feedstock of one declared fibre-type stratum
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: one separately identified route/fibre-type lot; never an aggregate of materially different strata
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per 1 kg opened cotton output of the same stratum
- Unit: kg
- Value or formula or rule: measured transfer into opening/cleaning for the production lot
- Range or uncertainty: foreground lot record required; no category-wide numeric range asserted
- Data source id: `cp_opening_route_records`
- Source id or status: `eu-jrc-txt-bref-2023`; `cp_opening_route_records`; UUID unresolved
- Selected flow: conditioned cotton feedstock; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer into opening/cleaning for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg opened cotton output of the same stratum
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_opening_route_records`
- Sources: `eu-jrc-txt-bref-2023`

###### Electricity for opening, cleaning, conveying, and blending below 1 kV (`opening_electricity_lt1kv`)

Record submetered electricity or a documented equipment-level allocation for the same operating period.

- Flow name: alternating current, below 1 kV, consumption mix
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: electricity consumed by opening, cleaning, conveying, and blending only; the declared point-of-supply voltage is below 1 kV and the location of supply is CN; mutually exclusive with the other voltage rows for this process
- UUID status: confirmed by Tiangong direct read; version `01.01.003`; `state_code=100`; Product flow
- Quantity basis: per 1 kg opened cotton output of one declared route/fibre-type stratum
- Unit: kWh
- Value or formula or rule: metered electricity or equipment-level causal allocation
- Range or uncertainty: provisional `reasoned_estimate` screen below; replace with representative submeter or equipment records
- Data source id: `cp_energy_and_services`
- Source id or status: `eu-jrc-txt-bref-2023`; `cp_energy_and_services`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed
- Selected flow: alternating current, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: metered electricity attributable to opening, cleaning, conveying, and blending
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg opened cotton output, separately by route destination and fibre-type stratum
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_services`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional opening/cleaning electricity screening estimate; replace when representative submeter or equipment records are available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 2.00
  - Unit: kWh
  - Basis: per 1 kg opened cotton output for one declared fibre-type stratum
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Electricity for opening, cleaning, conveying, and blending at 1–35 kV (`opening_electricity_1_35kv`)

Record submetered electricity or a documented equipment-level allocation for the same operating period.

- Flow name: alternating current, 1–35 kV, consumption mix
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: electricity consumed by opening, cleaning, conveying, and blending only; the declared point-of-supply voltage is 1–35 kV and the location of supply is CN; mutually exclusive with the other voltage rows for this process
- UUID status: confirmed by Tiangong direct read; version `01.01.003`; `state_code=100`; Product flow
- Quantity basis: per 1 kg opened cotton output of one declared route/fibre-type stratum
- Unit: kWh
- Value or formula or rule: metered electricity or equipment-level causal allocation
- Range or uncertainty: provisional `reasoned_estimate` screen below; replace with representative submeter or equipment records
- Data source id: `cp_energy_and_services`
- Source id or status: `eu-jrc-txt-bref-2023`; `cp_energy_and_services`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed
- Selected flow: alternating current, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: metered electricity attributable to opening, cleaning, conveying, and blending
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg opened cotton output, separately by route destination and fibre-type stratum
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_services`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional opening/cleaning electricity screening estimate; replace when representative submeter or equipment records are available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 2.00
  - Unit: kWh
  - Basis: per 1 kg opened cotton output for one declared fibre-type stratum
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Electricity for opening, cleaning, conveying, and blending at 35–330 kV (`opening_electricity_35_330kv`)

Record submetered electricity or a documented equipment-level allocation for the same operating period.

- Flow name: alternating current, 35–330 kV, consumption mix to consumers
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: electricity consumed by opening, cleaning, conveying, and blending only; the declared point-of-supply voltage is 35–330 kV and the location of supply is CN; mutually exclusive with the other voltage rows for this process
- UUID status: confirmed by Tiangong direct read; version `01.01.003`; `state_code=100`; Product flow
- Quantity basis: per 1 kg opened cotton output of one declared route/fibre-type stratum
- Unit: kWh
- Value or formula or rule: metered electricity or equipment-level causal allocation
- Range or uncertainty: provisional `reasoned_estimate` screen below; replace with representative submeter or equipment records
- Data source id: `cp_energy_and_services`
- Source id or status: `eu-jrc-txt-bref-2023`; `cp_energy_and_services`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed
- Selected flow: alternating current, 35–330 kV, consumption mix to consumers `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: metered electricity attributable to opening, cleaning, conveying, and blending
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg opened cotton output, separately by route destination and fibre-type stratum
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_services`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional opening/cleaning electricity screening estimate; replace when representative submeter or equipment records are available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 2.00
  - Unit: kWh
  - Basis: per 1 kg opened cotton output for one declared fibre-type stratum
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Opened and cleaned cotton blend transferred to carding (`opened_cleaned_cotton`)

The transfer record shall identify bale mix, fibre type/origin, opening/cleaning line, and destination route.

- Flow name: opened and cleaned cotton of one declared fibre-type stratum
- Direction: Outputs (`outputs`)
- Flow type: Product (`product`)
- Applicability / condition: one separately identified route/fibre-type lot; never an aggregate of materially different strata
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per opening/cleaning lot
- Unit: kg
- Value or formula or rule: measured good output transferred to carding
- Range or uncertainty: foreground lot record required; no category-wide numeric range asserted
- Data source id: `cp_opening_route_records`
- Source id or status: `eu-jrc-txt-bref-2023`; `cp_opening_route_records`; UUID unresolved
- Selected flow: opened and cleaned cotton; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured good output transferred to carding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per opening/cleaning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_opening_route_records`
- Sources: `eu-jrc-txt-bref-2023`

##### Waste flows

###### Cotton plant fragment waste from opening and cleaning (`opening_nonfibrous_trash`)

Weigh cotton plant fragments removed during opening and cleaning. Do not combine them with mineral contamination, foreign manufactured objects, unusable cotton fibre, captured dust, packaging waste, or direct air releases. Add a separate atomic waste row for every other material actually removed.

- Flow name: cotton plant fragment waste from opening and cleaning
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Applicability / condition: when non-fibrous trash is removed
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per 1 kg opened cotton output of the same stratum
- Unit: kg
- Value or formula or rule: measured cotton plant fragment waste mass by treatment destination
- Range or uncertainty: provisional QA screen below; replace with reviewed stratum-specific mass-balance evidence
- Data source id: `cp_waste_and_dust_records`
- Source id or status: `cp_waste_and_dust_records`; UUID unresolved; provisional range is `reasoned_estimate`
- Selected flow: cotton plant fragment waste from opening and cleaning; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured cotton plant fragment waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg opened cotton output of the same stratum
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_dust_records`
- Sources: `eu-jrc-txt-bref-2023`; `osha-1910-1043-cotton-dust`
- Range: Provisional non-fibrous opening-trash QA screen; replace with reviewed stratum-specific mass-balance evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.00
  - Unit: kg
  - Basis: per 1 kg opened cotton output; not a typical or allowed value
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Unusable cotton fibre removed during opening and cleaning (`opening_unusable_cotton_fibre`)

Report only cotton fibre that leaves the foreground system as waste. Internally returned fibre and recovered material transferred as a product require separate product/internal-loop records and shall not be included here.

- Flow name: unusable cotton fibre from opening and cleaning
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Applicability / condition: when cotton fibre is discarded as waste from opening/cleaning
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per 1 kg opened cotton output of the same stratum
- Unit: kg
- Value or formula or rule: measured unusable cotton fibre mass by waste destination, net of documented internal return
- Range or uncertainty: provisional QA screen below; replace with reviewed route/fibre-type mass balances
- Data source id: `cp_waste_and_dust_records`
- Source id or status: `cp_waste_and_dust_records`; UUID unresolved; provisional range is `reasoned_estimate`
- Selected flow: unusable cotton fibre from opening and cleaning; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured unusable fibre mass by waste destination, net of documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg opened cotton output of the same stratum
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_dust_records`
- Sources: `eu-jrc-txt-bref-2023`; `osha-1910-1043-cotton-dust`
- Range: Provisional unusable-cotton-fibre QA screen; replace with reviewed route/fibre-type mass-balance evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.00
  - Unit: kg
  - Basis: per 1 kg opened cotton output; not a typical or allowed value
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Carding and route-required drawing (`carding_drawing`)

#### Inputs

##### Product flows

###### Opened cotton supplied to carding (`carding_cotton_input`)

Record the actual mass entering each carding line and preserve the declared route destination and fibre-type/origin stratum.

- Flow name: opened and cleaned cotton of one declared fibre-type stratum
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: one separately identified route/fibre-type lot; never an aggregate of materially different strata
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per 1 kg carded cotton output/intermediate of the same stratum
- Unit: kg
- Value or formula or rule: measured cotton mass entering carding
- Range or uncertainty: foreground lot record required; no category-wide numeric range asserted
- Data source id: `cp_carding_drawing_records`
- Source id or status: `osha-1910-262-textiles`; `eu-jrc-txt-bref-2023`; `cp_carding_drawing_records`; UUID unresolved
- Selected flow: opened and cleaned cotton; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured cotton mass entering carding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg carded cotton output/intermediate of the same stratum
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carding_drawing_records`
- Sources: `osha-1910-262-textiles`; `eu-jrc-txt-bref-2023`

###### Electricity for carding, drawing, suction, and transfer below 1 kV (`carding_electricity_lt1kv`)

Include line drives, route-required drawing, attributable suction, and material transfer; prevent double counting with site services.

- Flow name: alternating current, below 1 kV, consumption mix
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: electricity consumed by carding, route-required drawing, suction, and transfer only; the declared point-of-supply voltage is below 1 kV and the location of supply is CN; mutually exclusive with the other voltage rows for this process
- UUID status: confirmed by Tiangong direct read; version `01.01.003`; `state_code=100`; Product flow
- Quantity basis: per 1 kg carded cotton output/intermediate of one declared route/fibre-type stratum
- Unit: kWh
- Value or formula or rule: metered electricity or equipment-level causal allocation
- Range or uncertainty: provisional `reasoned_estimate` screen below; replace with representative submeter or equipment records
- Data source id: `cp_energy_and_services`
- Source id or status: `eu-jrc-txt-bref-2023`; `cp_energy_and_services`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed
- Selected flow: alternating current, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: metered or documented equipment-allocated electricity for carding and route-required drawing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg carded cotton output/intermediate, separately by route destination and fibre type
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_services`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional carding/drawing electricity screening estimate; replace with representative submeter or equipment records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 2.00
  - Unit: kWh
  - Basis: per 1 kg carded cotton output/intermediate for one declared stratum
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Electricity for carding, drawing, suction, and transfer at 1–35 kV (`carding_electricity_1_35kv`)

Include line drives, route-required drawing, attributable suction, and material transfer; prevent double counting with site services.

- Flow name: alternating current, 1–35 kV, consumption mix
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: electricity consumed by carding, route-required drawing, suction, and transfer only; the declared point-of-supply voltage is 1–35 kV and the location of supply is CN; mutually exclusive with the other voltage rows for this process
- UUID status: confirmed by Tiangong direct read; version `01.01.003`; `state_code=100`; Product flow
- Quantity basis: per 1 kg carded cotton output/intermediate of one declared route/fibre-type stratum
- Unit: kWh
- Value or formula or rule: metered electricity or equipment-level causal allocation
- Range or uncertainty: provisional `reasoned_estimate` screen below; replace with representative submeter or equipment records
- Data source id: `cp_energy_and_services`
- Source id or status: `eu-jrc-txt-bref-2023`; `cp_energy_and_services`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed
- Selected flow: alternating current, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: metered or documented equipment-allocated electricity for carding and route-required drawing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg carded cotton output/intermediate, separately by route destination and fibre type
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_services`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional carding/drawing electricity screening estimate; replace with representative submeter or equipment records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 2.00
  - Unit: kWh
  - Basis: per 1 kg carded cotton output/intermediate for one declared stratum
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Electricity for carding, drawing, suction, and transfer at 35–330 kV (`carding_electricity_35_330kv`)

Include line drives, route-required drawing, attributable suction, and material transfer; prevent double counting with site services.

- Flow name: alternating current, 35–330 kV, consumption mix to consumers
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: electricity consumed by carding, route-required drawing, suction, and transfer only; the declared point-of-supply voltage is 35–330 kV and the location of supply is CN; mutually exclusive with the other voltage rows for this process
- UUID status: confirmed by Tiangong direct read; version `01.01.003`; `state_code=100`; Product flow
- Quantity basis: per 1 kg carded cotton output/intermediate of one declared route/fibre-type stratum
- Unit: kWh
- Value or formula or rule: metered electricity or equipment-level causal allocation
- Range or uncertainty: provisional `reasoned_estimate` screen below; replace with representative submeter or equipment records
- Data source id: `cp_energy_and_services`
- Source id or status: `eu-jrc-txt-bref-2023`; `cp_energy_and_services`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed
- Selected flow: alternating current, 35–330 kV, consumption mix to consumers `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: metered or documented equipment-allocated electricity for carding and route-required drawing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg carded cotton output/intermediate, separately by route destination and fibre type
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_services`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional carding/drawing electricity screening estimate; replace with representative submeter or equipment records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 2.00
  - Unit: kWh
  - Basis: per 1 kg carded cotton output/intermediate for one declared stratum
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Carded cotton output or combing intermediate (`carded_cotton_output`)

For `route=carded`, this is the saleable reference product when no later delivery-state process applies. For `route=combed`, it is an intermediate and shall not be counted as an additional final product.

- Flow name: Cotton, carded or combed
- Direction: Outputs (`outputs`)
- Flow type: Product (`product`)
- Applicability / condition: final reference product only for `route=carded`; internal intermediate only for `route=combed`
- UUID status: confirmed generic product flow
- Quantity basis: per carding lot and per 1 kg final product of the declared route
- Unit: kg
- Value or formula or rule: measured good carded output; fixed to 1 kg only when it is the delivered reference product
- Range or uncertainty: foreground measurement required; no category-wide numeric range asserted
- Data source id: `cp_carding_drawing_records`
- Source id or status: `un-cpc-3-2025`; `osha-1910-262-textiles`; confirmed UUID `93976740-418a-40e3-8901-dbc34f0acdc6`
- Selected flow: Cotton, carded or combed `93976740-418a-40e3-8901-dbc34f0acdc6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured good carded output; final reference amount is fixed to 1 kg only when this is the delivered product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per carding lot and per 1 kg final product of the declared route
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carding_drawing_records`
- Sources: `osha-1910-262-textiles`; `un-cpc-3-2025`

##### Waste flows

###### Unusable short cotton fibre from carding (`card_short_fibre_waste`)

Report cotton fibre that leaves the foreground system as waste. Internally returned or saleable recovered fibre is excluded from this waste row.

- Flow name: unusable short cotton fibre from carding
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Applicability / condition: when short cotton fibre is discarded from carding/drawing
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per 1 kg carded cotton output/intermediate of the same stratum
- Unit: kg
- Value or formula or rule: measured short-fibre waste mass by destination, net of documented internal return
- Range or uncertainty: provisional QA screen below; replace with reviewed route/fibre-type mass-balance evidence
- Data source id: `cp_waste_and_dust_records`
- Source id or status: `cp_waste_and_dust_records`; UUID unresolved; provisional range is `reasoned_estimate`
- Selected flow: unusable short cotton fibre from carding; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured short-fibre waste mass by destination, net of documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg carded cotton output/intermediate of the same stratum
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_dust_records`
- Sources: `osha-1910-1043-cotton-dust`
- Range: Provisional card short-fibre waste QA screen; replace with reviewed route/fibre-type mass-balance evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.00
  - Unit: kg
  - Basis: per 1 kg carded cotton output/intermediate; not a typical or allowed value
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Captured cotton dust from carding and drawing (`carding_captured_cotton_dust`)

Weigh dust collected by carding/drawing extraction systems separately from short-fibre waste and from particulate released to air.

- Flow name: captured cotton dust from carding and drawing
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Applicability / condition: when dust is captured by carding/drawing extraction or housekeeping systems
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per 1 kg carded cotton output/intermediate of the same stratum
- Unit: kg
- Value or formula or rule: measured captured cotton dust mass by collector and waste destination
- Range or uncertainty: provisional QA screen below; replace with collector-specific weighing records
- Data source id: `cp_waste_and_dust_records`
- Source id or status: `osha-1910-1043-cotton-dust`; `cp_waste_and_dust_records`; UUID unresolved; provisional range is `reasoned_estimate`
- Selected flow: captured cotton dust from carding and drawing; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured captured cotton dust mass by collector and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg carded cotton output/intermediate of the same stratum
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_dust_records`
- Sources: `osha-1910-1043-cotton-dust`
- Range: Provisional captured cotton-dust QA screen; replace with collector-specific weighing records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.00
  - Unit: kg
  - Basis: per 1 kg carded cotton output/intermediate; not a typical or allowed value
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Lap/sliver preparation, combing, and post-combing drawing (`combing_preparation`)

#### Inputs

##### Product flows

###### Carded cotton intermediate supplied to combing preparation (`combing_cotton_input`)

This row exists only for `route=combed`; retain the originating carding lot and fibre-type/origin stratum.

- Flow name: carded cotton intermediate of one declared fibre-type stratum
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: `route=combed` only; one separately identified fibre-type lot
- UUID status: unresolved; requires foreground mapping as an intermediate
- Quantity basis: per 1 kg combed cotton output of the same stratum
- Unit: kg
- Value or formula or rule: measured carded cotton transferred into lap/sliver preparation and combing
- Range or uncertainty: foreground lot record required; no category-wide numeric range asserted
- Data source id: `cp_combing_records`
- Source id or status: `osha-1910-262-textiles`; `eu-jrc-txt-bref-2023`; `cp_combing_records`; UUID unresolved
- Selected flow: carded cotton intermediate; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured carded cotton transferred into lap/sliver preparation and combing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg combed cotton output of the same stratum
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_combing_records`
- Sources: `osha-1910-262-textiles`; `eu-jrc-txt-bref-2023`

###### Electricity for combing preparation, combing, drawing, and suction below 1 kV (`combing_electricity_lt1kv`)

Record this electricity only for the combed route and separately from carding energy.

- Flow name: alternating current, below 1 kV, consumption mix
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: `route=combed` only; electricity consumed by combing preparation, combing, post-combing drawing, suction, and transfer; the declared point-of-supply voltage is below 1 kV and the location of supply is CN; mutually exclusive with the other voltage rows for this process
- UUID status: confirmed by Tiangong direct read; version `01.01.003`; `state_code=100`; Product flow
- Quantity basis: per 1 kg combed cotton output of one declared fibre-type stratum
- Unit: kWh
- Value or formula or rule: metered electricity or equipment-level causal allocation
- Range or uncertainty: provisional `reasoned_estimate` screen below; replace with representative combing-line records
- Data source id: `cp_energy_and_services`
- Source id or status: `eu-jrc-txt-bref-2023`; `cp_energy_and_services`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed
- Selected flow: alternating current, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: metered or documented equipment-allocated electricity for combing preparation, combing, post-combing drawing, suction, and transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg combed cotton output of the declared fibre-type stratum
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_services`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional combing-route electricity screening estimate; replace with representative combing-line records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 3.00
  - Unit: kWh
  - Basis: per 1 kg combed cotton output for one declared fibre-type stratum
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Electricity for combing preparation, combing, drawing, and suction at 1–35 kV (`combing_electricity_1_35kv`)

Record this electricity only for the combed route and separately from carding energy.

- Flow name: alternating current, 1–35 kV, consumption mix
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: `route=combed` only; electricity consumed by combing preparation, combing, post-combing drawing, suction, and transfer; the declared point-of-supply voltage is 1–35 kV and the location of supply is CN; mutually exclusive with the other voltage rows for this process
- UUID status: confirmed by Tiangong direct read; version `01.01.003`; `state_code=100`; Product flow
- Quantity basis: per 1 kg combed cotton output of one declared fibre-type stratum
- Unit: kWh
- Value or formula or rule: metered electricity or equipment-level causal allocation
- Range or uncertainty: provisional `reasoned_estimate` screen below; replace with representative combing-line records
- Data source id: `cp_energy_and_services`
- Source id or status: `eu-jrc-txt-bref-2023`; `cp_energy_and_services`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed
- Selected flow: alternating current, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: metered or documented equipment-allocated electricity for combing preparation, combing, post-combing drawing, suction, and transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg combed cotton output of the declared fibre-type stratum
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_services`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional combing-route electricity screening estimate; replace with representative combing-line records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 3.00
  - Unit: kWh
  - Basis: per 1 kg combed cotton output for one declared fibre-type stratum
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Electricity for combing preparation, combing, drawing, and suction at 35–330 kV (`combing_electricity_35_330kv`)

Record this electricity only for the combed route and separately from carding energy.

- Flow name: alternating current, 35–330 kV, consumption mix to consumers
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: `route=combed` only; electricity consumed by combing preparation, combing, post-combing drawing, suction, and transfer; the declared point-of-supply voltage is 35–330 kV and the location of supply is CN; mutually exclusive with the other voltage rows for this process
- UUID status: confirmed by Tiangong direct read; version `01.01.003`; `state_code=100`; Product flow
- Quantity basis: per 1 kg combed cotton output of one declared fibre-type stratum
- Unit: kWh
- Value or formula or rule: metered electricity or equipment-level causal allocation
- Range or uncertainty: provisional `reasoned_estimate` screen below; replace with representative combing-line records
- Data source id: `cp_energy_and_services`
- Source id or status: `eu-jrc-txt-bref-2023`; `cp_energy_and_services`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed
- Selected flow: alternating current, 35–330 kV, consumption mix to consumers `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: metered or documented equipment-allocated electricity for combing preparation, combing, post-combing drawing, suction, and transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg combed cotton output of the declared fibre-type stratum
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_services`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional combing-route electricity screening estimate; replace with representative combing-line records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 3.00
  - Unit: kWh
  - Basis: per 1 kg combed cotton output for one declared fibre-type stratum
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Combed cotton reference product (`combed_cotton_output`)

The output shall be measured after the final included drawing/conditioning step and before spinning.

- Flow name: Cotton, carded or combed
- Direction: Outputs (`outputs`)
- Flow type: Product (`product`)
- Applicability / condition: final reference product for `route=combed` only
- UUID status: confirmed generic product flow
- Quantity basis: per combing production lot and fixed 1 kg reference amount
- Unit: kg
- Value or formula or rule: measured saleable combed cotton output normalized to 1 kg
- Range or uncertainty: foreground measurement required; no category-wide numeric range asserted
- Data source id: `cp_combing_records`
- Source id or status: `un-cpc-3-2025`; `osha-1910-262-textiles`; confirmed UUID `93976740-418a-40e3-8901-dbc34f0acdc6`
- Selected flow: Cotton, carded or combed `93976740-418a-40e3-8901-dbc34f0acdc6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured saleable combed cotton output normalized to the fixed 1 kg reference amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per combing production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_combing_records`
- Sources: `un-cpc-3-2025`; `osha-1910-262-textiles`

###### Recovered comber noils with functional value (`comber_noils_product`)

Use this product-flow row only when noils are deliberately recovered and transferred as a product with documented function and destination. Otherwise use the mutually exclusive waste row.

- Flow name: recovered cotton comber noils
- Direction: Outputs (`outputs`)
- Flow type: Product (`product`)
- Applicability / condition: `route=combed` and noils have documented product status; mutually exclusive with `comber_noils_waste`
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per 1 kg combed cotton output of the same lot and fibre-type stratum
- Unit: kg
- Value or formula or rule: measured recovered noils transferred as a product
- Range or uncertainty: provisional QA screen below; replace with reviewed combing-lot mass balances
- Data source id: `cp_combing_records`
- Source id or status: `osha-1910-262-textiles`; `eu-pef-2021-2279`; `cp_combing_records`; UUID unresolved; provisional range is `reasoned_estimate`
- Selected flow: recovered cotton comber noils; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured recovered noils transferred as a product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg combed cotton output of the same lot and fibre-type stratum
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_combing_records`
- Sources: `osha-1910-262-textiles`; `eu-pef-2021-2279`
- Range: Provisional noils-product QA screen; replace with reviewed combing-lot mass balances
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.00
  - Unit: kg
  - Basis: per 1 kg combed cotton output; not a typical or allowed value
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Comber noils and rejects consigned as waste (`comber_noils_waste`)

Use this row only when the material has no product status in the reported transaction and is sent to a waste-management route; do not duplicate the product-flow row.

- Flow name: cotton comber noils consigned as waste
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Applicability / condition: `route=combed` and noils have waste status; mutually exclusive with `comber_noils_product`
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per 1 kg combed cotton output of the same lot and fibre-type stratum
- Unit: kg
- Value or formula or rule: measured noils mass by waste destination
- Range or uncertainty: provisional QA screen below; replace with reviewed combing-lot mass balances
- Data source id: `cp_combing_records`
- Source id or status: `osha-1910-262-textiles`; `cp_combing_records`; UUID unresolved; provisional range is `reasoned_estimate`
- Selected flow: cotton comber noils waste; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured noils/reject mass by waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg combed cotton output of the same lot and fibre-type stratum
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_combing_records`
- Sources: `osha-1910-262-textiles`
- Range: Provisional noils-waste QA screen; replace with reviewed combing-lot mass balances
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.00
  - Unit: kg
  - Basis: per 1 kg combed cotton output; mutually exclusive with recovered noils reported as product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Attributable site services, dust control, inspection, and packaging (`site_services_packaging`)

#### Inputs

##### Product flows

###### Shared electricity not already assigned to production equipment below 1 kV (`shared_electricity_lt1kv`)

Record only attributable lighting, HVAC/humidification, compressed air, dust collection, inspection, and packaging electricity not already included in equipment rows.

- Flow name: alternating current, below 1 kV, consumption mix
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: residual electricity for the listed shared services only; no steam, fuel, compressed-air pseudo-flow, or refrigerant is included in this row; the declared point-of-supply voltage is below 1 kV and the location of supply is CN; mutually exclusive with the other voltage rows for this process
- UUID status: confirmed by Tiangong direct read; version `01.01.003`; `state_code=100`; Product flow
- Quantity basis: per 1 kg delivered product, separately by route and fibre-type stratum
- Unit: kWh
- Value or formula or rule: submetered electricity or causal allocation using operating time, airflow, or equipment power
- Range or uncertainty: provisional `reasoned_estimate` screen below; replace with representative submeter and allocation evidence
- Data source id: `cp_energy_and_services`
- Source id or status: `eu-jrc-txt-bref-2023`; `cp_energy_and_services`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed
- Selected flow: alternating current, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: submetered shared electricity or documented allocation using operating time, airflow, power, or another causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered product, separately by route and fibre-type stratum
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_services`
- Sources: `eu-jrc-txt-bref-2023`; `eu-pef-2021-2279`
- Range: Provisional shared-electricity screening estimate; replace with representative submeter and causal-allocation evidence
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2.00
  - Unit: kWh
  - Basis: per 1 kg delivered product for one declared route/fibre-type stratum
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Shared electricity not already assigned to production equipment at 1–35 kV (`shared_electricity_1_35kv`)

Record only attributable lighting, HVAC/humidification, compressed air, dust collection, inspection, and packaging electricity not already included in equipment rows.

- Flow name: alternating current, 1–35 kV, consumption mix
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: residual electricity for the listed shared services only; no steam, fuel, compressed-air pseudo-flow, or refrigerant is included in this row; the declared point-of-supply voltage is 1–35 kV and the location of supply is CN; mutually exclusive with the other voltage rows for this process
- UUID status: confirmed by Tiangong direct read; version `01.01.003`; `state_code=100`; Product flow
- Quantity basis: per 1 kg delivered product, separately by route and fibre-type stratum
- Unit: kWh
- Value or formula or rule: submetered electricity or causal allocation using operating time, airflow, or equipment power
- Range or uncertainty: provisional `reasoned_estimate` screen below; replace with representative submeter and allocation evidence
- Data source id: `cp_energy_and_services`
- Source id or status: `eu-jrc-txt-bref-2023`; `cp_energy_and_services`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed
- Selected flow: alternating current, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: submetered shared electricity or documented allocation using operating time, airflow, power, or another causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered product, separately by route and fibre-type stratum
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_services`
- Sources: `eu-jrc-txt-bref-2023`; `eu-pef-2021-2279`
- Range: Provisional shared-electricity screening estimate; replace with representative submeter and causal-allocation evidence
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2.00
  - Unit: kWh
  - Basis: per 1 kg delivered product for one declared route/fibre-type stratum
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Shared electricity not already assigned to production equipment at 35–330 kV (`shared_electricity_35_330kv`)

Record only attributable lighting, HVAC/humidification, compressed air, dust collection, inspection, and packaging electricity not already included in equipment rows.

- Flow name: alternating current, 35–330 kV, consumption mix to consumers
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: residual electricity for the listed shared services only; no steam, fuel, compressed-air pseudo-flow, or refrigerant is included in this row; the declared point-of-supply voltage is 35–330 kV and the location of supply is CN; mutually exclusive with the other voltage rows for this process
- UUID status: confirmed by Tiangong direct read; version `01.01.003`; `state_code=100`; Product flow
- Quantity basis: per 1 kg delivered product, separately by route and fibre-type stratum
- Unit: kWh
- Value or formula or rule: submetered electricity or causal allocation using operating time, airflow, or equipment power
- Range or uncertainty: provisional `reasoned_estimate` screen below; replace with representative submeter and allocation evidence
- Data source id: `cp_energy_and_services`
- Source id or status: `eu-jrc-txt-bref-2023`; `cp_energy_and_services`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed
- Selected flow: alternating current, 35–330 kV, consumption mix to consumers `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: submetered shared electricity or documented allocation using operating time, airflow, power, or another causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered product, separately by route and fibre-type stratum
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_services`
- Sources: `eu-jrc-txt-bref-2023`; `eu-pef-2021-2279`
- Range: Provisional shared-electricity screening estimate; replace with representative submeter and causal-allocation evidence
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2.00
  - Unit: kWh
  - Basis: per 1 kg delivered product for one declared route/fibre-type stratum
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water for humidification and fibre conditioning (`conditioning_water`)

Include only water consumed or discharged by the declared process; do not infer wet processing for a normally dry preparation route.

- Flow name: Process Water
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: only when metered water is used for humidification or fibre conditioning; excludes wet pretreatment
- UUID status: confirmed by Tiangong direct read; version `01.01.001`; `state_code=100`; Product flow
- Quantity basis: per 1 kg delivered product for the served route/fibre-type stratum
- Unit: kg
- Value or formula or rule: metered makeup water less measured return where applicable
- Range or uncertainty: provisional `reasoned_estimate` screen below; replace with representative meter records
- Data source id: `cp_water_auxiliary_packaging`
- Source id or status: `eu-jrc-txt-bref-2023`; `cp_water_auxiliary_packaging`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed; provisional range is `reasoned_estimate`
- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered makeup water less measured return where applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered product for the served route/fibre-type stratum
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_auxiliary_packaging`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional dry-route conditioning-water screening estimate; replace with representative meter records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1.00
  - Unit: kg
  - Basis: per 1 kg delivered product; excludes wet pretreatment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Polyethylene film packaging for delivered product (`polyethylene_film_packaging`)

Record polyethylene film/bag only when it crosses the facility gate with the product; do not combine it with paper, wood, or steel packaging.

- Flow name: Polyethylene film
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: when PE film or bags are used for the delivered product
- UUID status: confirmed by Tiangong direct read; version `01.01.001`; `state_code=100`; Product flow
- Quantity basis: per 1 kg delivered product
- Unit: kg
- Value or formula or rule: measured or purchase-reconciled PE film/bag mass assigned to the shipped lot
- Range or uncertainty: provisional packaging screen below; replace with bill-of-materials or shipment records
- Data source id: `cp_water_auxiliary_packaging`
- Source id or status: `cp_water_auxiliary_packaging`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed; provisional range is `reasoned_estimate`
- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or purchase-reconciled PE film/bag mass assigned to the shipped product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg delivered product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_auxiliary_packaging`
- Sources: `eu-pef-2021-2279`
- Range: Provisional PE-film packaging-mass screening estimate; replace with bill-of-materials or shipment records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg
  - Basis: per 1 kg delivered product; zero applies only to unpackaged bulk delivery
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Corrugated paperboard packaging for delivered product (`corrugated_paperboard_packaging`)

Record corrugated paperboard only when used; do not combine it with polyethylene, wood, or steel packaging.

- Flow name: Corrugated cardboard
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: when corrugated paperboard is used for the delivered product and matches the verified platform identity: type C, E, or F; fibre content at least 80%; multi-layer; contains recycled material; and recyclable. Otherwise, add or map a separate atomic row for the actual board.
- UUID status: confirmed by Tiangong direct read; version `01.01.001`; `state_code=100`; Product flow
- Quantity basis: per 1 kg delivered product
- Unit: kg
- Value or formula or rule: measured or purchase-reconciled corrugated paperboard mass assigned to the shipped lot
- Range or uncertainty: no category-wide numeric range asserted; bill-of-materials or shipment record required
- Data source id: `cp_water_auxiliary_packaging`
- Source id or status: `cp_water_auxiliary_packaging`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed; foreground record required
- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or purchase-reconciled corrugated paperboard mass assigned to the shipped product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg delivered product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_auxiliary_packaging`
- Sources: `eu-pef-2021-2279`

###### Wooden pallet for delivered product (`wooden_pallet_packaging`)

Record pallet mass and reuse cycle only when a wooden pallet crosses the gate with the product.

- Flow name: Wooden pallets
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: when a wooden pallet is used for the delivered product
- UUID status: confirmed by Tiangong direct read; version `01.01.001`; `state_code=100`; Product flow
- Quantity basis: per 1 kg delivered product and declared pallet reuse cycle
- Unit: kg
- Value or formula or rule: pallet mass divided by documented loaded product mass and verified reuse cycles where applicable
- Range or uncertainty: no category-wide numeric range asserted; shipment and reuse records required
- Data source id: `cp_water_auxiliary_packaging`
- Source id or status: `cp_water_auxiliary_packaging`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed; foreground calculation required
- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: pallet mass assigned by loaded product mass and documented reuse cycles
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg delivered product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_auxiliary_packaging`
- Sources: `eu-pef-2021-2279`

###### Steel bale strap for delivered product (`steel_bale_strap_packaging`)

Record steel straps/ties only when they cross the facility gate with the delivered product.

- Flow name: Steel baling band
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Applicability / condition: when steel bale straps or ties are used for the delivered product and match the verified platform composition of 99% Fe and 1% C. Otherwise, add or map a separate atomic row for the actual band.
- UUID status: confirmed by Tiangong direct read; version `01.01.001`; `state_code=100`; Product flow
- Quantity basis: per 1 kg delivered product
- Unit: kg
- Value or formula or rule: measured or purchase-reconciled steel strap/tie mass assigned to the shipped lot
- Range or uncertainty: no category-wide numeric range asserted; bill-of-materials or shipment record required
- Data source id: `cp_water_auxiliary_packaging`
- Source id or status: `cp_water_auxiliary_packaging`; flow-hybrid-search candidate verified by Tiangong CLI `flow get`; UUID confirmed; foreground record required
- Selected flow: Steel baling band `56fe4f71-b594-4b55-8553-c87f2516737d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or purchase-reconciled steel strap/tie mass assigned to the shipped product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg delivered product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_auxiliary_packaging`
- Sources: `eu-pef-2021-2279`

#### Outputs

##### Elementary flows

###### Direct cotton particulate released to air (`cotton_particulate_to_air`)

Report measured or mass-balance-derived environmental releases by point source and fugitive route. Do not substitute occupational exposure concentration for an emission mass.

- Flow name: cotton particulate matter released to air
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Applicability / condition: direct point-source or fugitive environmental release from included cotton handling
- UUID status: unresolved; requires foreground elementary-flow mapping
- Quantity basis: per 1 kg delivered product for the monitored route/fibre-type stratum
- Unit: kg
- Value or formula or rule: measured emission or concentration × airflow × time with method-consistent corrections
- Range or uncertainty: provisional QA screen below; replace with environmental emission measurements and capture data
- Data source id: `cp_environmental_dust_release`
- Source id or status: `osha-1910-1043-cotton-dust`; `eu-jrc-txt-bref-2023`; `cp_environmental_dust_release`; UUID unresolved; provisional range is `reasoned_estimate`
- Selected flow: particulate matter to air from cotton handling; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: environmental emission measurement or released dust calculated from inlet loading, capture efficiency, airflow, and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered product for the monitored route/fibre-type stratum
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_environmental_dust_release`
- Sources: `osha-1910-1043-cotton-dust`; `eu-jrc-txt-bref-2023`
- Range: Provisional particulate-release QA screen; replace with environmental emission measurements and documented capture data
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg
  - Basis: per 1 kg delivered product; not an occupational limit or allowed emission
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Waste polyethylene film (`waste_polyethylene_film`)

Report discarded polyethylene film/bag separately by actual recycling or treatment route.

- Flow name: waste polyethylene film
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Applicability / condition: when PE packaging becomes waste inside the foreground boundary
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per 1 kg delivered product
- Unit: kg
- Value or formula or rule: measured waste PE film/bag mass net of documented onsite reuse
- Range or uncertainty: provisional waste-packaging screen below; replace with representative waste-ticket and packaging-balance records
- Data source id: `cp_water_auxiliary_packaging`
- Source id or status: `cp_water_auxiliary_packaging`; UUID unresolved; provisional range is `reasoned_estimate`
- Selected flow: waste polyethylene film; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured waste PE film/bag mass net of documented onsite reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_auxiliary_packaging`
- Sources: `eu-pef-2021-2279`
- Range: Provisional waste-PE-film QA screen; replace with representative waste-ticket and packaging-balance records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg
  - Basis: per 1 kg delivered product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Waste corrugated paperboard (`waste_corrugated_paperboard`)

Report discarded corrugated paperboard separately by actual recycling or treatment route.

- Flow name: waste corrugated paperboard
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Applicability / condition: when corrugated paperboard becomes waste inside the foreground boundary
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per 1 kg delivered product
- Unit: kg
- Value or formula or rule: measured waste corrugated paperboard mass net of documented onsite reuse
- Range or uncertainty: no category-wide numeric range asserted; waste-ticket or mass-balance record required
- Data source id: `cp_water_auxiliary_packaging`
- Source id or status: `cp_water_auxiliary_packaging`; UUID unresolved; foreground record required
- Selected flow: waste corrugated paperboard; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured waste corrugated paperboard mass net of documented onsite reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_auxiliary_packaging`
- Sources: `eu-pef-2021-2279`

###### Discarded wooden pallet (`discarded_wooden_pallet`)

Report wooden pallets discarded inside the boundary separately from reusable pallets still in circulation.

- Flow name: discarded wooden pallet
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Applicability / condition: when a wooden pallet is discarded inside the foreground boundary
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per 1 kg delivered product
- Unit: kg
- Value or formula or rule: measured discarded pallet mass assigned to the served product lot
- Range or uncertainty: no category-wide numeric range asserted; waste and pallet-cycle records required
- Data source id: `cp_water_auxiliary_packaging`
- Source id or status: `cp_water_auxiliary_packaging`; UUID unresolved; foreground record required
- Selected flow: discarded wooden pallet; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured discarded pallet mass assigned to the served product lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_auxiliary_packaging`
- Sources: `eu-pef-2021-2279`

###### Waste steel bale strap (`waste_steel_bale_strap`)

Report discarded steel bale straps/ties separately by actual recycling or treatment route.

- Flow name: waste steel bale strap
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Applicability / condition: when steel bale straps or ties become waste inside the foreground boundary
- UUID status: unresolved; requires foreground mapping
- Quantity basis: per 1 kg delivered product
- Unit: kg
- Value or formula or rule: measured waste steel strap/tie mass net of documented onsite reuse
- Range or uncertainty: no category-wide numeric range asserted; waste-ticket or mass-balance record required
- Data source id: `cp_water_auxiliary_packaging`
- Source id or status: `cp_water_auxiliary_packaging`; UUID unresolved; foreground record required
- Selected flow: waste steel bale strap; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured waste steel strap/tie mass net of documented onsite reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_auxiliary_packaging`
- Sources: `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide_first` | multi_route_and_multi_fibre_production | Avoid allocation by subdividing carded and combed routes, materially different cotton fibre types/origins, and separately metered operations. Retain the disaggregated foreground records. | `eu-pef-2021-2279` |
| `alloc_internal_return` | internally_returned_fibre | Treat fibre returned to the same production system as an internal loop: subtract it from gross waste and do not create a second product or avoided-burden credit. Record loop mass and any additional processing energy. | `eu-pef-2021-2279` |
| `alloc_noils_status` | comber_noils_and_recovered_fibre | Determine and document product or waste status from the actual transaction, function, and destination. Use mutually exclusive inventory rows and do not count the same mass as both product and waste. | `osha-1910-262-textiles`; `eu-pef-2021-2279` |
| `alloc_physical_then_economic` | inseparable_coproducts | When subdivision cannot resolve burdens, use a documented physical relationship only when it reflects the causal process. Otherwise use economic allocation based on a consistent representative price period and disclose a sensitivity result. Never use an unexplained fixed split. | `eu-pef-2021-2279` |
| `alloc_shared_services` | electricity_hvac_dust_collection_and_packaging | Allocate shared services with causal drivers such as metered consumption, equipment power and runtime, airflow, processed mass, or packaging bill of materials. Production mass alone is allowed only when no better driver exists and its limitation is disclosed. | `eu-pef-2021-2279`; `eu-jrc-txt-bref-2023` |
| `alloc_recycling_boundary` | recovered_inputs_and_outputs | Record recovered cotton inputs and recovered outputs at the foreground boundary without an avoided-burden credit. A broader life-cycle study may apply its declared recycling method outside this gate-to-gate dataset, with no double counting. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_quality` | `receiving_conditioning` | cotton feedstock and conditioned transfer | scale ticket; bale/lot record; moisture test; supplier/classing certificate | lot id; bale ids; route destination; fibre type/origin; virgin/recycled status; input presentation; gross/tare/net mass; moisture; commercial-mass rule; grade/specification; quality fields | calibrated scale plus documented sampling/testing method | kg; %; declared quality units | every received lot and transfer | same production period as reference output | all feedstock lots contributing to the dataset | retain lot-level strata; aggregate only within equivalent route/fibre-type/mass-basis strata | calibration; sampling plan; chain of custody; supplier/classing record; moisture method |
| `cp_opening_route_records` | `opening_cleaning_blending` | opened cotton and rejects | production order; feeder/scale record; waste ticket | lot ids; equipment line; fibre type/origin; destination route; input mass; opened output mass; reject mass; internal return; runtime | reconcile line records and calibrated mass measurements | kg; h | each lot or production order | same production period as reference output | every included opening/cleaning line | mass-weight only equivalent strata; keep carded/combed destinations and fibre types separate | calibration; route traceability; material reconciliation; waste destination |
| `cp_carding_drawing_records` | `carding_drawing` | carded output/intermediate and card waste | production order; can/sliver mass; machine record; waste ticket | lot id; card/drawing line; destination route; fibre type/origin; input; output; internal return; waste class; runtime; quality checks | calibrated mass records reconciled to machine/transfer records | kg; h; declared quality units | each lot or production order | same production period as reference output | all included carding and drawing lines | retain route/fibre-type strata; do not treat combing intermediate as a second final product | calibration; mass balance; line traceability; quality record |
| `cp_combing_records` | `combing_preparation` | combed output, recovered noils product, or noils waste | production order; lap/sliver records; scale ticket; destination document | originating card lot; fibre type/origin; input mass; combed output; noils; other rejects; product/waste status; destination; runtime; quality checks | reconcile combing-line mass and transfer records | kg; h; declared quality units | each combed lot | same production period as reference output | all included combing preparation, combing, and post-drawing equipment | no carded-route aggregation; recovered noils product and waste rows are mutually exclusive | calibration; lot linkage; mass balance; destination/status evidence; quality record |
| `cp_energy_and_services` | `opening_cleaning_blending`; `carding_drawing`; `combing_preparation`; `site_services_packaging` | equipment and shared energy | meter; invoice; equipment power/runtime; fuel record | meter id; carrier; start/end readings; losses; generation; grid/supplier mix; equipment power; runtime; served process; allocation driver | submeter preferred; otherwise documented causal engineering allocation | kWh; MJ; native fuel unit | continuous or shift readings; monthly invoice reconciliation | representative period aligned to product records | all equipment and shared services inside boundary | assign directly first; allocate residual shared use causally; keep route/fibre-type strata | meter calibration; invoice reconciliation; allocation worksheet; conversion factor source |
| `cp_waste_and_dust_records` | `opening_cleaning_blending`; `carding_drawing` | rejects, captured fibre, and dust | scale; collection-container log; waste transfer ticket | source process; material class; gross/tare/net mass; internal return; product recovery; waste destination; moisture basis | weigh each removal or representative container with reconciliation | kg | each removal or shift; monthly reconciliation | same production period as reference output | every included line and dust collector | internal returns netted once; external destinations kept separate | scale calibration; container tare; transfer documentation; material classification |
| `cp_water_auxiliary_packaging` | `site_services_packaging` | water, auxiliaries, product packaging, and packaging waste | meter; purchase record; formulation; bill of materials; shipment; waste ticket | water readings; auxiliary identity and mass; packaging material and mass; reusable cycles; shipped mass; packaging waste and destination | direct meter/weight or purchase-stock reconciliation | kg; m3; item count | per lot when possible; monthly reconciliation | representative period aligned to product records | all included utilities and packaging | material-specific balance; causal allocation to served routes/products | meter/scale calibration; invoice; stock balance; bill of materials; waste ticket |
| `cp_environmental_dust_release` | `site_services_packaging` | environmental particulate release | stack/fugitive test; airflow; collector record; maintenance log | release point; method; concentration; airflow; duration; capture efficiency; inlet/outlet loading; downtime; served process; occupational-monitoring flag | approved environmental emission method or documented mass balance; occupational samples retained separately | kg; mg/m3; m3/h; h | legally required interval and after material process/control change; otherwise representative campaign | same production period as reference output | all relevant release points and fugitive routes | calculate release by route/fibre-type operating share only with documented causal data | method report; calibration; detection limit; airflow record; collector inspection; explicit non-use of occupational PEL as emission factor |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground amounts | normalized amount = stratum amount / delivered reference-product mass on the same declared mass basis | route/fibre-type amount; delivered output mass; moisture/commercial-mass conversion | amount per 1 kg reference product | `iso-6741-1-1989` |
| `calc_process_mass_balance` | each material process | input cotton + other mass inputs = good transfer/output + externally transferred coproducts + wastes + measured releases + documented inventory change; report residual separately | calibrated input/output/waste masses; moisture basis; stock change | process residual and reconciliation percentage |  |
| `calc_route_energy` | equipment and shared energy | direct meter assignment first; residual shared energy = shared total × documented causal driver share | meter readings; runtime/power/airflow or other causal driver; output mass by stratum | kWh or MJ per route/fibre-type stratum | `eu-pef-2021-2279`; `eu-jrc-txt-bref-2023` |
| `calc_noils_allocation` | recovered noils product | after subdivision, allocated burden follows the documented physical causal relationship; if none is defensible, use consistent-period economic values and report sensitivity | process burdens; good output/noils masses; causal parameter or representative prices | allocated burden by product output | `eu-pef-2021-2279` |
| `calc_particulate_release` | direct cotton particulate to air | released mass = measured concentration × dry or actual airflow × operating time with method-consistent unit and condition corrections; alternatively use validated collector inlet/outlet mass balance | environmental concentration; airflow; duration; condition corrections; capture records | kg particulate released | `osha-1910-1043-cotton-dust`; `eu-jrc-txt-bref-2023` |
| `calc_weighted_additional_view` | optional portfolio result | additional weighted result = sum(disaggregated stratum inventory × stratum delivered mass) / total delivered mass for the stated period | separate carded/combed and fibre-type datasets; delivered masses; period | optional production-weighted view | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Confirm product is cotton, carded or combed, prepared for spinning, and not yarn, blend, cotton waste, or garnetted stock; declare presentation and market classification. | product specification; invoice; classification review; lot photograph or inspection record |
| `dq_route` | production route | Retain a process map and production records that distinguish carded and combed routes and show every conditional operation actually performed. | production order; equipment list; route diagram; line record |
| `dq_fibre_type` | cotton feedstock and output | Identify fibre type/origin and keep materially different Upland, extra-long-staple/Pima, virgin, and reclaimed/recycled strata separate. | supplier/classing certificate; bale/lot identity; recovered-content chain of custody |
| `dq_measurement` | mass, energy, water, waste, and emissions | Use calibrated instruments or documented reconciliation; retain raw readings, detection limits, conversion factors, and mass basis. | calibration certificate; meter/scale records; laboratory or emission report; calculation worksheet |
| `dq_temporal` | foreground activity data | Use a representative continuous production period or enough lots to cover routine variability; disclose start/end dates, shutdowns, abnormal events, and sample coverage. | production calendar; lot list; meter coverage; exception log |
| `dq_completeness` | process and flow coverage | Reconcile cotton mass through every included process and account for energy, water/auxiliaries when used, packaging, recovered products, wastes, captured dust, and direct releases. | mass balance; utility reconciliation; waste tickets; emission inventory; completeness checklist |
| `dq_geography_technology` | upstream and foreground data | Match facility geography, grid/fuel supply, carding/combing technology, dust control, and fibre type; disclose all proxies and their limitations. | site metadata; equipment list; supplier data; dataset metadata; proxy justification |
| `dq_range_replacement` | provisional reasoned estimates | Treat every `reasoned_estimate` range only as a temporary screen. Replace it when reviewed route/fibre-type foreground lots, audited supplier data, or a stronger official/peer-reviewed quantitative source becomes available; retain the former range only in review history. | review record; replacement source; version diff; representative lot analysis |
| `dq_source_limits` | external evidence | Preserve source scope: CPC supports classification only; BREF supports descriptive process candidates and environmental relevance but not a CPC-specific BAT claim; OSHA supports equipment/dust controls and occupational monitoring but not environmental emission factors; USDA fields are quality descriptors, not universal product limits. | source-use matrix; modelling notes; reviewer sign-off |
| `dq_atomic_flows` | process inventory | Confirm that no inventory row combines multiple energy carriers, waters, chemicals, packaging materials, products, wastes, wastewaters, residues, or emissions. Every applicable onsite fuel, steam/heat carrier, named auxiliary, refrigerant makeup, wastewater stream, and packaging material omitted from this generic PCR must be added as its own conditional foreground row before conformance is claimed. | atomic-flow audit; flow mapping register; collection protocol; UUID status register |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_uuid` | reference_flow | Confirm product flow UUID `93976740-418a-40e3-8901-dbc34f0acdc6`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg; fail if substituted or version text is stored as part of a UUID. |  |
| `val_required_qualifiers` | dataset_identity | Fail completeness when route, presentation, fibre type/origin, moisture/mass basis, site, technology, period, or product/waste status is missing. | `un-cpc-3-2025`; `usda-ams-cotton-classing`; `iso-6741-1-1989` |
| `val_route_separation` | process_inventory | Confirm combing processes, energy, and noils appear only for `route=combed`; confirm carded and combed records are not unconditionally averaged. | `eu-jrc-txt-bref-2023`; `osha-1910-262-textiles` |
| `val_fibre_separation` | process_inventory | Confirm materially different cotton fibre types/origins are separate or that a documented materiality assessment justifies aggregation; a generic category average without retained strata fails. | `usda-ams-cotton-classing`; `eu-pef-2021-2279` |
| `val_mass_basis` | mass_inventory | Confirm all cotton, noils, and waste masses use one declared moisture/commercial-mass basis or carry traceable conversions. | `iso-6741-1-1989` |
| `val_mass_balance` | each_process_and_total | Reconcile each process and total route; report residual and investigate material imbalance instead of forcing it to zero by changing the reference output. |  |
| `val_energy_no_double_count` | energy_inventory | Confirm equipment electricity and shared services cover the same production period and are not double counted; retain causal allocation evidence. | `eu-pef-2021-2279`; `eu-jrc-txt-bref-2023` |
| `val_noils_exclusivity` | coproduct_and_waste_inventory | Confirm comber noils mass is reported as recovered product or waste, not both, and that any allocation method follows the declared hierarchy. | `eu-pef-2021-2279`; `osha-1910-262-textiles` |
| `val_dust_evidence` | cotton_dust_and_particulate | Confirm captured dust and direct releases are separately reported. Reject conversion of occupational concentration or PEL into environmental emission mass without airflow, duration, and release-point evidence. | `osha-1910-1043-cotton-dust` |
| `val_reasoned_estimates` | quantitative_ranges | Confirm every reasoned estimate is labelled provisional, is not treated as an allowed or typical industry interval, is applied only to its stated route/fibre-type stratum, and has a replacement trigger. |  |
| `val_source_scope` | modelling_claims | Confirm no source is used beyond its stated purpose and limitation and that source ids resolve to the Data Sources table. |  |
| `val_atomic_flows` | process_inventory | Fail when an inventory row is a collection or category pseudo-flow, including combined energy carriers, water-and-chemicals, wastewater-and-residues, generic packaging, or grouped emissions. Confirm every row has one flow name, direction, flow type, quantity basis, unit, value/formula/rule, range/uncertainty statement, collection protocol or data source id, source/status, and confirmed or unresolved UUID status. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | route-, fibre-type-, technology-, site-, and period-specific foreground production dataset for cotton, carded or combed |
| downstream_use | may be published as a `secondary_dataset` or `background_dataset` after methodology review, UUID completion, source review, representative foreground collection, and independent quality checks |
| allowed_use | supply-chain and life-cycle models needing prepared cotton fibre at the spinning-mill gate; scenario comparison within the same declared route, fibre type/origin, mass basis, geography, technology, allocation, and boundary |
| excluded_use | unconditional global or category average; proxy for raw/ginned cotton, cotton waste, blended staple fibre, yarn, fabric, or finished textiles; comparison across unmatched moisture bases or fibre types; legal compliance claim; environmental claim based only on occupational dust data |
| required_metadata | canonical PCR id; product UUID; CPC context; route; presentation; fibre type/origin; recycled-content method; quality specification; moisture/commercial-mass basis; site/geography; technology; period; process coverage; allocation; upstream datasets/proxies; packaging; dust-control configuration; product/co-product/waste status |
| required_quality_disclosure | lot and production coverage; meter/scale coverage and calibration; mass-balance residuals; route/fibre-type stratification; allocation drivers; source limitations; unresolved UUIDs; proxy use; provisional reasoned estimates and replacement status; environmental versus occupational dust evidence |
| update_trigger | change in product identity or classification; carded/combed route or equipment; cotton fibre type/origin mix; recycled-feedstock preparation; moisture/mass convention; material yield; energy or dust-control system; allocation or product/waste status; packaging; representative period; Tiangong UUID; or availability of stronger quantitative evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0, Explanatory Notes*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | official category title and hierarchy: section 26, group 261, subclass 26160; it supplies no route-level inventory quantities |
| `eu-jrc-txt-bref-2023` | official_guidance | European Commission Joint Research Centre, Roth et al., *Best Available Techniques (BAT) Reference Document for the Textiles Industry*, EUR 31392 EN, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf (retrieved 2026-08-12) | descriptive cotton fibre preparation and spinning sequence; opening/cleaning, carding, combing, drawing, energy and dust-control relevance; BAT scope is not a CPC 26160 product PCR |
| `osha-1910-262-textiles` | standard | U.S. Occupational Safety and Health Administration, 29 CFR 1910.262, *Textiles*, https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.262 (retrieved 2026-08-12) | official equipment definitions for card, comber, combing machinery, lap preparation, openers/pickers, and garnetting; not quantitative LCA evidence |
| `osha-1910-1043-cotton-dust` | standard | U.S. Occupational Safety and Health Administration, 29 CFR 1910.1043, *Cotton dust*, https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.1043 (retrieved 2026-08-12) | cotton-dust relevance from opening through yarn manufacture, waste-processing definition, monitoring and control records; occupational limits are not environmental emission factors |
| `usda-ams-cotton-classing` | official_guidance | U.S. Department of Agriculture Agricultural Marketing Service, *Cotton Classing Services*, https://www.ams.usda.gov/services/grading/cotton-classing (retrieved 2026-08-12) | candidate lot-quality fields: cotton class, colour, trash/foreign matter, micronaire, length, uniformity, and strength; U.S. classing fields are descriptors, not universal conformance limits |
| `iso-6741-1-1989` | standard | ISO 6741-1:1989, *Textiles — Fibres and yarns — Determination of commercial mass of consignments — Part 1: Mass determination and calculations*, https://www.iso.org/standard/13199.html (retrieved 2026-08-12) | declared commercial-mass measurement and calculation for homogeneous single-generic-species consignments; the standard excludes fibre blends and does not supply a universal cotton regain in this PCR |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 of 15 December 2021 on Environmental Footprint methods, consolidated official text including Annex I, http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-12) | functional-unit/reference-flow structure, life-cycle inventory completeness, primary data, allocation hierarchy, representative strata, data quality, electricity and recycling disclosure; generic method, not product-specific quantitative evidence |
