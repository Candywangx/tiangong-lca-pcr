---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-hides-skins-and-leather
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Non-specialized in-store retail service for whole dry-salted bovine raw hides

## 1. Scope and Applicability

This method covers only non-specialized in-store retail handover of one whole untanned dry-salted bovine raw hide, with a declared hair state, to a final own-use customer. Declare a same-configuration pool by species, whole-hide specification and size or mass grade, preservation state, hair state and quality grade; distinct configurations cannot be merged directly. The route is customer collection, manual handling and non-mechanically-conditioned dry holding, with preservation completed before receiving. There is no on-site re-salting, curing, hide soaking/washing, cutting, unhairing or tanning. This is an explicit subset, not a whole-leaf method. The UN note includes only class 0295 raw hides, skins and furskins; leather in the title does not justify including tanned leather. Classification scope uses `un-cpc-62115`; preservation-state distinctions use qualitative context from `fao-hides-2009`, without adopting its times, moisture limits, salt rates or industry averages.

Exclude fresh, wet-salted, chilled or frozen routes, other species and furskins, half-hides or pieces, tanned leather, leather goods, wholesale, delivery and customer processing. Customer travel and post-sale merchandise use and disposal are outside this incremental service. Actual mechanical refrigeration, combustion heating, pest control, other packaging/chemicals, vehicles, repairs or assets cannot be silently omitted: add named bilingual atomic cards, single-process protocols, calculations and identity review, then sync and review the extended scope before completeness. Unknown configuration does not satisfy this route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-hides-skins-and-leather |
| classification_refs | CPC 3.0 62115; narrower |
| covered_products | Non-specialized in-store final own-use retail service for whole dry-salted bovine raw hides |
| excluded_products | Tanned leather; leather goods; wholesale; delivery; on-site preservation/processing; other species/states |
| representative_product | Service for final retained acceptance of one whole hide in one declared configuration pool |
| production_route | Preserved-hide receipt → identity and grade check → passive dry holding → manual wrapping and in-store handover → returns and final-fate reconciliation |
| market_state | Untanned; dry-salted; whole; hair, salt and moisture states documented; in-store final own use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Incremental whole-hide retail service from retailer receiving gate to retained in-store customer acceptance |
| How much | One completed service for one whole same-configuration hide; not production of the merchandise |
| How well | Verified species, whole-hide integrity, grade, hair, preservation and contamination state satisfying the actual customer acceptance specification; no unsupported performance threshold |
| How long or cycle | Declared pool interval and return observation closure, covering receipt, holding, handover and late-return correction; no default holding duration |
| reference_flow_link | service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | In-store retail service for one whole dry-salted bovine raw hide |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | pool_id; configuration_id; final own-use customer and in-store channel; bovine species and origin; whole-hide specification and size or mass grade; untanned dry-salted preservation and hair state; original receipt and acceptance net mass; moisture and salt state and measurement method; acceptance specification and contamination state; receiving and customer gates; pool interval and returns closure; returns resale and loss responsibility; site electricity boundary and no mechanical conditioning evidence; asset and terminal responsibility ledgers; unresolved identity and background items |

Declare every required qualifier in the actual dataset. The service-flow UUID remains unverified; a raw-hide goods UUID cannot replace it. A count property and unit group alone do not establish service identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | service | Number of items | Item(s) | Count N only by unique qualified accepted whole hides ultimately retained by final customers; till lines and repeated handovers are not output. Externally retained refused goods remain a separate F fate. Financial-only price discounts preserve N. |
| physical_mass | ldpe_sheet; cotton_twine; water; hypochlorite_solution; saline_wastewater; discarded_hide; salt_sweepings; ldpe_scrap; twine_scrap; receipt_board; water_vapour; air_water; removed_load_cell; retired_scale; retired_rack; shell_demolition | Mass | kg | Record materials as net mass in their actual state; reconcile hide goods, salt and water separately. Exclude packaging and loose salt from hide acceptance net mass, retaining and declaring adherent salt and native water. Item count cannot stand in for unknown mass. |
| liquid_conversion | water; hypochlorite_solution; saline_wastewater | Mass | kg | Convert volume using measured density at the same batch and temperature; do not duplicate solution and active mass. Metered discharge does not add evaporation or storage change; imported supply meters do not subtract reuse again. |
| single_normalization | all inventory rows | Property of the defined exchange | per reference flow | Collect raw totals, attribute once, then divide by N once; retain totals for N=0 pools as unnormalizable, never delete or zero them. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole dry-salted bovine raw hides with preservation complete arrive at retailer receiving gate with goods, packaging, salt, water state and ownership documented |
| starting_condition_role | incremental_retail_service |
| product_classification_scope | Explicit subset of CPC 3.0 62115, raw hides of 0295; no tanned leather |
| recursive_input_rule | No unexplained recursive input of the same retail service; actual subcontracted steps require specific non-duplicated boundaries and cards |
| upstream_dataset_requirement | Use actual supplier data for inputs; merchandise and original inbound transport remain in goods chain, with service-responsibility permanent losses coupled once in lost_hide_supply |
| disclosure | Disclose gates, channel, all pools, goods/service background responsibility, assets, subcontractors and unknowns; this method is not a complete merchandise footprint or a standard-conformity claim |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_receipt` | service; lost_hide_supply; discarded_hide; receipt_board | At the same receiving gate, fix the goods-system owner of production, preservation, supplier packing and inbound transport for every hide. Successful/resold goods retain that owner; do not add provision for every input hide to this service. Service-caused irrecoverable losses transfer that original-gate background once through lost_hide_supply, including the matched inbound transport. Goods supplier returns require named continuing background ownership and verified fate; a credit or a refund does not prove recovery. | ghg-product-2011 |
| `boundary_terminal` | all inventory rows | Include all service operation, hygiene, packing, actual maintenance, relevant complete-asset manufacture/installation and terminal responsibility. Treatment providers begin at measured handover and identify collection/transport and treatment exactly once. Supplier datasets for assets exclude operation, replacement and end-of-life represented here. | jrc-retail-2013 |
| `boundary_screen` | all inventory rows | Screen utilities, refrigeration, combustion, chemical/pest treatment, transport, drainage, direct emissions, incoming packaging and all assets with site inspection, contracts and ledgers for the full pool. Only evidenced absence permits conditional exclusion; unknowns require collection. Actual exchanges outside named cards require bilingual atomic extension before dataset completeness. | jrc-retail-2013 |
| `boundary_external_fate` | service; lost_hide_supply; discarded_hide | Keep externally retained but refused goods as F with actual custodian and physical state; F is never N and is not automatically discarded_hide. Identify who continues production/preservation/inbound-transport background and whether a service-caused irreversible loss transfers that burden through lost_hide_supply. Until qualified acceptance, verified resale/return or confirmed disposal, keep fate and responsibility unresolved; a price discount alone changes neither goods fate nor N. | ghg-product-2011 |
| `boundary_capital_components` | building_shell; steel_rack; digital_scale; scale_load_cell; removed_load_cell; retired_scale; retired_rack; shell_demolition | The building_shell complete physical package includes its foundations, structural fabric, roof/walls/floors, permanent partitions, doors/windows, fixed electrical wiring/control distribution and permanently mounted luminaires, together with their initial installation. It excludes the independently represented steel_rack, digital_scale and all load cells, and excludes other movable/plug-in equipment, subsequent replacements/repairs, operation and terminal treatment. This fixed package scope is mandatory, not a later modeller choice. The shell_demolition carrier has the same component scope, limited to actual remaining material; rack, scale and separately removed parts never re-enter its terminal mass. If fixed components are separately removed, add the actual specific atomic carrier/event cards and reconcile the remaining shell carrier without subtracting already-net removed mass twice. Match supplier package bill/specification to this scope and an explicit cross-card overlap matrix; unknown composition, omission or overlap blocks dataset completeness until resolved. | ghg-product-2011; jrc-retail-2013 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Receiving, passive dry holding and in-store handover | required | All covered retail events, including failed presentations | foreground_service | N retained accepted whole-hide services |
| hygiene | Premises hygiene | conditional | Actual wet cleaning or specified cleaner; evidence-based absence required | supporting_process | Actual cleaning events attributed to N |
| fates | Goods responsibility and residual fates | required | All received hide identities and associated waste or ambient-water transfers | supporting_process | All cohort fates reconciled to N |
| capital | Manufacture and initial installation of used complete assets | required | All rack, scale and building shell capacity used, whether owned or leased | supporting_process | Persistent attributable complete-asset fractions |
| maintenance | Actual scale load-cell replacement | conditional | Dated work order establishes replacement; screen all other actual maintenance separately | supporting_process | Actual attributed replacement events |
| retirement | Terminal asset responsibility | required | Used assets require evidenced actual or prospective complete terminal carriers | supporting_process | Persistent full terminal-carrier responsibility |

### Process: Receiving, passive dry holding and in-store handover (`retail`)

#### Inputs

##### Product flows

###### Alternating current (`electricity`)

Point-of-use electricity for receiving, dry holding, lighting, checkout and weighing. Provider voltage and supply mix require separate site evidence; the identity establishes no supply performance. Inclusion: Always

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: 3.6 * E_attr / N; cp_electricity
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Low-density polyethylene wrapping sheet (`ldpe_sheet`)

New single-polymer LDPE sheet actually consumed for wrapping accepted or failed presentations. Customer-delivered packaging remains an input; its disposal after the customer gate is excluded. Inclusion: Only when LDPE wrapping is used; demonstrate absence by packaging specification and withdrawal ledger.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: LDPE_attr / N; cp_ldpe_sheet
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ldpe_sheet`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Uncoated cotton tying twine (`cotton_twine`)

One uncoated cotton twine product consumed in tying whole hides; not a selector for ropes of other fibres. Inclusion: Only when this twine is used; retain tying instructions and stock evidence for absence.

- Selected flow: Uncoated cotton tying twine
- Flow property / unit: Mass / kg
- Amount rule: Twine_attr / N; cp_cotton_twine
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cotton_twine`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

#### Outputs

##### Product flows

###### In-store retail service for one whole dry-salted bovine raw hide (`service`)

The counted product is a completed retail service at documented in-store customer acceptance. It is not the raw hide merchandise or a payment transaction. Inclusion: Always

- Selected flow: In-store retail service for one whole dry-salted bovine raw hide
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

### Process: Premises hygiene (`hygiene`)

#### Inputs

##### Product flows

###### Potable mains water at retail cleaning point (`water`)

Imported water for premises hygiene, never hide soaking, desalting or re-curing. Water supply production belongs to the provider; local use belongs here. Inclusion: When wet hygiene is used; absence needs cleaning procedure and water-use screening.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Water_attr_kg / N; cp_water
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Aqueous sodium hypochlorite cleaning solution (`hypochlorite_solution`)

One purchased formulated aqueous sodium hypochlorite solution for premises hygiene with actual active fraction and additives declared. This card prescribes no disinfectant, concentration or safety threshold. Inclusion: Only when this formulation is used; absence requires chemical inventory and cleaning procedure.

- Selected flow: Aqueous sodium hypochlorite cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Solution_attr_kg / N; cp_hypochlorite_solution
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hypochlorite_solution`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

#### Outputs

##### Waste flows

###### Saline premises-cleaning wastewater (`saline_wastewater`)

One actual wet carrier discharged from cleaning with measured chloride, suspended organic contamination and cleaner residues. It is not a sum of separate constituent waste exchanges. Inclusion: When wet hygiene has a discharged carrier; prove no discharge with procedure and tank/drain inspection. Unknown destination or volume is unresolved.

- Selected flow: Saline premises-cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Effluent_attr_kg / N; cp_saline_wastewater
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_saline_wastewater`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

### Process: Goods responsibility and residual fates (`fates`)

#### Inputs

##### Product flows

###### Whole dry-salted bovine raw hide at retailer receiving gate, attributable to service-caused loss (`lost_hide_supply`)

Background provision of unique hides permanently lost during the retail responsibility interval, including matching preservation and transport up to receiving. It is not an additional provision for every sold or returned hide. Inclusion: If permanent goods loss occurs; otherwise reconcile complete fate ledger proving none.

- Selected flow: Whole dry-salted bovine raw hide at retailer receiving gate, attributable to service-caused loss
- Flow property / unit: Number of items / Item(s)
- Amount rule: L / N; cp_lost_hide_supply
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lost_hide_supply`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

##### Elementary flows

###### Water absorbed from ambient air (`air_water`)

Native water transfer at the hide-air interface, assigned to ambient air. Salt shedding, liquid drainage and solid degradation are separate fates; unidentified mass difference is not water. Inclusion: Only for positively evidenced ambient-water uptake by hides in a measured interval.

- Selected flow: Water absorbed from ambient air
- Flow property / unit: Mass / kg
- Amount rule: Water_negative_kg / N; cp_air_water
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air_water`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

#### Outputs

##### Waste flows

###### Discarded whole dry-salted bovine raw hide (`discarded_hide`)

Irrecoverable spoiled or damaged hide actually handed to treatment, with adherent salt and native water included. Inclusion: Only when a physical hide is discarded; theft without recovered material is not automatically waste.

- Selected flow: Discarded whole dry-salted bovine raw hide
- Flow property / unit: Mass / kg
- Amount rule: W_discarded_hide / N; cp_discarded_hide
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_discarded_hide`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Used sodium-chloride sweepings contaminated with hide organic matter (`salt_sweepings`)

Segregated loose preservation salt collected with inseparable hide organic contamination; no clean-salt credit. Inclusion: When salt falls from received hides or is swept from the holding zone.

- Selected flow: Used sodium-chloride sweepings contaminated with hide organic matter
- Flow property / unit: Mass / kg
- Amount rule: W_salt_sweepings / N; cp_salt_sweepings
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_salt_sweepings`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Retail LDPE film offcuts (`ldpe_scrap`)

Only store-side ldpe offcuts and rejected wraps, excluding packaging handed to customers. Inclusion: When store-side LDPE scrap exists.

- Selected flow: Retail LDPE film offcuts
- Flow property / unit: Mass / kg
- Amount rule: W_ldpe_scrap / N; cp_ldpe_scrap
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ldpe_scrap`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Retail uncoated cotton twine offcuts (`twine_scrap`)

Only store-side uncoated cotton twine cut-offs, excluding cotton retained in customer wrapping. Inclusion: When store-side cotton cut-offs exist.

- Selected flow: Retail uncoated cotton twine offcuts
- Flow property / unit: Mass / kg
- Amount rule: W_twine_scrap / N; cp_twine_scrap
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_twine_scrap`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Discarded corrugated paperboard receipt packaging (`receipt_board`)

Segregated corrugated paperboard received with goods and discarded at the shop; its manufacture stays in the goods provision except the coupled lost-goods share. Inclusion: When incoming goods use corrugated board; document supplier packing specification for absence.

- Selected flow: Discarded corrugated paperboard receipt packaging
- Flow property / unit: Mass / kg
- Amount rule: W_receipt_board / N; cp_receipt_board
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_receipt_board`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

##### Elementary flows

###### Water vapour to ambient air (`water_vapour`)

Native water transfer at the hide-air interface, assigned to ambient air. Salt shedding, liquid drainage and solid degradation are separate fates; unidentified mass difference is not water. Inclusion: Only for positively evidenced native-hide water loss to air in a measured interval.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Water_positive_kg / N; cp_water_vapour
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_vapour`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

### Process: Manufacture and initial installation of used complete assets (`capital`)

#### Inputs

##### Product flows

###### Complete steel hide-storage rack (`steel_rack`)

A fraction of one specified complete physical asset, including manufacture and initial installation. Match an actual complete-asset supplier dataset; unrelated repair material masses cannot be called one asset. Inclusion: Always

- Selected flow: Complete steel hide-storage rack
- Flow property / unit: Number of items / Item(s)
- Amount rule: F_steel_rack / N; cp_steel_rack
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_rack`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Complete digital retail weighing scale (`digital_scale`)

A fraction of one specified complete physical asset, including manufacture and initial installation. Match an actual complete-asset supplier dataset; unrelated repair material masses cannot be called one asset. Inclusion: Always

- Selected flow: Complete digital retail weighing scale
- Flow property / unit: Number of items / Item(s)
- Amount rule: F_digital_scale / N; cp_digital_scale
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_digital_scale`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Complete retail building shell with fixed electrical and lighting installation (`building_shell`)

A fraction of one specified complete physical asset, including manufacture and initial installation. Match an actual complete-asset supplier dataset; unrelated repair material masses cannot be called one asset. Inclusion: Always

- Selected flow: Complete retail building shell with fixed electrical and lighting installation
- Flow property / unit: Number of items / Item(s)
- Amount rule: F_building_shell / N; cp_building_shell
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_building_shell`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

### Process: Actual scale load-cell replacement (`maintenance`)

#### Inputs

##### Product flows

###### Complete replacement weighing-scale load cell (`scale_load_cell`)

An actual installed replacement load cell matched to the scale, not an assumed annual replacement and not part of original scale manufacture. Inclusion: If load-cell replacement occurred; absence requires work-order and asset inspection evidence.

- Selected flow: Complete replacement weighing-scale load cell
- Flow property / unit: Number of items / Item(s)
- Amount rule: Part_attr / N; cp_scale_load_cell
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_scale_load_cell`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

#### Outputs

##### Waste flows

###### Removed complete load-cell electronic waste (`removed_load_cell`)

Measured terminal carrier of an identified load cell actually removed by the same dated replacement work order represented in scale_load_cell. Inclusion: Only an actual paired replacement/removal event qualifies; match maintenance_id, removed_part_id and the newly installed part record. No default prospective removal is assumed. An original load cell still inside the complete scale belongs only to retired_scale and cannot have this separate terminal flow. Keep the retired scale at its measured remaining net mass; earlier removed parts are not subtracted again. Unknown mass or route after an actual removal remains unresolved rather than absent.

- Selected flow: Removed complete load-cell electronic waste
- Flow property / unit: Mass / kg
- Amount rule: T_removed_load_cell / N; cp_removed_load_cell
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_removed_load_cell`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

### Process: Terminal asset responsibility (`retirement`)

#### Outputs

##### Waste flows

###### Retired complete digital-scale electronic waste (`retired_scale`)

Measured terminal carrier of the whole scale after separately documented earlier parts removal. Terminal handling and treatment are outside manufacture/initial-installation and outside ordinary operation. Inclusion: Include when the asset/part is present, with documented future or actual terminal route; unknown mass or route is unresolved rather than absent.

- Selected flow: Retired complete digital-scale electronic waste
- Flow property / unit: Mass / kg
- Amount rule: T_retired_scale / N; cp_retired_scale
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retired_scale`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Retired complete steel-rack scrap (`retired_rack`)

Measured terminal carrier of the whole rack including its attached coating. Terminal handling and treatment are outside manufacture/initial-installation and outside ordinary operation. Inclusion: Include when the asset/part is present, with documented future or actual terminal route; unknown mass or route is unresolved rather than absent.

- Selected flow: Retired complete steel-rack scrap
- Flow property / unit: Mass / kg
- Amount rule: T_retired_rack / N; cp_retired_rack
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retired_rack`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Mixed retail-building shell and fixed-installation demolition waste (`shell_demolition`)

Measured terminal carrier of the one physically mixed shell demolition carrier with documented constituents. Terminal handling and treatment are outside manufacture/initial-installation and outside ordinary operation. Inclusion: Include when the asset/part is present, with documented future or actual terminal route; unknown mass or route is unresolved rather than absent.

- Selected flow: Mixed retail-building shell and fixed-installation demolition waste
- Flow property / unit: Mass / kg
- Amount rule: T_shell_demolition / N; cp_shell_demolition
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_demolition`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_pool` | all inventory rows | Declare a prospective pool by configuration, site and interval before outcomes are known. Retain unsuccessful, zero-sale, closed and idle cohorts in the same configuration pool; a pool with N=0 retains its numerator and is explicitly unnormalizable. Do not join unrelated configurations to manufacture output. Later physical returns and resale revise the original pool service numerator, N and fates using actual event dates; never allocate the same history to a new pool as fresh work. | ghg-product-2011 |
| `allocation_drivers` | all inventory rows | Prefer direct subdivision and meters. Attribute shared lighting/holding by measured occupied area-hours across all actual goods; scale/checkout equipment and repair by recorded task-minutes; hygiene by measured affected area and cleaning events; rack by occupied capacity-hours; building shell by area-hours. Reconcile direct plus shared allocation to full measured totals, retaining common idle/closed/failure burdens. Declare continuing capacity beneficiaries before zero-driver intervals; missing beneficiary or zero total driver remains unresolved. Do not substitute sales value or sold-hide count for a demonstrated physical driver. | ghg-product-2011 |
| `allocation_asset` | steel_rack; digital_scale; building_shell; scale_load_cell; removed_load_cell; retired_scale; retired_rack; shell_demolition | Keep one persistent ledger per complete asset for all beneficiaries and periods. Allocate only the attributable remaining manufacture/installation fraction, carry past attribution and final residual, and correct histories after lifespan revisions without restarting the whole burden. Keep operations, actual replacements and terminal carrier accounting disjoint. Terminal responsibility uses its own reconciled full-life fractions; applying both that fraction and a manufacturing fraction to the same terminal mass is prohibited. | ghg-product-2011 |
| `allocation_fate` | all inventory rows | There is no saleable co-product credit in this route. Contaminated salt, hides and packaging are actual carriers linked to receiving treatment; record reuse or supplier return only with recipient/state/continuing ownership evidence. No automatic waste or avoided-product credit for refused goods or failed handover. Any recovered saleable output needs a named card, actual function and independently reviewed allocation before use. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_electricity | retail | electricity | measured_event_ledger | meter_id; interval_id; opening_kWh; closing_kWh; direct_kWh; common_kWh; beneficiary_id; area_hours; staff_task_minutes; outage; closed_period | Read verified meters every interval and reconcile billing and submeter boundaries. Separate direct task electricity from common lighting; allocate the latter by measured occupied area-hours across all merchandise beneficiaries including idle stock. Use recorded staff task minutes only for checkout equipment. Preserve closed, failed and zero-driver intervals with a documented continuing-capacity beneficiary; missing driver is unresolved. | MJ | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_ldpe_sheet | retail | ldpe_sheet | measured_event_ledger | roll_id; opening_kg; receipts_kg; closing_kg; issued_kg; unused_return_kg; shared_use_kg; event_id; offcut_id | Weigh issued rolls and unused returns on a calibrated scale and reconcile to hide events, including wasted wraps and rewrapping. Quantity uses issue minus unused return minus independently recorded other-beneficiary use. Opening stock plus receipts minus closing stock is an independent reconciliation only; internal returns are already in closing stock and cannot be subtracted again from net stock depletion. Confirm polymer and additives with supplier specification; another laminate needs its own card. | kg | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_cotton_twine | retail | cotton_twine | measured_event_ledger | spool_id; dispensed_kg; unused_return_kg; other_use_kg; measured_m; measured_kg_per_m; event_id; material_spec | Weigh issued spools and unused returns; match consumption and cut-offs to the same service events. Verify fibre and coating composition. Use measured length times supplier-verified measured linear mass only when direct mass is unavailable; retain the calibration sample. | kg | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_service | retail | service | measured_event_ledger | pool_id; hide_id; configuration_id; receipt_event; original_sale_event; presentation_event; event_date; accepted; qualified_acceptance; refused; externally_retained_refused_F; physical_return; refund_only; resale; transfer; final_state; final_recipient; closure_date; receipt_net_kg; accepted_net_kg; grade; species; preservation; hair_state; moisture_method; salt_state | Scan each whole-hide identity from receiving through final fate. Reconcile till, acceptance signature, stock count and physical return records at every event and pool closure. Count each qualified accepted and ultimately retained hide once. A refused hide still physically held by an external person is F, not output N; record actual recipient, state and continuing background responsibility independently. Refusal, internal transfer and repeated presentation create no output. Financial-only refunds or price discounts do not change N without a physical or qualification reversal. Record actual dates of late physical returns; reopen the original pool numerator and denominator and link resale without recounting its earlier burdens. | Item(s) | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_water | hygiene | water | measured_event_ledger | meter_id; interval_id; quantity_mode; direct_import_kg; imported_m3; density_kg_per_m3; temperature_C; task_id; beneficiary_id; allocated_fraction | Read imported-water meter at cleaning events and reconcile to supply invoice and all beneficiaries. Obtain density for recorded temperature from traceable site or supplier measurement. Metered imports already exclude internal reuse; do not subtract reuse again. Distinguish hygiene from hide processing, which is outside this route. | kg | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_hypochlorite_solution | hygiene | hypochlorite_solution | measured_event_ledger | product_id; batch_id; quantity_mode; solution_kg; measured_solution_m3; density_kg_per_m3; active_mass_fraction; additive_composition; temperature_C; unused_return_kg; task_id; allocation_fraction | Weigh the actual product withdrawn and returned, verify formulation and dated SDS, and match cleaning events. If measured by volume, use that batch density and temperature. Input is formulated solution mass; retain active mass as an auxiliary check, not an additional product input. Another cleaner requires another named atomic card. | kg | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_saline_wastewater | hygiene | saline_wastewater | measured_event_ledger | discharge_id; discharge_m3; effluent_density_kg_per_m3; temperature_C; chloride; solids; residual_oxidant; recipient_id; treatment_boundary; allocated_fraction; transport_manifest | Measure actual drain or tank discharge using calibrated flow measurement and representative sample density. Retain receiving sewer or offsite treatment acceptance, composition and route. Provider treatment begins at documented handover; keep transport either in its provider bundle or as a separate measured service, never both. Record evaporation and retained water independently from discharge. | kg | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_lost_hide_supply | fates | lost_hide_supply | measured_event_ledger | hide_id; receipt_event; original_pool_id; receipt_net_kg; species; preservation; grade; loss_event; loss_cause; final_recipient; supplier_return_acceptance; background_owner; supplier_dataset_basis; inbound_transport_scope | Use a single-process view of cp_service original event IDs. Identify irrecoverable losses under retailer responsibility and reconcile to physical stock and receiver confirmations. Re-sold or transferable goods remain in the original goods background chain; supplier returns retain identified continuing ownership. Missing/stolen goods retain upstream burden even when no waste carrier is recovered. Match each whole-hide provider to original receipt mass and preserved state. | Item(s) | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_discarded_hide | fates | discarded_hide | measured_event_ledger | hide_id; waste_id; gross_kg; tare_kg; disposal_state; salt_content; moisture; recipient_id; route; background_owner | Weigh each segregated carrier before handover on a calibrated scale, subtract container tare, record actual moisture and contamination, and match waste ID and original hide or receipt IDs to a signed receiver/route record. Retain storage changes; do not count a carrier again as its constituents or as a treatment-service mass. No automatic substitution credit. Unknown absence, mass or treatment boundary blocks completeness. | kg | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_salt_sweepings | fates | salt_sweepings | measured_event_ledger | waste_id; gross_kg; tare_kg; moisture; chloride; organic_fraction; hide_event_ids; recipient_id; route | Weigh each segregated carrier before handover on a calibrated scale, subtract container tare, record actual moisture and contamination, and match waste ID and original hide or receipt IDs to a signed receiver/route record. Retain storage changes; do not count a carrier again as its constituents or as a treatment-service mass. No automatic substitution credit. Unknown absence, mass or treatment boundary blocks completeness. | kg | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_ldpe_scrap | fates | ldpe_scrap | measured_event_ledger | waste_id; gross_kg; tare_kg; polymer; contamination; event_ids; recipient_id; route | Weigh each segregated carrier before handover on a calibrated scale, subtract container tare, record actual moisture and contamination, and match waste ID and original hide or receipt IDs to a signed receiver/route record. Retain storage changes; do not count a carrier again as its constituents or as a treatment-service mass. No automatic substitution credit. Unknown absence, mass or treatment boundary blocks completeness. | kg | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_twine_scrap | fates | twine_scrap | measured_event_ledger | waste_id; gross_kg; tare_kg; fibre; contamination; event_ids; recipient_id; route | Weigh each segregated carrier before handover on a calibrated scale, subtract container tare, record actual moisture and contamination, and match waste ID and original hide or receipt IDs to a signed receiver/route record. Retain storage changes; do not count a carrier again as its constituents or as a treatment-service mass. No automatic substitution credit. Unknown absence, mass or treatment boundary blocks completeness. | kg | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_receipt_board | fates | receipt_board | measured_event_ledger | waste_id; receipt_id; gross_kg; tare_kg; coating; moisture; contamination; recipient_id; route | Weigh each segregated carrier before handover on a calibrated scale, subtract container tare, record actual moisture and contamination, and match waste ID and original hide or receipt IDs to a signed receiver/route record. Retain storage changes; do not count a carrier again as its constituents or as a treatment-service mass. No automatic substitution credit. Unknown absence, mass or treatment boundary blocks completeness. | kg | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_water_vapour | fates | water_vapour | measured_event_ledger | hide_id; interval_id; opening_net_kg; closing_net_kg; opening_water_fraction; closing_water_fraction; moved_water_kg; moisture_method; uncertainty; air_compartment | Pair calibrated net weighing with representative moisture measurements on the same tagged state and interval, correct explicit receiving/sales/returns/waste movements, and reconcile salt and tissue balances separately. Resolve the air compartment and sign above measurement uncertainty. Do not infer a default moisture content; unknown differences remain unresolved. Keep intervals disjoint, with no simultaneous opposite-direction net flow for one interval. | kg | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_air_water | fates | air_water | measured_event_ledger | hide_id; interval_id; opening_net_kg; closing_net_kg; opening_water_fraction; closing_water_fraction; moved_water_kg; moisture_method; uncertainty; air_compartment | Pair calibrated net weighing with representative moisture measurements on the same tagged state and interval, correct explicit receiving/sales/returns/waste movements, and reconcile salt and tissue balances separately. Resolve the air compartment and sign above measurement uncertainty. Do not infer a default moisture content; unknown differences remain unresolved. Keep intervals disjoint, with no simultaneous opposite-direction net flow for one interval. | kg | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_steel_rack | capital | steel_rack | measured_event_ledger | asset_id; rack dimensions and load rating; factory coating; installed configuration; commissioned_date; ledger_snapshot_at; current_pool_start; total_life_capacity; prior_attributed_fraction; period_capacity; pool_capacity; remaining_all_capacity; all_beneficiaries; idle_capacity; revised_life_capacity; background_boundary | Maintain a persistent asset ledger across periods and all merchandise beneficiaries. Document the complete product count and technical specification, supplier manufacture/installation scope, measured occupied rack-capacity-hours, scale task-minutes or building area-hours as applicable. Allocate idle capacity to documented continuing beneficiaries. Carry cumulative fractions, residual responsibility and revised expected service capacity forward; no fresh full manufacturing burden on a lifespan revision. Exclude operation, replacements and terminal treatment from this provider. | Item(s) | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_digital_scale | capital | digital_scale | measured_event_ledger | asset_id; rated capacity; accuracy class; platform; electronics; power source; commissioned_date; ledger_snapshot_at; current_pool_start; total_life_capacity; prior_attributed_fraction; period_capacity; pool_capacity; remaining_all_capacity; all_beneficiaries; idle_capacity; revised_life_capacity; background_boundary | Maintain a persistent asset ledger across periods and all merchandise beneficiaries. Document the complete product count and technical specification, supplier manufacture/installation scope, measured occupied rack-capacity-hours, scale task-minutes or building area-hours as applicable. Allocate idle capacity to documented continuing beneficiaries. Carry cumulative fractions, residual responsibility and revised expected service capacity forward; no fresh full manufacturing burden on a lifespan revision. Exclude operation, replacements and terminal treatment from this provider. | Item(s) | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_building_shell | capital | building_shell | measured_event_ledger | asset_id; building_id; structural_fabric_spec; floor_area; fixed_wiring_and_luminaires_spec; initial_installation_spec; excluded_independent_assets; package_scope_matrix; commissioned_date; ledger_snapshot_at; current_pool_start; total_life_capacity; prior_attributed_fraction; period_capacity; pool_capacity; remaining_all_capacity; all_beneficiaries; idle_capacity; revised_life_capacity; background_boundary | Maintain a persistent asset ledger across periods and all merchandise beneficiaries. Document the complete product count and technical specification, supplier manufacture/installation scope, measured occupied rack-capacity-hours, scale task-minutes or building area-hours as applicable. Allocate idle capacity to documented continuing beneficiaries. Carry cumulative fractions, residual responsibility and revised expected service capacity forward; no fresh full manufacturing burden on a lifespan revision. Exclude operation, replacements and terminal treatment from this provider. | Item(s) | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_scale_load_cell | maintenance | scale_load_cell | measured_event_ledger | maintenance_id; asset_id; part_id; compatible_spec; installed_count; installation_scope; event_date; beneficiary_driver; all_beneficiary_driver; event_beneficiary_fraction; removed_part_id | Reconcile dated work order, part invoice, installed serial number and removed part. Allocate the actual event across all beneficiaries using documented scale tasks; include technician travel and installation once in the specified provider boundary or separate atomic cards. Do not use an unsupported recurring frequency. Other repairs require their own measured cards before claiming completeness. | Item(s) | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_removed_load_cell | maintenance | removed_load_cell | measured_event_ledger | maintenance_id; asset_id; removed_part_id; installed_part_id; removed_count; linked_replacement_count; event_id; gross_kg; tare_kg; carrier_composition; terminal_fraction; lifetime_pool_capacity; lifetime_all_capacity; prior_terminal_attribution; recipient_id; treatment_scope; transport_scope | Match the actual scale_load_cell replacement work order and one-to-one identified removed/installed parts; reconcile removed_count with linked_replacement_count and retain original serial identity. Weigh the removed complete cell at handover, subtract container tare once and retain receiver, treatment and transport boundaries. Use this part’s capacity-time history only up to its actual removal; no future beneficiaries after removal. The original cell still inside a complete retired scale has no separate removed-part carrier. A separately weighed remaining scale already excludes removed parts and is not reduced again. Record unknown mass or route as unresolved. | kg | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_retired_scale | retirement | retired_scale | measured_event_ledger | asset_id; event_id; gross_kg; tare_kg; earlier_removed_kg; carrier_composition; terminal_fraction; lifetime_pool_capacity; lifetime_all_capacity; prior_terminal_attribution; recipient_id; treatment_scope; transport_scope | Weigh the actual complete outgoing carrier or use a traceable complete-asset bill and verified mass. Record any earlier removed parts and ensure the terminal scale mass already excludes them before using an explicit subtraction. Use the persistent terminal-responsibility ledger across every historical beneficiary and period; reconcile the full terminal mass once. A pre-retirement estimate must use a documented complete-asset mass and named prospective treatment route, flagged uncertain and replaced at retirement; no invented mass or fate. Provider treatment and collection/transport occur once. | kg | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_retired_rack | retirement | retired_rack | measured_event_ledger | asset_id; event_id; gross_kg; tare_kg; earlier_removed_kg; carrier_composition; terminal_fraction; lifetime_pool_capacity; lifetime_all_capacity; prior_terminal_attribution; recipient_id; treatment_scope; transport_scope | Weigh the actual complete outgoing carrier or use a traceable complete-asset bill and verified mass. Record any earlier removed parts and ensure the terminal scale mass already excludes them before using an explicit subtraction. Use the persistent terminal-responsibility ledger across every historical beneficiary and period; reconcile the full terminal mass once. A pre-retirement estimate must use a documented complete-asset mass and named prospective treatment route, flagged uncertain and replaced at retirement; no invented mass or fate. Provider treatment and collection/transport occur once. | kg | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |
| cp_shell_demolition | retirement | shell_demolition | measured_event_ledger | asset_id; event_id; gross_kg; tare_kg; earlier_removed_kg; carrier_composition; terminal_fraction; lifetime_pool_capacity; lifetime_all_capacity; prior_terminal_attribution; recipient_id; treatment_scope; transport_scope | Weigh the actual complete outgoing carrier or use a traceable complete-asset bill and verified mass. Record any earlier removed parts and ensure the terminal scale mass already excludes them before using an explicit subtraction. Use the persistent terminal-responsibility ledger across every historical beneficiary and period; reconcile the full terminal mass once. A pre-retirement estimate must use a documented complete-asset mass and named prospective treatment route, flagged uncertain and replaced at retirement; no invented mass or fate. Provider treatment and collection/transport occur once. | kg | Every event and reconcile at pool closure | Full pool including failures, closed/idle intervals and late-return revisions | Declared site/configuration; retain original event IDs and all beneficiaries | per reference flow | Calibration, raw readings, stocktake, specification, signed acceptance, allocation and versioned reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_electricity | electricity | E_attr = direct_kWh + sum(common_kWh * eligible_driver / all_beneficiary_driver); electricity_MJ = 3.6 * E_attr / N. The kWh-to-MJ conversion is applied once after attribution. | direct_kWh; common_kWh; eligible_driver; all_beneficiary_driver; N; cp_electricity | electricity_MJ | ghg-product-2011; jrc-retail-2013 |
| calc_ldpe_sheet | ldpe_sheet | LDPE_attr = issued_kg - unused_return_kg - shared_use_kg; LDPE_per_service = LDPE_attr / N. | opening_kg; receipts_kg; closing_kg; issued_kg; unused_return_kg; shared_use_kg; N; cp_ldpe_sheet | LDPE_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_cotton_twine | cotton_twine | Twine_attr = dispensed_kg - unused_return_kg - other_use_kg; twine_per_service = Twine_attr / N. If length is used, dispensed_kg = measured_m * measured_kg_per_m. | dispensed_kg; unused_return_kg; other_use_kg; measured_m; measured_kg_per_m; N; cp_cotton_twine | twine_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_service | service | N = count(unique hide_id with qualified acceptance and final customer retention in the declared same-configuration pool); service_output = 1 Item(s). Later physical reversals revise original N and all attributable service totals, not only the denominator. An ultimately resold hide is counted once at its latest retained acceptance with its entire connected history. | hide_id; configuration_id; accepted; qualified_acceptance; physical_return; resale; final_state; closure_date; cp_service | N | ghg-product-2011; jrc-retail-2013 |
| calc_water | water | import_kg = direct_import_kg in quantity_mode=mass or imported_m3 * density_kg_per_m3 in quantity_mode=volume, mutually exclusive; Water_attr_kg = sum(import_kg * allocated_fraction); water_per_service = Water_attr_kg / N. Directly measured mass replaces volume-density conversion, never adds to it. | quantity_mode; direct_import_kg; imported_m3; density_kg_per_m3; allocated_fraction; N; cp_water | water_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_hypochlorite_solution | hypochlorite_solution | solution_kg is measured issued solution mass in quantity_mode=mass or measured_solution_m3 * density_kg_per_m3 in quantity_mode=volume, mutually exclusive; Solution_attr_kg = sum((solution_kg - unused_return_kg) * allocation_fraction); solution_per_service = Solution_attr_kg / N; auxiliary_active_kg = Solution_attr_kg * active_mass_fraction. Apply no second active-content multiplier to the solution exchange. | quantity_mode; solution_kg; measured_solution_m3; density_kg_per_m3; unused_return_kg; allocation_fraction; active_mass_fraction; N; cp_hypochlorite_solution | solution_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_saline_wastewater | saline_wastewater | Effluent_attr_kg = sum(discharge_m3 * effluent_density_kg_per_m3 * allocated_fraction); effluent_per_service = Effluent_attr_kg / N. This measured-discharge mode does not add a supply-minus-evaporation reconstruction. | discharge_m3; effluent_density_kg_per_m3; allocated_fraction; N; cp_saline_wastewater | effluent_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_lost_hide_supply | lost_hide_supply | L = count(unique permanently lost hide_id with service background responsibility); loss_provision = L / N. A mass-based supplier model uses sum(original_receipt_net_kg for those hide_id) once, converted to the same whole-hide provision, without applying the loss fraction again. | hide_id; loss_event; background_owner; receipt_net_kg; N; cp_lost_hide_supply | loss_provision | ghg-product-2011; jrc-retail-2013 |
| calc_discarded_hide | discarded_hide | W_discarded_hide = sum((gross_kg - tare_kg) attributable to this pool); discarded_hide_per_service = W_discarded_hide / N. Document collection-to-treatment transport once in the receiving provider boundary or a separate atomic transport card. | gross_kg; tare_kg; waste_id; recipient_id; N; cp_discarded_hide | discarded_hide_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_salt_sweepings | salt_sweepings | W_salt_sweepings = sum((gross_kg - tare_kg) attributable to this pool); salt_sweepings_per_service = W_salt_sweepings / N. Document collection-to-treatment transport once in the receiving provider boundary or a separate atomic transport card. | gross_kg; tare_kg; waste_id; recipient_id; N; cp_salt_sweepings | salt_sweepings_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_ldpe_scrap | ldpe_scrap | W_ldpe_scrap = sum((gross_kg - tare_kg) attributable to this pool); ldpe_scrap_per_service = W_ldpe_scrap / N. Document collection-to-treatment transport once in the receiving provider boundary or a separate atomic transport card. | gross_kg; tare_kg; waste_id; recipient_id; N; cp_ldpe_scrap | ldpe_scrap_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_twine_scrap | twine_scrap | W_twine_scrap = sum((gross_kg - tare_kg) attributable to this pool); twine_scrap_per_service = W_twine_scrap / N. Document collection-to-treatment transport once in the receiving provider boundary or a separate atomic transport card. | gross_kg; tare_kg; waste_id; recipient_id; N; cp_twine_scrap | twine_scrap_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_receipt_board | receipt_board | W_receipt_board = sum((gross_kg - tare_kg) attributable to this pool); receipt_board_per_service = W_receipt_board / N. Document collection-to-treatment transport once in the receiving provider boundary or a separate atomic transport card. | gross_kg; tare_kg; waste_id; recipient_id; N; cp_receipt_board | receipt_board_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_water_vapour | water_vapour | B = opening_net_kg * opening_water_fraction - closing_net_kg * closing_water_fraction - moved_water_kg; Water_positive_kg = sum(B only for identified-air intervals where B > uncertainty); water_vapour_per_service = Water_positive_kg / N. moved_water_kg = measured outgoing carried water - measured incoming carried water, covering receipt, physical returns, dispatch, waste salt/waste hides and any measured runoff water. Keep premises-hygiene water outside the native-hide balance. Accept an air-transfer amount only when its sign exceeds stated uncertainty and the cause is identified; unknown or within-uncertainty residuals remain unresolved, not zero or automatic air exchange. Any actual runoff requires its own atomic carrier card. This does not measure simultaneous gross exchange. | opening_net_kg; closing_net_kg; opening_water_fraction; closing_water_fraction; moved_water_kg; uncertainty; N; cp_water_vapour | water_vapour_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_air_water | air_water | B = opening_net_kg * opening_water_fraction - closing_net_kg * closing_water_fraction - moved_water_kg; Water_negative_kg = sum(-B only for identified-air intervals where B < -uncertainty); air_water_per_service = Water_negative_kg / N. moved_water_kg = measured outgoing carried water - measured incoming carried water, covering receipt, physical returns, dispatch, waste salt/waste hides and any measured runoff water. Keep premises-hygiene water outside the native-hide balance. Accept an air-transfer amount only when its sign exceeds stated uncertainty and the cause is identified; unknown or within-uncertainty residuals remain unresolved, not zero or automatic air exchange. Any actual runoff requires its own atomic carrier card. This does not measure simultaneous gross exchange. | opening_net_kg; closing_net_kg; opening_water_fraction; closing_water_fraction; moved_water_kg; uncertainty; N; cp_air_water | air_water_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_steel_rack | steel_rack | F_steel_rack = (1 - prior_attributed_fraction) * pool_capacity / remaining_all_capacity; steel_rack_per_service = F_steel_rack / N. prior_attributed_fraction is the finalized cumulative fraction strictly before this pool’s current period; pool_capacity is this current pool’s assigned capacity-time including idle responsibility. At that same ledger snapshot, remaining_all_capacity includes this current pool plus every remaining future beneficiary exposure, all in the same asset-specific dimension. A revised current-pool fraction replaces its prior version and is never added to it. Allocate scale available minutes by recorded tasks plus documented idle responsibility, rack capacity-hours and shell area-hours consistently. Carry prior finalized fractions across periods, reconcile capacities to measured availability, and assign final residual once. On revised lifetime replace affected historical fractions and remaining capacity in a versioned complete ledger, rather than adding a fresh whole asset or applying a second beneficiary share. | asset_id; ledger_snapshot_at; current_pool_start; prior_attributed_fraction; pool_capacity; remaining_all_capacity; revised_life_capacity; N; cp_steel_rack | steel_rack_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_digital_scale | digital_scale | F_digital_scale = (1 - prior_attributed_fraction) * pool_capacity / remaining_all_capacity; digital_scale_per_service = F_digital_scale / N. prior_attributed_fraction is the finalized cumulative fraction strictly before this pool’s current period; pool_capacity is this current pool’s assigned capacity-time including idle responsibility. At that same ledger snapshot, remaining_all_capacity includes this current pool plus every remaining future beneficiary exposure, all in the same asset-specific dimension. A revised current-pool fraction replaces its prior version and is never added to it. Allocate scale available minutes by recorded tasks plus documented idle responsibility, rack capacity-hours and shell area-hours consistently. Carry prior finalized fractions across periods, reconcile capacities to measured availability, and assign final residual once. On revised lifetime replace affected historical fractions and remaining capacity in a versioned complete ledger, rather than adding a fresh whole asset or applying a second beneficiary share. | asset_id; ledger_snapshot_at; current_pool_start; prior_attributed_fraction; pool_capacity; remaining_all_capacity; revised_life_capacity; N; cp_digital_scale | digital_scale_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_building_shell | building_shell | F_building_shell = (1 - prior_attributed_fraction) * pool_capacity / remaining_all_capacity; building_shell_per_service = F_building_shell / N. prior_attributed_fraction is the finalized cumulative fraction strictly before this pool’s current period; pool_capacity is this current pool’s assigned capacity-time including idle responsibility. At that same ledger snapshot, remaining_all_capacity includes this current pool plus every remaining future beneficiary exposure, all in the same asset-specific dimension. A revised current-pool fraction replaces its prior version and is never added to it. Allocate scale available minutes by recorded tasks plus documented idle responsibility, rack capacity-hours and shell area-hours consistently. Carry prior finalized fractions across periods, reconcile capacities to measured availability, and assign final residual once. On revised lifetime replace affected historical fractions and remaining capacity in a versioned complete ledger, rather than adding a fresh whole asset or applying a second beneficiary share. | asset_id; ledger_snapshot_at; current_pool_start; prior_attributed_fraction; pool_capacity; remaining_all_capacity; revised_life_capacity; N; cp_building_shell | building_shell_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_scale_load_cell | scale_load_cell | event_beneficiary_fraction = beneficiary_driver / all_beneficiary_driver from actual scale tasks, with documented idle responsibility retained; Part_attr = sum(actual installed_count * event_beneficiary_fraction); part_per_service = Part_attr / N. A provider including installation cannot be paired with a duplicate installation service. | installed_count; beneficiary_driver; all_beneficiary_driver; event_beneficiary_fraction; maintenance_id; N; cp_scale_load_cell | part_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_removed_load_cell | removed_load_cell | terminal_fraction = lifetime_pool_capacity / lifetime_all_capacity; T_removed_load_cell = sum((gross_kg - tare_kg) * terminal_fraction); removed_load_cell_per_service = T_removed_load_cell / N. Use only this actually removed part’s lifetime capacity-time through its matched scale_load_cell work-order removal date, including allocated idle responsibility; no later future beneficiaries exist. Reconcile maintenance_id and removed_part_id against the paired installed part and one-to-one removed/replacement counts. Do not independently include an original cell still present inside retired_scale. Final fractions sum to one. Replace prior_terminal_attribution for the original pool with the revised T, record the delta separately, and do not add both versions or the delta to T. Never subtract earlier_removed_kg from an already net carrier or multiply a manufacture fraction again. | maintenance_id; removed_part_id; removed_count; linked_replacement_count; gross_kg; tare_kg; lifetime_pool_capacity; lifetime_all_capacity; prior_terminal_attribution; N; cp_removed_load_cell | removed_load_cell_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_retired_scale | retired_scale | terminal_fraction = lifetime_pool_capacity / lifetime_all_capacity; T_retired_scale = sum((gross_kg - tare_kg) * terminal_fraction); retired_scale_per_service = T_retired_scale / N. Use the same asset capacity-time partition including idle responsibility across all actual and projected lifetime beneficiaries; missing future capacity remains uncertain. Final fractions sum to one. Replace prior_terminal_attribution for the original pool with the revised T, record the delta separately, and do not add both versions or the delta to T. Never subtract earlier_removed_kg from an already net carrier or multiply a manufacture fraction again. | gross_kg; tare_kg; lifetime_pool_capacity; lifetime_all_capacity; prior_terminal_attribution; N; cp_retired_scale | retired_scale_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_retired_rack | retired_rack | terminal_fraction = lifetime_pool_capacity / lifetime_all_capacity; T_retired_rack = sum((gross_kg - tare_kg) * terminal_fraction); retired_rack_per_service = T_retired_rack / N. Use the same asset capacity-time partition including idle responsibility across all actual and projected lifetime beneficiaries; missing future capacity remains uncertain. Final fractions sum to one. Replace prior_terminal_attribution for the original pool with the revised T, record the delta separately, and do not add both versions or the delta to T. Never subtract earlier_removed_kg from an already net carrier or multiply a manufacture fraction again. | gross_kg; tare_kg; lifetime_pool_capacity; lifetime_all_capacity; prior_terminal_attribution; N; cp_retired_rack | retired_rack_per_service | ghg-product-2011; jrc-retail-2013 |
| calc_shell_demolition | shell_demolition | terminal_fraction = lifetime_pool_capacity / lifetime_all_capacity; T_shell_demolition = sum((gross_kg - tare_kg) * terminal_fraction); shell_demolition_per_service = T_shell_demolition / N. Use the same asset capacity-time partition including idle responsibility across all actual and projected lifetime beneficiaries; missing future capacity remains uncertain. Final fractions sum to one. Replace prior_terminal_attribution for the original pool with the revised T, record the delta separately, and do not add both versions or the delta to T. Never subtract earlier_removed_kg from an already net carrier or multiply a manufacture fraction again. | gross_kg; tare_kg; lifetime_pool_capacity; lifetime_all_capacity; prior_terminal_attribution; N; cp_shell_demolition | shell_demolition_per_service | ghg-product-2011; jrc-retail-2013 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Verify each real atomic flow, direction, type, state, medium, property/unit and bilingual name. Blank UUIDs remain unresolved; a similar good or mass property cannot complete service identity. Complete supplier background and measured quantities before claiming dataset completeness. | Official originals, integrity records, supplier specifications and per-card review |
| coverage | all inventory rows | Record present, evidenced absent or unknown per card; unknown is not zero. Reconcile all actual exchanges outside named cards and extend atomic cards and bilingual protocols. | Full-pool inspection, contracts, consumable/maintenance ledgers, drainage and waste fates |
| event_history | service; lost_hide_supply; discarded_hide | Maintain unique hide histories; distinguish physical returns from refunds only; recompute original numerator, denominator and final responsibility together, without recreating background at resale. | Versioned event ledger, stock, acceptance and supplier/treatment confirmations |
| mass_state | all inventory rows | Declare measured hair, adherent salt, loose salt, net mass, water and contamination states; reconcile tissue solids, salt, water and packing separately. Unidentified loss is not evaporation or waste; subtract container tare once. | Same-tag weighing, representative moisture/salt analysis, stocktake and uncertainty |
| asset_history | capital; maintenance; retirement | Keep manufacture/installation, operation, replacement and retirement disjoint, with traceable complete-asset specifications/fractions; lifespan revisions correct history across all beneficiaries. Unknown terminal mass/fate must be disclosed and collected, not zeroed. | Persistent asset ledger, work orders, complete-product supplier scope, terminal carrier and fate confirmations |
| capital_package_scope | building_shell; steel_rack; digital_scale; scale_load_cell; removed_load_cell; retired_scale; retired_rack; shell_demolition | Supplier/manufacturer complete-package identity and bill must match boundary_capital_components; verify included permanent wiring/luminaires and excluded independent rack/scale/load cells and repairs. Require the same original/remaining component scope at shell demolition. Unresolved supplier scope or overlap is a blocking coverage gap. | Supplier bill and installation specification, asset IDs, cross-card component/overlap matrix, removal work orders and measured terminal carrier reconciliation |
| normalization | all inventory rows | Make full-pool raw quantities and single attribution reproducible; divide by N only at the end, with zero-output pools unnormalizable; reconcile all fractions to measured totals without repeated composition/destination multipliers. | Numerator, N, complete drivers, allocation totals, formula units and revision deltas |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope` | service | Reject a dataset whose species, preservation state, whole-hide configuration, final own-use customer or physical channel does not meet the declared scope. Require all qualifiers and gate responsibilities. Scope changes require methodology review rather than silent substitution. | un-cpc-62115 |
| `validation_inventory` | all inventory rows | Require one unique protocol process_id per card matching its inventory process, stable raw event IDs, complete units, declared calculations and verified supplier boundaries. Single-process views of shared event/asset ledgers reuse original IDs but never duplicate amounts. Unknown identities, quantities, absence, or background/terminal responsibility must appear as unresolved coverage, never approved completeness. | ghg-product-2011; jrc-retail-2013 |
| `validation_reconcile` | all inventory rows | Check same-configuration N, all failed and zero-output cohorts, physical stock and every terminal fate; recompute original numerator and denominator after late returns. Test numerator allocation sums, positive dimensions, kWh/MJ and liquid conversions, disjoint moisture-transfer signs, complete-asset cumulative fractions and terminal carrier balance. Reject double normalization, lost-goods burden omission, repeated goods provision or automatic waste/credit assumptions. | ghg-product-2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | incremental_retail_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Raw-hide retail service contribution with demonstrated matching configuration/gates, coupled to a non-duplicated goods chain |
| excluded_use | Complete hide product footprint; tanned leather/leather goods; wholesale/delivery; other untreated preservation/species scopes; treating unknown identity as verified |
| required_metadata | All qualifiers; original/revised events; N; numerators/allocations; supply and asset-terminal boundaries |
| required_quality_disclosure | Per-card unresolved identities/backgrounds; presence status; quantity uncertainty; zero-output pools; net-moisture-transfer limitation; returns observation closure and residual responsibility |
| update_trigger | Changes in specification, species, preservation, channel, facilities, energy, packing, hygiene, asset life, returns/fate or background responsibility; late events and new evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62115 | official_guidance | UNSD CPC Version 3.0, subclass 62115 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62115 | Classification note limited to raw hides of 0295; subset scope, not market size or foreground quantities |
| fao-hides-2009 | handbook | Leach I. and Wilson R.T. (2009), Higher value addition through hides and skins, FAO Diversification booklet 8, pp.13-15 and22-23; https://www.fao.org/4/i0523e/i0523e.pdf | Qualitative context for preservation states, raw-hide/leather distinction, grading and labelling only; no numeric defaults or complete technical procedure |
| ghg-product-2011 | standard | WRI/WBCSD (2011), Product Life Cycle Accounting and Reporting Standard, sections6.3.2,6.3.4 and chapter9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General basis for service magnitude, quality/duration and subdivision/physical allocation; specific gates, pooling and formulas are this method’s declared foreground design, without full-standard conformity claim |
| jrc-retail-2013 | official_guidance | European Commission JRC (2013), Best Environmental Management Practice in the Retail Trade Sector, EUR25998 EN, chapter1.2, pp.4-6, Table1.2; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Screening direct retail energy, water, chemicals, packing/wastes and the indirect goods chain; no factors, industry ranges or presumption that a listed activity necessarily occurs |
