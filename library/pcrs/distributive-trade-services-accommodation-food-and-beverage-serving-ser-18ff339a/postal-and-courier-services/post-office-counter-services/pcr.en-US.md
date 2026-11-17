---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.post-office-counter-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Post office counter services: attended acceptance of registered or certified mail

## 1. Scope and Applicability

This PCR retains its existing product-category identity and specifies attended counter acceptance with individual mailpiece identity and a sender receipt. CPC 68013 also includes stamp sales and other activities, so this scope covers only part of that subclass. Sharing a window does not make different transactions equivalent. Produce separate stratum inventories; no generic average-counter transaction is defined when data are missing. Normative constraints and handling methods appear in the tables below.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.post-office-counter-services |
| classification_refs | CPC 3.0 68013; narrower coverage of a defined counter-acceptance family |
| covered_products | Manual post-office counter acceptance of one registered or certified letter or packet, with an individual acceptance record and sender receipt; each mail form and acceptance procedure is a separate dataset stratum |
| excluded_products | Standalone stamp sales; recipient pickup; financial, passport and retail services; self-service kiosks; door collection; sorting, storage after counter handoff, linehaul, delivery and delivery verification |
| representative_product | One barcoded registered letter accepted at an attended counter, with verified eligibility, recorded custody acceptance and issued sender receipt |
| production_route | Check eligibility and requested service; weigh where required; verify or apply individual identifier; record acceptance and payment status; issue receipt; hand over to the defined outgoing counter handoff point |
| market_state | Completed counter-acceptance service at the stated office, period, mail form and procedure; no claim of completed transportation or delivery |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manual acceptance and documented custody handoff of a registered or certified mailpiece |
| How much | 1 accepted mailpiece transaction; one customer session containing several mailpieces counts each independently accepted identifier once |
| How well | Declared service procedure and eligibility checks completed; valid acceptance event and sender receipt; delivery success is outside this function |
| How long or cycle | From first counter handling of the presented mailpiece to acceptance receipt and handoff at the outgoing counter point; record elapsed handling time, accounting period and waiting/idle allocation |
| reference_flow_link | accepted_counter_transaction |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Counter acceptance service for one registered or certified mailpiece |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | office and country; accounting period; mail form and size/mass band; registered/certified acceptance procedure; identifier and receipt criteria; first/last counter gate; number of items per session; included equipment and facility-service boundary; allocation drivers and upstream coverage |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| measure_count | reference product | Number of items | Item(s) | Count completed unique mailpiece acceptance events N_s in the same stratum and period, not visits, stamps, attempted scans, financial turnover, hours or transported mass. Failed attempts and rework consume inputs without increasing N_s. N_s must be positive. |
| measure_denominator | all inventory rows | row-specific property | row-specific unit | Collect raw period totals and activity drivers first. Divide each attributable period total by N_s exactly once. A source already expressed per completed mailpiece is not divided again; reconstruct its period total for reconciliation. No assumed conversion between mailpiece count, mass, time or money. |
| measure_units | counter_electricity; receipt_paper; acceptance_label | Energy; Mass | MJ; kg | For electricity convert recorded kWh to MJ by multiplying by 3.6 once. Paper and label mass uses calibrated weighing or verified mass per roll/label and actual stock movement. Weigh label product including its liner at purchase; separately measure liner waste. Do not apply density, moisture or dry-mass conversions without measured, applicable evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Presented, already packaged mailpiece and installed counter; these are starting conditions, not burden-free new products |
| starting_condition_role | foreground_start |
| product_classification_scope | Counter acceptance only, narrower than the whole CPC 68013 subclass |
| recursive_input_rule | Apply boundary_atomic_support: external activities enter through a defined single-unit service interface; do not recursively expand supplier internals. Foreground physical processes retain their existing cards and rules. Custody cargo is not a manufactured input. |
| upstream_dataset_requirement | Keep a signed scope-ownership matrix for each service contract and background dataset: exact gates, route/configuration, place/period, native reference unit, quality, supply/operation/empty/failure/maintenance/capital/terminal coverage, all-user allocation and foreground overlaps. Background coverage must preserve the existing lifecycle obligations and candidate allocation policies; it may be documented by a compatible dataset and supplier scope declaration without obtaining every internal exchange. Purchased quantity is measured at the interface; bundled independent services or incompatible units require separate concrete rows. For partial coverage partition by evidenced event/component first. Keep operator-owned assets, separately supplied energy/materials, customer-provided parts and operator-retained waste only in their own physical rows and exclude them from the supplier inventory. Suppress only identical covered supplier components; retain excluded real components through their own specific interface/physical rows. Never add the detailed counterpart to a service covering it; never erase burden because supplier detail is unavailable. Missing service-unit conversion, identity, coverage or a required complementary component blocks completeness, not zero. Existing narrower product applicability, physical stock balances, original-cohort corrections and receipt evidence remain mandatory for their actual owners. |
| disclosure | Office/period/stratum; acceptance gate; failures and corrections; customer travel exclusion; waiting/idle attribution; physical mail custody; service-provider overlaps; upstream and UUID gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_counter | Include eligibility check, weighing, scanning/recording, receipt and any counter label actually applied, internal counter handoff, corrections and unsuccessful handling within the declared gate. A successful acceptance is not delivery. | un-cpc-68013; usps-package; usps-extra-services |
| boundary_mail_money | Mailpiece contents, packaging and prepaid stamps arrive in customer custody and are not consumed or produced by this service. Track custody/count transitions outside exchange inventory. Record only incremental counter materials actually supplied. Postage, cash, tax and insured value are monetary records, never material or elementary flows. If supplied by the onward-postal-service dataset, remove the same counter stage there before combining. | un-cpc-68013; usps-package |
| boundary_support | Include attributed counter electricity, equipment provision/upkeep/end-of-life, remote acceptance IT, premises and waste responsibilities once. Under boundary_atomic_support and foreground_interface_coverage, operator-responsible components use physical rows; independent remote IT and occupancy providers use svc_remote_acceptance_it and svc_premises_service. Keep the fixed technical scope, activity allocation and direct-scope exclusions. A compatible background service with a signed scope declaration is acceptable; an invoice alone does not establish coverage. | ghg-product-2011 |
| boundary_exclusions | Exclude customer and employee travel/commuting, human metabolic energy, onward sorting/transport/storage/delivery and standalone stamp, financial or retail services; disclose these exclusions. Keep lighting, heating/cooling and cleaning caused by waiting-area occupation inside the premises inventory; customer waiting minutes themselves are not an emission flow. |  |
| boundary_extension | Before quantification screen each actual route for other paper forms, inks, sealing materials, packaging, fuels, water, refrigeration and releases. Every additional present exchange needs its own specific card, physical identity, unit and protocol; the listed cards are not a completeness exemption. If integrated in premises/equipment/IT background, locate it there once and document scope. Demonstrably absent conditional rows use not_applicable with dated evidence; unknown is never zero. |  |

### Atomic supporting-activity boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_atomic_support | supporting activities | Each active exchange represents one defined material, equipment or service object with one primary property and unit. A service is not disallowed merely because it has upstream processes. Fix responsibility by provider, contract, site, event, gate and scope component before quantification. Operator-run processes and separately commissioned onsite tasks under operator inventory responsibility use foreground physical rows. Independently provided activities outside that responsibility use their specified service-interface rows; supplier manufacture, utilities, maintenance and waste remain in the matched background service, not extra foreground exchanges. A contract alone does not turn supplier internals into foreground. Do not change the product, route, custody gates or original reference denominator. Apply foreground_interface_method and foreground_interface_coverage; boundary changes need PCR review, not a data-availability choice. Ownership here means inventory responsibility, not legal title alone: rented equipment provision may be an external service while separately metered operator-run electricity remains foreground. |  |
| foreground_interface_coverage | all support processes and overlaps | Keep a signed scope-ownership matrix for each service contract and background dataset: exact gates, route/configuration, place/period, native reference unit, quality, supply/operation/empty/failure/maintenance/capital/terminal coverage, all-user allocation and foreground overlaps. Background coverage must preserve the existing lifecycle obligations and candidate allocation policies; it may be documented by a compatible dataset and supplier scope declaration without obtaining every internal exchange. Purchased quantity is measured at the interface; bundled independent services or incompatible units require separate concrete rows. For partial coverage partition by evidenced event/component first. Keep operator-owned assets, separately supplied energy/materials, customer-provided parts and operator-retained waste only in their own physical rows and exclude them from the supplier inventory. Suppress only identical covered supplier components; retain excluded real components through their own specific interface/physical rows. Never add the detailed counterpart to a service covering it; never erase burden because supplier detail is unavailable. Missing service-unit conversion, identity, coverage or a required complementary component blocks completeness, not zero. Existing narrower product applicability, physical stock balances, original-cohort corrections and receipt evidence remain mandatory for their actual owners. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| accept | Attended verification, recording and acceptance handoff | required | Actual route; individual card conditions apply | foreground_production | per reference flow |
| support_premises_service | Support interface / foreground activity: Counter premises occupancy, excluding separately recorded site utilities | conditional | Apply foreground_interface_method and foreground_interface_coverage to the actual responsibility. Existing physical-detail condition, only for its foreground component: Only the estate-period and zone-matched counter accommodation under allocation_premises_inventory; direct devices, plug loads, paper and remote IT excluded. | support | allocation to accepted_counter_transaction |
| support_remote_acceptance_it | Support interface / foreground activity: Remote execution of one configured postal acceptance request | conditional | Apply foreground_interface_method and foreground_interface_coverage to the actual responsibility. Existing physical-detail condition, only for its foreground component: Executed remote barcode validation/record-write/acknowledgement requests for the declared acceptance endpoint; includes failures/retries, excludes ongoing delivery tracking. | support | allocation to accepted_counter_transaction |

### Process: Attended verification, recording and acceptance handoff (`accept`)

#### Inputs

##### Product flows

###### Alternating current (`counter_electricity`)

Use-point electricity for counter computer, scale, scanners and printers including active and standby/idle loads. Supply voltage, geography and generation mix remain separate upstream qualifiers; this flow identity does not supply an emission factor.

Use calc_energy and calc_normalize for measured, attributed period electricity; cp_energy.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `ghg-product-2011`

###### Direct-thermal receipt paper (`receipt_paper`)

Only actual thermal receipt paper supplied at this counter; include voided receipts and repeat prints. Ordinary forms or inkjet paper require separate specific rows when present.

Use calc_stock and calc_normalize for net period paper consumed; cp_stock.

- Selected flow: Direct-thermal receipt paper
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_stock.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock`
- Sources: `ghg-product-2011`

###### Direct-thermal paper label with acrylic adhesive and silicone-coated glassine release liner (`acceptance_label`)

Conditional on documented use of this exact label construction for counter acceptance. Verify acrylic adhesive and silicone-coated glassine liner against the supplier specification before using this card. This is one purchased composite product including that liner; never substitute an unknown label stock. Other construction needs a separate specific row.

Use calc_stock and calc_normalize for whole-label-stock consumption, including its liner; cp_stock.

- Selected flow: Direct-thermal paper label with acrylic adhesive and silicone-coated glassine release liner
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_stock.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock`
- Sources: `ghg-product-2011`

###### Desktop computer with display (`counter_computer`)

Actual installed counter computer, including its display and internal components but excluding separate scale, barcode scanner and printers. A laptop or integrated till has a distinct identity and requires its own row.

Use calc_device and calc_normalize for attributable consumed complete-computer lifetime equivalents; cp_assets.

- Selected flow: Desktop computer with display
- Flow property / unit: Number of items / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

###### Electronic postal weighing scale (`counter_scale`)

Conditional independent weighing scale actually used for the declared mail acceptance, with capacity and precision recorded; maintenance and calibration remain within its lifecycle coverage.

Use calc_device and calc_normalize for attributable consumed scale lifetime equivalents; cp_assets.

- Selected flow: Electronic postal weighing scale
- Flow property / unit: Number of items / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

###### Handheld barcode scanner (`barcode_scanner`)

Conditional independent scanner actually installed; exclude scanning components already included in the selected complete terminal.

Use calc_device and calc_normalize for attributable consumed scanner lifetime equivalents; cp_assets.

- Selected flow: Handheld barcode scanner
- Flow property / unit: Number of items / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

###### Direct-thermal receipt printer (`receipt_printer`)

Conditional independent receipt printer, excluding receipt paper and operating electricity; do not count an integrated terminal printer again.

Use calc_device and calc_normalize for attributable consumed receipt-printer lifetime equivalents; cp_assets.

- Selected flow: Direct-thermal receipt printer
- Flow property / unit: Number of items / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

###### Direct-thermal label printer (`label_printer`)

Conditional separately installed acceptance-label printer; if one physical printer serves both receipts and labels its serial number is assigned once and both workloads enter that one lifetime calculation.

Use calc_device and calc_normalize for attributable consumed label-printer lifetime equivalents; cp_assets.

- Selected flow: Direct-thermal label printer
- Flow property / unit: Number of items / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Counter acceptance service for one registered or certified mailpiece (`accepted_counter_transaction`)

One completed acceptance event of the declared stratum, not a customer visit, mail delivery or financial transaction.

- Selected flow: Counter acceptance service for one registered or certified mailpiece
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_acceptance`
- Sources: `un-cpc-68013`; `usps-extra-services`

##### Waste flows

###### Discarded direct-thermal receipt paper (`receipt_paper_waste`)

Actual receipt-paper waste generated at the counter, including original-event mass retained at period end. Use the calc_waste_origin result already normalized by the original N_s once; do not divide again through calc_normalize. Later dispatch only reconciles original-event stock and receiver evidence. Retain storage, transport and treatment in the original-event model with exact overlap exclusions.



- Selected flow: Discarded direct-thermal receipt paper
- Flow property / unit: Mass / kg
- Amount rule: Original-cohort/stratum attributed generated mass in this card's declared material and wet/dry basis / N_s, using the section 8 waste-origin method; includes retained waste and supported eventual treatment. Custody dispatch verifies the original event and is not another generation or later-cohort burden.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ghg-product-2011`

###### Silicone-coated glassine label release-liner waste (`glassine_liner_waste`)

Glassine release-liner waste generated at the counter after actual separation from the complete label, including retained original-event mass. Use the calc_waste_origin result already normalized by the original N_s once; do not divide again through calc_normalize. Later dispatch only reconciles original-event stock and receiver evidence. Retain storage, transport and treatment in the original-event model with exact overlap exclusions.



- Selected flow: Silicone-coated glassine label release-liner waste
- Flow property / unit: Mass / kg
- Amount rule: Original-cohort/stratum attributed generated mass in this card's declared material and wet/dry basis / N_s, using the section 8 waste-origin method; includes retained waste and supported eventual treatment. Custody dispatch verifies the original event and is not another generation or later-cohort burden.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ghg-product-2011`

##### Elementary flows

### Process: Support interface and foreground activity (Counter premises occupancy, excluding separately recorded site utilities) (`support_premises_service`)

#### Inputs

##### Product flows

###### Counter premises occupancy (`svc_premises_service`)

External interface only under boundary_atomic_support; one contract-defined counter premises occupancy, excluding separately recorded site utilities. Measurement: actual counter-area m2 * occupancy h during the complete counter reporting period; retain the original shared-space allocation. Fix provider, technology/configuration, gates, quality and included components per cp_interface_premises_service; use foreground_interface_coverage to exclude operator-owned or separately supplied components. No supplier-internal exchanges are additional foreground inputs. Allocation follows activity_premises_service for native activity attribution only, with foreground_interface_method; this does not require the physical inventory branch. UUID and property/unit-group support are unverified candidates. Calculation: calc_interface_premises_service.

- Selected flow: Counter premises occupancy
- Flow property / unit: Area-time / m2*h
- Amount rule: sum(A_s,e * alpha_s,e) / N_s; native service unit m2*h; normalize once per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_interface_premises_service`

###### Alternating current (`u_premises_service_electricity`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Only actual zonal/common supply after direct counter plug loads and remote IT are subtracted. Supply-meter electricity; retain location, voltage and technology; do not add appliance output electricity. Apply `inv_premises_scope`, `inv_ac_basis` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N_s; native quantity unit MJ; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_premises_service`

###### Tap water supplied to counter premises (`u_premises_service_tap_water`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Only actual zonal supply not already in another direct inventory. Metered incoming water, distinguish supply from wastewater and evaporation. Apply `inv_premises_scope` in section 8.

- Selected flow: Tap water supplied to counter premises
- Flow property / unit: Volume / m3
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N_s; native quantity unit m3; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_premises_service`

###### Natural gas delivered for premises combustion (`u_premises_service_natural_gas`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Only evidenced natural-gas equipment and supply; Report MJ on a supplier-evidenced net (lower) calorific value (NCV/LHV) basis. Metered volume and calorific value must have identical temperature, pressure and moisture basis; use a documented conversion where they differ, never a generic multiplier. Fuel supply only, not a heat/combustion service; combustion emissions need independent identified species. Section 8 converts only the matched raw supply to NCV MJ, then applies the fixed premises/stratum share and N_s once. Apply `inv_premises_scope` in section 8.

- Selected flow: Natural gas delivered for premises combustion
- Flow property / unit: Net calorific value / MJ
- Amount rule: sum_j(Q_gas_NCV_MJ_j * s_c,gas,j) / N_s
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_premises_service`

###### Purchased district hot-water heat (`u_premises_service_hot_water_heat`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Only actual metered district hot-water heat; do not also count supplier fuel or circulating-water mass. A single energy carrier at delivered heat gate, not the complete premises package; retain matched supplier heat production inventory. Apply `inv_premises_scope` in section 8.

- Selected flow: Purchased district hot-water heat
- Flow property / unit: Energy / MJ
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N_s; native quantity unit MJ; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_premises_service`

###### Completed counter-premises building shell at handover (`u_premises_service_building_gate`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Only actual independently delivered structure with area/component/construction gate defined. Construction gate only; no operating utilities, subsequent maintenance or EOL inside this product. The input Q_a is the original manufacture/construction-gate physical quantity before amortisation; apply f once as specified in lifetime_driver. Q_a is the original complete building-shell handover floor area, before amortisation. f=target-cohort/stratum attributed occupied/reserved floor-area-hours divided by the same asset full-lifetime occupied/reserved floor-area-hours; same asset, area and calendar-hour definition are mandatory. For premises_service the numerator is F_s; for premises use its attributed cohort area-hours. q_prod=Q_a*f/N_s; each full-lifecycle demolition stream Q_e uses identical f/N_s. Cohort/stratum shares are already in f and are not applied again. Missing lifetime/area boundary blocks completion. Apply `inv_premises_scope`, `inv_asset_basis` in section 8.

- Selected flow: Completed counter-premises building shell at handover
- Flow property / unit: Area / m2
- Amount rule: sum(Q_product_a * f_c,a) / N_s; native quantity unit m2; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_premises_service`

#### Outputs

##### Waste flows

###### Counter-premises sanitary and water-cleaning wastewater to sewer (`u_premises_service_sanitary_wastewater`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Only one evidenced receiver/composition; separate any incompatible cleaning chemicals or receiving treatment. Measured/validated water balance, composition and receiving sewer; preserve the complete actual treatment chain, do not label as elementary water emission. Apply `inv_premises_scope` in section 8.

- Selected flow: Counter-premises sanitary and water-cleaning wastewater to sewer
- Flow property / unit: Volume / m3
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N_s; native quantity unit m3; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_premises_service`

###### Concrete demolition waste from counter premises (`u_premises_service_concrete_demolition`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Only actual separately measured concrete receiver stream from the same lifetime building scope. Use the building capital fraction for EOL; do not charge whole current demolition tonnage to current transactions. Other demolition streams remain gaps until identified. Paired manufacture row u_premises_service_building_gate: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_premises_scope`, `inv_terminal_basis` in section 8.

- Selected flow: Concrete demolition waste from counter premises
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / N_s; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_premises_service`

##### Elementary flows

###### Fossil carbon dioxide from premises combustion to air (`u_premises_service_co2_fossil_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Apply `inv_premises_scope`, `inv_combustion_species` in section 8.

- Selected flow: Fossil carbon dioxide from premises combustion to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N_s; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_premises_service`

###### Nitrogen monoxide from premises combustion to air (`u_premises_service_no_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Apply `inv_premises_scope`, `inv_combustion_species` in section 8.

- Selected flow: Nitrogen monoxide from premises combustion to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N_s; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_premises_service`

###### Nitrogen dioxide from premises combustion to air (`u_premises_service_no2_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Apply `inv_premises_scope`, `inv_combustion_species` in section 8.

- Selected flow: Nitrogen dioxide from premises combustion to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N_s; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_premises_service`


### Process: Support interface and foreground activity (Remote execution of one configured postal acceptance request) (`support_remote_acceptance_it`)

#### Inputs

##### Product flows

###### Remote execution of one configured postal acceptance request (`svc_remote_acceptance_it`)

External interface only under boundary_atomic_support; one contract-defined remote execution of one configured postal acceptance request. Measurement: count unique executed request IDs at the contracted backend gate, including separately executed failed/retried requests; one item is one request execution, not one successful counter output. Fix provider, technology/configuration, gates, quality and included components per cp_interface_remote_acceptance_it; use foreground_interface_coverage to exclude operator-owned or separately supplied components. No supplier-internal exchanges are additional foreground inputs. Allocation follows activity_remote_acceptance_it for native activity attribution only, with foreground_interface_method; this does not require the physical inventory branch. UUID and property/unit-group support are unverified candidates. Calculation: calc_interface_remote_acceptance_it.

- Selected flow: Remote execution of one configured postal acceptance request
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(A_s,e * alpha_s,e) / N_s; native service unit Item(s); normalize once per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_interface_remote_acceptance_it`

###### Alternating current (`u_remote_acceptance_it_datacentre_electricity`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. A physical quantity from the exact acceptance operation resource pool. Electricity includes cooling only where the meter includes it, so do not add a second cooling electricity total. Complete hardware is factory gate only; maintenance and EOL are separate. Retired products require the full subsequent identified treatment chain. Apply `inv_ac_basis`, `inv_remote_it_scope` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N_s; native quantity unit MJ; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_remote_acceptance_it`

###### Alternating current (`u_remote_acceptance_it_network_electricity`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. A physical quantity from the exact acceptance operation resource pool. Electricity includes cooling only where the meter includes it, so do not add a second cooling electricity total. Complete hardware is factory gate only; maintenance and EOL are separate. Retired products require the full subsequent identified treatment chain. Apply `inv_ac_basis`, `inv_remote_it_scope` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N_s; native quantity unit MJ; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_remote_acceptance_it`

###### Datacentre cooling make-up water (`u_remote_acceptance_it_cooling_makeup_water`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. A physical quantity from the exact acceptance operation resource pool. Electricity includes cooling only where the meter includes it, so do not add a second cooling electricity total. Complete hardware is factory gate only; maintenance and EOL are separate. Retired products require the full subsequent identified treatment chain. Apply `inv_remote_it_scope` in section 8.

- Selected flow: Datacentre cooling make-up water
- Flow property / unit: Volume / m3
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / N_s; native quantity unit m3; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_remote_acceptance_it`

###### Complete server at factory gate (`u_remote_acceptance_it_server_gate`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. The original independently delivered complete hardware product at factory gate, before amortisation. Excludes operation, maintenance/replacements and EOL. Use original physical Q_a and the linked lifetime_driver exactly once; do not use a provider-period consumed-life equivalent as Q_a. Q_a is the original delivered complete hardware count at factory gate, before amortisation. f=(provider-period installed calendar hours/documented full installed-calendar lifetime hours)*the evidenced endpoint-operation and stratum workload share. Reconcile all workload and idle capacity. q_prod=Q_a*f/N_s; the same asset terminal Q_e uses identical f/N_s. Do not apply workload shares again. Missing lifetime or workload-to-resource linkage blocks completion. Apply `inv_asset_basis`, `inv_remote_it_scope` in section 8.

- Selected flow: Complete server at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / N_s; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_remote_acceptance_it`

###### Complete network switch at factory gate (`u_remote_acceptance_it_network_switch_gate`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. The original independently delivered complete hardware product at factory gate, before amortisation. Excludes operation, maintenance/replacements and EOL. Use original physical Q_a and the linked lifetime_driver exactly once; do not use a provider-period consumed-life equivalent as Q_a. Q_a is the original delivered complete hardware count at factory gate, before amortisation. f=(provider-period installed calendar hours/documented full installed-calendar lifetime hours)*the evidenced endpoint-operation and stratum workload share. Reconcile all workload and idle capacity. q_prod=Q_a*f/N_s; the same asset terminal Q_e uses identical f/N_s. Do not apply workload shares again. Missing lifetime or workload-to-resource linkage blocks completion. Apply `inv_asset_basis`, `inv_remote_it_scope` in section 8.

- Selected flow: Complete network switch at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / N_s; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_remote_acceptance_it`

#### Outputs

##### Waste flows

###### Decommissioned complete server to authorised receiver (`u_remote_acceptance_it_retired_server`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. An independently transferred retired complete hardware product; full downstream dismantling, residual streams, emissions and final treatment must be explicitly inventoried. Paired manufacture row u_remote_acceptance_it_server_gate: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_terminal_basis`, `inv_remote_it_scope` in section 8.

- Selected flow: Decommissioned complete server to authorised receiver
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(R_terminal_a * f_c,a) / N_s; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_remote_acceptance_it`

###### Decommissioned complete network switch to authorised receiver (`u_remote_acceptance_it_retired_network_switch`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. An independently transferred retired complete hardware product; full downstream dismantling, residual streams, emissions and final treatment must be explicitly inventoried. Paired manufacture row u_remote_acceptance_it_network_switch_gate: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_terminal_basis`, `inv_remote_it_scope` in section 8.

- Selected flow: Decommissioned complete network switch to authorised receiver
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(R_terminal_a * f_c,a) / N_s; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_remote_acceptance_it`



## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocation_subdivide | First use dedicated meters, tagged stock issue and device/request logs to avoid allocation. For remaining shared loads, allocate by the physical driver specified below across all office functions, including excluded services; charge only the target share. Never divide the whole office burden by target successful transactions. | ghg-product-2011 |
| allocation_session | Measure direct piece handling first, using non-overlapping active intervals for each staffed window/resource. Allocate measured genuinely common session activity equally only among the actual pieces sharing that activity when the same mail form/procedure and equivalent demand on the activity are evidenced. Preserve common-activity ID, participating piece IDs and divisor. Do not copy full session time to every piece. Sum assigned piece seconds must equal actual resource-active session seconds, including failures/rework; record waiting separately. For heterogeneous procedures or unproven equal demands, time the distinct activity by piece/procedure or retain an allocation gap; never default to equal allocation. |  |
| allocation_time | For each resource j and period define tagged active handling seconds T_sj for stratum s including successful, rejected, abandoned and reworked attempts. Unknown-type attempt time is allocated to strata in proportion to their tagged active seconds; retain its amount separately. Define w_sj as adjusted stratum seconds divided by adjusted seconds for every function served by j. If no tagged active seconds exist or causality is unproven, the shared-resource result is incomplete, not zero. |  |
| allocation_idle | Use w_sj to assign resource j shared standby, idle, startup, shutdown and closed-period loads along with its shared active loads; do not drop those loads or divide by opening hours and again by throughput. Directly tagged failed/rework inputs stay with their stratum. A failed attempt creates no accepted output; all attributable failure inputs remain in the period numerator for the completed-output stratum. Disclose rates and sensitivity. |  |
| allocation_premises | Map occupied floor areas without overlap. For a shared lobby or support area use its area multiplied by target counter scheduled staffed-window-hours divided by all functions scheduled staffed-window-hours using that area; include the full-area total in the reconciliation. Add directly reserved counter area. Multiply resulting effective area by all calendar hours in the accounting period, including closed hours, then assign strata using v_s, the adjusted active handling seconds for stratum s divided by adjusted active seconds of every transaction class using this reserved counter footprint, including stamp/financial/retail activities actually using it; this conditional share is not the whole-office share w_sj. This is F_s in m2*h; all office functions together must recover the full occupied area-hours. Zero denominator or missing floor/work schedule prevents completion. |  |
| allocation_premises_inventory | For foreground-owned premises components only, apply the following physical method. External occupancy uses svc_premises_service with the same zoned beneficiary drivers and exclusions under foreground_interface_method; supplier internals are not foreground collection. The matched premises physical inventory uses one m2*h of the same occupied estate-period as its raw source denominator, never as a product exchange. Collect each metered energy carrier and fuel, water, cleaning product, refrigerant by species, maintenance material, building fabric/capital share and waste treatment separately. Submeter zones first; allocate residual lighting/HVAC/water/cleaning by serviced floor-area-calendar-hours, capital/fabric by reserved floor-area-calendar-hours and documented asset lifetime, and actual refrigerant loss by the same HVAC zone share. Keep each fuel combustion/emission species and compartment in that background. Exclude direct counter plug electricity, standalone devices, paper and remote IT already inventoried here. Match meter coverage and remove subcontract service overlaps before dividing background totals by estate occupied m2*h once. No generic rent-price conversion or unverified bundled service substitute. |  |
| allocation_device | Each device serial number is charged once as consumed lifetime fraction: calendar hours installed in this period divided by evidenced total installed calendar lifetime, multiplied by w_sj across all functions served by that device; do not multiply by a second counter-use share. The equipment lifecycle dataset includes manufacture, replacements/repair and end-of-life, excludes operating electricity and paper. Integrated scanner/printer parts included in a complete computer/device are not also separate devices; separate peripherals require separate serial records. No default lifetime, device mass or utilization. Estimates need evidence, uncertainty and alternative-life sensitivity. |  |
| allocation_waste | Record actual receipt-paper and liner waste by stream and destination. Outsourced treatment is linked once to the measured waste output; do not add the same treatment as an input if it is already included in that link or premises background. No avoided-burden credit, financial revenue or waste-contained substance is added as a second physical output. Recovered paper remains a waste transfer here; apply and disclose recycled-content accounting consistently. | ghg-product-2011 |
| allocation_waste_origin | Fix each ordinary solid-waste generation event to its original service cohort and stratum at generation, never at later dispatch. Directly trace the generating task first; shared generation uses the existing site/handling allocation driver over the recorded generation interval, including all customer and noncohort workloads. Preserve event ID, generation date, original shares and original reference denominator through storage and internal transfers. Acquired old waste is not new generation. Retained waste keeps its original treatment responsibility; dispatch-period service does not inherit it. For shared generation, split records at each fixed local-calendar-month boundary (68013 uses its already declared counter accounting period instead); apply the existing site task/handling driver within that exact generation interval, not the full later dispatch/cohort window. Direct event attribution takes precedence. Record site timezone before period assignment. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_atomic_physical | supporting physical inventory | For each provider, site, configuration, event and accounting interval, partition every measured physical total into mutually exclusive inventory owners before selecting the study cohort. Use the fixed activity driver for that support process, with all users and failed work in the denominator. Direct causal attribution precedes shared allocation. Never multiply a cohort share a second time if already attributed. Keep service-level allocation quantities as raw drivers, not exchange quantities, and do not repeat division by the final reference count. Meter/stock, installed/replaced assets, internal transfers, generated waste and fate balances must reconcile at the same physical/time boundary. A complete product gate may retain its manufacturing background, but a lump service row may not be reintroduced under a different label. |  |
| allocation_atomic_capital | manufacture; installation; terminal assets | For each physical asset serial/cohort a, Q_a is its actual manufacturing/construction-gate quantity in the card unit. Set f_c,a=attributed physical lifetime activity_c,a/evidenced full-life all-user activity_a, using the process/asset-specific driver and identical configuration/capacity units. Manufacture q=sum(Q_a*f_c,a)/N_ref; each initial and whole-asset replacement creates its own asset cohort and enters once, not an additional current-period maintenance item. Installation physical quantities outside the asset product gate use that same installed-asset fraction. Terminal residual quantity in its own declared unit, evidenced from matched retirement or a prospective residual/reuse/retention plan, uses exactly the same f_c,a and original reference denominator; actual custody transfers only verify/update it. Earlier removed parts are excluded from terminal residual. Restate life and all original beneficiary cohorts under calc_capital_restatement; lifetime estimates need evidence and sensitivity, never numeric defaults. Genuine component repairs/replacements use actual causal events or the fixed provider maintenance-year shares, not another whole-life fraction. A whole component reused as a separately commissioned capital asset instead receives its own serial/lifetime register, never both treatments. |  |
| allocation_capital_restatement | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | This PCR uses full restatement, not frozen historical shares or a retirement-period catch-up. All direct and supporting capital, reusable containers, installation outside the product gate and paired terminal sources follow calc_capital_restatement. Each specific activity rule fixes the driver and beneficiary shares; these are applied once. A complete asset background already including delivery/end-of-life follows the same restatement, without separate duplicate terminal exchanges. Routine component maintenance remains under its causal/period method. |  |
| allocation_atomic_waste | operational and maintenance wastes | Generated operational and maintenance waste retains its original generation event, provider/activity cohort, shares and original reference denominator through storage and transfers. Fixed shared-waste intervals are local calendar months with timezone declared; use same-interval causal activity and all users, unless an existing more specific maintenance-year or counter-period method applies. Reconcile closing=opening+generation+internal_in-internal_out-external_dispatch-evidenced_physical_loss on consistent material/moisture bases. Include supported eventual storage/transport/treatment for retained waste, with actual evidence or an explicitly evidenced compatible prospective route and uncertainty; unknown fate remains incomplete. Later receipts replace that original event model, not add a new dispatch-period burden. Asset terminal-waste uses its paired capital fraction instead. Waste carrier and its constituents, storage losses/releases and residual treatment cannot be counted twice; the same measured site/storage operation remains under one inventory owner. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | accept | accepted output and handling driver | event_log | mailpiece_id; session_id; stratum; first/last gate timestamps; staffed window/resource ID; direct piece seconds; common session activity ID and seconds; participating piece IDs/count and equality evidence; allocated handling seconds; outcome; receipt_id; handoff_id; correction/attempt links; reason | Capture at counter first handling, receipt issue and handoff; join acceptance, till and custody logs by mailpiece identifier, remove duplicate successful events, retain failed/reworked/abandoned events with elapsed active time and a null-output flag. Apply allocation_session before calculating T_sj; reconcile assigned piece seconds to actual resource-active session seconds. No personal customer identifier is required. Aggregation details: N_s is unique completed events in stratum s; calculate T_sj and w_sj by allocation_time; denominator is N_s once. | Item(s); s | each event; daily reconciliation | one complete stated accounting period; align all resources | same office, all functions sharing resources | per reference flow | anonymized event/receipt/custody reconciliation; timestamp clock checks; missing logs register |
| cp_interface_premises_service | support_premises_service | svc_premises_service | service_interface_register | provider; contract/version; event ID; site/route/configuration; owner; scope component; native A_s,e and unit; alpha_s,e and all-user driver; original cohort/output denominator; inclusion/exclusion matrix; meter/time/count source; calibration; background reference/unit/period/allocation; correction and overlap links | At the actual service acceptance/use interface collect actual counter-area m2 * occupancy h during the complete counter reporting period; retain the original shared-space allocation. Record every executed event, including failed/reworked events required by the original method. Verify units against calibrated mass/distance/area/time records or deduplicated execution logs as applicable; reconcile to invoices without substituting money for activity. At contract start/change the service data custodian signs the boundary/ownership and background compatibility matrix; reconcile monthly and at original cohort closure. Record zero occurrence only from complete event registers. Missing activity, unit conversion, background coverage or identity remains incomplete; preserve uncertainty and evidence. Supplier internal measurements are not required for an external interface. | m2*h | each event; monthly; contract change; cohort closure | same complete original reference cohort and actual service-event periods | declared external service acceptance/use gate | per reference flow | signed contract/scope matrix; primary activity records; calibration; allocation and invoice reconciliation; verified background identity and documented gaps |
| cp_interface_remote_acceptance_it | support_remote_acceptance_it | svc_remote_acceptance_it | service_interface_register | provider; contract/version; event ID; site/route/configuration; owner; scope component; native A_s,e and unit; alpha_s,e and all-user driver; original cohort/output denominator; inclusion/exclusion matrix; meter/time/count source; calibration; background reference/unit/period/allocation; correction and overlap links | At the actual service acceptance/use interface collect count unique executed request IDs at the contracted backend gate, including separately executed failed/retried requests; one item is one request execution, not one successful counter output. Record every executed event, including failed/reworked events required by the original method. Verify units against calibrated mass/distance/area/time records or deduplicated execution logs as applicable; reconcile to invoices without substituting money for activity. At contract start/change the service data custodian signs the boundary/ownership and background compatibility matrix; reconcile monthly and at original cohort closure. Record zero occurrence only from complete event registers. Missing activity, unit conversion, background coverage or identity remains incomplete; preserve uncertainty and evidence. Supplier internal measurements are not required for an external interface. | Item(s) | each event; monthly; contract change; cohort closure | same complete original reference cohort and actual service-event periods | declared external service acceptance/use gate | per reference flow | signed contract/scope matrix; primary activity records; calibration; allocation and invoice reconciliation; verified background identity and documented gaps |
| cp_capital_restatement | accept; support_premises_service; support_remote_acceptance_it | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | versioned_asset_cohort_ledger | asset/source ID; source phase and native unit; original cohort/stratum and causal parent; original reference denominator and revision; all-user actual driver by original interval; fixed beneficiary shares; complete-life driver forecast/version and supporting records; manufacture/installation quantity; terminal net residual/route and version; previously booked attributed raw B and normalized result; recalculated f/A/q and signed correction; zero-use commissioning responsibility; overlap exclusions | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Join serial/source asset registers, activity meters, supplier product gates and the original result ledger; apply calc_capital_restatement on each change. Recompute using the original physical driver and all-user evidence without changing physical stocks. Reconcile old/new/correction and original denominator by source and original cohort; retain versions and calibration with the original record owner. | source-native units; original driver units; Item(s) | each acquisition/commissioning, activity, life/source revision and retirement; reconcile each original reporting period | complete asset life and all affected original cohorts | all users of the same asset configuration; original product gate and separate installation/terminal sources | per reference flow | serial/source registers; calibration; life evidence; receiver records; original-cohort results and revision chain |
| cp_energy | accept | counter_electricity | meter_log | meter_id; circuit map; opening/closing kWh; intervals; dates; device state; direct/shared flag; T_sj; supply boundary | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Read calibrated plug/submeters by shift and period endpoints; include standby, shutdown and closed hours. Subtract only independently metered noncounter circuits and reconcile with parent supply; no invoice-minus-unknown residual. Aggregation details: direct tagged plus shared period amount times w_sj; calc_energy then calc_normalize. | kWh; MJ | interval/shift and period ends | same complete accounting period | mapped counter circuits, all associated devices | per reference flow | meter serial/calibration and circuit inventory; supplier location/voltage/scope |
| cp_stock | accept | receipt_paper; acceptance_label | stock_ledger | stock_code; exact construction including adhesive and liner coating; opening/closing kg; receipts; transfers in/out; supplier/out-of-scope returns with destination and movement ID; internal unused-stock return; issued rolls/labels; measured mass; void/reprint issue; stock unit | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Weigh each stock product separately with calibrated scale at issue/return and period stocktake; alternatively verify representative roll/label mass by weighing a documented sample and retain sample variation. Reconcile purchases and stock movements by unique movement ID and destination. Internal unused rolls returned to the same stock boundary are already in closing inventory, so are not subtracted again. Supplier/out-of-scope unused returns must be disjoint from transfers out; no postage-value conversion. Aggregation details: calc_stock; direct issue by stratum, shared issue by w_sj only if physically justified; calc_normalize. | kg; roll; label | each movement and period stocktake | same complete accounting period | counter stores and each directly tagged stratum; other functions separately | per reference flow | supplier construction/grammage, weighed samples, scales and stock ledger; unexplained discrepancy retained |
| cp_assets | accept | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer | asset_register | serial; device model; component inclusion; installation/retirement; calendar lifetime; repairs; period installed hours; all served functional workload shares; w_sj; lifecycle dataset scope | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Inspect installed assets at opening/closing stocktakes, retain procurement/repair/retirement records and verify model/component coverage against lifecycle inventory. Justify expected lifetime if not retired and quantify its uncertainty. Aggregation details: calc_device then calc_normalize; one serial one total lifetime share across all functions. | Item(s); h | each installation/repair/retirement; period check | same period plus evidenced complete lifetime | all devices serving counter including shared/integrated devices | per reference flow | asset/photos/model inventory; supplier/repair evidence; documented lifetime scenarios |
| cp_premises | accept | activity_premises_service | facility_inventory | zone_id; measured dedicated/shared m2; calendar hours; scheduled staffed-window-hours per function; zone meters by carrier; fuel/water/cleaning-material quantities; refrigerant species opening/closing/additions/recovery; maintenance and building asset quantities/lifetimes; wastes/destinations; direct counter exclusions; v_s | Measure floor plan once and after changes; read zonal utilities at period endpoints and intervals, collect actual material issues and maintenance/refrigerant logs by event, inspect asset registers and waste records. Build the matching occupied-premises background under allocation_premises_inventory, retaining each carrier/material/species as its own exchange. Never infer absence from a missing invoice. Aggregation details: calc_premises; reconcile sum of all functions with estate occupied area-hours and zonal utilities; calc_normalize. | m2*h; carrier-specific energy/mass/volume; asset items | period; each material/service event; floor plan at changes | same complete period, all calendar hours including closed hours | same occupied estate and zones serving all office functions | per reference flow | floor survey, work schedule, meters/calibration, material and service logs, background scope/crosswalk, no-overlap check |
| cp_remote | accept | activity_remote_acceptance_it | request_log | endpoint; provider; request_id; operation; stratum; success/failure/retry; timestamp; request count; bytes; background scope/unit | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Capture application/server request logs at execution; include successful and failed/retried calls, join to counter attempts without duplicating request IDs. Obtain provider activity inventory per matched operation with data transfer, computing/cooling and hardware boundaries. Unavailable inventory blocks full upstream coverage. Aggregation details: calc_remote then calc_normalize; request count is independent of N_s. | Item(s) requests; byte | each executed request; period reconciliation | same complete accounting period | actual endpoints used for counter acceptance only | per reference flow | redacted request counts, provider scope/unit and allocation proof; failed-request coverage |
| cp_waste | accept | receipt_paper_waste; glassine_liner_waste | waste_transfer | stream; exact material; container tare/gross/net; stratum/direct/shared; date; destination; treatment inclusion; issued paper/liner mass; stock residual; generation_event_id; generation_time/site; source task/cohort/stratum; original allocation shares/reference denominator; generated mass and wet/dry/composition basis; opening/closing stock by origin; internal transfer IDs and both endpoints; external dispatch; evidenced physical loss/release; receiver and destination fractions; actual/prospective route and model version; evidence/uncertainty; receipt replacement status and revision chain | Measure segregated generated mass at the generating point and record the responsible task/interval before storage; if generation is reconstructed from a complete stock balance, document all transfers, losses and measurement uncertainty and preserve original event provenance. Apply allocation_waste_origin and calc_waste_origin. At each transfer and period close reconcile origin-labelled stocks against calibration and receiver evidence. Require supported storage/transport/treatment coverage for retained mass; later receipts replace the original event model, never create a second dispatch-period burden. Segregate receipt paper and liner; reconcile generated waste with net stock issue and paper/labels transferred to customers; retain incompatible material identity/fate gaps. | kg | each transfer; period balance; every ordinary-waste generation and monthly origin-stock reconciliation | same complete accounting period; retain original generation ownership through eventual treatment evidence | counter-generated waste only, separately attributed to strata | per reference flow | scale/tare logs, transfer note, treatment scope, material balance and unexplained residual |

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_support_premises_service | support_premises_service | u_premises_service_electricity; u_premises_service_tap_water; u_premises_service_natural_gas; u_premises_service_hot_water_heat; u_premises_service_building_gate; u_premises_service_sanitary_wastewater; u_premises_service_concrete_demolition; u_premises_service_co2_fossil_air; u_premises_service_no_air; u_premises_service_no2_air | physical_exchange_and_asset_register | event/asset/site/provider/configuration; exact product/substance; phase; Q_x,j and native unit; source intensity and activity basis; lifetime activity and f; terminal asset link and residual unit; stock and transfer IDs; original waste event/cohort; meter/calibration; all-user driver; overlap ownership; prospective route version; occurrence evidence; species identity/CAS, T and NO2-equivalent definition, source-matched molar a, molecular-mass provenance, direct species mass/factor and calibration; gas meter volume; temperature/pressure and reference state; moisture basis; batch-specific NCV and evidence; energy basis of supply dataset and combustion factor | Collect only active foreground physical components under foreground_interface_method; external services use cp_interface_ protocols. Only the estate-period and zone-matched counter accommodation under allocation_premises_inventory; direct devices, plug loads, paper and remote IT excluded. Retain allocation_premises, allocation_premises_inventory, cp_premises, calc_premises and calc_normalize. Zone-submeter first. For residual operational lighting/HVAC/water/cleaning, use serviced floor-area-calendar-hour shares; for capital/fabric, reserved floor-area-calendar-hours plus evidenced asset lifetime. Compute F_s=(dedicated counter m2+shared m2*counter scheduled staffed-window-hours/all served functions scheduled staffed-window-hours)*all period calendar hours*v_s, where v_s is adjusted active handling seconds of stratum/all classes using this footprint. The physical provider total and its chosen zone/resource pool must recover the same estate-period; Use/maintenance q=provider same-period total*fixed pool-to-F_s share/N_s once. Capital and EOL have identical consumed-life fraction. Do not use whole-office w_sj as v_s or reapply estate intensity/F_s twice. Quantity convention: operational-period q=Q_period*a/N applies only to use and maintenance, where Q_period is a raw measured physical period/event total and a is its fixed reconciled allocation share. For production use raw manufacture/construction-gate physical asset quantity Q_a and q_prod=Q_a*f/N. For each linked terminal stream use that same asset cohort full-lifecycle terminal physical quantity Q_e and q_eol=Q_e*f/N with exactly the same f; Q_e is not a later-period whole dispatch. Here f already contains the asset lifetime-service fraction and the target cohort/stratum allocation, each once; do not multiply by a second operational share. Q_a and Q_e are never already amortised provider-period equivalents. If a supplier gives amortised equivalents, recover and verify the original asset cohort physical quantity and full-life denominator before applying this convention; never multiply an already consumed-life quantity by f again. N means the original D for 68011 or N_s for 68013, once. At each provider/source gate, collect event/asset/site/route/configuration and exact physical identity, condition of occurrence/non-occurrence, direction/type/receiving medium, raw quantity and unit, meter/tare/calibration, timestamps and timezone, complete accounting interval, source unit-inventory basis, all-user activity and cohort joins, manufacturing/installation/use/maintenance/EOL phase, original/remaining asset fractions, paired terminal residual provenance, stocks/transfers, receiver/fate and prospective-model revisions. Retain signed supplier scope and exact overlap crosswalk to existing direct rows. Obtain chemistry/BOM/species identity before adding a missing concrete row; an unbound candidate can await official identity but cannot be a plural collection. Measure all events, reconcile per local month/maintenance year as prescribed and review the complete asset/supplier inventory annually and at configuration/retirement changes. Unmeasured positive activity, unsupported future treatment or an unlisted actual exchange prevents completeness. Convert metered premises gas under calc_premises_gas_ncv. Use supply LCI and per-MJ factors on the same NCV basis; reject unconverted gross/unknown bases. Pass unallocated raw NCV MJ from the gas protocol to physical attribution. Restore same-scope raw totals from already allocated or reference-normalized supplier intensity first. | card-native units; raw m2*h | every event; local-month/maintenance-year reconciliation; annual/asset-change review | The same complete counter accounting period, including failures and rework inside the counter gate. Track original asset-life and original waste-event receipt/treatment evidence separately without extending the acceptance-service gate into downstream transport or returns | same provider/site/configuration scope; all shared users | per reference flow | calibrated originals; signed scope and overlap map; asset/receipt lineage; uncertainty |
| cp_support_remote_acceptance_it | support_remote_acceptance_it | u_remote_acceptance_it_datacentre_electricity; u_remote_acceptance_it_network_electricity; u_remote_acceptance_it_cooling_makeup_water; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | physical_exchange_and_asset_register | event/asset/site/provider/configuration; exact product/substance; phase; Q_x,j and native unit; source intensity and activity basis; lifetime activity and f; terminal asset link and residual unit; stock and transfer IDs; original waste event/cohort; meter/calibration; all-user driver; overlap ownership; prospective route version; occurrence evidence; species identity/CAS, T and NO2-equivalent definition, source-matched molar a, molecular-mass provenance, direct species mass/factor and calibration | Collect only active foreground physical components under foreground_interface_method; external services use cp_interface_ protocols. Executed remote barcode validation/record-write/acknowledgement requests for the declared acceptance endpoint; includes failures/retries, excludes ongoing delivery tracking. Retain cp_remote, calc_remote and calc_normalize. Deduplicate actual request IDs and join request/stratum/endpoint/time/bytes and measured CPU/network/cooling workload. For each explicitly bounded provider-period resource pool, attribute its measured physical total by measured acceptance-operation workload/all served-operation workload, then the documented stratum request workload share; reconcile all other workloads and baseline/idle demand, never drop idle infrastructure or assume one request per accepted mailpiece. Use/maintenance q=provider same-period physical total*fixed attributable share/N_s once. For capital and EOL use the same f below, which already includes the evidenced installed-life fraction and operation share once. Request count/bytes alone is insufficient without provider evidence linking them to resource consumption; missing mapping blocks completion. Quantity convention: operational-period q=Q_period*a/N applies only to use and maintenance, where Q_period is a raw measured physical period/event total and a is its fixed reconciled allocation share. For production use raw manufacture/construction-gate physical asset quantity Q_a and q_prod=Q_a*f/N. For each linked terminal stream use that same asset cohort full-lifecycle terminal physical quantity Q_e and q_eol=Q_e*f/N with exactly the same f; Q_e is not a later-period whole dispatch. Here f already contains the asset lifetime-service fraction and the target cohort/stratum allocation, each once; do not multiply by a second operational share. Q_a and Q_e are never already amortised provider-period equivalents. If a supplier gives amortised equivalents, recover and verify the original asset cohort physical quantity and full-life denominator before applying this convention; never multiply an already consumed-life quantity by f again. N means the original D for 68011 or N_s for 68013, once. At each provider/source gate, collect event/asset/site/route/configuration and exact physical identity, condition of occurrence/non-occurrence, direction/type/receiving medium, raw quantity and unit, meter/tare/calibration, timestamps and timezone, complete accounting interval, source unit-inventory basis, all-user activity and cohort joins, manufacturing/installation/use/maintenance/EOL phase, original/remaining asset fractions, paired terminal residual provenance, stocks/transfers, receiver/fate and prospective-model revisions. Retain signed supplier scope and exact overlap crosswalk to existing direct rows. Obtain chemistry/BOM/species identity before adding a missing concrete row; an unbound candidate can await official identity but cannot be a plural collection. Measure all events, reconcile per local month/maintenance year as prescribed and review the complete asset/supplier inventory annually and at configuration/retirement changes. Unmeasured positive activity, unsupported future treatment or an unlisted actual exchange prevents completeness. | card-native units; raw Item(s) requests | every event; local-month/maintenance-year reconciliation; annual/asset-change review | The same complete counter accounting period, including failures and rework inside the counter gate. Track original asset-life and original waste-event receipt/treatment evidence separately without extending the acceptance-service gate into downstream transport or returns | same provider/site/configuration scope; all shared users | per reference flow | calibrated originals; signed scope and overlap map; asset/receipt lineage; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_energy | counter_electricity | Period attributed energy = 3.6 * (direct tagged kWh + shared kWh * w_sj); apply calc_normalize once. | cp_energy; allocation_time; allocation_idle | MJ period total |  |
| foreground_interface_method | svc_premises_service; svc_remote_acceptance_it | Before measurement classify every event/scope component as foreground physical or external service under boundary_atomic_support, with no overlap. Apply existing physical-card formulas, component rules and cp_support protocols only to the former, never demand an external provider BOM or internal meter ledger to activate a service interface. For a service row s collect raw A_s,e in its fixed native unit and alpha_s,e from the existing named activity allocation: direct cohort events have alpha=1; genuinely shared events retain the original all-user driver, failure/empty/standby treatment and event window. Allocated service amount T_s=sum(A_s,e*alpha_s,e); if the native activity ledger already contains cohort-attributed activity, alpha is already applied and must not be multiplied again. q_s=T_s/N_ref, with N_ref the original positive cohort reference output. Preserve raw totals for zero output and mark the unit result incomplete. Do not convert time, area, count or transport activity to energy or equipment mass without a separate evidenced relationship. Do not apply physical capital life fractions again to a service inventory that already contains its capital allocation. Quantities for background linkage equal q_s times an inventory per one identical service unit, once; an emission factor is not the service exchange quantity. All old physical-only instructions and service prohibitions apply only to the foreground physical branch; the service branch follows this rule and its explicit interface protocol. Incomplete or aborted service events retain their evidenced attributable burden. Do not silently discard them because the interface counts completed units: document an equivalent native service quantity supported by the contract and execution records, or add a separately identified partial-service row before claiming completeness; never assume a full unit or zero. A supplier value already per the final reference is not a raw A_s,e: recover its original total and denominator before recomputation, or prove exact equivalent normalization without dividing by the final denominator again. Any included supplier allocation is applied only once. | cp_interface_premises_service; cp_interface_remote_acceptance_it | native service units per original reference flow |  |
| calc_interface_premises_service | svc_premises_service | Apply foreground_interface_method. Native activity A_s,e (m2*h): actual counter-area m2 * occupancy h during the complete counter reporting period; retain the original shared-space allocation. Use the existing activity_premises_service beneficiary and event-window rules only for service activity attribution; the physical branch is not required. q_s=sum(A_s,e*alpha_s,e)/N_s once. A compatible supplier intensity must use exactly this unit, scope and original allocation policy; no standard activity per final output is assumed. | cp_interface_premises_service; activity_premises_service | m2*h/N_s |  |
| calc_interface_remote_acceptance_it | svc_remote_acceptance_it | Apply foreground_interface_method. Native activity A_s,e (Item(s)): count unique executed request IDs at the contracted backend gate, including separately executed failed/retried requests; one item is one request execution, not one successful counter output. Use the existing activity_remote_acceptance_it beneficiary and event-window rules only for service activity attribution; the physical branch is not required. q_s=sum(A_s,e*alpha_s,e)/N_s once. A compatible supplier intensity must use exactly this unit, scope and original allocation policy; no standard activity per final output is assumed. | cp_interface_remote_acceptance_it; activity_remote_acceptance_it | Item(s)/N_s |  |
| calc_stock | receipt_paper; acceptance_label | Net consumed stock = opening + receipts + transfers in - closing - supplier/out-of-scope unused returns - transfers out, all in kg for one stock construction. External-return movements and transfers out are mutually exclusive by movement ID; internal unused-stock returns stay in closing stock and are not deducted again. Allocate net consumption to strata using tagged issues, then justified shared-driver shares; include void/reprint use. | cp_stock | kg period total |  |
| calc_device | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer | Consumed device equivalents = installed calendar hours in period / evidenced total installed calendar lifetime hours * w_sj; sum by distinct device serial number, then apply calc_normalize. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_assets; allocation_device | Item(s) lifetime equivalents period total |  |
| calc_premises | activity_premises_service | F_s = (directly reserved counter m2 + sum(shared-area m2 * counter scheduled staffed-window-hours / all served functions scheduled staffed-window-hours)) * accounting-period calendar hours * v_s. F_s remains raw area-time; apply the matched physical inventory intensity and fixed allocation to each physical row, then the final N_s denominator once. These are raw provider activity diagnostics only; they are not inventory exchanges. Distribute only the separately named physical rows in the corresponding support processes, using original raw activity and one final reference normalization. For gas, start from the raw NCV MJ converted under section 8, apply the premises resource-pool share and divide by N_s once. | cp_premises; allocation_premises; allocation_premises_inventory | raw activity diagnostic: m2*h period total |  |
| calc_premises_gas_ncv | u_premises_service_natural_gas | For each metered zone and supply interval j, Q_gas_NCV_MJ_j=matched V_m3_j*NCV_MJ_per_m3_j. Retain raw MJ already reported on an NCV basis. A GCV-only value requires a same-supply, same-state, same-period evidenced NCV/GCV ratio or original volume and NCV; otherwise incomplete. Match supply inventories and per-MJ combustion factors to NCV. Return raw supply MJ before allocation or division by N_s. | cp_support_premises_service | unallocated NCV MJ by zone and interval |  |
| calc_remote | activity_remote_acceptance_it | Period requests = distinct request IDs attributed to stratum s, including actual failed/retried operations; shared untagged requests use measured operation workload shares across all served functions, with uncertainty. Never set requests equal to successful mailpiece count. These are raw provider activity diagnostics only; they are not inventory exchanges. Distribute only the separately named physical rows in the corresponding support processes, using original raw activity and one final reference normalization. | cp_remote | raw activity diagnostic: Item(s) requests period total |  |
| calc_normalize | all inventory rows | Each non-reference amount per reference flow = attributable period exchange total / N_s. For accepted_counter_transaction the output is 1 Item(s). For already-normalized inputs first recover and reconcile the matching period total; never divide twice. Ordinary waste calc_waste_origin already yields kg/N_s; do not normalize it a second time or replace original-period ownership by dispatch-period totals. | cp_acceptance; row-linked collection protocol | row unit per reference flow |  |
| calc_waste_origin | receipt_paper_waste; glassine_liner_waste | For each named ordinary solid-waste stream r and generation event j, A_c,r = sum_j(G_j,r*s_c,j), then q_c,r=A_c,r/original_reference_count once. G is measured generated mass, not dispatch mass. Reconcile each material and original event: closing = opening + generation + internal_in - internal_out - external_dispatch - evidenced_physical_loss. Record actual moisture/composition changes and mutually exclusive losses/releases; no invented residual and no full residual mass plus the same released constituent. Internal transfers preserve origin and do not create another exchange. Model the original cohort waste output and its required storage/transport/final treatment even while physically retained, using actual compatible receiver evidence or an explicitly evidenced material/composition/location-matched prospective route with uncertainty. Destination fractions close to one and enter once; no default recycling or zero treatment for retained mass. Unsupported fate stays incomplete. Keep observed custody stock/dispatch as a control ledger, not another inventory addition. Later receiver evidence replaces the same event prospective model and recomputes the original cohort with its original denominator; never add that mass/treatment to a later cohort. Include every necessary lifecycle leg once through a scope crosswalk; exclude site/storage energy and handling already included by site/service inventories. Capital terminal-waste lifetime fractions and wastewater balances retain their separate rules. original_reference_count=N_s for its original cohort/stratum. The generated-waste exchange is at the generation gate. Its linked complete waste-management inventory takes one kg on that same generated-mass basis through storage and all subsequent fates; final-treatment input is only the compatible measured/evidenced forecast residual after storage losses/moisture conversion, not the full original kg plus separate losses. Explicit storage releases replace the same included release in that linked inventory; a storage/handling operation already in site/service pools is removed from the waste link by a recorded scope crosswalk, never counted twice. | cp_waste; allocation_waste_origin | kg per original reference flow; origin stock/model ledger |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| activity_premises_service | u_premises_service_electricity; u_premises_service_tap_water; u_premises_service_natural_gas; u_premises_service_hot_water_heat; u_premises_service_building_gate; u_premises_service_sanitary_wastewater; u_premises_service_concrete_demolition; u_premises_service_co2_fossil_air; u_premises_service_no_air; u_premises_service_no2_air | Native activity definitions, allocation drivers and event windows also govern the matching calc_interface_ service rule; only the physical-quantity calculations and internal measurements below require the foreground physical branch under foreground_interface_method. Raw activity ledger only, not an exchange. Retain allocation_premises, allocation_premises_inventory, cp_premises, calc_premises and calc_normalize. Zone-submeter first. For residual operational lighting/HVAC/water/cleaning, use serviced floor-area-calendar-hour shares; for capital/fabric, reserved floor-area-calendar-hours plus evidenced asset lifetime. Compute F_s=(dedicated counter m2+shared m2*counter scheduled staffed-window-hours/all served functions scheduled staffed-window-hours)*all period calendar hours*v_s, where v_s is adjusted active handling seconds of stratum/all classes using this footprint. The physical provider total and its chosen zone/resource pool must recover the same estate-period; Use/maintenance q=provider same-period total*fixed pool-to-F_s share/N_s once. Capital and EOL have identical consumed-life fraction. Do not use whole-office w_sj as v_s or reapply estate intensity/F_s twice. Quantity convention: operational-period q=Q_period*a/N applies only to use and maintenance, where Q_period is a raw measured physical period/event total and a is its fixed reconciled allocation share. For production use raw manufacture/construction-gate physical asset quantity Q_a and q_prod=Q_a*f/N. For each linked terminal stream use that same asset cohort full-lifecycle terminal physical quantity Q_e and q_eol=Q_e*f/N with exactly the same f; Q_e is not a later-period whole dispatch. Here f already contains the asset lifetime-service fraction and the target cohort/stratum allocation, each once; do not multiply by a second operational share. Q_a and Q_e are never already amortised provider-period equivalents. If a supplier gives amortised equivalents, recover and verify the original asset cohort physical quantity and full-life denominator before applying this convention; never multiply an already consumed-life quantity by f again. N means the original D for 68011 or N_s for 68013, once. Any legacy per-reference activity diagnostic must first be restored to raw activity for physical disaggregation; never use it as an exchange or normalize twice. | cp_support_premises_service | raw m2*h plus uniquely attributed physical totals, not a service product |  |
| activity_remote_acceptance_it | u_remote_acceptance_it_datacentre_electricity; u_remote_acceptance_it_network_electricity; u_remote_acceptance_it_cooling_makeup_water; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | Native activity definitions, allocation drivers and event windows also govern the matching calc_interface_ service rule; only the physical-quantity calculations and internal measurements below require the foreground physical branch under foreground_interface_method. Raw activity ledger only, not an exchange. Retain cp_remote, calc_remote and calc_normalize. Deduplicate actual request IDs and join request/stratum/endpoint/time/bytes and measured CPU/network/cooling workload. For each explicitly bounded provider-period resource pool, attribute its measured physical total by measured acceptance-operation workload/all served-operation workload, then the documented stratum request workload share; reconcile all other workloads and baseline/idle demand, never drop idle infrastructure or assume one request per accepted mailpiece. Use/maintenance q=provider same-period physical total*fixed attributable share/N_s once. For capital and EOL use the same f below, which already includes the evidenced installed-life fraction and operation share once. Request count/bytes alone is insufficient without provider evidence linking them to resource consumption; missing mapping blocks completion. Quantity convention: operational-period q=Q_period*a/N applies only to use and maintenance, where Q_period is a raw measured physical period/event total and a is its fixed reconciled allocation share. For production use raw manufacture/construction-gate physical asset quantity Q_a and q_prod=Q_a*f/N. For each linked terminal stream use that same asset cohort full-lifecycle terminal physical quantity Q_e and q_eol=Q_e*f/N with exactly the same f; Q_e is not a later-period whole dispatch. Here f already contains the asset lifetime-service fraction and the target cohort/stratum allocation, each once; do not multiply by a second operational share. Q_a and Q_e are never already amortised provider-period equivalents. If a supplier gives amortised equivalents, recover and verify the original asset cohort physical quantity and full-life denominator before applying this convention; never multiply an already consumed-life quantity by f again. N means the original D for 68011 or N_s for 68013, once. Any legacy per-reference activity diagnostic must first be restored to raw activity for physical disaggregation; never use it as an exchange or normalize twice. | cp_support_remote_acceptance_it | raw Item(s) requests plus uniquely attributed physical totals, not a service product |  |
| calc_atomic_physical | u_premises_service_electricity; u_premises_service_tap_water; u_premises_service_natural_gas; u_premises_service_hot_water_heat; u_premises_service_building_gate; u_premises_service_sanitary_wastewater; u_premises_service_concrete_demolition; u_premises_service_co2_fossil_air; u_premises_service_no_air; u_premises_service_no2_air; u_remote_acceptance_it_datacentre_electricity; u_remote_acceptance_it_network_electricity; u_remote_acceptance_it_cooling_makeup_water; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. For operational physical flow x in matched provider interval j, recover Q_x,j in that card native physical unit from metering, stock balance, work orders or a compatible species/material-specific unit inventory. If source intensity is per activity unit, first Q_x,j=intensity_x,j*actual_all_user_activity_j; do not use money, a generic service emission basket, or an already per-reference amount without recovering its original basis. Then q_x=sum_j(Q_x,j*s_c,x,j)/N_ref once, with the fixed process driver and all-user shares. Electricity kWh converts to MJ by 3.6 once when the card uses MJ; other count/mass/volume conversions need measured configured unit mass, density, concentration and moisture as applicable. A shared meter or upstream product/service covering the same quantity/period/scope is removed by a measured overlap crosswalk, not by an assumed fraction. For the natural-gas row, Q_x,j is raw Q_gas_NCV_MJ_j from calc_premises_gas_ncv and s_c,gas,j is the fixed zone-to-stratum share under allocation_premises_inventory. Use either the metered total or its equivalent reconstruction from matched intensity, then divide by N_s once. | cp_support_premises_service; cp_support_remote_acceptance_it | card-native physical unit per original reference flow |  |
| calc_atomic_capital | u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. For each physical asset serial/cohort a, Q_a is its actual manufacturing/construction-gate quantity in the card unit. Set f_c,a=attributed physical lifetime activity_c,a/evidenced full-life all-user activity_a, using the process/asset-specific driver and identical configuration/capacity units. Manufacture q=sum(Q_a*f_c,a)/N_ref; each initial and whole-asset replacement creates its own asset cohort and enters once, not an additional current-period maintenance item. Installation physical quantities outside the asset product gate use that same installed-asset fraction. Terminal residual quantity in its own declared unit, evidenced from matched retirement or a prospective residual/reuse/retention plan, uses exactly the same f_c,a and original reference denominator; actual custody transfers only verify/update it. Earlier removed parts are excluded from terminal residual. Restate life and all original beneficiary cohorts under calc_capital_restatement; lifetime estimates need evidence and sensitivity, never numeric defaults. Genuine component repairs/replacements use actual causal events or the fixed provider maintenance-year shares, not another whole-life fraction. A whole component reused as a separately commissioned capital asset instead receives its own serial/lifetime register, never both treatments. | cp_support_premises_service; cp_support_remote_acceptance_it | manufacturing product and paired terminal residual, same lifetime fraction |  |
| calc_capital_restatement | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | Within this entry's declared applies_to scope, apply the complete ordered rule group: calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | cp_capital_restatement; calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version | source-native unit per original cohort N_c; separate physical controls |  |
| capital_premises_service_building_gate | u_premises_service_building_gate; u_premises_service_concrete_demolition | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_premises_service_building_gate: Q_a is actual unamortized m2 at the declared product gate; q=sum(Q_a*f_c,a)/N_s. Q_a is the original complete building-shell handover floor area, before amortisation. f=target-cohort/stratum attributed occupied/reserved floor-area-hours divided by the same asset full-lifetime occupied/reserved floor-area-hours; same asset, area and calendar-hour definition are mandatory. For premises_service the numerator is F_s; for premises use its attributed cohort area-hours. q_prod=Q_a*f/N_s; each full-lifecycle demolition stream Q_e uses identical f/N_s. Cohort/stratum shares are already in f and are not applied again. Missing lifetime/area boundary blocks completion. Actual maintenance quantities use their separate period/event share, never this manufacture f. Already amortised supplier inputs require recovery of original Q_a and the full-life denominator; applying f again is prohibited. Terminal row u_premises_service_concrete_demolition: native kg, q=sum(R_a*f_c,a)/N_s; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_premises_service | asset-native physical unit per N_s; linked terminal native unit, same f |  |
| capital_remote_acceptance_it_server_gate | u_remote_acceptance_it_server_gate; u_remote_acceptance_it_retired_server | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_remote_acceptance_it_server_gate: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/N_s. Q_a is the original delivered complete hardware count at factory gate, before amortisation. f=(provider-period installed calendar hours/documented full installed-calendar lifetime hours)*the evidenced endpoint-operation and stratum workload share. Reconcile all workload and idle capacity. q_prod=Q_a*f/N_s; the same asset terminal Q_e uses identical f/N_s. Do not apply workload shares again. Missing lifetime or workload-to-resource linkage blocks completion. Actual maintenance quantities use their separate period/event share, never this manufacture f. Already amortised supplier inputs require recovery of original Q_a and the full-life denominator; applying f again is prohibited. Terminal row u_remote_acceptance_it_retired_server: native Item(s), q=sum(R_a*f_c,a)/N_s; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_remote_acceptance_it | asset-native physical unit per N_s; linked terminal native unit, same f |  |
| capital_remote_acceptance_it_network_switch_gate | u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_network_switch | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_remote_acceptance_it_network_switch_gate: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/N_s. Q_a is the original delivered complete hardware count at factory gate, before amortisation. f=(provider-period installed calendar hours/documented full installed-calendar lifetime hours)*the evidenced endpoint-operation and stratum workload share. Reconcile all workload and idle capacity. q_prod=Q_a*f/N_s; the same asset terminal Q_e uses identical f/N_s. Do not apply workload shares again. Missing lifetime or workload-to-resource linkage blocks completion. Actual maintenance quantities use their separate period/event share, never this manufacture f. Already amortised supplier inputs require recovery of original Q_a and the full-life denominator; applying f again is prohibited. Terminal row u_remote_acceptance_it_retired_network_switch: native Item(s), q=sum(R_a*f_c,a)/N_s; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_remote_acceptance_it | asset-native physical unit per N_s; linked terminal native unit, same f |  |
| calc_atomic_species | all elementary physical rows | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Each elementary row identifies one substance or physically specified particle carrier and one receiving medium/subcompartment. Collect the actual substance/CAS or verified chemical identity, factor unit and mass/molar/carbon expression, source technology/fuel/load, location and receiving medium. Apply a substance-specific measured release or compatible factor once. Factory emissions already in a complete product gate are not also direct provider-use emissions. Particle size classes and fate fractions are mutually exclusive; physically defined particles are not fictitious pure elements. NOx and NMVOC totals are QA observations only, never elementary-exchange substitutes. Every actual extra species/material needs its own concrete bilingual source row, protocol, unit, fixed calculation and normal projection before completed modelling; do not use a selector or a family-name placeholder. | cp_support_premises_service; cp_support_remote_acceptance_it | one substance or defined physical carrier per receiver |  |
| calc_nox_speciation | u_premises_service_no_air; u_premises_service_no2_air | For the explicitly evidenced definition NOx=NO+NO2 expressed as NO2-equivalent, record T, its unit/basis and source-matched measured molar fraction a=n_NO/(n_NO+n_NO2). Then m_NO=a*T*M_NO/M_NO2 and m_NO2=(1-a)*T, using independently evidenced molecular masses on the same unit basis. Prefer direct substance-specific mass measurements/factors when available and do not add the QA total again. T is not ordinary NO/NO2 mixture mass; never apply a mass fraction directly to T or assign all T to NO2. If definition includes other nitrogen species, speciation or conversion evidence is missing, no two-component split is permitted: preserve the raw QA observation and block completion until actual species-specific rows and quantities are established. No numeric fraction or molecular mass is defaulted by this PCR. | cp_support_premises_service | kg NO and kg NO2, never NO2-equivalent exchange |  |
| calc_capital_restatement_driver_revision | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For every asset a retain versioned all-user activity and each original beneficiary cohort/stratum c, including failed/empty work under its existing fixed responsibility rule. u_c,a is its attributed actual driver to date; U_a is evidenced complete-life all-user driver (actual to date plus supported remaining forecast), in the identical configuration and unit. U_a must be positive and at least the actual all-user total. Set f_c,a=u_c,a/U_a; do not use remaining activity as U_a. On every life, activity, beneficiary, source-quantity or terminal-route revision recompute every affected original cohort, including previously reported cohorts; do not preserve an old fraction while applying a new lifetime denominator only to later cohorts. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_source_correction | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For each independent source s in its native unit, A_s,c,new=Q_s,new*f_c,a. Q_s,new is its current evidenced full manufacture/installation source quantity before lifetime allocation, not a remaining unallocated balance, or matched net terminal residual/complete lifecycle source; it is not a previously allocated quantity. Retain B_s,c, the previously booked attributed raw amount, and its original normalized result/version; delta_A_s,c=A_s,c,new-B_s,c. A newly evidenced terminal source has B=0, while a correction to an existing source replaces that same source ID. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_normalization | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Recompute q_s,c=A_s,c,new/N_c using that original cohort current verified reference denominator N_c; if N_c itself was corrected, replace the old result rather than adding delta_A/new_N to a result based on old_N. Sum source contributions only after removing documented overlap. Record positive/negative result corrections, never negative physical transfers, substitution credits or another current-period whole-asset purchase. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_retirement | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. At final retirement replace U_a by complete actual all-user driver, recompute all f and all source quantities; for positive total activity all beneficiary fractions sum to one, including non-study beneficiaries. Measured terminal net residual is not reduced again by historical removals. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_zero_activity | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Zero-output events retain their existing causal parent cohort and its original denominator; never seek an unrelated positive-output period. If that parent has no positive N_c, retain attributed raw totals and an unresolved normalized result. With zero lifetime activity, assign only to an evidenced sole commissioning responsibility under the same original-cohort rule; otherwise retain the unallocated source and block completeness. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_shared_driver_controls | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Keep asset manufacture, installation and terminal burden on the same revised f, while gross stock, transfers and retirements remain separate physical control records. For a calendar-time asset, u is its elapsed service-capacity time assigned once to each original class/period by the existing shared/class rule, including the prescribed vacancy/failure responsibility; U covers that same all-user calendar capacity. Do not apply the class share a second time to q. Unknown history, unsupported life/endpoint or missing original denominators blocks completeness. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_background_version | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. If a supply-background or treatment-model version changes without a physical quantity change, replace the corresponding linked inventory and result for all affected original cohorts; a zero physical delta_A does not preserve the old model. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_scope | all inventory rows | Match office, calendar period, stratum, first/last gate, provider and physical unit; disclose service quality and number of mailpieces per session. Registered and certified procedures and different mail forms are not automatically equivalent. | cp_acceptance; provider scope records |
| quality_unknown | all inventory rows | Missing amount, unverified identity, absent upstream inventory, unknown destination or failed reconciliation remains an explicit gap and prevents a complete dataset claim. A provisional estimate must state source, method, bounds and sensitivity; no default numerical intensity, life, conversion factor or compliance limit is provided. | gap register and scenario evidence |
| quality_inventory | activity_premises_service; activity_remote_acceptance_it; counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer | Retain disaggregated underlying service inventories, units, driver evidence and explicit scope exclusions. Test all physical sources for duplicate electricity, assets, cooling, paper, network or waste treatment. A service name, receipt or price alone is insufficient evidence. | supplier/foreground background crosswalk and balance |
| quality_waste_origin | receipt_paper_waste; glassine_liner_waste | For every ordinary solid-waste stream verify generation responsibility, original cohort/stratum/denominator, origin-labelled stock balance, supported actual or prospective complete treatment and later-receipt replacement. Unknown origin/fate/physical loss remains an explicit gap; future dispatch alone cannot close or reassign it. Keep wastewater and amortized terminal-asset treatment on their separate methods. | generation/stock/transfer ledgers; supported route models; original-cohort receipt replacements |
| quality_identity | all inventory rows | Bind each eventual flow UUID only after direct-read confirmation of official name in both languages when present, flow type, state, property, unit and receiving compartment. Search similarity and historical citations are insufficient; unresolved cards remain candidates until that binding exists. | official response and hash-bound identity evidence |

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_atomic_completeness | all disaggregated support and species | Completeness is branch-specific under foreground_interface_method and foreground_interface_coverage. Foreground physical exchanges need the retained exact identities, original measurements, species and stock reconciliation. External interfaces need one defined service/property/unit, measured activity, exact supplier gates and compatible background coverage, not exhaustive provider-internal BOMs or capital ledgers. Unknown occurrence is not absence; uncovered real scope is an explicit gap. Unbound interface UUID/property/unit-group identities remain row-specific candidates until direct official evidence and receipts resolve them. The interface is not permission for an undefined multi-service package or for an Item(s) substitute for hours/mass/transport activity. | scope-to-physical-row reconciliation; supplier/BOM/species originals; signed gap register |
| quality_service_interfaces | svc_premises_service; svc_remote_acceptance_it | Completeness is branch-specific under foreground_interface_method and foreground_interface_coverage. Foreground physical exchanges need the retained exact identities, original measurements, species and stock reconciliation. External interfaces need one defined service/property/unit, measured activity, exact supplier gates and compatible background coverage, not exhaustive provider-internal BOMs or capital ledgers. Unknown occurrence is not absence; uncovered real scope is an explicit gap. Unbound interface UUID/property/unit-group identities remain row-specific candidates until direct official evidence and receipts resolve them. The interface is not permission for an undefined multi-service package or for an Item(s) substitute for hours/mass/transport activity. | cp_interface protocols; signed coverage/ownership matrix; native-unit reconciliation; identity receipts |
| scope_interface_premises_service | u_premises_service_electricity; u_premises_service_tap_water; u_premises_service_natural_gas; u_premises_service_hot_water_heat; u_premises_service_building_gate; u_premises_service_sanitary_wastewater; u_premises_service_concrete_demolition; u_premises_service_co2_fossil_air; u_premises_service_no_air; u_premises_service_no2_air; svc_premises_service | For support_premises_service, svc_premises_service is the external service input under boundary_atomic_support. Its listed physical counterparts apply only to operator-owned foreground components; they are not required supplier-internal collection. For every event/component record exactly one owner and representation. Keep physical components excluded from the contracted service, and remove only evidenced overlap; partial contracts cannot suppress the whole process. Scope changes require the coverage matrix and fresh bilingual projection. | signed foreground/interface matrix; contract exclusions; actual component records |
| scope_interface_remote_acceptance_it | u_remote_acceptance_it_datacentre_electricity; u_remote_acceptance_it_network_electricity; u_remote_acceptance_it_cooling_makeup_water; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch; svc_remote_acceptance_it | For support_remote_acceptance_it, svc_remote_acceptance_it is the external service input under boundary_atomic_support. Its listed physical counterparts apply only to operator-owned foreground components; they are not required supplier-internal collection. For every event/component record exactly one owner and representation. Keep physical components excluded from the contracted service, and remove only evidenced overlap; partial contracts cannot suppress the whole process. Scope changes require the coverage matrix and fresh bilingual projection. | signed foreground/interface matrix; contract exclusions; actual component records |
| inv_premises_scope | u_premises_service_electricity; u_premises_service_tap_water; u_premises_service_natural_gas; u_premises_service_hot_water_heat; u_premises_service_building_gate; u_premises_service_sanitary_wastewater; u_premises_service_concrete_demolition; u_premises_service_co2_fossil_air; u_premises_service_no_air; u_premises_service_no2_air | Only the estate-period and zone-matched counter accommodation under allocation_premises_inventory; direct devices, plug loads, paper and remote IT excluded. | Existing collection protocols and evidence of each listed inventory row. |
| inv_ac_basis | u_premises_service_electricity; u_remote_acceptance_it_datacentre_electricity; u_remote_acceptance_it_network_electricity | Applies only to independently evidenced point-of-use AC; this generic UUID does not determine supplier, grid, voltage or generation technology. Meter kWh converts to MJ by 3.6 once; installation/repair AC and operating AC have disjoint meter/phase ownership. | Existing collection protocols and evidence of each listed inventory row. |
| inv_asset_basis | u_premises_service_building_gate; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate | Actual maintenance quantities use their separate period/event share, never this manufacture f. Already amortised supplier inputs require recovery of original Q_a and the full-life denominator; applying f again is prohibited. | Existing collection protocols and evidence of each listed inventory row. |
| inv_terminal_basis | u_premises_service_concrete_demolition; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | Its raw Q_e is the full-lifecycle terminal physical quantity belonging to asset_suffix, before amortisation, not an amortised provider-period amount or a later-period dispatch total. Apply exactly the linked production f once and divide by the original denominator once; no extra operational allocation share. | Existing collection protocols and evidence of each listed inventory row. |
| inv_combustion_species | u_premises_service_co2_fossil_air; u_premises_service_no_air; u_premises_service_no2_air | Only documented exact combustion technology, species, factor and receiving compartment; no total-NOx substitution. Compute once from measured fuel and a single-species factor excluding upstream fuel-chain emissions. | Existing collection protocols and evidence of each listed inventory row. |
| inv_remote_it_scope | u_remote_acceptance_it_datacentre_electricity; u_remote_acceptance_it_network_electricity; u_remote_acceptance_it_cooling_makeup_water; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | Executed remote barcode validation/record-write/acknowledgement requests for the declared acceptance endpoint; includes failures/retries, excludes ongoing delivery tracking. Only the actual endpoint/provider resource and independent product/receiver gate are evidenced; distinct technologies/models/zones must not be merged. | Existing collection protocols and evidence of each listed inventory row. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | foreground_dataset_conformance | Reconcile N_s to unique valid acceptance/receipt/handoff events; no rejection, cancellation, duplicate scan or correction is counted as another output. Reject N_s <= 0. Verify all qualifiers before applicability. |  |
| validate_service_interfaces | svc_premises_service; svc_remote_acceptance_it | Verify the event/component responsibility matrix before reading row amounts. An external-service component activates its interface only; its covered detailed physical counterpart is inactive, not a measured zero. Verify one property/unit, raw native activity, original all-user allocation and single final normalization; failed/reworked/empty events follow the retained cohort rules. Test partial contracts, own energy/assets/retained wastes, already allocated supplier inventories, zero-output cohorts and missing complementary coverage. Reject double counting, invented identity/amounts, forced supplier-internal collection or an undocumented branch change. Verify all service row IDs and protocol/rule links in both languages and generated guidance. |  |
| validation_balance | foreground_dataset_conformance | For every resource reconcile direct + all allocated functional shares to raw period total; w_sj sums to one over served functions. Check facility occupied area-hours, stock kg and waste kg separately. Retain unexplained residual; never force a balance by changing a missing value to zero. Test A-period generated retained waste and B-period dispatch: original A responsibility and denominator persist, and actual evidence replaces that same event model without another B burden. |  |
| validation_material | foreground_dataset_conformance | The purchased composite label includes liner; label attached to mail plus liner waste plus rejects/stock changes must reconcile to consumed stock without duplicating a separate liner input. Issued paper is not also waste. Check exact label construction; unknown or different stock requires separate identification/card. |  |
| validation_support | foreground_dataset_conformance | Verify all premises, equipment, remote IT and waste-treatment technical boundaries against direct foreground inputs. Reject incomplete underlying background evidence or duplicated asset/energy/treatment scopes as incomplete; no full life-cycle or methodology-approval claim follows from this check alone. |  |
| validation_projection | foreground_dataset_conformance | All mandatory boundary, allocation, collection, calculation and quality requirements must survive the canonical structured projection with these same row/protocol/rule IDs; check bilingual meanings and current hashes, not hashes alone. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_atomic_support | all support and emission rows | Verify the event/component responsibility matrix before reading row amounts. An external-service component activates its interface only; its covered detailed physical counterpart is inactive, not a measured zero. Verify one property/unit, raw native activity, original all-user allocation and single final normalization; failed/reworked/empty events follow the retained cohort rules. Test partial contracts, own energy/assets/retained wastes, already allocated supplier inventories, zero-output cohorts and missing complementary coverage. Reject double counting, invented identity/amounts, forced supplier-internal collection or an undocumented branch change. Verify all service row IDs and protocol/rule links in both languages and generated guidance. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_capital_restatement | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | Check original cohorts/denominators, all-user driver, source versions, booked amounts and restatement corrections under calc_capital_restatement. Reject frozen old history with only future-denominator changes, retirement-balance transfer to unrelated current output, and negative physical exchanges. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Unit-process counter-acceptance service inventory with declared upstream links |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Only matching attended-counter acceptance stratum, quality, location, period and gates; combine with onward service only after removing overlapping acceptance burdens |
| excluded_use | Generic whole-CPC coverage, all office transactions, customer visit footprints, bank/retail services or completed postal delivery |
| required_metadata | All reference qualifiers, N_s, active/idle/failure records, office-resource scope map, allocation drivers, period totals, technical background linkage and unit compatibility; ordinary-waste generation origin, original shares/denominator, retained stocks and treatment revision chain; signed foreground/interface responsibility matrix, native service activity and background coverage; original physical activity, manufacture/terminal pairing and species basis only for foreground-owned components |
| required_quality_disclosure | Unresolved identities and upstream gaps; no zero substitution; temporal/site coverage; foreground estimates and uncertainty; service/facility/equipment boundary exclusions |
| update_trigger | Acceptance procedure, mail form/quality, office utility boundary, equipment/IT provider, stock construction, throughput/workload or material evidence changes; later ordinary-waste receipts/fate or generation correction update the original event/cohort model; foreground physical identity/speciation changes or external interface configuration/unit/coverage changes require applicable concrete-row review and fresh projection |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-68013 | official_guidance | UNSD, CPC Version 3.0, subclass 68013 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/68013 | Classification includes stamp sales and registered/certified handling; establishes narrower boundary, not a default intensity |
| usps-package | official_guidance | USPS, How to Prepare and Send a Package; https://www.usps.com/ship/packages.htm | Actual counter weighing, postage printing/attachment and mail presentation; United States example, not universal material specification |
| usps-extra-services | official_guidance | USPS, Shipping Insurance and Delivery Services; https://www.usps.com/ship/insurance-extra-services.htm | Registered/Certified Mail and sender receipt versus delivery proof; service-specific eligibility must be declared |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters 7-10, especially chapter 9 allocation; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General subdivision, physical allocation, consistent recycling and uncertainty principles; the counter-specific protocols and allocation drivers are authored here, not quantitative factors prescribed by this standard |
