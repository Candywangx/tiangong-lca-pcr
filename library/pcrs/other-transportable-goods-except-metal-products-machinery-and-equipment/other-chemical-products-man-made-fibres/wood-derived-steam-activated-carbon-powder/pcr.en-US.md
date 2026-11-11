---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.wood-derived-steam-activated-carbon-powder
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wood-derived steam-activated powdered carbon manufacture

## 1. Scope and Applicability

Complete manufacture of one actual unimpregnated wood-derived steam-activated powder grade, from actual woody feed through finished-grade first acceptance at a fixed plant gate. Includes carbonization, activation, milling, actual homogenization/formulation, controls and all real linked producers; retain every complete condition in section9. Excludes unactivated charcoal, granular media/equipment, coal products, spent-carbon regeneration, chemical activation, acid-washed or impregnated variants and finished-product repacking alone. No full35499, equal adsorption-function, medical or certification claim.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.wood-derived-steam-activated-carbon-powder |
| classification_refs | CPC 3.0 35499; narrower product and route boundary |
| covered_products | One actual unimpregnated wood-derived physically steam-activated powdered-carbon grade |
| excluded_products | Unactivated char; coal/coconut/peat and granular/pellet routes; chemical/acid-washed/impregnated/reactivated variants; finished repacking |
| representative_product | Wood-derived steam-activated powder at first acceptance in its declared whole state |
| production_route | Wood preparation→carbonization→crushing/steam activation→milling→actual homogenization/formulation→grade acceptance and actual packing; complete controls/utilities linked |
| market_state | Whole at-plant powder; measured moisture/ash/grade; external packaging separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply whole qualifying wood-derived activated powder for downstream industrial purification |
| How much | 1 kg |
| How well | Actual physical/chemical grade, steam/powder/unimpregnated state and whole native/provider fit |
| How long or cycle | One original first-acceptance cohort; no assumed adsorption life or equal service |
| reference_flow_link | finished_carbon |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Biochar-based powdered activated carbon `8273217c-f2f4-46e2-b54a-022123ca32fb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual biomass/wood origin and supplied preparation; whole powder grade and unimpregnated steam state; actual carbonization activation and finishing interfaces; measured moisture ash and particle method; actual homogenization and all real grade constituents; fixed first gate original events Q0 and tare; complete suppliers geography period and provider units; raw WIP FG blend and own historical burden vectors; reactive gas water phases elemental and energy balances; complete real thermal control steam and wastewater producers; whole asset packaging recipient and service histories; species medium method source limitations and uncertainty |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Calibrated whole-lot net mass at the fixed completed-grade gate locks original first events Q via cp_acceptance; moisture/ash are nested composition, never pure-carbon or tare substitution. |
| extensive_units | each inventory row | Row-declared extensive property | kg; m3; MJ; Item(s) | Each actual row/provider unit must fit: masskg, gas-state volumem3, native electricity NetcalorificvalueMJ and whole article count; kWh×3.6 converts units only. Count, electricity and gas volume are not mass. |
| physical_mass_phase | actual mass-bearing streams/subledgers | Whole mass and measured state | kg | Keep whole mass, elements, reaction formation/consumption and water phases independent; no default density/enthalpy/ash/moisture/reaction extent or physical closure scaled to burden shares. |
| stock_service | assets/packaging/wastes | Physical and provider-service separation | kg; Item(s) | Retain actual whole Qt separately from evidenced serviceA/Q; Qt/Qanalysis is not automatically each cohort treatment demand; unknown share/originalQ remains unresolved. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual untreated woody feed and whole supplies; real water/steam/fuels/purge/equipment/packaging |
| starting_condition_role | foreground_material_receipt |
| product_classification_scope | Narrow35499 continuity classification inference |
| recursive_input_rule | Same-category accepted returns retain genealogy/burden without newQ; actual purchased carbon cannot replace full wood-based manufacture |
| upstream_dataset_requirement | Match whole material/state/geography/extensive unit and actual supplier boundary; complete producers and embedded/decomposed histories must not overlap |
| disclosure | Full manufacture/gas-liquid controls/utilities/stocks/services/originalQ/classification and all section9 conditions |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| complete_route | Include actual wood-to-whole-powder manufacture, all genuine linked producers, failed/zero-output/finishing and packaging services; all complete section9 conditions are normative. | `calgon-acticarbone-2017`; `gu-wood-carbon-2018` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| carbon_line | Complete wood-derived activated-powder manufacture and original-cohort services | required | Actual matching full route and complete genuine producers | foreground | 1 kg reference flow |

### Process: Complete wood-derived activated powder manufacture (`carbon_line`)

#### Inputs

##### Product flows

###### Untreated wood chips (`wood_chips`)

One actual whole woody feed with origin, treatment status, species, moisture, ash and supplier preparation. Include real forestry/residual-feed attribution and transport; a residual label does not make the upstream burden zero.

- Selected flow: Untreated wood chips
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_materials; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Process water (`process_water`)

Actual separately supplied water only; distinguish feed moisture, quench water, boiler/cooling makeup, internal circulation and imported steam.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_utilities; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Process steam (`steam`)

Actual whole steam crossing the producer interface, with measured mass, pressure, temperature, quality and enthalpy. An on-site steam producer remains a complete linked unit.

- Selected flow: Process steam
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_utilities; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Alternating current (`electricity`)

Actual matched line and auxiliary electricity at the real delivery point. Preserve native Net calorific value/MJ; kWh×3.6 is a unit conversion, not fuel heat or efficiency. Actual voltage, geography, supply mix and losses must fit the provider.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_utilities; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Pipeline natural gas (`natural_gas`)

Only actual fuel for included generation, carbonization, activation or controls. Retain meter reference state, composition and full linked combustion burdens; no gas heating-value default.

- Selected flow: Pipeline natural gas
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_utilities; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Propane fuel (`propane`)

Only actual propane supply. Gu’s pilot steam heating is not proof that every plant uses propane; a supplied LPG mixture requires its own whole-mixture identity and inventory.

- Selected flow: Propane fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_utilities; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Liquid nitrogen (`nitrogen`)

Only actual whole liquid supply with vaporization and delivery burdens. Gaseous purge is an internal phase/use ledger, not a second nitrogen purchase; actual other supplied phase needs its matching interface.

- Selected flow: Liquid nitrogen
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_materials; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Wood carbonization reactor (`carbonizer`)

Actual whole reactor article and service history; physical installed/spare/retired mass and count are independent from attributable capital-service demand. No per-reactor mass or life is assumed.

- Selected flow: Wood carbonization reactor
- Flow property / unit: Number of items / Item(s)
- Amount rule: Record evidenced attributable whole-provider service A / original positive Q in compatible units; preserve complete physical mass/count/history independently; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Rotary activation calciner (`calciner`)

Actual whole calciner and compatible provider unit; include genuine repairs and inherited service once. A pilot or engineered scale is not a fixed industrial lifetime or machine size.

- Selected flow: Rotary activation calciner
- Flow property / unit: Number of items / Item(s)
- Amount rule: Record evidenced attributable whole-provider service A / original positive Q in compatible units; preserve complete physical mass/count/history independently; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Activated-carbon grinding mill (`grinding_mill`)

Actual whole finishing mill; retain full installed/article history and evidenced service demand without charging the whole machine to every cohort.

- Selected flow: Activated-carbon grinding mill
- Flow property / unit: Number of items / Item(s)
- Amount rule: Record evidenced attributable whole-provider service A / original positive Q in compatible units; preserve complete physical mass/count/history independently; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Grinding-mill liner (`grinding_liner`)

One actual wear component with material, dimensions, mass and replacements; no guessed wear rate or pure-metal proxy.

- Selected flow: Grinding-mill liner
- Flow property / unit: Number of items / Item(s)
- Amount rule: Record evidenced attributable whole-provider service A / original positive Q in compatible units; preserve complete physical mass/count/history independently; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Powder-collection filter element (`filter_element`)

Only an actual installed whole element with substrate and service records. Its source does not establish a universal baghouse; any real different control hardware needs its own specific row.

- Selected flow: Powder-collection filter element
- Flow property / unit: Mass / kg
- Amount rule: Record evidenced attributable whole-provider service A / original positive Q in compatible units; preserve complete physical mass/count/history independently; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Reusable powder big bag (`powder_bag`)

One actual whole purchased bag configuration, including any supplier-embedded liner burden once. Declare material/BOM, actual net tare, ownership, fleet and service; no inferred polymer, weight or reuse life.

- Selected flow: Reusable powder big bag
- Flow property / unit: Number of items / Item(s)
- Amount rule: Record evidenced attributable whole-provider service A / original positive Q in compatible units; preserve complete physical mass/count/history independently; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Returned reusable powder big bag (`returned_bag`)

Actual serviceable whole article returned from a recipient, with original transfer IDs; no new product Q, virgin bag purchase or avoided-production credit.

- Selected flow: Returned reusable powder big bag
- Flow property / unit: Number of items / Item(s)
- Amount rule: Record whole physical Bt with original genealogy and recipient, displaying Bt/Qanalysis physically; no new Q or manufacturing/treatment demand; cp_pack; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

##### Elementary flows

###### Air from atmosphere (`ambient_air`)

Actual air intake for real included reactors, thermal treatment and combustion. O2/N2/water are nested physical composition, not duplicate whole-air inputs; internal recirculation is separate.

- Selected flow: Air from atmosphere
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_streams; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_streams`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

#### Outputs

##### Product flows

###### Biochar-based powdered activated carbon (`finished_carbon`)

Whole finished qualifying wood-derived steam-activated powder at the fixed first grade-acceptance gate after actual finishing/homogenization. Includes measured ash, moisture and any admitted grade constituents; never pure-carbon-equivalent mass.

- Selected flow: Biochar-based powdered activated carbon `8273217c-f2f4-46e2-b54a-022123ca32fb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Wood-pyrolysis gas for external supply (`pyrolysis_gas_sale`)

Only real external whole-gas product with measured composition, state and actual receiving function. Internal gas firing is a linked internal stream with full incurred combustion burdens, not this sale or an assumed credit.

- Selected flow: Wood-pyrolysis gas for external supply
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole product Pg and original provenance; full physical Pg/Qanalysis remains independent of environmental allocation vectors; cp_streams; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_streams`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Steam condensate returned to supplier (`condensate_return`)

Actual external return with gross mass, composition, temperature/enthalpy and provider water convention; not an automatic fresh-water credit or air emission.

- Selected flow: Steam condensate returned to supplier
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole product Pg and original provenance; full physical Pg/Qanalysis remains independent of environmental allocation vectors; cp_utilities; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Reusable powder big bag supplied with carbon (`supplied_bag`)

Actual whole delivered container, separate from carbon net mass and Q; preserve supplier/recipient custody and all returns/scrap, without making it a coproduct function.

- Selected flow: Reusable powder big bag supplied with carbon
- Flow property / unit: Number of items / Item(s)
- Amount rule: Record whole physical Bt with original genealogy and recipient, displaying Bt/Qanalysis physically; no new Q or manufacturing/treatment demand; cp_pack; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

##### Waste flows

###### Unactivated wood-char reject (`unactivated_reject`)

Actual external solid rejection with moisture/ash and destination; internal reprocessing is not an external export.

- Selected flow: Unactivated wood-char reject
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole recipient Qt once and physical analytical Qt/Qanalysis; separately model evidenced nonoverlapping cohort treatment demand A/Q in compatible provider units; cp_waste; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Rejected activated-carbon powder (`activated_reject`)

Actual irreversibly discarded finished/intermediate carbon, with original state and history. Recovered internal fines do not create a waste export or a fresh first-acceptance event.

- Selected flow: Rejected activated-carbon powder
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole recipient Qt once and physical analytical Qt/Qanalysis; separately model evidenced nonoverlapping cohort treatment demand A/Q in compatible provider units; cp_waste; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Wood-carbonization off-gas to complete treatment (`carbonizer_gas`)

One actual whole gas handover, with carrier gas, vapour and organic/inorganic composition nested. Full receiving control/energy unit is mandatory; final releases are counted once after that unit.

- Selected flow: Wood-carbonization off-gas to complete treatment
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole recipient Qt once and physical analytical Qt/Qanalysis; separately model evidenced nonoverlapping cohort treatment demand A/Q in compatible provider units; cp_streams; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_streams`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Steam-activation off-gas to complete treatment (`activation_gas`)

Actual whole pre-control gas interface. Gu’s measured pre-oxidizer profile is not a final outdoor emission and cannot replace actual oxidizer inputs, reaction products, heat and outlets.

- Selected flow: Steam-activation off-gas to complete treatment
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole recipient Qt once and physical analytical Qt/Qanalysis; separately model evidenced nonoverlapping cohort treatment demand A/Q in compatible provider units; cp_streams; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_streams`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Wood-carbonization condensate to treatment (`carbonization_condensate`)

Only actual collected whole liquid with water/organics/solids nested and a real receiver. It is neither pure water nor a residual balancing flow.

- Selected flow: Wood-carbonization condensate to treatment
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole recipient Qt once and physical analytical Qt/Qanalysis; separately model evidenced nonoverlapping cohort treatment demand A/Q in compatible provider units; cp_waste; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Activated-carbon process wastewater to treatment (`wastewater`)

Actual whole combined recipient stream only if drains physically combine; retain original drains, composition and full real treatment burdens. Never omit treatment because a source LCA omitted it.

- Selected flow: Activated-carbon process wastewater to treatment
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole recipient Qt once and physical analytical Qt/Qanalysis; separately model evidenced nonoverlapping cohort treatment demand A/Q in compatible provider units; cp_waste; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Separated activated-carbon dust to treatment (`captured_dust`)

Only a physically separate bulk dust export. Powder retained in a discarded filter or bag remains nested in that whole contaminated article instead of appearing here again.

- Selected flow: Separated activated-carbon dust to treatment
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole recipient Qt once and physical analytical Qt/Qanalysis; separately model evidenced nonoverlapping cohort treatment demand A/Q in compatible provider units; cp_waste; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Contaminated spent powder filter element (`spent_filter`)

Whole recipient article mass includes substrate, retained carbon/liquor and water once; components are analytical subledgers, not imaginary additional waste exports.

- Selected flow: Contaminated spent powder filter element
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole recipient Qt once and physical analytical Qt/Qanalysis; separately model evidenced nonoverlapping cohort treatment demand A/Q in compatible provider units; cp_assets; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Contaminated discarded powder big bag (`spent_bag`)

One actual whole contaminated bag export, distinct from serviceable returned bags; retain actual full recipient/provider quantity and nonoverlapping cohort service vectors.

- Selected flow: Contaminated discarded powder big bag
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole recipient Qt once and physical analytical Qt/Qanalysis; separately model evidenced nonoverlapping cohort treatment demand A/Q in compatible provider units; cp_pack; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Contaminated worn grinding-mill liner (`worn_liner`)

Whole actual worn article with retained carbon and moisture; do not create a second carbon export unless physically separated first.

- Selected flow: Contaminated worn grinding-mill liner
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole recipient Qt once and physical analytical Qt/Qanalysis; separately model evidenced nonoverlapping cohort treatment demand A/Q in compatible provider units; cp_assets; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Spent carbon-processing refractory lining (`spent_refractory`)

Actual whole separated lining waste with grade, deposits, moisture and receiver; no virgin replacement equal to retirement or default life is implied.

- Selected flow: Spent carbon-processing refractory lining
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole recipient Qt once and physical analytical Qt/Qanalysis; separately model evidenced nonoverlapping cohort treatment demand A/Q in compatible provider units; cp_assets; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

###### Separated carbon-processing ash (`separated_ash`)

Only actual physically separated ash with real retained carbon/moisture and receiver. Mineral ash already retained in product or another whole waste is a nested component, not another export.

- Selected flow: Separated carbon-processing ash
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole recipient Qt once and physical analytical Qt/Qanalysis; separately model evidenced nonoverlapping cohort treatment demand A/Q in compatible provider units; cp_waste; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `calgon-acticarbone-2017`; `gu-wood-carbon-2018`

##### Elementary flows

###### Carbon dioxide, biogenic, to air (`co2_bio`)

Actual final biogenic CO2 after included controls, with origin and full carbon balance. No automatic carbon neutrality or negative storage credit.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### Carbon dioxide, fossil, to air (`co2_fossil`)

Actual final fossil CO2 from real fuel/control producers; keep complete combustion interface and origin, not a CO2-only burner.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### Carbon monoxide, biogenic, to air (`co_bio`)

Actual final biogenic species mass, not a source combustion proxy or pre-control gas again.

- Selected flow: Carbon monoxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### Carbon monoxide, fossil, to air (`co_fossil`)

Actual final fossil species mass, independently established from actual gas composition and source genealogy.

- Selected flow: Carbon monoxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### Methane, biogenic, to air (`methane_bio`)

Actual final biogenic CH4; do not copy duplicated rows or emission factors from a source LCI.

- Selected flow: Methane, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### Methane, fossil, to air (`methane_fossil`)

Actual final fossil CH4 including real fugitive or upset releases within the declared boundary; missing is not zero.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### Hydrogen to air (`hydrogen_air`)

Only actual final H2. FTIR does not establish H2; require a specific applicable gas method with matched sampling/calibration and carrier-state evidence.

- Selected flow: Hydrogen to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `doe-permanent-gases-1990`

###### Nitrogen to air (`nitrogen_air`)

Actual final N2 including purge and carrier origins; separate its physical gas ledger from attributable liquid-nitrogen production demand. FTIR alone does not measure N2.

- Selected flow: Nitrogen to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method3c`

###### Oxygen to air (`oxygen_air`)

Actual final unreacted O2 with measured composition/state; oxygen consumed by carbonization, activation or combustion is separately reconciled.

- Selected flow: Oxygen to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method3c`

###### Water vapour to air (`water_vapour`)

Actual final vapour, independently split from supplied moisture/steam, condensate and reaction-water formation/consumption. Waste steam is not automatically freshwater emission.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### Nitrogen monoxide to air (`no_air`)

Actual molecular NO; total NOx or NO2-equivalent reporting does not by itself establish this row.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### Nitrogen dioxide to air (`no2_air`)

Actual molecular NO2, distinct from NO and N2O; no stacking of total NOx with resolved constituents.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### Dinitrogen monoxide to air (`n2o_air`)

Only actual N2O measured separately; a source label nitrogen oxide is not permission to substitute a molecular identity.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### Sulfur dioxide to air (`so2_air`)

Actual final SO2 with fuel/feed sulfur and any actual control reactions reconciled; no assumed universal source concentration.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### Carbonaceous particulate matter to air (`particulate_air`)

Actual whole final particulate, including actual mineral fraction rather than pure-carbon-equivalent dust. Filterable dry PM is not proof of all wet condensable or mist mass; distinguish matrix, particle fraction and method scope.

- Selected flow: Carbonaceous particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method5`

###### Benzene to air (`benzene_air`)

Only actual final benzene to the specified air compartment with appropriate analyte/matrix method; no total VOC companion mass.

- Selected flow: Benzene to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### Formaldehyde to air (`formaldehyde_air`)

Only actual final formaldehyde with sampling losses, detection limits and uncertainty established.

- Selected flow: Formaldehyde to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### Methanol to air (`methanol_air`)

Only actual final methanol; source case presence is a screening lead, not a positive default for this grade or plant.

- Selected flow: Methanol to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### Phenol to air (`phenol_air`)

Only actual final phenol; distinguish actual gas, collected condensate and treatment exports without duplicating the same mass.

- Selected flow: Phenol to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### Acetaldehyde to air (`acetaldehyde_air`)

Only actual final acetaldehyde with a specific method and receiving medium; a broad organic basket is excluded.

- Selected flow: Acetaldehyde to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

###### Naphthalene to air (`naphthalene_air`)

Only actual final naphthalene; retain phase and condensable-loss evidence rather than assuming one gas assay covers all phases.

- Selected flow: Naphthalene to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_species; divide the cohort amount by locked original Q once, retaining full physical transfers/stocks separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `gu-wood-carbon-2018`; `epa-method320`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocation_hierarchy | Use subdivision/direct assignment before allocation. Remaining common-process environmental exchanges need demonstrated determining physical causality separately for each exchange and function; only residual multifunctionality without that relation may use justified condition/gate-matched market values with sensitivity. Keep full physical gas/char/co-product/waste quantities independent of shares. Internal heat recovery, disposal, packaging returns or source claims do not create automatic cofunctions or avoided burdens. | `ilcd-allocation-2010`; `gu-wood-carbon-2018` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | carbon_line | Finished grade and first event | unnormalized actual records | lot; eventID; netwholekg; tare; moisture; ash; particle method; grade; biomass origin; steam route; finishing; original IDs | Quality officer: calibrated whole-lot net weighing after actual completed finishing and grade acceptance; traceable representative moisture/ash/particle sampling with actual methods and uncertainty. Establish native whole-material/state fit and lock original events, not shipment totals. | kg | each event/lot; continuous readings and complete stock period | all matched manufacture and original-cohort history including failed/zero-output | actual line, suppliers and all complete linked producers | per 1 kg reference flow | calibration/method/samplingQA; original tickets; actual composition/state; full genealogy; uncertainty and gaps |
| cp_materials | carbon_line | Whole feed and preparation records | unnormalized actual records | lot; supplier; whole feedkg; drysolid; water; ash; treatment; origin; stock; blend genealogy; actual grade constituents; internal transfers | Materials accountant/laboratory: retain full raw receipts, supply form, assays and stock movements without replacing whole mass by fixed carbon. Every actual whole supplied preparation or separately purchased ingredient is recorded once; preserve supplier/on-site processing and embedded history. | kg | each event/lot; continuous readings and complete stock period | all matched manufacture and original-cohort history including failed/zero-output | actual line, suppliers and all complete linked producers | per 1 kg reference flow | calibration/method/samplingQA; original tickets; actual composition/state; full genealogy; uncertainty and gaps |
| cp_utilities | carbon_line | Actual utilities and complete producer links | unnormalized actual records | meters; rawkWh/MJ; gasvolume/state/composition/Z; fuel; steamkg/P/T/quality/enthalpy; condensatekg/state; heat; water; all failed/idle loads; provider units | Utilities engineer: calibrated gross supply/return readings over matched complete operations, recovery/controls, standby and start/stop. Match extensive units and actual state; kWh×3.6 only converts electricity. Retain complete actual steam/combustion/control producer burdens and losses without assumed fuel efficiency. | kg; m3; kWh; MJ | each event/lot; continuous readings and complete stock period | all matched manufacture and original-cohort history including failed/zero-output | actual line, suppliers and all complete linked producers | per 1 kg reference flow | calibration/method/samplingQA; original tickets; actual composition/state; full genealogy; uncertainty and gaps |
| cp_streams | carbon_line | Reactive physical streams and producer handovers | unnormalized actual records | streamID; actual inlet/outlet; wholekg; flow/time; gasstate; composition; C/H/O/N/S; phase; moisture; internal recycle; thermal/control receiver; actual sale function | Process/environment engineer: paired whole-stream measurements, actual gas/liquid/solid composition and state on both sides of every real linked unit; record reaction generation/consumption, carrier air, water phases and energy. Separate internal loops, genuine co-products and final environmental outlets; never fit unknowns to closure. | kg; m3; MJ | each event/lot; continuous readings and complete stock period | all matched manufacture and original-cohort history including failed/zero-output | actual line, suppliers and all complete linked producers | per 1 kg reference flow | calibration/method/samplingQA; original tickets; actual composition/state; full genealogy; uncertainty and gaps |
| cp_species | carbon_line | Actual final environmental analytes and matrices | unnormalized actual records | species; medium; origin; phase; sample point; concentration; integratedvolume/rate; P/T/moisture; particlecut; detection; blanks; recovery; uncertainty; fugitive/upset; pre/postcontrol | Analytical officer: use actual analyte/matrix methods with sampling position and qualification. Integrate measured rates or multiply matched concentrations by integrated gas volume once. Filterable PM and gas FTIR scopes differ; H2/N2 and any wet mist/condensable fraction require suitable separate evidence. Preserve source before-oxidizer limitation and actual final producer releases once. | kg; m3; mg/m3 | each event/lot; continuous readings and complete stock period | all matched manufacture and original-cohort history including failed/zero-output | actual line, suppliers and all complete linked producers | per 1 kg reference flow | calibration/method/samplingQA; original tickets; actual composition/state; full genealogy; uncertainty and gaps |
| cp_waste | carbon_line | Whole residual receiver events | unnormalized actual records | eventID; stream; wholeQtkg; composition; retainedsolids/liquor/water; origincohorts; stored; receiver; realproviderQt/unit; nonoverlapA; treatment; finaloutlets | Environment custodian: calibrated separate whole recipient tickets and actual composition, including all internal stores and real receiving treatment. Distinguish whole physical quantity from original-cohort service demand; no separately invented nested contaminant export, presumed disappearance or truncated disposal link. | kg | each event/lot; continuous readings and complete stock period | all matched manufacture and original-cohort history including failed/zero-output | actual line, suppliers and all complete linked producers | per 1 kg reference flow | calibration/method/samplingQA; original tickets; actual composition/state; full genealogy; uncertainty and gaps |
| cp_assets | carbon_line | Whole equipment/article physical and service history | unnormalized actual records | articleID; wholecount/mass; material; dimensions; installed/spare; opening/receipts/repair/retirement/closing; deposits; originalcohorts; actualproviderunits; service evidence | Asset custodian: measure actual complete assets/components and retain full physical fleets, repair and historical service. Attribute only evidenced nonoverlapping service in compatible whole-provider units; preserve contaminated whole retirement mass and original recipient events. No guessed machine mass, life or fixed replacement ratio. | kg; Item(s) | each event/lot; continuous readings and complete stock period | all matched manufacture and original-cohort history including failed/zero-output | actual line, suppliers and all complete linked producers | per 1 kg reference flow | calibration/method/samplingQA; original tickets; actual composition/state; full genealogy; uncertainty and gaps |
| cp_pack | carbon_line | Whole packaging custody and supplier burdens | unnormalized actual records | bagID; actualBOM/material; wholecount/tare; free/attachedWIP/FG; purchase/receipt; supplied/recipientreturn/poolreturn/scrap/closing; originalcohort; providerhistory; retainedcarbon/water | Packaging custodian: calibrated whole bags/components and exact custody IDs; reconcile free and attached packaging with product gross shipments/returns and stores. Retain all actual delivered/returned/scrapped interfaces, whole contaminated waste and nonoverlapping services; exclude every external tare from carbon Q. | kg; Item(s) | each event/lot; continuous readings and complete stock period | all matched manufacture and original-cohort history including failed/zero-output | actual line, suppliers and all complete linked producers | per 1 kg reference flow | calibration/method/samplingQA; original tickets; actual composition/state; full genealogy; uncertainty and gaps |
| cp_cohorts | carbon_line | Physical, acceptance and attribution ledgers | unnormalized actual records | originaleventID/Q0; raw/WIP/FG/blend/assets/pack opening/closing; allphysical transfers; returns/rework; water/solids gains/losses; disjointfates; inheritedvectors; periodloads; provider history; attributableA | Production controller: reconcile complete physical stocks/transfers independently from locked unique first events and attributable environmental/service vectors. Carry actual own history once; partition original accepted basis across every disjoint postgate fate; retain failed/zero-output loads and later service with original cohorts/Q. Raw zero/unknownQ and unresolved assignment remain. | kg; provider unit | each event/lot; continuous readings and complete stock period | all matched manufacture and original-cohort history including failed/zero-output | actual line, suppliers and all complete linked producers | per 1 kg reference flow | calibration/method/samplingQA; original tickets; actual composition/state; full genealogy; uncertainty and gaps |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| event_q | reference/original cohort | Q=sum of unique original first-acceptance whole net masses at one fixed completed-grade gate; lock original moisture/ash basis and eventIDs, never new manufacture from returns/retests/repacking. | cp_acceptance; cp_cohorts | originalQ and physical event ledger | `calgon-acticarbone-2017` |
| attributable_vector | manufacture and later service | Actual opening own-WIP history plus all incurred matched loads, less substantiated closingWIP carry and distinct dispositions, forms attributableA; later services retain original cohorts/Q; full physical stocks and providerQt do not change with burden shares. | cp_materials; cp_utilities; cp_streams; cp_assets; cp_pack; cp_cohorts | per-exchange attributableA and nonoverlap evidence | `ilcd-allocation-2010` |
| normalize_once | all modeled exchanges | Divide evidenced attributableA in compatible provider units by original positiveQ once; finished_carbon isQ/Q=1kg. Qt/Qanalysis orPg/Qanalysis/Bt/Qanalysis are independent physical displays, not automatic service demand. Zero/unknownQ retains raw amounts and unresolved results. | A; Q; cp_cohorts | modeled amounts per1kgreference and separate physical display | `ilcd-allocation-2010` |
| reactive_balance | physical/element/phase/energy | Independently reconcile whole C/H/O/N/S/ash, water-phase and energy ledgers with actual reactant consumption/product generation, internal loops and genuine external exits. Use matched concentration×integrated gasvolume or integrate rates once; no residual/theoretical-chemistry/COD/combustion-proxy invention of missing species/yield. | cp_streams; cp_species; cp_materials; cp_utilities; cp_waste | physical/reaction/water/energy ledgers and uncertainty | `gu-wood-carbon-2018`; `vilen-activated-carbon-2022`; `epa-method320`; `epa-method5`; `epa-method3c`; `doe-permanent-gases-1990` |
| custody_bridge | packaging/assets/wastes | Whole opening+actual receipts/additions/genuine returns=whole closing+actual supplied/supplier-returned/scrapped/other evidenced exits. Nested deposits remain in the actual whole receiver event. Model separate evidenced original-cohort service vectors, never physical mass scaled by shares or repeated whole treatment demand. | cp_assets; cp_pack; cp_waste; cp_cohorts | whole physical custody and nonoverlapping service bridge | `calgon-acticarbone-2017`; `ilcd-allocation-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | whole product and each actual interface | Establish full native material/form/state/provider fit and retain powder/granule/equipment/source counterevidence; no component, categorycode or name-only substitution. | complete native admission and actual grade/provider evidence |
| complete_producers | all on-site and linked units | Genuine complete manufacturing/gas-liquid/combustion/utility/control/waste interfaces; every real additional material/species needs a specific atomic row, without omission or assumedzero. | actual stream/equipment/meter maps, supplier/receiver and source-method limits |
| three_ledgers | all stocks/originalQ/attributed service | Independent whole physical custody, unique firstevents and evidenced nonoverlapA/Q; own history and aggregate providers do not overlap. | cp_acceptance; cp_cohorts; cp_assets; cp_pack; cp_waste |
| measurement_sources | methods and quantities | Retain actual matrix/sampling-point/species methods, full source scope and uncertainty; source pilot/engineered/proxy/omitted values are not defaults or validation acceptance. | method/calibration/blanks/detection evidence; complete sources and section9 conditions |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_native_scope | Check whole powder, actual wood/steam grade, fixedgate and all section9 conditions; retain genuine counterevidence and restrictions. | `calgon-acticarbone-2017`; `un-cpc3-introduction-2025`; `un-cpc3-2025`; `un-cpc21-2015`; `wco-hs2022-38` |
| validate_interface_chemistry | Check genuine complete linked producers, reactiveG/C, phase/element/energy, final environmental location and methods; no pre-oxidizer data as final emissions. | `gu-wood-carbon-2018`; `vilen-activated-carbon-2022`; `epa-method320`; `epa-method5`; `epa-method3c`; `doe-permanent-gases-1990` |
| validate_original_events | Check full stocks/history, disjoint originalQ0fates and once-onlyA/Q; whole contaminated waste/pack/asset transfers do not change with service shares. | `ilcd-allocation-2010` |
| validate_complete_context | Both language projections must retain every full paragraph and source qualification below, not onlyIDs or short summaries. | `calgon-acticarbone-2017`; `gu-wood-carbon-2018`; `vilen-activated-carbon-2022`; `epa-method320`; `epa-method5`; `epa-method3c`; `doe-permanent-gases-1990`; `epa-activated-carbon-1977`; `un-cpc3-2025`; `un-cpc3-introduction-2025`; `un-cpc21-2015`; `wco-hs2022-38`; `ilcd-allocation-2010` |

### Complete applicability and accounting context

This scope is manufacture of one actual unimpregnated wood-derived, physically steam-activated powdered carbon grade from supplied untreated woody feed through actual carbonization, activation, powder finishing, homogenization/formulation, final quality acceptance and actual packing. The source manufacturer offers separate chemical, acid-washed and mixed routes; they are not silently included. Every actual grade constituent, blend lot, finishing operation and auxiliary remains visible. A formulation box is not erased by calling the output pure carbon. An actual different additive or treatment requires its own specific atomic input and applicability review before the dataset can qualify.

The native whole Product is Biochar-based powdered activated carbon / 生物炭基粉状活性炭, with a positive biomass-derived porous adsorbent definition, Mass/kg reference and no fixed CAS, recipe, activation route, supplier geography or supply-point restriction. It can admit this actual wood/steam/powder subtype only when the complete supplied material, grade, moisture, ash, phase, finishing and provider boundaries fit. Blank CAS or an unspecified SKU is not itself a blocker. This is not unactivated charcoal, elemental carbon used as a mixture component, a carbon-treatment service, a spent sorbent or an adsorption machine.

Do not replace the reference with the Count-based Granular active carbon unit/颗粒活性碳装置 merely because its comment describes GAC. The other coal record has a powdered English name and a granular-body description plus a coal/steam route; preserve that source-specific inconsistency instead of borrowing it for wood powder. Generic activated carbon with Adsorption reaction/At the chemical plant qualifiers does not establish a manufacturing gate. None of these labels establishes pure carbon content or a universal kg-per-item relation.

The narrower classification argument is explicitly a continuity inference: current CPC3 principles classify goods by actual physical nature and corresponding HS terms; current HS3802.10 names activated carbon; official CPC2.1 explicitly linked35499 to HS2007 3802.10. Current35499 retains its residual title and no activated-carbon-specific exclusion was found in the reviewed current notes. Activated natural mineral products/animal black and unactivated wood charcoal remain different named contexts. This is neither an official current individual ruling nor a claim that an old correspondence is current.

The Calgon original distinguishes physically steam-activated powders from chemical powders, optional washing and other grades. Its complete physical branch includes wood preparation, carbonization, crushing, steam activation, grinding, storage, homogenization/formulation and packaging. Preserve actual site versus supplier responsibility. Its grade table, certification, typical properties and application illustrations supply no recipe, operating setting, yield, lifetime, environmental superiority or universal acceptance specification.

Gu2018 reports actual wood/biochar activation trials and a separate engineered commercial scale. Pilot electric heating and propane-heated steam, purge arrangements and measured flows are not interchangeable with the engineered gas-fired design. Upstream carbonization also produces syngas and char. Do not import source material fractions, equipment size, heat duties, emissions, mass-allocation shares or biogenic-neutrality conventions as defaults or claim that a measured pilot is the current manufacturer.

Gu2018 measured reactor exhaust before the thermal oxidizer, not the final outdoor discharge. Its filterable-PM method and FTIR gaseous-analyte method have distinct scopes; FTIR cannot determine H2 or N2. The source separately collected samples for those gases. Actual sampling position, matrix, phase, species, detection and calibration must be established. A pre-control profile, total NOx/VOC or a dry filter mass cannot stand for all final species, wet mist or condensable material.

Vilén2022 is substantive contrary environmental evidence, not a complete interchangeable factory inventory. It reports proxy combustion emissions for some carbonization/activation inventories, assumed heat sufficiency, omitted start-up or transport/wastewater/ash burdens and incomplete co-product information. Do not adopt these omissions, assumed zero residual-feed burden, scaled combustion profiles, source performance equivalence or unmeasured heat recovery. Retain every real incurred manufacturing, failure, zero-output, idle, start/stop and treatment burden.

Maintain the full actual wood-to-finished-powder scope. A separately modeled carbonization, steam, electricity, gas treatment, combustion or wastewater producer must have complete actual input/output, gas/liquid/solid composition, energy and waste interfaces with matched providers and units. It is not an assumed off-site disposal or paper receiving gate. A purchased whole char or preparation needs a genuinely compatible complete upstream boundary; it cannot erase source carbonization or be counted again with its already embedded history.

Actual combustion and thermal oxidation require each real fuel, air/O2, reaction products, generated/consumed water, nitrogen/sulfur/carbon species, heat and losses. Internal pyrolysis gas may supply energy but its real formation, whole transfer, combustion and controls remain; neither free energy nor an avoided virgin-fuel credit is assumed. Record reactive carbon consumption and gas formation/consumption independently from total mass and C/H/O/N/S/ash balances.

Separate supplied wood moisture, quench/makeup water, liquid nitrogen and vaporization, steam, internal condensate, external condensate returns, actual evaporation and reaction-water formation/consumption. Keep actual gas temperature, pressure, moisture, composition and compressibility before any volume/mass or heating-value conversion; no universal density or steam enthalpy. Internal loops cancel transfers only, retaining their real utility and loss burdens.

Identify every final environmental species, phase and medium after actual controls, including real fugitive/upset releases. Whole gas or wastewater sent to a complete producer is not the same material emitted again at the sending boundary. Collected condensate, separate dust and retained material inside contaminated waste remain different physical recipients. No COD, total VOC/NOx, ash estimate or fitted residual can invent a chemical species or close two unknowns. Unknown and below-detection are not zero.

Lock Q0 as the sum of unique first-acceptance events for net whole finished powder after actual full grade finishing at one fixed plant gate. Record actual moisture, ash, fineness/particle method, unimpregnated steam-grade state and tare independently. Q is not pure carbon mass, gross shipments or a second physical output. Returns, repacking, homogenization, rework and retesting of already accepted material create no new event; any old/new mixing must retain measured inlet genealogy and original cohort burdens.

Partition each original acceptance basis across disjoint net remaining deliveries, every actual on-site accepted state, irreversible losses and other terminal fates. Gross return loops cancel by original IDs. Delivery plus closing stock works only with no other states/exits. Later moisture, powder or finish gains/losses require measured component/state conversion; never restore lost mass to a survivor and also count that loss. Zero/unknown Q retains raw totals and an unresolved normalized result.

Keep complete raw/WIP/finished, blend, utility, asset and container physical stocks/transfers separate from acceptance events and attributable environmental/provider-service vectors. Opening own WIP carries its genuine full earlier burden once; closing WIP retains its substantiated burden for later cohorts. Include all incurred failed/zero-output/cleanup/rework loads. Aggregate provider inventories and decomposed versions of their same embedded history are exclusive. Later services retain original Q0, not another calendar-period denominator.

Actual reactors, mills, liners, filters and reusable bags have whole physical count/mass, dimensions, material, installed/spare/retired stocks and service histories. Distinct compatible provider-service demand may be allocated to original cohorts with evidence, but no guessed life, per-item mass or complete new asset charge per cohort. Repair/replacement and retirement are separate real events; an embedded capital service must not be purchased again as a component proxy.

Keep actual free and attached bag/liner/container stocks, raw-supply packaging receipts, purchases, supplied customer transfers, recipient returns, supplier/pool returns and scrap with original IDs. Product net mass excludes all external packaging/tare. Whole purchased bag BOM burdens are included once; separately purchased liners, pallets or other actual components require their own atomic row and physical bridge. A returned serviceable bag creates neither new manufacture nor product Q or a reuse credit.

A discarded contaminated filter, liner or bag is one actual whole receiver event containing substrate, retained carbon/liquor and water once. Nested components are not extra waste exports unless physically separated before the boundary. Record whole receiver/provider quantity Qt and composition independently from evidenced nonoverlapping per-cohort service demand A/Q. Analytical Qt/Qanalysis is not automatically every cohort’s treatment demand; a burden share never shrinks physical mass or charges full Qt repeatedly.

Illustrative arithmetic only, never a source default: one whole contaminated filter event of10kg contains8kg substrate and2kg retained carbon/liquid. An independently evidenced25%/75% service split gives2.5/7.5kg-equivalent compatible provider demand; at original Q100/200kg, these are0.025/0.0375kg-equivalent per reference. The receiver still gets10kg once. There is no2.5kg physical export, extra2kg contaminant waste, duplicate10kg demand, assumed share or lifetime.

Use subdivision/direct assignment before allocation. Remaining common-process environmental exchanges need demonstrated determining physical causality separately for each exchange and function; only residual multifunctionality without that relation may use justified condition/gate-matched market values with sensitivity. Keep full physical gas/char/co-product/waste quantities independent of shares. Internal heat recovery, disposal, packaging returns or source claims do not create automatic cofunctions or avoided burdens.

A declared kg of powder is a production reference, not proven equal adsorption service, drinking-water certification or medical efficacy. Actual physical/chemical grade, end use, provider units, methods, temporal/geographic applicability and full analytical uncertainty remain study qualifications. No source temperature, recipe, dose, power, yield, ash/moisture fraction, shipping amount, performance, lifespan or emission reduction is adopted as a default or acceptance range.

Every candidate inventory row applies only where its actual physical interface is present. Record present, evidenced absent, below detection and unknown states distinctly. Do not invent a fuel, purge, asset, bag, control or species to match a citation. Every genuinely additional reagent, material, equipment component, supplied packaging, waste or environmental species needs its own specific atomic interface and actual provider/unit before study use; a missing UUID or unmeasured quantity is never a basket or a zero.

For actual IR-active vapor species, EPA Method320 supplies extractive FTIR analysis with its full Protocol, reference spectra, interference checks, heated handling or validated conditioning, and analyte-spiking/recovery requirements; it does not cover homonuclear H2/N2/O2 or every particulate/liquid phase. EPA Method5 covers its defined filterable particulate sampling and recovery, not an assumed all-phase wet-mist total. EPA Method3C supplies GC-TCD analysis, component calibration/linearity, repeat analysis and wet/dry/dilution corrections for CO2/CH4/N2/O2 within its stated landfill/otherwise specified source scope; it does not measure H2 or automatically authorize activated-carbon stack sampling. Its collection cross-references and any dilution/background correction must fit the actual gas; real purge or combustion N2/O2 is not automatically contamination to subtract. DOE/ARCTECH March1990 Appendix6 supplies an actual permanent-gas GC-TCD separation, external component calibration and area-response procedure for H2/N2/CO/CH4/CO2, but its original sample collection is a different source matrix; the claimed example chromatogram is not visible on the retained final blank scans. These primary procedures establish analytical approaches, not automatic permission to transfer sampling or source settings. Actual hot/wet gas sampling, representative time/flow, conditioning and condensate losses, analyte separation, actual matrix recovery, reference-gas traceability, detection limits, final outlet location and uncertainty must be qualified for the study. Missing essential procedure or unestablished matrix/phase coverage remains an explicit methodological hold; ordinary site calibration/qualification cannot be represented as already passed. No original instrument, calibration-mixture or operating value is a default.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual matched whole wood-derived steam-powder manufacture and original-cohort services with complete qualified data/providers |
| excluded_use | Full35499; equal adsorption service, food/medical/certification, unreviewed actual route/state or spent regeneration |
| required_metadata | All ordered qualifiers; actualsite/period/grade; full interfaces/originalQ/history/species/water/energy/provider boundaries |
| required_quality_disclosure | Actual methods/sampling/uncertainty; specific unbound identities/provider units; source counterevidence and independent review/study states |
| update_trigger | Feedstock,route,phase,grade,homogenization/formulation,gate,controls,utilities,packaging,provider or material new evidence changes |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `epa-method3c` | official_guidance | US EPA, Method3C,8/2/2017 internet copy,complete4pages. https://www.epa.gov/sites/default/files/2017-08/documents/method_3c.pdf | CO2/CH4/N2/O2 GC-TCD analysis and calibration; source-scope/sampling/dilution limits retained; no H2 or universal stack-method approval. |
| `epa-method320` | official_guidance | US EPA, Method320,1/14/2019 internet copy including full FTIR Protocol. https://www.epa.gov/sites/default/files/2019-06/documents/method_320.pdf | IR-active vapor analysis and actual matrix/conditioning/spike validation; no homonuclear-gas or all-phase inference. |
| `epa-method5` | official_guidance | US EPA, Method5,8/2/2017 internet copy,complete source. https://www.epa.gov/sites/default/files/2017-08/documents/method_5.pdf | Defined filterable-PM sampling/recovery/calculation; no total wet mist or universal site method approval. |
| `doe-permanent-gases-1990` | literature | ARCTECH/US DOE, Biological Gasification of Coals,FinalReport,March1990,Appendix6 printed129–130/PDF148–149 only; retained full original. https://www.netl.doe.gov/sites/default/files/netl-file/Arctech-20140331-Biological-Gasification-Coals.pdf | Environmental permanent-gas GC-TCD analysis/calibration procedure only; different source sampling matrix and absent example chromatogram retained. No biological production protocol or operating values adopted. |
| `calgon-acticarbone-2017` | literature | Calgon Carbon, Acticarbone/Anticromos brochure,2017, completePDF2/4/5. https://www.calgoncarbon.com/app/uploads/17116_CCC_8.5x11_Acticarbone2017_BrochureSingleWeb.pdf | Real vegetal powdered product family and complete physical/chemical/washing/homogenization/packing alternatives; no numeric defaults or certification acceptance. |
| `gu-wood-carbon-2018` | literature | Gu et al., Life Cycle Assessment of Activated Carbon from Woody Biomass, Wood and Fiber Science50(3),229–243(2018),PDF4–9/printed232–237. https://research.fs.usda.gov/download/treesearch/56818.pdf | Actual wood/biochar activation and source measurement scope; pilot versus engineered scale, pre-oxidizer gases, real utilities and syngas/char counterconditions; no LCIfactor/recipe/equivalence default. |
| `vilen-activated-carbon-2022` | literature | Vilén, Laurell and Vahala, Comparative life cycle assessment of activated carbon production from various raw materials, Journal of Environmental Management324,116356(2022),§§2.1–2.3/3.1–3.5. https://doi.org/10.1016/j.jenvman.2022.116356 | Independent environmental coverage and explicit proxy/omission/heat/co-product/biogenic assumptions as counterevidence, never copied zero cutoffs or factors. |
| `epa-activated-carbon-1977` | official_guidance | US EPA, Chemical Technology and Economics in Environmental Perspectives,TaskIV—Activated Carbon,EPA-560/2-77-002,February1977,printed7–9/PDF13–15. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=91012EJI.TXT | Historical physical-versus-chemical activation and distinct powder/granular product context; no current quantities, conditions or legal limits. |
| `un-cpc3-2025` | official_guidance | UNSD,CPC3.0 Explanatory Notes,30June2025,completePDF174 and actual neighboring categories. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Current35499 residual title; no accepted mapping or individual ruling. |
| `un-cpc3-introduction-2025` | official_guidance | UNSD,CPCVersion3.0 Introduction,§§25–27,49–51,93. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Introduction.pdf | Physical nature/HS interpretation and continuity principles; labelled inference only. |
| `un-cpc21-2015` | official_guidance | UNSD,CPC2.1,2015,detailed correspondence printed69/PDF83 and explanatorynote35499 printed291/PDF305. https://unstats.un.org/unsd/classifications/unsdclassifications/cpcv21.pdf | Explicit historical35499–HS2007 3802.10 relationship, distinct from current evidence; not a current crosswalk. |
| `wco-hs2022-38` | official_guidance | WCO,HS2022 Chapter38,complete chapter notes and heading3802/3802.10,PDF1–3. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0638_2022e.pdf?la=en | Current activated-carbon heading versus other activated mineral/animal-black branch; no individualCPC3 ruling or process factor. |
| `ilcd-allocation-2010` | official_guidance | European Commission JRC,ILCD Handbook,Detailed Guidance,FirsteditionMarch2010,§7.9.3,printed257–258/PDF277–278. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision, determining causality and residual market-value hierarchy; no universal share or automatic credit. |
