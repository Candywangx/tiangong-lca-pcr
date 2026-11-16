---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.other-postal-services
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Physical postal mailbox rental availability (mechanical-key route)

## 1. Scope and Applicability

This candidate method uses the retained PCR identity for measurable physical postal mailbox rental availability. CPC 68019 also includes poste restante and other services, so this scope is narrower than the leaf; retention, retrieval or available time cannot represent completed mail transport. The representative product is one size- and access-schedule-specified steel compartment inside a postal facility with mechanical-key access. Rental time is a distinct function from mail-piece handling. One counted product unit is fixed at one specified compartment × 3600 accepted seconds; this cumulative service quantum does not promise one uninterrupted hour, a complete rental contract or equivalence across size/access classes. Raw second/hour records remain mandatory. Route restrictions and extension conditions are defined in boundary_route and boundary_deviation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.other-postal-services |
| classification_refs | CPC 3.0 68019; narrower |
| covered_products | Exclusive physical mechanical-key postal mailbox rental availability |
| excluded_products | Poste restante; mail transport/counter services; digital/automated parcel lockers; financial/telecom services; undifferentiated pooling of size/access classes |
| representative_product | One standard rental service unit of an identified compartment, fixed at 3600 accepted seconds |
| production_route | Mechanical key; paper administration; electric lighting/heating; no mechanical cooling; water-only cotton-cloth cleaning |
| market_state | Activated and accepted rental satisfying secure retention and contracted retrieval schedule |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide exclusive rental availability of a specified compartment |
| How much | 1 standard rental service unit = one specified compartment × 3600 accepted seconds; fractional units are allowed within this same class |
| How well | Secure retention with declared dimensions and contracted access calendar; measured outages removed |
| How long or cycle | Accepted intervals within one consecutive reporting year; explicit hours, seconds and timezone |
| reference_flow_link | rental_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Postal mailbox rental standard service unit, specified mechanical-key compartment × 3600 accepted seconds |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | site; compartment dimensions and count; steel cabinet specification; access calendar and timezone; rental start/end acceptance; physical-key paper-admin route; capacity/vacancy/fault hours; reporting year; asset life basis; supplier and receiver boundaries |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_reference` | rental_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 1 Item(s) is one standard service unit fixed at one specified compartment × 3600 accepted seconds. Retain per-box seconds and hours; 3600 s=1 h. A tariff month, arbitrary hour, full contract or different specification is not an equivalent unit; accumulated intervals do not establish uninterrupted availability. |
| `measure_denominator` | all inventory | Number of items | Item(s) | Normalize all cards per reference flow, one standard service unit as defined above. N=sum(accepted_box_seconds)/b, b=3600 accepted compartment-seconds/Item(s). Attribute raw totals then divide by N once; retain physical duration H=sum(accepted_box_seconds)/3600 in h separately. |
| `measure_mass` | water; wastes; paper; cloth | Mass | kg | Volume-to-mass needs density at the same state; retain dry/wet solid basis and separate retained water. No unsupported volume/energy/count conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | An identified compartment inside an existing post office; service starts after signed activation and key handover, while manufacture/construction remains included through asset cards |
| starting_condition_role | Service starting gate, not a capital-goods cut-off |
| product_classification_scope | CPC 3.0 68019 narrower |
| recursive_input_rule | Do not buy and re-output the complete same-category rental service; outsourcing a complete interval requires replacement of its explicitly removed direct burdens, otherwise outside this route |
| upstream_dataset_requirement | Match actual supply, technology and delivery boundaries for manufacture/supply datasets; unresolved identity or incomplete boundaries block dataset completion |
| disclosure | Disclose size/access/route, gaps, vacancy/faults, lifetime basis, exclusions and included upstream/downstream boundaries |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_service` | all processes | Include exclusive compartment availability from verified rental activation to interval expiry, cancellation or return; use actual provision dates, not payment dates. Ordinary upstream mail movement ends at the mailbox deposit interface and is excluded here; custodial security and the customer access interface remain included. | `usps-pobox` |
| `boundary_route` | all processes | This route is mechanical-key steel mailbox rental, onsite paper administration, electric lighting/heating, no mechanical cooling, and water-only cleaning with cotton cloths. It is a real physical service variant, not a proxy for poste restante, automated parcel lockers, counter handling, transport, postal giro/savings or telecom services. | `un-cpc3-68019` |
| `boundary_deviation` | route qualification | At period start and each change, inspect actual materials, equipment, energy, emissions, cleaning and auxiliary contracts. Combustion, purchased heat, mechanical cooling or its refrigerant leakage, detergent cleaning, powered lockers and digital/telecom administration depart from this configuration. Stop applying this PCR and review applicability of the actual product and route separately. Acceptance of any changed boundary requires review of canonical methodology, the ADR and classification mapping. For an omitted exchange within the existing boundary, add a reviewed bilingual atomic card, protocol and projection. Evidence absence onsite; unknown is not zero. |  |
| `boundary_upstream` | all inventory | Link manufacturing and delivery of consumed supplies/assets, electricity and water supply, and waste transport/treatment exactly once to boundary-matched datasets. Verify provider, technology, geography, voltage and losses rather than inferring them from the generic electricity UUID. Customer travel, letter contents and delivery-network transport belong to separately declared functions; excluded flows must remain disclosed. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_mailbox` | Mailbox availability service | required | Declared physical route | foreground | 1 Item(s) |

### Process: Mailbox availability service (`p_mailbox`)

#### Inputs

##### Product flows

###### Point-of-use electricity (`electricity`)

Metered electricity for lighting, electric heating and rental administration; supply voltage, mix and provider remain separately declared.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: 3.6 * E_kWh / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources:

###### Cabinet provision (`cabinet`)

One item is one serial-numbered complete cabinet with declared compartment count, dimensions, steel mass and initial locks; no parallel initial lock, key or steel input already included by its supplier dataset.

- Selected flow: Steel postal mailbox cabinet, complete mechanical-lock assembly
- Flow property / unit: Number of items / Item(s)
- Amount rule: C_equiv / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

###### Replacement lock cylinder (`lock`)

One item is one brass cylinder with declared model, mass and key inclusion; record replacement installations and reusable returns as asset-cohort events, then consume their lifecycle provision under allocation_assets. Keys supplied with it are excluded from the separate key card. Apply `inv_asset_provision` in section 8.

- Selected flow: Brass mechanical mailbox lock cylinder, replacement
- Flow property / unit: Number of items / Item(s)
- Amount rule: L_equiv / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:


###### Replacement key (`key`)

One item is one cut brass replacement key not already supplied with the cabinet or replacement cylinder. A returned reusable key is stock, not consumed waste. Apply `inv_asset_provision` in section 8.

- Selected flow: Brass mailbox key, replacement
- Flow property / unit: Number of items / Item(s)
- Amount rule: K_equiv / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:


###### Paper ledger (`paper`)

Weigh blank paper actually consumed in applications, rental ledgers and receipts; do not count mail content or customer envelopes.

- Selected flow: Uncoated wood-free paper, rental ledger
- Flow property / unit: Mass / kg
- Amount rule: Q_paper / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources:

###### Manual record writing (`pencil`)

One item is one complete declared pencil; account its consumed fraction from beginning/end usable length and issues, excluding unused stock.

- Selected flow: Wood-cased graphite pencil
- Flow property / unit: Number of items / Item(s)
- Amount rule: Q_pencil / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources:

###### Water-only cleaning (`water`)

Water for the declared water-only cleaning route and allocated sanitation; use meter volume with measured supplier density, never assume kg equals litre.

- Selected flow: Potable tap water
- Flow property / unit: Mass / kg
- Amount rule: Q_water / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources:

###### Reusable cleaning cloth provision (`cloth`)

Record lifecycle-equivalent provision of the declared pure cotton cloth on a measured dry-mass basis; reusable stock and retained moisture are excluded. Onsite washing water and electricity stay on their own cards. Apply `inv_asset_provision` in section 8.

- Selected flow: Woven cotton cleaning cloth
- Flow property / unit: Mass / kg
- Amount rule: T_equiv / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:


###### Building provision (`building`)

Area is equivalent newly provided floor area over documented service life; matched lifecycle background includes shell and fixed lighting manufacture, construction, delivery, documented fixed-lighting renewal and demolition/end-of-life treatment. It excludes operating utilities, mailbox cabinets and separately modelled replacement accessories.

- Selected flow: Postal office building provision, structural shell and fixed lighting
- Flow property / unit: Area / m2
- Amount rule: A_equiv / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources:

#### Outputs

##### Product flows

###### Accepted rental availability (`rental_service`)

One standard service product unit is one specified compartment × 3600 accepted seconds with secure retention and the declared retrieval schedule fulfilled. It can aggregate noncontiguous accepted intervals, which must remain disclosed; mail count or a full rental contract is not this output measure.

- Selected flow: Postal mailbox rental standard service unit, specified mechanical-key compartment × 3600 accepted seconds
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rental`
- Sources:

##### Waste flows

###### Discarded ledger paper (`waste_paper`)

Weigh dry discarded ledger paper, with destination, confidentiality shredding and receiver treatment documented; customer mail remains customer property.

- Selected flow: Waste rental-ledger paper for offsite treatment
- Flow property / unit: Mass / kg
- Amount rule: Original-cohort/stratum attributed generated mass in this card's declared material and wet/dry basis / N, using the section 8 waste-origin method; includes retained waste and supported eventual treatment. Custody dispatch verifies the original event and is not another generation or later-cohort burden.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wastes`
- Sources:

###### Wastewater to sewer (`wastewater`)

Measure wastewater sent to sewer at the facility gate, with receiver and water balance; treatment is linked once downstream, not a duplicate purchased treatment input.

- Selected flow: Wastewater from mailbox-facility cleaning and sanitation
- Flow property / unit: Mass / kg
- Amount rule: W_ww_class / N; W_ww_class is the class-attributed gross wet wastewater mass in kg, not its water component.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wastes`
- Sources:

###### Pencil residual waste (`waste_pencil`)

The one solid waste is the declared pencil-residue mixture of wood-cased graphite pencil stubs and collected sharpenings, with observed composition, moisture basis and a single documented receiver treatment. Record coating/binder identity within this defined composite where present; split only when composition or receiver treatment differs. Do not also count its contained wood or graphite.

- Selected flow: Wood-cased graphite pencil residues, stubs and sharpenings, one receiver treatment
- Flow property / unit: Mass / kg
- Amount rule: Original-cohort/stratum attributed generated mass in this card's declared material and wet/dry basis / N, using the section 8 waste-origin method; includes retained waste and supported eventual treatment. Custody dispatch verifies the original event and is not another generation or later-cohort burden.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wastes`
- Sources:

##### Elementary flows

###### Water vapour emitted to air (`water_vapour`)

Record only water vapour released from facility cleaning, cloth drying and identified sanitary-water operations to environmental air. This is an elementary output, not a water resource input or wastewater waste. Declare attributed operation, vapour state and air compartment; unresolved identity remains a candidate.

- Selected flow: Water vapour, emission to air
- Flow property / unit: Mass / kg
- Amount rule: E_water / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_separate` | shared facility | Subdivide direct metered loads first; physical allocation follows the general GHG Product Standard hierarchy, while the area/time equations below are this candidate PCR's declared collection method. Allocate residual building space, lighting/heating and sanitation by measured floor-area-hours of rental space over all benefiting services; administration consumables and shared staff activity by timed rental tasks over all timed tasks. Preserve full reconciliation and exclude customer/pass-through mail from material consumption. | `ghg-product-standard-2011` |
| `allocation_capacity` | mailbox class | Keep one compartment size, construction and access schedule per dataset. All standing burden assigned to that class, including vacant or unlet capacity, rented-but-unused availability, fault repair, failed activation and cancelled applications, stays in its numerator. Divide only by N of accepted contracted availability; disclose installed, rentable, rented, vacant and unavailable hours. If N=0, no normalized dataset exists. Do not shift vacant burdens to another class or ignore unsold capacity. After division by N, do not multiply by utilization or occupancy again. |  |
| `allocation_assets` | cabinet; building; lock; key; cloth | Use one coherent lifecycle model per asset cohort; its matched background product includes manufacture, delivery and final treatment without duplicate terminal exchanges. For each original reporting-year/class c, first obtain that asset same-interval shared/class responsibility w_c,a from the existing calc_shared and allocation_capacity rules, including their specified vacancy/fault responsibility. Set u_c,a=t_c,a*w_c,a and f_c,a=u_c,a/L_a using the same asset complete all-user calendar life L_a. Class responsibility enters u once; do not multiply the resulting equivalents by w again. Every life/source revision and actual retirement applies calc_capital_restatement to all original years/classes and original N, without concentrating a catch-up balance in the retirement period. A zero-output original year retains unnormalized totals, never transferred to unrelated rentals. No universal life, financial depreciation or mail-volume allocation; missing all-user/class history or complete lifecycle coverage blocks completeness. |  |
| allocation_capital_restatement | cabinet; lock; key; cloth; building | This PCR uses full restatement, not frozen historical shares or a retirement-period catch-up. All direct and supporting capital, reusable containers, installation outside the product gate and paired terminal sources follow calc_capital_restatement. Each specific activity rule fixes the driver and beneficiary shares; these are applied once. A complete asset background already including delivery/end-of-life follows the same restatement, without separate duplicate terminal exchanges. Routine component maintenance remains under its causal/period method. |  |
| `allocation_waste` | waste outputs | Use a recycled-content cut-off with no avoided virgin-material credit. Operational ledger paper, pencil residues and wastewater cross the foreground waste gate and link to transport/treatment once. Physical retirements of cabinet, building, lock, key and cotton cloth are cohort/receiver control-ledger events only, since their manufacture and end-of-life are already attributed together through allocation_assets. Do not also add retired steel/brass/cloth or demolition waste as exchanges. Lifecycle backgrounds must explicitly include all relevant disposal, recycling transport and treatment without duplicate credit. If they cannot, completion is blocked until a reviewed cohort-consistent explicit lifecycle model is supplied. |  |
| allocation_waste_origin | waste_paper; waste_pencil | Fix each ordinary solid-waste generation event to its original service cohort and stratum at generation, never at later dispatch. Directly trace the generating task first; shared generation uses the existing site/handling allocation driver over the recorded generation interval, including all customer and noncohort workloads. Preserve event ID, generation date, original shares and original reference denominator through storage and internal transfers. Acquired old waste is not new generation. Retained waste keeps its original treatment responsibility; dispatch-period service does not inherit it. For shared generation, split records at each fixed local-calendar-month boundary (68013 uses its already declared counter accounting period instead); apply the existing site task/handling driver within that exact generation interval, not the full later dispatch/cohort window. Direct event attribution takes precedence. Record site timezone before period assignment. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_rental` | `p_mailbox` | rental_service | contract_interval | box_id; size; dimensions; schedule; timezone; activation; close; fault start/end; availability evidence; refunds and reason; recipient access acceptance | Reconcile signed rental acceptance and key handover with timestamped maintenance/access records; record secure-retention and retrieval-schedule failures separately; aggregation obligations: Nonoverlapping overlap seconds per calc_hours and calc_period; count no mail-piece outputs | s; h | each event; daily state rollup | complete reporting year plus opening/closing intervals | every compartment in one declared size/access class | per reference flow | signed activation/close; access calendar; fault/repair logs; privacy-safe interval audit |
| cp_capital_restatement | p_mailbox | cabinet; lock; key; cloth; building | versioned_asset_cohort_ledger | asset/source ID; source phase and native unit; original cohort/stratum and causal parent; original reference denominator and revision; all-user actual driver by original interval; fixed beneficiary shares; complete-life driver forecast/version and supporting records; manufacture/installation quantity; terminal net residual/route and version; previously booked attributed raw B and normalized result; recalculated f/A/q and signed correction; zero-use commissioning responsibility; overlap exclusions | Join serial/source asset registers, activity meters, supplier product gates and the original result ledger; apply calc_capital_restatement on each change. Recompute using the original physical driver and all-user evidence without changing physical stocks. Reconcile old/new/correction and original denominator by source and original cohort; retain versions and calibration with the original record owner. | source-native units; original driver units; Item(s) | each acquisition/commissioning, activity, life/source revision and retirement; reconcile each original reporting period | complete asset life and all affected original cohorts | all users of the same asset configuration; original product gate and separate installation/terminal sources | per reference flow | serial/source registers; calibration; life evidence; receiver records; original-cohort results and revision chain |
| `cp_utilities` | `p_mailbox` | electricity; water; water_vapour | meter_record | meter_id; start/end; kWh; m3; density kg/m3; direct/residual pool; meter scope; allocation area-hours; evaporated water mass; isolated-operation water inputs and liquid-water outputs; retained water; stock change; wet/dry fractions; contamination/external water inputs | Read identified electrical/water meters at site boundary; subtract independently metered other functions; use supplier water density or dated density measurement; aggregation obligations: Convert once; allocate per calc_shared; retain leaks/faults and vacancy burdens Measure evaporation by gravimetric isolated-operation balances or independently instrumented vapour loss; partition water from solids in liquid outputs, and identify external water inputs. Never infer evaporation by subtracting unpartitioned gross sewer mass from potable water. Unmeasured contributions remain a blocking uncertainty rather than zero. | kWh; m3; kg/m3; kg water | monthly meter close and each scope change; each isolated-operation evaporation test, repeated on route/condition change | same full reporting year; time-align reads or document interval allocation | rental area and every beneficiary of shared pools | per reference flow | meter calibration/verification certificates; invoices; floor plans; pool balance |
| `cp_assets` | `p_mailbox` | cabinet; building; lock; key; cloth | asset_register | cohort/serial; asset object/model; counts; compartment dimensions; floor area; cloth dry mass and dry fraction method; commissioning/retirement; t; L; previous allocated fraction; remaining life; supplier manufacture/delivery/renewal/end-of-life scope; receiver route; class footprint | Inspect all cabinet, building, replacement lock/key and cloth cohort registers; verify life, remaining service fraction and matched complete lifecycle background, including disposal/recycling and building demolition. Weigh dry cloth using recorded drying/moisture method. Actual retirement weights remain control records; do not repeat background end-of-life. Apply allocation_assets/calc_capital and class/shared attribution once. | Item(s); m2; kg dry; h; fraction | opening/closing year; every installation/removal; annual life review | all asset service histories and reporting-year overlap | all attributed asset cohorts, including vacant capacity | per reference flow | asset receipts; surveyed geometry; engineer life/remaining-fraction evidence; dry-mass protocol; complete lifecycle scope and receiver records |
| `cp_materials` | `p_mailbox` | paper; pencil | stock_issue | paper dry mass; pencil model and usable fraction; opening/closing usable stock; external receipts; external unused returns; internal store returns; transfers in/out; recipient service | Weigh dry ledger paper and count complete declared pencils with usable-length fractions. Record external returns separately from internal returns already included in closing stock. Apply calc_stock then task-time class attribution; mail and customer supplies remain custodial property. | Item(s); kg; fraction | each issue/return; monthly stock close | same reporting year and opening/closing usable stocks | onsite rental administration only | per reference flow | stock counts; calibrated balances; dry-mass/usable-length method; external/internal transfer evidence; signed recipient attribution |
| `cp_wastes` | `p_mailbox` | waste outputs | gate_transfer | operational paper/pencil/wastewater material; receiver; route; gate wet/dry mass; measured moisture/drying method; sewer meter; retained water; separate asset-retirement/demolition control manifest; generation_event_id; generation_time/site; source task/cohort/stratum; original allocation shares/reference denominator; generated mass and wet/dry/composition basis; opening/closing stock by origin; internal transfer IDs and both endpoints; external dispatch; evidenced physical loss/release; receiver and destination fractions; actual/prospective route and model version; evidence/uncertainty; receipt replacement status and revision chain; gross wet wastewater mass or metered volume and same-stream density/temperature; water mass fraction; direct and shared pools; rental-class share; wastewater volume m3; same-stream same-state density kg/m3; density reference and measured temperature degrees C; temperature conversion and original-reading units | Measure segregated generated mass at the generating point and record the responsible task/interval before storage; if generation is reconstructed from a complete stock balance, document all transfers, losses and measurement uncertainty and preserve original event provenance. Apply allocation_waste_origin and calc_waste_origin. At each transfer and period close reconcile origin-labelled stocks against calibration and receiver evidence. Require supported storage/transport/treatment coverage for retained mass; later receipts replace the original event model, never create a second dispatch-period burden. Ordinary paper/pencil wastes use this origin method on a consistent measured wet/dry basis. Measure moisture or dry to the evidenced test-method constant-mass criterion. Sewer wastewater keeps its measured water balance and is not subject to the solid-waste kg formula; asset/demolition retirements remain lifecycle control records only. Apply calc_waste to distinguish transferred gross wet kg from water-component kg in the water balance; do not substitute potable-water density for wastewater density. Retain field-specific kg, m3, kg/m3 and degrees C. Preserve any other original temperature scale and its evidenced conversion, and match density to that temperature and material state. The final wastewater exchange remains gross wet kg, with its water component reconciled separately using the measured mass fraction. | kg; fraction; m3; kg/m3; °C | each transfer; monthly sewer balance; every ordinary-waste generation and monthly origin-stock reconciliation | same reporting year; carry stored waste explicitly; retain original generation ownership through eventual treatment evidence | rental-attributed gate and identified receiver | per reference flow | calibrated scales/meters; transfer/receiver manifests; moisture basis; documented water balance |
| `cp_route` | `p_mailbox` | all cards | site_route_audit | site and class; material/energy list; process evidence; outsourced scope; emission/refrigerant survey; idle states; absence evidence | Walk through rentals, mechanical key access, administration and cleaning with responsible site staff; compare procurement and service contracts against every listed card; Apply boundary_deviation and record evidence distinguishing inapplicable route changes from missing in-scope exchanges. | documented occurrence/absence; h | start of period; each change; annual reconciliation | whole reporting year | rental plus shared beneficiaries and upstream/downstream interfaces | per reference flow | signed walkthrough; photos/asset specs; procurement reconciliation; supplier inclusions; reviewed gap register |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_hours` | rental_service | b=3600 accepted compartment-seconds/Item(s); N=sum(accepted_box_seconds)/b; H=sum(accepted_box_seconds)/3600 in h. Split intervals at report boundaries and class changes. A box-second counts only when the exclusive secure retention and contract-promised access schedule are fulfilled. Accepted activated rental time counts even when unused; faulty/unavailable, pre-activation, refunded unprovided and post-close time do not. An out-of-access-calendar hour counts only if the contract still provides exclusive secure retention then; a closure during promised access or a security failure removes its measured interval, even if no customer attempted pickup. A commercial refund for an already delivered interval does not erase the physical service; record its cause. | accepted_box_seconds; start/end timestamps; fault intervals; contract access calendar | N in Item(s); H in h |  |
| `calc_inputs` | all inputs except rental_service | x_j=Q_j/N after cp_materials, cp_utilities or cp_assets yields the class-attributed total. Apply kWh*3.6 for MJ once; do not divide a supplier per-unit inventory twice. Compute Q_water=V_water*rho_water using compatible m3 and kg/m3 from measured/supplier records. | Q_j; N; meter units; rho_water | input amount per reference flow |  |
| `calc_stock` | paper; pencil | Q_j=opening usable stock + external receipts + transfers in - closing usable stock - unused returns outside the accounting scope - transfers out. Internal returns to the same store are already in closing stock and are not subtracted again; exclude transfers from external receipts. Account pencil consumption by usable fraction. Lock/key/cloth issues are asset-event records, not this material consumption formula. Investigate discarded fractions, moisture and adjustments separately. | opening/closing stock; receipts; returns; transfers; usable fractions | Q_j in each card unit |  |
| `calc_capital` | cabinet; building; lock; key; cloth | Apply allocation_assets to obtain f_c,a already containing the shared/class responsibility once. C_equiv_c=sum(n_cabinet_a*f_c,a), A_equiv_c=sum(A_a*f_c,a), L_equiv_c=sum(n_lock_a*f_c,a), K_equiv_c=sum(n_key_a*f_c,a), T_equiv_c=sum(m_drycloth_a*f_c,a). Existing C_equiv/A_equiv/L_equiv/K_equiv/T_equiv card numerators are these values for the original class c; divide each by its original N_c once, without another calc_shared allocation. Life, source and retirement changes replace original-year/class results under calc_capital_restatement. Cabinet background includes initial locks/keys; separate lock/key cards include replacements only and exclude keys supplied with replacement cylinders. Each background includes its own end-of-life; do not add duplicate foreground asset-waste flows. | cp_assets; cp_capital_restatement; calc_shared; allocation_capacity | C_equiv/L_equiv/K_equiv in Item(s); A_equiv in m2; T_equiv in kg |  |
| calc_capital_restatement | cabinet; lock; key; cloth; building | Within this entry's declared applies_to scope, apply the complete ordered rule group: calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | cp_capital_restatement; calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version | source-native unit per original cohort N_c; separate physical controls |  |
| `calc_shared` | electricity; water; building; administration | For each shared pool, Q_class=Q_direct + Q_residual*s, where s=rental area-hours/all benefiting area-hours for standing facility burdens, or rental timed task duration/all timed task duration for administration. For shared cabinet banks use measured occupied footprint by size class over total class footprints, including vacant compartments. Shares sum to 1 across all beneficiaries; no economic allocation is permitted in this route. Capital equivalents use this rule original class shares once inside allocation_assets/calc_capital; resulting C_equiv/A_equiv/L_equiv/K_equiv/T_equiv must not enter this allocation again. | meter pools; direct loads; area-hours; task times; class footprint | class-attributed Q_j |  |
| `calc_waste` | waste outputs | Use paper and pencil results from calc_waste_origin already divided by original N; do not divide or use later dispatch mass again. For each sewer-gate stream, W_ww_j is measured gross wet kg or measured m3 times evidenced same-state wastewater density. Under calc_shared set W_ww_class to direct attributed gross wet kg plus shared gross wet kg times the applicable rental-class shares; q_ww=W_ww_class/N once. In the isolated-operation water balance use W_ww_j times the measured/evidenced water mass fraction, never gross wet wastewater or its solutes as another water-component mass. Inflow is not discharge; unknown density, fraction or fate remains unresolved. Asset retirements remain control records only. | cp_wastes; calc_shared; calc_water_emission; calc_waste_origin | gross wet wastewater kg/N; separate water-component kg ledger |  |
| calc_waste_origin | waste_paper; waste_pencil | For each named ordinary solid-waste stream r and generation event j, A_c,r = sum_j(G_j,r*s_c,j), then q_c,r=A_c,r/original_reference_count once. G is measured generated mass, not dispatch mass. Reconcile each material and original event: closing = opening + generation + internal_in - internal_out - external_dispatch - evidenced_physical_loss. Record actual moisture/composition changes and mutually exclusive losses/releases; no invented residual and no full residual mass plus the same released constituent. Internal transfers preserve origin and do not create another exchange. Model the original cohort waste output and its required storage/transport/final treatment even while physically retained, using actual compatible receiver evidence or an explicitly evidenced material/composition/location-matched prospective route with uncertainty. Destination fractions close to one and enter once; no default recycling or zero treatment for retained mass. Unsupported fate stays incomplete. Keep observed custody stock/dispatch as a control ledger, not another inventory addition. Later receiver evidence replaces the same event prospective model and recomputes the original cohort with its original denominator; never add that mass/treatment to a later cohort. Include every necessary lifecycle leg once through a scope crosswalk; exclude site/storage energy and handling already included by site/service inventories. Capital terminal-waste lifetime fractions and wastewater balances retain their separate rules. original_reference_count=N for its original cohort/stratum. The generated-waste exchange is at the generation gate. Its linked complete waste-management inventory takes one kg on that same generated-mass basis through storage and all subsequent fates; final-treatment input is only the compatible measured/evidenced forecast residual after storage losses/moisture conversion, not the full original kg plus separate losses. Explicit storage releases replace the same included release in that linked inventory; a storage/handling operation already in site/service pools is removed from the waste link by a recorded scope crosswalk, never counted twice. | cp_wastes; allocation_waste_origin | kg per original reference flow; origin stock/model ledger |  |
| `calc_period` | all inventory | Use one complete consecutive reporting year with daily interval records and monthly close; include opening/closing rental, stock and asset states. Carry contracts across boundaries by overlap seconds only; relets and substitutions cannot overlap for one compartment. Reconcile cancellations, refunds, wait lists, lost keys, refused applications, faults and repairs without creating accepted hours. | year boundaries; interval ledger; monthly reconciliations | nonoverlapping complete period totals |  |
| `calc_water_emission` | water_vapour | E_water=sum(operation water inputs + verified external water inputs - liquid water outputs - carried water - water stock increase), or directly measured vapour loss, for a documented isolated operation. All terms are kg of water on the same operation/time basis; quantify liquid water fractions rather than subtracting gross wastewater mass. Cover every identified evaporative operation and attribute shared activity once. Negative balance or an unknown term is an unresolved measurement gap, never clamped or filled with zero. | isolated-operation water masses; measured water fractions; stock and retained water; direct vapour measurement | E_water in kg; E_water/N per reference flow |  |
| calc_capital_restatement_driver_revision | cabinet; lock; key; cloth; building | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For every asset a retain versioned all-user activity and each original beneficiary cohort/stratum c, including failed/empty work under its existing fixed responsibility rule. u_c,a is its attributed actual driver to date; U_a is evidenced complete-life all-user driver (actual to date plus supported remaining forecast), in the identical configuration and unit. U_a must be positive and at least the actual all-user total. Set f_c,a=u_c,a/U_a; do not use remaining activity as U_a. On every life, activity, beneficiary, source-quantity or terminal-route revision recompute every affected original cohort, including previously reported cohorts; do not preserve an old fraction while applying a new lifetime denominator only to later cohorts. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_source_correction | cabinet; lock; key; cloth; building | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For each independent source s in its native unit, A_s,c,new=Q_s,new*f_c,a. Q_s,new is its current evidenced full manufacture/installation source quantity before lifetime allocation, not a remaining unallocated balance, or matched net terminal residual/complete lifecycle source; it is not a previously allocated quantity. Retain B_s,c, the previously booked attributed raw amount, and its original normalized result/version; delta_A_s,c=A_s,c,new-B_s,c. A newly evidenced terminal source has B=0, while a correction to an existing source replaces that same source ID. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_normalization | cabinet; lock; key; cloth; building | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Recompute q_s,c=A_s,c,new/N_c using that original cohort current verified reference denominator N_c; if N_c itself was corrected, replace the old result rather than adding delta_A/new_N to a result based on old_N. Sum source contributions only after removing documented overlap. Record positive/negative result corrections, never negative physical transfers, substitution credits or another current-period whole-asset purchase. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_retirement | cabinet; lock; key; cloth; building | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. At final retirement replace U_a by complete actual all-user driver, recompute all f and all source quantities; for positive total activity all beneficiary fractions sum to one, including non-study beneficiaries. Measured terminal net residual is not reduced again by historical removals. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_zero_activity | cabinet; lock; key; cloth; building | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Zero-output events retain their existing causal parent cohort and its original denominator; never seek an unrelated positive-output period. If that parent has no positive N_c, retain attributed raw totals and an unresolved normalized result. With zero lifetime activity, assign only to an evidenced sole commissioning responsibility under the same original-cohort rule; otherwise retain the unallocated source and block completeness. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_shared_driver_controls | cabinet; lock; key; cloth; building | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Keep asset manufacture, installation and terminal burden on the same revised f, while gross stock, transfers and retirements remain separate physical control records. For a calendar-time asset, u is its elapsed service-capacity time assigned once to each original class/period by the existing shared/class rule, including the prescribed vacancy/failure responsibility; U covers that same all-user calendar capacity. Do not apply the class share a second time to q. Unknown history, unsupported life/endpoint or missing original denominators blocks completeness. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_background_version | cabinet; lock; key; cloth; building | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. If a supply-background or treatment-model version changes without a physical quantity change, replace the corresponding linked inventory and result for all affected original cohorts; a zero physical delta_A does not preserve the old model. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all inventory | Keep unresolved UUIDs and support records explicitly pending; a direct official row must match object, condition, property, unit and receiver/compartment before binding. | official direct response and hash-bound receipt |
| `quality_measurement` | all protocols | Retain instrument identity, calibration range/date, unit conversions, original interval records and attribution; estimates require documented method, uncertainty and owner, never invented defaults. | meter/scale certificates; records; estimate justification |
| `quality_completeness` | all inventory | Reconcile N, total installed hours, failures, vacant capacity, stock and waste balances monthly; a documented absence may be not_applicable, unknown occurrence is incomplete.  Apply boundary_deviation to route departures and keep missing in-scope rows incomplete. | cp_rental; cp_materials; cp_wastes; cp_route |
| quality_waste_origin | waste_paper; waste_pencil | For every ordinary solid-waste stream verify generation responsibility, original cohort/stratum/denominator, origin-labelled stock balance, supported actual or prospective complete treatment and later-receipt replacement. Unknown origin/fate/physical loss remains an explicit gap; future dispatch alone cannot close or reassign it. Keep wastewater and amortized terminal-asset treatment on their separate methods. | generation/stock/transfer ledgers; supported route models; original-cohort receipt replacements |
| `quality_semantics` | all normative rules | All boundary, allocation, collection and calculation obligations must be machine-projected and bilingual aligned; check conditions and negatives, not just IDs and hashes. | bilingual semantic comparison; generated guidance readback |
| inv_asset_provision | lock; key; cloth | The amount is lifecycle-equivalent consumed provision under allocation_assets, including matched end-of-life, rather than purchased or retired count/mass in this year. | Existing collection protocols and evidence of each listed inventory row. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | all cards | Every used UUID requires direct official name/type/property/unit evidence; unresolved names are candidates, not verified identities. Bind the reference standard service flow identity and all unresolved input/waste identities and their support before release; no lifecycle or methodology approval is implied by structural checks. |  |
| `validate_scope` | all datasets | Reject an undeclared size/access schedule, unsupported route, unresolved material identity, unknown denominator, unbalanced allocation or double-counted upstream service. A broader class label is not evidence that this narrower service applies to all CPC 68019. | `un-cpc3-68019` |
| `validate_completeness` | all quantities | N must be positive and finite. Keep accepted, excluded downtime, vacant and other state hours mutually exclusive with a complete installed-hours reconciliation. Missing quantities, unknown identities, uncalibrated meters and unsupported lifetime estimates remain explicit gaps; never use zero or illustrative rates as defaults. Test A-period generated retained waste and B-period dispatch: original A responsibility and denominator persist, and actual evidence replaces that same event model without another B burden. |  |
| `validate_projection` | bilingual methodology | Check identical ordered row/rule/protocol/source IDs, directions, types, UUIDs, units, formulas, conditions, prohibitions and obligations in English and Chinese. Project all normative tables and card scopes into generated structured guidance; a fingerprint alone does not demonstrate semantic completeness. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_capital_restatement | cabinet; lock; key; cloth; building | Check original cohorts/denominators, all-user driver, source versions, booked amounts and restatement corrections under calc_capital_restatement. Reject frozen old history with only future-denominator changes, retirement-balance transfer to unrelated current output, and negative physical exchanges. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Mailbox rental with matched size/access class, route, year and boundary |
| excluded_use | Claims of complete CPC 68019 coverage; proxy for completed transport, counter handling or poste restante; scientific or publication approval claims |
| required_metadata | site; compartment dimensions and count; steel cabinet specification; access calendar and timezone; rental start/end acceptance; physical-key paper-admin route; capacity/vacancy/fault hours; reporting year; asset life basis; supplier and receiver boundaries; ordinary-waste generation origin, original shares/denominator, retained stocks and treatment revision chain |
| required_quality_disclosure | Unresolved identity/lifetime; measurement uncertainty; vacancy/faults; route applicability; allocation and full balances; bilingual review state |
| update_trigger | Route/size/access/supplier or receiver boundary change; new year; identity resolution; life reassessment; later ordinary-waste receipts/fate or generation correction update the original event/cohort model |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-68019` | official_guidance | UNSD CPC Version 3.0, 68019: https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/68019 | Classification inclusions/exclusions and narrower scope; no LCA quantities |
| `usps-pobox` | official_guidance | USPS Rent a PO Box: https://www.usps.com/manage/po-boxes.htm | Official example of physical locked boxes, sizes, key collection, rental periods and access schedules; no universal size/tariff/consumption defaults |
| `ghg-product-standard-2011` | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, printed p.63: https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General hierarchy of subdivision then physical relationships; no service utilization, lifetime or area/time coefficients |
